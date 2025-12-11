import type { Conversation, ChatMessage } from '@/frontend/types/chat';

export const mockChatMessages: ChatMessage[] = [
  {
    id: 'msg1',
    conversationId: 'conv1',
    userId: '2',
    userFullName: 'Maria Santos',
    userInitials: 'MS',
    userAvatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    content: 'Oi! Como você está?',
    createdAt: '2 horas atrás',
    isOwn: false,
  },
  {
    id: 'msg2',
    conversationId: 'conv1',
    userId: '1',
    userFullName: 'João Silva',
    userInitials: 'JS',
    userAvatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    content: 'Oi Maria! Tudo bem, e você?',
    createdAt: '2 horas atrás',
    isOwn: true,
  },
  {
    id: 'msg3',
    conversationId: 'conv1',
    userId: '2',
    userFullName: 'Maria Santos',
    userInitials: 'MS',
    userAvatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    content: 'Tudo ótimo! Vamos tomar um café em breve?',
    createdAt: '1 hora atrás',
    isOwn: false,
  },
  {
    id: 'msg4',
    conversationId: 'conv1',
    userId: '1',
    userFullName: 'João Silva',
    userInitials: 'JS',
    userAvatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    content: 'Ótimo! Esse fim de semana eu tenho tempo',
    createdAt: '1 hora atrás',
    isOwn: true,
  },
  {
    id: 'msg5',
    conversationId: 'conv1',
    userId: '2',
    userFullName: 'Maria Santos',
    userInitials: 'MS',
    userAvatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    content: 'Perfeito! 😊',
    createdAt: '30 minutos atrás',
    isOwn: false,
  },
];

export const mockConversations: Conversation[] = [
  {
    id: 'conv1',
    userId: '2',
    userFullName: 'Maria Santos',
    userInitials: 'MS',
    userAvatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    lastMessage: 'Perfeito! 😊',
    lastMessageTime: '30 minutos atrás',
    unreadCount: 0,
    messages: mockChatMessages,
  },
  {
    id: 'conv2',
    userId: '3',
    userFullName: 'Pedro Oliveira',
    userInitials: 'PO',
    userAvatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    lastMessage: 'Você viu aquele artigo sobre React?',
    lastMessageTime: '3 horas atrás',
    unreadCount: 2,
    messages: [
      {
        id: 'msg6',
        conversationId: 'conv2',
        userId: '3',
        userFullName: 'Pedro Oliveira',
        userInitials: 'PO',
        userAvatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
        content: 'Você viu aquele artigo sobre React?',
        createdAt: '3 horas atrás',
        isOwn: false,
      },
    ],
  },
  {
    id: 'conv3',
    userId: '4',
    userFullName: 'Ana Costa',
    userInitials: 'AC',
    userAvatar:
      'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=100&q=80',
    lastMessage: 'Vou te enviar as fotos da viagem!',
    lastMessageTime: '1 dia atrás',
    unreadCount: 3,
    messages: [
      {
        id: 'msg7',
        conversationId: 'conv3',
        userId: '4',
        userFullName: 'Ana Costa',
        userInitials: 'AC',
        userAvatar:
          'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=100&q=80',
        content: 'Vou te enviar as fotos da viagem!',
        createdAt: '1 dia atrás',
        isOwn: false,
      },
    ],
  },
];
