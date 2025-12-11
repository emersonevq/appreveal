import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import {
  Heart,
  MessageCircle,
  Share2,
  MoreVertical,
} from 'lucide-react-native';
import { Avatar } from '@/frontend/components/Avatar';
import type { Post } from '@/frontend/types/post';

interface PostsListProps {
  posts: Post[];
  title: string;
  isOwnProfile: boolean;
  onPostPress?: (postId: string) => void;
  onDelete?: (postId: string) => void;
  onLike?: (postId: string) => void;
}

export function PostsList({
  posts,
  title,
  isOwnProfile,
  onPostPress,
  onDelete,
  onLike,
}: PostsListProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <View className="bg-white rounded-2xl overflow-hidden border border-gray-100">
      <View className="px-6 py-4 border-b border-gray-200">
        <Text className="text-lg font-bold text-gray-900">
          {title} ({posts.length})
        </Text>
      </View>

      <ScrollView nestedScrollEnabled={true}>
        {posts.map((post) => (
          <Pressable
            key={post.id}
            onPress={() => onPostPress?.(post.id)}
            className="px-6 py-4 border-b border-gray-100 last:border-b-0 active:bg-gray-50"
          >
            {/* Header */}
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center gap-3 flex-1">
                <Avatar
                  source={
                    post.userAvatar ? { uri: post.userAvatar } : undefined
                  }
                  initials={post.userInitials}
                  size="sm"
                />
                <View className="flex-1">
                  <Text className="font-semibold text-gray-900">
                    {post.userFullName}
                  </Text>
                  <Text className="text-xs text-gray-500 mt-0.5">
                    {post.createdAt}
                  </Text>
                </View>
              </View>

              {isOwnProfile && onDelete && (
                <Pressable
                  onPress={() => onDelete(post.id)}
                  className="active:opacity-70"
                >
                  <MoreVertical size={18} color="#6b7280" />
                </Pressable>
              )}
            </View>

            {/* Content */}
            <Text className="text-gray-700 leading-5 mb-3">{post.content}</Text>

            {/* Image */}
            {post.image && (
              <Image
                source={{ uri: post.image }}
                className="w-full h-48 rounded-lg mb-3"
                resizeMode="cover"
              />
            )}

            {/* Tagged users */}
            {post.taggedUsers && post.taggedUsers.length > 0 && (
              <Text className="text-xs text-gray-600 mb-3 italic">
                Marcou: {post.taggedUsers.join(', ')}
              </Text>
            )}

            {/* Actions */}
            <View className="flex-row justify-around pt-3 border-t border-gray-100">
              <Pressable
                onPress={() => onLike?.(post.id)}
                className="flex-row items-center gap-2 active:opacity-70 flex-1 justify-center py-2"
              >
                <Heart
                  size={18}
                  color={post.liked ? '#ef4444' : '#6b7280'}
                  fill={post.liked ? '#ef4444' : 'none'}
                />
                <Text
                  className={`text-sm ${post.liked ? 'text-red-500' : 'text-gray-600'}`}
                >
                  {post.likes}
                </Text>
              </Pressable>

              <Pressable className="flex-row items-center gap-2 active:opacity-70 flex-1 justify-center py-2">
                <MessageCircle size={18} color="#6b7280" />
                <Text className="text-gray-600 text-sm">{post.comments}</Text>
              </Pressable>

              <Pressable className="flex-row items-center gap-2 active:opacity-70 flex-1 justify-center py-2">
                <Share2 size={18} color="#6b7280" />
                <Text className="text-gray-600 text-sm">{post.shares}</Text>
              </Pressable>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
