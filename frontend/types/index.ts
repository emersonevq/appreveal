export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
}

export interface Post {
  id: string;
  userId: string;
  title: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  createdAt: Date;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code: string;
  details?: Record<string, unknown>;
}

export type { Post as PostItem } from './post';
export type { ChatMessage, Conversation } from './chat';
export type { UserProfile, Scrap, Testimonial } from './user';
