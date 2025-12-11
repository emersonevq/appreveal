import type { UserProfile } from '@/frontend/types/user';

export const mockCurrentUser: UserProfile = {
  id: '1',
  fullName: 'João Silva',
  initials: 'JS',
  coverImage:
    'https://images.unsplash.com/photo-1579546413849-f6e25d8c6876?w=800&q=80',
  avatar:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  bio: 'Desenvolvedor | Apaixonado por tecnologia e café',
  location: 'São Paulo, Brasil',
  friendsCount: 342,
  postsCount: 48,
  unreadMessages: 5,
};

export const mockOtherUsers: UserProfile[] = [
  {
    id: '2',
    fullName: 'Maria Santos',
    initials: 'MS',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    coverImage:
      'https://images.unsplash.com/photo-1577720643272-265ea5e6c19f?w=800&q=80',
    bio: 'Designer | Criando coisas lindas',
    location: 'Rio de Janeiro, Brasil',
    friendsCount: 521,
    postsCount: 73,
    unreadMessages: 0,
  },
  {
    id: '3',
    fullName: 'Pedro Oliveira',
    initials: 'PO',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    coverImage:
      'https://images.unsplash.com/photo-1489980557617-b5c8a4d19001?w=800&q=80',
    bio: 'Fotógrafo amador',
    location: 'Belo Horizonte, Brasil',
    friendsCount: 289,
    postsCount: 156,
    unreadMessages: 2,
  },
  {
    id: '4',
    fullName: 'Ana Costa',
    initials: 'AC',
    avatar:
      'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=100&q=80',
    coverImage:
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80',
    bio: 'Viajante e exploradora',
    location: 'Curitiba, Brasil',
    friendsCount: 612,
    postsCount: 234,
    unreadMessages: 1,
  },
];
