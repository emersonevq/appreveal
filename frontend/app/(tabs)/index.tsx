import { View, Text, ScrollView, Alert } from 'react-native';
import { StatsBar } from '@/frontend/components/home/StatsBar';
import { PostCard } from '@/frontend/components/home/PostCard';
import { mockCurrentUser } from '@/frontend/mocks/users';
import { mockPosts } from '@/frontend/mocks/posts';

export default function HomeScreen() {
  const handleFriendsPress = () => {
    Alert.alert('Amigos', 'Abrir lista de amigos');
  };

  const handlePostsPress = () => {
    Alert.alert('Meus Posts', 'Ver todos os seus posts');
  };

  const handleMessagesPress = () => {
    Alert.alert('Mensagens', 'Navegar para mensagens');
  };

  const handleNotificationsPress = () => {
    Alert.alert('Notificações', 'Você não tem notificações');
  };

  const handlePostPress = (postId: string) => {
    Alert.alert('Post', `Abrindo post ${postId}`);
  };

  const handleLike = (postId: string) => {
    Alert.alert('Curtir', `Curtiu post ${postId}`);
  };

  const handleComment = (postId: string) => {
    Alert.alert('Comentar', `Comentando post ${postId}`);
  };

  const handleShare = (postId: string) => {
    Alert.alert('Compartilhar', `Compartilhando post ${postId}`);
  };

  const handleUserPress = (userId: string) => {
    Alert.alert('Perfil', `Abrir perfil do usuário ${userId}`);
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="pt-12 px-6 pb-4 bg-white border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900">Início</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 py-6 gap-6">
          {/* Stats Bar */}
          <StatsBar
            user={mockCurrentUser}
            onFriendsPress={handleFriendsPress}
            onPostsPress={handlePostsPress}
            onMessagesPress={handleMessagesPress}
            onNotificationsPress={handleNotificationsPress}
          />

          {/* Feed Title */}
          <View>
            <Text className="text-lg font-bold text-gray-900">Feed</Text>
            <Text className="text-sm text-gray-600 mt-0.5">
              Últimas postagens dos seus amigos
            </Text>
          </View>

          {/* Posts */}
          {mockPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onPress={handlePostPress}
              onLike={handleLike}
              onComment={handleComment}
              onShare={handleShare}
              onUserPress={handleUserPress}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
