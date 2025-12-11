import { useEffect } from 'react';
import { Stack, useRouter, useRootNavigationState } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/frontend/hooks/useFrameworkReady';
import { AuthProvider } from '@/frontend/contexts/AuthContext';
import { useAuthContext } from '@/frontend/contexts/AuthContext';
import '@/global.css';

function RootLayoutInner() {
  const { isAuthenticated, isLoading } = useAuthContext();
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();
  useFrameworkReady();

  useEffect(() => {
    if (!rootNavigationState?.key || isLoading) return;

    const unsubscribe = setTimeout(() => {
      if (isAuthenticated) {
        router.replace('/(tabs)/home');
      } else {
        router.replace('/auth');
      }
    }, 0);

    return () => clearTimeout(unsubscribe);
  }, [isAuthenticated, isLoading, rootNavigationState?.key, router]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="auth/index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="pages"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutInner />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}
