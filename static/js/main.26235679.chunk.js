(this["webpackJsonp@react-easy-diagram/demo"]=this["webpackJsonp@react-easy-diagram/demo"]||[]).push([[0],{60:function(t,e,n){},61:function(t,e,n){},63:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var o=n(11),r=n(0),i=n.n(r),a=n(9),s=n.n(a),c=(n(60),n(61),n(102)),u=function(t){var e=Object(r.useState)(0),n=(e[0],e[1]),o=Object(r.useState)((function(){return{value:t,facade:{get current(){return o.value},set current(t){o.value!==t&&(o.value=t,n((function(t){return t+1})))}}}}))[0];return o.facade},h=Object(c.a)((function(t){var e=t.link,n=u(null),o=e.componentDefinition.component;return i.a.createElement("g",null,i.a.createElement(o,{draggableRef:n,path:e.path,entity:e,settings:e.componentDefinition.settings}))})),l=Object(c.a)((function(t){var e=t.linksStore;return i.a.createElement("svg",null,Object.values(e.links).map((function(t){return i.a.createElement(h,{key:t.id,link:t})})),e.linkCreation.link&&i.a.createElement(h,{key:e.linkCreation.link.id,link:e.linkCreation.link}))})),v=n(22),d=function(){return Object(r.useContext)(et)};function f(t,e,n,o){return Object(r.useMemo)((function(){return{onDrag:function(o){var r=o.pinching,i=o.delta;if(t.current&&!r){var a=n?n():1;e.setOffset([e.offset[0]+i[0]/a,e.offset[1]+i[1]/a])}},onDragStart:function(e){var n=e.event;o&&o(n)||(t.current=!0)},onDragEnd:function(){return t.current=!1}}}),[t,e,n,o])}var m="react_fast_diagram_disabled_user_select";function p(t,e){Object(r.useEffect)((function(){if(t&&e&&!e.classList.contains(m))return e.classList.add(m),function(){e.classList.remove(m)}}),[t,e])}var g=Object(c.a)((function(t){var e=t.node,n=function(t,e){var n,o,i=d().diagramState,a=u(!1),s=Object(r.useRef)(null),c=f(a,t,(function(){return i.zoom}),(function(t){return function(t,e){if("composedPath"in t)for(var n=t.composedPath(),o=0;o<n.length;o++){var r=n[o];if("classList"in r&&r.classList.contains(e))return!0}return!1}(t,"react_fast_diagram_PortWrapper")}));return Object(v.a)(c,{domTarget:s,eventOptions:{passive:!1},enabled:e}),p(a.current,null===(o=null===(n=s.current)||void 0===n?void 0:n.ownerDocument)||void 0===o?void 0:o.body),{active:a.current,userInteractionElemRef:s}}(e).userInteractionElemRef;return i.a.createElement("div",{id:e.id,className:"react_fast_diagram_NodeWrapper",style:{left:e.offset[0],top:e.offset[1]},ref:e.ref},i.a.createElement(e.componentDefinition.component,{draggableRef:n,entity:e,settings:e.componentDefinition.settings}))})),b=Object(c.a)((function(t){var e=t.nodesStore;return i.a.createElement("div",null,Object.values(e.nodes).map((function(t){return i.a.createElement(g,{key:t.id,node:t})})))})),j=function(t,e){var n="translate("+t[0]+"px, "+t[1]+"px)";return e?n+" "+("scale("+e+")"):n},O=.1,y=function(t,e,n,o,r){r=function(t,e){return e*t<O?O/e:e*t>3?3/e:t}(r,o);var i,a,s,c=t.getBoundingClientRect(),u=e[0]-c.left,h=e[1]-c.top,l=(u-n[0])*(r-1),v=(h-n[1])*(r-1);return{scale:(i=o*r,a=O,s=3,Math.min(Math.max(i,a),s)),position:[n[0]-l,n[1]-v]}};var S=function(t){return[Math.round(t[0]),Math.round(t[1])]},k=function(t,e){return[t[0]+e[0],t[1]+e[1]]};var z=function(){return(z=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},C=function(t){var e,n,o=d().diagramState,i=u(!1),a=Object(r.useRef)(null),s=Object(r.useCallback)((function(t){return t.target!==a.current}),[a]),c=f(i,o,void 0,s),h=function(t,e,n,o){var i=Object(r.useRef)({distance:0,origin:[0,0]});return Object(r.useMemo)((function(){return{onPinch:function(o){var r=o.da[0],a=o.origin;if(e.current&&t.current){var s,c,u=(s=a,c=i.current.origin,[s[0]-c[0],s[1]-c[1]]),h=r-i.current.distance,l=t.current.clientWidth*n.zoom,v=(l+h)/l,d=y(t.current,a,k(n.offset,u),n.zoom,v);i.current={distance:r,origin:a},n.setTransformation(d.position,d.scale)}},onPinchStart:function(t){var n=t.da[0],r=t.origin,a=t.event;o&&o(a)||(i.current={distance:n,origin:r},e.current=!0)},onPinchEnd:function(){return e.current=!1}}}),[t,e,n,o])}(a,i,o,s),l=function(t,e,n){return Object(r.useMemo)((function(){return{onWheel:function(e){var o=e.direction,r=(o[0],o[1]),i=e.event,a=i.clientX,s=i.clientY;if(t.current){var c=.9;r<0&&(c=1/c);var u=y(t.current,[a,s],n.offset,n.zoom,c);n.setTransformation(u.position,u.scale)}}}}),[t,e,n])}(a,i,o);return Object(v.a)(z(z(z({},c),h),l),{domTarget:a,eventOptions:{passive:!1},enabled:t}),p(i.current,null===(n=null===(e=a.current)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.body),{userInteractionElemRef:a,transform:o.transformString,active:i.current}},E=function(){return(E=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},I=Object(c.a)((function(t){var e=d(),n=C(),o=n.transform,r=n.userInteractionElemRef;return i.a.createElement("div",{ref:r,style:E({},t.diagramStyles),className:"react_fast_diagram_DiagramInner"},i.a.createElement("div",{className:"react_fast_diagram_DiagramInner_DraggablePart",style:{transform:o}},i.a.createElement(l,{linksStore:e.linksStore}),i.a.createElement(b,{nodesStore:e.nodesStore})))}));I.displayName="InnerDiagram";n(63);var x=function(t){var e=this;this.addNode=function(t){e.rootStore.nodesStore.addNode(t)},this.reinitState=function(t,n){e.rootStore.nodesStore.fromJson(t),e.rootStore.linksStore.fromJson(n)},this.reinitSettings=function(t){t.nodes&&e.rootStore.nodesSettings.fromJson(t.nodes),t.links&&e.rootStore.linksSettings.fromJson(t.links)},this.rootStore=t},w=n(6),_=function(){function t(t){var e=this;this.offset=[0,0],this.zoom=1,this.setOffset=function(t){e.offset=t},this.setTransformation=function(t,n){e.offset=t,e.zoom=n},Object(w.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"transformString",{get:function(){return j(this.offset,this.zoom)},enumerable:!1,configurable:!0}),t}(),P=function(){return(P=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},R=function(t){var e,n=null!==(e=t.settings)&&void 0!==e?e:D;return i.a.createElement("g",null,i.a.createElement("path",{ref:t.draggableRef,d:t.path,stroke:n.color,strokeWidth:n.strokeWidth,fill:"none"}),t.entity.target.hasOnlyPosition&&i.a.createElement("circle",{cx:t.entity.target.point[0]-n.cirleRadius/2,cy:t.entity.target.point[1]-n.cirleRadius/2,r:n.cirleRadius,fill:"orange"}))},D={color:"LightBlue",strokeWidth:3,cirleRadius:5};function J(t){var e=P(P({},D),t||{});return{component:R,settings:e}}var N="default",T=function(){function t(t){var e=this;this.defaultType=N,this.fromJson=function(t){var n;e.defaultType=null!==(n=t.defaultNodeType)&&void 0!==n?n:N,e.initDefaultComponents(),Object.entries(t.components).forEach((function(t){var n=t[0],o=t[1];e.components[n]="component"in o?{component:Object(c.a)(o.component),settings:o.settings}:{component:Object(c.a)(o)}}))},this.getComponent=function(t){var n,o=null!==t&&void 0!==t?t:e.defaultType;return null!==(n=e.components[o])&&void 0!==n?n:e.components[e.defaultType]},this.defaultComponent=t,this.initDefaultComponents(),Object(w.c)(this)}return t.prototype.initDefaultComponents=function(){var t;this.components=((t={}).default={component:Object(c.a)(this.defaultComponent)},t)},t}(),B=function(){return(B=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};var H={};function L(t){return function(e,n){return function(t,e,n){return M(t,e)}(e,n,t&&B(B({},H),t))}}var M=function(t,e){if(!t||!e)return"";var n=S(t),o=S(e),r=n[0]+", "+n[1],i=o[0]+", "+o[1];return"M "+r+" Q "+(o[0]+", "+n[1])+", "+i},V=function(){var t=this;this.pathConstructor=L(),this.visualComponents=new T(R),this.fromJson=function(e){t.visualComponents.fromJson(e),t.pathConstructor=e.pathConstructor},Object(w.c)(this)},W=n(104),A=function(){function t(t){var e=this;this.position=null,this.nodeId=null,this.portId=null,this.fromJson=function(t){var n;"position"in t?(e.position=t.position,e.nodeId=null,e.portId=null):(e.position=null,e.nodeId=t.nodeId,e.portId=null!==(n=t.portId)&&void 0!==n?n:null)},Object(w.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"point",{get:function(){var t,e,n;if(this.nodeId){var o=this.rootStore.nodesStore.nodes[this.nodeId],r=o.ref.getBoundingClientRect(this.rootStore.diagramState.zoom),i=void 0;if(this.portId&&(i=o.ports[this.portId].ref.getBoundingClientRect(this.rootStore.diagramState.zoom)),r&&i){var a=[r.left-i.left,r.top-i.top];e=a,n=-1/this.rootStore.diagramState.zoom,a=[e[0]*n,e[1]*n];var s=k(o.offset,a);return s=k(s,[i.width/2,i.height/2])}return r?[o.offset[0]+r.width/2,o.offset[1]+r.height/2]:o.offset}return null!==(t=this.position)&&void 0!==t?t:[0,0]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasOnlyPosition",{get:function(){return!!this.position&&!this.nodeId},enumerable:!1,configurable:!0}),t}(),F=function(){function t(t,e){var n=this;void 0===e&&(e=Object(W.a)()),this.componentType=N,this.segments=[],this.extra=null,this.fromJson=function(t){var e;n.componentType=null!==(e=t.componentType)&&void 0!==e?e:N,n.source.fromJson(t.source),n.target.fromJson(t.target),n.segments=t.segments,n.extra=t.extra},this.id=e,this.source=new A(t),this.target=new A(t),Object(w.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"path",{get:function(){return this.rootStore.linksSettings.pathConstructor(this.source.point,this.target.point)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"componentDefinition",{get:function(){return this.rootStore.linksSettings.visualComponents.getComponent(this.componentType)},enumerable:!1,configurable:!0}),t.prototype.setSource=function(t){this.source.fromJson(t)},t.prototype.setTarget=function(t){this.target.fromJson(t)},t}(),G=function(){function t(t){this.link=null,this.targetPortCandidate=null,Object(w.c)(this,{link:w.d,targetPortCandidate:w.d}),this.rootStore=t}return t.prototype.startLinking=function(t){this.link=new F(this.rootStore),this.link.setSource({nodeId:t.nodeId,portId:t.id}),this.link.setTarget({position:this.link.source.point})},t.prototype.setTargetPortCandidate=function(t){var e;(null===(e=this.link)||void 0===e?void 0:e.source)&&"portId"in this.link.source&&this.link.source.nodeId!==t.nodeId&&(this.targetPortCandidate=t)},t.prototype.resetTargetPortCandidate=function(){this.targetPortCandidate=null},t.prototype.stopLinking=function(){this.targetPortCandidate&&this.link&&(this.link.setTarget({nodeId:this.targetPortCandidate.nodeId,portId:this.targetPortCandidate.id}),this.rootStore.linksStore.addLink(this.link)),this.targetPortCandidate=null,this.link=null},t}(),Q=function(t){var e=this;this.links={},this.fromJson=function(t){e.links={},t&&t.forEach((function(t){var n=new F(e.rootStore,t.id);n.fromJson(t),e.links[n.id]=n}))},this.addLinkFromJson=function(t){var n,o=null!==(n=t.id)&&void 0!==n?n:Object(W.a)();e.links[o]||(e.links[o]=new F(e.rootStore,o)),e.links[o].fromJson(t)},this.addLink=function(t){e.links[t.id]=t},this.linkCreation=new G(t),Object(w.c)(this),this.rootStore=t},X=function(t){var e=t.port,n=function(t,e){var n,o,i=d(),a=i.linksStore.linkCreation,s=i.diagramState,c=i.nodesStore,h=u(!1),l=Object(r.useRef)(null);return Object(v.a)({onDrag:function(t){var e=t.pinching,n=t.delta;if(h.current&&!e&&a.link){var o=s.zoom;a.link.setTarget({position:[a.link.target.point[0]+n[0]/o,a.link.target.point[1]+n[1]/o]})}},onDragStart:function(e){var n,o=e.event,r=c.nodes[t.nodeId].ref.getBoundingClientRect(s.zoom),i=null===(n=o.target)||void 0===n?void 0:n.getBoundingClientRect();r&&i&&(h.current=!0,a.startLinking(t))},onDragEnd:function(){h.current=!1,a.stopLinking()},onPointerEnter:function(){a.setTargetPortCandidate(t)}},{domTarget:l,eventOptions:{passive:!1},enabled:e}),p(h.current,null===(o=null===(n=l.current)||void 0===n?void 0:n.ownerDocument)||void 0===o?void 0:o.body),{active:h.current,userInteractionElemRef:l}}(e).userInteractionElemRef;return i.a.createElement("div",{ref:{set current(t){n.current=t,e.ref.current=t}},className:"react_fast_diagram_PortWrapper"},i.a.createElement("div",{style:{width:8,height:8,backgroundColor:"green"}}))},Y=function(t){var e=t.entity,n=t.settings,o=t.draggableRef;return i.a.createElement("div",{ref:o,className:"react_fast_diagram_Node_Default",style:null===n||void 0===n?void 0:n.style},i.a.createElement("span",null,e.id),i.a.createElement("div",{className:"react_fast_diagram_PortContainer_Default react_fast_diagram_PortContainer_Default_Horizontal",style:{position:"absolute",bottom:-8}},Object.values(e.ports).map((function(t){return i.a.createElement(X,{key:t.id,port:t})}))))};var q=function(){var t=this;this.visualComponents=new T(Y),this.fromJson=function(e){t.visualComponents.fromJson(e)},Object(w.c)(this)},K=function(){function t(t){this.currentInternal=t,Object(w.c)(this)}return Object.defineProperty(t.prototype,"current",{get:function(){return this.currentInternal},set:function(t){this.currentInternal=t},enumerable:!1,configurable:!0}),t.prototype.getBoundingClientRect=function(t){var e,n=null===(e=this.current)||void 0===e?void 0:e.getBoundingClientRect();if(n){var o=n.toJSON();return o.width/=t,o.height/=t,o}},t}(),U=function(t,e){var n=this;void 0===t&&(t=Object(W.a)()),void 0===e&&(e=Object(W.a)()),this.id="",this.nodeId="",this.label="",this.type="",this.fromJson=function(t){var e;n.type=null!==(e=t.type)&&void 0!==e?e:N,n.label=t.label},this.id=t,this.nodeId=e,this.ref=new K(null),Object(w.c)(this)},Z=function(){function t(t,e){var n=this;void 0===e&&(e=Object(W.a)()),this.id="",this.offset=[0,0],this.ports={},this.componentType=N,this.extra=null,this.setOffset=function(t){n.offset=t},this.fromJson=function(t){var e;n.offset=t.position,n.componentType=null!==(e=t.componentType)&&void 0!==e?e:N,n.extra=t.extra,n.ports={},t.ports&&Object.keys(t.ports).length>0&&Object.entries(t.ports).forEach((function(t){var e=t[0],o=t[1],r=new U(e,n.id);r.fromJson(o),n.ports[e]=r}))},this.id=e,this.ref=new K(null),Object(w.c)(this),this.rootStore=t}return Object.defineProperty(t.prototype,"transformString",{get:function(){return j(this.offset)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"componentDefinition",{get:function(){return this.rootStore.nodesSettings.visualComponents.getComponent(this.componentType)},enumerable:!1,configurable:!0}),t}(),$=function(t){var e=this;this.nodes={},this.fromJson=function(t){e.nodes={},t&&t.forEach((function(t){var n=new Z(e.rootStore,t.id);n.fromJson(t),e.nodes[n.id]=n}))},this.addNode=function(t){var n,o=null!==(n=t.id)&&void 0!==n?n:Object(W.a)();e.nodes[o]||(e.nodes[o]=new Z(e.rootStore,o)),e.nodes[o].fromJson(t)},Object(w.c)(this),this.rootStore=t},tt=function(){this.diagramState=new _(this),this.nodesStore=new $(this),this.nodesSettings=new q,this.linksStore=new Q(this),this.linksSettings=new V,this.diagramApi=new x(this)},et=i.a.createContext(null),nt=function(t){var e=Object(r.useMemo)((function(){var e,n,o,r,i=new tt;return i.diagramApi.reinitState(null!==(n=null===(e=t.initState)||void 0===e?void 0:e.nodes)&&void 0!==n?n:[],null!==(r=null===(o=t.initState)||void 0===o?void 0:o.links)&&void 0!==r?r:[]),t.settings&&i.diagramApi.reinitSettings(t.settings),i}),[]);return Object(r.useEffect)((function(){t.apiRef&&(t.apiRef.current=e.diagramApi)}),[e,t.apiRef]),i.a.createElement(et.Provider,{value:e},i.a.createElement(I,null))};nt.displayName="Diagram";var ot=n(94),rt=n(101),it=n(36),at=n(105),st=n(96),ct=n(103),ut=n(99),ht=n(100),lt=Object(ot.a)((function(){return{form:{display:"flex",flexDirection:"column",margin:"-8px 0","& > *":{margin:"8px 0"}},visibilityBtn:{borderRadius:"25px",minWidth:"24px",padding:"8px 8px",backgroundColor:"white"},header:{marginBottom:"15px",display:"flex",alignItems:"center",margin:"0 -14px","& > *":{margin:"0 14px"}}}})),vt=function(t){var e=lt(),n=Object(r.useState)(10),i=Object(it.a)(n,2),a=i[0],s=i[1],c=Object(r.useState)(10),u=Object(it.a)(c,2),h=u[0],l=u[1],v=Object(r.useState)(!0),d=Object(it.a)(v,2),f=d[0],m=d[1];return f?Object(o.jsx)(rt.a,{padding:3,clone:!0,children:Object(o.jsxs)(st.a,{children:[Object(o.jsxs)("div",{className:e.header,children:[Object(o.jsx)(ct.a,{className:e.visibilityBtn,variant:"outlined","aria-label":"control-panel",onClick:function(){return m(!1)},children:Object(o.jsx)(at.a,{})}),Object(o.jsx)(ut.a,{variant:"h5",children:"Control Panel"})]}),Object(o.jsxs)("form",{className:e.form,noValidate:!0,autoComplete:"off",onSubmit:function(e){if(e.preventDefault(),t.reinitState){var n=function(t,e){for(var n=[],o=[],r=function(t,e){return"node_".concat(t,"_").concat(e)},i=0;i<t;i++)for(var a=0;a<e;a++)n.push({id:r(i,a),position:[120*i,120*a]}),i-1>=0&&o.push({source:{nodeId:r(i-1,a)},target:{nodeId:r(i,a)}}),a-1>=0&&o.push({source:{nodeId:r(i,a-1)},target:{nodeId:r(i,a)}});return{nodes:n,links:o}}(a,h);t.reinitState(n.nodes,n.links)}},children:[Object(o.jsx)(ht.a,{id:"rows",value:a,type:"number",label:"Rows",variant:"outlined",onChange:function(t){return s(parseInt(t.target.value))}}),Object(o.jsx)(ht.a,{id:"columns",value:h,type:"number",label:"Columns",variant:"outlined",onChange:function(t){return l(parseInt(t.target.value))}}),Object(o.jsx)(ct.a,{variant:"contained",type:"submit",children:"Generate new Diagram"})]})]})}):Object(o.jsx)(ct.a,{variant:"outlined",className:e.visibilityBtn,"aria-label":"control-panel",onClick:function(){return m(!0)},children:Object(o.jsx)(at.a,{})})},dt=Object(ot.a)((function(){return{diagram:{height:"100vh",width:"100vw",backgroundColor:"#dbdbdb",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"},controlPanel:{position:"absolute",top:"20px",left:"20px"}}})),ft=function(){var t,e=dt(),n=function(t,e){var n=u(null);return Object(r.useMemo)((function(){return{Diagram:function(){return i.a.createElement(nt,{apiRef:n,initState:t,settings:e})},apiRef:n}}),[])}(mt,{links:{components:{default:J(),attention:J({color:"red"})},pathConstructor:L()}}),a=n.Diagram,s=n.apiRef;return Object(o.jsxs)(rt.a,{className:e.diagram,children:[Object(o.jsx)(a,{}),Object(o.jsx)(rt.a,{className:e.controlPanel,children:Object(o.jsx)(vt,{reinitState:null===(t=s.current)||void 0===t?void 0:t.reinitState})})]})},mt={nodes:[{id:"Node 1",position:[300,300],ports:{output_1:{}}},{id:"Node 2",position:[520,400],ports:{input_1:{},input_2:{},output_1:{},output_2:{},output_3:{}}},{id:"Node 3",position:[520,200],ports:{input_1:{},output_1:{},output_2:{}}}],links:[{source:{nodeId:"Node 2"},target:{nodeId:"Node 1"},componentType:"attention"},{source:{nodeId:"Node 2"},target:{nodeId:"Node 3"}}]};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(ft,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.26235679.chunk.js.map