import React from "react";
import { Button, Layout, Text, Avatar } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate("Logout");
  };

  return (
    <Layout style={styles.container}>
      <Avatar
        size="giant"
        source={require("../images/avt.jpg")}
        style={styles.avatar}
      />
      <Text category="h1">Nguyễn Duy Tân</Text>
      <Text category="s1">tanndgcd191158@fpt.edu.vn</Text>
      <Button style={styles.button} onPress={handleLogout}>
        Logout
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    margin: 8,
  },
  button: {
    marginTop: 16,
  },
});

export default ProfileScreen;
