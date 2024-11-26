import React, { useState } from "react";
import { View } from "react-native";
import Dashboard from "@/components/Dashboard";
import Confirmation from "@/components/Confirmation";
import Setting from "@/components/Setting";
import Login from "@/components/Login";
import Signup from "@/components/Signup";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<
    "Login" | "Signup" | "Dashboard" | "Confirmation" | "Setting"
  >("Login");

  // Navigation functions
  const navigationHandlers = {
    navigateToLogin: () => setCurrentScreen("Login"),
    navigateToSignup: () => setCurrentScreen("Signup"),
    navigateToDashboard: () => setCurrentScreen("Dashboard"),
    navigateToConfirmation: () => setCurrentScreen("Confirmation"),
    navigateToSetting: () => setCurrentScreen("Setting"),
  };

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === "Login" && (
        <Login
          onLogin={navigationHandlers.navigateToDashboard}
          onNavigateToSignup={navigationHandlers.navigateToSignup}
        />
      )}
      {currentScreen === "Signup" && (
        <Signup
          onSignup={navigationHandlers.navigateToDashboard}
          onNavigateToLogin={navigationHandlers.navigateToLogin}
        />
      )}
      {currentScreen === "Dashboard" && (
        <Dashboard
          onNavigateToConfirmation={navigationHandlers.navigateToConfirmation}
          onNavigateToSetting={navigationHandlers.navigateToSetting}
        />
      )}
      {currentScreen === "Confirmation" && (
        <Confirmation onNavigateBack={navigationHandlers.navigateToDashboard} />
      )}
      {currentScreen === "Setting" && (
        <Setting
          onNavigateBack={navigationHandlers.navigateToDashboard}
          onLogout={navigationHandlers.navigateToLogin} 
        />
      )}
    </View>
  );
};

export default App;
