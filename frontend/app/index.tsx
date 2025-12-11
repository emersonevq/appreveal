import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    // TODO: Check authentication state from async storage or token
    // For now, redirect to auth
    const isAuthenticated = false;

    if (isAuthenticated) {
      router.replace('/(tabs)');
    } else {
      router.replace('/auth');
    }
  }, []);

  return <View className="flex-1 bg-white" />;
}
