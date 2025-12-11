import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { AuthScreen } from '@/frontend/screens/AuthScreen';
import { useAuthContext } from '@/frontend/contexts/AuthContext';

export default function RootRedirect() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuthContext();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace('/(tabs)');
    }
  }, [isAuthenticated, isLoading]);

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
