(this.webpackJsonpumfit=this.webpackJsonpumfit||[]).push([[42],{308:function(o,t,n){"use strict";n.r(t),n.d(t,"ion_button",(function(){return s})),n.d(t,"ion_icon",(function(){return m}));var i,r=n(48),e=(n(14),n(26)),a=n(378),s=function(){function o(o){var t=this;Object(r.k)(this,o),this.inItem=!1,this.inListHeader=!1,this.inToolbar=!1,this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.handleClick=function(o){if("button"===t.type)Object(a.d)(t.href,o,t.routerDirection);else if(Object(e.g)(t.el)){var n=t.el.closest("form");if(n){o.preventDefault();var i=document.createElement("button");i.type=t.type,i.style.display="none",n.appendChild(i),i.click(),i.remove()}}},this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()},this.ionFocus=Object(r.e)(this,"ionFocus",7),this.ionBlur=Object(r.e)(this,"ionBlur",7)}return o.prototype.componentWillLoad=function(){this.inToolbar=!!this.el.closest("ion-buttons"),this.inListHeader=!!this.el.closest("ion-list-header"),this.inItem=!!this.el.closest("ion-item")||!!this.el.closest("ion-item-divider")},Object.defineProperty(o.prototype,"hasIconOnly",{get:function(){return!!this.el.querySelector('ion-icon[slot="icon-only"]')},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"rippleType",{get:function(){return(void 0===this.fill||"clear"===this.fill)&&this.hasIconOnly&&this.inToolbar?"unbounded":"bounded"},enumerable:!0,configurable:!0}),o.prototype.render=function(){var o,t=Object(r.d)(this),n=this,i=n.buttonType,e=n.type,s=n.disabled,c=n.rel,l=n.target,d=n.size,u=n.href,b=n.color,h=n.expand,f=n.hasIconOnly,p=n.shape,g=n.strong,v=void 0===d&&this.inItem?"small":d,m=void 0===u?"button":"a",y="button"===m?{type:e}:{download:this.download,href:u,rel:c,target:l},k=this.fill;return void 0===k&&(k=this.inToolbar||this.inListHeader?"clear":"solid"),Object(r.i)(r.a,{onClick:this.handleClick,"aria-disabled":s?"true":null,class:Object.assign(Object.assign({},Object(a.a)(b)),(o={},o[t]=!0,o[i]=!0,o[i+"-"+h]=void 0!==h,o[i+"-"+v]=void 0!==v,o[i+"-"+p]=void 0!==p,o[i+"-"+k]=!0,o[i+"-strong"]=g,o["in-toolbar"]=Object(a.c)("ion-toolbar",this.el),o["in-toolbar-color"]=Object(a.c)("ion-toolbar[color]",this.el),o["button-has-icon-only"]=f,o["button-disabled"]=s,o["ion-activatable"]=!0,o["ion-focusable"]=!0,o))},Object(r.i)(m,Object.assign({},y,{class:"button-native",disabled:s,onFocus:this.onFocus,onBlur:this.onBlur,part:"button"}),Object(r.i)("span",{class:"button-inner",part:"button-inner"},Object(r.i)("slot",{name:"icon-only"}),Object(r.i)("slot",{name:"start"}),Object(r.i)("slot",null),Object(r.i)("slot",{name:"end"})),"md"===t&&Object(r.i)("ion-ripple-effect",{type:this.rippleType})))},Object.defineProperty(o.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff)}:host(.button-outline){--border-color:var(--ion-color-primary,#3880ff)}:host(.button-clear),:host(.button-outline){--background:transparent;--color:var(--ion-color-primary,#3880ff)}:host(.button-clear){--border-width:0}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native:after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);overflow:hidden;z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-.3em;margin-right:.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-.3em;margin-inline-start:-.3em;-webkit-margin-end:.3em;margin-inline-end:.3em}}::slotted(ion-icon[slot=end]){margin-left:.3em;margin-right:-.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:.3em;margin-inline-start:.3em;-webkit-margin-end:-.2em;margin-inline-end:-.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native:after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover:hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native,:host(.button-outline.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color,var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color,var(--color,var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color,var(--background));color:var(--ion-toolbar-background,var(--color))}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color,opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-.03em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade,#3171e0);--background-focused:var(--ion-color-primary-shade,#3171e0);--background-hover:var(--ion-color-primary-tint,#4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary,#3880ff);--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast,#fff)}:host(.button-clear),:host(.button-outline){--background-focused:var(--ion-color-primary,#3880ff);--background-hover:transparent}:host(.button-clear){--background-activated:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:400;letter-spacing:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-clear.ion-activated){opacity:.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native:after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native:after{background:var(--ion-color-shade)}:host(.button-clear.ion-focused.ion-color) .button-native,:host(.button-outline.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-focused.ion-color) .button-native:after,:host(.button-outline.ion-focused.ion-color) .button-native:after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native:after{background:var(--ion-color-shade)}@media (any-hover:hover){:host(.button-clear:hover),:host(.button-outline:hover){opacity:.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native:after,:host(.button-outline.ion-color:hover) .button-native:after{background:transparent}:host(.button-solid.ion-color:hover) .button-native:after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native:after{background:#fff;opacity:.1}}'},enumerable:!0,configurable:!0}),o}(),c=function(o){var t=function(){if(!i){var o=window;o.Ionicons=o.Ionicons||{},i=o.Ionicons.map=o.Ionicons.map||new Map}return i}().get(o);return t||Object(r.j)("svg/"+o+".svg")},l=function(o,t,n,i,r){return n="ios"===(n&&h(n))?"ios":"md",i&&"ios"===n?o=h(i):r&&"md"===n?o=h(r):(o||!t||u(t)||(o=t),b(o)&&(o=h(o))),b(o)&&""!==o.trim()?""!==o.replace(/[a-z]|-|\d/gi,"")?null:o:null},d=function(o){return b(o)&&(o=o.trim(),u(o))?o:null},u=function(o){return o.length>0&&/(\/|\.)/.test(o)},b=function(o){return"string"===typeof o},h=function(o){return o.toLowerCase()},f=function o(t){if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(var n=0;n<t.attributes.length;n++){var i=t.attributes[n].value;if(b(i)&&0===i.toLowerCase().indexOf("on"))return!1}for(n=0;n<t.childNodes.length;n++)if(!o(t.childNodes[n]))return!1}return!0},p=new Map,g=new Map,v=function(o){var t=g.get(o);return t||(t=fetch(o).then((function(t){if(t.ok)return t.text().then((function(t){p.set(o,function(o){if(o){var t=document.createElement("div");t.innerHTML=o;for(var n=t.childNodes.length-1;n>=0;n--)"svg"!==t.childNodes[n].nodeName.toLowerCase()&&t.removeChild(t.childNodes[n]);var i=t.firstElementChild;if(i&&"svg"===i.nodeName.toLowerCase()){var r=i.getAttribute("class")||"";if(i.setAttribute("class",(r+" s-ion-icon").trim()),f(i))return t.innerHTML}}return""}(t))}));p.set(o,"")})),g.set(o,t)),t},m=function(){function o(o){Object(r.k)(this,o),this.isVisible=!1,this.mode=y(),this.lazy=!1}return o.prototype.connectedCallback=function(){var o=this;this.waitUntilVisible(this.el,"50px",(function(){o.isVisible=!0,o.loadIcon()}))},o.prototype.disconnectedCallback=function(){this.io&&(this.io.disconnect(),this.io=void 0)},o.prototype.waitUntilVisible=function(o,t,n){var i=this;if(this.lazy&&"undefined"!==typeof window&&window.IntersectionObserver){var r=this.io=new window.IntersectionObserver((function(o){o[0].isIntersecting&&(r.disconnect(),i.io=void 0,n())}),{rootMargin:t});r.observe(o)}else n()},o.prototype.loadIcon=function(){var o=this;if(this.isVisible){var t=function(o){var t=d(o.src);if(t)return t;if(t=l(o.name,o.icon,o.mode,o.ios,o.md))return c(t);if(o.icon){if(t=d(o.icon))return t;if(t=d(o.icon[o.mode]))return t}return null}(this);t&&(p.has(t)?this.svgContent=p.get(t):v(t).then((function(){return o.svgContent=p.get(t)})))}if(!this.ariaLabel){var n=l(this.name,this.icon,this.mode,this.ios,this.md);n&&(this.ariaLabel=n.replace(/\-/g," "))}},o.prototype.render=function(){var o,t,n=this.mode||"md",i=this.flipRtl||this.ariaLabel&&(this.ariaLabel.indexOf("arrow")>-1||this.ariaLabel.indexOf("chevron")>-1)&&!1!==this.flipRtl;return Object(r.i)(r.a,{role:"img",class:Object.assign(Object.assign((o={},o[n]=!0,o),k(this.color)),(t={},t["icon-"+this.size]=!!this.size,t["flip-rtl"]=!!i&&"rtl"===this.el.ownerDocument.dir,t))},this.svgContent?Object(r.i)("div",{class:"icon-inner",innerHTML:this.svgContent}):Object(r.i)("div",{class:"icon-inner"}))},Object.defineProperty(o,"assetsDirs",{get:function(){return["svg"]},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(o,"watchers",{get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width,32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}"},enumerable:!0,configurable:!0}),o}(),y=function(){return document.documentElement.getAttribute("mode")||"md"},k=function(o){var t;return o?((t={"ion-color":!0})["ion-color-"+o]=!0,t):null}},378:function(o,t,n){"use strict";n.d(t,"a",(function(){return e})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c}));var i=n(11),r=function(o,t){return null!==t.closest(o)},e=function(o){var t;return"string"===typeof o&&o.length>0?((t={"ion-color":!0})["ion-color-"+o]=!0,t):void 0},a=function(o){var t={};return function(o){return void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter((function(o){return null!=o})).map((function(o){return o.trim()})).filter((function(o){return""!==o})):[]}(o).forEach((function(o){return t[o]=!0})),t},s=/^[a-z][a-z0-9+\-.]*:/,c=function(o,t,n){return Object(i.a)(void 0,void 0,void 0,(function(){var r;return Object(i.c)(this,(function(i){return null!=o&&"#"!==o[0]&&!s.test(o)&&(r=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,r.push(o,n)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=42.d1602718.chunk.js.map