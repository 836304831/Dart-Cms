(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["config"],{5586:function(t,e,a){"use strict";var s=a("c6ec"),l=a.n(s);l.a},"6ae3":function(t,e,a){var s=a("1c8b"),l=a("8d7b");s({target:"Array",proto:!0,forced:l!==[].lastIndexOf},{lastIndexOf:l})},"8d7b":function(t,e,a){"use strict";var s=a("da10"),l=a("3da3"),i=a("d88d"),c=a("d7e1"),o=a("ff9c"),n=Math.min,r=[].lastIndexOf,f=!!r&&1/[1].lastIndexOf(1,-0)<0,p=c("lastIndexOf"),d=o("indexOf",{ACCESSORS:!0,1:0}),v=f||!p||!d;t.exports=v?function(t){if(f)return r.apply(this,arguments)||0;var e=s(this),a=i(e.length),c=a-1;for(arguments.length>1&&(c=n(c,l(arguments[1]))),c<0&&(c=a+c);c>=0;c--)if(c in e&&e[c]===t)return c||0;return-1}:r},b5cc:function(t,e,a){var s=a("1c8b"),l=a("857c"),i=a("aa6b").f;s({target:"Reflect",stat:!0},{deleteProperty:function(t,e){var a=i(l(t),e);return!(a&&!a.configurable)&&delete t[e]}})},c6ec:function(t,e,a){},d7e1:function(t,e,a){"use strict";var s=a("efe2");t.exports=function(t,e){var a=[][t];return!!a&&s((function(){a.call(null,e||function(){throw 1},1)}))}},eb43:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pb20 pt20 pl20 pr20 config",attrs:{time:"1578228809247"}},[a("div",{staticClass:"box"},[a("div",{staticClass:"con"},[a("div",{staticClass:"pr20 pl20 pt20 pb20 tabBox mt10"},[a("span",{staticClass:"tipTitle"},[t._v("网站")]),a("div",[a("div",{staticClass:"row-item clearfix",staticStyle:{margin:"0"}},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("网站名称：")]),a("div",{staticClass:"row-con"},[a("div",[a("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.config.websiteName,callback:function(e){t.$set(t.config,"websiteName",e)},expression:"config.websiteName"}})],1)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("网站关键字：")]),a("div",{staticClass:"row-con"},[a("div",[a("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.config.keywords,callback:function(e){t.$set(t.config,"keywords",e)},expression:"config.keywords"}})],1)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("网站描述：")]),a("div",{staticClass:"row-con"},[a("div",[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.config.description,callback:function(e){t.$set(t.config,"description",e)},expression:"config.description"}})],1)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("底部信息：")]),a("div",{staticClass:"row-con"},[a("div",[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容html"},model:{value:t.config.footerInfo,callback:function(e){t.$set(t.config,"footerInfo",e)},expression:"config.footerInfo"}})],1)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("网站公告：")]),a("div",{staticClass:"row-con"},[a("div",[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"网站公告"},model:{value:t.config.notice,callback:function(e){t.$set(t.config,"notice",e)},expression:"config.notice"}})],1),t._m(0)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("公共代码：")]),a("div",{staticClass:"row-con"},[a("div",[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"公共代码"},model:{value:t.config.publicCode,callback:function(e){t.$set(t.config,"publicCode",e)},expression:"config.publicCode"}})],1),t._m(1)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("开启轮播图：")]),a("div",{staticClass:"row-con"},[a("div",{},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.config.openSwiper,callback:function(e){t.$set(t.config,"openSwiper",e)},expression:"config.openSwiper"}})],1)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("开启纯静态：")]),a("div",{staticClass:"row-con"},[a("div",{staticClass:"pub-flex"},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.config.openStatic,callback:function(e){t.$set(t.config,"openStatic",e)},expression:"config.openStatic"}}),a("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("开启纯静态之前，请确保已经生成静态页面，请注意！")])],1)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("开启东八区：")]),a("div",{staticClass:"row-con"},[a("div",{staticClass:"pub-flex"},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.config.isBjTime,callback:function(e){t.$set(t.config,"isBjTime",e)},expression:"config.isBjTime"}}),a("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("网站时间更改为东八区北京时间，请注意！")])],1)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("是否允许留言：")]),a("div",{staticClass:"row-con"},[a("div",{staticClass:"pub-flex"},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.config.allowReply,callback:function(e){t.$set(t.config,"allowReply",e)},expression:"config.allowReply"}}),a("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("禁用评价后无法留言，请注意！")])],1),t.config.allowReply?a("div",{staticClass:"pub-flex"},[a("span",[t._v("留言间隔时间：")]),a("div",{staticStyle:{width:"100px"}},[a("el-input",{attrs:{size:"small",placeholder:"留言间隔"},model:{value:t.config.replyInterval,callback:function(e){t.$set(t.config,"replyInterval",t._n(e))},expression:"config.replyInterval"}})],1),a("span",{staticClass:"pl10"},[t._v("分钟")]),a("div",{staticClass:"pub-flex1"})]):t._e(),t.config.allowReply?a("div",{staticClass:"pub-flex"},[a("span",[t._v("留言字数限制：")]),a("div",{staticStyle:{width:"100px"}},[a("el-input",{attrs:{size:"small",placeholder:"留言最大字数限制"},model:{value:t.config.replyTextLen,callback:function(e){t.$set(t.config,"replyTextLen",t._n(e))},expression:"config.replyTextLen"}})],1),a("span",{staticClass:"pl10"},[t._v("字数长度")]),a("div",{staticClass:"pub-flex1"})]):t._e()])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("留言快速审批：")]),a("div",{staticClass:"row-con"},[a("div",{staticClass:"pub-flex"},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.config.adoptCheck,callback:function(e){t.$set(t.config,"adoptCheck",e)},expression:"config.adoptCheck"}}),a("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("用户留言后，检查匹配是否非法留言，直接允许通过，请注意！")])],1)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("是否允许注册：")]),a("div",{staticClass:"row-con"},[a("div",{staticClass:"pub-flex"},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.config.allowRegister,callback:function(e){t.$set(t.config,"allowRegister",e)},expression:"config.allowRegister"}}),a("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("禁用注册后无法注册新用户，请注意！")])],1)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("开启/关闭-网站：")]),a("div",{staticClass:"row-con"},[a("div",{staticClass:"pub-flex"},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.config.shangeWebState,callback:function(e){t.$set(t.config,"shangeWebState",e)},expression:"config.shangeWebState"}}),a("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("关闭网站后无法访问，请注意！")])],1)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("只允许域名访问：")]),a("div",{staticClass:"row-con"},[a("div",{staticClass:"pub-flex"},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.config.allowDomainAccess,callback:function(e){t.$set(t.config,"allowDomainAccess",e)},expression:"config.allowDomainAccess"}}),a("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("禁用注册后无法注册新用户，请注意！")])],1),t.config.allowDomainAccess?a("div",[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.config.allowDomainList,callback:function(e){t.$set(t.config,"allowDomainList",e)},expression:"config.allowDomainList"}}),t._m(2)],1):t._e()])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("是否过滤关键词：")]),a("div",{staticClass:"row-con"},[a("div",{staticClass:"pub-flex"},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.config.filterKeyWord,callback:function(e){t.$set(t.config,"filterKeyWord",e)},expression:"config.filterKeyWord"}}),a("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("用户提交留言后，查找是否含有铭感词汇！")])],1),t.config.filterKeyWord?a("div",[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.config.KeyWordList,callback:function(e){t.$set(t.config,"KeyWordList",e)},expression:"config.KeyWordList"}}),t._m(3)],1):t._e()])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("上传网站logo：")]),a("div",{staticClass:"row-con"},[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.getUpLoadLogoUrl(),"before-upload":t.authFileLogo,headers:t.getHeaderConf(),"show-file-list":!1,multiple:!1,"on-success":t.uploadSuccess}},[a("el-button",{staticStyle:{width:"100%",display:"block"},attrs:{size:"small",type:"success"}},[t._v("点击上传网站logo")])],1)],1)])])]),a("div",{staticClass:"pr20 pl20 pt20 pb20 tabBox mt20"},[a("span",{staticClass:"tipTitle"},[t._v("APP")]),a("div",[a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("开启APP首屏公告：")]),a("div",{staticClass:"row-con"},[a("div",{staticClass:"pub-flex"},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.config.openAppMainNotice,callback:function(e){t.$set(t.config,"openAppMainNotice",e)},expression:"config.openAppMainNotice"}}),a("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("如果开启首屏公告，App会弹出公告内容。请注意！")])],1)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("APP首屏公告：")]),a("div",{staticClass:"row-con"},[a("div",[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容"},model:{value:t.config.appInitNoticeCon,callback:function(e){t.$set(t.config,"appInitNoticeCon",e)},expression:"config.appInitNoticeCon"}})],1)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("开启APP升级：")]),a("div",{staticClass:"row-con"},[a("div",{staticClass:"pub-flex"},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#dcdfe6"},model:{value:t.config.appUpgrade,callback:function(e){t.$set(t.config,"appUpgrade",e)},expression:"config.appUpgrade"}}),a("p",{staticClass:"pl20",staticStyle:{color:"#F56C6C"}},[t._v("如果开启APP升级，请先上传APP安装包，请注意！")])],1)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("APP升级信息：")]),a("div",{staticClass:"row-con"},[a("div",[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容"},model:{value:t.config.upgradeInfo,callback:function(e){t.$set(t.config,"upgradeInfo",e)},expression:"config.upgradeInfo"}})],1),t._m(4)])]),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("上传APP安装包：")]),a("div",{staticClass:"row-con"},[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.getUpLoadUrl(),"before-upload":t.authFile,headers:t.getHeaderConf(),"show-file-list":!1,multiple:!1,"on-success":t.uploadSuccess}},[a("el-button",{staticStyle:{width:"100%",display:"block"},attrs:{size:"small",type:"success"}},[t._v("点击上传App安装包")])],1)],1)])])]),a("div",{staticClass:"pr20 pl20"},[a("div"),a("div",{staticClass:"row-item clearfix"},[a("label",{staticClass:"pull-left",attrs:{for:""}},[t._v("提交选择：")]),a("div",{staticClass:"row-con"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.savaConfig}},[t._v("提交")])],1)])])])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{color:"#F56C6C"}},[t._v("提示：多条公告使用回车换行即可，请注意！")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{color:"#F56C6C"}},[t._v("提示：公共代码指的是：统计js，广告js等等，请注意！")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{color:"#F56C6C"}},[t._v("请输入域名，不包括协议（http | https），多个域名使用英文逗号（,）隔开")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{color:"#F56C6C"}},[t._v("可以输入正则，关键词，两种。多个用英文逗号（,）隔开")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{color:"#F56C6C"}},[t._v("提示：多条信息使用回车换行即可，请注意！")])])}],i=(a("6ae3"),a("053b"),a("b5cc"),a("b775"));function c(t,e){return Object(i["a"])({url:"/manage/system/getConfig",method:"GET",params:t||{}},e||{})}function o(){return"/manage/system/uploadApp"}function n(){return"/manage/system/uploadWebLogon"}function r(t,e){return Object(i["a"])({url:"/manage/system/execConfig",method:"POST",data:t||{}},e||{})}var f=a("b893"),p={data:function(){return{config:{_id:"",websiteName:"",keywords:"",description:"",footerInfo:"",notice:"",publicCode:"",openStatic:!1,openSwiper:!1,isBjTime:!0,allowReply:!1,replyInterval:5,replyTextLen:20,adoptCheck:!0,allowRegister:!1,shangeWebState:!0,allowDomainAccess:!1,allowDomainList:"",filterKeyWord:!0,KeyWordList:"",curTempPath:"",openAppMainNotice:!0,appUpgrade:!1,upgradeInfo:"",appInitNoticeCon:""}}},methods:{savaConfig:function(){var t=this,e=Object.assign({},this.config);Reflect.deleteProperty(e,"curTempPath"),r(e,{loading:!0}).then((function(e){t.ajaxMsgTips(e)}))},uploadSuccess:function(t,e,a){this.ajaxMsgTips({data:{code:t.code,text:t.text}})},authFileLogo:function(t){var e=t.name.lastIndexOf("."),a=t.name.substring(e+1).toLocaleLowerCase();return"png"===a||(this.$message({type:"warning",message:"请上传 png 格式的图片！"}),!1)},authFile:function(t){var e=t.name.lastIndexOf("."),a=t.name.substring(e+1).toLocaleLowerCase();return"apk"===a||(this.$message({type:"warning",message:"请上传 apk 软件包！"}),!1)},getHeaderConf:function(){return{Token:Object(f["b"])("token").value}},getUpLoadUrl:function(){var t=o();return Object(f["d"])()?"/api".concat(t):t},getUpLoadLogoUrl:function(){var t=n();return Object(f["d"])()?"/api".concat(t):t},pullData:function(){var t=this;c({},{loading:!0}).then((function(e){t.ajaxMsgTips(e),200===e.data.code&&(t.config=e.data.value)}))}},created:function(){this.pullData()}},d=p,v=(a("5586"),a("9ca4")),u=Object(v["a"])(d,s,l,!1,null,"4f51e8ad",null);e["default"]=u.exports}}]);