import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./Blogtxt.css";

const Blogtxt = ({ onSave }) => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [category, setCategory] = useState("Tech");
  const [coverImage, setCoverImage] = useState(null);
  const [Error, setError] = useState("");
  const [Submit, setSubmit] = useState(false);

  const HandleSaving = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError("⚠️ Please fill in both Title and Content before saving.");
      return;
    }

    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 1000);

    setError("");
    // prepare data
    const blogData = {
      title,
      content,
      category,
      excerpt: content.slice(0, 150),
      coverImage, // right now it's a File object
    };

    onSave(blogData);

    // reset form
    settitle("");
    setcontent("");
    setCategory("Tech");
    setCoverImage(null);

    e.target.reset();
  };

  const HandleDelete = () => {
    setCoverImage(null);
  };

  // for previewing uploaded image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setCoverImage(reader.result); // Base64 string for Persists the image
      };
    }
  };

  return (
    <div>
      <form className="blogedit" onSubmit={HandleSaving}>
        {Error && <div className="err-message">{Error}</div>}

        <input
          type="text"
          className="title"
          onChange={(e) => settitle(e.target.value)}
          placeholder="Write Title Here..."
          value={title}
        />

        <textarea
          className="content"
          onChange={(s) => setcontent(s.target.value)}
          placeholder="Write Content Here..."
          value={content}
        />

        {/* Category Dropdown */}
        <select
          className="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Tech">Tech</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
          <option value="Education">Education</option>
        </select>

        {/* Cover Image Upload */}
        <input
          type="file"
          // Accepts file type in e.target.files(array)
          accept="image/*"
          // accept attribute "image/*" restricts to choose any image extension and no .exe,etc
          onChange={handleImageChange}
        />

        {/* Image Preview */}
        {coverImage && (
          <div className="image-preview">
            <img src={coverImage} alt="Cover Preview" />
            <div className="Deletefuncn" onClick={HandleDelete}>
              <RxCross2 />
            </div>
          </div>
        )}

        <button>Submit</button>
      </form>
      {Submit && <div className="blog-posted">Posted!</div>}
    </div>
  );
};

export default Blogtxt;
