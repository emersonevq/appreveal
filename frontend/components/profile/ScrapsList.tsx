import { View, Text, Pressable, ScrollView } from 'react-native';
import { Trash2, MoreVertical } from 'lucide-react-native';
import { Avatar } from '@/frontend/components/Avatar';
import type { Scrap } from '@/frontend/types/user';

interface ScrapsListProps {
  scraps: Scrap[];
  isOwnProfile: boolean;
  onDeleteScrap?: (scrapId: string) => void;
  onReplyScrap?: (scrapId: string) => void;
}

export function ScrapsList({
  scraps,
  isOwnProfile,
  onDeleteScrap,
  onReplyScrap,
}: ScrapsListProps) {
  if (scraps.length === 0) {
    return (
      <View className="bg-white rounded-2xl p-6 items-center">
        <Text className="text-gray-500">
          {isOwnProfile
            ? 'Você ainda não tem scraps'
            : 'Este usuário não tem scraps'}
        </Text>
      </View>
    );
  }

  return (
    <View className="bg-white rounded-2xl overflow-hidden border border-gray-100">
      <View className="px-6 py-4 border-b border-gray-200">
        <Text className="text-lg font-bold text-gray-900">
          Scraps ({scraps.length})
        </Text>
      </View>

      <ScrollView nestedScrollEnabled={true} className="max-h-96">
        {scraps.map((scrap) => (
          <View
            key={scrap.id}
            className="px-6 py-4 border-b border-gray-100 last:border-b-0"
          >
            {/* Header */}
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center gap-3 flex-1">
                <Avatar
                  source={
                    scrap.authorAvatar
                      ? { uri: scrap.authorAvatar }
                      : undefined
                  }
                  initials={scrap.authorInitials}
                  size="sm"
                />
                <View>
                  <Text className="font-semibold text-gray-900">
                    {scrap.authorFullName}
                  </Text>
                  <Text className="text-xs text-gray-500 mt-0.5">
                    {scrap.createdAt}
                  </Text>
                </View>
              </View>

              {isOwnProfile && onDeleteScrap && (
                <Pressable
                  onPress={() => onDeleteScrap(scrap.id)}
                  className="active:opacity-70"
                >
                  <Trash2 size={16} color="#ef4444" />
                </Pressable>
              )}
            </View>

            {/* Content */}
            <Text className="text-gray-700 leading-5 mb-3">
              {scrap.content}
            </Text>

            {/* Reply button */}
            {!isOwnProfile && onReplyScrap && (
              <Pressable
                onPress={() => onReplyScrap(scrap.id)}
                className="flex-row items-center gap-1 active:opacity-70"
              >
                <Text className="text-blue-500 text-sm font-semibold">
                  Responder scrap
                </Text>
              </Pressable>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
