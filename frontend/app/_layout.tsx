import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/frontend/hooks/useFrameworkReady';
import { AuthProvider } from '@/frontend/contexts/AuthContext';
import { useAuthContext } from '@/frontend/contexts/AuthContext';
import '@/global.css';

function RootLayoutInner() {
  const { isAuthenticated, isLoading } = useAuthContext();
  useFrameworkReady();

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
