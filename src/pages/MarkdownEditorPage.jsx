import {
  AdmonitionDirectiveDescriptor,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  diffSourcePlugin,
  DiffSourceToggleWrapper,
  directivesPlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  InsertImage,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
  Separator,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { addDoc, collection } from "firebase/firestore";
import Markdown from "markdown-to-jsx";
import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { db } from "../firebase";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";

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

Modal.setAppElement("#root");

const MarkdownEditorPage = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [savedPost, setSavedPost] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isEditorFocused, setIsEditorFocused] = useState(false);
  const editorRef = useRef(null);

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "80%",
      maxHeight: "80vh",
      overflow: "auto",
      backgroundColor: "#1d1836",
      borderRadius: "8px",
      padding: "20px",
      border: "1px solid #2e2b52",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  useEffect(() => {
    console.log("Content changed:", content);
  }, [content]);

  useEffect(() => {
    const editorElement = editorRef.current?.querySelector(
      '[contenteditable="true"]',
    );
    if (editorElement) {
      const handleFocus = () => setIsEditorFocused(true);
      const handleBlur = () => setIsEditorFocused(false);

      editorElement.addEventListener("focus", handleFocus);
      editorElement.addEventListener("blur", handleBlur);

      return () => {
        editorElement.removeEventListener("focus", handleFocus);
        editorElement.removeEventListener("blur", handleBlur);
      };
    }
  }, []); // Empty dependency array since we only want to set this up once

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

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="text-white">
      <h1 className={`${styles.sectionHeadText} mb-8`}>Markdown Editor</h1>
      <label className="mb-8 flex flex-col gap-2 rounded-lg p-2 font-medium text-white">
        Blog Title
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter post title..."
          className="w-full rounded bg-tertiary p-4 text-white outline-none focus:ring-2 focus:ring-violet-500"
        />
      </label>
      <ErrorBoundary>
        <label className="flex flex-col gap-2 font-medium text-white">
          Blog Content
          <div
            ref={editorRef}
            className="rounded-lg bg-tertiary p-2 focus-within:ring-2 focus-within:ring-violet-500"
          >
            <MDXEditor
              contentEditableClassName={`
                ${styles.mdEditor}
                ${styles.mdEditorTypography}
                ${styles.mdEditorUI}
                ${styles.mdEditorSpacing}
              `}
              markdown={content}
              onChange={handleEditorChange}
              placeholder={
                !isEditorFocused && !content ? "Start writing your post..." : ""
              }
              plugins={[
                toolbarPlugin({
                  toolbarContents: () => (
                    <>
                      <DiffSourceToggleWrapper>
                        <UndoRedo />
                        <BoldItalicUnderlineToggles />
                        <ListsToggle />
                        <Separator />
                        <BlockTypeSelect />
                        <CreateLink />
                        <InsertImage />
                        <Separator />
                      </DiffSourceToggleWrapper>
                    </>
                  ),
                }),
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                linkPlugin(),
                linkDialogPlugin(),
                imagePlugin(),
                tablePlugin(),
                thematicBreakPlugin(),
                frontmatterPlugin(),
                directivesPlugin({
                  directiveDescriptors: [AdmonitionDirectiveDescriptor],
                }),
                diffSourcePlugin({
                  viewMode: "rich-text",
                  diffMarkdown: "boo",
                }),
                markdownShortcutPlugin(),
              ]}
            />
          </div>
        </label>
      </ErrorBoundary>
      <div className="mt-4 flex gap-4">
        <button
          onClick={handleSave}
          className="rounded bg-violet-500 px-4 py-2 text-white"
        >
          Save Post
        </button>
        <button
          onClick={() => setShowPreview(true)}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Preview Post
        </button>
      </div>

      <Modal
        isOpen={showPreview}
        onRequestClose={() => setShowPreview(false)}
        style={modalStyles}
        contentLabel="Preview Post"
      >
        <div className="flex flex-col text-white">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Preview</h2>
            <button
              onClick={() => setShowPreview(false)}
              className="rounded bg-violet-500 px-4 py-2 text-white transition-colors hover:bg-violet-600"
            >
              Close
            </button>
          </div>
          <div className="prose prose-invert max-w-none">
            <Markdown
              options={{
                overrides: {
                  h1: {
                    props: {
                      className: "text-3xl font-bold mb-4 text-white",
                    },
                  },
                  h2: {
                    props: {
                      className: "text-2xl font-bold mb-3 text-white",
                    },
                  },
                  p: {
                    props: {
                      className: "mb-4 text-gray-200",
                    },
                  },
                  a: {
                    props: {
                      className: "text-violet-400 hover:text-violet-300",
                    },
                  },
                  ul: {
                    props: {
                      className: "list-disc pl-5 mb-4 text-gray-200",
                    },
                  },
                  ol: {
                    props: {
                      className: "list-decimal pl-5 mb-4 text-gray-200",
                    },
                  },
                  code: {
                    props: {
                      className: "bg-gray-800 rounded px-1 text-gray-200",
                    },
                  },
                  pre: {
                    props: {
                      className: "bg-gray-800 rounded p-4 mb-4 overflow-x-auto",
                    },
                  },
                },
              }}
            >
              {content}
            </Markdown>
          </div>
        </div>
      </Modal>

      {savedPost && (
        <div className="mt-8 rounded bg-tertiary p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">{savedPost.title}</h2>
            <span className="text-sm text-secondary">
              {formatDate(savedPost.date)}
            </span>
          </div>
          <div className="prose prose-invert max-w-none">
            <Markdown>{savedPost.content}</Markdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(MarkdownEditorPage, "editor");
