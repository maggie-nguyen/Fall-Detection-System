import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Login = ({ onLogin, onNavigateToSignup }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/HumanFall.png")} 
        style={styles.logo}
      />

      <Text style={styles.title}>Fall Detection</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#9e9e9e"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#9e9e9e"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don't have an account?{" "}
        <Text style={styles.signupLink} onPress={onNavigateToSignup}>
          Sign up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f1f6",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 87,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000",
    marginBottom: 40,
    fontFamily: "SF Pro Rounded",
  },
  input: {
    width: "60%",
    height: 50,
    backgroundColor: "#fff",
    borderColor: "#eaeaec",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: "60%",
    height: 45,
    backgroundColor: "#eaeaec",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SF Pro Rounded",
  },
  signupText: {
    marginTop: 20,
    color: "#9e9e9e",
    fontSize: 14,
  },
  signupLink: {
    color: "#0c77e3",
    fontWeight: "600",
  },
});

export default Login;
