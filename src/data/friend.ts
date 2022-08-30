export type Friend = {
  title: string;
  description?: string;
  website: string;
  avatar?: any;
};

export const Friends: Friend[] = [
  {
    title: '博客umami',
    description: 'blog.ysicing.net实时访问',
    website: 'https://umami.external.ysicing.net/share/MYQbDFlN/blog.ysicing.net',
    avatar: require('./avatar/umami.png'),
  },
  {
    title: '镜像-博客umami',
    description: 'ysicing.me实时访问',
    website: 'https://umami.external.ysicing.net/share/YHVuuQQP/ysicing.me',
    avatar: require('./avatar/umami.png'),
  },
];

export function sortFriend() {
  const result = Friends;

  return result;
}
