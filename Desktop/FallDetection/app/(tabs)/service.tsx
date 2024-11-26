let navigate: (screen: string) => void;

export const setNavigationHandler = (navHandler: (screen: string) => void) => {
  navigate = navHandler;
};

export const NavigationService = {
  goToDashboard: () => navigate("dashboard"),
  goToConfirmation: () => navigate("confirmation"),
  goToSettings: () => navigate("settings"), 
};
