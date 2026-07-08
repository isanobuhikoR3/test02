
let all=[];
fetch('data/sounds.json').then(r=>r.json()).then(d=>{all=d;render(d);tags(d);document.getElementById('search').oninput=e=>filter(e.target.value);});
function render(arr){let h='';arr.forEach(s=>{h+=`<div class="card"><h3>${s.title}</h3><div>${s.tags.map(t=>`<span class="tag" onclick="filterTag('${t}')">${t}</span>`).join(' ')}</div><audio controls src="${s.file}"></audio><br><a href="${s.file}" download>ダウンロード</a></div>`});document.getElementById('soundList').innerHTML=h;}
function tags(d){const set=[...new Set(d.flatMap(x=>x.tags))];document.getElementById('tags').innerHTML=set.map(t=>`<span class="tag" onclick="filterTag('${t}')">${t}</span>`).join(' ');}
function filter(q){q=q.toLowerCase();render(all.filter(s=>s.title.toLowerCase().includes(q)||s.tags.join(' ').toLowerCase().includes(q)));}
function filterTag(t){render(all.filter(s=>s.tags.includes(t)));document.getElementById('search').value=t;}
