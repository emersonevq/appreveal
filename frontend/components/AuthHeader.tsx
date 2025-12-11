import { View, Text } from 'react-native';
import { MessageCircle } from 'lucide-react-native';

interface AuthHeaderProps {
  title: string;
  subtitle?: string;
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <View className="items-center gap-4 mb-8">
      <View className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 items-center justify-center">
        <MessageCircle size={32} color="white" />
      </View>
      <View className="items-center gap-2">
        <Text className="text-3xl font-bold text-gray-900">{title}</Text>
        {subtitle && (
          <Text className="text-base text-gray-600 text-center">{subtitle}</Text>
        )}
      </View>
    </View>
  );
}
