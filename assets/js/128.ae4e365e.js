(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{321:function(t,e,a){"use strict";a.r(e);var n=a(2),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("每周分享会系统梳理过去一周我看的的值得记录和分享的技术、工具、文章/段子，致力于为收藏夹“瘦身”！")])]),t._v(" "),a("p",[t._v("👇 内容速览 👇")]),t._v(" "),a("ul",[a("li",[t._v("谁说虚拟 DOM 比原生 DOM 操作快？（尤大大亲答）")]),t._v(" "),a("li",[t._v("Windows 平台下使用 Git 出现“warning: LF will be replaced by CRLF”？")]),t._v(" "),a("li",[t._v("怎么清空一个 github 线上仓库？")]),t._v(" "),a("li",[t._v("为什么要用"),a("code",[t._v("Golang")]),t._v("替代"),a("code",[t._v("Python")]),t._v("?")]),t._v(" "),a("li",[a("code",[t._v("React")]),t._v("封装"),a("code",[t._v("Toast")]),t._v("组件")]),t._v(" "),a("li",[t._v("...")])]),t._v(" "),a("h2",{attrs:{id:"技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术"}},[t._v("#")]),t._v(" 技术")]),t._v(" "),a("p",[t._v("1、"),a("a",{attrs:{href:"https://www.zhihu.com/question/31809713/answer/53544875",target:"_blank",rel:"noopener noreferrer"}},[t._v("谁说虚拟 DOM 比原生 DOM 操作快？（尤大大亲答）"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("这是 VueJs 作者尤雨溪亲自回答的问题。毫无疑问，大家对虚拟 DOM 存在着误解，"),a("strong",[t._v("React 官方从来没有说虚拟 DOM 比原生操作更快")]),t._v("。其实，框架封装的意义在于对掩盖底层 DOM，提供高可维护性的 API，在这之上保证过得去的性能。")]),t._v(" "),a("p",[t._v("2、"),a("a",{attrs:{href:"https://stackoverflow.com/questions/5834014/lf-will-be-replaced-by-crlf-in-git-what-is-that-and-is-it-important",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 平台下使用 Git 出现“warning: LF will be replaced by CRLF”？"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("CRLF 是 windows 下的文件换行标志：回车 + 换行符；LF 是 Mac/Linux 的换行标志：换行符。如果只是在 Mac/Linux 下进行开发，不要担心这个。如果涉及 Windows 的开发，git 默认是"),a("code",[t._v("git config core.autocrlf true")]),t._v("："),a("strong",[t._v("检出文件到编辑器的时候会将"),a("code",[t._v("LF")]),t._v("转化为"),a("code",[t._v("CRLF")]),t._v("，写入 git 记录时候统一使用"),a("code",[t._v("LF")])]),t._v("。而"),a("code",[t._v("git config cor.autocrlf input")]),t._v("保留原来的换行符，这种做法并不推荐。")]),t._v(" "),a("p",[t._v("3、"),a("a",{attrs:{href:"https://stackoverflow.com/questions/28578581/how-to-completely-clear-git-repository-without-deleting-it",target:"_blank",rel:"noopener noreferrer"}},[t._v("怎么清空一个 github 线上仓库？"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("之前在做开源博客框架的时候，一次失误操作把"),a("code",[t._v("github")]),t._v("上的仓库环境搞乱了。当时不能"),a("code",[t._v("delete")]),t._v("仓库（因为有很多 Star），"),a("strong",[t._v("怎么才能清空仓库，重新上传正确的代码")]),t._v("？由于"),a("code",[t._v("github")]),t._v("不提供清空的快捷键，需要手动操作，思路如下：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" your-repo "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入本地正确的仓库目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote remove origin "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除原来的origin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin remote-repo-url "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加要清空的仓库的 git/https 地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f origin master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将本地正确的提交记录强制提交上去")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("4、"),a("a",{attrs:{href:"https://www.w3cplus.com/css3/changing-appearance-of-element-with-css3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS3 的"),a("code",[t._v("appearance")]),t._v("属性"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[a("code",[t._v("appearance")]),t._v("可以被用来改变任何元素的浏览器默认风格")]),t._v("。比如说不喜欢一些浏览器的"),a("code",[t._v("button")]),t._v("样式，如果要覆盖需要修改较多默认属性；现在可以直接通过"),a("code",[t._v("appearance: none;")]),t._v("来实现。")]),t._v(" "),a("p",[t._v("但请不要混淆"),a("code",[t._v("appearance")]),t._v("和 html5 语义化，比如把一个"),a("code",[t._v("div")]),t._v("元素设置成"),a("code",[t._v("appearance: button")]),t._v("。")]),t._v(" "),a("p",[t._v("5、"),a("a",{attrs:{href:"https://juejin.im/post/5c09a80151882521c81168a2",target:"_blank",rel:"noopener noreferrer"}},[t._v("你不知道的 Chrome 调试工具技巧"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("原作者是 "),a("a",{attrs:{href:"https://link.juejin.im/?target=https%3A%2F%2Ftwitter.com%2Fsulco",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tomek Sułkowski"),a("OutboundLink")],1),t._v(" 发布在 medium 上的一个系列。这是国内的翻译文章，发布在掘金社区。")]),t._v(" "),a("p",[t._v("6、"),a("a",{attrs:{href:"https://juejin.im/post/5b63fdd46fb9a04fa7757081",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("React")]),t._v("封装"),a("code",[t._v("Toast")]),t._v("组件"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("由于工作上的原因，开发技术栈从"),a("code",[t._v("Vue")]),t._v("全面转向了"),a("code",[t._v("React")]),t._v("，公司内部也有自己封装的 UI 组件。在实践的过程中，可以参考这篇文章学习一下如何封装一个组件，如何写动画，如何对外暴露接口等等。")]),t._v(" "),a("p",[t._v("当然，熟悉"),a("code",[t._v("ts")]),t._v("的话可以直接去翻"),a("code",[t._v("antd")]),t._v("的源码。")]),t._v(" "),a("p",[t._v("7、"),a("a",{attrs:{href:"https://codeday.me/bug/20170619/28958.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何验证"),a("code",[t._v("React")]),t._v("中嵌套对象的"),a("code",[t._v("PropTypes")]),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("经验性知识点，借助"),a("code",[t._v("prop-types")]),t._v("的"),a("code",[t._v("shape")]),t._v("函数即可。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PropTypes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prop-types"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Demo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this.props.data 嵌套对象")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" propTypes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRequired"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PropTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("string\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("8、"),a("a",{attrs:{href:"https://www.zhihu.com/question/291435860",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么要用"),a("code",[t._v("Golang")]),t._v("替代"),a("code",[t._v("Python")]),t._v("?"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("曾经我也是一个忠实的"),a("code",[t._v("Pythoner")]),t._v("，后来随着项目经历的增加，渐渐发现动态类型语言容易写烂项目，而且语言本身的性能瓶颈真的难以突破！")]),t._v(" "),a("p",[t._v("很多人会讨论 Python 的性能以及优化，但是场景好像都不是很有分量，直到知乎宣布后端用 Go 重写-"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/48039838",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关链接"),a("OutboundLink")],1),t._v("，终于一锤定音，Go 语言魅力可见一斑。有兴趣的朋友可以学习一下。")]),t._v(" "),a("h2",{attrs:{id:"工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[t._v("#")]),t._v(" 工具")]),t._v(" "),a("p",[t._v("1、"),a("a",{attrs:{href:"https://unbug.github.io/codelf/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CODELF"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.godbmw.com/images/%E6%AF%8F%E5%91%A8%E5%88%86%E4%BA%AB/002/codelf.png",alt:""}})]),t._v(" "),a("p",[t._v("一款国人做的变量命名网站，支持中文（通过调用有道免费的翻译 API）强迫症患者利器，但还是学好英语才是重点。")]),t._v(" "),a("p",[t._v("2、"),a("a",{attrs:{href:"https://lanhuapp.com/?home",target:"_blank",rel:"noopener noreferrer"}},[t._v("蓝湖"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://static.godbmw.com/images/%E6%AF%8F%E5%91%A8%E5%88%86%E4%BA%AB/002/lanhuapp.png",alt:""}})]),t._v(" "),a("p",[t._v("团队产品开发工具，降低沟通成本，支持 PSD 格式。")]),t._v(" "),a("h2",{attrs:{id:"网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站"}},[t._v("#")]),t._v(" 网站")]),t._v(" "),a("p",[t._v("1、"),a("a",{attrs:{href:"https://www.ruguoapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("即刻"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("年轻人的兴趣社区，是“兴趣社区”的深度尝试。大胆抛弃了“今日头条”强行信息倒流的做法，更提倡定制化和个性化。")]),t._v(" "),a("p",[t._v("社区氛围很好，无所谓大佬弱鸡，大家平等交流！")]),t._v(" "),a("p",[a("em",[t._v("特别感谢下 "),a("a",{attrs:{href:"https://chungzh.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://chungzh.cn/"),a("OutboundLink")],1),t._v(" 的推荐")])]),t._v(" "),a("h2",{attrs:{id:"见识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#见识"}},[t._v("#")]),t._v(" 见识")]),t._v(" "),a("p",[t._v("1、"),a("a",{attrs:{href:"https://www.jianshu.com/p/f984436ae228?utm_campaign=maleskine&utm_content=note&utm_medium=pc_all_hots&utm_source=recommendation",target:"_blank",rel:"noopener noreferrer"}},[t._v("身患孤独症的周星驰：我让全世界笑过，但岁月却没有饶过我！"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("星爷演的最好那出戏是在 7 岁那年：“虽然我演戏无数，但是我要说，我最好的戏，是在七岁那年。”")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("a",{attrs:{href:"https://www.zhihu.com/question/293207596/answer/550222589?utm_source=wechat_session&utm_medium=social&utm_oi=833609455009660928",target:"_blank",rel:"noopener noreferrer"}},[t._v("你见过最渣的渣女有多渣？"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"投稿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#投稿"}},[t._v("#")]),t._v(" 投稿")]),t._v(" "),a("p",[t._v("欢迎投稿，或推荐好玩的东西，方式是向 yuanxin.me@gmail.com 发邮件或者在每周分享文章的评论区留言。")])])}),[],!1,null,null,null);e.default=s.exports}}]);