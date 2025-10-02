import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Blogpage.css";

const Blogpage = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <h2>Post not found</h2>;

  return (
    <div className="page-container">
      {post.coverImage && (
        <img src={post.coverImage} alt={post.title} className="page-cover" />
      )}

      <div className="pageContents">
        <h1>{post.title}</h1>
        <div className="page-category">{post.category.toUpperCase()}</div>
        <div className="page-content">{post.content}</div>
      </div>
      <div className="page-footers">
        <p className="date-time">
          📅 Published on {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <Link to="/" className="page-back">
          ← Back to Posts
        </Link>
      </div>
    </div>
  );
};

export default Blogpage;
