var e;let t,r,s,a,n,l,c;const i=(e,t)=>{Array.isArray(e)?e.some(e=>i(e,t)):null!=e&&!1!==e&&t.append(e)},o=e=>{let t=new DocumentFragment;return i(e,t),t},h=new Set(["ns","children","ref"]),d=new Map([["style",(e,t,r)=>{if("string"==typeof t)e.setAttribute(r,t);else for(r in t)r.startsWith("--")?e.style.setProperty(r,t[r]):e.style[r]=t[r]}]]),p=new Set(["value"]),f=(e,t)=>{let r,s,a=t.ns?document.createElementNS(t.ns,e):document.createElement(e);for(r in t)!h.has(r)&&(s=t[r],d.has(r)?d.get(r)(a,s,r):p.has(r)||r.startsWith("on")?a[r]=s:null!=s&&("boolean"!=typeof s||"-"===r[4])?a.setAttribute(r,s):s&&a.setAttribute(r,""));return i(t.children,"template"===e?a.content:a),(r=t.ref)&&("function"==typeof r?r(a):r.current=a),a},g=e=>{let t=new Text(e);return[t,r=>{e!==r&&(t.textContent=e=r)}]},u="http://www.w3.org/2000/svg",m=async()=>{let e=await fetch("https://raw.githubusercontent.com/microsoft/TypeScript/main/src/compiler/diagnosticMessages.json"),t=await e.json(),r=[];for(let e in t){let s=t[e];r.push({message:e,code:`${s.code}`,category:s.category})}return r},w=()=>new URL(location.href).searchParams.get("q")||"",y=Math.ceil(window.innerHeight/90),v=(e,t)=>e.filter(e=>e.code.startsWith(t)||e.message.toLowerCase().includes(t)),{dispatch:b,connect:L,readyStore:S}=(e=[async e=>{e.on("@init",()=>({isLoad:!1,all:[],items:[],search:w(),start:0,end:0})),e.on("search",({all:e,search:t},r)=>{if(t!==r)return{search:r,items:v(e,r),start:0,end:y}}),e.on("scroll",({items:e,end:t})=>{if(e.length>t)return{start:t,end:t+y}});let t=await m(),{search:r}=e.get();e.set({isLoad:!0,all:t,items:v(t,r),end:y})}],t={},r={},s=[],a=(e,s)=>{if("@dispatch"!==e&&a("@dispatch",[e,s]),t[e]){let n;t[e].forEach(e=>{let t=e(r,s);t&&"function"!=typeof t.then&&(r={...r,...t},n={...n,...t})}),n&&a("@changed",n)}},n=(e,r)=>((t[e]??=[]).push(r),()=>{t[e]=t[e].filter(e=>e!==r)}),l=()=>r,c=e=>a("@set",e),n("@set",(e,t)=>t),e.forEach(e=>{e&&e({dispatch:a,on:n,get:l,set:c})}),a("@init"),{dispatch:a,getState:l,setState:c,connect(...e){let t=e.pop();return s.push({k:e,c:t}),()=>{s=s.filter(e=>e.c!==t)}},readyStore:()=>(a("@ready"),n("@changed",(e,t)=>{s.forEach(e=>{e.k.some(e=>e in t)&&e.c(r)})}),Promise.all(s.map(e=>e.c(r))))}),E=new URL(location.href),x=e=>{if(e.length<1)return e=>e;let t=RegExp(e.replace(/[\[\](\){\}\|\\.*\^\?\+]/g,e=>"\\"+e),"i");return r=>{let s=r.match(t);return Array.isArray(s)?o([r.slice(0,s.index),f("mark",{children:s[0]}),r.slice((s.index??0)+e.length)]):r}};function A(e,t){window.dataLayer.push(arguments)}window.dataLayer=[],A("js",new Date),A("config","G-2W35Q7B86C"),document.body.append(o([f("header",{class:"a",children:f("div",{class:"j",children:f("a",{href:"https://u24.gov.ua/",class:"k",children:[f("svg",{"aria-label":"flag of Ukraine",viewBox:"0 0 3 2",width:"2em",children:[f("path",{fill:"#005bbb",d:"M0 0h3v1H0z",ns:u}),f("path",{fill:"#ffd500",d:"M0 1h3v1H0z",ns:u})],ns:u}),"Support Ukraine"]})})}),f("main",{ref:S,class:"b",children:[f("h1",{children:"TypeScript errors explorer"}),f("search",{children:f("label",{class:"c",children:[f("div",{class:"d",children:"Error code or message"}),f("input",{ref:e=>{e.addEventListener("input",()=>{let t=e.value.trim().toLowerCase();t?E.searchParams.set("q",t):E.searchParams.delete("q"),history.pushState("","",E.href),b("search",t)}),L("search",t=>{e.value=t.search})},type:"search",class:"e",placeholder:"code or message",maxlength:"250"})]})}),(()=>{let[e,t]=g(0),[r,s]=g(0),a=L("all",({all:e,isLoad:r})=>{r&&a(),t(e.length)});return L("items",({items:e})=>s(e.length)),f("div",{class:"f",children:[r,f("b",{children:"/"}),e]})})({}),f("ul",{class:"g",ref:e=>{L("start","end",({isLoad:t,items:r,search:s,start:a,end:n})=>{let l=r.length;if(t&&l<1)return e.replaceChildren(f("li",{class:"h",children:f("p",{children:f("em",{children:"Not Found"})})}));let c=x(s),i=o();for(let e=a,t=n<l?n:l;e<t;e++){let t=r[e];i.append(f("li",{class:"h",children:[f("code",{children:[c(t.code),": ",c(t.category)]}),f("p",{class:"i",children:c(t.message)})]}))}a?e.append(i):e.replaceChildren(i)})}})]}),f("footer",{ref:e=>new IntersectionObserver(e=>e.forEach(e=>{e.isIntersecting&&b("scroll")})).observe(e),class:"l"}),f("script",{async:"",src:"https://www.googletagmanager.com/gtag/js?id=G-2W35Q7B86C"})])),addEventListener("popstate",()=>b("search",w()));