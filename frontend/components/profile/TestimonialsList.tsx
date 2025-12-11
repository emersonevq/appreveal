import { View, Text, ScrollView } from 'react-native';
import { Star } from 'lucide-react-native';
import { Avatar } from '@/frontend/components/Avatar';
import type { Testimonial } from '@/frontend/types/user';

interface TestimonialsListProps {
  testimonials: Testimonial[];
  isOwnProfile: boolean;
}

export function TestimonialsList({
  testimonials,
  isOwnProfile,
}: TestimonialsListProps) {
  if (testimonials.length === 0) {
    return (
      <View className="bg-white rounded-2xl p-6 items-center">
        <Text className="text-gray-500">
          {isOwnProfile
            ? 'Você ainda não tem depoimentos'
            : 'Este usuário não tem depoimentos'}
        </Text>
      </View>
    );
  }

  return (
    <View className="bg-white rounded-2xl overflow-hidden border border-gray-100">
      <View className="px-6 py-4 border-b border-gray-200">
        <Text className="text-lg font-bold text-gray-900">
          Depoimentos ({testimonials.length})
        </Text>
      </View>

      <ScrollView nestedScrollEnabled={true} className="max-h-96">
        {testimonials.map((testimonial) => (
          <View
            key={testimonial.id}
            className="px-6 py-4 border-b border-gray-100 last:border-b-0 bg-yellow-50"
          >
            {/* Header */}
            <View className="flex-row items-center gap-3 mb-3">
              <Avatar
                source={
                  testimonial.authorAvatar
                    ? { uri: testimonial.authorAvatar }
                    : undefined
                }
                initials={testimonial.authorInitials}
                size="sm"
              />
              <View className="flex-1">
                <Text className="font-semibold text-gray-900">
                  {testimonial.authorFullName}
                </Text>
                <Text className="text-xs text-gray-500 mt-0.5">
                  {testimonial.createdAt}
                </Text>
              </View>
            </View>

            {/* Stars */}
            <View className="flex-row gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  color="#fbbf24"
                  fill="#fbbf24"
                  strokeWidth={2}
                />
              ))}
            </View>

            {/* Content */}
            <Text className="text-gray-700 leading-5">
              {testimonial.content}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
