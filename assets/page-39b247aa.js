import{d as F,i as V,j as A,c,w as E,T as L,u as O,f as x,o as l,g as p,k as b,l as f,v as d,m as u,a as _,t as B,F as P,n as N,p as S,b as k,h as $,q,s as i}from"./index-16e40fc8.js";import{_ as C}from"./Button.vue_vue_type_script_setup_true_lang-2b4bc58c.js";import{_ as M}from"./Card.vue_vue_type_script_setup_true_lang-ce30d6ed.js";const j=(g,e)=>{const r=g[e];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((v,m)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(m.bind(null,new Error("Unknown variable dynamic import: "+e)))})},z={class:"mb-5"},G={class:"text-3xl font-bold before:block before:absolute before:w-2 before:h-10 before:left-0 before:bg-cyan-500"},H={class:"w-full flex justify-center"},Q=F({__name:"page",setup(g){const e=O(),r=x(),v=$(),m=e.state.pages,R=s=>q(()=>j(Object.assign({"../components/Button.vue":()=>i(()=>import("./Button-5e829fd2.js"),["assets/Button-5e829fd2.js","assets/Button.vue_vue_type_script_setup_true_lang-2b4bc58c.js","assets/index-16e40fc8.js","assets/index-1b6b4bf1.css"]),"../components/Card.vue":()=>i(()=>import("./Card-29686a13.js"),["assets/Card-29686a13.js","assets/Card.vue_vue_type_script_setup_true_lang-ce30d6ed.js","assets/index-16e40fc8.js","assets/index-1b6b4bf1.css"]),"../components/Footer.vue":()=>i(()=>import("./Footer-db070991.js"),["assets/Footer-db070991.js","assets/index-16e40fc8.js","assets/index-1b6b4bf1.css"]),"../components/FormCheck.vue":()=>i(()=>import("./FormCheck-61dd0afc.js"),["assets/FormCheck-61dd0afc.js","assets/index-16e40fc8.js","assets/index-1b6b4bf1.css"]),"../components/FormControl.vue":()=>i(()=>import("./FormControl-d3dc8263.js"),["assets/FormControl-d3dc8263.js","assets/index-16e40fc8.js","assets/index-1b6b4bf1.css"]),"../components/FormFivestar.vue":()=>i(()=>import("./FormFivestar-ff46f728.js"),["assets/FormFivestar-ff46f728.js","assets/index-16e40fc8.js","assets/index-1b6b4bf1.css"]),"../components/FormInfo.vue":()=>i(()=>import("./FormInfo-fb13f656.js"),["assets/FormInfo-fb13f656.js","assets/index-16e40fc8.js","assets/index-1b6b4bf1.css"]),"../components/FormSelect.vue":()=>i(()=>import("./FormSelect-da614547.js"),["assets/FormSelect-da614547.js","assets/index-16e40fc8.js","assets/index-1b6b4bf1.css","assets/FormSelect-8f89c724.css"])}),`../components/${s}.vue`));let h=!1;const y=(s,o,a,n)=>{},w=(s,o)=>{s.length<=0||m[o].blocks.forEach(a=>{s.forEach(n=>{a.id===n.id&&(a.hide=n.hide)})})};V(()=>{h=!0;let s=r.currentRoute.value.params.id;e.state.pageNum=parseInt(s.toString())}),A(()=>v.path,s=>{if(!r.currentRoute.value.params.id)return;let o=r.currentRoute.value.params.id;e.state.pageNum=parseInt(o.toString())});function I(){e.commit("pushPage",{router:r,num:1,force:!0})}const D=()=>{let s=e.state.pages.map(t=>t.blocks),o=[].concat.apply([],s),a=o.filter(t=>t.hide===!1).length,n=o.filter(t=>t.hide===!1&&t.completed===!0).length;e.state.progress=(n/a*100).toFixed(1)};return(s,o)=>(l(),c(L,{tag:"Card"},{default:E(()=>[(l(!0),p(P,null,b(u(m),(a,n)=>f((l(),c(M,{key:n},{default:E(()=>[_("form",null,[_("div",z,[_("h2",G,B(a.title),1),(l(!0),p(P,null,b(a.blocks,t=>(l(),p("div",{class:N(["my-4 question",{"form-hide need-toggle-hide":t.hide}]),ref_for:!0,ref:T=>y(T,n,t.id,"")},[(l(),c(S(R(t.component)),{block:t,index:n,onToggleChildren:w,onCountProgress:D},null,40,["block","index"]))],2))),256))]),_("div",H,[f(k(C,{msg:"下一頁",class:"",onClick:o[0]||(o[0]=t=>u(e).commit("pushPage",{router:u(r),num:1}))},null,512),[[d,u(e).state.pageNum<u(e).state.pages.length]]),f(k(C,{msg:"送出",class:"w-60",onClick:o[1]||(o[1]=t=>I())},null,512),[[d,u(e).state.pageNum>=u(e).state.pages.length]])])])]),_:2},1024)),[[d,u(e).state.pageNum==n+1]])),128))]),_:1}))}});export{Q as default};
