import React from "react";
import { useLocation } from "react-router-dom";
import './PostDetail.css';

const PostDetail = () => {
  const location = useLocation();
  const post = location.state?.post; // Lấy thông tin bài viết từ state

  if (!post) {
    return <p>Bài viết không tồn tại!</p>;
  }

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="meta">
        <p>Ngày đăng: {post.publish_at.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default PostDetail;
