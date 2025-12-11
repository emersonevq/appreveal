import { View, Text, Image, ImageSourcePropType } from 'react-native';

interface AvatarProps {
  source?: ImageSourcePropType;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Avatar({ source, initials, size = 'md' }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-3xl',
  };

  if (source) {
    return (
      <Image
        source={source}
        className={`${sizeClasses[size]} rounded-full`}
        resizeMode="cover"
      />
    );
  }

  return (
    <View
      className={`${sizeClasses[size]} rounded-full bg-blue-500 items-center justify-center`}>
      <Text className={`${textSizeClasses[size]} font-semibold text-white`}>
        {initials?.slice(0, 2).toUpperCase() || '?'}
      </Text>
    </View>
  );
}
