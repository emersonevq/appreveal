import { View, ActivityIndicator } from 'react-native';
import { AuthScreen } from '@/frontend/screens/AuthScreen';
import { useAuthContext } from '@/frontend/contexts/AuthContext';

export default function RootRedirect() {
  const { isAuthenticated, isLoading } = useAuthContext();

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

  // If authenticated, Stack will navigate automatically
  return <View className="flex-1 bg-white" />;
}
