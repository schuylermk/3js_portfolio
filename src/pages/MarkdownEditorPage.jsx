import MarkdownIt from "markdown-it";
import React, { useState } from "react";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { db } from "../firebase"; // Adjust the import path as necessary

const mdParser = new MarkdownIt();

const MarkdownEditorPage = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = ({ html, text }) => {
    setContent(text);
  };

  const handleSave = async () => {
    try {
      await db.collection("blogPosts").add({
        title: "New Post",
        content,
        date: new Date().toISOString(),
      });
      alert("Post saved successfully!");
    } catch (error) {
      console.error("Error saving post: ", error);
      alert("Failed to save post.");
    }
  };

  return (
    <div>
      <h1>Markdown Editor</h1>
      <MdEditor
        value={content}
        style={{ height: "500px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
      <button onClick={handleSave}>Save Post</button>
    </div>
  );
};

export default MarkdownEditorPage;
