webpackJsonp([39],{"/Arw":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Gu7T"),s=a.n(i),o=a("pFYg"),r=a.n(o),n=a("Dd8w"),c=a.n(n),l=a("BO1k"),d=a.n(l),u=a("oAV5"),m=a("8uth"),v=a("hR2Z"),f=a("VZ4h"),h=a("f6J0"),p=a("enjp"),y="/plateform/a/preSale/goods/checkPreGoodsInsert",g="/plateform/a/activityRule/edit",S="/plateform/a/activityRule/update",b="/plateform/a/activityRule/add",k=/^[1-9]*[1-9][0-9]*$/,C=/((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/,_={data:function(){return{optType:"",status:0,pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}},isDisabled:!1,addParamMesg:{DIFFCITY:!0,platformId:5,regionCode:"",regionName:"",activityType:"",activityTypeName:"",activityName:"",activityStartDate:"",activityEndDate:"",activityCode:"",activityStoreList:[],activityStoreGroupList:[],activityScenes:[]},activeName:"first",scene:1,activityScenes:[{scene:1,activeName:"first",label:"第一场",activityStartTime:"",activityEndTime:"",platCityGoodsInfos:[],checkedList:[],discount:""},{scene:2,activeName:"second",label:"第二场",activityStartTime:"",activityEndTime:"",platCityGoodsInfos:[],checkedList:[],discount:""},{scene:3,activeName:"third",label:"第三场",activityStartTime:"",activityEndTime:"",platCityGoodsInfos:[],checkedList:[],discount:""},{scene:4,activeName:"fourth",label:"第四场",activityStartTime:"",activityEndTime:"",platCityGoodsInfos:[],checkedList:[],discount:""}],activityStoreGroupList:[{performanceDate:"",activityStoresCheckedList:[]}],tempConfig:{platformCityGoodsId:"区域商品id(必填)",goodsNo:"SKU编码(选填)",skuNo:"ERP商品编码(选填)",activityGoodsName:"活动商品名称(可修改，必填)",preSalePrice:"活动价(必填)",platformCurStock:"活动库存（必填）",limitCount:"每人每期限购(选填，为空时不限)",sortNum:"排序(必填)",sfInStockStr:"顺丰仓现货（选填，填是/否，空时为是）"},showTipErrorMsg:!1,hasErrorMsgData:[],saveErrorMsgList:[],saveErrTempConfig:{skuNo:"ERP商品编码",goodsName:"商品名称",storeNo:"门店编码",storeName:"门店名称"}}},beforeRouteEnter:function(t,e,a){"edit"===t.params.type?t.meta.breadcrumbList=[{name:"营销活动",path:""},{name:"店铺活动",path:"/store_act"},{name:"编辑活动",path:""}]:"copy"===t.params.type&&(t.meta.breadcrumbList=[{name:"营销活动",path:""},{name:"店铺活动",path:"/store_act"},{name:"复制活动",path:""}]),a()},created:function(){this.addParamMesg.activityId=this.$route.params.activityId,this.optType=this.$route.params.type,this.status=this.$route.query.status?parseInt(this.$route.query.status):0,this.getDetail()},components:{"choose-store":v.a,"choose-goods":f.a,"join-goods-table":h.a,"excel-add":p.a},methods:{getDetail:function(){var t=this,e=this.addParamMesg.activityId||"";u.r(),this.$http.post(g,{activityId:e,DIFFCITY:!0}).then(function(e){if(u.c(),0!==e.code)throw new Error(e.msg);if(e.data){var a=e.data;if(t.addParamMesg.id=a.id,t.addParamMesg.activityId=a.id,t.addParamMesg.regionCode=a.regionCode||"",t.addParamMesg.regionName=a.regionName||"",t.addParamMesg.activityType=a.activityType||"",t.addParamMesg.activityTypeName=a.activityTypeName||"",t.addParamMesg.activityName=a.activityName||"",t.addParamMesg.activityStartDate=a.activityStartDate||"",t.addParamMesg.activityEndDate=a.activityEndDate||"",t.addParamMesg.performanceDate=a.performanceDate||"",t.addParamMesg.activityCode=a.activityCode||"",t.activityStoreGroupList=a.storeGroupVos&&a.storeGroupVos.length?a.storeGroupVos.map(function(t){return{performanceDate:t.performanceDatetime?t.performanceDatetime.substr(0,10):"",activityStoresCheckedList:t.storeVos}}):[{performanceDate:"",activityStoresCheckedList:[]}],a.activityScenes&&a.activityScenes.length){var i=a.activityScenes;t.activityScenes.forEach(function(e){i.forEach(function(a){e.scene===a.scene&&(e.activityStartTime=a.activityStartTime.slice(0,5),e.activityEndTime=a.activityEndTime.slice(0,5),a.platCityGoodsVos.forEach(function(e){e.disabled=3===t.status||2===t.status,e.sfInStock=e.sfInStock}),e.platCityGoodsInfos=a.platCityGoodsVos)})})}t.setJoinGoodsMesg(t.scene)}}).catch(function(e){u.c(),t.$notify.error({title:"提示",message:e.message})})},chooseStoreOpen:function(t){var e={title:"选择门店",platformId:this.addParamMesg.platformId,regionCode:this.addParamMesg.regionCode,groupIndex:t,checkedList:this.activityStoreGroupList[t].activityStoresCheckedList,otherCheckedList:this.getCheckedStores(t)};this.$refs.chooseStore.setDefault(e)},chooseGoodsOpen:function(t){if(t.activityEndTime&&3===this.status){var e=u.f("yyyy-MM-dd",Date.parse(new Date))+" "+t.activityEndTime+":00";if(u.a(e)<=Date.parse(new Date))return void this.$message.warning("今天该场次的秒杀活动已结束，不可再添加商品")}if(t.activityStartTime&&t.activityEndTime){var a={title:"选择商品",regionCode:this.addParamMesg.regionCode,checkedList:t.platCityGoodsInfos};this.$refs.chooseGoods.setDefault(a)}else this.$message.warning("请先选择本场次的开始时间和结束时间")},handleTabClick:function(t){"first"==t.name?this.scene=1:"second"==t.name?this.scene=2:"third"==t.name?this.scene=3:"fourth"==t.name&&(this.scene=4),this.activeName=t.name,this.setJoinGoodsMesg(this.scene)},setJoinGoodsMesg:function(t){var e=[],a=[],i=!0,s=!1,o=void 0;try{for(var r,n=d()(this.activityScenes);!(i=(r=n.next()).done);i=!0){var c=r.value;c.scene===t&&(e=c.platCityGoodsInfos,a=c.checkedList)}}catch(t){s=!0,o=t}finally{try{!i&&n.return&&n.return()}finally{if(s)throw o}}var l={scene:t,checkedList:a,tableData:e};this.$refs.joinGoodsTable.setDefaultMesg(l)},confirmChooseStore:function(t){var e=t.checkedList||[],a=t.groupIndex||0;this.activityStoreGroupList[a].activityStoresCheckedList=e},confirmChooseGoods:function(t){var e=[];e=t.checkedList&&t.checkedList.length?t.checkedList:[];var a=!0,i=!1,s=void 0;try{for(var o,r=d()(this.activityScenes);!(a=(o=r.next()).done);a=!0){var n=o.value;n.scene===this.scene&&(n.platCityGoodsInfos=e)}}catch(t){i=!0,s=t}finally{try{!a&&r.return&&r.return()}finally{if(i)throw s}}this.setJoinGoodsMesg(this.scene)},deleteStoreItem:function(t,e){var a=e.erpStoreNo,i=this.activityStoreGroupList[t].activityStoresCheckedList;this.activityStoreGroupList[t].activityStoresCheckedList=i.filter(function(t){return t.erpStoreNo!==a})},deleteGoodsItem:function(t){var e=(t.row?t.row:{}).platformCityGoodsId,a=t.scene?t.scene:"",i=!0,s=!1,o=void 0;try{for(var r,n=d()(this.activityScenes);!(i=(r=n.next()).done);i=!0){var c=r.value;c.scene===a&&(c.platCityGoodsInfos=c.platCityGoodsInfos.filter(function(t){return t.platformCityGoodsId!==e}))}}catch(t){s=!0,o=t}finally{try{!i&&n.return&&n.return()}finally{if(s)throw o}}this.setJoinGoodsMesg(a)},setDefaultChecked:function(t){var e=t.checkedList?t.checkedList:{},a=t.scene?t.scene:"",i=!0,s=!1,o=void 0;try{for(var r,n=d()(this.activityScenes);!(i=(r=n.next()).done);i=!0){var c=r.value;c.scene===a&&(c.checkedList=e)}}catch(t){s=!0,o=t}finally{try{!i&&n.return&&n.return()}finally{if(s)throw o}}},doSaveHandel:function(){var t=this;if(this.addParamMesg.activityName)if(this.addParamMesg.activityName.length>30)this.$message("活动名称限制30个汉字");else if(this.addParamMesg.activityStartDate)if(this.addParamMesg.activityEndDate){this.addParamMesg.activityStartDate.substr(11)||(this.addParamMesg.activityStartDate=this.addParamMesg.activityStartDate+" 00:00:00"),this.addParamMesg.activityEndDate.substr(11)||(this.addParamMesg.activityEndDate=this.addParamMesg.activityEndDate+" 23:59:59");var e=Date.parse(new Date(this.addParamMesg.activityStartDate.replace(/\-/g,"/"))),a=Date.parse(new Date(this.addParamMesg.activityEndDate.replace(/\-/g,"/")));if(a<(new Date).getTime())this.$message("活动结束时间不能早于当前时间");else if(e>a)this.$message("活动结束时间不能早于开始时间");else{this.addParamMesg.activityStoreGroupList=this.activityStoreGroupList.map(function(t,e){return{index:e,performanceDate:t.performanceDate,storeNoList:t.activityStoresCheckedList.map(function(t){return t.erpStoreNo})}});var i=!0,s=!1,o=void 0;try{for(var n,l=d()(this.addParamMesg.activityStoreGroupList);!(i=(n=l.next()).done);i=!0){var m=n.value;if(!m.storeNoList||!m.storeNoList.length)return void this.$message("请选择参与门店/履约时间组中【第"+(m.index+1)+"组】的参与门店");if(!m.performanceDate)return void this.$message("请选择参与门店/履约时间组中【第"+(m.index+1)+"组】的履约时间");if(a>Date.parse(new Date((m.performanceDate+" 23:59:59").replace(/\-/g,"/"))))return void this.$message("参与门店/履约时间组中【第"+(m.index+1)+"组】的履约时间不能早于活动结束时间");m.performanceDatetime=m.performanceDate+" 23:59:59"}}catch(t){s=!0,o=t}finally{try{!i&&l.return&&l.return()}finally{if(s)throw o}}this.addParamMesg.activityStoreList=this.getCheckedStores().map(function(t){return t.erpStoreNo});var v="",f=[],h=!0,p=!1,y=void 0;try{for(var g,_=d()(this.activityScenes);!(h=(g=_.next()).done);h=!0){var w=g.value;if(1===w.scene?v="第一场":2===w.scene?v="第二场":3===w.scene?v="第三场":4===w.scene&&(v="第四场"),w.activityStartTime||(w.activityStartTime=""),w.activityEndTime||(w.activityEndTime=""),w.platCityGoodsInfos&&w.platCityGoodsInfos.length){if(!w.activityStartTime||!w.activityEndTime)return void this.$message("请选择【"+v+"】的开始时间和结束时间");if(u.b(w.activityEndTime)<=u.b(w.activityStartTime))return void this.$message("请选择【"+v+"】的结束时间必须晚于开始时间");var M=!0,D=!1,G=void 0;try{for(var T,E=d()(w.platCityGoodsInfos);!(M=(T=E.next()).done);M=!0){var N=T.value;if(!N.goodsName)return void this.$message("请输入【"+v+"】中("+N.goodsName+")的活动商品名称");if(!N.groupPrice)return void this.$message("请输入【"+v+"】中("+N.goodsName+")的活动价");if(!C.test(N.groupPrice))return void this.$message("【"+v+"】中("+N.goodsName+")的活动价是大于0，小数保留小数点后2位");if("0.00"==parseFloat(N.groupPrice))return void this.$message("【"+v+"】中("+N.goodsName+")的活动价是大于0，小数保留小数点后2位");if(parseFloat(N.groupPrice)>N.price)return void this.$message("【"+v+"】中("+N.goodsName+")的活动价必须小于或等于原价");if(N.limitGoodsCount&&!k.test(N.limitGoodsCount))return void this.$message("【"+v+"】中("+N.goodsName+")的限购数量为大于零的正整数");if(!N.curStock)return void this.$message("请输入【"+v+"】中("+N.goodsName+")的活动库存");if(!k.test(N.curStock))return void this.$message("【"+v+"】中("+N.goodsName+")的活动库存为大于零的正整数");if(!N.sortNum)return void this.$message("请输入【"+v+"】中("+N.goodsName+")的排序权重");if(!k.test(N.sortNum))return void this.$message("【"+v+"】中("+N.goodsName+")的排序权重为1—100正整数");if(N.sortNum<1||N.sortNum>100)return void this.$message("【"+v+"】中("+N.goodsName+")的排序权重为1—100正整数");N.activityStartDate=this.addParamMesg.activityStartDate,N.activityEndDate=this.addParamMesg.activityEndDate,N.activityStartTime=w.activityStartTime,N.activityEndTime=w.activityEndTime}}catch(t){D=!0,G=t}finally{try{!M&&E.return&&E.return()}finally{if(D)throw G}}f.push(w)}}}catch(t){p=!0,y=t}finally{try{!h&&_.return&&_.return()}finally{if(p)throw y}}var x=[],$=[],L=!0,I=!1,P=void 0;try{for(var z,H=d()(f);!(L=(z=H.next()).done);L=!0){var A=z.value;x.push(u.b(A.activityStartTime)),$.push(u.b(A.activityEndTime))}}catch(t){I=!0,P=t}finally{try{!L&&H.return&&H.return()}finally{if(I)throw P}}if(u.d(x,$))if(this.addParamMesg.activityScenes=[].concat(f),0!==this.addParamMesg.activityScenes.length){var R="";if("edit"===this.optType)R=S;else{if("copy"!==this.optType)return void this.$message("操作类型不匹配");R=b,delete this.addParamMesg.activityId,delete this.addParamMesg.id}this.isDisabled=!0,this.$http.post(R,c()({},this.addParamMesg)).then(function(e){if(setTimeout(function(){t.isDisabled=!1},800),0!==e.code)throw new Error(e.msg);e.data&&"object"===r()(e.data)&&e.data.length>0?t.$alert("<div><p>活动保存成功</p><p style='color: red;'>有商品在门店线上不可售</p></div>","温馨提示",{dangerouslyUseHTMLString:!0,showCancelButton:!0,cancelButtonText:"下载明细",showConfirmButton:!0,confirmButtonText:"关闭"}).then(function(){}).catch(function(){t.saveErrorMsgList=e.data,t.downLoadSaveErrorMsg()}):(t.$message.success("保存成功"),t.$router.push("/store_act"))}).catch(function(e){t.isDisabled=!1,t.$notify.error({title:"提示",message:e.message})})}else this.$message("请选择参与商品");else this.$message("活动各场次的开始时间和结束时间有冲突")}}else this.$message("请输入活动结束时间");else this.$message("请输入活动开始时间");else this.$message("请输入活动名称")},doCancelHandel:function(){var t=this;this.$confirm("确定取消吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$router.push("/store_act")}).catch(function(){})},doAddStoreGroupHandel:function(){this.activityStoreGroupList.push({performanceDate:"",activityStoresCheckedList:[]})},doMinusStoreGroupHandel:function(t){this.activityStoreGroupList.splice(t,1)},getCheckedStores:function(t){var e=[];return t||0===t?this.activityStoreGroupList.forEach(function(a,i){i!=t&&(e=[].concat(s()(e),s()(a.activityStoresCheckedList)))}):this.activityStoreGroupList.forEach(function(t){e=[].concat(s()(e),s()(t.activityStoresCheckedList))}),e},showExcelBatchInsertDialog:function(t){if(t.activityStartTime&&t.activityEndTime){if(this.$refs.excelAdd){var e={title:"Excel 批量导入",tempConfig:this.tempConfig};this.$refs.excelAdd.setDefaultMsg(e)}}else this.$message.warning("请先选择本场次的开始时间和结束时间")},doConfirmHandel:function(t){var e=this,a=t.dataList||[];a.forEach(function(t){t.activityType=21}),this.$http.post(y,[].concat(s()(a))).then(function(t){if(e.$refs.excelAdd.closeDisabled(),e.$refs.excelAdd.closeDialog(),0!==t.code)throw new Error(t.msg);if(e.hasErrorMsgData=t.data&&t.data.length?t.data:[],e.hasErrorMsgData.forEach(function(t){t.groupPrice=t.preSalePrice,t.curStock=t.platformCurStock,t.limitGoodsCount=t.limitCount}),e.hasErrorMsgData.some(function(t){return 1===t.msgType}))e.showTipErrorMsg=!0;else{var a=[].concat(s()(e.activityScenes[e.scene-1].platCityGoodsInfos));a.forEach(function(t){e.hasErrorMsgData.forEach(function(e){t.goodsId===e.goodsId&&t.goodsNo===e.goodsNo&&t.platformCityGoodsId===e.platformCityGoodsId&&t.skuNo===e.skuNo&&(t.activityGoodsName=e.activityGoodsName,t.groupPrice=e.groupPrice,t.curStock=e.curStock,t.limitGoodsCount=e.limitGoodsCount,t.sortNum=e.sortNum,t.sfInStock=e.sfInStock)})});var i={};e.activityScenes[e.scene-1].platCityGoodsInfos=[].concat(s()(a),s()(e.hasErrorMsgData)).reduceRight(function(t,e){return!i[e.platformCityGoodsId]&&(i[e.platformCityGoodsId]=t.push(e)),t},[]),e.setJoinGoodsMesg(e.scene)}}).catch(function(t){e.$refs.excelAdd.closeDisabled(),e.$refs.excelAdd.closeDialog(),e.$notify.error({title:"提示",message:t.message})})},downLoadErrorMsg:function(){var t=this,e=c()({},this.tempConfig);e.msgTypeStr="验证结果",e.msg="失败原因",this.hasErrorMsgData.forEach(function(t){t.msgTypeStr=1===t.msgType?"验证失败":"验证成功",t.sfInStockStr=t.sfInStock?"是":"否"});var a=u.o(e,!1),i=u.o(e,!0);m.a.ExportJsonToExcel({header:a,filterVal:i,data:this.hasErrorMsgData,filename:"Excel批量导入模板"}),setTimeout(function(){t.$notify.success({title:"温馨提示",message:"Excel批量导入模板下载成功"}),t.isDisabled=!1},500)},downLoadSaveErrorMsg:function(){var t=this,e=c()({},this.saveErrTempConfig),a=u.o(e,!1),i=u.o(e,!0);m.a.ExportJsonToExcel({header:a,filterVal:i,data:this.saveErrorMsgList,filename:"活动保存失败商品明细"}),setTimeout(function(){t.$notify.success({title:"温馨提示",message:"活动保存失败商品明细下载成功"}),t.isDisabled=!1},500)}},beforeRouteLeave:function(t,e,a){t.meta.keepAlive=!0,a()}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"add-form-wraper"},[a("el-form",{ref:"form",attrs:{model:t.addParamMesg,"label-width":"140px"}},[a("el-form-item",{attrs:{label:"活动类型",required:""}},[a("p",{staticStyle:{color:"#222","font-size":"16px","font-weight":"bold"}},[t._v(t._s(t.addParamMesg.activityTypeName))])]),t._v(" "),a("el-form-item",{attrs:{label:"选择区域",required:""}},[a("el-input",{staticClass:"add-input",attrs:{size:"small",disabled:""},model:{value:t.addParamMesg.regionName,callback:function(e){t.$set(t.addParamMesg,"regionName",e)},expression:"addParamMesg.regionName"}})],1),t._v(" "),"copy"!==t.optType?a("el-form-item",{attrs:{label:"活动编码",required:""}},[a("el-input",{staticClass:"add-input",attrs:{size:"small",disabled:""},model:{value:t.addParamMesg.activityCode,callback:function(e){t.$set(t.addParamMesg,"activityCode",e)},expression:"addParamMesg.activityCode"}})],1):t._e(),t._v(" "),a("el-form-item",{attrs:{label:"活动名称",required:""}},[a("el-input",{staticClass:"add-input",attrs:{size:"small",placeholder:"请输入活动名称",clearable:"",disabled:3===t.status||2===t.status},model:{value:t.addParamMesg.activityName,callback:function(e){t.$set(t.addParamMesg,"activityName",e)},expression:"addParamMesg.activityName"}}),t._v(" "),a("span",[t._v("活动名称,限制30个汉字")])],1),t._v(" "),a("el-form-item",{attrs:{label:"开始时间",required:""}},[a("el-date-picker",{staticClass:"add-input",attrs:{disabled:3===t.status||2===t.status,type:"date",placeholder:"请选择活动开始时间",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",size:"small","picker-options":t.pickerOptions},model:{value:t.addParamMesg.activityStartDate,callback:function(e){t.$set(t.addParamMesg,"activityStartDate",e)},expression:"addParamMesg.activityStartDate"}}),t._v(" "),a("span",[t._v("活动开始时间")])],1),t._v(" "),a("el-form-item",{attrs:{label:"结束时间",required:""}},[a("el-date-picker",{staticClass:"add-input",attrs:{disabled:3===t.status||2===t.status,type:"date",placeholder:"请选择活动结束时间",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",size:"small","picker-options":t.pickerOptions},model:{value:t.addParamMesg.activityEndDate,callback:function(e){t.$set(t.addParamMesg,"activityEndDate",e)},expression:"addParamMesg.activityEndDate"}}),t._v(" "),a("span",[t._v("活动结束时间")])],1),t._v(" "),a("el-form-item",{attrs:{label:"门店/履约时间",required:""}},t._l(t.activityStoreGroupList,function(e,i){return a("div",{key:i,staticClass:"store-pre-time-item-wrap",class:i>0?"mt10":null},[a("div",{staticClass:"item-right"},[a("div",[a("span",[t._v("参与门店")]),t._v(" "),a("el-button",{attrs:{size:"small",icon:"el-icon-plus",disabled:3===t.status||2===t.status},on:{click:function(e){return t.chooseStoreOpen(i)}}},[t._v("选择门店")]),t._v(" "),e.activityStoresCheckedList.length>0?a("div",[a("el-table",{staticClass:"fixed-height",attrs:{data:e.activityStoresCheckedList,"empty-text":"暂无选中任何门店","max-height":"250",size:"small"}},[a("el-table-column",{attrs:{"min-width":"220px",label:"门店编码/名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v("\n                        "+t._s(e.row.erpStoreNo)+"_"+t._s(e.row.erpStoreName)+"\n                      ")])]}}],null,!0)}),t._v(" "),a("el-table-column",{attrs:{"min-width":"80",prop:"cityName",label:"城市"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"80",prop:"saleTypeName",label:"门店类型"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-delete",disabled:3===t.status||2===t.status},on:{click:function(a){return t.deleteStoreItem(i,e.row)}}},[t._v("删除")])]}}],null,!0)})],1)],1):t._e()],1),t._v(" "),a("div",{staticClass:"mt10"},[a("span",[t._v("履约时间")]),t._v(" "),a("el-date-picker",{staticClass:"search-input",attrs:{disabled:3===t.status||2===t.status,type:"date",placeholder:"请选择履约时间",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",size:"small","picker-options":t.pickerOptions},model:{value:e.performanceDate,callback:function(a){t.$set(e,"performanceDate",a)},expression:"item.performanceDate"}}),t._v(" "),a("span",[t._v("门店仅支持自提则为自提时间")])],1)]),t._v(" "),a("div",{staticClass:"item-left"},[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus",circle:"",disabled:3===t.status||2===t.status},on:{click:t.doAddStoreGroupHandel}}),t._v("\n             \n            "),t.activityStoreGroupList.length>1?a("el-button",{attrs:{size:"mini",icon:"el-icon-minus",circle:"",disabled:3===t.status||2===t.status},on:{click:function(e){return t.doMinusStoreGroupHandel(i)}}}):t._e()],1)])}),0),t._v(" "),a("el-form-item",{attrs:{label:"参与商品",required:""}},[a("el-tabs",{on:{"tab-click":t.handleTabClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[t._l(t.activityScenes,function(e,i){return a("el-tab-pane",{key:i,attrs:{name:e.activeName}},[a("span",{attrs:{slot:"label"},slot:"label"},[t._v("\n              "+t._s(e.label)+" \n              "),e.activityStartTime&&e.activityEndTime?a("span",[t._v("\n                "+t._s(e.activityStartTime)+"-"+t._s(e.activityEndTime)+"\n              ")]):t._e()]),t._v(" "),a("span",[t._v("\n              开始时间:\n            ")]),t._v(" "),a("el-time-picker",{staticClass:"add-input-inline",attrs:{disabled:3===t.status||2===t.status,format:"HH:mm","value-format":"HH:mm",size:"small",clearable:"",placeholder:"开始时间"},model:{value:e.activityStartTime,callback:function(a){t.$set(e,"activityStartTime",a)},expression:"item.activityStartTime"}}),t._v(" "),a("span",[t._v("\n              结束时间:\n            ")]),t._v(" "),a("el-time-picker",{staticClass:"add-input-inline",attrs:{disabled:3===t.status||2===t.status,format:"HH:mm","value-format":"HH:mm",size:"small",clearable:"",placeholder:"结束时间","picker-options":t.pickerOptions},model:{value:e.activityEndTime,callback:function(a){t.$set(e,"activityEndTime",a)},expression:"item.activityEndTime"}}),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:function(a){return t.chooseGoodsOpen(e)}}},[t._v("选择商品")]),t._v(" "),3!==t.status&&2!==t.status?a("el-button",{attrs:{size:"mini",icon:"el-icon-plus"},on:{click:function(a){return t.showExcelBatchInsertDialog(e)}}},[t._v("Excel批量导入")]):t._e()],1)}),t._v(" "),a("join-goods-table",{ref:"joinGoodsTable",on:{deleteGoodsItem:t.deleteGoodsItem,setDefaultChecked:t.setDefaultChecked}})],2)],1),t._v(" "),a("hr",{staticClass:"s-slip-tb"}),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small",disabled:t.isDisabled,icon:t.isDisabled?"el-icon-loading":null},on:{click:t.doSaveHandel}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:t.doCancelHandel}},[t._v("取消")])],1)],1)],1),t._v(" "),a("div",[a("choose-store",{ref:"chooseStore",on:{confirmChooseStore:t.confirmChooseStore}})],1),t._v(" "),a("div",[a("choose-goods",{ref:"chooseGoods",on:{confirmChooseGoods:t.confirmChooseGoods}})],1),t._v(" "),a("excel-add",{ref:"excelAdd",on:{doConfirmHandel:t.doConfirmHandel}}),t._v(" "),a("el-dialog",{attrs:{title:"批量导入失败",visible:t.showTipErrorMsg,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"450px"},on:{"update:visible":function(e){t.showTipErrorMsg=e}}},[a("div",[t._v("\n      部分商品不符合要求，请按要求修改后再重新导入。"),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:t.downLoadErrorMsg}},[t._v("下载查看失败原因")])],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.showTipErrorMsg=!1}}},[t._v("关 闭")])],1)])],1)},staticRenderFns:[]};var M=a("VU/8")(_,w,!1,function(t){a("M80u")},null,null);e.default=M.exports},M80u:function(t,e){},f6J0:function(t,e,a){"use strict";var i=a("BO1k"),s=a.n(i),o=a("Gu7T"),r=a.n(o),n=a("oAV5"),c={data:function(){return{tableData:[],scene:"",checkedList:[]}},methods:{setDefaultMesg:function(t){this.tableData=t.tableData||[],this.checkedList=t.checkedList||[],this.scene=t.scene||"",this.defaultSelectFun()},handleSelect:function(t,e){var a={},i=[];if(n.m(e.platformCityGoodsId,"platformCityGoodsId",this.checkedList))this.checkedList=n.q("platformCityGoodsId",e.platformCityGoodsId,this.checkedList);else{i.push(e);var s=[].concat(i,r()(this.checkedList));this.checkedList=s.reduceRight(function(t,e){return!a[e.platformCityGoodsId]&&(a[e.platformCityGoodsId]=t.push(e)),t},[]);var o={scene:this.scene,checkedList:this.checkedList};this.$emit("setDefaultChecked",o)}},handleSelectAll:function(t){var e={};if(t.length>0){var a=!0,i=!1,o=void 0;try{for(var r,c=s()(t);!(a=(r=c.next()).done);a=!0){var l=r.value;this.checkedList.push(l)}}catch(t){i=!0,o=t}finally{try{!a&&c.return&&c.return()}finally{if(i)throw o}}this.checkedList=this.checkedList.reduceRight(function(t,a){return!e[a.platformCityGoodsId]&&(e[a.platformCityGoodsId]=t.push(a)),t},[])}else{var d=[],u=!0,m=!1,v=void 0;try{for(var f,h=s()(this.tableData);!(u=(f=h.next()).done);u=!0){var p=f.value;d.push(p)}}catch(t){m=!0,v=t}finally{try{!u&&h.return&&h.return()}finally{if(m)throw v}}var y=n.i(this.checkedList,d,"platformCityGoodsId");this.checkedList=y&&y.length>0?y:[]}var g={scene:this.scene,checkedList:this.checkedList};this.$emit("setDefaultChecked",g)},defaultSelectFun:function(){var t=this,e=[],a=!0,i=!1,o=void 0;try{for(var r,n=s()(this.tableData);!(a=(r=n.next()).done);a=!0){var c=r.value,l=!0,d=!1,u=void 0;try{for(var m,v=s()(this.checkedList);!(l=(m=v.next()).done);l=!0){var f=m.value;c.platformCityGoodsId==f.platformCityGoodsId&&(c.goodsName=f.goodsName,c.activityId=f.activityId,c.id=f.id,c.activityTimes=f.activityTimes,c.curStock=f.curStock,c.groupCount=f.groupCount,c.groupPrice=f.groupPrice,c.limitGroupType=f.limitGroupType,c.sortNum=f.sortNum,c.limitGoodsCount=f.limitGoodsCount,e.push(c))}}catch(t){d=!0,u=t}finally{try{!l&&v.return&&v.return()}finally{if(d)throw u}}}}catch(t){i=!0,o=t}finally{try{!a&&n.return&&n.return()}finally{if(i)throw o}}e.length>0?(this.$refs.multipleTable.clearSelection(),setTimeout(function(){e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)})},100)):this.$refs.multipleTable.clearSelection()},sfInStockHeader:function(){var t=this.$createElement;return t("el-popover",{attrs:{placement:"top-start",width:"260",trigger:"hover"}},[t("div",[t("p",["1、顺丰标品设为顺丰仓现货时，下单会校验仓库库存；"]),t("p",["2、本来鲜生鲜品无需设置；"])]),t("span",{slot:"reference"},["是否为顺丰仓现货",t("i",{class:"el-icon-question"})])])},deleteGoodsItem:function(t){var e={scene:this.scene,row:t};this.$emit("deleteGoodsItem",e)}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.tableData.length>0,expression:"tableData.length > 0"}]},[a("el-table",{ref:"multipleTable",staticClass:"fixed-height",staticStyle:{width:"100%"},attrs:{data:t.tableData,"empty-text":"暂无选中任何商品","max-height":"400",size:"small"},on:{select:t.handleSelect,"select-all":t.handleSelectAll}},[a("el-table-column",{attrs:{"min-width":"220px",label:"商品信息"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"ll-p-m-w"},[a("div",{staticClass:"ll-img-w"},[e.row.imgUrl&&""!=e.row.imgUrl?a("img",{attrs:{src:e.row.imgUrl,alt:"",onerror:"onerror=null;src='/shop/static/img_error.png'"}}):a("img",{attrs:{src:"/shop/static/img_error.png",alt:""}})]),t._v(" "),a("div",{staticClass:"ll-p-m-c-r"},[a("div",[t._v("\n                "+t._s(e.row.goodsName||"--")+"\n              ")]),t._v(" "),a("div",{staticClass:"ll-erp-p-no"},[t._v("SKU编码："+t._s(e.row.goodsNo||"--"))])])])]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"100px",prop:"spec",label:"规格"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"130px",label:"活动商品名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-input",{attrs:{disabled:e.row.disabled,size:"small",placeholder:"输入名称"},model:{value:e.row.activityGoodsName,callback:function(a){t.$set(e.row,"activityGoodsName",a)},expression:"scope.row.activityGoodsName"}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"90px",prop:"price",label:"原价"}}),t._v(" "),a("el-table-column",{attrs:{"min-width":"110px",label:"活动价"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-input",{attrs:{size:"small",placeholder:"输入价格",disabled:e.row.disabled},model:{value:e.row.groupPrice,callback:function(a){t.$set(e.row,"groupPrice",a)},expression:"scope.row.groupPrice"}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"150px",label:"限购数量(为空不限)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-input",{attrs:{size:"small",placeholder:"输入限购数量",disabled:e.row.disabled},model:{value:e.row.limitGoodsCount,callback:function(a){t.$set(e.row,"limitGoodsCount",a)},expression:"scope.row.limitGoodsCount"}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"110px",label:"活动库存"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-input",{attrs:{size:"small",placeholder:"输入库存",disabled:e.row.disabled},model:{value:e.row.curStock,callback:function(a){t.$set(e.row,"curStock",a)},expression:"scope.row.curStock"}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"110px",label:"排序权重"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-input",{attrs:{size:"small",placeholder:"输入权重",disabled:e.row.disabled},model:{value:e.row.sortNum,callback:function(a){t.$set(e.row,"sortNum",a)},expression:"scope.row.sortNum"}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{"min-width":"190px","render-header":t.sfInStockHeader},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-radio",{attrs:{disabled:e.row.disabled,label:!0},model:{value:e.row.sfInStock,callback:function(a){t.$set(e.row,"sfInStock",a)},expression:"scope.row.sfInStock"}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{disabled:e.row.disabled,label:!1},model:{value:e.row.sfInStock,callback:function(a){t.$set(e.row,"sfInStock",a)},expression:"scope.row.sfInStock"}},[t._v("否")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",fixed:"right",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-delete",disabled:e.row.disabled},on:{click:function(a){return t.deleteGoodsItem(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),t._m(0)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticStyle:{color:"red"}},[this._v("*")]),this._v("注意：权重排序，先创建的活动商品在前；剩余的按前端规则走。\n    ")])}]},d=a("VU/8")(c,l,!1,null,null,null);e.a=d.exports}});
//# sourceMappingURL=39.2dd08190ee8c2eef5a08.js.map