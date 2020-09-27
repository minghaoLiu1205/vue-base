webpackJsonp([153],{"nOd+":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("Dd8w"),i=t.n(r),s=t("mvHQ"),o=t.n(s),l=t("oAV5"),d=t("RaLY"),n=t("GWBc"),m={data:function(){return{isDisabled:!1,addParamMsg:{DIFFCITY:!0,id:"",regionCode:"",regionName:"",goodsCategory:"",checkTime:"",reportImageUrl:""},goodsCategoryOptions:[{label:"蔬菜",value:1},{label:"水果",value:2},{label:"水产",value:3},{label:"肉类",value:4}],rules:{checkTime:[{required:!0,validator:function(e,a,t){if(!a)return t(new Error("检测时间不能为空"));t()},trigger:"blur"}],goodsCategory:[{required:!0,validator:function(e,a,t){if(!a)return t(new Error("品类不能为空"));t()},trigger:"change"}]},imageList:[{imgUrl:"",index:0}]}},components:{"image-upload":d.a},mounted:function(){var e=this.$route.params.id;this.getDetail(e)},methods:{getDetail:function(e){var a=this;l.r(),this.$http.get(n.a.viewQualityCheckReport,{id:e}).then(function(e){if(l.c(),0!==e.code)throw new Error(e.msg);if(e.data){if(a.addParamMsg.id=e.data.id,a.addParamMsg.regionCode=e.data.regionCode,a.addParamMsg.regionName=e.data.regionName,a.addParamMsg.goodsCategory=e.data.goodsCategory?parseInt(e.data.goodsCategory):"",a.addParamMsg.checkTime=e.data.checkTime?l.f("yyyy-MM-dd HH:mm:ss",e.data.checkTime):"",a.addParamMsg.reportImageUrl=e.data.reportImageUrl||"",e.data.reportImageUrl){var t=JSON.parse(e.data.reportImageUrl).map(function(e,a){return{imgUrl:e,index:a}});a.imageList=t}else a.imageList=[{imgUrl:"",index:0}];a.initImageUpload()}}).catch(function(e){l.c(),a.$notify.error({title:"提示",message:e.message})})},initImageUpload:function(){var e=this;this.$nextTick(function(){var a={imageList:e.imageList};e.$refs.imageUpload.initHandel(a)})},setImageList:function(e){var a=e.imageList&&e.imageList.length?e.imageList.map(function(e){return e.imgUrl}):"";this.addParamMsg.reportImageUrl=o()(a)},doSaveHandel:function(e){var a=this;this.$refs[e].validate(function(e){if(!e)return!1;0!==JSON.parse(a.addParamMsg.reportImageUrl).length?(a.isDisabled=!0,a.$http.post(n.a.saveQualityCheckReport,i()({},a.addParamMsg)).then(function(e){if(setTimeout(function(){a.isDisabled=!1},800),0===e.code)return a.$message.success("保存成功"),void a.$router.push("/qe");throw new Error(e.msg)}).catch(function(e){a.isDisabled=!1,a.$notify.error({title:"提示",message:e.message})})):a.$message("请上传检测报告图片")})},doCancelHandel:function(){this.$router.push("/qe")}},beforeRouteLeave:function(e,a,t){e.meta.keepAlive=!0,t()}},g={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"add-form-wraper"},[t("el-form",{ref:"ruleForm",attrs:{model:e.addParamMsg,rules:e.rules,"label-width":"160px"}},[t("el-form-item",{attrs:{label:"选择区域",required:""}},[t("el-input",{staticClass:"add-input",attrs:{size:"small",disabled:""},model:{value:e.addParamMsg.regionName,callback:function(a){e.$set(e.addParamMsg,"regionName",a)},expression:"addParamMsg.regionName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"品类",prop:"goodsCategory"}},[t("el-select",{staticClass:"add-input",attrs:{filterable:"",placeholder:"选择品类",size:"small",clearable:""},model:{value:e.addParamMsg.goodsCategory,callback:function(a){e.$set(e.addParamMsg,"goodsCategory",a)},expression:"addParamMsg.goodsCategory"}},e._l(e.goodsCategoryOptions,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),t("span",[e._v("蔬菜、水果为农残检测；水产、肉类为其他检测")])],1),e._v(" "),t("el-form-item",{attrs:{label:"检测时间",prop:"checkTime"}},[t("el-date-picker",{staticClass:"add-input",attrs:{size:"small",type:"datetime",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择检测时间"},model:{value:e.addParamMsg.checkTime,callback:function(a){e.$set(e.addParamMsg,"checkTime",a)},expression:"addParamMsg.checkTime"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"检测报告",required:""}},[t("image-upload",{ref:"imageUpload",on:{setImageList:e.setImageList}}),e._v(" "),t("span",[e._v("建议上传宽度为750像素的JPG或PNG图片，大小不能超过1M")])],1),e._v(" "),t("hr",{staticClass:"s-slip-tb"}),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary",size:"small",disabled:e.isDisabled,icon:e.isDisabled?"el-icon-loading":null},on:{click:function(a){return e.doSaveHandel("ruleForm")}}},[e._v("保存")]),e._v(" "),t("el-button",{attrs:{size:"small"},on:{click:e.doCancelHandel}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]},c=t("VU/8")(m,g,!1,null,null,null);a.default=c.exports}});
//# sourceMappingURL=153.969d68b82c5e47a0396a.js.map