import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);


const PostCRUD = React.lazy(() => import("./pages/CRUD/PostCRUD"));
const PostDetail = React.lazy(() => import("./pages/postDetail/PostDetail")); 

const App = () => {
  return (
    <Router>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" element={<PostCRUD />} />
          <Route path="/post/:id" element={<PostDetail />} /> {/* Thêm route cho PostDetail */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
