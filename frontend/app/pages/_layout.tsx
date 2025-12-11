import { Stack } from 'expo-router';

export default function PagesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animationEnabled: true }}>
      <Stack.Screen
        name="chat/[id]"
        options={{
          headerShown: false,
          animationEnabled: true,
        }}
      />
      <Stack.Screen
        name="friends/index"
        options={{
          headerShown: false,
          animationEnabled: true,
        }}
      />
      <Stack.Screen
        name="notifications/index"
        options={{
          headerShown: false,
          animationEnabled: true,
        }}
      />
      <Stack.Screen
        name="friend-requests/index"
        options={{
          headerShown: false,
          animationEnabled: true,
        }}
      />
      <Stack.Screen
        name="favorites/index"
        options={{
          headerShown: false,
          animationEnabled: true,
        }}
      />
    </Stack>
  );
}
