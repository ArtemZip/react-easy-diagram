(this["webpackJsonp@react-easy-diagram/demo"]=this["webpackJsonp@react-easy-diagram/demo"]||[]).push([[0],{58:function(t,e,n){},59:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var o=n(11),r=n(0),i=n.n(r),a=n(9),s=n.n(a),c=(n(58),n(59),n(101)),u=n(33),d=n(8),l=n(103),f=function(){return(f=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},h=function(t){var e=t.diagramOffset,n=t.diagramZoom,o=t.settings;return o=null!==o&&void 0!==o?o:p,i.a.createElement("div",{className:"react_fast_diagram_Background_Default",style:{backgroundColor:o.color,backgroundImage:o.imageCreator(100*n,100*n),backgroundPosition:e[0]+"px "+e[1]+"px"}})},p={imageCreator:function(t,e){return"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"},color:"#ececec"},v=function(t){var e=Object(r.useState)(0),n=(e[0],e[1]),o=Object(r.useState)((function(){return{value:t,facade:{get current(){return o.value},set current(t){o.value!==t&&(o.value=t,n((function(t){return t+1})))}}}}))[0];return o.facade},m=Object(c.a)((function(t){var e=t.link,n=v(null);return i.a.createElement("g",null,i.a.createElement(e.componentDefinition.component,{draggableRef:n,entity:e,settings:e.componentDefinition.settings}))})),g=Object(c.a)((function(t){var e=t.linksStore;return i.a.createElement("svg",null,Object.values(e.links).map((function(t){return i.a.createElement(m,{key:t.id,link:t})})),i.a.createElement(m,{key:"__creation__",link:e.linkCreation}))}));function b(t,e,n,o){return Object(r.useMemo)((function(){return{onDrag:function(o){var r=o.pinching,i=o.delta;if(t.current&&!r){var a=n?n():1;e.setOffset([e.offset[0]+i[0]/a,e.offset[1]+i[1]/a])}},onDragStart:function(e){var n=e.event;o&&o(n)||(t.current=!0)},onDragEnd:function(){return t.current=!1}}}),[t,e,n,o])}var _="react_fast_diagram_disabled_user_select";function y(t,e){Object(r.useEffect)((function(){if(t&&e&&!e.classList.contains(_))return e.classList.add(_),function(){e.classList.remove(_)}}),[t,e])}var S=Object(c.a)((function(t){var e=t.node,n=function(t,e){var n,o,i=bt().diagramState,a=v(!1),s=Object(r.useRef)(null),c=b(a,t,(function(){return i.zoom}),(function(t){return function(t,e){if("composedPath"in t)for(var n=t.composedPath(),o=0;o<n.length;o++){var r=n[o];if("classList"in r&&r.classList.contains(e))return!0}return!1}(t,"react_fast_diagram_PortWrapper")}));return Object(u.a)(c,{domTarget:s,eventOptions:{passive:!1},enabled:e}),y(a.current,null===(o=null===(n=s.current)||void 0===n?void 0:n.ownerDocument)||void 0===o?void 0:o.body),{active:a.current,userInteractionElemRef:s}}(e).userInteractionElemRef;return i.a.createElement("div",{id:e.id,className:"react_fast_diagram_NodeWrapper",style:{left:e.offset[0],top:e.offset[1]},ref:e.ref},i.a.createElement(e.componentDefinition.component,{draggableRef:n,entity:e,settings:e.componentDefinition.settings}))})),C=Object(c.a)((function(t){var e=t.nodesStore;return i.a.createElement("div",null,Object.values(e.nodes).map((function(t){return i.a.createElement(S,{key:t.id,node:t})})))})),k=function(t,e){var n="translate("+t[0]+"px, "+t[1]+"px)";return e?n+" "+("scale("+e+")"):n},O=function(t){return[Math.round(t[0]),Math.round(t[1])]},j=function(t,e){return[t[0]+e[0],t[1]+e[1]]},z=function(t,e){return[t[0]-e[0],t[1]-e[1]]},x=function(t,e){return[t[0]*e,t[1]*e]};function I(t,e){return Math.min(Math.max(t,e[0]),e[1])}var w=function(t){var e,n,o=bt().diagramState,i=v(!1),a=Object(r.useCallback)((function(t){return t.target!==o.diagramInnerRef.current}),[o.diagramInnerRef]),s=b(i,o,void 0,a),c=function(t,e,n,o){var i=Object(r.useRef)({distance:0,origin:[0,0]});return Object(r.useMemo)((function(){return{onPinch:function(o){var r=o.da[0],a=o.origin;if(e.current&&t.current){var s=z(a,i.current.origin),c=t.current.getBoundingClientRect(),u=z(a,[c.left,c.top]);n.tranlsateAndZoomInto(s,u,r/i.current.distance),i.current={distance:r,origin:a}}},onPinchStart:function(t){var n=t.da[0],r=t.origin,a=t.event;o&&o(a)||(i.current={distance:n,origin:r},e.current=!0)},onPinchEnd:function(){return e.current=!1}}}),[t,e,n,o])}(o.diagramInnerRef,i,o,a),d=function(t,e,n){return Object(r.useMemo)((function(){return{onWheel:function(e){var o=e.direction,r=(o[0],o[1]),i=e.event,a=i.clientX,s=i.clientY;if(t.current){var c=t.current.getBoundingClientRect(),u=z([a,s],[c.left,c.top]),d=.9;r<0&&(d=1/d),n.tranlsateAndZoomInto([0,0],u,d)}}}}),[t,e,n])}(o.diagramInnerRef,i,o);return Object(u.a)(f(f(f({},s),c),d),{domTarget:o.diagramInnerRef,eventOptions:{passive:!1},enabled:t}),y(i.current,null===(n=null===(e=o.diagramInnerRef.current)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.body),{transform:o.transformString,active:i.current}},E=Object(c.a)((function(){var t=bt(),e=t.diagramSettings,n=t.diagramApi;return e.miniControlComponentState.component&&i.a.createElement(e.miniControlComponentState.component,{diagramApi:n,settings:e.miniControlComponentState.settings})})),P=Object(c.a)((function(t){var e=bt(),n=w().transform;return i.a.createElement("div",{ref:e.diagramState.diagramInnerRef,style:f({},t.diagramStyles),className:"react_fast_diagram_DiagramInner"},i.a.createElement(_t,null),i.a.createElement("div",{className:"react_fast_diagram_DiagramInner_DraggablePart",style:{transform:n}},i.a.createElement(g,{linksStore:e.linksStore}),i.a.createElement(C,{nodesStore:e.nodesStore})),i.a.createElement(E,null))}));P.displayName="InnerDiagram";!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!==typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}(".react_fast_diagram_DiagramInner {\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n  position: relative;\n  overflow: hidden;\n  touch-action: none;\n}\n\n.react_fast_diagram_DiagramInner * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.react_fast_diagram_DiagramInner_DraggablePart {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: visible;\n  transform-origin: 0px 0px;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  /* useGestures hook use targetTouches instead of simply touches, \n  so we should set this property to Movable, otherwise if user put \n  one finger above Movable and another above DiagramInner, the hook \n  will not trigger pinch gesture */\n  pointer-events: none; \n}\n\n.react_fast_diagram_DiagramInner_DraggablePart > * {\n  overflow: visible;\n}\n\n.react_fast_diagram_NodeWrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; \n  height: -webkit-fit-content; \n  height: -moz-fit-content; \n  height: fit-content;\n  pointer-events: auto; \n  -webkit-user-select: none; \n     -moz-user-select: none; \n      -ms-user-select: none; \n          user-select: none;\n}\n\n.react_fast_diagram_Node_Default {\n  min-width: 100px;\n  min-height: 100px;\n  background-color: white;\n  border: 2px solid WhiteSmoke;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: auto;\n}\n\n.react_fast_diagram_PortContainer_Default {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.react_fast_diagram_PortContainer_Default_Horizontal > * {\n  margin: 0 5px;\n}\n\n.react_fast_diagram_PortContainer_Default_Vertical > * {\n  margin: 5px 0;\n}\n\n.react_fast_diagram_PortContainer_Default_Horizontal {\n  flex-direction: row;\n  width: 100%;\n}\n\n.react_fast_diagram_PortContainer_Default_Vertical {\n  flex-direction: column;\n  height: 100%;\n}\n\n.react_fast_diagram_Node_Default > * {\n  text-align: center;\n  margin: auto;\n}\n\n.react_fast_diagram_disabled_user_select {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.react_fast_diagram_Port_Default {\n  height: 25px;\n  width: 25px;\n  border-color: wheat;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.react_fast_diagram_BackgroundWrapper {\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n}\n\n.react_fast_diagram_Background_Default {\n  height: 100%;\n  width: 100%;\n}\n\n.react_fast_diagram_Minicontrol_Default {\n  position: absolute;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n\n.react_fast_diagram_Minicontrol_Default_Btn {\n  background-color: white;\n  border: 1px solid rgb(209, 209, 209);\n  letter-spacing: normal;\n  display: inline-flex;\n  text-align: center;\n  align-items: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-weight: bold;\n}\n\n.react_fast_diagram_Minicontrol_Default_Btn > * {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n@media (hover: hover) {\n  .react_fast_diagram_Minicontrol_Default_Btn:hover {\n    background-color: rgb(228, 228, 228);\n    border: 1px solid rgb(209, 209, 209)\n  }\n}\n\n/* Containers with gap between items */\n\n.react_fast_diagram_flex_gap {\n  --gap: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.react_fast_diagram_flex_gap_y {\n  flex-direction: column;\n  height: 100%;\n}\n\n.react_fast_diagram_flex_gap_y > * {\n  margin: var(--gap) 0 0 0;\n}\n\n.react_fast_diagram_flex_gap_y > :first-child {\n  margin: 0;\n}\n\n.react_fast_diagram_flex_gap_x {\n  flex-direction: row;\n  width: 100%;\n}\n\n.react_fast_diagram_flex_gap_x > * {\n  margin: 0 0 0 var(--gap);\n}\n\n.react_fast_diagram_flex_gap_x > :first-child {\n  margin: 0;\n}\n\n/* Containers with gap between items */");var L=function(t){var e=this;this.setCallbacks=function(t){e.validateLinkEndpoints=null===t||void 0===t?void 0:t.validateLinkEndpoints},this.rootStore=t},N=function(t){var e=this;this.addNode=function(t){e.rootStore.nodesStore.addNode(t)},this.reinitState=function(t,n){e.rootStore.nodesStore.importState(t),e.rootStore.linksStore.importState(n)},this.reinitSettings=function(t){e.rootStore.diagramSettings.fromJson(t.diagram),e.rootStore.nodesSettings.fromJson(t.nodes),e.rootStore.linksSettings.fromJson(t.links),e.rootStore.portsSettings.fromJson(t.ports),e.rootStore.callbacks.setCallbacks(t.callbacks)},this.zoomIn=function(){return e.rootStore.diagramState.zoomIntoCenter(1.25)},this.zoomOut=function(){return e.rootStore.diagramState.zoomIntoCenter(.8)},this.recalculatePortPosition=function(){},this.rootStore=t};function D(t,e,n,o,r){if(!t||!e)return"";t=O(t),e=O(e);var i,a,s=t[0]+", "+t[1],c=e[0]+", "+e[1],u=r.tweakDirectionFactorBasedOnDistance((i=t,a=e,Math.sqrt(Math.pow(i[0]-a[0],2)+Math.pow(i[1]-a[1],2))),r.directionFactor);function d(t,e){switch(e&&r.portTypeToLinkDirectionMapping[e]){case"left":return t[0]-u+", "+t[1];case"up":return t[0]+", "+(t[1]-u);case"right":return t[0]+u+", "+t[1];case"down":return t[0]+", "+(t[1]+u);default:return t[0]+", "+t[1]}}return n||o?"M "+s+" C "+d(t,n)+" "+d(e,o)+", "+c:"M "+s+" Q "+e[0]+", "+t[1]+", "+c}var T={portTypeToLinkDirectionMapping:{left:"left",right:"right",top:"up",bottom:"down"},directionFactor:60,tweakDirectionFactorBasedOnDistance:function(t,e){return t<100?e*(t/100):e}};function R(t){return function(e,n,o,r){return D(e,n,o,r,t?f(f({},T),t):T)}}var M=function(){function t(t){var e=this;this.offsetRelativeToParent=function(t){if(e.current){for(var n=e.current,o=0,r=0;t!==n&&n;)o+=n.offsetLeft,r+=n.offsetTop,n=n.parentElement;return[o,r]}return null},this.currentInternal=t,Object(d.c)(this)}return Object.defineProperty(t.prototype,"current",{get:function(){return this.currentInternal},set:function(t){this.currentInternal=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"realSize",{get:function(){return this.current?[this.current.clientWidth,this.current.clientHeight]:null},enumerable:!1,configurable:!0}),t}(),B=function(){function t(t){var e=this;this.offset=[0,0],this.zoom=1,this.setOffset=function(t){e.offset=t},this.setZoom=function(t){e.zoom=I(t,e.rootStore.diagramSettings.scaleInterval)},this.setTransformation=function(t,n){e.setOffset(t),e.setZoom(n)},this.zoomInto=function(t,n){var o=I(e.zoom*n,e.rootStore.diagramSettings.scaleInterval),r=x(z(t,e.offset),o/e.zoom);e.setTransformation(z(t,r),o)},this.translate=function(t){e.setOffset(j(e.offset,t))},this.tranlsateAndZoomInto=function(t,n,o){e.translate(t),e.zoomInto(n,o)},this.zoomIntoCenter=function(t){var n=e.diagramInnerRef.realSize;n&&e.rootStore.diagramState.zoomInto(x(n,.5),t)},this.diagramInnerRef=new M(null),Object(d.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"transformString",{get:function(){return k(this.offset,this.zoom)},enumerable:!1,configurable:!0}),t}(),V=function(t){var e=this;this.translateBy=function(t){e.point=j(e.point,t)},this.point=t,Object(d.c)(this)},J=function(){function t(t){var e=this;this.source=null,this.target=null,this.targetPortCandidate=null,this.startLinking=function(t,n){var o;if(e.resetProps(),e.source=new H(t.nodeId,t.id,e.rootStore),t.offsetRelativeToNode&&n)o=j(j(t.offsetRelativeToNode,t.node.offset),n);else{var r=e.source.point;if(!r)return e.resetProps(),!1;o=r}return e.target=new V(o),!0},this.setTargetPortCandidate=function(t){if(e.source){var n=e.rootStore.linksStore.canAddLink({source:{nodeId:e.source.nodeId,portId:e.source.portId},target:{nodeId:t.nodeId,portId:t.id}});e.targetPortCandidate=t,n.result?t.validForConnection=!0:t.validForConnection=!1}},this.resetTargetPortCandidate=function(t){e.targetPortCandidate===t&&(e.targetPortCandidate=null),t.validForConnection=!0},this.stopLinking=function(){e.targetPortCandidate&&e.source&&e.rootStore.linksStore.addLink({source:{nodeId:e.source.nodeId,portId:e.source.portId},target:{nodeId:e.targetPortCandidate.nodeId,portId:e.targetPortCandidate.id}}),e.resetProps()},this.resetProps=function(){e.source&&(e.source.port.validForConnection=!0,e.source=null),e.target=null,e.targetPortCandidate&&(e.targetPortCandidate.validForConnection=!0,e.targetPortCandidate=null)},Object(d.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"componentDefinition",{get:function(){return this.rootStore.linksSettings.visualComponents.getComponent(F)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"path",{get:function(){return this.source&&this.target?U(this.rootStore,this.source,this.target):void 0},enumerable:!1,configurable:!0}),t}(),F="linkCreation",H=function(){function t(t,e,n){var o=this;this.fromJson=function(t){o.nodeId=t.nodeId,o.portId=t.portId},this.nodeId=t,this.portId=e,n.nodesStore.getNodeOrThrowException(this.nodeId).getPortOrThrowException(this.portId),Object(d.c)(this),this.rootStore=n}return Object.defineProperty(t.prototype,"node",{get:function(){return this.rootStore.nodesStore.getNodeOrThrowException(this.nodeId)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"port",{get:function(){return this.node.getPortOrThrowException(this.portId)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"point",{get:function(){if(this.port.offsetRelativeToNode&&this.port.realSize)return j(this.node.offset,j(this.port.offsetRelativeToNode,x(this.port.realSize,.5)))},enumerable:!1,configurable:!0}),t}();function A(t,e){return t.nodeId===e.nodeId&&t.portId===e.portId}var W=function(t){var e,n=null!==(e=t.settings)&&void 0!==e?e:Z,o=t.entity.path;return o?i.a.createElement("g",null,i.a.createElement("path",{ref:t.draggableRef,d:o.svgPath,stroke:n.color,strokeWidth:n.strokeWidth,fill:"none"}),t.entity instanceof J&&i.a.createElement("circle",{cx:o.target[0],cy:o.target[1],r:n.cirleRadius,fill:"orange"})):null},Z={color:"LightBlue",strokeWidth:3,cirleRadius:3};function X(t){var e=f(f({},Z),t||{});return{component:W,settings:e}}var Y=function(){function t(t){var e=this;this.defaultType=G,this.fromJson=function(t){var n;e.defaultType=null!==(n=null===t||void 0===t?void 0:t.defaultNodeType)&&void 0!==n?n:G,e.components=f(f({},e.defaultComponents),e.createComponentCollection(null===t||void 0===t?void 0:t.components))},this.getComponent=function(t){var n,o=null!==t&&void 0!==t?t:e.defaultType;return null!==(n=e.components[o])&&void 0!==n?n:e.components[e.defaultType]},this.defaultComponents=this.createComponentCollection(t),this.components=f({},this.defaultComponents),Object(d.c)(this)}return t.prototype.createComponentCollection=function(t){var e={};return t&&Object.entries(t).forEach((function(t){var n=t[0],o=t[1];e[n]=new lt(o)})),e},t}(),G="default",q=function(){var t,e=this;this.pathConstructor=Q,this.visualComponents=new Y(((t={})[G]=W,t[F]=X({color:"#49f860",strokeWidth:3}),t)),this.fromJson=function(t){var n;e.visualComponents.fromJson(t),e.pathConstructor=null!==(n=null===t||void 0===t?void 0:t.pathConstructor)&&void 0!==n?n:Q},Object(d.c)(this)},Q=R(),K=function(){function t(t,e,n){var o=this;this.importState=function(t){var e,n,r;o.source=o.createEndpointState(t.source),o.target=o.createEndpointState(t.target),o.componentType=null!==(e=t.componentType)&&void 0!==e?e:G,o.segments=null!==(n=t.segments)&&void 0!==n?n:[],o.extra=null!==(r=t.extra)&&void 0!==r?r:null},this.createEndpointState=function(t){return new H(t.nodeId,t.portId,o.rootStore)},this.rootStore=t,this.id=e,this.importState(n),Object(d.c)(this,{rootStore:!1})}return Object.defineProperty(t.prototype,"path",{get:function(){return U(this.rootStore,this.source,this.target)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"componentDefinition",{get:function(){return this.rootStore.linksSettings.visualComponents.getComponent(this.componentType)},enumerable:!1,configurable:!0}),t}();function U(t,e,n){var o=t.linksSettings;if(e.point&&n.point)return{svgPath:o.pathConstructor(e.point,n.point,e.port.type,n instanceof V?void 0:n.port.type),source:e.point,target:n.point}}var $=function(){function t(t){var e=this;this.importState=function(t){e._links={},e._nodesLinksCollection={},t&&t.forEach(e.addLink)},this.getNodeLinks=function(t){var n;return null!==(n=e._nodesLinksCollection[t])&&void 0!==n?n:[]},this.removeNodeLinks=function(t){e.getNodeLinks(t).forEach((function(t){return e.removeLink(t.id)}))},this.removePortLinks=function(t,n){if(t&&n){var o=e.getNodeLinks(t),r={nodeId:t,portId:n};o.forEach((function(t){(A(t.source,r)||A(t.target,r))&&e.removeLink(t.id)}))}},this.addLink=function(t){var n,o=e.canAddLink(t);if(!o.result)return o;var r=new K(e.rootStore,null!==(n=t.id)&&void 0!==n?n:Object(l.a)(),t);return e._links[r.id]=r,e._addLinkToNodeLinksCollection(r,t.source.nodeId),e._addLinkToNodeLinksCollection(r,t.target.nodeId),{result:!0}},this.removeLink=function(t){var n=e._links[t];return!!n&&(e._removeLinkFromNodeLinksCollection(n,n.source.nodeId),e._removeLinkFromNodeLinksCollection(n,n.target.nodeId),delete e._links[t],!0)},this.canAddLink=function(t){var n,o;if(!t)return{result:!1,error:"Cannot add empty"};if(t.id&&e._links[t.id])return{result:!1,error:"Cannot add link with id '"+t.id+"', as it already exists"};var r=e.isEndpointValid(t.source);if(!r.result)return r;var i=e.isEndpointValid(t.target);return i.result?t.source.nodeId===t.target.nodeId?{result:!1,error:"Link's endpoints are located in the same node"}:e.areEndpointsConnected(t.source,t.target)?{result:!1,error:"Link's endpoints are already connected"}:!1===(null===(o=(n=e.rootStore.callbacks).validateLinkEndpoints)||void 0===o?void 0:o.call(n,e.getEndpointPort(t.source),e.getEndpointPort(t.target),e.rootStore))?{result:!1,error:"Link's endpoints are not valid according to validation callback"}:{result:!0}:i},this.isEndpointValid=function(t){try{e.getEndpointPort(t)}catch(n){return{result:!1,error:""+n}}return{result:!0}},this.getEndpointPort=function(t){return e.rootStore.nodesStore.getNodeOrThrowException(t.nodeId).getPortOrThrowException(t.portId)},this.areEndpointsConnected=function(t,n){return!!e.getLinkForEndpointsIfExists(t,n)},this.linkCreation=new J(t),this.importState(),Object(d.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"links",{get:function(){return this._links},enumerable:!1,configurable:!0}),t.prototype.getLinkForEndpointsIfExists=function(t,e){if(this._nodesLinksCollection[t.nodeId])return this._nodesLinksCollection[t.nodeId].find((function(n){return A(n.source,t)&&A(n.target,e)||A(n.target,t)&&A(n.source,e)}))},t.prototype._addLinkToNodeLinksCollection=function(t,e){this._nodesLinksCollection[e]||(this._nodesLinksCollection[e]=[]),this._nodesLinksCollection[e].push(t)},t.prototype._removeLinkFromNodeLinksCollection=function(t,e){var n=this._nodesLinksCollection[e];n&&((n=n.filter((function(e){return e.id===t.id}))).length>0?this._nodesLinksCollection[e]=n:delete this._nodesLinksCollection[e])},t}(),tt=function(t){var e=t.entity,n=t.settings,o=t.draggableRef,r=bt().portsSettings;return i.a.createElement("div",{ref:o,className:"react_fast_diagram_Node_Default",style:null===n||void 0===n?void 0:n.style},i.a.createElement("span",null,e.id),et(r,e.ports,"left","left"),et(r,e.ports,"top","top"),et(r,e.ports,"right","right"),et(r,e.ports,"bottom","bottom"))};function et(t,e,n,o){var r=Object.values(e).filter((function(t){return t.type===n})),a=t.portsContainerVisualComponents.getComponent("left"===o||"right"===o?"vertical":"horizontal");return r&&i.a.createElement("div",{style:{position:"absolute",left:"left"===o?0:void 0,top:"left"===o||"right"===o||"top"===o?0:void 0,right:"right"===o?0:void 0,bottom:"bottom"===o?0:void 0,height:"left"===o||"right"===o?"100%":void 0,width:"top"===o||"bottom"===o?"100%":void 0}},i.a.createElement(a.component,{entity:r,settings:a.settings}))}var nt=function(){var t,e=this;this.visualComponents=new Y(((t={})[G]=tt,t)),this.fromJson=function(t){e.visualComponents.fromJson(t)},Object(d.c)(this)},ot=function(){function t(t,e,n,o){var r=this;this.ref=new M(null),this.dragging=!1,this.hovered=!1,this.validForConnection=!0,this.importState=function(t){var e,n;r.type=null!==(e=null===t||void 0===t?void 0:t.type)&&void 0!==e?e:G,r.label=null!==(n=null===t||void 0===t?void 0:t.label)&&void 0!==n?n:""},this.hover=function(){r.hovered=!0},this.stopHover=function(){r.hovered=!1},this.drag=function(){r.dragging=!0},this.stopDrag=function(){r.dragging=!1},this.id=e,this.nodeId=n,this.importState(o),Object(d.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"node",{get:function(){return this.rootStore.nodesStore.getNodeOrThrowException(this.nodeId)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"offsetRelativeToNode",{get:function(){return this.node.ref.current?this.ref.offsetRelativeToParent(this.node.ref.current):null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"realSize",{get:function(){return this.ref.realSize},enumerable:!1,configurable:!0}),t}(),rt=function(){function t(t,e,n){var o=this;this.setOffset=function(t){o.offset=t},this.importState=function(t){var e,n,r;o.offset=null!==(e=null===t||void 0===t?void 0:t.position)&&void 0!==e?e:[0,0],o.componentType=null!==(n=null===t||void 0===t?void 0:t.componentType)&&void 0!==n?n:G,o.extra=null!==(r=null===t||void 0===t?void 0:t.extra)&&void 0!==r?r:null,o._ports={},(null===t||void 0===t?void 0:t.ports)&&t.ports.forEach(o.addPort)},this.getPort=function(t){return t&&o._ports[t]?o._ports[t]:void 0},this.addPort=function(t){var e;if(!t||t.id&&o._ports[t.id])return!1;var n=new ot(o.rootStore,null!==(e=t.id)&&void 0!==e?e:Object(l.a)(),o.id,t);return o._ports[n.id]=n,!0},this.removePort=function(t){return!(!t||!o._ports[t])&&(delete o._ports[t],o.rootStore.linksStore.removePortLinks(o.id,t),!0)},this.getPortOrThrowException=function(t){var e=o.getPort(t);if(e)return e;throw"Port with id '"+t+"' does not exist in the node '"+o.id+"'"},this.rootStore=t,this.id=e,this.ref=new M(null),this.importState(n),Object(d.c)(this,{rootStore:!1})}return Object.defineProperty(t.prototype,"ports",{get:function(){return this._ports},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"transformString",{get:function(){return k(this.offset)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"componentDefinition",{get:function(){return this.rootStore.nodesSettings.visualComponents.getComponent(this.componentType)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"realSize",{get:function(){return this.ref.realSize},enumerable:!1,configurable:!0}),t}(),it=function(){function t(t){var e=this;this._nodes={},this.importState=function(t){e._nodes={},null===t||void 0===t||t.forEach(e.addNode)},this.addNode=function(t){var n;if(!t||t.id&&e._nodes[t.id])return!1;var o=new rt(e.rootStore,null!==(n=t.id)&&void 0!==n?n:Object(l.a)(),t);return e._nodes[o.id]=o,!0},this.removeNode=function(t){return!(!t||!e._nodes[t])&&(delete e._nodes[t],e.rootStore.linksStore.removeNodeLinks(t),!0)},this.getNode=function(t){return t&&e._nodes[t]?e._nodes[t]:void 0},this.getNodeOrThrowException=function(t){var n=e.getNode(t);if(n)return n;throw"Node with id '"+t+"' does not exist"},Object(d.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"nodes",{get:function(){return this._nodes},enumerable:!1,configurable:!0}),t}(),at=Object(c.a)((function(t){var e=t.port,n=function(t,e){var n,o,i=bt(),a=i.linksStore.linkCreation,s=i.diagramState,c=Object(r.useRef)(null);return Object(u.a)({onDrag:function(e){var n,o=e.delta;if(t.dragging){var r=s.zoom;null===(n=a.target)||void 0===n||n.translateBy(x(o,1/r))}},onDragStart:function(e){var n,o=e.event;o.target.releasePointerCapture(o.pointerId),"offsetX"in o&&"offsetY"in o&&(n=[o.offsetX,o.offsetY]),a.startLinking(t,n)&&t.drag()},onDragEnd:function(){t.stopDrag(),a.stopLinking()},onPointerEnter:function(){t.hover(),a.setTargetPortCandidate(t)},onPointerLeave:function(){t.stopHover(),a.resetTargetPortCandidate(t)}},{domTarget:c,eventOptions:{passive:!1},enabled:e}),y(t.dragging,null===(o=null===(n=c.current)||void 0===n?void 0:n.ownerDocument)||void 0===o?void 0:o.body),{active:t.dragging,userInteractionElemRef:c}}(e).userInteractionElemRef,o="#6eb7ff";return e.dragging||e.hovered&&e.validForConnection?o="#49f860":e.hovered&&!e.validForConnection&&(o="#fa4040"),i.a.createElement("div",{ref:{set current(t){n.current=t,e.ref.current=t}},id:e.nodeId+":"+e.id,className:"react_fast_diagram_PortWrapper"},i.a.createElement("div",{style:{width:10,height:10,backgroundColor:o}}))})),st=function(t){var e=t.entity,n=t.settings,o=f(f({},ut),n),r="react_fast_diagram_flex_gap ";return"horizontal"===o.direction?r+="react_fast_diagram_flex_gap_x":r+="react_fast_diagram_flex_gap_y",i.a.createElement("div",{className:r,style:{"--gap":o.gapBetweenPorts}},Object.values(e).map((function(t){return i.a.createElement(at,{key:t.id,port:t})})))};function ct(t){return{component:st,settings:f(f({},ut),t)}}var ut={direction:"horizontal",gapBetweenPorts:"8px"},dt=function(){var t=this;this.portsContainerVisualComponents=new Y({horizontal:ct({direction:"horizontal"}),vertical:ct({direction:"vertical"})}),this.fromJson=function(e){t.portsContainerVisualComponents.fromJson(null===e||void 0===e?void 0:e.portsContainerComponents)},Object(d.c)(this)},lt=function(){function t(t){this.settings={},this.fromJson(t),Object(d.c)(this)}return t.prototype.fromJson=function(t){var e;"component"in t?(this.component=Object(c.a)(t.component),this.settings=null!==(e=t.settings)&&void 0!==e?e:{}):(this.component=Object(c.a)(t),this.settings={})},t}(),ft=function(){function t(t){this._innerComponent=new lt(t),this._defaultComponent=this._innerComponent,Object(d.c)(this)}return Object.defineProperty(t.prototype,"component",{get:function(){return this._innerComponent.component},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"settings",{get:function(){return this._innerComponent.settings},enumerable:!1,configurable:!0}),t.prototype.fromJson=function(t){this._innerComponent=t?new lt(t):this._defaultComponent},t}(),ht=function(){function t(){this.scaleInterval=pt,this.backgroundComponentState=new ft(function(t){var e=f(f({},p),t||{});return{component:h,settings:e}}()),this.miniControlComponentState=new ft(kt()),Object(d.c)(this)}return t.prototype.fromJson=function(t){var e;this.backgroundComponentState.fromJson(null===t||void 0===t?void 0:t.backgroundComponent),this.miniControlComponentState.fromJson(null===t||void 0===t?void 0:t.miniControlComponent),this.scaleInterval=null!==(e=null===t||void 0===t?void 0:t.scaleInterval)&&void 0!==e?e:pt},t}(),pt=[.1,3],vt=function(){this.diagramState=new B(this),this.nodesStore=new it(this),this.linksStore=new $(this),this.diagramSettings=new ht,this.nodesSettings=new nt,this.linksSettings=new q,this.portsSettings=new dt,this.diagramApi=new N(this),this.callbacks=new L(this)},mt=i.a.createContext(null),gt=function(t){var e=Object(r.useMemo)((function(){var e,n,o,r,i=new vt;return t.settings&&i.diagramApi.reinitSettings(t.settings),i.diagramApi.reinitState(null!==(n=null===(e=t.initState)||void 0===e?void 0:e.nodes)&&void 0!==n?n:[],null!==(r=null===(o=t.initState)||void 0===o?void 0:o.links)&&void 0!==r?r:[]),i}),[]);return Object(r.useEffect)((function(){t.apiRef&&(t.apiRef.current=e.diagramApi)}),[e,t.apiRef]),i.a.createElement(mt.Provider,{value:e},i.a.createElement(P,null))};gt.displayName="Diagram";var bt=function(){return Object(r.useContext)(mt)},_t=Object(c.a)((function(){var t=bt(),e=t.diagramSettings,n=t.diagramState;return i.a.createElement("div",{className:"react_fast_diagram_BackgroundWrapper"},i.a.createElement(e.backgroundComponentState.component,{diagramOffset:n.offset,diagramZoom:n.zoom,settings:e.backgroundComponentState.settings}))})),yt=function(t){var e=t.diagramApi,n=t.settings;return n=null!==n&&void 0!==n?n:Ot,i.a.createElement("div",{className:"react_fast_diagram_Minicontrol_Default",style:f(f({},St(n)),null===n||void 0===n?void 0:n.containerStyle)},n.buttons.zoomIn&&i.a.createElement(Ct,{size:n.buttonsSize,onClick:e.zoomIn,children:"+"}),n.buttons.zoomOut&&i.a.createElement(Ct,{size:n.buttonsSize,onClick:e.zoomOut,children:"-"}))};function St(t){return{top:"left-top"==t.position||"right-top"==t.position?t.parentOffset:void 0,right:"right-bottom"==t.position||"right-top"==t.position?t.parentOffset:void 0,bottom:"left-bottom"==t.position||"right-bottom"==t.position?t.parentOffset:void 0,left:"left-top"==t.position||"left-bottom"==t.position?t.parentOffset:void 0}}var Ct=function(t){return i.a.createElement("div",{onClick:t.onClick,className:"react_fast_diagram_Minicontrol_Default_Btn",style:{width:t.size+"px",height:t.size+"px"}},i.a.createElement("span",null,t.children))},kt=function(t){var e=f(f({},Ot),t||{});return{component:yt,settings:e}},Ot={position:"left-bottom",containerStyle:{},buttonsSize:30,buttons:{zoomIn:!0,zoomOut:!0},parentOffset:20},jt=n(93),zt=n(100),xt=n(34),It=n(104),wt=n(95),Et=n(102),Pt=n(98),Lt=n(99),Nt=Object(jt.a)((function(){return{form:{display:"flex",flexDirection:"column",margin:"-8px 0","& > *":{margin:"8px 0"}},visibilityBtn:{borderRadius:"25px",minWidth:"24px",padding:"8px 8px",backgroundColor:"white"},header:{marginBottom:"15px",display:"flex",alignItems:"center",margin:"0 -14px","& > *":{margin:"0 14px"}}}})),Dt=function(t){var e=Nt(),n=Object(r.useState)(10),i=Object(xt.a)(n,2),a=i[0],s=i[1],c=Object(r.useState)(10),u=Object(xt.a)(c,2),d=u[0],l=u[1],f=Object(r.useState)(!1),h=Object(xt.a)(f,2),p=h[0],v=h[1];return p?Object(o.jsx)(zt.a,{padding:3,clone:!0,children:Object(o.jsxs)(wt.a,{children:[Object(o.jsxs)("div",{className:e.header,children:[Object(o.jsx)(Et.a,{className:e.visibilityBtn,variant:"outlined","aria-label":"control-panel",onClick:function(){return v(!1)},children:Object(o.jsx)(It.a,{})}),Object(o.jsx)(Pt.a,{variant:"h5",children:"Control Panel"})]}),Object(o.jsxs)("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:function(e){if(e.preventDefault(),t.reinitState){var n=function(t,e){for(var n=[],o=[],r=function(t,e){return"node_".concat(t,"_").concat(e)},i=0;i<t;i++)for(var a=0;a<e;a++)n.push({id:r(i,a),position:[120*i,120*a],ports:[{id:"left",type:"left"},{id:"top",type:"top"},{id:"right",type:"right"},{id:"bottom",type:"bottom"}]}),i-1>=0&&o.push({source:{nodeId:r(i-1,a),portId:"right"},target:{nodeId:r(i,a),portId:"left"}}),a-1>=0&&o.push({source:{nodeId:r(i,a-1),portId:"bottom"},target:{nodeId:r(i,a),portId:"top"}});return{nodes:n,links:o}}(a,d);t.reinitState(n.nodes,n.links)}},children:[Object(o.jsx)(Lt.a,{id:"rows",value:a,type:"number",label:"Rows",variant:"outlined",onChange:function(t){return s(parseInt(t.target.value))}}),Object(o.jsx)(Lt.a,{id:"columns",value:d,type:"number",label:"Columns",variant:"outlined",onChange:function(t){return l(parseInt(t.target.value))}}),Object(o.jsx)(Et.a,{variant:"contained",type:"submit",children:"Generate new Diagram"})]})]})}):Object(o.jsx)(Et.a,{variant:"outlined",className:e.visibilityBtn,"aria-label":"control-panel",onClick:function(){return v(!0)},children:Object(o.jsx)(It.a,{})})},Tt=Object(jt.a)((function(){return{diagram:{position:"fixed",top:0,bottom:0,right:0,left:0},controlPanel:{position:"absolute",top:"20px",left:"20px"}}})),Rt=function(){var t,e=Tt(),n=function(t,e){var n=v(null);return Object(r.useMemo)((function(){return{Diagram:function(){return i.a.createElement(gt,{apiRef:n,initState:t,settings:e})},apiRef:n}}),[])}(Mt,{links:{components:{default:X(),attention:X({color:"red"})},pathConstructor:R()},diagram:{miniControlComponent:kt({buttonsSize:30,position:"left-bottom"})}}),a=n.Diagram,s=n.apiRef;return Object(o.jsxs)(zt.a,{className:e.diagram,children:[Object(o.jsx)(a,{}),Object(o.jsx)(zt.a,{className:e.controlPanel,children:Object(o.jsx)(Dt,{reinitState:null===(t=s.current)||void 0===t?void 0:t.reinitState})})]})},Mt={nodes:[{id:"Node 1",position:[300,300],ports:[{id:"output_1",type:"bottom"}]},{id:"Node 2",position:[520,400],ports:[{id:"input_1",type:"top"},{id:"input_2",type:"top"},{id:"output_1",type:"right"},{id:"output_2",type:"right"},{id:"output_3",type:"right"}]},{id:"Node 3",position:[520,200],ports:[{id:"input_1",type:"top"},{id:"output_1",type:"bottom"},{id:"output_2",type:"bottom"}]}],links:[{source:{nodeId:"Node 1",portId:"output_1"},target:{nodeId:"Node 2",portId:"input_1"},componentType:"attention"}]};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(Rt,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.be163748.chunk.js.map