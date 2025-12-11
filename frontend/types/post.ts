export interface Post {
  id: string;
  userId: string;
  userFullName: string;
  userAvatar?: string;
  userInitials: string;
  content: string;
  image?: string;
  createdAt: string;
  likes: number;
  comments: number;
  shares: number;
  liked: boolean;
  taggedUsers?: string[];
}
