import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BlogPostForm = ({
  initialValues = { title: "", content: "" },
  onSubmit,
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a new Blog</Text>
      <Text style={styles.label}>Enter New Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter New Content:</Text>

      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.input}
      />

      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
  },
  input: {
    fontSize: 18,
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    marginVertical: 5,
  },
});

export default BlogPostForm;
