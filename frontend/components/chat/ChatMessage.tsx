import { View, Text, Pressable, Alert } from 'react-native';
import { Edit2, Trash2, Copy } from 'lucide-react-native';
import { Avatar } from '@/frontend/components/Avatar';
import type { ChatMessage as ChatMessageType } from '@/frontend/types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
  onEdit?: (messageId: string) => void;
  onDelete?: (messageId: string) => void;
  onCopy?: (content: string) => void;
  showAvatar?: boolean;
}

export function ChatMessage({
  message,
  onEdit,
  onDelete,
  onCopy,
  showAvatar = true,
}: ChatMessageProps) {
  const isOwn = message.isOwn;

  const handleDeletePress = () => {
    Alert.alert(
      'Apagar mensagem',
      'Tem certeza que deseja apagar para todos?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Apagar',
          style: 'destructive',
          onPress: () => onDelete?.(message.id),
        },
      ],
    );
  };

  return (
    <View
      className={`flex-row gap-3 mb-4 ${isOwn ? 'justify-end' : 'justify-start'}`}
    >
      {!isOwn && showAvatar && (
        <Avatar
          source={message.userAvatar ? { uri: message.userAvatar } : undefined}
          initials={message.userInitials}
          size="sm"
        />
      )}

      <View className={`flex-row gap-2 ${isOwn ? 'flex-row-reverse' : ''}`}>
        <View
          className={`max-w-xs rounded-2xl px-4 py-3 ${
            isOwn ? 'bg-blue-500' : 'bg-gray-200'
          }`}
        >
          {!isOwn && !showAvatar && (
            <Text className="text-xs font-semibold text-gray-600 mb-1">
              {message.userFullName}
            </Text>
          )}
          <Text
            className={`leading-5 ${isOwn ? 'text-white' : 'text-gray-900'}`}
          >
            {message.content}
          </Text>

          {message.editedAt && (
            <Text
              className={`text-xs mt-1 ${
                isOwn ? 'text-blue-200' : 'text-gray-500'
              }`}
            >
              (editado)
            </Text>
          )}
        </View>

        {isOwn && (
          <View className="flex-row gap-1 items-center">
            {onEdit && (
              <Pressable
                onPress={() => onEdit(message.id)}
                className="active:opacity-70"
              >
                <Edit2 size={16} color="#3b82f6" />
              </Pressable>
            )}

            {onDelete && (
              <Pressable
                onPress={handleDeletePress}
                className="active:opacity-70"
              >
                <Trash2 size={16} color="#ef4444" />
              </Pressable>
            )}

            {onCopy && (
              <Pressable
                onPress={() => onCopy(message.content)}
                className="active:opacity-70"
              >
                <Copy size={16} color="#6b7280" />
              </Pressable>
            )}
          </View>
        )}

        {!isOwn && onCopy && (
          <View className="flex-row gap-1 items-center">
            <Pressable
              onPress={() => onCopy(message.content)}
              className="active:opacity-70"
            >
              <Copy size={16} color="#6b7280" />
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}
