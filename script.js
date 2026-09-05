const pets=[
{name:"Shadow Dragon",icon:"🐉",value:100,demand:"High",trend:"↑"},
{name:"Frost Dragon",icon:"🐲",value:85,demand:"High",trend:"↑"},
{name:"Bat Dragon",icon:"🦇",value:120,demand:"High",trend:"→"},
{name:"Turtle",icon:"🐢",value:8,demand:"Good",trend:"↑"},
{name:"Crow",icon:"🐦‍⬛",value:22,demand:"High",trend:"→"},
{name:"Arctic Reindeer",icon:"🦌",value:14,demand:"Good",trend:"↑"},
{name:"Kangaroo",icon:"🦘",value:7,demand:"Good",trend:"→"}
];

const state={you:[],them:[]};

function renderValues(){
 const q=(document.getElementById("search").value||"").toLowerCase();
 const grid=document.getElementById("valueGrid");
 grid.innerHTML=pets.filter(p=>p.name.toLowerCase().includes(q)).map(p=>`
 <div class="value-card"><div class="pet-icon">${p.icon}</div><h3>${p.name}</h3>
 <div class="value-meta"><span>Demand: ${p.demand}</span><span class="trend">${p.trend}</span></div>
 <div style="margin-top:12px"><span class="value">${p.value}</span> Value</div></div>`).join("");
}

function addItem(side){
 const p=pets[(state[side].length)%pets.length];
 state[side].push({...p});
 renderTrade(side);
 updateResult();
}
function removeItem(side,i){state[side].splice(i,1);renderTrade(side);updateResult()}
function renderTrade(side){
 const box=document.getElementById(side+"Items");
 box.innerHTML=state[side].map((p,i)=>`<div class="item"><span>${p.icon} ${p.name} <small>(${p.value})</small></span><button onclick="removeItem('${side}',${i})">✕</button></div>`).join("");
 document.getElementById(side+"Total").textContent=state[side].reduce((a,b)=>a+b.value,0).toFixed(1);
}
function updateResult(){
 const a=state.you.reduce((x,p)=>x+p.value,0),b=state.them.reduce((x,p)=>x+p.value,0);
 const card=document.getElementById("resultCard");
 if(!a&&!b){card.className="result-card neutral";card.querySelector("h3").textContent="Pet ekleyerek başla";card.querySelector(".result-number").textContent="—";return}
 if(!b){card.className="result-card neutral";card.querySelector("h3").textContent="İki tarafa da pet ekle";card.querySelector(".result-number").textContent="—";return}
 const ratio=a/b;let label,cls;
 if(ratio>=1.10){label="WIN";cls="win"} else if(ratio<=0.90){label="LOSE";cls="lose"} else {label="FAIR";cls="fair"}
 card.className="result-card "+cls;card.querySelector("h3").textContent=label;card.querySelector(".result-number").textContent=ratio.toFixed(2)+"×";
}
document.getElementById("clearBtn").onclick=()=>{state.you=[];state.them=[];renderTrade("you");renderTrade("them");updateResult()};
renderValues();renderTrade("you");renderTrade("them");