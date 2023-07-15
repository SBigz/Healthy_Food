import { useCallback, useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "react-query";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Screens
import Onboarding from "./screens/Onboarding";
import Home from "./screens/Home";
import FoodScreen from "./screens/FoodScreen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Navigation Creation
const Stack = createNativeStackNavigator();

export default function App() {
  // Our own state to track whether the app is ready to render
  const [appIsReady, setAppIsReady] = useState(false);
  // Create a client
  const queryClient = new QueryClient();

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts here
        await Font.loadAsync({
          "Rubik-SemiBold": require("./assets/fonts/Rubik-SemiBold.ttf"),
          "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
        });
        console.log(
          "\x1b[38;2;0;255;0;48;2;0;0;0;5m%s\x1b[0m",
          "1. There's no spoon"
        );
        await new Promise((resolve) => setTimeout(resolve, 0));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        console.log(
          "\x1b[38;2;0;255;0;48;2;0;0;0;5m%s\x1b[0m",
          "2. Don't think you are, know you are"
        );
      }
    }

    prepare();
  }, []);

  // Our own state to track whether the app is ready to render
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      console.log(
        "\x1b[38;2;0;255;0;48;2;0;0;0;5m%s\x1b[0m",
        "3. Welcome to the Matrix"
      );
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <Stack.Navigator
            screenOptions={{
              headerShown: false, // hide the header bar
            }}
          >
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="FoodScreen" component={FoodScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </QueryClientProvider>
  );
}
