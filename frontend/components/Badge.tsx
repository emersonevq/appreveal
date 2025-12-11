import { View, Text } from 'react-native';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
}

export function Badge({ children, variant = 'primary', size = 'md' }: BadgeProps) {
  const variantClasses = {
    primary: 'bg-blue-100 border-blue-200',
    success: 'bg-green-100 border-green-200',
    warning: 'bg-yellow-100 border-yellow-200',
    error: 'bg-red-100 border-red-200',
    neutral: 'bg-gray-100 border-gray-200',
  };

  const textColorClasses = {
    primary: 'text-blue-700',
    success: 'text-green-700',
    warning: 'text-yellow-700',
    error: 'text-red-700',
    neutral: 'text-gray-700',
  };

  const sizeClasses = {
    sm: 'px-2 py-1',
    md: 'px-3 py-1.5',
    lg: 'px-4 py-2',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <View
      className={`${variantClasses[variant]} ${sizeClasses[size]} rounded-full border self-start`}>
      <Text
        className={`${textColorClasses[variant]} ${textSizeClasses[size]} font-semibold`}>
        {children}
      </Text>
    </View>
  );
}
