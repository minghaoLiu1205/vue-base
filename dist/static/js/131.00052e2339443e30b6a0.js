webpackJsonp([131],{UrLW:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("lHA8"),i=s.n(a),r=s("c/Tr"),l=s.n(r),o=s("Gu7T"),n=s.n(o),c=s("BO1k"),h=s.n(c),d=s("Dd8w"),u=s.n(d),f=s("oAV5"),m="/plateform/a/product/getPlatformList",p="/plateform/a/store/condition/search",v="/plateform/a/product/syncdel",g={data:function(){return{loading:!1,formLabelWidth:"150px",publishParamMesg:{checkedPlatform:[]},platformList:[],searchContent:{searchValue:""},isDisabled:!1,storeOptions:[],checkedStores:[]}},created:function(){this.getPlatformList(),this.getStoreList()},methods:{getPlatformList:function(){var e=this;this.loading=!0,this.$http.get(m).then(function(t){if(e.loading=!1,0!==t.code)throw new Error(t.msg);t.data&&t.data.length?e.platformList=t.data:e.platformList=[]}).catch(function(t){e.loading=!1,console.log("提示(获取平台列表):",t.message)})},getStoreList:function(){var e=this;this.$http.post(p,u()({},this.searchContent)).then(function(t){if(0!==t.code)throw new Error(t.msg);if(t.data&&t.data.length){var s=[],a=!0,i=!1,r=void 0;try{for(var l,o=h()(t.data);!(a=(l=o.next()).done);a=!0){var n=l.value,c={cityId:n.cityId,storeNo:n.storeNo,storeName:n.storeNo+"-"+n.storeName};s.push(c)}}catch(e){i=!0,r=e}finally{try{!a&&o.return&&o.return()}finally{if(i)throw r}}e.storeOptions=s}else e.storeOptions=[];e.defauleSelectFun()}).catch(function(e){console.log("提示(获取门店列表):",e.message)})},handleSelect:function(e,t){if(f.j(this.checkedStores,t.storeNo)>-1)this.checkedStores=f.p(this.checkedStores,t.storeNo);else{var s=[];s.push(t.storeNo);var a=[].concat(s,n()(this.checkedStores));this.checkedStores=l()(new i.a(a))}},handleSelectAll:function(e){if(e.length>0){var t=!0,s=!1,a=void 0;try{for(var r,o=h()(e);!(t=(r=o.next()).done);t=!0){var c=r.value;this.checkedStores.push(c.storeNo)}}catch(e){s=!0,a=e}finally{try{!t&&o.return&&o.return()}finally{if(s)throw a}}this.checkedStores=l()(new i.a(this.checkedStores))}else{var d=[],u=!0,f=!1,m=void 0;try{for(var p,v=h()(this.storeOptions);!(u=(p=v.next()).done);u=!0){var g=p.value;d.push(g.storeNo)}}catch(e){f=!0,m=e}finally{try{!u&&v.return&&v.return()}finally{if(f)throw m}}this.checkedStores=l()(new i.a([].concat(n()(this.checkedStores)).filter(function(e){return!new i.a(d).has(e)})))}},defauleSelectFun:function(){var e=this,t=[],s=!0,a=!1,i=void 0;try{for(var r,l=h()(this.storeOptions);!(s=(r=l.next()).done);s=!0){var o=r.value,n=!0,c=!1,d=void 0;try{for(var u,f=h()(this.checkedStores);!(n=(u=f.next()).done);n=!0){var m=u.value;o.storeNo==m&&t.push(o)}}catch(e){c=!0,d=e}finally{try{!n&&f.return&&f.return()}finally{if(c)throw d}}}}catch(e){a=!0,i=e}finally{try{!s&&l.return&&l.return()}finally{if(a)throw i}}t.length>0?(this.$refs.multiple.clearSelection(),setTimeout(function(){t.forEach(function(t){e.$refs.multiple.toggleRowSelection(t)})},100)):this.$refs.multiple.clearSelection()},doDeleteHandel:function(){var e=this;if(0!==this.publishParamMesg.checkedPlatform.length)if(0!==this.checkedStores.length){if(!0!==this.isDisabled){var t={platformList:this.publishParamMesg.checkedPlatform,storeNoList:this.checkedStores};this.isDisabled=!0,this.$http.post(v,t).then(function(t){var s=e;if(setTimeout(function(){s.isDisabled=!1},800),0!==t.code)throw new Error(t.msg);e.$message.success("清理指定平台/城市/门店三方商品成功")}).catch(function(t){var s=e;setTimeout(function(){s.isDisabled=!1},800),e.$notify.error({title:"提示",message:t.message})})}}else this.$message("请选择指定删除城市/门店");else this.$message("请选择指定删除平台")}}},y={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sys-set-w"},[s("div",{staticClass:"handel-search-wraper"},[s("div",{staticClass:"handel-wraper"},[e._v("\n      清理指定平台/城市/门店三方商品\n    ")]),e._v(" "),s("hr",{staticClass:"s-slip"}),e._v(" "),s("div",{staticStyle:{padding:"10px"}},[s("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{model:e.publishParamMesg,"label-position":"right","label-width":e.formLabelWidth},nativeOn:{submit:function(e){e.preventDefault()}}},[s("el-form-item",{attrs:{label:"指定删除平台",required:""}},[s("el-checkbox-group",{model:{value:e.publishParamMesg.checkedPlatform,callback:function(t){e.$set(e.publishParamMesg,"checkedPlatform",t)},expression:"publishParamMesg.checkedPlatform"}},e._l(e.platformList,function(t){return s("el-checkbox",{key:t.platformId,attrs:{label:t.platformId}},[e._v(e._s(t.name))])}),1)],1),e._v(" "),s("el-form-item",{attrs:{label:"指定删除城市/门店",required:""}},[s("div",{staticClass:"pcs-mh-table-w"},[s("div",{staticClass:"pcs-mh-td-w"},[s("div",{staticClass:"td-t-w"},[s("span",[e._v("\n                  门店列表\n                ")]),e._v(" "),s("el-input",{staticClass:"search-input",staticStyle:{float:"right"},attrs:{placeholder:"ERP编号/门店名称","suffix-icon":"el-icon-search",clearable:"",size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getStoreList(t)}},model:{value:e.searchContent.searchValue,callback:function(t){e.$set(e.searchContent,"searchValue",t)},expression:"searchContent.searchValue"}})],1),e._v(" "),s("div",{staticClass:"mh-t-s-item-l-w"},[s("el-table",{ref:"multiple",attrs:{height:"300px",data:e.storeOptions,"empty-text":"没有查询到您想要的数据",size:"small"},on:{select:e.handleSelect,"select-all":e.handleSelectAll}},[s("el-table-column",{attrs:{type:"selection",width:"50"}}),e._v(" "),s("el-table-column",{attrs:{prop:"storeName",label:"门店名称",width:"320"}})],1)],1)])])])],1),e._v(" "),s("hr",{staticClass:"s-slip",staticStyle:{"margin-top":"20px"}}),e._v(" "),s("div",{staticStyle:{padding:"10px"}},[s("el-button",{staticStyle:{"margin-left":"140px"},attrs:{type:"primary",size:"mini",icon:"el-icon-delete",disabled:e.isDisabled},on:{click:e.doDeleteHandel}},[e._v("立即删除")])],1)],1)])])},staticRenderFns:[]};var b=s("VU/8")(g,y,!1,function(e){s("YmjH")},null,null);t.default=b.exports},YmjH:function(e,t){}});
//# sourceMappingURL=131.00052e2339443e30b6a0.js.map