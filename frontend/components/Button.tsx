import { Pressable, Text, ActivityIndicator } from 'react-native';
import { ReactNode } from 'react';

interface ButtonProps {
  onPress: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

export function Button({
  onPress,
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-blue-500 active:bg-blue-600',
    secondary: 'bg-gray-500 active:bg-gray-600',
    outline: 'bg-transparent border-2 border-blue-500 active:bg-blue-50',
    ghost: 'bg-transparent active:bg-gray-100',
  };

  const sizeClasses = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const textColorClasses = {
    primary: 'text-white',
    secondary: 'text-white',
    outline: 'text-blue-500',
    ghost: 'text-gray-700',
  };

  const disabledClasses = disabled || loading ? 'opacity-50' : '';
  const widthClasses = fullWidth ? 'w-full' : '';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${widthClasses} rounded-xl items-center justify-center flex-row`}
    >
      {loading ? (
        <ActivityIndicator
          color={
            variant === 'outline' || variant === 'ghost' ? '#3b82f6' : '#ffffff'
          }
        />
      ) : (
        <Text
          className={`${textColorClasses[variant]} ${textSizeClasses[size]} font-semibold`}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
}
