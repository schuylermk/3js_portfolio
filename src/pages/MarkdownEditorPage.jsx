import {
  MDXEditor,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { addDoc, collection } from "firebase/firestore";
import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import SectionWrapper from "../hoc/SectionWrapper";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by Error Boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong in the Markdown Editor component.</h2>;
    }

    return this.props.children;
  }
}

const MarkdownEditorPage = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [savedPost, setSavedPost] = useState(null);

  useEffect(() => {
    console.log("Content changed:", content);
  }, [content]);

  const handleEditorChange = (newContent) => {
    setContent(newContent || "");
  };

  const handleSave = async () => {
    console.log("handleSave function called");

    try {
      // Log the db object to ensure it's correctly initialized
      console.log("Firestore db object:", db);

      // Create a reference to the "Snoop Blog" collection
      const newCollection = collection(db, "Snoop Blog");
      console.log("Collection reference:", newCollection);

      // Log the data to be saved
      const postData = {
        title: title || "My New Blog Post", // Use the state variable or a default value
        content: content || "This is the content of my blog post.", // Use the state variable or a default value
        date: new Date().toISOString(),
      };
      console.log("Data to be saved:", postData);

      // Add a new document to the collection
      await addDoc(newCollection, postData);
      console.log("Document added to collection");

      alert("Post saved successfully!");
      setTitle(""); // Clear the title input after saving
      setContent(""); // Clear the editor content after saving
      setSavedPost(postData); // Set the saved post to render it
    } catch (error) {
      console.error("Error saving post:", error);
      alert("Failed to save post.");
    }
  };

  const initialMarkdown = content ?? "";
  const trimmedMarkdown = true ? initialMarkdown.trim() : initialMarkdown;

  return (
    <div>
      <h1>Markdown Editor</h1>
      <ErrorBoundary>
        <MDXEditor
          plugins={[
            toolbarPlugin(),
            listsPlugin(),
            quotePlugin(),
            headingsPlugin({ allowedHeadingLevels: [1, 2, 3] }),
            linkPlugin(),
            linkDialogPlugin(),
            imagePlugin({
              imageAutocompleteSuggestions: [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
              ],
              imageUploadHandler: async () =>
                Promise.resolve("https://picsum.photos/200/300"),
            }),
            tablePlugin(),
            thematicBreakPlugin(),
            frontmatterPlugin(),
            codeBlockPlugin({ defaultCodeBlockLanguage: "" }),
            codeMirrorPlugin({
              codeBlockLanguages: {
                js: "JavaScript",
                css: "CSS",
                txt: "Plain Text",
                tsx: "TypeScript",
                "": "Unspecified",
              },
            }),
            diffSourcePlugin({ viewMode: "rich-text", diffMarkdown: "boo" }),
            markdownShortcutPlugin(),
          ]}
          markdown={trimmedMarkdown} // Ensure initialMarkdown is always defined
          onChange={handleEditorChange}
        />
      </ErrorBoundary>
      <button
        onClick={handleSave}
        className="mt-4 rounded bg-violet-500 px-4 py-2 text-white"
      >
        Save Post
      </button>
      {savedPost && (
        <div className="mt-8">
          <h2>{savedPost.title}</h2>
          <Markdown>{savedPost.content}</Markdown>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(MarkdownEditorPage, "editor");
