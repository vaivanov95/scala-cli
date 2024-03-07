"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[309],{2523:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var i=n(5893),s=n(1151);const c={title:"Scala Native",sidebar_position:40},t=void 0,r={id:"guides/advanced/scala-native",title:"Scala Native",description:"Scala Native works with Scala 3.1.x, 2.13.x and 2.12.x. Scripts are unavailable for Scala 2.12.x.",source:"@site/docs/guides/advanced/scala-native.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/scala-native",permalink:"/docs/guides/advanced/scala-native",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/advanced/scala-native.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Scala Native",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Scala.js",permalink:"/docs/guides/advanced/scala-js"},next:{title:"Piping",permalink:"/docs/guides/advanced/piping"}},l={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Dependencies",id:"dependencies",level:2}];function o(e){const a={a:"a",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:["Scala Native works with Scala ",(0,i.jsx)(a.code,{children:"3.1.x"}),", ",(0,i.jsx)(a.code,{children:"2.13.x"})," and ",(0,i.jsx)(a.code,{children:"2.12.x"}),". Scripts are unavailable for Scala ",(0,i.jsx)(a.code,{children:"2.12.x"}),"."]}),"\n",(0,i.jsx)(a.p,{children:"Scala Native requires the LLVM toolchain - see requirements on Scala Native website."}),"\n",(0,i.jsx)(a.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(a.p,{children:["Enable Scala Native support by passing ",(0,i.jsx)(a.code,{children:"--native"})," to Scala CLI, such as:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-scala",children:"scala-cli Test.scala --native\n"})}),"\n",(0,i.jsxs)(a.p,{children:["A Scala Native version can be set by passing ",(0,i.jsx)(a.code,{children:"--native-version"})," with an argument:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-scala",children:"scala-cli Test.scala --native --native-version 0.4.3\n"})}),"\n",(0,i.jsxs)(a.p,{children:["These can also be set in a file, or in a project (in your ",(0,i.jsx)(a.a,{href:"https://scala-cli.virtuslab.org/docs/reference/root-dir/",children:(0,i.jsx)(a.code,{children:"project.scala"})})," file) by ",(0,i.jsx)(a.a,{href:"https://scala-cli.virtuslab.org/docs/reference/scala-command/directives/#platform",children:(0,i.jsx)(a.code,{children:"using"})})," ",(0,i.jsx)(a.a,{href:"https://scala-cli.virtuslab.org/docs/reference/scala-command/directives/#scala-native-options",children:"directives"}),":"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-scala",children:"//> using platform native\n//> using nativeVersion 0.4.3\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Platform compatibility and supported Scala language versions depend on this version.",(0,i.jsx)(a.br,{}),"\n","It is recommended to use the newest stable version."]}),"\n",(0,i.jsx)(a.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(a.p,{children:"This section is currently a work in progress, but here are some initial notes:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Beware platform dependencies"}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"compile"})," / ",(0,i.jsx)(a.code,{children:"run"})," / ",(0,i.jsx)(a.code,{children:"test"})," / ",(0,i.jsx)(a.code,{children:"package"})," should all work"]}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>r,a:()=>t});var i=n(7294);const s={},c=i.createContext(s);function t(e){const a=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(c.Provider,{value:a},e.children)}}}]);