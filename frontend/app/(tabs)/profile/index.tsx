import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { useState } from 'react';
import { mockCurrentUser } from '@/frontend/mocks/users';
import { mockScraps, mockTestimonials } from '@/frontend/mocks/scraps';
import { mockUserPosts } from '@/frontend/mocks/posts';

type TabType = 'posts' | 'testimonials';

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<TabType>('posts');

  const userPosts = mockUserPosts.filter((post) => post.userId === '1');
  const taggedPosts = mockUserPosts.filter((post) =>
    post.taggedUsers?.includes('João Silva'),
  );

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Cover Image */}
        <View className="w-full h-56 bg-gradient-to-br from-purple-400 via-pink-400 to-red-400">
          {mockCurrentUser.coverImage && (
            <Image
              source={{ uri: mockCurrentUser.coverImage }}
              className="w-full h-full"
              resizeMode="cover"
            />
          )}
        </View>

        {/* Profile Header Section */}
        <View className="px-6 pb-8">
          {/* Avatar - Centered and Overlapping */}
          <View className="items-center -mt-20 mb-6">
            <View className="w-40 h-40 rounded-full bg-white border-4 border-white shadow-lg overflow-hidden">
              {mockCurrentUser.avatar && (
                <Image
                  source={{ uri: mockCurrentUser.avatar }}
                  className="w-full h-full"
                />
              )}
            </View>
          </View>

          {/* User Info */}
          <View className="items-center mb-6">
            <Text className="text-2xl font-bold text-gray-900 mb-1">
              {mockCurrentUser.fullName}
            </Text>
            {mockCurrentUser.location && (
              <Text className="text-sm text-gray-600 mb-4">
                📍 {mockCurrentUser.location}
              </Text>
            )}

            {mockCurrentUser.bio && (
              <Text className="text-sm text-gray-700 text-center leading-5">
                {mockCurrentUser.bio}
              </Text>
            )}
          </View>

          {/* Tab Navigation */}
          <View className="flex-row border-b border-gray-200 mb-6">
            <Pressable
              onPress={() => setActiveTab('posts')}
              className={`flex-1 py-4 items-center border-b-2 ${
                activeTab === 'posts' ? 'border-gray-900' : 'border-transparent'
              }`}
            >
              <Text
                className={`font-semibold ${
                  activeTab === 'posts' ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                Posts
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setActiveTab('testimonials')}
              className={`flex-1 py-4 items-center border-b-2 ${
                activeTab === 'testimonials'
                  ? 'border-gray-900'
                  : 'border-transparent'
              }`}
            >
              <Text
                className={`font-semibold ${
                  activeTab === 'testimonials'
                    ? 'text-gray-900'
                    : 'text-gray-500'
                }`}
              >
                Depoimentos
              </Text>
            </Pressable>
          </View>

          {/* Content Section */}
          {activeTab === 'posts' && (
            <View className="gap-4">
              {/* Meus Posts */}
              <View>
                {userPosts.length > 0 ? (
                  <View className="gap-4">
                    {userPosts.map((post) => (
                      <View
                        key={post.id}
                        className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                      >
                        <Text className="font-semibold text-gray-900 mb-2">
                          {post.title}
                        </Text>
                        <Text className="text-gray-700 text-sm leading-5 mb-3">
                          {post.content}
                        </Text>
                        <View className="flex-row justify-between items-center pt-3 border-t border-gray-200">
                          <Text className="text-xs text-gray-500">
                            {post.createdAt}
                          </Text>
                          <View className="flex-row gap-4">
                            <Pressable>
                              <Text className="text-gray-600 text-xs font-semibold">
                                ❤️ {post.likes || 0}
                              </Text>
                            </Pressable>
                            <Pressable>
                              <Text className="text-gray-600 text-xs font-semibold">
                                💬 {post.comments || 0}
                              </Text>
                            </Pressable>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                ) : (
                  <View className="items-center py-8">
                    <Text className="text-gray-500 text-sm">
                      Nenhum post ainda
                    </Text>
                  </View>
                )}
              </View>

              {/* Marcado em */}
              {taggedPosts.length > 0 && (
                <View className="mt-4 pt-4 border-t border-gray-200">
                  <Text className="font-semibold text-gray-900 mb-4 text-sm">
                    Marcado em ({taggedPosts.length})
                  </Text>
                  <View className="gap-4">
                    {taggedPosts.map((post) => (
                      <View
                        key={post.id}
                        className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                      >
                        <Text className="text-xs text-gray-500 mb-1">
                          {post.authorName}
                        </Text>
                        <Text className="font-semibold text-gray-900 mb-2">
                          {post.title}
                        </Text>
                        <Text className="text-gray-700 text-sm leading-5 mb-3">
                          {post.content}
                        </Text>
                        <View className="flex-row justify-between items-center pt-3 border-t border-gray-200">
                          <Text className="text-xs text-gray-500">
                            {post.createdAt}
                          </Text>
                          <Pressable>
                            <Text className="text-gray-600 text-xs font-semibold">
                              ❤️ {post.likes || 0}
                            </Text>
                          </Pressable>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>
          )}

          {activeTab === 'testimonials' && (
            <View className="gap-3">
              {mockTestimonials.length > 0 ? (
                mockTestimonials.map((testimonial, index) => (
                  <View
                    key={testimonial.id}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                  >
                    <View className="flex-row items-center gap-2 mb-3">
                      <View className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 items-center justify-center">
                        <Text className="text-white text-xs font-bold">
                          {testimonial.authorName.charAt(0)}
                        </Text>
                      </View>
                      <View className="flex-1">
                        <Text className="font-semibold text-gray-900 text-sm">
                          {testimonial.authorName}
                        </Text>
                        <Text className="text-xs text-gray-500">
                          {testimonial.createdAt}
                        </Text>
                      </View>
                    </View>
                    <Text className="text-gray-700 text-sm leading-5 italic">
                      "{testimonial.content}"
                    </Text>
                  </View>
                ))
              ) : (
                <View className="items-center py-8">
                  <Text className="text-gray-500 text-sm">
                    Nenhum depoimento ainda
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
