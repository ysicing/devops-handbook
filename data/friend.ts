export type Friend = {
  title: string;
  description?: string;
  website: string;
  avatar?: any;
};

export const Friends: Friend[] = [
  // https://www.unmz.net/
  {
    title: 'Faritor',
    description: 'Faritor',
    website: 'https://www.unmz.net?blog_source=ysicing.me',
    avatar: 'https://www.unmz.net/Picture/Avatar.png',
  },
  {
    title: 'M言M语',
    description: 'M言M语',
    website: 'https://mikizhuzhu.cn?blog_source=ysicing.me',
    avatar: 'https://mikizhuzhu.cn/wp-content/uploads/2023/03/cropped-WechatIMG3.jpeg',
  },
];

export function sortFriend() {
  const result = Friends;

  return result;
}
