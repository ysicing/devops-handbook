"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8610],{6718:function(e,t,a){a.d(t,{Z:function(){return b}});var r=a(63366),n=(a(67294),a(86010)),i=a(20571),l=a(13488),o=a(83699),s=a(97325),c={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"},d=a(35944);function u(e){var t=e.sidebar;return(0,d.tZ)("aside",{className:"col col--3",children:(0,d.BX)("nav",{className:(0,n.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,d.tZ)("div",{className:(0,n.Z)(c.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,d.tZ)("ul",{className:(0,n.Z)(c.sidebarItemList,"clean-list"),children:t.items.map((function(e){return(0,d.tZ)("li",{className:c.sidebarItem,children:(0,d.tZ)(o.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var m=a(53086);function g(e){var t=e.sidebar;return(0,d.tZ)("ul",{className:"menu__list",children:t.items.map((function(e){return(0,d.tZ)("li",{className:"menu__list-item",children:(0,d.tZ)(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function h(e){return(0,d.tZ)(m.Zo,{component:g,props:e})}function Z(e){var t=e.sidebar,a=(0,l.i)();return null!=t&&t.items.length?"mobile"===a?(0,d.tZ)(h,{sidebar:t}):(0,d.tZ)(u,{sidebar:t}):null}var p=["sidebar","toc","children"];function b(e){var t=e.sidebar,a=e.toc,l=e.children,o=(0,r.Z)(e,p),s=t&&t.items.length>0;return(0,d.tZ)(i.Z,Object.assign({},o,{children:(0,d.tZ)("div",{className:"container margin-vert--lg",children:(0,d.BX)("div",{className:"row",children:[(0,d.tZ)(Z,{sidebar:t}),(0,d.tZ)("main",{className:(0,n.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog",children:l}),a&&(0,d.tZ)("div",{className:"col col--2",children:a})]})})}))}},42568:function(e,t,a){a.d(t,{Z:function(){return l}});a(67294);var r=a(97325),n=a(23672),i=a(35944);function l(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return(0,i.BX)("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,i.tZ)(n.Z,{permalink:a,title:(0,i.tZ)(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),l&&(0,i.tZ)(n.Z,{permalink:l,title:(0,i.tZ)(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},74883:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});a(67294);var r=a(86010),n=a(97325),i=a(23777),l=a(35463),o=a(23702),s=a(83699),c=a(6718),d=a(42568),u=a(33647),m=a(88884),g=a(35944);function h(e){var t,a=(t=(0,i.c)().selectMessage,function(e){return t(e,(0,n.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,n.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:a(e.count),tagName:e.label})}function Z(e){var t=h(e.tag);return(0,g.BX)(g.HY,{children:[(0,g.tZ)(l.d,{title:t}),(0,g.tZ)(u.Z,{tag:"blog_tags_posts"})]})}function p(e){var t=e.tag,a=e.items,r=e.sidebar,i=e.listMetadata,l=h(t);return(0,g.BX)(c.Z,{sidebar:r,children:[(0,g.BX)("header",{className:"margin-bottom--xl",children:[(0,g.tZ)("h1",{children:l}),(0,g.tZ)(s.Z,{href:t.allTagsPath,children:(0,g.tZ)(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,g.tZ)(m.Z,{items:a}),(0,g.tZ)(d.Z,{metadata:i})]})}function b(e){return(0,g.BX)(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogTagPostListPage),children:[(0,g.tZ)(Z,Object.assign({},e)),(0,g.tZ)(p,Object.assign({},e))]})}},94850:function(e,t,a){a.d(t,{Z:function(){return u}});a(67294);var r=a(97325),n=a(23702),i=a(63366),l=a(86010),o={iconEdit:"iconEdit_Z9Sw"},s=a(35944),c=["className"];function d(e){var t=e.className,a=(0,i.Z)(e,c);return(0,s.tZ)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(o.iconEdit,t),"aria-hidden":"true"},a,{children:(0,s.tZ)("g",{children:(0,s.tZ)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function u(e){var t=e.editUrl;return(0,s.BX)("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:n.k.common.editThisPage,children:[(0,s.tZ)(d,{}),(0,s.tZ)(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},23672:function(e,t,a){a.d(t,{Z:function(){return l}});a(67294);var r=a(86010),n=a(83699),i=a(35944);function l(e){var t=e.permalink,a=e.title,l=e.subLabel,o=e.isNext;return(0,i.BX)(n.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,i.tZ)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.tZ)("div",{className:"pagination-nav__label",children:a})]})}},53852:function(e,t,a){a.d(t,{Z:function(){return o}});a(67294);var r=a(86010),n=a(83699),i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"},l=a(35944);function o(e){var t=e.permalink,a=e.label,o=e.count;return(0,l.BX)(n.Z,{href:t,className:(0,r.Z)(i.tag,o?i.tagWithCount:i.tagRegular),children:[a,o&&(0,l.tZ)("span",{children:o})]})}},74597:function(e,t,a){a.d(t,{Z:function(){return s}});a(67294);var r=a(86010),n=a(97325),i=a(53852),l={tags:"tags_jXut",tag:"tag_QGVx"},o=a(35944);function s(e){var t=e.tags;return(0,o.BX)(o.HY,{children:[(0,o.tZ)("b",{children:(0,o.tZ)(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.tZ)("ul",{className:(0,r.Z)(l.tags,"padding--none","margin-left--sm"),children:t.map((function(e){var t=e.label,a=e.permalink;return(0,o.tZ)("li",{className:l.tag,children:(0,o.tZ)(i.Z,{label:t,permalink:a})},a)}))})]})}},79107:function(e,t,a){a.d(t,{C:function(){return s},n:function(){return o}});var r=a(67294),n=a(58755),i=a(35944),l=r.createContext(null);function o(e){var t=e.children,a=e.content,n=e.isBlogPostPage,o=function(e){var t=e.content,a=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==n&&n});return(0,i.tZ)(l.Provider,{value:o,children:t})}function s(){var e=(0,r.useContext)(l);if(null===e)throw new n.i6("BlogPostProvider");return e}},23777:function(e,t,a){a.d(t,{c:function(){return c}});var r=a(67294),n=a(39962),i=["zero","one","two","few","many","other"];function l(e){return i.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:l(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,n.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:l(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function c(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var n=a.select(t),i=a.pluralForms.indexOf(n);return r[Math.min(i,r.length-1)]}(a,t,e)}}}},2187:function(e,t,a){a.d(t,{Z:function(){return D}});a(67294);var r=a(86010),n=a(79107),i=a(79524),l=a(35944);function o(e){var t,a=e.children,r=e.className,o=(0,n.C)(),s=o.frontMatter,c=o.assets,d=(0,i.C)().withBaseUrl,u=null!=(t=c.image)?t:s.image;return(0,l.BX)("article",{className:r,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[u&&(0,l.tZ)("meta",{itemProp:"image",content:d(u,{absolute:!0})}),a]})}var s=a(83699),c={titleLink:"titleLink_BX2g"};function d(e){var t=e.className,a=(0,n.C)(),i=a.metadata,o=a.isBlogPostPage,d=i.permalink,u=i.title,m=o?"h1":"h2";return(0,l.tZ)(m,{className:(0,r.Z)(c.title,t),itemProp:"headline",children:o?u:(0,l.tZ)(s.Z,{itemProp:"url",to:d,className:c.titleLink,children:u})})}var u=a(97325),m=a(23777),g={container:"container_iJTo"};function h(e){var t,a=e.readingTime,r=(t=(0,m.c)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return(0,l.tZ)(l.HY,{children:r(a)})}function Z(e){var t=e.date,a=e.formattedDate;return(0,l.tZ)("time",{dateTime:t,itemProp:"datePublished",children:a})}function p(){return(0,l.tZ)(l.HY,{children:" \xb7 "})}function b(e){var t=e.className,a=(0,n.C)().metadata,i=a.date,o=a.formattedDate,s=a.readingTime;return(0,l.BX)("div",{className:(0,r.Z)(g.container,"margin-vert--md",t),children:[(0,l.tZ)(Z,{date:i,formattedDate:o}),void 0!==s&&(0,l.BX)(l.HY,{children:[(0,l.tZ)(p,{}),(0,l.tZ)(h,{readingTime:s})]})]})}function f(e){return e.href?(0,l.tZ)(s.Z,Object.assign({},e)):(0,l.tZ)(l.HY,{children:e.children})}function v(e){var t=e.author,a=e.className,n=t.name,i=t.title,o=t.url,s=t.imageURL,c=t.email,d=o||c&&"mailto:"+c||void 0;return(0,l.BX)("div",{className:(0,r.Z)("avatar margin-bottom--sm",a),children:[s&&(0,l.tZ)(f,{href:d,className:"avatar__photo-link",children:(0,l.tZ)("img",{className:"avatar__photo",src:s,alt:n})}),n&&(0,l.BX)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,l.tZ)("div",{className:"avatar__name",children:(0,l.tZ)(f,{href:d,itemProp:"url",children:(0,l.tZ)("span",{itemProp:"name",children:n})})}),i&&(0,l.tZ)("small",{className:"avatar__subtitle",itemProp:"description",children:i})]})]})}var P={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function N(e){var t=e.className,a=(0,n.C)(),i=a.metadata.authors,o=a.assets;if(0===i.length)return null;var s=i.every((function(e){return!e.name}));return(0,l.tZ)("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",s?P.imageOnlyAuthorRow:"row",t),children:i.map((function(e,t){var a;return(0,l.tZ)("div",{className:(0,r.Z)(!s&&"col col--6",s?P.imageOnlyAuthorCol:P.authorCol),children:(0,l.tZ)(v,{author:Object.assign({},e,{imageURL:null!=(a=o.authorsImageUrls[t])?a:e.imageURL})})},t)}))})}function _(){var e=(0,n.C)().isBlogPostPage;return(0,l.BX)("header",{children:[(0,l.tZ)(d,{}),e&&(0,l.BX)(l.HY,{children:[(0,l.tZ)(b,{}),(0,l.tZ)(N,{})]})]})}var k=a(63905),T=a(71469);function B(e){var t=e.children,a=e.className,i=(0,n.C)().isBlogPostPage;return(0,l.tZ)("div",{id:i?k.blogPostContainerID:void 0,className:(0,r.Z)("markdown",a),itemProp:"articleBody",children:(0,l.tZ)(T.Z,{children:t})})}var I=a(94850),w=a(74597),X=a(53852),C=a(63366),L=["blogPostTitle"];function A(){return(0,l.tZ)("b",{children:(0,l.tZ)(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function x(e){var t=e.blogPostTitle,a=(0,C.Z)(e,L);return(0,l.tZ)(s.Z,Object.assign({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a,{children:(0,l.tZ)(A,{})}))}var y=a(92814),R=a(51436),F={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y",blogPostInfo:"blogPostInfo_k7sy",blogPostInfoTags:"blogPostInfoTags_W9UY",blogPostAuthor:"blogPostAuthor_OLeU",blogPostDate:"blogPostDate_Z606",blogPostReadTime:"blogPostReadTime_AZ1H",blogPostDetailsFull:"blogPostDetailsFull_rPUK",divider:"divider_nSib"};function O(){var e=(0,n.C)(),t=e.metadata,a=e.isBlogPostPage,i=t.tags,o=t.title,s=t.editUrl,c=t.hasTruncateMarker,d=t.date,u=t.formattedDate,m=t.readingTime,g=t.authors,Z=!a&&c,p=i.length>0,b=g.length>0;return a?(0,l.BX)("footer",{className:(0,r.Z)("row docusaurus-mt-lg",a&&F.blogPostFooterDetailsFull),children:[p&&(0,l.tZ)("div",{className:(0,r.Z)("col",{"col--9":Z}),children:(0,l.tZ)(w.Z,{tags:i})}),a&&s&&(0,l.tZ)("div",{className:"col margin-top--sm",children:(0,l.tZ)(I.Z,{editUrl:s})}),Z&&(0,l.tZ)("div",{className:(0,r.Z)("col text--right",{"col--3":p}),children:(0,l.tZ)(x,{blogPostTitle:o,to:t.permalink})})]}):(0,l.BX)(l.HY,{children:[(0,l.tZ)("hr",{className:F.divider}),(0,l.BX)("div",{className:F.blogPostInfo,children:[b&&(0,l.BX)(l.HY,{children:[(0,l.tZ)(y.G,{icon:R.ILF,color:"#c4d3e0",className:"blog__author"}),g.map((function(e){return(0,l.tZ)("span",{className:"blog__author",children:(0,l.tZ)("a",{href:e.url,className:F.blogPostAuthor,children:e.name})},e.url)}))]}),d&&(0,l.BX)(l.HY,{children:[(0,l.tZ)(y.G,{icon:R.fT7,color:"#c4d3e0"}),(0,l.tZ)("time",{dateTime:d,className:F.blogPostDate,itemProp:"datePublished",children:u})]}),p&&(0,l.BX)(l.HY,{children:[(0,l.tZ)(y.G,{icon:R.tho,color:"#c4d3e0"}),(0,l.tZ)("span",{className:F.blogPostInfoTags,children:i.map((function(e){var t=e.label,a=e.permalink;return(0,l.tZ)(X.Z,{label:t,permalink:a},a)}))})]}),m&&(0,l.BX)(l.HY,{children:[(0,l.tZ)(y.G,{icon:R.SZw,color:"#c4d3e0",className:"blog__readingTime"}),(0,l.tZ)("span",{className:(0,r.Z)(F.blogPostReadTime,"blog__readingTime"),children:(0,l.tZ)(h,{readingTime:m})})]})]})]})}function D(e){var t=e.children,a=e.className,i=(0,n.C)().isBlogPostPage?void 0:"blogPost-container margin-bottom--lg";return(0,l.BX)(o,{className:(0,r.Z)(i,a),children:[(0,l.tZ)(_,{}),(0,l.tZ)(B,{children:t}),(0,l.tZ)(O,{})]})}},88884:function(e,t,a){a.d(t,{Z:function(){return l}});a(67294);var r=a(79107),n=a(2187),i=a(35944);function l(e){var t=e.items,a=e.component,l=void 0===a?n.Z:a;return(0,i.tZ)(i.HY,{children:t.map((function(e){var t=e.content;return(0,i.tZ)(r.n,{content:t,children:(0,i.tZ)(l,{children:(0,i.tZ)(t,{})})},t.metadata.permalink)}))})}}}]);