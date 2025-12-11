import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { Edit2 } from 'lucide-react-native';
import { mockCurrentUser } from '@/frontend/mocks/users';
import { mockScraps, mockTestimonials } from '@/frontend/mocks/scraps';
import { mockUserPosts } from '@/frontend/mocks/posts';

export default function ProfileScreen() {
  const userPosts = mockUserPosts.filter((post) => post.userId === '1');
  const taggedPosts = mockUserPosts.filter((post) =>
    post.taggedUsers?.includes('João Silva'),
  );

  const handleEditProfile = () => {
    console.log('Edit profile');
  };

  const orkutColors = [
    { bg: '#FFE5B4', border: '#FF6B9D', text: '#D4145A', shadow: '#FF69B4' },
    { bg: '#B4D7FF', border: '#4D94FF', text: '#0056B3', shadow: '#5A8FFF' },
    { bg: '#D7FFB4', border: '#6BFF4D', text: '#2D5016', shadow: '#7CFF5C' },
    { bg: '#FFD7B4', border: '#FF9D4D', text: '#FF6B35', shadow: '#FFB366' },
    { bg: '#E5B4FF', border: '#D94DFF', text: '#9D00FF', shadow: '#D966FF' },
    { bg: '#B4FFE5', border: '#4DFFAA', text: '#00A854', shadow: '#5CFFB8' },
  ];

  const getTestimonialStyle = (index: number) => orkutColors[index % orkutColors.length];

  return (
    <View className="flex-1 bg-gray-50 w-full">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Cover Image */}
        <View className="w-full h-40 bg-gradient-to-br from-blue-400 to-purple-500 relative">
          {mockCurrentUser.coverImage && (
            <Image
              source={{ uri: mockCurrentUser.coverImage }}
              className="w-full h-full"
              resizeMode="cover"
            />
          )}
        </View>

        {/* Profile Section */}
        <View className="px-6 pb-8">
          {/* Avatar */}
          <View className="-mt-16 mb-4 flex-row items-end justify-between">
            <View className="flex-row items-end gap-4">
              <View className="w-32 h-32 rounded-full bg-white border-4 border-white overflow-hidden shadow-lg">
                {mockCurrentUser.avatar && (
                  <Image
                    source={{ uri: mockCurrentUser.avatar }}
                    className="w-full h-full"
                  />
                )}
              </View>
              <View className="flex-1">
                <Text className="text-2xl font-bold text-gray-900 mb-1">
                  {mockCurrentUser.fullName}
                </Text>
                {mockCurrentUser.location && (
                  <Text className="text-sm text-gray-600 mb-2">
                    {mockCurrentUser.location}
                  </Text>
                )}
              </View>
            </View>

            {/* Edit Button */}
            <Pressable
              onPress={handleEditProfile}
              className="bg-blue-500 active:bg-blue-600 rounded-full p-3 mb-2"
            >
              <Edit2 size={20} color="#ffffff" />
            </Pressable>
          </View>

          {/* Bio Section */}
          {mockCurrentUser.bio && (
            <View className="bg-white rounded-lg p-4 mb-6 border border-gray-100">
              <Text className="text-gray-700 text-sm leading-5">
                {mockCurrentUser.bio}
              </Text>
            </View>
          )}

          {/* Stats */}
          <View className="flex-row justify-around bg-white rounded-lg p-4 mb-6 border border-gray-100">
            <View className="items-center">
              <Text className="text-2xl font-bold text-blue-600">
                {mockCurrentUser.friendsCount}
              </Text>
              <Text className="text-xs text-gray-600 mt-1">Amigos</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-green-600">
                {mockCurrentUser.postsCount}
              </Text>
              <Text className="text-xs text-gray-600 mt-1">Posts</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-red-600">
                {mockCurrentUser.unreadMessages}
              </Text>
              <Text className="text-xs text-gray-600 mt-1">Msgs</Text>
            </View>
          </View>

          {/* Testimonials Section - Orkut Style */}
          {mockTestimonials.length > 0 && (
            <View className="mb-8">
              <Text className="text-xl font-bold text-gray-900 mb-4">
                Depoimentos ({mockTestimonials.length})
              </Text>
              <View className="gap-3">
                {mockTestimonials.map((testimonial, index) => {
                  const style = getTestimonialStyle(index);
                  return (
                    <View
                      key={testimonial.id}
                      style={{
                        backgroundColor: style.bg,
                        borderLeftWidth: 4,
                        borderLeftColor: style.border,
                        borderRadius: 8,
                        padding: 12,
                      }}
                      className="shadow-sm"
                    >
                      <Text
                        style={{
                          color: style.text,
                          fontWeight: 'bold',
                          textShadowColor: 'rgba(0,0,0,0.2)',
                          textShadowOffset: { width: 1, height: 1 },
                          textShadowRadius: 1,
                          marginBottom: 4,
                        }}
                        className="text-sm"
                      >
                        {testimonial.authorName}
                      </Text>
                      <Text
                        style={{
                          color: style.text,
                          fontSize: 13,
                        }}
                        className="leading-5"
                      >
                        "{testimonial.content}"
                      </Text>
                      <Text
                        style={{
                          color: style.text,
                          opacity: 0.7,
                          fontSize: 11,
                          marginTop: 6,
                        }}
                      >
                        {testimonial.createdAt}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          )}

          {/* Posts Section */}
          {userPosts.length > 0 && (
            <View className="mb-8">
              <Text className="text-xl font-bold text-gray-900 mb-4">
                Meus Posts ({userPosts.length})
              </Text>
              <View className="gap-3">
                {userPosts.map((post) => (
                  <View
                    key={post.id}
                    className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm"
                  >
                    <Text className="font-semibold text-gray-900 mb-2">
                      {post.title}
                    </Text>
                    <Text className="text-gray-700 text-sm leading-5 mb-3">
                      {post.content}
                    </Text>
                    <View className="flex-row justify-between items-center pt-3 border-t border-gray-100">
                      <Text className="text-xs text-gray-500">
                        {post.createdAt}
                      </Text>
                      <View className="flex-row gap-4">
                        <Pressable>
                          <Text className="text-blue-600 text-xs font-semibold">
                            ❤️ {post.likes || 0}
                          </Text>
                        </Pressable>
                        <Pressable>
                          <Text className="text-blue-600 text-xs font-semibold">
                            💬 {post.comments || 0}
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Tagged Posts Section */}
          {taggedPosts.length > 0 && (
            <View className="mb-8">
              <Text className="text-xl font-bold text-gray-900 mb-4">
                Marcado em ({taggedPosts.length})
              </Text>
              <View className="gap-3">
                {taggedPosts.map((post) => (
                  <View
                    key={post.id}
                    className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm"
                  >
                    <Text className="font-semibold text-gray-900 mb-1">
                      {post.title}
                    </Text>
                    <Text className="text-gray-600 text-xs mb-2">
                      por {post.authorName}
                    </Text>
                    <Text className="text-gray-700 text-sm leading-5 mb-3">
                      {post.content}
                    </Text>
                    <View className="flex-row justify-between items-center pt-3 border-t border-gray-100">
                      <Text className="text-xs text-gray-500">
                        {post.createdAt}
                      </Text>
                      <View className="flex-row gap-4">
                        <Pressable>
                          <Text className="text-blue-600 text-xs font-semibold">
                            ❤️ {post.likes || 0}
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
