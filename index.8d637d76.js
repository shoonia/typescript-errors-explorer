var e,t,r,a,s,n,l,i,c,o,h,d,p;let f,g,u,m,w,y,v;const _="http://www.w3.org/2000/svg",b=new Set(["value"]),L=new Set(["_","children","ref"]),E=new Map([["style",(e,t,r)=>{if("string"==typeof t)e.setAttribute(r,t);else for(r in t)r.startsWith("--")?e.style.setProperty(r,t[r]):e.style[r]=t[r]}],["$",(e,t,r)=>{for(r in t)e.addEventListener(r,t[r])}]]),S=(e,t)=>{Array.isArray(e)?e.some(e=>S(e,t)):!1!==e&&null!=e&&t.append(e)},x=e=>(S(e,e=new DocumentFragment),e),C=(e,t)=>{let r,a,s=t._?document.createElementNS(t._,e):document.createElement(e);for(r in t)!L.has(r)&&(a=t[r],E.has(r)?E.get(r)(s,a,r):b.has(r)||r.startsWith("on")?s[r]=a:null!=a&&("boolean"!=typeof a||"-"===r[4])?s.setAttribute(r,a):a&&s.setAttribute(r,""));return S(t.children,"template"===e?s.content:s),(a=t.ref)&&("function"==typeof a?a(s):a.current=s),s},A=e=>{let t=new Text(e);return[t,r=>{e!==r&&(t.textContent=e=r)}]};e="_veqy2",t="_tEvFj",r="_KbgC5",a="_-4Yzx",s="_w9iBf";const j=async()=>{let e=await fetch("https://raw.githubusercontent.com/microsoft/TypeScript/main/src/compiler/diagnosticMessages.json"),t=await e.json(),r=[];for(let e in t){let a=t[e];r.push({message:e,code:`${a.code}`,category:a.category})}return r},M=()=>new URL(location.href).searchParams.get("q")||"",P=Math.ceil(window.innerHeight/90),U=(e,t)=>e.filter(e=>e.code.startsWith(t)||e.message.toLowerCase().includes(t)),{dispatch:W,connect:k,readyStore:q}=(p=[async e=>{e.on("@init",()=>({isLoad:!1,all:[],items:[],search:M(),start:0,end:0})),e.on("search",({all:e,search:t},r)=>{if(t!==r)return{search:r,items:U(e,r),start:0,end:P}}),e.on("scroll",({items:e,end:t})=>{if(e.length>t)return{start:t,end:t+P}});let t=await j(),{search:r}=e.get();e.set({isLoad:!0,all:t,items:U(t,r),end:P})}],f=Object.create(null),g={},u=[],m=(e,t)=>{if("@dispatch"!==e&&m("@dispatch",[e,t]),e in f){let r;f[e].forEach(e=>{let a=e(g,t);a&&"function"!=typeof a.then&&(g={...g,...a},r={...r,...a})}),r&&m("@changed",r)}},w=(e,t)=>((f[e]??=[]).push(t),()=>{f[e]=f[e].filter(e=>e!==t)}),y=()=>g,v=e=>m("@set",e),w("@set",(e,t)=>t),p.forEach(e=>{e&&e({dispatch:m,on:w,get:y,set:v})}),m("@init"),{dispatch:m,getState:y,setState:v,connect(...e){let t=e.pop();return u.push({e:e,f:t}),()=>{u=u.filter(e=>e.f!==t)}},readyStore:()=>(m("@ready"),w("@changed",(e,t)=>{u.forEach(e=>{e.e.some(e=>e in t)&&e.f(g)})}),Promise.all(u.map(e=>e.f(g))))}),z=new URL(location.href);n="_Dzkg9",l="_1ZAuX",i="_OJN7g",c="_tTgUM";const B=e=>{if(e.length<1)return e=>e;let t=RegExp(e.replace(/[\[\](\){\}\|\\.*\^\?\+]/g,e=>"\\"+e),"i");return r=>{let a=r.match(t);return Array.isArray(a)?x([r.slice(0,a.index),C("mark",{children:a[0]}),r.slice((a.index??0)+e.length)]):r}};function D(e,t){window.dataLayer.push(arguments)}o="_JOyZC",h="_jF5xG",d="_XDspg",window.dataLayer=[],D("js",new Date),D("config","G-2W35Q7B86C"),document.body.append(x([C("header",{class:e,children:C("div",{class:h,children:C("a",{href:"https://u24.gov.ua/",class:d,children:[C("svg",{"aria-label":"flag of Ukraine",viewBox:"0 0 3 2",width:"2em",children:[C("path",{fill:"#005bbb",d:"M0 0h3v1H0z",_:_}),C("path",{fill:"#ffd500",d:"M0 1h3v1H0z",_:_})],_:_}),"Support Ukraine"]})})}),C("main",{ref:q,class:t,children:[C("h1",{children:"TypeScript errors explorer"}),C("search",{children:C("label",{class:r,children:[C("div",{class:a,children:"Error code or message"}),C("input",{ref:e=>{e.addEventListener("input",()=>{let t=e.value.trim().toLowerCase();t?z.searchParams.set("q",t):z.searchParams.delete("q"),history.pushState("","",z.href),W("search",t)}),k("search",t=>{e.value=t.search})},type:"search",class:s,placeholder:"code or message",maxlength:"250"})]})}),(()=>{let[e,t]=A(0),[r,a]=A(0),s=k("all",({all:e,isLoad:r})=>{r&&s(),t(e.length)});return k("items",({items:e})=>a(e.length)),C("div",{class:n,children:[r,C("b",{children:"/"}),e]})})({}),C("ul",{class:l,ref:e=>{k("start","end",({isLoad:t,items:r,search:a,start:s,end:n})=>{let l=r.length;if(t&&l<1)return e.replaceChildren(C("li",{class:i,children:C("p",{children:C("em",{children:"Not Found"})})}));let o=B(a),h=x();for(let e=s,t=n<l?n:l;e<t;e++){let t=r[e];h.append(C("li",{class:i,children:[C("code",{children:[o(t.code),": ",o(t.category)]}),C("p",{class:c,children:o(t.message)})]}))}s?e.append(h):e.replaceChildren(h)})}})]}),C("footer",{ref:e=>new IntersectionObserver(e=>e.forEach(e=>{e.isIntersecting&&W("scroll")})).observe(e),class:o}),C("script",{async:"",src:"https://www.googletagmanager.com/gtag/js?id=G-2W35Q7B86C"})])),addEventListener("popstate",()=>W("search",M()));