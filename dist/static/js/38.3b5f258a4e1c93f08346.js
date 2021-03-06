webpackJsonp([38],{sXs0:function(e,t){},suVB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Dd8w"),i=a.n(n),r=a("Gu7T"),o=a.n(r),s=a("ssT3"),l=a("bzuE"),d=a("ylbZ"),c=a("oAV5"),m=(a("8uth"),a("XfvZ")),g=a("GWBc"),u=a("mvHQ"),h=a.n(u),p=a("RaLY"),f=/^1[3|4|5|6|7|8|9][0-9]{9}$/,v={data:function(){return{visible:!1,disabled:!1,loading:!1,addParamMsg:{DIFFCITY:!0,regionCode:"",regionName:"",id:"",merchantName:"",merchantAddress:"",merchantPhone:"",qualificationImageUrl:""},rules:{merchantName:[{required:!0,validator:function(e,t,a){if(!t)return a(new Error("商户名称不能为空"));a()},trigger:"blur"}],merchantAddress:[{required:!0,validator:function(e,t,a){if(!t)return a(new Error("商户地址不能为空"));a()},trigger:"blur"}],merchantPhone:[{required:!0,validator:function(e,t,a){return t?f.test(t)?void a():a(new Error("联系电话格式不正确")):a(new Error("联系电话不能为空"))},trigger:"blur"}]},imageList:[{imgUrl:"",index:0}]}},components:{region:d.a,"image-upload":p.a},methods:{initHandel:function(){var e=this;this.visible=!0,this.addParamMsg.regionCode=s.a.get("regionCode"),this.$nextTick(function(){e.$refs.ruleForm.resetFields(),e.$refs.region.getUserAreaList()}),this.getDetail()},getDetail:function(){var e=this;this.loading=!0,this.$http.post(g.a.getRegionMerchant,{DIFFCITY:!0,regionCode:this.addParamMsg.regionCode}).then(function(t){if(e.loading=!1,0!==t.code)throw new Error(t.msg);if(t.data&&"{}"!==h()(t.data)?(e.addParamMsg.id=t.data.id,e.addParamMsg.regionCode=t.data.regionCode,e.addParamMsg.regionName=t.data.regionName,e.addParamMsg.merchantName=t.data.merchantName,e.addParamMsg.merchantAddress=t.data.merchantAddress,e.addParamMsg.merchantPhone=t.data.merchantPhone,e.addParamMsg.qualificationImageUrl=t.data.qualificationImageUrl):(e.addParamMsg.id="",e.addParamMsg.regionCode=s.a.get("regionCode"),e.addParamMsg.regionName="",e.addParamMsg.merchantName="",e.addParamMsg.merchantAddress="",e.addParamMsg.merchantPhone="",e.addParamMsg.qualificationImageUrl=""),e.addParamMsg.qualificationImageUrl){var a=JSON.parse(e.addParamMsg.qualificationImageUrl).map(function(e,t){return{imgUrl:e,index:t}});e.imageList=a}else e.imageList=[{imgUrl:"",index:0}];e.initImageUpload()}).catch(function(t){e.loading=!1,e.$notify.error({title:"提示",message:t.message})})},initImageUpload:function(){var e=this;this.$nextTick(function(){var t={imageList:e.imageList};e.$refs.imageUpload.initHandel(t)})},setImageList:function(e){var t=e.imageList&&e.imageList.length?e.imageList.map(function(e){return e.imgUrl}):"";this.addParamMsg.qualificationImageUrl=h()(t)},doConfirmHandel:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.addParamMsg.regionCode?0!==JSON.parse(t.addParamMsg.qualificationImageUrl).length?(t.disabled=!0,t.$http.post(g.a.saveRegionMerchant,i()({},t.addParamMsg)).then(function(e){if(t.disabled=!1,0===e.code)return t.visible=!1,void t.$message.success("设置商户信息成功");throw new Error(e.msg)}).catch(function(e){t.disabled=!1,t.$notify.error({title:"提示",message:e.message})})):t.$message("请上传商户资质"):t.$message("区域编码不能为空")})}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{"close-on-press-escape":!1,"close-on-click-modal":!1,title:"设置商户信息",visible:e.visible,width:"700px"},on:{"update:visible":function(t){e.visible=t}}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"add-form-wrap"},[a("el-form",{ref:"ruleForm",attrs:{model:e.addParamMsg,rules:e.rules,"label-width":"100px"}},[a("region",{ref:"region",staticClass:"region-wrap",attrs:{className:"add-input",required:!0,refresh:!1,disabled:!0}}),e._v(" "),a("el-form-item",{attrs:{label:"商户名称",prop:"merchantName"}},[a("el-input",{staticClass:"add-input",attrs:{size:"small",placeholder:"商户名称"},model:{value:e.addParamMsg.merchantName,callback:function(t){e.$set(e.addParamMsg,"merchantName",t)},expression:"addParamMsg.merchantName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商户地址",prop:"merchantAddress"}},[a("el-input",{staticClass:"add-input",attrs:{type:"textarea",rows:2,size:"small",placeholder:"商户地址"},model:{value:e.addParamMsg.merchantAddress,callback:function(t){e.$set(e.addParamMsg,"merchantAddress",t)},expression:"addParamMsg.merchantAddress"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话",prop:"merchantPhone"}},[a("el-input",{staticClass:"add-input",attrs:{size:"small",placeholder:"联系电话"},model:{value:e.addParamMsg.merchantPhone,callback:function(t){e.$set(e.addParamMsg,"merchantPhone",t)},expression:"addParamMsg.merchantPhone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商户资质",required:""}},[a("image-upload",{ref:"imageUpload",attrs:{imgSize:1024},on:{setImageList:e.setImageList}}),e._v(" "),a("span",[e._v("建议上传宽度为750像素的JPG或PNG图片，大小不能超过1M")])],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",disabled:e.disabled,icon:e.disabled?"el-icon-loading":null},on:{click:function(t){return e.doConfirmHandel("ruleForm")}}},[e._v("保存")])],1)])],1)},staticRenderFns:[]};var C=a("VU/8")(v,b,!1,function(e){a("zk5r")},null,null).exports,w=a("3rb3"),k={data:function(){return{visible:!1,loading:!1,scanCodeUrl:"",regionCode:""}},methods:{initHandel:function(e){this.visible=!0,this.regionCode=e.regionCode||"",this.createScanCode()},createScanCode:function(){var e=this;this.loading=!0,this.$http.post(w.a.generateQRCode,{posterUrl:"pages/quality/index?regionCode="+this.regionCode,width:800}).then(function(t){if(e.loading=!1,0!==t.code)throw new Error(t.msg);e.scanCodeUrl=t.data?t.data:""}).catch(function(t){e.loading=!1,e.$notify.error({title:"提示",message:t.message})})},downloadImage:function(e,t){var a=this,n=new Image;n.src=e,n.setAttribute("crossOrigin","anonymous"),n.onload=function(){var e=document.createElement("canvas");e.width=n.width,e.height=n.height,e.getContext("2d").drawImage(n,0,0,n.width,n.height);var a=e.toDataURL("image/png"),i=document.createElement("a"),r=new MouseEvent("click");i.download=Date.parse(new Date)+"_"+(t||"photo"),i.href=a,i.dispatchEvent(r)},setTimeout(function(){a.$message.success("图片保存到电脑成功"),a.visible=!1},400)}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{"close-on-press-escape":!1,"close-on-click-modal":!1,title:"设置商户信息",visible:e.visible,width:"450px"},on:{"update:visible":function(t){e.visible=t}}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"pic-wrap"},[a("img",{attrs:{width:"300",src:e.scanCodeUrl,alt:"二维码"}})]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.visible=!1}}},[e._v("关闭")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",disabled:!e.scanCodeUrl},on:{click:function(t){return e.downloadImage(e.scanCodeUrl)}}},[e._v("保存到电脑")])],1)])],1)},staticRenderFns:[]};var M=a("VU/8")(k,_,!1,function(e){a("sXs0")},null,null).exports,P={data:function(){return{loading:!1,pageNum:1,pageSize:20,pageSizes:l.a.pageSizes20,total:0,searchContent:{DIFFCITY:!0,regionCode:s.a.get("regionCode")||"",defaultRange:[],checkStartTime:"",checkEndTime:"",checkMode:"",goodsCategory:""},checkModeOptions:[{label:"全部",value:""},{label:"农残检测",value:1},{label:"其他检测",value:0}],goodsCategoryOptions:[{label:"全部",value:""},{label:"蔬菜",value:1},{label:"水果",value:2},{label:"水产",value:3},{label:"肉类",value:4}],tableData:[]}},components:{Region:d.a,"date-picker-range":m.a,"set-dialog":C,scancode:M},created:function(){var e=s.a.get("searchContent");this.$route.meta.keepAlive&&e&&(this.pageNum=e.pageNum,this.searchContent=e.searchContent),s.a.remove("searchContent"),this.doSearchHandel()},methods:{RegionChange:function(e){this.searchContent.regionCode=e.regionCode,this.doSearchHandel()},datePickerRangeChange:function(e){this.searchContent.defaultRange=e?[].concat(o()(e)):e,this.searchContent.checkStartTime=e?e[0]:"",this.searchContent.checkEndTime=e?e[1]:"",this.doSearchHandel(!0)},addHandel:function(){this.$router.push("/qe/add")},changeSize:function(e){this.pageSize=e,this.doSearchHandel()},changeCurrent:function(e){this.pageNum=e,this.doSearchHandel()},doSearchHandel:function(e){var t=this;this.loading=!0,!0===e&&(this.pageNum=1),this.$http.post(g.a.selectQualityCheckReportList,i()({},this.searchContent,{pageNum:this.pageNum,pageSize:this.pageSize})).then(function(e){if(t.loading=!1,0===e.code)return t.tableData=e.data&&e.data.list&&e.data.list.length?e.data.list:[],void(t.total=e.data.total);throw new Error(e.msg)}).catch(function(e){t.loading=!1,t.$notify.error({title:"提示",message:e.message})})},goodsCategoryFormatter:function(e,t,a,n){var i=this.goodsCategoryOptions.filter(function(e){return e.value==a})[0];return i?i.label:"-"},checkModeFormatter:function(e,t,a,n){var i=this.checkModeOptions.filter(function(e){return e.value==a})[0];return i?i.label:"-"},timeFormatter:function(e,t,a,n){return"number"==typeof a?c.f("yyyy-MM-dd HH:mm:ss",a):a},editItem:function(e){var t={searchContent:this.searchContent,pageNum:this.pageNum};s.a.set("searchContent",t),this.$router.push("/qe/edit/"+e.id)},deleteItem:function(e){var t=this;this.$confirm("您确定要执行删除操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.get(g.a.deleteQualityCheckReport,{id:e.id}).then(function(e){if(0===e.code)return t.$message.success("删除成功"),void t.doSearchHandel();throw new Error(e.msg)}).catch(function(e){t.$notify.error({title:"提示",message:e.message})})}).catch(function(){})},settingDialog:function(){var e=this;this.$nextTick(function(){e.$refs.setDialog.initHandel()})},downLoadHandel:function(){var e=this;this.$nextTick(function(){e.$refs.downloadScancodeDialog.initHandel({regionCode:e.searchContent.regionCode})})}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"handel-search-wraper"},[a("div",{staticClass:"handel-wraper"},[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},on:{click:e.addHandel}},[e._v("添加检测报告")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-setting"},on:{click:e.settingDialog}},[e._v("设置")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-download"},on:{click:e.downLoadHandel}},[e._v("下载二维码")])],1),e._v(" "),a("hr",{staticClass:"s-slip"}),e._v(" "),a("div",{staticClass:"search-form-wraper"},[a("el-form",{attrs:{model:e.searchContent,"label-position":"top"}},[a("region",{staticClass:"region-wrap",attrs:{refresh:!1},on:{RegionChange:e.RegionChange}}),e._v(" "),a("el-form-item",{attrs:{label:"检测时间"}},[a("date-picker-range",{attrs:{defaultRange:e.searchContent.defaultRange,clearable:!1,editable:!1},on:{datePickerRangeChange:e.datePickerRangeChange}})],1),e._v(" "),a("el-form-item",{attrs:{label:"检测方式"}},[a("el-select",{staticClass:"search-input",attrs:{filterable:"",placeholder:"状态",clearable:"",size:"small"},on:{change:function(t){return e.doSearchHandel(!0)}},model:{value:e.searchContent.checkMode,callback:function(t){e.$set(e.searchContent,"checkMode",t)},expression:"searchContent.checkMode"}},e._l(e.checkModeOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"品类"}},[a("el-select",{staticClass:"search-input",attrs:{filterable:"",placeholder:"状态",clearable:"",size:"small"},on:{change:function(t){return e.doSearchHandel(!0)}},model:{value:e.searchContent.goodsCategory,callback:function(t){e.$set(e.searchContent,"goodsCategory",t)},expression:"searchContent.goodsCategory"}},e._l(e.goodsCategoryOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.doSearchHandel(!0)}}},[e._v("搜索")])],1)],1)],1)]),e._v(" "),a("div",{staticClass:"table-wraper"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"fixed-height",staticStyle:{width:"100%"},attrs:{data:e.tableData,"empty-text":"没有查询到您想要的数据",size:"small"}},[a("el-table-column",{attrs:{"min-width":"60px",prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{"min-width":"210px",prop:"uploadTime",label:"上传时间",formatter:e.timeFormatter}}),e._v(" "),a("el-table-column",{attrs:{"min-width":"100px",prop:"regionName",label:"区域"}}),e._v(" "),a("el-table-column",{attrs:{"min-width":"90px",prop:"goodsCategory",label:"品类",formatter:e.goodsCategoryFormatter}}),e._v(" "),a("el-table-column",{attrs:{"min-width":"90px",prop:"checkMode",label:"检测方式",formatter:e.checkModeFormatter}}),e._v(" "),a("el-table-column",{attrs:{"min-width":"210px",prop:"checkTime",label:"检测时间",formatter:e.timeFormatter}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-edit"},on:{click:function(a){return e.editItem(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-delete"},on:{click:function(a){return e.deleteItem(t.row)}}},[e._v("删除")])],1)]}}])})],1),e._v(" "),e.total>0?a("el-pagination",{staticClass:"tc mt20",attrs:{background:"","current-page":e.pageNum,"page-sizes":e.pageSizes,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.changeSize,"current-change":e.changeCurrent,"update:currentPage":function(t){e.pageNum=t},"update:current-page":function(t){e.pageNum=t}}}):e._e()],1),e._v(" "),a("set-dialog",{ref:"setDialog"}),e._v(" "),a("scancode",{ref:"downloadScancodeDialog"})],1)},staticRenderFns:[]},x=a("VU/8")(P,y,!1,null,null,null);t.default=x.exports},zk5r:function(e,t){}});
//# sourceMappingURL=38.3b5f258a4e1c93f08346.js.map