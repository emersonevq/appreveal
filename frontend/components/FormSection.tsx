import { View, Text, ScrollView } from 'react-native';
import { ReactNode } from 'react';

interface FormSectionProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function FormSection({
  children,
  title,
  description,
}: FormSectionProps) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 gap-6">
        {title && (
          <View className="gap-2">
            <Text className="text-2xl font-bold text-gray-900">{title}</Text>
            {description && (
              <Text className="text-base text-gray-600">{description}</Text>
            )}
          </View>
        )}
        <View className="gap-4">{children}</View>
      </View>
    </ScrollView>
  );
}
