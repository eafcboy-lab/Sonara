const sampleTracks=[
  {title:"Midnight City",artist:"M83",query:"M83 Midnight City",cover:"c1",symbol:"☾"},
  {title:"Blinding Lights",artist:"The Weeknd",query:"The Weeknd Blinding Lights",cover:"c2",symbol:"✦"},
  {title:"Sunflower",artist:"Post Malone, Swae Lee",query:"Post Malone Swae Lee Sunflower",cover:"c3",symbol:"☼"},
  {title:"Starboy",artist:"The Weeknd, Daft Punk",query:"The Weeknd Daft Punk Starboy",cover:"c4",symbol:"✧"}
];
let currentQuery="";let currentTrack=null;
const $=s=>document.querySelector(s);
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function musicUrl(q){return "https://music.youtube.com/search?q="+encodeURIComponent(q)}
function trackHTML(t,i){return `<div class="track"><div class="cover ${t.cover||["c1","c2","c3","c4"][i%4]}">${t.symbol||"♫"}</div><div class="track-meta"><b>${escapeHTML(t.title)}</b><small>${escapeHTML(t.artist||"YouTube Music search")}</small></div><button data-track="${i}" aria-label="Open ${escapeHTML(t.title)} in YouTube Music">↗</button></div>`}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function renderHome(){$("#home-tracks").innerHTML=sampleTracks.map(trackHTML).join("")}
function showScreen(id){document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active",s.id===id));document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("selected",b.dataset.screen===id));window.scrollTo({top:0,behavior:"smooth"})}
function search(q){q=q.trim();if(!q)return;currentQuery=q;$("#results-title").textContent="Results for “"+q+"”";const items=[{title:q,artist:"Search YouTube Music",query:q,symbol:"⌕"},...sampleTracks.filter(t=>(t.title+" "+t.artist).toLowerCase().includes(q.toLowerCase()))];$("#search-results").innerHTML=items.map(trackHTML).join("");}
document.addEventListener("click",e=>{
 const nav=e.target.closest("[data-screen]");if(nav){showScreen(nav.dataset.screen);return}
 const go=e.target.closest("[data-go]");if(go){showScreen(go.dataset.go+"-screen");return}
 const chip=e.target.closest("[data-query]");if(chip){$("#search-input").value=chip.dataset.query;showScreen("search-screen");search(chip.dataset.query);return}
 const quick=e.target.closest("[data-search]");if(quick){$("#search-input").value=quick.dataset.search;showScreen("search-screen");search(quick.dataset.search);return}
 const track=e.target.closest("[data-track]");if(track){const index=Number(track.dataset.track);const t=(document.querySelector("#search-screen").classList.contains("active")?[]:sampleTracks)[index]||{title:currentQuery||"Music",artist:"YouTube Music",query:currentQuery||"music"};currentTrack=t;$("#now-title").textContent=t.title;$("#now-artist").textContent=t.artist||"YouTube Music";window.open(musicUrl(t.query||t.title)," _blank");return}
});
$("#search-form").addEventListener("submit",e=>{e.preventDefault();search($("#search-input").value)});
$("#open-current").addEventListener("click",()=>{if(currentTrack)window.open(musicUrl(currentTrack.query||currentTrack.title),"_blank");else toast("Choose a track first")});
$("#install-help").addEventListener("click",()=>toast("In Safari: Share → Add to Home Screen"));
renderHome();
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}))}
