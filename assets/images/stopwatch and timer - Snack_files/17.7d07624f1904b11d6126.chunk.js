(self.webpackJsonp=self.webpackJsonp||[]).push([[17],{512:function(e,t,n){"use strict";t.a=function(e){if(e.includes("."))switch(e.split(".").pop()){case"js":return"javascript";case"ts":case"tsx":return"typescript";case"json":return"json";case"css":return"css";case"html":return"html";case"md":return"markdown";default:return}}},730:function(e,t){},873:function(e,t,n){"use strict";n.r(t);n(10);var o=n(728),s=n(729),r=n(117),a=n.n(r),i=n(512);const l=["asyncGenerators","bigInt","classProperties","classPrivateProperties","classPrivateMethods",["decorators",{decoratorsBeforeExport:!0}],"doExpressions","dynamicImport","exportDefaultFrom","exportNamespaceFrom","functionBind","functionSent","importMeta","logicalAssignment","nullishCoalescingOperator","numericSeparator","objectRestSpread","optionalCatchBinding","optionalChaining",["pipelineOperator",{proposal:"minimal"}],"throwExpressions"],c=e=>null!=e&&e[0]&&/^\s*((\d+\.)?(\d+\.)?(\*|\d+))|(LATEST)\s*$/.test(e[0].value)?e[0].value.trim():null,u=e=>{if("string"!=typeof e)return!1;const t=/^(?:@([^/?]+)\/)?([^@/?]+)(?:\/([^@]+))?/.exec(e),n=t?(t[1]?"@".concat(t[1],"/"):"")+t[2]:null;return!!n&&a()(n).validForOldPackages},p=e=>{let t;if("CallExpression"===e.node.type){const{parentPath:n}=e;t="VariableDeclarator"===n.node.type?n.parentPath.node:n.node}else t=e.node;t.comments=t.comments||[],t.comments=t.comments.filter(e=>!("CommentLine"===e.type&&e.trailing))};t.default=(e,t,n=!1)=>{const r=[...l];"typescript"===Object(i.a)(t)?(r.push("typescript"),t.endsWith(".tsx")&&r.push("jsx")):r.push("flow","jsx");const a={parse:e=>o.parse(e,{sourceType:"module",sourceFilename:t,allowImportExportEverywhere:!0,allowReturnOutsideFunction:!0,tokens:!0,plugins:r})},d={},m=Object(s.parse)(e,{parser:a}),v=e=>{var o;const s=null===(o=e.node.source)||void 0===o?void 0:o.value;if(s){const o=c(e.node.trailingComments);n&&p(e),d[s]={isPackage:u(s),version:null!=o?o:void 0,location:e.node.source.loc?{fileName:t,startLineNumber:e.node.source.loc.start.line,startColumn:e.node.source.loc.start.column+1,endLineNumber:e.node.source.loc.end.line,endColumn:e.node.source.loc.end.column+1}:void 0}}};try{s.types.visit(m,{visitImportDeclaration(e){v(e),this.traverse(e)},visitExportNamedDeclaration(e){v(e),this.traverse(e)},visitExportAllDeclaration(e){v(e),this.traverse(e)},visitCallExpression(e){(e=>{const{callee:o,arguments:s}=e.node;let r;if("require"===o.name&&1===s.length&&("Literal"===s[0].type||"StringLiteral"===s[0].type?r=s[0].value:"TemplateLiteral"===s[0].type&&1===s[0].quasis.length&&(r=s[0].quasis[0].value.cooked)),r){var a,i;const o=c((null===(a=s[0])||void 0===a?void 0:a.trailingComments)||e.parentPath.parentPath.node.trailingComments);n&&p(e);const l=(null===(i=e.node.source)||void 0===i?void 0:i.loc)||e.node.loc;d[r]={isPackage:u(r),version:null!=o?o:void 0,location:l?{fileName:t,startLineNumber:l.start.line,startColumn:l.start.column+1,endLineNumber:l.end.line,endColumn:l.end.column+1}:void 0}}})(e),this.traverse(e)}})}catch(e){}return d}}}]);