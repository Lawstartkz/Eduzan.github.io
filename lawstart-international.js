/* LAWSTART: сценарии страницы «Международные возможности». Перенесены без изменений из встроенных скриптов прежней главной страницы:
   1) фильтры программ Венгрии и копирование шаблона письма; 2) копирование образцов, чек-лист мотивационного письма, планировщик проекта;
   3) автоматическое закрытие просроченного срока Kectil (данные в #kectil-config). */
(function(){var cards=[].slice.call(document.querySelectorAll('#nl-list .nl-card')),st={need:'all',level:'all',fund:false};
function apply(){var n=0;cards.forEach(function(c){var ok=(st.need==='all'||c.dataset.need===st.need)&&(st.level==='all'||c.dataset.level===st.level)&&!st.fund;c.hidden=!ok;if(ok)n++});
var e=document.getElementById('nl-empty');if(e)e.hidden=n!==0;var k=document.getElementById('nl-count');if(k)k.textContent='Показано программ: '+n+' из '+cards.length+'.'}
[].forEach.call(document.querySelectorAll('.nl-filt [data-f]'),function(b){b.addEventListener('click',function(){st[b.dataset.f]=b.dataset.v;[].forEach.call(document.querySelectorAll('.nl-filt [data-f="'+b.dataset.f+'"]'),function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});apply()})});
var f=document.getElementById('nl-fund');if(f)f.addEventListener('click',function(){st.fund=!st.fund;f.setAttribute('aria-pressed',st.fund?'true':'false');apply()});apply();
var cb=document.getElementById('nl-copy'),msg=document.getElementById('nl-copied');
function done(ok){if(msg){msg.textContent=ok?'Письмо скопировано.':'Не удалось скопировать: выделите текст и скопируйте вручную.'}}
function fb(txt){var ta=document.createElement('textarea');ta.value=txt;ta.setAttribute('readonly','');ta.style.cssText='position:fixed;top:0;left:0;opacity:0';document.body.appendChild(ta);ta.select();var ok=false;try{ok=document.execCommand('copy')}catch(x){}document.body.removeChild(ta);done(ok)}
if(cb)cb.addEventListener('click',function(){var txt=document.getElementById('nl-tpl').textContent;if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(function(){done(true)},function(){fb(txt)})}else{fb(txt)}})})();

(function(){
function done(id,ok){var m=document.getElementById(id);if(m)m.textContent=ok?'Скопировано.':'Не удалось скопировать: выделите текст и скопируйте вручную.'}
function fb(txt,id){var ta=document.createElement('textarea');ta.value=txt;ta.setAttribute('readonly','');ta.style.cssText='position:fixed;top:0;left:0;opacity:0';document.body.appendChild(ta);ta.select();var ok=false;try{ok=document.execCommand('copy')}catch(x){}document.body.removeChild(ta);done(id,ok)}
function copy(txt,id){if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(function(){done(id,true)},function(){fb(txt,id)})}else{fb(txt,id)}}
[].forEach.call(document.querySelectorAll('button[data-copy]'),function(b){b.addEventListener('click',function(){var el=document.getElementById(b.dataset.copy);if(el)copy(el.textContent,b.dataset.msg)})});
var list=document.getElementById('ml-cklist'),cnt=document.getElementById('ml-ck-count');
if(list&&cnt){var bx=[].slice.call(list.querySelectorAll('input'));function upd(){var n=bx.filter(function(x){return x.checked}).length;cnt.textContent='Отмечено: '+n+' из '+bx.length+(n===bx.length?'. Все пункты отмечены: проверьте ещё требования программы.':'.')}bx.forEach(function(x){x.addEventListener('change',upd)});upd()}
var f=['pl-topic','pl-goal','pl-aud','pl-res','pl-proof'],lb=['Тема','Цель','Целевая аудитория','Предполагаемые результаты','Как подтвердить результаты'];
var pc=document.getElementById('pl-copy'),px=document.getElementById('pl-clear'),pm=document.getElementById('pl-msg');
if(pc)pc.addEventListener('click',function(){var out=[];f.forEach(function(id,i){var v=(document.getElementById(id).value||'').trim();if(v)out.push(lb[i]+': '+v)});if(!out.length){pm.textContent='Заполните хотя бы одно поле.';return}copy(out.join('\n'),'pl-msg')});
if(px)px.addEventListener('click',function(){f.forEach(function(id){document.getElementById(id).value=''});pm.textContent='Поля очищены.'});
})();

(function(){
/* Kectil: automatic closing of the stale deadline */
try{var c=JSON.parse(document.getElementById('kectil-config').textContent);var now=new Date(),pad=function(n){return n<10?'0'+n:''+n};var today=now.getFullYear()+'-'+pad(now.getMonth()+1)+'-'+pad(now.getDate());
 var st=document.getElementById('kectil-status'),dl=document.getElementById('kectil-deadline'),ap=document.getElementById('kectil-apply');
 if(today>c.deadline){if(st)st.textContent='Набор '+c.cycle+': срок, указанный организатором, истёк';if(dl)dl.textContent='Срок подачи заявок '+c.cycle+' года ('+c.deadlineText+') прошёл. Новые даты можно узнать только на официальном сайте.';if(ap){ap.textContent='Проверить новый набор на сайте организатора';ap.href=c.source||'https://kectil.com/'}}
 var vd=new Date(c.verified+'T00:00:00');if((now-vd)/86400000>400){var sl=document.getElementById('kectil-stale');if(sl){sl.textContent='Данные о программе давно не обновлялись. Проверьте сроки и условия на официальном сайте.';sl.hidden=false}}}catch(e){}
})();
