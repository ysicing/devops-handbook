import { DaLao } from './dalao';
import { Friends } from './friend';
import { InviteLink } from './Invitelink';
import { Tools } from './tools';
import { YsicingService } from './ysicing';

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
    name: '友链👨‍💻',
    resources: friends,
  },
  {
    name: '站长服务🐕',
    resources: YsicingService,
  },
  {
    name: '每周必刷🔥',
    resources: DaLao,
  },
  {
    name: '邀请链接',
    resources: InviteLink,
  },
  {
    name: '工具',
    resources: Tools,
  },
];
