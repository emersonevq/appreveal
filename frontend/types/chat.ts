export interface ChatMessage {
  id: string;
  conversationId: string;
  userId: string;
  userFullName: string;
  userAvatar?: string;
  userInitials: string;
  content: string;
  createdAt: string;
  editedAt?: string;
  isOwn: boolean;
}

export interface Conversation {
  id: string;
  userId: string;
  userFullName: string;
  userAvatar?: string;
  userInitials: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: ChatMessage[];
}
