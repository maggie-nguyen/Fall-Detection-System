import React, { useState } from "react";
import { View } from "react-native";
import Dashboard from "@/components/Dashboard";
import Confirmation from "@/components/Confirmation";
import Setting from "@/components/Setting";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<"Dashboard" | "Confirmation" | "Setting">("Dashboard");

  const navigateToConfirmation = () => {
    setCurrentScreen("Confirmation");
  };

  const navigateToDashboard = () => {
    setCurrentScreen("Dashboard");
  };

  const navigateToSetting = () => {
    setCurrentScreen("Setting");
  };

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === "Dashboard" && (
        <Dashboard
          onNavigateToConfirmation={navigateToConfirmation}
          onNavigateToSetting={navigateToSetting}
        />
      )}
      {currentScreen === "Confirmation" && (
        <Confirmation onNavigateBack={navigateToDashboard} />
      )}
      {currentScreen === "Setting" && (
        <Setting onNavigateBack={navigateToDashboard} />
      )}
    </View>
  );
};

export default App;
