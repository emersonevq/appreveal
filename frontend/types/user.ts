export interface UserProfile {
  id: string;
  fullName: string;
  avatar?: string;
  initials: string;
  coverImage?: string;
  bio?: string;
  location?: string;
  friendsCount: number;
  postsCount: number;
  unreadMessages: number;
}

export interface Scrap {
  id: string;
  userId: string;
  authorFullName: string;
  authorAvatar?: string;
  authorInitials: string;
  content: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  userId: string;
  authorFullName: string;
  authorAvatar?: string;
  authorInitials: string;
  content: string;
  createdAt: string;
}
