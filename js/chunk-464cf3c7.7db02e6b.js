(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-464cf3c7"],{"4a8a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ordersRecycle"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix header",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("订单列表")]),a("el-button",{attrs:{type:"primary",round:""}},[e._v("导出数据")])],1),a("div",{staticClass:"features"},[a("div",{staticClass:"filter"},[a("el-input",{attrs:{placeholder:"下单人"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),a("el-button",{attrs:{icon:"el-icon-search"}})],1),a("div",{staticClass:"filter"},[a("el-input",{attrs:{placeholder:"收获人"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),a("el-button",{attrs:{icon:"el-icon-search"}})],1),a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"下单开始日期","end-placeholder":"下单结束日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData2,stripe:""}},[a("el-table-column",{attrs:{prop:"no",label:"订单号",width:"150",align:"center"}}),a("el-table-column",{attrs:{prop:"add_time",label:"下单时间",width:"220",align:"center"}}),a("el-table-column",{attrs:{prop:"username",label:"下单人",width:"100",align:"center"}}),a("el-table-column",{attrs:{prop:"consignee",label:"收货人",width:"100",align:"center"}}),a("el-table-column",{attrs:{prop:"order_amount",label:"总额",width:"90",align:"center"}}),a("el-table-column",{attrs:{prop:"order_status",label:"订单状态",width:"110",align:"center"}}),a("el-table-column",{attrs:{prop:"pay_status",label:"支付状态",width:"110",align:"center"}}),a("el-table-column",{attrs:{prop:"shipping_status",label:"配送情况",width:"110",align:"center"}}),a("el-table-column",{attrs:{label:"操作",width:"160",align:"center"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""}})],1)],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[5,200,300,400,500,600,700,800,900,50],"page-size":5,layout:"total, sizes, prev, pager, next, jumper",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},l=[],i=a("365c"),r={created:function(){this.initData()},methods:{initData:function(){var e=this;Object(i["e"])({pagenum:this.pagenum,pagesize:this.pagesize,uname:this.uname,start_time:this.start_time,end_time:this.end_time}).then((function(t){console.log(t),e.tableData2=t.data.list,e.tableDataTotal=t.data.total}))},tableRowClassName:function(e){e.row;var t=e.rowIndex;return 1===t?"warning-row":3===t?"success-row":""},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e)),this.pagenum=e,this.initData()}},data:function(){return{pagenum:1,pagesize:5,uname:"",start_time:"",end_time:"",tableData2:[],input:"",value1:"",value2:!1,currentPage1:5,currentPage2:5,currentPage3:5,currentPage4:4,tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}]}}},s=r,c=(a("a847"),a("4ac2")),o=Object(c["a"])(s,n,l,!1,null,"5a57c965",null);t["default"]=o.exports},"752b":function(e,t,a){},a847:function(e,t,a){"use strict";a("752b")}}]);