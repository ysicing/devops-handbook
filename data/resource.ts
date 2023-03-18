import { Friends } from './friend';
import { InviteLink } from './Invitelink';

export interface Resource {
  name: string;
  logo: string;
  desc?: string;
  href: string;
  tags?: string[];
  disableChina?: boolean;
}

export interface ResourceCategory {
  name: string;
  resources: Resource[];
}

const friends: Resource[] = Friends.map((f) => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  };
});

export const resourceData: ResourceCategory[] = [
  {
    name: '友链',
    resources: friends,
  },
  {
    name: '站长服务',
    resources: [
      {
        name: '博客umami',
        desc: 'ysicing.me实时访问',
        href: 'https://umami.external.ysicing.net/share/LnFwnhur/%E5%8D%9A%E5%AE%A2',
        logo: require('./avatar/umami.png'),
      },
      {
        name: '博客镜像umami',
        desc: 'blog.ysicing.net实时访问',
        href: 'https://umami.external.ysicing.net/share/ZkVuBlLX/%E5%8D%9A%E5%AE%A2',
        logo: require('./avatar/umami.png'),
      },
      {
        name: 'Status-云监控',
        desc: 'Status',
        href: 'https://status.ysicing.cloud',
        logo: require('./avatar/default.png'),
      },
      {
        name: 'IP查询',
        desc: 'IP查询',
        href: 'https://ip.ysicing.cloud',
        logo: require('./avatar/default.png'),
      },
      {
        name: '云缘生镜像站',
        desc: '云缘生镜像站',
        href: 'https://mirrors.ysicing.cloud',
        logo: require('./avatar/default.png'),
      },
      {
        name: '小声哔哔',
        desc: '小声哔哔',
        href: 'https://note.ysicing.cloud/explore',
        logo: require('./avatar/default.png'),
      },
      {
        name: '云缘生IP解析趋势',
        desc: '云缘生IP解析趋势',
        href: 'https://ds.ysicing.cloud',
        logo: require('./avatar/default.png'),
      },
    ],
  },
  {
    name: '邀请链接',
    resources: InviteLink,
  },
  {
    name: '工具',
    resources: [
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
