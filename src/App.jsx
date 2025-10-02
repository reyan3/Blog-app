import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Help from "./components/Help";
import About from "./components/About";
import Bloglist from "./components/Bloglist";
import Blogpage from "./components/Blogpage";
import Blogtxt from "./components/Blogtxt";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [posts, setposts] = useState([]);
  const [Delete, setDelete] = useState(false);

  const HandleDel = (id) => {
    setDelete(true);
    setTimeout(() => {
      setDelete(false);
    }, 1000);
    setposts(
      posts.filter((p) => {
        return p.id !== id;
      })
    );
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("posts"));
    if (saved) setposts(saved);
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }, [posts]);

  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Bloglist posts={posts} OnDel={HandleDel} Delete={Delete} />
              }
            />
            <Route
              path="/create"
              element={
                <Blogtxt
                  onSave={(post) =>
                    setposts([
                      {
                        ...post,
                        id: uuidv4(),
                        createdAt: new Date().toISOString(),
                      },
                      ...posts,
                    ])
                  }
                />
              }
            />
            <Route path="/post/:id" element={<Blogpage posts={posts} />} />
            <Route path="/help" element={<Help />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
