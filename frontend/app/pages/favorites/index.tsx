import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { Heart, Trash2 } from 'lucide-react-native';

interface SavedPost {
  id: string;
  userName: string;
  userInitials: string;
  userAvatar?: string;
  content: string;
  image?: string;
  timestamp: string;
  likesCount: number;
  commentsCount: number;
}

const mockSavedPosts: SavedPost[] = [
  {
    id: '1',
    userName: 'Maria Santos',
    userInitials: 'MS',
    userAvatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    content: 'Que dia lindo! ☀️ Aproveitando o final de semana com a família.',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
    timestamp: '2 dias atrás',
    likesCount: 145,
    commentsCount: 23,
  },
  {
    id: '2',
    userName: 'Pedro Oliveira',
    userInitials: 'PO',
    userAvatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    content: 'Novo projeto finalizado! Muito feliz com os resultados.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80',
    timestamp: '1 semana atrás',
    likesCount: 234,
    commentsCount: 45,
  },
  {
    id: '3',
    userName: 'Ana Costa',
    userInitials: 'AC',
    userAvatar:
      'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=100&q=80',
    content: 'Viagem inesquecível! Que lugar maravilhoso 🌍✈️',
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80',
    timestamp: '2 semanas atrás',
    likesCount: 567,
    commentsCount: 89,
  },
];

export default function FavoritesScreen() {
  const [savedPosts, setSavedPosts] = React.useState(mockSavedPosts);

  const handleUnsave = (postId: string) => {
    setSavedPosts(savedPosts.filter((p) => p.id !== postId));
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="pt-12 px-6 pb-4 bg-white border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900">Favoritos</Text>
        <Text className="text-sm text-gray-600 mt-1">
          {savedPosts.length} post{savedPosts.length !== 1 ? 's' : ''} salvos
        </Text>
      </View>

      {/* Saved Posts */}
      {savedPosts.length > 0 ? (
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-6 py-4 gap-4">
            {savedPosts.map((post) => (
              <View
                key={post.id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                {/* Header */}
                <View className="flex-row items-center justify-between p-4 border-b border-gray-100">
                  <View className="flex-row items-center gap-3 flex-1">
                    {post.userAvatar ? (
                      <Image
                        source={{ uri: post.userAvatar }}
                        className="w-10 h-10 rounded-full"
                      />
                    ) : (
                      <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center">
                        <Text className="text-xs font-bold text-blue-600">
                          {post.userInitials}
                        </Text>
                      </View>
                    )}
                    <View className="flex-1">
                      <Text className="font-bold text-gray-900">
                        {post.userName}
                      </Text>
                      <Text className="text-xs text-gray-600">
                        {post.timestamp}
                      </Text>
                    </View>
                  </View>

                  {/* Unsave Button */}
                  <Pressable
                    onPress={() => handleUnsave(post.id)}
                    className="p-2 active:bg-gray-100 rounded-full"
                  >
                    <Trash2 size={18} color="#ef4444" />
                  </Pressable>
                </View>

                {/* Content */}
                <View className="px-4 pt-4">
                  <Text className="text-gray-900 text-base leading-6">
                    {post.content}
                  </Text>
                </View>

                {/* Image */}
                {post.image && (
                  <Image
                    source={{ uri: post.image }}
                    className="w-full h-48 mt-3"
                  />
                )}

                {/* Stats */}
                <View className="flex-row items-center justify-between px-4 py-3 mt-2 border-t border-gray-100">
                  <View className="flex-row items-center gap-1">
                    <Heart size={16} color="#ef4444" fill="#ef4444" />
                    <Text className="text-sm text-gray-600">
                      {post.likesCount}
                    </Text>
                  </View>
                  <Text className="text-sm text-gray-600">
                    {post.commentsCount} comentário
                    {post.commentsCount !== 1 ? 's' : ''}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Heart size={48} color="#d1d5db" />
          <Text className="text-gray-600 text-center mt-4">
            Nenhum post salvo no momento
          </Text>
        </View>
      )}
    </View>
  );
}

import React from 'react';
