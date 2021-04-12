(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Example; });

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/pages/examples/_exampleWrapper.jsx
var _exampleWrapper = __webpack_require__(96);

// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-live-codeblock/src/theme/CodeBlock/index.js + 9 modules
var CodeBlock = __webpack_require__(94);

// EXTERNAL MODULE: ./src/pages/examples/_diagramContainer.jsx
var _diagramContainer = __webpack_require__(97);

// CONCATENATED MODULE: ../node_modules/raw-loader/dist/cjs.js!./src/pages/examples/_calculatorDiagram.tsx
/* harmony default export */ var _calculatorDiagram = ("import React from 'react';\r\nimport {\r\n  Diagram,\r\n  disableNodeUserInteractionClassName,\r\n  INodeVisualComponentProps,\r\n  Port,\r\n} from '@react-easy-diagram/core';\r\nimport { observer } from 'mobx-react-lite';\r\n\r\nconst NumberProvider = observer<INodeVisualComponentProps>(\r\n  ({ entity, draggableRef }) => {\r\n    const port = entity.ports['number'];\r\n    return (\r\n      <div className='react_fast_diagram_Node_Default' ref={draggableRef}>\r\n        <div>Number input</div>\r\n        <span>\r\n          <input\r\n            type='number'\r\n            // You can set extra using api, like this. Or pass extra right in props to Port component like it is done in AddNumbers\r\n            onChange={(event) => port?.setExtra(parseInt(event.target.value))}\r\n            defaultValue={port && port.extra}\r\n            className={disableNodeUserInteractionClassName}\r\n          />\r\n        </span>\r\n        <Port id='number' position='right-center' />\r\n      </div>\r\n    );\r\n  }\r\n);\r\n\r\nconst AddNumbers = observer<INodeVisualComponentProps>(\r\n  ({ entity, draggableRef }) => {\r\n    const outputPort = entity.ports['output'];\r\n\r\n    const getInputNumber = (portName: string): number => {\r\n      const port = entity.ports[portName];\r\n      if (port && port.connectedPorts.length > 0) {\r\n        return port.connectedPorts[0].extra;\r\n      } else return 0;\r\n    };\r\n    const num1 = getInputNumber('number_1');\r\n    const num2 = getInputNumber('number_2');\r\n\r\n    return (\r\n      <div className='react_fast_diagram_Node_Default' ref={draggableRef}>\r\n        <div>Add numbers</div>\r\n        <span>Result: {outputPort ? outputPort.extra : ''}</span>\r\n        <Port\r\n          id='number_1'\r\n          position='left-center'\r\n          offsetFromOrigin={[0, -15]}\r\n          type='single_connection'\r\n        />\r\n        <Port\r\n          id='number_2'\r\n          position='left-center'\r\n          offsetFromOrigin={[0, 15]}\r\n          type='single_connection'\r\n        />\r\n        <Port id='output' position='right-center' extra={num1 + num2} />\r\n      </div>\r\n    );\r\n  }\r\n);\r\n\r\nexport default () => (\r\n  <Diagram\r\n    initState={{\r\n      nodes: [\r\n        {\r\n          id: 'Num1',\r\n          position: [100, 100],\r\n          componentType: 'number',\r\n        },\r\n        {\r\n          id: 'Num2',\r\n          position: [100, 300],\r\n          componentType: 'number',\r\n        },\r\n        {\r\n          id: 'Num3',\r\n          position: [420, 250],\r\n          componentType: 'number',\r\n        },\r\n        {\r\n          id: 'add1',\r\n          position: [420, 150],\r\n          componentType: 'addnumbers',\r\n        },\r\n        {\r\n          id: 'add2',\r\n          position: [700, 200],\r\n          componentType: 'addnumbers',\r\n        },\r\n      ],\r\n      links: [],\r\n    }}\r\n    settings={{\r\n      nodes: {\r\n        components: {\r\n          number: NumberProvider,\r\n          addnumbers: AddNumbers,\r\n        },\r\n      },\r\n      callbacks: {\r\n        validateLinkEndpoints: (source, target, rootStore) => {\r\n          if (target.type === 'single_connection') {\r\n            // allow connection only if target port is still unconnected\r\n            return target.connectedLinks.length === 0;\r\n          }\r\n          return true;\r\n        },\r\n      },\r\n    }}\r\n  />\r\n);\r\n");
// EXTERNAL MODULE: ../lib_core/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(95);

// EXTERNAL MODULE: ../node_modules/mobx-react-lite/es/observer.js + 9 modules
var observer = __webpack_require__(195);

// CONCATENATED MODULE: ./src/pages/examples/_calculatorDiagram.tsx
const NumberProvider=Object(observer["a" /* observer */])(({entity,draggableRef})=>{const port=entity.ports['number'];return/*#__PURE__*/react_default.a.createElement("div",{className:"react_fast_diagram_Node_Default",ref:draggableRef},/*#__PURE__*/react_default.a.createElement("div",null,"Number input"),/*#__PURE__*/react_default.a.createElement("span",null,/*#__PURE__*/react_default.a.createElement("input",{type:"number"// You can set extra using api, like this. Or pass extra right in props to Port component like it is done in AddNumbers
,onChange:event=>port===null||port===void 0?void 0:port.setExtra(parseInt(event.target.value)),defaultValue:port&&port.extra,className:index_esm["disableNodeUserInteractionClassName"]})),/*#__PURE__*/react_default.a.createElement(index_esm["Port"],{id:"number",position:"right-center"}));});const AddNumbers=Object(observer["a" /* observer */])(({entity,draggableRef})=>{const outputPort=entity.ports['output'];const getInputNumber=portName=>{const port=entity.ports[portName];if(port&&port.connectedPorts.length>0){return port.connectedPorts[0].extra;}else return 0;};const num1=getInputNumber('number_1');const num2=getInputNumber('number_2');return/*#__PURE__*/react_default.a.createElement("div",{className:"react_fast_diagram_Node_Default",ref:draggableRef},/*#__PURE__*/react_default.a.createElement("div",null,"Add numbers"),/*#__PURE__*/react_default.a.createElement("span",null,"Result: ",outputPort?outputPort.extra:''),/*#__PURE__*/react_default.a.createElement(index_esm["Port"],{id:"number_1",position:"left-center",offsetFromOrigin:[0,-15],type:"single_connection"}),/*#__PURE__*/react_default.a.createElement(index_esm["Port"],{id:"number_2",position:"left-center",offsetFromOrigin:[0,15],type:"single_connection"}),/*#__PURE__*/react_default.a.createElement(index_esm["Port"],{id:"output",position:"right-center",extra:num1+num2}));});/* harmony default export */ var examples_calculatorDiagram = (()=>/*#__PURE__*/react_default.a.createElement(index_esm["Diagram"],{initState:{nodes:[{id:'Num1',position:[100,100],componentType:'number'},{id:'Num2',position:[100,300],componentType:'number'},{id:'Num3',position:[420,250],componentType:'number'},{id:'add1',position:[420,150],componentType:'addnumbers'},{id:'add2',position:[700,200],componentType:'addnumbers'}],links:[]},settings:{nodes:{components:{number:NumberProvider,addnumbers:AddNumbers}},callbacks:{validateLinkEndpoints:(source,target,rootStore)=>{if(target.type==='single_connection'){// allow connection only if target port is still unconnected
return target.connectedLinks.length===0;}return true;}}}}));
// CONCATENATED MODULE: ./src/pages/examples/calculator.jsx
function Example(){return/*#__PURE__*/react_default.a.createElement(_exampleWrapper["a" /* ExampleWrapper */],{title:"Calculator Example"},/*#__PURE__*/react_default.a.createElement(_diagramContainer["a" /* DiagramContainer */],null,/*#__PURE__*/react_default.a.createElement(examples_calculatorDiagram,null)),/*#__PURE__*/react_default.a.createElement(CodeBlock["a" /* default */],{className:"language-jsx"},_calculatorDiagram));}

/***/ })

}]);