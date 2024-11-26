import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import Colors from "../constants/Colors";

const Graph = ({ data }: { data: number[] }) => {
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth - 40;

  const graphData = data.map((value, index) => ({
    x: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][index],
    y: value,
  }));

  return (
    <View style={[styles.card, { width: cardWidth }]}>

      <VictoryChart
        width={cardWidth} 
        height={150} 
        domainPadding={0} 
      >
        <VictoryAxis
          style={{
            axis: { stroke: "transparent" }, 
            tickLabels: {
              fontSize: 10,
              padding: 5,
              fill: Colors.black,
            }, 
          }}
          tickValues={["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]} 
        />
        <VictoryBar
          data={graphData}
          style={{
            data: {
              fill: Colors.mediumgrey, 
              width: 15, 
            },
          }}
          cornerRadius={1} 
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10, 
    marginBottom: 20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.pink,
    marginBottom: 10,
    textAlign: "left",
  },
});

export default Graph;
