/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;

(function ($) {

  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el);

    // making variables public
    slider.vars = $.extend({}, $.flexslider.defaults, options);

    var namespace = slider.vars.namespace,
        msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        touch = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
        // depricating this idea, as devices are being released with both of these events
        //eventType = (touch) ? "touchend" : "click",
        eventType = "click touchend MSPointerUp keyup",
        watchedEvent = "",
        watchedEventClearTimer,
        vertical = slider.vars.direction === "vertical",
        reverse = slider.vars.reverse,
        carousel = (slider.vars.itemWidth > 0),
        fade = slider.vars.animation === "fade",
        asNav = slider.vars.asNavFor !== "",
        methods = {},
        focused = true;

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Private slider methods
    methods = {
      init: function() {
        slider.animating = false;
        // Get current slide and make sure it is a number
        slider.currentSlide = parseInt( ( slider.vars.startAt ? slider.vars.startAt : 0), 10 );
        if ( isNaN( slider.currentSlide ) ) slider.currentSlide = 0;
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = slider.vars.selector.substr(0,slider.vars.selector.search(' '));
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(slider.vars.sync).length > 0;
        // SLIDE:
        if (slider.vars.animation === "slide") slider.vars.animation = "swing";
        slider.prop = (vertical) ? "top" : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        slider.stopped = false;
        //PAUSE WHEN INVISIBLE
        slider.started = false;
        slider.startTimeout = null;
        // TOUCH/USECSS:
        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        slider.ensureAnimationEnd = '';
        // CONTROLSCONTAINER:
        if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
        // MANUAL:
        if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

        // RANDOMIZE:
        if (slider.vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (slider.vars.controlNav) methods.controlNav.setup();

        // DIRECTIONNAV:
        if (slider.vars.directionNav) methods.directionNav.setup();

        // KEYBOARD:
        if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (keycode === 39) ? slider.getTarget('next') :
                           (keycode === 37) ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (slider.vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (slider.vars.pausePlay) methods.pausePlay.setup();

        //PAUSE WHEN INVISIBLE
        if (slider.vars.slideshow && slider.vars.pauseInvisible) methods.pauseInvisible.init();

        // SLIDSESHOW
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) slider.pause();
            }, function() {
              if (!slider.manualPause && !slider.manualPlay && !slider.stopped) slider.play();
            });
          }
          // initialize animation
          //If we're visible, or we don't use PageVisibility API
          if(!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
            (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
          }
        }

        // ASNAV:
        if (asNav) methods.asNav.setup();

        // TOUCH
        if (touch && slider.vars.touch) methods.touch();

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && slider.vars.smoothHeight)) $(window).bind("resize orientationchange focus", methods.resize);

        slider.find("img").attr("draggable", "false");

        // API: start() Callback
        setTimeout(function(){
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          if(!msGesture){
              slider.slides.on(eventType, function(e){
                e.preventDefault();
                var $slide = $(this),
                    target = $slide.index();
                var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
                if( posFromLeft <= 0 && $slide.hasClass( namespace + 'active-slide' ) ) {
                  slider.flexAnimate(slider.getTarget("prev"), true);
                } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                  slider.direction = (slider.currentItem < target) ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                }
              });
          }else{
              el._slider = slider;
              slider.slides.each(function (){
                  var that = this;
                  that._gesture = new MSGesture();
                  that._gesture.target = that;
                  that.addEventListener("MSPointerDown", function (e){
                      e.preventDefault();
                      if(e.currentTarget._gesture)
                          e.currentTarget._gesture.addPointer(e.pointerId);
                  }, false);
                  that.addEventListener("MSGestureTap", function (e){
                      e.preventDefault();
                      var $slide = $(this),
                          target = $slide.index();
                      if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                          slider.direction = (slider.currentItem < target) ? "next" : "prev";
                          slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                      }
                  });
              });
          }
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item,
              slide;

          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);
              item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr( 'data-thumb' ) + '"/>' : '<a>' + j + '</a>';
              if ( 'thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions ) {
                var captn = slide.attr( 'data-thumbcaption' );
                if ( '' != captn && undefined != captn ) item += '<span class="' + namespace + 'caption">' + captn + '</span>';
              }
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }

          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();

          });
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function() {
          var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target;

            if (watchedEvent === "" || watchedEvent === event.type) {
              target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
            } else {
              slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
            }
          } else {
            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
          }
        }
      },
      pausePlay: {
        setup: function() {
          //var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');
			var pausePlayScaffold = $('');
          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + 'pause')) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          scrolling = false,
          localX = 0,
          localY = 0,
          accDx = 0;

        if(!msGesture){
            el.addEventListener('touchstart', onTouchStart, false);

            function onTouchStart(e) {
              if (slider.animating) {
                e.preventDefault();
              } else if ( ( window.navigator.msPointerEnabled ) || e.touches.length === 1 ) {
                slider.pause();
                // CAROUSEL:
                cwidth = (vertical) ? slider.h : slider. w;
                startT = Number(new Date());
                // CAROUSEL:

                // Local vars for X and Y points.
                localX = e.touches[0].pageX;
                localY = e.touches[0].pageY;

                offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                         (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                         (carousel && slider.currentSlide === slider.last) ? slider.limit :
                         (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                         (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                startX = (vertical) ? localY : localX;
                startY = (vertical) ? localX : localY;

                el.addEventListener('touchmove', onTouchMove, false);
                el.addEventListener('touchend', onTouchEnd, false);
              }
            }

            function onTouchMove(e) {
              // Local vars for X and Y points.

              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;

              dx = (vertical) ? startX - localY : startX - localX;
              scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));

              var fxms = 500;

              if ( ! scrolling || Number( new Date() ) - startT > fxms ) {
                e.preventDefault();
                if (!fade && slider.transitions) {
                  if (!slider.vars.animationLoop) {
                    dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
                  }
                  slider.setProps(offset + dx, "setTouch");
                }
              }
            }

            function onTouchEnd(e) {
              // finish the touch by undoing the touch session
              el.removeEventListener('touchmove', onTouchMove, false);

              if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                var updateDx = (reverse) ? -dx : dx,
                    target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                } else {
                  if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                }
              }
              el.removeEventListener('touchend', onTouchEnd, false);

              startX = null;
              startY = null;
              dx = null;
              offset = null;
            }
        }else{
            el.style.msTouchAction = "none";
            el._gesture = new MSGesture();
            el._gesture.target = el;
            el.addEventListener("MSPointerDown", onMSPointerDown, false);
            el._slider = slider;
            el.addEventListener("MSGestureChange", onMSGestureChange, false);
            el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

            function onMSPointerDown(e){
                e.stopPropagation();
                if (slider.animating) {
                    e.preventDefault();
                }else{
                    slider.pause();
                    el._gesture.addPointer(e.pointerId);
                    accDx = 0;
                    cwidth = (vertical) ? slider.h : slider. w;
                    startT = Number(new Date());
                    // CAROUSEL:

                    offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                        (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                            (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                    (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                }
            }

            function onMSGestureChange(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                var transX = -e.translationX,
                    transY = -e.translationY;

                //Accumulate translations.
                accDx = accDx + ((vertical) ? transY : transX);
                dx = accDx;
                scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));

                if(e.detail === e.MSGESTURE_FLAG_INERTIA){
                    setImmediate(function (){
                        el._gesture.stop();
                    });

                    return;
                }

                if (!scrolling || Number(new Date()) - startT > 500) {
                    e.preventDefault();
                    if (!fade && slider.transitions) {
                        if (!slider.vars.animationLoop) {
                            dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                        }
                        slider.setProps(offset + dx, "setTouch");
                    }
                }
            }

            function onMSGestureEnd(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                    var updateDx = (reverse) ? -dx : dx,
                        target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                    if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    } else {
                        if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                    }
                }

                startX = null;
                startY = null;
                dx = null;
                offset = null;
                accDx = 0;
            }
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) slider.doMath();

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) methods.smoothHeight();
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function(action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate": $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      },
      uniqueID: function($clone) {
        // Append _clone to current level and children elements with id attributes
        $clone.filter( '[id]' ).add($clone.find( '[id]' )).each(function() {
          var $this = $(this);
          $this.attr( 'id', $this.attr( 'id' ) + '_clone' );
        });
        return $clone;
      },
      pauseInvisible: {
        visProp: null,
        init: function() {
          var prefixes = ['webkit','moz','ms','o'];

          if ('hidden' in document) return 'hidden';
          for (var i = 0; i < prefixes.length; i++) {
            if ((prefixes[i] + 'Hidden') in document)
            methods.pauseInvisible.visProp = prefixes[i] + 'Hidden';
          }
          if (methods.pauseInvisible.visProp) {
            var evtname = methods.pauseInvisible.visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
            document.addEventListener(evtname, function() {
              if (methods.pauseInvisible.isHidden()) {
                if(slider.startTimeout) clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                else slider.pause(); //Or just pause
              }
              else {
                if(slider.started) slider.play(); //Initiated before, just play
                else (slider.vars.initDelay > 0) ? setTimeout(slider.play, slider.vars.initDelay) : slider.play(); //Didn't init before: simply init or wait for it
              }
            });
          }
        },
        isHidden: function() {
          return document[methods.pauseInvisible.visProp] || false;
        }
      },
      setToClearWatchedEvent: function() {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function() {
          watchedEvent = "";
        }, 3000);
      }
    };

    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = (target > slider.currentSlide) ? "next" : "prev";
      }

      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;

        // SLIDESHOW:
        if (pause) slider.pause();

        // API: before() animation Callback
        slider.vars.before(slider);

        // SYNC:
        if (slider.syncExists && !fromNav) methods.sync("animate");

        // CONTROLNAV
        if (slider.vars.controlNav) methods.controlNav.active();

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (slider.vars.directionNav) methods.directionNav.update();

        if (target === slider.last) {
          // API: end() of cycle Callback
          slider.vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!slider.vars.animationLoop) slider.pause();
        }

        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            //margin = (slider.vars.itemWidth > slider.w) ? slider.vars.itemMargin * 2 : slider.vars.itemMargin;
            margin = slider.vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            
            // Unbind previous transitionEnd events and re-bind new transitionEnd event
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              clearTimeout(slider.ensureAnimationEnd);
              slider.wrapup(dimension);
            });

            // Insurance for the ever-so-fickle transitionEnd event
            clearTimeout(slider.ensureAnimationEnd);
            slider.ensureAnimationEnd = setTimeout(function() {
              slider.wrapup(dimension);
            }, slider.vars.animationSpeed + 100);

          } else {
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);
            //slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

            slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
            slider.wrapup(dimension);
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) methods.smoothHeight(slider.vars.animationSpeed);
      }
    };
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      slider.vars.after(slider);
    };

    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating && focused ) slider.flexAnimate(slider.getTarget("next"));
    };
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) methods.pausePlay.update("play");
      // SYNC:
      if (slider.syncExists) methods.sync("pause");
    };
    // SLIDESHOW:
    slider.play = function() {
      if (slider.playing) clearInterval(slider.animatedSlides);
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = true;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) methods.pausePlay.update("pause");
      // SYNC:
      if (slider.syncExists) methods.sync("play");
    };
    // STOP:
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    };
    slider.canAdvance = function(target, fromNav) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (slider.vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    };
    slider.getTarget = function(dir) {
      slider.direction = dir;
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    };

    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());

            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
         slider.container.css("transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) slider.container.css(slider.args);

      slider.container.css('transform',target);
    };

    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") slider.container.find('.clone').remove();
          slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true'))
                          .prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
        }
        slider.newSlides = $(slider.vars.selector, slider);

        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
            slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) methods.smoothHeight();
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE:
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
        if (type === "init") {
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
            if (slider.vars.fadeFirstSlide == false) {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).css({"opacity": 1});
            } else {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
            }
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) methods.smoothHeight();
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");

      //FlexSlider: init() Callback
      slider.vars.init(slider);
    };

    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = slider.vars.itemMargin,
          minItems = slider.vars.minItems,
          maxItems = slider.vars.maxItems;

      slider.w = (slider.viewport===undefined) ? slider.width() : slider.viewport.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :
                       (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;

        slider.visible = Math.floor(slider.w/(slider.itemW));
        slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    };

    slider.update = function(pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (slider.vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (slider.vars.directionNav) methods.directionNav.update();

    };

    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      slider.vars.added(slider);
    };
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      slider.vars.removed(slider);
    };

    //FlexSlider: Initialize
    methods.init();
  };

  // Ensure the slider isn't focussed if the window loses focus.
  $( window ).blur( function ( e ) {
    focused = false;
  }).focus( function ( e ) {
    focused = true;
  });

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order
    fadeFirstSlide: true,           //Boolean: Fade in the first slide when animation type is "fade"
    thumbCaptions: false,           //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    pauseInvisible: true,   		//{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
    allowOneSlide: true,           //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide

    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){},           //{NEW} Callback: function(slider) - Fires after a slide is removed
    init: function() {}             //{NEW} Callback: function(slider) - Fires after the slider is initially setup
  };

  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    if (options === undefined) options = {};

    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

      if ( ( $slides.length === 1 && options.allowOneSlide === true ) || $slides.length === 0 ) {
          $slides.fadeIn(400);
          if (options.start) options.start($this);
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "stop": $slider.stop(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") $slider.flexAnimate(options, true);
      }
    }
  };
})(jQuery);


/*================================================================
=>                  App = iCareLife
==================================================================*/
/*global angular, $, window, navigator  --- */

var app = angular.module('iCareLife', ['ngCookies', 'ngResource', 'ngAnimate', 'ngRoute', 'ui.utils', 'ui.router', 'angularFileUpload', 'ngTouch', 'vr.directives.slider']);


app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
	'use strict';

	$stateProvider
		.state('landing', {
			url: '/landing',
			templateUrl: 'templates/landing.html',
			requireLogin: false
		})

		.state('aboutme', {
			url: '/aboutme',
			templateUrl: 'templates/aboutme2.html',
			//requireLogin: false
		})

		// Email conformation Route
		.state('landing.confirmEmail', {
			url: '/users/confirmation',
			templateUrl: 'templates/landing.html',
			requireLogin: false
		})


		//Change pwd conformation Route
		.state('landing.changePassword', {
			url: '/users/password/edit',
			templateUrl: 'templates/landing.html',
			requireLogin: false
		})

		.state('myReference', {
			url: '/myReference',
			templateUrl: 'templates/myReference.html'
		})

		.state('popular', {
			url: '/popular',
			templateUrl: 'templates/popular.html'
		})

		.state('content-library', {
			url: '/content-library',
			templateUrl: 'templates/content-library-learn.html'
		})
		.state('content-browse', {
			url: '/content-browse',
			templateUrl: 'templates/content-browse.html'
		});
		// $locationProvider.hashPrefix('!');
	$urlRouterProvider.otherwise('/landing');

		// This is required for Browser Sync to work poperly
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);


/*================================================================
=>                  iCareLife App Run()  
==================================================================*/

app.run(['$rootScope', '$state', '$location', '$route', '$filter', function ($rootScope, $state, $location, $route, $filter) {
	
	'use strict';

	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {


		//To check for login action
		if (toState.requireLogin !== false && !isLoggedIn()) {
			$state.transitionTo('landing');
		}
		else {
			$rootScope.currentState = toState.name;
		}

		// Location path reload or non reload
		var original = $location.path;
		$location.path = function (path, reload) {
			if (reload === false) {
				var lastRoute = $route.current;
				var un = $rootScope.$on('$locationChangeSuccess', function () {
					$route.current = lastRoute;
				});
			}

			return original.apply($location, [path]);
		};

	});

	//To check auth token
	var isLoggedIn = function () {

		//Get authTokens after successfull login for API calls
		$.cookie.json = true;
		var userDetails = $.cookie('userDetails');

		var domain = userDetails['domains'][0];

		var profile_types = userDetails['profile_types'][0];

		var access_reasons = userDetails['access_reasons'][0];

		//profile_types  domains
		$.cookie('domains', domain, { expires: 300, path: '/' }); /* Elder Care Baby Care Driver*/
		$.cookie('profile_types', profile_types, { expires: 300, path: '/' }); /* Service Seeker and Service Provider*/
		$.cookie('access_reasons', access_reasons, { expires: 300, path: '/' }); /* Learn or Hire or Job*/

		if (userDetails && userDetails['authentication_token'] != null) {
			$rootScope.authToken = userDetails['authentication_token'];
			$rootScope.profileType = profile_types;
			$rootScope.domainType = domain;
			$rootScope.userId = userDetails['id'];
			$rootScope.isLoginIn = true;
			console.log(userDetails);

			return (!$rootScope.authToken) ? false : true;
		}
	};

	/** SPINNER SHOW FUNCTION
	* The function takes a jQuery based element and show the loading Spinner on it.
	* The idea is to position the passed in element where ever we want to show the Spinner.
	* @param  {jQuery} $spin
	* @return {}
	*/
	
	$rootScope.showSpinner = function ($spin) {
		
		var loadingSpinner = $filter('spinner');
		$rootScope.hideSpinner($spin);

		$spin.css('z-index', 9999);
		loadingSpinner('show', {element: $spin});
	};


	/** SPINNER HIDE FUNCTION
	* The function takes a jQuery based element and hides the loading Spinner on it.
	* @param  {jQuery} $spin
	* @return {}
	*/
	
	$rootScope.hideSpinner = function ($spin) {
		$spin.css('z-index', -9999);
		
		var loadingSpinner = $filter('spinner');
		loadingSpinner('hide', {element: $spin});
	};

}]);


/* ---> Do not delete this comment (Values)<--- */
// App config


app.constant('appConfig', {

	// Dev
	//baseURL: 'http://54.169.63.144:3000',
	baseURL : 'http://icarelife-staging-ws.sourcebits.com:3000'
	// baseURL : 'http://192.168.10.125:3000'


	// Sales
	// wsURL: 'wss://64.77.63.30:8080/TouchLive/productionSocket',
	// baseURL: 'https://liveapi-test.ratetiger.com:7030/touch-rest-services/services/',
});

/* ---> Do not delete this comment (Constants) <--- */

/*================================================================
=>                   Service = aboutAPI
==================================================================*/
/*global app, $http*/

app.service('contentAPI', ['$rootScope', '$q', 'appConfig', '$http', function ($rootScope, $q, appConfig, $http) {

	'use strict';

	this.getcontentlibrary = function () {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/user_contents/categories?authentication_token='+ $rootScope.authToken +'&categories=0' + categories;
		

		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	this.getcontentFilter = function () {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/user_contents/filter';
		

		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};
	

}]);


/*-----  End of Service = aboutAPI  ------*/




/*================================================================
=>                   Service = countryapi
==================================================================*/
/*global app*/

app.service('countryAPI', ['$rootScope', '$q', '$http', 'appConfig', function ($rootScope, $q, $http, appConfig) {

	'use strict';

	this.getCountry = function () {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/countries';

		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	this.getStates = function (countryID) {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/countries/' + countryID + '/states';	

		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

}]);


/*-----  End of Service = countryapi  ------*/
/*================================================================
=>                   Service = notifyManager
==================================================================*/
/*global app, document, $*/

app.service('notifyManager', ['$timeout', function ($timeout) {
	
	'use strict';

	var show = [], html, container, ele;
	container = document.createElement('div');
	container.className = 'notify-container';
	document.body.appendChild(container);

	this.show = function (msg, status, time) {
		//if no time is given. Set timeOut to 3000 
		var timeOut = time;
		if (typeof timeOut === 'undefined') {
			timeOut = 3000;
		}
		
		ele = document.createElement('div');
		
		$('.notify-container').addClass('blk');
		$(container).children().remove();
		ele.className = 'notify ' + status;
		ele.innerHTML = msg;
			
		//append element to container based on the class ( status )
		container.appendChild(ele);

		$timeout(function () {
			$('.' + status + '').css('opacity', '1');
		}, 50);
		this.hide(container, ele, timeOut);
	},

	this.hide = function (parent, ele, timeOut) {
		$timeout(function () {
			$('.notify-container').removeClass('blk');
			$(parent).children().remove();
		}, timeOut);
	};
}]);

/*================================================================
=>                   Service = loginAPI
==================================================================*/
/*global app, $http*/

app.service('setValue', ['$rootScope', 'appConfig', '$q', '$http', function ($rootScope, appConfig, $q, $http) {

	'use strict';

	this.emailId = null;
	this.countryList = null;

	this.setEmailId = function (value) {
		this.emailId = value;
	};

	this.getEmailId = function () {
		return this.emailId;
	};

	this.setCountryList = function (value) {
		this.countryList = value;
	};

	this.getCountryList = function () {
		return this.countryList;
	};

	this.setProfileType = function(value){
		 this.profileType = value;
		
	}

	this.getProfileType = function(){
		 //return this.profileType;
		  return $.cookie('profile_types');
        
	}

	this.setAccessReasons = function(value){
		 this.AccessReasons = value;
		 
	}

	this.getAccessReasons = function(){
		// return this.AccessReasons;
		 return $.cookie('access_reasons');
        
	}

	this.setDomains = function(value){
		 this.Domains = value;
		
	}

	this.getDomains = function(){
		// return this.Domains;domains
		return $.cookie('domains');
	}
	
}]);


/*-----  End of Service = loginAPI  ------*/

/*================================================================
=>                   Service = aboutAPI
==================================================================*/
/*global app, $http*/

app.service('aboutAPI', ['$rootScope', '$q', 'appConfig', '$http', function ($rootScope, $q, appConfig, $http) {

	'use strict';

	this.getAboutDetails = function (serviceType) {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/about_me?authentication_token=' + $rootScope.authToken + '&service_type=' + serviceType;
		

		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	this.postDetails = function (userData) {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/about_me';

		$http.post(serviceUrl, userData)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	this.getProfile = function (serviceType) {
		
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/profile?authentication_token=' + $rootScope.authToken + '&service_type=' + serviceType;
		
		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
				console.log('error',err);
			});

		return deferred.promise;
	};

	this.googleLogin = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/sign_in/google';

		var requestBody = {
			'user' : userData //user data from the login form
		};
		
		$http.post(serviceUrl, requestBody)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};	

	this.facebookLogin = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/sign_in/facebook';

		var requestBody = {
			'user' : userData //user data from the login form
		};
		
		$http.post(serviceUrl, requestBody)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};	

}]);


/*-----  End of Service = aboutAPI  ------*/

/*================================================================
=>                   Service = emailAPI
==================================================================*/
/*global app, $http*/

app.service('emailAPI', ['$rootScope', 'appConfig', '$q', '$http', function ($rootScope, appConfig, $q, $http) {

	'use strict';

	//To conform OTP
	this.resendEmail = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/confirmation';

		$http.post(serviceUrl, userData)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};


	//To conform EMAIL
	this.confirmEmail = function (confirmToken) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/confirmation?confirmation_token=' + confirmToken;
		console.log(serviceUrl);
		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

}]);


/*-----  End of Service = emailAPI  ------*/

/*================================================================
=>                   Service = forgotPwdAPI
==================================================================*/
/*global app, $http*/

app.service('forgotPwdAPI', ['$rootScope', 'appConfig', '$q', '$http', function ($rootScope, appConfig, $q, $http) {

	'use strict';

	//To send forgot password email
	this.forgotPwd = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/password';

		var requestData = {
			'user' : {
				'email' : userData
			}
		};

		$http.post(serviceUrl, requestData)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};


	//To change password
	this.changePWD = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/password';

		var requestBody = {
			'user' : userData
		};

		$http.put(serviceUrl, requestBody)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

}]);


/*-----  End of Service = forgotPwdAPI  ------*/


/*================================================================
=>                   Service = loginAPI
==================================================================*/
/*global app, $http*/

app.service('loginAPI', ['$rootScope', 'appConfig', '$q', '$http', function ($rootScope, appConfig, $q, $http) {

	'use strict';

	this.userLogin = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/sign_in';

		var requestBody = {
			'user' : userData //user data from the login form
		};
		
		$http.post(serviceUrl, requestBody)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};


	this.googleLogin = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/sign_in/google';

		var requestBody = {
			'user' : userData //user data from the login form
		};
		
		$http.post(serviceUrl, requestBody)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};	

	this.facebookLogin = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/sign_in/facebook';

		var requestBody = {
			'user' : userData //user data from the login form
		};
		
		$http.post(serviceUrl, requestBody)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};	
}]);


/*-----  End of Service = loginAPI  ------*/

/*================================================================
=>                   Service = otpAPI
==================================================================*/
/*global app, $http*/

app.service('otpAPI', ['$rootScope', 'appConfig', '$q', '$http', function ($rootScope, appConfig, $q, $http) {

	'use strict';

	//To conform OTP
	this.twoFactorAuth = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/two_factor_authentication';

		$http.put(serviceUrl, userData)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	//To resend OTP
	this.twoFactorResend = function (userData) {
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/two_factor_authentication';

		$http.post(serviceUrl, userData)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

}]);


/*-----  End of Service = otpAPI  ------*/

/*================================================================
=>                   Service = signUp
==================================================================*/
/*global app, $http*/

app.service('signUp', ['$rootScope', '$q', 'appConfig', '$http', function ($rootScope, $q, appConfig, $http) {

	'use strict';

	this.getUserType = function () {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users/sign_up';

		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	//SignUp

	this.registerUser = function (userData) {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/users';

		$http.post(serviceUrl, userData)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

}]);


/*-----  End of Service = signUp  ------*/

/*================================================================
=>                   Service = myReferenceAPI
==================================================================*/
/*global app*/

app.service('myReferenceAPI', ['$rootScope', '$q', '$http', 'appConfig', function ($rootScope, $q, $http, appConfig) {

	'use strict';

	this.getDetails = function () {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/myReferences?authentication_token=' + $rootScope.authToken;
		// console.log(serviceUrl);

		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	this.updateDetails = function (userDetails) {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/myReferences';
		
		$http.put(serviceUrl, userDetails)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

}]);


/*-----  End of Service = myReferenceAPI  ------*/

/*================================================================
=>                   Service = mySkillsAPI
==================================================================*/
/*global app*/

app.service('mySkillsAPI', ['$rootScope', '$q', '$http', 'appConfig', function ($rootScope, $q, $http, appConfig) {

	'use strict';

	//getting myskill details
	this.getDetails = function (serviceType) {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/mySkills?authentication_token=' + $rootScope.authToken + '&service_type=' + serviceType;
		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
			});

		return deferred.promise;
	};

	//saving the myskill for the first time after login if no myskill data is not present
	this.saveDetails = function (userDetails) {

		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/mySkills';
		
		$http.post(serviceUrl, userDetails)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				nsole.log('mySkills error',data);
				deferred.reject(err);
			});

		return deferred.promise;
	};


}]);


/*-----  End of Service = mySkillsAPI  ------*/

/*================================================================
=>                   Service = myProfileAPI
==================================================================*/
/*global app, $http*/

app.service('myProfileAPI', ['$rootScope', '$q', 'appConfig', '$http', function ($rootScope, $q, appConfig, $http) {

	'use strict';

	this.getProfileDetails = function () {
		
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/my_profile?authentication_token=' + $rootScope.authToken;
		
		$http.get(serviceUrl)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
				console.log('error',err);
			});

		return deferred.promise;
	};

	this.postProfileDetails = function (userData) {
		
		var deferred = $q.defer();
		var serviceUrl = appConfig.baseURL + '/api/my_profile';

		$http.post(serviceUrl, userData)
			.success(function (data) {
				deferred.resolve(data);
			})
			.error(function (err) {
				deferred.reject(err);
				console.log('error',err);
			});

		return deferred.promise;
	};

}]);


/*-----  End of Service = aboutAPI  ------*/




'use strict';
/*global $, navigator, Modernizr, window, FastClick, _, document */

/**
 * [Utility is an object which contains all the custom utility methods ]
 * @type {Object}
 */
var Utility = {


    /*====================================================================================
    =>            Of whatever element being passed in, this function 
    removes the class from the element
    ====================================================================================*/

    removeCls: function (element, className) {
        element.removeClass(className);
    },



    /*====================================================================================
    =>            Of whatever element being passed in, this function 
    adds the class from the element
    ====================================================================================*/

    addCls: function (element, className) {
        element.addClass(className);
    },

    /*====================================================================================
    =>            Of whatever element being passed in, this function 
    will stop the scrolling effect
    ====================================================================================*/

    hideScroll: function (element) {
        element.style.overflow = 'hidden';
    },

    /*====================================================================================
    =>            Of whatever element being passed in, this function 
    will starts the scrolling effect
    ====================================================================================*/

    showScroll: function (element) {
        element.style.overflow = 'scroll';
    },

    /*====================================================================================
    =>           Mobile menu click
    ====================================================================================*/

    mobileMenu: function () {
      $('header .mobile-menu-icon').on('click', function(e) {
        e.stopPropagation();
        $('header .mobile-menu-container').slideDown();
      });
      $('body').on('click', function() {
        $('header .mobile-menu-container').slideUp();
      });
    },

    /*====================================================================================
    =>           Accordian Tab and icon Chnage Event
    ====================================================================================*/
    getSelectedHeader: function(value){ 
       $('.panel div:first-child').removeClass('active-header');
       $('.panel div:first-child').find('div#toggleButton').removeClass('toggle-icon-active').addClass('toggle-icon');
       $('#'+value).addClass('active-header');
       var toggle = $('#'+value).find('div#toggleButton').removeClass('toggle-icon').addClass('toggle-icon-active');
     },


    /*====================================================================================
    =>           Carousel On landing Page and User Profile Page
    ====================================================================================*/

    carsouelCalling : function () {
        $('.flexslider').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 210,
            itemMargin: 5,
            pausePlay: false,
            maxItems: 3,
        });
        
    },

    /*====================================================================================
    =>          Resume Selector
    ====================================================================================*/
    resumeSelector : function(value){
        $(".caption").removeClass("selected-resume");
        //$('#'+value).parentsUntil( ".thumbnail" ).removeClass("selected-resume");
        $('#'+value).parentsUntil( ".thumbnail" ).addClass("selected-resume");

    }





};

var disPopCourcesList = {
    'Elder Care': [
        {
            'id' : 1,
            'name' : 'Elder Care',
            'img' : 'images/babycare.jpeg',
            'module_count' : 16,
            'certificate_count' : 1,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 2,
            'name' : 'Elder Care',
            'img' : 'images/childcare.jpeg',
            'module_count' : 6,
            'certificate_count' : 2,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 3,
            'name' : 'Elder Care',
            'img' : 'images/urbanbaby.jpeg',
            'module_count' : 13,
            'certificate_count' : 3,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 4,
            'name' : 'Elder Care',
            'img' : 'images/childcare.jpeg',
            'module_count' : 24,
            'certificate_count' : 4,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 5,
            'name' : 'Elder Care',
            'img' : 'images/babycare.jpeg',
            'module_count' : 21,
            'certificate_count' : 5,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 6,
            'name' : 'Elder Care',
            'img' : 'images/urbanbaby.jpeg',
            'module_count' : 21,
            'certificate_count' : 6,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 7,
            'name' : 'Elder Care',
            'img' : 'images/childcare.jpeg',
            'module_count' : 21,
            'certificate_count' : 7,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }
    ],
    'Baby Care': [
        {
            'id' : 1,
            'name' : 'Baby Care',
            'img' : 'images/urbanbaby.jpeg',
            'module_count' : 23,
            'certificate_count' : 12,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        },  {
            'id' : 2,
            'name' : 'Baby Care',
            'img' : 'images/childcare.jpeg',
            'module_count' : 44,
            'certificate_count' : 22,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 3,
            'name' : 'babycare',
            'img' : 'images/urbanbaby.jpeg',
            'module_count' : 45,
            'certificate_count' : 67,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 4,
            'name' : 'Baby Care',
            'img' : 'images/urbanbaby.jpeg',
            'module_count' : 8,
            'certificate_count' : 3,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 5,
            'name' : 'Baby Care',
            'img' : 'images/urbanbaby.jpeg',
            'module_count' : 4,
            'certificate_count' : 7,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }
    ],
    'Driver': [
        {
            'id' : 1,
            'name' : 'Driver',
            'img' : 'images/urbandriver.jpeg',
            'module_count' : 16,
            'certificate_count' : 122,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 2,
            'name' : 'Driver',
            'img' : 'images/urbandriver.jpeg',
            'module_count' : 60,
            'certificate_count' : 7,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 3,
            'name' : 'Driver',
            'img' : 'images/childcare.jpeg',
            'module_count' : 66,
            'certificate_count' : 23,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 4,
            'name' : 'Driver',
            'img' : 'images/childcare.jpeg',
            'module_count' : 45,
            'certificate_count' : 6,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }, {
            'id' : 5,
            'name' : 'Driver',
            'img' : 'images/urbanbaby.jpeg',
            'module_count' : 21,
            'certificate_count' : 56,
            'description' : 'Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.'
        }
    ]
};

var setUpYourAccount = {
    'ServiceSeeker': {
        'name': 'Service Seeker',
        'id': 'Service Seeker',
        'iwant': [
            {
                'name': 'Learn',
                'id': 'Learn',
                'Learn': {
                    'lookingfor': [
                        {'name': 'Baby Care', 'id': 'baycare'}, {'name': 'Child Care', 'id': 'childcare'}, {'name': 'Elder Care', 'id': 'eldercare'}, {'name': 'Driving', 'id': 'driving'}
                    ]
                }
            }, {
                'name': 'Hire',
                'id': 'Hire',
                'Hire': {
                    'lookingfor': [
                        {'name': 'Baby Caregiver', 'id': 'baycaregiver'}, {'name': 'Child Caregiver', 'id': 'childcaregiver'}, {'name': 'Elder Caregiver', 'id': 'eldercaregiver'}, {'name': 'Chauffeur/Driving', 'id': 'Chauffeur/Driving'}
                    ]
                }
            }
        ]
    },
    'ServiceProvider': {
        'name': 'Service Provider',
        'id': 'Service Provider',
        'iwant': [
            {
                'name': 'Learn/Get Trained',
                'id': 'Learn/Get Trained',
                'Learn/Get Trained': {
                    'lookingfor': [
                        {'name': 'Baby Caregiving', 'id': 'baycaregiving'}, {'name': 'Child Caregiving', 'id': 'childcaregiving'}, {'name': 'Elder Caregiving', 'id': 'eldercaregiving'}, {'name': 'Driving', 'id': 'Driving'}, {'name': 'Food Court Etiquette', 'id': 'foodcourt'}
                    ]
                }
            }, {
                'name': 'Get a Job',
                'id': 'Get a Job',
                'Get a Job': {
                    'lookingfor': [
                        {'name': 'Baby Caregiver Job', 'id': 'baycaregiverjob'}, {'name': 'Child Caregiver Job', 'id': 'childcaregiverjob'}, {'name': 'Elder Caregiver Job', 'id': 'eldercaregiverjob'}, {'name': 'Chauffeur/Driving Job', 'id': 'Chauffeur/Drivingjob'}, {'name': 'Food Court Staff', 'id': 'foodcourtstaffjob'}
                    ]
                }
            }
        ]
    }
};

/*=====================================================
  =>                  Controller = aboutMeController
  =======================================================*/
/*global app*/
app.controller('aboutmeCtrl', ['$http', '$scope', '$rootScope', 'aboutAPI','setValue', 'myReferenceAPI', function ($http, $scope, $rootScope, aboutAPI, setValue, myReferenceAPI) {
    
    'use strict';

    //Initialize fileReader support
    $scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);

    $scope.panel0 = false;
    $scope.panel1 = true;
    $scope.panel2 = true;
    $scope.panel3 = true;
    $scope.panel4 = true;
    $scope.test = 'fgdgf';
    $scope.progressBar = "0%";
    $scope.onlyForServiceProvider = false;
    if(setValue.getProfileType() == 'Service Seeker'){
	$scope.onlyForServiceProvider = true;
    }
    $scope.selectTab = function (value) {
	switch (value) {
	case 0 : 
	    $scope.panel0 = false;
	    $scope.panel1 = true;
	    $scope.panel2 = true;
	    $scope.panel3 = true;
	    $scope.panel4 = true;
	    $scope.progressBar = "20%";
	    break;
	case 1 : 
	    $scope.panel0 = true;
	    $scope.panel1 = false;
	    $scope.panel2 = true;
	    $scope.panel3 = true;
	    $scope.panel4 = true;
	    $scope.progressBar = "40%";
	    break;

	case 2 :
	    $scope.panel0 = true;
	    $scope.panel1 = true;
	    $scope.panel2 = false;
	    $scope.panel3 = true;
	    $scope.panel4 = true;
	    $scope.progressBar = "60%";
	    break;

	case 3 : 
    	    myReferenceAPI.getDetails()
		.then(function(data){
		    $scope.panel0 = true;
		    $scope.panel1 = true;
		    $scope.panel2 = true;
		    $scope.panel3 = false;
		    $scope.panel4 = true;
		    $scope.progressBar = "80%";
		    if (data != null) {
			if(data.user_references_attributes.length != 0){
			    $scope.emailId = data.user_references_attributes[0].email;
			    $scope.firstName = data.user_references_attributes[0].first_name;;
			    $scope.lastName = data.user_references_attributes[0].last_name;
			    $scope.knowDuration = parseInt(data.user_references_attributes[0].known_duration);
			    $scope.mobileNo = parseInt(data.user_references_attributes[0].phone);
			    $scope.membershipId = data.user_references_attributes[0].icare_membership;
			    $scope.relationships = data.user_references_attributes[0].relationship;
			    $scope.user_reference_id = data.user_references_attributes[0].id;
			    $scope.verificationType = data.drop_down_keys.verification_types;

			    for (var i in data.drop_down_keys.relationships) {
				var option = data.drop_down_keys.relationships[i];
				if (option.id === $scope.relationships) {
				    $scope.selectedRelationship = option;
				    break;
				}
			    }

			    buildVerificationTypeObject(data);
			}
		    }
		},
		      function(err){
			  console.log('failed get -->', err);
		      });
	    break;

	case 4 : 
	    $scope.panel0 = true;
	    $scope.panel1 = true;
	    $scope.panel2 = true;
	    $scope.panel3 = true;
	    $scope.panel4 = false;
	    $scope.progressBar = "100%";
	    break;
	}
    };


    var buildVerificationTypeObject = function(data){
	$scope.planName = [];
	$scope.price = [];
	$scope.test = [];
	$scope.hash_map = {};
	$scope.verification_Names = [];
	var length = data['drop_down_keys']['verification_types'].length;
	for(var count = 0; count < length; count ++) {
	    var plan_name = data['drop_down_keys']['verification_types'][count].plan_name;
	    $scope.planName[count] = plan_name;
	    
	    $scope.price[count] = data['drop_down_keys']['verification_types'][count].price;
	    for (var i=0; i< data['drop_down_keys']['verification_types'][count].types.length; i++){
		var key = data['drop_down_keys']['verification_types'][count].types[i].name;
		var value = data['drop_down_keys']['verification_types'][count].types[i].value;

		if(!$scope.hash_map.hasOwnProperty(key)){
		    $scope.hash_map[key] = [];
		    $scope[plan_name + "_" + key] = value;
		}
		
		$scope.hash_map[key].push(value);
	    }
	}

    };


    var aboutMeData = function () {
	$http.get("../json/aboutMe.json").success(function(response) {
	    $scope.aboutMeJson = response;
	    $scope.profile_highlight_header = $scope.aboutMeJson[0]['profile_highlight_container'][0]['profile_highlight_header'];
	    $scope.profile_highlight_buttonName = $scope.aboutMeJson[0]['profile_highlight_container'][1]['profile_highlight_buttonName'];
	    $scope.profile_highlight_Message = $scope.aboutMeJson[0]['profile_highlight_container'][2]['profile_highlight_Message'];

	    $scope.centerHeadingMain = $scope.aboutMeJson[1]['centerHeading'][0]['centerHeadingMain'];
	    $scope.centerHeadingMainSubText = $scope.aboutMeJson[1]['centerHeading'][1]['centerHeadingMainSubText'];

	    $scope.projectCompletion = $scope.aboutMeJson[2]['projectCompletion'];

	    $scope.AboutMe = $scope.aboutMeJson[3]['horizontalMenu'][0]['AboutMe'];
	    $scope.MySkills = $scope.aboutMeJson[3]['horizontalMenu'][1]['MySkills'];
	    $scope.MyPayment = $scope.aboutMeJson[3]['horizontalMenu'][2]['MyPayment'];
	    $scope.MyReferences = $scope.aboutMeJson[3]['horizontalMenu'][3]['MyReferences'];
	    $scope.MyProfile = $scope.aboutMeJson[3]['horizontalMenu'][4]['MyProfile'];

	    $scope.personalDetailsHeading = $scope.aboutMeJson[4]['personalDetails'][0]['personalDetailsHeading'];
	    $scope.socialMedia = $scope.aboutMeJson[4]['personalDetails'][1]['socialMedia'];
	    $scope.fb = $scope.aboutMeJson[4]['personalDetails'][2]['fb'];
	    $scope.google = $scope.aboutMeJson[4]['personalDetails'][3]['google'];
	    $scope.twitter = $scope.aboutMeJson[4]['personalDetails'][4]['twitter'];
	    $scope.profilePhoto = $scope.aboutMeJson[4]['personalDetails'][5]['profilePhoto'];
	    $scope.DOB = $scope.aboutMeJson[4]['personalDetails'][6]['DOB'];
	    $scope.dbFormat = $scope.aboutMeJson[4]['personalDetails'][7]['dbFormat'];
	    $scope.address = $scope.aboutMeJson[4]['personalDetails'][8]['address'];
	    $scope.addressPlaceHolder1 = $scope.aboutMeJson[4]['personalDetails'][9]['addressPlaceHolder1'];
	    $scope.addressPlaceHolder2 = $scope.aboutMeJson[4]['personalDetails'][10]['addressPlaceHolder2'];
	    $scope.landmark = $scope.aboutMeJson[4]['personalDetails'][11]['landmark'];
	    $scope.landmarkPlaceHolder = $scope.aboutMeJson[4]['personalDetails'][12]['landmarkPlaceHolder'];
	    $scope.state = $scope.aboutMeJson[4]['personalDetails'][13]['state'];
	    $scope.Country = $scope.aboutMeJson[4]['personalDetails'][14]['Country'];
	    $scope.pincode = $scope.aboutMeJson[4]['personalDetails'][15]['pincode'];
	    $scope.pincodePlaceHolder = $scope.aboutMeJson[4]['personalDetails'][16]['pincodePlaceHolder'];
	    $scope.gender = $scope.aboutMeJson[4]['personalDetails'][17]['gender'];
	    $scope.male = $scope.aboutMeJson[4]['personalDetails'][18]['male'];
	    $scope.female = $scope.aboutMeJson[4]['personalDetails'][19]['female'];
	    $scope.other = $scope.aboutMeJson[4]['personalDetails'][20]['other'];
	    $scope.ethnicity = $scope.aboutMeJson[4]['personalDetails'][21]['ethnicity'];
	    $scope.religion = $scope.aboutMeJson[4]['personalDetails'][22]['religion'];
	    $scope.bloodGroup = $scope.aboutMeJson[4]['personalDetails'][23]['bloodGroup'];
	    $scope.nationality = $scope.aboutMeJson[4]['personalDetails'][24]['nationality'];
	    $scope.dl = $scope.aboutMeJson[4]['personalDetails'][25]['dl'];
	    $scope.dlPlaceHolder = $scope.aboutMeJson[4]['personalDetails'][26]['dlPlaceHolder'];
	    $scope.workEligibility = $scope.aboutMeJson[4]['personalDetails'][27]['workEligibility'];
	    
	    $scope.workPermit = $scope.aboutMeJson[4]['personalDetails'][28]['workPermit'];
	    $scope.id = $scope.aboutMeJson[4]['personalDetails'][29]['id'];


	    $scope.browse = $scope.aboutMeJson[5]['common'][0]['browseButton'];
	    $scope.select = $scope.aboutMeJson[5]['common'][1]['select'];
	    $scope.skip = $scope.aboutMeJson[5]['common'][2]['skip'];
	    $scope.next = $scope.aboutMeJson[5]['common'][3]['next'];
	    $scope.addMore = $scope.aboutMeJson[5]['common'][4]['addMore'];

	    $scope.educationalQualificationHeading = $scope.aboutMeJson[6]['educationalQualification'][0]['educationalQualificationHeading'];
	    $scope.heq = $scope.aboutMeJson[6]['educationalQualification'][1]['heq'];
	    $scope.coe = $scope.aboutMeJson[6]['educationalQualification'][2]['coe'];
	    $scope.language = $scope.aboutMeJson[6]['educationalQualification'][3]['language'];
	    $scope.proficiency = $scope.aboutMeJson[6]['educationalQualification'][4]['proficiency'];
	})
	    .error(function(e){
		console.log('error is'+e);
	    });
    };
    aboutMeData ();

    $scope.getProfilePic = function () {
	$('#profile_pic').click();
    };


    $scope.getImage = function (value) {
	
	switch(value) {
	case 1 : 
	    $('#pdffile').click();
	    $('#pdffile').change(function(){
		$('#subfile').val($(this).val());
	    }); 
	    $('#showHidden').click(function(){
		$('#pdffile').css('visibilty','visible');
	    });
	    break;
	case 2 : 
	    $('#license').click();
	    $('#license').change(function(){
		$('#licenseValue').val($(this).val());
	    }); 
	    $('#showHidden').click(function(){
		$('#license').css('visibilty','visible');
	    });
	    break;
	case 3 : 
	    $('#wpermit').click();
	    $('#wpermit').change(function(){
		$('#wpermitValue').val($(this).val());
	    }); 
	    $('#showHidden').click(function(){
		$('#wpermit').css('visibilty','visible');
	    });
	    break;
	case 4 : 
	    $('#passport').click();
	    $('#passport').change(function(){
		$('#passportValue').val($(this).val());
	    }); 
	    $('#showHidden').click(function(){
		$('#passport').css('visibilty','visible');
	    });
	    break;	      
	}
    };

	$scope.showProfile = function () {
		
	};

    /* Get About me form data to populate
     * 1. Get from token after login
     * 2. Make GET API call
     * 3. Populate data into the form
     */

    var getAboutMeData = function () {
	aboutAPI.getAboutDetails()
	    .then(function(data) {
		customizedData(data);
    	    },
    		  function(data){
    		      console.log('error==>', data);
    		  });
    };
    
    //getAboutMeData(); //get form data

	var customizedData = function (data) {

		// $scope.addresses = data.addresses;
		// $scope.bloodGroups = data.blood_group;
		// $scope.country = data.country;
		// $scope.ethnicity = data.ethnicity;
		// $scope.familyDetail = data.family_detail;
		// $scope.gender = data.gender;
		// $scope.highestEducation = data.highest_education;
		// $scope.identityDocumentType = data.identity_document_type;
		// $scope.landmark = data.landmark;
		// $scope.language = data.language;
		// $scope.nationality = data.nationality;
		// $scope.options = data.options;
		// $scope.state = data.state;
		// $scope.userDetails = data.user_details;
		// $scope.userHealthDetail = data.user_health_detail;


    };

    //Generate Thumb to show to user on upload
    $scope.generateThumb = function(file) {
	if (file != null) {
	    console.log($scope.fileReaderSupported)
	    if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
		$timeout(function() {
		    var fileReader = new FileReader();
		    fileReader.readAsDataURL(file);
		    fileReader.onload = function(e) {
			$timeout(function() {
			    file.dataUrl = e.target.result;
			});
		    }
		});
	    }
	    else {
	
	    }
	}
    };

    /* About form submission
     * 1. Get form data from user
     * 2. check validation
     * 3. Show response to user
     */

    //Initializing
    $scope.userOptions = {
	'authentication_token' : '',
	'user': {
	    'user_details_attributes': {
		'0': {
		    // 'profile_photo': $scope.profile_pic,
		    'date_of_birth': $scope.selectedDOB,
		    'gender': $scope.gender, //s
		    'ethnicity': $scope.ethnicity, //s
		    'religion': $scope.selectedReligion,
		    'driving_license': $scope.driving_license,
		    'work_permit': $scope.work_permit,
		    'identity_document': $scope.identity_document,
		    'highest_education': $scope.highestEducation, //s
		    'country_of_education': $scope.country_of_education
		}
	    },
	    'addresses_attributes': {
		'0': {
		    'line_1': $scope.address1, //s
		    'line_2': $scope.address2, //s
		    'landmark': $scope.landmark, //s
		    'state': $scope.state, //s
		    'city': $scope.selectedCity,
		    'country': $scope.country, //s
		    'pin': $scope.selectedPin //s
		}
	    },
	    'user_health_detail_attributes': {
		'blood_group': $scope.bloodGroups
	    },
	    'family_detail_attributes': {
		'marital_status': $scope.marital_status,
		'members_count': $scope.members_count,
		'children': $scope.selectedChildren,
		'elders': $scope.selectedElders,
		'annual_family_income': $scope.annual_family_income
	    }
	}
    };

    //Gender selection
    $scope.selectGender = function (q, c) {
	angular.forEach(q.choices, function (c) {
	    c.isUserAnswer = false;
	});
	c.isUserAnswer = true;
    };

    //Submit form
    $scope.submitAboutMe = function () {

	$scope.userOptions['authentication_token'] = $rootScope.authToken; //adding authtokens

	
	//submit from data to user
	aboutAPI.postDetails($scope.userOptions)
	    .then(function (data) {
	
	    },
		  function (err) {
		     
		  });
    };


    

   

}]);

/*-----  End of Controller = aboutMeCtrl  ------*/


/*================================================================
=>                  Controller = Myreference
==================================================================*/
/*global app*/

app.controller('contentlibraryctrl', ['$scope', '$rootScope', 'contentAPI', function ($scope, $rootScope,$contentAPI) {

	'use strict';
	
	
	

	$scope.browsecontent = function(selectedTab) {
		Utility.browsecontent(selectedTab);
	};


	var getCategoriesInfo = function (data) {
		console.log('filter infodata---->',data);
      contentAPI.getDetails(data)
          .then(function (data) {
              if (data !== null) {
                console.log('filter infodata---->',data);
              }
          });
          
  	};
 	// var getCountryList = function () {
  //   console.log('countries--->');
  //   countryAPI.getCountry()
  //     .then(function (data) {
  //       if (data != null) {
  //        $scope.countries = data;
  //       }
      
      
  //     });
  // };
		

	$scope.filter = { "'filter'": ["learn","childcare","babycare",""]};
	$scope.image = '';
	$scope.description = 'Leassons on safe driving over hill areas';
	$scope.moduels = '6 moduels,2 certifications';
	$scope.userCount = '5000 users enrolled';
	$scope.price = '$15';
	$scope.userlikes = "200"
	$scope.submitForm = function(){
	var data = [
	    {
	        "id": 298486374,
	        "title": "tesssss",
	        "certifications": 111,
	        "description": "aaaaaaaaaa",
	        "image_url": null,
	        "domain_id": 1,
	        "created_at": "2015-01-08T18:55:36.000Z",
	        "updated_at": "2015-01-20T12:05:55.000Z",
	        "pricing": 123,
	        "competency": null,
	        "course_structure": null,
	        "skill_level": 1,
	        "likes": null,
	        "unlikes": null,
	        "spree_products_id": null,
	        "certifications_id": null,
	        "subsribed_users_count": null
	    },
	    {
	        "id": 980190963,
	        "title": "tesssss",
	        "certifications": 111,
	        "description": "eeee",
	        "image_url": null,
	        "domain_id": 1,
	        "created_at": "2015-01-20T11:53:08.000Z",
	        "updated_at": "2015-01-20T11:53:08.000Z",
	        "pricing": null,
	        "competency": null,
	        "course_structure": null,
	        "skill_level": null,
	        "likes": null,
	        "unlikes": null,
	        "spree_products_id": null,
	        "certifications_id": null,
	        "subsribed_users_count": null
	    },
	]
	}

	
	$scope.showgridview = function() {
		Utility.carsouelCalling();
		$('.gridview').removeClass('none');
		$('.listview').addClass('none');
		
	};

	$scope.showlistview = function() {
		$('.listview').removeClass('none');
		$('.gridview').addClass('none');
		
	};
	
	// $scope.showPopup = function() {
	// 	$('.content-module').removeClass('none');
	// 	$('.gridview').addClass('none');
		
	// };
	$scope.showPopup = function() {
		
		if ( $('.popup-module')[0].className.match('none') ) {
			$('.popup-module').removeClass('none');
		}
		$('.content-module').removeClass('none');
			
	};
	
}]);


/*-----  End of Controller = Myreference  ------*/


/*================================================================
=>                  Controller = Discover popular cources
==================================================================*/
/*global app, $, Utility, disPopCourcesList, _ */

app.controller('discoverPopCourceCtrl', ['$scope', '$rootScope', '$interval', function ($scope, $rootScope, $interval) {

    'use strict';

    console.log('Controller ===  VideoCtrl');

    $scope.selectedBtn = 'Elder Care';
    $scope.disPopCourcesList = disPopCourcesList;
    $scope.selectedCourceList = disPopCourcesList['Elder Care'];
    $scope.selectedList = $scope.selectedCourceList;

    $scope.selectSegmentBtn = function (btn) {
        $scope.selectedBtn = btn;
        $scope.selectedCourceList = disPopCourcesList[btn];
        $scope.selectedList = disPopCourcesList[btn];
    };

    $scope.showDetailedContent = function () {
        $scope.disPopOverlay = !$scope.disPopOverlay;
        // Utility.hideScroll($('body')[0]);
    };

    $scope.navNext = function () {
         var dpc = $('.videos');
        dpc.removeClass('slide-prev-left');
        var selectList = _.first($scope.selectedList, 3);
        var index = _.last(selectList).id;
        if (index + 1 <= $scope.selectedCourceList.length) {
            //removing first element
            selectList.splice(0, 1);

            //adding next element
            selectList.push($scope.selectedCourceList[index], 0);
            $scope.selectedList = selectList;
        } else {
            index = 0;
            //removing first element
            selectList.splice(0, 1);
            //adding next element
            selectList.push($scope.selectedCourceList[index], 0);
            $scope.selectedList = selectList;
        }
    };

    $scope.navPrev = function () {
        console.log('nav prev');
        var dpc = $('.videos');
        dpc.addClass('slide-prev-left');
        var selectList = _.first($scope.selectedList, 3);
        var index = _.first(selectList).id;
        if (index - 1 > 0) {
            //removing last element
            selectList.splice(selectList.length - 1, 1);

            //adding first element
            selectList.splice(0, 0, $scope.selectedCourceList[index - 2]);
            $scope.selectedList = selectList;
        }
    };

    var fn = function () {

        if (!$scope.modalShown) {
            $scope.navNext();
        }
    };
    $interval(fn, 3000);
    
}]);


/*-----  End of Controller = Home  ------*/

/*=====================================================
=>                  Controller = headerCtrl
=======================================================*/

app.controller('headerCtrl', ['$http', '$scope', '$rootScope', '$timeout', '$location', function($http, $scope, $rootScope, $timeout, $location) {
	
	'use strict';

  $scope.mobileMenu = function() {
  	Utility.mobileMenu();
  };

  /* LOGOUT FUNCTION */
	$scope.logout = function() {
		$timeout(function () {
			$rootScope.authToken = '';
			$rootScope.apiToken = '';
			$.removeCookie('userDetails');
			$.removeCookie('domains');
			$.removeCookie('profile_types');
			$.removeCookie('access_reasons');
			$location.path('/landing');
		}, 1);
	};

	$scope.showcontent = function() {
		
  	$location.path('/content-library');
  };
}]);

	/*================================================================
	=>                  Controller = Home
	==================================================================*/
	/*global app, $, Utility */

app.controller('landingCtrl', ['$scope', '$rootScope','$http', '$location', '$routeParams', 'emailAPI', 'forgotPwdAPI', 'signUp', 'notifyManager', '$timeout', function ($scope, $rootScope, $http, $location, $routeParams, emailAPI, forgotPwdAPI, signUp, notifyManager, $timeout) {

	'use strict';
	
	$(document).ready(function() {

		$rootScope.selectHeader = function (value) {
			switch(value) {
        case 1 : 
        $('.firstDiv').addClass('selecteddivContent');
        $rootScope.checkSelectedClassStatus(1);
        break;
        case 2 :
        $('.secondDiv').addClass('selecteddivContent');
        $rootScope.checkSelectedClassStatus(2);
        break;
        case 3 :
        $('.thirdDiv').addClass('selecteddivContent');
        $rootScope.checkSelectedClassStatus(3);
        break;
    	}
		};

		$rootScope.checkSelectedClassStatus = function (value) {
	    switch(value){
        case 1 : 
        	$('.secondDiv').removeClass("selecteddivContent");
        	$('.thirdDiv').removeClass("selecteddivContent");
        
        break;
        case 2 :
       		$('.firstDiv').removeClass("selecteddivContent");
       		$('.thirdDiv').removeClass("selecteddivContent");
        break;
        case 3 :
        	$('.secondDiv').removeClass("selecteddivContent");
        	$('.firstDiv').removeClass("selecteddivContent");
        break;
    	}
		};


		$('.open-modal').click(function() {
			$('#userDetailsModal').modal('hide');
			$('#usersignupModel').modal('hide');
			
			$('#myModal').modal('show');
			$scope.secondList = true;
			$scope.thirdList = true;
		});

		$('.otp-modal').click(function() {
			$('#otpModel').modal('show');
		});
		
		$('.fgtPassword-modal').click(function() {
			$('#fwspasswordModel').modal('show');

			$('#myModal').modal('hide');

		});
		
		$('.userDetails-modal').click(function() {
			$('#usersignupModel').modal('hide');
			$('#userDetailsModal').modal('show');
			$('#myModal').modal('hide');
		});
		
		// $('.usersignup-modal').click(function() {
		// 	$('#usersignupModel').modal('show');
		// 	$('#myModal').modal('hide');

		// });
		
		$rootScope.selectHeader(1);
	});

	var getThumbNailData = function () {

		

		if ($rootScope.currentState === "aboutme") {
			return true;
		}


		$http.get("../json/thumbnails.json").success(function(response) {
		
	 	$scope.data = response;
	 	
	 	$scope.arrayLength = $scope.data.length;
	 	$scope.displayData = function(value){
	 		//var classId = 'content'+value;
	 		$("div.tab-pane.active").removeClass("active");
	 		switch(value) {
	 			case 101 :
	 			var imageArray = $scope.data[0].content.items;
	 			var length = $scope.data[0].content.items.length;
	 			if(!count) {
	 		$( "#carousel" ).remove();
	 			$(".thumbnailSlider").append("<div class='flexslider carousel' id='carousel'>");
	 			count = false;
	 			}
	 			var data = '<ul class="slides">'
	 			for(var count = 0; count < length ; count ++ ){
	 				
	 				data = data + '<li><div class="thumbnail"><img src='+imageArray[count].imgSrc+'><div class="caption"><h3>'+imageArray[count].header+'</h3><h4>'+imageArray[count].subheader+'</h4><p class="description">'+imageArray[count].descritpion+'</p></div></div></li>'
	 			}
	 			data = data + '</ul>';
     			document.getElementById('carousel').innerHTML = data;
     			carsouelCalling();
                break;
	 			case 102 :
	 			var imageArray = $scope.data[1].content.items;
	 			var length = $scope.data[1].content.items.length;
	 			$( "#carousel" ).remove();
	 			$(".thumbnailSlider").append("<div class='flexslider carousel' id='carousel'>");
	 			var data = '<ul class="slides">'
	 			for(var count = 0; count < length ; count ++ ){
	 				
	 				data = data + '<li><div class="thumbnail"><img src='+imageArray[count].imgSrc+'><div class="caption"><h3>'+imageArray[count].header+'</h3><h4>'+imageArray[count].subheader+'</h4><p class="description">'+imageArray[count].descritpion+'</p></div></div></li>'
	 			}
	 			data = data + '</ul>';
	 			document.getElementById('carousel').innerHTML = data;
	 			carsouelCalling();
	 			count = false;
	 			 break;
	 			case 103 :
	 			var imageArray = $scope.data[2].content.items;
	 			var length = $scope.data[2].content.items.length;
	 			$( "#carousel" ).remove();
	 			$(".thumbnailSlider").append("<div class='flexslider carousel' id='carousel'>");
	 			var data = '<ul class="slides">';
	 			for(var count = 0; count < length ; count ++ ){
	 				
	 				data = data + '<li><div class="thumbnail"><img src='+imageArray[count].imgSrc+'><div class="caption"><h3>'+imageArray[count].header+'</h3><h4>'+imageArray[count].subheader+'</h4><p class="description">'+imageArray[count].descritpion+'</p></div></div></li>'
	 			}
	 			data = data + '</ul>';
	 			document.getElementById('carousel').innerHTML = data;
	 			 carsouelCalling();
      			count = false;
	 			 break;
	 			 case 104 :
	 			var imageArray = $scope.data[2].content.items;
	 			var length = $scope.data[2].content.items.length;
	 			$( "#carousel" ).remove();
	 			$(".thumbnailSlider").append("<div class='flexslider carousel' id='carousel'>");
	 			var data = '<ul class="slides">';
	 			for(var count = 0; count < length ; count ++ ){
	 				
	 				data = data + '<li><div class="thumbnail"><img src='+imageArray[count].imgSrc+'><div class="caption"><h3>'+imageArray[count].header+'</h3><h4>'+imageArray[count].subheader+'</h4><p class="description">'+imageArray[count].descritpion+'</p></div></div></li>'
	 			}
	 			data = data + '</ul>';
	 			document.getElementById('carousel').innerHTML = data;
	 			 carsouelCalling();
      			count = false;
	 			 break;
	 			  case 105 :
	 			var imageArray = $scope.data[2].content.items;
	 			var length = $scope.data[2].content.items.length;
	 			$( "#carousel" ).remove();
	 			$(".thumbnailSlider").append("<div class='flexslider carousel' id='carousel'>");
	 			var data = '<ul class="slides">';
	 			for(var count = 0; count < length ; count ++ ){
	 				
	 				data = data + '<li><div class="thumbnail"><img src='+imageArray[count].imgSrc+'><div class="caption"><h3>'+imageArray[count].header+'</h3><h4>'+imageArray[count].subheader+'</h4><p class="description">'+imageArray[count].descritpion+'</p></div></div></li>'
	 			}
	 			data = data + '</ul>';
	 			document.getElementById('carousel').innerHTML = data;
	 			 carsouelCalling();
      			count = false;
	 			 break;
	 			
	 		}
	 	}
	 	$scope.displayData(101);
	 	
	 	
		}).error(function(e) {
				
		});
	};	
	getThumbNailData ();

	/**
	  * ##User Email Conformation
	  * 1. Watch the URL for users/confirmation
	  * 2. Get conformation token from URL params,
	  * 3. Make API call and show notification to user
	*/

	$scope.confirmPwdToken = '';
	var userData = {};
	
	$rootScope.$watch('$routeChangeStart', function (current, previous) { 
		
		var currentURL = $location.path(); //will get current URL
		
		//To conform Email address
		if (currentURL === '/landing/users/confirmation') {
			
			var confirmToken = $location.search()['confirmation_token']; //gets #token from URL

			//Make API call to conform Email
			emailAPI.confirmEmail(confirmToken)
				.then(function (data) {
					console.log(data);
					notifyManager.show('Email has been confirmed', 'success'); //default timeout 3s					
					$timeout(function () {
						$location.url($location.path('/landing'));
					}, 3000);
				}, 
				function (err) {
					console.log(err);
					if (err.confirmation_token) {
						var status = 'Confirmation token ' + err.confirmation_token;
						notifyManager.show(status, 'error');
						$timeout(function () {
							$location.url($location.path('/landing'));
						}, 3000);
					}
				});
		}
		//To Change password
		else if (currentURL === '/landing/users/password/edit') {
			$scope.confirmPwdToken = $location.search()['reset_password_token']; //gets #token from URL
			$('#changePwdModel').modal('show');
		}
	});

	//On popup close, reset form
	$('#myModal').on('click', '.closePopup, .modal-backdrop', function (event) {
		event.preventDefault();
		reset(); //reset form
	});

	//On hiding popup, reset form
	$('#myModal').on('hidden.bs.modal', function (event) {
  	event.preventDefault();
		reset(); //reset form
	});

	//Reset change password form and setPristine to form
	var reset = function () {
		if ($scope.changePwdForm) {
			$scope.changePwdForm.$setPristine(); //set form to initial pristine state
			$scope.changePwdFormMsg = '';
			$scope.changeSuccessMsg = '';
			$scope.changeFailedMsg = '';
			$scope.newPassword = '';
			$scope.confirmPassword = '';
			$scope.user = {
				'password': '',
				'password_confirmation': '',
				'reset_password_token': ''
			};
			$scope.$apply(); //apply scope value
		}
	};

	$scope.changePassword = function () {
		
		$scope.changeSuccessMsg = '';
		$scope.changeFailedMsg = '';

		userData = {
			'password': $scope.newPassword,
			'password_confirmation': $scope.confirmPassword,
			'reset_password_token': $scope.confirmPwdToken
		};

		//Make API call to conform Email
		forgotPwdAPI.changePWD(userData)
			.then(function (data) {
				if (data.status == 'success') {
					$location.url($location.path('/landing'));
					$('.changepwd-module').removeClass('none');
					$('#myModal').modal('show');
				}
			}, 
			function (err) {
				console.log(err);
				if (err.message['reset_password_token']) {
					$scope.changeFailedMsg = 'Reset token ' + err.message['reset_password_token'];
				}
			});
	};

	$scope.showLoginPopup = function() {
		
		if ( $('.popup-module')[0].className.match('none') ) {
			$('.popup-module').removeClass('none');
		}
		$('.login-module').removeClass('none');
		
		
	};

	$scope.showRegisterPopup = function() {

		if ( $('.popup-module')[0].className.match('none') ) {
			$('.popup-module').removeClass('none');
		}
		$('.login-module').addClass('none');
		$('.signup-module').removeClass('none');

	};

	$scope.showforgotpwd = function() {
		$('.forgotpwd-module').removeClass('none');
		$('.login-module').addClass('none');
	};

	$scope.showotppopup = function() {
		$('.otp-popup-module').removeClass('none');
		$('.signup-module').addClass('none');
		
	};

	$scope.closePopup = function() {
		$('.popup-module').addClass('none');
		$('.login-module').addClass('none');
		$('.signup-module').addClass('none');
		$('.forgotpwd-module').addClass('none');
		$('.otp-popup-module').addClass('none');
	};
	$scope.showcontent = function() {
		$('.content-learn-module').removeClass('none');
		$('.landing-module').addClass('none');
	};

	var carsouelCalling = function () {
		var gridSize;
		function getGridSize() {
		    return (window.innerWidth < 600) ? 1 : 3;
		};
		$('.flexslider').flexslider({
			animation: "slide",
			animationLoop: true,
			itemWidth: 210,
			itemMargin: 5,
			pausePlay: false,
			maxItems: getGridSize(),
		});
		$(window).resize(function() {
		    gridSize = getGridSize();
		    if ($('.discover-courses #carousel')[0]) {
		    	$('.discover-courses #carousel').data('flexslider').varsz.maxItems = gridSize;
		    }
		});
	};


}]);

/*================================================================
=>                  Controller = loginCtrl
==================================================================*/
/*global app, Utility, $*/

app.controller('loginCtrl', ['$scope', '$rootScope', 'appConfig', 'loginAPI', 'forgotPwdAPI', '$timeout', '$location', 'setValue', '$route', function ($scope, $rootScope, appConfig, loginAPI, forgotPwdAPI, $timeout, $location, setValue, $route) {
	
	'use strict';

	/**
	  * ##LOGIN FLOW
	  * 1. Get data from login form, 
	  * 2. Send the data to loginAPI
	  * 3. If user selects remember me, store in cookies for 30 days else save for 1 day
	  * 4. Authentication will be success if email and phone number are confirmed and go to home page, else display error message
	  * 5. If login button is clicked more than twice, show captcha and follow step 1-3 
	*/

	//Initializing user objects and captcha
	$scope.user = {
		'remember_me': 0
	};
	$scope.resetForm = {};
	$scope.loginErrorMsg;
	$rootScope.isLoginIn = false;
	$scope.isCaptcha = false; //hide captcha by default
	$.removeCookie('captchaStatus'); //remove captche status in cookies
	var counter = 0;

	//Reset login form and setPristine to form
	var reset = function () {
		if ($scope.loginForm && $scope.forgotEmailForm) {
			$scope.user = angular.copy($scope.resetForm);
			$scope.loginForm.$setPristine(); //set form to initial pristine state
			$scope.loginErrorMsg = '';

			$scope.forgotEmailForm.$setPristine();
			$scope.forgotErrorMsg = '';
			$scope.forgotSuccessMsg = '';
			$scope.userEmail = '';
			counter = 0; //reset capcha counter
			$scope.isCaptcha = false;
			$.removeCookie('captchaStatus');
			$scope.$apply(); //apply scope value
		}

		else if ($scope.forgotEmailForm) {
			$scope.forgotEmailForm.$setPristine();
			$scope.userEmailId = '';
			$scope.forgotErrorMsg = '';
			$scope.forgotSuccessMsg = '';
			counter = 0; //reset capcha counter
			$.removeCookie('captchaStatus');
			$scope.isCaptcha = false;
			$scope.$apply(); //apply scope value
		}
		else if ($scope.loginForm) {
			$scope.user = angular.copy($scope.resetForm);
			$scope.loginForm.$setPristine(); //set form to initial pristine state
			$scope.loginErrorMsg = '';
			counter = 0; //reset capcha counter
			$.removeCookie('captchaStatus');
			$scope.isCaptcha = false;
			$scope.$apply(); //apply scope value
		}
	};

	//On popup close, reset form
	$('#myModal').on('click', '.closePopup, .modal-backdrop', function (event) {
		event.preventDefault();
		reset(); //reset form
	});

	//On hiding popup, reset form
	$('#myModal').on('hidden.bs.modal', function (event) {
  	event.preventDefault();
		reset(); //reset form
	});

	//Common login method
	var loginUser = function () {
		setValue.setEmailId($scope.user.email);
		
		//Login API
		loginAPI.userLogin($scope.user)
			.then(function (data) {
				console.log(data);
				$('.btn-popup-login').removeAttr('disabled'); //enable login btn
				
				if (data.confirmed_email == true && data.confirmed_phone_number == true && data.authentication_token != null) {
					$.removeCookie('userDetails'); //remove previous userDetails
					$rootScope.authToken = '';
					$.cookie.json = true;
					//If remember me selected, store in cookies for 30 days
					if (data.remember_me == '1') {
						$.cookie('userDetails', data, { expires: 300, path: '/' }); //store userDetails in cookies
						$rootScope.authToken = data.authentication_token;
						$rootScope.userId = data.id;
						$timeout(function () {
							$('#myModal').modal('hide');
							$location.path('/aboutme');
						}, 100);
					}
					else {
						$.cookie('userDetails', data, { expires: 300, path: '/' });
						$rootScope.authToken = data.authentication_token;
						$rootScope.userId = data.id;
						$timeout(function () {
							$('#myModal').modal('hide');
							$location.path('/aboutme');
						}, 100);
					}
				}
				else if (data.confirmed_email == false && data.confirmed_phone_number == false) {
					$('#otpModel').modal('show');
					$('#myModal').modal('hide');
				}
				else if (data.confirmed_email == true && data.confirmed_phone_number == false) {
					$('#otpModel').modal('show');
					$('#myModal').modal('hide');
				}
				else if (data.confirmed_email == false && data.confirmed_phone_number == true) {
					$scope.loginErrorMsg = 'Email is not confirmation. Check your email for confirmation.';	 //TODO change the message
				}
			},
			function (err) {
				$('.btn-popup-login').removeAttr('disabled'); //enable login btn 
				if (err.message) {
					$scope.loginErrorMsg = err.message;
				}
			});
	};
	
	//Login submit
	$scope.loginFormSubmit = function () {
		counter++;
		$scope.loginErrorMsg = '';

		//show captcha, if email/password is wrong for more than twice
		if (counter > 2) {
			$scope.isCaptcha = true;
			
			if ($.cookie('captchaStatus') === 'success') {
				$scope.loginErrorMsg = '';
				$('.btn-popup-login').attr('disabled', 'disabled'); //disabled the login btn
				loginUser(); //call login method
			}
			else {
				$scope.loginErrorMsg = 'Enter the captcha';
				$('.btn-popup-login').attr('disabled', 'disabled');
			}
		}	
		else if (counter <= 2) {
			$('.btn-popup-login').attr('disabled', 'disabled');
			loginUser(); //call login method
		}
	};



	/**
	  * ##Forgot password
	  * 1. Get data from login form, 
	  * 2. Send the data to forgotpwdAPI
	  * 3. If authentication success, email is sent to registered email, else display error message
	*/

	$scope.forgotPwdEmail = function () {
		$scope.forgotErrorMsg = '';
		$scope.forgotSuccessMsg = '';

		$('.otp-subbtn').attr('disabled', 'disabled');

		//Call forgotPwd API
		forgotPwdAPI.forgotPwd($scope.userEmailId)
			.then(function (data) {
				$('.otp-subbtn').removeAttr('disabled');
				if (data.success === true) {
					$scope.forgotSuccessMsg = 'Instruction is sent to your registered email address';
				}
			},
			function (err) {
				$('.otp-subbtn').removeAttr('disabled');
				if (err['errors'].email) {
					$scope.forgotErrorMsg = 'Email ' + err['errors'].email;
				}
				console.log('error==>', err);
			});
	};
	
	//Social networks login
	$scope.loginGoogle = function() {
        var clientId = "693593979546-crlru3n841g17hg23r13fsdgu412t3og.apps.googleusercontent.com";
        var scope = "email";
        var redirect_uri = "http://localhost:3000";
        var response_type = "token";
        var url = "https://accounts.google.com/o/oauth2/auth?scope="+scope+"&client_id="+clientId+"&redirect_uri="+redirect_uri+
        "&response_type="+response_type;
        window.location.replace(url);
    };


    $scope.loginFacebook = function() {
        var clientId = "350562095126583";
        var scope = "email";
        var redirect_uri = "http://localhost:3000";
        var response_type = "token";
        
        var url = "https://www.facebook.com/dialog/oauth?scope="+scope+"&client_id="+clientId+"&redirect_uri="+redirect_uri+
        "&response_type="+response_type;
        window.location.replace(url);
    };

    
}]);

/*-----  End of Controller = loginCtrl  ------*/


/*=====================================================
=>                  Controller = aboutMeController
=======================================================*/
/*global app, $http*/

app.controller('myProfileCtrl', ['$http', '$scope', '$rootScope', 'myProfileAPI','countryAPI','setValue', function  ($http, $scope, $rootScope, myProfileAPI,countryAPI,setValue) {
	
	'use strict';


  $scope.spElderCareContentMyProfile = false;
  $scope.spDriverCotentMyProfile = false;
  $scope.spChildCareContentMyProfile = false;
  

  if(setValue.getProfileType() == "Service Provider" && (setValue.getDomains() == "Elder Caregiver Job" || setValue.getDomains() == "Elder Caregiver" ) && (setValue.getAccessReasons() == "Get a Job" || setValue.getAccessReasons() == "Learn/Get Trained")) {
    $scope.spElderCareContentMyProfile = false;
    $scope.spDriverCotentMyProfile = true;
    $scope.spChildCareContentMyProfile = true;  

  }  else if(setValue.getProfileType() == "Service Provider" && (setValue.getDomains() == "Child Caregiver Job" || setValue.getDomains() == "Baby Caregiver Job" || setValue.getDomains() == "Child Caregiver" || setValue.getDomains() == "Baby Caregiver") && (setValue.getAccessReasons() == "Get a Job" || setValue.getAccessReasons() == "Learn/Get Trained")) {
    $scope.spElderCareContentMyProfile = true;
    $scope.spDriverCotentMyProfile = true;
    $scope.spChildCareContentMyProfile = false;

  }  else {
    $scope.spElderCareContentMyProfile = true;
    $scope.spDriverCotentMyProfile = false;
    $scope.spChildCareContentMyProfile = true;
  }

  $scope.Request = {};
  $scope.countryName = ['India', 'USA', 'Germany'];
  $scope.stateName = ['Karnataka', 'A.P.', 'M.P', 'Texas'];
  $scope.payRate = ['$100', '$200', '$300'];
  $scope.others = false;
  $scope.bonus = false;
  $scope.phone = false;
  $scope.food = false;
  //$scope.countries = [];
  $scope.selectedCountries = [];


  $scope.getSelectedCountriesName = function(){
    console.log($scope.selectedCountry);
    if($scope.selectedCountry.length >3) {
      $scope.selectedCountry.shift();
    } 
  }
  
  var getMyProfileData = function () {
    myProfileAPI.getProfileDetails($scope.user)
      .then(function (data) {
        if (data != null) {
          console.log(data);
          countryAPI.getCountry()
          .then(function (data) {
            if (data != null) {
              $scope.countries = data;
            }
          },
          function (err) {
            if (err.success == false) {
              notifyManager.show('Failed to fetch countries', 'error');
            }
          });
          $scope.getmyProfile(data);
        }
      },
    function (err) {
      if (err) {
        $scope.loginErrorMsg = err.message;    
      }
      console.log('error' , err);
    });
  };

  $scope.getmyProfile = function(data) {

    if (data['care_requirements'][0] && data['care_requirements'][0]['can_volunteer_for_social_care_services'] != null) {
      $scope.volunteerservice = data['care_requirements'][0] && data['care_requirements'][0]['can_volunteer_for_social_care_services'];
      if($scope.volunteerservice) {
        $scope.volunteerservice = '1';
      } else {
        $scope.volunteerservice = '0';
      }
    }

    if (data['care_requirements'][0] && data['care_requirements'][0]['may_need_bonus'] != null) {
      $scope.bonus= data['care_requirements'][0] && data['care_requirements'][0]['may_need_bonus'];
    }
          
    if (data['care_requirements'][0] && data['care_requirements'][0]['may_need_food'] != null) {
      $scope.food= data['care_requirements'][0] && data['care_requirements'][0]['may_need_food'];
    }

    if (data['care_requirements'][0] && data['care_requirements'][0]['may_need_phone'] != null) {
      $scope.phone = data['care_requirements'][0] && data['care_requirements'][0]['may_need_phone'];
    }        

    if (data['care_requirements'][0] && data['care_requirements'][0]['health_insurance'] != null ) {
      $scope.others = data['care_requirements'][0] && data['care_requirements'][0]['health_insurance'];
    } 

    if (data['care_requirements'][0] && data['care_requirements'][0]['can_give_medical_test_if_sponsored'] != null) {
      $scope.medicalTest = data['care_requirements'][0] && data['care_requirements'][0]['can_give_medical_test_if_sponsored'];
      if($scope.medicalTest) {
        $scope.medicalTest = '1'
      } else {
        $scope.medicalTest = '0';
      }
    }  

    if (data['care_requirements'][0] && data['care_requirements'][0]['trial_for_free'] != null) {
      $scope.trialPeriod = data['care_requirements'][0] && data['care_requirements'][0]['trial_for_free'];
      if($scope.trialPeriod) {
        $scope.trialPeriod = '1';
      } else {
        $scope.trialPeriod = '2';
      }
    }

    if (data['care_requirements'][0] && data['care_requirements'][0]['receive_job_notifications_by_email'] != null) {
      $scope.email = data['care_requirements'][0] && data['care_requirements'][0]['receive_job_notifications_by_email'];
    } 

    if (data['care_requirements'][0] && data['care_requirements'][0]['receive_job_notifications_by_phone'] != null) {
       $scope.phone1 = data['care_requirements'][0] && data['care_requirements'][0]['receive_job_notifications_by_phone'];
    }

    if (data['care_requirements'][0] && data['care_requirements'][0]['expected_salary_per_day'] != null) {
      $scope.salaryperday = data['care_requirements'][0] && data['care_requirements'][0]['expected_salary_per_day'];
    }

    if (data['care_requirements'][0] && data['care_requirements'][0]['expected_salary_per_month'] != null) {
      $scope.salarypermonth = data['care_requirements'][0] && data['care_requirements'][0]['expected_salary_per_month'];
    }

    if(data['care_requirements'][0]['id'] != null) {
      $scope.myProfileId = data['care_requirements'][0]['id'];
    }
   
    if(data['care_requirements'][0] && data['care_requirements'][0]['work_permit_country_1'] != null) {
      $scope.selectedCountries.push(data['care_requirements'][0] && data['care_requirements'][0]['work_permit_country_1']);
      $scope.selectedCountry = $scope.getSelectedValue($scope.selectedCountries,'1');
    }

    if(data['care_requirements'][0] && data['care_requirements'][0]['work_permit_country_2'] != null) {
      $scope.selectedCountries.push(data['care_requirements'][0] && data['care_requirements'][0]['work_permit_country_2']);
      $scope.selectedCountry = $scope.getSelectedValue($scope.selectedCountries,'1');
    }

    if(data['care_requirements'][0] && data['care_requirements'][0]['work_permit_country_3'] != null) {
      $scope.selectedCountries.push(data['care_requirements'][0] && data['care_requirements'][0]['work_permit_country_3']);
      $scope.selectedCountry = $scope.getSelectedValue($scope.selectedCountries,'1');
    }

    if(data['care_requirements'][0] && data['care_requirements'][0]['relocate_to_country'] != null) {
      //$scope.selectedCountries.push(data['care_requirements'][0] && data['care_requirements'][0]['relocate_to_country']);
      $scope.relocateCountry = data['care_requirements'][0] && data['care_requirements'][0]['relocate_to_country'];
      $scope.selectedCountry = $scope.getSelectedValue($scope.relocateCountry,'2');
    }


    if(data['care_requirements'][0] && data['care_requirements'][0]['relocate_to_state'] != null) {
      //$scope.selectedCountries.push(data['care_requirements'][0] && data['care_requirements'][0]['relocate_to_country']);
      $scope.relocateState = data['care_requirements'][0] && data['care_requirements'][0]['relocate_to_state'];
      $scope.relocateState = $scope.getSelectedValue($scope.relocateState,'3');
    }

    if(data['care_requirements'][0] && data['care_requirements'][0]['resume_template'] != null) {
      var resume = data['care_requirements'][0] && data['care_requirements'][0]['resume_template'];
      $('#template'+resume).parentsUntil( ".thumbnail" ).addClass("selected-resume");
    }

  }

  $scope.getSelectedValue = function (selectedValue,type) {
  var getSelectedCountryList = [];
  var getRelocatCountryList = '';
  var getRelocateStateList = '';
    countryAPI.getCountry()
          .then(function (data) {
            if (data != null) {
              if(type == '1') {
                for(var count =0;count < selectedValue.length; count++) {
                  for(var countryCount=0 ; countryCount < data.length; countryCount ++) {
                    if(selectedValue[count] == data[countryCount].name) {
                      getSelectedCountryList.push({id: data[countryCount].id, name: data[countryCount].name})
                    }
                  }
                  $scope.selectedCountry =getSelectedCountryList;
                }
               }
            if(type =="2") {
              console.log(selectedValue,type);
              for(var countryCount1=0 ; countryCount1 < data.length; countryCount1 ++) {
                  if(selectedValue == data[countryCount1].name) {
                    getRelocatCountryList = ({id: data[countryCount1].id, name: data[countryCount1].name})
                    console.log(getRelocatCountryList);
                  }
                  $scope.relocateCountry = getRelocatCountryList;
                }
            }
            if(type =="3") {
              console.log(getRelocateStateList);
              $scope.selectState = getRelocateStateList;
              }   
            }
          },
          function (err) {
            if (err.success == false) {
              notifyManager.show('Failed to fetch countries', 'error');
            }
          });
  
         
/*
    if(selectedValue == null || dropdowns == null) {
      return false;
    }

    var scope = {};
    
    for (var i in dropdowns) {
      var option = dropdowns[i];
      console.log(dropdowns[i]);
      if (option.name === selectedValue) {
        scope = option;
        break;
      }
    }

    return scope;*/
  };

  $scope.getStates = function(){
    var countryId = $scope.relocateCountry[0]['id'];
    countryAPI.getStates(countryId)
          .then(function (data) {
            if (data != null) {
            }
          },
          function (err) {
            if (err.success == false) {
              notifyManager.show('Failed to fetch countries', 'error');
            }
          });


  };

  getMyProfileData();


  // Post APi for Elder Care

/*=====================================================
  =>            Service Provider Elder Care
=======================================================*/
$scope.submitRefCheckForElder = function(){
  if($scope.volunteerservice == '1') {
    $scope.volunteerservice = true;
  } else { 
    $scope.volunteerservice =false;
  };

  if($scope.medicalTest == '1') {
    $scope.medicalTestValue == true;
  } else {
    $scope.medicalTestValue == false;
  }
  $scope.trialPeriod = parseInt($scope.trialPeriod, 10);
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "work_permit_country_1": $scope.selectedCountry[0].name,
            "work_permit_country_2": $scope.selectedCountry[1].name,
            "work_permit_country_3": $scope.selectedCountry[2].name,
            "relocate_to_country": $scope.relocateCountry.name,
            "relocate_to_state": $scope.selectState,
            "can_volunteer_for_social_care_services": $scope.volunteerservice,
            "expected_salary_per_day": $scope.salaryperday,
            "expected_salary_per_month": $scope.salarypermonth,
            "health_insurance": $scope.others,
            "may_need_bonus": $scope.bonus,
            "may_need_phone": $scope.phone,
            "may_need_food": $scope.food,
            "may_need_others": $scope.otherService,
            "can_give_medical_test_if_sponsored": $scope.medicalTestValue,
            "can_offer_trial_service": $scope.trialPeriod,
          }
        }
      }
    }
    $scope.formSubmit(request);
 }
 $scope.submitRefCheckForElderPart2 = function(){
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "receive_job_notifications_by_phone": $scope.phone1,
            "receive_job_notifications_by_email": $scope.email
            }
        }
      }
    }
    $scope.formSubmit(request);
 }
 $scope.submitRefCheckForElderPart3 = function(){
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "resume_template": $scope.resumename,
            "enable_resume_service": $scope.enable_resume_service,
            "i_agree": $scope.agreeDeclare
            }
        }
      }
    }
    $scope.formSubmit(request);
 }

/*=====================================================
  =>            Service Provider Child Care
=======================================================*/
$scope.submitRefCheckForChild = function(){
  if($scope.volunteerservice == '1') {
    $scope.volunteerservice = true;
  } else { 
    $scope.volunteerservice =false;
  };

  if($scope.medicalTest == '1') {
    $scope.medicalTestValue == true;
  } else {
    $scope.medicalTestValue == false;
  }
  $scope.trialPeriod = parseInt($scope.trialPeriod, 10);
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "work_permit_country_1": $scope.selectedCountry[0].name,
            "work_permit_country_2": $scope.selectedCountry[1].name,
            "work_permit_country_3": $scope.selectedCountry[2].name,
            "relocate_to_country": $scope.relocateCountry.name,
            "relocate_to_state": $scope.selectState,
            "can_volunteer_for_social_care_services": $scope.volunteerservice,
            "expected_salary_per_day": $scope.salaryperday,
            "expected_salary_per_month": $scope.salarypermonth,
            "health_insurance": $scope.others,
            "may_need_bonus": $scope.bonus,
            "may_need_phone": $scope.phone,
            "may_need_food": $scope.food,
            "may_need_others": $scope.otherService,
            "can_give_medical_test_if_sponsored": $scope.medicalTestValue,
            "can_offer_trial_service": $scope.trialPeriod,
          }
        }
      }
    }
    $scope.formSubmit(request);
 }
 $scope.submitRefCheckForChildPart2 = function(){
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "receive_job_notifications_by_phone": $scope.phone1,
            "receive_job_notifications_by_email": $scope.email
           /* "resume_template": 1,
            "enable_resume_service": true,
            "i_agree": true*/
            }
        }
      }
    }
    $scope.formSubmit(request);
 }
 $scope.submitRefCheckForChildPart3 = function(){
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "resume_template": $scope.resumename,
            "enable_resume_service": $scope.enable_resume_service,
            "i_agree": $scope.agreeDeclare
            }
        }
      }
    }
    $scope.formSubmit(request);
 }


/*=====================================================
  =>            Service Provider Driver Care
=======================================================*/
$scope.submitRefCheckForDriver = function(){
  if($scope.volunteerservice == '1') {
    $scope.volunteerservice = true;
  } else { 
    $scope.volunteerservice =false;
  };

  if($scope.medicalTest == '1') {
    $scope.medicalTestValue == true;
  } else {
    $scope.medicalTestValue == false;
  }
  $scope.trialPeriod = parseInt($scope.trialPeriod, 10);
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "work_permit_country_1": $scope.selectedCountry[0].name,
            "work_permit_country_2": $scope.selectedCountry[1].name,
            "work_permit_country_3": $scope.selectedCountry[2].name,
            "relocate_to_country": $scope.relocateCountry.name,
            "relocate_to_state": $scope.selectState,
            "can_volunteer_for_social_care_services": $scope.volunteerservice,
            "expected_salary_per_day": $scope.salaryperday,
            "expected_salary_per_month": $scope.salarypermonth,
            "health_insurance": $scope.others,
            "may_need_bonus": $scope.bonus,
            "may_need_phone": $scope.phone,
            "may_need_food": $scope.food,
            "may_need_others": $scope.otherService,
            "can_give_medical_test_if_sponsored": $scope.medicalTestValue,
            "can_offer_trial_service": $scope.trialPeriod,
          }
        }
      }
    }
    $scope.formSubmit(request);
 }
 $scope.submitRefCheckForDriverPart2 = function(){
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "receive_job_notifications_by_phone": $scope.phone1,
            "receive_job_notifications_by_email": $scope.email
           /* "resume_template": 1,
            "enable_resume_service": true,
            "i_agree": true*/
            }
        }
      }
    }
    $scope.formSubmit(request);
 }
 $scope.submitRefCheckForDriverPart3 = function(){
  var request = {
    "authentication_token": $rootScope.authToken,
      "user": {
        "care_requirements_attributes": {
          "0": {
            'id': $scope.myProfileId ? $scope.myProfileId : null,
            "resume_template": $scope.resumename,
            "enable_resume_service": $scope.enable_resume_service,
            "i_agree": $scope.agreeDeclare
            }
        }
      }
    }
    $scope.formSubmit(request);
 }
  //Common Function For Form Submit
  $scope.formSubmit = function(data){
    myProfileAPI.postProfileDetails(data)
      .then(function (data) {
        console.log('success'+data);
        console.log(data);
      },
      function (err) {
        $scope.loginErrorMsg = err.message;
      });
  };
  
  $scope.getSelectedHeader = function(selectedTab) {

    Utility.carsouelCalling();
    Utility.getSelectedHeader(selectedTab);
  };

  $scope.selectResume = function(id){
    Utility.resumeSelector(id);
    $scope.resumename = $('#'+id).next().val();
    ;
  }
  
}]);

/*================================================================
  =>                  Controller = Myreference
  ==================================================================*/
/*global app*/

app.controller('myReferenceCtrl', ['$scope', '$rootScope', 'myReferenceAPI', 'notifyManager', 'setValue', '$filter', function ($scope, $rootScope, myReferenceAPI, notifyManager, setValue, $filter) {

    'use strict';

    //Initializing
    var userDetails = {};
    
    /* To stop input type='number' mouse scroll */
    $('form').on('focus', 'input[type=number]', function (e) {
	$(this).on('mousewheel.disableScroll', function (e) {
	    e.preventDefault()
	});
    });

    $('form').on('blur', 'input[type=number]', function (e) {
	$(this).off('mousewheel.disableScroll')
    });


    /* Get my reference details to populate in form
     * 1. Get from token after login
     * 2. Make API call
     * 3. Populate data in form
     */

    myReferenceAPI.getDetails()
	.then(function (data) {
	    if (data != null) {
		$scope.relationships = data.drop_down_keys.relationships;
		$scope.verificationType = data.drop_down_keys.verification_types;
	    }
	},
	      function (err) {
		  console.log('failed get -->', err);
	      });

    $scope.getSelectedHeader = function(selectedTab) {
	Utility.carsouelCalling();
	Utility.getSelectedHeader(selectedTab);
    };

    $scope.elderCareContentMyReference = false;
    $scope.driverCotentMyReference = false;
    $scope.childCareContentMyReference = false;
    $scope.sschildCareContent = false;
    $scope.sselderCareContent = false;

    if(setValue.getProfileType() == "Service Provider" && (setValue.getDomains() == "Elder Caregiver Job" || setValue.getDomains() == "Elder Caregiver" ) && (setValue.getAccessReasons() == "Get a Job" || setValue.getAccessReasons() == "Learn/Get Trained")) {
	$scope.elderCareContentMyReference = false;
	$scope.driverCotentMyReference = true;
	$scope.childCareContentMyReference = true;
	$scope.sschildCareContent = true;
	$scope.sselderCareContent = true;

    }  else if(setValue.getProfileType() == "Service Provider" && (setValue.getDomains() == "Child Caregiver Job" || setValue.getDomains() == "Baby Caregiver Job" || setValue.getDomains() == "Child Caregiver" || setValue.getDomains() == "Baby Caregiver") && (setValue.getAccessReasons() == "Get a Job" || setValue.getAccessReasons() == "Learn/Get Trained")) {
	$scope.elderCareContentMyReference = true;
	$scope.driverCotentMyReference = true;
	$scope.childCareContentMyReference = false;
	$scope.sschildCareContent = true;
	$scope.sselderCareContent = true;
    }  else if(setValue.getProfileType() == "Service Seeker" && (setValue.getDomains() == "Baby Care" || setValue.getDomains() == "Child Care" || setValue.getDomains() == "Baby Caregiver" || setValue.getDomains() == "Child Caregiver") && (setValue.getAccessReasons() == "Learn" || setValue.getAccessReasons() == "Hire")) 
    {
	$scope.sschildCareContent = false;
	$scope.elderCareContentMyReference = true;
	$scope.driverCotentMyReference = true;
	$scope.childCareContentMyReference = true;	
	$scope.sselderCareContent = true;
    }  else if(setValue.getProfileType() == "Service Seeker" && (setValue.getDomains() == "Elder Care" || setValue.getDomains() =="Elder Caregiver") && (setValue.getAccessReasons() == "Learn" || setValue.getAccessReasons() == "Hire")) {
	$scope.sschildCareContent = true;
	$scope.elderCareContentMyReference = true;
	$scope.driverCotentMyReference = true;
	$scope.childCareContentMyReference = true;	
	$scope.sselderCareContent = false;
    }
    else {
	$scope.elderCareContentMyReference = true;
	$scope.driverCotentMyReference = true;
	$scope.childCareContentMyReference = false;
	$scope.sschildCareContent = true;
	$scope.sselderCareContent = true;
    }

    if (setValue.getProfileType() == 'Service Seeker') {
	$scope.onlyForServiceProvider = true;
    }


    //Reset form data
    $scope.resetForm = {};

    //reset form
    var reset = function () {
	if ($scope.aboutForm) {
	    userDetails = angular.copy(resetForm);
	    $scope.aboutForm.$setPristine();
	}
    };


    $scope.selectBackgroudCheck = function (event) {
	var isActive = $('.bgSelection').hasClass('active-bg-check');
	$('.bgSelection').removeClass('active-bg-check');
	$(event.target).parent().parent().addClass('active-bg-check');
	var selectedList = $(event.target).prev().prop("checked", true);
	$scope.backgroundSelction = 'true';
    };

    var submitFormValue = function (userData) {
	
	//submit from data to user
	myReferenceAPI.updateDetails(userData)
	    .then(function (data) {
		notifyManager.show('Successfully submitted', 'success');
	    },
		  function (err) {
		      notifyManager.show('Form submission failed', 'error');
		  });
    };

    $scope.submitBgCheck = function () {

	var userDetails = {
	    'authentication_token': $rootScope.authToken,
	    'service_type': $rootScope.profileType,
	    'user': {
	    	'user_details_attributes': [{
	            'verification_type': $scope.membershipId //n
		}]
	    }
	};

	//submit formdata to API
	submitFormValue(userDetails);
    };

    $scope.submitRefCheck = function () {

	var userDetails = {
	    'authentication_token': $rootScope.authToken,
	    'service_type': $rootScope.profileType,
	    'user': {
		'skip_validation':true,
		'user_references_attributes': {
		    "0":{
			'id': $scope.user_reference_id || null,
			'first_name': $scope.firstName,
			'last_name': $scope.lastName,
			'email': $scope.emailId,
			'relationship': $scope.selectedRelationship['id'],
			'known_duration': $scope.knowDuration,
			'phone': $scope.mobileNo,
			'icare_membership': $scope.membershipId
		    },
		},
	    }
	};

	//submit formdata to API
	submitFormValue(userDetails);
    };


}]);


/*-----  End of Controller = Myreference  ------*/





/*================================================================
=>                  Controller = Myskillsctrl
==================================================================*/
/*global app jshint camelcase: true*/

app.controller('MyskillsCtrl', ['$scope', '$rootScope', 'setValue', 'mySkillsAPI', 'countryAPI', 'notifyManager', function ($scope, $rootScope, setValue, mySkillsAPI, countryAPI, notifyManager) {

	'use strict';

	$scope.getSelectedHeader = function (selectedTab) {
		Utility.getSelectedHeader(selectedTab);
	};
  
  $scope.getDetailsInfo = {};

  /*
  * GET Country API
  *  1. Make GET API and populate in select option
  *  2. On selecting country, get states and show it to user
  */

  var getCountryList = function () {
    countryAPI.getCountry()
      .then(function (data) {
        if (data != null) {
         $scope.countries = data;
        }
      },
      function (err) {
        if (err.success == false) {
         notifyManager.show('Failed to fetch countries', 'error');
        }
      });
  };
  getCountryList();

    /* Get my skills details for driver and populate in form
    * 1. Get from token after login
    * 2. Make API call
    * 3. Populate data in form
    */

  var getDriverInfo = function (serviceType) {
      
      mySkillsAPI.getDetails(serviceType)
          .then(function (data) {
              if (data !== null) {
                $scope.getDetailsInfo = data;
                $scope.vehicleBrands = data.options.car_brands;
                $scope.verificationType = data.verification_types;

                setTimeout(function(){ $scope.driverDetailsInfo(); }, 2000);
                
              }
          },
          function (err) {
              if (err) {
                  notifyManager.show('Failed to get myskills details', 'error');
                  console.log('error',err);
              }
          });
  };

  /* Get my skills details for ElderCare and populate in form
  * 1. Get from token after login
  * 2. Make API call
  * 3. Populate data in form
  */
  var getElderCareInfo = function (serviceType) {

      mySkillsAPI.getDetails(serviceType)
          .then(function (data) {
              if (data !== null) {
                $scope.getElderDetailsInfo = data;
                $scope.elderCareDetailsInfo();

              }
          },
          function (err) {
              if (err) {
                  notifyManager.show('Failed to get myskills details', 'error');
                  console.log('error',err);
              }
          });
  };

	/* Hide and Show the Content Based on THe User Selection*/
  $scope.elderCareContentMySkills = false;
	$scope.driverCotentMySkills = false;
	$scope.displayDiseaseType = true;
	$scope.hideDiseaseType = true;
	$scope.showPartTimeTable = true;
	$scope.hidePartTimeTable = false;
	$scope.childCareContent = false;
  $scope.multipleChildField = true;
  $scope.childSpecialNeeds = true;
  if (setValue.getProfileType() === 'Service Provider' && (setValue.getDomains() === 'Elder Caregiver Job' || setValue.getDomains() === 'Elder Caregiver') && (setValue.getAccessReasons() === 'Get a Job' || setValue.getAccessReasons() === 'Learn/Get Trained')) {
    $scope.elderCareContentMySkills = false;
		$scope.driverCotentMySkills = true;
		$scope.childCareContent = true;
    $scope.serviceType = 'elder_care';
    getElderCareInfo($scope.serviceType);

	} else if (setValue.getProfileType() === 'Service Provider' && (setValue.getDomains() === 'Child Caregiver' || setValue.getDomains() === 'Child Caregiver Job' || setValue.getDomains() === 'Baby Caregiver Job' || setValue.getDomains() === 'Baby Caregiver') &&  (setValue.getAccessReasons() === 'Get a Job' || setValue.getAccessReasons() === 'Learn/Get Trained')) {
		$scope.childCareContent = false;
		$scope.elderCareContentMySkills = true;
		$scope.driverCotentMySkills = true;
	} else {
		$scope.elderCareContentMySkills = true;
		$scope.driverCotentMySkills = false;
		$scope.childCareContent = true;
    $scope.serviceType = 'driver';
    getDriverInfo($scope.serviceType);
	}

  //Initializing
  $scope.$broadcast('refreshSlider');
  $scope.years = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  $scope.knowTwoWheeler = 'false';
  $scope.knowFourWheeler = 'false';
  $scope.knowLightVehicle = 'false';
  $scope.knowHeavyVehicle = 'false';
  $scope.maintenanceCheck = 0;
  $scope.carCleaning = 0;
  $scope.minorRepairs = 0;
  $scope.isProfessional = 0;
  $scope.carServicing = 0;
  $scope.buyingGrocery = 0;
  $scope.personalSecurity = 0;
  $scope.firstAidCare = 0;
  $scope.runningErrand = 0;
  $scope.buyingGrocer = 0;
  $scope.firstAidTraining = 0;
  $scope.certifiedInstructor = 0;
  $scope.icareCertified = 0;
  $scope.defenceDriving = 0;
  $scope.flexibleAvail = false;
  $scope.otherOption = '';
  $scope.otherChoice = '';
  $scope.doOtherChoice = '';
  $scope.CountryValue = 1;
  $scope.StateValue = 1;
  $scope.CityValue = 1;
  $scope.selectedCountry = 0;

  $scope.fullTimeJob = 0;
  $scope.partTimeJob = 0;
  $scope.tempTimeJobDay = 0;
  $scope.tempTimeJobHour = 0;
  $scope.isProfessionalYes = false;
  $scope.isProfessionalNo = false;


  $scope.timeSelection = [
    {
        'id'  : 1,
        'time': '1'
    },
    {
        'id'  : 2,
        'time': '2'
    },
    {
        'id'  : 3,
        'time': '3'
    },
    {
        'id'  : 4,
        'time': '4'
    },
    {
        'id'  : 5,
        'time': '5'
    },
    {
        'id'  : 6,
        'time': '6'
    },
    {
        'id'  : 7,
        'time': '7'
    },
    {
        'id'  : 8,
        'time': '8'
    },
    {
        'id'  : 9,
        'time': '9'
    },
    {
        'id'  : 10,
        'time': '10'
    },
    {
        'id'  : 11,
        'time': '11'
    },
    {
        'id'  : 12,
        'time': '12'
    }
  ];

  $scope.timeShift = [
    {
        'id'  : 0,
        'shift': 'AM'
    },
    {
        'id'  : 1,
        'shift': 'PM'
    }
  ];

  //Time shift for parttime/fulltime/temporaty jobs
  $scope.mondayFromTime = '';
  $scope.mondayToTime = '';
  $scope.mondayToShift = '';
  $scope.mondayFromShift = '';

  $scope.tuesdayFromTime = '';
  $scope.tuesdayToTime = '';
  $scope.tuesdayToShift = '';
  $scope.tuesdayFromShift = '';

  $scope.wednesdayFromTime = '';
  $scope.wednesdayToTime = '';
  $scope.wednesdayToShift = '';
  $scope.wednesdayFromShift = '';

  $scope.thursdayFromTime = '';
  $scope.thursdayToTime = '';
  $scope.thursdayToShift = '';
  $scope.thursdayFromShift = '';

  $scope.fridayFromTime = '';
  $scope.fridayToTime = '';
  $scope.fridayToShift = '';
  $scope.fridayFromShift = '';

  $scope.saturdayFromTime = '';
  $scope.saturdayToTime = '';
  $scope.saturdayToShift = '';
  $scope.saturdayFromShift = '';

  $scope.sundayFromTime = '';
  $scope.sundayToTime = '';
  $scope.sundayToShift = '';
  $scope.sundayFromShift = '';
  $scope.selectedYear = {};
  $scope.selectedCar = {
    id : ''
  };




  $scope.countries = {
      selectedCountry: null,
      selectedYear: null,
      selectedCar: null
  };

    //Get states using selected country
	$scope.selectCountryList = function () {

		if($scope.selectedCountry == '' || $scope.selectedCountry == undefined) {
			return false;
		}

		$scope.countryID = $scope.selectedCountry['id'];

		countryAPI.getStates($scope.countryID)
	  	.then(function (data) {
				if (data != null) {
					$scope.states = data;
					$('.stateField').removeAttr('disabled');
				}
			},
			function (err) {
				notifyManager.show('Failed to fetch states', 'error');
			});
	};


	//get stateID
	$scope.selectedStateList = function () {
		if($scope.selectedState == '' || $scope.selectedState == undefined) {
			return false;
		}

		$scope.stateID = $scope.selectedState['id'];
	};

	//User data form submission
	var submitForm = function (userData) {
		mySkillsAPI.saveDetails(userData)
		.then(function (data) {

			if (data != null && data.message == 'success') {
				notifyManager.show('Successfully submitted', 'success');
			}
		},
		function (err) {

			notifyManager.show('Failed to submit', 'error');
		});
	};

	//Experince details submittion
	$scope.submitExpDetails = function () {

    if ($scope.serviceType === 'driver') {
      $scope.submitDriverExperiance();
    } else if ($scope.serviceType === 'elder_care') {
      $scope.submitElderCareExperiance();
    } else {
      $scope.submitBabyCareExperiance();
    }

	};


	//Availabitlity details submittion
	$scope.submitAvailForm = function () {

    if ($scope.serviceType === 'driver' || $scope.serviceType === 'elder_care') {
      $scope.submitDriverAvailability();
    } else {
      $scope.submitBabyCareExperiance();
    }
    

	};


	/* Driver Capability form
	* 1. get user details
	*	2. Submit to API and show response on click on next
	*/

	//Capability details submittion
	$scope.submitCapabilityForm = function () {

    if ($scope.serviceType === 'driver') {
      $scope.submitDriverCapability();
    } else if ($scope.serviceType === 'elder_care') {
      $scope.submitElderCareCapability();
    } else {
      $scope.submitBabyCareExperiance();
    }
		
	};


  $scope.submitDriverExperiance = function () {
    var userDetails = {
      'authentication_token': $rootScope.authToken,
      'service_type': $scope.serviceType,
      'user' : {
        'skip_validation': 'true',
        'care_provider_skills_for_driver_attributes' : {
                'id': ($scope.carProviderId)? $scope.carProviderId : null,
                'skip_validation': 'true',
                'can_drive_two_wheeler': $scope.knowTwoWheeler,
                'can_drive_four_wheeler': $scope.knowFourWheeler,
                'can_drive_light_commercial_vehicle': $scope.knowLightVehicle,
                'can_drive_heavy_vehicle': $scope.knowHeavyVehicle,
                'driver_or_chauffeur_experience': $scope.selectedYear['time'],
                'experience_in_driving_brand_vehicle': $scope.selectedCar['id']
            },
            'user_location_familiarities_attributes': {
                '0': {
                    'id': $scope.userFamiliaritiesId ? $scope.userFamiliaritiesId : null,
                    'country': $scope.countryID,
                    'state': $scope.stateID || 1,
                    'city': $scope.cityID,
                    'familiarity_on_country': $scope.CountryValue,
                    'familiarity_on_state': $scope.StateValue,
                    'familiarity_on_city': $scope.CityValue
                }
            }
        }
    };

    //Make API call
    submitForm(userDetails);
  };

  $scope.submitDriverAvailability = function () {
    var userDetails = {
            'authentication_token': $rootScope.authToken,
            'service_type': $scope.serviceType,
            'user' : {
                'skip_validation': 'true',
                'care_availability_attributes': {
                    'id': $scope.availabilityId ? $scope.availabilityId : null,
                    'start_date': $('.available-date').val(),
                    // "end_date": "2015-03-19", //TODO ask about this option
                    'flexible_availablity': $scope.flexibleAvail,
                    'full_time_job': $scope.fullTimeJob,
                    'part_time_job': $scope.partTimeJob,
                    'temporary_days_job': $scope.tempTimeJobDay,
                    'temporary_hours_job': $scope.tempTimeJobHour,
                    'sunday_start_time': $scope.sundayFromTime['id'],
                    'sunday_start_shift': $scope.sundayFromShift['shift'],
                    'sunday_end_time': $scope.sundayToTime['id'],
                    'sunday_end_shift': $scope.sundayToShift['shift'],
                    'monday_start_time': $scope.mondayFromTime['id'],
                    'monday_start_shift': $scope.mondayFromShift['shift'],
                    'monday_end_time': $scope.mondayToTime['id'],
                    'monday_end_shift': $scope.mondayToShift['shift'],
                    'tuesday_start_time': $scope.tuesdayFromTime['id'],
                    'tuesday_start_shift': $scope.tuesdayFromShift['shift'],
                    'tuesday_end_time': $scope.tuesdayToTime['id'],
                    'tuesday_end_shift': $scope.tuesdayToShift['shift'],
                    'wednesday_start_time': $scope.wednesdayFromTime['id'],
                    'wednesday_start_shift': $scope.wednesdayFromShift['shift'],
                    'wednesday_end_time': $scope.wednesdayToTime['id'],
                    'wednesday_end_shift': $scope.wednesdayToShift['shift'],
                    'thursday_start_time': $scope.thursdayFromTime['id'],
                    'thursday_start_shift': $scope.thursdayFromShift['shift'],
                    'thursday_end_time': $scope.thursdayToTime['id'],
                    'thursday_end_shift': $scope.thursdayToShift['shift'],
                    'friday_start_time': $scope.fridayFromTime['id'],
                    'friday_start_shift': $scope.fridayFromShift['shift'],
                    'friday_end_time': $scope.fridayToTime['id'],
                    'friday_end_shift': $scope.fridayToShift['shift'],
                    'saturday_start_time': $scope.saturdayFromTime['id'],
                    'saturday_start_shift': $scope.saturdayFromShift['shift'],
                    'saturday_end_time': $scope.saturdayToTime['id'],
                    'saturday_end_shift': $scope.saturdayToShift['shift']
                }
            }
    };

    //Make API call
    submitForm(userDetails);
  };

  $scope.submitDriverCapability = function () {
    var userDetails = {
            'authentication_token': $rootScope.authToken,
            'service_type': $scope.serviceType,
            'user' : {
                'skip_validation': 'true',
                'care_requirements_for_driver_attributes': {
                    'id' : $scope.carRequerimentsId ? $scope.carRequerimentsId: null,
                    'is_trained_driver_chauffeur': $scope.isProfessional,
                    'can_do_maintenance_check': $scope.maintenanceCheck,
                    'can_do_car_cleaning': $scope.carCleaning,
                    'can_do_minor_repairs': $scope.minorRepairs,
                    'can_do_car_servicing': $scope.carServicing,
                    'can_do_other': $scope.otherChoice,
                    'can_also_do_personal_security': $scope.personalSecurity,
                    'can_also_do_first_aid_care': $scope.firstAidCare,
                    'can_also_do_running_errands': $scope.runningErrand,
                    'can_also_do_grocery_buying': $scope.buyingGrocery,
                    'can_also_do_other': $scope.doOtherChoice,
                    'first_aid_trained': $scope.firstAidTraining,
                    'certified_instructor': $scope.certifiedInstructor,
                    'icare_certified': $scope.icareCertified,
                    'recognised_defensive_driver': $scope.defenceDriving,
                    'other': $scope.otherOption,
                    //TODO Something more I know is attribute in API
                }
            }
        };

    //Make API call
    submitForm(userDetails);
  }




  //Elder care API Integration Starts
  $scope.below65 = "";
  $scope.between65To74 = "";
  $scope.between75To84 = "";
  $scope.above85 = "";
  $scope.eledersAtOneTime = "";
  $scope.careDifficult = 0;
  $scope.careFrail = 0;
  $scope.paidAssistance = "";
  $scope.isHanleElderYes = 0;
  $scope.isHanleElderNo = 0;
  $scope.careDifficult = 0;
  $scope.cognitiveIssue = 0;
  $scope.medicalIssue = 0;
  $scope.physicalIssue = 0;
  $scope.socialIssue = 0;
  $scope.visionEyeDis = "";
  $scope.sleepDisorders = "";
  $scope.sensoryInteDis = "";
  $scope.seizures = "";
  $scope.parkinsons = "";
  $scope.osteoporosis = "";
  $scope.muscularDystrophy = "";
  $scope.mentalIllness = "";
  $scope.lungDisease = "";
  $scope.incontinence = "";
  $scope.heartDisease = "";
  $scope.hearingLoss = "";
  $scope.fragileSyndrome = "";
  $scope.dyslexia = "";
  $scope.diabetes = "";
  $scope.depression = "";
  $scope.cysticFibrosis = "";
  $scope.cancer = "";
  $scope.arthritis = "";
  $scope.alzheimer = "";

  $scope.submitElderCareExperiance = function () {
      var userDetails = {
        'authentication_token': $rootScope.authToken,
        'service_type': $scope.serviceType,
        'user': {
            'skip_validation': 'true',
            'elder_care_experience_attributes': {
              'id': $scope.elderCareExperianceId ? $scope.elderCareExperianceId : null,
              'care_below_65_years': $scope.below65['id'],
              'care_65_74_years': $scope.between65To74['id'],
              'care_75_84_years': $scope.between75To84['id'],
              'care_85_plus_years': $scope.above85['id'],
              'care_multiple': $scope.eledersAtOneTime['id'],
              'care_difficult': $scope.careDifficult, 
              'care_frail': $scope.displayDiseaseType ? 0 : 1, 
              'care_paid_assistance_for_years': $scope.paidAssistance['id'],
              'care_cognitive_issues': $scope.cognitiveIssue,
              'care_medical_issues': $scope.medicalIssue,
              'care_physical_issues': $scope.physicalIssue,
              'care_social_issues': $scope.socialIssue,
              'alzheimer_months': $scope.alzheimer['id'],
              'arthritis_months': $scope.arthritis['id'],
              'cancer_months': $scope.cancer['id'],
              'cystic_fibrosis_months': $scope.cysticFibrosis['id'],
              'depression_months': $scope.depression['id'],
              'diabetes_months': $scope.diabetes['id'],
              'dyslexia_months': $scope.dyslexia['id'],
              'fragile_x_syndrome_months': $scope.fragileSyndrome['id'],
              'hearing_loss_months': $scope.hearingLoss['id'],
              'heart_disease_months': $scope.heartDisease['id'],
              'incontinence_months': $scope.incontinence['id'],
              'lung_disease_months': $scope.lungDisease['id'],
              'mental_illness_months': $scope.mentalIllness['id'],
              'muscular_dystrophy_months': $scope.muscularDystrophy['id'],
              'osteoporosis_months': $scope.osteoporosis['id'],
              'parkinsons_disease_months': $scope.parkinsons['id'],
              'seizures_months': $scope.seizures['id'],
              'sensory_disorder_months': $scope.sensoryInteDis['id'],
              'sleep_disorder_months': $scope.sleepDisorders['id'],
              'vision_disorder_months': $scope.visionEyeDis['id']
            }
        }
      };
      //Make API call
      submitForm(userDetails);
  };


  //Elder Care Capability submit button

  $scope.trainedProfessionalEC = 0;
  $scope.trainedProfessionalECYes = 0;
  $scope.trainedProfessionalECNo = 0;


  $scope.submitElderCareCapability = function () {
      var userDetails = {
        'authentication_token': $rootScope.authToken,
        'service_type': $scope.serviceType,
        'user': {
            'skip_validation': 'true',
            'care_ability_attributes': {
              'id': $scope.elderCareAbilityId ? $scope.elderCareAbilityId : null,
              'professionally_trained': $scope.trainedProfessionalEC ? 1:0,
              'institution_1_name': $scope.institutionName, //text
              'care_cleaning': $scope.elderCareCarCleaning ? 1:0,
              'care_to_school': $scope.elderCareSchool? 1:0,
              'care_food_planning': $scope.elderCareFoodPlanning? 1:0,
              'accompanying_elder':  $scope.elderCareAccompanying? 1:0,
              'care_medical_assistance': $scope.medicalAssistance? 1:0,
              'care_emotional_support': $scope.emotionalSupport? 1:0,
              'care_safety_needs': $scope.trendingSafetyNeeds? 1:0,
              'care_counselling': $scope.counselling? 1:0,
              'care_pet_assistance': $scope.elderCareAssitancePets? 1:0,
              'care_first_aid': $scope.firstAidTraining? 1:0,
              'care_crn': $scope.elderCareCrn? 1:0,
              'care_cpr': $scope.elderCareCpr? 1:0,
              'care_certfied_nurse': $scope.elderCareCertifiedNurse? 1:0,
              'care_special_needs': $scope.specialNeedsCare? 1:0,
              'care_certified_icare': $scope.icareCertified? 1:0,
              'care_cooking': $scope.elderCareCooking? 1:0,
              'care_shopping': $scope.groceryShopping? 1:0,
              'care_laundry': $scope.familyLaundry? 1:0,
              'care_errands': $scope.runningErrands? 1:0,
              'care_housekeeping': $scope.lightHouseKeeping? 1:0,
              'care_medical_appointments': $scope.elderMedicalAppoinments? 1:0,
              'care_others': $scope.doOtherChoice, //text
              'note': $scope.moreSomething, //text
              'primary_task_or_responsibility':   $scope.otherChoice,
              'additional_assit':  $scope.otherOption
            }
        }
      };

      //Make API call
      submitForm(userDetails);

  };

  //Baby Care API integrationstarts
  $scope.submitBabyCareExperiance = function () {

  };


  
  /* Manipulation of data
  * 1. Driver
  * 2. Elder
  * 3. BabyCare
  */

  //Driver data manipulation
  $scope.driverDetailsInfo = function () {

    if ($scope.getDetailsInfo.care_provider_skills_for_driver_attributes.length != 0) {
        $scope.carProviderId = $scope.getDetailsInfo.care_provider_skills_for_driver_attributes[0]['id'];
        ///setting value for experiance
        $scope.knowTwoWheeler = $scope.getDetailsInfo.care_provider_skills_for_driver_attributes[0]['can_drive_two_wheeler'];
        $scope.knowFourWheeler = $scope.getDetailsInfo.care_provider_skills_for_driver_attributes[0]['can_drive_four_wheeler'];
        $scope.knowLightVehicle = $scope.getDetailsInfo.care_provider_skills_for_driver_attributes[0]['can_drive_light_commercial_vehicle'];
        $scope.knowHeavyVehicle = $scope.getDetailsInfo.care_provider_skills_for_driver_attributes[0]['can_drive_heavy_vehicle'];

        var driverOrCheffeurExp = $scope.getDetailsInfo.care_provider_skills_for_driver_attributes[0]['driver_or_chauffeur_experience'];
        if (driverOrCheffeurExp) {
            $scope.selectedYear = $scope.setSelectedOptions(driverOrCheffeurExp, $scope.timeSelection);
        }

        var brandVechile = $scope.getDetailsInfo.care_provider_skills_for_driver_attributes[0]['experience_in_driving_brand_vehicle'];
        if (brandVechile) {
          $scope.selectedCar = $scope.setSelectedOptions(brandVechile, $scope.vehicleBrands);
        }
    }

    if ($scope.getDetailsInfo.user_location_familiarities_attributes.length != 0) {

      $scope.userFamiliaritiesId = $scope.getDetailsInfo.user_location_familiarities_attributes[0]['id'];
      $scope.cityID = $scope.getDetailsInfo.user_location_familiarities_attributes[0]['city'];
      
      // setting country Id
      var countryId = $scope.getDetailsInfo.user_location_familiarities_attributes[0]['country'];
      if (countryId) {
          $scope.selectedCountry = $scope.setSelectedOptions(countryId, $scope.countries);
          $scope.countryID = $scope.selectedCountry['id'];
      }
      
      $scope.CountryValue = $scope.getDetailsInfo.user_location_familiarities_attributes[0]['familiarity_on_country'];
      $scope.StateValue = $scope.getDetailsInfo.user_location_familiarities_attributes[0]['familiarity_on_state'];
      $scope.CityValue = $scope.getDetailsInfo.user_location_familiarities_attributes[0]['familiarity_on_city'];
    }

    //setting value for Availability
    setValueForAvailability();

    //setting available for capabilities  
    if ($scope.getDetailsInfo.care_requirements_for_driver_attributes != 0) {
        $scope.carRequerimentsId = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['id'];
        var val = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['is_trained_driver_chauffeur'];
        if (val) {
          $scope.isProfessionalYes = val;
          $scope.isProfessional = val;
          $('#schoolName').removeAttr('disabled').attr('required');
        }
        else {
          $scope.isProfessionalNo = val;
          $scope.isProfessional = val;
          $('#schoolName').attr('disabled', 'disabled').removeAttr('required').val('');
        }

        $scope.maintenanceCheck = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_do_maintenance_check']; 
        $scope.carCleaning = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_do_car_cleaning'];
        $scope.minorRepairs = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_do_minor_repairs'];
        $scope.carServicing = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_do_car_servicing'];
        $scope.otherChoice = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_do_other'];
        $scope.personalSecurity = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_also_do_personal_security'];
        $scope.firstAidCare = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_also_do_first_aid_care'];
        $scope.runningErrand = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_also_do_running_errands'];
        $scope.buyingGrocery =$scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_also_do_grocery_buying'];
        $scope.doOtherChoice = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['can_also_do_other'];
        $scope.firstAidTraining = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['first_aid_trained'];
        $scope.certifiedInstructor = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['certified_instructor'];
        $scope.icareCertified = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['icare_certified'];
        $scope.defenceDriving = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['recognised_defensive_driver'];
        $scope.otherOption = $scope.getDetailsInfo.care_requirements_for_driver_attributes[0]['other'];
    }
  };

  var setValueForAvailability = function () {
      var availabilityData = null;
      if ($scope.serviceType === 'driver') {
        availabilityData = $scope.getDetailsInfo.care_availability_attributes;
      } else if ($scope.serviceType === 'elder_care') {
        availabilityData = $scope.getElderDetailsInfo.care_availability_attributes;
      }

      if (availabilityData.length != 0) {
        $scope.availabilityId = availabilityData[0]['id'];
        $scope.availableDate = availabilityData[0]['start_date'];
        $('.available-date').val($scope.availableDate);
        $scope.flexibleAvail = availabilityData[0]['flexible_availablity'].toString();
        $scope.fullTimeJob = availabilityData[0]['full_time_job'];
        $scope.partTimeJob = availabilityData[0]['part_time_job'];
        $scope.tempTimeJobDay = availabilityData[0]['temporary_days_job'];
        $scope.tempTimeJobHour = availabilityData[0]['temporary_hours_job'];

        //Sunday From and To time Set
        var sundayFromTime = availabilityData[0]['sunday_start_time'];
        var sundayFromShift = availabilityData[0]['sunday_start_shift']
        if (sundayFromTime && sundayFromShift) {
          $scope.sundayFromTime = $scope.setSelectedOptions(sundayFromTime, $scope.timeSelection);
          $scope.sundayFromShift = $scope.setSelectedOptionsForShift(sundayFromShift, $scope.timeShift);
        }

        var sundayToTime = availabilityData[0]['sunday_end_time'];
        var sundayToShift = availabilityData[0]['sunday_end_shift']
        if (sundayToTime && sundayToShift) {
          $scope.sundayToTime = $scope.setSelectedOptions(sundayToTime, $scope.timeSelection);
          $scope.sundayToShift = $scope.setSelectedOptionsForShift(sundayToShift, $scope.timeShift);
        }

        //Monday From and To time Set
        var mondayFromTime = availabilityData[0]['monday_start_time'];
        var mondayFromShift = availabilityData[0]['monday_start_shift']
        if (mondayFromTime && mondayFromShift) {
          $scope.mondayFromTime = $scope.setSelectedOptions(mondayFromTime, $scope.timeSelection);
          $scope.mondayFromShift = $scope.setSelectedOptionsForShift(mondayFromShift, $scope.timeShift);
        }

        var mondayToTime = availabilityData[0]['monday_end_time'];
        var mondayToShift = availabilityData[0]['monday_end_shift']
        if (mondayToTime && mondayToShift) {
          $scope.mondayToTime = $scope.setSelectedOptions(mondayToTime, $scope.timeSelection);
          $scope.mondayToShift = $scope.setSelectedOptionsForShift(mondayToShift, $scope.timeShift);
        }

        //Tuesday From and To time Set
        var tuesdayFromTime = availabilityData[0]['tuesday_start_time'];
        var tuesdayFromShift = availabilityData[0]['tuesday_start_shift']
        if (tuesdayFromTime && tuesdayFromShift) {
          $scope.tuesdayFromTime = $scope.setSelectedOptions(tuesdayFromTime, $scope.timeSelection);
          $scope.tuesdayFromShift = $scope.setSelectedOptionsForShift(tuesdayFromShift, $scope.timeShift);
        }

        var tuesdayToTime = availabilityData[0]['tuesday_end_time'];
        var tuesdayToShift = availabilityData[0]['tuesday_end_shift']
        if (tuesdayToTime && tuesdayToShift) {
          $scope.tuesdayToTime = $scope.setSelectedOptions(tuesdayToTime, $scope.timeSelection);
          $scope.tuesdayToShift = $scope.setSelectedOptionsForShift(tuesdayToShift, $scope.timeShift);
        }

        //Wednesday From and To time Set
        var wednesdayFromTime = availabilityData[0]['wednesday_start_time'];
        var wednesdayFromShift = availabilityData[0]['wednesday_start_shift']
        if (wednesdayFromTime && wednesdayFromShift) {
          $scope.wednesdayFromTime = $scope.setSelectedOptions(wednesdayFromTime, $scope.timeSelection);
          $scope.wednesdayFromShift = $scope.setSelectedOptionsForShift(wednesdayFromShift, $scope.timeShift);
        }

        var wednesdayToTime = availabilityData[0]['wednesday_end_time'];
        var wednesdayToShift = availabilityData[0]['wednesday_end_shift']
        if (wednesdayToTime && wednesdayToShift) {
          $scope.wednesdayToTime = $scope.setSelectedOptions(wednesdayToTime, $scope.timeSelection);
          $scope.wednesdayToShift = $scope.setSelectedOptionsForShift(wednesdayToShift, $scope.timeShift);
        }

        //Thursdayday From and To time Set
        var thursdayFromTime = availabilityData[0]['thursday_start_time'];
        var thursdayFromShift = availabilityData[0]['thursday_start_shift']
        if (thursdayFromTime && thursdayFromShift) {
          $scope.thursdayFromTime = $scope.setSelectedOptions(thursdayFromTime, $scope.timeSelection);
          $scope.thursdayFromShift = $scope.setSelectedOptionsForShift(thursdayFromShift, $scope.timeShift);
        }

        var thursdayToTime = availabilityData[0]['thursday_end_time'];
        var thursdayToShift = availabilityData[0]['thursday_end_shift']
        if (thursdayToTime && thursdayToShift) {
          $scope.thursdayToTime = $scope.setSelectedOptions(thursdayToTime, $scope.timeSelection);
          $scope.thursdayToShift = $scope.setSelectedOptionsForShift(thursdayToShift, $scope.timeShift);
        }

        //Friday From and To time Set
        var fridayFromTime = availabilityData[0]['friday_start_time'];
        var fridayFromShift = availabilityData[0]['friday_start_shift']
        if (fridayFromTime && fridayFromShift) {
          $scope.fridayFromTime = $scope.setSelectedOptions(fridayFromTime, $scope.timeSelection);
          $scope.fridayFromShift = $scope.setSelectedOptionsForShift(fridayFromShift, $scope.timeShift);
        }

        var fridayToTime = availabilityData[0]['friday_end_time'];
        var fridayToShift = availabilityData[0]['friday_end_shift']
        if (fridayToTime && fridayToShift) {
          $scope.fridayToTime = $scope.setSelectedOptions(fridayToTime, $scope.timeSelection);
          $scope.fridayToShift = $scope.setSelectedOptionsForShift(fridayToShift, $scope.timeShift);
        }

        //Saturday From and To time Set
        var saturdayFromTime = availabilityData[0]['saturday_start_time'];
        var saturdayFromShift = availabilityData[0]['saturday_start_shift']
        if (saturdayFromTime && saturdayFromShift) {
          $scope.saturdayFromTime = $scope.setSelectedOptions(saturdayFromTime, $scope.timeSelection);
          $scope.saturdayFromShift = $scope.setSelectedOptionsForShift(saturdayFromShift, $scope.timeShift);
        }

        var saturdayToTime = availabilityData[0]['saturday_end_time'];
        var saturdayToShift = availabilityData[0]['saturday_end_shift']
        if (saturdayToTime && saturdayToShift) {
          $scope.saturdayToTime = $scope.setSelectedOptions(saturdayToTime, $scope.timeSelection);
          $scope.saturdayToShift = $scope.setSelectedOptionsForShift(saturdayToShift, $scope.timeShift);
        }
      }
  };

  //ElderCare Data Manipulation
  $scope.elderCareDetailsInfo = function () {

    //Setting data for Experiance
    if ($scope.getElderDetailsInfo.elder_care_experience_attributes.length != 0) {
      $scope.elderCareExperianceId = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['id'];

      var below65 = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_below_65_months'];
      if (below65) {
          $scope.below65 = $scope.setSelectedOptions(below65, $scope.timeSelection);
      }

      var between65To74 = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_65_74_months'];
      if (below65) {
          $scope.between65To74 = $scope.setSelectedOptions(between65To74, $scope.timeSelection);
      }

      var between75To84 = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_75_84_months'];
      if (below65) {
          $scope.between75To84 = $scope.setSelectedOptions(between75To84, $scope.timeSelection);
      }

      var above85 = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_85_plus_months'];
      if (above85) {
          $scope.above85 = $scope.setSelectedOptions(above85, $scope.timeSelection);
      }

      var eledersAtOneTime = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_multiple'];
      if (eledersAtOneTime) {
          $scope.eledersAtOneTime = $scope.setSelectedOptions(eledersAtOneTime, $scope.timeSelection);
      }

      $scope.careDifficult = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_difficult'];
      $scope.displayDiseaseType = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_frail'];

      var paidAssistance = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_paid_assistance_for_years'];
      if (paidAssistance) {
          $scope.paidAssistance = $scope.setSelectedOptions(paidAssistance, $scope.timeSelection);
      }

      $scope.cognitiveIssue = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_cognitive_issues'];
      $scope.medicalIssue = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_medical_issues'];
      $scope.physicalIssue = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_physical_issues'];
      $scope.socialIssue = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['care_social_issues'];

      var alzheimer = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['alzheimer_months'];
      if (alzheimer) {
          $scope.alzheimer = $scope.setSelectedOptions(alzheimer, $scope.timeSelection);
      }

      var arthritis = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['arthritis_months'];
      if (arthritis) {
          $scope.arthritis = $scope.setSelectedOptions(arthritis, $scope.timeSelection);
      }

      var cancer = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['cancer_months'];
      if (cancer) {
          $scope.cancer = $scope.setSelectedOptions(cancer, $scope.timeSelection);
      }

      var cysticFibrosis = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['cystic_fibrosis_months'];
      if (cysticFibrosis) {
          $scope.cysticFibrosis = $scope.setSelectedOptions(cysticFibrosis, $scope.timeSelection);
      }

      var depression = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['depression_months'];
      if (depression) {
          $scope.depression = $scope.setSelectedOptions(depression, $scope.timeSelection);
      }

      var diabetes = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['diabetes_months'];
      if (diabetes) {
          $scope.diabetes = $scope.setSelectedOptions(diabetes, $scope.timeSelection);
      }

      var dyslexia = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['dyslexia_months'];
      if (dyslexia) {
          $scope.dyslexia = $scope.setSelectedOptions(dyslexia, $scope.timeSelection);
      }

      var fragileSyndrome = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['fragile_x_syndrome_months'];
      if (fragileSyndrome) {
          $scope.fragileSyndrome = $scope.setSelectedOptions(fragileSyndrome, $scope.timeSelection);
      }

      var hearingLoss = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['hearing_loss_months'];
      if (hearingLoss) {
          $scope.hearingLoss = $scope.setSelectedOptions(hearingLoss, $scope.timeSelection);
      }

      var heartDisease = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['heart_disease_months'];
      if (heartDisease) {
          $scope.heartDisease = $scope.setSelectedOptions(heartDisease, $scope.timeSelection);
      }

      var incontinence = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['incontinence_months'];
      if (incontinence) {
          $scope.incontinence = $scope.setSelectedOptions(incontinence, $scope.timeSelection);
      }

      var lungDisease = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['lung_disease_months'];
      if (lungDisease) {
          $scope.lungDisease = $scope.setSelectedOptions(lungDisease, $scope.timeSelection);
      }

      var mentalIllness = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['mental_illness_months'];
      if (mentalIllness) {
          $scope.mentalIllness = $scope.setSelectedOptions(mentalIllness, $scope.timeSelection);
      }

      var muscularDystrophy = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['muscular_dystrophy_months'];
      if (muscularDystrophy) {
          $scope.muscularDystrophy = $scope.setSelectedOptions(muscularDystrophy, $scope.timeSelection);
      }

      var osteoporosis = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['osteoporosis_months'];
      if (osteoporosis) {
          $scope.osteoporosis = $scope.setSelectedOptions(osteoporosis, $scope.timeSelection);
      }

      var parkinsons = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['parkinsons_disease_months'];
      if (parkinsons) {
          $scope.parkinsons = $scope.setSelectedOptions(parkinsons, $scope.timeSelection);
      }

      var seizures = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['seizures_months'];
      if (seizures) {
          $scope.seizures = $scope.setSelectedOptions(seizures, $scope.timeSelection);
      }

      var sensoryInteDis = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['sensory_disorder_months'];
      if (sensoryInteDis) {
          $scope.sensoryInteDis = $scope.setSelectedOptions(sensoryInteDis, $scope.timeSelection);
      }
      
      var sleepDisorders = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['sleep_disorder_months'];
      if (sleepDisorders) {
          $scope.sleepDisorders = $scope.setSelectedOptions(sleepDisorders, $scope.timeSelection);
      }

      var visionEyeDis = $scope.getElderDetailsInfo.elder_care_experience_attributes[0]['vision_disorder_months'];
      if (visionEyeDis) {
          $scope.visionEyeDis = $scope.setSelectedOptions(visionEyeDis, $scope.timeSelection);
      }
    }

    //setting data for Availability
    if ($scope.getElderDetailsInfo.care_availability_attributes.length != 0) {
      setValueForAvailability();
    }

    if ($scope.getElderDetailsInfo.care_ability_attributes.length != 0) {
      $scope.elderCareAbilityId = $scope.getElderDetailsInfo.care_ability_attributes[0]['id'];
      $scope.trainedProfessionalEC = $scope.getElderDetailsInfo.care_ability_attributes[0]['professionally_trained'];
      $scope.institutionName = $scope.getElderDetailsInfo.care_ability_attributes[0]['institution_1_name'];
      $scope.elderCareCarCleaning = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_cleaning'];
      $scope.elderCareSchool = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_to_school'];
      $scope.elderCareFoodPlanning = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_food_planning'];
      $scope.elderCareAccompanying = $scope.getElderDetailsInfo.care_ability_attributes[0]['accompanying_elder'];
      $scope.medicalAssistance = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_medical_assistance'];
      $scope.emotionalSupport = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_emotional_support'];
      $scope.trendingSafetyNeeds = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_safety_needs'];
      $scope.counselling = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_counselling'];
      $scope.elderCareAssitancePets = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_pet_assistance'];
      $scope.firstAidTraining = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_first_aid'];
      $scope.elderCareCrn = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_crn'];
      $scope.elderCareCpr = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_cpr'];
      $scope.elderCareCertifiedNurse = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_certfied_nurse'];
      $scope.specialNeedsCare = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_special_needs'];
      $scope.icareCertified = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_certified_icare'];
      $scope.elderCareCooking = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_cooking'];
      $scope.groceryShopping = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_shopping'];
      $scope.familyLaundry = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_laundry'];
      $scope.runningErrands = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_errands'];
      $scope.lightHouseKeeping = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_housekeeping'];
      $scope.elderMedicalAppoinments = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_medical_appointments'];
      $scope.doOtherChoice = $scope.getElderDetailsInfo.care_ability_attributes[0]['care_others'];
      $scope.moreSomething = $scope.getElderDetailsInfo.care_ability_attributes[0]['note'];
      $scope.otherChoice = $scope.getElderDetailsInfo.care_ability_attributes[0]['primary_task_or_responsibility'];
      $scope.otherOption = $scope.getElderDetailsInfo.care_ability_attributes[0]['additional_assit'];
    }
  };




  /***** setting value****/

  $scope.setSelectedOptions = function (seletedValue, optionList) {
    var optionVal = {};
    for (var i in optionList) {
      var option = optionList[i];
      if (option.id === seletedValue) {
        optionVal = option;
        break;
      }
    }
    return optionVal;
  };

  $scope.setSelectedOptionsForShift = function (seletedValue, optionList) {
    var optionVal = {};
    for (var i in optionList) {
      var option = optionList[i];
      if (option.shift === seletedValue) {
        optionVal = option;
        break;
      }
    }
    return optionVal;
  };

  $scope.setDate = function (date) {
    var date = new Date(date);
    date = date.getFullYear()+'-'+date.getMonth()+1+'-'+date.getDate();
    return date;
  };

  $scope.isProfDriver = function (userValue) {

    if (userValue === 'Yes') {
      $scope.isProfessional = 1;
      $scope.isProfessionalYes = true;
      $('#schoolName').removeAttr('disabled').attr('required');
    }
    else if (userValue === 'No') {
      $scope.isProfessional = 0;
      $scope.isProfessionalYes = false;
      $('#schoolName').attr('disabled', 'disabled').removeAttr('required').val('');
    }

  };

  $scope.isHandleElderlies = function (value) {
    if (value === 'Yes') {
      $scope.careDifficult = 1;
      $scope.isHanleElderYes = 1;
    } else {
      $scope.careDifficult = 0;
      $scope.isHanleElderYes = 0;
    }
  };

  $scope.isTrainedElderCare = function (value) {
    if (value === 'Yes') { 
      $scope.trainedProfessionalEC = 1;
      $scope.trainedProfessionalECYes = 1;
      $scope.trainedProfessionalECNo = 0;
      $('#schoolName').removeAttr('disabled').attr('required');
    } else {
      $scope.trainedProfessionalEC = 0;
      $scope.trainedProfessionalECYes = 0;
      $scope.trainedProfessionalECNo = 1;
      $('#schoolName').attr('disabled', 'disabled').removeAttr('required').val('');
    }
  }


}]);


/*-----  End of Controller = Myskillsctrl  ------*/





/*================================================================
=>                  Controller = Mypayments
==================================================================*/
/*global app*/

app.controller('MyPaymentsCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {

	'use strict';

	$scope.debitCardpanel = false;
	$scope.creditCardpanel = true;
	$scope.NetBankingPanel = true;
	$scope.cashCardPanel = true;
	$scope.selectPaymentMode = function (value) {
		switch (value) {
			case 10 : 
				$scope.debitCardpanel = false;
				$scope.creditCardpanel = true;
				$scope.NetBankingPanel = true;
				$scope.cashCardPanel = true;
				break;

			case 11 : 
				$scope.debitCardpanel = true;
				$scope.creditCardpanel = false;
				$scope.NetBankingPanel = true;
				$scope.cashCardPanel = true;
				break;

			case 12 :
				$scope.debitCardpanel = true;
				$scope.creditCardpanel = true;
				$scope.NetBankingPanel = false;
				$scope.cashCardPanel = true;
				break;

			case 13 : 
				$scope.debitCardpanel = true;
				$scope.creditCardpanel = true;
				$scope.NetBankingPanel = true;
				$scope.cashCardPanel = false;
				break;
		}
	};
	$scope.getSelectedHeader = function(selectedTab) {
		console.log(selectedTab);
		Utility.getSelectedHeader(selectedTab);
	};
}]);


/*-----  End of Controller = MyPayments  ------*/





/*================================================================
=>                  Controller = Otp
==================================================================*/
/*global app, document, $*/

app.controller('OtpCtrl', ['$scope', '$rootScope', 'otpAPI', 'emailAPI', 'setValue','$location', function ($scope, $rootScope, otpAPI, emailAPI, setValue,$location) {

  'use strict';

  /**
    * ##OTP FLOW
    * 1. Get otp conformation to your mobile, 
    * 2. enter the otp number in OTP form
    * 3. 
  */

  //Initializing scope
  var options = {};
  var optionsResend = {};
  var otpOptions = {};

  //Reset login form and setPristine to form
  var reset = function () {
    if ($scope.otpForm) {
      options = null;
      optionsResend = null;
      otpOptions = null;
      $scope.otpErrorMsg = '';
      $scope.otpSuccessMsg;
      $scope.otpCode = '';
      $scope.otpForm.$setPristine();
      $scope.$apply(); //apply scope value
    }
  };

  //Diable input type number scroll
  var inputNumber = document.getElementById('inputOTP');
  inputNumber.addEventListener('mousewheel', function (event) {
    this.blur();
  });

  $(inputNumber).keydown(function (evt) {
    if (evt.keyCode === '37' || evt.keyCode === '38' || evt.keyCode === '39' || evt.keyCode === '40') {
      evt.preventDefault();
    }
  });

  //On popup close, reset form
  $('#otpModel').on('click', '.closePopup, .modal-backdrop', function (event) {
    event.preventDefault();
    reset(); //reset form
  });

  //On hiding popup, reset form
  $('#myModal').on('hidden.bs.modal', function (event) {
    event.preventDefault();
    reset(); //reset form
  });

  //OTP submit
  $scope.twoFactorAuth = function () {
    $scope.otpErrorMsg = '';
    $scope.otpSuccessMsg = '';
    $('#otpSubmit').attr('disabled', 'disabled'); //disabled otp submit btn 

    options = {
      'code' : JSON.stringify($scope.otpCode),
      'user' : {
        'email': setValue.getEmailId()
      }
    };
    
    //OTP Services
    otpAPI.twoFactorAuth(options)
      .then(function (data) {
        console.log('otp successfully --> ', data);
        $('#otpSubmit').removeAttr('disabled'); //enable otp submit btn 

        if (data.confirmed_email == true && data.confirmed_phone_number == true && data.authentication_token != null) {
          $.removeCookie('userDetails'); //remove previous userDetails
          $rootScope.authToken = '';
          $.cookie.json = true;
          
          if (data.remember_me == '1') {
            $.cookie('userDetails', data, { expires: 1, path: '/' }); //store userDetails in cookies
            $timeout(function () {
              $('.otp-popup-module').addClass('none');
              $('.popup-module').addClass('none');
              $location.path('/aboutme');
            },1);
          }
          else {
            $.cookie('userDetails', data, { expires: 30, path: '/' });
            $timeout(function () {
              $('.otp-popup-module').addClass('none');
              $('.popup-module').addClass('none');
              $location.path('/aboutme');
            },1);
          }
        }
        else if (data.confirmed_email == false && data.confirmed_phone_number == true) {
          console.log('Otp Confirmed -->', data);
          $('.otp-popup-module').addClass('none');
          $('.login-module').removeClass('none');
        }
      },        
      function (err) {
        $('#otpSubmit').removeAttr('disabled'); //enable otp submit btn 
        console.log('otp verification failed', err);
        if (err.message) {
          $scope.otpErrorMsg = err.message;
        }
      });
  };

  //Resend OTP
  $scope.resendOTP = function () {
    $scope.otpSuccessMsg = '';
    $scope.otpErrorMsg = '';

    otpOptions = {
      'user' : {
        'email': setValue.getEmailId()
      }
    };

    //OTPresend Services
    otpAPI.twoFactorResend(otpOptions)
      .then(function (data) {
        console.log('otp successfully', data);

      },        
      function (err) {
        console.log('otp verification failed', err);
        if (err.message) {
          $scope.otpErrorMsg =  err.message;
        }
      });
  };

  //Resend confirmation email
  $scope.resendEmail = function () {
    $scope.otpSuccessMsg = '';
    $scope.otpErrorMsg = '';

    optionsResend = {
      'user' : {
        'email': setValue.getEmailId()
      }
    };

    //Resend email service
    emailAPI.resendEmail(optionsResend)
      .then(function (data) {
        $scope.otpSuccessMsg = 'A confirmation email has been sent to your registered email';
        console.log('resendEmail successfully', data);
      },        
      function (err) {
        console.log('resendEmail failed', err);
        if (err.message['email']) {
          $scope.otpErrorMsg =  'Email ' + err.message['email'];
        }
      });
    };

    $scope.showLoginPage1Popup = function() {
      $('.login-module').removeClass('none');
      $('.otp-popup-module').addClass('none');   
    };

}]);


/*-----  End of Controller = Otp  ------*/




/*================================================================
=>                  Controller = aboutMeCtrl
==================================================================*/
/*global app*/

app.controller('personalDetailCtrl', ['$scope', '$rootScope', 'aboutAPI', '$timeout', 'notifyManager','setValue', 'countryAPI', function ($scope, $rootScope, aboutAPI, $timeout, notifyManager, setValue, countryAPI) {

	'use strict';

	//Initializing
	$scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);
	$scope.genders = [];
	$scope.sameAddress = false;
	
	var $spinner = $('.spin'); //get spinner div

		/* Populate user selected language with slider
	* 1. when user selected know language
	* 2. append language with slider
	*/


	$scope.familyMembers = [{
		'id' : 1,
		'name': 1
	},{
		'id' : 2,
		'name': 2
	}, {
		'id' : 3,
		'name': 3
	},
	{
		'id' : 4,
		'name': 4
	},
	{
		'id' : 5,
		'name': 5
	},
	{
		'id' : 5,
		'name': 5
	},
	{
		'id' : 6,
		'name': 6
	},
	{
		'id' : 7,
		'name': 7
	},
	{
		'id' : 8,
		'name': 8
	},
	{
		'id' : 9,
		'name': 9
	},
	{
		'id' : 10,
		'name': 10
	}];

	//Temporary insurance policy
	$scope.insurancePolicy = [{
		'id' : true,
		'name': 'Yes'
	},
	{
		'id' : false,
		'name': 'No'
	}];


	/* Get About me to populate in form
	* 1. Get from token after login
	* 2. Make API call
	* 3. Populate data in form
	*/

	var getUserDetails = function () {

		$rootScope.showSpinner($spinner); //show spinner

		aboutAPI.getAboutDetails($rootScope.profileType) //passing service type
			.then(function (data) {
				console.log('response --> ', data);
				$rootScope.hideSpinner($spinner); //hide spinner				
				if (data != null) {

					//Dropdown options
					$scope.genderList = data.options['gender'];
					$scope.ethnicityList = data.options['ethnicity'];
					$scope.religionList = data.options['religion'];
					$scope.bloodgroupList = data.options['blood_group'];
					$scope.nationalityList = data.options['nationality'];
					$scope.higherEducationList = data.options['highest_education'];
					$scope.languageList = data.options['language'];
					$scope.martialStatusList = data.options['marital_status'];
					$scope.familyIncomes = data.options['annual_family_income'];
					$scope.identityDocumentType = data.options['identity_document_type'];


					
					/*
					* == Family Information for all service seeker and provider ==
					*/

					var familyDetails = data.family_detail;

					if (familyDetails.id == null) {
						return false;
					}
					else if (familyDetails !== null) {
						$scope.familyID = familyDetails.id;
					}

					//Martial status
					if(familyDetails.marital_status !== null) {
						$scope.martialStatus = getSelectedValue($scope.martialStatusList, parseInt(familyDetails.marital_status));
					}

					//Family members
					if(familyDetails.members_count !== null) {
						$scope.familyMember = getSelectedValue($scope.familyMembers, familyDetails.members_count);
					}

					//Children
					if(familyDetails.children !== null) {
						$scope.children = getSelectedValue($scope.familyMembers, familyDetails.children);
					}

					//Elders
					if(familyDetails.elders !== null) {
						$scope.elder = getSelectedValue($scope.familyMembers, familyDetails.elders);
					}

					//Family income
					if(familyDetails.annual_family_income !== null) {
						$scope.familyIncome = getSelectedValue($scope.familyIncomes, parseInt(familyDetails.annual_family_income));
					}

					//Staying with family
					if(familyDetails.living_with_family !== null) {
						if (familyDetails.living_with_family == true) {
							$scope.stayWithFamily1 = true;
							$scope.stayWithFamily2 = false;
						}
						else if (familyDetails.living_with_family == false) {
							$scope.stayWithFamily2 = true;
							$scope.stayWithFamily1 = false;
						}
					}

					//Bank account
					if(familyDetails.has_bank_account !== null) {
						if (familyDetails.has_bank_account == true) {
							$scope.bankAccount1 = true;
							$scope.bankAccount2 = false;
						}
						else if (familyDetails.has_bank_account == false) {
							$scope.bankAccount2 = true;
							$scope.bankAccount1 = false;
						}
					}

					//Own a House/Flat
					if(familyDetails.own_a_flat_or_house !== null) {
						if (familyDetails.own_a_flat_or_house == true) {
							$scope.ownHouse1 = true;
							$scope.ownHouse2 = false;
						}
						else if (familyDetails.own_a_flat_or_house == false) {
							$scope.ownHouse1 = false;
							$scope.ownHouse2 = true;
						}
					}

					//have insurance
					if(familyDetails.has_insurance !== null) {
						$scope.hasInsurance = getSelectedValue($scope.insurancePolicy, familyDetails.has_insurance);
					}

				}
			},
			function (err) {
				$rootScope.hideSpinner($spinner); //hide spinner
				notifyManager.show('Failed to fetch about me forms', 'error');
			});
	};

	//Loop get value dropdown with selected value to populate
	var getSelectedValue = function (dropdowns, selectedValue) {

		if(selectedValue == null || dropdowns == null) {
			return false;
		}

		var scope = {};
		
		for (var i in dropdowns) {
    	var option = dropdowns[i];
	    if (option.id === selectedValue) {
	      scope = option;
	      break;
	    }
  	}

  	return scope;
	};

	//Populate the country list
	var getCountries = function () {

		$rootScope.showSpinner($spinner); //show spinner

		countryAPI.getCountry()
			.then(function (data) {
				$rootScope.hideSpinner($spinner); //hide spinner
				if (data != null) {
					$scope.countries = data;
					$scope.workEligibilityList = data;
				}
			},
			function (err) {
				$rootScope.hideSpinner($spinner); //hide spinner
				if (err) {
					notifyManager.show('Failed to fetch countries', 'error');
				}
			});

	};

	/*
	* GET API for ELDER CARE
	*	1. Call API and populate options
	* 2. Also populate user submitted data
	*/

	var getMyProfiles = function () {
		
		//GET API
		aboutAPI.getProfile($rootScope.profileType)
			.then(function (data) {
				console.log('my needs --> ', data);
			},
			function (err) {
				console.log(err);
			});
	};


	//Tab selection
	$scope.getSelectedHeader = function(selectedTab) {
		Utility.getSelectedHeader(selectedTab);
	};
		
	// for Service Provider
	$scope.elderCareContent = false;
	$scope.driverCotent = false;
	$scope.childCareContent = false;


	// For Service Seeker	
	$scope.sschildCareContent = false;
	$scope.sselderCareContent = false;
	$scope.childrenSelection = true;
	$scope.specialChildCare = true;
	$scope.medicalTest = true;
	$scope.eldersCount = true;
	$scope.elderExp = true;
	$scope.eldermedicalTest = true;
	
	if (setValue.getProfileType() == 'Service Seeker') {
		$scope.onlyForServiceProvider = true;
	}

	// For Service Provider 
	if ( setValue.getProfileType() == "Service Provider" &&  (setValue.getDomains() == "Elder Caregiver Job" || setValue.getDomains() == "Elder Caregiver" ) && (setValue.getAccessReasons() == "Get a Job" || setValue.getAccessReasons() == "Learn/Get Trained")) {
		$scope.elderCareContent = false;
		$scope.driverContent = true;
		$scope.childCareContent = true;
		$scope.sschildCareContent = true;
		$scope.sselderCareContent = true;
		
	}
	else if(setValue.getProfileType() == "Service Provider"  && (setValue.getDomains() == "Child Caregiver Job" || setValue.getDomains() == "Baby Caregiver Job" || setValue.getDomains() == "Child Caregiver" || setValue.getDomains() == "Baby Caregiver") && (setValue.getAccessReasons() == "Get a Job" || setValue.getAccessReasons() == "Learn/Get Trained")) {
		$scope.elderCareContent = true;
		$scope.driverContent = true;
		$scope.childCareContent = false;
		$scope.sschildCareContent = true;
		$scope.sselderCareContent = true;
		
	}
	else if (setValue.getProfileType() == "Service Seeker"  &&  (setValue.getDomains() == "Baby Care" || setValue.getDomains() == "Child Care" || setValue.getDomains() == "Baby Caregiver" || setValue.getDomains() == "Child Caregiver") && (setValue.getAccessReasons() == "Learn" || setValue.getAccessReasons() == "Hire")) 
	{
		$scope.sschildCareContent = false;
		$scope.elderCareContent = true;
		$scope.driverContent = true;
		$scope.childCareContent = true;
		$scope.sselderCareContent = true;
	
	}
	else if (setValue.getProfileType() == "Service Seeker"  && (setValue.getDomains() == "Elder Care" || setValue.getDomains() =="Elder Caregiver") && (setValue.getAccessReasons() == "Learn" || setValue.getAccessReasons() == "Hire")) {
		$scope.sschildCareContent = true;
		$scope.elderCareContent = true;
		$scope.driverContent = true;
		$scope.childCareContent = true;
		$scope.sselderCareContent = false;

		//Call GET API for Elder care
		getUserDetails();
		getCountries();
		getMyProfiles(); //my needs GET
	
	}
  else {
		$scope.elderCareContent = true;
		$scope.childCareContent = true;
		$scope.driverContent = false;
		$scope.sschildCareContent = true;
		$scope.sselderCareContent = true;
		
		//Call GET API for driver
		getUserDetails();
		getCountries();
	}

	$scope.copyAddress =  function() {
		if($scope.sameAddress == true) {
			$scope.permanentLine1 = '';
			$scope.permanentLine2 = '';
			$scope.sameAddress = false;
		}
		else if ($scope.sameAddress == false) {
			$scope.permanentLine1 = $scope.address_1;
			$scope.permanentLine2 = $scope.address_2;
			$scope.sameAddress = true;
		}
	};

	$scope.fileUpload = function(file) {
		if (file != null) {
			if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
				$timeout(function() {
					var fileReader = new FileReader();
					fileReader.readAsDataURL(file);
					fileReader.onload = function(e) {
						$timeout(function() {
							file.dataUrl = e.target.result;
						});
					}
				});
			}
		}
	};


	//Get states using selected country
	$scope.selectStateList = function () {

		if($scope.personalCountry == '' || $scope.personalCountry == undefined) {
			return false;
		}

		var countryID = $scope.personalCountry['id'];

		$rootScope.showSpinner($spinner); //show spinner

		countryAPI.getStates(countryID)
	  	.then(function (data) {
	  		$rootScope.hideSpinner($spinner); //hide spinner
				if (data != null) {
					$scope.states = data;
					$('.stateField').removeAttr('disabled');
				}
			},
			function (err) {
				$rootScope.hideSpinner($spinner); //hide spinner
				notifyManager.show('Failed to fetch states', 'error');
			});
	};

	$scope.driverSmoke = null;
	$scope.midDaySleep = null;
	$scope.drinking = null;
	$scope.tobacco = null;
	$scope.phoneDriving = null;
	$scope.tuberculosis = null;
	$scope.hepatitis = null;
	$scope.anaemia = null;
	$scope.hiv = null;
	$scope.haemophilia = null;
	$scope.nightBlindness = null;
	$scope.colourBlindness = null;
	$scope.otherField1 = null;
	$scope.otherField2 = null;
	$scope.selectedHigherEdu = null;
	$scope.overallHelath = false;

	//Gender selection
	$scope.selectGenderList = function (genderId, modelName) {
    $scope.modelName = genderId;
	};

	/* About form submission
	* 1. Get form data from user
	* 2. check validation
	* 3. Show response to user
	*/

	//Submit forms data to API
	var formSubmit = function (userDetails) {

		//submit from data to user
		aboutAPI.postDetails(userDetails)
			.then(function (data) {
				// if(data.message === 'success') {
					console.log('success -->', data);
					notifyManager.show('Successfully submitted', 'success');
				// }
			},
			function (err) {
				console.log('failed -->', err);
				if (err) {
					notifyManager.show(err.error, 'error');
				}
			});		
	};


	$scope.formPersonalEdu = function () {

		if ($scope.selectedEthnicity == null || $scope.selectedIdentifyDoc == null || $scope.selectedCountry == null || $scope.selectedBloodGroup == null || $scope.selectedWorkEligibility == null || $scope.selectedReligion == null) {
			return false;
		}

		console.log($scope.profilePicFile[0]);
		
		//Initializing
		var userDetails = {
			'authentication_token': $rootScope.authToken,
			'service_type': $rootScope.profileType,
			'user': {
				'user_details_attributes': {
					'profile_photo': $scope.profilePicFile[0], //n
					'date_of_birth': $scope.selectedDOB, 
					'gender': $scope.selectedGender,
					'ethnicity': $scope.selectedEthnicity['id'],
					'religion': $scope.selectedReligion['id'], 
					'driving_license_number': $scope.selectedLicenseNo,
					'driving_license': $scope.driverLicenceFile[0],
					'identity_document_type': $scope.selectedIdentifyDoc['id'],
					'identity_document_number': $scope.selectedIdentityNo,
					'identity_document': $scope.selectedIdentityFile[0],
					'work_permit': $scope.workPermitFile[0],
					'work_eligibility': $scope.selectedWorkEligibility['id']
				},
				'addresses_attributes': {
						'line_1': $scope.selectedAddress1, 
						'line_2': $scope.selectedAddress2,
						'landmark_id': $scope.selectedLandmark,
						'state_id': $scope.selectedState || 1, 
						'city': $scope.selectedCity,
						'country_id': $scope.selectedCountry['id'],
						'pincode_id': $scope.selectedPincode
				},
				'user_health_detail_attributes': {
					'blood_group': $scope.selectedBloodGroup['id']
				}
			}
		};

		console.log('userDetails --->', userDetails);

		//API CALL
		formSubmit(userDetails);

	};



	/* Education qualification
	* 1. Get user data
	*	2. submit it to API and show response
	*/


	$scope.formEducation = function () {

		var userDetails = { 
			'user': {
				'user_languages_attributes': []
			}
		};

		var ele = $('#languageSelector').find('div.form-container');

		$.each(ele, function (key, value) {
			
			var language = $('#languageSelector').find('div.form-container').find('input.custom-text-box').attr('name');
			var slider = $('#languageSelector').find('div.form-container').find('span.low').text();
			
			userDetails.user.user_languages_attributes.push({'language_id': language, 'proficiency': slider});
			console.log(userDetails.user);
		});

		if ($scope.selectedHigherEdu == undefined || $scope.countryOfEdu == undefined || $scope.selectedLanguage == undefined) {
			return false;
		}

		//Initializing
		var userDetails = {
			'authentication_token' : $rootScope.authToken, //adding authtokens,
			'service_type': $rootScope.profileType,
			'user': {
				'user_details_attributes': {
		      'highest_education': $scope.selectedHigherEdu['id'], 
		      'country_of_education': $scope.countryOfEdu['id'], 
		    },
	      'user_languages_attributes': [
		      {
		    	 	'language_id': $scope.selectedLanguage['id'],
		      	'proficiency': $scope.proficiencyVal
		    	}
	    	]
	  	}
		};

		//form submit to API
		formSubmit(userDetails);

	};


	//Remove appended language input and slider
	$('div').on('click', '.closeLang', function ($event) {
		$event.preventDefault();
		$(this).parent().prev().prev().remove();
		$(this).parent().prev().remove();
		$(this).parent().remove();
	})

	$scope.stayingWithFamily = false;
	$scope.hasBankAccount = false;
	$scope.hasOwnFlat = false;
	$scope.hasInsurance = '';
	
	//select has bank acount
	$scope.selectHasBank = function (value) {
		if (value == '' || value == undefined) {
			return false;
		}
		$scope.hasBankAccount = value;
	};

	//select family details
	$scope.selectStayFamily = function (value) {
		if (value == '' || value == undefined) {
			return false;
		}
		$scope.stayingWithFamily = value;
	};

	//select has own flat
	$scope.selectFlatDetails = function (value) {
		if (value == '' || value == undefined) {
			return false;
		}
		$scope.hasOwnFlat = value;
	};

	/* About family details
	*	 1. Get user data and post to API
	*  2. Show server response in notification
	*/


	$scope.submitFamilyDetail = function () {

		if ($scope.martialStatus == undefined || $scope.familyMember['id'] == undefined || $scope.familyIncome['id'] == undefined || $scope.children['id'] == undefined || $scope.elder['id'] == undefined) {
			return false;
		}

		//Initializing
		var userDetails = {
			'authentication_token' : $rootScope.authToken, //adding authtokens,
			'service_type': $rootScope.profileType,
			'user': {
				'family_detail_attributes': {
					'id': $scope.familyID ? $scope.familyID : null, //if id present update, else create new
	        'marital_status': $scope.martialStatus['id'],
	        'members_count': $scope.familyMember['id'],
	        'children': $scope.children['id'],
	        'elders': $scope.elder['id'],
	        'annual_family_income': $scope.familyIncome['id'],
	        'living_with_family': $scope.stayingWithFamily,
	        'has_bank_account': $scope.hasBankAccount,
	        'own_a_flat_or_house': $scope.hasOwnFlat,
	        'has_insurance': $scope.hasInsurance['id']
				}
			}
		};

		//form submit to API
		formSubmit(userDetails);
	};

	$scope.getImageSrc = function(file){
		$('.uploadFile').click(); //generate thump img
	};

	$scope.uploadBtn = function(form) {
		$(form).click(); //show browse file
	};

	/*
	* Elder Care form submission
	*/

	$scope.selectedJob = 0; //jobs
	$scope.elderCareAdd1 = null; //address
	$scope.elderCareAdd2 = null; //address
	$scope.elderCareAdd3 = null; //address
	$scope.myNeedsCountry = null; //country
	$scope.myNeedsState = null; //state
	$scope.myNeedsCity = null; //city
	$scope.myNeedsLandmark = null; //landmark
	$scope.myNeedsGender = null; //gender
	$scope.foodPlaning = null; //food planing
	$scope.medicalAssitant = null; //medicalAssitant
	$scope.emotionalSupport = null; //emotional support
	$scope.safetyNeeds = null; //emotional support
	$scope.counselling = null; //counselling
	$scope.assitantWithPets = null; //assitantWithPets
	$scope.clothing = null; //clothing
	$scope.accElder = null; //accElder
	$scope.elderCareOther = null; //other field
	$scope.elderSmoking = null; //elderSmoking
	$scope.elderDrinking = null; //elderDrinking
	$scope.elderTobacco = null; //elderDrinking
	$scope.elderNotConcerned = null; //elderNotConcerned
	$scope.elderHabitOther = null; //elderHabitOther
	$scope.healthPoor = null; //healthPoor
	$scope.healthFair = null; //healthFair
	$scope.healthGood = null; //healthGood
	$scope.healthVeryGood = null; //healthVeryGood
	$scope.healthExcellent = null; //healthExcellent
	$scope.elderTuberculosis = null; //elderTuberculosis
	$scope.elderNightBlind = null; //elderNightBlind
	$scope.elderColorBlind = null; //elderColorBlind
	$scope.elderHiv = null; //elderHiv
	$scope.elderAlignmentOther = null; //elderAlignmentOther
	$scope.familyLaundry = null; //familyLaundry
	$scope.lightHouseKeeping = null; //lightHouseKeeping
	$scope.elderShopping = null; //elderShopping
	$scope.elderCooking = null; //elderCooking
	$scope.elderMedical = null; //elderMedical
	$scope.elderMedicalOther = null; //elderMedicalOther
	$scope.aidTraining = null; //aidTraining
	$scope.elderCRN = null; //elderCRN
	$scope.elderCPR = null; //elderCPR
	$scope.certifiedNurse = null; //certifiedNurse
	$scope.elderCertified = null; //elderCertified
	$scope.specialNeeds = null; //specialNeeds
	$scope.elderOtherCount = null; //elderOtherCount
	$scope.eldersCount = null; //elderOtherCount

	$scope.handlingElderNo = null; //handlingElderNo
	$scope.handlingElderFrail = null; //handlingElderFrail
	$scope.elderExp = null; //elderExp

	$scope.cognitiveChallenges = null; //cognitiveChallenges
	$scope.healthChallenges = null; //healthChallenges
	$scope.emotionalChallenges = null; //emotionalChallenges
	$scope.physicalChallenges = null; //physicalChallenges

	$scope.alzheimer = null; //alzheimer
	$scope.cancer = null; //cancer
	$scope.cysticFibrosis = null; //cysticFibrosis
	$scope.depression = null; //depression
	$scope.diabetes = null; //diabetes

	$scope.dyslexia = null; //dyslexia
	$scope.elderSyndrome = null; //fragileSyndrome
	$scope.hearingLoss = null; //hearingLoss
	$scope.heartDisease = null; //heartDisease

	$scope.incontinence = null; //incontinence
	$scope.elderLungDisease = null; //lungDisease
	$scope.mentalIllness = null; //mentalIllness
	$scope.muscularDystrophy = null; //muscularDystrophy
	$scope.osteoporosis = null; //osteoporosis

	$scope.parkinsonDisease = null; //parkinsonDisease
	$scope.seizures = null; //seizures
	$scope.sleepDisorders = null; //sleepDisorders
	$scope.eyeDiseases = null; //eyeDiseases
	
	$scope.providersAge = {}; //providersAge
	$scope.budgetService = null; //budgetService
	$scope.healthInsurance = null; //healthInsurance
	$scope.elderBonus = null; //elderBonus
	
	$scope.elderPhone = null; //elderPhone
	$scope.elderConveyance = null; //elderConveyance
	$scope.elderDayOff = null; //elderDayOff
	$scope.elderLeaves = null; //elderLeaves
	$scope.elderLeisureTime = null; //elderLeisureTime
	$scope.elderOtherBenifit = null; //elderOtherBenifit
	$scope.elderMedicalTest = null; //elderMedicalTest

	$scope.elderPayment = null; //elderPayment
	$scope.elderJobTrial = null; //elderJobTrial
	$scope.elderMoreDetails = null; //elderMoreDetails

	//Radio button selected
	$scope.selectRadioBtn = function (value, scopeName) {
		$scope.scopeName = value;
	};

	
	$scope.formElderCare = function () {

		var userDetails = {

		};



	};




	$scope.init = function(){
    $scope.status = true;
  }
  
  $scope.changeStatus = function(){
    $scope.status = !$scope.status;
  }

  	//Social networks login
	$scope.loginGoogle = function() {
        var clientId = "693593979546-crlru3n841g17hg23r13fsdgu412t3og.apps.googleusercontent.com";
        var scope = "email";
        var redirect_uri = "http://localhost:3000";
        var response_type = "token";
        var url = "https://accounts.google.com/o/oauth2/auth?scope="+scope+"&client_id="+clientId+"&redirect_uri="+redirect_uri+
        "&response_type="+response_type;
        window.location.replace(url);
    };

   $scope.loginFacebook = function() {
        var clientId = "350562095126583";
        var scope = "email";
        var redirect_uri = "http://localhost:3000";
        var response_type = "token";
        
        var url = "https://www.facebook.com/dialog/oauth?scope="+scope+"&client_id="+clientId+"&redirect_uri="+redirect_uri+
        "&response_type="+response_type;
        window.location.replace(url);
    };

}]);



/*-----  End of Controller = aboutMeCtrl  ------*/





/*================================================================
=>                   Controller = userSignupController
==================================================================*/
/*global app, $http, $, localStorage*/

app.controller('signupCtrl', ['$http', '$scope', 'signUp', '$rootScope', 'appConfig', 'countryAPI', 'setValue', function ($http, $scope, signUp, $rootScope, appConfig, countryAPI, setValue) {
    'use strict';


    $scope.parentCourseName = '';
   // debugger;
    $scope.secondLevelCourseName = '';
    $scope.secondList = true;
    $scope.thirdList =  true;
    $scope.jsonFormat = '';
    $scope.keyValues = '';
    $rootScope.selectHeader(1);
    $rootScope.countryList = null;



    var getSignUpUserType = function () {

        signUp.getUserType()
            .then(function (data) {
                $scope.jsonFormat = data.profile_highlights;
                setValue.setCountryList(data.launched_countries);
                $rootScope.countryList = data.launched_countries;
                $scope.keyValues = Object.keys(data.profile_highlights);
            },
            function (error) {
                console.log('error while getting data', error);
            });
    };

    getSignUpUserType();

    var reset = function () {
        if ($scope.userSignupController) {
            $scope.jsonFormat = "null";
            $scope.$apply(); //apply scope value
        }
    };

    $('#usersignupModel').on('click', '.closePopup, .modal-backdrop', function (event) {
        event.preventDefault();
        reset(); //reset form
    });

    $scope.selectUserType = function (values) {
        //console.log('clikcing on 2nd level menu'+values);
        $scope.secondList = false;
        $scope.parentCourseName = values;
        $scope.courseList = '';
        $scope.test = [];
        $scope.wantedCourseList = Object.keys($scope.jsonFormat[values]);
        $rootScope.selectHeader(2);
        $("#submit_id").attr('disabled', true);
        
        $('#list1').on('click', 'li', function () {
            $(this).addClass('selectedOption').siblings().removeClass('selectedOption');
            var img = $(this).find('img'),
            len = img.length;
            if (len > 0) {
                $('li>img').attr('src', '../images/uncheck-box.png');
                var attrID = img.first().attr('src', '../images/check-box.png');
            } else {
            
            }
        });
    };

    $scope.courseName = function (values) {
        $scope.thirdList = false;
        $rootScope.selectHeader(3);
        $scope.secondLevelCourseName = values;
        /*if($scope.test.length == 0) {
            $scope.test = $scope.jsonFormat[$scope.parentCourseName][values];
        } else {*/
            $scope.courseList = $scope.jsonFormat[$scope.parentCourseName][values];
            /*for(var count = 0; count <$scope.courseList.length ;count ++){
                $scope.test.push($scope.courseList[count]);
               // console.log($scope.courseList[count]);
            }
        } */

        $("#submit_id").attr('disabled', true);
        $('#list2').on('click', 'li', function () {
        //alert($(this).html());
            var img = $(this).find('img'),
                len = img.length;
            if (len > 0) {
                $('#listOfWantedCourse li>img').attr('src', '../images/uncheck-box.png');
                var attrID = img.first().attr('src', '../images/check-box.png');
                
            } 
            $(this).addClass('selectedOption').siblings().removeClass('selectedOption');
        });
    };


    $scope.getcourseContent = function (values) {
        /* Once Service will be Ready localStorage Code Will Removed */

        localStorage.setItem('profile_types', $scope.parentCourseName);
        localStorage.setItem('access_reasons', $scope.secondLevelCourseName);
        localStorage.setItem('domains', values);
        /**/
        setValue.setProfileType($scope.parentCourseName);
        setValue.setAccessReasons($scope.secondLevelCourseName);
        setValue.setDomains(values);


        $("#submit_id").removeAttr('disabled');
        $('#list3').on('click', 'li', function () {
            $(this).addClass('selectedOption').siblings().removeClass('selectedOption');
            var img = $(this).find('img'),
                len = img.length;
            if (len > 0) {
                $('#listOfLookingFor li>img').attr('src', '../images/uncheck-box.png');
                var attrID = img.first().attr('src', '../images/check-box.png');
                
            } 
        });
    };

    $scope.selectJustExploring = function (element) {
        localStorage.setItem('access_reasons', 'Just Exploring');
        $("#submit_id").removeAttr('disabled');
        $('#exploring img').attr('src', '../images/check-box.png');
        $rootScope.selectHeader(1);
        $scope.parentCourseName = '';
        $scope.secondLevelCourseName = '';
        $scope.secondList = true;
        $scope.thirdList =  true;
        $scope.wantedCourseList = {};
        $scope.courseList = {};

        var selecetdList = $('#list1');
        selecetdList.find('li.selectedOption img').attr('src', '../images/uncheck-box.png');
        selecetdList.find('li.selectedOption').removeClass('selectedOption');

    };

    $scope.showRegistrationPopup = function() {
        
        $('.setup-account').addClass('none');
        $('.register-module').removeClass('none');
    };

    $scope.showloginpage = function() {
        $('.signup-module').addClass('none');
        $('.login-module').removeClass('none');
    };


}]);


app.controller('userDetailsCtrl',['$scope', '$http', '$rootScope', 'signUp', 'setValue', function($scope, $http, $rootScope, signUp, setValue){
		
	'use strict';	

	$scope.Request = {};
	$scope.user = {};
	//$scope.countryList = setValue.getCountryList();

	//console.log('countryList------------->',$scope.countryList);


	var	registerValidation = function (serverResponse) {
		$.each(serverResponse, function (key, value) {
			if (key == 'email') {
				$scope.emailErrMsg = serverResponse[key];
			}

			if (key == 'phone_number') {
				$scope.phoneErrMsg = serverResponse[key];
			}

			if (key == 'password_confirmation') {
				$scope.pwdErrMsg = serverResponse[key];
			}
		});
	};
	
	//localStorage.setItem('email',$scope.user.email); 
	$scope.processForm = function() {
		setValue.setEmailId($scope.user.email);
		$scope.Request['user'] = $scope.user;
		$scope.Request['domains'] = localStorage.getItem('domains');
		$scope.Request['profile_types'] = localStorage.getItem('profile_types');
		$scope.Request['access_reasons'] = localStorage.getItem('access_reasons');
		$rootScope.userEmailId = $scope.user.email;	 //TODO Remove later
		var addresses_attributes= {
            "0": {
                "country_id": "232"
            }
        };
        $scope.Request['addresses_attributes'] =  addresses_attributes;
        console.log($scope.Request);
		
		signUp.registerUser($scope.Request)
			.then(function(data) {
	      $('#userDetailsModal').modal('hide');
				$('#otpModel').modal('show');
    	},
    	function(data){
    		console.log('error==>', data);
    		
    		registerValidation(data);
    	});
	};

	localStorage.clear();	
	
	var clearSession = function () {
  		//localStorage.clear();
	};

	var reset = function () {
		if ($scope.userDetailsCtrl) {
			$scope.Request="";
			$scope.user="";
			$scope.emailErrMsg = "";
			$scope.phoneErrMsg = "";
			$scope.pwdErrMsg = "";


			$scope.$apply(); //apply scope value
		}}

	$('#userDetailsModal').on('click', '.closePopup, .modal-backdrop', function (event) {
        event.preventDefault();
        reset(); //reset form
    });

    $scope.showLoginPagePopup = function() {
        $('.signup-module').addClass('none');
        $('.login-module').removeClass('none');
    };
    $scope.showRegisterPagePopup = function() {
        
        
        $('.register-module').addClass('none');
        $('.setup-account').removeClass('none');
        
    };
   
}]);

/*================================================================
=>                   Filter = countryFilter
==================================================================*/
/*global app*/

app.filter('countryFilter', function () {
	
	'use strict';

	return function (input) {

		console.log('Filter == countryFilter');
		
		return;
	};
});


/*-----  End of Filter = countryFilter  ------*/

/*================================================================
=>                   Filter = spinner
==================================================================*/
/*global app, Spinner, $ */

app.filter('spinner', function () {
	
	'use strict';

	return function (action, options) {

		var opts = {
			lines: 10, // The number of lines to draw
			length: 6, // The length of each line
			width: 4, // The line thickness
			radius: 10, // The radius of the inner circle
			corners: 1, // Corner roundness (0..1)
			rotate: 7, // The rotation offset
			color: '#1D2939', // #rgb or #rrggbb
			speed: 0.8, // Rounds per second
			trail: 33, // Afterglow percentage
			shadow: true, // Whether to render a shadow
			hwaccel: false, // Whether to use hardware acceleration
			className: 'spinner', // The CSS class to assign to the spinner
			//zIndex: 2e9, // The z-index (defaults to 2000000000)
			zIndex: 1, // The z-index (defaults to 2000000000)
			top: 'auto', // Top position relative to parent in px
			left: 'auto',  // Left position relative to parent in px
			element: '',   // Element to bind the spinner
		};

		if (typeof(options) === 'object') {
			$.extend(opts, options);
		}

    if (opts.element.length === 0) {
			return false;
    }


    var spinner = new Spinner(opts).spin();

    switch (action) {
			case 'hide':
			if (opts.element.hasClass('discussionBody')) {
				opts.element.children().animate({'opacity': '1'}, 50);
			}
			opts.element.find('.' + opts.className).remove();
			break;

      default:
			opts.element.append(spinner.el);

    }

	};
});


/*-----  End of Filter = spinner  ------*/

/*================================================================
=>                   Filter = Humanize
==================================================================*/
/*global app, Humanize, $ */

app.filter('humanize', function () {
	
    'use strict';

    return function(str){
	var readable_str = str.replace(/_/g, " ").split(" ").map(function(i){return i[0].toUpperCase() + i.substring(1)}).join(" ");
	console.log(readable_str);
	return readable_str;
    };
    
});


/*-----  End of Filter = Humanize  ------*/


/*================================================================
=>                  Directive = addLanguage
==================================================================*/
/*global app*/

app.directive('addLanguage', ['$rootScope', '$compile', function ($rootScope, $compile) {
   
    'use strict';

	return {
		require: 'ngModel',
    restrict: 'A',
    transclude: true,
		link: function (scope, element, attrs, model) {
			var counter = 0;
		
			scope.getSelectedLang = function () {		
				counter++;

			  var inputEle = $compile('<div class="form-container"><div class="form-left-container"><input type="text" class="custom-text-box" name=' + scope.selectedLanguage["id"] + ' value=' + scope.selectedLanguage["name"] + ' disabled></div>' + '<div class="form-center-container"><span class="slider-text">Proficiency</span><slider floor="0" ceiling="10" step="1" precision="0" ng-model="proficiencyVal'+counter+'"></slider></div>' + '<div class="form-right-container"> <button type="button" class="close closeLang">&times;</button></div></div>' )(scope);
        
        $('#languageSelector').append(inputEle);
      };

		}
	};
}]);


/*-----  End of Directive = addLanguage  ------*/

/*=========================================================================================
=>                  Directive = dropdown

This directive will be added to link which will trigger the popup to appear,
There should be div (sibling) which has the class '.ddmenu'. On clicking on the element 
(which has the directive added), the pop up will appear.

Initiall the .ddmenu will have 'display:none' and we can customize it easily using CSS
===========================================================================================*/
/*global app, $, window*/

app.directive('dropdown', ['$rootScope', function ($rootScope) {
   
    'use strict';

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			console.log('drop down directives');
			//var elements = elements;
			// var element = $('.arrowWrapper');
			element = $(element);
			var $menu = element.next();

			var hideMenu = function () {
				$menu.hide();
				element.removeClass('active');

				$(window).off('click', windowClickHandler);
			};

			var showMenu = function (event) {
				event.preventDefault();
				event.stopPropagation();
				$rootScope.$broadcast('hide::dropdown');

				$menu.show();
				element.addClass('active');

				$(window).on('click', windowClickHandler);
			};

			var windowClickHandler = function (e) {
				// if the target of the click isn't the container && nor a descendant of the container
				if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
			        hideMenu();
			    }
			};

			element.on('click', function (event) {

				var $arrow = element.find('.arrowSection');
				console.debug('$arrow ', $arrow, $arrow.length);
				if ($arrow.length) {
					if ($arrow.is(event.target) || $arrow.has(event.target).length > 0) {
						$menu.is(':visible') ? hideMenu() : showMenu(event);
					} else {
						showMenu(event);
					}
				} else {
					$menu.is(':visible') ? hideMenu() : showMenu(event);
				}
				showMenu(event);
				
			});

			element.siblings('.ddmenu').find('li').on('click', function (event) {
				// element.text($(this).text());
				$rootScope.$broadcast('hide::dropdown');
			});

			

			scope.$on('$destroy', function () {
				return $(window).off('click', windowClickHandler);
			});

			scope.$on('hide::dropdown', function () {
				hideMenu();
				return false;
			});
		}
	};
}]);


/*-----  End of Directive = dropdown  ------*/

/*================================================================
=>                  Directive = INPUT NUMBER
==================================================================*/
/*global app*/

app.directive('inputNumber', ['$rootScope', function ($rootScope) {
 
	'use strict';

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			console.log('Directive === INPUT NUMBER');
		}
	};
}]);


/*-----  End of Directive = menuBar  ------*/
	
/*================================================================
=>                  Directive = menuBar
==================================================================*/
/*global app*/

app.directive('menuBar', ['$rootScope', function ($rootScope) {
 
	'use strict';

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			console.log('Directive === menuBar');
		}
	};
}]);


/*-----  End of Directive = menuBar  ------*/
/*================================================================
=>                  Directive = modalDialog
==================================================================*/
/*global app, Utility, $*/


app.directive('modalDialog', ['$rootScope', function ($rootScope) {
    'use strict';
    return {
        restrict: 'E',
        scope: {
            show: '='
        },
        replace: true, // Replace with the template below
        transclude: true, // we want to insert custom content inside the directive
        link: function (scope, element, attrs) {
            scope.dialogStyle = {};
            if (attrs.width) {
                scope.dialogStyle.width = attrs.width;
            }
            if (attrs.height) {
                scope.dialogStyle.height = attrs.height;
            }
            scope.hideModal = function () {
                scope.show = false;
                Utility.removeCls($('body').find('.modal-dialog'), 'signup-dialog');
                Utility.removeCls($('body').find('.modal-dialog'), 'signup-form-dialog');
                //.removeClass('modal-dialog-width');//    .style.width = "85%";
                //reset form from controller
                $rootScope.$broadcast('resetForm');
            };
        },
        template: '<div class="modal" ng-show="show">' +
                '<div class="modal-overlay" ng-click="hideModal()"></div>' +
                '<div class="modal-dialog" ng-style="dialogStyle">' +
                '<div class="modal-close inl-blk" ng-click="hideModal()"></div>' +
                '<div class="modal-dialog-content clearfix" ng-transclude></div>' +
                '</div>' +
                '</div>'
    };
}]);


/*-----  End of Directive = modalDialog  ------*/

/*================================================================
=>                  Directive = MultiSelect List
==================================================================*/
/*global app, Utility*/


app.directive('multiSelect', ['$rootScope', function ($rootScope) {
    'use strict';
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var selectList = function () {
				var selecetdList = element.parent()[0];
				var selectedType = element[0].getAttribute('attr');
				if (element.hasClass('selected')) {

					Utility.removeCls(element, 'selected');

					/*ClassList name for list and broadcast name should be same*/
					$rootScope.$broadcast(selecetdList.classList[0], [selectedType, 'delete']);
				} else {
					
					Utility.addCls(element, 'selected');

					/*ClassList name for list and broadcast name should be same*/
					$rootScope.$broadcast(selecetdList.classList[0], [selectedType, 'add']);
				}
			};
			element.on('click', selectList);

        }
    };
}]);


/*-----  End of Directive = multi select list  ------*/

/*================================================================
=>                  Directive = myRequired
==================================================================*/
/*global app*/

app.directive('myRequired', ['$rootScope', function ($rootScope) {
   
  'use strict';

	return {
	  restrict: 'AE',
	  scope: {},
	  require: 'ngModel',
	  link: function(scope, element, attrs) {
      if (element.val() == "") {
        return;
      }
  	},
	};

}]);


/*-----  End of Directive = myRequired  ------*/

/*================================================================
=>                  Directive = scrollMenu
==================================================================*/
/*global app, window, $*/

app.directive('scrollMenu', ['$rootScope', function ($rootScope) {

	'use strict';

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			$(window).scroll(function () {
				var headerHeight = $('.main-header').height();
				var windowHeight = $(window).scrollTop();

				if (windowHeight > 1) {
					$('.main-header').addClass('has-scrolled');
				}
				else if (windowHeight === 0) {
					$('.main-header').removeClass('has-scrolled');
				}
			});
		}
	};
}]);


/*-----  End of Directive = scrollMenu  ------*/

// /*================================================================
// =>                  Directive = slider
// ==================================================================*/
// /*global app*/

// app.directive('slidePrev', ['$rootScope', function ($rootScope) {
   
//     'use strict';

// 	return {
// 		restrict: 'A',
// 		link: function (scope, element, attrs) {

// 			var slideLength = scope.slides.length; //slides length
// 			element.on('click', function () {
// 				console.log('Prev');
// 				var current = scope.slide;
// 				if (current === 1) {
// 					scope.slide = slideLength;
// 				}
// 				else {
// 					scope.slide = current - 1;
// 					console.log(scope.slide)
// 				}
// 			});
// 		}
// 	};
// }]);


// app.directive('slideNext', ['$rootScope', function ($rootScope) {
   
//     'use strict';

// 	return {
// 		restrict: 'A',
// 		link: function (scope, element, attrs) {

// 			var slideLength = scope.slides.length; //slides length
// 			element.on('click', function () {
// 				console.log('Next');
// 				var current = scope.slide;
// 				if (current === slideLength) {
// 					scope.slide = 1;
// 				}
// 				else {
// 					scope.slide = current + 1;
// 					console.log(scope.slide)
// 				}
// 			});
// 		}
// 	};
// }]);


// /*-----  End of Directive = slider  ------*/
/*===========================================================
=> 				Directive match
=============================================================*/

app.directive('match', function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      scope: {
        match: '='
      },
      link: function(scope, elem, attrs, ctrl) {
        scope.$watch(function() {
          var modelValue = ctrl.$modelValue || ctrl.$$invalidModelValue;
          return (ctrl.$pristine && angular.isUndefined(modelValue)) || scope.match === modelValue;
        }, function(currentValue) {
          ctrl.$setValidity('match', currentValue);
        });
      }
    };
});

/*================================================================
=>                  Directive = password
==================================================================*/

app.directive('checkpassword', ['$rootScope', function ($rootScope) {
   
	'use strict';

	return {
		restrict : 'A',
		require : 'ngModel',
		link: function (scope, element, attrs, ctrl) {	

			// ctrl.$parsers.unshift(function (viewValue, $scope) {
			// 	var pwdMatch  = viewValue === scope.userRegistration.user['password'].$viewValue; //check confrim password is same as password
			// 	ctrl.$setValidity('pwdMatch', pwdMatch);
			// });
			userRegistration.conformPassword.$invalid = true;
			var change = function (event) {
				var currentEle = event.currentTarget,
				value = $(currentEle).val();
				scope.user['conformPassword'] = value;
				if (scope.user.email === scope.user.conformEmail) {
					console.log('true');
					scope.userRegistration.conformPassword.$invalid = false;
				} else {
					console.log('false');
					scope.userRegistration.conformPassword.$invalid = true;
				}
				scope.$apply();
			};

			$(element).on('change', function (e) {
				change(e);
			});
		}
	};

}]);


/*================================================================
=>                  Directive = change password
==================================================================*/

app.directive('changepassword', ['$rootScope', function ($rootScope) {
   
	'use strict';

	return {
		restrict : 'A',
		require : 'ngModel',
		link: function (scope, element, attrs, ctrl) {

			// ctrl.$parsers.unshift(function (viewValue, $scope) {
			// 	var pwdMatch  = viewValue === scope.userRegistration.user['password'].$viewValue; //check confrim password is same as password
			// 	ctrl.$setValidity('pwdMatch', pwdMatch);
			// });
			changePwdForm.confirmPassword.$invalid = true;
			var change = function (event) {
				var currentEle = event.currentTarget,
				value = $(currentEle).val();
				
				if (scope.changePwdForm.newPassword.$viewValue === scope.changePwdForm.confirmPassword.$viewValue) {
					scope.changePwdForm.confirmPassword.$invalid = false;
				} else {
					
					scope.changePwdForm.confirmPassword.$invalid = true;
				}
				scope.$apply();
			};

			$(element).on('keyup', function (e) {
				change(e);
			});
		}
	};

}]);

/*================================================================
=>                  Directive = Check mail
==================================================================*/

app.directive('checkemail', ['$rootScope', function ($rootScope) {
   
	'use strict';

	return {
		restrict : 'A',
		require : 'ngModel',
		link: function (scope, element, attrs, ctrl) {
			// console.log('directive == checkpassword');

			// ctrl.$parsers.unshift(function (viewValue, $scope) {
			// 	var pwdMatch  = viewValue === scope.userRegistration.user['password'].$viewValue; //check confrim password is same as password
			// 	ctrl.$setValidity('pwdMatch', pwdMatch);
			// });
			
			var attr = attrs;
			var controller = ctrl;
			var scopes = scope;
			userRegistration.confirmEmail.$invalid = true;

			var change = function (event) {
				var currentEle = event.currentTarget,
				value = $(currentEle).val();
				scope.user['conformEmail'] = value;
				if (scope.user.email === scope.user.conformEmail) {
					console.log('true');
					scope.userRegistration.confirmEmail.$invalid = false;
				} else {
					console.log('false');
					scope.userRegistration.confirmEmail.$invalid = true;
				}
				scope.$apply();
			};


			element.on('keyup', function (e) {
				console.log('change email event');
				change(e);
			});
		}
	};

}]);

/*================================================================
=>                  Directive = integer
==================================================================*/

app.directive('integer', ['$rootScope', function ($rootScope) {

	'use strict';

	var integerRegexp = /^\-?\d+$/;

	return {
		restrict : 'A',
		require: 'ngModel',
		link: function (scope, elm, attrs, ctrl) {
			ctrl.$parsers.unshift(function (viewValue) {
				if (integerRegexp.test(viewValue)) {
					ctrl.$setValidity('integer', true);
					return viewValue;
				}
				else {
					ctrl.$setValidity('integer', false);
					return undefined;
				}
			});
		}
	};
}]);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/**!
 * AngularJS file upload/drop directive with progress and abort
 * FileAPI Flash shim for old browsers not supporting FormData 
 * @author  Danial  <danial.farid@gmail.com>
 * @version <%= pkg.version %>
 */

(function() {

var hasFlash = function() {
	try {
	  var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
	  if (fo) return true;
	} catch(e) {
	  if (navigator.mimeTypes['application/x-shockwave-flash'] != undefined) return true;
	}
	return false;
}

function patchXHR(fnName, newFn) {
	window.XMLHttpRequest.prototype[fnName] = newFn(window.XMLHttpRequest.prototype[fnName]);
};

if ((window.XMLHttpRequest && !window.FormData) || (window.FileAPI && FileAPI.forceLoad)) {
	var initializeUploadListener = function(xhr) {
		if (!xhr.__listeners) {
			if (!xhr.upload) xhr.upload = {};
			xhr.__listeners = [];
			var origAddEventListener = xhr.upload.addEventListener;
			xhr.upload.addEventListener = function(t, fn, b) {
				xhr.__listeners[t] = fn;
				origAddEventListener && origAddEventListener.apply(this, arguments);
			};
		}
	}
	
	patchXHR('open', function(orig) {
		return function(m, url, b) {
			initializeUploadListener(this);
			this.__url = url;
			try {
				orig.apply(this, [m, url, b]);
			} catch (e) {
				if (e.message.indexOf('Access is denied') > -1) {
					orig.apply(this, [m, '_fix_for_ie_crossdomain__', b]);
				}
			}
		}
	});

	patchXHR('getResponseHeader', function(orig) {
		return function(h) {
			return this.__fileApiXHR && this.__fileApiXHR.getResponseHeader ? this.__fileApiXHR.getResponseHeader(h) : (orig == null ? null : orig.apply(this, [h]));
		};
	});

	patchXHR('getAllResponseHeaders', function(orig) {
		return function() {
			return this.__fileApiXHR && this.__fileApiXHR.getAllResponseHeaders ? this.__fileApiXHR.getAllResponseHeaders() : (orig == null ? null : orig.apply(this));
		}
	});

	patchXHR('abort', function(orig) {
		return function() {
			return this.__fileApiXHR && this.__fileApiXHR.abort ? this.__fileApiXHR.abort() : (orig == null ? null : orig.apply(this));
		}
	});

	patchXHR('setRequestHeader', function(orig) {
		return function(header, value) {
			if (header === '__setXHR_') {
				initializeUploadListener(this);
				var val = value(this);
				// fix for angular < 1.2.0
				if (val instanceof Function) {
					val(this);
				}
			} else {
				this.__requestHeaders = this.__requestHeaders || {};
				this.__requestHeaders[header] = value;
				orig.apply(this, arguments);
			}
		}
	});
	
	function redefineProp(xhr, prop, fn) {
		try {
			Object.defineProperty(xhr, prop, {get: fn});
		} catch (e) {/*ignore*/}
	}

	patchXHR('send', function(orig) {
		return function() {
			var xhr = this;
			if (arguments[0] && arguments[0].__isFileAPIShim) {
				var formData = arguments[0];
				var config = {
					url: xhr.__url,
					jsonp: false, //removes the callback form param
					cache: true, //removes the ?fileapiXXX in the url
					complete: function(err, fileApiXHR) {
						xhr.__completed = true;
						if (!err && xhr.__listeners['load']) 
							xhr.__listeners['load']({type: 'load', loaded: xhr.__loaded, total: xhr.__total, target: xhr, lengthComputable: true});
						if (!err && xhr.__listeners['loadend']) 
							xhr.__listeners['loadend']({type: 'loadend', loaded: xhr.__loaded, total: xhr.__total, target: xhr, lengthComputable: true});
						if (err === 'abort' && xhr.__listeners['abort']) 
							xhr.__listeners['abort']({type: 'abort', loaded: xhr.__loaded, total: xhr.__total, target: xhr, lengthComputable: true});
						if (fileApiXHR.status !== undefined) redefineProp(xhr, 'status', function() {return (fileApiXHR.status == 0 && err && err !== 'abort') ? 500 : fileApiXHR.status});
						if (fileApiXHR.statusText !== undefined) redefineProp(xhr, 'statusText', function() {return fileApiXHR.statusText});
						redefineProp(xhr, 'readyState', function() {return 4});
						if (fileApiXHR.response !== undefined) redefineProp(xhr, 'response', function() {return fileApiXHR.response});
						var resp = fileApiXHR.responseText || (err && fileApiXHR.status == 0 && err !== 'abort' ? err : undefined);
						redefineProp(xhr, 'responseText', function() {return resp});
						redefineProp(xhr, 'response', function() {return resp});
						if (err) redefineProp(xhr, 'err', function() {return err});
						xhr.__fileApiXHR = fileApiXHR;
						if (xhr.onreadystatechange) xhr.onreadystatechange();
						if (xhr.onload) xhr.onload();
					},
					fileprogress: function(e) {
						e.target = xhr;
						xhr.__listeners['progress'] && xhr.__listeners['progress'](e);
						xhr.__total = e.total;
						xhr.__loaded = e.loaded;
						if (e.total === e.loaded) {
							// fix flash issue that doesn't call complete if there is no response text from the server  
							var _this = this
							setTimeout(function() {
								if (!xhr.__completed) {
									xhr.getAllResponseHeaders = function(){};
									_this.complete(null, {status: 204, statusText: 'No Content'});
								}
							}, 10000);
						}
					},
					headers: xhr.__requestHeaders
				}
				config.data = {};
				config.files = {}
				for (var i = 0; i < formData.data.length; i++) {
					var item = formData.data[i];
					if (item.val != null && item.val.name != null && item.val.size != null && item.val.type != null) {
						config.files[item.key] = item.val;
					} else {
						config.data[item.key] = item.val;
					}
				}

				setTimeout(function() {
					if (!hasFlash()) {
						throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
					}
					xhr.__fileApiXHR = FileAPI.upload(config);
				}, 1);
			} else {
				orig.apply(xhr, arguments);
			}
		}
	});
	window.XMLHttpRequest.__isFileAPIShim = true;

	var addFlash = function(elem) {
		if (!hasFlash()) {
			throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
		}
		var el = angular.element(elem);
		if (!el.attr('disabled')) {
			if (!el.hasClass('js-fileapi-wrapper') && (el.attr('ng-file-select') != null || el.attr('data-ng-file-select') != null ||
					(el.attr('ng-file-generated-elem') && 
							(el.parent().attr('ng-file-select') != null || el.parent().attr('data-ng-file-select') != null)))) {
				if (FileAPI.wrapInsideDiv) {
					var wrap = document.createElement('div');
					wrap.innerHTML = '<div class="js-fileapi-wrapper" style="position:relative; overflow:hidden"></div>';
					wrap = wrap.firstChild;
					var parent = elem.parentNode;
					parent.insertBefore(wrap, elem);
					parent.removeChild(elem);
					wrap.appendChild(elem);
				} else {
					el.addClass('js-fileapi-wrapper');
					if (el.attr('ng-file-generated-elem')) {
						if (el.parent().css('position') === '' || el.parent().css('position') === 'static') {
							el.parent().css('position', 'relative');
						}
						el.css('top', 0).css('bottom', 0).css('left', 0).css('right', 0).css('width', '100%').css('height', '100%').
							css('padding', 0).css('margin', 0);
						el.parent().unbind('click', el.parent().__afu_fileClickDelegate__);
					}
				}
			}
		}
	};
	var changeFnWrapper = function(fn) {
		return function(evt) {
			var files = FileAPI.getFiles(evt);
			//just a double check for #233
			for (var i = 0; i < files.length; i++) {
				if (files[i].size === undefined) files[i].size = 0;
				if (files[i].name === undefined) files[i].name = 'file';
				if (files[i].type === undefined) files[i].type = 'undefined';
			}
			if (!evt.target) {
				evt.target = {};
			}
			evt.target.files = files;
			// if evt.target.files is not writable use helper field
			if (evt.target.files != files) {
				evt.__files_ = files;
			}
			(evt.__files_ || evt.target.files).item = function(i) {
				return (evt.__files_ || evt.target.files)[i] || null;
			}
			if (fn) fn.apply(this, [evt]);
		};
	};
	var isFileChange = function(elem, e) {
		return (e.toLowerCase() === 'change' || e.toLowerCase() === 'onchange') && elem.getAttribute('type') == 'file';
	}
	if (HTMLInputElement.prototype.addEventListener) {
		HTMLInputElement.prototype.addEventListener = (function(origAddEventListener) {
			return function(e, fn, b, d) {
				if (isFileChange(this, e)) {
					addFlash(this);
					origAddEventListener.apply(this, [e, changeFnWrapper(fn), b, d]);
				} else {
					origAddEventListener.apply(this, [e, fn, b, d]);
				}
			}
		})(HTMLInputElement.prototype.addEventListener);
	}
	if (HTMLInputElement.prototype.attachEvent) {
		HTMLInputElement.prototype.attachEvent = (function(origAttachEvent) {
			return function(e, fn) {
				if (isFileChange(this, e)) {
					addFlash(this);
					if (window.jQuery) {
						// fix for #281 jQuery on IE8
						angular.element(this).bind('change', changeFnWrapper(null));
					} else {
						origAttachEvent.apply(this, [e, changeFnWrapper(fn)]);
					}
				} else {
					origAttachEvent.apply(this, [e, fn]);
				}
			}
		})(HTMLInputElement.prototype.attachEvent);
	}

	window.FormData = FormData = function() {
		return {
			append: function(key, val, name) {
				this.data.push({
					key: key,
					val: val,
					name: name
				});
			},
			data: [],
			__isFileAPIShim: true
		};
	};

	(function () {
		//load FileAPI
		if (!window.FileAPI) {
			window.FileAPI = {};
		}
		if (FileAPI.forceLoad) {
			FileAPI.html5 = false;
		}
		
		if (!FileAPI.upload) {
			var jsUrl, basePath, script = document.createElement('script'), allScripts = document.getElementsByTagName('script'), i, index, src;
			if (window.FileAPI.jsUrl) {
				jsUrl = window.FileAPI.jsUrl;
			} else if (window.FileAPI.jsPath) {
				basePath = window.FileAPI.jsPath;
			} else {
				for (i = 0; i < allScripts.length; i++) {
					src = allScripts[i].src;
					index = src.search(/\/angular\-file\-upload[\-a-zA-z0-9\.]*\.js/)
					if (index > -1) {
						basePath = src.substring(0, index + 1);
						break;
					}
				}
			}

			if (FileAPI.staticPath == null) FileAPI.staticPath = basePath;
			script.setAttribute('src', jsUrl || basePath + 'FileAPI.min.js');
			document.getElementsByTagName('head')[0].appendChild(script);
			FileAPI.hasFlash = hasFlash();
		}
	})();
	FileAPI.disableFileInput = function(elem, disable) {
		if (disable) {
			elem.removeClass('js-fileapi-wrapper')
		} else {
			elem.addClass('js-fileapi-wrapper');
		}
	}
}


if (!window.FileReader) {
	window.FileReader = function() {
		var _this = this, loadStarted = false;
		this.listeners = {};
		this.addEventListener = function(type, fn) {
			_this.listeners[type] = _this.listeners[type] || [];
			_this.listeners[type].push(fn);
		};
		this.removeEventListener = function(type, fn) {
			_this.listeners[type] && _this.listeners[type].splice(_this.listeners[type].indexOf(fn), 1);
		};
		this.dispatchEvent = function(evt) {
			var list = _this.listeners[evt.type];
			if (list) {
				for (var i = 0; i < list.length; i++) {
					list[i].call(_this, evt);
				}
			}
		};
		this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;

		var constructEvent = function(type, evt) {
			var e = {type: type, target: _this, loaded: evt.loaded, total: evt.total, error: evt.error};
			if (evt.result != null) e.target.result = evt.result;
			return e;
		};
		var listener = function(evt) {
			if (!loadStarted) {
				loadStarted = true;
				_this.onloadstart && this.onloadstart(constructEvent('loadstart', evt));
			}
			if (evt.type === 'load') {
				_this.onloadend && _this.onloadend(constructEvent('loadend', evt));
				var e = constructEvent('load', evt);
				_this.onload && _this.onload(e);
				_this.dispatchEvent(e);
			} else if (evt.type === 'progress') {
				var e = constructEvent('progress', evt);
				_this.onprogress && _this.onprogress(e);
				_this.dispatchEvent(e);
			} else {
				var e = constructEvent('error', evt);
				_this.onerror && _this.onerror(e);
				_this.dispatchEvent(e);
			}
		};
		this.readAsArrayBuffer = function(file) {
			FileAPI.readAsBinaryString(file, listener);
		}
		this.readAsBinaryString = function(file) {
			FileAPI.readAsBinaryString(file, listener);
		}
		this.readAsDataURL = function(file) {
			FileAPI.readAsDataURL(file, listener);
		}
		this.readAsText = function(file) {
			FileAPI.readAsText(file, listener);
		}
	}
}
})();
(function(){var h,k=this,l=function(a){return void 0!==a},ba=function(){},n=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},p=function(a){return"array"==n(a)},ca=function(a){var b=n(a);return"array"==b||"object"==b&&"number"==typeof a.length},q=function(a){return"string"==typeof a},r=function(a){return"function"==n(a)},da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ea=function(a,b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();
if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},s=function(a,b,c){s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return s.apply(null,arguments)},ga=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);
return a.apply(this,b)}},ha=Date.now||function(){return+new Date},ia=null,t=function(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&l(b)?d[e]=b:d=d[e]?d[e]:d[e]={}},u=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.base=function(a,c,g){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};
Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return s.apply(null,c)}return s(this,a)};var v={};t("RecaptchaTemplates",v);v.VertHtml='<table id="recaptcha_table" class="recaptchatable" > <tr> <td colspan="6" class=\'recaptcha_r1_c1\'></td> </tr> <tr> <td class=\'recaptcha_r2_c1\'></td> <td colspan="4" class=\'recaptcha_image_cell\'><center><div id="recaptcha_image"></div></center></td> <td class=\'recaptcha_r2_c2\'></td> </tr> <tr> <td rowspan="6" class=\'recaptcha_r3_c1\'></td> <td colspan="4" class=\'recaptcha_r3_c2\'></td> <td rowspan="6" class=\'recaptcha_r3_c3\'></td> </tr> <tr> <td rowspan="3" class=\'recaptcha_r4_c1\' height="49"> <div class="recaptcha_input_area"> <input name="recaptcha_response_field" id="recaptcha_response_field" type="text" autocorrect="off" autocapitalize="off" placeholder="" /> <span id="recaptcha_privacy" class="recaptcha_only_if_privacy"></span> </div> </td> <td rowspan="4" class=\'recaptcha_r4_c2\'></td> <td><a id=\'recaptcha_reload_btn\'><img id=\'recaptcha_reload\' width="25" height="17" /></a></td> <td rowspan="4" class=\'recaptcha_r4_c4\'></td> </tr> <tr> <td><a id=\'recaptcha_switch_audio_btn\' class="recaptcha_only_if_image"><img id=\'recaptcha_switch_audio\' width="25" height="16" alt="" /></a><a id=\'recaptcha_switch_img_btn\' class="recaptcha_only_if_audio"><img id=\'recaptcha_switch_img\' width="25" height="16" alt=""/></a></td> </tr> <tr> <td><a id=\'recaptcha_whatsthis_btn\'><img id=\'recaptcha_whatsthis\' width="25" height="16" /></a></td> </tr> <tr> <td class=\'recaptcha_r7_c1\'></td> <td class=\'recaptcha_r8_c1\'></td> </tr> </table> ';v.CleanCss=".recaptchatable td img{display:block}.recaptchatable .recaptcha_image_cell center img{height:57px}.recaptchatable .recaptcha_image_cell center{height:57px}.recaptchatable .recaptcha_image_cell{background-color:white;height:57px;padding:7px!important}.recaptchatable,#recaptcha_area tr,#recaptcha_area td,#recaptcha_area th{margin:0!important;border:0!important;border-collapse:collapse!important;vertical-align:middle!important}.recaptchatable *{margin:0;padding:0;border:0;color:black;position:static;top:auto;left:auto;right:auto;bottom:auto}.recaptchatable #recaptcha_image{position:relative;margin:auto;border:1px solid #dfdfdf!important}.recaptchatable #recaptcha_image #recaptcha_challenge_image{display:block}.recaptchatable #recaptcha_image #recaptcha_ad_image{display:block;position:absolute;top:0}.recaptchatable a img{border:0}.recaptchatable a,.recaptchatable a:hover{cursor:pointer;outline:none;border:0!important;padding:0!important;text-decoration:none;color:blue;background:none!important;font-weight:normal}.recaptcha_input_area{position:relative!important;background:none!important}.recaptchatable label.recaptcha_input_area_text{border:1px solid #dfdfdf!important;margin:0!important;padding:0!important;position:static!important;top:auto!important;left:auto!important;right:auto!important;bottom:auto!important}.recaptcha_theme_red label.recaptcha_input_area_text,.recaptcha_theme_white label.recaptcha_input_area_text{color:black!important}.recaptcha_theme_blackglass label.recaptcha_input_area_text{color:white!important}.recaptchatable #recaptcha_response_field{font-size:11pt}.recaptcha_theme_blackglass #recaptcha_response_field,.recaptcha_theme_white #recaptcha_response_field{border:1px solid gray}.recaptcha_theme_red #recaptcha_response_field{border:1px solid #cca940}.recaptcha_audio_cant_hear_link{font-size:7pt;color:black}.recaptchatable{line-height:1em;border:1px solid #dfdfdf!important}.recaptcha_error_text{color:red}.recaptcha_only_if_privacy{float:right;text-align:right;margin-right:7px}#recaptcha-ad-choices{position:absolute;height:15px;top:0;right:0}#recaptcha-ad-choices img{height:15px}.recaptcha-ad-choices-collapsed{width:30px;height:15px;display:block}.recaptcha-ad-choices-expanded{width:75px;height:15px;display:none}#recaptcha-ad-choices:hover .recaptcha-ad-choices-collapsed{display:none}#recaptcha-ad-choices:hover .recaptcha-ad-choices-expanded{display:block}";v.CleanHtml='<table id="recaptcha_table" class="recaptchatable"> <tr height="73"> <td class=\'recaptcha_image_cell\' width="302"><center><div id="recaptcha_image"></div></center></td> <td style="padding: 10px 7px 7px 7px;"> <a id=\'recaptcha_reload_btn\'><img id=\'recaptcha_reload\' width="25" height="18" alt="" /></a> <a id=\'recaptcha_switch_audio_btn\' class="recaptcha_only_if_image"><img id=\'recaptcha_switch_audio\' width="25" height="15" alt="" /></a><a id=\'recaptcha_switch_img_btn\' class="recaptcha_only_if_audio"><img id=\'recaptcha_switch_img\' width="25" height="15" alt=""/></a> <a id=\'recaptcha_whatsthis_btn\'><img id=\'recaptcha_whatsthis\' width="25" height="16" /></a> </td> <td style="padding: 18px 7px 18px 7px;"> <img id=\'recaptcha_logo\' alt="" width="71" height="36" /> </td> </tr> <tr> <td style="padding-left: 7px;"> <div class="recaptcha_input_area" style="padding-top: 2px; padding-bottom: 7px;"> <input style="border: 1px solid #3c3c3c; width: 302px;" name="recaptcha_response_field" id="recaptcha_response_field" type="text" /> </div> </td> <td colspan=2><span id="recaptcha_privacy" class="recaptcha_only_if_privacy"></span></td> </tr> </table> ';v.VertCss=".recaptchatable td img{display:block}.recaptchatable .recaptcha_r1_c1{background:url('IMGROOT/sprite.png') 0 -63px no-repeat;width:318px;height:9px}.recaptchatable .recaptcha_r2_c1{background:url('IMGROOT/sprite.png') -18px 0 no-repeat;width:9px;height:57px}.recaptchatable .recaptcha_r2_c2{background:url('IMGROOT/sprite.png') -27px 0 no-repeat;width:9px;height:57px}.recaptchatable .recaptcha_r3_c1{background:url('IMGROOT/sprite.png') 0 0 no-repeat;width:9px;height:63px}.recaptchatable .recaptcha_r3_c2{background:url('IMGROOT/sprite.png') -18px -57px no-repeat;width:300px;height:6px}.recaptchatable .recaptcha_r3_c3{background:url('IMGROOT/sprite.png') -9px 0 no-repeat;width:9px;height:63px}.recaptchatable .recaptcha_r4_c1{background:url('IMGROOT/sprite.png') -43px 0 no-repeat;width:171px;height:49px}.recaptchatable .recaptcha_r4_c2{background:url('IMGROOT/sprite.png') -36px 0 no-repeat;width:7px;height:57px}.recaptchatable .recaptcha_r4_c4{background:url('IMGROOT/sprite.png') -214px 0 no-repeat;width:97px;height:57px}.recaptchatable .recaptcha_r7_c1{background:url('IMGROOT/sprite.png') -43px -49px no-repeat;width:171px;height:8px}.recaptchatable .recaptcha_r8_c1{background:url('IMGROOT/sprite.png') -43px -49px no-repeat;width:25px;height:8px}.recaptchatable .recaptcha_image_cell center img{height:57px}.recaptchatable .recaptcha_image_cell center{height:57px}.recaptchatable .recaptcha_image_cell{background-color:white;height:57px}#recaptcha_area,#recaptcha_table{width:318px!important}.recaptchatable,#recaptcha_area tr,#recaptcha_area td,#recaptcha_area th{margin:0!important;border:0!important;padding:0!important;border-collapse:collapse!important;vertical-align:middle!important}.recaptchatable *{margin:0;padding:0;border:0;font-family:helvetica,sans-serif;font-size:8pt;color:black;position:static;top:auto;left:auto;right:auto;bottom:auto}.recaptchatable #recaptcha_image{position:relative;margin:auto}.recaptchatable #recaptcha_image #recaptcha_challenge_image{display:block}.recaptchatable #recaptcha_image #recaptcha_ad_image{display:block;position:absolute;top:0}.recaptchatable img{border:0!important;margin:0!important;padding:0!important}.recaptchatable a,.recaptchatable a:hover{cursor:pointer;outline:none;border:0!important;padding:0!important;text-decoration:none;color:blue;background:none!important;font-weight:normal}.recaptcha_input_area{position:relative!important;width:153px!important;height:45px!important;margin-left:7px!important;margin-right:7px!important;background:none!important}.recaptchatable label.recaptcha_input_area_text{margin:0!important;padding:0!important;position:static!important;top:auto!important;left:auto!important;right:auto!important;bottom:auto!important;background:none!important;height:auto!important;width:auto!important}.recaptcha_theme_red label.recaptcha_input_area_text,.recaptcha_theme_white label.recaptcha_input_area_text{color:black!important}.recaptcha_theme_blackglass label.recaptcha_input_area_text{color:white!important}.recaptchatable #recaptcha_response_field{width:153px!important;position:relative!important;bottom:7px!important;padding:0!important;margin:15px 0 0 0!important;font-size:10pt}.recaptcha_theme_blackglass #recaptcha_response_field,.recaptcha_theme_white #recaptcha_response_field{border:1px solid gray}.recaptcha_theme_red #recaptcha_response_field{border:1px solid #cca940}.recaptcha_audio_cant_hear_link{font-size:7pt;color:black}.recaptchatable{line-height:1!important}#recaptcha_instructions_error{color:red!important}.recaptcha_only_if_privacy{float:right;text-align:right}#recaptcha-ad-choices{position:absolute;height:15px;top:0;right:0}#recaptcha-ad-choices img{height:15px}.recaptcha-ad-choices-collapsed{width:30px;height:15px;display:block}.recaptcha-ad-choices-expanded{width:75px;height:15px;display:none}#recaptcha-ad-choices:hover .recaptcha-ad-choices-collapsed{display:none}#recaptcha-ad-choices:hover .recaptcha-ad-choices-expanded{display:block}";var w={visual_challenge:"Get a visual challenge",audio_challenge:"Get an audio challenge",refresh_btn:"Get a new challenge",instructions_visual:"Type the text:",instructions_audio:"Type what you hear:",help_btn:"Help",play_again:"Play sound again",cant_hear_this:"Download sound as MP3",incorrect_try_again:"Incorrect. Try again.",image_alt_text:"reCAPTCHA challenge image",privacy_and_terms:"Privacy & Terms"},ja={visual_challenge:"\u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u062a\u062d\u062f\u064d \u0645\u0631\u0626\u064a",
audio_challenge:"\u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u062a\u062d\u062f\u064d \u0635\u0648\u062a\u064a",refresh_btn:"\u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u062a\u062d\u062f\u064d \u062c\u062f\u064a\u062f",instructions_visual:"\u064a\u0631\u062c\u0649 \u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0646\u0635:",instructions_audio:"\u0627\u0643\u062a\u0628 \u0645\u0627 \u062a\u0633\u0645\u0639\u0647:",help_btn:"\u0645\u0633\u0627\u0639\u062f\u0629",play_again:"\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0635\u0648\u062a \u0645\u0631\u0629 \u0623\u062e\u0631\u0649",
cant_hear_this:"\u062a\u0646\u0632\u064a\u0644 \u0627\u0644\u0635\u0648\u062a \u0628\u062a\u0646\u0633\u064a\u0642 MP3",incorrect_try_again:"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d. \u0623\u0639\u062f \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629.",image_alt_text:"\u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u062d\u062f\u064a \u0645\u0646 reCAPTCHA",privacy_and_terms:"\u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0648\u0627\u0644\u0628\u0646\u0648\u062f"},ka={visual_challenge:"Obtener una pista visual",
audio_challenge:"Obtener una pista sonora",refresh_btn:"Obtener una pista nueva",instructions_visual:"Introduzca el texto:",instructions_audio:"Escribe lo que oigas:",help_btn:"Ayuda",play_again:"Volver a reproducir el sonido",cant_hear_this:"Descargar el sonido en MP3",incorrect_try_again:"Incorrecto. Vu\u00e9lvelo a intentar.",image_alt_text:"Pista de imagen reCAPTCHA",privacy_and_terms:"Privacidad y condiciones"},la={visual_challenge:"Kumuha ng pagsubok na visual",audio_challenge:"Kumuha ng pagsubok na audio",
refresh_btn:"Kumuha ng bagong pagsubok",instructions_visual:"I-type ang teksto:",instructions_audio:"I-type ang iyong narinig",help_btn:"Tulong",play_again:"I-play muli ang tunog",cant_hear_this:"I-download ang tunog bilang MP3",incorrect_try_again:"Hindi wasto. Muling subukan.",image_alt_text:"larawang panghamon ng reCAPTCHA",privacy_and_terms:"Privacy at Mga Tuntunin"},ma={visual_challenge:"Test visuel",audio_challenge:"Test audio",refresh_btn:"Nouveau test",instructions_visual:"Saisissez le texte\u00a0:",
instructions_audio:"Qu'entendez-vous ?",help_btn:"Aide",play_again:"R\u00e9\u00e9couter",cant_hear_this:"T\u00e9l\u00e9charger l'audio au format MP3",incorrect_try_again:"Incorrect. Veuillez r\u00e9essayer.",image_alt_text:"Image reCAPTCHA",privacy_and_terms:"Confidentialit\u00e9 et conditions d'utilisation"},na={visual_challenge:"Dapatkan kata pengujian berbentuk visual",audio_challenge:"Dapatkan kata pengujian berbentuk audio",refresh_btn:"Dapatkan kata pengujian baru",instructions_visual:"Ketik teks:",
instructions_audio:"Ketik yang Anda dengar:",help_btn:"Bantuan",play_again:"Putar suara sekali lagi",cant_hear_this:"Unduh suara sebagai MP3",incorrect_try_again:"Salah. Coba lagi.",image_alt_text:"Gambar tantangan reCAPTCHA",privacy_and_terms:"Privasi & Persyaratan"},oa={visual_challenge:"\u05e7\u05d1\u05dc \u05d0\u05ea\u05d2\u05e8 \u05d7\u05d6\u05d5\u05ea\u05d9",audio_challenge:"\u05e7\u05d1\u05dc \u05d0\u05ea\u05d2\u05e8 \u05e9\u05de\u05e2",refresh_btn:"\u05e7\u05d1\u05dc \u05d0\u05ea\u05d2\u05e8 \u05d7\u05d3\u05e9",
instructions_visual:"\u05d4\u05e7\u05dc\u05d3 \u05d0\u05ea \u05d4\u05d8\u05e7\u05e1\u05d8:",instructions_audio:"\u05d4\u05e7\u05dc\u05d3 \u05d0\u05ea \u05de\u05d4 \u05e9\u05d0\u05ea\u05d4 \u05e9\u05d5\u05de\u05e2:",help_btn:"\u05e2\u05d6\u05e8\u05d4",play_again:"\u05d4\u05e4\u05e2\u05dc \u05e9\u05d5\u05d1 \u05d0\u05ea \u05d4\u05e9\u05de\u05e2",cant_hear_this:"\u05d4\u05d5\u05e8\u05d3 \u05e9\u05de\u05e2 \u05db-3MP",incorrect_try_again:"\u05e9\u05d2\u05d5\u05d9. \u05e0\u05e1\u05d4 \u05e9\u05d5\u05d1.",
image_alt_text:"\u05ea\u05de\u05d5\u05e0\u05ea \u05d0\u05ea\u05d2\u05e8 \u05e9\u05dc reCAPTCHA",privacy_and_terms:"\u05e4\u05e8\u05d8\u05d9\u05d5\u05ea \u05d5\u05ea\u05e0\u05d0\u05d9\u05dd"},pa={visual_challenge:"Obter um desafio visual",audio_challenge:"Obter um desafio de \u00e1udio",refresh_btn:"Obter um novo desafio",instructions_visual:"Digite o texto:",instructions_audio:"Digite o que voc\u00ea ouve:",help_btn:"Ajuda",play_again:"Reproduzir som novamente",cant_hear_this:"Fazer download do som no formato MP3",
incorrect_try_again:"Incorreto. Tente novamente.",image_alt_text:"Imagem de desafio reCAPTCHA",privacy_and_terms:"Privacidade e Termos"},qa={visual_challenge:"Ob\u0163ine\u0163i un cod captcha vizual",audio_challenge:"Ob\u0163ine\u0163i un cod captcha audio",refresh_btn:"Ob\u0163ine\u0163i un nou cod captcha",instructions_visual:"Introduce\u021bi textul:",instructions_audio:"Introduce\u0163i ceea ce auzi\u0163i:",help_btn:"Ajutor",play_again:"Reda\u0163i sunetul din nou",cant_hear_this:"Desc\u0103rca\u0163i fi\u015fierul audio ca MP3",
incorrect_try_again:"Incorect. \u00cencerca\u0163i din nou.",image_alt_text:"Imagine de verificare reCAPTCHA",privacy_and_terms:"Confiden\u0163ialitate \u015fi termeni"},ra={visual_challenge:"\u6536\u5230\u4e00\u4e2a\u89c6\u9891\u9080\u8bf7",audio_challenge:"\u6362\u4e00\u7ec4\u97f3\u9891\u9a8c\u8bc1\u7801",refresh_btn:"\u6362\u4e00\u7ec4\u9a8c\u8bc1\u7801",instructions_visual:"\u8f93\u5165\u6587\u5b57\uff1a",instructions_audio:"\u8bf7\u952e\u5165\u60a8\u542c\u5230\u7684\u5185\u5bb9\uff1a",help_btn:"\u5e2e\u52a9",
play_again:"\u91cd\u65b0\u64ad\u653e",cant_hear_this:"\u4ee5 MP3 \u683c\u5f0f\u4e0b\u8f7d\u58f0\u97f3",incorrect_try_again:"\u4e0d\u6b63\u786e\uff0c\u8bf7\u91cd\u8bd5\u3002",image_alt_text:"reCAPTCHA \u9a8c\u8bc1\u56fe\u7247",privacy_and_terms:"\u9690\u79c1\u6743\u548c\u4f7f\u7528\u6761\u6b3e"},sa={en:w,af:{visual_challenge:"Kry 'n visuele verifi\u00ebring",audio_challenge:"Kry 'n klankverifi\u00ebring",refresh_btn:"Kry 'n nuwe verifi\u00ebring",instructions_visual:"",instructions_audio:"Tik wat jy hoor:",
help_btn:"Hulp",play_again:"Speel geluid weer",cant_hear_this:"Laai die klank af as MP3",incorrect_try_again:"Verkeerd. Probeer weer.",image_alt_text:"reCAPTCHA-uitdagingprent",privacy_and_terms:"Privaatheid en bepalings"},am:{visual_challenge:"\u12e8\u12a5\u12ed\u1273 \u1270\u130b\u1323\u121a \u12a0\u130d\u129d",audio_challenge:"\u120c\u120b \u12a0\u12f2\u1235 \u12e8\u12f5\u121d\u133d \u1325\u12eb\u1244 \u12ed\u1245\u1228\u1265",refresh_btn:"\u120c\u120b \u12a0\u12f2\u1235 \u1325\u12eb\u1244 \u12ed\u1245\u1228\u1265",
instructions_visual:"",instructions_audio:"\u12e8\u121d\u1275\u1230\u121b\u12cd\u1295 \u1270\u12ed\u1265\u1361-",help_btn:"\u12a5\u1308\u12db",play_again:"\u12f5\u121d\u1339\u1295 \u12a5\u1295\u12f0\u1308\u1293 \u12a0\u132b\u12cd\u1275",cant_hear_this:"\u12f5\u121d\u1339\u1295 \u1260MP3 \u1245\u122d\u133d \u12a0\u12cd\u122d\u12f5",incorrect_try_again:"\u1275\u12ad\u12ad\u120d \u12a0\u12ed\u12f0\u1208\u121d\u1362 \u12a5\u1295\u12f0\u1308\u1293 \u121e\u12ad\u122d\u1362",image_alt_text:"reCAPTCHA \u121d\u1235\u120d \u130d\u1320\u121d",
privacy_and_terms:"\u130d\u120b\u12ca\u1290\u1275 \u12a5\u1293 \u12cd\u120d"},ar:ja,"ar-EG":ja,bg:{visual_challenge:"\u041f\u043e\u043b\u0443\u0447\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u0432\u0438\u0437\u0443\u0430\u043b\u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",audio_challenge:"\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u0430\u0443\u0434\u0438\u043e\u0442\u0435\u0441\u0442",refresh_btn:"\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u043d\u0435 \u043d\u0430 \u043d\u043e\u0432 \u0442\u0435\u0441\u0442",
instructions_visual:"\u0412\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u0442\u0435\u043a\u0441\u0442\u0430:",instructions_audio:"\u0412\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u0447\u0443\u0442\u043e\u0442\u043e:",help_btn:"\u041f\u043e\u043c\u043e\u0449",play_again:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043f\u0443\u0441\u043a\u0430\u043d\u0435 \u043d\u0430 \u0437\u0432\u0443\u043a\u0430",cant_hear_this:"\u0418\u0437\u0442\u0435\u0433\u043b\u044f\u043d\u0435 \u043d\u0430 \u0437\u0432\u0443\u043a\u0430 \u0432\u044a\u0432 \u0444\u043e\u0440\u043c\u0430\u0442 MP3",
incorrect_try_again:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u043d\u043e. \u041e\u043f\u0438\u0442\u0430\u0439\u0442\u0435 \u043e\u0442\u043d\u043e\u0432\u043e.",image_alt_text:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430\u0442\u0430 \u0441 reCAPTCHA",privacy_and_terms:"\u041f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442 \u0438 \u041e\u0431\u0449\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f"},
bn:{visual_challenge:"\u098f\u0995\u099f\u09bf \u09a6\u09c3\u09b6\u09cd\u09af\u09ae\u09be\u09a8 \u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09cd\u09ac\u09a8\u09cd\u09a6\u09cd\u09ac\u09bf\u09a4\u09be \u09aa\u09be\u09a8",audio_challenge:"\u098f\u0995\u099f\u09bf \u0985\u09a1\u09bf\u0993 \u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09cd\u09ac\u09a8\u09cd\u09a6\u09cd\u09ac\u09bf\u09a4\u09be  \u09aa\u09be\u09a8",refresh_btn:"\u098f\u0995\u099f\u09bf \u09a8\u09a4\u09c1\u09a8 \u09aa\u09cd\u09b0\u09a4\u09bf\u09a6\u09cd\u09ac\u09a8\u09cd\u09a6\u09cd\u09ac\u09bf\u09a4\u09be  \u09aa\u09be\u09a8",
instructions_visual:"",instructions_audio:"\u0986\u09aa\u09a8\u09bf \u09af\u09be \u09b6\u09c1\u09a8\u099b\u09c7\u09a8 \u09a4\u09be \u09b2\u09bf\u0996\u09c1\u09a8:",help_btn:"\u09b8\u09b9\u09be\u09df\u09a4\u09be",play_again:"\u0986\u09ac\u09be\u09b0 \u09b8\u09be\u0989\u09a8\u09cd\u09a1 \u09aa\u09cd\u09b2\u09c7 \u0995\u09b0\u09c1\u09a8",cant_hear_this:"MP3 \u09b0\u09c2\u09aa\u09c7 \u09b6\u09ac\u09cd\u09a6 \u09a1\u09be\u0989\u09a8\u09b2\u09cb\u09a1 \u0995\u09b0\u09c1\u09a8",incorrect_try_again:"\u09ac\u09c7\u09a0\u09bf\u0995\u09f7 \u0986\u09ac\u09be\u09b0 \u099a\u09c7\u09b7\u09cd\u099f\u09be \u0995\u09b0\u09c1\u09a8\u09f7",
image_alt_text:"reCAPTCHA \u099a\u09cd\u09af\u09be\u09b2\u09c7\u099e\u09cd\u099c \u099a\u09bf\u09a4\u09cd\u09b0",privacy_and_terms:"\u0997\u09cb\u09aa\u09a8\u09c0\u09af\u09bc\u09a4\u09be \u0993 \u09b6\u09b0\u09cd\u09a4\u09be\u09ac\u09b2\u09c0"},ca:{visual_challenge:"Obt\u00e9n un repte visual",audio_challenge:"Obteniu una pista sonora",refresh_btn:"Obteniu una pista nova",instructions_visual:"Escriviu el text:",instructions_audio:"Escriviu el que escolteu:",help_btn:"Ajuda",play_again:"Torna a reproduir el so",
cant_hear_this:"Baixa el so com a MP3",incorrect_try_again:"No \u00e9s correcte. Torna-ho a provar.",image_alt_text:"Imatge del repte de reCAPTCHA",privacy_and_terms:"Privadesa i condicions"},cs:{visual_challenge:"Zobrazit vizu\u00e1ln\u00ed podobu v\u00fdrazu",audio_challenge:"P\u0159ehr\u00e1t zvukovou podobu v\u00fdrazu",refresh_btn:"Zobrazit nov\u00fd v\u00fdraz",instructions_visual:"Zadejte text:",instructions_audio:"Napi\u0161te, co jste sly\u0161eli:",help_btn:"N\u00e1pov\u011bda",play_again:"Znovu p\u0159ehr\u00e1t zvuk",
cant_hear_this:"St\u00e1hnout zvuk ve form\u00e1tu MP3",incorrect_try_again:"\u0160patn\u011b. Zkuste to znovu.",image_alt_text:"Obr\u00e1zek reCAPTCHA",privacy_and_terms:"Ochrana soukrom\u00ed a smluvn\u00ed podm\u00ednky"},da:{visual_challenge:"Hent en visuel udfordring",audio_challenge:"Hent en lydudfordring",refresh_btn:"Hent en ny udfordring",instructions_visual:"Indtast teksten:",instructions_audio:"Indtast det, du h\u00f8rer:",help_btn:"Hj\u00e6lp",play_again:"Afspil lyden igen",cant_hear_this:"Download lyd som MP3",
incorrect_try_again:"Forkert. Pr\u00f8v igen.",image_alt_text:"reCAPTCHA-udfordringsbillede",privacy_and_terms:"Privatliv og vilk\u00e5r"},de:{visual_challenge:"Captcha abrufen",audio_challenge:"Audio-Captcha abrufen",refresh_btn:"Neues Captcha abrufen",instructions_visual:"Geben Sie den angezeigten Text ein:",instructions_audio:"Geben Sie das Geh\u00f6rte ein:",help_btn:"Hilfe",play_again:"Wort erneut abspielen",cant_hear_this:"Wort als MP3 herunterladen",incorrect_try_again:"Falsch. Bitte versuchen Sie es erneut.",
image_alt_text:"reCAPTCHA-Bild",privacy_and_terms:"Datenschutzerkl\u00e4rung & Nutzungsbedingungen"},el:{visual_challenge:"\u039f\u03c0\u03c4\u03b9\u03ba\u03ae \u03c0\u03c1\u03cc\u03ba\u03bb\u03b7\u03c3\u03b7",audio_challenge:"\u0397\u03c7\u03b7\u03c4\u03b9\u03ba\u03ae \u03c0\u03c1\u03cc\u03ba\u03bb\u03b7\u03c3\u03b7",refresh_btn:"\u039d\u03ad\u03b1 \u03c0\u03c1\u03cc\u03ba\u03bb\u03b7\u03c3\u03b7",instructions_visual:"\u03a0\u03bb\u03b7\u03ba\u03c4\u03c1\u03bf\u03bb\u03bf\u03b3\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf:",
instructions_audio:"\u03a0\u03bb\u03b7\u03ba\u03c4\u03c1\u03bf\u03bb\u03bf\u03b3\u03ae\u03c3\u03c4\u03b5 \u03cc\u03c4\u03b9 \u03b1\u03ba\u03bf\u03cd\u03c4\u03b5:",help_btn:"\u0392\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1",play_again:"\u0391\u03bd\u03b1\u03c0\u03b1\u03c1\u03b1\u03b3\u03c9\u03b3\u03ae \u03ae\u03c7\u03bf\u03c5 \u03be\u03b1\u03bd\u03ac",cant_hear_this:"\u039b\u03ae\u03c8\u03b7 \u03ae\u03c7\u03bf\u03c5 \u03c9\u03c2 \u039c\u03a13",incorrect_try_again:"\u039b\u03ac\u03b8\u03bf\u03c2. \u0394\u03bf\u03ba\u03b9\u03bc\u03ac\u03c3\u03c4\u03b5 \u03be\u03b1\u03bd\u03ac.",
image_alt_text:"\u0395\u03b9\u03ba\u03cc\u03bd\u03b1 \u03c0\u03c1\u03cc\u03ba\u03bb\u03b7\u03c3\u03b7\u03c2 reCAPTCHA",privacy_and_terms:"\u0391\u03c0\u03cc\u03c1\u03c1\u03b7\u03c4\u03bf \u03ba\u03b1\u03b9 \u03cc\u03c1\u03bf\u03b9"},"en-GB":w,"en-US":w,es:ka,"es-419":{visual_challenge:"Enfrentar un desaf\u00edo visual",audio_challenge:"Enfrentar un desaf\u00edo de audio",refresh_btn:"Enfrentar un nuevo desaf\u00edo",instructions_visual:"Escriba el texto:",instructions_audio:"Escribe lo que escuchas:",
help_btn:"Ayuda",play_again:"Reproducir sonido de nuevo",cant_hear_this:"Descargar sonido en formato MP3",incorrect_try_again:"Incorrecto. Vuelve a intentarlo.",image_alt_text:"Imagen del desaf\u00edo de la reCAPTCHA",privacy_and_terms:"Privacidad y condiciones"},"es-ES":ka,et:{visual_challenge:"Kuva kuvap\u00f5hine robotil\u00f5ks",audio_challenge:"Kuva helip\u00f5hine robotil\u00f5ks",refresh_btn:"Kuva uus robotil\u00f5ks",instructions_visual:"Tippige tekst:",instructions_audio:"Tippige, mida kuulete.",
help_btn:"Abi",play_again:"Esita heli uuesti",cant_hear_this:"Laadi heli alla MP3-vormingus",incorrect_try_again:"Vale. Proovige uuesti.",image_alt_text:"reCAPTCHA robotil\u00f5ksu kujutis",privacy_and_terms:"Privaatsus ja tingimused"},eu:{visual_challenge:"Eskuratu ikusizko erronka",audio_challenge:"Eskuratu audio-erronka",refresh_btn:"Eskuratu erronka berria",instructions_visual:"",instructions_audio:"Idatzi entzuten duzuna:",help_btn:"Laguntza",play_again:"Erreproduzitu soinua berriro",cant_hear_this:"Deskargatu soinua MP3 gisa",
incorrect_try_again:"Ez da zuzena. Saiatu berriro.",image_alt_text:"reCAPTCHA erronkaren irudia",privacy_and_terms:"Pribatutasuna eta baldintzak"},fa:{visual_challenge:"\u062f\u0631\u06cc\u0627\u0641\u062a \u06cc\u06a9 \u0645\u0639\u0645\u0627\u06cc \u062f\u06cc\u062f\u0627\u0631\u06cc",audio_challenge:"\u062f\u0631\u06cc\u0627\u0641\u062a \u06cc\u06a9 \u0645\u0639\u0645\u0627\u06cc \u0635\u0648\u062a\u06cc",refresh_btn:"\u062f\u0631\u06cc\u0627\u0641\u062a \u06cc\u06a9 \u0645\u0639\u0645\u0627\u06cc \u062c\u062f\u06cc\u062f",
instructions_visual:"",instructions_audio:"\u0622\u0646\u0686\u0647 \u0631\u0627 \u06a9\u0647 \u0645\u06cc\u200c\u0634\u0646\u0648\u06cc\u062f \u062a\u0627\u06cc\u067e \u06a9\u0646\u06cc\u062f:",help_btn:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc\u06cc",play_again:"\u067e\u062e\u0634 \u0645\u062c\u062f\u062f \u0635\u062f\u0627",cant_hear_this:"\u062f\u0627\u0646\u0644\u0648\u062f \u0635\u062f\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a MP3",incorrect_try_again:"\u0646\u0627\u062f\u0631\u0633\u062a. \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u06cc\u062f.",
image_alt_text:"\u062a\u0635\u0648\u06cc\u0631 \u0686\u0627\u0644\u0634\u06cc reCAPTCHA",privacy_and_terms:"\u062d\u0631\u06cc\u0645 \u062e\u0635\u0648\u0635\u06cc \u0648 \u0634\u0631\u0627\u06cc\u0637"},fi:{visual_challenge:"Kuvavahvistus",audio_challenge:"\u00c4\u00e4nivahvistus",refresh_btn:"Uusi kuva",instructions_visual:"Kirjoita teksti:",instructions_audio:"Kirjoita kuulemasi:",help_btn:"Ohje",play_again:"Toista \u00e4\u00e4ni uudelleen",cant_hear_this:"Lataa \u00e4\u00e4ni MP3-tiedostona",
incorrect_try_again:"V\u00e4\u00e4rin. Yrit\u00e4 uudelleen.",image_alt_text:"reCAPTCHA-kuva",privacy_and_terms:"Tietosuoja ja k\u00e4ytt\u00f6ehdot"},fil:la,fr:ma,"fr-CA":{visual_challenge:"Obtenir un test visuel",audio_challenge:"Obtenir un test audio",refresh_btn:"Obtenir un nouveau test",instructions_visual:"Saisissez le texte\u00a0:",instructions_audio:"Tapez ce que vous entendez\u00a0:",help_btn:"Aide",play_again:"Jouer le son de nouveau",cant_hear_this:"T\u00e9l\u00e9charger le son en format MP3",
incorrect_try_again:"Erreur, essayez \u00e0 nouveau",image_alt_text:"Image reCAPTCHA",privacy_and_terms:"Confidentialit\u00e9 et conditions d'utilisation"},"fr-FR":ma,gl:{visual_challenge:"Obter unha proba visual",audio_challenge:"Obter unha proba de audio",refresh_btn:"Obter unha proba nova",instructions_visual:"",instructions_audio:"Escribe o que escoitas:",help_btn:"Axuda",play_again:"Reproducir o son de novo",cant_hear_this:"Descargar son como MP3",incorrect_try_again:"Incorrecto. T\u00e9ntao de novo.",
image_alt_text:"Imaxe de proba de reCAPTCHA",privacy_and_terms:"Privacidade e condici\u00f3ns"},gu:{visual_challenge:"\u0a8f\u0a95 \u0aa6\u0ac3\u0ab6\u0acd\u0aaf\u0abe\u0aa4\u0acd\u0aae\u0a95 \u0aaa\u0aa1\u0a95\u0abe\u0ab0 \u0aae\u0ac7\u0ab3\u0ab5\u0acb",audio_challenge:"\u0a8f\u0a95 \u0a91\u0aa1\u0abf\u0a93 \u0aaa\u0aa1\u0a95\u0abe\u0ab0 \u0aae\u0ac7\u0ab3\u0ab5\u0acb",refresh_btn:"\u0a8f\u0a95 \u0aa8\u0ab5\u0acb \u0aaa\u0aa1\u0a95\u0abe\u0ab0 \u0aae\u0ac7\u0ab3\u0ab5\u0acb",instructions_visual:"",
instructions_audio:"\u0aa4\u0aae\u0ac7 \u0a9c\u0ac7 \u0ab8\u0abe\u0a82\u0aad\u0ab3\u0acb \u0a9b\u0acb \u0aa4\u0ac7 \u0ab2\u0a96\u0acb:",help_btn:"\u0ab8\u0ab9\u0abe\u0aaf",play_again:"\u0aa7\u0acd\u0ab5\u0aa8\u0abf \u0aab\u0ab0\u0ac0\u0aa5\u0ac0 \u0a9a\u0ab2\u0abe\u0ab5\u0acb",cant_hear_this:"MP3 \u0aa4\u0ab0\u0ac0\u0a95\u0ac7 \u0aa7\u0acd\u0ab5\u0aa8\u0abf\u0aa8\u0ac7 \u0aa1\u0abe\u0a89\u0aa8\u0ab2\u0acb\u0aa1 \u0a95\u0ab0\u0acb",incorrect_try_again:"\u0a96\u0acb\u0a9f\u0ac1\u0a82. \u0aab\u0ab0\u0ac0 \u0aaa\u0acd\u0ab0\u0aaf\u0abe\u0ab8 \u0a95\u0ab0\u0acb.",
image_alt_text:"reCAPTCHA \u0aaa\u0aa1\u0a95\u0abe\u0ab0 \u0a9b\u0aac\u0ac0",privacy_and_terms:"\u0a97\u0acb\u0aaa\u0aa8\u0ac0\u0aaf\u0aa4\u0abe \u0a85\u0aa8\u0ac7 \u0ab6\u0ab0\u0aa4\u0acb"},hi:{visual_challenge:"\u0915\u094b\u0908 \u0935\u093f\u091c\u0941\u0905\u0932 \u091a\u0941\u0928\u094c\u0924\u0940 \u0932\u0947\u0902",audio_challenge:"\u0915\u094b\u0908 \u0911\u0921\u093f\u092f\u094b \u091a\u0941\u0928\u094c\u0924\u0940 \u0932\u0947\u0902",refresh_btn:"\u0915\u094b\u0908 \u0928\u0908 \u091a\u0941\u0928\u094c\u0924\u0940 \u0932\u0947\u0902",
instructions_visual:"\u091f\u0947\u0915\u094d\u0938\u094d\u091f \u091f\u093e\u0907\u092a \u0915\u0930\u0947\u0902:",instructions_audio:"\u091c\u094b \u0906\u092a \u0938\u0941\u0928 \u0930\u0939\u0947 \u0939\u0948\u0902 \u0909\u0938\u0947 \u0932\u093f\u0916\u0947\u0902:",help_btn:"\u0938\u0939\u093e\u092f\u0924\u093e",play_again:"\u0927\u094d\u200d\u0935\u0928\u093f \u092a\u0941\u0928: \u091a\u0932\u093e\u090f\u0902",cant_hear_this:"\u0927\u094d\u200d\u0935\u0928\u093f \u0915\u094b MP3 \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902 \u0921\u093e\u0909\u0928\u0932\u094b\u0921 \u0915\u0930\u0947\u0902",
incorrect_try_again:"\u0917\u0932\u0924. \u092a\u0941\u0928: \u092a\u094d\u0930\u092f\u093e\u0938 \u0915\u0930\u0947\u0902.",image_alt_text:"reCAPTCHA \u091a\u0941\u0928\u094c\u0924\u0940 \u091a\u093f\u0924\u094d\u0930",privacy_and_terms:"\u0917\u094b\u092a\u0928\u0940\u092f\u0924\u093e \u0914\u0930 \u0936\u0930\u094d\u0924\u0947\u0902"},hr:{visual_challenge:"Dohvati vizualni upit",audio_challenge:"Dohvati zvu\u010dni upit",refresh_btn:"Dohvati novi upit",instructions_visual:"Unesite tekst:",instructions_audio:"Upi\u0161ite \u0161to \u010dujete:",
help_btn:"Pomo\u0107",play_again:"Ponovi zvuk",cant_hear_this:"Preuzmi zvuk u MP3 formatu",incorrect_try_again:"Nije to\u010dno. Poku\u0161ajte ponovno.",image_alt_text:"Slikovni izazov reCAPTCHA",privacy_and_terms:"Privatnost i odredbe"},hu:{visual_challenge:"Vizu\u00e1lis kih\u00edv\u00e1s k\u00e9r\u00e9se",audio_challenge:"Hangkih\u00edv\u00e1s k\u00e9r\u00e9se",refresh_btn:"\u00daj kih\u00edv\u00e1s k\u00e9r\u00e9se",instructions_visual:"\u00cdrja be a sz\u00f6veget:",instructions_audio:"\u00cdrja le, amit hall:",
help_btn:"S\u00fag\u00f3",play_again:"Hang ism\u00e9telt lej\u00e1tsz\u00e1sa",cant_hear_this:"Hang let\u00f6lt\u00e9se MP3 form\u00e1tumban",incorrect_try_again:"Hib\u00e1s. Pr\u00f3b\u00e1lkozzon \u00fajra.",image_alt_text:"reCAPTCHA ellen\u0151rz\u0151 k\u00e9p",privacy_and_terms:"Adatv\u00e9delem \u00e9s Szerz\u0151d\u00e9si Felt\u00e9telek"},hy:{visual_challenge:"\u054d\u057f\u0561\u0576\u0561\u056c \u057f\u0565\u057d\u0578\u0572\u0561\u056f\u0561\u0576 \u056d\u0576\u0564\u056b\u0580",audio_challenge:"\u054d\u057f\u0561\u0576\u0561\u056c \u0571\u0561\u0575\u0576\u0561\u0575\u056b\u0576 \u056d\u0576\u0564\u056b\u0580",
refresh_btn:"\u054d\u057f\u0561\u0576\u0561\u056c \u0576\u0578\u0580 \u056d\u0576\u0564\u056b\u0580",instructions_visual:"\u0544\u0578\u0582\u057f\u0584\u0561\u0563\u0580\u0565\u0584 \u057f\u0565\u0584\u057d\u057f\u0568\u055d",instructions_audio:"\u0544\u0578\u0582\u057f\u0584\u0561\u0563\u0580\u0565\u0584 \u0561\u0575\u0576, \u056b\u0576\u0579 \u056c\u057d\u0578\u0582\u0574 \u0565\u0584\u055d",help_btn:"\u0555\u0563\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576",play_again:"\u0546\u057e\u0561\u0563\u0561\u0580\u056f\u0565\u056c \u0571\u0561\u0575\u0576\u0568 \u056f\u0580\u056f\u056b\u0576",
cant_hear_this:"\u0532\u0565\u057c\u0576\u0565\u056c \u0571\u0561\u0575\u0576\u0568 \u0578\u0580\u057a\u0565\u057d MP3",incorrect_try_again:"\u054d\u056d\u0561\u056c \u0567: \u0553\u0578\u0580\u0571\u0565\u0584 \u056f\u0580\u056f\u056b\u0576:",image_alt_text:"reCAPTCHA \u057a\u0561\u057f\u056f\u0565\u0580\u0578\u057e \u056d\u0576\u0564\u056b\u0580",privacy_and_terms:"\u0533\u0561\u0572\u057f\u0576\u056b\u0578\u0582\u0569\u0575\u0561\u0576 & \u057a\u0561\u0575\u0574\u0561\u0576\u0576\u0565\u0580"},
id:na,is:{visual_challenge:"F\u00e1 a\u00f0gangspr\u00f3f sem mynd",audio_challenge:"F\u00e1 a\u00f0gangspr\u00f3f sem hlj\u00f3\u00f0skr\u00e1",refresh_btn:"F\u00e1 n\u00fdtt a\u00f0gangspr\u00f3f",instructions_visual:"",instructions_audio:"Sl\u00e1\u00f0u inn \u00fea\u00f0 sem \u00fe\u00fa heyrir:",help_btn:"Hj\u00e1lp",play_again:"Spila hlj\u00f3\u00f0 aftur",cant_hear_this:"S\u00e6kja hlj\u00f3\u00f0 sem MP3",incorrect_try_again:"Rangt. Reyndu aftur.",image_alt_text:"mynd reCAPTCHA a\u00f0gangspr\u00f3fs",
privacy_and_terms:"Pers\u00f3nuvernd og skilm\u00e1lar"},it:{visual_challenge:"Verifica visiva",audio_challenge:"Verifica audio",refresh_btn:"Nuova verifica",instructions_visual:"Digita il testo:",instructions_audio:"Digita ci\u00f2 che senti:",help_btn:"Guida",play_again:"Riproduci di nuovo audio",cant_hear_this:"Scarica audio in MP3",incorrect_try_again:"Sbagliato. Riprova.",image_alt_text:"Immagine di verifica reCAPTCHA",privacy_and_terms:"Privacy e Termini"},iw:oa,ja:{visual_challenge:"\u753b\u50cf\u3067\u78ba\u8a8d\u3057\u307e\u3059",
audio_challenge:"\u97f3\u58f0\u3067\u78ba\u8a8d\u3057\u307e\u3059",refresh_btn:"\u5225\u306e\u5358\u8a9e\u3067\u3084\u308a\u76f4\u3057\u307e\u3059",instructions_visual:"\u30c6\u30ad\u30b9\u30c8\u3092\u5165\u529b:",instructions_audio:"\u805e\u3053\u3048\u305f\u5358\u8a9e\u3092\u5165\u529b\u3057\u307e\u3059:",help_btn:"\u30d8\u30eb\u30d7",play_again:"\u3082\u3046\u4e00\u5ea6\u805e\u304f",cant_hear_this:"MP3 \u3067\u97f3\u58f0\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",incorrect_try_again:"\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093\u3002\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
image_alt_text:"reCAPTCHA \u78ba\u8a8d\u7528\u753b\u50cf",privacy_and_terms:"\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u3068\u5229\u7528\u898f\u7d04"},kn:{visual_challenge:"\u0ca6\u0cc3\u0cb6\u0ccd\u0caf \u0cb8\u0cb5\u0cbe\u0cb2\u0cca\u0c82\u0ca6\u0ca8\u0ccd\u0ca8\u0cc1 \u0cb8\u0ccd\u0cb5\u0cc0\u0c95\u0cb0\u0cbf\u0cb8\u0cbf",audio_challenge:"\u0c86\u0ca1\u0cbf\u0caf\u0ccb \u0cb8\u0cb5\u0cbe\u0cb2\u0cca\u0c82\u0ca6\u0ca8\u0ccd\u0ca8\u0cc1 \u0cb8\u0ccd\u0cb5\u0cc0\u0c95\u0cb0\u0cbf\u0cb8\u0cbf",refresh_btn:"\u0cb9\u0cca\u0cb8 \u0cb8\u0cb5\u0cbe\u0cb2\u0cca\u0c82\u0ca6\u0ca8\u0ccd\u0ca8\u0cc1 \u0caa\u0ca1\u0cc6\u0caf\u0cbf\u0cb0\u0cbf",
instructions_visual:"",instructions_audio:"\u0ca8\u0cbf\u0cae\u0c97\u0cc6 \u0c95\u0cc7\u0cb3\u0cbf\u0cb8\u0cc1\u0cb5\u0cc1\u0ca6\u0ca8\u0ccd\u0ca8\u0cc1 \u0c9f\u0cc8\u0caa\u0ccd\u200c \u0cae\u0cbe\u0ca1\u0cbf:",help_btn:"\u0cb8\u0cb9\u0cbe\u0caf",play_again:"\u0ca7\u0ccd\u0cb5\u0ca8\u0cbf\u0caf\u0ca8\u0ccd\u0ca8\u0cc1 \u0cae\u0ca4\u0ccd\u0ca4\u0cc6 \u0caa\u0ccd\u0cb2\u0cc7 \u0cae\u0cbe\u0ca1\u0cbf",cant_hear_this:"\u0ca7\u0ccd\u0cb5\u0ca8\u0cbf\u0caf\u0ca8\u0ccd\u0ca8\u0cc1 MP3 \u0cb0\u0cc2\u0caa\u0ca6\u0cb2\u0ccd\u0cb2\u0cbf \u0ca1\u0ccc\u0ca8\u0ccd\u200c\u0cb2\u0ccb\u0ca1\u0ccd \u0cae\u0cbe\u0ca1\u0cbf",
incorrect_try_again:"\u0ca4\u0caa\u0ccd\u0caa\u0cbe\u0c97\u0cbf\u0ca6\u0cc6. \u0cae\u0ca4\u0ccd\u0ca4\u0cca\u0cae\u0ccd\u0cae\u0cc6 \u0caa\u0ccd\u0cb0\u0caf\u0ca4\u0ccd\u0ca8\u0cbf\u0cb8\u0cbf.",image_alt_text:"reCAPTCHA \u0cb8\u0cb5\u0cbe\u0cb2\u0cc1 \u0c9a\u0cbf\u0ca4\u0ccd\u0cb0",privacy_and_terms:"\u0c97\u0ccc\u0caa\u0ccd\u0caf\u0ca4\u0cc6 \u0cae\u0ca4\u0ccd\u0ca4\u0cc1 \u0ca8\u0cbf\u0caf\u0cae\u0c97\u0cb3\u0cc1"},ko:{visual_challenge:"\uadf8\ub9bc\uc73c\ub85c \ubcf4\uc548\ubb38\uc790 \ubc1b\uae30",
audio_challenge:"\uc74c\uc131\uc73c\ub85c \ubcf4\uc548\ubb38\uc790 \ubc1b\uae30",refresh_btn:"\ubcf4\uc548\ubb38\uc790 \uc0c8\ub85c \ubc1b\uae30",instructions_visual:"\ud14d\uc2a4\ud2b8 \uc785\ub825:",instructions_audio:"\uc74c\uc131 \ubcf4\uc548\ubb38\uc790 \uc785\ub825:",help_btn:"\ub3c4\uc6c0\ub9d0",play_again:"\uc74c\uc131 \ub2e4\uc2dc \ub4e3\uae30",cant_hear_this:"\uc74c\uc131\uc744 MP3\ub85c \ub2e4\uc6b4\ub85c\ub4dc",incorrect_try_again:"\ud2c0\ub838\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
image_alt_text:"reCAPTCHA \ubcf4\uc548\ubb38\uc790 \uc774\ubbf8\uc9c0",privacy_and_terms:"\uac1c\uc778\uc815\ubcf4 \ubcf4\ud638 \ubc0f \uc57d\uad00"},ln:ma,lt:{visual_challenge:"Gauti vaizdin\u012f atpa\u017einimo test\u0105",audio_challenge:"Gauti garso atpa\u017einimo test\u0105",refresh_btn:"Gauti nauj\u0105 atpa\u017einimo test\u0105",instructions_visual:"\u012eveskite tekst\u0105:",instructions_audio:"\u012eveskite tai, k\u0105 girdite:",help_btn:"Pagalba",play_again:"Dar kart\u0105 paleisti gars\u0105",
cant_hear_this:"Atsisi\u0173sti gars\u0105 kaip MP3",incorrect_try_again:"Neteisingai. Bandykite dar kart\u0105.",image_alt_text:"Testo \u201ereCAPTCHA\u201c vaizdas",privacy_and_terms:"Privatumas ir s\u0105lygos"},lv:{visual_challenge:"Sa\u0146emt vizu\u0101lu izaicin\u0101jumu",audio_challenge:"Sa\u0146emt audio izaicin\u0101jumu",refresh_btn:"Sa\u0146emt jaunu izaicin\u0101jumu",instructions_visual:"Ievadiet tekstu:",instructions_audio:"Ierakstiet dzirdamo:",help_btn:"Pal\u012bdz\u012bba",play_again:"V\u0113lreiz atska\u0146ot ska\u0146u",
cant_hear_this:"Lejupiel\u0101d\u0113t ska\u0146u MP3\u00a0form\u0101t\u0101",incorrect_try_again:"Nepareizi. M\u0113\u0123iniet v\u0113lreiz.",image_alt_text:"reCAPTCHA izaicin\u0101juma att\u0113ls",privacy_and_terms:"Konfidencialit\u0101te un noteikumi"},ml:{visual_challenge:"\u0d12\u0d30\u0d41 \u0d26\u0d43\u0d36\u0d4d\u0d2f \u0d1a\u0d32\u0d1e\u0d4d\u0d1a\u0d4d \u0d28\u0d47\u0d1f\u0d41\u0d15",audio_challenge:"\u0d12\u0d30\u0d41 \u0d13\u0d21\u0d3f\u0d2f\u0d4b \u0d1a\u0d32\u0d1e\u0d4d\u0d1a\u0d4d \u0d28\u0d47\u0d1f\u0d41\u0d15",
refresh_btn:"\u0d12\u0d30\u0d41 \u0d2a\u0d41\u0d24\u0d3f\u0d2f \u0d1a\u0d32\u0d1e\u0d4d\u0d1a\u0d4d \u0d28\u0d47\u0d1f\u0d41\u0d15",instructions_visual:"",instructions_audio:"\u0d15\u0d47\u0d7e\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d24\u0d4d \u0d1f\u0d48\u0d2a\u0d4d\u0d2a\u0d4d \u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d42:",help_btn:"\u0d38\u0d39\u0d3e\u0d2f\u0d02",play_again:"\u0d36\u0d2c\u0d4d\u200c\u0d26\u0d02 \u0d35\u0d40\u0d23\u0d4d\u0d1f\u0d41\u0d02 \u0d2a\u0d4d\u0d32\u0d47 \u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d41\u0d15",
cant_hear_this:"\u0d36\u0d2c\u0d4d\u200c\u0d26\u0d02 MP3 \u0d06\u0d2f\u0d3f \u0d21\u0d57\u0d7a\u0d32\u0d4b\u0d21\u0d4d \u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d41\u0d15",incorrect_try_again:"\u0d24\u0d46\u0d31\u0d4d\u0d31\u0d3e\u0d23\u0d4d. \u0d35\u0d40\u0d23\u0d4d\u0d1f\u0d41\u0d02 \u0d36\u0d4d\u0d30\u0d2e\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d15.",image_alt_text:"reCAPTCHA \u0d1a\u0d32\u0d1e\u0d4d\u0d1a\u0d4d \u0d07\u0d2e\u0d47\u0d1c\u0d4d",privacy_and_terms:"\u0d38\u0d4d\u0d35\u0d15\u0d3e\u0d30\u0d4d\u0d2f\u0d24\u0d2f\u0d41\u0d02 \u0d28\u0d3f\u0d2c\u0d28\u0d4d\u0d27\u0d28\u0d15\u0d33\u0d41\u0d02"},
mr:{visual_challenge:"\u0926\u0943\u0936\u094d\u200d\u092f\u092e\u093e\u0928 \u0906\u0935\u094d\u0939\u093e\u0928 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u093e",audio_challenge:"\u0911\u0921\u0940\u0913 \u0906\u0935\u094d\u0939\u093e\u0928 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u093e",refresh_btn:"\u090f\u0915 \u0928\u0935\u0940\u0928 \u0906\u0935\u094d\u0939\u093e\u0928 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u093e",instructions_visual:"",instructions_audio:"\u0906\u092a\u0932\u094d\u092f\u093e\u0932\u093e \u091c\u0947 \u0910\u0915\u0942 \u092f\u0947\u0908\u0932 \u0924\u0947 \u091f\u093e\u0907\u092a \u0915\u0930\u093e:",
help_btn:"\u092e\u0926\u0924",play_again:"\u0927\u094d\u200d\u0935\u0928\u0940 \u092a\u0941\u0928\u094d\u0939\u093e \u092a\u094d\u200d\u0932\u0947 \u0915\u0930\u093e",cant_hear_this:"MP3 \u0930\u0941\u092a\u093e\u0924 \u0927\u094d\u200d\u0935\u0928\u0940 \u0921\u093e\u0909\u0928\u0932\u094b\u0921 \u0915\u0930\u093e",incorrect_try_again:"\u0905\u092f\u094b\u0917\u094d\u200d\u092f. \u092a\u0941\u0928\u094d\u200d\u0939\u093e \u092a\u094d\u0930\u092f\u0924\u094d\u200d\u0928 \u0915\u0930\u093e.",image_alt_text:"reCAPTCHA \u0906\u0935\u094d\u200d\u0939\u093e\u0928 \u092a\u094d\u0930\u0924\u093f\u092e\u093e",
privacy_and_terms:"\u0917\u094b\u092a\u0928\u0940\u092f\u0924\u093e \u0906\u0923\u093f \u0905\u091f\u0940"},ms:{visual_challenge:"Dapatkan cabaran visual",audio_challenge:"Dapatkan cabaran audio",refresh_btn:"Dapatkan cabaran baru",instructions_visual:"Taipkan teksnya:",instructions_audio:"Taip apa yang didengari:",help_btn:"Bantuan",play_again:"Mainkan bunyi sekali lagi",cant_hear_this:"Muat turun bunyi sebagai MP3",incorrect_try_again:"Tidak betul. Cuba lagi.",image_alt_text:"Imej cabaran reCAPTCHA",
privacy_and_terms:"Privasi & Syarat"},nl:{visual_challenge:"Een visuele uitdaging proberen",audio_challenge:"Een audio-uitdaging proberen",refresh_btn:"Een nieuwe uitdaging proberen",instructions_visual:"Typ de tekst:",instructions_audio:"Typ wat u hoort:",help_btn:"Help",play_again:"Geluid opnieuw afspelen",cant_hear_this:"Geluid downloaden als MP3",incorrect_try_again:"Onjuist. Probeer het opnieuw.",image_alt_text:"reCAPTCHA-uitdagingsafbeelding",privacy_and_terms:"Privacy en voorwaarden"},no:{visual_challenge:"F\u00e5 en bildeutfordring",
audio_challenge:"F\u00e5 en lydutfordring",refresh_btn:"F\u00e5 en ny utfordring",instructions_visual:"Skriv inn teksten:",instructions_audio:"Skriv inn det du h\u00f8rer:",help_btn:"Hjelp",play_again:"Spill av lyd p\u00e5 nytt",cant_hear_this:"Last ned lyd som MP3",incorrect_try_again:"Feil. Pr\u00f8v p\u00e5 nytt.",image_alt_text:"reCAPTCHA-utfordringsbilde",privacy_and_terms:"Personvern og vilk\u00e5r"},pl:{visual_challenge:"Poka\u017c podpowied\u017a wizualn\u0105",audio_challenge:"Odtw\u00f3rz podpowied\u017a d\u017awi\u0119kow\u0105",
refresh_btn:"Nowa podpowied\u017a",instructions_visual:"Przepisz tekst:",instructions_audio:"Wpisz us\u0142yszane s\u0142owa:",help_btn:"Pomoc",play_again:"Odtw\u00f3rz d\u017awi\u0119k ponownie",cant_hear_this:"Pobierz d\u017awi\u0119k jako plik MP3",incorrect_try_again:"Nieprawid\u0142owo. Spr\u00f3buj ponownie.",image_alt_text:"Zadanie obrazkowe reCAPTCHA",privacy_and_terms:"Prywatno\u015b\u0107 i warunki"},pt:pa,"pt-BR":pa,"pt-PT":{visual_challenge:"Obter um desafio visual",audio_challenge:"Obter um desafio de \u00e1udio",
refresh_btn:"Obter um novo desafio",instructions_visual:"Introduza o texto:",instructions_audio:"Escreva o que ouvir:",help_btn:"Ajuda",play_again:"Reproduzir som novamente",cant_hear_this:"Transferir som como MP3",incorrect_try_again:"Incorreto. Tente novamente.",image_alt_text:"Imagem de teste reCAPTCHA",privacy_and_terms:"Privacidade e Termos de Utiliza\u00e7\u00e3o"},ro:qa,ru:{visual_challenge:"\u0412\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",
audio_challenge:"\u0417\u0432\u0443\u043a\u043e\u0432\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430",refresh_btn:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",instructions_visual:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442:",instructions_audio:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u043e, \u0447\u0442\u043e \u0441\u043b\u044b\u0448\u0438\u0442\u0435:",help_btn:"\u0421\u043f\u0440\u0430\u0432\u043a\u0430",play_again:"\u041f\u0440\u043e\u0441\u043b\u0443\u0448\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437",
cant_hear_this:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c MP3-\u0444\u0430\u0439\u043b",incorrect_try_again:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443.",image_alt_text:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u043e \u0441\u043b\u043e\u0432\u0443 reCAPTCHA",privacy_and_terms:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b"},
sk:{visual_challenge:"Zobrazi\u0165 vizu\u00e1lnu podobu",audio_challenge:"Prehra\u0165 zvukov\u00fa podobu",refresh_btn:"Zobrazi\u0165 nov\u00fd v\u00fdraz",instructions_visual:"Zadajte text:",instructions_audio:"Zadajte, \u010do po\u010dujete:",help_btn:"Pomocn\u00edk",play_again:"Znova prehra\u0165 zvuk",cant_hear_this:"Prevzia\u0165 zvuk v podobe s\u00faboru MP3",incorrect_try_again:"Nespr\u00e1vne. Sk\u00faste to znova.",image_alt_text:"Obr\u00e1zok zadania reCAPTCHA",privacy_and_terms:"Ochrana osobn\u00fdch \u00fadajov a Zmluvn\u00e9 podmienky"},
sl:{visual_challenge:"Vizualni preskus",audio_challenge:"Zvo\u010dni preskus",refresh_btn:"Nov preskus",instructions_visual:"Vnesite besedilo:",instructions_audio:"Natipkajte, kaj sli\u0161ite:",help_btn:"Pomo\u010d",play_again:"Znova predvajaj zvok",cant_hear_this:"Prenesi zvok kot MP3",incorrect_try_again:"Napa\u010dno. Poskusite znova.",image_alt_text:"Slika izziva reCAPTCHA",privacy_and_terms:"Zasebnost in pogoji"},sr:{visual_challenge:"\u041f\u0440\u0438\u043c\u0438\u0442\u0435 \u0432\u0438\u0437\u0443\u0435\u043b\u043d\u0438 \u0443\u043f\u0438\u0442",
audio_challenge:"\u041f\u0440\u0438\u043c\u0438\u0442\u0435 \u0430\u0443\u0434\u0438\u043e \u0443\u043f\u0438\u0442",refresh_btn:"\u041f\u0440\u0438\u043c\u0438\u0442\u0435 \u043d\u043e\u0432\u0438 \u0443\u043f\u0438\u0442",instructions_visual:"\u0423\u043d\u0435\u0441\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442:",instructions_audio:"\u041e\u0442\u043a\u0443\u0446\u0430\u0458\u0442\u0435 \u043e\u043d\u043e \u0448\u0442\u043e \u0447\u0443\u0458\u0435\u0442\u0435:",help_btn:"\u041f\u043e\u043c\u043e\u045b",
play_again:"\u041f\u043e\u043d\u043e\u0432\u043e \u043f\u0443\u0441\u0442\u0438 \u0437\u0432\u0443\u043a",cant_hear_this:"\u041f\u0440\u0435\u0443\u0437\u043c\u0438 \u0437\u0432\u0443\u043a \u043a\u0430\u043e MP3 \u0441\u043d\u0438\u043c\u0430\u043a",incorrect_try_again:"\u041d\u0435\u0442\u0430\u0447\u043d\u043e. \u041f\u043e\u043a\u0443\u0448\u0430\u0458\u0442\u0435 \u043f\u043e\u043d\u043e\u0432\u043e.",image_alt_text:"\u0421\u043b\u0438\u043a\u0430 reCAPTCHA \u043f\u0440\u043e\u0432\u0435\u0440\u0435",
privacy_and_terms:"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0441\u0442 \u0438 \u0443\u0441\u043b\u043e\u0432\u0438"},sv:{visual_challenge:"H\u00e4mta captcha i bildformat",audio_challenge:"H\u00e4mta captcha i ljudformat",refresh_btn:"H\u00e4mta ny captcha",instructions_visual:"Skriv texten:",instructions_audio:"Skriv det du h\u00f6r:",help_btn:"Hj\u00e4lp",play_again:"Spela upp ljudet igen",cant_hear_this:"H\u00e4mta ljud som MP3",incorrect_try_again:"Fel. F\u00f6rs\u00f6k igen.",image_alt_text:"reCAPTCHA-bild",
privacy_and_terms:"Sekretess och villkor"},sw:{visual_challenge:"Pata herufi za kusoma",audio_challenge:"Pata herufi za kusikiliza",refresh_btn:"Pata herufi mpya",instructions_visual:"",instructions_audio:"Charaza unachosikia:",help_btn:"Usaidizi",play_again:"Cheza sauti tena",cant_hear_this:"Pakua sauti kama MP3",incorrect_try_again:"Sio sahihi. Jaribu tena.",image_alt_text:"picha ya changamoto ya reCAPTCHA",privacy_and_terms:"Faragha & Masharti"},ta:{visual_challenge:"\u0baa\u0bbe\u0bb0\u0bcd\u0bb5\u0bc8 \u0b9a\u0bc7\u0bb2\u0b9e\u0bcd\u0b9a\u0bc8\u0baa\u0bcd \u0baa\u0bc6\u0bb1\u0bc1\u0b95",
audio_challenge:"\u0b86\u0b9f\u0bbf\u0baf\u0bcb \u0b9a\u0bc7\u0bb2\u0b9e\u0bcd\u0b9a\u0bc8\u0baa\u0bcd \u0baa\u0bc6\u0bb1\u0bc1\u0b95",refresh_btn:"\u0baa\u0bc1\u0ba4\u0bbf\u0baf \u0b9a\u0bc7\u0bb2\u0b9e\u0bcd\u0b9a\u0bc8\u0baa\u0bcd \u0baa\u0bc6\u0bb1\u0bc1\u0b95",instructions_visual:"",instructions_audio:"\u0b95\u0bc7\u0b9f\u0bcd\u0baa\u0ba4\u0bc8 \u0b9f\u0bc8\u0baa\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0b95:",help_btn:"\u0b89\u0ba4\u0bb5\u0bbf",play_again:"\u0b92\u0bb2\u0bbf\u0baf\u0bc8 \u0bae\u0bc0\u0ba3\u0bcd\u0b9f\u0bc1\u0bae\u0bcd \u0b87\u0baf\u0b95\u0bcd\u0b95\u0bc1",
cant_hear_this:"\u0b92\u0bb2\u0bbf\u0baf\u0bc8 MP3 \u0b86\u0b95 \u0baa\u0ba4\u0bbf\u0bb5\u0bbf\u0bb1\u0b95\u0bcd\u0b95\u0bc1\u0b95",incorrect_try_again:"\u0ba4\u0bb5\u0bb1\u0bbe\u0ba9\u0ba4\u0bc1. \u0bae\u0bc0\u0ba3\u0bcd\u0b9f\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0baf\u0bb2\u0bb5\u0bc1\u0bae\u0bcd.",image_alt_text:"reCAPTCHA \u0b9a\u0bc7\u0bb2\u0b9e\u0bcd\u0b9a\u0bcd \u0baa\u0b9f\u0bae\u0bcd",privacy_and_terms:"\u0ba4\u0ba9\u0bbf\u0baf\u0bc1\u0bb0\u0bbf\u0bae\u0bc8 & \u0bb5\u0bbf\u0ba4\u0bbf\u0bae\u0bc1\u0bb1\u0bc8\u0b95\u0bb3\u0bcd"},
te:{visual_challenge:"\u0c12\u0c15 \u0c26\u0c43\u0c36\u0c4d\u0c2f\u0c2e\u0c3e\u0c28 \u0c38\u0c35\u0c3e\u0c32\u0c41\u0c28\u0c41 \u0c38\u0c4d\u0c35\u0c40\u0c15\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f",audio_challenge:"\u0c12\u0c15 \u0c06\u0c21\u0c3f\u0c2f\u0c4b \u0c38\u0c35\u0c3e\u0c32\u0c41\u0c28\u0c41 \u0c38\u0c4d\u0c35\u0c40\u0c15\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f",refresh_btn:"\u0c15\u0c4d\u0c30\u0c4a\u0c24\u0c4d\u0c24 \u0c38\u0c35\u0c3e\u0c32\u0c41\u0c28\u0c41 \u0c38\u0c4d\u0c35\u0c40\u0c15\u0c30\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f",
instructions_visual:"",instructions_audio:"\u0c2e\u0c40\u0c30\u0c41 \u0c35\u0c3f\u0c28\u0c4d\u0c28\u0c26\u0c3f \u0c1f\u0c48\u0c2a\u0c4d \u0c1a\u0c47\u0c2f\u0c02\u0c21\u0c3f:",help_btn:"\u0c38\u0c39\u0c3e\u0c2f\u0c02",play_again:"\u0c27\u0c4d\u0c35\u0c28\u0c3f\u0c28\u0c3f \u0c2e\u0c33\u0c4d\u0c32\u0c40 \u0c2a\u0c4d\u0c32\u0c47 \u0c1a\u0c47\u0c2f\u0c3f",cant_hear_this:"\u0c27\u0c4d\u0c35\u0c28\u0c3f\u0c28\u0c3f MP3 \u0c35\u0c32\u0c46 \u0c21\u0c4c\u0c28\u0c4d\u200c\u0c32\u0c4b\u0c21\u0c4d \u0c1a\u0c47\u0c2f\u0c3f",
incorrect_try_again:"\u0c24\u0c2a\u0c4d\u0c2a\u0c41. \u0c2e\u0c33\u0c4d\u0c32\u0c40 \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c02\u0c21\u0c3f.",image_alt_text:"reCAPTCHA \u0c38\u0c35\u0c3e\u0c32\u0c41 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02",privacy_and_terms:"\u0c17\u0c4b\u0c2a\u0c4d\u0c2f\u0c24 & \u0c28\u0c3f\u0c2c\u0c02\u0c27\u0c28\u0c32\u0c41"},th:{visual_challenge:"\u0e23\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e17\u0e49\u0e32\u0e17\u0e32\u0e22\u0e14\u0e49\u0e32\u0e19\u0e20\u0e32\u0e1e",
audio_challenge:"\u0e23\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e17\u0e49\u0e32\u0e17\u0e32\u0e22\u0e14\u0e49\u0e32\u0e19\u0e40\u0e2a\u0e35\u0e22\u0e07",refresh_btn:"\u0e23\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e17\u0e49\u0e32\u0e17\u0e32\u0e22\u0e43\u0e2b\u0e21\u0e48",instructions_visual:"\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e19\u0e35\u0e49:",instructions_audio:"\u0e1e\u0e34\u0e21\u0e1e\u0e4c\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e22\u0e34\u0e19:",
help_btn:"\u0e04\u0e27\u0e32\u0e21\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e2b\u0e25\u0e37\u0e2d",play_again:"\u0e40\u0e25\u0e48\u0e19\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",cant_hear_this:"\u0e14\u0e32\u0e27\u0e42\u0e2b\u0e25\u0e14\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e40\u0e1b\u0e47\u0e19 MP3",incorrect_try_again:"\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07 \u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",image_alt_text:"\u0e23\u0e2b\u0e31\u0e2a\u0e20\u0e32\u0e1e reCAPTCHA",
privacy_and_terms:"\u0e19\u0e42\u0e22\u0e1a\u0e32\u0e22\u0e2a\u0e48\u0e27\u0e19\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e41\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14"},tr:{visual_challenge:"G\u00f6rsel sorgu al",audio_challenge:"Sesli sorgu al",refresh_btn:"Yeniden y\u00fckle",instructions_visual:"Metni yaz\u0131n:",instructions_audio:"Duydu\u011funuzu yaz\u0131n:",help_btn:"Yard\u0131m",play_again:"Sesi tekrar \u00e7al",cant_hear_this:"Sesi MP3 olarak indir",incorrect_try_again:"Yanl\u0131\u015f. Tekrar deneyin.",
image_alt_text:"reCAPTCHA sorusu resmi",privacy_and_terms:"Gizlilik ve \u015eartlar"},uk:{visual_challenge:"\u041e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0432\u0456\u0437\u0443\u0430\u043b\u044c\u043d\u0438\u0439 \u0442\u0435\u043a\u0441\u0442",audio_challenge:"\u041e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0430\u0443\u0434\u0456\u043e\u0437\u0430\u043f\u0438\u0441",refresh_btn:"\u041e\u043d\u043e\u0432\u0438\u0442\u0438 \u0442\u0435\u043a\u0441\u0442",instructions_visual:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0442\u0435\u043a\u0441\u0442:",
instructions_audio:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u043e\u0447\u0443\u0442\u0435:",help_btn:"\u0414\u043e\u0432\u0456\u0434\u043a\u0430",play_again:"\u0412\u0456\u0434\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0437\u0430\u043f\u0438\u0441 \u0449\u0435 \u0440\u0430\u0437",cant_hear_this:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0437\u0430\u043f\u0438\u0441 \u044f\u043a MP3",incorrect_try_again:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.",
image_alt_text:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f reCAPTCHA",privacy_and_terms:"\u041a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u0456\u0441\u0442\u044c \u0456 \u0443\u043c\u043e\u0432\u0438"},ur:{visual_challenge:"\u0627\u06cc\u06a9 \u0645\u0631\u0626\u06cc \u0686\u06cc\u0644\u0646\u062c \u062d\u0627\u0635\u0644 \u06a9\u0631\u06cc\u06ba",audio_challenge:"\u0627\u06cc\u06a9 \u0622\u0688\u06cc\u0648 \u0686\u06cc\u0644\u0646\u062c \u062d\u0627\u0635\u0644 \u06a9\u0631\u06cc\u06ba",
refresh_btn:"\u0627\u06cc\u06a9 \u0646\u06cc\u0627 \u0686\u06cc\u0644\u0646\u062c \u062d\u0627\u0635\u0644 \u06a9\u0631\u06cc\u06ba",instructions_visual:"",instructions_audio:"\u062c\u0648 \u0633\u0646\u0627\u0626\u06cc \u062f\u06cc\u062a\u0627 \u06c1\u06d2 \u0648\u06c1 \u0679\u0627\u0626\u067e \u06a9\u0631\u06cc\u06ba:",help_btn:"\u0645\u062f\u062f",play_again:"\u0622\u0648\u0627\u0632 \u062f\u0648\u0628\u0627\u0631\u06c1 \u0686\u0644\u0627\u0626\u06cc\u06ba",cant_hear_this:"\u0622\u0648\u0627\u0632 \u06a9\u0648 MP3 \u06a9\u06d2 \u0628\u0637\u0648\u0631 \u0688\u0627\u0624\u0646 \u0644\u0648\u0688 \u06a9\u0631\u06cc\u06ba",
incorrect_try_again:"\u063a\u0644\u0637\u06d4 \u062f\u0648\u0628\u0627\u0631\u06c1 \u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06ba\u06d4",image_alt_text:"reCAPTCHA \u0686\u06cc\u0644\u0646\u062c \u0648\u0627\u0644\u06cc \u0634\u0628\u06cc\u06c1",privacy_and_terms:"\u0631\u0627\u0632\u062f\u0627\u0631\u06cc \u0648 \u0634\u0631\u0627\u0626\u0637"},vi:{visual_challenge:"Nh\u1eadn th\u1eed th\u00e1ch h\u00ecnh \u1ea3nh",audio_challenge:"Nh\u1eadn th\u1eed th\u00e1ch \u00e2m thanh",refresh_btn:"Nh\u1eadn th\u1eed th\u00e1ch m\u1edbi",
instructions_visual:"Nh\u1eadp v\u0103n b\u1ea3n:",instructions_audio:"Nh\u1eadp n\u1ed9i dung b\u1ea1n nghe th\u1ea5y:",help_btn:"Tr\u1ee3 gi\u00fap",play_again:"Ph\u00e1t l\u1ea1i \u00e2m thanh",cant_hear_this:"T\u1ea3i \u00e2m thanh xu\u1ed1ng d\u01b0\u1edbi d\u1ea1ng MP3",incorrect_try_again:"Kh\u00f4ng ch\u00ednh x\u00e1c. H\u00e3y th\u1eed l\u1ea1i.",image_alt_text:"H\u00ecnh x\u00e1c th\u1ef1c reCAPTCHA",privacy_and_terms:"B\u1ea3o m\u1eadt v\u00e0 \u0111i\u1ec1u kho\u1ea3n"},"zh-CN":ra,"zh-HK":{visual_challenge:"\u56de\u7b54\u5716\u50cf\u9a57\u8b49\u554f\u984c",
audio_challenge:"\u53d6\u5f97\u8a9e\u97f3\u9a57\u8b49\u554f\u984c",refresh_btn:"\u63db\u4e00\u500b\u9a57\u8b49\u554f\u984c",instructions_visual:"\u8f38\u5165\u6587\u5b57\uff1a",instructions_audio:"\u9375\u5165\u60a8\u6240\u807d\u5230\u7684\uff1a",help_btn:"\u8aaa\u660e",play_again:"\u518d\u6b21\u64ad\u653e\u8072\u97f3",cant_hear_this:"\u5c07\u8072\u97f3\u4e0b\u8f09\u70ba MP3",incorrect_try_again:"\u4e0d\u6b63\u78ba\uff0c\u518d\u8a66\u4e00\u6b21\u3002",image_alt_text:"reCAPTCHA \u9a57\u8b49\u6587\u5b57\u5716\u7247",
privacy_and_terms:"\u79c1\u96b1\u6b0a\u8207\u689d\u6b3e"},"zh-TW":{visual_challenge:"\u53d6\u5f97\u5716\u7247\u9a57\u8b49\u554f\u984c",audio_challenge:"\u53d6\u5f97\u8a9e\u97f3\u9a57\u8b49\u554f\u984c",refresh_btn:"\u53d6\u5f97\u65b0\u7684\u9a57\u8b49\u554f\u984c",instructions_visual:"\u8acb\u8f38\u5165\u5716\u7247\u4e2d\u7684\u6587\u5b57\uff1a",instructions_audio:"\u8acb\u8f38\u5165\u8a9e\u97f3\u5167\u5bb9\uff1a",help_btn:"\u8aaa\u660e",play_again:"\u518d\u6b21\u64ad\u653e",cant_hear_this:"\u4ee5 MP3 \u683c\u5f0f\u4e0b\u8f09\u8072\u97f3",
incorrect_try_again:"\u9a57\u8b49\u78bc\u6709\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",image_alt_text:"reCAPTCHA \u9a57\u8b49\u6587\u5b57\u5716\u7247",privacy_and_terms:"\u96b1\u79c1\u6b0a\u8207\u689d\u6b3e"},zu:{visual_challenge:"Thola inselelo ebonakalayo",audio_challenge:"Thola inselelo yokulalelwayo",refresh_btn:"Thola inselelo entsha",instructions_visual:"",instructions_audio:"Bhala okuzwayo:",help_btn:"Usizo",play_again:"Phinda udlale okulalelwayo futhi",cant_hear_this:"Layisha umsindo njenge-MP3",
incorrect_try_again:"Akulungile. Zama futhi.",image_alt_text:"umfanekiso oyinselelo we-reCAPTCHA",privacy_and_terms:"Okwangasese kanye nemigomo"},tl:la,he:oa,"in":na,mo:qa,zh:ra};var x=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,x);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};u(x,Error);x.prototype.name="CustomError";var ta;var ua=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},va=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Da=function(a){if(!wa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ya,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(za,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Aa,"&quot;"));-1!=a.indexOf("'")&&
(a=a.replace(Ba,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ca,"&#0;"));return a},xa=/&/g,ya=/</g,za=/>/g,Aa=/"/g,Ba=/'/g,Ca=/\x00/g,wa=/[\x00&<>"']/,Ea=function(a,b){return a<b?-1:a>b?1:0},Fa=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})},Ga=function(a){var b=q(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};var Ha=function(a,b){b.unshift(a);x.call(this,ua.apply(null,b));b.shift()};u(Ha,x);Ha.prototype.name="AssertionError";
var Ia=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),g=d;else a&&(e+=": "+a,g=b);throw new Ha(""+e,g||[]);},y=function(a,b,c){a||Ia("",null,b,Array.prototype.slice.call(arguments,2))},Ja=function(a,b){throw new Ha("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},Ka=function(a,b,c){q(a)||Ia("Expected string but got %s: %s.",[n(a),a],b,Array.prototype.slice.call(arguments,2));return a},La=function(a,b,c){r(a)||Ia("Expected function but got %s: %s.",[n(a),a],b,Array.prototype.slice.call(arguments,
2))};var z=Array.prototype,Ma=z.indexOf?function(a,b,c){y(null!=a.length);return z.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Na=z.forEach?function(a,b,c){y(null!=a.length);z.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)},Oa=z.map?function(a,b,c){y(null!=a.length);return z.map.call(a,b,c)}:
function(a,b,c){for(var d=a.length,e=Array(d),g=q(a)?a.split(""):a,f=0;f<d;f++)f in g&&(e[f]=b.call(c,g[f],f,a));return e},Pa=z.some?function(a,b,c){y(null!=a.length);return z.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&b.call(c,e[g],g,a))return!0;return!1},Qa=function(a,b){var c=Ma(a,b),d;if(d=0<=c)y(null!=a.length),z.splice.call(a,c,1);return d},Ra=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},
Sa=function(a,b,c){y(null!=a.length);return 2>=arguments.length?z.slice.call(a,b):z.slice.call(a,b,c)};var Ta=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Ua=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Va=function(a){for(var b in a)return!1;return!0},Xa=function(){var a=Wa()?k.google_ad:null,b={},c;for(c in a)b[c]=a[c];return b},Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Za=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var g=0;g<Ya.length;g++)c=Ya[g],Object.prototype.hasOwnProperty.call(d,
c)&&(a[c]=d[c])}},$a=function(a){var b=arguments.length;if(1==b&&p(arguments[0]))return $a.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var A;t:{var ab=k.navigator;if(ab){var bb=ab.userAgent;if(bb){A=bb;break t}}A=""}var B=function(a){return-1!=A.indexOf(a)};var cb=B("Opera")||B("OPR"),C=B("Trident")||B("MSIE"),D=B("Gecko")&&-1==A.toLowerCase().indexOf("webkit")&&!(B("Trident")||B("MSIE")),E=-1!=A.toLowerCase().indexOf("webkit"),db=function(){var a=k.document;return a?a.documentMode:void 0},eb=function(){var a="",b;if(cb&&k.opera)return a=k.opera.version,r(a)?a():a;D?b=/rv\:([^\);]+)(\)|;)/:C?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:E&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(A))?a[1]:"");return C&&(b=db(),b>parseFloat(a))?String(b):a}(),fb={},F=function(a){var b;
if(!(b=fb[a])){b=0;for(var c=va(String(eb)).split("."),d=va(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var f=c[g]||"",m=d[g]||"",$=RegExp("(\\d*)(\\D*)","g"),K=RegExp("(\\d*)(\\D*)","g");do{var G=$.exec(f)||["","",""],aa=K.exec(m)||["","",""];if(0==G[0].length&&0==aa[0].length)break;b=Ea(0==G[1].length?0:parseInt(G[1],10),0==aa[1].length?0:parseInt(aa[1],10))||Ea(0==G[2].length,0==aa[2].length)||Ea(G[2],aa[2])}while(0==b)}b=fb[a]=0<=b}return b},gb=k.document,hb=gb&&C?db()||
("CSS1Compat"==gb.compatMode?parseInt(eb,10):5):void 0;var ib=function(a){if(8192>a.length)return String.fromCharCode.apply(null,a);for(var b="",c=0;c<a.length;c+=8192)var d=Sa(a,c,c+8192),b=b+String.fromCharCode.apply(null,d);return b},jb=function(a){return Oa(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var kb=null,lb=null,mb=function(a){if(!kb){kb={};lb={};for(var b=0;65>b;b++)kb[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b),lb[kb[b]]=b,62<=b&&(lb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(b)]=b)}for(var b=lb,c=[],d=0;d<a.length;){var e=b[a.charAt(d++)],g=d<a.length?b[a.charAt(d)]:0;++d;var f=d<a.length?b[a.charAt(d)]:64;++d;var m=d<a.length?b[a.charAt(d)]:64;++d;if(null==e||null==g||null==f||null==m)throw Error();c.push(e<<2|g>>
4);64!=f&&(c.push(g<<4&240|f>>2),64!=m&&c.push(f<<6&192|m))}return c};var H=function(){this.disposed_=this.disposed_;this.onDisposeCallbacks_=this.onDisposeCallbacks_};H.prototype.disposed_=!1;H.prototype.dispose=function(){this.disposed_||(this.disposed_=!0,this.disposeInternal())};var nb=function(a,b){a.onDisposeCallbacks_||(a.onDisposeCallbacks_=[]);a.onDisposeCallbacks_.push(l(void 0)?s(b,void 0):b)};H.prototype.disposeInternal=function(){if(this.onDisposeCallbacks_)for(;this.onDisposeCallbacks_.length;)this.onDisposeCallbacks_.shift()()};
var ob=function(a){a&&"function"==typeof a.dispose&&a.dispose()};var pb=!C||C&&9<=hb;!D&&!C||C&&C&&9<=hb||D&&F("1.9.1");C&&F("9");var sb=function(a){return a?new qb(rb(a)):ta||(ta=new qb)},tb=function(a,b){return q(b)?a.getElementById(b):b},vb=function(a,b){Ta(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in ub?a.setAttribute(ub[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},ub={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",
type:"type",usemap:"useMap",valign:"vAlign",width:"width"},xb=function(a,b,c){return wb(document,arguments)},wb=function(a,b){var c=b[0],d=b[1];if(!pb&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',Da(d.name),'"');if(d.type){c.push(' type="',Da(d.type),'"');var e={};Za(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(q(d)?c.className=d:p(d)?c.className=d.join(" "):vb(c,d));2<b.length&&yb(a,c,b);return c},yb=function(a,b,c){function d(c){c&&b.appendChild(q(c)?a.createTextNode(c):
c)}for(var e=2;e<c.length;e++){var g=c[e];!ca(g)||da(g)&&0<g.nodeType?d(g):Na(zb(g)?Ra(g):g,d)}},Ab=function(a){for(var b;b=a.firstChild;)a.removeChild(b)},Bb=function(a){a&&a.parentNode&&a.parentNode.removeChild(a)},rb=function(a){y(a,"Node cannot be null or undefined.");return 9==a.nodeType?a:a.ownerDocument||a.document},zb=function(a){if(a&&"number"==typeof a.length){if(da(a))return"function"==typeof a.item||"string"==typeof a.item;if(r(a))return"function"==typeof a.item}return!1},qb=function(a){this.document_=
a||k.document||document};h=qb.prototype;h.getDomHelper=sb;h.getElement=function(a){return tb(this.document_,a)};h.$=qb.prototype.getElement;h.createDom=function(a,b,c){return wb(this.document_,arguments)};h.createElement=function(a){return this.document_.createElement(a)};h.createTextNode=function(a){return this.document_.createTextNode(String(a))};h.appendChild=function(a,b){a.appendChild(b)};var Cb=function(a){k.setTimeout(function(){throw a;},0)},Db,Eb=function(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=s(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(l(c.next)){c=c.next;var a=c.cb;c.cb=null;a()}};return function(a){d.next={cb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=document.createElement("script");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};var Kb=function(a,b){Fb||Gb();Hb||(Fb(),Hb=!0);Ib.push(new Jb(a,b))},Fb,Gb=function(){if(k.Promise&&k.Promise.resolve){var a=k.Promise.resolve();Fb=function(){a.then(Lb)}}else Fb=function(){var a=Lb;!r(k.setImmediate)||k.Window&&k.Window.prototype.setImmediate==k.setImmediate?(Db||(Db=Eb()),Db(a)):k.setImmediate(a)}},Hb=!1,Ib=[],Lb=function(){for(;Ib.length;){var a=Ib;Ib=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.fn.call(c.scope)}catch(d){Cb(d)}}}Hb=!1},Jb=function(a,b){this.fn=a;this.scope=
b};var Mb=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},Nb=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var L=function(a,b){this.state_=0;this.result_=void 0;this.callbackEntries_=this.parent_=null;this.hadUnhandledRejection_=this.executing_=!1;try{var c=this;a.call(b,function(a){I(c,2,a)},function(a){if(!(a instanceof J))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}I(c,3,a)})}catch(d){I(this,3,d)}};
L.prototype.then=function(a,b,c){null!=a&&La(a,"opt_onFulfilled should be a function.");null!=b&&La(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Ob(this,r(a)?a:null,r(b)?b:null,c)};Mb(L);L.prototype.cancel=function(a){0==this.state_&&Kb(function(){var b=new J(a);Pb(this,b)},this)};
var Pb=function(a,b){if(0==a.state_)if(a.parent_){var c=a.parent_;if(c.callbackEntries_){for(var d=0,e=-1,g=0,f;f=c.callbackEntries_[g];g++)if(f=f.child)if(d++,f==a&&(e=g),0<=e&&1<d)break;0<=e&&(0==c.state_&&1==d?Pb(c,b):(d=c.callbackEntries_.splice(e,1)[0],d.child&&Qb(c),d.onRejected(b)))}}else I(a,3,b)},Sb=function(a,b){a.callbackEntries_&&a.callbackEntries_.length||2!=a.state_&&3!=a.state_||Rb(a);a.callbackEntries_||(a.callbackEntries_=[]);a.callbackEntries_.push(b)},Ob=function(a,b,c,d){var e=
{child:null,onFulfilled:null,onRejected:null};e.child=new L(function(a,f){e.onFulfilled=b?function(c){try{var e=b.call(d,c);a(e)}catch(K){f(K)}}:a;e.onRejected=c?function(b){try{var e=c.call(d,b);!l(e)&&b instanceof J?f(b):a(e)}catch(K){f(K)}}:f});e.child.parent_=a;Sb(a,e);return e.child};L.prototype.unblockAndFulfill_=function(a){y(1==this.state_);this.state_=0;I(this,2,a)};L.prototype.unblockAndReject_=function(a){y(1==this.state_);this.state_=0;I(this,3,a)};
var I=function(a,b,c){if(0==a.state_){if(a==c)b=3,c=new TypeError("Promise cannot resolve to itself");else{if(Nb(c)){a.state_=1;c.then(a.unblockAndFulfill_,a.unblockAndReject_,a);return}if(da(c))try{var d=c.then;if(r(d)){Tb(a,c,d);return}}catch(e){b=3,c=e}}a.result_=c;a.state_=b;Rb(a);3!=b||c instanceof J||Ub(a,c)}},Tb=function(a,b,c){a.state_=1;var d=!1,e=function(b){d||(d=!0,a.unblockAndFulfill_(b))},g=function(b){d||(d=!0,a.unblockAndReject_(b))};try{c.call(b,e,g)}catch(f){g(f)}},Rb=function(a){a.executing_||
(a.executing_=!0,Kb(a.executeCallbacks_,a))};L.prototype.executeCallbacks_=function(){for(;this.callbackEntries_&&this.callbackEntries_.length;){var a=this.callbackEntries_;this.callbackEntries_=[];for(var b=0;b<a.length;b++){var c=a[b],d=this.result_;if(2==this.state_)c.onFulfilled(d);else c.child&&Qb(this),c.onRejected(d)}}this.executing_=!1};
var Qb=function(a){for(;a&&a.hadUnhandledRejection_;a=a.parent_)a.hadUnhandledRejection_=!1},Ub=function(a,b){a.hadUnhandledRejection_=!0;Kb(function(){a.hadUnhandledRejection_&&Vb.call(null,b)})},Vb=Cb,J=function(a){x.call(this,a)};u(J,x);J.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var M=function(a,b){this.sequence_=[];this.onCancelFunction_=a;this.defaultScope_=b||null;this.hadError_=this.fired_=!1;this.result_=void 0;this.silentlyCanceled_=this.blocking_=this.blocked_=!1;this.unhandledErrorId_=0;this.parent_=null;this.branches_=0};
M.prototype.cancel=function(a){if(this.fired_)this.result_ instanceof M&&this.result_.cancel();else{if(this.parent_){var b=this.parent_;delete this.parent_;a?b.cancel(a):(b.branches_--,0>=b.branches_&&b.cancel())}this.onCancelFunction_?this.onCancelFunction_.call(this.defaultScope_,this):this.silentlyCanceled_=!0;this.fired_||Wb(this,new Xb)}};M.prototype.continue_=function(a,b){this.blocked_=!1;Yb(this,a,b)};
var Yb=function(a,b,c){a.fired_=!0;a.result_=c;a.hadError_=!b;Zb(a)},ac=function(a){if(a.fired_){if(!a.silentlyCanceled_)throw new $b;a.silentlyCanceled_=!1}};M.prototype.callback=function(a){ac(this);bc(a);Yb(this,!0,a)};var Wb=function(a,b){ac(a);bc(b);Yb(a,!1,b)},bc=function(a){y(!(a instanceof M),"An execution sequence may not be initiated with a blocking Deferred.")},cc=function(a,b,c,d){y(!a.blocking_,"Blocking Deferreds can not be re-used");a.sequence_.push([b,c,d]);a.fired_&&Zb(a)};
M.prototype.then=function(a,b,c){var d,e,g=new L(function(a,b){d=a;e=b});cc(this,d,function(a){a instanceof Xb?g.cancel():e(a)});return g.then(a,b,c)};Mb(M);
var dc=function(a){return Pa(a.sequence_,function(a){return r(a[1])})},Zb=function(a){if(a.unhandledErrorId_&&a.fired_&&dc(a)){var b=a.unhandledErrorId_,c=ec[b];c&&(k.clearTimeout(c.id_),delete ec[b]);a.unhandledErrorId_=0}a.parent_&&(a.parent_.branches_--,delete a.parent_);for(var b=a.result_,d=c=!1;a.sequence_.length&&!a.blocked_;){var e=a.sequence_.shift(),g=e[0],f=e[1],e=e[2];if(g=a.hadError_?f:g)try{var m=g.call(e||a.defaultScope_,b);l(m)&&(a.hadError_=a.hadError_&&(m==b||m instanceof Error),
a.result_=b=m);Nb(b)&&(d=!0,a.blocked_=!0)}catch($){b=$,a.hadError_=!0,dc(a)||(c=!0)}}a.result_=b;d&&(m=s(a.continue_,a,!0),d=s(a.continue_,a,!1),b instanceof M?(cc(b,m,d),b.blocking_=!0):b.then(m,d));c&&(b=new fc(b),ec[b.id_]=b,a.unhandledErrorId_=b.id_)},$b=function(){x.call(this)};u($b,x);$b.prototype.message="Deferred has already fired";$b.prototype.name="AlreadyCalledError";var Xb=function(){x.call(this)};u(Xb,x);Xb.prototype.message="Deferred was canceled";Xb.prototype.name="CanceledError";
var fc=function(a){this.id_=k.setTimeout(s(this.throwError,this),0);this.error_=a};fc.prototype.throwError=function(){y(ec[this.id_],"Cannot throw an error that is not scheduled.");delete ec[this.id_];throw this.error_;};var ec={};var kc=function(a){var b={},c=b.document||document,d=document.createElement("SCRIPT"),e={script_:d,timeout_:void 0},g=new M(gc,e),f=null,m=null!=b.timeout?b.timeout:5E3;0<m&&(f=window.setTimeout(function(){hc(d,!0);Wb(g,new ic(1,"Timeout reached for loading script "+a))},m),e.timeout_=f);d.onload=d.onreadystatechange=function(){d.readyState&&"loaded"!=d.readyState&&"complete"!=d.readyState||(hc(d,b.cleanupWhenDone||!1,f),g.callback(null))};d.onerror=function(){hc(d,!0,f);Wb(g,new ic(0,"Error while loading script "+
a))};vb(d,{type:"text/javascript",charset:"UTF-8",src:a});jc(c).appendChild(d);return g},jc=function(a){var b=a.getElementsByTagName("HEAD");return b&&0!=b.length?b[0]:a.documentElement},gc=function(){if(this&&this.script_){var a=this.script_;a&&"SCRIPT"==a.tagName&&hc(a,!0,this.timeout_)}},hc=function(a,b,c){null!=c&&k.clearTimeout(c);a.onload=ba;a.onerror=ba;a.onreadystatechange=ba;b&&window.setTimeout(function(){Bb(a)},0)},ic=function(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);x.call(this,
c);this.code=a};u(ic,x);var lc=function(a){lc[" "](a);return a};lc[" "]=ba;var mc=!C||C&&9<=hb,nc=C&&!F("9");!E||F("528");D&&F("1.9b")||C&&F("8")||cb&&F("9.5")||E&&F("528");D&&!F("8")||C&&F("9");var N=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.propagationStopped_=!1;this.returnValue_=!0};N.prototype.disposeInternal=function(){};N.prototype.dispose=function(){};N.prototype.preventDefault=function(){this.defaultPrevented=!0;this.returnValue_=!1};var O=function(a,b){N.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.event_=this.state=null;if(a){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(D){var e;t:{try{lc(d.nodeName);e=!0;break t}catch(g){}e=!1}e||(d=null)}}else"mouseover"==
c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=E||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=E||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.state=a.state;this.event_=a;a.defaultPrevented&&this.preventDefault()}};u(O,N);O.prototype.preventDefault=function(){O.superClass_.preventDefault.call(this);var a=this.event_;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,nc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};O.prototype.disposeInternal=function(){};var oc="closure_listenable_"+(1E6*Math.random()|0),pc=0;var qc=function(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.handler=e;this.key=++pc;this.removed=this.callOnce=!1},rc=function(a){a.removed=!0;a.listener=null;a.proxy=null;a.src=null;a.handler=null};var P=function(a){this.src=a;this.listeners={};this.typeCount_=0};P.prototype.add=function(a,b,c,d,e){var g=a.toString();a=this.listeners[g];a||(a=this.listeners[g]=[],this.typeCount_++);var f=sc(a,b,d,e);-1<f?(b=a[f],c||(b.callOnce=!1)):(b=new qc(b,this.src,g,!!d,e),b.callOnce=c,a.push(b));return b};
P.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=sc(e,b,c,d);return-1<b?(rc(e[b]),y(null!=e.length),z.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.typeCount_--),!0):!1};var tc=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=Qa(a.listeners[c],b);d&&(rc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.typeCount_--));return d};
P.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,rc(d[e]);delete this.listeners[c];this.typeCount_--}return b};P.prototype.getListener=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=sc(a,b,c,d));return-1<e?a[e]:null};var sc=function(a,b,c,d){for(var e=0;e<a.length;++e){var g=a[e];if(!g.removed&&g.listener==b&&g.capture==!!c&&g.handler==d)return e}return-1};var uc="closure_lm_"+(1E6*Math.random()|0),vc={},wc=0,xc=function(a,b,c,d,e){if(p(b)){for(var g=0;g<b.length;g++)xc(a,b[g],c,d,e);return null}c=yc(c);if(a&&a[oc])a=a.listen(b,c,d,e);else{if(!b)throw Error("Invalid event type");var g=!!d,f=zc(a);f||(a[uc]=f=new P(a));c=f.add(b,c,!1,d,e);c.proxy||(d=Ac(),c.proxy=d,d.src=a,d.listener=c,a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(Bc(b.toString()),d),wc++);a=c}return a},Ac=function(){var a=Cc,b=mc?function(c){return a.call(b.src,
b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},Dc=function(a,b,c,d,e){if(p(b))for(var g=0;g<b.length;g++)Dc(a,b[g],c,d,e);else c=yc(c),a&&a[oc]?a.unlisten(b,c,d,e):a&&(a=zc(a))&&(b=a.getListener(b,c,!!d,e))&&Ec(b)},Ec=function(a){if("number"==typeof a||!a||a.removed)return!1;var b=a.src;if(b&&b[oc])return tc(b.eventTargetListeners_,a);var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(Bc(c),d);wc--;(c=zc(b))?
(tc(c,a),0==c.typeCount_&&(c.src=null,b[uc]=null)):rc(a);return!0},Bc=function(a){return a in vc?vc[a]:vc[a]="on"+a},Gc=function(a,b,c,d){var e=1;if(a=zc(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var g=b[a];g&&g.capture==c&&!g.removed&&(e&=!1!==Fc(g,d))}return Boolean(e)},Fc=function(a,b){var c=a.listener,d=a.handler||a.src;a.callOnce&&Ec(a);return c.call(d,b)},Cc=function(a,b){if(a.removed)return!0;if(!mc){var c;if(!(c=b))t:{c=["window","event"];for(var d=k,e;e=c.shift();)if(null!=
d[e])d=d[e];else{c=null;break t}c=d}e=c;c=new O(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){t:{var g=!1;if(0==e.keyCode)try{e.keyCode=-1;break t}catch(f){g=!0}if(g||void 0==e.returnValue)e.returnValue=!0}e=[];for(g=c.currentTarget;g;g=g.parentNode)e.push(g);for(var g=a.type,m=e.length-1;!c.propagationStopped_&&0<=m;m--)c.currentTarget=e[m],d&=Gc(e[m],g,!0,c);for(m=0;!c.propagationStopped_&&m<e.length;m++)c.currentTarget=e[m],d&=Gc(e[m],g,!1,c)}return d}return Fc(a,new O(b,this))},zc=function(a){a=
a[uc];return a instanceof P?a:null},Hc="__closure_events_fn_"+(1E9*Math.random()>>>0),yc=function(a){y(a,"Listener can not be null.");if(r(a))return a;y(a.handleEvent,"An object listener must have handleEvent method.");a[Hc]||(a[Hc]=function(b){return a.handleEvent(b)});return a[Hc]};var Q=function(a){H.call(this);this.handler_=a;this.keys_={}};u(Q,H);var Ic=[];h=Q.prototype;h.listen=function(a,b,c,d){p(b)||(b&&(Ic[0]=b.toString()),b=Ic);for(var e=0;e<b.length;e++){var g=xc(a,b[e],c||this.handleEvent,d||!1,this.handler_||this);if(!g)break;this.keys_[g.key]=g}return this};
h.unlisten=function(a,b,c,d,e){if(p(b))for(var g=0;g<b.length;g++)this.unlisten(a,b[g],c,d,e);else c=c||this.handleEvent,e=e||this.handler_||this,c=yc(c),d=!!d,b=a&&a[oc]?a.getListener(b,c,d,e):a?(a=zc(a))?a.getListener(b,c,d,e):null:null,b&&(Ec(b),delete this.keys_[b.key]);return this};h.removeAll=function(){Ta(this.keys_,Ec);this.keys_={}};h.disposeInternal=function(){Q.superClass_.disposeInternal.call(this);this.removeAll()};
h.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var R=function(){H.call(this);this.eventTargetListeners_=new P(this);this.actualEventTarget_=this;this.parentEventTarget_=null};u(R,H);R.prototype[oc]=!0;h=R.prototype;h.setParentEventTarget=function(a){this.parentEventTarget_=a};h.addEventListener=function(a,b,c,d){xc(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){Dc(this,a,b,c,d)};
h.dispatchEvent=function(a){Jc(this);var b,c=this.parentEventTarget_;if(c){b=[];for(var d=1;c;c=c.parentEventTarget_)b.push(c),y(1E3>++d,"infinite loop")}c=this.actualEventTarget_;d=a.type||a;if(q(a))a=new N(a,c);else if(a instanceof N)a.target=a.target||c;else{var e=a;a=new N(d,c);Za(a,e)}var e=!0,g;if(b)for(var f=b.length-1;!a.propagationStopped_&&0<=f;f--)g=a.currentTarget=b[f],e=Kc(g,d,!0,a)&&e;a.propagationStopped_||(g=a.currentTarget=c,e=Kc(g,d,!0,a)&&e,a.propagationStopped_||(e=Kc(g,d,!1,a)&&
e));if(b)for(f=0;!a.propagationStopped_&&f<b.length;f++)g=a.currentTarget=b[f],e=Kc(g,d,!1,a)&&e;return e};h.disposeInternal=function(){R.superClass_.disposeInternal.call(this);this.eventTargetListeners_&&this.eventTargetListeners_.removeAll(void 0);this.parentEventTarget_=null};h.listen=function(a,b,c,d){Jc(this);return this.eventTargetListeners_.add(String(a),b,!1,c,d)};h.unlisten=function(a,b,c,d){return this.eventTargetListeners_.remove(String(a),b,c,d)};
var Kc=function(a,b,c,d){b=a.eventTargetListeners_.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,g=0;g<b.length;++g){var f=b[g];if(f&&!f.removed&&f.capture==c){var m=f.listener,$=f.handler||f.src;f.callOnce&&tc(a.eventTargetListeners_,f);e=!1!==m.call($,d)&&e}}return e&&0!=d.returnValue_};R.prototype.getListener=function(a,b,c,d){return this.eventTargetListeners_.getListener(String(a),b,c,d)};var Jc=function(a){y(a.eventTargetListeners_,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var S=function(a){R.call(this);this.imageIdToRequestMap_={};this.imageIdToImageMap_={};this.handler_=new Q(this);this.parent_=a};u(S,R);var Lc=[C&&!F("11")?"readystatechange":"load","abort","error"],Mc=function(a,b,c){(c=q(c)?c:c.src)&&(a.imageIdToRequestMap_[b]={src:c,corsRequestType:l(void 0)?void 0:null})};
S.prototype.start=function(){var a=this.imageIdToRequestMap_;Na(Ua(a),function(b){var c=a[b];if(c&&(delete a[b],!this.disposed_)){var d;d=this.parent_?sb(this.parent_).createDom("img"):new Image;c.corsRequestType&&(d.crossOrigin=c.corsRequestType);this.handler_.listen(d,Lc,this.onNetworkEvent_);this.imageIdToImageMap_[b]=d;d.id=b;d.src=c.src}},this)};
S.prototype.onNetworkEvent_=function(a){var b=a.currentTarget;if(b){if("readystatechange"==a.type)if("complete"==b.readyState)a.type="load";else return;"undefined"==typeof b.naturalWidth&&("load"==a.type?(b.naturalWidth=b.width,b.naturalHeight=b.height):(b.naturalWidth=0,b.naturalHeight=0));this.dispatchEvent({type:a.type,target:b});!this.disposed_&&(a=b.id,delete this.imageIdToRequestMap_[a],b=this.imageIdToImageMap_[a])&&(delete this.imageIdToImageMap_[a],this.handler_.unlisten(b,Lc,this.onNetworkEvent_),
Va(this.imageIdToImageMap_)&&Va(this.imageIdToRequestMap_)&&this.dispatchEvent("complete"))}};S.prototype.disposeInternal=function(){delete this.imageIdToRequestMap_;delete this.imageIdToImageMap_;ob(this.handler_);S.superClass_.disposeInternal.call(this)};var T=function(){};T.getInstance=function(){return T.instance_?T.instance_:T.instance_=new T};T.prototype.nextId_=0;var U=function(a){R.call(this);this.dom_=a||sb();this.id_=null;this.inDocument_=!1;this.element_=null;this.googUiComponentHandler_=void 0;this.childIndex_=this.children_=this.parent_=null;this.wasDecorated_=!1};u(U,R);h=U.prototype;h.idGenerator_=T.getInstance();h.getElement=function(){return this.element_};h.setParentEventTarget=function(a){if(this.parent_&&this.parent_!=a)throw Error("Method not supported");U.superClass_.setParentEventTarget.call(this,a)};h.getDomHelper=function(){return this.dom_};
h.createDom=function(){this.element_=this.dom_.createElement("div")};
var Oc=function(a,b){if(a.inDocument_)throw Error("Component already rendered");a.element_||a.createDom();b?b.insertBefore(a.element_,null):a.dom_.document_.body.appendChild(a.element_);a.parent_&&!a.parent_.inDocument_||Nc(a)},Nc=function(a){a.inDocument_=!0;Pc(a,function(a){!a.inDocument_&&a.getElement()&&Nc(a)})},Qc=function(a){Pc(a,function(a){a.inDocument_&&Qc(a)});a.googUiComponentHandler_&&a.googUiComponentHandler_.removeAll();a.inDocument_=!1};
U.prototype.disposeInternal=function(){this.inDocument_&&Qc(this);this.googUiComponentHandler_&&(this.googUiComponentHandler_.dispose(),delete this.googUiComponentHandler_);Pc(this,function(a){a.dispose()});!this.wasDecorated_&&this.element_&&Bb(this.element_);this.parent_=this.element_=this.childIndex_=this.children_=null;U.superClass_.disposeInternal.call(this)};var Pc=function(a,b){a.children_&&Na(a.children_,b,void 0)};
U.prototype.removeChild=function(a,b){if(a){var c=q(a)?a:a.id_||(a.id_=":"+(a.idGenerator_.nextId_++).toString(36)),d;this.childIndex_&&c?(d=this.childIndex_,d=(c in d?d[c]:void 0)||null):d=null;a=d;if(c&&a){d=this.childIndex_;c in d&&delete d[c];Qa(this.children_,a);b&&(Qc(a),a.element_&&Bb(a.element_));c=a;if(null==c)throw Error("Unable to set parent component");c.parent_=null;U.superClass_.setParentEventTarget.call(c,null)}}if(!a)throw Error("Child is not in parent component");return a};var V=function(a,b,c){U.call(this,c);this.captchaImage_=a;this.adImage_=b&&300==b.naturalWidth&&57==b.naturalHeight?b:null};u(V,U);V.prototype.createDom=function(){V.superClass_.createDom.call(this);var a=this.getElement();this.captchaImage_.alt=W.image_alt_text;this.getDomHelper().appendChild(a,this.captchaImage_);this.adImage_&&(this.adImage_.alt=W.image_alt_text,this.getDomHelper().appendChild(a,this.adImage_),this.adImage_&&Rc(this.adImage_)&&(a.innerHTML+='<div id="recaptcha-ad-choices"><div class="recaptcha-ad-choices-collapsed"><img height="15" width="30" alt="AdChoices" border="0" src="//www.gstatic.com/recaptcha/api/img/adicon.png"/></div><div class="recaptcha-ad-choices-expanded"><a href="https://support.google.com/adsense/troubleshooter/1631343" target="_blank"><img height="15" width="75" alt="AdChoices" border="0" src="//www.gstatic.com/recaptcha/api/img/adchoices.png"/></a></div></div>'))};
var Rc=function(a){var b=Sc(a,"visibility");a=Sc(a,"display");return"hidden"!=b&&"none"!=a},Sc=function(a,b){var c;t:{c=rb(a);if(c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))){c=c[b]||c.getPropertyValue(b)||"";break t}c=""}if(!(c=c||(a.currentStyle?a.currentStyle[b]:null))&&(c=a.style[Fa(b)],"undefined"===typeof c)){c=a.style;var d;t:if(d=Fa(b),void 0===a.style[d]){var e=(E?"Webkit":D?"Moz":C?"ms":cb?"O":null)+Ga(d);if(void 0!==a.style[e]){d=e;break t}}c=
c[d]||""}return c};V.prototype.disposeInternal=function(){delete this.captchaImage_;delete this.adImage_;V.superClass_.disposeInternal.call(this)};var Tc=function(a,b,c){H.call(this);this.listener_=a;this.interval_=b||0;this.handler_=c;this.callback_=s(this.doAction_,this)};u(Tc,H);h=Tc.prototype;h.id_=0;h.disposeInternal=function(){Tc.superClass_.disposeInternal.call(this);this.stop();delete this.listener_;delete this.handler_};
h.start=function(a){this.stop();var b=this.callback_;a=l(a)?a:this.interval_;if(!r(b))if(b&&"function"==typeof b.handleEvent)b=s(b.handleEvent,b);else throw Error("Invalid listener argument");this.id_=2147483647<a?-1:k.setTimeout(b,a||0)};h.stop=function(){this.isActive()&&k.clearTimeout(this.id_);this.id_=0};h.isActive=function(){return 0!=this.id_};h.doAction_=function(){this.id_=0;this.listener_&&this.listener_.call(this.handler_)};var Uc=function(a,b){H.call(this);this.listener_=a;this.handler_=b;this.delay_=new Tc(s(this.onTick_,this),0,this)};u(Uc,H);h=Uc.prototype;h.interval_=0;h.runUntil_=0;h.disposeInternal=function(){this.delay_.dispose();delete this.listener_;delete this.handler_;Uc.superClass_.disposeInternal.call(this)};h.start=function(a,b){this.stop();var c=b||0;this.interval_=Math.max(a||0,0);this.runUntil_=0>c?-1:ha()+c;this.delay_.start(0>c?this.interval_:Math.min(this.interval_,c))};h.stop=function(){this.delay_.stop()};
h.isActive=function(){return this.delay_.isActive()};h.onSuccess=function(){};h.onFailure=function(){};h.onTick_=function(){if(this.listener_.call(this.handler_))this.onSuccess();else if(0>this.runUntil_)this.delay_.start(this.interval_);else{var a=this.runUntil_-ha();if(0>=a)this.onFailure();else this.delay_.start(Math.min(this.interval_,a))}};$a("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));$a("action","cite","data","formaction","href","manifest","poster","src");$a("link","script","style");var Vc={sanitizedContentKindHtml:!0},Wc={sanitizedContentKindText:!0},Xc=function(){throw Error("Do not instantiate directly");};Xc.prototype.contentDir=null;Xc.prototype.toString=function(){return this.content};var bd=function(a){var b=Yc;y(b,"Soy template may not be null.");var c=sb().createElement("DIV");a=Zc(b(a||$c,void 0,void 0));b=a.match(ad);y(!b,"This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s",b&&b[0],a);c.innerHTML=a;return 1==c.childNodes.length&&(a=c.firstChild,1==a.nodeType)?a:c},Zc=function(a){if(!da(a))return String(a);if(a instanceof Xc){if(a.contentKind===Vc)return Ka(a.content);
if(a.contentKind===Wc)return Da(a.content)}Ja("Soy template output is unsafe for use as HTML: "+a);return"zSoyz"},ad=/^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i,$c={};C&&F(8);var cd=function(){Xc.call(this)};u(cd,Xc);cd.prototype.contentKind=Vc;var dd=function(a){function b(a){this.content=a}b.prototype=a.prototype;return function(a,d){var e=new b(String(a));void 0!==d&&(e.contentDir=d);return e}}(cd);(function(a){function b(a){this.content=a}b.prototype=a.prototype;return function(a,d){var e=String(a);if(!e)return"";e=new b(e);void 0!==d&&(e.contentDir=d);return e}})(cd);
var ed={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b","\f":"\\f","\r":"\\r",'"':"\\x22",$:"\\x24","&":"\\x26","'":"\\x27","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e","/":"\\/",":":"\\x3a","<":"\\x3c","=":"\\x3d",">":"\\x3e","?":"\\x3f","[":"\\x5b","\\":"\\\\","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029"},fd=function(a){return ed[a]},gd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g;var Yc=function(a){return dd('<script type="text/javascript">var challenge = \''+String(a.challenge).replace(gd,fd)+"'; var publisherId = '"+String(a.publisherId).replace(gd,fd)+"';"+("ca-mongoogle"==a.publisherId?'google_page_url = "3pcerttesting.com/dab/recaptcha.html";':"")+"\n    google_ad_client = publisherId;\n    google_ad_type = 'html';\n    google_ad_output = 'js';\n    google_image_size = '300x57';\n    google_captcha_token = challenge;\n    google_ad_request_done = function(ad) {\n      window.parent.recaptcha.ads.adutils.googleAdRequestDone(ad);\n    };\n    \x3c/script><script type=\"text/javascript\" src=\"//pagead2.googlesyndication.com/pagead/show_ads.js\">\x3c/script>")};
Yc.soyTemplateName="recaptcha.soy.ads.iframeAdsLoader.main";var Wa=function(){var a=k.google_ad;return!!(a&&a.token&&a.imageAdUrl&&a.hashedAnswer&&a.salt&&a.delayedImpressionUrl&&a.engagementUrl)},hd=function(){k.google_ad&&(k.google_ad=null)},id=function(a){a=a||document.body;var b=k.google_ad;b&&b.searchUpliftUrl&&(b=xb("iframe",{src:'data:text/html;charset=utf-8,<body><img src="https://'+b.searchUpliftUrl+'"></img></body>',style:"display:none"}),a.appendChild(b))},jd=0,kd=function(a){var b=new S;Mc(b,"recaptcha-url-"+jd++,a);b.start()},ld=function(a,b){var c=
RecaptchaState.publisher_id;hd();var d=xb("iframe",{id:"recaptcha-loader-"+jd++,style:"display: none"});document.body.appendChild(d);var e=d.contentWindow?d.contentWindow.document:d.contentDocument;e.open("text/html","replace");e.write(bd({challenge:a,publisherId:c}).innerHTML);e.close();c=new Uc(function(){return!!k.google_ad});c.onSuccess=function(){Bb(d);b()};c.onFailure=function(){Bb(d);b()};c.start(50,2E3)};t("recaptcha.ads.adutils.googleAdRequestDone",function(a){k.google_ad=a});var md=function(){this.blockSize=-1};var nd=function(){this.blockSize=-1;this.blockSize=64;this.chain_=Array(4);this.block_=Array(this.blockSize);this.totalLength_=this.blockLength_=0;this.reset()};u(nd,md);nd.prototype.reset=function(){this.chain_[0]=1732584193;this.chain_[1]=4023233417;this.chain_[2]=2562383102;this.chain_[3]=271733878;this.totalLength_=this.blockLength_=0};
var od=function(a,b,c){c||(c=0);var d=Array(16);if(q(b))for(var e=0;16>e;++e)d[e]=b.charCodeAt(c++)|b.charCodeAt(c++)<<8|b.charCodeAt(c++)<<16|b.charCodeAt(c++)<<24;else for(e=0;16>e;++e)d[e]=b[c++]|b[c++]<<8|b[c++]<<16|b[c++]<<24;b=a.chain_[0];c=a.chain_[1];var e=a.chain_[2],g=a.chain_[3],f=0,f=b+(g^c&(e^g))+d[0]+3614090360&4294967295;b=c+(f<<7&4294967295|f>>>25);f=g+(e^b&(c^e))+d[1]+3905402710&4294967295;g=b+(f<<12&4294967295|f>>>20);f=e+(c^g&(b^c))+d[2]+606105819&4294967295;e=g+(f<<17&4294967295|
f>>>15);f=c+(b^e&(g^b))+d[3]+3250441966&4294967295;c=e+(f<<22&4294967295|f>>>10);f=b+(g^c&(e^g))+d[4]+4118548399&4294967295;b=c+(f<<7&4294967295|f>>>25);f=g+(e^b&(c^e))+d[5]+1200080426&4294967295;g=b+(f<<12&4294967295|f>>>20);f=e+(c^g&(b^c))+d[6]+2821735955&4294967295;e=g+(f<<17&4294967295|f>>>15);f=c+(b^e&(g^b))+d[7]+4249261313&4294967295;c=e+(f<<22&4294967295|f>>>10);f=b+(g^c&(e^g))+d[8]+1770035416&4294967295;b=c+(f<<7&4294967295|f>>>25);f=g+(e^b&(c^e))+d[9]+2336552879&4294967295;g=b+(f<<12&4294967295|
f>>>20);f=e+(c^g&(b^c))+d[10]+4294925233&4294967295;e=g+(f<<17&4294967295|f>>>15);f=c+(b^e&(g^b))+d[11]+2304563134&4294967295;c=e+(f<<22&4294967295|f>>>10);f=b+(g^c&(e^g))+d[12]+1804603682&4294967295;b=c+(f<<7&4294967295|f>>>25);f=g+(e^b&(c^e))+d[13]+4254626195&4294967295;g=b+(f<<12&4294967295|f>>>20);f=e+(c^g&(b^c))+d[14]+2792965006&4294967295;e=g+(f<<17&4294967295|f>>>15);f=c+(b^e&(g^b))+d[15]+1236535329&4294967295;c=e+(f<<22&4294967295|f>>>10);f=b+(e^g&(c^e))+d[1]+4129170786&4294967295;b=c+(f<<
5&4294967295|f>>>27);f=g+(c^e&(b^c))+d[6]+3225465664&4294967295;g=b+(f<<9&4294967295|f>>>23);f=e+(b^c&(g^b))+d[11]+643717713&4294967295;e=g+(f<<14&4294967295|f>>>18);f=c+(g^b&(e^g))+d[0]+3921069994&4294967295;c=e+(f<<20&4294967295|f>>>12);f=b+(e^g&(c^e))+d[5]+3593408605&4294967295;b=c+(f<<5&4294967295|f>>>27);f=g+(c^e&(b^c))+d[10]+38016083&4294967295;g=b+(f<<9&4294967295|f>>>23);f=e+(b^c&(g^b))+d[15]+3634488961&4294967295;e=g+(f<<14&4294967295|f>>>18);f=c+(g^b&(e^g))+d[4]+3889429448&4294967295;c=
e+(f<<20&4294967295|f>>>12);f=b+(e^g&(c^e))+d[9]+568446438&4294967295;b=c+(f<<5&4294967295|f>>>27);f=g+(c^e&(b^c))+d[14]+3275163606&4294967295;g=b+(f<<9&4294967295|f>>>23);f=e+(b^c&(g^b))+d[3]+4107603335&4294967295;e=g+(f<<14&4294967295|f>>>18);f=c+(g^b&(e^g))+d[8]+1163531501&4294967295;c=e+(f<<20&4294967295|f>>>12);f=b+(e^g&(c^e))+d[13]+2850285829&4294967295;b=c+(f<<5&4294967295|f>>>27);f=g+(c^e&(b^c))+d[2]+4243563512&4294967295;g=b+(f<<9&4294967295|f>>>23);f=e+(b^c&(g^b))+d[7]+1735328473&4294967295;
e=g+(f<<14&4294967295|f>>>18);f=c+(g^b&(e^g))+d[12]+2368359562&4294967295;c=e+(f<<20&4294967295|f>>>12);f=b+(c^e^g)+d[5]+4294588738&4294967295;b=c+(f<<4&4294967295|f>>>28);f=g+(b^c^e)+d[8]+2272392833&4294967295;g=b+(f<<11&4294967295|f>>>21);f=e+(g^b^c)+d[11]+1839030562&4294967295;e=g+(f<<16&4294967295|f>>>16);f=c+(e^g^b)+d[14]+4259657740&4294967295;c=e+(f<<23&4294967295|f>>>9);f=b+(c^e^g)+d[1]+2763975236&4294967295;b=c+(f<<4&4294967295|f>>>28);f=g+(b^c^e)+d[4]+1272893353&4294967295;g=b+(f<<11&4294967295|
f>>>21);f=e+(g^b^c)+d[7]+4139469664&4294967295;e=g+(f<<16&4294967295|f>>>16);f=c+(e^g^b)+d[10]+3200236656&4294967295;c=e+(f<<23&4294967295|f>>>9);f=b+(c^e^g)+d[13]+681279174&4294967295;b=c+(f<<4&4294967295|f>>>28);f=g+(b^c^e)+d[0]+3936430074&4294967295;g=b+(f<<11&4294967295|f>>>21);f=e+(g^b^c)+d[3]+3572445317&4294967295;e=g+(f<<16&4294967295|f>>>16);f=c+(e^g^b)+d[6]+76029189&4294967295;c=e+(f<<23&4294967295|f>>>9);f=b+(c^e^g)+d[9]+3654602809&4294967295;b=c+(f<<4&4294967295|f>>>28);f=g+(b^c^e)+d[12]+
3873151461&4294967295;g=b+(f<<11&4294967295|f>>>21);f=e+(g^b^c)+d[15]+530742520&4294967295;e=g+(f<<16&4294967295|f>>>16);f=c+(e^g^b)+d[2]+3299628645&4294967295;c=e+(f<<23&4294967295|f>>>9);f=b+(e^(c|~g))+d[0]+4096336452&4294967295;b=c+(f<<6&4294967295|f>>>26);f=g+(c^(b|~e))+d[7]+1126891415&4294967295;g=b+(f<<10&4294967295|f>>>22);f=e+(b^(g|~c))+d[14]+2878612391&4294967295;e=g+(f<<15&4294967295|f>>>17);f=c+(g^(e|~b))+d[5]+4237533241&4294967295;c=e+(f<<21&4294967295|f>>>11);f=b+(e^(c|~g))+d[12]+1700485571&
4294967295;b=c+(f<<6&4294967295|f>>>26);f=g+(c^(b|~e))+d[3]+2399980690&4294967295;g=b+(f<<10&4294967295|f>>>22);f=e+(b^(g|~c))+d[10]+4293915773&4294967295;e=g+(f<<15&4294967295|f>>>17);f=c+(g^(e|~b))+d[1]+2240044497&4294967295;c=e+(f<<21&4294967295|f>>>11);f=b+(e^(c|~g))+d[8]+1873313359&4294967295;b=c+(f<<6&4294967295|f>>>26);f=g+(c^(b|~e))+d[15]+4264355552&4294967295;g=b+(f<<10&4294967295|f>>>22);f=e+(b^(g|~c))+d[6]+2734768916&4294967295;e=g+(f<<15&4294967295|f>>>17);f=c+(g^(e|~b))+d[13]+1309151649&
4294967295;c=e+(f<<21&4294967295|f>>>11);f=b+(e^(c|~g))+d[4]+4149444226&4294967295;b=c+(f<<6&4294967295|f>>>26);f=g+(c^(b|~e))+d[11]+3174756917&4294967295;g=b+(f<<10&4294967295|f>>>22);f=e+(b^(g|~c))+d[2]+718787259&4294967295;e=g+(f<<15&4294967295|f>>>17);f=c+(g^(e|~b))+d[9]+3951481745&4294967295;a.chain_[0]=a.chain_[0]+b&4294967295;a.chain_[1]=a.chain_[1]+(e+(f<<21&4294967295|f>>>11))&4294967295;a.chain_[2]=a.chain_[2]+e&4294967295;a.chain_[3]=a.chain_[3]+g&4294967295};
nd.prototype.update=function(a,b){l(b)||(b=a.length);for(var c=b-this.blockSize,d=this.block_,e=this.blockLength_,g=0;g<b;){if(0==e)for(;g<=c;)od(this,a,g),g+=this.blockSize;if(q(a))for(;g<b;){if(d[e++]=a.charCodeAt(g++),e==this.blockSize){od(this,d);e=0;break}}else for(;g<b;)if(d[e++]=a[g++],e==this.blockSize){od(this,d);e=0;break}}this.blockLength_=e;this.totalLength_+=b};var X=function(){Q.call(this);this.callback_=this.element_=null;this.md5_=new nd};u(X,Q);var pd=function(a,b,c,d,e){a.unwatch();a.element_=b;a.callback_=e;a.listen(b,"keyup",s(a.onChanged_,a,c,d))};X.prototype.unwatch=function(){this.element_&&this.callback_&&(this.removeAll(),this.callback_=this.element_=null)};
X.prototype.onChanged_=function(a,b){var c;c=(c=this.element_.value)?c.replace(/[\s\xa0]+/g,"").toLowerCase():"";this.md5_.reset();this.md5_.update(c+"."+b);c=this.md5_;var d=Array((56>c.blockLength_?c.blockSize:2*c.blockSize)-c.blockLength_);d[0]=128;for(var e=1;e<d.length-8;++e)d[e]=0;for(var g=8*c.totalLength_,e=d.length-8;e<d.length;++e)d[e]=g&255,g/=256;c.update(d);d=Array(16);for(e=g=0;4>e;++e)for(var f=0;32>f;f+=8)d[g++]=c.chain_[e]>>>f&255;jb(d).toLowerCase()==a.toLowerCase()&&this.callback_()};
X.prototype.disposeInternal=function(){this.element_=null;X.superClass_.disposeInternal.call(this)};var rd=function(a,b,c){this.adObject_=a;this.captchaImageUrl_=b;this.opt_successCallback_=c||null;qd(this)};u(rd,H);var qd=function(a){var b=new S;nb(a,ga(ob,b));Mc(b,"recaptcha_challenge_image",a.captchaImageUrl_);Mc(b,"recaptcha_ad_image",a.adObject_.imageAdUrl);var c={};xc(b,"load",s(function(a,b){a[b.target.id]=b.target},a,c));xc(b,"complete",s(a.handleImagesLoaded_,a,c));b.start()};
rd.prototype.handleImagesLoaded_=function(a){a=new V(a.recaptcha_challenge_image,a.recaptcha_ad_image);nb(this,ga(ob,a));var b=tb(document,"recaptcha_image");Ab(b);Oc(a,b);a.adImage_&&Rc(a.adImage_)&&(kd(this.adObject_.delayedImpressionUrl),a=new X,nb(this,ga(ob,a)),pd(a,tb(document,"recaptcha_response_field"),this.adObject_.hashedAnswer,this.adObject_.salt,s(function(a,b){a.unwatch();kd(b)},this,a,this.adObject_.engagementUrl)),this.opt_successCallback_&&this.opt_successCallback_("04"+this.adObject_.token))};var W=w;t("RecaptchaStr",W);var Y=k.RecaptchaOptions;t("RecaptchaOptions",Y);var sd={tabindex:0,theme:"red",callback:null,lang:null,custom_theme_widget:null,custom_translations:null};t("RecaptchaDefaultOptions",sd);
var Z={widget:null,timer_id:-1,style_set:!1,theme:null,type:"image",ajax_verify_cb:null,th1:null,th2:null,th3:null,element:"",ad_captcha_plugin:null,reload_timeout:-1,force_reload:!1,$:function(a){return"string"==typeof a?document.getElementById(a):a},attachEvent:function(a,b,c){a&&a.addEventListener?a.addEventListener(b,c,!1):a&&a.attachEvent&&a.attachEvent("on"+b,c)},create:function(a,b,c){Z.destroy();b&&(Z.widget=Z.$(b),Z.element=b);Z._init_options(c);Z._call_challenge(a)},destroy:function(){var a=
Z.$("recaptcha_challenge_field");a&&a.parentNode.removeChild(a);-1!=Z.timer_id&&clearInterval(Z.timer_id);Z.timer_id=-1;if(a=Z.$("recaptcha_image"))a.innerHTML="";Z.update_widget();Z.widget&&("custom"!=Z.theme?Z.widget.innerHTML="":Z.widget.style.display="none",Z.widget=null)},focus_response_field:function(){var a=Z.$("recaptcha_response_field");a&&a.focus()},get_challenge:function(){return"undefined"==typeof RecaptchaState?null:RecaptchaState.challenge},get_response:function(){var a=Z.$("recaptcha_response_field");
return a?a.value:null},ajax_verify:function(a){Z.ajax_verify_cb=a;a=Z.get_challenge()||"";var b=Z.get_response()||"";a=Z._get_api_server()+"/ajaxverify?c="+encodeURIComponent(a)+"&response="+encodeURIComponent(b);Z._add_script(a)},_ajax_verify_callback:function(a){Z.ajax_verify_cb(a)},_get_overridable_url:function(a){var b=window.location.protocol;if("undefined"!=typeof _RecaptchaOverrideApiServer)a=_RecaptchaOverrideApiServer;else if("undefined"!=typeof RecaptchaState&&"string"==typeof RecaptchaState.server&&
0<RecaptchaState.server.length)return RecaptchaState.server.replace(/\/+$/,"");return b+"//"+a},_get_api_server:function(){return Z._get_overridable_url("www.google.com/recaptcha/api")},_get_static_url_root:function(){return Z._get_overridable_url("www.gstatic.com/recaptcha/api")},_call_challenge:function(a){a=Z._get_api_server()+"/challenge?k="+a+"&ajax=1&cachestop="+Math.random();Z.getLang_()&&(a+="&lang="+Z.getLang_());"undefined"!=typeof Y.extra_challenge_params&&(a+="&"+Y.extra_challenge_params);
Z._add_script(a)},_add_script:function(a){var b=document.createElement("script");b.type="text/javascript";b.src=a;Z._get_script_area().appendChild(b)},_get_script_area:function(){var a=document.getElementsByTagName("head");return a=!a||1>a.length?document.body:a[0]},_hash_merge:function(a){for(var b={},c=0;c<a.length;c++)for(var d in a[c])b[d]=a[c][d];return b},_init_options:function(a){Y=Z._hash_merge([sd,a||{}])},challenge_callback_internal:function(){Z.update_widget();Z._reset_timer();W=Z._hash_merge([w,
sa[Z.getLang_()]||{},Y.custom_translations||{}]);window.addEventListener&&window.addEventListener("unload",function(){Z.destroy()},!1);Z._is_ie()&&window.attachEvent&&window.attachEvent("onbeforeunload",function(){});if(0<navigator.userAgent.indexOf("KHTML")){var a=document.createElement("iframe");a.src="about:blank";a.style.height="0px";a.style.width="0px";a.style.visibility="hidden";a.style.border="none";a.appendChild(document.createTextNode("This frame prevents back/forward cache problems in Safari."));
document.body.appendChild(a)}Z._finish_widget()},_add_css:function(a){if(-1!=navigator.appVersion.indexOf("MSIE 5"))document.write('<style type="text/css">'+a+"</style>");else{var b=document.createElement("style");b.type="text/css";b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a));Z._get_script_area().appendChild(b)}},_set_style:function(a){Z.style_set||(Z.style_set=!0,Z._add_css(a+"\n\n.recaptcha_is_showing_audio .recaptcha_only_if_image,.recaptcha_isnot_showing_audio .recaptcha_only_if_audio,.recaptcha_had_incorrect_sol .recaptcha_only_if_no_incorrect_sol,.recaptcha_nothad_incorrect_sol .recaptcha_only_if_incorrect_sol{display:none !important}"))},
_init_builtin_theme:function(){var a=Z.$,b=Z._get_static_url_root(),c=v.VertCss,d=v.VertHtml,e=b+"/img/"+Z.theme,g="gif",b=Z.theme;"clean"==b&&(c=v.CleanCss,d=v.CleanHtml,g="png");c=c.replace(/IMGROOT/g,e);Z._set_style(c);Z.update_widget();Z.widget.innerHTML='<div id="recaptcha_area">'+d+"</div>";c=Z.getLang_();a("recaptcha_privacy")&&null!=c&&"en"==c.substring(0,2).toLowerCase()&&null!=W.privacy_and_terms&&0<W.privacy_and_terms.length&&(c=document.createElement("a"),c.href="http://www.google.com/intl/en/policies/",
c.target="_blank",c.innerHTML=W.privacy_and_terms,a("recaptcha_privacy").appendChild(c));c=function(b,c,d,K){var G=a(b);G.src=e+"/"+c+"."+g;c=W[d];G.alt=c;b=a(b+"_btn");b.title=c;Z.attachEvent(b,"click",K)};c("recaptcha_reload","refresh","refresh_btn",function(){Z.reload_internal("r")});c("recaptcha_switch_audio","audio","audio_challenge",function(){Z.switch_type("audio")});c("recaptcha_switch_img","text","visual_challenge",function(){Z.switch_type("image")});c("recaptcha_whatsthis","help","help_btn",
Z.showhelp);"clean"==b&&(a("recaptcha_logo").src=e+"/logo."+g);a("recaptcha_table").className="recaptchatable recaptcha_theme_"+Z.theme;b=function(b,c){var d=a(b);d&&(RecaptchaState.rtl&&"span"==d.tagName.toLowerCase()&&(d.dir="rtl"),d.appendChild(document.createTextNode(W[c])))};b("recaptcha_instructions_image","instructions_visual");b("recaptcha_instructions_audio","instructions_audio");b("recaptcha_instructions_error","incorrect_try_again");a("recaptcha_instructions_image")||a("recaptcha_instructions_audio")||
(b="audio"==Z.type?W.instructions_audio:W.instructions_visual,b=b.replace(/:$/,""),a("recaptcha_response_field").setAttribute("placeholder",b))},_finish_widget:function(){var a=Z.$,b=Y,c=b.theme;c in{blackglass:1,clean:1,custom:1,red:1,white:1}||(c="red");Z.theme||(Z.theme=c);"custom"!=Z.theme?Z._init_builtin_theme():Z._set_style("");c=document.createElement("span");c.id="recaptcha_challenge_field_holder";c.style.display="none";a("recaptcha_response_field").parentNode.insertBefore(c,a("recaptcha_response_field"));
a("recaptcha_response_field").setAttribute("autocomplete","off");a("recaptcha_image").style.width="300px";a("recaptcha_image").style.height="57px";a("recaptcha_challenge_field_holder").innerHTML='<input type="hidden" name="recaptcha_challenge_field" id="recaptcha_challenge_field" value=""/>';Z.th_init();Z.should_focus=!1;Z.th3||Z.force_reload?(Z._set_challenge(RecaptchaState.challenge,"image",!0),setTimeout(function(){Z.reload_internal("i")},100)):Z._set_challenge(RecaptchaState.challenge,"image",
!1);Z.updateTabIndexes_();Z.update_widget();Z.widget&&(Z.widget.style.display="");b.callback&&b.callback()},updateTabIndexes_:function(){var a=Z.$,b=Y;b.tabindex&&(b=b.tabindex,a("recaptcha_response_field").tabIndex=b++,"audio"==Z.type&&a("recaptcha_audio_play_again")&&(a("recaptcha_audio_play_again").tabIndex=b++,a("recaptcha_audio_download"),a("recaptcha_audio_download").tabIndex=b++),"custom"!=Z.theme&&(a("recaptcha_reload_btn").tabIndex=b++,a("recaptcha_switch_audio_btn").tabIndex=b++,a("recaptcha_switch_img_btn").tabIndex=
b++,a("recaptcha_whatsthis_btn").tabIndex=b,a("recaptcha_privacy").tabIndex=b++))},switch_type:function(a){if(!((new Date).getTime()<Z.reload_timeout)&&(Z.type=a,Z.reload_internal("audio"==Z.type?"a":"v"),"custom"!=Z.theme)){a=Z.$;var b="audio"==Z.type?W.instructions_audio:W.instructions_visual,b=b.replace(/:$/,"");a("recaptcha_response_field").setAttribute("placeholder",b)}},reload:function(){Z.reload_internal("r")},reload_internal:function(a){var b=Y,c=RecaptchaState,d=(new Date).getTime();d<Z.reload_timeout||
(Z.reload_timeout=d+1E3,"undefined"==typeof a&&(a="r"),d=Z._get_api_server()+"/reload?c="+c.challenge+"&k="+c.site+"&reason="+a+"&type="+Z.type,Z.getLang_()&&(d+="&lang="+Z.getLang_()),"undefined"!=typeof b.extra_challenge_params&&(d+="&"+b.extra_challenge_params),Z.th_callback_invoke(),Z.th1&&(d+="&th="+Z.th1,Z.th1=""),"audio"==Z.type&&(d=b.audio_beta_12_08?d+"&audio_beta_12_08=1":d+"&new_audio_default=1"),Z.should_focus="t"!=a&&"i"!=a,Z._add_script(d),ob(Z.ad_captcha_plugin),c.publisher_id=null)},
th_callback_invoke:function(){if(Z.th3)try{var a=Z.th3.exec();a&&1600>a.length&&(Z.th1=a)}catch(b){Z.th1=""}},finish_reload:function(a,b,c,d){RecaptchaState.payload_url=c;RecaptchaState.is_incorrect=!1;RecaptchaState.publisher_id=d;Z._set_challenge(a,b,!1);Z.updateTabIndexes_()},_set_challenge:function(a,b,c){"image"==b&&RecaptchaState.publisher_id?ld(a,function(){Z._set_challenge_internal(a,b,c)}):Z._set_challenge_internal(a,b,c)},_set_challenge_internal:function(a,b,c){var d=Z.$,e=RecaptchaState;
e.challenge=a;Z.type=b;d("recaptcha_challenge_field").value=e.challenge;c||("audio"==b?(d("recaptcha_image").innerHTML=Z.getAudioCaptchaHtml(),Z._loop_playback()):"image"==b&&(a=e.payload_url,a||(a=Z._get_api_server()+"/image?c="+e.challenge,Z.th_callback_invoke(),Z.th1&&(a+="&th="+Z.th1,Z.th1="")),id(d("recaptcha_widget_div")),Wa()?Z.ad_captcha_plugin=new rd(Xa(),a,function(a){RecaptchaState.challenge=a;d("recaptcha_challenge_field").value=a}):d("recaptcha_image").innerHTML='<img id="recaptcha_challenge_image" alt="'+
W.image_alt_text+'" height="57" width="300" src="'+a+'" />',hd()));Z._css_toggle("recaptcha_had_incorrect_sol","recaptcha_nothad_incorrect_sol",e.is_incorrect);Z._css_toggle("recaptcha_is_showing_audio","recaptcha_isnot_showing_audio","audio"==b);Z._clear_input();Z.should_focus&&Z.focus_response_field();Z._reset_timer()},_reset_timer:function(){clearInterval(Z.timer_id);var a=Math.max(1E3*(RecaptchaState.timeout-60),6E4);Z.timer_id=setInterval(function(){Z.reload_internal("t")},a);return a},showhelp:function(){window.open(Z._get_help_link(),
"recaptcha_popup","width=460,height=580,location=no,menubar=no,status=no,toolbar=no,scrollbars=yes,resizable=yes")},_clear_input:function(){Z.$("recaptcha_response_field").value=""},_displayerror:function(a){var b=Z.$;b("recaptcha_image").innerHTML="";b("recaptcha_image").appendChild(document.createTextNode(a))},reloaderror:function(a){Z._displayerror(a)},_is_ie:function(){return 0<navigator.userAgent.indexOf("MSIE")&&!window.opera},_css_toggle:function(a,b,c){Z.update_widget();var d=Z.widget;d||
(d=document.body);var e=d.className,e=e.replace(new RegExp("(^|\\s+)"+a+"(\\s+|$)")," "),e=e.replace(new RegExp("(^|\\s+)"+b+"(\\s+|$)")," ");d.className=e+(" "+(c?a:b))},_get_help_link:function(){var a="https://support.google.com/recaptcha/";Z.getLang_()&&(a+="?hl="+Z.getLang_());return a},playAgain:function(){Z.$("recaptcha_image").innerHTML=Z.getAudioCaptchaHtml();Z._loop_playback()},_loop_playback:function(){var a=Z.$("recaptcha_audio_play_again");a&&Z.attachEvent(a,"click",function(){Z.playAgain();
return!1})},getAudioCaptchaHtml:function(){var a=RecaptchaState.payload_url;a||(a=Z._get_api_server()+"/audio.mp3?c="+RecaptchaState.challenge,Z.th_callback_invoke(),Z.th1&&(a+="&th="+Z.th1,Z.th1=""));var b=Z._get_api_server()+"/swf/audiocaptcha.swf?v2",b=Z._is_ie()?'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="audiocaptcha" width="0" height="0" codebase="https://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="'+b+'" /><param name="quality" value="high" /><param name="bgcolor" value="#869ca7" /><param name="allowScriptAccess" value="always" /></object><br/>':
'<embed src="'+b+'" quality="high" bgcolor="#869ca7" width="0" height="0" name="audiocaptcha" align="middle" play="true" loop="false" quality="high" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" /></embed>',c="";Z.checkFlashVer()&&(c="<br/>"+Z.getSpan_('<a id="recaptcha_audio_play_again" class="recaptcha_audio_cant_hear_link">'+W.play_again+"</a>"));c+="<br/>"+Z.getSpan_('<a id="recaptcha_audio_download" class="recaptcha_audio_cant_hear_link" target="_blank" href="'+
a+'">'+W.cant_hear_this+"</a>");return b+c},getSpan_:function(a){return"<span"+(RecaptchaState&&RecaptchaState.rtl?' dir="rtl"':"")+">"+a+"</span>"},gethttpwavurl:function(){if("audio"!=Z.type)return"";var a=RecaptchaState.payload_url;a||(a=Z._get_api_server()+"/image?c="+RecaptchaState.challenge,Z.th_callback_invoke(),Z.th1&&(a+="&th="+Z.th1,Z.th1=""));return a},checkFlashVer:function(){var a=-1!=navigator.appVersion.indexOf("MSIE"),b=-1!=navigator.appVersion.toLowerCase().indexOf("win"),c=-1!=navigator.userAgent.indexOf("Opera"),
d=-1;if(null!=navigator.plugins&&0<navigator.plugins.length){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"])d=navigator.plugins["Shockwave Flash"+(navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"")].description.split(" ")[2].split(".")[0]}else if(a&&b&&!c)try{d=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")).GetVariable("$version").split(" ")[1].split(",")[0]}catch(e){}return 9<=d},getLang_:function(){return Y.lang?Y.lang:"undefined"!=typeof RecaptchaState&&
RecaptchaState.lang?RecaptchaState.lang:null},challenge_callback:function(){Z.force_reload=!!RecaptchaState.force_reload;if(RecaptchaState.t3){var a=RecaptchaState.t1?ib(mb(RecaptchaState.t1)):"",b=RecaptchaState.t2?ib(mb(RecaptchaState.t2)):"",c=RecaptchaState.t3?ib(mb(RecaptchaState.t3)):"";Z.th2=c;if(a)b=kc(a),cc(b,Z.challenge_callback_internal,null,void 0),cc(b,null,Z.challenge_callback_internal,void 0);else{if(k.execScript)k.execScript(b,"JavaScript");else if(k.eval)null==ia&&(k.eval("var _et_ = 1;"),
"undefined"!=typeof k._et_?(delete k._et_,ia=!0):ia=!1),ia?k.eval(b):(a=k.document,c=a.createElement("script"),c.type="text/javascript",c.defer=!1,c.appendChild(a.createTextNode(b)),a.body.appendChild(c),a.body.removeChild(c));else throw Error("goog.globalEval not available");Z.challenge_callback_internal()}}else Z.challenge_callback_internal()},th_init:function(){try{k.thintinel&&k.thintinel.th&&(Z.th3=new k.thintinel.th(Z.th2),Z.th2="")}catch(a){}},update_widget:function(){Z.element&&(Z.widget=
Z.$(Z.element))}};t("Recaptcha",Z);})()
//fgnass.github.com/spin.js#v2.0.1
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();{var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width}if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});