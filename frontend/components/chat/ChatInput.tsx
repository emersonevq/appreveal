import { View, TextInput, Pressable, Text } from 'react-native';
import { Send, X } from 'lucide-react-native';
import { useState } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
  isEditing?: boolean;
  editingText?: string;
  onCancelEdit?: () => void;
  disabled?: boolean;
}

export function ChatInput({
  onSend,
  placeholder = 'Digite uma mensagem...',
  isEditing = false,
  editingText = '',
  onCancelEdit,
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  const handleCancel = () => {
    setMessage('');
    onCancelEdit?.();
  };

  return (
    <View className="px-4 py-3 border-t border-gray-200 bg-white gap-3">
      {isEditing && (
        <View className="flex-row items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
          <Text className="text-blue-700 text-sm font-semibold flex-1">
            Editando mensagem...
          </Text>
          <Pressable
            onPress={handleCancel}
            className="active:opacity-70"
          >
            <X size={16} color="#3b82f6" />
          </Pressable>
        </View>
      )}

      <View className="flex-row items-center gap-3">
        <TextInput
          value={isEditing ? editingText : message}
          onChangeText={isEditing ? () => {} : setMessage}
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-gray-900"
          multiline
          maxLength={500}
          editable={!disabled && !isEditing}
        />

        <Pressable
          onPress={handleSend}
          disabled={disabled || !message.trim()}
          className={`rounded-full p-2.5 ${
            disabled || !message.trim()
              ? 'bg-gray-300'
              : 'bg-blue-500 active:bg-blue-600'
          }`}
        >
          <Send size={20} color="#ffffff" />
        </Pressable>
      </View>
    </View>
  );
}
