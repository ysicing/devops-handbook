import React, { useEffect }  from 'react'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import 'artalk/dist/Artalk.css'
import Artalk from 'artalk'

export default function Comment() {
   useEffect(() => {
    let artalk: any = null;
    if (ExecutionEnvironment.canUseDOM) {
      artalk = Artalk.init({
      el: '#comment',
      pageKey:   `${location.pathname}`,
      pageTitle: `${document.title}`,
      server:    'https://artalk.ysicing.cloud/',
      site:      '缘生笔记',
      // ...
    });
    }
    return () => {
      if (artalk) artalk.destroy();
    }
   })

  return (
    <> <div id="comment" className="artalk-comments" /></>
  )
}
