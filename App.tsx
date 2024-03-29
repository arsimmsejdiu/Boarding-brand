import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding, Welcome } from "./src/Authentication";
import { LoadAssets } from "./src/Components";
import { ThemeProvider } from './src/Components/Theme';

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  "SFProDisplay-Medium" : require("./assets/fonts/SFPro-Display-Medium.ttf")
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
      <AuthenticationStack.Screen
        name="Welcome"
        component={Welcome}
      ></AuthenticationStack.Screen>
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LoadAssets {...{ fonts }}>
        <AuthenticationNavigator></AuthenticationNavigator>
      </LoadAssets>
    </ThemeProvider>
  );
}
