import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                    */const a=document.querySelector(".feedback-form");window.addEventListener("load",()=>{const s=localStorage.getItem("feedback-form-state");if(s){const{email:e,message:t}=JSON.parse(s);e&&(a.elements.email.value=e),t&&(a.elements.message.value=t)}});a.addEventListener("input",s=>{const{value:e,name:t}=s.target;localStorage.setItem("feedback-form-state",JSON.stringify({...JSON.parse(localStorage.getItem("feedback-form-state")),[t]:e.trim()}))});a.addEventListener("submit",s=>{s.preventDefault();const e=a.elements.email.value.trim(),t=a.elements.message.value.trim();e&&t&&(console.log({email:e,message:t}),localStorage.removeItem("feedback-form-state"),a.reset())});
//# sourceMappingURL=commonHelpers2.js.map
