import type { Scrap, Testimonial } from '@/frontend/types/user';

export const mockScraps: Scrap[] = [
  {
    id: 'scrap1',
    userId: '1',
    authorFullName: 'Maria Santos',
    authorInitials: 'MS',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    content: 'João você é o melhor! Parabéns pelo sucesso no projeto! 🎉',
    createdAt: '3 dias atrás',
  },
  {
    id: 'scrap2',
    userId: '1',
    authorFullName: 'Pedro Oliveira',
    authorInitials: 'PO',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    content: 'Irmão, aquele café foi da hora demais!! Vamos repetir em breve?',
    createdAt: '1 semana atrás',
  },
  {
    id: 'scrap3',
    userId: '1',
    authorFullName: 'Ana Costa',
    authorInitials: 'AC',
    authorAvatar: 'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=100&q=80',
    content: 'Adorei te conhecer! Vamos viajar juntos em breve? 🌍',
    createdAt: '2 semanas atrás',
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: 'test1',
    userId: '1',
    authorFullName: 'Maria Santos',
    authorInitials: 'MS',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    content:
      'João é um profissional extraordinário! Sempre entrega resultados incríveis. Super recomendo! ⭐️⭐️⭐️⭐️⭐️',
    createdAt: '1 mês atrás',
  },
  {
    id: 'test2',
    userId: '1',
    authorFullName: 'Pedro Oliveira',
    authorInitials: 'PO',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    content:
      'Melhor pessoa para trabalhar. Responsável, criativo e muito dedicado. Vale a pena conhecer! ⭐️⭐️⭐️⭐️⭐️',
    createdAt: '2 meses atrás',
  },
];
