import{r as Yt,g as $i,a as zi}from"./react-Bw76hHLb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();var nt={exports:{}},he={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Et;function Oi(){if(Et)return he;Et=1;var e=Yt(),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(u,d,g){var p,x={},y=null,b=null;g!==void 0&&(y=""+g),d.key!==void 0&&(y=""+d.key),d.ref!==void 0&&(b=d.ref);for(p in d)n.call(d,p)&&!a.hasOwnProperty(p)&&(x[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)x[p]===void 0&&(x[p]=d[p]);return{$$typeof:t,type:u,key:y,ref:b,props:x,_owner:r.current}}return he.Fragment=i,he.jsx=s,he.jsxs=s,he}var Bt;function Ni(){return Bt||(Bt=1,nt.exports=Oi()),nt.exports}var o=Ni(),P=Yt();const ge=$i(P);var je={},Rt;function Di(){if(Rt)return je;Rt=1;var e=zi();return je.createRoot=e.createRoot,je.hydrateRoot=e.hydrateRoot,je}var Li=Di(),z=function(){return z=Object.assign||function(t){for(var i,n=1,r=arguments.length;n<r;n++){i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},z.apply(this,arguments)};function Ke(e,t,i){if(i||arguments.length===2)for(var n=0,r=t.length,a;n<r;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}var A="-ms-",fe="-moz-",v="-webkit-",_t="comm",Ze="rule",wt="decl",Ui="@import",ei="@keyframes",Pi="@layer",ti=Math.abs,yt=String.fromCharCode,dt=Object.assign;function Fi(e,t){return M(e,0)^45?(((t<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function ii(e){return e.trim()}function K(e,t){return(e=t.exec(e))?e[0]:e}function h(e,t,i){return e.replace(t,i)}function Me(e,t,i){return e.indexOf(t,i)}function M(e,t){return e.charCodeAt(t)|0}function ne(e,t,i){return e.slice(t,i)}function U(e){return e.length}function ni(e){return e.length}function me(e,t){return t.push(e),e}function Ki(e,t){return e.map(t).join("")}function It(e,t){return e.filter(function(i){return!K(i,t)})}var He=1,re=1,ri=0,D=0,I=0,ce="";function qe(e,t,i,n,r,a,s,u){return{value:e,root:t,parent:i,type:n,props:r,children:a,line:He,column:re,length:s,return:"",siblings:u}}function W(e,t){return dt(qe("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Y(e){for(;e.root;)e=W(e.root,{children:[e]});me(e,e.siblings)}function Gi(){return I}function Qi(){return I=D>0?M(ce,--D):0,re--,I===10&&(re=1,He--),I}function L(){return I=D<ri?M(ce,D++):0,re++,I===10&&(re=1,He++),I}function q(){return M(ce,D)}function $e(){return D}function Xe(e,t){return ne(ce,e,t)}function ut(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vi(e){return He=re=1,ri=U(ce=e),D=0,[]}function Wi(e){return ce="",e}function rt(e){return ii(Xe(D-1,pt(e===91?e+2:e===40?e+1:e)))}function Zi(e){for(;(I=q())&&I<33;)L();return ut(e)>2||ut(I)>3?"":" "}function Hi(e,t){for(;--t&&L()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return Xe(e,$e()+(t<6&&q()==32&&L()==32))}function pt(e){for(;L();)switch(I){case e:return D;case 34:case 39:e!==34&&e!==39&&pt(I);break;case 40:e===41&&pt(e);break;case 92:L();break}return D}function qi(e,t){for(;L()&&e+I!==57;)if(e+I===84&&q()===47)break;return"/*"+Xe(t,D-1)+"*"+yt(e===47?e:L())}function Xi(e){for(;!ut(q());)L();return Xe(e,D)}function Ji(e){return Wi(ze("",null,null,null,[""],e=Vi(e),0,[0],e))}function ze(e,t,i,n,r,a,s,u,d){for(var g=0,p=0,x=s,y=0,b=0,k=0,B=1,O=1,R=1,S=0,j="",E=r,T=a,C=n,w=j;O;)switch(k=S,S=L()){case 40:if(k!=108&&M(w,x-1)==58){Me(w+=h(rt(S),"&","&\f"),"&\f",ti(g?u[g-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:w+=rt(S);break;case 9:case 10:case 13:case 32:w+=Zi(k);break;case 92:w+=Hi($e()-1,7);continue;case 47:switch(q()){case 42:case 47:me(Yi(qi(L(),$e()),t,i,d),d);break;default:w+="/"}break;case 123*B:u[g++]=U(w)*R;case 125*B:case 59:case 0:switch(S){case 0:case 125:O=0;case 59+p:R==-1&&(w=h(w,/\f/g,"")),b>0&&U(w)-x&&me(b>32?Mt(w+";",n,i,x-1,d):Mt(h(w," ","")+";",n,i,x-2,d),d);break;case 59:w+=";";default:if(me(C=Tt(w,t,i,g,p,r,u,j,E=[],T=[],x,a),a),S===123)if(p===0)ze(w,t,C,C,E,a,x,u,T);else switch(y===99&&M(w,3)===110?100:y){case 100:case 108:case 109:case 115:ze(e,C,C,n&&me(Tt(e,C,C,0,0,r,u,j,r,E=[],x,T),T),r,T,x,u,n?E:T);break;default:ze(w,C,C,C,[""],T,0,u,T)}}g=p=b=0,B=R=1,j=w="",x=s;break;case 58:x=1+U(w),b=k;default:if(B<1){if(S==123)--B;else if(S==125&&B++==0&&Qi()==125)continue}switch(w+=yt(S),S*B){case 38:R=p>0?1:(w+="\f",-1);break;case 44:u[g++]=(U(w)-1)*R,R=1;break;case 64:q()===45&&(w+=rt(L())),y=q(),p=x=U(j=w+=Xi($e())),S++;break;case 45:k===45&&U(w)==2&&(B=0)}}return a}function Tt(e,t,i,n,r,a,s,u,d,g,p,x){for(var y=r-1,b=r===0?a:[""],k=ni(b),B=0,O=0,R=0;B<n;++B)for(var S=0,j=ne(e,y+1,y=ti(O=s[B])),E=e;S<k;++S)(E=ii(O>0?b[S]+" "+j:h(j,/&\f/g,b[S])))&&(d[R++]=E);return qe(e,t,i,r===0?Ze:u,d,g,p,x)}function Yi(e,t,i,n){return qe(e,t,i,_t,yt(Gi()),ne(e,2,-2),0,n)}function Mt(e,t,i,n,r){return qe(e,t,i,wt,ne(e,0,n),ne(e,n+1,-1),n,r)}function oi(e,t,i){switch(Fi(e,t)){case 5103:return v+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return v+e+e;case 4789:return fe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return v+e+fe+e+A+e+e;case 5936:switch(M(e,t+11)){case 114:return v+e+A+h(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return v+e+A+h(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return v+e+A+h(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return v+e+A+e+e;case 6165:return v+e+A+"flex-"+e+e;case 5187:return v+e+h(e,/(\w+).+(:[^]+)/,v+"box-$1$2"+A+"flex-$1$2")+e;case 5443:return v+e+A+"flex-item-"+h(e,/flex-|-self/g,"")+(K(e,/flex-|baseline/)?"":A+"grid-row-"+h(e,/flex-|-self/g,""))+e;case 4675:return v+e+A+"flex-line-pack"+h(e,/align-content|flex-|-self/g,"")+e;case 5548:return v+e+A+h(e,"shrink","negative")+e;case 5292:return v+e+A+h(e,"basis","preferred-size")+e;case 6060:return v+"box-"+h(e,"-grow","")+v+e+A+h(e,"grow","positive")+e;case 4554:return v+h(e,/([^-])(transform)/g,"$1"+v+"$2")+e;case 6187:return h(h(h(e,/(zoom-|grab)/,v+"$1"),/(image-set)/,v+"$1"),e,"")+e;case 5495:case 3959:return h(e,/(image-set\([^]*)/,v+"$1$`$1");case 4968:return h(h(e,/(.+:)(flex-)?(.*)/,v+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+v+e+e;case 4200:if(!K(e,/flex-|baseline/))return A+"grid-column-align"+ne(e,t)+e;break;case 2592:case 3360:return A+h(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(n,r){return t=r,K(n.props,/grid-\w+-end/)})?~Me(e+(i=i[t].value),"span",0)?e:A+h(e,"-start","")+e+A+"grid-row-span:"+(~Me(i,"span",0)?K(i,/\d+/):+K(i,/\d+/)-+K(e,/\d+/))+";":A+h(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(n){return K(n.props,/grid-\w+-start/)})?e:A+h(h(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return h(e,/(.+)-inline(.+)/,v+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(U(e)-1-t>6)switch(M(e,t+1)){case 109:if(M(e,t+4)!==45)break;case 102:return h(e,/(.+:)(.+)-([^]+)/,"$1"+v+"$2-$3$1"+fe+(M(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Me(e,"stretch",0)?oi(h(e,"stretch","fill-available"),t,i)+e:e}break;case 5152:case 5920:return h(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,r,a,s,u,d,g){return A+r+":"+a+g+(s?A+r+"-span:"+(u?d:+d-+a)+g:"")+e});case 4949:if(M(e,t+6)===121)return h(e,":",":"+v)+e;break;case 6444:switch(M(e,M(e,14)===45?18:11)){case 120:return h(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+v+(M(e,14)===45?"inline-":"")+"box$3$1"+v+"$2$3$1"+A+"$2box$3")+e;case 100:return h(e,":",":"+A)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return h(e,"scroll-","scroll-snap-")+e}return e}function Ge(e,t){for(var i="",n=0;n<e.length;n++)i+=t(e[n],n,e,t)||"";return i}function _i(e,t,i,n){switch(e.type){case Pi:if(e.children.length)break;case Ui:case wt:return e.return=e.return||e.value;case _t:return"";case ei:return e.return=e.value+"{"+Ge(e.children,n)+"}";case Ze:if(!U(e.value=e.props.join(",")))return""}return U(i=Ge(e.children,n))?e.return=e.value+"{"+i+"}":""}function en(e){var t=ni(e);return function(i,n,r,a){for(var s="",u=0;u<t;u++)s+=e[u](i,n,r,a)||"";return s}}function tn(e){return function(t){t.root||(t=t.return)&&e(t)}}function nn(e,t,i,n){if(e.length>-1&&!e.return)switch(e.type){case wt:e.return=oi(e.value,e.length,i);return;case ei:return Ge([W(e,{value:h(e.value,"@","@"+v)})],n);case Ze:if(e.length)return Ki(i=e.props,function(r){switch(K(r,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Y(W(e,{props:[h(r,/:(read-\w+)/,":"+fe+"$1")]})),Y(W(e,{props:[r]})),dt(e,{props:It(i,n)});break;case"::placeholder":Y(W(e,{props:[h(r,/:(plac\w+)/,":"+v+"input-$1")]})),Y(W(e,{props:[h(r,/:(plac\w+)/,":"+fe+"$1")]})),Y(W(e,{props:[h(r,/:(plac\w+)/,A+"input-$1")]})),Y(W(e,{props:[r]})),dt(e,{props:It(i,n)});break}return""})}}var rn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},N={},oe=typeof process<"u"&&N!==void 0&&(N.REACT_APP_SC_ATTR||N.SC_ATTR)||"data-styled",ai="active",si="data-styled-version",Je="6.1.14",bt=`/*!sc*/
`,Qe=typeof window<"u"&&"HTMLElement"in window,on=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&N!==void 0&&N.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&N.REACT_APP_SC_DISABLE_SPEEDY!==""?N.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&N.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&N!==void 0&&N.SC_DISABLE_SPEEDY!==void 0&&N.SC_DISABLE_SPEEDY!==""&&N.SC_DISABLE_SPEEDY!=="false"&&N.SC_DISABLE_SPEEDY),Ye=Object.freeze([]),ae=Object.freeze({});function an(e,t,i){return i===void 0&&(i=ae),e.theme!==i.theme&&e.theme||t||i.theme}var ci=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),sn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cn=/(^-|-$)/g;function $t(e){return e.replace(sn,"-").replace(cn,"")}var ln=/(a)(d)/gi,ke=52,zt=function(e){return String.fromCharCode(e+(e>25?39:97))};function ht(e){var t,i="";for(t=Math.abs(e);t>ke;t=t/ke|0)i=zt(t%ke)+i;return(zt(t%ke)+i).replace(ln,"$1-$2")}var ot,li=5381,ie=function(e,t){for(var i=t.length;i;)e=33*e^t.charCodeAt(--i);return e},di=function(e){return ie(li,e)};function dn(e){return ht(di(e)>>>0)}function un(e){return e.displayName||e.name||"Component"}function at(e){return typeof e=="string"&&!0}var ui=typeof Symbol=="function"&&Symbol.for,pi=ui?Symbol.for("react.memo"):60115,pn=ui?Symbol.for("react.forward_ref"):60112,hn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hi={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fn=((ot={})[pn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ot[pi]=hi,ot);function Ot(e){return("type"in(t=e)&&t.type.$$typeof)===pi?hi:"$$typeof"in e?fn[e.$$typeof]:hn;var t}var gn=Object.defineProperty,xn=Object.getOwnPropertyNames,Nt=Object.getOwnPropertySymbols,wn=Object.getOwnPropertyDescriptor,yn=Object.getPrototypeOf,Dt=Object.prototype;function mi(e,t,i){if(typeof t!="string"){if(Dt){var n=yn(t);n&&n!==Dt&&mi(e,n,i)}var r=xn(t);Nt&&(r=r.concat(Nt(t)));for(var a=Ot(e),s=Ot(t),u=0;u<r.length;++u){var d=r[u];if(!(d in mn||i&&i[d]||s&&d in s||a&&d in a)){var g=wn(t,d);try{gn(e,d,g)}catch{}}}}return e}function se(e){return typeof e=="function"}function vt(e){return typeof e=="object"&&"styledComponentId"in e}function H(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Lt(e,t){if(e.length===0)return"";for(var i=e[0],n=1;n<e.length;n++)i+=e[n];return i}function xe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function mt(e,t,i){if(i===void 0&&(i=!1),!i&&!xe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=mt(e[n],t[n]);else if(xe(t))for(var n in t)e[n]=mt(e[n],t[n]);return e}function Ct(e,t){Object.defineProperty(e,"toString",{value:t})}function we(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var bn=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var i=0,n=0;n<t;n++)i+=this.groupSizes[n];return i},e.prototype.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;t>=a;)if((a<<=1)<0)throw we(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var s=r;s<a;s++)this.groupSizes[s]=0}for(var u=this.indexOfGroup(t+1),d=(s=0,i.length);s<d;s++)this.tag.insertRule(u,i[s])&&(this.groupSizes[t]++,u++)},e.prototype.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],n=this.indexOfGroup(t),r=n+i;this.groupSizes[t]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var n=this.groupSizes[t],r=this.indexOfGroup(t),a=r+n,s=r;s<a;s++)i+="".concat(this.tag.getRule(s)).concat(bt);return i},e}(),Oe=new Map,Ve=new Map,Ne=1,Se=function(e){if(Oe.has(e))return Oe.get(e);for(;Ve.has(Ne);)Ne++;var t=Ne++;return Oe.set(e,t),Ve.set(t,e),t},vn=function(e,t){Ne=t+1,Oe.set(e,t),Ve.set(t,e)},Cn="style[".concat(oe,"][").concat(si,'="').concat(Je,'"]'),An=new RegExp("^".concat(oe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jn=function(e,t,i){for(var n,r=i.split(","),a=0,s=r.length;a<s;a++)(n=r[a])&&e.registerName(t,n)},kn=function(e,t){for(var i,n=((i=t.textContent)!==null&&i!==void 0?i:"").split(bt),r=[],a=0,s=n.length;a<s;a++){var u=n[a].trim();if(u){var d=u.match(An);if(d){var g=0|parseInt(d[1],10),p=d[2];g!==0&&(vn(p,g),jn(e,p,d[3]),e.getTag().insertRules(g,r)),r.length=0}else r.push(u)}}},Ut=function(e){for(var t=document.querySelectorAll(Cn),i=0,n=t.length;i<n;i++){var r=t[i];r&&r.getAttribute(oe)!==ai&&(kn(e,r),r.parentNode&&r.parentNode.removeChild(r))}};function Sn(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var fi=function(e){var t=document.head,i=e||t,n=document.createElement("style"),r=function(u){var d=Array.from(u.querySelectorAll("style[".concat(oe,"]")));return d[d.length-1]}(i),a=r!==void 0?r.nextSibling:null;n.setAttribute(oe,ai),n.setAttribute(si,Je);var s=Sn();return s&&n.setAttribute("nonce",s),i.insertBefore(n,a),n},En=function(){function e(t){this.element=fi(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var n=document.styleSheets,r=0,a=n.length;r<a;r++){var s=n[r];if(s.ownerNode===i)return s}throw we(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var i=this.sheet.cssRules[t];return i&&i.cssText?i.cssText:""},e}(),Bn=function(){function e(t){this.element=fi(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,i){if(t<=this.length&&t>=0){var n=document.createTextNode(i);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Rn=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Pt=Qe,In={isServer:!Qe,useCSSOMInjection:!on},gi=function(){function e(t,i,n){t===void 0&&(t=ae),i===void 0&&(i={});var r=this;this.options=z(z({},In),t),this.gs=i,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Qe&&Pt&&(Pt=!1,Ut(this)),Ct(this,function(){return function(a){for(var s=a.getTag(),u=s.length,d="",g=function(x){var y=function(R){return Ve.get(R)}(x);if(y===void 0)return"continue";var b=a.names.get(y),k=s.getGroup(x);if(b===void 0||!b.size||k.length===0)return"continue";var B="".concat(oe,".g").concat(x,'[id="').concat(y,'"]'),O="";b!==void 0&&b.forEach(function(R){R.length>0&&(O+="".concat(R,","))}),d+="".concat(k).concat(B,'{content:"').concat(O,'"}').concat(bt)},p=0;p<u;p++)g(p);return d}(r)})}return e.registerId=function(t){return Se(t)},e.prototype.rehydrate=function(){!this.server&&Qe&&Ut(this)},e.prototype.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new e(z(z({},this.options),t),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(i){var n=i.useCSSOMInjection,r=i.target;return i.isServer?new Rn(r):n?new En(r):new Bn(r)}(this.options),new bn(t)));var t},e.prototype.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},e.prototype.registerName=function(t,i){if(Se(t),this.names.has(t))this.names.get(t).add(i);else{var n=new Set;n.add(i),this.names.set(t,n)}},e.prototype.insertRules=function(t,i,n){this.registerName(t,i),this.getTag().insertRules(Se(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Se(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Tn=/&/g,Mn=/^\s*\/\/.*$/gm;function xi(e,t){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(t," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(t," ")),i.props=i.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=xi(i.children,t)),i})}function $n(e){var t,i,n,r=ae,a=r.options,s=a===void 0?ae:a,u=r.plugins,d=u===void 0?Ye:u,g=function(y,b,k){return k.startsWith(i)&&k.endsWith(i)&&k.replaceAll(i,"").length>0?".".concat(t):y},p=d.slice();p.push(function(y){y.type===Ze&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(Tn,i).replace(n,g))}),s.prefix&&p.push(nn),p.push(_i);var x=function(y,b,k,B){b===void 0&&(b=""),k===void 0&&(k=""),B===void 0&&(B="&"),t=B,i=b,n=new RegExp("\\".concat(i,"\\b"),"g");var O=y.replace(Mn,""),R=Ji(k||b?"".concat(k," ").concat(b," { ").concat(O," }"):O);s.namespace&&(R=xi(R,s.namespace));var S=[];return Ge(R,en(p.concat(tn(function(j){return S.push(j)})))),S};return x.hash=d.length?d.reduce(function(y,b){return b.name||we(15),ie(y,b.name)},li).toString():"",x}var zn=new gi,ft=$n(),wi=ge.createContext({shouldForwardProp:void 0,styleSheet:zn,stylis:ft});wi.Consumer;ge.createContext(void 0);function Ft(){return P.useContext(wi)}var On=function(){function e(t,i){var n=this;this.inject=function(r,a){a===void 0&&(a=ft);var s=n.name+a.hash;r.hasNameForId(n.id,s)||r.insertRules(n.id,s,a(n.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=i,Ct(this,function(){throw we(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ft),this.name+t.hash},e}(),Nn=function(e){return e>="A"&&e<="Z"};function Kt(e){for(var t="",i=0;i<e.length;i++){var n=e[i];if(i===1&&n==="-"&&e[0]==="-")return e;Nn(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var yi=function(e){return e==null||e===!1||e===""},bi=function(e){var t,i,n=[];for(var r in e){var a=e[r];e.hasOwnProperty(r)&&!yi(a)&&(Array.isArray(a)&&a.isCss||se(a)?n.push("".concat(Kt(r),":"),a,";"):xe(a)?n.push.apply(n,Ke(Ke(["".concat(r," {")],bi(a),!1),["}"],!1)):n.push("".concat(Kt(r),": ").concat((t=r,(i=a)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||t in rn||t.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return n};function X(e,t,i,n){if(yi(e))return[];if(vt(e))return[".".concat(e.styledComponentId)];if(se(e)){if(!se(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var r=e(t);return X(r,t,i,n)}var a;return e instanceof On?i?(e.inject(i,n),[e.getName(n)]):[e]:xe(e)?bi(e):Array.isArray(e)?Array.prototype.concat.apply(Ye,e.map(function(s){return X(s,t,i,n)})):[e.toString()]}function Dn(e){for(var t=0;t<e.length;t+=1){var i=e[t];if(se(i)&&!vt(i))return!1}return!0}var Ln=di(Je),Un=function(){function e(t,i,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Dn(t),this.componentId=i,this.baseHash=ie(Ln,i),this.baseStyle=n,gi.registerId(i)}return e.prototype.generateAndInjectStyles=function(t,i,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,i,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))r=H(r,this.staticRulesId);else{var a=Lt(X(this.rules,t,i,n)),s=ht(ie(this.baseHash,a)>>>0);if(!i.hasNameForId(this.componentId,s)){var u=n(a,".".concat(s),void 0,this.componentId);i.insertRules(this.componentId,s,u)}r=H(r,s),this.staticRulesId=s}else{for(var d=ie(this.baseHash,n.hash),g="",p=0;p<this.rules.length;p++){var x=this.rules[p];if(typeof x=="string")g+=x;else if(x){var y=Lt(X(x,t,i,n));d=ie(d,y+p),g+=y}}if(g){var b=ht(d>>>0);i.hasNameForId(this.componentId,b)||i.insertRules(this.componentId,b,n(g,".".concat(b),void 0,this.componentId)),r=H(r,b)}}return r},e}(),vi=ge.createContext(void 0);vi.Consumer;var st={};function Pn(e,t,i){var n=vt(e),r=e,a=!at(e),s=t.attrs,u=s===void 0?Ye:s,d=t.componentId,g=d===void 0?function(E,T){var C=typeof E!="string"?"sc":$t(E);st[C]=(st[C]||0)+1;var w="".concat(C,"-").concat(dn(Je+C+st[C]));return T?"".concat(T,"-").concat(w):w}(t.displayName,t.parentComponentId):d,p=t.displayName,x=p===void 0?function(E){return at(E)?"styled.".concat(E):"Styled(".concat(un(E),")")}(e):p,y=t.displayName&&t.componentId?"".concat($t(t.displayName),"-").concat(t.componentId):t.componentId||g,b=n&&r.attrs?r.attrs.concat(u).filter(Boolean):u,k=t.shouldForwardProp;if(n&&r.shouldForwardProp){var B=r.shouldForwardProp;if(t.shouldForwardProp){var O=t.shouldForwardProp;k=function(E,T){return B(E,T)&&O(E,T)}}else k=B}var R=new Un(i,y,n?r.componentStyle:void 0);function S(E,T){return function(C,w,J){var ye=C.attrs,Si=C.componentStyle,Ei=C.defaultProps,Bi=C.foldedComponentIds,Ri=C.styledComponentId,Ii=C.target,Ti=ge.useContext(vi),Mi=Ft(),et=C.shouldForwardProp||Mi.shouldForwardProp,kt=an(w,Ti,Ei)||ae,F=function(ve,ue,Ce){for(var pe,Z=z(z({},ue),{className:void 0,theme:Ce}),it=0;it<ve.length;it+=1){var Ae=se(pe=ve[it])?pe(Z):pe;for(var Q in Ae)Z[Q]=Q==="className"?H(Z[Q],Ae[Q]):Q==="style"?z(z({},Z[Q]),Ae[Q]):Ae[Q]}return ue.className&&(Z.className=H(Z.className,ue.className)),Z}(ye,w,kt),be=F.as||Ii,de={};for(var G in F)F[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&F.theme===kt||(G==="forwardedAs"?de.as=F.forwardedAs:et&&!et(G,be)||(de[G]=F[G]));var St=function(ve,ue){var Ce=Ft(),pe=ve.generateAndInjectStyles(ue,Ce.styleSheet,Ce.stylis);return pe}(Si,F),tt=H(Bi,Ri);return St&&(tt+=" "+St),F.className&&(tt+=" "+F.className),de[at(be)&&!ci.has(be)?"class":"className"]=tt,J&&(de.ref=J),P.createElement(be,de)}(j,E,T)}S.displayName=x;var j=ge.forwardRef(S);return j.attrs=b,j.componentStyle=R,j.displayName=x,j.shouldForwardProp=k,j.foldedComponentIds=n?H(r.foldedComponentIds,r.styledComponentId):"",j.styledComponentId=y,j.target=n?r.target:e,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=n?function(T){for(var C=[],w=1;w<arguments.length;w++)C[w-1]=arguments[w];for(var J=0,ye=C;J<ye.length;J++)mt(T,ye[J],!0);return T}({},r.defaultProps,E):E}}),Ct(j,function(){return".".concat(j.styledComponentId)}),a&&mi(j,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function Gt(e,t){for(var i=[e[0]],n=0,r=t.length;n<r;n+=1)i.push(t[n],e[n+1]);return i}var Qt=function(e){return Object.assign(e,{isCss:!0})};function Fn(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(se(e)||xe(e))return Qt(X(Gt(Ye,Ke([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?X(n):Qt(X(Gt(n,t)))}function gt(e,t,i){if(i===void 0&&(i=ae),!t)throw we(1,t);var n=function(r){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,i,Fn.apply(void 0,Ke([r],a,!1)))};return n.attrs=function(r){return gt(e,t,z(z({},i),{attrs:Array.prototype.concat(i.attrs,r).filter(Boolean)}))},n.withConfig=function(r){return gt(e,t,z(z({},i),r))},n}var Ci=function(e){return gt(Pn,e)},c=Ci;ci.forEach(function(e){c[e]=Ci(e)});const V={mobile:"450px",smallTablet:"750px",mediumTablet:"1000px",tablet:"1180px",desktop:"1280px",largeDesktop:"1440px"},l={mobile:`(max-width: ${V.mobile})`,mediumTablet:`(min-width: ${V.smallTablet} and max-width: ${V.mediumTablet})`,tablet:`(min-width: ${V.mediumTablet}) and (max-width: ${V.tablet})`,desktop:`(min-width: ${V.tablet}) and (max-width: ${V.desktop})`,largeDesktop:`(min-width: ${V.largeDesktop})`},Kn=c.div`
    display: inline-flex;
    align-items: center;
    gap: 30px;
    justify-content: space-between;


    @media ${l.mobile} {
        gap: 10px;
    }


    @media ${l.tablet} {
        gap: 0.6rem;
    }


    @media ${l.desktop} {
        gap: 1rem;
    }
`,Gn="data:image/svg+xml,%3csvg%20width='70'%20height='70'%20viewBox='0%200%2070%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='70'%20height='70'%20fill='url(%23pattern0_100_9)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_100_9'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_100_9'%20transform='scale(0.01)'/%3e%3c/pattern%3e%3cimage%20id='image0_100_9'%20width='100'%20height='100'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADHUlEQVR4nO3dTW7TQBjGcW9mpj0DcAI4CBVS2bFAcAPKpZD8TiM180Ygs+JDAvEhgQLqDQonoN1RiWrSBjVuCEk8rh9Pnr/kXeWp5peZ1G4UFwVjjDHGGGOM9Txb6j0r4af1+sPKcIfjdVyEcF7/xMN6PeJ4HTfFmB4cr+MIAhZBwCIIWAQBiyDXVVU5W+pT68Mn58NJfeJ5aG0OwsnFXO3FuUtqsT14fsOJfuOk63ovPNFxnMM0GlXliKHNdwDRcZKVErcprgxNsyXL6EljECf6ubY3vli0/Pimft72s4Obzmt1eT6shI9F05zo8eWTxoEW/jxvnfxtS8Kt2RUSfhVNW3WCeXOx5RfoyiAy3Jncevd65MrR3ca/QM/H6xyEzUYQsAgCFkHAIghYBAGLIGARZNNAeGijOSCIx3oREcR3j0AQv0EgjU+4YTmCYEUQsAgCFkHAIghYBAGLIGARBCyCgEUQsAgCVu9BjD+4YyW8d6KHttTd1Oe3Mro/ObfouzhW0XK9B7ERYzqe6KmR8DDVueO54jmn548oRcv1HsSJHs6MmQiljnF+hO9Fy/UexJa6e2XiGqLMxRA9bWNLzA4kZvaHD5yE3/UJ3JLwuEh1rv3ho+IaygIkFUrXGFmBNEVBwMgOZF0UFIwsQVZFQcLIFmRZFDSMrEH+h4KIkT3IomuK1NcuqcoeJDZ3NYCtjI0CWYgChBEjiKx3Rd9WGwFiltmyQFCyBzF8U8cBMQv+tE15QzJl2a4Qs8R1BiJKliBmhYs+NJTsQMwaV+BIKFmBmAa3Q1BQsgExCe5NIaBkAWIS3ijsGqX3IJYfcsACcfXvB27zY0Dxq1tbrv8rRPRtaox/flDO65ui5XoPYsrRbSvhtRP90spHSSdbYvhqfXgVxyparvcguUUQsAgCFkHAIghYBAGLIGARBCyCgEWQ7EFWfKALa/uBLlceeaQVUZbDsD68TP/IIx/26suOh3b3ULCLx+aNiaDNXojxfy+DgU35YEmieIQHS04bDGxccnEfrL/R89B5CMdW9MNkm0q1MhhjjDHGGGOsSN8ZI8kop27DEKcAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e",Qn="data:image/svg+xml,%3csvg%20width='70'%20height='70'%20viewBox='0%200%2070%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='70'%20height='70'%20fill='url(%23pattern0_100_8)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_100_8'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_100_8'%20transform='scale(0.015625)'/%3e%3c/pattern%3e%3cimage%20id='image0_100_8'%20width='64'%20height='64'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE80lEQVR4nO1bWYhcRRR9xnlVPTOJoOCKK+5ExQ1EUXBHREFQMArCIK4/CRqCoOIoLojijwsakIzOZN69U9p9b3fCQBRpk/ihCILBhaB+KG6JoGZRTKLTUh1jOtO3et7tBZ1JFdTX1Dt169xT1bfOm5ckse1tg1n5cIt0dzpRuiVxziRzpTln/Jos0F2Do8XDxDEFVznWAG+2yDXfDfD6pFrtS2Z7q1b7DNB7DevaXAA6pmmcRX5yz6CGfmUyy5vNylc1r4ueaBpokEeaBgINJbO8+TVMX5dfa9NAEwngqAAbtwBPPwT37JlRcYM5ZyzS59Iz4U6fhH5dLFJRibVlwK0+QsIywA+Fnst/BmD9INzan/FRgUmW6QKu410aOKyu0GKZjBdLWP1jxaMt0vauEGCQlkqTeOYt8K/KoMclLK8IC7xBraTly1ORTCTXkri8BBikH5PJSStNYoBWKjP/my+2RCykpWolIV8mYRWALrFAU10hwGb0XGCSi2aapGlSoAeC5bdeSRhUEtLHM8bSUR0wPDzPIn2oXPwXLZT0ulpJK988TsbiJbni6YQAC6V7tXI1SNdKARdc6cI2lPSghOUvORb4l94S4NwhBuknHQFUlgKuKwn4Ax2R/GUyUi3I2acVCpz2CDBALyvl+ocZX3WyFLC/mqqVBKXrJKzU0XkW+a+eEpBmfI4F/lNJwONi9sdXH9x49c4Z9BoRa3h4nkF6X4mlJKBWO8AArVVO8k0yumZQitkAv6QjkncYKJ0iKgnpDrWStAQUgG5TT5LxTVLAKRbPsEC7lEp6Ssz+2ORBBuiH3hLAvMAgfaebgN4RA96d/XdVWEDfJs7ND2A9r128mgCL/KwyW7tSR2eK2Qe6VRtsirxIxMrKCy3yzp4TkGbls/wpm7cbKJ0eyr515ZM0WClWzvXnj4TlL2i5MIAe7fgMmM0tWmIQPcGhuAUwngG19g5BpGf8y5FWvT/jC0IHUOro7Jme36dn5ctDp76F0okqLP9Sh3lBZ2cA5ilUeJkUsH/91MqXCxQ9K8LmK2/UxUYfJc4d2FMCjK/SKpUBMWNIbygD3jIwVjxS6/AGirEpb43tVk4vFQByneCl3IaSlrTj8AYS89q/sfSMAOANXmJdcXiBPg06vMATSqytjUrqGQEmYHOZjO/TK6l0tYRVcKWL9ZYZ378vgT0gwACt7dSX29vJSVj1AyyHwzutfzZdSd0nAGjKm5li9vXb6HcLdLyIlfFitZKy8jXTcXqgABIz1pfx+Rpf7p9AHu6ikooSls1Kt3eTgJ2iydmew/tV0OFFflWtJFc+QSQAebRrBBikF8VJJvhOrVwN0vXdcHjrWMCPSFh1Gx9oW3cIAN4mvopuy+Glt7rm8AJ9HSrGDPArAfXpCTDIw+IkSC8o5brDOD5VwrIT3LRfc5B5g4TVysZXE2CQN/mLRfMk5YVqhxf56aDDi/y9Mvtvi1jexkde12I9uW+D2y3Sz3aC7xEzBkz1v+fuvDHk8FqkxzRY/hWdGa+cJmEZpBsbxjaV0dETxGiKjuTbAhBd4aFklrfoCkN0hYfirwDGn8FarAMwFkK1WAliLIVr8S6A8TJUi5chjJehkaZLg9nfb4N2f/9wsuA/nUXe1MDSurnz6Syvb/Q3xU9nfZvv3KH+v7hToJvn3MfTyIv82vwa/+twkv9T+xunvWKIwzj4xAAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e",Vn="data:image/svg+xml,%3csvg%20width='70'%20height='70'%20viewBox='0%200%2070%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='70'%20height='70'%20fill='url(%23pattern0_100_7)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_100_7'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_100_7'%20transform='scale(0.01)'/%3e%3c/pattern%3e%3cimage%20id='image0_100_7'%20width='100'%20height='100'%20xlink:href='data:image/png;base64,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'/%3e%3c/defs%3e%3c/svg%3e",Wn=""+new URL("insurance-B982zLax.svg",import.meta.url).href,Zn="data:image/svg+xml,%3csvg%20width='70'%20height='70'%20viewBox='0%200%2070%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='70'%20height='70'%20fill='url(%23pattern0_100_16)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_100_16'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_100_16'%20transform='scale(0.01)'/%3e%3c/pattern%3e%3cimage%20id='image0_100_16'%20width='100'%20height='100'%20xlink:href='data:image/png;base64,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'/%3e%3c/defs%3e%3c/svg%3e",Hn="data:image/svg+xml,%3csvg%20width='70'%20height='70'%20viewBox='0%200%2070%2070'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='70'%20height='70'%20fill='url(%23pattern0_100_17)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_100_17'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_100_17'%20transform='scale(0.01)'/%3e%3c/pattern%3e%3cimage%20id='image0_100_17'%20width='100'%20height='100'%20xlink:href='data:image/png;base64,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'/%3e%3c/defs%3e%3c/svg%3e",qn="data:image/svg+xml,%3csvg%20width='26'%20height='41'%20viewBox='0%200%2026%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20y1='-3.5'%20x2='29'%20y2='-3.5'%20transform='matrix(0.724138%200.689655%200.689655%20-0.724138%205%200)'%20stroke='%2307ACBB'%20stroke-width='7'/%3e%3cline%20y1='-3.5'%20x2='29'%20y2='-3.5'%20transform='matrix(-0.724138%200.689655%200.689655%200.724138%2026%2021)'%20stroke='%2307ACBB'%20stroke-width='7'/%3e%3crect%20width='1'%20height='1'%20transform='matrix(-1%200%200%201%2026%2020)'%20fill='%2307ACBB'/%3e%3c/svg%3e",Xn="data:image/svg+xml,%3csvg%20width='26'%20height='41'%20viewBox='0%200%2026%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20y1='-3.5'%20x2='29'%20y2='-3.5'%20transform='matrix(0.724138%200.689655%200.689655%20-0.724138%205%200)'%20stroke='white'%20stroke-width='7'/%3e%3cline%20y1='-3.5'%20x2='29'%20y2='-3.5'%20transform='matrix(-0.724138%200.689655%200.689655%200.724138%2026%2021)'%20stroke='white'%20stroke-width='7'/%3e%3crect%20x='-0.25'%20y='0.25'%20width='0.5'%20height='0.5'%20transform='matrix(-1%200%200%201%2025.5%2020)'%20fill='%2307ACBB'%20stroke='white'%20stroke-width='0.5'/%3e%3c/svg%3e",Jn="data:image/svg+xml,%3csvg%20width='26'%20height='41'%20viewBox='0%200%2026%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='23.4138'%20y1='2.53448'%20x2='2.41379'%20y2='22.5345'%20stroke='%2307ACBB'%20stroke-width='7'/%3e%3cline%20x1='2.41379'%20y1='18.4655'%20x2='23.4138'%20y2='38.4655'%20stroke='%2307ACBB'%20stroke-width='7'/%3e%3crect%20y='20'%20width='1'%20height='1'%20fill='%2307ACBB'/%3e%3c/svg%3e",Yn="data:image/svg+xml,%3csvg%20width='26'%20height='41'%20viewBox='0%200%2026%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='23.4138'%20y1='2.53448'%20x2='2.41379'%20y2='22.5345'%20stroke='white'%20stroke-width='7'/%3e%3cline%20x1='2.41379'%20y1='18.4655'%20x2='23.4138'%20y2='38.4655'%20stroke='white'%20stroke-width='7'/%3e%3crect%20x='0.25'%20y='20.25'%20width='0.5'%20height='0.5'%20fill='%2307ACBB'%20stroke='white'%20stroke-width='0.5'/%3e%3c/svg%3e",_n="data:image/svg+xml,%3csvg%20width='45'%20height='45'%20viewBox='0%200%2045%2045'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='8'%20y1='8.5'%20x2='38'%20y2='8.5'%20stroke='%2307A8B4'%20stroke-width='3'/%3e%3cline%20x1='8'%20y1='28.5'%20x2='38'%20y2='28.5'%20stroke='%2307A8B4'%20stroke-width='3'/%3e%3cline%20x1='8'%20y1='18.5'%20x2='38'%20y2='18.5'%20stroke='%2307A8B4'%20stroke-width='3'/%3e%3c/svg%3e",er="data:image/svg+xml,%3csvg%20width='45'%20height='45'%20viewBox='0%200%2045%2045'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='14.1169'%20y1='9.99869'%20x2='34.1432'%20y2='32.3358'%20stroke='%2307A8B4'%20stroke-width='3'/%3e%3cline%20x1='12.8287'%20y1='33.489'%20x2='31.5695'%20y2='10.063'%20stroke='%2307A8B4'%20stroke-width='3'/%3e%3c/svg%3e",tr="data:image/svg+xml,%3csvg%20width='45'%20height='34'%20viewBox='0%200%2045%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1.875%200L0%201.875V31.875L1.875%2033.75H43.125L45%2031.875V1.875L43.125%200H1.875ZM3.75%206.11375V30H41.25V6.11313L22.4997%2023.159L3.75%206.11375ZM38.2748%203.75H6.72465L22.4997%2018.091L38.2748%203.75Z'%20fill='%2307A8B4'/%3e%3c/svg%3e",ir="data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30%2045C38.2842%2045%2045%2038.2842%2045%2030C45%2021.7157%2038.2842%2015%2030%2015C21.7157%2015%2015%2021.7157%2015%2030C15%2038.2842%2021.7157%2045%2030%2045ZM30%2040C35.5228%2040%2040%2035.5228%2040%2030C40%2024.4771%2035.5228%2020%2030%2020C24.4771%2020%2020%2024.4771%2020%2030C20%2035.5228%2024.4771%2040%2030%2040Z'%20fill='%2307A8B4'/%3e%3cpath%20d='M45%2012.5C43.6193%2012.5%2042.5%2013.6193%2042.5%2015C42.5%2016.3807%2043.6193%2017.5%2045%2017.5C46.3807%2017.5%2047.5%2016.3807%2047.5%2015C47.5%2013.6193%2046.3807%2012.5%2045%2012.5Z'%20fill='%2307A8B4'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.1349%2010.6902C2.5%2013.8988%202.5%2018.0992%202.5%2026.5V33.5C2.5%2041.9007%202.5%2046.1012%204.1349%2049.3097C5.573%2052.1322%207.8677%2054.427%2010.6902%2055.865C13.8988%2057.5%2018.0992%2057.5%2026.5%2057.5H33.5C41.9007%2057.5%2046.1012%2057.5%2049.3097%2055.865C52.1322%2054.427%2054.427%2052.1322%2055.865%2049.3097C57.5%2046.1012%2057.5%2041.9007%2057.5%2033.5V26.5C57.5%2018.0992%2057.5%2013.8988%2055.865%2010.6902C54.427%207.8677%2052.1322%205.573%2049.3097%204.1349C46.1012%202.5%2041.9007%202.5%2033.5%202.5H26.5C18.0992%202.5%2013.8988%202.5%2010.6902%204.1349C7.8677%205.573%205.573%207.8677%204.1349%2010.6902ZM33.5%207.5H26.5C22.2171%207.5%2019.3056%207.5039%2017.0552%207.68775C14.8631%207.86685%2013.7421%208.19148%2012.9601%208.58993C11.0785%209.54868%209.54868%2011.0785%208.58993%2012.9601C8.19148%2013.7421%207.86685%2014.8631%207.68775%2017.0552C7.5039%2019.3056%207.5%2022.2171%207.5%2026.5V33.5C7.5%2037.783%207.5039%2040.6943%207.68775%2042.9448C7.86685%2045.137%208.19148%2046.258%208.58993%2047.04C9.54868%2048.9215%2011.0785%2050.4512%2012.9601%2051.41C13.7421%2051.8085%2014.8631%2052.1333%2017.0552%2052.3123C19.3056%2052.496%2022.2171%2052.5%2026.5%2052.5H33.5C37.783%2052.5%2040.6943%2052.496%2042.9448%2052.3123C45.137%2052.1333%2046.258%2051.8085%2047.04%2051.41C48.9215%2050.4512%2050.4512%2048.9215%2051.41%2047.04C51.8085%2046.258%2052.1333%2045.137%2052.3123%2042.9448C52.496%2040.6943%2052.5%2037.783%2052.5%2033.5V26.5C52.5%2022.2171%2052.496%2019.3056%2052.3123%2017.0552C52.1333%2014.8631%2051.8085%2013.7421%2051.41%2012.9601C50.4512%2011.0785%2048.9215%209.54868%2047.04%208.58993C46.258%208.19148%2045.137%207.86685%2042.9448%207.68775C40.6943%207.5039%2037.783%207.5%2033.5%207.5Z'%20fill='%2307A8B4'/%3e%3c/svg%3e",nr=""+new URL("logo-BPOdVUfh.svg",import.meta.url).href,rr="data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.035%2020.0153C15.3207%2017.756%2018.2569%2014.6854%2020.5872%2015.0261L20.5835%2015.0224C22.8513%2015.4533%2024.6465%2019.3565%2025.6588%2021.1116C26.376%2022.385%2025.9103%2023.6753%2025.2413%2024.2197C24.3388%2024.9471%2022.9275%2025.9508%2023.2236%2026.9585C23.75%2028.75%2030%2035%2033.074%2036.7768C34.2375%2037.4493%2035.0813%2035.6755%2035.8018%2034.7668C36.3253%2034.0678%2037.6165%2033.65%2038.887%2034.34C40.7845%2035.445%2042.572%2036.7293%2044.225%2038.175C45.0505%2038.865%2045.2443%2039.8848%2044.6723%2040.9625C43.6648%2042.8608%2040.7508%2045.364%2038.6355%2044.8553C34.941%2043.967%2020%2038.175%2015.2008%2021.395C14.9309%2020.6012%2014.9989%2020.3011%2015.035%2020.0153Z'%20fill='%2307A8B4'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30%2057.5C26.941%2057.5%2025.2485%2057.1717%2022.5%2056.25L17.2361%2058.882C13.9116%2060.5442%2010%2058.1268%2010%2054.4098V48.75C4.61637%2043.73%202.5%2037.9418%202.5%2030C2.5%2014.8122%2014.8122%202.5%2030%202.5C45.1877%202.5%2057.5%2014.8122%2057.5%2030C57.5%2045.1877%2045.1877%2057.5%2030%2057.5ZM15%2046.5758L13.4099%2045.093C9.22717%2041.193%207.5%2036.8327%207.5%2030C7.5%2017.5736%2017.5736%207.5%2030%207.5C42.4265%207.5%2052.5%2017.5736%2052.5%2030C52.5%2042.4265%2042.4265%2052.5%2030%2052.5C27.5357%2052.5%2026.38%2052.2775%2024.0899%2051.5095L22.1212%2050.8493L15%2054.4098V46.5758Z'%20fill='%2307A8B4'/%3e%3c/svg%3e",or="data:image/svg+xml,%3csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.035%2020.0153C15.3207%2017.756%2018.2569%2014.6854%2020.5872%2015.0261L20.5835%2015.0224C22.8513%2015.4533%2024.6465%2019.3565%2025.6588%2021.1116C26.376%2022.385%2025.9103%2023.6753%2025.2413%2024.2197C24.3388%2024.9471%2022.9275%2025.9508%2023.2236%2026.9585C23.75%2028.75%2030%2035%2033.074%2036.7768C34.2375%2037.4493%2035.0813%2035.6755%2035.8018%2034.7668C36.3253%2034.0678%2037.6165%2033.65%2038.887%2034.34C40.7845%2035.445%2042.572%2036.7293%2044.225%2038.175C45.0505%2038.865%2045.2443%2039.8848%2044.6723%2040.9625C43.6648%2042.8608%2040.7508%2045.364%2038.6355%2044.8553C34.941%2043.967%2020%2038.175%2015.2008%2021.395C14.9309%2020.6012%2014.9989%2020.3011%2015.035%2020.0153Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30%2057.5C26.941%2057.5%2025.2485%2057.1717%2022.5%2056.25L17.2361%2058.882C13.9116%2060.5442%2010%2058.1268%2010%2054.4098V48.75C4.61637%2043.73%202.5%2037.9418%202.5%2030C2.5%2014.8122%2014.8122%202.5%2030%202.5C45.1877%202.5%2057.5%2014.8122%2057.5%2030C57.5%2045.1877%2045.1877%2057.5%2030%2057.5ZM15%2046.5758L13.4099%2045.093C9.22717%2041.193%207.5%2036.8327%207.5%2030C7.5%2017.5736%2017.5736%207.5%2030%207.5C42.4265%207.5%2052.5%2017.5736%2052.5%2030C52.5%2042.4265%2042.4265%2052.5%2030%2052.5C27.5357%2052.5%2026.38%2052.2775%2024.0899%2051.5095L22.1212%2050.8493L15%2054.4098V46.5758Z'%20fill='white'/%3e%3c/svg%3e",$={email:tr,instagram:ir,logo:nr,whatsApp:rr,whatsAppWhite:or,availability:Gn,barrier:Qn,clock:Vn,insurance:Wn,padlock:Zn,telephone:Hn,rightArrow:qn,rightArrowWhite:Xn,leftArrow:Jn,leftArrowWhite:Yn,burger:_n,close:er},We={iconWidth:"35px",iconHeight:"35px"},ar=c.img`
  width: ${We.iconWidth};
  height: ${We.iconHeight};
  background-color: transparent;
  cursor: pointer;
`,ct=({iconPath:e,alt:t,onClick:i})=>o.jsx(ar,{src:e,alt:t,onClick:i}),sr="https://api.whatsapp.com/send/?phone=558899580857&text&type=phone_number&app_absent=0",cr="https://www.instagram.com/acaciotorrespsi/",lr="mailto:acaciofh@gmail.com",Vt=()=>{const e=t=>{window.open(t,"_blank")};return o.jsxs(Kn,{children:[o.jsx(ct,{iconPath:$.whatsApp,alt:"Ícone do WhatsApp",onClick:()=>e(sr)}),o.jsx(ct,{iconPath:$.instagram,alt:"Ícone do Instagram",onClick:()=>e(cr)}),o.jsx(ct,{iconPath:$.email,alt:"Ícone do Email",onClick:()=>e(lr)})]})},m={primary:"#07a8b4",secundary:"#F9F9F9",softWhite:"#F5F5F5",black:"#000",white:"#FFF",gray:"#666",lightGray:"#f2f2f2"},f={char:"1.2rem",label:"1.4rem",subTitle:"1.7rem",title:"2.2rem",section:"3.0rem",charMobile:"0.8rem",labelMobile:"1.1rem",subTitleMobile:"1.3rem",titleMobile:"1.5rem",sectionMobile:"2rem"},Ai={bold:"600",regular:"400",light:"300"},ji={primary:"'Playfair Display', serif",secondary:"'Allura', cursive"},dr=c.div`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`,ur=c.img`
    margin-right: 150px;
    width: ${We.iconWidth};
    height: ${We.iconHeight};


    @media ${l.mobile} {
        margin-right: 120px;
    }
`,pr=c.p`
    position: absolute;
    color: ${m.primary};
    font-size: ${f.subTitle};
    font-family: ${ji.secondary};
    font-style: italic;
    margin-top: 10px;
    margin-left: 20px;


    @media ${l.mobile} {
        font-size: ${f.titleMobile};
    }
`,Wt=()=>o.jsxs(dr,{children:[o.jsx(ur,{src:$.logo,alt:"Logo"}),o.jsx(pr,{children:"Acácio Tórres"})]}),hr=c.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        position: relative;
        width: 20%; // Ocupa toda a largura do NavContainer
        flex-direction: column; // Altera para coluna em dispositivos móveis
        overflow: hidden;
    }
`,mr=c.img`
    display: none; // Esconde o burger menu em telas maiores


    @media (max-width: 1000px) {
        display: flex;
        cursor: pointer;
    }
`,fr=c.ul`
    display: flex;
    flex-direction: row;
    gap: 50px;
    list-style: none;
    align-items: center;
    justify-content: space-around;


    @media (max-width: 1000px) {
        gap: 10px;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column; // Altera para coluna em dispositivos móveis
        min-width: ${({isMenuOpen:e})=>e?"auto":"0px"};
        height: ${({isMenuOpen:e})=>e?"auto":"0px"};
        visibility: ${({isMenuOpen:e})=>e?"visible":"hidden"};
        position: ${({isMenuOpen:e})=>e?"static":"relative"};
        top: 100%; // Deveria posicionar o menu abaixo do ícone do burger
        left: 0;
        background-color: ${m.white}; // Adicione um fundo para garantir visibilidade
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        transform: ${({isMenuOpen:e})=>e?"translateX(0)":"translateX(-100%)"};
        opacity: ${({isMenuOpen:e})=>e?1:0};
    }


    @media ${l.tablet} {
        gap: 30px;
    }
`,_=c.li`
    position: relative;
    cursor: pointer;
    font-size: ${f.char};
    font-weight: ${Ai.bold};
    font-family: ${ji.primary};
    color: ${m.black};
    transition: color 0.3s;
    &:hover {
        color: ${m.gray};
    }


    @media ${l.mobile} {
        width: 100%; // Ocupa toda a largura do NavContainer
        font-size: ${f.labelMobile};
        text-align: center; // Centraliza o texto
        padding: 10px 10px; // Adicione padding para espaçamento
    }


    
    @media ${l.tablet} {
        font-size: ${f.labelMobile};
    }
`,ee=c.span`
    text-decoration: none;
    color: inherit;
`,te="home",De="about",Le="contact",Ue="benefits",Pe="faq",Fe="work",Zt=()=>{const[e,t]=P.useState(!1),i=()=>{t(!e),console.log("Menu state:",!e)},[n,r]=P.useState(`/${te}`),a=d=>{r(d);const g=d.replace("/",""),p=document.getElementById(g);p&&p.scrollIntoView({behavior:"smooth"})},s=()=>{const d=[te,Fe,De,Ue,Pe,Le];let g=te;for(const p of d){const x=document.getElementById(p);if(x){const y=x.getBoundingClientRect();if(y.top<=100&&y.bottom>=100){g=p;break}}}r(`/${g}`)},u=(d,g)=>{let p;return function(...x){clearTimeout(p),p=setTimeout(()=>d.apply(null,x),g)}};return P.useEffect(()=>{s();const d=u(s,0);return window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}},[]),o.jsxs(hr,{children:[o.jsx(mr,{onClick:i,src:e?$.close:$.burger,alt:"Menu"}),o.jsxs(fr,{isMenuOpen:e,children:[o.jsx(_,{onClick:()=>a(`/${te}`),children:o.jsx(ee,{style:{color:n===`/${te}`?m.primary:"inherit"},children:"Home"})}),o.jsx(_,{onClick:()=>a(`/${Fe}`),children:o.jsx(ee,{style:{color:n===`/${Fe}`?m.primary:"inherit"},children:"Meu Trabalho"})}),o.jsx(_,{onClick:()=>a(`/${De}`),children:o.jsx(ee,{style:{color:n===`/${De}`?m.primary:"inherit"},children:"Sobre"})}),o.jsx(_,{onClick:()=>a(`/${Ue}`),children:o.jsx(ee,{style:{color:n===`/${Ue}`?m.primary:"inherit"},children:"Benefícios"})}),o.jsx(_,{onClick:()=>a(`/${Pe}`),children:o.jsx(ee,{style:{color:n===`/${Pe}`?m.primary:"inherit"},children:"FAQ"})}),o.jsx(_,{onClick:()=>a(`/${Le}`),children:o.jsx(ee,{style:{color:n===`/${Le}`?m.primary:"inherit"},children:"Contatos"})})]})]})},gr=c.div`
    display: inline-block;
`,xr=c.header`
    z-index: 9999;
    position: fixed;
    background-color: ${m.white};
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 0;
    height: 70px;
    overflow: hidden;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);

    @media ${l.mobile} {
        max-height: 100px; // Altura automática para mobile
        flex-direction: column;
    }
`,wr=c.div`
    display: flex;
    background-color: ${m.white};
    flex-direction: row;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 20px;
    position: relative;
    margin-left: 5%;


    @media (max-width: 1000px) {
        display: none;
    }
`,yr=c.div`
    display: none;


    @media (max-width: 1000px) {
        display: flex;
        background-color: ${m.white};
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        width: 90%;
        gap: 20px;
        padding: 20px;
        position: relative;
        margin-left: 10%;
    }
`,br=c.div`
    display: none;


    @media (max-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: right;
        cursor: pointer;
        position: fixed;
        width: 100vw;
        height: auto;
        margin-top: 5px;
        margin-left: -80vw;
        z-index: 10000;
    }
`,vr=()=>o.jsxs(gr,{children:[o.jsx(br,{children:o.jsx(Zt,{})}),o.jsxs(xr,{children:[o.jsxs(wr,{children:[o.jsx(Wt,{}),o.jsx(Zt,{}),o.jsx(Vt,{})]}),o.jsxs(yr,{children:[o.jsx(Wt,{}),o.jsx(Vt,{})]})]})]}),Cr=c.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 4%;
    padding-top: 4%;
`,Ar=c.div`
    display: flex;
    flex-direction: column;
    margin-right: 15%;
    margin-top: 10%;


    @media ${l.mobile} {
        margin: 10%;
        margin-top: 25%;
    }
`,jr=c.div`
    display: grid;
    gap: 30px;
    max-width: 39vw;


    @media ${l.desktop} {
        max-width: 42vw;
    }

    
    @media ${l.mobile} {
        max-width: 80vw;
    }
`,lt=c.p`
    font-size: ${f.label};
    width: 100%;
    color: ${m.primary};
    font-weight: ${Ai.bold};


    @media ${l.mobile} {
        text-align: center;
    }
`,kr=c.div`
    margin-top: 4%;
`,Sr=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 3%;
`,Er=c.div`
    display: flex;
    flex-direction: row;
    /* margin-left: 20%;
    margin-top: 4%; */
    gap: 5px;
    cursor: pointer;
    background-color: ${m.primary};
    width: 130px;
    height: 40px;
    color: ${m.white};
    border-radius: 20px;
    align-items: center;
    justify-content: center;


    @media ${l.mobile} {
        width: 150px;
        height: 30px;
    }
`,Br=c.p`
    font-size: ${f.char};


    @media ${l.mobile} {
        font-size: ${f.labelMobile};
    }
`,Rr=c.img`
    width: 20px;
    height: 20px;


    @media ${l.mobile} {
        width: 15px;
        height: 15px;
    }
`,_e=({backgroundColor:e="#07A8b0",color:t="#FFF",marginLeft:i="20%",marginTop:n="4%",iconSrc:r=$.whatsAppWhite})=>{const a=()=>{window.open("https://api.whatsapp.com/send/?phone=558899580857&text&type=phone_number&app_absent=0")};return o.jsxs(Er,{style:{backgroundColor:e,color:t,marginLeft:i,marginTop:n},onClick:a,children:[o.jsx(Br,{children:"Saber mais"}),o.jsx(Rr,{src:r,alt:"Ícone do WhatsApp"})]})},Ir=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;


    @media ${l.mobile} {
        display: none;
    }
`,Tr=c.img`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
`,Mr=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0px;
`,$r=c.p`
    font-size: ${f.char};
    word-wrap: break-word;
    width: 70%;
    text-align: center;
`,At=({imagePath:e,alt:t,legend:i,backgroundColor:n="#07A8b0",color:r="#FFF"})=>o.jsxs(Ir,{children:[o.jsx(Tr,{src:e,alt:t}),o.jsx(Mr,{style:{backgroundColor:n,color:r},children:o.jsx($r,{children:i})})]}),zr=""+new URL("home-Crs8Dc1F.png",import.meta.url).href,Or=""+new URL("about-CjJHMpFW.png",import.meta.url).href,Nr=""+new URL("contact-CGsrFhA8.png",import.meta.url).href,jt={home:zr,about:Or,contact:Nr},Dr=c.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100vw;
    min-height: 0vh;
    top: 0;
`,le=({id:e,children:t})=>o.jsx(Dr,{id:e,children:t}),Lr=()=>o.jsx(le,{id:te,children:o.jsxs(Cr,{children:[o.jsxs(Ar,{children:[o.jsxs(jr,{children:[o.jsx(lt,{children:"Olá, sou Acácio Tôrres, psicólogo com especialização em terapia cognitivo-comportamental, atuo há mais de 15 anos nas áreas de saúde mental e psicologia clínica."}),o.jsx(lt,{style:{color:"black"},children:"Meu objetivo é ajudar pessoas a alcançarem seu bem-estar emocional e construir uma vida mais plena e significativa."}),o.jsx(lt,{children:"Venha comigo dar o primeiro passo para uma nova jornada."})]}),o.jsx(kr,{children:o.jsx(_e,{})})]}),o.jsx(Sr,{children:o.jsx(At,{imagePath:jt.home,alt:"Psicólogo Acácio Tórres",legend:"Raimundo Acácio Costa Tôrres Filho CRP 11ª - 04373"})})]})}),Ur=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:${m.primary};

    @media ${l.mobile} {
        width: 100vw;
    }
`,Pr=c.h1`
    color: white;
    margin-top: 4%;
    font-size: ${f.title};
    overflow: hidden;

    
    @media ${l.mobile} {
        font-size: ${f.sectionMobile};
        text-align: center;
    }
`,Fr=c.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 3%;
    overflow: hidden;


    @media ${l.mobile} {
        display: none;
    }
`,Kr=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${m.secundary};
    margin: 30px;
    width: 42.5vw;
    height: 55vh;
    border-radius: 20px;


    @media ${l.mobile} {
        height: auto;
        width: 70vw;
        margin: 20px;
    }


    @media ${l.tablet} {
        height: 40vh;
    }
    

    @media ${l.desktop}{
        max-height: 45vh;
    }
`,Gr=c.h2`
    color: ${m.primary};
    font-size: ${f.subTitle};
    margin-top: 5%;
    text-align: center;
    width: 70%;


    @media ${l.mobile} {
        font-size: ${f.subTitleMobile};
    }

    @media ${l.tablet} {
        font-size: ${f.label};
    }
`,Qr=c.h2`
   text-align: center;
   width: 40%;
   margin-top: 7%;


   @media ${l.mobile} {
        font-size: ${f.labelMobile};
        width: 60%;
        padding-bottom: 8%;
    }


    @media ${l.mediumTablet} {
        font-size: ${f.charMobile};
    } 

    
    @media ${l.tablet} {
        font-size: ${f.char};
    }


    @media ${l.desktop}{
        width: 45%;
        margin-top: 10%;
    }
`,Vr=[{title:"Criar um espaço seguro e acolhedor",content:"Onde você se sinta à vontade para explorar seus pensamentos, sentimentos e comportamentos sem julgamentos."},{title:"Ouvir com atenção e empatia o paciente",content:"Busco compreender a sua história, suas dificuldades e seus objetivos de forma individualizada."},{title:"Utilizar técnicas e abordagens terapêuticas eficazes",content:"Como especialista em terapia cognitivo-comportamental, utilizo ferramentas e estratégias personalizadas para ajudar a lidar com ansiedade, depressão, traumas, problemas de relacionamento e outros desafios.",style:{marginTop:"5%",width:"60%"}},{title:"Empoderar você a desenvolver suas próprias ferramentas",content:"Meu objetivo é te ajudar a se tornar protagonista da sua saúde mental, te guiando no desenvolvimento de recursos internos para lidar com os desafios da vida.",style:{width:"60%"}}],Wr=[{icon:"clock",alt:"Ícone de Relógio",text:"Flexibilidade de horários: agende sessões em horários que se encaixam na sua rotina, sem se preocupar com deslocamentos."},{icon:"barrier",alt:"Ícone de Barreira",text:"Elimine barreiras geográficas: acesse terapia de qualquer lugar com conexão à internet, ideal para quem viaja muito, mora em áreas remotas ou possui mobilidade reduzida",style:{width:"80%"}},{icon:"availability",alt:"Ícone de Disponibilidade",text:"Maior disponibilidade de profissionais: encontre o terapeuta ideal para você, sem se limitar à sua região."},{icon:"insurance",alt:"Ícone de Seguro",text:"Ambiente seguro: realize as sessões no conforto da sua casa, o que pode facilitar a abertura emocional."},{icon:"padlock",alt:"Ícone de Cadeado",text:"Maior privacidade: ideal para quem se sente constrangido em frequentar consultórios tradicionais."},{icon:"telephone",alt:"Ícone de Telefone",text:"Comunicação facilitada para alguns: A comunicação, utilizada em tipos de terapia online, pode ser mais fácil para pessoas com dificuldades de expressão.",style:{width:"80%"}}],ki={Work:Vr,Benefits:Wr},Zr=c.div`
    display: none;


    @media ${l.mobile} {
        display: inline-block;
        width: 100%;
        overflow: hidden;
    }
`,Hr=c.div`


    @media ${l.mobile} {
        position: relative;
        align-items: center;
        justify-content: center;
    }
`,qr=c.div`


    @media ${l.mobile} {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }
`,Xr=c.div`


    @media ${l.mobile} {
        min-width: 100vw;
        box-sizing: border-box;
        margin-left: 10%;
    }
`,Jr=c.div`


    @media ${l.mobile} {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: ${({active:e})=>e?"#000":"#ccc"};
        margin: 0 5px;
        cursor: pointer;
    }
`,Yr=c.div`


    @media ${l.mobile} {
        display: flex;
        justify-content: center;
        margin-top: -1%;
        margin-bottom: 4%;
    }
`,_r=c.div`


    @media ${l.mobile} {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 50%;
        width: 99%;
        margin-left: 2px;
        transform: translateY(-50%);
        border: none;

    }
`,Ht=c.img`
    

    @media ${l.mobile} {
        cursor: pointer;
        border: none;
        margin: 10px;
        width: 24px; // Ajuste o tamanho da seta
        height: 35px; // Ajuste o tamanho da seta
        background-color: ${m.primary};
    }
`,xt=({cards:e})=>{const[t,i]=P.useState(0);P.useEffect(()=>{const a=setInterval(()=>{i(s=>(s+1)%e.length)},8e3);return()=>clearInterval(a)},[e.length]);const n=()=>{i(a=>(a+1)%e.length)},r=()=>{i(a=>(a-1+e.length)%e.length)};return o.jsx(Zr,{children:o.jsxs(Hr,{children:[o.jsx(qr,{children:e.map((a,s)=>o.jsx(Xr,{style:{display:s===t?"block":"none"},children:a},s))}),o.jsx(Yr,{children:e.map((a,s)=>o.jsx(Jr,{active:s===t},s))}),o.jsxs(_r,{children:[o.jsx(Ht,{onClick:r,src:$.leftArrowWhite,alt:"Anterior"}),o.jsx(Ht,{onClick:n,src:$.rightArrowWhite,alt:"Próximo"})]})]})})},eo=ki,to=()=>{const t=eo.Work.map((i,n)=>o.jsxs(Kr,{children:[o.jsx(Gr,{children:i.title}),o.jsx(Qr,{style:i.style||{},children:i.content})]},n));return o.jsx(le,{id:Fe,children:o.jsxs(Ur,{children:[o.jsx(Pr,{children:" Meu Trabalho Baseia-se Em: "}),o.jsx(Fr,{children:t}),o.jsx(xt,{page:"work",cards:t})]})})},io=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100vw; /* obrigatório haver esse min-width */
`,no=c.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 6vh;
    width: 70vw;
    align-items: center;
    justify-content: center;
    margin-top: 4%;
`,qt=c.div`
  width: 100%;
  height: 2px;
  background-color: ${m.primary};
  margin: 5px;
`,ro=c.h1`
    color: ${m.primary};
    font-size: ${f.title};
    text-align: center;


    @media ${l.mobile} {
        font-size: ${f.titleMobile};
    }
`,oo=c.div`
    display: flex;
    flex-direction: column;
    min-height: auto;
    width: 55vw;
    margin-top: 5%;
    margin-right: 25%;
    margin-bottom: 3%;
    border: 4px solid ${m.primary};
    border-radius: 20px;


    @media ${l.mobile} {
        width: 90vw;
        margin: 2%;
    }


    @media ${l.desktop} {
        width: 50vw;
    }
`,ao=c.h2`
    display: flex;
    color: ${m.primary};
    font-size: ${f.subTitle};
    align-self: center;
    margin-top: 4%;
`,so=c.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 33vw;
    margin-left: 12%;
    padding-top: 3%;


    @media ${l.mobile} {
        width: 80vw;
        margin-left: 7%;
        gap: 12px;
    }


    @media ${l.desktop} {
        gap: 12.5px;
        margin-top: 4%;
        padding-top: 0%;
    }
`,Ee=c.li`
    font-size: ${f.label};


    @media ${l.mobile} {
        font-size: ${f.labelMobile};
    }

    &::before {
    content: "•"; /* Adiciona o ponto */
    font-size: ${f.subTitle}; /* Ajusta o tamanho do ponto */


    @media ${l.mobile} {
        font-size: ${f.subTitleMobile};
    }
  }
`,co=c.h2`
    font-size: ${f.char};
    margin-top: 20px;
    width: 60%;
    margin-left: 8%;


    @media ${l.mobile} {
        width: 80%;
        font-size: ${f.labelMobile};
        text-align: center;
    }


    @media ${l.tablet} {
        width: 70%;
    }


    @media ${l.desktop} {
        width: 70%;
    }
`,lo=c.div`
    width: 100%; // 23% antes
    margin-left: 10%;
    margin-top: -1rem;
    padding-bottom: 3%;
    position: static; // não possuia position


    @media ${l.mobile} {
        margin-top: 0rem;
        margin-left: 5%;
    }
`,uo=c.div`
    display: flex;
    position: absolute;
    margin-top: 17%;
    margin-left: 45%;


    @media ${l.tablet} {
        margin-top: 25%;
        margin-left: 50%;
    }


    @media ${l.desktop} {
        height: 55vh;
        margin-top: 20%;
        margin-left: 40%;
    }
`,po=()=>o.jsx(le,{id:De,children:o.jsxs(io,{children:[o.jsxs(no,{children:[o.jsx(qt,{}),o.jsx(ro,{children:" A terapia é um processo colaborativo e transformador. "}),o.jsx(qt,{})]}),o.jsxs(oo,{children:[o.jsx(ao,{children:" Se você busca: "}),o.jsxs(so,{children:[o.jsx(Ee,{children:" Superar desafios emocionais: ansiedade, depressão, estresse, traumas, etc. "}),o.jsx(Ee,{children:" Melhorar seus relacionamentos consigo mesmo, com familiares, amigos ou parceiros. "}),o.jsx(Ee,{children:" Desenvolver autoconhecimento e inteligência emocional para lidar melhor com as emoções e tomar decisões mais conscientes. "}),o.jsx(Ee,{children:" Alcançar seus objetivos de vida com mais clareza, propósito e bem-estar. "})]}),o.jsx(co,{children:" Entre em contato para uma consulta inicial. Será um prazer te conhecer e juntos trilharmos um caminho de crescimento e desenvolvimento pessoal. "}),o.jsx(lo,{children:o.jsx(_e,{})})]}),o.jsx(uo,{children:o.jsx(At,{imagePath:jt.about,alt:"Psicólogo Acácio Tórres",legend:"Raimundo Acácio Costa Tôrres Filho CRP 11ª - 04373"})})]})}),ho=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${m.primary};
`,mo=c.h1`
    margin-top: 4%;
    color: ${m.white};
    font-size: ${f.title};

    @media ${l.mobile} {
        font-size: ${f.sectionMobile};
        text-align: center;
    }
`,Xt=c.h2`
    margin-top: 5%;
    color: ${m.white};
    font-size: ${f.subTitle};

    @media ${l.mobile} {
        font-size: ${f.titleMobile};
    }

    @media ${l.desktop} {
        margin-top: 3%;
    }
`,Jt=c.div`
    /* display: flex;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
    justify-content: flex-start;
    height: auto;
    width: 100vw;
    margin-top: 1%;
    background-color: ${m.primary};
    overflow: hidden;
    padding-bottom: 1%;

    @media ${l.mobile} {
        display: none;
    }
`,Be=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${m.secundary};
    margin: 20px;
    width: 30vw;
    height: 62vh;
    border-radius: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7);

    @media ${l.mobile} {
        height: auto;
        width: 70vw;
    }

    @media ${l.desktop} {
        height: 50vh;
    }
`,Re=c.img`
    margin-top: 10%;
    width: 80px;
    height: auto;
    
    @media ${l.mobile} {
        width: 70px;
    }
`,Ie=c.h2`
    color: ${m.primary};
    font-size: ${f.label};
    margin-top: 12%;
    width: 50%;
    text-align: center;

    @media ${l.mobile} {
        font-size: ${f.labelMobile};
        width: 60%;
        padding-bottom: 5%;
        margin-top: 4%;
    }
`,fo=ki,go=()=>{const e=fo.Benefits,t=e.slice(0,3),i=e.slice(3),n=t.map((a,s)=>o.jsxs(Be,{children:[o.jsx(Re,{src:$[a.icon],alt:a.alt}),o.jsx(Ie,{style:a.style||{},children:a.text})]},s)),r=i.map((a,s)=>o.jsxs(Be,{children:[o.jsx(Re,{src:$[a.icon],alt:a.alt}),o.jsx(Ie,{style:a.style||{},children:a.text})]},s));return o.jsx(le,{id:Ue,children:o.jsxs(ho,{children:[o.jsx(mo,{children:" Benefícios da terapia online "}),o.jsx(Xt,{children:" Conveniência e Acessibilidade "}),o.jsx(Jt,{children:t.map((a,s)=>o.jsxs(Be,{children:[o.jsx(Re,{src:$[a.icon],alt:a.alt}),o.jsx(Ie,{style:a.style||{},children:a.text})]},s))}),o.jsx(xt,{page:"benefits",cards:n}),o.jsx(Xt,{children:" Conforto e Privacidade "}),o.jsx(Jt,{children:i.map((a,s)=>o.jsxs(Be,{children:[o.jsx(Re,{src:$[a.icon],alt:a.alt}),o.jsx(Ie,{style:a.style||{},children:a.text})]},s))}),o.jsx(xt,{page:"benefits",cards:r})]})})},xo=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5%;
`,wo=c.h1`
    margin-top: 4%;
    color: ${m.primary};
    font-size: ${f.title};
`,yo=c.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 3%;
`,bo=c.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 5px #07a8b044;
`,vo=c.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    height: 12vh;
    background-color: ${m.softWhite};
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 2px 5px #07a8b044;


    @media ${l.mobile} {
        width: 95vw;
    }
`,Co=c.h2`
    font-size: ${f.subTitle};
    color: ${m.primary};
    margin-left: 10px;

    @media ${l.mobile} {
        font-size: ${f.subTitleMobile};
        width: 100%;
    }
`,Ao=c.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    min-height: 10vh;
    justify-content: center;
    background-color: ${m.primary};
    padding-left: 30px;


    @media ${l.mobile} {
        width: 95vw;
    }
`,jo=c.h2`
    font-size: ${f.label};
    color: ${m.white};
    width: 95%;
    margin-top: 1%;


    @media ${l.mobile} {
        font-size: ${f.labelMobile};
    }
`,ko=c.div`
    margin-bottom: 15px;
    margin-top: -1.6rem;
    margin-left: -11rem;
    width: 100%;


    @media ${l.mobile} {
        margin-top: -0.5rem;
        margin-left: -3.5rem;
    }
`,So=c.div`
`,Eo=c.img`
    display: flex;
    width: 20px;
    height: 20px;
    margin-left: 15px;
    transform: rotate(${e=>e.isOpen?"90deg":"0deg"});
    transition: transform 0.3s ease-in-out;
`,Bo=({isOpen:e})=>o.jsx(So,{children:o.jsx(Eo,{src:$.rightArrow,alt:"Flecha apontada para a direita",isOpen:e})}),Ro=()=>{const[e,t]=P.useState({first:!1,second:!1,third:!1,fourth:!1,fifth:!1}),i=n=>{t(r=>({...r,[n]:!r[n]}))};return o.jsx(le,{id:Pe,children:o.jsxs(xo,{children:[o.jsx(wo,{children:"FAQ"}),o.jsx(yo,{children:Object.keys(e).map((n,r)=>o.jsxs(bo,{children:[o.jsxs(vo,{onClick:()=>i(n),children:[o.jsx(Bo,{isOpen:e[n]}),o.jsx(Co,{children:["Qual a diferença entre a terapia presencial e a online?","Para quem é indicado o processo terapêutico?","Qual a duração e a frequência das sessões?","Qual o custo das terapias?","Como ocorre o atendimento remoto (online)?"][r]})]}),o.jsxs(Ao,{style:{display:e[n]?"flex":"none"},children:[o.jsx(jo,{children:["A diferença entre as duas modalidades é a localização. Enquanto no presencial é necessário se deslocar até o local de atendimento do psicólogo, na modalidade online não é necessário ter esse deslocamento, já que a consulta é feita pela internet, através de recursos eletrônicos (computador, tablet ou celular).","Para todas as pessoas, porém sempre é necessário a compreensão das necessidades individuais.","As sessões duram em torno de 50 a 60 minutos. Quanto a frequência, será variável pois dependerá das necessidades de cada caso (em todos os casos serão acordados dias e horários entre o profissional e os pacientes).","Devido orientações do código de ética do Psicólogo é vedada a divulgação de valores (entre em contato através de nossos canais para essa informação), entretanto podemos afirmar que não existe melhor investimento do que o realizado em prol de si mesmo.","O profissional e o paciente acordarão dias e horários previamente. Os encontros serão realizados através de sala virtual no Google Meet (link será enviado pelo profissional)."][r]}),o.jsx(ko,{children:o.jsx(_e,{backgroundColor:m.white,color:m.primary,iconSrc:$.whatsApp})})]})]},n))})]})})},Io=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1%;
    background-color: ${m.primary};
    padding-bottom: 3%;


    @media ${l.desktop} {
        min-height: 86vh;
    }
`,To=c.h1`
    margin-top: 4%;
    font-size: ${f.title};
    text-align: center;
    color: ${m.white};
`,Mo=c.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
`,$o=c.div`
    display: flex;
    flex-direction: column;
    margin-top: 7%;
    margin-right: 12%;
    gap: 30px;


    @media ${l.mobile} {
        margin-right: 0%;
        margin-top: 20%;
        gap: 40px;
    }
`,Te=c.h2`
    font-size: ${f.subTitle};
    text-align: center;
    color: ${m.white};
`,zo=c.div`
    margin-left: 13%;
    margin-top: -20px;


    @media ${l.mobile} {
        margin-left: 10%;
    }
`,Oo=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 4%;

    
    @media ${l.desktop} {
        height: 65vh;
    }
`,No=()=>o.jsx(le,{id:Le,children:o.jsxs(Io,{children:[o.jsx(To,{children:"Entre em contato e agende já sua consulta."}),o.jsxs(Mo,{children:[o.jsxs($o,{children:[o.jsx(Te,{children:"Telefone: +55 88 9958-0857"}),o.jsx(Te,{children:"WhattsApp: +55 88 9958-0857"}),o.jsx(Te,{children:"Email: acaciofh@gmail.com"}),o.jsx(Te,{children:"Ou"}),o.jsx(zo,{children:o.jsx(_e,{backgroundColor:"white",color:"#07A8b0",iconSrc:$.whatsApp})})]}),o.jsx(Oo,{children:o.jsx(At,{backgroundColor:"white",color:"#07A8b0",imagePath:jt.contact,alt:"Psicólogo Acácio Tórres",legend:"Raimundo Acácio Costa Tôrres Filho CRP 11ª - 04373"})})]})]})});function Do(){return o.jsxs("div",{children:[o.jsx(vr,{}),o.jsx(Lr,{}),o.jsx(to,{}),o.jsx(po,{}),o.jsx(go,{}),o.jsx(Ro,{}),o.jsx(No,{})]})}Li.createRoot(document.getElementById("root")).render(o.jsx(P.StrictMode,{children:o.jsx(Do,{})}));
