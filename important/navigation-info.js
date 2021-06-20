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
      name: "高频网址",
      type: "bd672fe6-3dd0-475e-96db-4b0fe71f72eb",
      icon: "dashboard",
      list: [
        {
          title: "Stackblitz",
          icon:
            "https://c.staticblitz.com/assets/icons/icon-144x144-087fc0a60e0073134b9d301ac02a1d2a547db3428c0c010818aa431fa85fffd8.png",
          href: "https://stackblitz.com/",
          description:
            "StacThe same editing experience. Now in your browser.kblitz"
        },
        {
          title: "BootCDN",
          icon: "https://www.bootcdn.cn/assets/ico/favicon.ico?1589364549024",
          href: "https://www.bootcdn.cn/",
          description: "稳定、快速、免费的前端开源项目 CDN 加速服务"
        },
        {
          title: "小鑫笔记",
          icon: "https://it200.cn/img/logo.b96656d2.jpg",
          href: "https://ospoon.github.io/",
          description: "小鑫笔记在线阅读"
        },
        {
          title: "regex101",
          icon: "./icons/regex101.ico",
          href: "https://regex101.com",
          description: "Regular Expressions 101"
        },
        {
          title: "lodashjs",
          icon: "https://www.lodashjs.com/img/favicon.ico",
          href: "https://www.lodashjs.com/",
          description:
            "Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。"
        },
        {
          title: "力扣",
          icon: "https://leetcode-cn.com/favicon.ico",
          href: "https://leetcode-cn.com/",
          description: "力扣（LeetCode）官网 - 全球极客挚爱的技术成长平台"
        }
      ]
    },
    {
      name: "热门社区",
      type: "61a915ce-0c77-4f30-8121-90c813496d36",
      icon: "crown",
      list: [
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
          title: "掘金社区",
          icon: "https://b-gold-cdn.xitu.io/favicons/v2/favicon.ico",
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
      name: "热点关注",
      type: "23747da2-4b49-4804-9f19-3b521f7449bc",
      icon: "control",
      menus: [
        {
          name: "热门框架",
          type: "8b2d012d-76c4-4046-966f-88d0e5914730",
          icon: "slack",
          list: [
            {
              title: "Vue",
              icon: "https://cn.vuejs.org/images/icons/favicon-32x32.png",
              href: "https://cn.vuejs.org/",
              description: "渐进式 JavaScript 框架"
            },
            {
              title: "React",
              icon: "https://react.docschina.org/favicon.ico",
              href: "https://react.docschina.org/",
              description: "用于构建用户界面的 JavaScript 库"
            },
            {
              title: "Electron",
              icon:
                "https://www.electronjs.org/images/favicon.b7a59262df48d6563400baf5671da548.ico",
              href: "https://www.electronjs.org/",
              description:
                "使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序"
            },
            {
              title: "Angular",
              icon: "https://angular.cn/assets/images/favicons/favicon.ico",
              href: "https://angular.cn/",
              description: "一套框架，多种平台；移动端 & 桌面端"
            },
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
              title: "Nuxtjs",
              icon: "https://zh.nuxtjs.org/favicon.ico",
              href: "https://zh.nuxtjs.org/",
              description: "易于使用的 Vue 框架"
            },
            {
              title: "webpackjs",
              icon: "https://www.webpackjs.com/assets/favicon.ico",
              href: "https://www.webpackjs.com/",
              description: "打包所有的 资源"
            },
            {
              title: "rollupjs",
              icon: "https://www.rollupjs.com/img/favicon.png",
              href: "https://www.rollupjs.com/",
              description:
                "Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。"
            }
          ]
        },
        {
          name: "UI框架",
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
              icon: "https://nutui.jd.com/favicon.ico",
              href: "https://nutui.jd.com/#/index",
              description: "一套京东风格的轻量级移动端Vue组件库"
            },
            {
              title: "Angular Material",
              icon:
                "https://material.angular.cn/assets/img/favicons/favicon.ico?v=8.2.3",
              href: "https://material.angular.cn/",
              description: "Material Design 组件库 for Angular"
            },
            {
              title: "mint-ui",
              icon: "./icons/mint.ico",
              href: "http://mint-ui.github.io/docs/#/",
              description: "再也找不到了"
            }
          ]
        },
        {
          name: "其他框架",
          type: "489035cc-65b5-4578-8c7b-6d79edd7b61a",
          icon: "dribbble",
          list: [
            {
              title: "Vue CLI",
              icon: "https://cn.vuejs.org/images/icons/favicon-32x32.png",
              href: "https://cli.vuejs.org/zh/",
              description: "Vue.js 开发的标准工具"
            },
            {
              title: "Create React App",
              icon:
                "http://www.html.cn/create-react-app/img/favicon/favicon.ico",
              href: "http://www.html.cn/create-react-app/",
              description: "Vue.js 开发的标准工具Create React App 中文文档"
            },
            {
              title: "Vue-Element-Admin",
              icon:
                "https://panjiachen.gitee.io/vue-element-admin-site/favicon.ico",
              href: "https://panjiachen.gitee.io/vue-element-admin-site/zh/",
              description: "vue-element-admin"
            },

            {
              title: "React Router",
              icon: "https://reactrouter.com/favicon-32x32.png",
              href: "https://reacttraining.com/react-router/",
              description:
                "React Router is a collection of navigational components that compose declaratively with your application."
            },

            {
              title: "Echarts",
              icon:
                "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/favicon.png?_v_=20200710_1",
              href: "https://echarts.apache.org/zh/index.html",
              description: "一个基于 JavaScript 的开源可视化图表库"
            },
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
            }
          ]
        }
      ]
    },
    {
      name: "工具合集",
      type: "3e17458c-5729-46fc-9f5c-25f8ed798633",
      icon: "global",
      menus: [
        {
          name: "查询工具",
          type: "4242800e-e310-4699-8368-8aa6aacde5b2",
          icon: "heart",
          list: [
            {
              title: "BootCDN",
              icon:
                "https://www.bootcdn.cn/assets/ico/favicon.ico?1589364549024",
              href: "https://www.bootcdn.cn/",
              description: "稳定、快速、免费的前端开源项目 CDN 加速服务"
            },
            {
              title: "lodashjs",
              icon: "https://www.lodashjs.com/img/favicon.ico",
              href: "https://www.lodashjs.com/",
              description:
                "Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。"
            },
            {
              title: "NpmJs",
              icon:
                "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png",
              href: "https://www.npmjs.com/",
              description: "Build amazing things"
            },
            {
              title: "ECMAScript",
              icon: "http://it200.cn/images/logo/default.png",
              href: "http://es.xiecheng.live/",
              description: "ECMAScript2015~2020语法全解析"
            },
            {
              title: "can i use",
              icon: "https://www.caniuse.com/img/favicon-128.png",
              href: "https://www.caniuse.com/",
              description: "can i use"
            },
            {
              title: "Web 开发技术 | MDN",
              icon: "https://developer.mozilla.org/favicon.ico",
              href: "https://developer.mozilla.org/zh-CN/docs/Web",
              description: "Web 开发技术 面向 Web 开发者的文档"
            },

            {
              title: "Shields",
              icon: "./icons/shields.ico",
              href: "https://shields.io/category/build",
              description: "GitHub徽章"
            },
            {
              title: "Deepl",
              icon: "https://www.deepl.com/img/favicon/favicon_32.png",
              href: "https://www.deepl.com/translator",
              description: "Deepl翻译器"
            },
            {
              title: "UIGradients",
              icon: "https://uigradients.com/static/images/favicon-32x32.png",
              href: "https://uigradients.com/#Margo",
              description: "渐变生成器"
            },
            {
              title: "AST Explorer",
              icon: "https://astexplorer.net/favicon.png",
              href: "https://astexplorer.net/",
              description: "抽象语法树"
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
              title: "生成ICO图标",
              icon: "http://www.ico51.cn/favicon.ico",
              href: "http://www.ico51.cn/",
              description: "在线生成透明ICO图标"
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
          name: "常用工具",
          type: "ca7da9ca-8201-4259-8342-38ee1cb18fd5",
          icon: "like",
          list: [
            {
              title: "Processon",
              icon: "https://www.processon.com/favicon.ico",
              href: "https://www.processon.com/",
              description: "免费在线作图、实时协作"
            },
            {
              title: "MD美化",
              icon: "https://www.mdnice.com/favicon.svg",
              href: "https://www.mdnice.com/",
              description: "Markdown Nice"
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
              title: "Loupe",
              icon: "./icons/latentflip.ico",
              href: "http://latentflip.com/loupe/",
              description: "代码执行的可视化工具"
            },
            {
              title: "Toptal",
              icon:
                "https://assets.toptal.io/assets/front/static/favicons/favicon_ca7136.png",
              href: "https://www.toptal.com/developers/css/sprite-generator",
              description: "CSS Sprites Generator"
            },
            {
              title: "Nginx在线配置",
              icon: "https://www.nginxedit.cn/assets/img/favicon.png",
              href: "https://www.nginxedit.cn/",
              description: "配置高性能，安全和稳定的NGINX服务器的最简单方法。"
            },
            {
              title: "GitHub Proxy 代理加速",
              icon: "https://github.githubassets.com/favicons/favicon.png",
              href: "https://ghproxy.com",
              description:
                "GitHub 文件 , Releases , archive 以及 raw.githubusercontent.com 文件加速下载服务."
            },

            {
              title: "腾讯企业邮箱",
              icon: "//exmail.qq.com/exmail_logo.ico",
              href: "https://exmail.qq.com/",
              description: "记得每日查看邮件"
            },
            {
              title: "网易邮箱",
              icon: "https://mail.163.com/favicon.ico",
              href: "https://mail.163.com/",
              description: "记得每日查看邮件"
            },
            {
              title: "emojipedia",
              icon:
                "https://emojipedia.org/static/img/favicons/favicon-32x32.png",
              href: "https://emojipedia.org/",
              description: "emojipedia"
            },
            {
              title: "Form-Generator",
              icon:
                "https://mrhj.gitee.io/form-generator/img/logo.e1bc3747.png",
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
              title: "草料二维码生成",
              icon: "https://static.clewm.net/static/images/favicon.ico",
              href: "https://cli.im/url",
              description: "草料二维码生成"
            },

            {
              title: "腾讯网址安全中心",
              icon: "./icons/urlsec.ico",
              href: "https://urlsec.qq.com/",
              description: "腾讯网址安全中心"
            },
            {
              title: "GithubStatus",
              icon:
                "https://github.githubassets.com/favicons/favicon-success.png",
              href: "https://www.githubstatus.com/",
              description: "Github Status"
            },
            {
              title: "17ce",
              icon: "https://www.17ce.com/smedia/images/favicon.ico",
              href: "https://www.17ce.com/",
              description:
                "国内最专业最权威的实时网站测速、服务器监控、网络监控、IDC质量评测、PING,DNS,HTTP,CDN测试网站速度监控，遍及国内各省和国外的监测点，包括电信、网通、联通、移动、长城宽带、教育网等线路，测试网站在全国各地和海外的打开速度，全面的报表功能、对比功能、地图展示、柱型图展示等专业测速网站 "
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
        }
      ]
    },
    {
      name: "学习平台",
      type: "3c562f03-d211-4743-b311-19593aacc8ce",
      icon: "read",
      list: [
        {
          title: "慕课网",
          description: "程序员的梦工厂",
          icon: "https://www.imooc.com/favicon.ico",
          href: "https://www.imooc.com/"
        },
        {
          title: "开课吧",
          description: "数字化人才在线教育平台",
          icon: "https://img.kaikeba.com/kkb_portal_icon.ico",
          href: "https://www.kaikeba.com/"
        },

        {
          title: "现代 JavaScript 教程",
          icon: "https://zh.javascript.info/img/favicon/favicon.png",
          href: "https://zh.javascript.info/",
          description: "从基础知识到高阶主题，只需既简单又详细的解释。"
        },
        {
          title: "张鑫旭",
          icon: "https://www.zhangxinxu.com/favicon.ico",
          href: "https://www.zhangxinxu.com/",
          description: "张鑫旭的个人博客"
        },
        {
          title: "阮一峰",
          icon: "http://www.ruanyifeng.com/favicon.ico",
          href: "http://www.ruanyifeng.com/blog/",
          description: "阮一峰的网络日志"
        },
        {
          title: "自助服务系统",
          icon: "https://zikao.hneao.cn/favicon.ico",
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
    },
    {
      name: "综合整理",
      type: "1a99f70b-1db6-4c91-8703-3957bb14f881",
      icon: "euro",
      menus: [
        {
          name: "PDF整理",
          type: "c2f791e7-d739-48f5-802a-066113b8905e",
          icon: "file-ppt",
          list: [
            {
              title: "我的简历",
              icon: "./icons/pdf.ico",
              href: "http://it200.cn/pdf/张鑫-移动web前端-个人简历.pdf",
              description: "张鑫-移动web前端-个人简历"
            },
            {
              title: "Java基础",
              icon: "./icons/pdf.ico",
              href: "http://it200.cn/pdf/java-all.pdf",
              description: "Java基础-java-all"
            },
            {
              title: "重学Java设计模式·小傅哥",
              icon: "./icons/pdf.ico",
              href:
                "http://it200.cn/pdf/重学Java设计模式·小傅哥(公众号：bugstack虫洞栈).pdf",
              description: "重学Java设计模式·小傅哥"
            },
            {
              title: "阿里巴巴Java开发手册",
              icon: "./icons/pdf.ico",
              href: "http://it200.cn/pdf/阿里巴巴Java开发手册（泰山版）.pdf",
              description: "阿里巴巴Java开发手册"
            },
            {
              title: "老孟Flutter",
              icon: "./icons/pdf.ico",
              href: "http://it200.cn/pdf/老孟Flutter-控件大全.pdf",
              description: "老孟Flutter-控件大全"
            },
            {
              title: "Git Github GitServer",
              icon: "./icons/pdf.ico",
              href:
                "http://it200.cn/pdf/完全学会git github gitserver的24堂课.pdf",
              description: "Git Github GitServer"
            }
          ]
        },
        {
          name: "其他整理",
          type: "0d2b9681-e0c1-4a55-94ef-159d6d84963c",
          icon: "file-unknown",
          list: [
            {
              title: "pub.flutter-io",
              icon: "https://dartpad.cn/pictures/logo_dart.png",
              href: "https://pub.flutter-io.cn/",
              description: "pub.flutter-io"
            },
            {
              title: "Fluro的封装",
              icon: "https://dartpad.cn/pictures/logo_dart.png",
              href: "https://www.cnblogs.com/joe235/p/11957838.html",
              description: "对Flutter路由管理库Fluro的封装"
            },
            {
              title: "dartpad",
              icon: "https://dartpad.cn/pictures/logo_dart.png",
              href: "https://dartpad.cn/",
              description: "dartpad在线编码"
            },
            {
              title: "helloflask",
              icon:
                "https://gblobscdn.gitbook.com/spaces%2F-LPUGutvb8ubewWLtJw4%2Favatar.png?alt=media",
              href: "https://read.helloflask.com/",
              description: "Flask 入门教程"
            },
            {
              title: "Flask Web开发实战",
              icon: "http://it200.cn/images/logo/default.png",
              href: "https://passport.jd.com/uc/login",
              description: "Flask Web开发实战-京东阅读"
            },
            {
              title: "flask-01",
              icon: "http://it200.cn/images/logo/default.png",
              href: "https://www.cnblogs.com/wt11/p/9288605.html",
              description: "结合manage.py，在flask项目中使用websocket"
            },
            {
              title: "flask-02",
              icon: "http://it200.cn/images/logo/default.png",
              href:
                "https://blog.csdn.net/xujiahui320582/article/details/83065288",
              description: "Flask速成项目：Flask实现计算机资源的实时监控"
            },
            {
              title: "flask-03",
              icon: "http://it200.cn/images/logo/default.png",
              href: "https://www.jianshu.com/p/b3500954b3d3",
              description: "flask使用flask-socketio 启动服务方式"
            }
          ]
        }
        // {
        //   name: "振利软件",
        //   type: "b108f443-6831-4fa4-8e1f-2b9967976acf",
        //   icon: "desktop",
        //   list: [
        //     {
        //       title: "工时系统",
        //       description: "每日一填,工资满满",
        //       icon: "http://it200.cn/images/logo/default.png",
        //       href: "http://app.n22.com.cn/app/"
        //     },
        //     {
        //       title: "Git仓库",
        //       description: "勤推送,勤拉取",
        //       icon:
        //         "http://git.n22.com.cn:8089/assets/favicon-7901bd695fb93edb07975966062049829afb56cf11511236e61bcf425070e36e.png",
        //       href: "http://git.n22.com.cn:8089/"
        //     },
        //     {
        //       title: "SVN仓库",
        //       description: "勤推送,勤拉取",
        //       icon: "./icons/svn.ico",
        //       href: "https://n22beijing.imwork.net:10480/!/#"
        //     },
        //     {
        //       title: "阿亮UI库",
        //       description: "新框架通用UI库",
        //       icon: "http://vue-mobile.gitee.io/static/image/al.svg",
        //       href: "http://vue-mobile.gitee.io/al-mobile/#/zh-CN/home"
        //     }
        //   ]
        // }
      ]
    }
  ];
});
