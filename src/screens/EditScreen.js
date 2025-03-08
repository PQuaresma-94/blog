import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);

  const BlogPost = state.find(
    (BlogPost) => BlogPost.id === navigation.getParam("id")
  );

  const [title, setTitle] = useState(BlogPost.title);
  const [content, setContent] = useState(BlogPost.content);

  const { addBlogPost } = useContext(BlogContext);

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

      <Button
        title="Add Blog Post"
        onPress={() =>
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          })
        }
      />
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

export default EditScreen;
