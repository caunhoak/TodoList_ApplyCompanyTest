import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { Button, Input, Layout, Text } from "@ui-kitten/components";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "abc@gmail.com" && password === "123456") {
      Alert.alert("Success", "Login successful!");
      navigation.navigate("ToDoList");
    } else {
      Alert.alert("Error", "Invalid email or password!");
    }
  };

  return (
    <Layout style={styles.container}>
      <Text category="h1">Login</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Input
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button onPress={handleLogin}>Login</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    marginVertical: 8,
  },
});

export default LoginScreen;
