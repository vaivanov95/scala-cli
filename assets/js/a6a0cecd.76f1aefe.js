"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8368],{8977:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var n=t(5893),i=t(1151),a=t(9705);const c={title:"Test",sidebar_position:7},r=void 0,l={id:"commands/test",title:"Test",description:"The test command runs test suites in the test sources.",source:"@site/docs/commands/test.md",sourceDirName:"commands",slug:"/commands/test",permalink:"/docs/commands/test",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/test.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Test",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Run",permalink:"/docs/commands/run"},next:{title:"REPL",permalink:"/docs/commands/repl"}},d={},o=[{value:"Test sources",id:"test-sources",level:2},{value:"Test directives",id:"test-directives",level:2},{value:"Test framework",id:"test-framework",level:2},{value:"Filter test suite",id:"filter-test-suite",level:2},{value:"Filter test case",id:"filter-test-case",level:2},{value:"Munit",id:"munit",level:3},{value:"Test arguments",id:"test-arguments",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"test"})," command runs test suites in the test sources.\nTest sources are compiled separately (after the 'main' sources), and may use different dependencies, compiler options,\nand other configurations."]}),"\n",(0,n.jsxs)(s.p,{children:["By default, all command line options apply to both the main and test sources,\nso ",(0,n.jsx)(s.a,{href:"/docs/guides/introduction/using-directives",children:"using directives"})," (\nor ",(0,n.jsx)(s.a,{href:"../guides/introduction/configuration#special-imports",children:"special imports"}),") can be used to provide test-specific configurations."]}),"\n",(0,n.jsx)(s.h2,{id:"test-sources",children:"Test sources"}),"\n",(0,n.jsx)(s.p,{children:"A source file is treated as test source if:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["the file name ends with ",(0,n.jsx)(s.code,{children:".test.scala"}),", or"]}),"\n",(0,n.jsxs)(s.li,{children:["the file comes from a directory that is provided as input, and the relative path from that file to its original\ndirectory contains a ",(0,n.jsx)(s.code,{children:"test"})," directory"]}),"\n",(0,n.jsxs)(s.li,{children:["it contains the ",(0,n.jsx)(s.code,{children:"//> using target.scope test"})," directive, or"]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"using target"})," directives are an experimental feature, and may change in future versions of Scala CLI."]})}),"\n",(0,n.jsx)(s.p,{children:"The last rule may sound a bit complicated, so let's explain it using following directory structure:"}),"\n",(0,n.jsxs)(a.v,{children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"tree example\n"})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-text",children:"example\n\u251c\u2500\u2500 a.scala\n\u251c\u2500\u2500 a.test.scala\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 main\n    \u2502   \u2514\u2500\u2500 scala\n    \u2502       \u2514\u2500\u2500 d.scala\n    \u251c\u2500\u2500 test\n    \u2502   \u2514\u2500\u2500 scala\n    \u2502       \u2514\u2500\u2500 b.scala\n    \u2514\u2500\u2500 test_unit\n        \u2514\u2500\u2500 scala\n            \u2514\u2500\u2500 e.scala\n"})})]}),"\n",(0,n.jsx)(s.p,{children:"Given that directory structure, let's analyze what file(s) will be treated as tests based on the provided inputs."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"scala-cli example"})," results in the following files being treated as test sources:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"a.test.scala"}),", since it ends with ",(0,n.jsx)(s.code,{children:".test.scala"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"src/test/scala/b.scala"}),", since the path to that directory contains a directory named ",(0,n.jsx)(s.code,{children:"test"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Note that ",(0,n.jsx)(s.code,{children:"e.scala"})," is not treated as a test source since it lacks a parent directory in its relative path that is\nexactly named ",(0,n.jsx)(s.code,{children:"test"})," (the name",(0,n.jsx)(s.code,{children:"test_unit"})," starts with ",(0,n.jsx)(s.code,{children:"test"}),", but Scala CLI only looks for parent directories on the\nrelative path with the exact name ",(0,n.jsx)(s.code,{children:"test"}),")."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"scala-cli example/src"})," results in ",(0,n.jsx)(s.code,{children:"src/test/scala/b.scala"})," being treated as a test file since its relative\npath (",(0,n.jsx)(s.code,{children:"test/scala/b.scala"}),") contains a directory named ",(0,n.jsx)(s.code,{children:"test"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Conversely, ",(0,n.jsx)(s.code,{children:"scala-cli example/src/test"})," results in no test sources, since the relative path to ",(0,n.jsx)(s.code,{children:"b.scala"})," does not\ncontain ",(0,n.jsx)(s.code,{children:"test"})," (the fact that the directory provided as input is named ",(0,n.jsx)(s.code,{children:"test"})," does not make its content a test source)."]}),"\n",(0,n.jsxs)(s.p,{children:["Directives take precedence over file or path names, so ",(0,n.jsx)(s.code,{children:"using target main"})," can be used to force ",(0,n.jsx)(s.code,{children:"test/a.scala"}),"\nor ",(0,n.jsx)(s.code,{children:"a.test.scala"})," to not be treated as tests."]}),"\n",(0,n.jsxs)(s.p,{children:["As a rule of thumb, we recommend naming all of your test files with the ",(0,n.jsx)(s.code,{children:".test.scala"})," suffix."]}),"\n",(0,n.jsx)(s.h2,{id:"test-directives",children:"Test directives"}),"\n",(0,n.jsxs)(s.p,{children:["When configuring your tests with ",(0,n.jsx)(s.code,{children:"using"})," directives, it's usually advised to use their test scope equivalents, so that\nonly tests are affected."]}),"\n",(0,n.jsxs)(s.p,{children:["For example, when declaring a test framework dependency, in most cases you wouldn't need it\nwhen running your whole app, you only need it in tests. So rather than declare it globally with ",(0,n.jsx)(s.code,{children:"using dep"}),", you can use\nthe ",(0,n.jsx)(s.code,{children:"test.dep"})," directive:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",metastring:"compile",children:"//> using test.dep org.scalameta::munit::0.7.29\n"})}),"\n",(0,n.jsxs)(s.p,{children:["For more details on test directives,\nsee ",(0,n.jsxs)(s.a,{href:"/docs/guides/introduction/using-directives#directives-with-a-test-scope-equivalent",children:["the ",(0,n.jsx)(s.code,{children:"using"})," directives guide"]}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"test-framework",children:"Test framework"}),"\n",(0,n.jsx)(s.p,{children:"In order to run tests with a test framework, add the framework dependency to your application.\nSome of the most popular test frameworks in Scala are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://scalameta.org/munit",children:"munit"}),": ",(0,n.jsx)(s.code,{children:"org.scalameta::munit::0.7.29"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/com-lihaoyi/utest",children:"utest"}),": ",(0,n.jsx)(s.code,{children:"com.lihaoyi::utest::0.8.1"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://www.scalatest.org",children:"ScalaTest"}),": ",(0,n.jsx)(s.code,{children:"org.scalatest::scalatest::3.2.15"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://junit.org/junit4",children:"JUnit 4"}),", which can be used via\na ",(0,n.jsx)(s.a,{href:"https://github.com/sbt/junit-interface",children:"dedicated interface"}),": ",(0,n.jsx)(s.code,{children:"com.github.sbt:junit-interface:0.13.3"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://disneystreaming.github.io/weaver-test/",children:"Weaver"}),": ",(0,n.jsx)(s.code,{children:"com.disneystreaming::weaver-cats:0.8.3"}),". You may need to\nspecify weaver's test framework with ",(0,n.jsx)(s.code,{children:'//> using testFramework "weaver.framework.CatsEffect"'})," if you had other test\nframework in your dependencies."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The following example shows how to run an munit-based test suite:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",metastring:"title=MyTests.test.scala",children:'//> using test.dep org.scalameta::munit::0.7.29\n\nclass MyTests extends munit.FunSuite {\n  test("foo") {\n    assert(2 + 2 == 4)\n  }\n}\n'})}),"\n",(0,n.jsxs)(a.v,{children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"scala-cli test MyTests.test.scala\n"})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-text",children:"Compiling project (1 Scala source)\nCompiled project\nMyTests:\n  + foo 0.143s\n"})})]}),"\n",(0,n.jsx)(s.h2,{id:"filter-test-suite",children:"Filter test suite"}),"\n",(0,n.jsxs)(s.p,{children:["Passing the ",(0,n.jsx)(s.code,{children:"--test-only"})," option to the ",(0,n.jsx)(s.code,{children:"test"})," sub-command filters the test suites to be run:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",metastring:"title=BarTests.test.scala",children:'//> using test.dep org.scalameta::munit::0.7.29\npackage tests.only\n\nclass BarTests extends munit.FunSuite {\n  test("bar") {\n    assert(2 + 3 == 5)\n  }\n}\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",metastring:"title=HelloTests.test.scala",children:'package tests\n\nclass HelloTests extends munit.FunSuite {\n  test("hello") {\n    assert(2 + 2 == 4)\n  }\n}\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"scala-cli test . --test-only 'tests.only*' \n# tests.only.BarTests:\n#   + bar 0.045s\n"})}),"\n",(0,n.jsx)(s.h2,{id:"filter-test-case",children:"Filter test case"}),"\n",(0,n.jsx)(s.h3,{id:"munit",children:"Munit"}),"\n",(0,n.jsxs)(s.p,{children:["To run a specific test case inside the unit test suite pass ",(0,n.jsx)(s.code,{children:"*exact-test-name*"})," as an argument to scala-cli:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",metastring:"title=BarTests.test.scala",children:'//> using test.dep org.scalameta::munit::0.7.29\npackage tests.only\n\nclass Tests extends munit.FunSuite {\n  test("bar") {\n    assert(2 + 2 == 5)\n  }\n  test("foo") {\n    assert(2 + 3 == 5)\n  }\n  test("foo-again") {\n    assert(2 + 3 == 5)\n  }\n}\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"scala-cli test . --test-only 'tests.only*'  -- '*foo*'\n# tests.only.Tests:\n#   + foo 0.045s\n#   + foo-again 0.001s\n"})}),"\n",(0,n.jsx)(s.h2,{id:"test-arguments",children:"Test arguments"}),"\n",(0,n.jsxs)(s.p,{children:["You can pass test arguments to your test framework by passing them after ",(0,n.jsx)(s.code,{children:"--"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scala",metastring:"title=MyTests.test.scala",children:'//> using test.dep org.scalatest::scalatest::3.2.9\n\nimport org.scalatest._\nimport org.scalatest.flatspec._\nimport org.scalatest.matchers._\n\nclass Tests extends AnyFlatSpec with should.Matchers {\n  "A thing" should "thing" in {\n    assert(2 + 2 == 4)\n  }\n}\n'})}),"\n",(0,n.jsxs)(a.v,{children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"scala-cli test MyTests.test.scala -- -oD\n"})}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-text",children:"Compiling project (1 Scala source)\nCompiled project\nTests:\nA thing\n- should thing (22 milliseconds)\nRun completed in 359 milliseconds.\nTotal number of tests run: 1\nSuites: completed 1, aborted 0\nTests: succeeded 1, failed 0, canceled 0, ignored 0, pending 0\nAll tests passed.\n"})})]})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9705:(e,s,t)=>{t.d(s,{m:()=>c,v:()=>a});t(7294);var n=t(2004),i=t(5893);function a(e){let{children:s}=e;return(0,i.jsx)("div",{className:"runnable-command",children:s})}function c(e){let{url:s}=e;return(0,i.jsx)(n.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:s})}}}]);