(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0c0aa5c"],{"142e":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r={class:"wrap"};function c(e,t,n,c,l,u){var i=Object(a["U"])("BetPanel");return Object(a["L"])(),Object(a["g"])(a["c"],{name:"bounce",mode:"out-in",appear:""},{default:Object(a["lb"])((function(){return[Object(a["j"])("div",r,[Object(a["n"])(i)])]})),_:1})}n("b0c0");var l={class:"container"},u={class:"poletime"};function i(e,t,n,r,c,i){var s=Object(a["U"])("Poletime"),o=Object(a["U"])("SelectWrapper"),d=Object(a["U"])("ConfirmGroup");return Object(a["L"])(),Object(a["i"])(a["a"],null,[Object(a["j"])("h1",null,Object(a["Y"])(r.currentRace.name),1),Object(a["j"])("div",l,[Object(a["j"])("div",u,[Object(a["n"])(s,{title:"Pole time","reset-all":r.resetAll},null,8,["reset-all"])]),Object(a["n"])(o,{title:"F1Masters",count:10,list:r.masters,group:"Position","reset-all":r.resetAll,class:"f1master",onConfirmed:r.handleConfirmation},null,8,["list","reset-all","onConfirmed"]),Object(a["n"])(o,{title:"Evo",count:5,list:r.masters,group:"Evo","reset-all":r.resetAll,class:"evo"},null,8,["list","reset-all"]),Object(a["n"])(o,{title:"Head",count:r.duels.length,list:r.duels,group:"Head","is-head":!0,"reset-all":r.resetAll,class:"head"},null,8,["count","list","reset-all"]),Object(a["n"])(o,{title:"Misc",count:1,list:r.misc,group:"Misc","reset-all":r.resetAll,class:"misc"},null,8,["list","reset-all"])]),Object(a["n"])(d,{onReseted:r.reset,onConfirmed:r.handleConfirmation},null,8,["onReseted","onConfirmed"])],64)}n("e9c4"),n("d81d"),n("4de4"),n("d3b7"),n("caad"),n("2532");var s=n("06bf"),o=n("9509"),d=n("0679"),f=n("38c3"),v=n("93e7"),b=n("c3f6"),m=n("5502"),p={components:{Poletime:s["a"],SelectWrapper:o["a"],ConfirmGroup:d["a"]},setup:function(){var e=Object(m["b"])(),t=Object(a["e"])((function(){return e.getters.getliveBet})),n=Object(b["a"])(),r=function(){if(void 0!==t.value&&t.value.Pole&&t.value.F1Masters.length&&t.value.Evo.length&&t.value.Head.length&&t.value.Misc.length){e.dispatch("liveBetUpdate",{type:"Event",value:{id:n.value.id,name:n.value.name}}),e.dispatch("liveBetUpdate",{type:"User",value:{id:0,email:"rayannezinha@f1master.com"}}),e.dispatch("liveBetUpdate",{type:"createdAt",value:new Date}),e.dispatch("fetchBets"),e.dispatch("fetchBet",t.value);var r=Object(a["e"])((function(){return e.getters.getBet}));t.value._id=r.value._id,e.dispatch("betUpdate",t.value);var c=Object(a["e"])((function(){return e.getters.getBets}));return console.log("muuu",c.value),void alert("OK - "+JSON.stringify(t.value))}alert("NOT")},c=Object(a["R"])(!1),l=function(){c.value=!0,e.dispatch("liveBetClear"),setTimeout((function(){return c.value=!1}),0)},u=Object(a["R"])(f["a"].map((function(e){return{id:e.id,name:e.name,number:e.number}}))),i=Object(a["R"])([]);i.value=v["a"].map((function(e){return f["a"].filter((function(t){return e.teamName.toLocaleLowerCase().includes(t.team.toLocaleLowerCase())})).map((function(t){return{id:t.id,name:t.name,number:t.number,team:e.teamName}}))})).filter((function(e){return e.length}));var s=Object(a["R"])([{id:0,name:"YES"},{id:1,name:"NO"}]);return{currentRace:n,masters:u,duels:i,misc:s,reset:l,resetAll:c,liveBet:t,handleConfirmation:r}}},O=(n("34fd"),n("6b0d")),j=n.n(O);const g=j()(p,[["render",i],["__scopeId","data-v-1aeb354e"]]);var h=g,C={components:{BetPanel:h},setup:function(){return{BetPanel:h}}};n("6105");const D=j()(C,[["render",c],["__scopeId","data-v-474336d0"]]);t["default"]=D},"34fd":function(e,t,n){"use strict";n("3a97")},"3a97":function(e,t,n){},6105:function(e,t,n){"use strict";n("c11d")},c11d:function(e,t,n){},c3f6:function(e,t,n){"use strict";n("4de4"),n("d3b7");var a=n("7a23"),r=n("5502");t["a"]=function(){var e=Object(a["q"])(),t=e.appContext.config.globalProperties.$dayjs,n=Object(r["b"])();n.dispatch("fetchF1datas","events");var c=Object(a["e"])((function(){return n.getters.getF1datas("events")})),l=Object(a["R"])([]),u=function(){var e=c.value.filter((function(e){return t(new Date(e.raceStart)).format("YYYY-MM-DD")>t(new Date).format("YYYY-MM-DD")}));l.value=e.reduce((function(e,t){return new Date(t.start)>new Date(e.start)?t:e}))};return u(),l}},e9c4:function(e,t,n){var a=n("23e7"),r=n("da84"),c=n("d066"),l=n("2ba4"),u=n("e330"),i=n("d039"),s=r.Array,o=c("JSON","stringify"),d=u(/./.exec),f=u("".charAt),v=u("".charCodeAt),b=u("".replace),m=u(1..toString),p=/[\uD800-\uDFFF]/g,O=/^[\uD800-\uDBFF]$/,j=/^[\uDC00-\uDFFF]$/,g=function(e,t,n){var a=f(n,t-1),r=f(n,t+1);return d(O,e)&&!d(j,r)||d(j,e)&&!d(O,a)?"\\u"+m(v(e,0),16):e},h=i((function(){return'"\\udf06\\ud834"'!==o("\udf06\ud834")||'"\\udead"'!==o("\udead")}));o&&a({target:"JSON",stat:!0,forced:h},{stringify:function(e,t,n){for(var a=0,r=arguments.length,c=s(r);a<r;a++)c[a]=arguments[a];var u=l(o,null,c);return"string"==typeof u?b(u,p,g):u}})}}]);
//# sourceMappingURL=chunk-a0c0aa5c.f95a6d37.js.map