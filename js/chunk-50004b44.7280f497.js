(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50004b44"],{"142e":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r={class:"wrap"};function c(e,t,n,c,l,i){var u=Object(a["R"])("BetPanel");return Object(a["I"])(),Object(a["f"])(a["c"],{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:Object(a["jb"])((function(){return[Object(a["i"])("div",r,[Object(a["m"])(u)])]})),_:1})}var l=function(e){return Object(a["L"])("data-v-5e5f68b3"),e=e(),Object(a["J"])(),e},i={class:"container"},u={class:"poletime"},s=l((function(){return Object(a["i"])("h1",null,"Poletime",-1)})),o={class:"btn-wrapper"};function d(e,t,n,r,c,l){var d=Object(a["R"])("Poletime"),f=Object(a["R"])("SelectWrapper");return Object(a["I"])(),Object(a["h"])(a["a"],null,[Object(a["i"])("div",i,[Object(a["i"])("div",u,[s,Object(a["m"])(d,{"reset-all":r.resetAll},null,8,["reset-all"])]),Object(a["m"])(f,{title:"F1Masters",count:10,list:r.masters,group:"Position","reset-all":r.resetAll,class:"f1master",onConfirmed:r.handleConfirmation},null,8,["list","reset-all","onConfirmed"]),Object(a["m"])(f,{title:"Evo",count:5,list:r.masters,group:"Evo","reset-all":r.resetAll,class:"evo"},null,8,["list","reset-all"]),Object(a["m"])(f,{title:"Head",count:r.duels.length,list:r.duels,group:"Head","is-head":!0,"reset-all":r.resetAll,class:"head"},null,8,["count","list","reset-all"]),Object(a["m"])(f,{title:"Misc",count:1,list:r.misc,group:"Misc","reset-all":r.resetAll,class:"misc"},null,8,["list","reset-all"])]),Object(a["i"])("div",o,[Object(a["i"])("button",{class:"reset",onClick:t[0]||(t[0]=function(){return r.reset&&r.reset.apply(r,arguments)})},"Reset All"),Object(a["i"])("button",{class:"confirm",onClick:t[1]||(t[1]=function(){return r.handleConfirmation&&r.handleConfirmation.apply(r,arguments)})},"Confirm")]),Object(a["i"])("p",null,Object(a["V"])(r.liveBet),1)],64)}n("4de4"),n("d3b7"),n("b0c0"),n("e9c4"),n("d81d"),n("caad"),n("2532");var f={id:"demo"},b={class:"cont"},v={class:"btn"};function p(e,t,n,r,c,l){var i=Object(a["R"])("inputComp");return Object(a["I"])(),Object(a["h"])("div",f,[Object(a["i"])("div",b,[Object(a["m"])(i,{placeholder:"0'00''000'''",class:"input",reseted:r.reseted,onSelect:r.getSelected,onCleared:t[0]||(t[0]=function(e){return r.reseted=!1})},null,8,["reseted","onSelect"])]),Object(a["i"])("div",v,[Object(a["i"])("button",{class:"reset",onClick:t[1]||(t[1]=function(){return r.reset&&r.reset.apply(r,arguments)})},"Reset")])])}var m=n("77f5"),O=n("5502"),j={components:{inputComp:m["a"]},props:{resetAll:{type:Boolean,default:!1}},setup:function(e){var t=Object(O["b"])(),n=Object(a["O"])(""),r=function(e){n.value=e},c=Object(a["O"])(!1),l=function(){n.value=0,c.value=!0};return Object(a["hb"])((function(){return e.resetAll}),(function(e){e&&l()})),Object(a["hb"])((function(){return n.value}),(function(e){t.dispatch("liveBetUpdate",{type:"Pole",value:e})})),{getSelected:r,reset:l,reseted:c}}},h=(n("b1d7"),n("6b0d")),g=n.n(h);const C=g()(j,[["render",p],["__scopeId","data-v-3c855446"]]);var B=C,y=n("9509"),w=n("38c3"),D=n("93e7"),A=n("e455"),S={components:{Poletime:B,SelectWrapper:y["a"]},setup:function(){var e=Object(a["p"])(),t=e.appContext.config.globalProperties.$dayjs,n=Object(O["b"])(),r=Object(a["d"])((function(){return n.getters.getliveBet})),c=Object(a["O"])([]),l=function(){var e=A["a"].filter((function(e){return t(e.start).format("YYYY-MM-DD")>t(new Date).format("YYYY-MM-DD")}));c.value=e.reduce((function(e,t){return new Date(e.start)>new Date(t.start)?t:e}))};l();var i=function(){if(void 0!==r.value&&r.value.Pole&&r.value.F1Masters.length&&r.value.Evo.length&&r.value.Head.length&&r.value.Misc.length){n.dispatch("liveBetUpdate",{type:"Event",value:{id:c.value.id,name:c.value.name}}),n.dispatch("liveBetUpdate",{type:"User",value:{id:0,email:"rayannezinha@f1master.com"}}),n.dispatch("liveBetUpdate",{type:"createdAt",value:new Date}),n.dispatch("fetchBets"),n.dispatch("fetchBet",r.value);var e=Object(a["d"])((function(){return n.getters.getBet}));r.value._id=e.value._id,n.dispatch("betUpdate",r.value);var t=Object(a["d"])((function(){return n.getters.getBets}));return console.log("muuu",t.value),void alert("OK - "+JSON.stringify(r.value))}alert("NOT")},u=Object(a["O"])(!1),s=function(){u.value=!0,n.dispatch("liveBetClear"),setTimeout((function(){return u.value=!1}),0)},o=Object(a["O"])(w["a"].map((function(e){return{id:e.id,name:e.name,number:e.number}}))),d=Object(a["O"])([]);d.value=D["a"].map((function(e){return w["a"].filter((function(t){return e.teamName.toLocaleLowerCase().includes(t.team.toLocaleLowerCase())})).map((function(t){return{id:t.id,name:t.name,number:t.number,team:e.teamName}}))})).filter((function(e){return e.length}));var f=Object(a["O"])([{id:0,name:"YES"},{id:1,name:"NO"}]);return{masters:o,duels:d,misc:f,reset:s,resetAll:u,liveBet:r,handleConfirmation:i}}};n("7f61");const F=g()(S,[["render",d],["__scopeId","data-v-5e5f68b3"]]);var P=F,M={components:{BetPanel:P},setup:function(){return{BetPanel:P}}};n("743c");const Y=g()(M,[["render",c],["__scopeId","data-v-4213d8a5"]]);t["default"]=Y},"224a":function(e,t,n){},"3f32":function(e,t,n){},"743c":function(e,t,n){"use strict";n("3f32")},"7f61":function(e,t,n){"use strict";n("babf")},b1d7:function(e,t,n){"use strict";n("224a")},babf:function(e,t,n){},e9c4:function(e,t,n){var a=n("23e7"),r=n("da84"),c=n("d066"),l=n("2ba4"),i=n("e330"),u=n("d039"),s=r.Array,o=c("JSON","stringify"),d=i(/./.exec),f=i("".charAt),b=i("".charCodeAt),v=i("".replace),p=i(1..toString),m=/[\uD800-\uDFFF]/g,O=/^[\uD800-\uDBFF]$/,j=/^[\uDC00-\uDFFF]$/,h=function(e,t,n){var a=f(n,t-1),r=f(n,t+1);return d(O,e)&&!d(j,r)||d(j,e)&&!d(O,a)?"\\u"+p(b(e,0),16):e},g=u((function(){return'"\\udf06\\ud834"'!==o("\udf06\ud834")||'"\\udead"'!==o("\udead")}));o&&a({target:"JSON",stat:!0,forced:g},{stringify:function(e,t,n){for(var a=0,r=arguments.length,c=s(r);a<r;a++)c[a]=arguments[a];var i=l(o,null,c);return"string"==typeof i?v(i,m,h):i}})}}]);
//# sourceMappingURL=chunk-50004b44.7280f497.js.map