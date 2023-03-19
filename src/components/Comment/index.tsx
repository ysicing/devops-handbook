import React, { FC, useEffect }  from 'react'
import 'artalk/dist/Artalk.css'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useLocalPathname } from '@docusaurus/theme-common/internal';
import Artalk from 'artalk'

export default function Comment(): JSX.Element {
  const pathname = useLocalPathname();
   useEffect(() => {
      let artalk: any = null;
      if (ExecutionEnvironment.canUseDOM) {
      artalk = Artalk.init({
      el: '#comment',
      pageKey:   `${location.pathname}`,
      pageTitle: `${document.title}`,
      server:    'https://artalk.ysicing.cloud/',
      site:      '缘生笔记',
    });
    }
   }, []);

  return (
     <BrowserOnly fallback={<div id="comment" className="artalk-comments" />}>
      {() => <div id="comment" className="artalk-comments" />}
     </BrowserOnly>
  )
}
