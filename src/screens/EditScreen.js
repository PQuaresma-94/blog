import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(BlogContext);

  const BlogPost = state.find((BlogPost) => BlogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: BlogPost.title, content: BlogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
