import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Graph from "./Graph";
import Colors from "../constants/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

interface MonitoringDashboardProps {
  onNavigateToSetting: () => void;
  onNavigateToConfirmation: () => void;
}

const Dashboard: React.FC<MonitoringDashboardProps> = ({ onNavigateToSetting, onNavigateToConfirmation }) => {
  const fallDetectedData = [5, 10, 15, 7, 20, 8, 5, 12, 10, 6, 4, 3];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={onNavigateToConfirmation}>
          <Text style={styles.title}>Monitoring Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNavigateToSetting}>
          <Image
            source={require("@/assets/images/Avatar.png")}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={[styles.cardTitle, { color: Colors.pink }]}>
            Fall Detected
          </Text>
        </View>
        <Graph data={fallDetectedData} />
      </View>

      {/* Cards */}
      {[
        { title: "Heart Rate", value: "72", unit: "bpm", color: Colors.pink, icon: "heart" },
        { title: "Steps Walked", value: "9,880", unit: "steps", color: Colors.orange, icon: "fire" },
        { title: "Distance Walked", value: "8.9", unit: "km", color: Colors.orange, icon: "fire" },
        { title: "Walking Asymmetry", value: "3.4", unit: "%", color: Colors.orange, icon: "fire" },
      ].map((card, index) => (
        <View style={styles.card} key={index}>
          <View style={styles.row}>
            <View style={styles.titleContainer}>
              <MaterialCommunityIcons
                name={card.icon}
                size={16}
                color={card.color}
                style={styles.icon}
              />
              <Text style={[styles.cardTitle, { color: card.color }]}>
                {card.title}
              </Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.cardTime}>12:00</Text>
              <Ionicons name="chevron-forward" size={16} color={Colors.darkgrey} />
            </View>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.cardValue}>{card.value}</Text>
            <Text style={styles.cardUnit}>{card.unit}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.lightgrey,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.black,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTime: {
    fontSize: 12,
    color: Colors.darkgrey,
    marginRight: 5,
  },
  numberContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 10,
  },
  cardValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.black,
  },
  cardUnit: {
    fontSize: 14,
    color: Colors.darkgrey,
    marginLeft: 5,
  },
});

export default Dashboard;
