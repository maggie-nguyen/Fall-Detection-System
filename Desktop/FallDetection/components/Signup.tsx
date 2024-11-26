import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const Signup = ({ onSignup, onNavigateToLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    dob: "",
    gender: "",
    profilePhoto: null,
  });

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setFormData({ ...formData, profilePhoto: result.assets[0].uri });
    }
  };

  const handleSignup = () => {
    if (
      !formData.username ||
      !formData.password ||
      !formData.name ||
      !formData.dob ||
      !formData.gender
    ) {
      Alert.alert("Error", "Please fill in all fields!");
      return;
    }
    onSignup();
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={handleChoosePhoto} style={styles.photoContainer}>
        {formData.profilePhoto ? (
          <Image source={{ uri: formData.profilePhoto }} style={styles.photo} />
        ) : (
          <View style={styles.photoPlaceholder}>
            <Text style={styles.photoText}>Upload Photo</Text>
          </View>
        )}
      </TouchableOpacity>

      <Text style={styles.title}>Fall Detection</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#9e9e9e"
        value={formData.username}
        onChangeText={(text) => setFormData({ ...formData, username: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#9e9e9e"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#9e9e9e"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Date of birth (YYYY-MM-DD)"
        placeholderTextColor="#9e9e9e"
        value={formData.dob}
        onChangeText={(text) => setFormData({ ...formData, dob: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Gender"
        placeholderTextColor="#9e9e9e"
        value={formData.gender}
        onChangeText={(text) => setFormData({ ...formData, gender: text })}
      />

      <TouchableOpacity style={styles.button} onPress={onSignup}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Already had an account?{" "}
        <Text style={styles.signupLink} onPress={onNavigateToLogin}>
          Login
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000",
    marginBottom: 20,
    fontFamily: "SF Pro Rounded",
  },
  photoContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 40,
  },
  photoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#eaeaec",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  photoText: {
    color: "#9e9e9e",
    fontSize: 14,
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

export default Signup;
