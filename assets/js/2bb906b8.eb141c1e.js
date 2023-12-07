"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8109],{4108:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>r});var s=n(5893),t=n(1151);const c={title:"Packaging as executable files \u26a1",sidebar_position:14},i=void 0,o={id:"cookbooks/package/scala-package",title:"Packaging as executable files \u26a1",description:"Scala CLI lets you package your application into a lightweight JAR file that can be easily run.",source:"@site/docs/cookbooks/package/scala-package.md",sourceDirName:"cookbooks/package",slug:"/cookbooks/package/scala-package",permalink:"/docs/cookbooks/package/scala-package",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/cookbooks/package/scala-package.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Packaging as executable files \u26a1",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Emacs",permalink:"/docs/cookbooks/ide/emacs"},next:{title:"Packaging as Docker images \u26a1",permalink:"/docs/cookbooks/package/scala-docker"}},l={},r=[{value:"Default format (lightweight launcher)",id:"default-format-lightweight-launcher",level:3},{value:"Assemblies",id:"assemblies",level:3}];function d(e){const a={code:"code",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Scala CLI lets you package your application into a lightweight JAR file that can be easily run.\nThe JAR file only contains the byte code that\u2019s generated from your source code files, and automatically downloads its dependencies on its first run."}),"\n",(0,s.jsx)(a.p,{children:"As an example, the following snippet contains a short application to detect the OS:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-scala",metastring:"title=DetectOsApp.scala",children:'object DetectOsApp extends App  {\n    def getOperatingSystem(): String = {\n        val os: String = System.getProperty("os.name")\n        os\n    }\n    println(s"os: ${getOperatingSystem()}")\n}\n'})}),"\n",(0,s.jsx)(a.h3,{id:"default-format-lightweight-launcher",children:"Default format (lightweight launcher)"}),"\n",(0,s.jsxs)(a.p,{children:["By default, the ",(0,s.jsx)(a.code,{children:"package"})," sub-command generates a lightweight JAR that contains only your bytecode. This is how you create a lightweight JAR named ",(0,s.jsx)(a.code,{children:"DetectOsApp.jar"}),":"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"scala-cli --power package DetectOsApp.scala\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Lightweight JARs require the ",(0,s.jsx)(a.code,{children:"java"})," command to be available, and access to the internet, if dependencies need to be downloaded. This is how you run it on macOS:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"# Run DetectOsApp on macOS\n./DetectOsApp\n# os: Mac OS X\n"})}),"\n",(0,s.jsx)(a.p,{children:"The lightweight JAR that was just built on macOS can also run on Linux:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"# Run DetectOsApp on Linux\n./DetectOsApp\n# os: Linux\n"})}),"\n",(0,s.jsx)(a.p,{children:"Scala CLI supports building Lightweight JARs in the macOS, Linux, and Windows environments.\nJARs built on macOS and Linux are portable between these two operating systems.\nLightweight JARs built on Windows can only be run on Windows."}),"\n",(0,s.jsx)(a.h3,{id:"assemblies",children:"Assemblies"}),"\n",(0,s.jsxs)(a.p,{children:["Passing ",(0,s.jsx)(a.code,{children:"--assembly"})," to the ",(0,s.jsx)(a.code,{children:"package"}),' sub-command generates so-called "assemblies," or "fat JARs":']}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"scala-cli --power package --assembly DetectOsApp.scala\n"})}),"\n",(0,s.jsxs)(a.p,{children:["Assemblies also require the ",(0,s.jsx)(a.code,{children:"java"})," command to be available in the ",(0,s.jsx)(a.code,{children:"PATH"}),". But in this case, all of the dependencies that are needed are packaged into the assembly, so nothing gets downloaded upon the first run, and no internet access is required."]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"# Run DetectOsApp on macOS\n./DetectOsApp\n# os: Mac OS X\n"})})]})}function p(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>i});var s=n(7294);const t={},c=s.createContext(t);function i(e){const a=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:a},e.children)}}}]);