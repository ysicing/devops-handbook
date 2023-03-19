import React, { useEffect }  from 'react'
import 'artalk/dist/Artalk.css'
import Artalk from 'artalk'

export default function Comment() {
   useEffect(() => {
    const artalk = Artalk.init({
      el: '#comment',
      pageKey:   `${location.pathname}`,
      pageTitle: `${document.title}`,
      server:    'https://artalk.ysicing.cloud/',
      site:      '缘生笔记',
      // ...
    })
   })

  return (
    <div id="comment" className="artalk-comments" />
  )
}
