import { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';

interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
}

export function PasswordInput({
  value,
  onChangeText,
  placeholder = 'Senha',
  error,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="w-full gap-2">
      <View
        className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border ${
          error ? 'border-red-300' : 'border-gray-200'
        }`}>
        <TextInput
          className="flex-1 text-base text-gray-900"
          placeholderTextColor="#94a3b8"
          placeholder={placeholder}
          secureTextEntry={!showPassword}
          value={value}
          onChangeText={onChangeText}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)} className="p-2">
          {showPassword ? (
            <EyeOff size={20} color="#64748b" />
          ) : (
            <Eye size={20} color="#64748b" />
          )}
        </Pressable>
      </View>
      {error && <Text className="text-red-500 text-sm">{error}</Text>}
    </View>
  );
}
