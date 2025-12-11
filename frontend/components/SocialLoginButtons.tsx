import { View, Pressable, Text } from 'react-native';
import { Github, Chrome } from 'lucide-react-native';

interface SocialLoginButtonsProps {
  onGooglePress: () => void;
  onGithubPress: () => void;
}

export function SocialLoginButtons({
  onGooglePress,
  onGithubPress,
}: SocialLoginButtonsProps) {
  return (
    <View className="gap-3">
      <Text className="text-center text-gray-600 text-sm font-medium mb-2">
        Ou continue com
      </Text>
      <View className="flex-row gap-3">
        <Pressable
          onPress={onGooglePress}
          className="flex-1 flex-row items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl py-3 active:bg-gray-50"
        >
          <Chrome size={20} color="#4285f4" />
          <Text className="text-gray-700 font-semibold">Google</Text>
        </Pressable>

        <Pressable
          onPress={onGithubPress}
          className="flex-1 flex-row items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl py-3 active:bg-gray-50"
        >
          <Github size={20} color="#24292e" />
          <Text className="text-gray-700 font-semibold">GitHub</Text>
        </Pressable>
      </View>
    </View>
  );
}
