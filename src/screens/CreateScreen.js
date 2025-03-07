import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a new Blog</Text>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content:</Text>

      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.input}
      />

      <Button
        title="Add Blog Post"
        onPress={() => console.log({ title, content })}
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

export default CreateScreen;
