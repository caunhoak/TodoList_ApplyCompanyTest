import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
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
      <View style={styles.topBannerView}>
        <Text style={styles.bannerText} category="h1">
          Login
        </Text>
        <Text style={styles.bannerSubText} category="c2">
          {" "}
          ToDo List App{" "}
        </Text>
      </View>
      <View style={styles.spacer} />
      <View style={styles.formInputView}>
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
      </View>
      <View style={styles.formButtonView}>
        <Button style={styles.button} onPress={handleLogin}>
          Login
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBannerView: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1565c0",
  },
  spacer: {
    height: "10%",
  },
  bannerText: {
    color: "white",
    fontWeight: "bold",
  },
  bannerSubText: {
    color: "white",
    marginTop: 10,
  },
  formInputView: {
    height: "40%",
    padding: 20,
  },
  input: {
    marginVertical: 8,
  },
  formButtonView: {
    height: "20%",
    padding: 20,
  },
  button: {
    borderRadius: 8,
    height: 60,
  },
});

export default LoginScreen;
