import * as Settings from "expo-settings";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {
  const [theme, setTheme] = useState<string>(Settings.getTheme());
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const subscription = Settings.addThemeListener(({ theme: newTheme }) => {
      setTheme(newTheme);
    });

    return () => subscription.remove();
  }, [setTheme]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme === "dark" ? "#000" : "#fff",
      }}
    >
      <Text style={{ color: theme === "dark" ? "#fff" : "#000" }}>
        Theme: {theme}
      </Text>
      <Button
        title="Change theme"
        onPress={() => Settings.setTheme(nextTheme)}
      />
    </View>
  );
}
