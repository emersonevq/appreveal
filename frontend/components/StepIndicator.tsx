import { View, Text } from 'react-native';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <View className="gap-3 mb-8">
      <View className="flex-row gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <View
            key={index}
            className={`flex-1 h-2 rounded-full transition-colors ${
              index < currentStep ? 'bg-sky-500' : 'bg-gray-200'
            }`}
          />
        ))}
      </View>
      <Text className="text-sm text-gray-600">
        Etapa {currentStep} de {totalSteps}
      </Text>
    </View>
  );
}
