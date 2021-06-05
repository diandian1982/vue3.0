(window.webpackJsonp=window.webpackJsonp||[]).push([["demos-custom-a-custom-modal","a-custom-modal","a-custom-modal-useModal","a-custom-modal-index-vue"],{"22d9":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),l={ref:"modalRootRef",class:"ant-modal-root custom-modal"},c={class:"ant-modal-mask"},a={key:0,ref:"modalWrapRef",class:"ant-modal-wrap"},r={ref:"dragRef",class:"ant-modal"},i={class:"ant-modal-content"},u={ref:"titleRef",class:"ant-modal-header"},s={class:"ant-modal-title"},d={class:"ant-modal-operate"},f={ref:"minRef",type:"button",class:"min",title:"最小化"},m={ref:"maxRef",type:"button",class:"max",title:"最大化"},b={ref:"revertRef",type:"button",class:"revert",title:"还原"},v={ref:"resizeLRef",class:"resizeL"},O={ref:"resizeTRef",class:"resizeT"},j={ref:"resizeRRef",class:"resizeR"},p={ref:"resizeBRef",class:"resizeB"},y={ref:"resizeLTRef",class:"resizeLT"},h={ref:"resizeTRRef",class:"resizeTR"},g={ref:"resizeBRRef",class:"resizeBR"},N={ref:"resizeLBRef",class:"resizeLB"},R={ref:"modalBody",class:"ant-modal-body"},V=Object(n.createTextVNode)(" ① 窗口可以拖动；"),x=Object(n.createVNode)("br",null,null,-1),k=Object(n.createTextVNode)(" ② 窗口可以通过八个方向改变大小；"),T=Object(n.createVNode)("br",null,null,-1),C=Object(n.createTextVNode)(" ③ 窗口可以最小化、最大化、还原、关闭；"),w=Object(n.createVNode)("br",null,null,-1),L=Object(n.createTextVNode)(" ④ 限制窗口最小宽度/高度。 "),z={key:0,ref:"modalFooter",class:"ant-modal-footer"},B=Object(n.createTextVNode)("取 消"),E=Object(n.createTextVNode)("确 认"),M=o("8e1b"),H=o("b548"),W=Object(n.defineComponent)({name:"ACustomModal",components:{Transition:M.Transition},emits:["update:visible"],props:{title:{type:String,default:"标题"},visible:{type:Boolean,default:!1},destroyOnClose:{type:Boolean,default:!1},footer:{default:"I am footer"},confirmLoading:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},setup:function(e,t){return Object(H.default)(e,t)}});o("8591"),W.render=function(e,t,o,M,H,W){var P=Object(n.resolveComponent)("a-button");return e.destroyOnClose&&!e.visible?(Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,{key:0},[],64)):(Object(n.openBlock)(),Object(n.createBlock)(n.Teleport,{key:1,to:"body"},[Object(n.createVNode)("div",l,[Object(n.createVNode)(n.Transition,Object(n.mergeProps)({key:"mask"},e.maskTransitionProps),{default:Object(n.withCtx)((function(){return[Object(n.withDirectives)(Object(n.createVNode)("div",c,null,512),[[n.vShow,e.visible]])]})),_:1},16),Object(n.createVNode)(n.Transition,Object(n.mergeProps)({key:"dialog"},e.dialogTransitionProps),{default:Object(n.withCtx)((function(){return[e.visible?(Object(n.openBlock)(),Object(n.createBlock)("div",a,[Object(n.createVNode)("div",r,[Object(n.createVNode)("div",i,[Object(n.createVNode)("div",u,[Object(n.createVNode)("span",s,Object(n.toDisplayString)(e.title),1),Object(n.createVNode)("div",d,[Object(n.createVNode)("button",f,null,512),Object(n.createVNode)("button",m,null,512),Object(n.createVNode)("button",b,null,512),Object(n.createVNode)("button",{type:"button",class:"close",title:"关闭",onClick:t[1]||(t[1]=function(){return e.closeModal&&e.closeModal.apply(e,arguments)})})])],512),Object(n.createVNode)("div",v,null,512),Object(n.createVNode)("div",O,null,512),Object(n.createVNode)("div",j,null,512),Object(n.createVNode)("div",p,null,512),Object(n.createVNode)("div",y,null,512),Object(n.createVNode)("div",h,null,512),Object(n.createVNode)("div",g,null,512),Object(n.createVNode)("div",N,null,512),Object(n.createVNode)("div",R,[Object(n.renderSlot)(e.$slots,"default",{},(function(){return[V,x,k,T,C,w,L]}))],512),null!=e.footer?(Object(n.openBlock)(),Object(n.createBlock)("div",z,[Object(n.renderSlot)(e.$slots,"footer",{},(function(){return[Object(n.createVNode)("div",null,[Object(n.createVNode)(P,{onClick:e.closeModal},{default:Object(n.withCtx)((function(){return[B]})),_:1},8,["onClick"]),Object(n.createVNode)(P,{type:"primary",loading:e.confirmLoading,onClick:e.closeModal},{default:Object(n.withCtx)((function(){return[E]})),_:1},8,["loading","onClick"])])]}))],512)):Object(n.createCommentVNode)("",!0)])],512)],512)):Object(n.createCommentVNode)("",!0)]})),_:3},16)],512)]))},t.default=W},"2f30":function(e,t,o){"use strict";o.r(t);var n,l=o("7a23"),c=Object(l.createTextVNode)("弹出弹窗"),a=o("5530"),r=o("ade3"),i=(o("288f"),o("cdeb")),u=(o("ab9e"),o("2c92")),s=(o("b0c0"),o("c1b0")),d=Object(l.defineComponent)({name:"CustomModal",components:(n={},Object(r.a)(n,u.a.name,u.a),Object(r.a)(n,i.a.name,i.a),Object(r.a)(n,"ACustomModal",s.ACustomModal),n),setup:function(){var e=Object(l.reactive)({visible:!1});return Object(a.a)({},Object(l.toRefs)(e))}});d.render=function(e,t,o,n,a,r){var i=Object(l.resolveComponent)("a-alert"),u=Object(l.resolveComponent)("a-button"),s=Object(l.resolveComponent)("a-card"),d=Object(l.resolveComponent)("a-custom-modal");return Object(l.openBlock)(),Object(l.createBlock)("div",null,[Object(l.createVNode)(i,{message:"自定义模态框",description:"沿用ant-design-vue的modal样式，自定义一个可拖拽、可调整大小的模态框",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),Object(l.createVNode)(s,null,{default:Object(l.withCtx)((function(){return[Object(l.createVNode)(u,{type:"primary",onClick:t[1]||(t[1]=function(t){return e.visible=!0})},{default:Object(l.withCtx)((function(){return[c]})),_:1})]})),_:1}),Object(l.createVNode)(d,{visible:e.visible,"onUpdate:visible":t[2]||(t[2]=function(t){return e.visible=t})},null,8,["visible"])])},t.default=d},8591:function(e,t,o){"use strict";o("888a")},"888a":function(e,t,o){},b548:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return a})),o("99af");var n=o("7a23"),l=o("8e1b"),c=o("7303");function a(e,t){var o=t.emit,a=(t.attrs,Object(n.ref)(null)),r=Object(n.ref)(null),i=Object(n.ref)(null),u=Object(n.ref)(null),s=Object(n.ref)(null),d=Object(n.ref)(null),f=Object(n.ref)(null),m=Object(n.ref)(null),b=Object(n.ref)(null),v=Object(n.ref)(null),O=Object(n.ref)(null),j=Object(n.ref)(null),p=Object(n.ref)(null),y=Object(n.ref)(null),h=Object(n.ref)(null),g=Object(n.ref)(null),N={x:0,y:0},R=function(e){return Object.assign(N,{x:e.pageX,y:e.pageY})};document.documentElement.addEventListener("click",R,!0);var V,x,k,T,C,w=Object(l.getTransitionProps)("fade"),L=Object(l.getTransitionProps)("zoom",{onAfterLeave:function(){return o("update:visible",!1)}}),z=0;function B(e,t,o,n,l,c){t.onmousedown=function(a){var r=a.clientX-t.offsetLeft,u=a.clientY-t.offsetTop,s=e.offsetTop,d=e.offsetLeft,f=e.offsetWidth,m=e.offsetHeight,b=function(a){var b=a.clientX-r,v=a.clientY-u,O=document.documentElement.clientWidth-e.offsetLeft-2,j=document.documentElement.clientHeight-e.offsetTop-2,p=o?f-b:t.offsetWidth+b,y=n?m-v:t.offsetHeight+v;return o&&(e.style.left=d+b+"px"),n&&(e.style.top=s+v+"px"),p<400&&(p=400),p>O&&(p=O),l||(i.value.style.width=p+"px"),y<140&&(y=140),y>j&&(y=j),c||(i.value.style.height=y-z-C+"px"),(o&&400==p||n&&140==y)&&(document.onmousemove=null),(o||n)&&(document.onmousemove=null),!1};return document.addEventListener("mousemove",b),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",e)})),!1}}var E=function(){var t,o,n;t=a.value,o=s.value,n=0,(o=o||t).style.cursor="move",o.onmousedown=function(e){n=e.clientX-t.offsetLeft;var o=e.clientY-t.offsetTop,l=function(e){var l=e.clientX-n,c=e.clientY-o,a=document.documentElement.clientWidth-t.offsetWidth,r=document.documentElement.clientHeight-t.offsetHeight;return l<=0&&(l=0),c<=0&&(c=0),l>=a&&(l=a),c>=r&&(c=r),t.style.left=l+"px",t.style.top=c+"px",!1};return document.addEventListener("mousemove",l),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",e)})),!1},h.value.onclick=function(){var e=getComputedStyle(t),o=e.left,n=e.top,l=getComputedStyle(i.value),c=l.width,a=l.height;V=c,x=a,k=o,T=n,t.style.top=t.style.left=0,t.style.width=document.documentElement.clientWidth-2+"px",t.style.height=document.documentElement.clientHeight-2+"px",i.value.style.width=t.style.width,i.value.style.height=parseFloat(t.style.height)-C-z+"px",this.style.display="none",g.value.style.display="block"},g.value.onclick=function(){i.value.style.height=x,i.value.style.width=V,t.style.width=t.style.height="unset",t.style.left=k,t.style.top=T,this.style.display="none",h.value.style.display="block"},B(a.value,v.value,!0,!0,!1,!1),B(a.value,O.value,!1,!0,!1,!1),B(a.value,j.value,!1,!1,!1,!1),B(a.value,p.value,!0,!1,!1,!1),B(a.value,d.value,!0,!1,!1,!0),B(a.value,f.value,!1,!0,!0,!1),B(a.value,m.value,!1,!1,!1,!0),B(a.value,b.value,!1,!1,!0,!1),a.value.style.left=(document.documentElement.clientWidth-a.value.offsetWidth)/2+"px",a.value.style.top=e.centered?(document.documentElement.clientHeight-a.value.offsetHeight)/2+"px":"100px";var l=a.value.getBoundingClientRect(),c=l.left,u=l.top,y=N.x,R=N.y;r.value.style.transformOrigin="".concat(y-c,"px ").concat(R-u,"px")},M=Object(c.a)(E,30);return Object(n.onMounted)((function(){Object(n.watch)((function(){return e.visible}),(function(e){e&&(Object(n.nextTick)((function(){var e,t;C=(null===(e=s.value)||void 0===e?void 0:e.offsetHeight)||0,z=(null===(t=u.value)||void 0===t?void 0:t.offsetHeight)||0,E()})),window.addEventListener("resize",M))}),{immediate:!0})})),Object(n.onBeforeUnmount)((function(){window.removeEventListener("resize",M),document.documentElement.removeEventListener("click",R,!0),M.cancel})),{dragRef:a,modalWrapRef:r,modalBody:i,modalFooter:u,titleRef:s,resizeLRef:d,resizeTRef:f,resizeRRef:m,resizeBRef:b,resizeLTRef:v,resizeTRRef:O,resizeBRRef:j,resizeLBRef:p,minRef:y,maxRef:h,revertRef:g,maskTransitionProps:w,dialogTransitionProps:L,closeModal:function(){o("update:visible",!1)}}}},c1b0:function(e,t,o){"use strict";o.r(t);var n=o("22d9");o.d(t,"ACustomModal",(function(){return n.default}))}}]);