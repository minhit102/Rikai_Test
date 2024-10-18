import React, { useState, useEffect } from "react";
import './PostCRUD.css'; 
import { Link } from "react-router-dom";

const PostCRUD = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [newPost, setNewPost] = useState({
    id: null,
    title: "",
    content: "",
    publish_at: new Date(),
  });
  const [sortOrder, setSortOrder] = useState("NameAsc"); // State để quản lý thứ tự sắp xếp

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      const postsArray = JSON.parse(savedPosts);
      const parsedPosts = postsArray.map(post => ({
        ...post,
        publish_at: new Date(post.publish_at) 
      }));
      setPosts(parsedPosts);
    }
  }, []);

  const saveToLocalStorage = (postsArray) => {
    localStorage.setItem("posts", JSON.stringify(postsArray));
  };

  const addPost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    saveToLocalStorage(updatedPosts);
  };

  const deletePost = (id) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa bài viết này?");
    if (confirmDelete) {
      const updatedPosts = posts.filter((post) => post.id !== id);
      setPosts(updatedPosts);
      saveToLocalStorage(updatedPosts);
    }
  };

  const updatePost = (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
    saveToLocalStorage(updatedPosts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      if (editingPost) {
        const updatedPost = { ...editingPost, ...newPost };
        updatePost(updatedPost);
        setEditingPost(null); 
      } else {
        const postToAdd = { ...newPost, id: posts.length + 1, publish_at: new Date() };
        addPost(postToAdd);
      }
      setNewPost({ id: null, title: "", content: "", publish_at: new Date() });
    }
  };

  // Hàm để sắp xếp bài viết
  const sortPosts = (postsArray) => {
    return [...postsArray].sort((a, b) => {
      return sortOrder === "NameAsc" ? a.publish_at - b.publish_at : b.publish_at - a.publish_at;
    });
  };

  // Hàm xử lý khi thay đổi lựa chọn sắp xếp
  const handleSort = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="container">
      <h2>Quản lý bài viết</h2>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            placeholder="Tiêu đề bài viết"
            required
          />
          <textarea
            name="content"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            placeholder="Nội dung bài viết"
            rows="4"
            required
          />
          <button type="submit">{editingPost ? "Cập nhật bài viết" : "Thêm bài viết"}</button>
        </form>
      </div>

      <div className="container-sort">
        <label htmlFor="selectSort">Sắp xếp theo:</label>
        <select id="selectSort" className="selectSort" onChange={handleSort}>
          <option value="NameAsc">Mới nhất</option>
          <option value="NameDsc">Lâu nhất</option>
        </select>
      </div>

      <ul className="post-list">
        {sortPosts(posts).map((post) => (
          <li key={post.id} className="post-item">
            <Link to={`/post/${post.id}`} state={{ post }}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.content.length > 100 ? post.content.substring(0, 100) + "..." : post.content}</p>
            <p>Ngày đăng: {post.publish_at.toLocaleDateString()}</p>
            <div className="actions">
              <button className="edit-btn" onClick={() => {
                setNewPost({ ...post });
                setEditingPost(post);
              }}>
                Sửa
              </button>
              <button className="delete-btn" onClick={() => deletePost(post.id)}>
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostCRUD;
