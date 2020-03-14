(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{347:function(t,a,n){t.exports=n.p+"assets/img/baidu_01_01.3fb92c15.jpg"},348:function(t,a,n){t.exports=n.p+"assets/img/baidu_01_02.23743ead.jpg"},349:function(t,a,n){t.exports=n.p+"assets/img/baidu_01_basic-check_1.0d544090.jpg"},356:function(t,a,n){"use strict";n.r(a);var e=n(44),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_01-第一个端对端测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01-第一个端对端测试"}},[t._v("#")]),t._v(" 01. 第一个端对端测试")]),t._v(" "),e("p",[t._v("本节我们将实现：测试 "),e("a",{attrs:{href:"https://www.baidu.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.baidu.com"),e("OutboundLink")],1),t._v(" 首页的UI布局。")]),t._v(" "),e("blockquote",[e("p",[t._v("最终的代码参考： "),e("a",{attrs:{href:"https://github.com/matmanjs/matman-demo-getting-started/tree/master/baidu_01",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/matmanjs/matman-demo-getting-started/tree/master/baidu_01"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"_1-创建项目-baidu-01，安装-matman-依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建项目-baidu-01，安装-matman-依赖"}},[t._v("#")]),t._v(" 1. 创建项目 baidu_01，安装 matman 依赖")]),t._v(" "),e("p",[t._v("新建一个目录，例如 "),e("code",[t._v("baidu_01")]),t._v(" ，使用 "),e("code",[t._v("npm init")]),t._v(" 命令初始化，然后安装 "),e("a",{attrs:{href:"http://npmjs.com/package/matman",target:"_blank",rel:"noopener noreferrer"}},[t._v("matman"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ npm i matman --save\n")])])]),e("p",[t._v("你也可以手动新建一个 "),e("code",[t._v("package.json")]),t._v(" ，拷贝下面的内容：")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baidu_01"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"matman build"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build-dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"matman build --dev"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"matman"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^4.0.7"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"_2-配置-matman-config-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置-matman-config-js"}},[t._v("#")]),t._v(" 2. 配置 matman.config.js")]),t._v(" "),e("p",[t._v("在目录下增加一个 "),e("code",[t._v("matman.config.js")]),t._v(" 文件，与 "),e("code",[t._v("package.json")]),t._v(" 同级目录，内容如下：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rootPath"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" __dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    testerPath"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("其中 "),e("code",[t._v("testerPath")]),t._v(" 指定了我们的测试用例存放在那个目录下，这里我们指定为 "),e("code",[t._v("src")]),t._v(" ，因此需要手动增加 "),e("code",[t._v("src")]),t._v(" 文件夹。")]),t._v(" "),e("h2",{attrs:{id:"_3-编写端对端测试模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-编写端对端测试模块"}},[t._v("#")]),t._v(" 3. 编写端对端测试模块")]),t._v(" "),e("h3",{attrs:{id:"_3-1-编写爬虫脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-编写爬虫脚本"}},[t._v("#")]),t._v(" 3.1 编写爬虫脚本")]),t._v(" "),e("p",[t._v("新增 "),e("code",[t._v("src/page_baidu_index/crawlers/get-page-info.js")]),t._v(" 文件，内容如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("module.exports = () => {\n    return {\n        title: document.title,\n        width: window.innerWidth,\n        height: window.innerHeight,\n        userAgent: navigator.userAgent,\n        _version: Date.now(),\n        searchBtnTxt: document.querySelector('#su').value,\n        navInfo: getNavInfo()\n    };\n};\n\n/**\n * 获取导航模块的信息\n */\nfunction getNavInfo() {\n    const jqContainer = $('#u1');\n    let result = {\n        isExist: !!jqContainer.length\n    };\n\n    function getNavData(nameAttr) {\n        const jqItem = $(`a[name=${nameAttr}]`, jqContainer);\n\n        const data = {\n            isExist: !!jqItem.length\n        };\n\n        if (data.isExist) {\n            data.name = jqItem.text();\n            data.href = jqItem.attr('href');\n        }\n\n        return data;\n    }\n\n    if (result.isExist) {\n        result.setting = getNavData('tj_settingicon');\n        result.moreProduct = getNavData('tj_briicon');\n    }\n\n    return result;\n}\n")])])]),e("p",[t._v("编写完成之后，我们可以在浏览器内进行验证，执行爬虫脚本的打包命令：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ npm run build-dev\n")])])]),e("p",[t._v("上述命令会生成一个调试脚本 "),e("code",[t._v("build/crawler-script_dev/page_baidu_index/crawlers/get-page-info.js")]),t._v(" ，拷贝所有的内容在浏览器 "),e("code",[t._v("console")]),t._v(" 控制台，查看输出：")]),t._v(" "),e("p",[e("img",{attrs:{src:n(347),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_3-2-编写执行脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-编写执行脚本"}},[t._v("#")]),t._v(" 3.2 编写执行脚本")]),t._v(" "),e("p",[t._v("新增 "),e("code",[t._v("src/page_baidu_index/cases/basic-check/index.js")]),t._v(" 文件，内容如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const matman = require('matman');\n\nfunction getResult(opts) {\n    // 1. 获取 caseParser 对象\n    const caseParser = new matman.CaseParser(__dirname);\n\n    // 2. 获取页面的 url\n    const pageUrl = 'https://www.baidu.com';\n\n    // 3. 获取 crawlerScript 爬虫脚本路径\n    const crawlerScriptPath = caseParser.getCrawlerScriptPath('../../crawlers/get-page-info');\n\n    // 4. 获得一些配置参数\n    const reqOpts = Object.assign({\n        device: {\n            'UA': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36',\n            'width': 1250,\n            'height': 400\n        },\n        wait: '#su',\n        screenshot: true\n    }, opts);\n\n    // 5. 执行并返回 Promise 结果\n    return caseParser.handleScan(pageUrl, crawlerScriptPath, reqOpts);\n}\n\nmodule.exports = getResult;\n\n// getResult({ show: true, doNotEnd: true, useRecorder: false })\n//     .then(function (result) {\n//         console.log(JSON.stringify(result));\n//     })\n//     .catch(function (error) {\n//         console.error('failed:', error);\n//     });\n")])])]),e("p",[t._v("编写之后，如果要自测，则可以将文件最末尾的注释去掉，然后用 node 执行该文件。")]),t._v(" "),e("h3",{attrs:{id:"_3-3-编写测试脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-编写测试脚本"}},[t._v("#")]),t._v(" 3.3 编写测试脚本")]),t._v(" "),e("p",[t._v("新增 "),e("code",[t._v("src/page_baidu_index/cases/basic-check/index.test.js")]),t._v(" 文件，内容如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const expect = require('chai').expect;\n\nconst checkPage = require('.');\n\ndescribe('百度首页：常规检查', function () {\n    this.timeout(30000);\n\n    let resultData;\n\n    before(function () {\n        return checkPage({ show: false, doNotEnd: false, useRecorder: true })\n            .then(function (result) {\n                // console.log(JSON.stringify(result));\n                resultData = result;\n            });\n    });\n\n    describe('检查基本信息', function () {\n        let data;\n\n        before(function () {\n            data = resultData.data;\n        });\n\n        it('网站title应该为：百度一下，你就知道', function () {\n            expect(data.title).to.equal('百度一下，你就知道');\n        });\n\n        it('搜索按钮的文字应该为：百度一下', function () {\n            expect(data.searchBtnTxt).to.equal('百度一下');\n        });\n\n        it('顶部导航信息正确', function () {\n            expect(data.navInfo).to.eql({\n                'isExist': true,\n                'moreProduct': { 'href': 'http://www.baidu.com/more/', 'isExist': true, 'name': '更多产品' },\n                'setting': { 'href': 'http://www.baidu.com/gaoji/preferences.html', 'isExist': true, 'name': '设置' }\n            });\n        });\n    });\n});\n\n")])])]),e("p",[t._v("安装 "),e("a",{attrs:{href:"http://npmjs.com/package/mocha",target:"_blank",rel:"noopener noreferrer"}},[t._v("mocha"),e("OutboundLink")],1),t._v(" 和 "),e("a",{attrs:{href:"http://npmjs.com/package/chai",target:"_blank",rel:"noopener noreferrer"}},[t._v("chai"),e("OutboundLink")],1),t._v(" ：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ npm i mocha chai --save-dev\n")])])]),e("p",[t._v("配置 npm scripts 命令，最后的 package.json 长这样：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "name": "baidu_01",\n    "version": "1.0.0",\n    "scripts": {\n        "build": "matman build",\n        "build-dev": "matman build --dev",\n        "test": "npm run build && mocha src/**/*.test.js"\n    },\n    "dependencies": {\n        "matman": "^4.0.7"\n    },\n    "devDependencies": {\n        "chai": "^4.2.0",\n        "mocha": "^7.1.0"\n    }\n}\n')])])]),e("h3",{attrs:{id:"_3-4-执行端对端测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-执行端对端测试"}},[t._v("#")]),t._v(" 3.4 执行端对端测试")]),t._v(" "),e("p",[t._v("运行如下命令，执行端对端测试：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ npm test\n")])])]),e("p",[e("img",{attrs:{src:n(348),alt:""}})]),t._v(" "),e("p",[t._v("同时，由于我们配置了测试过程截图，因此可以在 "),e("code",[t._v("build/screenshot/page_baidu_index_cases")]),t._v(" 目录下看到截图：")]),t._v(" "),e("p",[e("img",{attrs:{src:n(349),alt:""}})])])}),[],!1,null,null,null);a.default=s.exports}}]);