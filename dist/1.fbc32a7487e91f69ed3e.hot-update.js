webpackHotUpdateSimpleComponent(1,{12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),i=(o=a)&&o.__esModule?o:{default:o},c=n(26),u=n(13);window.COMPONENT={open:function(e,t){this._action(e,t,"open")},update:function(e,t){this._action(e,t,"update")},close:function(e){this._action(e,{},"close")},_action:function(e,t,n){if(e){var o=(0,u.createEvent)("componentchange",{name:e,action:n,config:t});(0,u.dispatchEvent)(window,o)}}};var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=n,r=document.getElementById("COMPONENT");if(r)n.node=r;else{var a=window.document;n.node=a.createElement("div"),n.node.setAttribute("id","COMPONENT"),a.body.appendChild(n.node)}return n.state={renderCompName:""},window.addEventListener("componentchange",function(t){var n=t.detail||{},r=n.action,a=n.config,i=n.name;i&&r&&e[i]&&(o.refs[i]?o.refs[i][r](a):o.setState({renderCompName:i},function(){o.refs[i][r](a)}))}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){var e=this.state,t=this.props,n=e.renderCompName,o=t.classNa,r=void 0===o?"":o,a=n&&t[n];return console.log(a),(0,c.createPortal)(i.default.createElement("div",{className:r},a?i.default.createElement(t[n],{ref:n}):""),this.node)}}]),t}();t.default=f}});