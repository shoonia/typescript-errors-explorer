!function(){"use strict";const e=(e=>{let t={},s={},r={dispatch(e,n){if("@dispatch"!==e&&r.dispatch("@dispatch",[e,n,t[e]]),t[e]){let c;t[e].forEach((a=>{let i=t[e].includes(a)&&a(s,n,r);i&&"function"!=typeof i.then&&(s={...s,...i},c={...c,...i})})),c&&r.dispatch("@changed",c)}},get:()=>s,on:(e,s)=>((t[e]||(t[e]=[])).push(s),()=>{t[e]=t[e].filter((e=>e!==s))})};return e.forEach((e=>{e&&e(r)})),r.dispatch("@init"),r})([async({on:e,dispatch:t})=>{e("@init",(()=>({allMessages:[],messages:[],search:""}))),e("data/update",((e,t)=>t));try{const e=(e=>{const t=[];for(const s in e){const r=e[s];t.push({message:s,code:`${r.code}`,category:r.category})}return t})(await(async()=>(await fetch("https://raw.githubusercontent.com/microsoft/TypeScript/main/src/compiler/diagnosticMessages.json")).json())());t("data/update",{allMessages:e,messages:e})}catch{}}]),{getState:t,dispatch:s,connect:r}=(e=>{let t=[];return e.on("@changed",((e,s)=>{t.forEach((t=>{t.keys.some((e=>e in s))&&t.cb(e)}))})),{getState:e.get,dispatch:e.dispatch,connect(...s){let r=s.pop();return s.length>0&&t.push({keys:s,cb:r}),r(e.get()),()=>{t=t.filter((e=>e.cb!==r))}}}})(e);let n=(e,t)=>{Array.isArray(t)?t.forEach((t=>{n(e,t)})):null!=t&&!1!==t&&e.appendChild(t.nodeType>0?t:document.createTextNode(t))},c=e=>{let t=document.createDocumentFragment();return n(t,e.children),t},a=new Map,i=new Set(["className","innerHTML","textContent","value","htmlFor"]),o=(e,t)=>{let s,r;if("function"==typeof e)return e(t);for(s in e="string"==typeof e?document.createElement(e):e,t)if("ref"!==s&&"children"!==s)if(r=t[s],a.has(s))a.get(s)(e,r);else if(i.has(s))e[s]=r;else if("style"===s)if("string"==typeof r)e.style.cssText=r;else for(s in r)"-"===s[0]?e.style.setProperty(s,r[s]):e.style[s]=r[s];else"o"===s[0]&&"n"===s[1]?(s=s.toLowerCase(),s in e&&(e[s]=r)):null!=r?"boolean"!=typeof r||/^(ari|dat)a-/.test(s)?e.setAttribute(s,r):r?e.setAttribute(s,""):e.removeAttribute(s):e.removeAttribute(s);return n("TEMPLATE"===e.tagName?e.content:e,t.children),r=t.ref,null!=r&&("function"==typeof r?r(e):r.current=e),e};o(document.body,{children:o("main",{class:"box",children:[o("h1",{children:"TypeScript errors explorer"}),o("section",{class:"field",children:o((()=>o("label",{children:[o("div",{children:"Error code"}),o("input",{type:"text",class:"search",onInput:({target:e})=>{const{allMessages:r}=t(),n=e.value.trim().toLowerCase(),c=r.filter((e=>e.code.startsWith(n)||e.message.toLowerCase().includes(n)));setTimeout((()=>{s("data/update",{messages:c,search:n})}))}})]})),{})}),o("section",{children:o((()=>o("ul",{class:"list",ref:e=>{r("messages",(({messages:t,search:s})=>{const r=(e=>{if(e.length<1)return e=>e;const t=new RegExp(e,"i");return s=>{const r=s.match(t);return Array.isArray(r)?[s.slice(0,r.index),o("mark",{children:r[0]}),s.slice(r.index+e.length)]:s}})(s),n=t.reduce(((e,t)=>o(e,{children:o("li",{class:"item",children:[o("code",{children:[r(t.code),": ",t.category]}),o("p",{class:"message",children:r(t.message)})]})})),o(c,{}));e.replaceChildren(n)}))}})),{})})]})})}();
