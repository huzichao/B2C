(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e9c9be8"],{a946:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("商品属性")]),a("div",[a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",round:""},on:{click:function(t){return e.jump("goodtype")}}},[e._v("返回")]),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",round:""},on:{click:function(t){return e.jump("attrcreate")}}},[e._v("创建")])],1)]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"type",label:"所属商品类型",width:"100",align:"center"}}),a("el-table-column",{attrs:{prop:"date",label:"编号",width:"100",align:"center"}}),a("el-table-column",{attrs:{prop:"roles",label:"属性名称",width:"100",align:"center"}}),a("el-table-column",{attrs:{prop:"name",label:"数量",width:"100",align:"center"}}),a("el-table-column",{attrs:{prop:"phone",label:"录入方式",width:"100",align:"center"}}),a("el-table-column",{attrs:{prop:"address",label:"可选值",align:"center"}}),a("el-table-column",{attrs:{label:"操作"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""}})],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},l=[],r={input:"",methods:{handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},changeDate:function(){this.start_time=this.date?this.date[0]:"",this.end_time=this.date?this.date[1]:""}},data:function(){return{search:"",date:[],start_time:"",end_time:"",value1:!1,currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4,tableData:[{date:"1",roles:"尼斯",name:"单选属性",address:"",phone:"手工录入",type:"hehe"},{date:"2",roles:"尼斯",name:"单选属性",address:"",phone:"手工录入",type:"hehe"},{date:"3",roles:"尼斯",name:"单选属性",address:"",phone:"手工录入",type:"hehe"},{date:"4",roles:"尼斯",name:"单选属性",address:"",phone:"手工录入",type:"hehe"}]}}},c=r,s=(a("e919"),a("4ac2")),i=Object(s["a"])(c,n,l,!1,null,"3209b00a",null);t["default"]=i.exports},bcc7:function(e,t,a){},e919:function(e,t,a){"use strict";a("bcc7")}}]);