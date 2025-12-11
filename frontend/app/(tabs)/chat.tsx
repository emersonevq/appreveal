import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function ChatScreen() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/pages/chat');
  }, [router]);

  return null;
}
