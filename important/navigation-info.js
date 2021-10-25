/* eslint-disable no-undef */

(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : ((global = global || self), (global.NavigationInfo = factory()));
})(this, function() {
  "use strict";

  // 需要导出的数据
  return [
    {
      name: "学习间",
      type: "bd672fe6-3dd0-475e-96db-4b0fe71f72eb",
      icon: "dashboard",
      list: [
        {
          title: "极客时间",
          description:
            "后端,架构,前端,移动,人工智能,大数据,产品,运营,运维,测试,极客时间,极客邦",
          icon:
            "https://static001.geekbang.org/static/time/icon/favicon-32x32.jpg",
          href: "https://time.geekbang.org/"
        },
        {
          title: "哔哩哔哩",
          description:
            "bilibili是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。",
          icon: "https://www.bilibili.com/favicon.ico?v=1",
          href: "https://www.bilibili.com/"
        },
        {
          title: "开课吧",
          description: "数字化人才在线教育平台",
          icon: "https://img.kaikeba.com/kkb_portal_icon.ico",
          href: "https://www.kaikeba.com/"
        },

        {
          title: "力扣",
          icon: "https://leetcode-cn.com/favicon.ico",
          href: "https://leetcode-cn.com/",
          description: "力扣（LeetCode）官网 - 全球极客挚爱的技术成长平台"
        },
        {
          title: "Processon",
          icon: "https://www.processon.com/favicon.ico",
          href: "https://www.processon.com/",
          description: "免费在线作图、实时协作"
        },
        {
          title: "语雀",
          description:
            "十万阿里人都在用的笔记与文档知识库，面向企业、组织或个人，提供全新的体系化知识管理，打造轻松流畅的工作协同。金融级数据安全、丰富的应用场景、强大的知识创作与管理，助力企业、个人轻松拥有云端知识库",
          icon:
            "https://gw.alipayobjects.com/zos/rmsportal/UTjFYEzMSYVwzxIGVhMu.png",
          href: "https://www.yuque.com/dashboard"
        }
      ]
    },
    {
      name: "在线IDE",
      type: "9a38a75f-a8c9-43b2-a8aa-ad6f8306cea8",
      icon: "heart",
      list: [
        {
          title: "CodeSandbox",
          description: "Code Sand box",
          icon: "https://codesandbox.io/favicon.ico",
          href: "https://codesandbox.io/"
        },
        {
          title: "Vue SFC Playground",
          description: "Vue SFC Playground",
          icon: "https://sfc.vuejs.org/logo.svg",
          href: "https://sfc.vuejs.org/"
        },
        {
          title: "Stackblitz",
          icon:
            "https://c.staticblitz.com/assets/icons/icon-144x144-087fc0a60e0073134b9d301ac02a1d2a547db3428c0c010818aa431fa85fffd8.png",
          href: "https://stackblitz.com/",
          description:
            "StacThe same editing experience. Now in your browser.kblitz"
        },
        {
          title: "JSRUN.NET",
          icon: "http://jsrun.net/res/favicon.ico",
          href: "http://jsrun.net/",
          description: "JSRUN可以用手机写代码的JS在线编辑器网站"
        },
        {
          title: "regex101",
          icon: "./icons/regex101.ico",
          href: "https://regex101.com",
          description: "Regular Expressions 101"
        },
        {
          title: "Regulex",
          icon: "https://jex.im/favicon.ico",
          href: "https://jex.im/regulex/",
          description: "JavaScript Regular Expression Visualizer."
        }
      ]
    },
    {
      name: "交流区",
      type: "61a915ce-0c77-4f30-8121-90c813496d36",
      icon: "crown",
      list: [
        {
          title: "掘金社区",
          icon:
            "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png",
          href: "https://juejin.im/timeline",
          description: "一个帮助开发者成长的社区"
        },
        {
          title: "segmentfault 思否",
          description:
            "为开发者提供问答、学习与交流编程知识的平台，创造属于开发者的时代！",
          icon: "./icons/segmentfault.ico",
          href: "https://segmentfault.com/"
        },
        {
          title: "GitHub",
          description: "GitHub is where people build software.",
          icon: "https://github.githubassets.com/favicons/favicon.png",
          href: "https://github.com/OSpoon"
        },
        {
          title: "码云",
          icon: "./icons/gitee.ico",
          href: "https://gitee.com/",
          description: "云端软件开发协作平台"
        },
        {
          title: "微信开放社区",
          description: "开发者社区新首页 | 微信开放社区",
          icon:
            "https://res.wx.qq.com/a/wx_fed/wechat_search_common_assets/res/developers/3x/developers-db8b687441.ico",
          href: "https://developers.weixin.qq.com/community/homepage"
        },
        {
          title: "幕布精选社区",
          description: "幕布，不只是大纲笔记，更是一种思考方式",
          icon:
            "https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/792eh7bouloj/mubu/favicon.ico",
          href: "https://mubu.com/explore"
        }
      ]
    },
    {
      name: "前端框架",
      type: "6d218a2a-9b47-4f95-9fd0-758ae6cf0158",
      icon: "slack",
      list: [
        {
          title: "Vue2.x",
          icon: "https://cn.vuejs.org/images/icons/favicon-32x32.png",
          href: "https://cn.vuejs.org/",
          description: "渐进式 JavaScript 框架"
        },
        {
          title: "Vue3.x",
          icon: "https://cn.vuejs.org/images/icons/favicon-32x32.png",
          href: "https://v3.cn.vuejs.org/",
          description: "渐进式 JavaScript 框架"
        },
        {
          title: "React",
          icon: "https://react.docschina.org/favicon.ico",
          href: "https://react.docschina.org/",
          description: "用于构建用户界面的 JavaScript 库"
        },
        {
          title: "Angular",
          icon: "https://angular.cn/assets/images/favicons/favicon.ico",
          href: "https://angular.cn/",
          description: "一套框架，多种平台；移动端 & 桌面端"
        },
        {
          title: "Nuxtjs",
          icon: "https://nuxtjs.org/_nuxt/icons/icon_64x64.a3b4ce.png",
          href: "https://zh.nuxtjs.org/",
          description: "易于使用的 Vue 框架"
        },
        {
          title: "Electron",
          icon:
            "https://www.electronjs.org/images/favicon.b7a59262df48d6563400baf5671da548.ico",
          href: "https://www.electronjs.org/",
          description: "使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序"
        },
        {
          title: "uni-app官网",
          icon:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp8.itc.cn%2Fimages01%2F20210622%2Fb2f45b67d1734886b5ed04779e823052.jpeg&refer=http%3A%2F%2Fp8.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637760430&t=3335d0e2ba38c2121400890f33e1d1e7",
          href: "https://uniapp.dcloud.io/",
          description: "uni-app：一个使用 Vue.js 开发跨平台应用的前端框架"
        },
        {
          title: "Taro",
          icon: "http://taro-docs.jd.com/taro/img/favicon.ico",
          href: "http://taro-docs.jd.com/",
          description:
            "Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发"
        },
        {
          title: "Echarts",
          icon:
            "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/favicon.png?_v_=20200710_1",
          href: "https://echarts.apache.org/zh/index.html",
          description: "一个基于 JavaScript 的开源可视化图表库"
        },
        {
          title: "Vue CLI",
          icon: "https://cn.vuejs.org/images/icons/favicon-32x32.png",
          href: "https://cli.vuejs.org/zh/",
          description: "Vue.js 开发的标准工具"
        },
        {
          title: "Create React App",
          icon: "https://www.html.cn/create-react-app/img/logo.svg",
          href: "http://www.html.cn/create-react-app/",
          description: "Vue.js 开发的标准工具Create React App 中文文档"
        },
        {
          title: "Vue-Element-Admin",
          icon:
            "https://panjiachen.gitee.io/vue-element-admin-site/favicon.ico",
          href: "https://panjiachen.gitee.io/vue-element-admin-site/zh/",
          description: "vue-element-admin"
        }
      ]
    },
    {
      name: "Node&构建",
      type: "8b2d012d-76c4-4046-966f-88d0e5914730",
      icon: "slack",
      list: [
        {
          title: "Express",
          icon: "https://www.expressjs.com.cn/images/favicon.png",
          href: "https://www.expressjs.com.cn/",
          description: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架"
        },
        {
          title: "Koa",
          icon: "./icons/koa.ico",
          href: "https://koa.bootcss.com/",
          description: "基于 Nodejs 平台的下一代 web 开发框架"
        },
        {
          title: "Eggjs",
          icon: "https://eggjs.org/images/favicon.png",
          href: "https://eggjs.org/zh-cn/",
          description: "为企业级框架和应用而生"
        },
        {
          title: "Vite",
          icon: "https://cn.vitejs.dev/logo.svg",
          href: "https://cn.vitejs.dev/",
          description: "下一代前端开发与构建工具"
        },
        {
          title: "Webpackjs",
          icon: "https://www.webpackjs.com/assets/favicon.ico",
          href: "https://www.webpackjs.com/",
          description: "打包所有的 资源"
        },
        {
          title: "Rollupjs",
          icon: "https://www.rollupjs.com/img/favicon.png",
          href: "https://www.rollupjs.com/",
          description:
            "Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。"
        }
      ]
    },
    {
      name: "UI 库",
      type: "a979dbc4-f852-487c-8c16-940ab66fc5c1",
      icon: "instagram",
      list: [
        {
          title: "Ant Design Vue",
          icon:
            "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
          href: "https://vue.ant.design/docs/vue/introduce-cn/",
          description:
            "这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品。"
        },
        {
          title: "Element",
          icon: "https://element.eleme.cn/favicon.ico",
          href: "https://element.eleme.cn/",
          description:
            "Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库"
        },
        {
          title: "Vant-UI",
          icon: "https://img01.yzcdn.cn/vant/logo.png",
          href: "https://vant-contrib.gitee.io/vant/#/zh-CN/",
          description: "有赞前端团队开源的移动端组件库"
        },
        {
          title: "View-UI",
          icon: "https://file.iviewui.com/file/iview-design-favicon.ico",
          href: "http://v1.iviewui.com/",
          description: "一套基于 Vue.js 的高质量 UI 组件库"
        },
        {
          title: "NutUI",
          icon:
            "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png",
          href: "https://nutui.jd.com/#/index",
          description: "一套京东风格的轻量级移动端Vue组件库"
        },
        {
          title: "Angular Material",
          icon:
            "https://material.angular.cn/assets/img/favicons/favicon.ico?v=8.2.3",
          href: "https://material.angular.cn/",
          description: "Material Design 组件库 for Angular"
        }
      ]
    },
    {
      name: "文档&教程",
      type: "20643c17-03ee-4587-b8bf-a8fab4f7752a",
      icon: "heart",
      list: [
        {
          title: "ECMAScript",
          icon:
            "https://img1.baidu.com/it/u=393673481,1181948800&fm=26&fmt=auto",
          href: "http://es.xiecheng.live/",
          description: "ECMAScript2015~2020语法全解析"
        },
        {
          title: "TypeScript",
          description: "TypeScript is JavaScript with syntax for types.",
          icon: "https://www.tslang.cn/assets/images/icons/favicon.ico",
          href: "https://www.typescriptlang.org/"
        },
        {
          title: "lodashjs",
          icon: "https://www.lodashjs.com/img/favicon.ico",
          href: "https://www.lodashjs.com/",
          description:
            "Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。"
        },
        {
          title: "Vue.js 技术揭秘",
          description: "Vue.js 技术揭秘",
          icon: "https://cn.vuejs.org/images/icons/favicon-32x32.png",
          href: "https://ustbhuangyi.github.io/vue-analysis/"
        },
        {
          title: "现代 JavaScript 教程",
          icon: "https://zh.javascript.info/img/favicon/favicon.png",
          href: "https://zh.javascript.info/",
          description: "从基础知识到高阶主题，只需既简单又详细的解释。"
        },
        {
          title: "小鑫笔记",
          icon: "https://it200.cn/img/logo.b96656d2.jpg",
          href: "https://ospoon.github.io/",
          description: "小鑫笔记在线阅读"
        }
      ]
    },
    {
      name: "查询工具",
      type: "4242800e-e310-4699-8368-8aa6aacde5b2",
      icon: "heart",
      list: [
        {
          title: "Web 开发技术 | MDN",
          icon: "https://developer.mozilla.org/favicon.ico",
          href: "https://developer.mozilla.org/zh-CN/docs/Web",
          description: "Web 开发技术 面向 Web 开发者的文档"
        },
        {
          title: "Can I Use",
          icon: "https://www.caniuse.com/img/favicon-128.png",
          href: "https://www.caniuse.com/",
          description: "Can I Use"
        },
        {
          title: "UNPKG",
          description:
            "unpkg is a fast, global content delivery network for everything on npm. ",
          icon: "https://unpkg.com/favicon.ico",
          href: "https://unpkg.com/"
        },
        {
          title: "BootCDN",
          icon: "https://www.bootcdn.cn/assets/ico/favicon.ico?1589364549024",
          href: "https://www.bootcdn.cn/",
          description: "稳定、快速、免费的前端开源项目 CDN 加速服务"
        },

        {
          title: "NpmJs",
          icon: "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png",
          href: "https://www.npmjs.com/",
          description: "Build amazing things"
        },
        {
          title: "MD美化",
          icon: "https://www.mdnice.com/favicon.svg",
          href: "https://www.mdnice.com/",
          description: "Markdown Nice"
        },
        {
          title: "JSON To TypeScript",
          icon: "https://www.nginxedit.cn/assets/img/favicon.png",
          href: "http://www.json2ts.com/",
          description: "generate TypeScript interfaces from JSON"
        },
        {
          title: "{JSON} Placeholder",
          description:
            "Free fake API for testing and prototyping. Powered by JSON Server + LowDB",
          icon: "https://jsonplaceholder.typicode.com/favicon.ico",
          href: "https://jsonplaceholder.typicode.com/"
        },
        {
          title: "AST Explorer",
          icon: "https://astexplorer.net/favicon.png",
          href: "https://astexplorer.net/",
          description: "抽象语法树"
        },
        {
          title: "Shields",
          icon: "./icons/shields.ico",
          href: "https://shields.io/category/build",
          description: "GitHub徽章"
        },
        {
          title: "GitHub Proxy 代理加速",
          icon: "https://github.githubassets.com/favicons/favicon.png",
          href: "https://ghproxy.com",
          description:
            "GitHub 文件 , Releases , archive 以及 raw.githubusercontent.com 文件加速下载服务."
        },
        {
          title: "Nginx在线配置",
          icon: "https://www.nginxedit.cn/assets/img/favicon.png",
          href: "https://www.nginxedit.cn/",
          description: "配置高性能，安全和稳定的NGINX服务器的最简单方法。"
        }
      ]
    },
    {
      name: "小工具",
      type: "f02f9ffb-8351-4709-9638-b2676a63ad05",
      icon: "heart",
      list: [
        {
          title: "carbon",
          icon: "https://carbon.now.sh/static/brand/icon.png",
          href: "https://carbon.now.sh/",
          description:
            "Create and share beautiful images of your source code. Start typing or drop a file into the text area to get started."
        },
        {
          title: "UIGradients",
          icon: "https://uigradients.com/static/images/favicon-32x32.png",
          href: "https://uigradients.com/#Margo",
          description: "渐变生成器"
        },
        {
          title: "生成ICO图标",
          icon: "http://it200.cn/images/logo/default.png",
          href: "http://www.ico51.cn/",
          description: "在线生成透明ICO图标"
        },
        {
          title: "Toptal",
          icon:
            "https://frontier-assets.toptal.com/ec99a6ba6efa2bbb78f99a929026b33d.svg",
          href: "https://www.toptal.com/developers/css/sprite-generator",
          description: "CSS Sprites Generator"
        },

        {
          title: "Form-Generator",
          icon: "https://mrhj.gitee.io/form-generator/img/logo.e1bc3747.png",
          href: "https://mrhj.gitee.io/form-generator/#/",
          description: "form-generator"
        },
        {
          title: "ibootstrap",
          icon: "./icons/ibootstrap.ico",
          href: "http://www.ibootstrap.cn/",
          description: "拖拽生成bootstrap页面"
        }
      ]
    },
    {
      name: "其他框架",
      type: "489035cc-65b5-4578-8c7b-6d79edd7b61a",
      icon: "dribbble",
      list: [
        {
          title: "Animate.css",
          icon: "https://animate.style/img/favicon.ico",
          href: "https://animate.style/",
          description: "Just-add-water CSS animations"
        },
        {
          title: "Velocity.js",
          icon: "./icons/velocity.ico",
          href: "http://shouce.jb51.net/velocity/index.html",
          description: "简单易用、高性能、功能丰富的轻量级JS动画库"
        },
        {
          title: "Three.js",
          icon: "https://threejs.org/files/favicon.ico",
          href: "https://threejs.org/",
          description: "JavaScript 3D library"
        },
        {
          title: "Postcss",
          icon: "https://www.postcss.com.cn/favicon.8a995d15.ico",
          href: "https://www.postcss.com.cn/",
          description: "是一个用 JavaScript 工具和插件转换 CSS 代码的工具"
        },
        {
          title: "GoGoCode",
          icon:
            "https://img.alicdn.com/tfs/TB17V2NvHj1gK0jSZFuXXcrHpXa-256-256.png",
          href: "https://gogocode.io/zh",
          description:
            "代码转换从未如此简单 全网最简单易上手，可读性最强的 AST 处理工具！"
        },
        {
          title: "Pug 模板引擎",
          icon: "https://www.pugjs.cn/images/pugjs.png",
          href: "https://www.pugjs.cn/api/getting-started.html",
          description: "Pug 的渲染操作一般来说是相当简单的。"
        },
        {
          title: "EJS 模板引擎",
          icon: "http://it200.cn/images/logo/default.png",
          href: "https://www.pugjs.cn/api/getting-started.html",
          description: "高效的嵌入式 JavaScript 模板引擎。"
        },
        {
          title: "Handlebars",
          icon: "https://www.handlebarsjs.cn/images/favicon.png",
          href: "https://www.handlebarsjs.cn/",
          description: "轻量的语义化模板"
        }
      ]
    },
    {
      name: "开放平台",
      type: "48c1c910-5661-4e5d-8bf6-254f7d09f94f",
      icon: "compass",
      list: [
        {
          title: "阿里云",
          icon: "./icons/aliyun.ico",
          href: "https://www.aliyun.com/",
          description: "上云就上阿里云"
        },
        {
          title: "腾讯云",
          icon: "./icons/tencent.ico",
          href: "https://cloud.tencent.com/",
          description: "产业智变 云启未来"
        },
        {
          title: "公众号平台",
          icon: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
          href: "https://mp.weixin.qq.com/",
          description: "公众号平台"
        },
        {
          title: "公众号测试平台",
          icon: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
          href:
            "https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login",
          description: "公众号测试平台"
        },
        {
          title: "旷世FaceId",
          icon: "https://assets.faceid.com/static/assets/favicon.ico",
          href: "https://faceid.com/",
          description: "旷世FaceId后台"
        },
        {
          title: "betaqr应用托管",
          icon: "https://www.betaqr.com/favicon.ico",
          href: "https://betaqr.com/apps",
          description: "betaqr 原fir.im"
        }
      ]
    },
    {
      name: "设计相关",
      type: "ca7da9ca-8201-4259-8342-38ee1cb18fd5",
      icon: "like",
      list: [
        {
          title: "蓝湖",
          icon: "https://cdn.lanhuapp.com/web/static/favicon.ico",
          href: "https://lanhuapp.com/",
          description: "高效的产品设计协作平台"
        },
        {
          title: "稿定-设计",
          icon: "https://www.gaoding.com/favicon.ico",
          href: "https://www.gaoding.com/templates/fcc1612548-fc1612547",
          description: "首图图片模板在线设计制作"
        },
        {
          title: "稿定-PS",
          icon: "https://ps.gaoding.com/favicon.ico",
          href: "https://ps.gaoding.com/#/",
          description: "稿定 在线PS"
        },

        {
          title: "创客贴",
          icon: "https://www.chuangkit.com/favicon.ico",
          href: "https://www.chuangkit.com/",
          description: "让设计触手可得"
        },
        {
          title: "花瓣-设计",
          icon: "https://huaban.com/favicon.ico",
          href: "https://huaban.com/",
          description: "花瓣，陪你做生活的设计师"
        },
        {
          title: "LOADING.IO",
          icon: "./icons/loading.ico",
          href: "https://loading.io/",
          description: "Animation Made Easy"
        },
        {
          title: "Iconfont",
          icon:
            "https://img.alicdn.com/tps/i4/TB1_oz6GVXXXXaFXpXXJDFnIXXX-64-64.ico",
          href: "https://www.iconfont.cn/",
          description: "阿里妈妈MUX倾力打造的矢量图标管理、交流平台。"
        },
        {
          title: "IconPark资源站",
          icon:
            "https://sf1-scmcdn-tos.pstatp.com/obj/goofy/ad/bydesign/iconparksite/logo.svg",
          href: "https://iconpark.bytedance.com/",
          description: "丰富多彩的资源库免费使用"
        },
        {
          title: "Fontawesome",
          icon: "./icons/fontawesome.ico",
          href: "http://www.fontawesome.com.cn/icons-ui/",
          description: "Fontawesome The Icons"
        }
      ]
    },

    {
      name: "工具大全",
      type: "a0ec6dd0-9501-4bc5-9d5b-db6eb8b4978d",
      icon: "rocket",
      list: [
        {
          title: "内网穿透",
          icon: "https://cdn.natapp.cn/assets/favicon.ico?version=20190730",
          href: "https://natapp.cn/",
          description: "开启您的内网穿透之旅"
        },
        {
          title: "百度网盘",
          icon:
            "https://pan.baidu.com/box-static/disk-system/images/favicon.ico",
          href: "https://pan.baidu.com/disk/home",
          description: "百度网盘"
        },
        {
          title: "阿里云盘",
          icon: "./icons/aliyundrive.ico",
          href: "https://aliyundrive.com/",
          description:
            "阿里云盘是一款速度快、不打扰、够安全、易于分享的网盘，你可以在这里存储、管理和探索内容，尽情打造丰富的数字世界。"
        },
        {
          title: "腾讯网址安全中心",
          icon: "./icons/urlsec.ico",
          href: "https://urlsec.qq.com/",
          description: "腾讯网址安全中心"
        },
        {
          title: "GithubStatus",
          icon: "https://github.githubassets.com/favicons/favicon-success.png",
          href: "https://www.githubstatus.com/",
          description: "Github Status"
        },
        {
          title: "Glehelper",
          icon: "./icons/googlehelper.ico",
          href: "http://googlehelper.net/",
          description:
            "This is a browser plugin for developers, cross-border workers, and research institutes to secure and speed Internet surfing."
        },
        {
          title: "Idea激活",
          icon: "http://it200.cn/images/logo/default.png",
          href: "http://idea.medeming.com/jets/",
          description: "失效了就试试吧,万一成功了呢"
        },
        {
          title: "debugx5",
          icon: "http://it200.cn/images/logo/default.png",
          href: "https://debugx5.qq.com/",
          description: "微信浏览器调试"
        },
        {
          title: "Chrome DevTools",
          icon: "http://it200.cn/images/logo/default.png",
          href: "chrome://inspect/#devices",
          description: "Chrome DevTools"
        },
        {
          title: "Linux命令大全(手册)",
          icon:
            "https://www.linuxcool.com/wp-content/uploads/2019/03/cropped-redhat-32x32.png",
          href: "https://www.linuxcool.com/",
          description: "Linux命令大全(手册)"
        }
      ]
    },
    {
      name: "云测平台",
      type: "68f4dd33-7c1b-4852-8364-48bae29ee200",
      icon: "read",
      list: [
        {
          title: "VIVO云测",
          icon: "https://vcl.vivo.com.cn/static/resource/img/favicon.ico",
          href: "https://vcl.vivo.com.cn/#/home/index",
          description: "VIVO 开发者云测平台"
        },
        {
          title: "小米云测",
          icon: "https://testit.miui.com/favicon.ico",
          href: "https://testit.miui.com/",
          description: "小米云测平台"
        },
        {
          title: "华为开发者联盟",
          icon:
            "https://developer.huawei.com/consumer/cn/devunion/openPlatform/refactor/favicon.ico",
          href:
            "https://developer.huawei.com/consumer/cn/console#/serviceCards/",
          description: "华为开发者联盟"
        },
        {
          title: "Bugly",
          icon: "https://bugly.qq.com/v2/images/bugly_b.ico",
          href: "https://bugly.qq.com/v2/workbench/apps",
          description: "Bugly"
        }
      ]
    },
    {
      name: "自考平台",
      type: "3c562f03-d211-4743-b311-19593aacc8ce",
      icon: "read",
      list: [
        {
          title: "自助服务系统",
          icon: "https://zikao.hneao.cn/net/image/login_ico2.png",
          href: "https://zikao.hneao.cn/net/netExamineeAction.do",
          description: "湖南省高等教育自学考试自助服务系统"
        },
        {
          title: "自考数字化",
          icon: "http://it200.cn/images/logo/default.png",
          href: "http://www.zikao.com.cn/login.jsp",
          description: "高等教育自学考试数字化学习平台"
        },
        {
          title: "网络助学平台",
          icon: "http://it200.cn/images/logo/default.png",
          href: "https://hn.selfstudent.smartchutou.com/login",
          description: "湖南省高等教育自学考试网络助学平台"
        },
        {
          title: "综合测评",
          icon: "http://it200.cn/images/logo/default.png",
          href: "https://xtu.edu-cj.com/",
          description: "湘潭大学自考综合测评教学管理平台"
        }
      ]
    }
    // {
    //   name: "综合整理",
    //   type: "1a99f70b-1db6-4c91-8703-3957bb14f881",
    //   icon: "euro",
    //   menus: [
    //     {
    //       name: "PDF整理",
    //       type: "c2f791e7-d739-48f5-802a-066113b8905e",
    //       icon: "file-ppt",
    //       list: [
    //         {
    //           title: "我的简历",
    //           icon: "./icons/pdf.ico",
    //           href: "http://it200.cn/pdf/张鑫-移动web前端-个人简历.pdf",
    //           description: "张鑫-移动web前端-个人简历"
    //         },
    //         {
    //           title: "Java基础",
    //           icon: "./icons/pdf.ico",
    //           href: "http://it200.cn/pdf/java-all.pdf",
    //           description: "Java基础-java-all"
    //         },
    //         {
    //           title: "重学Java设计模式·小傅哥",
    //           icon: "./icons/pdf.ico",
    //           href:
    //             "http://it200.cn/pdf/重学Java设计模式·小傅哥(公众号：bugstack虫洞栈).pdf",
    //           description: "重学Java设计模式·小傅哥"
    //         },
    //         {
    //           title: "阿里巴巴Java开发手册",
    //           icon: "./icons/pdf.ico",
    //           href: "http://it200.cn/pdf/阿里巴巴Java开发手册（泰山版）.pdf",
    //           description: "阿里巴巴Java开发手册"
    //         },
    //         {
    //           title: "老孟Flutter",
    //           icon: "./icons/pdf.ico",
    //           href: "http://it200.cn/pdf/老孟Flutter-控件大全.pdf",
    //           description: "老孟Flutter-控件大全"
    //         },
    //         {
    //           title: "Git Github GitServer",
    //           icon: "./icons/pdf.ico",
    //           href:
    //             "http://it200.cn/pdf/完全学会git github gitserver的24堂课.pdf",
    //           description: "Git Github GitServer"
    //         }
    //       ]
    //     },
    //     {
    //       name: "其他整理",
    //       type: "0d2b9681-e0c1-4a55-94ef-159d6d84963c",
    //       icon: "file-unknown",
    //       list: [
    //         {
    //           title: "pub.flutter-io",
    //           icon: "https://dartpad.cn/pictures/logo_dart.png",
    //           href: "https://pub.flutter-io.cn/",
    //           description: "pub.flutter-io"
    //         },
    //         {
    //           title: "Fluro的封装",
    //           icon: "https://dartpad.cn/pictures/logo_dart.png",
    //           href: "https://www.cnblogs.com/joe235/p/11957838.html",
    //           description: "对Flutter路由管理库Fluro的封装"
    //         },
    //         {
    //           title: "dartpad",
    //           icon: "https://dartpad.cn/pictures/logo_dart.png",
    //           href: "https://dartpad.cn/",
    //           description: "dartpad在线编码"
    //         },
    //         {
    //           title: "helloflask",
    //           icon:
    //             "https://gblobscdn.gitbook.com/spaces%2F-LPUGutvb8ubewWLtJw4%2Favatar.png?alt=media",
    //           href: "https://read.helloflask.com/",
    //           description: "Flask 入门教程"
    //         },
    //         {
    //           title: "Flask Web开发实战",
    //           icon: "http://it200.cn/images/logo/default.png",
    //           href: "https://passport.jd.com/uc/login",
    //           description: "Flask Web开发实战-京东阅读"
    //         },
    //         {
    //           title: "flask-01",
    //           icon: "http://it200.cn/images/logo/default.png",
    //           href: "https://www.cnblogs.com/wt11/p/9288605.html",
    //           description: "结合manage.py，在flask项目中使用websocket"
    //         },
    //         {
    //           title: "flask-02",
    //           icon: "http://it200.cn/images/logo/default.png",
    //           href:
    //             "https://blog.csdn.net/xujiahui320582/article/details/83065288",
    //           description: "Flask速成项目：Flask实现计算机资源的实时监控"
    //         },
    //         {
    //           title: "flask-03",
    //           icon: "http://it200.cn/images/logo/default.png",
    //           href: "https://www.jianshu.com/p/b3500954b3d3",
    //           description: "flask使用flask-socketio 启动服务方式"
    //         }
    //       ]
    //     }
    //     // {
    //     //   name: "振利软件",
    //     //   type: "b108f443-6831-4fa4-8e1f-2b9967976acf",
    //     //   icon: "desktop",
    //     //   list: [
    //     //     {
    //     //       title: "工时系统",
    //     //       description: "每日一填,工资满满",
    //     //       icon: "http://it200.cn/images/logo/default.png",
    //     //       href: "http://app.n22.com.cn/app/"
    //     //     },
    //     //     {
    //     //       title: "Git仓库",
    //     //       description: "勤推送,勤拉取",
    //     //       icon:
    //     //         "http://git.n22.com.cn:8089/assets/favicon-7901bd695fb93edb07975966062049829afb56cf11511236e61bcf425070e36e.png",
    //     //       href: "http://git.n22.com.cn:8089/"
    //     //     },
    //     //     {
    //     //       title: "SVN仓库",
    //     //       description: "勤推送,勤拉取",
    //     //       icon: "./icons/svn.ico",
    //     //       href: "https://n22beijing.imwork.net:10480/!/#"
    //     //     },
    //     //     {
    //     //       title: "阿亮UI库",
    //     //       description: "新框架通用UI库",
    //     //       icon: "http://vue-mobile.gitee.io/static/image/al.svg",
    //     //       href: "http://vue-mobile.gitee.io/al-mobile/#/zh-CN/home"
    //     //     }
    //     //   ]
    //     // }
    //   ]
    // }
  ];
});
