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
  {
    title: 'Status-云监控',
    description: 'Status',
    website: 'https://status.ysicing.cloud',
    avatar: require('./avatar/default.png'),
  },
  {
    title: 'IP查询',
    description: 'IP查询',
    website: 'https://ip.ysicing.cloud',
    avatar: require('./avatar/default.png'),
  },
  {
    title: '云缘生镜像站',
    description: '云缘生镜像站',
    website: 'https://mirrors.ysicing.cloud',
    avatar: require('./avatar/default.png'),
  },
];

export function sortFriend() {
  const result = Friends;

  return result;
}
