(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fe37468"],{"234e":function(e,r,l){"use strict";l.r(r);var t=function(){var e=this,r=e.$createElement,l=e._self._c||r;return l("div",{staticClass:"index"},[l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("商品分类")]),l("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",round:""},on:{click:function(r){return e.jump("users")}}},[e._v("返回")])],1),l("div",{staticClass:"a"},[l("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"账户",prop:"uname"}},[l("el-input",{model:{value:e.ruleForm.uname,callback:function(r){e.$set(e.ruleForm,"uname",r)},expression:"ruleForm.uname"}})],1),l("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[l("el-input",{model:{value:e.ruleForm.pwd,callback:function(r){e.$set(e.ruleForm,"pwd",r)},expression:"ruleForm.pwd"}})],1),l("el-form-item",{attrs:{label:"密保问题"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.question,callback:function(r){e.$set(e.ruleForm,"question",r)},expression:"ruleForm.question"}},e._l(e.options,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value,prop:"question"}})})),1)],1),l("el-form-item",{attrs:{label:"密保答案",prop:"answer"}},[l("el-input",{model:{value:e.ruleForm.answer,callback:function(r){e.$set(e.ruleForm,"answer",r)},expression:"ruleForm.answer"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),l("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)])],1)},a=[],s={data:function(){return{options:[{value:"选项1",label:"妈妈的名字"},{value:"选项2",label:"爸爸的名字"},{value:"选项3",label:"第一个老师"},{value:"选项4",label:"你的生日"},{value:"选项5",label:"你的年龄"}],value:"",ruleForm:{uname:"",pwd:"",question:"",answer:""},rules:{uname:[{required:!0,message:"请输入账户",trigger:"blur"},{min:2,max:8,message:"请输入2-8个字符",trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"},{min:2,max:8,message:"请输入2-8个字符",trigger:"blur"}],question:[{required:!0,message:"请输入密保答案",trigger:"change"}],answer:[{required:!0,message:"请输入密保答案",trigger:"blur"},{min:2,max:8,message:"请输入2-8个字符",trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()}}},u=s,o=(l("3031"),l("4ac2")),n=Object(o["a"])(u,t,a,!1,null,"01e6cbe0",null);r["default"]=n.exports},3031:function(e,r,l){"use strict";l("314f")},"314f":function(e,r,l){}}]);