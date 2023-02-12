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
    website: 'https://umami.external.ysicing.net/share/ZkVuBlLX/%E5%8D%9A%E5%AE%A2',
    avatar: require('./avatar/umami.png'),
  },
  {
    title: '镜像-博客umami',
    description: 'ysicing.me实时访问',
    website: 'https://umami.external.ysicing.net/share/LnFwnhur/%E5%8D%9A%E5%AE%A2',
    avatar: require('./avatar/umami.png'),
  },
];

export function sortFriend() {
  const result = Friends;

  return result;
}
