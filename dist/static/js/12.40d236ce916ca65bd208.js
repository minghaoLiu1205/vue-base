webpackJsonp([12],{"3/4U":function(e,a,t){"use strict";var i="/plateform/a/mall/pageTemp/selectPageTopicList",s={data:function(){return{topicId:"",topicOptions:[],visible:!1}},created:function(){this.selectPageTopicList()},methods:{setDefaultMsg:function(e){this.visible=e.visible||!1,this.topicId=e.topicId||""},doConfirmHandel:function(){var e=this,a=this.topicOptions.filter(function(a){return a.pageId===e.topicId})[0],t={};a&&(t.adLinkName=a.pageName,t.adLinkId=a.pageId,t.adLinkUrl="/pages/shopping/subject?id="+a.pageId),this.visible=!1,this.$emit("selectTopicChange",t)},selectPageTopicList:function(){var e=this;this.$http.post(i,{pageType:2,DIFFCITY:!0}).then(function(a){if(0!==a.code)throw new Error(a.msg);e.topicOptions=a.data&&a.data.length?a.data:[]}).catch(function(e){console.log("提示(选择专题):",e.message)})}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{"close-on-press-escape":!1,"close-on-click-modal":!1,title:"选择专题",visible:e.visible,width:"460px"},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"form",attrs:{"label-width":"60px"}},[t("el-form-item",{attrs:{label:"专题",required:""}},[t("el-select",{staticClass:"search-input",attrs:{filterable:"",placeholder:"请选择专题",clearable:"",size:"small"},model:{value:e.topicId,callback:function(a){e.topicId=a},expression:"topicId"}},e._l(e.topicOptions,function(e){return t("el-option",{key:e.idx,attrs:{label:e.pageName,value:e.pageId}})}),1)],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini"},on:{click:function(a){e.visible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.doConfirmHandel}},[e._v("确 定")])],1)],1)},staticRenderFns:[]},o=t("VU/8")(s,r,!1,null,null,null);a.a=o.exports},HGi4:function(e,a){},SbxE:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("//Fk"),s=t.n(i),r=t("Dd8w"),o=t.n(r),d=t("mvHQ"),n=t.n(d),l=t("ssT3"),c=t("oAV5"),m=t("cpGA"),g=t("ylbZ"),p=t("naMr"),u=t("3/4U"),f=t("hHUn"),h=t("Hoz/"),v=t("3/Xe"),y="/foundation/qiniu/auth/file",L="/plateform/p/client/mall/popup/ad/addPopupAd",k={data:function(){var e=this;return{isDisabled:!1,imageUploadLoading:!1,pickerOptions:{disabledDate:function(e){return e.getTime()<Date.now()-864e5}},rules:{adName:[{required:!0,validator:function(e,a,t){if(!a)return t(new Error("弹窗名称不能为空"));t()},trigger:"blur"}],startDateTime:[{required:!0,validator:function(e,a,t){if(!a)return t(new Error("开始时间不能为空"));t()},trigger:"blur"}],endDateTime:[{required:!0,validator:function(a,t,i){if(!t)return i(new Error("结束时间不能为空"));var s=c.a(e.addParamMsg.startDateTime);if(c.a(e.addParamMsg.endDateTime)<=s)return i(new Error("结束时间不能早于或等于开始时间"));i()},trigger:"blur"}],adType:[{required:!0,validator:function(e,a,t){if(!a)return t(new Error("请选择跳转路径"));t()},trigger:"change"}]},addParamMsg:{DIFFCITY:!0,regionCode:l.a.get("regionCode")||"",adName:"",startDateTime:"",endDateTime:"",adType:"",adLinkUrl:"",adLinkName:"",adLinkId:"",storeNoList:[],adImgUrl:""},storeCheckedList:[],adTypeOptions:v.a.adTypeOptions.filter(function(e){return e.value}),appIdOptions:v.a.appIdOptions}},components:{region:g.a,"choose-store":p.a,topic:u.a,categoty:f.a,"choose-goods":h.a},methods:{chooseStoreOpen:function(){var e={title:"选择门店",checkedList:this.storeCheckedList,regionCode:this.addParamMsg.regionCode};this.$refs.chooseStore.setDefault(e)},confirmChooseStore:function(e){this.storeCheckedList=e.checkedList&&e.checkedList.length?JSON.parse(n()(e.checkedList)):[]},deleteStoreItem:function(e){var a=e.storeNo;this.storeCheckedList=this.storeCheckedList.filter(function(e){return e.storeNo!==a})},doCancelHandel:function(){var e=this;this.$confirm("确定取消吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$router.push("/ad")}).catch(function(){})},doSaveHandel:function(e){var a=this;this.$refs[e].validate(function(e){if(!e)return!1;if(a.addParamMsg.adImgUrl){if(!a.addParamMsg.adLinkUrl){if("TOPIC"===a.addParamMsg.adType)return void a.$message("请选择专题");if("CATEGORY"===a.addParamMsg.adType)return void a.$message("请选择分类");if("GOODS"===a.addParamMsg.adType)return void a.$message("请选择预售商品");if("URL"===a.addParamMsg.adType)return void a.$message("请输入指定URL");if("SECKILLGOODS"===a.addParamMsg.adType)return void a.$message("请选择秒杀商品");if("SAVEPACKAGE"===a.addParamMsg.adType)return void a.$message("请选择爆款商品")}if("APPLET"===a.addParamMsg.adType){if(!a.addParamMsg.adLinkId)return void a.$message("请选择要跳转的小程序");if(!a.addParamMsg.adLinkUrl)return void a.$message("请输入要跳转的小程序路径")}a.storeCheckedList&&a.storeCheckedList.length?(a.addParamMsg.storeNoList=a.storeCheckedList.map(function(e){return e.storeNo}),a.isDisabled=!0,a.$http.post(L,o()({},a.addParamMsg)).then(function(e){if(setTimeout(function(){a.isDisabled=!1},800),0===e.code)return a.$message.success("保存成功"),void a.$router.push("/ad");throw new Error(e.msg)}).catch(function(e){a.isDisabled=!1,a.$notify.error({title:"提示",message:e.message})})):a.$message("请选择应用门店")}else a.$message("请上传图片")})},imageUploadReg:function(e){var a=this,t=-1!==e.type.indexOf("image/"),i="image/png"===e.type,r=e.size<=307200;if(!t)return this.$message.error("建议上传大小不超过300K的750*1000像素（宽高比为 3:4）的png图片"),!1;if(!i)return this.$message.error("建议上传大小不超过300K的750*1000像素（宽高比为 3:4）的png图片"),!1;if(!r)return this.$message.error("建议上传大小不超过300K的750*1000像素（宽高比为 3:4）的png图片"),!1;var o=new s.a(function(a,t){var i=window.URL||window.webkitURL,s=new Image;s.onload=function(){s.width/s.height==.75?a():t()},s.src=i.createObjectURL(e)}).then(function(){return e},function(){return a.$message.error("建议上传大小不超过300K的750*1000像素（宽高比为 3:4）的png图片"),s.a.reject()});return t&&i&&r&&o},getToken:function(){var e=this;return this.$http.post(y,{}).then(function(e){if(0==e.code){var a=e.data.token;return{fileName:e.data.key,token:a}}throw new Error(e.msg)}).catch(function(a){e.imageUploadLoading=!1,e.$notify.error({title:"提示",message:a.message})})},emitUpload:function(e){var a=this;this.imageUploadLoading=!0,this.getToken().then(function(t){m.upload(e.file,t.fileName,t.token).subscribe({error:function(){a.imageUploadLoading=!1},complete:function(e){var t="http://retailimg01.benlailife.com/"+e.key;a.imageUploadLoading=!1,a.addParamMsg.adImgUrl=t},next:function(e){}})})},adTypeChange:function(e,a){if(a||(this.addParamMsg.adLinkName="",this.addParamMsg.adLinkUrl="",this.addParamMsg.adLinkId=""),"TOPIC"===e)this.$refs.topic.setDefaultMsg({visible:!0,topicId:this.addParamMsg.adLinkId});else if("CATEGORY"===e)this.$refs.category.setDefaultMsg({visible:!0,categoryId:this.addParamMsg.adLinkId});else if("GOODS"===e){var t={title:"选择商品",regionCode:this.addParamMsg.regionCode,isAdvance:1};this.$refs.chooseGoods.setDefault(t)}else if("HOME"===e)this.addParamMsg.adLinkName="首页",this.addParamMsg.adLinkUrl="/pages/shopping/index";else if("URL"===e)this.addParamMsg.adLinkName="跳转指定URL";else if("APPLET"===e)this.addParamMsg.adLinkName="跳转小程序";else if("SECKILLGOODS"===e){var i={title:"选择商品",regionCode:this.addParamMsg.regionCode,isAdvance:2};this.$refs.chooseGoods.setDefault(i)}else if("BESTSELLERGOODS"===e){var s={title:"选择商品",regionCode:this.addParamMsg.regionCode,isAdvance:3};this.$refs.chooseGoods.setDefault(s)}else"SAVEPACKAGE"===e?(this.addParamMsg.adLinkName="省钱礼包",this.addParamMsg.adLinkUrl="/pages/act/SavePackage/SavePackage"):"SECKILLAREA"===e?(this.addParamMsg.adLinkName="秒杀专区",this.addParamMsg.adLinkUrl="/pages/timelyBuy/timelyBuy"):"APPLYLEADER"===e?(this.addParamMsg.adLinkName="申请团长",this.addParamMsg.adLinkUrl="/pages/apply/apply"):"MEMBERWALLET"===e?(this.addParamMsg.adLinkName="会员充值",this.addParamMsg.adLinkUrl="/pages/wallet/index"):"POINTPROM"===e&&(this.addParamMsg.adLinkName="积分换券",this.addParamMsg.adLinkUrl="/pages/act/PointProw/PointProw")},selectTopicChange:function(e){this.addParamMsg.adLinkName=e.adLinkName,this.addParamMsg.adLinkUrl=e.adLinkUrl,this.addParamMsg.adLinkId=e.adLinkId},confirmChooseGoods:function(e){this.addParamMsg.adLinkName=e.productName,this.addParamMsg.adLinkUrl="/pages/product/detail?type=4&id="+e.platformCityGoodsId+"&activityPlatCityGoodsId="+e.activityPlatCityGoodsId+"&activityType="+e.activityType,this.addParamMsg.adLinkId=e.activityPlatCityGoodsId}}},P={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"add-form-wraper"},[t("el-form",{ref:"ruleForm",attrs:{model:e.addParamMsg,rules:e.rules,"label-width":"160px"}},[t("region",{attrs:{className:"add-input",label:"选择区域",required:!0}}),e._v(" "),t("el-form-item",{attrs:{label:"弹窗名称",prop:"adName"}},[t("el-input",{staticClass:"add-input",attrs:{size:"small",placeholder:"弹窗名称"},model:{value:e.addParamMsg.adName,callback:function(a){e.$set(e.addParamMsg,"adName",a)},expression:"addParamMsg.adName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"开始时间",prop:"startDateTime"}},[t("el-date-picker",{staticClass:"add-input",attrs:{size:"small",type:"datetime",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss","picker-options":e.pickerOptions,placeholder:"请输入开始时间"},model:{value:e.addParamMsg.startDateTime,callback:function(a){e.$set(e.addParamMsg,"startDateTime",a)},expression:"addParamMsg.startDateTime"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"结束时间",prop:"endDateTime"}},[t("el-date-picker",{staticClass:"add-input",attrs:{size:"small",type:"datetime",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss","picker-options":e.pickerOptions,placeholder:"请输入结束时间"},model:{value:e.addParamMsg.endDateTime,callback:function(a){e.$set(e.addParamMsg,"endDateTime",a)},expression:"addParamMsg.endDateTime"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"上传图片",required:""}},[t("div",[t("el-upload",{staticClass:"avatar-uploader-3ratio4",attrs:{action:"","show-file-list":!1,"before-upload":e.imageUploadReg,"http-request":e.emitUpload}},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.imageUploadLoading,expression:"imageUploadLoading"}]},[e.addParamMsg.adImgUrl?t("img",{staticClass:"avatar-3ratio4",attrs:{src:e.addParamMsg.adImgUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-3ratio4-icon"})])]),e._v(" "),t("span",[e._v("建议上传大小不超过300K的750*1000像素（宽高比为 3:4）的png图片")])],1)]),e._v(" "),t("el-form-item",{attrs:{label:"跳转路径",prop:"adType"}},[t("el-select",{staticClass:"add-input",attrs:{filterable:"",placeholder:"跳转路径",size:"small"},on:{change:e.adTypeChange},model:{value:e.addParamMsg.adType,callback:function(a){e.$set(e.addParamMsg,"adType",a)},expression:"addParamMsg.adType"}},e._l(e.adTypeOptions,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),"TOPIC"===e.addParamMsg.adType&&e.addParamMsg.adLinkName?t("div",[e._v("\n        "+e._s(e.addParamMsg.adLinkName)+"\n        "),t("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.adTypeChange("TOPIC",!0)}}},[e._v("修改")])],1):e._e(),e._v(" "),"CATEGORY"===e.addParamMsg.adType&&e.addParamMsg.adLinkName?t("div",[e._v("\n        "+e._s(e.addParamMsg.adLinkName)+"\n        "),t("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.adTypeChange("CATEGORY",!0)}}},[e._v("修改")])],1):e._e(),e._v(" "),"GOODS"===e.addParamMsg.adType&&e.addParamMsg.adLinkName?t("div",[e._v("\n        "+e._s(e.addParamMsg.adLinkName)+"\n        "),t("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.adTypeChange("GOODS",!0)}}},[e._v("修改")])],1):e._e(),e._v(" "),"SECKILLGOODS"===e.addParamMsg.adType&&e.addParamMsg.adLinkName?t("div",[e._v("\n        "+e._s(e.addParamMsg.adLinkName)+"\n        "),t("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.adTypeChange("SECKILLGOODS",!0)}}},[e._v("修改")])],1):e._e(),e._v(" "),"BESTSELLERGOODS"===e.addParamMsg.adType&&e.addParamMsg.adLinkName?t("div",[e._v("\n        "+e._s(e.addParamMsg.adLinkName)+"\n        "),t("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return e.adTypeChange("BESTSELLERGOODS",!0)}}},[e._v("修改")])],1):e._e(),e._v(" "),"URL"===e.addParamMsg.adType?t("div",[t("span",{staticClass:"label-txt-wrap"},[e._v("输入路径: ")]),e._v(" "),t("el-input",{staticClass:"dialog-input",attrs:{size:"small",placeholder:"请输入指定URL"},model:{value:e.addParamMsg.adLinkUrl,callback:function(a){e.$set(e.addParamMsg,"adLinkUrl","string"==typeof a?a.trim():a)},expression:"addParamMsg.adLinkUrl"}})],1):e._e(),e._v(" "),"APPLET"===e.addParamMsg.adType?t("div",[t("div",[t("span",{staticClass:"label-txt-wrap"},[e._v("选择程序: ")]),e._v(" "),t("el-select",{staticClass:"dialog-input",attrs:{filterable:"",placeholder:"选择程序",size:"small"},model:{value:e.addParamMsg.adLinkId,callback:function(a){e.$set(e.addParamMsg,"adLinkId",a)},expression:"addParamMsg.adLinkId"}},e._l(e.appIdOptions,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),t("div",[t("span",{staticClass:"label-txt-wrap"},[e._v("输入路径: ")]),e._v(" "),t("el-input",{staticClass:"dialog-input",attrs:{size:"small",placeholder:"请输入指定小程序路径"},model:{value:e.addParamMsg.adLinkUrl,callback:function(a){e.$set(e.addParamMsg,"adLinkUrl","string"==typeof a?a.trim():a)},expression:"addParamMsg.adLinkUrl"}})],1)]):e._e()],1),e._v(" "),t("el-form-item",{attrs:{label:"应用门店",required:""}},[t("el-button",{attrs:{size:"small",icon:"el-icon-plus"},on:{click:e.chooseStoreOpen}},[e._v("选择门店")]),e._v(" "),e.storeCheckedList.length>0?t("div",{staticClass:"choose-store-table-wrap"},[t("el-table",{staticClass:"fixed-height",attrs:{data:e.storeCheckedList,"empty-text":"暂无选中任何门店","max-height":"300",size:"small"}},[t("el-table-column",{attrs:{"min-width":"170px",label:"门店编码/名称"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",[e._v("\n                "+e._s(a.row.storeNo)+"_"+e._s(a.row.storeName)+"\n              ")])]}}],null,!1,3410891365)}),e._v(" "),t("el-table-column",{attrs:{"min-width":"100",prop:"cityName",label:"城市"}}),e._v(" "),t("el-table-column",{attrs:{"min-width":"100",prop:"saleTypeStr",label:"门店类型"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-delete"},on:{click:function(t){return e.deleteStoreItem(a.row)}}},[e._v("删除")])]}}],null,!1,3121094832)})],1)],1):e._e()],1),e._v(" "),t("hr",{staticClass:"s-slip-tb"}),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary",size:"small",disabled:e.isDisabled,icon:e.isDisabled?"el-icon-loading":null},on:{click:function(a){return e.doSaveHandel("ruleForm")}}},[e._v("保存")]),e._v(" "),t("el-button",{attrs:{size:"small"},on:{click:e.doCancelHandel}},[e._v("取消")])],1)],1),e._v(" "),t("choose-store",{ref:"chooseStore",on:{confirmChooseStore:e.confirmChooseStore}}),e._v(" "),t("topic",{ref:"topic",on:{selectTopicChange:e.selectTopicChange}}),e._v(" "),t("categoty",{ref:"category",on:{selectCategotyChange:e.selectTopicChange}}),e._v(" "),t("choose-goods",{ref:"chooseGoods",on:{confirmChooseGoods:e.confirmChooseGoods}})],1)},staticRenderFns:[]};var M=t("VU/8")(k,P,!1,function(e){t("HGi4")},null,null);a.default=M.exports},hHUn:function(e,a,t){"use strict";var i=t("BO1k"),s=t.n(i),r="/plateform/a/category/getCategorys",o={data:function(){return{categoryId:"",categoryList:[],visible:!1}},created:function(){this.getCategoryList()},methods:{setDefaultMsg:function(e){this.visible=e.visible||!1,this.categoryId=e.categoryId||""},doConfirmHandel:function(){var e=this,a=this.categoryList.filter(function(a){return a.categoryId===e.categoryId})[0],t={};a&&(t.adLinkName=a.categoryName,t.adLinkId=a.categoryId,t.adLinkUrl="/pages/category/category?categoryId="+a.categoryId),this.visible=!1,this.$emit("selectCategotyChange",t)},getCategoryList:function(){var e=this;this.$http.post(r,{DIFFCITY:!0}).then(function(a){if(0!==a.code)throw new Error(a.msg);if(a.data&&a.data.length){var t=!0,i=!1,r=void 0;try{for(var o,d=s()(a.data);!(t=(o=d.next()).done);t=!0){var n=o.value;n.categoryVoList&&0===n.categoryVoList.length&&(n.categoryVoList=null)}}catch(e){i=!0,r=e}finally{try{!t&&d.return&&d.return()}finally{if(i)throw r}}e.categoryList=a.data}else e.categoryList=[]}).catch(function(e){console.log("提示(选择专题):",e.message)})}}},d={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{"close-on-press-escape":!1,"close-on-click-modal":!1,title:"选择分类",visible:e.visible,width:"460px"},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"form",attrs:{"label-width":"60px"}},[t("el-form-item",{attrs:{label:"分类",required:""}},[t("el-select",{staticClass:"search-input",attrs:{filterable:"",placeholder:"请选择分类",clearable:"",size:"small"},model:{value:e.categoryId,callback:function(a){e.categoryId=a},expression:"categoryId"}},e._l(e.categoryList,function(e){return t("el-option",{key:e.categoryId,attrs:{label:e.categoryName,value:e.categoryId}})}),1)],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini"},on:{click:function(a){e.visible=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.doConfirmHandel}},[e._v("确 定")])],1)],1)},staticRenderFns:[]},n=t("VU/8")(o,d,!1,null,null,null);a.a=n.exports}});
//# sourceMappingURL=12.40d236ce916ca65bd208.js.map