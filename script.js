// Fade-in effect
document.body.style.opacity=0;
window.addEventListener("DOMContentLoaded", ()=>{
    document.body.style.transition="opacity 0.8s";
    document.body.style.opacity=1;
});

// System status animation (only on index)
const statusEl = document.getElementById("system-status");
if(statusEl){
    const states=["🟢 ONLINE","🟡 DEPLOYING","🔴 MAINTENANCE"];
    let i=0;
    setInterval(()=>{statusEl.innerText=states[i]; i=(i+1)%states.length;},2000);
}

// Buttons linking to pages
document.querySelectorAll("button[data-page]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
        const page = btn.getAttribute("data-page");
        window.location.href = page;
    });
});
