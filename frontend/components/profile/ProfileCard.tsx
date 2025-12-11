import { View, Text, Image, Pressable } from 'react-native';
import { Edit2, MessageCircle } from 'lucide-react-native';
import { Avatar } from '@/frontend/components/Avatar';
import type { UserProfile } from '@/frontend/types/user';

interface ProfileCardProps {
  user: UserProfile;
  isOwnProfile: boolean;
  onEdit?: () => void;
  onMessage?: () => void;
  onFriendClick?: () => void;
}

export function ProfileCard({
  user,
  isOwnProfile,
  onEdit,
  onMessage,
  onFriendClick,
}: ProfileCardProps) {
  return (
    <View className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      {/* Cover Image */}
      {user.coverImage && (
        <Image
          source={{ uri: user.coverImage }}
          className="w-full h-48"
          resizeMode="cover"
        />
      )}
      {!user.coverImage && (
        <View className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600" />
      )}

      {/* Profile Content */}
      <View className="px-6 pb-6">
        {/* Avatar positioned over cover */}
        <View className="flex-row items-end justify-between -mt-12 mb-4">
          <Avatar source={user.avatar ? { uri: user.avatar } : undefined} initials={user.initials} size="xl" />

          <View className="flex-row gap-3">
            {isOwnProfile && onEdit && (
              <Pressable
                onPress={onEdit}
                className="bg-blue-500 active:bg-blue-600 rounded-full p-3"
              >
                <Edit2 size={20} color="#ffffff" />
              </Pressable>
            )}

            {!isOwnProfile && onMessage && (
              <Pressable
                onPress={onMessage}
                className="bg-blue-500 active:bg-blue-600 rounded-full p-3"
              >
                <MessageCircle size={20} color="#ffffff" />
              </Pressable>
            )}
          </View>
        </View>

        {/* Name and bio */}
        <Text className="text-2xl font-bold text-gray-900 mb-1">
          {user.fullName}
        </Text>

        {user.location && (
          <Text className="text-gray-600 text-sm mb-3">{user.location}</Text>
        )}

        {user.bio && (
          <Text className="text-gray-700 leading-5 mb-4">{user.bio}</Text>
        )}

        {/* Stats */}
        <View className="flex-row justify-around py-4 border-t border-gray-200">
          <Pressable
            onPress={onFriendClick}
            className="items-center active:opacity-70"
          >
            <Text className="text-2xl font-bold text-gray-900">
              {user.friendsCount}
            </Text>
            <Text className="text-gray-600 text-xs mt-1">
              {user.friendsCount === 1 ? 'Amigo' : 'Amigos'}
            </Text>
          </Pressable>

          <View className="items-center">
            <Text className="text-2xl font-bold text-gray-900">
              {user.postsCount}
            </Text>
            <Text className="text-gray-600 text-xs mt-1">
              {user.postsCount === 1 ? 'Post' : 'Posts'}
            </Text>
          </View>

          <View className="items-center">
            <Text className="text-2xl font-bold text-gray-900">
              {user.unreadMessages}
            </Text>
            <Text className="text-gray-600 text-xs mt-1">
              {user.unreadMessages === 1 ? 'Msg' : 'Msgs'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
