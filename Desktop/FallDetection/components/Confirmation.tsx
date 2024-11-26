import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Colors from "../constants/Colors";

const Confirmation: React.FC<{ onNavigateBack: () => void }> = ({ onNavigateBack }) => {
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (countdown === 0) {
      console.log("SOS triggered!");
    }
  }, [countdown]);

  return (
    <View style={styles.container}>

      <Text style={styles.alertText}>It looks like you’ve taken a hard fall.</Text>
  
      <Image
        source={require("../assets/images/HumanFall2.png")} 
        style={styles.logo}
      />

      <Text style={styles.countdownText}>
        Sending SOS in {countdown} seconds
      </Text>

      <TouchableOpacity style={styles.sosButton}>
        <View style={styles.sosCircle}>
          <Text style={styles.sosText}>SOS</Text>
        </View>
        <Text style={styles.sosLabel}>Emergency SOS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={onNavigateBack}>
        <Text style={styles.actionText}>I fell, but I'm OK</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={onNavigateBack}>
        <Text style={styles.actionText}>I did not fall</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 150,
  },
  logo: {
    width: 90,
    height: 80,
    marginBottom: 80, 
  },
  alertText: {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 80, 
    width: "60%",
  },
  countdownText: {
    color: "#676769",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 30, 
  },
  sosButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#38383a",
    borderRadius: 50,
    width: 297,
    height: 84,
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    marginBottom: 80, 
  },
  sosCircle: {
    width: 76,
    height: 76,
    backgroundColor: "#ff2626",
    borderRadius: 38,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  sosText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "monospace",
  },
  sosLabel: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
  actionButton: {
    width: 297,
    height: 74,
    backgroundColor: "#38383a",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30, 
  },
  actionText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default Confirmation;
