import { Stack } from 'expo-router';

export default function ChatLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animationEnabled: true }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
          animationEnabled: true,
        }}
      />
    </Stack>
  );
}
