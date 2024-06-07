import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const LogoutScreen = ({ navigation }) => {
  const handleConfirmLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <Layout style={styles.container}>
      <Text category="h1">You have logged out.</Text>
      <Button onPress={handleConfirmLogout}>Login Again</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export default LogoutScreen;
