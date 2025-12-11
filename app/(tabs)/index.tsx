import { View, Text, ScrollView, Pressable } from 'react-native';
import { Heart, MessageCircle, Share2 } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <View className="pt-12 px-6 pb-4 border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900">Home</Text>
      </View>

      <ScrollView className="flex-1">
        <View className="p-6 space-y-4">
          <View className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <View className="bg-gradient-to-br from-blue-500 to-blue-600 h-48 justify-center items-center">
              <Text className="text-white text-2xl font-bold">
                Welcome to Expo
              </Text>
            </View>

            <View className="p-6">
              <Text className="text-xl font-semibold text-gray-900 mb-2">
                Getting Started
              </Text>
              <Text className="text-gray-600 leading-6">
                This is a complete React Native app with Expo, TypeScript, and
                Tailwind CSS (NativeWind).
              </Text>

              <View className="flex-row justify-around mt-6 pt-6 border-t border-gray-100">
                <Pressable className="items-center active:opacity-70">
                  <Heart size={24} color="#64748b" />
                  <Text className="text-gray-600 text-sm mt-1">Like</Text>
                </Pressable>

                <Pressable className="items-center active:opacity-70">
                  <MessageCircle size={24} color="#64748b" />
                  <Text className="text-gray-600 text-sm mt-1">Comment</Text>
                </Pressable>

                <Pressable className="items-center active:opacity-70">
                  <Share2 size={24} color="#64748b" />
                  <Text className="text-gray-600 text-sm mt-1">Share</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <Text className="text-lg font-semibold text-blue-900 mb-2">
              Built with
            </Text>
            <Text className="text-blue-700 leading-6">
              • React Native{'\n'}• Expo Router{'\n'}• TypeScript{'\n'}•
              NativeWind (Tailwind CSS){'\n'}• Lucide Icons
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
