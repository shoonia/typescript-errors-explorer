let e=(t,s)=>{Array.isArray(s)?s.some((s=>e(t,s))):null!=s&&!1!==s&&t.append(s)},t=t=>{let s=new DocumentFragment;return e(s,t.children),s},s=new Map,r=new Set(["ref","children","__ns"]),n=new Set(["innerHTML","value","muted"]),a=(t,a)=>{if("function"==typeof t)return t(a);let c,o;for(c in t="string"==typeof t?a.__ns?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t):t,a)if(!r.has(c))if(o=a[c],s.has(c))s.get(c)(t,o);else if("style"===c)if("string"==typeof o)t.style.cssText=o;else for(c in o)c.startsWith("--")?t.style.setProperty(c,o[c]):t.style[c]=o[c];else n.has(c)||c.startsWith("on")&&c in t?t[c]=o:null==o||"boolean"==typeof o&&!/^(ari|dat)a-/.test(c)?o?t.setAttribute(c,""):t.removeAttribute(c):t.setAttribute(c,o);return e("template"===t.localName?t.content:t,a.children),o=a.ref,o&&("function"==typeof o?o(t):o.current=t),t},c=e=>{let t=new Text(e);return[t,e=>{t.textContent=e}]};const o=async()=>{const e=await fetch("https://raw.githubusercontent.com/microsoft/TypeScript/main/src/compiler/diagnosticMessages.json"),t=await e.json(),s=[];for(const e in t){const r=t[e];s.push({message:e,code:`${r.code}`,category:r.category})}return s},l=()=>new URL(location.href).searchParams.get("q")||"",i=Math.ceil(window.innerHeight/70),h=(e,t)=>e.filter((e=>e.code.startsWith(t)||e.message.toLowerCase().includes(t))),{dispatch:d,connect:p,readyStore:u}=(e=>{let t={},s={},r=[],n=(e,r)=>{if("@dispatch"!==e&&n("@dispatch",[e,r,t[e]]),t[e]){let a;t[e].forEach((n=>{let c=t[e].includes(n)&&n(s,r);c&&"function"!=typeof c.then&&(s={...s,...c},a={...a,...c})})),a&&n("@changed",a)}},a=(e,s)=>((t[e]||(t[e]=[])).push(s),()=>{t[e]=t[e].filter((e=>e!==s))}),c=()=>s,o=e=>n("@set",e);return a("@set",((e,t)=>t)),e.forEach((e=>{e&&e({dispatch:n,on:a,get:c,set:o})})),n("@init"),{dispatch:n,getState:c,setState:o,connect(...e){let t=e.pop();return r.push({keys:e,cb:t}),()=>{r=r.filter((e=>e.cb!==t))}},readyStore:()=>(n("@ready"),a("@changed",((e,t)=>{r.forEach((e=>{e.keys.some((e=>e in t))&&e.cb(s)}))})),Promise.all(r.map((e=>e.cb(s)))))}})([async e=>{e.on("@init",(()=>({isLoad:!1,allMessages:[],messages:[],search:l(),start:0,end:0}))),e.on("set/search",(({allMessages:e},t)=>({search:t,messages:h(e,t),start:0,end:i}))),e.on("set/scroll",(({messages:e,end:t})=>{if(e.length>t)return{start:t,end:t+i}}));const t=await o(),{search:s}=e.get();e.set({isLoad:!0,allMessages:t,messages:h(t,s),end:i})}]),g=()=>{const e=Object.seal({current:t});var t;const s=new URL(location.href);return p("search",(t=>{e.current.value=t.search})),a("label",{class:"b",children:[a("div",{class:"c",children:"Error code or message"}),a("input",{ref:e,type:"text",class:"d",oninput:()=>{const t=e.current.value.trim().toLowerCase();t?s.searchParams.set("q",t):s.searchParams.delete("q"),history.pushState(null,"",s.href),d("set/search",t)},placeholder:"code or message"})]})};const f=()=>{const[e,t]=c("0"),[s,r]=c("0");return p("allMessages",(({allMessages:e})=>{t(`${e.length}`)})),p("messages",(({messages:e})=>{r(`${e.length}`)})),a("div",{class:"e",children:[s,a("b",{children:"/"}),e]})};const m=e=>{if(e.length<1)return e=>e;const s=e.replace(/[\[\]()\|\\.*\^\?\+]/g,(e=>"\\"+e)),r=new RegExp(s,"i");return s=>{const n=s.match(r);return Array.isArray(n)?a(t,{children:[s.slice(0,n.index),a("mark",{children:n[0]}),s.slice((n.index??0)+e.length)]}):s}},y=()=>a("ul",{class:"f",ref:e=>{p("start","end",(({isLoad:s,messages:r,search:n,start:c,end:o})=>{if(s&&r.length<1)return e.replaceChildren(a("li",{class:"g",children:a("p",{children:a("em",{children:"Not Found"})})}));const l=m(n),i=a(t,{});r.slice(c,o).forEach((e=>{i.append(a("li",{class:"g",children:[a("code",{children:[l(e.code),": ",l(e.category)]}),a("p",{class:"h",children:l(e.message)})]}))})),c?e.append(i):e.replaceChildren(i)}))}});const w=()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&d("set/scroll")}))}));return a("footer",{ref:t=>e.observe(t),class:"i"})};document.body.append(a((()=>a("main",{class:"a",children:[a("h1",{children:"TypeScript errors explorer"}),a(g,{}),a(f,{}),a(y,{}),a(w,{})]})),{})),window.addEventListener("popstate",(()=>{d("set/search",l())})),u();