webpackJsonp([95],{"0A7S":function(a,e){},"C+pX":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t("//Fk"),r=t.n(s),o=t("Dd8w"),i=t.n(o),d=t("BO1k"),l=t.n(d),n=(t("ssT3"),t("oAV5")),m=t("cpGA"),g="/foundation/qiniu/auth/file",c="/plateform/a/platformCityGoods/presale/showDetail",p="/plateform/a/platformCityGoods/presale/save",f="/plateform/a/platformCategory/getLevel",u={data:function(){return{isDisabled:!1,imageUploadLoading:!1,addParamMesg:{platformCityGoodsId:"",goodsId:"",goodsName:"",goodsNametemp:"",price:"",saleType:1,platformTagsList:[],platformTags:"",categoryName:"",platformId:2,imgUrl:"",spec:""},categoryList:[],cateDefaultProps:{children:"child",label:"categoryName",value:"categoryId"}}},created:function(){this.getCategoryId();var a=this.$route.params.pcgId;this.getDetailMesg(a)},methods:{getDetailMesg:function(a){var e=this;n.r(),this.$http.post(c,{platformCityGoodsId:a}).then(function(a){if(n.c(),0!==a.code)throw new Error(a.msg);a.data&&(e.addParamMesg.platformCityGoodsId=a.data.platformCityGoodsId,e.addParamMesg.goodsId=a.data.goodsId,e.addParamMesg.goodsName=a.data.goodsName,e.addParamMesg.goodsNametemp=a.data.goodsNo+"-"+a.data.skuName+"-"+a.data.spec,e.addParamMesg.price=a.data.price,e.addParamMesg.spec=a.data.spec,e.addParamMesg.platformTags=a.data.platformTags,a.data.platformTagsList&&a.data.platformTagsList.length>0&&(e.addParamMesg.platformTagsList=a.data.platformTagsList),e.categoryChange(e.addParamMesg.platformTagsList),e.addParamMesg.imgUrl=a.data.imgUrl)}).catch(function(a){n.c(),e.$notify.error({title:"提示",message:a.message})})},getCategoryId:function(){var a=this;this.$http.post(f,{platformId:this.addParamMesg.platformId}).then(function(e){if(0!==e.code)throw new Error(e.msg);if(e.data){var t=a.addParamMesg.platformId.toString();if(e.data[t]){var s=!0,r=!1,o=void 0;try{for(var i,d=l()(e.data[t]);!(s=(i=d.next()).done);s=!0){var n=i.value;n.child&&0===n.child.length&&(n.child=null)}}catch(a){r=!0,o=a}finally{try{!s&&d.return&&d.return()}finally{if(r)throw o}}a.categoryList=e.data[t]}}else a.categoryList=[]}).catch(function(a){console.log("提示(三方平台店内分类):",a.message)})},doSaveHandel:function(){var a=this;""!==this.addParamMesg.goodsId&&""!==this.addParamMesg.goodsName?""!==this.addParamMesg.goodsName?this.addParamMesg.goodsName.length>30?this.$message("商品名称,限制30个字"):""!=this.addParamMesg.price?/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/.test(this.addParamMesg.price)?0!==this.addParamMesg.platformTagsList.length?(this.addParamMesg.platformTags=this.addParamMesg.platformTagsList[this.addParamMesg.platformTagsList.length-1],""!=this.addParamMesg.platformTags?(this.isDisabled=!0,this.$http.post(p,i()({},this.addParamMesg)).then(function(e){if(setTimeout(function(){a.isDisabled=!1},800),0!==e.code)throw new Error(e.msg);a.$router.push("/jd_goods")}).catch(function(e){a.isDisabled=!1,a.$notify.error({title:"提示",message:e.message})})):this.$message("请选择平台分类")):this.$message("请选择平台分类"):this.$message("平台售价是大于0，小数保留小数点后2位"):this.$message("请输入平台售价"):this.$message("请输入商品名称"):this.$message("请选择商品")},doCancelHandel:function(){var a=this;this.$confirm("确定取消吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$router.push("/jd_goods")}).catch(function(){})},categoryChange:function(a){var e=this,t=a;t.length>0&&(this.addParamMesg.platformTags=t[t.length-1]),setTimeout(function(){var a=e.$refs.cascaderCategory.currentLabels;a.length>0&&(e.addParamMesg.categoryName=a[a.length-1])},300)},imageUploadReg:function(a){var e=this,t=-1!==a.type.indexOf("image/"),s="image/jpeg"===a.type;t||this.$message.error("商品图片文件必须是图片格式!"),s||this.$message.error("商品图片只能是JPG格式!");var o=new r.a(function(e,t){var s=window.URL||window.webkitURL,r=new Image;r.onload=function(){r.width>=800&&r.height>=800?e():t()},r.src=s.createObjectURL(a)}).then(function(){return a},function(){return e.$message.error("请上传800*800像素的JPG图片!"),r.a.reject()});return t&&s&&o},emitUpload:function(a){var e=this;this.imageUploadLoading=!0,this.getToken().then(function(t){m.upload(a.file,t.fileName,t.token).subscribe({error:function(){e.imageUploadLoading=!1},complete:function(a){var t="http://retailimg01.benlailife.com/"+a.key;e.addParamMesg.imgUrl=t,e.imageUploadLoading=!1},next:function(a){}})})},getToken:function(a){var e=this;return this.$http.post(g,{}).then(function(a){if(0==a.code){var e=a.data.token;return{fileName:a.data.key,token:e}}throw new Error(a.msg)}).catch(function(a){e.imageUploadLoading=!1,e.$notify.error({title:"提示",message:a.message})})}},beforeRouteLeave:function(a,e,t){a.meta.keepAlive=!0,t()}},h={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"add-form-wraper"},[t("el-form",{ref:"form",attrs:{model:a.addParamMesg,"label-width":"160px"}},[t("el-form-item",{attrs:{label:"选择商品",required:""}},[t("el-input",{staticClass:"add-input",attrs:{size:"small",disabled:""},model:{value:a.addParamMesg.goodsNametemp,callback:function(e){a.$set(a.addParamMesg,"goodsNametemp",e)},expression:"addParamMesg.goodsNametemp"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"商品名称",required:""}},[t("el-input",{staticClass:"add-input",attrs:{size:"small",placeholder:"请输入商品名称"},model:{value:a.addParamMesg.goodsName,callback:function(e){a.$set(a.addParamMesg,"goodsName",e)},expression:"addParamMesg.goodsName"}}),a._v(" "),t("span",[a._v("商品名称,限制30个字")])],1),a._v(" "),t("el-form-item",{attrs:{label:"规格"}},[t("el-input",{staticClass:"add-input",attrs:{size:"small",disabled:""},model:{value:a.addParamMesg.spec,callback:function(e){a.$set(a.addParamMesg,"spec",e)},expression:"addParamMesg.spec"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"平台售价",required:""}},[t("el-input",{staticClass:"add-input",attrs:{size:"small",placeholder:"请输入平台售价"},model:{value:a.addParamMesg.price,callback:function(e){a.$set(a.addParamMesg,"price",e)},expression:"addParamMesg.price"}},[t("el-button",{attrs:{slot:"append"},slot:"append"},[a._v("元")])],1)],1),a._v(" "),t("el-form-item",{attrs:{label:"平台分类",required:""}},[t("el-cascader",{ref:"cascaderCategory",staticClass:"add-input",attrs:{placeholder:"请选择平台分类",options:a.categoryList,size:"small",clearable:"",filterable:"",props:a.cateDefaultProps},on:{change:a.categoryChange},model:{value:a.addParamMesg.platformTagsList,callback:function(e){a.$set(a.addParamMesg,"platformTagsList",e)},expression:"addParamMesg.platformTagsList"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"平台商品图片"}},[t("div",{staticClass:"f-u-w"},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","show-file-list":!1,"before-upload":a.imageUploadReg,"http-request":a.emitUpload}},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:a.imageUploadLoading,expression:"imageUploadLoading"}]},[a.addParamMesg.imgUrl?t("img",{staticClass:"avatar",attrs:{src:a.addParamMesg.imgUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])]),a._v(" "),t("div",{staticClass:"tip-txt-w"},[t("span",[a._v("选填，请上传800*800像素的JPG图片，为空时，默认使用商品库首图")])])],1)]),a._v(" "),t("el-form-item",[t("span",{staticStyle:{color:"red"}},[a._v("*")]),a._v("提示：保存后自动引入ERP上已引入的所有门店\n    ")]),a._v(" "),t("hr",{staticClass:"s-slip-tb"}),a._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary",size:"small",disabled:a.isDisabled},on:{click:a.doSaveHandel}},[a._v("保存")]),a._v(" "),t("el-button",{attrs:{size:"small"},on:{click:a.doCancelHandel}},[a._v("取消")])],1)],1)],1)},staticRenderFns:[]};var v=t("VU/8")(u,h,!1,function(a){t("0A7S")},null,null);e.default=v.exports}});
//# sourceMappingURL=95.dec2760069f59edf3d1c.js.map