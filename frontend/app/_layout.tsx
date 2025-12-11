import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/frontend/hooks/useFrameworkReady';
import { AuthProvider } from '@/frontend/contexts/AuthContext';
import '@/global.css';

export default function RootLayout() {
  useFrameworkReady();

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false, animationEnabled: true }}>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="auth"
          options={{
            headerShown: false,
            animationEnabled: true,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            animationEnabled: true,
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </AuthProvider>
  );
}
