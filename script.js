const a=document.getElementById('bgm');
a.play().catch(()=>{});
document.getElementById('musicBtn').onclick=()=>a.paused?a.play():a.pause();
setInterval(()=>{
 let h=document.createElement('div');
 h.className='heart';
 h.textContent='❤';
 h.style.left=(Math.random()*90)+'vw';
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),8000);
},5000);
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){a.play().catch(()=>{});}}),{threshold:.8}).observe(document.getElementById('ending'));
