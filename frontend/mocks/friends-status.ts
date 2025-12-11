export type UserStatus = 'online' | 'busy' | 'away' | 'offline';

export interface FriendStatus {
  userId: string;
  name: string;
  initials: string;
  avatar: string;
  status: UserStatus;
  statusLabel: string;
  currentlyPlaying?: {
    title: string;
    artist: string;
    emoji: string;
  };
}

export const friendsStatusList: FriendStatus[] = [
  {
    userId: '2',
    name: 'Maria Santos',
    initials: 'MS',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    status: 'online',
    statusLabel: 'Disponível',
    currentlyPlaying: {
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      emoji: '🎵',
    },
  },
  {
    userId: '3',
    name: 'Pedro Oliveira',
    initials: 'PO',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    status: 'offline',
    statusLabel: 'Offline',
  },
  {
    userId: '4',
    name: 'Ana Costa',
    initials: 'AC',
    avatar: 'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=100&q=80',
    status: 'busy',
    statusLabel: 'Ocupado',
    currentlyPlaying: {
      title: 'Tocando violão',
      artist: 'JP Rock',
      emoji: '🎸',
    },
  },
  {
    userId: '5',
    name: 'Carlos Silva',
    initials: 'CS',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    status: 'away',
    statusLabel: 'Ausente',
  },
];

export const getStatusColor = (status: UserStatus) => {
  switch (status) {
    case 'online':
      return '#10b981'; // green
    case 'busy':
      return '#ef4444'; // red
    case 'away':
      return '#f59e0b'; // amber
    case 'offline':
      return '#6b7280'; // gray
    default:
      return '#6b7280';
  }
};

export const getStatusIcon = (status: UserStatus) => {
  switch (status) {
    case 'online':
      return '●';
    case 'busy':
      return '●';
    case 'away':
      return '●';
    case 'offline':
      return '●';
    default:
      return '●';
  }
};
