
(function(){
var reduce=false;try{reduce=matchMedia('(prefers-reduced-motion: reduce)').matches}catch(e){}
var bar=document.getElementById('main-menu');if(!bar)return;
var tg=document.getElementById('mm-toggle'),list=document.getElementById('mm-list');
var gbs=[].slice.call(bar.querySelectorAll('.mm-gb'));
function closeGroups(except){gbs.forEach(function(b){if(b===except)return;b.setAttribute('aria-expanded','false');var p=document.getElementById(b.getAttribute('aria-controls'));if(p)p.hidden=true})}
function closeAll(){closeGroups(null);if(tg){tg.setAttribute('aria-expanded','false');list.classList.remove('open')}}
if(tg)tg.addEventListener('click',function(){var o=tg.getAttribute('aria-expanded')==='true';if(o){closeAll()}else{tg.setAttribute('aria-expanded','true');list.classList.add('open')}});
gbs.forEach(function(b){b.addEventListener('click',function(){var p=document.getElementById(b.getAttribute('aria-controls')),o=b.getAttribute('aria-expanded')==='true';closeGroups(b);b.setAttribute('aria-expanded',o?'false':'true');p.hidden=o})
 b.addEventListener('keydown',function(ev){if(ev.key==='ArrowDown'){var p=document.getElementById(b.getAttribute('aria-controls'));if(p&&!p.hidden){var a=p.querySelector('a');if(a){ev.preventDefault();a.focus()}}}})});
bar.addEventListener('keydown',function(ev){var a=document.activeElement;
 if(ev.key==='Escape'){var b=a&&a.closest?a.closest('.mm-g'):null;var btn=b?b.querySelector('.mm-gb'):null;var open=gbs.some(function(x){return x.getAttribute('aria-expanded')==='true'});closeAll();if(tg&&tg.offsetParent)tg.focus();else if(btn&&open)btn.focus()}
 else if((ev.key==='ArrowDown'||ev.key==='ArrowUp')&&a&&a.closest&&a.closest('.mm-panel')){var as=[].slice.call(a.closest('.mm-panel').querySelectorAll('a')),i=as.indexOf(a);ev.preventDefault();var n=ev.key==='ArrowDown'?Math.min(as.length-1,i+1):Math.max(0,i-1);as[n].focus()}});
document.addEventListener('click',function(ev){if(!bar.contains(ev.target))closeAll()});
function reveal(id){var el=document.getElementById(id);if(!el)return null;var d=el;while(d){if(d.tagName==='DETAILS'&&!d.open)d.open=true;d=d.parentElement}return el}
function go(hash){var id=decodeURIComponent(hash.replace(/^#/,''));var el=reveal(id);if(!el)return false;
 try{el.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})}catch(e){el.scrollIntoView()}
 try{history.pushState(null,'',hash)}catch(e){}
 if(!el.hasAttribute('tabindex'))el.setAttribute('tabindex','-1');try{el.focus({preventScroll:true})}catch(e){}return true}
document.addEventListener('click',function(ev){var a=ev.target.closest?ev.target.closest('.mm a,#sitemap a,.qj a,.route a'):null;if(!a)return;var h=a.getAttribute('href');if(!h||h.charAt(0)!=='#'||h.length<2)return;
 if(document.getElementById(decodeURIComponent(h.slice(1)))){ev.preventDefault();closeAll();go(h);if(h==='#sitemap-search'){var q=document.getElementById('sm-q');if(q)setTimeout(function(){q.focus()},350)}}});
if(location.hash==='#sitemap-search'){var sq0=document.getElementById('sm-q');if(sq0)setTimeout(function(){sq0.focus()},350)}
window.addEventListener('hashchange',function(){if(location.hash.length>1)reveal(decodeURIComponent(location.hash.slice(1)))});
if(location.hash.length>1){var el0=reveal(decodeURIComponent(location.hash.slice(1)));if(el0)setTimeout(function(){el0.scrollIntoView()},0)}
})();

(function(){
  var b=document.getElementById('totop');if(!b)return;
  var reduce=false;try{reduce=matchMedia('(prefers-reduced-motion: reduce)').matches}catch(e){}
  function y(){return window.pageYOffset||document.documentElement.scrollTop||0}
  function upd(){b.hidden=y()<900}
  window.addEventListener('scroll',upd,{passive:true});upd();
  b.addEventListener('click',function(){
    try{window.scrollTo({top:0,behavior:reduce?'auto':'smooth'})}catch(e){window.scrollTo(0,0)}
    var m=document.getElementById('main-menu');
    if(m){try{m.setAttribute('tabindex','-1');m.focus({preventScroll:true})}catch(e){}}
  });
})();
