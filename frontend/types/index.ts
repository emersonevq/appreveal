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
