webpackJsonp([1],{IPOR:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n={data:function(){return{isAdding:!1,account:0,listContent:{number:0,title:"",fileName:"",uploadTime:"",isHighlight:!1,isComplete:!1,date:"",time:"",comment:""}}},methods:{addList:function(){this.isAdding=!this.isAdding},selectFile:function(t){if(0!==t.target.files.length){var e=(new Date).toISOString().slice(0,10);this.listContent.fileName=t.target.files[0].name,this.listContent.uploadTime=e}},cancel:function(){this.listContent={number:0,title:"",fileName:"",uploadTime:"",isHighlight:!1,isComplete:!1,date:"",time:"",comment:""},this.isAdding=!1},add:function(){""!==this.listContent.title?(this.$store.commit("addTodoItem",this.listContent),this.isAdding=!1,this.account++,this.listContent={number:this.account,title:"",fileName:"",uploadTime:"",isHighlight:!1,isComplete:!1,date:"",time:"",comment:""}):window.alert("Please input Title!"),console.log(this.$store.state.todoItems)}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isAdding?s("div",{staticClass:"addContent"},[s("div",{staticClass:"todoTitle",class:{important:t.listContent.isHighlight}},[s("div",{staticClass:"check"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.listContent.title,expression:"listContent.title"}],staticClass:"title",attrs:{placeholder:"Type Something Here…"},domProps:{value:t.listContent.title},on:{input:function(e){e.target.composing||t.$set(t.listContent,"title",e.target.value)}}}),t._v(" "),s("p",{staticClass:"starIcon",class:{highlight:t.listContent.isHighlight},on:{click:function(e){t.listContent.isHighlight=!t.listContent.isHighlight}}},[t.listContent.isHighlight?s("span",[s("i",{staticClass:"fas fa-star"})]):s("span",[s("i",{staticClass:"far fa-star"})])]),t._v(" "),s("p",{staticClass:"editIcon",class:{editing:t.isAdding}},[s("i",{staticClass:"fas fa-pencil-alt"})])]),t._v(" "),s("div",{staticClass:"todoContent"},[s("div",{staticClass:"todoInfo"},[t._m(1),t._v(" "),s("div",{staticClass:"timer"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.listContent.date,expression:"listContent.date"}],attrs:{type:"date"},domProps:{value:t.listContent.date},on:{input:function(e){e.target.composing||t.$set(t.listContent,"date",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.listContent.time,expression:"listContent.time"}],attrs:{type:"time"},domProps:{value:t.listContent.time},on:{input:function(e){e.target.composing||t.$set(t.listContent,"time",e.target.value)}}})]),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"upload"},[""!==t.listContent.fileName?s("div",{staticClass:"fileInfo"},[s("p",[t._v(t._s(t.listContent.fileName))]),t._v(" "),s("p",{staticClass:"time"},[t._v("uploaded "+t._s(t.listContent.uploadTime))])]):t._e(),t._v(" "),s("label",{staticClass:"uploadIcon"},[s("i",{staticClass:"fas fa-plus"}),t._v(" "),s("input",{attrs:{type:"file"},on:{change:t.selectFile}})])]),t._v(" "),t._m(3),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.listContent.comment,expression:"listContent.comment"}],staticClass:"comment",attrs:{placeholder:"Type your memo here…"},domProps:{value:t.listContent.comment},on:{input:function(e){e.target.composing||t.$set(t.listContent,"comment",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"btns"},[s("button",{staticClass:"cancel",on:{click:t.cancel}},[t._m(4),t._v("Cancel")]),t._v(" "),s("button",{staticClass:"add",on:{click:t.add}},[t._m(5),t._v("Add Task")])])])]):s("div",{staticClass:"addList",on:{click:t.addList}},[t._m(0),s("p",[t._v("Add Task")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"plus"},[e("i",{staticClass:"fas fa-plus"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"subtitle"},[e("span",[e("i",{staticClass:"far fa-calendar-alt"})]),this._v("Deadline")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"subtitle"},[e("span",[e("i",{staticClass:"far fa-file"})]),this._v("File")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"subtitle"},[e("span",[e("i",{staticClass:"far fa-comment"})]),this._v("Comment")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-times"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-plus"})])}]};var o=s("VU/8")(n,a,!1,function(t){s("IPOR")},"data-v-7d4161ba",null).exports,l=s("woOf"),c=s.n(l),r={props:["item"],data:function(){return{isOpen:!1,isEditing:!1,content:{number:0,title:"",fileName:"",uploadTime:"",isHighlight:!1,isComplete:!1,date:"",time:"",comment:""}}},methods:{toggleOpen:function(){this.isEditing||(this.isOpen=!this.isOpen)},edit:function(){this.isEditing?(this.isOpen=!1,this.isEditing=!1):(this.isOpen=!0,this.isEditing=!0)},updateIsHighlight:function(){this.isEditing&&(console.log("highlight"),this.content.isHighlight=!this.content.isHighlight)},updateIsComplete:function(){this.isEditing&&(console.log("complete"),this.content.isComplete=!this.content.isComplete)},selectFile:function(t){if(0!==t.target.files.length){var e=(new Date).toISOString().slice(0,10);this.content.fileName=t.target.files[0].name,this.content.uploadTime=e}},cancel:function(){c()(this.content,this.item),this.isOpen=!1,this.isEditing=!1},save:function(){var t=this.$store.state.todoItems.indexOf(this.item),e={};c()(e,this.content),this.$store.commit("updateTodoItem",{item:e,index:t}),this.isOpen=!1,this.isEditing=!1}},mounted:function(){c()(this.content,this.item)}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("div",{staticClass:"itemContent"},[s("div",{staticClass:"todoTitle",class:{important:t.content.isHighlight,finished:t.content.isComplete},on:{click:t.toggleOpen}},[s("div",{staticClass:"banner"},[s("div",{staticClass:"check",on:{click:t.updateIsComplete}},[s("i",{staticClass:"fas fa-check"})]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.content.title,expression:"content.title"}],staticClass:"title",attrs:{readonly:!t.isEditing},domProps:{value:t.content.title},on:{input:function(e){e.target.composing||t.$set(t.content,"title",e.target.value)}}}),t._v(" "),s("p",{staticClass:"starIcon",class:{highlight:t.content.isHighlight},on:{click:t.updateIsHighlight}},[t.content.isHighlight?s("span",[s("i",{staticClass:"fas fa-star"})]):s("span",[s("i",{staticClass:"far fa-star"})])]),t._v(" "),s("p",{staticClass:"editIcon",class:{editing:t.isEditing},on:{click:function(e){return e.stopPropagation(),t.edit(e)}}},[s("i",{staticClass:"fas fa-pencil-alt"})])]),t._v(" "),s("div",{staticClass:"marks"},[""!==t.content.date||""!==t.content.time||""!==t.content.comment||""!==t.content.fileName?s("p",[""!==t.content.date||""!==t.content.time?s("span",[s("i",{staticClass:"far fa-calendar-alt"})]):t._e(),t._v(" "),""!==t.content.date?s("span",[t._v(" "+t._s(t.content.date))]):t._e(),t._v(" "),""!==t.content.time?s("span",[t._v(" "+t._s(t.content.time))]):t._e(),t._v(" "),""!==t.content.fileName?s("span",[s("i",{staticClass:"far fa-file"})]):t._e(),t._v(" "),""!==t.content.comment?s("span",[s("i",{staticClass:"far fa-comment"})]):t._e()]):t._e()])]),t._v(" "),t.isOpen?s("div",{staticClass:"todoContent"},[s("div",{staticClass:"todoInfo"},[t._m(0),t._v(" "),s("div",{staticClass:"timer"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.content.date,expression:"content.date"}],attrs:{type:"date",readonly:!t.isEditing},domProps:{value:t.content.date},on:{input:function(e){e.target.composing||t.$set(t.content,"date",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.content.time,expression:"content.time"}],attrs:{type:"time",readonly:!t.isEditing},domProps:{value:t.content.time},on:{input:function(e){e.target.composing||t.$set(t.content,"time",e.target.value)}}})]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"upload"},[""!==t.content.fileName?s("div",{staticClass:"fileInfo"},[s("p",[t._v(t._s(t.content.fileName))]),t._v(" "),s("p",{staticClass:"time"},[t._v("uploaded "+t._s(t.content.uploadTime))])]):t._e(),t._v(" "),s("label",{staticClass:"uploadIcon"},[s("i",{staticClass:"fas fa-plus"}),t._v(" "),s("input",{attrs:{type:"file"},on:{change:t.selectFile}})])]),t._v(" "),t._m(2),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content.comment,expression:"content.comment"}],staticClass:"comment",attrs:{placeholder:"Type your memo here…",readonly:!t.isEditing},domProps:{value:t.content.comment},on:{input:function(e){e.target.composing||t.$set(t.content,"comment",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"btns"},[s("button",{staticClass:"cancel",on:{click:t.cancel}},[t._m(3),t._v("Cancel")]),t._v(" "),s("button",{staticClass:"save",on:{click:t.save}},[t._m(4),t._v("Save")])])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"subtitle"},[e("span",[e("i",{staticClass:"far fa-calendar-alt"})]),this._v("Deadline")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"subtitle"},[e("span",[e("i",{staticClass:"far fa-file"})]),this._v("File")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"subtitle"},[e("span",[e("i",{staticClass:"far fa-comment"})]),this._v("Comment")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-times"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-plus"})])}]};var d={name:"App",data:function(){return{selectors:["My Tasks","In Progress","Completed"],show:"My Tasks"}},methods:{filter:function(t){this.show=t}},computed:{todoItems:function(){switch(console.log(this.show),this.show){case"My Tasks":return this.$store.getters.getAllItems.sort(function(t,e){return e.isHighlight>t.isHighlight});case"In Progress":return this.$store.getters.getProcessingItems.sort(function(t,e){return e.isHighlight>t.isHighlight});case"Completed":return this.$store.getters.getCompletedItems.sort(function(t,e){return e.isHighlight>t.isHighlight});default:console.log(4)}}},components:{AddTodo:o,TodoItem:s("VU/8")(r,m,!1,function(t){s("svr2")},"data-v-5a6e155c",null).exports}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header",t._l(t.selectors,function(e,i){return s("div",{key:i,staticClass:"selector",class:{actived:e===t.show},on:{click:function(s){t.filter(e)}}},[s("p",[t._v(t._s(e))])])})),t._v(" "),s("div",{staticClass:"main"},[s("add-todo"),t._v(" "),s("ul",{staticClass:"todoList"},t._l(t.todoItems,function(t){return s("todo-item",{key:t.number,attrs:{item:t}})}))],1)])},staticRenderFns:[]};var p=s("VU/8")(d,u,!1,function(t){s("qizs")},null,null).exports,f=s("NYxO");i.a.use(f.a);var h=new f.a.Store({state:{todoItems:[]},getters:{getAllItems:function(t){return t.todoItems.map(function(t){return t})},getProcessingItems:function(t){return t.todoItems.filter(function(t){return!1===t.isComplete})},getCompletedItems:function(t){return t.todoItems.filter(function(t){return!0===t.isComplete})}},mutations:{addTodoItem:function(t,e){t.todoItems.push(e)},updateTodoItem:function(t,e){t.todoItems.splice(e.index,1,e.item)}}});i.a.config.productionTip=!1,new i.a({el:"#app",store:h,components:{App:p},template:"<App/>"})},qizs:function(t,e){},svr2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ee4aad878b2edaee5092.js.map