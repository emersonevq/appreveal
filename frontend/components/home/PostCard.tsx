import { View, Text, Image, Pressable } from 'react-native';
import { Heart, MessageCircle, Share2, MoreVertical } from 'lucide-react-native';
import { Avatar } from '@/frontend/components/Avatar';
import type { Post } from '@/frontend/types/post';

interface PostCardProps {
  post: Post;
  onPress?: (postId: string) => void;
  onLike?: (postId: string) => void;
  onComment?: (postId: string) => void;
  onShare?: (postId: string) => void;
  onUserPress?: (userId: string) => void;
}

export function PostCard({
  post,
  onPress,
  onLike,
  onComment,
  onShare,
  onUserPress,
}: PostCardProps) {
  return (
    <View className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-4 shadow-sm">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <Pressable
          onPress={() => onUserPress?.(post.userId)}
          className="flex-row items-center gap-3 flex-1 active:opacity-70"
        >
          <Avatar
            source={post.userAvatar ? { uri: post.userAvatar } : undefined}
            initials={post.userInitials}
            size="sm"
          />
          <View>
            <Text className="font-semibold text-gray-900">
              {post.userFullName}
            </Text>
            <Text className="text-xs text-gray-500 mt-0.5">
              {post.createdAt}
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => onPress?.(post.id)}
          className="active:opacity-70"
        >
          <MoreVertical size={18} color="#6b7280" />
        </Pressable>
      </View>

      {/* Content */}
      <Pressable
        onPress={() => onPress?.(post.id)}
        className="px-6 pb-4 active:opacity-70"
      >
        <Text className="text-gray-700 leading-5">{post.content}</Text>

        {post.taggedUsers && post.taggedUsers.length > 0 && (
          <Text className="text-xs text-gray-600 mt-2 italic">
            Com: {post.taggedUsers.join(', ')}
          </Text>
        )}
      </Pressable>

      {/* Image */}
      {post.image && (
        <Image
          source={{ uri: post.image }}
          className="w-full h-56"
          resizeMode="cover"
        />
      )}

      {/* Stats */}
      <View className="px-6 py-3 border-t border-gray-100 flex-row justify-between">
        <Text className="text-xs text-gray-600">
          {post.likes} {post.likes === 1 ? 'reação' : 'reações'}
        </Text>
        <View className="flex-row gap-4">
          <Text className="text-xs text-gray-600">
            {post.comments} {post.comments === 1 ? 'comentário' : 'comentários'}
          </Text>
          <Text className="text-xs text-gray-600">
            {post.shares} {post.shares === 1 ? 'compartilhamento' : 'compartilhamentos'}
          </Text>
        </View>
      </View>

      {/* Actions */}
      <View className="flex-row items-stretch border-t border-gray-100">
        <Pressable
          onPress={() => onLike?.(post.id)}
          className="flex-1 flex-row items-center justify-center gap-2 py-3 active:bg-gray-50 border-r border-gray-100"
        >
          <Heart
            size={18}
            color={post.liked ? '#ef4444' : '#6b7280'}
            fill={post.liked ? '#ef4444' : 'none'}
          />
          <Text
            className={`text-sm font-semibold ${
              post.liked ? 'text-red-500' : 'text-gray-600'
            }`}
          >
            Curtir
          </Text>
        </Pressable>

        <Pressable
          onPress={() => onComment?.(post.id)}
          className="flex-1 flex-row items-center justify-center gap-2 py-3 active:bg-gray-50 border-r border-gray-100"
        >
          <MessageCircle size={18} color="#6b7280" />
          <Text className="text-sm font-semibold text-gray-600">
            Comentar
          </Text>
        </Pressable>

        <Pressable
          onPress={() => onShare?.(post.id)}
          className="flex-1 flex-row items-center justify-center gap-2 py-3 active:bg-gray-50"
        >
          <Share2 size={18} color="#6b7280" />
          <Text className="text-sm font-semibold text-gray-600">
            Compartilhar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
