import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);

  const BlogPost = state.find(
    (BlogPost) => BlogPost.id === navigation.getParam("id")
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{BlogPost.title}</Text>
      <Text style={styles.content}>{BlogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
  },
});

export default ShowScreen;
