(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{358:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-sql-注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-sql-注入"}},[s._v("#")]),s._v(" 1. SQL 注入")]),s._v(" "),a("h3",{attrs:{id:"_1-1-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-介绍"}},[s._v("#")]),s._v(" 1.1 介绍")]),s._v(" "),a("p",[s._v("例如做一个系统的登录界面，输入用户名和密码，提交之后，后端直接拿到数据就拼接 SQL 语句去查询数据库。如果在输入时进行了恶意的 SQL 拼装，那么最后生成的 SQL 就会有问题。")]),s._v(" "),a("p",[s._v("比如后端拼接的 SQL 字符串是：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pwd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果不做任何防护，直接拼接前端的字符，就会出现问题。比如前端传来的"),a("code",[s._v("user")]),s._v("字段是以"),a("code",[s._v("'#")]),s._v("结尾，"),a("code",[s._v("password")]),s._v("随意：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" username "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#'AND password = 'pwd';")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("密码验证部分直接被注释掉了")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_1-2-防范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-防范"}},[s._v("#")]),s._v(" 1.2 防范")]),s._v(" "),a("p",[s._v("后端应该对于字符串有转义，可以借助成熟的库的 API 来拼接命令，而不是自己手动拼接。")]),s._v(" "),a("h2",{attrs:{id:"_2-xss：跨站脚本攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-xss：跨站脚本攻击"}},[s._v("#")]),s._v(" 2. XSS：跨站脚本攻击")]),s._v(" "),a("h3",{attrs:{id:"_2-1-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-介绍"}},[s._v("#")]),s._v(" 2.1 介绍")]),s._v(" "),a("p",[s._v("原理上就是黑客通过某种方式（发布文章、发布评论等）将一段特定的 JS 代码隐蔽地输入进去。然后别人再看这篇文章或者评论时，之前注入的这段 JS 代码就执行了。"),a("strong",[s._v("JS 代码一旦执行，那可就不受控制了，因为它跟网页原有的 JS 有同样的权限")]),s._v("，例如可以获取 server 端数据、可以获取 cookie 等。")]),s._v(" "),a("p",[s._v("比如早些年社交网站经常爆出 XSS 蠕虫，通过发布的文章内插入 JS，用户访问了感染不安全 JS 注入的文章，会自动重新发布新的文章，这样的文章会通过推荐系统进入到每个用户的文章列表面前，很快就会造成大规模的感染。")]),s._v(" "),a("h3",{attrs:{id:"_2-2-防范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-防范"}},[s._v("#")]),s._v(" 2.2 防范")]),s._v(" "),a("p",[s._v("前端对用户输入内容进行验证，如果有风险，就进行替换。例如："),a("code",[s._v("&")]),s._v(" 替换为 "),a("code",[s._v("&amp;")])]),s._v(" "),a("h2",{attrs:{id:"_3-csrf-跨站请求伪造"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-csrf-跨站请求伪造"}},[s._v("#")]),s._v(" 3. CSRF: 跨站请求伪造")]),s._v(" "),a("h3",{attrs:{id:"_3-1-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-介绍"}},[s._v("#")]),s._v(" 3.1 介绍")]),s._v(" "),a("p",[s._v("CSRF 是借用了当前操作者的权限来偷偷地完成某个操作，而不是拿到用户的信息。比如获取"),a("code",[s._v("cookie")]),s._v("、破解"),a("code",[s._v("token")]),s._v("加密等等。")]),s._v(" "),a("h3",{attrs:{id:"_3-2-防范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-防范"}},[s._v("#")]),s._v(" 3.2 防范")]),s._v(" "),a("ul",[a("li",[s._v("敏感数据不使用"),a("code",[s._v("GET")])]),s._v(" "),a("li",[s._v("前后端约定加密方式和密钥，"),a("strong",[s._v("并且经常更新密钥")])]),s._v(" "),a("li",[s._v("对 IP 限制一定时间内的访问次数")]),s._v(" "),a("li",[s._v("设置网站白名单")])]),s._v(" "),a("h2",{attrs:{id:"_4-中间人攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-中间人攻击"}},[s._v("#")]),s._v(" 4. 中间人攻击")]),s._v(" "),a("h3",{attrs:{id:"_4-1-原理和防范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-原理和防范"}},[s._v("#")]),s._v(" 4.1 原理和防范")]),s._v(" "),a("p",[s._v("它也被称为浏览器劫持、web 劫持。可以往 web 中添加一些第三方厂商的 dom 元素，或者重定向到另外的钓鱼站。")]),s._v(" "),a("p",[s._v("常用手段有 2 种：")]),s._v(" "),a("ol",[a("li",[s._v("网络报文传输过程中对其截获、篡改（过程中）")]),s._v(" "),a("li",[s._v("客户端发起 http 请求之前或者得到 response 之后对数据篡改（开头、结尾）")])]),s._v(" "),a("p",[s._v("防范方式就是使用 "),a("code",[s._v("https")]),s._v(" 协议，一套在传输层 TCP 和应用层 HTTP 之间的 TLS 协议。")]),s._v(" "),a("h3",{attrs:{id:"_4-2-https-交互细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-https-交互细节"}},[s._v("#")]),s._v(" 4.2 https 交互细节")]),s._v(" "),a("p",[s._v("以下内容摘自："),a("a",{attrs:{href:"https://toutiao.io/posts/ju2uhb/preview",target:"_blank",rel:"noopener noreferrer"}},[s._v("《深入理解 Web 安全：中间人攻击》"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("简单地说，一次 https 网络请求在建立开始阶段具有以下的一个“握手”流程：")]),s._v(" "),a("p",[s._v("首先，客户端向服务端发起一个基于 https 协议的网络请求，这相当于告诉它：“我希望得到一个安全加密的网页，你可别直接把明文扔过来！”")]),s._v(" "),a("p",[s._v("服务端接收到这个网络请求后，了解到客户端的提出的这种加密的诉求，于是先把一个"),a("em",[s._v("公钥")]),s._v("和网站的 https 证书发送给客户端。")]),s._v(" "),a("p",[s._v("客户端随后要做两件事，一是验证证书的合法性与时效性，如果颁发证书的机构客户端这边不承认或者证书中标明的过期时间已经过了，这都会导致客户端浏览器报出那个红叉子，chrome 浏览器还会直接拦截掉这个请求，除非用户点详情->继续，否则不会与该网站的服务器进行后续沟通，这相当于一个强交互的提醒，告诉用户“我拿到的证书有问题，这网站可能是个冒牌货，你要看仔细了！”")]),s._v(" "),a("p",[s._v("如果以上两步验证无误，那么客户端会先生成一个"),a("em",[s._v("随机秘钥")]),s._v("，利用刚刚拿到的"),a("em",[s._v("公钥")]),s._v("给自己要访问的 url+这个"),a("em",[s._v("随机秘钥")]),s._v("进行加密，把密文再次发往服务端。")]),s._v(" "),a("p",[s._v("当服务端收到客户端传过来的密文之后，会通过自己手里持有的一个"),a("em",[s._v("私钥")]),s._v("对密文进行解密。"),a("em",[s._v("注意，这里提到的私钥和刚刚的公钥是一对儿秘钥，这是一个典型的非对称加密，加密和解密分别使用两把不同的钥匙，这也保证了在此场景下的安全性。")])]),s._v(" "),a("p",[s._v("此时，服务端要将真正的 html 网页文本发给你了，它会利用解密得到的"),a("em",[s._v("随机秘钥")]),s._v("对网页文本内容进行加密，将密文发给客户端。")]),s._v(" "),a("p",[s._v("客户端拿到真正的 html 报文之后，就用自己刚才生成的那个"),a("em",[s._v("随机秘钥")]),s._v("进行解密，然后就得到了跟普通 http 请求时一样的一个网页文本了，在这之后就像往常那样解析、渲染、加载更多资源……")]),s._v(" "),a("p",[s._v("对于真正要传输的 html 文本，实际上是使用刚刚提到的这个"),a("em",[s._v("随机秘钥")]),s._v("进行了一次对称加密，因为上锁和开锁的钥匙实际上是一模一样的。")]),s._v(" "),a("h2",{attrs:{id:"_5-ddos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-ddos"}},[s._v("#")]),s._v(" 5. DDoS")]),s._v(" "),a("p",[s._v("攻击者在短时间内发起大量请求，利用协议的缺点，耗尽服务器的资源，导致网站无法响应正常的访问。")]),s._v(" "),a("p",[s._v("我之前也经历过，在这篇"),a("a",{attrs:{href:"https://godbmw.com/passages/2018-11-06-ddos-recover-and-think/",target:"_blank",rel:"noopener noreferrer"}},[s._v("《被 DDos 后的及时补救与一些思考》"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("防范的措施，或者称之为补救措施更合适，有以下建议：")]),s._v(" "),a("ol",[a("li",[s._v("借助云厂商 CDN：静态流量的资源还得自己掏钱")]),s._v(" "),a("li",[s._v("IP 黑/白名单："),a("code",[s._v("nginx")]),s._v(" 和 "),a("code",[s._v("apache")]),s._v(" 都可以设置")]),s._v(" "),a("li",[s._v("HTTP 请求信息：根据 UserAgent 等字段的信息")]),s._v(" "),a("li",[s._v("静态化：博客网站直接挂在 github 等平台上")]),s._v(" "),a("li",[s._v("备份网站：阮一峰老师的网站被 ddos 的时候就有个备份页面")]),s._v(" "),a("li",[s._v("其他：弹性 ip、免费的 DNSpod、国内外分流、高防 ip 等等")])]),s._v(" "),a("h2",{attrs:{id:"_6-点击劫持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-点击劫持"}},[s._v("#")]),s._v(" 6. 点击劫持")]),s._v(" "),a("p",[s._v("点击劫持是一种视觉欺骗的攻击手段。攻击者通过 "),a("code",[s._v("iframe")]),s._v(" 嵌套嵌入被攻击网页，诱导用户点击。如果用户之前登陆过被攻击网页，那么浏览器可能保存了信息，因此可以以用户的身份实现操作。")]),s._v(" "),a("p",[s._v("js 防范手段：")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("click-jack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("html")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none "),a("span",{pre:!0,attrs:{class:"token important"}},[s._v("!important")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断当前页面是否是iframe加载")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" style "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"click-jack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);