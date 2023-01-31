(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zm-tree"],{"0c91":function(e,t,n){"use strict";var d=n("51f0");n.o(d,"render")&&n.d(t,"render",(function(){return d["render"]})),n.o(d,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return d["staticRenderFns"]}))},"1bc4":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.node.visible,expression:"node.visible"}],ref:"node",staticClass:"zm-tree-node",class:{"is-expanded":e.expanded,"is-current":e.tree.store.currentNode===e.node,"is-hidden":!e.node.visible,"is-focusable":!0,"is-checked":!e.node.disabled&&e.node.checked,"is-parentExpanded":e.parentExpanded},attrs:{role:"treeitem",tabindex:"-1","aria-expanded":e.expanded?"true":"false","aria-disabled":e.node.disabled,"aria-checked":e.node.checked,draggable:e.tree.draggable},on:{click:function(t){return t.stopPropagation(),e.handleClick.apply(null,arguments)},contextmenu:t=>e.handleContextMenu(t),dragstart:function(t){return t.stopPropagation(),e.handleDragStart.apply(null,arguments)},dragover:function(t){return t.stopPropagation(),e.handleDragOver.apply(null,arguments)},dragend:function(t){return t.stopPropagation(),e.handleDragEnd.apply(null,arguments)},drop:function(t){return t.stopPropagation(),e.handleDrop.apply(null,arguments)}}},[t("div",{staticClass:"zm-tree-node__content",style:{"padding-left":(e.node.level-1)*e.tree.indent+"px"}},[t("span",{class:[{"is-leaf":e.node.isLeaf,expanded:!e.node.isLeaf&&e.expanded},"zm-tree-node__expand-icon",e.tree.iconClass?e.tree.iconClass:"zm-icon-right"],on:{click:function(t){return t.stopPropagation(),e.handleExpandIconClick.apply(null,arguments)}}}),e.showCheckbox?t("zm-checkbox",{attrs:{indeterminate:e.node.indeterminate,disabled:!!e.node.disabled,"aria-label":e.node.data&&e.node.data.label},on:{change:e.handleCheckChange},nativeOn:{click:function(e){e.stopPropagation()}},model:{value:e.node.checked,callback:function(t){e.$set(e.node,"checked",t)},expression:"node.checked"}}):e._e(),e.node.loading?t("span",{staticClass:"zm-tree-node__loading-icon"},[t("svg",{staticClass:"circular",attrs:{width:"50",height:"50",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0.375C8.34518 0.375 8.625 0.654822 8.625 1V4C8.625 4.34518 8.34518 4.625 8 4.625C7.65482 4.625 7.375 4.34518 7.375 4V1C7.375 0.654822 7.65482 0.375 8 0.375Z",fill:"#000001"}}),t("path",{attrs:{opacity:"0.9","fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.18775 1.39655C4.48668 1.22396 4.86893 1.32638 5.04152 1.62531L6.54152 4.22339C6.71411 4.52232 6.61168 4.90456 6.31275 5.07715C6.01382 5.24974 5.63157 5.14732 5.45898 4.84839L3.95898 2.25031C3.7864 1.95138 3.88882 1.56913 4.18775 1.39655Z",fill:"#000001"}}),t("path",{attrs:{opacity:"0.8","fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.39648 4.18752C1.56907 3.88859 1.95132 3.78617 2.25025 3.95876L4.84833 5.45876C5.14726 5.63135 5.24968 6.01359 5.07709 6.31252C4.9045 6.61146 4.52226 6.71388 4.22333 6.54129L1.62525 5.04129C1.32632 4.8687 1.2239 4.48646 1.39648 4.18752Z",fill:"#000001"}}),t("path",{attrs:{opacity:"0.7","fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.375 8C0.375 7.65482 0.654822 7.375 1 7.375H4C4.34518 7.375 4.625 7.65482 4.625 8C4.625 8.34518 4.34518 8.625 4 8.625H1C0.654822 8.625 0.375 8.34518 0.375 8Z",fill:"#000001"}}),t("path",{attrs:{opacity:"0.6","fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.39648 11.8125C1.2239 11.5136 1.32632 11.1313 1.62525 10.9587L4.22333 9.45873C4.52226 9.28614 4.9045 9.38856 5.07709 9.68749C5.24968 9.98643 5.14726 10.3687 4.84833 10.5413L2.25025 12.0413C1.95132 12.2138 1.56907 12.1114 1.39648 11.8125Z",fill:"#000001"}}),t("path",{attrs:{opacity:"0.5","fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.18725 14.6035C3.88832 14.4309 3.78589 14.0486 3.95848 13.7497L5.45848 11.1516C5.63107 10.8527 6.01332 10.7503 6.31225 10.9228C6.61118 11.0954 6.7136 11.4777 6.54102 11.7766L5.04102 14.3747C4.86843 14.6736 4.48618 14.776 4.18725 14.6035Z",fill:"#000001"}}),t("path",{attrs:{opacity:"0.4","fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 15.6272C7.65482 15.6272 7.375 15.3473 7.375 15.0022V12.0022C7.375 11.657 7.65482 11.3772 8 11.3772C8.34518 11.3772 8.625 11.657 8.625 12.0022V15.0022C8.625 15.3473 8.34518 15.6272 8 15.6272Z",fill:"#000001"}}),t("path",{attrs:{opacity:"0.3","fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8122 14.6056C11.5133 14.7782 11.1311 14.6758 10.9585 14.3768L9.45848 11.7787C9.28589 11.4798 9.38832 11.0976 9.68725 10.925C9.98618 10.7524 10.3684 10.8548 10.541 11.1537L12.041 13.7518C12.2136 14.0508 12.1112 14.433 11.8122 14.6056Z",fill:"#000001"}}),t("path",{attrs:{opacity:"0.3","fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.6035 11.8147C14.4309 12.1136 14.0487 12.216 13.7497 12.0434L11.1517 10.5434C10.8527 10.3708 10.7503 9.98861 10.9229 9.68967C11.0955 9.39074 11.4777 9.28832 11.7767 9.46091L14.3747 10.9609C14.6737 11.1335 14.7761 11.5157 14.6035 11.8147Z",fill:"#000001"}}),t("path",{attrs:{opacity:"0.2","fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.625 8.00217C15.625 8.34734 15.3452 8.62717 15 8.62717H12C11.6548 8.62717 11.375 8.34734 11.375 8.00217C11.375 7.65699 11.6548 7.37717 12 7.37717H15C15.3452 7.37717 15.625 7.65699 15.625 8.00217Z",fill:"#000001"}}),t("path",{attrs:{opacity:"0.2","fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.6035 4.18967C14.7761 4.48861 14.6737 4.87085 14.3747 5.04344L11.7767 6.54344C11.4777 6.71603 11.0955 6.61361 10.9229 6.31467C10.7503 6.01574 10.8527 5.6335 11.1517 5.46091L13.7497 3.96091C14.0487 3.78832 14.4309 3.89074 14.6035 4.18967Z",fill:"#000001"}}),t("path",{attrs:{opacity:"0.1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8128 1.39874C12.1117 1.57133 12.2141 1.95358 12.0415 2.25251L10.5415 4.85058C10.3689 5.14952 9.98668 5.25194 9.68775 5.07935C9.38882 4.90676 9.2864 4.52452 9.45898 4.22558L10.959 1.62751C11.1316 1.32858 11.5138 1.22615 11.8128 1.39874Z",fill:"#000001"}})])]):e._e(),t("node-content",{attrs:{node:e.node}})],1),t("zm-collapse-transition",[!e.renderAfterExpand||e.childNodeRendered?t("div",{directives:[{name:"show",rawName:"v-show",value:e.expanded,expression:"expanded"}],staticClass:"zm-tree-node__children",attrs:{role:"group","aria-expanded":e.expanded?"true":"false"}},e._l(e.node.childNodes,(function(n){return t("zm-tree-node",{key:e.getNodeKey(n),attrs:{"render-content":e.renderContent,"render-after-expand":e.renderAfterExpand,"parent-expanded":e.expanded&&e.parentExpanded,node:n},on:{"node-expand":e.handleChildNodeExpand}})})),1):e._e()])],1)};t.render=n;var d=[];t.staticRenderFns=d},"1e5d":function(e,t,n){var d=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d9e2"),n("14d9"),n("8cd7");var r=d(n("2c80")),i=n("fab9"),o=d(n("b14d")),s=n("fbc7"),a=d(n("c962")),l=n("e7c7"),h={name:"ZmTree",mixins:[a.default],components:{ZmTreeNode:o.default},data(){return{store:null,root:null,currentNode:null,treeItems:null,checkboxItems:[],dragState:{showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0}}},props:{data:{type:Array},emptyText:{type:String,default(){return(0,s.t)("tree.emptyText")}},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default(){return{children:"children",label:"label",disabled:"disabled"}}},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},iconClass:String},computed:{children:{set(e){this.data=e},get(){return this.data}},treeItemArray(){return Array.prototype.slice.call(this.treeItems).filter(e=>!e.classList.contains("is-hidden"))},isEmpty(){const{childNodes:e}=this.root;return!e||0===e.length||e.every(({visible:e})=>!e)}},watch:{defaultCheckedKeys(e){this.store.setDefaultCheckedKey(e)},defaultExpandedKeys(e){this.store.defaultExpandedKeys=e,this.store.setDefaultExpandedKeys(e)},data(e){this.store.setData(e)},checkboxItems(e){Array.prototype.forEach.call(e,e=>{e.setAttribute("tabindex",-1)})},checkStrictly(e){this.store.checkStrictly=e}},methods:{filter(e){if(!this.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");this.store.filter(e),this.$nextTick(()=>{this.initTabIndex()})},getNodeKey(e){return(0,i.getNodeKey)(this.nodeKey,e.data)},getNodePath(e){if(!this.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const t=this.store.getNode(e);if(!t)return[];const n=[t.data];let d=t.parent;while(d&&d!==this.root)n.push(d.data),d=d.parent;return n.reverse()},getCheckedNodes(e,t,n){return this.store.getCheckedNodes(e,t,n)},getCheckedKeys(e,t){return this.store.getCheckedKeys(e,t)},getCurrentNode(){const e=this.store.getCurrentNode();return e?e.data:null},getCurrentKey(){if(!this.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const e=this.getCurrentNode();return e?e[this.nodeKey]:null},setCheckedNodes(e,t){if(!this.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");this.store.setCheckedNodes(e,t)},setCheckedKeys(e,t){if(!this.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");this.store.setCheckedKeys(e,t)},setChecked(e,t,n){this.store.setChecked(e,t,n)},getHalfCheckedNodes(){return this.store.getHalfCheckedNodes()},getHalfCheckedKeys(){return this.store.getHalfCheckedKeys()},setCurrentNode(e){if(!this.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");this.store.setUserCurrentNode(e)},setCurrentKey(e){if(!this.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");this.store.setCurrentNodeKey(e)},getNode(e){return this.store.getNode(e)},remove(e){this.store.remove(e)},append(e,t){this.store.append(e,t)},insertBefore(e,t){this.store.insertBefore(e,t)},insertAfter(e,t){this.store.insertAfter(e,t)},handleNodeExpand(e,t,n){this.broadcast("ZmTreeNode","tree-node-expand",t),this.$emit("node-expand",e,t,n)},updateKeyChildren(e,t){if(!this.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");this.store.updateChildren(e,t)},initTabIndex(){const e=this.treeItems=this.$el.querySelectorAll(".is-focusable[role=treeitem]");this.checkboxItems=this.$el.querySelectorAll("input[type=checkbox]");const t=this.$el.querySelectorAll(".is-checked[role=treeitem]");t.length?this.setFirstVisibleItemTabIndex(t):e.length&&this.setFirstVisibleItemTabIndex(e)},setFirstVisibleItemTabIndex(e){Array.prototype.slice.call(e).filter(e=>!e.classList.contains("is-hidden")).forEach((e,t)=>{0===t?e.setAttribute("tabindex",0):e.setAttribute("tabindex",-1)})},handleKeydown(e){const t=e.target;if(-1===t.className.indexOf("zm-tree-node"))return;const n=e.keyCode;this.treeItems=this.$el.querySelectorAll(".is-focusable.is-parentExpanded[role=treeitem]");const d=this.treeItemArray.indexOf(t);let r;if([38,40].indexOf(n)>-1&&(e.preventDefault(),r=38===n?d>0?d-1:0:d<this.treeItemArray.length-1?d+1:0,this.treeItemArray[r].focus()),[37,39].indexOf(n)>-1){e.preventDefault();const n=t.querySelector(".zm-tree-node__expand-icon");n?n.click():t.click()}const i=t.querySelector('[type="checkbox"]');[13,32].indexOf(n)>-1&&(e.preventDefault(),i?(e.stopPropagation(),i.click()):t.click()),this.$emit("keydown",e)}},created(){this.isTree=!0,this.store=new r.default({key:this.nodeKey,data:this.data,lazy:this.lazy,props:this.props,load:this.load,currentNodeKey:this.currentNodeKey,checkStrictly:this.checkStrictly,checkDescendants:this.checkDescendants,defaultCheckedKeys:this.defaultCheckedKeys,defaultExpandedKeys:this.defaultExpandedKeys,autoExpandParent:this.autoExpandParent,defaultExpandAll:this.defaultExpandAll,filterNodeMethod:this.filterNodeMethod}),this.root=this.store.root;let e=this.dragState;this.$on("tree-node-drag-start",(t,n)=>{if("function"===typeof this.allowDrag&&!this.allowDrag(n.node))return t.preventDefault(),!1;t.dataTransfer.effectAllowed="move";try{t.dataTransfer.setData("text/plain","")}catch(d){}e.draggingNode=n,this.$emit("node-drag-start",n.node,t)}),this.$on("tree-node-drag-over",(t,n)=>{const d=(0,i.findNearestComponent)(t.target,"ZmTreeNode"),r=e.dropNode;r&&r!==d&&(0,l.removeClass)(r.$el,"is-drop-inner");const o=e.draggingNode;if(!o||!d)return;let s=!0,a=!0,h=!0,c=!0;"function"===typeof this.allowDrop&&(s=this.allowDrop(o.node,d.node,"prev"),c=a=this.allowDrop(o.node,d.node,"inner"),h=this.allowDrop(o.node,d.node,"next")),t.dataTransfer.dropEffect=a?"move":"none",(s||a||h)&&r!==d&&(r&&this.$emit("node-drag-leave",o.node,r.node,t),this.$emit("node-drag-enter",o.node,d.node,t)),(s||a||h)&&(e.dropNode=d),d.node.nextSibling===o.node&&(h=!1),d.node.previousSibling===o.node&&(s=!1),d.node.contains(o.node,!1)&&(a=!1),(o.node===d.node||o.node.contains(d.node))&&(s=!1,a=!1,h=!1);const u=d.$el.getBoundingClientRect(),f=this.$el.getBoundingClientRect();let p;const y=s?a?.25:h?.45:1:-1,C=h?a?.75:s?.55:0:1;let g=-9999;const k=t.clientY-u.top;p=k<u.height*y?"before":k>u.height*C?"after":a?"inner":"none";const N=d.$el.querySelector(".zm-tree-node__expand-icon").getBoundingClientRect(),v=this.$refs.dropIndicator;"before"===p?g=N.top-f.top:"after"===p&&(g=N.bottom-f.top),v.style.top=g+"px",v.style.left=N.right-f.left+"px","inner"===p?(0,l.addClass)(d.$el,"is-drop-inner"):(0,l.removeClass)(d.$el,"is-drop-inner"),e.showDropIndicator="before"===p||"after"===p,e.allowDrop=e.showDropIndicator||c,e.dropType=p,this.$emit("node-drag-over",o.node,d.node,t)}),this.$on("tree-node-drag-end",t=>{const{draggingNode:n,dropType:d,dropNode:r}=e;if(t.preventDefault(),t.dataTransfer.dropEffect="move",n&&r){const e={data:n.node.data};"none"!==d&&n.node.remove(),"before"===d?r.node.parent.insertBefore(e,r.node):"after"===d?r.node.parent.insertAfter(e,r.node):"inner"===d&&r.node.insertChild(e),"none"!==d&&this.store.registerNode(e),(0,l.removeClass)(r.$el,"is-drop-inner"),this.$emit("node-drag-end",n.node,r.node,d,t),"none"!==d&&this.$emit("node-drop",n.node,r.node,d,t)}n&&!r&&this.$emit("node-drag-end",n.node,null,d,t),e.showDropIndicator=!1,e.draggingNode=null,e.dropNode=null,e.allowDrop=!0})},mounted(){this.initTabIndex(),this.$el.addEventListener("keydown",this.handleKeydown)},updated(){this.treeItems=this.$el.querySelectorAll("[role=treeitem]"),this.checkboxItems=this.$el.querySelectorAll("input[type=checkbox]")},beforeDestroy(){this.$el.removeEventListener("keydown",this.handleKeydown)}};t.default=h},"2b3e":function(e,t,n){"use strict";n("aa3e")},"2c80":function(e,t,n){var d=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("14d9");var r=d(n("4e1f")),i=n("fab9");class o{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(let t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);if(this.nodesMap={},this.root=new r.default({data:this.data,store:this}),this.lazy&&this.load){const e=this.load;e(this.root,e=>{this.root.doCreateChildren(e),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const t=this.filterNodeMethod,n=this.lazy,d=function(r){const i=r.root?r.root.childNodes:r.childNodes;if(i.forEach(n=>{const r=t.call(n,e,n.data,n);n.visible=r,n.focusBySearch=r,d(n)}),!r.visible&&i.length){let e=!0;i.forEach(t=>{t.visible&&(e=!1)}),r.root?r.root.visible=!1===e:r.visible=!1===e}e&&(!r.visible||r.isLeaf||n||r.expand())};d(this)}setData(e){const t=e!==this.root.data;t?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof r.default)return e;const t="object"!==typeof e?e:(0,i.getNodeKey)(this.key,e);return this.nodesMap[t]||null}insertBefore(e,t){const n=this.getNode(t);n.parent.insertBefore({data:e},n)}insertAfter(e,t){const n=this.getNode(t);n.parent.insertAfter({data:e},n)}remove(e){const t=this.getNode(e);t&&t.parent&&t.parent.removeChild(t)}append(e,t){const n=t?this.getNode(t):this.root;n&&n.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],t=this.nodesMap;e.forEach(e=>{const n=t[e];n&&n.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){const t=this.defaultCheckedKeys||[];-1!==t.indexOf(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const t=this.key;if(!t||!e||!e.data)return;const n=e.key;void 0!==n&&(this.nodesMap[e.key]=e)}deregisterNode(e){const t=this.key;t&&e&&e.data&&(e.childNodes.forEach(e=>{this.deregisterNode(e)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,t=!1,n=!1){const d=[];n&&(e=!1,t=!1);const r=function(i){const o=i.root?i.root.childNodes:i.childNodes;o.forEach(i=>{(i.checked||t&&i.indeterminate)&&(!e||e&&i.isLeaf)&&d.push(i.data),n&&i.checked||r(i)})};return r(this),d}getCheckedKeys(e=!1,t){return this.getCheckedNodes(e,!1,t).map(e=>(e||{})[this.key])}getHalfCheckedNodes(){const e=[],t=function(n){const d=n.root?n.root.childNodes:n.childNodes;d.forEach(n=>{n.indeterminate&&e.push(n.data),t(n)})};return t(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],t=this.nodesMap;for(let n in t)t.hasOwnProperty(n)&&e.push(t[n]);return e}updateChildren(e,t){const n=this.nodesMap[e];if(!n)return;const d=n.childNodes;for(let r=d.length-1;r>=0;r--){const e=d[r];this.remove(e.data)}for(let r=0,i=t.length;r<i;r++){const e=t[r];this.append(e,n.data)}}_setCheckedKeys(e,t=!1,n){const d=this._getAllNodes().sort((e,t)=>t.level-e.level),r=Object.create(null),i=Object.keys(n);d.forEach(e=>e.setChecked(!1,!1));for(let o=0,s=d.length;o<s;o++){const n=d[o],s=n.data[e].toString();let a=i.indexOf(s)>-1;if(!a){n.checked&&!r[s]&&n.setChecked(!1,!1);continue}let l=n.parent;while(l&&l.level>0)r[l.data[e]]=!0,l=l.parent;if(n.isLeaf||this.checkStrictly)n.setChecked(!0,!1);else if(n.setChecked(!0,!0),t){n.setChecked(!1,!1);const e=function(t){const n=t.childNodes;n.forEach(t=>{t.isLeaf||t.setChecked(!1,!1),e(t)})};e(n)}}}setCheckedNodes(e,t=!1){const n=this.key,d={};e.forEach(e=>{d[(e||{})[n]]=!0}),this._setCheckedKeys(n,t,d)}setCheckedKeys(e,t=!1){this.defaultCheckedKeys=e;const n=this.key,d={};e.forEach(e=>{d[e]=!0}),this._setCheckedKeys(n,t,d)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(e=>{const t=this.getNode(e);t&&t.expand(null,this.autoExpandParent)})}setChecked(e,t,n){const d=this.getNode(e);d&&d.setChecked(!!t,n)}getCurrentNode(){return this.currentNode}setCurrentNode(e){this.currentNode=e}setUserCurrentNode(e){const t=e[this.key],n=this.nodesMap[t];this.setCurrentNode(n)}setCurrentNodeKey(e){if(null===e)return void(this.currentNode=null);const t=this.getNode(e);t&&(this.currentNode=t)}}t.default=o},"3f7c":function(e,t,n){"use strict";n("b2b8")},"4e1f":function(e,t,n){var d=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getChildState=t.default=void 0,n("d9e2"),n("14d9");var r=d(n("5c16")),i=n("fab9");const o=e=>{let t=!0,n=!0,d=!0;for(let r=0,i=e.length;r<i;r++){const i=e[r];(!0!==i.checked||i.indeterminate)&&(t=!1,i.disabled||(d=!1)),(!1!==i.checked||i.indeterminate)&&(n=!1)}return{all:t,none:n,allWithoutDisable:d,half:!t&&!n}};t.getChildState=o;const s=function(e){if(0===e.childNodes.length)return;const{all:t,none:n,half:d}=o(e.childNodes);t?(e.checked=!0,e.indeterminate=!1):d?(e.checked=!1,e.indeterminate=!0):n&&(e.checked=!1,e.indeterminate=!1);const r=e.parent;r&&0!==r.level&&(e.store.checkStrictly||s(r))},a=function(e,t){const n=e.store.props,d=e.data||{},r=n[t];if("function"===typeof r)return r(d,e);if("string"===typeof r)return d[r];if("undefined"===typeof r){const e=d[t];return void 0===e?"":e}};let l=0;class h{constructor(e){this.id=l++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.focusBySearch=!1;for(let i in e)e.hasOwnProperty(i)&&(this[i]=e[i]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1);const t=this.store;if(!t)throw new Error("[Node]store is required!");t.registerNode(this);const n=t.props;if(n&&"undefined"!==typeof n.isLeaf){const e=a(this,"isLeaf");"boolean"===typeof e&&(this.isLeafByUser=e)}if(!0!==t.lazy&&this.data?(this.setData(this.data),t.defaultExpandAll&&(this.expanded=!0)):this.level>0&&t.lazy&&t.defaultExpandAll&&this.expand(),Array.isArray(this.data)||(0,i.markNodeData)(this,this.data),!this.data)return;const d=t.defaultExpandedKeys,r=t.key;r&&d&&-1!==d.indexOf(this.key)&&this.expand(null,t.autoExpandParent),r&&void 0!==t.currentNodeKey&&this.key===t.currentNodeKey&&(t.currentNode=this),t.lazy&&t._initDefaultCheckedNode(this),this.updateLeafState()}setData(e){let t;Array.isArray(e)||(0,i.markNodeData)(this,e),this.data=e,this.childNodes=[],t=0===this.level&&this.data instanceof Array?this.data:a(this,"children")||[];for(let n=0,d=t.length;n<d;n++)this.insertChild({data:t[n]})}get label(){return a(this,"label")}get icon(){return a(this,"icon")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return a(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return e.childNodes[t+1]}return null}get previousSibling(){const e=this.parent;if(e){const t=e.childNodes.indexOf(this);if(t>-1)return t>0?e.childNodes[t-1]:null}return null}contains(e,t=!0){const n=function(d){const r=d.childNodes||[];let i=!1;for(let o=0,s=r.length;o<s;o++){const d=r[o];if(d===e||t&&n(d)){i=!0;break}}return i};return n(this)}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,t,n){if(!e)throw new Error("insertChild error: child is required.");if(!(e instanceof h)){if(!n){const n=this.getChildren(!0)||[];-1===n.indexOf(e.data)&&("undefined"===typeof t||t<0?n.push(e.data):n.splice(t,0,e.data))}(0,r.default)(e,{parent:this,store:this.store}),e=new h(e)}e.level=this.level+1,"undefined"===typeof t||t<0?this.childNodes.push(e):this.childNodes.splice(t,0,e),this.updateLeafState()}insertBefore(e,t){let n;t&&(n=this.childNodes.indexOf(t)),this.insertChild(e,n)}insertAfter(e,t){let n;t&&(n=this.childNodes.indexOf(t),-1!==n&&(n+=1)),this.insertChild(e,n)}removeChild(e){const t=this.getChildren()||[],n=t.indexOf(e.data);n>-1&&t.splice(n,1);const d=this.childNodes.indexOf(e);d>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(d,1)),this.updateLeafState()}removeChildByData(e){let t=null;for(let n=0;n<this.childNodes.length;n++)if(this.childNodes[n]===e){t=this.childNodes[n];break}t&&this.removeChild(t)}expand(e,t){const n=()=>{if(t){let e=this.parent;while(e.level>0)e.expanded=!0,e=e.parent}this.expanded=!0,e&&e()};this.shouldLoadData()?this.loadData(e=>{e instanceof Array&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||s(this),n())}):n()}doCreateChildren(e,t={}){e.forEach(e=>{this.insertChild((0,r.default)({data:e},t),void 0,!0)})}collapse(){this.expanded=!1}shouldLoadData(){return!0===this.store.lazy&&this.store.load&&!this.loaded}updateLeafState(){if(!0===this.store.lazy&&!0!==this.loaded&&"undefined"!==typeof this.isLeafByUser)return void(this.isLeaf=this.isLeafByUser);const e=this.childNodes;!this.store.lazy||!0===this.store.lazy&&!0===this.loaded?this.isLeaf=!e||0===e.length:this.isLeaf=!1}setChecked(e,t,n,d){if(this.indeterminate="half"===e,this.checked=!0===e,this.store.checkStrictly)return;if(!this.shouldLoadData()||this.store.checkDescendants){let{all:n,allWithoutDisable:r}=o(this.childNodes);this.isLeaf||n||!r||(this.checked=!1,e=!1);const i=()=>{if(t){const n=this.childNodes;for(let o=0,s=n.length;o<s;o++){const r=n[o];d=d||!1!==e;const i=r.disabled?r.checked:d;r.setChecked(i,t,!0,d)}const{half:r,all:i}=o(n);i||(this.checked=i,this.indeterminate=r)}};if(this.shouldLoadData())return void this.loadData(()=>{i(),s(this)},{checked:!1!==e});i()}const r=this.parent;r&&0!==r.level&&(n||s(r))}getChildren(e=!1){if(0===this.level)return this.data;const t=this.data;if(!t)return null;const n=this.store.props;let d="children";return n&&(d=n.children||"children"),void 0===t[d]&&(t[d]=null),e&&!t[d]&&(t[d]=[]),t[d]}updateChildren(){const e=this.getChildren()||[],t=this.childNodes.map(e=>e.data),n={},d=[];e.forEach((e,t)=>{e[i.NODE_KEY]?n[e[i.NODE_KEY]]={index:t,data:e}:d.push({index:t,data:e})}),this.store.lazy||t.forEach(e=>{n[e[i.NODE_KEY]]||this.removeChildByData(e)}),d.forEach(({index:e,data:t})=>{this.insertChild({data:t},e)}),this.updateLeafState()}loadData(e,t={}){if(!0!==this.store.lazy||!this.store.load||this.loaded||this.loading&&!Object.keys(t).length)e&&e.call(this);else{this.loading=!0;const n=n=>{this.loaded=!0,this.loading=!1,this.childNodes=[],this.doCreateChildren(n,t),this.updateLeafState(),e&&e.call(this,n)};this.store.load(this,n)}}}t.default=h},"51f0":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"zm-tree",class:{"zm-tree--highlight-current":e.highlightCurrent,"is-dragging":!!e.dragState.draggingNode,"is-drop-not-allow":!e.dragState.allowDrop,"is-drop-inner":"inner"===e.dragState.dropType},attrs:{role:"tree"}},[e._l(e.root.childNodes,(function(n){return t("zm-tree-node",{key:e.getNodeKey(n),attrs:{node:n,props:e.props,"render-after-expand":e.renderAfterExpand,"render-content":e.renderContent},on:{"node-expand":e.handleNodeExpand}})})),e.isEmpty?t("div",{staticClass:"zm-tree__empty-block"},[t("span",{staticClass:"zm-tree__empty-text"},[e._v(e._s(e.emptyText))])]):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:e.dragState.showDropIndicator,expression:"dragState.showDropIndicator"}],ref:"dropIndicator",staticClass:"zm-tree__drop-indicator"})],2)};t.render=n;var d=[];t.staticRenderFns=d},"677a":function(e,t,n){var d=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n("e8d0")),i=d(n("65d3")),o=d(n("c962")),s=n("fab9"),a={name:"ZmTreeNode",componentName:"ZmTreeNode",mixins:[o.default],props:{node:{type:Object,default(){return{}}},props:Object,renderContent:Function,renderAfterExpand:{type:Boolean,default:!0},parentExpanded:{type:Boolean,default:!0}},components:{ZmCollapseTransition:r.default,ZmCheckbox:i.default,NodeContent:{props:{node:{required:!0}},render(e){const t=this.$parent,n=t.tree,d=this.node,{data:r,store:i}=d;return t.renderContent?t.renderContent.call(t._renderProxy,e,{_self:n.$vnode.context,node:d,data:r,store:i}):n.$scopedSlots.default?n.$scopedSlots.default({node:d,data:r}):e("span",{class:"zm-tree-node__label"},[d.label])}}},data(){return{tree:null,expanded:!1,childNodeRendered:!1,showCheckbox:!1,oldChecked:null,oldIndeterminate:null}},watch:{"node.indeterminate"(e){this.handleSelectChange(this.node.checked,e)},"node.checked"(e){this.handleSelectChange(e,this.node.indeterminate)},"node.expanded"(e){this.$nextTick(()=>{this.expanded=e}),e&&(this.childNodeRendered=!0)}},methods:{getNodeKey(e){return(0,s.getNodeKey)(this.tree.nodeKey,e.data)},handleSelectChange(e,t){this.oldChecked!==e&&this.oldIndeterminate!==t&&this.tree.$emit("check-change",this.node.data,e,t),this.oldChecked=e,this.indeterminate=t},handleClick(){const e=this.tree.store;e.setCurrentNode(this.node),this.tree.$emit("current-change",e.currentNode?e.currentNode.data:null,e.currentNode),this.tree.currentNode=this,this.tree.expandOnClickNode&&this.handleExpandIconClick(),this.tree.checkOnClickNode&&!this.node.disabled&&this.handleCheckChange(null,{target:{checked:!this.node.checked}}),this.tree.$emit("node-click",this.node.data,this.node,this)},handleContextMenu(e){this.tree._events["node-contextmenu"]&&this.tree._events["node-contextmenu"].length>0&&(e.stopPropagation(),e.preventDefault()),this.tree.$emit("node-contextmenu",e,this.node.data,this.node,this)},handleExpandIconClick(){this.node.isLeaf||(this.expanded?(this.tree.$emit("node-collapse",this.node.data,this.node,this),this.node.collapse()):(this.node.expand(),this.$emit("node-expand",this.node.data,this.node,this)))},handleCheckChange(e,t){this.node.setChecked(t.target.checked,!this.tree.checkStrictly),this.$nextTick(()=>{const e=this.tree.store;this.tree.$emit("check",this.node.data,{checkedNodes:e.getCheckedNodes(),checkedKeys:e.getCheckedKeys(),halfCheckedNodes:e.getHalfCheckedNodes(),halfCheckedKeys:e.getHalfCheckedKeys()})})},handleChildNodeExpand(e,t,n){this.broadcast("ZmTreeNode","tree-node-expand",t),this.tree.$emit("node-expand",e,t,n)},handleDragStart(e){this.tree.draggable&&this.tree.$emit("tree-node-drag-start",e,this)},handleDragOver(e){this.tree.draggable&&(this.tree.$emit("tree-node-drag-over",e,this),e.preventDefault())},handleDrop(e){e.preventDefault()},handleDragEnd(e){this.tree.draggable&&this.tree.$emit("tree-node-drag-end",e,this)}},created(){const e=this.$parent;e.isTree?this.tree=e:this.tree=e.tree;const t=this.tree;t||console.warn("Can not find node's tree.");const n=t.props||{},d=n["children"]||"children";this.$watch("node.data."+d,()=>{this.node.updateChildren()}),this.showCheckbox=t.showCheckbox,this.node.expanded&&(this.expanded=!0,this.childNodeRendered=!0),this.tree.accordion&&this.$on("tree-node-expand",e=>{this.node!==e&&this.node.collapse()})}};t.default=a},"84d5":function(e,t,n){"use strict";n.r(t);var d=n("1e5d"),r=n.n(d);for(var i in d)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return d[e]}))}(i);t["default"]=r.a},"8cd7":function(e,t,n){var d=n("fbc7");const r="en-US",i={"en-US":{tree:{emptyText:"No Data"}},"de-DE":{tree:{emptyText:"Keine Daten"}},"es-ES":{tree:{emptyText:"Sin datos"}},"fr-FR":{tree:{emptyText:"Aucune donnée"}},"it-IT":{tree:{emptyText:"Nessun dato"}},"jp-JP":{tree:{emptyText:"データなし"}},"ko-KO":{tree:{emptyText:"데이터 없음"}},"nl-NL":{tree:{emptyText:"Geen gegevens"}},"pl-PL":{tree:{emptyText:"Brak danych"}},"pt-PT":{tree:{emptyText:"Sem dados"}},"ru-RU":{tree:{emptyText:"Нет данных"}},"tr-TR":{tree:{emptyText:"Veri yok"}},"vi-VN":{tree:{emptyText:"Không có dữ liệu"}},"zh-CN":{tree:{emptyText:"无数据"}},"zh-TW":{tree:{emptyText:"無資料"}}},o=i[d.locale]?i[d.locale]:i[r];(0,d.addLang)(o)},a2e6:function(e,t,n){var d=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t._Vue=void 0;var r=d(n("af27"));let i;t._Vue=i,r.default.install=function(e){t._Vue=i=e,e.component(r.default.name,r.default)};var o=r.default;t.default=o},aa3e:function(e,t,n){},af27:function(e,t,n){"use strict";n.r(t);var d=n("0c91"),r=n("84d5");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("2b3e");var o=n("2877"),s=Object(o["a"])(r["default"],d["render"],d["staticRenderFns"],!1,null,null,null);t["default"]=s.exports},b14d:function(e,t,n){"use strict";n.r(t);var d=n("cc75"),r=n("d2e1");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("3f7c");var o=n("2877"),s=Object(o["a"])(r["default"],d["render"],d["staticRenderFns"],!1,null,null,null);t["default"]=s.exports},b2b8:function(e,t,n){},cc75:function(e,t,n){"use strict";var d=n("1bc4");n.o(d,"render")&&n.d(t,"render",(function(){return d["render"]})),n.o(d,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return d["staticRenderFns"]}))},d2e1:function(e,t,n){"use strict";n.r(t);var d=n("677a"),r=n.n(d);for(var i in d)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return d[e]}))}(i);t["default"]=r.a},fab9:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.markNodeData=t.getNodeKey=t.findNearestComponent=t.NODE_KEY=void 0;const n="$treeNodeId";t.NODE_KEY=n;const d=function(e,t){t&&!t[n]&&Object.defineProperty(t,n,{value:e.id,enumerable:!1,configurable:!1,writable:!1})};t.markNodeData=d;const r=function(e,t){return e?t[e]:t[n]};t.getNodeKey=r;const i=(e,t)=>{let n=e;while(n&&"BODY"!==n.tagName){if(n.__vue__&&n.__vue__.$options.name===t)return n.__vue__;n=n.parentNode}return null};t.findNearestComponent=i}}]);