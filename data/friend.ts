export type Friend = {
  title: string;
  description?: string;
  website: string;
  avatar?: any;
};

export const Friends: Friend[] = [
  {
    title: 'M言M语',
    description: 'M言M语',
    website: 'https://mikizhuzhu.cn',
    avatar: require('./avatar/default.png'),
  },
  {
    title: '愧怍',
    description: '愧怍, 博客主题Owner',
    website: 'https://kuizuo.cn',
    avatar: 'https://kuizuo.cn/img/logo.png',
  },
];

export function sortFriend() {
  const result = Friends;

  return result;
}
