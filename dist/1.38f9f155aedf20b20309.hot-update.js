webpackHotUpdateSimpleComponent(1,{33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),c=(o=r)&&o.__esModule?o:{default:o},i=n(26);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=document.getElementById("COMPONENT");if(o)n.node=o;else{var a=window.document;n.node=a.createElement("div"),n.node.setAttribute("id","COMPONENT"),a.body.appendChild(n.node)}return n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.Component),l(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.showCloseIcon,o=e.buttons,l=e.customClassName,r=e.children,s=e.close,u={title:void 0===t?"删除确认":t,showCloseIcon:void 0===n||n,close:s||fn,buttons:void 0===o?[{type:"negative",className:"",text:"确认",fn:s||fn},{type:"default",className:"",text:"取消",fn:s||fn}]:o,customClassName:l||"",children:void 0===r?"确认删除此评论？删除后不可恢复":r};return(0,i.createPortal)(c.default.createElement("div",{className:"__simple_dialog_coo "+u.customClassName},c.default.createElement("div",{className:"modal",onClick:u.close}),c.default.createElement("div",{className:"dialog"},function(e,t,n){if(!e)return null;return c.default.createElement("div",{className:"dialog-header"},c.default.createElement("div",{className:"title"},e),t?c.default.createElement("div",{className:"close"},c.default.createElement("i",{className:"icon",onClick:n})):null)}(u.title,u.showCloseIcon,u.close),u.children?c.default.createElement("div",{className:"dialog-body"},u.children):null,u.buttons&&u.buttons.length?c.default.createElement("div",{className:"dialog-footer"},u.buttons.map(function(e,t){return function(e,t){var n=e.fn,o=e.text,l=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["fn","text"]);return c.default.createElement("div",a({key:t,onClick:n},l,{className:"button"}),o)}(e,t)})):null)),this.node)}}]),t}();t.default=s}});