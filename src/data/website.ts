import {Friends} from './friend';
export interface Website {
  name: string;
  logo: string;
  desc?: string;
  href: string;
  tags?: string[];
  disableChina?: boolean;
}

export interface WebsiteCategory {
  name: string;
  websites: Website[];
}

const friends: Website[] = Friends.map((f) => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  };
});

export const websiteData: WebsiteCategory[] = [
  {
    name: '友链',
    websites: friends,
  },
  {
    name: '邀请链接',
    websites: [
      {
        name: '狗云',
        desc: '优质的云服务',
        logo: require('./avatar/dogyun.png'),
        href: 'https://www.dogyun.com/?ref=ysicing',
        tags: ['云服务'],
      },
      // {
      //   name: 'justmysocks',
      //   desc: '优质的科学服务',
      //   logo: require('./avatar/default.png'),
      //   href: 'https://justmysocks2.net/members/aff.php?aff=2191',
      //   tags: ['科学'],
      //   disableChina: true,
      // },
      // {
      //   name: '一元机场',
      //   desc: '优质的科学服务',
      //   logo: require('./avatar/default.png'),
      //   href: 'https://xn--4gq62f52gdss.com/#/register?code=tl6rVK1d',
      //   tags: ['科学'],
      //   disableChina: true,
      // }
    ],
  },
  {
    name: '工具',
    websites: [
      {
        name: 'JSON-to-Go',
        desc: 'Convert JSON to Go struct',
        logo: require('./avatar/default.png'),
        href: 'https://mholt.github.io/json-to-go/',
        tags: ['工具'],
      }
    ],
  },
];
