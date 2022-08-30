import {Friends} from './friend';
export interface Website {
  name: string;
  logo: string;
  desc?: string;
  href: string;
  tags?: string[];
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
    name: '工具',
    websites: [
      {
        name: 'JSON-to-Go',
        desc: 'Convert JSON to Go struct',
        logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/FD715D45-8A4B-4B77-BDA1-D75D7226AACB.jpeg-1609660318596',
        href: 'https://mholt.github.io/json-to-go/',
        tags: ['工具'],
      }
    ],
  },
];
