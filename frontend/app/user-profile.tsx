import { View, Text, ScrollView, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ProfileCard } from '@/frontend/components/profile/ProfileCard';
import { ScrapsList } from '@/frontend/components/profile/ScrapsList';
import { TestimonialsList } from '@/frontend/components/profile/TestimonialsList';
import { PostsList } from '@/frontend/components/profile/PostsList';
import { mockOtherUsers } from '@/frontend/mocks/users';
import { mockScraps, mockTestimonials } from '@/frontend/mocks/scraps';
import { mockUserPosts, mockPosts } from '@/frontend/mocks/posts';

export default function UserProfileScreen() {
  const { userId } = useLocalSearchParams();
  const user = mockOtherUsers.find((u) => u.id === userId) || mockOtherUsers[0];

  const userPosts = mockUserPosts.filter((post) => post.userId === userId);
  const taggedPosts = mockPosts.filter((post) =>
    post.taggedUsers?.includes(user.fullName),
  );

  const handleMessage = () => {
    Alert.alert('Enviar Mensagem', `Abrir chat com ${user.fullName}`);
  };

  const handleReplyScrap = (scrapId: string) => {
    Alert.alert('Responder Scrap', `Respondendo ao scrap ${scrapId}`);
  };

  const handlePostPress = (postId: string) => {
    Alert.alert('Post', `Abrindo post ${postId}`);
  };

  const handleLikePost = (postId: string) => {
    Alert.alert('Curtir', `Post ${postId} curtido`);
  };

  const handleFriendClick = () => {
    Alert.alert('Amigos', 'Abrir lista de amigos');
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="pt-12 px-6 pb-4 bg-white border-b border-gray-200 flex-row items-center">
        <Text className="text-3xl font-bold text-gray-900">Perfil</Text>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 py-6 gap-6">
          {/* Profile Card */}
          <ProfileCard
            user={user}
            isOwnProfile={false}
            onMessage={handleMessage}
            onFriendClick={handleFriendClick}
          />

          {/* Scraps Section */}
          <ScrapsList
            scraps={mockScraps}
            isOwnProfile={false}
            onReplyScrap={handleReplyScrap}
          />

          {/* Testimonials Section */}
          <TestimonialsList
            testimonials={mockTestimonials}
            isOwnProfile={false}
          />

          {/* User Posts Section */}
          {userPosts.length > 0 && (
            <PostsList
              posts={userPosts}
              title="Posts"
              isOwnProfile={false}
              onPostPress={handlePostPress}
              onLike={handleLikePost}
            />
          )}

          {/* Tagged Posts Section */}
          {taggedPosts.length > 0 && (
            <PostsList
              posts={taggedPosts}
              title="Marcado em"
              isOwnProfile={false}
              onPostPress={handlePostPress}
              onLike={handleLikePost}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}
