webpackJsonp([51],{"7m5z":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),o=a.n(i),r=a("Gu7T"),s=a.n(r),n=a("Dd8w"),l=a.n(n),c=a("BO1k"),u=a.n(c),d=a("oAV5"),p="/plateform/a/category/getCategoryTree",h="/plateform/a/pricing/ratelist",f="/plateform/a/pricing/updaterate",m="/plateform/a/pricing/batchupdaterate",g={data:function(){return{isDisabled:!1,loading:!1,pageNum:1,pageSize:10,total:0,tableData:[],categoriesList:[],checkStatusList:[{value:0,label:"全部"},{value:1,label:"待审核"},{value:2,label:"已审核"}],searchContent:{productName:"",erpNumber:"",platformId:4,categoryIdList:[],categoryId:""},cateDefaultProps:{children:"categoryVoList",label:"categoryName",value:"categoryId"},categoryList:[],checkedList:[],rateDialogVisible:!1,rateData:[{platformName:"饿百",platformId:4,profitRate:"",discountRate:""}]}},created:function(){this.getCategoriesList(),this.doSearchHandel(!0)},methods:{getCategoriesList:function(){var t=this;this.$http.post(p).then(function(e){if(0!==e.code)throw new Error(e.msg);if(e.data&&e.data.length){var a=!0,i=!1,o=void 0;try{for(var r,s=u()(e.data);!(a=(r=s.next()).done);a=!0){var n=r.value;n.categoryVoList&&0===n.categoryVoList.length&&(n.categoryVoList=null)}}catch(t){i=!0,o=t}finally{try{!a&&s.return&&s.return()}finally{if(i)throw o}}t.categoryList=e.data}else t.categoryList=[]}).catch(function(t){console.log("提示(三方平台店内分类):",t.message)})},changeSize:function(t){this.pageSize=t,this.doSearchHandel()},changeCurrent:function(t){this.pageNum=t,this.doSearchHandel(t)},doSearchHandel:function(t){var e=this,a=this.searchContent.categoryIdList.length-1;this.searchContent.categoryId=this.searchContent.categoryIdList[a],this.loading=!0,!0===t&&(this.pageNum=1),this.$http.post(h,l()({},this.searchContent,{pageNum:this.pageNum,pageSize:this.pageSize})).then(function(t){if(e.loading=!1,0!==t.code)throw new Error(t.msg);if(t.data&&t.data.result&&t.data.result.length){e.checkedList=[];var a=t.data.result,i=!0,o=!1,r=void 0;try{for(var s,n=u()(a);!(i=(s=n.next()).done);i=!0){var l=s.value;l.uniqueId=""+l.cityId+l.erpNumber+l.cityPlatformGoodsId,l.updateProfitRate=l.profitRate,l.showProfitRate=!1,l.updateDiscountRate=l.discountRate,l.showDiscountRate=!1}}catch(t){o=!0,r=t}finally{try{!i&&n.return&&n.return()}finally{if(o)throw r}}e.tableData=a}else e.tableData=[];1===e.pageNum&&(e.total=t.data.total)}).catch(function(t){e.loading=!1,e.$notify.error({title:"提示",message:t.message})})},handleSelect:function(t,e){var a={},i=[];if(d.l(e.uniqueId,this.checkedList))this.checkedList=d.q("uniqueId",e.uniqueId,this.checkedList);else{i.push(e);var o=[].concat(i,s()(this.checkedList));this.checkedList=o.reduceRight(function(t,e){return!a[e.uniqueId]&&(a[e.uniqueId]=t.push(e)),t},[])}},handleSelectAll:function(t){var e={};if(t.length>0){var a=!0,i=!1,o=void 0;try{for(var r,s=u()(t);!(a=(r=s.next()).done);a=!0){var n=r.value;this.checkedList.push(n)}}catch(t){i=!0,o=t}finally{try{!a&&s.return&&s.return()}finally{if(i)throw o}}this.checkedList=this.checkedList.reduceRight(function(t,a){return!e[a.uniqueId]&&(e[a.uniqueId]=t.push(a)),t},[])}else{var l=[],c=!0,p=!1,h=void 0;try{for(var f,m=u()(this.tableData);!(c=(f=m.next()).done);c=!0){var g=f.value;l.push(g)}}catch(t){p=!0,h=t}finally{try{!c&&m.return&&m.return()}finally{if(p)throw h}}var v=d.i(this.checkedList,l,"uniqueId");this.checkedList=v&&v.length>0?v:[]}},modifyProfitRate:function(t,e){1!=e.showProfitRate&&(this.tableData[t].showProfitRate=!0)},sureProfitRate:function(t){var e=this;if(null!=t.updateProfitRate&&""!=t.updateProfitRate)if(1!=isNaN(t.updateProfitRate))if(t.updateProfitRate<.01||t.updateProfitRate>1)this.$message("毛利率应大于等于0.01，小于等于1");else{this.loading=!0;var a={platformId:this.searchContent.platformId,platformRateParams:[{cityPlatformGoodsId:t.cityPlatformGoodsId||"",discountRate:t.discountRate||"",profitRate:t.updateProfitRate||""}]};this.$http.post(f,a).then(function(t){if(e.loading=!1,0===t.code)return e.$message({message:"配置毛利率成功",type:"success"}),void e.doSearchHandel();throw new Error(t.msg)}).catch(function(t){e.loading=!1,e.$notify.error({title:"提示",message:t.message})})}else this.$message("请输入正确的毛利率");else this.$message("毛利率不能为空")},deleteProfitRate:function(t,e){var a=this;setTimeout(function(){a.tableData[t].updateProfitRate=a.tableData[t].profitRate,a.tableData[t].showProfitRate=!1},500)},modifyDiscountRate:function(t,e){1!=e.showDiscountRate&&(this.tableData[t].showDiscountRate=!0)},sureDiscountRate:function(t){var e=this;if(null!=t.updateDiscountRate&&""!=t.updateDiscountRate)if(1!=isNaN(t.updateDiscountRate))if(t.updateDiscountRate<.01||t.updateDiscountRate>1)this.$message("折扣率应大于等于0.01，小于等于1");else{this.loading=!0;var a={platformId:this.searchContent.platformId,platformRateParams:[{cityPlatformGoodsId:t.cityPlatformGoodsId||"",discountRate:t.updateDiscountRate||"",profitRate:t.profitRate||""}]};this.$http.post(f,a).then(function(t){if(e.loading=!1,0===t.code)return e.$message({message:"配置折扣率成功",type:"success"}),void e.doSearchHandel();throw new Error(t.msg)}).catch(function(t){e.loading=!1,e.$notify.error({title:"提示",message:t.message})})}else this.$message("请输入正确的折扣率");else this.$message("折扣率不能为空")},deleteDiscountRate:function(t,e){var a=this;setTimeout(function(){a.tableData[t].updateDiscountRate=a.tableData[t].discountRate,a.tableData[t].showDiscountRate=!1},500)},modifyMore:function(){this.rateData.forEach(function(t,e){t.profitRate="",t.discountRate=""});var t=o()(this.rateData);this.rateData=JSON.parse(t),this.rateDialogVisible=!0},sureRate:function(){var t=this,e=!1,a=!0,i=!1,o=void 0;try{for(var r,s=u()(this.rateData);!(a=(r=s.next()).done);a=!0){var n=r.value;if(1==isNaN(n.profitRate)||1==isNaN(n.discountRate)){this.$message("请输入正确的毛利率或折扣率"),e=!0;break}if(""!=n.profitRate&&(n.profitRate<.01||n.profitRate>1)||""!=n.discountRate&&(n.discountRate<.01||n.discountRate>1)){this.$message("毛利率或折扣率应大于等于0.01，小于等于1"),e=!0;break}}}catch(t){i=!0,o=t}finally{try{!a&&s.return&&s.return()}finally{if(i)throw o}}if(!e)if(0!==this.checkedList.length){this.rateDialogVisible=!1;var l=[],c=!0,d=!1,p=void 0;try{for(var h,f=u()(this.rateData);!(c=(h=f.next()).done);c=!0){var g=h.value,v=!0,b=!1,y=void 0;try{for(var R,w=u()(this.checkedList);!(v=(R=w.next()).done);v=!0){var D={cityPlatformGoodsId:R.value.cityPlatformGoodsId,discountRate:g.discountRate,profitRate:g.profitRate};l.push(D)}}catch(t){b=!0,y=t}finally{try{!v&&w.return&&w.return()}finally{if(b)throw y}}}}catch(t){d=!0,p=t}finally{try{!c&&f.return&&f.return()}finally{if(d)throw p}}var k={platformId:this.searchContent.platformId,platformRateParams:l};this.isDisabled=!0,this.$http.post(m,k).then(function(e){if(t.loading=!1,setTimeout(function(){t.isDisabled=!1},800),0===e.code)return t.$message({message:"保存配置成功",type:"success"}),void t.doSearchHandel();throw new Error(e.msg)}).catch(function(e){t.loading=!1,t.isDisabled=!1,t.$notify.error({title:"提示",message:e.message})})}else this.$message("请选择商品")}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"handel-search-wraper"},[a("div",{staticClass:"search-form-wraper"},[a("el-form",{attrs:{model:t.searchContent,"label-position":"top"}},[a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{staticClass:"search-input",attrs:{placeholder:"请输入已发布商品名称",size:"small",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doSearchHandel(!0)}},model:{value:t.searchContent.productName,callback:function(e){t.$set(t.searchContent,"productName","string"==typeof e?e.trim():e)},expression:"searchContent.productName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"ERP编码"}},[a("el-input",{staticClass:"search-input",attrs:{placeholder:"请输入ERP编码",size:"small",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doSearchHandel(!0)}},model:{value:t.searchContent.erpNumber,callback:function(e){t.$set(t.searchContent,"erpNumber","string"==typeof e?e.trim():e)},expression:"searchContent.erpNumber"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"所属分类"}},[a("el-cascader",{staticClass:"search-input",attrs:{placeholder:"请选择分类",options:t.categoryList,"change-on-select":"",size:"small",clearable:"",filterable:"",props:t.cateDefaultProps},on:{change:function(e){return t.doSearchHandel(!0)}},model:{value:t.searchContent.categoryIdList,callback:function(e){t.$set(t.searchContent,"categoryIdList",e)},expression:"searchContent.categoryIdList"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.doSearchHandel(!0)}}},[t._v("搜索")])],1)],1)],1)]),t._v(" "),a("div",{staticClass:"table-wraper"},[a("div",{staticClass:"sp-handel-w"},[a("el-button",{staticClass:"sup-mini",attrs:{icon:"el-icon-setting",size:"mini",disabled:0==this.checkedList.length},on:{click:t.modifyMore}},[t._v("批量配置")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"fixed-height",staticStyle:{width:"100%"},attrs:{data:t.tableData,"empty-text":"没有查询到您想要的数据",size:"small"},on:{select:t.handleSelect,"select-all":t.handleSelectAll}},[a("el-table-column",{attrs:{type:"selection",label:"全选",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"80",prop:"goodsNo",label:"SKU编码"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"80",prop:"erpNumber",label:"ERP编码"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"180",prop:"productName",label:"商品名称"}}),t._v(" "),a("el-table-column",{attrs:{width:"160",prop:"parentProductInfo",label:"母商品信息"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"80",prop:"cityName",label:"售卖区域"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"90",prop:"platformName",label:"售卖平台"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"90",prop:"productCost",label:"进货成本"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.productCost?a("div",[t._v("\n            "+t._s(e.row.productCost)+"\n          ")]):a("div",{staticStyle:{"font-size":"11px",color:"orange"}},[t._v("\n            尚未获取到成本\n          ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"160",prop:"getDate",label:"获取成本时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"平台毛利率","min-width":"160px"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.showProfitRate?a("div",{staticClass:"adjust-price"},[a("el-button-group",[a("el-input",{staticStyle:{width:"80px"},attrs:{size:"mini"},on:{focus:function(a){return t.modifyProfitRate(e.$index,e.row)}},model:{value:e.row.profitRate,callback:function(a){t.$set(e.row,"profitRate",a)},expression:"scope.row.profitRate"}})],1)],1):1==e.row.showProfitRate?a("div",{staticClass:"adjust-price"},[a("el-button-group",[a("el-input",{staticStyle:{width:"80px"},attrs:{size:"mini"},on:{blur:function(a){return t.deleteProfitRate(e.$index,!0)}},model:{value:e.row.updateProfitRate,callback:function(a){t.$set(e.row,"updateProfitRate",a)},expression:"scope.row.updateProfitRate"}})],1),t._v(" "),a("el-button-group",[a("el-button",{staticStyle:{width:"25px"},attrs:{icon:"el-icon-check",size:"mini"},on:{click:function(a){return t.sureProfitRate(e.row)}}}),t._v(" "),a("el-button",{staticStyle:{width:"25px"},attrs:{icon:"el-icon-close",size:"mini"},on:{click:function(a){return t.deleteProfitRate(e.$index)}}})],1)],1):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"平台折扣率","min-width":"160px"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.showDiscountRate?a("div",{staticClass:"adjust-price"},[a("el-button-group",[a("el-input",{staticStyle:{width:"80px"},attrs:{size:"mini"},on:{focus:function(a){return t.modifyDiscountRate(e.$index,e.row)}},model:{value:e.row.discountRate,callback:function(a){t.$set(e.row,"discountRate",a)},expression:"scope.row.discountRate"}})],1)],1):1==e.row.showDiscountRate?a("div",{staticClass:"adjust-price"},[a("el-button-group",[a("el-input",{staticStyle:{width:"80px"},attrs:{size:"mini"},on:{blur:function(a){return t.deleteDiscountRate(e.$index,!0)}},model:{value:e.row.updateDiscountRate,callback:function(a){t.$set(e.row,"updateDiscountRate",a)},expression:"scope.row.updateDiscountRate"}})],1),t._v(" "),a("el-button-group",[a("el-button",{staticStyle:{width:"25px"},attrs:{icon:"el-icon-check",size:"mini"},on:{click:function(a){return t.sureDiscountRate(e.row)}}}),t._v(" "),a("el-button",{staticStyle:{width:"25px"},attrs:{icon:"el-icon-close",size:"mini"},on:{click:function(a){return t.deleteDiscountRate(e.$index)}}})],1)],1):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"160",prop:"updateTime",label:"修改时间"}})],1),t._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.tableData.length>0,expression:"tableData.length>0"}],staticClass:"tc mt20",attrs:{background:"","current-page":t.pageNum,"page-sizes":[10,50,100,150,200],layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.changeSize,"current-change":t.changeCurrent,"update:currentPage":function(e){t.pageNum=e},"update:current-page":function(e){t.pageNum=e}}})],1),t._v(" "),a("el-dialog",{attrs:{title:"批量配置",visible:t.rateDialogVisible,width:"400px"},on:{"update:visible":function(e){t.rateDialogVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.rateData,size:"small"}},[a("el-table-column",{attrs:{"min-width":"100",prop:"platformName",label:""}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"120",prop:"profitRate",label:"毛利率"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{size:"mini"},model:{value:e.row.profitRate,callback:function(a){t.$set(e.row,"profitRate",a)},expression:"scope.row.profitRate"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"120",prop:"discountRate",label:"折扣率"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{size:"mini"},model:{value:e.row.discountRate,callback:function(a){t.$set(e.row,"discountRate",a)},expression:"scope.row.discountRate"}})]}}])})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.rateDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",disabled:t.isDisabled},on:{click:t.sureRate}},[t._v("保 存")])],1)],1)],1)},staticRenderFns:[]};var b=a("VU/8")(g,v,!1,function(t){a("wq9/")},null,null);e.default=b.exports},"wq9/":function(t,e){}});
//# sourceMappingURL=51.88cb76f30ee460e473bc.js.map