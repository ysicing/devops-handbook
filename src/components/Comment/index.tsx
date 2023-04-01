import React, { useEffect }  from 'react'
import 'artalk/dist/Artalk.css'
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common'
import { useLocalPathname } from '@docusaurus/theme-common/internal';

export default function Comment(): JSX.Element {
  let pathname = useLocalPathname();
  if (pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }
  let mode = useColorMode().colorMode === 'dark'
  return (
    <BrowserOnly fallback={<div>Loading Comments...</div>}>
      {() => {
        const Artalk = require('artalk').default;
        useEffect(() => {
          Artalk.init({
            el: '#comment',
            pageKey: pathname,
            pageTitle: `${window.document.title}`,
            server: 'https://artalk.ysicing.cloud/',
            site: '缘生笔记',
            disablePicture: true,
          });
          Artalk.setDarkMode(mode);
        });
        return <div id="comment" className="artalk-comments" />;
      }}
    </BrowserOnly>
  );
}
