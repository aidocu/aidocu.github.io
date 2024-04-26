"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[646],{63271:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var i=n(74848),r=n(28453);const d={label:"\u653e\u5927",sidebar_position:3},c="\u653e\u5927\u5668",l={id:"commands-parameters-and-tools/tools/upscalers",title:"\u653e\u5927\u5668",description:"\u5f53\u524d\u7684 Midjourney \u548c Niji \u6a21\u578b\u7248\u672c\u53ef\u751f\u6210 1024 x 1024 \u50cf\u7d20\u56fe\u50cf\u7684\u7f51\u683c\u3002 \u4f7f\u7528\u6bcf\u4e2a\u56fe\u50cf\u7f51\u683c\u4e0b\u65b9\u7684 U1 U2 U3 U4 \u6309\u94ae\u5c06\u6240\u9009\u56fe\u50cf\u4e0e\u5176\u7f51\u683c\u5206\u5f00\u3002 \u7136\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Upscale (Creative) \u6216 Upscale (Subtle) \u5de5\u5177\u6765\u589e\u52a0\u56fe\u50cf\u7684\u5927\u5c0f\u3002",source:"@site/mid/commands-parameters-and-tools/tools/upscalers.md",sourceDirName:"commands-parameters-and-tools/tools",slug:"/commands-parameters-and-tools/tools/upscalers",permalink:"/mid/commands-parameters-and-tools/tools/upscalers",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{label:"\u653e\u5927",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u53d8\u5316\u533a\u57df+\u518d\u6df7\u5408",permalink:"/mid/commands-parameters-and-tools/tools/vary-region-mix"},next:{title:"\u98ce\u683c\u8c03\u6574",permalink:"/mid/commands-parameters-and-tools/tools/style-tuner"}},t={},o=[{value:"\u5982\u4f55\u4f7f\u7528\u653e\u5927\u5de5\u5177",id:"\u5982\u4f55\u4f7f\u7528\u653e\u5927\u5de5\u5177",level:2},{value:"1. \u751f\u6210\u56fe\u50cf",id:"1-\u751f\u6210\u56fe\u50cf",level:3},{value:"2. \u9009\u62e9\u56fe\u50cf",id:"2-\u9009\u62e9\u56fe\u50cf",level:3},{value:"3.\u9009\u62e9\u653e\u5927",id:"3\u9009\u62e9\u653e\u5927",level:3},{value:"\u653e\u5927\u6bd4\u8f83",id:"\u653e\u5927\u6bd4\u8f83",level:2},{value:"\u539f\u59cb\u56fe\u50cf\u7684\u7ec6\u8282",id:"\u539f\u59cb\u56fe\u50cf\u7684\u7ec6\u8282",level:3},{value:"\u653e\u5927\u6bd4\u8f83",id:"\u653e\u5927\u6bd4\u8f83-1",level:2},{value:"\u4f20\u7edf\u653e\u5927\u5668",id:"\u4f20\u7edf\u653e\u5927\u5668",level:2}];function a(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"\u653e\u5927\u5668",children:"\u653e\u5927\u5668"}),"\n",(0,i.jsxs)(s.p,{children:["\u5f53\u524d\u7684 ",(0,i.jsx)(s.a,{href:"/mid/commands-parameters-and-tools/parameters/version",children:"Midjourney \u548c Niji \u6a21\u578b\u7248\u672c"}),"\u53ef\u751f\u6210 1024 x 1024 \u50cf\u7d20\u56fe\u50cf\u7684\u7f51\u683c\u3002 \u4f7f\u7528\u6bcf\u4e2a\u56fe\u50cf\u7f51\u683c\u4e0b\u65b9\u7684 ",(0,i.jsxs)(s.strong,{children:[(0,i.jsx)(s.code,{children:"U1"})," ",(0,i.jsx)(s.code,{children:"U2"})," ",(0,i.jsx)(s.code,{children:"U3"})," ",(0,i.jsx)(s.code,{children:"U4"})]})," \u6309\u94ae\u5c06\u6240\u9009\u56fe\u50cf\u4e0e\u5176\u7f51\u683c\u5206\u5f00\u3002 \u7136\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Upscale (Creative)"})})," \u6216 ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Upscale (Subtle)"})})," \u5de5\u5177\u6765\u589e\u52a0\u56fe\u50cf\u7684\u5927\u5c0f\u3002"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Upscale (Subtle)"})})," \u9009\u9879\u4f7f\u56fe\u50cf\u5c3a\u5bf8\u52a0\u500d\uff0c\u5e76\u4fdd\u6301\u7ec6\u8282\u4e0e\u539f\u59cb\u56fe\u50cf\u975e\u5e38\u76f8\u4f3c\u3002 ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Upscale (Creative)"})})," \u8fd8\u4f1a\u4f7f\u56fe\u50cf\u5c3a\u5bf8\u52a0\u500d\uff0c\u4f46\u4f1a\u4e3a\u56fe\u50cf\u6dfb\u52a0\u65b0\u7684\u7ec6\u8282\u3002 \u5c1d\u8bd5\u6bcf\u4e2a\u653e\u5927\u9009\u9879\uff0c\u627e\u5230\u6700\u9002\u5408\u60a8\u7684\u56fe\u50cf\u98ce\u683c\u7684\u9009\u9879\u3002"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u653e\u5927\u5de5\u5177\u4f7f\u7528\u60a8\u8ba2\u9605\u7684 GPU \u5206\u949f\u6570\u3002 \u653e\u5927\u6240\u9700\u7684 GPU \u5206\u949f\u6570\u53ef\u80fd\u662f\u751f\u6210\u521d\u59cb\u56fe\u50cf\u7f51\u683c\u6240\u9700\u65f6\u95f4\u7684\u4e24\u500d\u3002"}),"\n",(0,i.jsx)(s.li,{children:"\u653e\u5927\u5de5\u5177\u4e0e --tile \u53c2\u6570\u4e0d\u517c\u5bb9\u3002"}),"\n"]})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"\u5982\u4f55\u4f7f\u7528\u653e\u5927\u5de5\u5177",children:"\u5982\u4f55\u4f7f\u7528\u653e\u5927\u5de5\u5177"}),"\n",(0,i.jsx)(s.h3,{id:"1-\u751f\u6210\u56fe\u50cf",children:"1. \u751f\u6210\u56fe\u50cf"}),"\n",(0,i.jsx)(s.p,{children:"\u4f7f\u7528 /imagine \u547d\u4ee4\u521b\u5efa\u56fe\u50cf\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u52a8\u753b GIF \u663e\u793a\u63d0\u793a\u201c\u5728Midjourney\u8f93\u5165\u6761\u7eb9\u6cb3\u77f3\u201d",src:n(76768).A+"",width:"600",height:"117"})}),"\n",(0,i.jsx)(s.h3,{id:"2-\u9009\u62e9\u56fe\u50cf",children:"2. \u9009\u62e9\u56fe\u50cf"}),"\n",(0,i.jsx)(s.p,{children:"\u4f7f\u7528 U \u6309\u94ae\u5c06\u6240\u9009\u56fe\u50cf\u4e0e\u7f51\u683c\u5206\u5f00\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Midjourney\u673a\u5668\u4eba\u4f7f\u7528\u63d0\u793a\u201c\u6761\u7eb9\u6cb3\u77f3\u201d\u751f\u6210\u7684\u56fe\u50cf\u7f51\u683c\uff0cU4 \u6309\u94ae\u4ee5\u84dd\u8272\u7a81\u51fa\u663e\u793a\u3002",src:n(26906).A+"",width:"800",height:"860"})}),"\n",(0,i.jsx)(s.h3,{id:"3\u9009\u62e9\u653e\u5927",children:"3.\u9009\u62e9\u653e\u5927"}),"\n",(0,i.jsxs)(s.p,{children:["\u5355\u51fb ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Upscale (Subtle)"})})," \u6216 ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Upscale (Creative)"})})," \u6309\u94ae\u6765\u653e\u5927\u60a8\u7684\u56fe\u50cf\u3002 \u653e\u5927\u5668\u4f1a\u5c06\u56fe\u50cf\u5927\u5c0f\u52a0\u500d\u81f3 2048 x 2048 \u50cf\u7d20\u3002"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u7531 Midjourney Bot \u4f7f\u7528\u63d0\u793a\u201c\u6761\u7eb9\u6cb3\u77f3\u201d\u751f\u6210\u7684\u653e\u5927\u56fe\u50cf\uff0cUpscale Subtle \u6309\u94ae\u4ee5\u84dd\u8272\u7a81\u51fa\u663e\u793a\u3002",src:n(9508).A+"",width:"800",height:"524"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"\u653e\u5927\u6bd4\u8f83",children:"\u653e\u5927\u6bd4\u8f83"}),"\n",(0,i.jsxs)(s.p,{children:["\u63d0\u793a\uff1a",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"chiaroscuro rooster portrait"})})]}),"\n",(0,i.jsx)(s.p,{children:"\u539f\u59cb 1024 x 1024 \u50cf\u7d20\u56fe\u50cf\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u4f7f\u7528\u63d0\u793a\u660e\u6697\u5bf9\u6bd4\u516c\u9e21\u8096\u50cf\u521b\u5efa\u7684Midjourney\u56fe\u50cf",src:n(75992).A+"",width:"800",height:"800"})}),"\n",(0,i.jsx)(s.h3,{id:"\u539f\u59cb\u56fe\u50cf\u7684\u7ec6\u8282",children:"\u539f\u59cb\u56fe\u50cf\u7684\u7ec6\u8282"}),"\n",(0,i.jsx)("table",{boder:"0",cellpadding:"0",cellspacing:"0",children:(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)(s.p,{children:"\u539f\u56fe 1024 x 1024 \u50cf\u7d20"}),(0,i.jsx)("img",{src:"/img/mj/MJ_Upscale_Chicken_Up1X.jpg",width:"400"})]}),(0,i.jsxs)("td",{children:[(0,i.jsx)(s.p,{children:"\u653e\u5927\u5230 2048 x 2048 \u50cf\u7d20\u540e"}),(0,i.jsx)("img",{src:"/img/mj/MJ_Upscale_Chicken_Up2X.jpg",width:"400"})]})]})}),"\n",(0,i.jsx)(s.h2,{id:"\u653e\u5927\u6bd4\u8f83-1",children:"\u653e\u5927\u6bd4\u8f83"}),"\n",(0,i.jsxs)(s.p,{children:["\u63d0\u793a\uff1a",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"1960s pop-art acrylic painting of a stream running through a redwood forest"})})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"\u539f\u56fe\u7ec6\u8282 \u4f7f\u7528 Creative Upscaler \u540e\uff0c\u7528 20 \u4e16\u7eaa 60 \u5e74\u4ee3\u6d41\u884c\u827a\u672f\u4e19\u70ef\u753b\u521b\u4f5c\u7684\u56fe\u50cf\uff0c\u63cf\u7ed8\u4e86\u4e00\u6761\u6d41\u7ecf\u7ea2\u6728\u68ee\u6797\u7684\u5c0f\u6eaa",src:n(65352).A+"",width:"1616",height:"1272"})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\u653e\u5927 \u6ce8\u610f\u4e8b\u9879"}),(0,i.jsx)(s.br,{}),"\n","\u5728\u65b0\u7684\u653e\u5927\u4f5c\u4e1a\u53d1\u5e03\u4e4b\u524d\uff0c\u60a8\u901a\u8fc7\u4f7f\u7528 ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"/show"})})," \u547d\u4ee4\u5237\u65b0\u5b83\u4eec\u6765\u751f\u6210\u653e\u5927\u4f5c\u4e1a\u3002 \u4e0e\u8be5\u56fe\u50cf\u517c\u5bb9\u7684\u6240\u6709\u653e\u5927\u6309\u94ae\u5c06\u51fa\u73b0\u5728\u5237\u65b0\u7684\u4f5c\u4e1a\u4e0b\u65b9\u3002"]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"\u4f20\u7edf\u653e\u5927\u5668",children:"\u4f20\u7edf\u653e\u5927\u5668"}),"\n",(0,i.jsx)(s.p,{children:"\u65e9\u671f\u7684 Midjourney \u6a21\u578b\u7248\u672c\u751f\u6210\u4f4e\u5206\u8fa8\u7387\u56fe\u50cf\u7684\u7f51\u683c\u3002 \u60a8\u53ef\u4ee5\u5728\u8fd9\u4e9b\u56fe\u50cf\u4e0a\u4f7f\u7528\u65e7\u7248 Midjourney \u653e\u5927\u5668\u6765\u589e\u52a0\u5c3a\u5bf8\u5e76\u6dfb\u52a0\u5176\u4ed6\u7ec6\u8282\u3002 \u6709\u591a\u79cd\u4f20\u7edf\u7684\u653e\u5927\u6a21\u578b\u53ef\u7528\u4e8e\u653e\u5927\u4f7f\u7528\u65e9\u671f Midjourney \u6a21\u578b\u5236\u4f5c\u7684\u56fe\u50cf\u3002 \u4f7f\u7528\u65e7\u7248\u653e\u5927\u4f5c\u4e1a\u4f1a\u5360\u7528\u60a8\u8ba2\u9605\u7684 GPU \u5206\u949f\u6570\u3002"})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},75992:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/MJ_Upscale_Chicken_Original-d136fe4fd6bcd35361e55a8e2e2db4bc.jpg"},26906:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/MJ_Upscale_ImageGrid-2dc4afa64a6894e777afaeea6355db51.png"},9508:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/MJ_Upscale_Interface-a52ecd11465af7edf3019cffc7b8b5ee.jpg"},76768:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/MJ_Upscale_Prompt-6d9a015c950be6633566889a0b707e2d.gif"},65352:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/upscale_comp-89ca36157ac319b35fef086b2337f367.png"},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>l});var i=n(96540);const r={},d=i.createContext(r);function c(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);