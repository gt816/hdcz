(function(t){function e(e){for(var a,r,l=e[0],s=e[1],c=e[2],p=0,d=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21ed":function(t,e,n){"use strict";n("3b00")},"2fb5":function(t,e,n){"use strict";n("b198")},"31a8":function(t,e,n){},"37c7":function(t,e,n){"use strict";n("3972")},3972:function(t,e,n){},"39fe":function(t,e,n){},"3b00":function(t,e,n){},4624:function(t,e,n){"use strict";n("c267")},49420:function(t,e){var n=16;function a(){var t=document.documentElement.clientWidth/1920;document.documentElement.style.fontSize=n*Math.min(t,2)+"px"}a(),window.onresize=function(){a()}},"4c69":function(t,e,n){},"50b7":function(t,e,n){"use strict";n("31a8")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],r={name:"app",created:function(){}},l=r,s=(n("21ed"),n("2877")),c=Object(s["a"])(l,o,i,!1,null,null,null),u=c.exports,p=(n("49420"),n("8c4f")),d=function(){var t=this,e=t._self._c;return e("el-container",[e("el-header",[e("div",{staticClass:"logo"},[e("div",[t._v("TT")]),e("strong",[t._v(" 智能云控")])]),e("div",{staticClass:"user"},[t._v("\n      管理员:"+t._s(t.username)+"\n    ")])]),e("el-container",[e("el-aside",{attrs:{width:"200px"}},[e("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:!0,"default-active":t.activeIndex,"unique-opened":!0,"background-color":"#545c64","text-color":"#fff"},on:{open:t.handleOpen,close:t.handleClose}},t._l(t.fromList,(function(n,a){return e("div",[n.secondTitle?t._e():e("el-menu-item",{attrs:{index:n.path}},[e("i",{class:n.icon}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(n.title))])]),n.secondTitle?e("el-submenu",{attrs:{index:n.path}},[e("template",{slot:"title"},[e("i",{class:n.icon}),e("span",[t._v(t._s(n.title))])]),t._l(n.secondTitle,(function(a,o){return n.secondTitle?e("el-menu-item-group",[e("el-menu-item",{attrs:{index:a.path}},[t._v(t._s(a.title))])],1):t._e()}))],2):t._e()],1)})),0)],1),e("el-main",[e("router-view")],1)],1)],1)},m=[],h=(n("28a5"),{name:"home",data:function(){return{username:"admin",activeIndex:this.$route.path.split("/")[1],fromList:[{title:"首页",path:"home",icon:"el-icon-s-home"},{title:"设备管理",path:"equipment",icon:"el-icon-s-tools"},{title:"账户管理",path:"account",icon:"el-icon-user-solid",secondTitle:[{title:"账户管理",path:"account"},{title:"创建新号",path:"createID"}]},{title:"素材管理",path:"material",icon:"el-icon-picture"},{title:"任务管理",path:"task",icon:"el-icon-s-order",secondTitle:[{title:"视频发布",path:"video"}]},{title:"任务日志",path:"taskLog",icon:"el-icon-edit"},{title:"后台权限",path:"backPermissions",icon:"el-icon-s-platform"}]}},mounted:function(){},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}}),f=h,g=(n("4624"),Object(s["a"])(f,d,m,!1,null,"6d7c71c6",null)),v=g.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"allMains"},[e("el-row",[e("el-col",{attrs:{span:24}},[e("p",{staticClass:"title"},[t._v("\n        基础信息\n      ")])]),e("div",{staticStyle:{width:"80%",margin:"auto"}},t._l(t.infos,(function(n,a){return e("el-col",{attrs:{span:6}},[e("div",{staticClass:"infos"},[e("div",{staticClass:"number"},[t._v(t._s(n.number))]),e("span",{staticClass:"info"},[t._v(t._s(n.info))])])])})),1),e("el-col",{attrs:{span:24}},[e("p",{staticClass:"title"},[t._v("\n        数据排行\n      ")])]),e("div",t._l(t.dataRank,(function(t,n){return e("el-col",{attrs:{span:8}},[e("div",{staticClass:"data_rank"},[e("div",{staticStyle:{width:"100%",height:"400px"}},[e("Echarts",{attrs:{option:t}})],1)])])})),1)],1)],1)},y=[],_=function(){var t=this,e=t._self._c;return e("div",{ref:"chartEl",staticStyle:{height:"100%"}})},x=[],w=n("313e"),S=n.n(w),k={name:"e_charts",props:{option:{type:Object,default:function(){}},y_axisData:Array,required:!0},data:function(){return{chart:null,data:[]}},watch:{option:{handler:function(t,e){this.chart.setOption(t)},deep:!0}},mounted:function(){this.chart=S.a.init(this.$refs.chartEl),this.chart.setOption(this.option)},methods:{}},C=k,O=Object(s["a"])(C,_,x,!1,null,null,null),I=O.exports,j={name:"index",components:{Echarts:I},data:function(){return{infos:[{number:55,info:"当前在线设备数量"},{number:0,info:"当前在线账户数量"},{number:55,info:"总计视频数量"},{number:0,info:"总计粉丝数量"},{number:0,info:"总计评论数量"},{number:55,info:"总计点赞数量"},{number:0,info:"总计播放数量"},{number:55,info:"待定"}],dataRank:[{title:{text:"粉丝数排行"},legend:{orient:"vertical",bottom:10},xAxis:{},yAxis:{data:["A账号","B账号","C账号","D账号","E账号","F账号","G账号"]},series:[{barGap:"20%",barCategoryGap:"60%",type:"bar",data:[{value:300,itemStyle:{color:"#5c5e6d"}},{value:500,itemStyle:{color:"#6ad4d4"}},{value:800,itemStyle:{color:"#8757ed"}},{value:1e3,itemStyle:{color:"#ffcf26"}},{value:3e3,itemStyle:{color:"#6ad49b"}},{value:5e3,itemStyle:{color:"#f35d82"}},{value:9500,itemStyle:{color:"#5ba6ff"}}]}]},{title:{text:"作品播放排行"},legend:{orient:"vertical",bottom:10},xAxis:{},yAxis:{data:[" "," "," "," "," "," "," "]},series:[{barGap:"20%",barCategoryGap:"60%",type:"bar",data:[{value:300,itemStyle:{color:"#5c5e6d"}},{value:500,itemStyle:{color:"#6ad4d4"}},{value:800,itemStyle:{color:"#8757ed"}},{value:1e3,itemStyle:{color:"#ffcf26"}},{value:3e3,itemStyle:{color:"#6ad49b"}},{value:5e3,itemStyle:{color:"#f35d82"}},{value:9500,itemStyle:{color:"#5ba6ff"}}]}]},{title:{text:"作品点赞排行"},legend:{orient:"vertical",bottom:10},xAxis:{},yAxis:{data:[""," "," "," "," "," ",""]},series:[{barGap:"20%",barCategoryGap:"60%",type:"bar",data:[{value:300,itemStyle:{color:"#5c5e6d"}},{value:500,itemStyle:{color:"#6ad4d4"}},{value:800,itemStyle:{color:"#8757ed"}},{value:1e3,itemStyle:{color:"#ffcf26"}},{value:3e3,itemStyle:{color:"#6ad49b"}},{value:5e3,itemStyle:{color:"#f35d82"}},{value:9500,itemStyle:{color:"#5ba6ff"}}]}]},{title:{text:"作品评论排行"},legend:{orient:"vertical",bottom:10},xAxis:{},yAxis:{data:["视频编号","视频编号","视频编号","视频编号","视频编号","视频编号","视频编号"]},series:[{barGap:"20%",barCategoryGap:"60%",type:"bar",data:[{value:300,itemStyle:{color:"#5c5e6d"}},{value:500,itemStyle:{color:"#6ad4d4"}},{value:800,itemStyle:{color:"#8757ed"}},{value:1e3,itemStyle:{color:"#ffcf26"}},{value:3e3,itemStyle:{color:"#6ad49b"}},{value:5e3,itemStyle:{color:"#f35d82"}},{value:9500,itemStyle:{color:"#5ba6ff"}}]}]}],option:{title:{text:"粉丝数排行"},legend:{orient:"vertical",bottom:10},xAxis:{},yAxis:{data:["视频编号","视频编号","视频编号","视频编号","视频编号","视频编号"]},series:[{barGap:"20%",barCategoryGap:"60%",type:"bar",data:[{value:43,itemStyle:{color:"#5ba6ff"}},{value:43,itemStyle:{color:"#f35d82"}},{value:43,itemStyle:{color:"#6ad49b"}},{value:43,itemStyle:{color:"#ffcf26"}},{value:43,itemStyle:{color:"#8757ed"}},{value:43,itemStyle:{color:"#6ad4d4"}},{value:43,itemStyle:{color:"#5c5e6d"}}]}]},y_axisData:["视频编号","视频编号","视频编号","视频编号","视频编号","视频编号","视频编号"]}},mounted:function(){},methods:{}},D=j,A=(n("761c"),Object(s["a"])(D,b,y,!1,null,"758003ee",null)),q=A.exports,z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"equipment"},[e("div",{staticClass:"title01"},[e("span",[t._v(t._s(!1===t.equipment?"只显示在线设备":"显示全部设备"))]),e("el-switch",{on:{change:t.equipStatus},model:{value:t.equipment,callback:function(e){t.equipment=e},expression:"equipment"}})],1),e("el-col",{attrs:{span:24}},[e("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:t.tableData,border:""}},[e("el-table-column",{attrs:{prop:"id",label:"设备ID",width:"170"}}),e("el-table-column",{attrs:{prop:"ip",label:"设备IP",width:"180"}}),e("el-table-column",{attrs:{prop:"name",label:"设备品牌"}}),e("el-table-column",{attrs:{prop:"status",label:"设备状态",width:"170"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("statusLight",{attrs:{light:t.row.status}})]}}])}),e("el-table-column",{attrs:{prop:"time",label:"工作时长"}}),e("el-table-column",{attrs:{prop:"number",label:"挂载账户数"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("mountNum",{attrs:{num:n.row.number}}),e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleClick(n.row)}}},[t._v("明细")])]}}])})],1)],1),e("el-col",{staticStyle:{"text-align":"right","margin-top":"30px"},attrs:{span:24}},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},B=[],L=function(){var t=this,e=t._self._c;return e("div",{class:t.status})},$=[],P=(n("c5f6"),{name:"statusLight",props:{light:Number,required:!0},data:function(){return{status:""}},created:function(){this.showLight()},methods:{showLight:function(){var t=this.light;null==t&&(this.status="disabled"),0===t&&(this.status=""),1===t&&(this.status="success"),2===t&&(this.status="warning"),3!==t&&13!==t||(this.status="error")}}}),T=P,R=(n("5cf6"),Object(s["a"])(T,L,$,!1,null,"47b9b879",null)),F=R.exports,E=function(){var t=this,e=t._self._c;return e("strong",[e("span",{staticStyle:{"margin-right":"10px",color:"#555"}},[t._v("总:"+t._s(t.num[0]))]),e("span",{staticStyle:{"margin-right":"10px",color:"#70b603"}},[t._v("正常:"+t._s(t.num[1]))]),e("span",{staticStyle:{"margin-right":"10px",color:"#f59a23"}},[t._v("离线:"+t._s(t.num[2]))]),e("span",{staticStyle:{"margin-right":"10px",color:"#d9001b"}},[t._v("异常:"+t._s(t.num[3]))])])},G=[],V={name:"mountNum",props:{num:Array,required:!0},mounted:function(){}},M=V,U=(n("b6e8"),Object(s["a"])(M,E,G,!1,null,"27c13279",null)),N=U.exports,J={name:"index",components:{statusLight:F,mountNum:N},data:function(){return{equipment:!1,tableData:[{id:"10001",ip:"120.92.92.88  美国",name:"三星 G40",status:1,time:"800小时",number:["30","20","8","2"]},{id:"10002",ip:"120.92.92.88  美国",name:"三星 G40",status:0,time:"800小时",number:["30","0","30","0"]},{id:"10003",ip:"120.92.92.88  日本",name:"三星 G40",status:1,time:"800小时",number:["30","0","30","0"]},{id:"10004",ip:"120.92.92.88  中国",name:"三星 G40",status:1,time:"800小时",number:["30","0","30","0"]},{id:"10005",ip:"120.92.92.88  越南",name:"三星 G40",status:1,time:"800小时",number:["30","0","30","0"]},{id:"10005",ip:"120.92.92.88  巴西",name:"HUAWEI P 50",status:1,time:"800小时",number:["30","0","30","0"]}],total:1e3}},mounted:function(){},methods:{handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))},handleClick:function(t){console.log(t)},equipStatus:function(){this.equipment}}},W=J,H=(n("2fb5"),Object(s["a"])(W,z,B,!1,null,"45e3dbf6",null)),K=H.exports,Q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"equipment"},[e("div",{staticClass:"title01"},[e("el-button",{attrs:{type:"primary"},on:{click:t.deleteFromData}},[t._v("删除")]),e("el-button",{staticStyle:{"margin-right":"30px"},attrs:{type:"warning"}},[t._v("离线")]),e("el-input",{staticStyle:{margin:"0 30px"},attrs:{placeholder:"请输入账户名称或昵称",clearable:""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),e("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[t._v("搜索")]),e("light-btn",{attrs:{colors:t.btns},on:{lightByValue:t.lightByValue}}),e("div",{staticClass:"btns all headBtn",on:{click:function(e){return t.lightByValue(0)}}},[e("span",[t._v("显示全部")])])],1),e("el-col",{attrs:{span:24}},[e("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{border:"",data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55"}}),e("el-table-column",{attrs:{prop:"username",label:"账号",width:"90"}}),e("el-table-column",{attrs:{prop:"password",label:"密码",width:"90"}}),e("el-table-column",{attrs:{prop:"equipmentID",label:"设备ID",width:"100"}}),e("el-table-column",{attrs:{prop:"name",label:"昵称",width:"100"}}),e("el-table-column",{attrs:{prop:"status",label:"状态",width:"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("statusLight",{attrs:{light:t.row.status}})]}}])}),e("el-table-column",{attrs:{label:"头像",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("el-image",{staticStyle:{width:"60px",height:"60px"},attrs:{src:t.row.head,fit:"cover"}})]}}])}),e("el-table-column",{attrs:{prop:"number",label:"粉丝/点赞/播放"}}),e("el-table-column",{attrs:{prop:"sign",label:"签名"}}),e("el-table-column",{attrs:{label:"视频"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticStyle:{"font-weight":"bold",width:"90px","margin-right":"20px",display:"inline-block"}},[t._v("总："+t._s(n.row.video)+"条")]),e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleClick(n.row)}}},[t._v("查看")])]}}])}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleClick(n.row)}}},[t._v("编辑账户")]),e("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-color":"#13ce66","inactive-color":"#d7d7d7"},on:{change:function(e){return t.operation(n.row)}},model:{value:n.row.value,callback:function(e){t.$set(n.row,"value",e)},expression:"scope.row.value"}})]}}])})],1)],1),e("el-col",{staticStyle:{"text-align":"right","margin-top":"30px"},attrs:{span:24}},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},X=[],Y=(n("ac6a"),n("f3e2"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"scrollable-x"},t._l(t.colors,(function(n,a){return e("div",{staticClass:"btns headBtn",on:{click:function(e){return t.btnData(n)}}},[e("status-light",{attrs:{light:n}}),1===n?e("span",[t._v("仅显示在线")]):t._e(),2===n?e("span",[t._v("仅显示离线")]):t._e(),3===n?e("span",[t._v("仅显示异常")]):t._e(),null===n?e("span",[t._v("未启用")]):t._e(),13===n?e("span",[t._v("已禁用")]):t._e()],1)})),0)}),Z=[],tt={name:"lightBtn",components:{StatusLight:F},props:{colors:Array,required:!0},data:function(){return{}},mounted:function(){},methods:{btnData:function(t){this.$emit("lightByValue",t)}}},et=tt,nt=(n("72d6"),Object(s["a"])(et,Y,Z,!1,null,"37113925",null)),at=nt.exports,ot={name:"index",components:{LightBtn:at,statusLight:F,mountNum:N},data:function(){return{input:"",equipment:!1,btns:[1,2,3],tableData:[{username:"10001",password:"123456",id:0,equipmentID:"10001",name:"dfsghsd",status:1,head:"https://i02piccdn.sogoucdn.com/82f1b297ad5dcd48",number:"90/90/90",sign:"2333333",video:"300",value:!0},{username:"10001",password:"123456",id:1,equipmentID:"10002",name:"dfsghsd",status:2,head:"http://img.duoziwang.com/2018/20/07211700202853.jpg",number:"90/90/90",sign:"2333333",video:"300",value:!0},{username:"10001",password:"123456",id:2,equipmentID:"10003",name:"dfsghsd",status:1,head:"https://cdnimg.gamekee.com/images/touhoulostword/1590626787410_14115288.png",number:"90/90/90",sign:"2333333",video:"300",value:!0},{username:"10004",password:"123456",id:3,equipmentID:"10001",name:"dfsghsd",status:1,head:"https://inews.gtimg.com/newsapp_bt/0/13094567333/641",number:"90/90/90",sign:"2333333",video:"300",value:!0},{username:"10005",password:"123456",id:4,equipmentID:"10001",name:"dfsghsd",status:3,head:"https://i02piccdn.sogoucdn.com/b7aab9d95658a1af",number:"90/90/90",sign:"2333333",video:"300",value:!0},{username:"10006",password:"123456",id:5,equipmentID:"10001",name:"dfsghsd",status:1,head:"https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2022%2F0513%2F38b56e80j00rbsuc5006tc001jk013zm.jpg&thumbnail=660x2147483647&quality=80&type=jpg",number:"90/90/90",sign:"2333333",video:"300",value:!0}],total:1e3,multipleSelection:[]}},mounted:function(){},methods:{lightByValue:function(t){console.log(t)},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))},handleClick:function(t){console.log(t)},deleteFromData:function(t){},handleSelectionChange:function(t){console.log(t),t.forEach((function(t,e){console.log(t,e)}))},operation:function(t){console.log(t)}}},it=ot,rt=(n("6d5b"),Object(s["a"])(it,Q,X,!1,null,"1f9fe138",null)),lt=rt.exports,st=function(){var t=this,e=t._self._c;return e("div",[e("el-col",{attrs:{span:24}},[e("h1",{staticClass:"title"},[t._v("创建新号")])]),t._l(t.numsInfo,(function(t,n){return e("div",[e("upload-file",{attrs:{value:t.value,keys:t.key}})],1)})),e("el-col",{staticStyle:{display:"flex","margin-top":"50px","padding-left":"140px"},attrs:{span:8}},[e("el-input",{staticStyle:{margin:"0 30px"},attrs:{placeholder:"请输入账户名称或昵称",clearable:""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),e("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[t._v("搜索")])],1),e("el-col",{staticStyle:{"margin-top":"60px"},attrs:{span:24}},[e("el-col",{attrs:{span:8}},[e("span",{staticClass:"title"},[t._v("账号列表")]),e("light-btn",{attrs:{colors:t.colors},on:{lightByValue:t.statusBtn}})],1),e("el-col",{staticStyle:{margin:"20px 0"},attrs:{span:24}},[e("el-button",{attrs:{type:"primary"}},[t._v("启用")]),e("el-button",{attrs:{type:"danger"}},[t._v("禁用")])],1),e("el-col",{attrs:{span:24}},[e("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{border:"",data:t.tableData},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55"}}),e("el-table-column",{attrs:{prop:"username",label:"账号",width:"90"}}),e("el-table-column",{attrs:{prop:"password",label:"密码",width:"90"}}),e("el-table-column",{attrs:{prop:"name",label:"昵称",width:"100"}}),e("el-table-column",{attrs:{prop:"status",label:"状态",width:"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("statusLight",{attrs:{light:t.row.status}})]}}])}),e("el-table-column",{attrs:{label:"头像",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("el-image",{staticStyle:{width:"60px",height:"60px"},attrs:{src:t.row.head,fit:"cover"}})]}}])}),e("el-table-column",{attrs:{prop:"sign",label:"签名"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleClick(n.row)}}},[t._v("编辑账户")]),e("el-switch",{staticStyle:{"margin-left":"20px"},attrs:{"active-color":"#13ce66","inactive-color":"#d7d7d7"},on:{change:function(e){return t.operation(n.row)}},model:{value:n.row.value,callback:function(e){t.$set(n.row,"value",e)},expression:"scope.row.value"}})]}}])})],1)],1),e("el-col",{staticStyle:{"text-align":"right","margin-top":"30px"},attrs:{span:24}},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],2)},ct=[],ut=function(){var t=this,e=t._self._c;return e("el-col",{staticClass:"title01",attrs:{span:6}},[e("strong",[t._v(t._s(t.value)+"："+t._s(t.keys))]),e("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.upLoad}},[t._v("上传")])],1)},pt=[],dt={name:"index",props:["value","keys"],mounted:function(){},methods:{upLoad:function(){this.$emit("dialog",!0)}}},mt=dt,ht=(n("5c4d"),Object(s["a"])(mt,ut,pt,!1,null,"79368095",null)),ft=ht.exports,gt={name:"index",components:{LightBtn:at,uploadFile:ft,statusLight:F},data:function(){return{input:"",numsInfo:[{value:"头像库数量",key:"400"},{value:"昵称库数量",key:"400"},{value:"个性签名库数量",key:"400"}],colors:[null,13],tableData:[{username:"10001",password:"123456",id:0,name:"dfsghsd",status:1,head:"https://i02piccdn.sogoucdn.com/82f1b297ad5dcd48",number:"90/90/90",sign:"2333333",video:"300",value:!0},{username:"10001",password:"123456",id:1,equipmentID:"10002",name:"dfsghsd",status:2,head:"http://img.duoziwang.com/2018/20/07211700202853.jpg",number:"90/90/90",sign:"2333333",video:"300",value:!0},{username:"10001",password:"123456",id:2,equipmentID:"10003",name:"dfsghsd",status:1,head:"https://cdnimg.gamekee.com/images/touhoulostword/1590626787410_14115288.png",number:"90/90/90",sign:"2333333",video:"300",value:!0},{username:"10004",password:"123456",id:3,equipmentID:"10001",name:"dfsghsd",status:1,head:"https://inews.gtimg.com/newsapp_bt/0/13094567333/641",number:"90/90/90",sign:"2333333",video:"300",value:!0},{username:"10005",password:"123456",id:4,equipmentID:"10001",name:"dfsghsd",status:3,head:"https://i02piccdn.sogoucdn.com/b7aab9d95658a1af",number:"90/90/90",sign:"2333333",video:"300",value:!0},{username:"10006",password:"123456",id:5,equipmentID:"10001",name:"dfsghsd",status:1,head:"https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2022%2F0513%2F38b56e80j00rbsuc5006tc001jk013zm.jpg&thumbnail=660x2147483647&quality=80&type=jpg",number:"90/90/90",sign:"2333333",video:"300",value:!0}],total:1e3}},methods:{statusBtn:function(t){console.log(t)},handleSelectionChange:function(t){console.log(t),t.forEach((function(t,e){console.log(t,e)}))},handleClick:function(t){console.log(t)},deleteFromData:function(t){},handleSizeChange:function(){},handleCurrentChange:function(){}}},vt=gt,bt=(n("37c7"),Object(s["a"])(vt,st,ct,!1,null,"28d5f03a",null)),yt=bt.exports,_t=function(){var t=this,e=t._self._c;return e("div",[e("el-col",{attrs:{span:24}},[e("h1",{staticClass:"title"},[t._v("视频素材")])]),e("el-col",{attrs:{span:24}},[t._l(t.numsInfo,(function(n,a){return e("div",[e("upload-file",{staticStyle:{"justify-content":"flex-start"},attrs:{value:n.value,keys:n.key},on:{dialog:t.visible}})],1)})),e("div",{staticStyle:{"margin-top":"20px"}},[e("el-col",{attrs:{span:4}},[e("strong",{staticStyle:{"margin-right":"20px"}},[t._v("根据时间排序")]),e("el-button",{attrs:{size:"mini",round:"",icon:"el-icon-arrow-down"},on:{click:function(e){return t.getImgs("add_time","asc")}}},[t._v("升序")]),e("el-button",{attrs:{size:"mini",round:"",icon:"el-icon-arrow-up"},on:{click:function(e){return t.getImgs("add_time","desc")}}},[t._v("降序")])],1),e("el-col",{staticStyle:{display:"flex"},attrs:{span:6}},[e("el-input",{staticStyle:{margin:"0 30px"},attrs:{placeholder:"输入视频编号",clearable:""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.getImgs("","",t.input)}}},[t._v("搜索")])],1)],1)],2),e("el-col",{attrs:{span:24}},[e("video-list",{attrs:{infos:t.picInfos,total:t.count},on:{remove:t.removeData,pageChange:t.pageChange}})],1),e("el-dialog",{attrs:{title:"上传该视频",visible:t.dialogVisible,width:"30%","before-close":t.handleClose,"on-success":t.handleAvatarSuccess},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("span",[t._v("这个视频的类型：")]),e("up-load-pop",{on:{typeId:t.typeId}}),e("el-upload",{staticClass:"upload-demo",staticStyle:{"margin-top":"10px"},attrs:{drag:"",action:"http://192.168.3.30/api/Base/upload","on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[e("i",{staticClass:"el-icon-upload"}),e("div",{staticClass:"el-upload__text"},[t._v("将图片拖到此处，或"),e("em",[t._v("点击上传")])])]),e("el-upload",{staticClass:"upload-demo",staticStyle:{"margin-top":"10px"},attrs:{drag:"",action:"http://192.168.3.30/api/Base/upload","on-success":t.handleAvatarSuccess02,"before-upload":t.beforeAvatarUpload02}},[e("i",{staticClass:"el-icon-upload"}),e("div",{staticClass:"el-upload__text"},[t._v("将视频拖到此处，或"),e("em",[t._v("点击上传")])])]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.sure()}}},[t._v("确 定")])],1)],1)],1)},xt=[],wt=(n("96cf"),n("1da1")),St=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{position:"relative"}},[e("el-col",{attrs:{span:24}},[e("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("全选")]),e("el-popconfirm",{attrs:{title:"这是一段内容确定删除吗？"},on:{confirm:t.deleteBtn}},[e("el-button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",type:"text",disabled:t.delDisabled},slot:"reference"},[t._v("删除")])],1),t._v("\n    当前已选择 "+t._s(t.xx)+" 个视频，选择发布请进入 视频发布 页面\n  ")],1),e("el-col",{staticClass:"videoList",staticStyle:{margin:"15px 0"},attrs:{span:24}},[e("el-checkbox-group",{on:{change:t.handleCheckedCitiesChange},model:{value:t.checkedCities,callback:function(e){t.checkedCities=e},expression:"checkedCities"}},[t._l(t.infos,(function(n,a){return e("el-image",{staticStyle:{width:"207px",height:"368px",border:"10px solid #ccc",margin:"10px 35px 50px 0","z-index":"2"},attrs:{src:n.pic,fit:"cover"},on:{click:function(e){return t.toVideo(a)}}})})),e("div",{staticClass:"checkbox"},t._l(t.lists,(function(n,a){return e("el-checkbox",{key:n,staticStyle:{"margin-bottom":"10px"},attrs:{label:n}},[e("div",{},[e("div",{staticClass:"infoList"},[e("span",[t._v("视频编号："+t._s(t.infos[a].video_num))]),e("span",[t._v("上传时间："+t._s(t.infos[a].add_time))])])])])})),1)],2)],1),e("el-col",{staticStyle:{"text-align":"right",margin:"30px 0"},attrs:{span:24}},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":12,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},kt=[],Ct={name:"videoList",props:{infos:Array,total:Number,required:!0},data:function(){return{checkAll:!1,checkedCities:[],lists:[],isIndeterminate:!0,imgs:[],xx:null,delDisabled:!0,deleteData:[]}},created:function(){},methods:{handleCheckAllChange:function(t){this.checkedCities=t?this.lists:[],this.delDisabled=!t,this.isIndeterminate=!1,this.deleteData=this.lists},handleCheckedCitiesChange:function(t){var e=t.length;this.checkAll=e===this.imgs.length,this.isIndeterminate=e>0&&e<this.imgs.length,this.delDisabled=0===e,this.deleteData=t},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log(t),this.$emit("pageChange",t)},toVideo:function(t){},deleteBtn:function(){var t=this;this.deleteData.forEach((function(e,n){t.deleteData[n]=parseInt(e)}));var e=this.deleteData.toLocaleString();this.$emit("remove",e)}},watch:{infos:function(t,e){var n=this;this.lists=[],t.forEach((function(t,e){n.lists[e]=t.material_id}))}}},Ot=Ct,It=(n("50b7"),Object(s["a"])(Ot,St,kt,!1,null,"5630259b",null)),jt=It.exports,Dt=function(){var t=this,e=t._self._c;return e("el-cascader",{attrs:{options:t.options},on:{"expand-change":t.changeFrom,change:t.getChecked},scopedSlots:t._u([{key:"default",fn:function(n){n.node;var a=n.data;return[e("span",[t._v(t._s(a.label))])]}}]),model:{value:t.valueData,callback:function(e){t.valueData=e},expression:"valueData"}})},At=[],qt={name:"upLoadPop",data:function(){return{options:[],valueData:""}},mounted:function(){this.getType(0)},methods:{changeFrom:function(t){this.getType(parseInt(t[0]))},getType:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("http://192.168.3.30/api/Typecontrol/index",{pid:e},{params:{}}).then((function(t){0===e?(t.data.data.list.forEach((function(t,e){var a=t.label,o=t.value,i=[];n.options.push({value:o,label:a,children:i})})),console.log(n.options)):(n.options.forEach((function(a,o){if(e===parseInt(a.value)){var i="children",r=t.data.data.list;n.options[o][i]=r}})),console.log(n.options))})).catch((function(t){n.$message.error("请求错误")}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getChecked:function(){var t=this.valueData,e=parseInt(t[t.length-1]);this.$emit("typeId",e)}}},zt=qt,Bt=Object(s["a"])(zt,Dt,At,!1,null,"6288ed36",null),Lt=Bt.exports,$t={name:"index",components:{UpLoadPop:Lt,VideoList:jt,uploadFile:ft},data:function(){return{numsInfo:[{value:"视频数量",key:"5000"}],input:"",picInfos:[],count:null,dialogVisible:!1,imageUrl:"",pic:"",type_id:null,video_url:""}},mounted:function(){this.getImgs("","","",1,12)},methods:{getImgs:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(e,n,a,o,i){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("http://192.168.3.30/api/material/index",{order:e,sort:n,video_num:a,page:o,limit:i},{params:{}}).then((function(t){r.picInfos=[],r.picInfos=t.data.data.list,r.count=t.data.data.count,r.numsInfo[0].key=t.data.data.count})).catch((function(t){r.$message.error("请求错误")}));case 2:case"end":return t.stop()}}),t,this)})));function e(e,n,a,o,i){return t.apply(this,arguments)}return e}(),sure:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.upLoadAdd();case 2:this.dialogVisible=!1;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),upLoadAdd:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("http://192.168.3.30/api/Material/add",{pic:this.pic,typecontrol_id:this.type_id,video_url:this.video_url},{params:{}}).then((function(t){console.log(t)})).catch((function(t){e.$message.error("请求错误")}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),typeId:function(t){this.type_id=t,console.log(this.type_id)},handleAvatarSuccess:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e),this.pic=e.data;case 2:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),beforeAvatarUpload:function(t){var e="image"===t.type.split("/")[0],n=t.size/1024/1024<2;return e||this.$message.error("只能上传图像格式!"),n||this.$message.error("上传图像图片大小不能超过 2MB!"),e&&n},handleAvatarSuccess02:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e),this.video_url=e.data;case 2:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),beforeAvatarUpload02:function(t){var e="video"===t.type.split("/")[0],n=t.size/1024/1024<10;return e||this.$message.error("只能上传视频格式!"),n||this.$message.error("上传视频文件大小不能超过 10MB!"),e&&n},removeData:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("http://192.168.3.30/api/material/delete",{material_ids:e},{params:{}}).then((function(t){console.log(t),n.$message.success(t.data.msg),n.getImgs()})).catch((function(t){n.$message.error("请求错误")}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),pageChange:function(){var t=Object(wt["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.getImgs("","","",e,12);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),visible:function(){this.dialogVisible=!0},handleClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))}}},Pt=$t,Tt=Object(s["a"])(Pt,_t,xt,!1,null,"3060057c",null),Rt=Tt.exports,Ft=function(){var t=this,e=t._self._c;return e("div")},Et=[],Gt={name:"index"},Vt=Gt,Mt=Object(s["a"])(Vt,Ft,Et,!1,null,"5d3a2cb0",null),Ut=Mt.exports,Nt=function(){var t=this,e=t._self._c;return e("div")},Jt=[],Wt={name:"index"},Ht=Wt,Kt=Object(s["a"])(Ht,Nt,Jt,!1,null,"c9d9c618",null),Qt=Kt.exports,Xt=function(){var t=this,e=t._self._c;return e("div")},Yt=[],Zt={name:"index"},te=Zt,ee=Object(s["a"])(te,Xt,Yt,!1,null,"9e2f6bdc",null),ne=ee.exports;a["default"].use(p["a"]);var ae=p["a"].prototype.push;p["a"].prototype.push=function(t){return ae.call(this,t).catch((function(t){return t}))};var oe,ie=new p["a"]({routes:[{path:"/",component:v,children:[{path:"/",component:q},{path:"/home",component:q},{path:"/equipment",component:K},{path:"/account",component:lt},{path:"/createID",component:yt},{path:"/material",component:Rt},{path:"/video",component:Ut},{path:"/taskLog",component:Qt},{path:"/backPermissions",component:ne}]}]}),re=ie,le=(n("1c01"),n("58b2"),n("8e6e"),n("d25f"),n("456d"),n("ade3"));n("a481"),n("57e7");oe="http://192.168.3.30/api/";var se={url:oe},ce=n("bc3a"),ue=n("5c96"),pe=n.n(ue),de=ce["a"].create({baseURL:se.url,timeout:15e4});de.interceptors.request.use((function(t){var e=t.url,n=JSON.parse(localStorage.getItem("userInfo"))||"";if(n){var a=n.cli_user.token,o=n.wx_user.token;a&&"string"===typeof a&&(-1!=e.indexOf("/api_wx")?t.headers.Authorization="Bearer "+o:t.headers.Authorization="Bearer "+a)}return t}),(function(t){return ue["Message"].error("请求中错误:"+t),Promise.reject(t)})),de.interceptors.response.use((function(t){return 200==t.status?0!=t.data.code&&(ue["MessageBox"].alert(t.data.msg,"错误",{confirmButtonText:"确定",type:"error"}).then((function(){401==t.data.code&&(localStorage.removeItem("userInfo"),re.replace("/login"))})),"user auth error"==t.data.msg&&(localStorage.removeItem("userInfo"),localStorage.removeItem("permissions"),re.replace("/login")),"login timeout or not login"==t.data.msg&&(localStorage.removeItem("userInfo"),localStorage.removeItem("permissions"),re.replace("/login")),"登录超时,请重新登录."==t.data.msg&&(localStorage.removeItem("userInfo"),localStorage.removeItem("permissions"),re.replace("/login"))):ue["MessageBox"].alert("系统错误","错误",{confirmButtonText:"确定",type:"error"}),t}),(function(t){return ue["MessageBox"].alert(t,"错误",{confirmButtonText:"确定",type:"error"}),Promise.reject(t)}));var me=de,he=function(t){return me({url:"/grade/grade",params:t})},fe=function(t){return me({method:"POST",url:"/grade/grade",data:t})},ge=function(t){return me({method:"POST",url:"/material/index",data:t})},ve={getvip:he,addvip:fe,getData:ge};function be(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function ye(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?be(Object(n),!0).forEach((function(e){Object(le["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _e=ye({},ve);n("0fae");a["default"].prototype.$axios=ce["a"],a["default"].use(pe.a),a["default"].prototype.$api=_e,a["default"].use(p["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(u)},router:re}).$mount("#app")},"5c4d":function(t,e,n){"use strict";n("4c69")},"5cf6":function(t,e,n){"use strict";n("8641")},"6d5b":function(t,e,n){"use strict";n("39fe")},"72d6":function(t,e,n){"use strict";n("f45c")},"761c":function(t,e,n){"use strict";n("aaf3")},8641:function(t,e,n){},"91c9":function(t,e,n){},aaf3:function(t,e,n){},b198:function(t,e,n){},b6e8:function(t,e,n){"use strict";n("91c9")},c267:function(t,e,n){},f45c:function(t,e,n){}});
//# sourceMappingURL=app.fd7a7e06.js.map