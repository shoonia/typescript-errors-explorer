!function(){"use strict";const e=(e=>{let t={},n={},r={dispatch(e,s){if("@dispatch"!==e&&r.dispatch("@dispatch",[e,s,t[e]]),t[e]){let c;t[e].forEach((a=>{let i=t[e].includes(a)&&a(n,s,r);i&&"function"!=typeof i.then&&(n={...n,...i},c={...c,...i})})),c&&r.dispatch("@changed",c)}},get:()=>n,on:(e,n)=>((t[e]||(t[e]=[])).push(n),()=>{t[e]=t[e].filter((e=>e!==n))})};return e.forEach((e=>{e&&e(r)})),r.dispatch("@init"),r})([async({on:e,dispatch:t})=>{e("@init",(()=>({allMessages:{},messages:{}}))),e("data/update",((e,t)=>t));try{const e=(e=>{const t={};for(const n in e){const r=e[n];t[r.code]={message:n,category:r.category}}return t})(await(async()=>(await fetch("https://raw.githubusercontent.com/microsoft/TypeScript/main/src/compiler/diagnosticMessages.json")).json())());t("data/update",{allMessages:e,messages:e})}catch{}}]),{getState:t,dispatch:n,connect:r}=(e=>{let t=[];return e.on("@changed",((e,n)=>{t.forEach((t=>{t.keys.some((e=>e in n))&&t.cb(e)}))})),{getState:e.get,dispatch:e.dispatch,connect(...n){let r=n.pop();return n.length>0&&t.push({keys:n,cb:r}),r(e.get()),()=>{t=t.filter((e=>e.cb!==r))}}}})(e);let s=(e,t)=>{Array.isArray(t)?t.forEach((t=>{s(e,t)})):null!=t&&!1!==t&&e.appendChild(t.nodeType>0?t:document.createTextNode(t))},c=e=>{let t=document.createDocumentFragment();return s(t,e.children),t},a=new Map,i=new Set(["className","innerHTML","textContent","value","htmlFor"]),o=(e,t)=>{let n,r;if("function"==typeof e)return e(t);for(n in e="string"==typeof e?document.createElement(e):e,t)if("ref"!==n&&"children"!==n)if(r=t[n],a.has(n))a.get(n)(e,r);else if(i.has(n))e[n]=r;else if("style"===n)if("string"==typeof r)e.style.cssText=r;else for(n in r)"-"===n[0]?e.style.setProperty(n,r[n]):e.style[n]=r[n];else"o"===n[0]&&"n"===n[1]?(n=n.toLowerCase(),n in e&&(e[n]=r)):null!=r?"boolean"!=typeof r||/^(ari|dat)a-/.test(n)?e.setAttribute(n,r):r?e.setAttribute(n,""):e.removeAttribute(n):e.removeAttribute(n);return s("TEMPLATE"===e.tagName?e.content:e,t.children),r=t.ref,null!=r&&("function"==typeof r?r(e):r.current=e),e};const l={current:null};o(document.body,{children:[o("h1",{children:"TypeScript errors explorer"}),o("div",{children:o((()=>o("label",{children:[o("div",{children:"Error code"}),o("input",{type:"text",onInput:({target:e})=>{const{allMessages:r}=t(),s=e.value.trim(),c={};for(const e in r)e.startsWith(s)&&(c[e]=r[e]);setTimeout((()=>{n("data/update",{messages:c})}))}})]})),{})}),o("ul",{ref:l})]}),r("messages",(({messages:e})=>{const t=o(c,{});for(const n in e){const r=e[n];o(t,{children:o("li",{children:[o("code",{children:n}),":",o("mark",{children:r.category}),o("div",{children:r.message})]})})}l.current.replaceChildren(t)}))}();
