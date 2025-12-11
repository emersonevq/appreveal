import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { AuthScreen } from '@/frontend/screens/AuthScreen';

export default function RootRedirect() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // TODO: Check authentication state from async storage or token
    // For now, default to not authenticated
    setTimeout(() => {
      const authenticated = false; // Change this based on token check
      setIsAuthenticated(authenticated);
      setIsLoading(false);

      if (authenticated) {
        router.replace('/(tabs)');
      }
    }, 100);
  }, []);

  // Show loading while checking auth
  if (isLoading) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <ActivityIndicator size="large" color="#0ea5e9" />
      </View>
    );
  }

  // If not authenticated, show auth screen
  if (!isAuthenticated) {
    return <AuthScreen />;
  }

  // This should not be reached if authenticated (router.replace above)
  return <View className="flex-1 bg-white" />;
}
