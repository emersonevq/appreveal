import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { MessageCircle, Phone } from 'lucide-react-native';
import { mockUsers } from '@/frontend/mocks/users';

export default function FriendsScreen() {
  const router = useRouter();

  const handleViewProfile = (userId: string) => {
    router.push(`/user-profile?id=${userId}`);
  };

  const handleMessage = (userId: string) => {
    router.push(`/pages/chat`);
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="pt-12 px-6 pb-4 bg-white border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900">Amigos</Text>
        <Text className="text-sm text-gray-600 mt-1">
          {mockUsers.length} amigos
        </Text>
      </View>

      {/* Friends List */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 py-4 gap-3">
          {mockUsers.map((user) => (
            <Pressable
              key={user.id}
              onPress={() => handleViewProfile(user.id)}
              className="bg-white rounded-2xl border border-gray-100 p-4 flex-row items-center justify-between active:bg-gray-50"
            >
              <View className="flex-row items-center gap-3 flex-1">
                {user.avatar ? (
                  <Image
                    source={{ uri: user.avatar }}
                    className="w-12 h-12 rounded-full"
                  />
                ) : (
                  <View className="w-12 h-12 rounded-full bg-blue-100 items-center justify-center">
                    <Text className="text-sm font-bold text-blue-600">
                      {user.initials}
                    </Text>
                  </View>
                )}
                <View className="flex-1">
                  <Text className="text-base font-bold text-gray-900">
                    {user.fullName}
                  </Text>
                  <Text className="text-xs text-gray-600">
                    {user.bio || 'Sem bio'}
                  </Text>
                </View>
              </View>

              {/* Action Buttons */}
              <View className="flex-row items-center gap-2 ml-2">
                <Pressable
                  onPress={() => handleMessage(user.id)}
                  className="bg-blue-100 rounded-full p-2 active:bg-blue-200"
                >
                  <MessageCircle size={18} color="#0284c7" />
                </Pressable>
                <Pressable className="bg-green-100 rounded-full p-2 active:bg-green-200">
                  <Phone size={18} color="#16a34a" />
                </Pressable>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
