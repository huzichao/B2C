(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59509f10"],{1337:function(e,a,t){},"60a8":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"goods"},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix header",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("请输入商品名")]),t("el-button",{attrs:{type:"primary",round:""}},[e._v("创建")])],1),t("div",{staticClass:"features"},[t("div",{staticClass:"filter"},[t("el-input",{attrs:{placeholder:"请输入商品名"},model:{value:e.input,callback:function(a){e.input=a},expression:"input"}}),t("el-button",{attrs:{icon:"el-icon-search"}})],1),t("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[t("el-table-column",{attrs:{prop:"date",label:"编号",width:"50"}}),t("el-table-column",{attrs:{prop:"province",label:"图片",width:"100"}}),t("el-table-column",{attrs:{prop:"city",label:"标题",width:"180"}}),t("el-table-column",{attrs:{prop:"address",label:"库存",width:"80"}}),t("el-table-column",{attrs:{prop:"zip",label:"价格",width:"90"}}),t("el-table-column",{attrs:{prop:"zip",label:"促销价",width:"90"}}),t("el-table-column",{attrs:{prop:"zip",label:"创建于",width:"180"}}),t("el-table-column",{attrs:{prop:"zip",label:"上架",width:"61"}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),t("el-table-column",{attrs:{prop:"zip",label:"热卖",width:"61"}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),t("el-table-column",{attrs:{prop:"zip",label:"推荐",width:"61"}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),t("el-table-column",{attrs:{prop:"zip",label:"新品",width:"100"}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)],1),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[100,200,300,400,500,600,700,800,900,1e3],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},r=[],n={data:function(){return{input:"",value1:"",value2:!1,currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4,tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}]}},methods:{tableRowClassName:function(e){e.row;var a=e.rowIndex;return 1===a?"warning-row":3===a?"success-row":""},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))}}},c=n,i=(t("f334"),t("4ac2")),o=Object(i["a"])(c,l,r,!1,null,"e5880be4",null);a["default"]=o.exports},f334:function(e,a,t){"use strict";t("1337")}}]);