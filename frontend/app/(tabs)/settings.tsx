import { View, Text, ScrollView, Pressable, Switch } from 'react-native';
import {
  Bell,
  Lock,
  Globe,
  HelpCircle,
  Info,
  ChevronRight,
  LogOut,
} from 'lucide-react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuthContext } from '@/frontend/contexts/AuthContext';

export default function SettingsScreen() {
  const router = useRouter();
  const { logout } = useAuthContext();
  const [notifications, setNotifications] = useState(true);

  const handleLogout = async () => {
    await logout();
    router.replace('/');
  };

  return (
    <View className="flex-1 bg-gray-50">
      <View className="pt-12 px-6 pb-4 bg-white border-b border-gray-200">
        <Text className="text-3xl font-bold text-gray-900">Configurações</Text>
      </View>

      <ScrollView className="flex-1">
        <View className="bg-white mt-4">
          <View className="px-6 py-3 border-b border-gray-100">
            <Text className="text-xs font-semibold text-gray-500 uppercase">
              Preferências
            </Text>
          </View>

          <View className="flex-row items-center justify-between px-6 py-4 border-b border-gray-100">
            <View className="flex-row items-center flex-1">
              <Bell size={20} color="#64748b" />
              <Text className="text-gray-900 ml-3 text-base">
                Notificações
              </Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#d1d5db', true: '#93c5fd' }}
              thumbColor={notifications ? '#0ea5e9' : '#f3f4f6'}
            />
          </View>


          <Pressable className="flex-row items-center justify-between px-6 py-4 active:bg-gray-50">
            <View className="flex-row items-center flex-1">
              <Globe size={20} color="#64748b" />
              <Text className="text-gray-900 ml-3 text-base">Idioma</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-gray-500 mr-2">Português BR</Text>
              <ChevronRight size={20} color="#94a3b8" />
            </View>
          </Pressable>
        </View>

        <View className="bg-white mt-4">
          <View className="px-6 py-3 border-b border-gray-100">
            <Text className="text-xs font-semibold text-gray-500 uppercase">
              Segurança
            </Text>
          </View>

          <Pressable className="flex-row items-center justify-between px-6 py-4 border-b border-gray-100 active:bg-gray-50">
            <View className="flex-row items-center flex-1">
              <Lock size={20} color="#64748b" />
              <Text className="text-gray-900 ml-3 text-base">
                Privacidade & Segurança
              </Text>
            </View>
            <ChevronRight size={20} color="#94a3b8" />
          </Pressable>
        </View>

        <View className="bg-white mt-4">
          <View className="px-6 py-3 border-b border-gray-100">
            <Text className="text-xs font-semibold text-gray-500 uppercase">
              Suporte
            </Text>
          </View>

          <Pressable className="flex-row items-center justify-between px-6 py-4 border-b border-gray-100 active:bg-gray-50">
            <View className="flex-row items-center flex-1">
              <HelpCircle size={20} color="#64748b" />
              <Text className="text-gray-900 ml-3 text-base">Central de Ajuda</Text>
            </View>
            <ChevronRight size={20} color="#94a3b8" />
          </Pressable>

          <Pressable className="flex-row items-center justify-between px-6 py-4 active:bg-gray-50">
            <View className="flex-row items-center flex-1">
              <Info size={20} color="#64748b" />
              <Text className="text-gray-900 ml-3 text-base">Sobre</Text>
            </View>
            <ChevronRight size={20} color="#94a3b8" />
          </Pressable>
        </View>

        <View className="p-6">
          <Text className="text-center text-gray-500 text-sm">
            Version 1.0.0
          </Text>
        </View>

        <View className="p-6 mb-6">
          <Pressable
            onPress={handleLogout}
            className="bg-red-500 active:bg-red-600 rounded-2xl p-4 flex-row items-center justify-center gap-2"
          >
            <LogOut size={20} color="#ffffff" />
            <Text className="text-white font-semibold text-base">
              Sair da Conta
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
