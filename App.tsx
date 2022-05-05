import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding } from "./src/Authentication";
import { LoadAssets } from "./src/Components";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthenticationStack.Screen
        name="Onboarding"
        component={Onboarding}
      ></AuthenticationStack.Screen>
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator></AuthenticationNavigator>
    </LoadAssets>
  );
}
