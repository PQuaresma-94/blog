import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Blog Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <Feather style={styles.icon} name="trash" />
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
