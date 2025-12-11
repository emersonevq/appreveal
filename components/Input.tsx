import { View, Text, TextInput, TextInputProps } from 'react-native';
import { ReactNode } from 'react';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  ...textInputProps
}: InputProps) {
  return (
    <View className="w-full">
      {label && (
        <Text className="text-gray-700 font-medium mb-2 text-sm">{label}</Text>
      )}

      <View
        className={`flex-row items-center bg-gray-50 rounded-xl px-4 py-3 border ${
          error ? 'border-red-300' : 'border-gray-200'
        }`}>
        {leftIcon && <View className="mr-3">{leftIcon}</View>}

        <TextInput
          className="flex-1 text-base text-gray-900"
          placeholderTextColor="#94a3b8"
          {...textInputProps}
        />

        {rightIcon && <View className="ml-3">{rightIcon}</View>}
      </View>

      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
}
