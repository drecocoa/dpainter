(function(e){function t(t){for(var a,o,s=t[0],c=t[1],u=t[2],h=0,d=[];h<s.length;h++)o=s[h],i[o]&&d.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"69260e02"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=i[e]=[t,a]});t.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e),r=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}i[e]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"15db":function(e,t,n){"use strict";var a=n("903a"),i=n.n(a);i.a},4868:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5e27":function(e,t,n){},6646:function(e,t,n){"use strict";var a=n("4868"),i=n.n(a);i.a},"669a":function(e,t,n){"use strict";var a=n("bddf"),i=n.n(a);i.a},"903a":function(e,t,n){},bddf:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=n("dca8"),s=n.n(o),c=n("3d84"),u=n.n(c);a["default"].use(s.a),a["default"].use(u.a);var h,l=a["default"].extend({}),d=l,p=(n("5c0b"),n("2877")),f=Object(p["a"])(d,i,r,!1,null,null,null),v=f.exports,b=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",[n("div",[n("Filebar",{attrs:{app:e.app}})],1),n("div",[n("Toolbar",{on:{change:e.setTool}})],1),n("div",[n("ColorTool",{attrs:{app:e.app}})],1)]),n("canvas",{ref:"glCanvas",attrs:{width:"640",height:"480"}})])},w=[],m=n("d225"),j=n("b0b4"),g=n("308d"),O=n("6bb5"),k=n("4e2b"),x=n("9ab4"),C=n("60a3"),D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("ui-icon-button",{attrs:{icon:"block"},on:{change:function(t){return e.onToolClick("None")}}}),n("ui-icon-button",{attrs:{icon:"open_with"},on:{change:function(t){return e.onToolClick("MoveObj")}}}),n("ui-icon-button",{attrs:{icon:"show_chart"},on:{change:function(t){return e.onToolClick("LineAdd")}}}),n("ui-icon-button",{attrs:{icon:"gesture"},on:{change:function(t){return e.onToolClick("BezierAdd")}}}),n("ui-icon-button",{attrs:{icon:"delete"},on:{change:function(t){return e.onToolClick("DelObj")}}}),n("ui-icon-button",{attrs:{icon:"build"},on:{change:function(t){return e.onToolClick("MovePoint")}}}),n("ui-icon-button",{on:{change:function(t){return e.onToolClick("BSplineAdd")}}},[e._v("B")])],1)},M=[],A=n("f499"),S=n.n(A),E=n("5176"),V=n.n(E),L=(n("ac6a"),n("5d73")),T=n.n(L),_=(n("673e"),n("0b21"),n("5a89")),F=n("75fc"),P=n("db0c"),z=n.n(P),B=(n("c5f6"),n("a4bb")),R=n.n(B),U=(n("7f7f"),function e(){Object(m["a"])(this,e),this.name="",this.alpha=1,this.data={}}),$=function(){function e(){Object(m["a"])(this,e),this.id=0,this.layer=0,this.type=this.constructor.name}return Object(j["a"])(e,null,[{key:"is",value:function(e,t){return void 0!==e.type&&t.name==e.type}}]),e}(),N=function(){function e(){Object(m["a"])(this,e),this.layers=[],this.recycledIds=[],this.largestId=1}return Object(j["a"])(e,[{key:"addLayer",value:function(e){this.layers.push(e)}},{key:"removeLayer",value:function(e){var t=this,n=this.layers.splice(e,1),a=!0,i=!1,r=void 0;try{for(var o,s=function(){var e=o.value;R()(e.data).forEach(function(n){return R()(e.data[n]).forEach(function(e){return t.recycledIds.push(Number(e))})})},c=T()(n);!(a=(o=c.next()).done);a=!0)s()}catch(u){i=!0,r=u}finally{try{a||null==c.return||c.return()}finally{if(i)throw r}}}},{key:"getAll",value:function(){return this.layers.map(function(e){return z()(e.data).flatMap(function(e){return z()(e)})}).reduce(function(e,t){return[].concat(Object(F["a"])(e),Object(F["a"])(t))},[])}},{key:"getAllOfType",value:function(e){return this.layers.map(function(t){return void 0===t.data[e.name]?[]:z()(t.data[e.name])}).reduce(function(e,t){return[].concat(Object(F["a"])(e),Object(F["a"])(t))},[])}},{key:"get",value:function(e,t){return this.layers.map(function(n){if(void 0!==n.data[e.name])return n.data[e.name][t]}).reduce(function(e,t){return void 0===e?t:e})}},{key:"remove",value:function(e,t){if(0!=e.id){var n=this.layers[t].data,a=e.constructor.name;void 0!==n[a]?n[a][e.id]&&(delete n[a][e.id],this.recycledIds.push(e.id)):n[a]={}}}},{key:"store",value:function(e,t){if(this.layers.length<=t)throw new Error("Layer index out of range");0==e.id&&(this.recycledIds.length>0?e.id=this.recycledIds.pop():e.id=this.largestId++);var n=this.layers[t].data,a=e.constructor.name;void 0===n[a]&&(n[a]={}),n[a][e.id]=e}}]),e}(),q=function(){function e(){Object(m["a"])(this,e),this.x=0,this.y=0,this.size=1,this.color="#000"}return Object(j["a"])(e,null,[{key:"add",value:function(t,n){var a=new e;return a.x=t.x+n.x,a.y=t.y+n.y,a.color=t.color,a.size=t.size,a}},{key:"minus",value:function(t,n){var a=new e;return a.x=t.x-n.x,a.y=t.y-n.y,a.color=t.color,a.size=t.size,a}},{key:"multiply",value:function(t,n){var a=new e;return a.x=t.x*n,a.y=t.y*n,a.color=t.color,a.size=t.size,a}},{key:"equals",value:function(e,t){return e.x==t.x&&e.y==t.y}}]),e}(),I=function(){function e(){Object(m["a"])(this,e)}return Object(j["a"])(e,[{key:"onEnable",value:function(e){this.app=e}},{key:"onDisable",value:function(){console.log("Disabled "+this.constructor.name)}},{key:"onMouseOver",value:function(e,t,n){}},{key:"onMouseDown",value:function(e,t,n){}},{key:"onMouseMove",value:function(e,t,n){}},{key:"onMouseUp",value:function(e,t,n){}}]),e}(),J=function(){function e(){Object(m["a"])(this,e)}return Object(j["a"])(e,[{key:"onEnable",value:function(e){this.app=e}},{key:"onDisable",value:function(){console.log("Disabled")}},{key:"draw",value:function(e){}},{key:"onDataAdd",value:function(e){}},{key:"onDataChange",value:function(e){}},{key:"onDataRemove",value:function(e){}}]),e}(),K=function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments)),e.data=[],e}return Object(k["a"])(t,e),t}($),W=function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments)),e.currentViews={},e}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"onDataAdd",value:function(e){if($.is(e,K)){if(e.data.length<=0)return;var t=new _["f"]({color:16777215,vertexColors:_["m"]}),n=new _["d"],a=!0,i=!1,r=void 0;try{for(var o,s=T()(e.data);!(a=(o=s.next()).done);a=!0){var c=o.value;n.vertices.push(new _["l"](c.x,c.y,0)),n.colors.push(new _["b"](c.color))}}catch(h){i=!0,r=h}finally{try{a||null==s.return||s.return()}finally{if(i)throw r}}var u=new _["e"](n,t);u.userData["obj"]=e,this.app.currentScene.add(u),this.currentViews[e.id]=u}}},{key:"onDataChange",value:function(e){if($.is(e,K)&&this.currentViews[e.id]){var t=this.currentViews[e.id];if(this.app.currentScene.remove(t),e.data.length<=0)return;var n=new _["f"]({color:16777215,vertexColors:_["m"]}),a=new _["d"],i=!0,r=!1,o=void 0;try{for(var s,c=T()(e.data);!(i=(s=c.next()).done);i=!0){var u=s.value;a.vertices.push(new _["l"](u.x,u.y,0)),a.colors.push(new _["b"](u.color))}}catch(l){r=!0,o=l}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}var h=new _["e"](a,n);h.userData["obj"]=e,this.app.currentScene.add(h),this.currentViews[e.id]=h}}},{key:"onDataRemove",value:function(e){if($.is(e,K)&&this.currentViews[e.id]){var t=this.currentViews[e.id];this.app.currentScene.remove(t),delete this.currentViews[e.id]}}}]),t}(J),H=function(e){function t(){return Object(m["a"])(this,t),Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments))}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"onMouseDown",value:function(e,t,n){if(e.color=this.app.foregroundColor,void 0===this.data)this.data=new K,this.data.data.push(e),this.app.storeData(this.data);else if(n.shiftKey)this.data.data.push(e),this.app.changeData(this.data);else{if(this.data.data.length>1)return delete this.data,this.data=new K,this.data.data.push(e),void this.app.storeData(this.data);this.data.data.push(e),this.app.changeData(this.data),delete this.data}}}]),t}(I),Y=(n("63d9"),function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments)),e.data=[],e}return Object(k["a"])(t,e),t}($)),X=function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments)),e.currentViews={},e}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"onDataAdd",value:function(e){if($.is(e,Y)){var t=new _["f"]({color:16777215,vertexColors:_["m"]}),n=new _["a"];this.genPoints(e,n);var a=new _["e"](n,t);a.userData["obj"]=e,this.app.currentScene.add(a),this.currentViews[e.id]=a}}},{key:"onDataChange",value:function(e){if($.is(e,Y)&&this.currentViews[e.id]){var t=this.currentViews[e.id];this.app.currentScene.remove(t);var n=new _["f"]({color:16777215,vertexColors:_["m"]}),a=new _["a"];this.genPoints(e,a);var i=new _["e"](a,n);i.userData["obj"]=e,this.app.currentScene.add(i),this.currentViews[e.id]=i}}},{key:"onDataRemove",value:function(e){if($.is(e,Y)&&this.currentViews[e.id]){var t=this.currentViews[e.id];this.app.currentScene.remove(t),delete this.currentViews[e.id]}}},{key:"genPoints",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;if(!(e.data.length<=0)&&1!=e.data.length){e.data.length;for(var a=Math.floor((e.data.length-1)/3)*n,i=new Float32Array(3*a),r=new Float32Array(3*a),o=0,s=1/n,c=1;c+2<e.data.length;c+=3)o=this.processPart(e.data[c-1],e.data[c],e.data[c+1],e.data[c+2],i,r,o,s);t.addAttribute("position",new _["c"](i,3)),t.addAttribute("color",new _["c"](r,3)),t.setDrawRange(0,o/3)}}},{key:"deCast",value:function(e,t,n,a){var i=1-a;if(1==e.length)n.x=e[0],n.y=t[0];else{for(var r=new Array(e.length-1),o=new Array(t.length-1),s=0;s<r.length;++s){var c=i*e[s]+a*e[s+1],u=i*t[s]+a*t[s+1];r[s]=c,o[s]=u}this.deCast(r,o,n,a)}}},{key:"processPart",value:function(e,t,n,a,i,r,o,s){var c,u,h=new _["b"](e.color),l=new _["b"](a.color);if(q.equals(e,t)&&q.equals(n,a))return r[o]=h.r,i[o++]=e.x,r[o]=h.g,i[o++]=e.y,r[o]=h.b,i[o++]=0,r[o]=l.r,i[o++]=a.x,r[o]=l.g,i[o++]=a.y,r[o]=l.b,i[o++]=0,o;q.equals(e,t)?(c=[e.x,n.x,a.x],u=[e.y,n.y,a.y]):q.equals(n,a)?(c=[e.x,t.x,a.x],u=[e.y,t.y,a.y]):(c=[e.x,t.x,n.x,a.x],u=[e.y,t.y,n.y,a.y]);for(var d=new q,p=0;p<=1;p+=s){this.deCast(c,u,d,p);var f=h.lerp(l,p);r[o]=f.r,i[o++]=d.x,r[o]=f.g,i[o++]=d.y,r[o]=f.b,i[o++]=0}return o}}]),t}(J),G=function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments)),e.isDown=!1,e}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"onMouseDown",value:function(e,t,n){if(this.isDown=!0,e.color=this.app.foregroundColor,void 0===this.data)this.data=new Y,this.data.data.push(V()(new q,e)),this.data.data.push(V()(new q,e)),this.begin=e,this.index=0,this.app.storeData(this.data);else if(n.shiftKey)this.index=this.data.data.length+1,this.begin=e,this.data.data.push(V()(new q,e)),this.data.data.push(V()(new q,e)),this.data.data.push(V()(new q,e)),this.app.changeData(this.data);else{if(this.data.data.length>3)return delete this.data,this.data=new Y,this.data.data.push(V()(new q,e)),this.data.data.push(V()(new q,e)),this.begin=e,this.index=0,void this.app.storeData(this.data);this.data.data.push(V()(new q,e)),this.data.data.push(V()(new q,e)),this.data.data.push(V()(new q,e)),this.app.changeData(this.data),delete this.data}}},{key:"onMouseMove",value:function(e,t,n){if(this.isDown&&this.data){var a=q.minus(e,this.begin);this.move(this.data,a),this.begin=e}}},{key:"onMouseUp",value:function(e,t,n){this.isDown=!1}},{key:"move",value:function(e,t){e.data.length<this.index+1||(e.data[this.index+1].x+=t.x,e.data[this.index+1].y+=t.y,this.index-1>=0&&(e.data[this.index-1].x=2*e.data[this.index].x-e.data[this.index+1].x,e.data[this.index-1].y=2*e.data[this.index].y-e.data[this.index+1].y),this.app.changeData(e))}}]),t}(I),Q=function(e){function t(){return Object(m["a"])(this,t),Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments))}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"onMouseDown",value:function(e,t,n){t.data.length<=0||(this.obj=t.data[0])}},{key:"onMouseUp",value:function(){this.obj&&(this.app.delData(this.obj),delete this.obj)}}]),t}(I),Z=function(e){function t(){return Object(m["a"])(this,t),Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments))}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"onMouseDown",value:function(e,t,n){t.data.length<=0||(this.obj=t.data[0],this.begin=e)}},{key:"onMouseMove",value:function(e,t,n){if(this.obj){var a=q.minus(e,this.begin);this.move(this.obj,a),this.begin=e}}},{key:"onMouseUp",value:function(){this.obj&&delete this.obj}},{key:"move",value:function(e,t){($.is(e,K)||$.is(e,Y))&&(e.data.forEach(function(e){e.x+=t.x,e.y+=t.y}),this.app.changeData(e))}}]),t}(I),ee=function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments)),e.data=[],e}return Object(k["a"])(t,e),t}($),te=function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments)),e.currentViews={},e}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"onDataAdd",value:function(e){if($.is(e,ee)){var t=new _["f"]({color:16777215,vertexColors:_["m"]}),n=new _["a"];this.genPoints(e,n);var a=new _["e"](n,t);a.userData["obj"]=e,this.app.currentScene.add(a),this.currentViews[e.id]=a}}},{key:"onDataChange",value:function(e){if($.is(e,ee)&&this.currentViews[e.id]){var t=this.currentViews[e.id];this.app.currentScene.remove(t);var n=new _["f"]({color:16777215,vertexColors:_["m"]}),a=new _["a"];this.genPoints(e,a);var i=new _["e"](a,n);i.userData["obj"]=e,this.app.currentScene.add(i),this.currentViews[e.id]=i}}},{key:"onDataRemove",value:function(e){if($.is(e,ee)&&this.currentViews[e.id]){var t=this.currentViews[e.id];this.app.currentScene.remove(t),delete this.currentViews[e.id]}}},{key:"genPoints",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:150;if(!(e.data.length<=0)&&!(e.data.length<=3)){var a=new _["b"](e.data[0].color),i=new _["b"](e.data[e.data.length-1].color),r=new Array(e.data.length+4);r[0]=0,r[1]=0,r[2]=0,r[3]=0;for(var o=r.length-7,s=1;s<o;++s)r[s+3]=s/o;r[r.length-1]=1,r[r.length-2]=1,r[r.length-3]=1,r[r.length-4]=1;var c=[],u=[];e.data.forEach(function(e){c.push(e.x),u.push(e.y)});for(var h=1/n,l=new Float32Array(3*(n+1)),d=new Float32Array(3*(n+1)),p=0,f=function(e){var t=r.map(function(t,n){return e<t||n+1<r.length&&e>=r[n+1]?0:1}),n=1,o=t.map(function(a,i){var o=0,s=r[i+n]-r[i];return 0!=s&&(o+=(e-r[i])/s*a),s=r[i+1+n]-r[i+1],0!=s&&(o+=(r[i+1+n]-e)/s*t[i+1]),o});n=2;var s=o.map(function(t,a){var i=0,s=r[a+n]-r[a];return 0!=s&&(i+=(e-r[a])/s*t),s=r[a+1+n]-r[a+1],0!=s&&(i+=(r[a+1+n]-e)/s*o[a+1]),i});n=3;var h=s.map(function(t,a){var i=0,o=r[a+n]-r[a];return 0!=o&&(i+=(e-r[a])/o*t),o=r[a+1+n]-r[a+1],0!=o&&(i+=(r[a+1+n]-e)/o*s[a+1]),i}),f=c.map(function(e,t){return e*h[t]}).reduce(function(e,t){return e+t}),v=u.map(function(e,t){return e*h[t]}).reduce(function(e,t){return e+t}),b=a.lerp(i,e);d[p]=b.r,l[p++]=f,d[p]=b.g,l[p++]=v,d[p]=b.b,l[p++]=0},v=0;v<=1;v+=h)f(v);t.addAttribute("position",new _["c"](l,3)),t.addAttribute("color",new _["c"](d,3)),t.setDrawRange(0,p/3)}}}]),t}(J),ne=function(e){function t(){return Object(m["a"])(this,t),Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments))}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"onMouseDown",value:function(e,t,n){if(e.color=this.app.foregroundColor,void 0===this.data)this.data=new ee,this.data.data.push(e),this.app.storeData(this.data);else if(n.shiftKey)this.data.data.push(e),this.app.changeData(this.data);else{if(this.data.data.length>3)return delete this.data,this.data=new ee,this.data.data.push(e),void this.app.storeData(this.data);this.data.data.push(e),this.app.changeData(this.data),delete this.data}}}]),t}(I),ae=function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments)),e.currentViews={},e}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"onDataAdd",value:function(e){if($.is(e,K)||$.is(e,Y)||$.is(e,ee)){var t=new _["i"]({color:81897}),n=new _["d"],a=!0,i=!1,r=void 0;try{for(var o,s=T()(e.data);!(a=(o=s.next()).done);a=!0){var c=o.value;n.vertices.push(new _["l"](c.x,c.y,0))}}catch(h){i=!0,r=h}finally{try{a||null==s.return||s.return()}finally{if(i)throw r}}var u=new _["h"](n,t);u.userData["point"]=!0,u.userData["obj"]=e,this.app.currentScene.add(u),this.currentViews[e.id]=u}}},{key:"onDataChange",value:function(e){if(($.is(e,K)||$.is(e,Y)||$.is(e,ee))&&this.currentViews[e.id]){var t=this.currentViews[e.id];this.app.currentScene.remove(t);var n=new _["i"]({color:81897}),a=new _["d"],i=!0,r=!1,o=void 0;try{for(var s,c=T()(e.data);!(i=(s=c.next()).done);i=!0){var u=s.value;a.vertices.push(new _["l"](u.x,u.y,0))}}catch(l){r=!0,o=l}finally{try{i||null==c.return||c.return()}finally{if(r)throw o}}var h=new _["h"](a,n);h.userData["point"]=!0,h.userData["obj"]=e,this.app.currentScene.add(h),this.currentViews[e.id]=h}}},{key:"onDataRemove",value:function(e){if(($.is(e,K)||$.is(e,Y))&&this.currentViews[e.id]){var t=this.currentViews[e.id];this.app.currentScene.remove(t),delete this.currentViews[e.id]}}}]),t}(J),ie=function(e){function t(){return Object(m["a"])(this,t),Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments))}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"onMouseDown",value:function(e,t,n){t.data.length<=0||-1!=t.pindex[0]&&(this.obj=t.data[0],this.begin=e,this.index=t.pindex[0])}},{key:"onMouseMove",value:function(e,t,n){if(this.obj){var a=q.minus(e,this.begin);this.move(this.obj,a),this.begin=e}}},{key:"onMouseUp",value:function(){this.obj&&delete this.obj}},{key:"move",value:function(e,t){if($.is(e,K)||$.is(e,Y)||$.is(e,ee)){if(e.data.length<this.index)return;e.data[this.index].x+=t.x,e.data[this.index].y+=t.y,this.app.changeData(e)}}}]),t}(I);(function(e){e[e["None"]=0]="None",e[e["BezierAdd"]=1]="BezierAdd",e[e["LineAdd"]=2]="LineAdd",e[e["BSplineAdd"]=3]="BSplineAdd",e[e["MoveObj"]=4]="MoveObj",e[e["DelObj"]=5]="DelObj",e[e["MovePoint"]=6]="MovePoint"})(h||(h={}));var re=function(){function e(){var t=this;Object(m["a"])(this,e),this.shouldUpdate=!0,this.previousTime=0,this.deltaTime=0,this.toolType=h.None,this.tool=new I,this.views=[],this.scale=1,this.currentLayer=0,this.foregroundColor="#000",this.backgroundColor="#FFF",this.onWheel=function(e){var n=Math.sign(e.deltaY);t.scale+=n/50},this.mvec=new _["l"],this.mpos=new _["l"],this.onMouse=function(e){var n=new q;t.mvec.set(e.offsetX/t.canvas.width*2-1,-e.offsetY/t.canvas.height*2+1,.5),t.rayCaster.setFromCamera(t.mvec,t.currentCamera);var a=t.rayCaster.intersectObjects(t.currentScene.children,!0);t.mvec.unproject(t.currentCamera),t.mvec.sub(t.currentCamera.position).normalize();var i=-t.currentCamera.position.z/t.mvec.z;t.mpos.copy(t.currentCamera.position).add(t.mvec.multiplyScalar(i)),n.x=t.mpos.x,n.y=t.mpos.y;var r=[],o=[],s=!0,c=!1,u=void 0;try{for(var h,l=T()(a);!(s=(h=l.next()).done);s=!0){var d=h.value;if(d.object.userData["obj"]){var p=d.object.userData["obj"],f=r.indexOf(p);-1==f?(r.push(p),d.object.userData["point"]&&void 0!==d.index?o.push(d.index):o.push(-1)):-1==o[f]&&(o[f]=void 0!==d.index?d.index:-1)}}}catch(b){c=!0,u=b}finally{try{s||null==l.return||l.return()}finally{if(c)throw u}}var v={data:r,pindex:o};switch(e.type){case"mousedown":t.tool.onMouseDown(n,v,e);break;case"mouseover":t.tool.onMouseOver(n,v,e);break;case"mousemove":t.tool.onMouseMove(n,v,e);break;case"mouseup":t.tool.onMouseUp(n,v,e);break}},this.animationFrame=function(e){t.deltaTime=e-t.previousTime,t.update(t.deltaTime),t.previousTime=e,t.shouldUpdate&&window.requestAnimationFrame(t.animationFrame)},this.currentScene=new _["k"],this.currentScene.background=new _["b"]("#FFF"),this.data=new N,this.data.addLayer(new U),this.tool.onEnable(this);var n=new W;n.onEnable(this),this.views.push(n);var a=new X;a.onEnable(this),this.views.push(a);var i=new te;i.onEnable(this),this.views.push(i);var r=new ae;r.onEnable(this),this.views.push(r)}return Object(j["a"])(e,[{key:"onEnable",value:function(e){this.canvas=e,this.renderer&&this.renderer.dispose(),this.renderer=new _["n"]({canvas:this.canvas,antialias:!0}),this.currentCamera=new _["g"](45,e.width/e.height,.1,1e3),this.currentCamera.position.set(0,0,100),this.currentCamera.lookAt(0,0,0),this.rayCaster=new _["j"],this.registerListeners(),this.animationFrame(.01),this.initDataView()}},{key:"onDisable",value:function(){this.unregisterListeners()}},{key:"initDataView",value:function(){var e=this;void 0!==this.data&&this.data.getAll().forEach(function(t){return e.views.forEach(function(e){return e.onDataAdd(t)})})}},{key:"setTool",value:function(e){switch(this.toolType=e,this.tool.onDisable(),e){case h.BezierAdd:this.tool=new G;break;case h.LineAdd:this.tool=new H;break;case h.BSplineAdd:this.tool=new ne;break;case h.MovePoint:this.tool=new ie;break;case h.MoveObj:this.tool=new Z;break;case h.DelObj:this.tool=new Q;break;case h.None:default:this.tool=new I;break}this.tool.onEnable(this)}},{key:"unregisterListeners",value:function(){this.canvas.removeEventListener("mousedown",this.onMouse),this.canvas.removeEventListener("mouseover",this.onMouse),this.canvas.removeEventListener("mousemove",this.onMouse),this.canvas.removeEventListener("mouseup",this.onMouse),this.canvas.removeEventListener("wheel",this.onWheel)}},{key:"registerListeners",value:function(){this.canvas.addEventListener("mousedown",this.onMouse),this.canvas.addEventListener("mouseover",this.onMouse),this.canvas.addEventListener("mousemove",this.onMouse),this.canvas.addEventListener("mouseup",this.onMouse),this.canvas.addEventListener("wheel",this.onWheel)}},{key:"update",value:function(e){0==this.scale?this.currentCamera.position.set(0,0,0):this.currentCamera.position.set(0,0,100/this.scale),this.renderer.render(this.currentScene,this.currentCamera)}},{key:"storeData",value:function(e){void 0!==this.data&&(this.data.store(e,this.currentLayer),this.views.forEach(function(t){return t.onDataAdd(e)}))}},{key:"changeData",value:function(e){void 0!==this.data&&(this.data.store(e,this.currentLayer),this.views.forEach(function(t){return t.onDataChange(e)}))}},{key:"delData",value:function(e){void 0!==this.data&&(this.data.remove(e,this.currentLayer),this.views.forEach(function(t){return t.onDataRemove(e)}))}},{key:"clearScene",value:function(){while(this.currentScene.children.length>0)this.currentScene.remove(this.currentScene.children[0])}},{key:"open",value:function(e){var t=V()(new N,e);this.clearScene(),this.data=t,this.initDataView()}},{key:"save",value:function(){if(void 0!==this.data){var e=S()(this.data),t=new Blob([e],{type:"text/plain"}),n=URL.createObjectURL(t),a=document.createElement("a");a.style.display="none",document.body.appendChild(a),a.href=n,a.href=URL.createObjectURL(t),a.download="data.dpst",a.click()}}}]),e}(),oe=function(e){function t(){return Object(m["a"])(this,t),Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments))}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"onToolClick",value:function(e){var t;switch(e){case"MoveObj":t=h.MoveObj;break;case"LineAdd":t=h.LineAdd;break;case"BezierAdd":t=h.BezierAdd;break;case"BSplineAdd":t=h.BSplineAdd;break;case"DelObj":t=h.DelObj;break;case"MovePoint":t=h.MovePoint;break;default:t=h.None;break}this.$emit("change",t)}}]),t}(C["c"]);oe=x["a"]([C["a"]],oe);var se=oe,ce=se,ue=Object(p["a"])(ce,D,M,!1,null,null,null),he=ue.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("ui-icon-button",{attrs:{icon:"save"},on:{change:e.save}}),n("input",{ref:"uploadinput",staticStyle:{display:"none"},attrs:{type:"file",accept:"*/dpst"},on:{input:e.realopen}}),n("ui-icon-button",{attrs:{icon:"insert_drive_file"},on:{change:e.open}}),n("ui-icon-button",{attrs:{icon:"clear"},on:{change:e.clear}})],1)},de=[],pe=function(e){function t(){return Object(m["a"])(this,t),Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments))}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"save",value:function(){this.app.save()}},{key:"open",value:function(){this.$refs.uploadinput.value="",this.$refs.uploadinput.click()}},{key:"clear",value:function(){var e=new N;e.addLayer(new U),this.app.open(e),this.app.setTool(h.None)}},{key:"realopen",value:function(e){var t=this,n=e.target;if("files"in n&&n.files.length>0){var a=n.files[0],i=new FileReader;i.onload=function(e){if(null!=e.target&&null!=e.target.result){console.log(e.target.result);var n=JSON.parse(e.target.result);t.app.open(n)}},i.readAsText(a)}}}]),t}(C["c"]);x["a"]([Object(C["b"])()],pe.prototype,"app",void 0),pe=x["a"]([C["a"]],pe);var fe=pe,ve=fe,be=Object(p["a"])(ve,le,de,!1,null,null,null),ye=be.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("ui-icon-button",{style:{color:e.foreColor},attrs:{icon:"color_lens"},on:{change:e.foreground}}),n("ui-icon-button",{style:{color:e.backColor},on:{change:e.background}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),n("path",{attrs:{d:"M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"}}),n("circle",{attrs:{cx:"6.5",cy:"11.5",r:"1.5"}}),n("circle",{attrs:{cx:"9.5",cy:"7.5",r:"1.5"}}),n("circle",{attrs:{cx:"14.5",cy:"7.5",r:"1.5"}}),n("circle",{attrs:{cx:"17.5",cy:"11.5",r:"1.5"}})])]),n("ui-dialog",{on:{confirm:e.onConfirm},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[n("ui-dialog-title",[e._v(e._s(e.pickfore?"Foreground":"Background"))]),n("ui-dialog-content",[n("chrome-picker",{staticClass:"picker",model:{value:e.tempColor,callback:function(t){e.tempColor=t},expression:"tempColor"}})],1),n("ui-dialog-actions")],1)],1)},me=[],je=n("c345"),ge=function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments)),e.open=!1,e.foreColor="#000",e.backColor="#FFF",e.tempColor="#FFF",e.pickfore=!0,e}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"foreground",value:function(){this.pickfore=!0,this.tempColor=this.foreColor,this.open=!0}},{key:"background",value:function(){this.pickfore=!1,this.tempColor=this.backColor,this.open=!0}},{key:"onAppChange",value:function(){this.foreColor=this.app.foregroundColor,this.backColor=this.app.backgroundColor}},{key:"onConfirm",value:function(){this.pickfore?(this.foreColor=this.tempColor.hex,this.app.foregroundColor=this.foreColor):(this.backColor=this.tempColor.hex,this.app.backgroundColor=this.backColor)}}]),t}(C["c"]);x["a"]([Object(C["b"])()],ge.prototype,"app",void 0),x["a"]([Object(C["d"])("app")],ge.prototype,"onAppChange",null),ge=x["a"]([Object(C["a"])({components:{"chrome-picker":je["Chrome"]}})],ge);var Oe=ge,ke=Oe,xe=(n("6646"),Object(p["a"])(ke,we,me,!1,null,"1a8b745c",null)),Ce=xe.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scale"},[n("ui-slider",{attrs:{model:e.scale},on:{input:function(t){return e.onScaleChange(t)}}})],1)},Me=[],Ae=function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments)),e.scale=100,e}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"onAppChange",value:function(){this.scale=100*this.app.scale}},{key:"onScaleChange",value:function(e){this.scale=e,this.app.scale=this.scale/100}}]),t}(C["c"]);x["a"]([Object(C["b"])()],Ae.prototype,"app",void 0),x["a"]([Object(C["d"])("app")],Ae.prototype,"onAppChange",null),Ae=x["a"]([Object(C["a"])({components:{"chrome-picker":je["Chrome"]}})],Ae);var Se=Ae,Ee=Se,Ve=(n("669a"),Object(p["a"])(Ee,De,Me,!1,null,"471de300",null)),Le=Ve.exports,Te=function(e){function t(){var e;return Object(m["a"])(this,t),e=Object(g["a"])(this,Object(O["a"])(t).apply(this,arguments)),e.app=new re,e}return Object(k["a"])(t,e),Object(j["a"])(t,[{key:"mounted",value:function(){this.app.onEnable(this.$refs.glCanvas)}},{key:"destroyed",value:function(){this.app.onDisable()}},{key:"setTool",value:function(e){this.app.setTool(e)}}]),t}(C["c"]);Te=x["a"]([Object(C["a"])({components:{Toolbar:he,Filebar:ye,ColorTool:Ce,ViewTool:Le}})],Te);var _e=Te,Fe=_e,Pe=(n("15db"),Object(p["a"])(Fe,y,w,!1,null,"29d63822",null)),ze=Pe.exports;a["default"].use(b["a"]);var Be=new b["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:ze},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});a["default"].config.productionTip=!1,new a["default"]({router:Be,render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.adc75dca.js.map