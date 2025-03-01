import{a as f,S as m,i}from"./assets/vendor-KnZd4sWe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",y="49128328-9f71e16c7708b61d93c4a93f1";async function g(n){const t={key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(p,{params:t})).data}const c=document.querySelector(".gallery");let h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(){c.innerHTML=""}function L(n){const t=n.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:s,comments:u,downloads:d})=>`
            <li class="gallery-item">
                <a href="${a}">
                    <img src="${o}" alt="${e}" loading="lazy" />
                </a>
                <div class="info">
                    <p><b>Likes:</b> ${r}</p>
                    <p><b>Views:</b> ${s}</p>
                    <p><b>Comments:</b> ${u}</p>
                    <p><b>Downloads:</b> ${d}</p>
                </div>
            </li>
        `).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function S(){document.querySelector(".loader").classList.remove("hidden")}function w(){document.querySelector(".loader").classList.add("hidden")}const l=document.querySelector(".search-form"),q=l.querySelector("input");l.addEventListener("submit",async n=>{n.preventDefault();const t=q.value.trim();if(t===""){i.error({message:"Please enter a search term!"});return}b(),S();try{const{hits:o}=await g(t);o.length===0?i.warning({message:"Sorry, no images found. Try another query!"}):L(o)}catch{i.error({message:"Something went wrong. Please try again."})}finally{w()}});
//# sourceMappingURL=index.js.map
