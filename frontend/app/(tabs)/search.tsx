import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { Search, TrendingUp } from 'lucide-react-native';
import { useState } from 'react';

const TRENDING_TOPICS = [
  'React Native',
  'Expo',
  'TypeScript',
  'Tailwind CSS',
  'Mobile Development',
  'JavaScript',
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View className="flex-1 bg-white">
      <View className="pt-12 px-6 pb-4">
        <Text className="text-3xl font-bold text-gray-900 mb-4">Search</Text>

        <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3">
          <Search size={20} color="#64748b" />
          <TextInput
            className="flex-1 ml-3 text-base text-gray-900"
            placeholder="Search..."
            placeholderTextColor="#94a3b8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView className="flex-1 px-6">
        <View className="mb-6">
          <View className="flex-row items-center mb-3">
            <TrendingUp size={20} color="#0ea5e9" />
            <Text className="text-lg font-semibold text-gray-900 ml-2">
              Trending Topics
            </Text>
          </View>

          <View className="flex-row flex-wrap gap-2">
            {TRENDING_TOPICS.map((topic, index) => (
              <Pressable
                key={index}
                className="bg-blue-50 px-4 py-2 rounded-full border border-blue-100 active:bg-blue-100">
                <Text className="text-blue-700 font-medium">{topic}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {searchQuery.length > 0 && (
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-900 mb-3">
              Results for "{searchQuery}"
            </Text>
            <View className="bg-gray-50 rounded-xl p-6 items-center">
              <Text className="text-gray-500">
                No results found. Try a different search term.
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
