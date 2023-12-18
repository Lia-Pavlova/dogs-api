import{a as d,S as m,i as u}from"./assets/vendor-fDOLW-t_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();d.defaults.headers.common["x-api-key"]="live_bZyRPLm1uOYS9QPcxpbkaFgc11d5jjub0iIvWku5Ip9NDOKpHyQv7K9zy4soAjCd";async function h(){return await d.get("https://api.thedogapi.com/v1/breeds").then(e=>e.data)}async function y(e){return await d.get(`https://api.thedogapi.com/v1/images/search?breed_ids=${e}`).then(t=>t.data)}const b="/dogs-api/assets/no_image-2P0pKWDo.png",p=document.getElementById("breed-select"),c=document.querySelector(".dog-info"),a=document.querySelector(".spinner"),v=new m({select:p,settings:{placeholderText:"Search breeds"}}),f={title:"Error",message:"❌ Oops! Something went wrong! Try reloading the page!",position:"topRight",color:"red"};function g(e){e.style.display="flex"}function l(e){e.style.display="none"}function w(e){const t=e[0].breeds[0];c.innerHTML=`
    <div class="wrapper">
      <img class="dog-img" src="${e[0].url}" alt="Dog Image"/>
      <div>
        <h2>${t.name}</h2>
        <article><b>Description:</b> ${t.description}</article><br>
        <article><b>Temperament:</b> ${t.temperament}</article><br>
        <article><b>Country:</b> ${t.origin}</article>
        <img src="https://flagsapi.com/${t.country_code}/shiny/64.png" onerror="src='${b}'" width="64px" alt="country flag"> 
      </div>
    </div>
  `,g(c)}async function S(){try{const e=p.value;l(c),g(a);const t=await y(e);w(t)}catch{u.show(f)}finally{l(a)}}async function O(){try{const t=(await h()).map(({id:i,name:n})=>({text:n,value:i}));v.setData([{placeholder:!0,text:""},...t]),p.addEventListener("change",S)}catch{u.show(f)}finally{l(a)}}O();
//# sourceMappingURL=commonHelpers.js.map
