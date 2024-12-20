import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from "react-native";

export default function Index() {
  const [text, onChangeText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        title="Add"
        style={styles.button}
        onPress={(text) => {
          <Text>{text}</Text>;
        }}
      />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
