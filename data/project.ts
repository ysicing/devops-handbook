export const projects: Project[] = [
  {
    title: 'ergo',
    description: '开源运维工具',
    preview: require('./avatar/default.png'),
    website: 'https://github.com/ysicing/ergo',
    source: 'https://github.com/ysicing/ergo',
    tags: ['opensource', 'favorite', 'product'],
    type: "personal",
  },
  {
    title: 'spot',
    description: '开通腾讯云竞价工具',
    preview: require('./avatar/default.png'),
    website: 'https://github.com/ysicing/spot',
    source: 'https://github.com/ysicing/spot',
    tags: ['opensource', 'product'],
    type: "personal",
  },
  {
    title: 'zentao-api',
    description: '禅道go sdk',
    preview: require('./avatar/default.png'),
    website: 'https://github.com/ysicing/go-zentao',
    source: 'https://github.com/ysicing/go-zentao',
    tags: ['opensource'],
    type: "personal",
  }
]

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'personal';


export type ProjectType = 'personal' | 'web' | 'app' | 'devops' | 'other'

export type Project = {
  title: string;
  description: string;
  preview?: any;
  website: string;
  source?: string | null;
  tags: TagType[];
  type: ProjectType
};

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
};

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce((group, project) => {
  const { type } = project
  group[type] = group[type] ?? []
  group[type].push(project)
  return group
}, {} as Record<ProjectType, Project[]>)


