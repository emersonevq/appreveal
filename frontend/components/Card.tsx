import { View, Pressable } from 'react-native';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  onPress?: () => void;
  className?: string;
}

export function Card({
  children,
  variant = 'default',
  onPress,
  className = '',
}: CardProps) {
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    outlined: 'bg-transparent border-2 border-gray-300',
    elevated: 'bg-white shadow-lg',
  };

  const baseClasses = `rounded-2xl p-6 ${variantClasses[variant]} ${className}`;

  if (onPress) {
    return (
      <Pressable onPress={onPress} className={`${baseClasses} active:opacity-80`}>
        {children}
      </Pressable>
    );
  }

  return <View className={baseClasses}>{children}</View>;
}
