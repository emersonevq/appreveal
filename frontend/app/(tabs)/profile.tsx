import { View, Text, ScrollView, Pressable } from 'react-native';
import {
  User,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
} from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="pt-12 px-6 pb-4 bg-white border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900">Profile</Text>
      </View>

      <ScrollView className="flex-1">
        <View className="bg-white p-6 border-b border-gray-200">
          <View className="items-center">
            <View className="w-24 h-24 bg-blue-500 rounded-full items-center justify-center mb-4">
              <User size={48} color="#ffffff" />
            </View>

            <Text className="text-2xl font-bold text-gray-900 mb-1">
              John Doe
            </Text>
            <Text className="text-gray-600 mb-4">@johndoe</Text>

            <Pressable className="bg-blue-500 px-8 py-3 rounded-xl active:bg-blue-600">
              <Text className="text-white font-semibold">Edit Profile</Text>
            </Pressable>
          </View>
        </View>

        <View className="bg-white mt-4 p-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            About
          </Text>

          <View className="space-y-4">
            <View className="flex-row items-center">
              <Mail size={20} color="#64748b" />
              <Text className="text-gray-700 ml-3">john.doe@example.com</Text>
            </View>

            <View className="flex-row items-center">
              <MapPin size={20} color="#64748b" />
              <Text className="text-gray-700 ml-3">San Francisco, CA</Text>
            </View>

            <View className="flex-row items-center">
              <Calendar size={20} color="#64748b" />
              <Text className="text-gray-700 ml-3">Joined January 2024</Text>
            </View>

            <View className="flex-row items-center">
              <ExternalLink size={20} color="#64748b" />
              <Text className="text-blue-500 ml-3">
                www.example.com/johndoe
              </Text>
            </View>
          </View>
        </View>

        <View className="bg-white mt-4 p-6">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            Stats
          </Text>

          <View className="flex-row justify-around">
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900">42</Text>
              <Text className="text-gray-600 mt-1">Posts</Text>
            </View>

            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900">1.2K</Text>
              <Text className="text-gray-600 mt-1">Followers</Text>
            </View>

            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900">328</Text>
              <Text className="text-gray-600 mt-1">Following</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
