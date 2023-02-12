!function(){const e=async()=>(await fetch("https://raw.githubusercontent.com/microsoft/TypeScript/main/src/compiler/diagnosticMessages.json")).json(),t=()=>{const e=new URL(location).searchParams;return e.has("q")?e.get("q"):""},s=Math.ceil(window.innerHeight/70),r=(e,t)=>e.filter((e=>e.code.startsWith(t)||e.message.toLowerCase().includes(t))),{dispatch:n,connect:a,readyStore:c}=(e=>{let t={},s={},r=[],n=(e,r)=>{if("@dispatch"!==e&&n("@dispatch",[e,r,t[e]]),t[e]){let a;t[e].forEach((n=>{let c=t[e].includes(n)&&n(s,r);c&&"function"!=typeof c.then&&(s={...s,...c},a={...a,...c})})),a&&n("@changed",a)}},a=(e,s)=>((t[e]||(t[e]=[])).push(s),()=>{t[e]=t[e].filter((e=>e!==s))}),c=()=>s,o=e=>n("@set",e);return a("@set",((e,t)=>t)),e.forEach((e=>{e&&e({dispatch:n,on:a,get:c,set:o})})),n("@init"),{dispatch:n,getState:c,setState:o,connect(...e){let t=e.pop();return r.push({keys:e,cb:t}),()=>{r=r.filter((e=>e.cb!==t))}},readyStore:()=>(n("@ready"),a("@changed",((e,t)=>{r.forEach((e=>{e.keys.some((e=>e in t))&&e.cb(s)}))})),Promise.all(r.map((e=>e.cb(s)))))}})([async n=>{n.on("@init",(()=>({isLoad:!1,allMessages:[],messages:[],search:t(),start:0,end:0}))),n.on("set/search",(({allMessages:e},t)=>({search:t,messages:r(e,t),start:0,end:s}))),n.on("set/scroll",(({messages:e,end:t})=>{if(e.length>t)return{start:t,end:t+s}}));const a=(e=>{const t=[];for(const s in e){const r=e[s];t.push({message:s,code:`${r.code}`,category:r.category})}return t})(await e()),{search:c}=n.get();n.set({isLoad:!0,allMessages:a,messages:r(a,c),end:s})}]);let o=(e,t)=>{Array.isArray(t)?t.some((t=>o(e,t))):null!=t&&!1!==t&&e.append(t)},i=e=>{let t=new DocumentFragment;return o(t,e.children),t},l=new Map,h=new Set(["innerHTML","textContent","value"]),d=new Set(["ref","children","__ns"]),u=(e,t)=>{let s,r;if("function"==typeof e)return e(t);for(s in e="string"==typeof e?t.__ns?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e):e,t)if(!d.has(s))if(r=t[s],l.has(s))l.get(s)(e,r);else if(h.has(s)||s.startsWith("on"))s in e&&(e[s]=r);else if("style"===s)if("string"==typeof r)e.style.cssText=r;else for(s in r)s.startsWith("--")?e.style.setProperty(s,r[s]):e.style[s]=r[s];else null!=r?"boolean"!=typeof r||/^(ari|dat)a-/.test(s)?e.setAttribute(s,r):r?e.setAttribute(s,""):e.removeAttribute(s):e.removeAttribute(s);return o("template"===e.localName?e.content:e,t.children),r=t.ref,null!=r&&("function"==typeof r?r(e):r.current=e),e};u(document.body,{children:u("main",{class:"a",children:[u("h1",{children:"TypeScript errors explorer"}),u((()=>{const e=Object.seal({current:t});var t;const s=new URL(location);return a("search",(t=>{e.current.value=t.search})),u("label",{class:"b",children:[u("div",{class:"c",children:"Error code or message"}),u("input",{ref:e,type:"text",class:"d",oninput:e=>{const t=e.target.value.trim().toLowerCase();t?s.searchParams.set("q",t):s.searchParams.delete("q"),history.pushState(null,null,s.href),n("set/search",t)},placeholder:"code or message"})]})}),{}),u((()=>u("ul",{class:"e",ref:e=>{a("start","end",(({isLoad:t,messages:s,search:r,start:n,end:a})=>{if(t&&s.length<1)return e.replaceChildren(u("li",{class:"f",children:u("p",{children:u("em",{children:"Not Found"})})}));const c=(e=>{if(e.length<1)return e=>e;const t=e.replace(/[\[\]()\|\\.*\^\?\+]/g,(e=>"\\"+e)),s=new RegExp(t,"i");return t=>{const r=t.match(s);return Array.isArray(r)?u(i,{children:[t.slice(0,r.index),u("mark",{children:r[0]}),t.slice(r.index+e.length)]}):t}})(r),o=s.slice(n,a).reduce(((e,t)=>u(e,{children:u("li",{class:"f",children:[u("code",{children:[c(t.code),": ",c(t.category)]}),u("p",{class:"g",children:c(t.message)})]})})),u(i,{}));n?e.append(o):e.replaceChildren(o)}))}})),{}),u((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&n("set/scroll")}))}));return u("footer",{ref:t=>{e.observe(t)},class:"h"})}),{})]})}),window.addEventListener("popstate",(()=>{n("set/search",t())})),c()}();