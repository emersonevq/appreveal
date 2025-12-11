import { View, Text, ScrollView, Alert } from 'react-native';
import { ProfileCard } from '@/frontend/components/profile/ProfileCard';
import { ScrapsList } from '@/frontend/components/profile/ScrapsList';
import { TestimonialsList } from '@/frontend/components/profile/TestimonialsList';
import { PostsList } from '@/frontend/components/profile/PostsList';
import { mockCurrentUser } from '@/frontend/mocks/users';
import { mockScraps, mockTestimonials } from '@/frontend/mocks/scraps';
import { mockUserPosts } from '@/frontend/mocks/posts';

export default function ProfileScreen() {
  const userPosts = mockUserPosts.filter((post) => post.userId === '1');
  const taggedPosts = mockUserPosts.filter((post) =>
    post.taggedUsers?.includes('João Silva'),
  );

  const handleEditProfile = () => {
    Alert.alert('Editar Perfil', 'Abrir formulário de edição');
  };

  const handleMessage = () => {
    Alert.alert('Enviar Mensagem', 'Abrir chat com este usuário');
  };

  const handleDeleteScrap = (scrapId: string) => {
    Alert.alert('Deletar Scrap', 'Scrap removido com sucesso');
  };

  const handleReplyScrap = (scrapId: string) => {
    Alert.alert('Responder Scrap', `Respondendo ao scrap ${scrapId}`);
  };

  const handlePostPress = (postId: string) => {
    Alert.alert('Post', `Abrindo post ${postId}`);
  };

  const handleDeletePost = (postId: string) => {
    Alert.alert('Deletar Post', 'Post removido com sucesso');
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
      <View className="pt-12 px-6 pb-4 bg-white border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900">Meu Perfil</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 py-6 gap-6">
          {/* Profile Card */}
          <ProfileCard
            user={mockCurrentUser}
            isOwnProfile={true}
            onEdit={handleEditProfile}
            onFriendClick={handleFriendClick}
          />

          {/* Scraps Section */}
          <ScrapsList
            scraps={mockScraps}
            isOwnProfile={true}
            onDeleteScrap={handleDeleteScrap}
          />

          {/* Testimonials Section */}
          <TestimonialsList
            testimonials={mockTestimonials}
            isOwnProfile={true}
          />

          {/* User Posts Section */}
          <PostsList
            posts={userPosts}
            title="Meus Posts"
            isOwnProfile={true}
            onPostPress={handlePostPress}
            onDelete={handleDeletePost}
            onLike={handleLikePost}
          />

          {/* Tagged Posts Section */}
          {taggedPosts.length > 0 && (
            <PostsList
              posts={taggedPosts}
              title="Marcado em"
              isOwnProfile={true}
              onPostPress={handlePostPress}
              onLike={handleLikePost}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}
