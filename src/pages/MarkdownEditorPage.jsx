import { addDoc, collection } from "firebase/firestore"; // Import necessary functions from Firestore
import MarkdownIt from "markdown-it";
import Markdown from "markdown-to-jsx";
import React, { useState } from "react";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { db } from "../firebase";
import SectionWrapper from "../hoc/SectionWrapper";

const mdParser = new MarkdownIt();

const MarkdownEditorPage = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [savedPost, setSavedPost] = useState(null);

  const handleEditorChange = ({ html, text }) => {
    setContent(text);
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

  return (
    <div>
      <h1>Markdown Editor</h1>

      <div className="mb-4">
        <label htmlFor="title">Title:</label>

        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded border px-3 py-2"
        />
      </div>

      <MdEditor
        value={content}
        style={{ height: "500px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />

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
