import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Check, X } from 'lucide-react-native';

interface FriendRequest {
  id: string;
  userId: string;
  fullName: string;
  avatar?: string;
  initials: string;
  mutualFriends: number;
}

const mockFriendRequests: FriendRequest[] = [
  {
    id: '1',
    userId: 'user1',
    fullName: 'Lucas Ferreira',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    initials: 'LF',
    mutualFriends: 5,
  },
  {
    id: '2',
    userId: 'user2',
    fullName: 'Beatriz Silva',
    avatar:
      'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=100&q=80',
    initials: 'BS',
    mutualFriends: 3,
  },
  {
    id: '3',
    userId: 'user3',
    fullName: 'Carlos Mendes',
    avatar: undefined,
    initials: 'CM',
    mutualFriends: 2,
  },
];

export default function FriendRequestsScreen() {
  const router = useRouter();
  const [requests, setRequests] = React.useState(mockFriendRequests);

  const handleAccept = (requestId: string) => {
    setRequests(requests.filter((r) => r.id !== requestId));
  };

  const handleReject = (requestId: string) => {
    setRequests(requests.filter((r) => r.id !== requestId));
  };

  const handleViewProfile = (userId: string) => {
    router.push(`/user-profile?id=${userId}`);
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="pt-12 px-6 pb-4 bg-white border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900">
          Solicitações de Amizade
        </Text>
        <Text className="text-sm text-gray-600 mt-1">
          {requests.length} solicitação{requests.length !== 1 ? 's' : ''}
        </Text>
      </View>

      {/* Requests List */}
      {requests.length > 0 ? (
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-6 py-4 gap-3">
            {requests.map((request) => (
              <Pressable
                key={request.id}
                onPress={() => handleViewProfile(request.userId)}
                className="bg-white rounded-2xl border border-gray-100 p-4 active:bg-gray-50"
              >
                <View className="flex-row items-start justify-between">
                  {/* User Info */}
                  <View className="flex-row items-center gap-3 flex-1">
                    {request.avatar ? (
                      <Image
                        source={{ uri: request.avatar }}
                        className="w-14 h-14 rounded-full"
                      />
                    ) : (
                      <View className="w-14 h-14 rounded-full bg-purple-100 items-center justify-center">
                        <Text className="text-sm font-bold text-purple-600">
                          {request.initials}
                        </Text>
                      </View>
                    )}
                    <View className="flex-1">
                      <Text className="text-base font-bold text-gray-900">
                        {request.fullName}
                      </Text>
                      <Text className="text-xs text-gray-600">
                        {request.mutualFriends} amigos em comum
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Action Buttons */}
                <View className="flex-row gap-2 mt-4">
                  <Pressable
                    onPress={() => handleAccept(request.id)}
                    className="flex-1 bg-blue-500 rounded-lg py-2 items-center justify-center flex-row gap-2 active:bg-blue-600"
                  >
                    <Check size={18} color="#ffffff" />
                    <Text className="text-white font-semibold">Aceitar</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => handleReject(request.id)}
                    className="flex-1 bg-gray-200 rounded-lg py-2 items-center justify-center flex-row gap-2 active:bg-gray-300"
                  >
                    <X size={18} color="#6b7280" />
                    <Text className="text-gray-700 font-semibold">Rejeitar</Text>
                  </Pressable>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Check size={48} color="#d1d5db" />
          <Text className="text-gray-600 text-center mt-4">
            Nenhuma solicitação de amizade
          </Text>
        </View>
      )}
    </View>
  );
}
