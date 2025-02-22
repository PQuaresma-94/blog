import React, { Children } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPost = [
    { title: "Blog Post #1" },
    { title: "Blog Post #2" },
    { title: "Blog Post #3" },
  ];

  return (
    <BlogContext.Provider value={blogPost}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
