import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Settings, MessageCircle, Users } from 'lucide-react-native';
import { mockCurrentUser, mockUsers } from '@/frontend/mocks/users';
import {
  friendsStatusList,
  getStatusColor,
} from '@/frontend/mocks/friends-status';
import { mockConversations } from '@/frontend/mocks/chats';
import { mockScraps, mockTestimonials } from '@/frontend/mocks/scraps';

export default function HomeScreen() {
  const router = useRouter();

  const onlineCount = friendsStatusList.filter(
    (f) => f.status === 'online' || f.status === 'busy',
  ).length;

  const firstName = mockCurrentUser.fullName.split(' ')[0];

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {/* Header - Greeting and Profile Button */}
        <View className="px-6 py-6 flex-row items-center justify-between bg-white border-b border-gray-100">
          <View className="flex-row items-center gap-4 flex-1">
            <View className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 items-center justify-center overflow-hidden">
              {mockCurrentUser.avatar && (
                <Image
                  source={{ uri: mockCurrentUser.avatar }}
                  className="w-full h-full"
                />
              )}
            </View>
            <View className="flex-1">
              <Text className="text-lg font-bold text-gray-900">
                Olá, {firstName}!
              </Text>
              <Text className="text-xs text-gray-500">📍 Vivendo a vida!</Text>
            </View>
          </View>

          <Pressable
            onPress={() => router.push('/profile')}
            className="flex-row items-center gap-2 px-4 py-2 border border-gray-300 rounded-full active:bg-gray-100"
          >
            <Settings size={16} color="#64748b" />
            <Text className="text-sm font-semibold text-gray-700">Perfil</Text>
          </Pressable>
        </View>

        {/* Conversations and Friends Cards */}
        <View className="px-6 py-6 gap-4">
          <View className="flex-row gap-4">
            {/* Conversations Card */}
            <Pressable
              onPress={() => router.push('/chat')}
              className="flex-1 bg-white rounded-2xl p-4 border border-gray-100 active:bg-gray-50"
            >
              <View className="flex-row items-center gap-3 mb-2">
                <View className="w-10 h-10 bg-blue-100 rounded-full items-center justify-center">
                  <MessageCircle size={20} color="#0284c7" />
                </View>
                <View className="flex-1">
                  <Text className="font-bold text-gray-900 text-sm">
                    Conversas
                  </Text>
                  <Text className="text-xs text-gray-600">
                    {mockConversations.length} novas
                  </Text>
                </View>
              </View>
            </Pressable>

            {/* Friends Card */}
            <Pressable
              onPress={() => router.push('/pages/friends')}
              className="flex-1 bg-white rounded-2xl p-4 border border-gray-100 active:bg-gray-50"
            >
              <View className="flex-row items-center gap-3 mb-2">
                <View className="w-10 h-10 bg-green-100 rounded-full items-center justify-center">
                  <Users size={20} color="#16a34a" />
                </View>
                <View className="flex-1">
                  <Text className="font-bold text-gray-900 text-sm">
                    Amigos
                  </Text>
                  <Text className="text-xs text-gray-600">
                    {mockUsers.length} conexões
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>

          {/* Online Now Section */}
          <View className="bg-white rounded-2xl p-4 border border-gray-100">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="font-bold text-gray-900 text-sm">
                🟢 Online agora ({onlineCount})
              </Text>
              <Pressable>
                <Text className="text-xs font-semibold text-blue-600">
                  Ver todos
                </Text>
              </Pressable>
            </View>

            {/* Online Friends List */}
            <View className="gap-3">
              {friendsStatusList
                .filter((f) => f.status === 'online' || f.status === 'busy')
                .slice(0, 3)
                .map((friend) => (
                  <Pressable
                    key={friend.userId}
                    className="flex-row items-center gap-3 active:opacity-70"
                  >
                    <View className="relative">
                      <View className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                        <Image
                          source={{ uri: friend.avatar }}
                          className="w-full h-full"
                        />
                      </View>
                      <View
                        style={{
                          backgroundColor: getStatusColor(friend.status),
                        }}
                        className="w-3 h-3 rounded-full absolute bottom-0 right-0 border-2 border-white"
                      />
                    </View>

                    <View className="flex-1">
                      <Text className="font-semibold text-gray-900 text-sm">
                        {friend.name}
                      </Text>
                      {friend.currentlyPlaying && (
                        <Text className="text-xs text-gray-600">
                          {friend.currentlyPlaying.emoji}{' '}
                          {friend.currentlyPlaying.title}
                        </Text>
                      )}
                      {!friend.currentlyPlaying && (
                        <Text className="text-xs text-gray-500">
                          {friend.statusLabel}
                        </Text>
                      )}
                    </View>
                  </Pressable>
                ))}
            </View>
          </View>

          {/* Stats Cards */}
          <View className="flex-row gap-3">
            <View className="flex-1 bg-white rounded-lg p-4 border border-gray-100 items-center">
              <Text className="text-2xl font-bold text-blue-600">
                {mockUsers.length}
              </Text>
              <Text className="text-xs text-gray-600 mt-1">Amigos</Text>
            </View>

            <View className="flex-1 bg-white rounded-lg p-4 border border-gray-100 items-center">
              <Text className="text-2xl font-bold text-green-600">
                {mockTestimonials.length}
              </Text>
              <Text className="text-xs text-gray-600 mt-1">Depoimentos</Text>
            </View>

            <View className="flex-1 bg-white rounded-lg p-4 border border-gray-100 items-center">
              <Text className="text-2xl font-bold text-amber-400">
                {mockScraps.length}
              </Text>
              <Text className="text-xs text-gray-600 mt-1">Scraps</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
