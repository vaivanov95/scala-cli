"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9149],{3774:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=t(5893),o=t(1151);const i={title:"Under the hood",sidebar_position:32},s="Under the hood",r={id:"under-the-hood",title:"Under the hood",description:"This page is for people who are already familiar with the Scala/JVM ecosystem.",source:"@site/docs/under-the-hood.md",sourceDirName:".",slug:"/under-the-hood",permalink:"/docs/under-the-hood",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/under-the-hood.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"Under the hood",sidebar_position:32},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/docs/reference/scala-command/commands"},next:{title:"Release notes",permalink:"/docs/release_notes"}},c={},l=[{value:"Caching and incrementality",id:"caching-and-incrementality",level:3},{value:"Bloop",id:"bloop",level:3},{value:"Coursier",id:"coursier",level:3}];function d(e){const a={a:"a",admonition:"admonition",h1:"h1",h3:"h3",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.admonition,{type:"note",children:[(0,n.jsx)(a.p,{children:"This page is for people who are already familiar with the Scala/JVM ecosystem."}),(0,n.jsxs)(a.p,{children:["If you just want to learn Scala CLI, head out to the ",(0,n.jsx)(a.a,{href:"/docs/commands/basics",children:"Commands section"}),"."]})]}),"\n",(0,n.jsx)(a.h1,{id:"under-the-hood",children:"Under the hood"}),"\n",(0,n.jsxs)(a.p,{children:["Scala CLI consists of a native executable, generated by ",(0,n.jsx)(a.a,{href:"https://www.graalvm.org",children:"GraalVM"})," ",(0,n.jsx)(a.a,{href:"https://www.graalvm.org/reference-manual/native-image",children:"Native Image"}),".\nIt runs fine on Linux and macOS with no prior requirements, and\nonly requires the ",(0,n.jsx)(a.a,{href:"https://www.microsoft.com/en-us/download/details.aspx?id=48145",children:"Visual C++ Redistributable Runtime"}),"\non Windows.\nNative Image lets us build Scala CLI as a native image for each platform, and lets Scala CLI be responsive, as a command line application should be."]}),"\n",(0,n.jsxs)(a.p,{children:["However, Scala CLI is still a JVM application, so it is possible to e.g. set ",(0,n.jsx)(a.a,{href:"/docs/guides/advanced/java-properties",children:"Java properties"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"caching-and-incrementality",children:"Caching and incrementality"}),"\n",(0,n.jsx)(a.p,{children:"Since most of the tasks require compilation or dependency resolution under the hood, Scala CLI heavily uses caches and incrementality under the hood to provide output as quickly as possible."}),"\n",(0,n.jsxs)(a.p,{children:["But note that incremental compilation and caching are not perfect.\nIn some cases, when there's a compilation problem and you don't think it's a problem with the code, it may be the stale state of the project - cleaning the project state might help.\nFor this reason Scala CLI has the ",(0,n.jsx)(a.a,{href:"/docs/commands/clean",children:"clean"})," command, which invalidates local caches and forces the next compilation to be a total rebuild from a clean slate."]}),"\n",(0,n.jsxs)(a.p,{children:["We provide a more in-depth overview about how caching works in the ",(0,n.jsx)(a.a,{href:"/docs/guides/advanced/internals",children:"Scala CLI internals guide"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"bloop",children:"Bloop"}),"\n",(0,n.jsxs)(a.p,{children:["To ensure the quickest compilation, Scala CLI uses and manages the ",(0,n.jsx)(a.a,{href:"https://scalacenter.github.io/bloop/",children:"Bloop"})," compilation server.\nWe have a ",(0,n.jsx)(a.a,{href:"/docs/commands/misc/bloop",children:"guide"})," that describes how Scala CLI interacts with the local Bloop server and how a user can do the same.\nThe main point to know is that Scala CLI takes care of fetching and starting Bloop if needed, so you don't have to worry about it."]}),"\n",(0,n.jsx)(a.h3,{id:"coursier",children:"Coursier"}),"\n",(0,n.jsxs)(a.p,{children:["Scala CLI uses ",(0,n.jsx)(a.a,{href:"https://get-coursier.io/",children:"Coursier"})," to manage dependencies.\nIt automatically downloads and unpacks a JVM if none is installed on your system, so that all its commands work fine even if a JVM isn't already installed.\nScala CLI shares Coursier caches with other tools like ",(0,n.jsx)(a.a,{href:"https://www.scala-sbt.org/",children:"sbt"}),", ",(0,n.jsx)(a.a,{href:"https://github.com/com-lihaoyi/mill",children:"Mill"}),", or ",(0,n.jsx)(a.a,{href:"https://scalameta.org/metals/",children:"Metals"}),"."]})]})}function h(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>r,a:()=>s});var n=t(7294);const o={},i=n.createContext(o);function s(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);