import React from "react";
import { Link } from "react-router-dom";
import "./Bloglist.css";

const Bloglist = ({ posts, OnDel , Delete }) => {
  return (
    <div>
      {posts && posts.length > 0 ? (
        posts.map((p) => {
          return (
            <div className="posts-container" key={p.id}>
              {p.coverImage ? (
                <img src={p.coverImage} alt="Coverimage" className="list-img" />
              ) : (
                <img className="noimg" src="/Noimg.png" alt="Noimg" />
              )}
              <h1>{p.title.toUpperCase()}</h1>
              <p className="list-category">{p.category}</p>
              <div className="list-excerpt">{p.excerpt}...</div>
              <div className="btn-s">
                <Link to={`/post/${p.id}`}>
                  <button className="list-btn">Read more...</button>
                </Link>
                <button className="list-delete" onClick={() => OnDel(p.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="No-posts">
          <img src="/noposts.png" />
        </div>
      )}
      {Delete && <div className="delete-post">Deleted!</div>}
    </div>
  );
};

export default Bloglist;
