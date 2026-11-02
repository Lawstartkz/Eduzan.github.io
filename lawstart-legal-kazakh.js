/* LAWSTART Legal Kazakh: карточки терминов.
   Записи добавляются в LK_TERMS только после сверки с официальным источником. Формат записи:
   {kk:"термин на казахском", ru:"русский эквивалент", meaning:"объяснение значения",
    example:{kk:"фрагмент акта на казахском", ru:"тот же фрагмент на русском", act:"название акта, статья"},
    source:"https://... (ссылка на официальный текст)", status:"confirmed" | "check"} */
var LK_TERMS = [];
(function(){
  var box=document.getElementById('lk-box');if(!box)return;
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!==undefined&&x!==null)e.textContent=x;return e}
  function norm(x){return String(x).toLowerCase().replace(/ё/g,'е').replace(/\s+/g,' ').trim()}
  function safeUrl(u){return /^https:\/\//i.test(String(u||''))?u:null}
  function render(){
    box.textContent='';
    var terms=window.LK_TERMS||[];
    if(!terms.length){
      var p=el('p','note','Записей пока нет. Термины добавляются только после сверки с официальным источником (акт, статья, ссылка), чтобы авторские переводы не выдавались за официальные.');
      p.style.marginTop='0';box.appendChild(p);return;
    }
    var q=null,msg=el('p','note');msg.setAttribute('role','status');msg.setAttribute('aria-live','polite');
    if(terms.length>5){
      q=document.createElement('input');q.type='search';q.placeholder='Найти термин';q.setAttribute('aria-label','Поиск по терминам Legal Kazakh');
      q.style.cssText='width:100%;max-width:420px;min-height:48px;font:400 16px var(--body);padding:10px 12px;margin:0 0 12px;border:1.5px solid var(--line);border-radius:6px;background:var(--card);color:var(--ink)';
      box.appendChild(q);box.appendChild(msg);
    }
    var cards=terms.map(function(t){
      var d=el('details','lk-card');
      var su=el('summary','');var k=el('b','',t.kk);k.setAttribute('lang','kk');su.appendChild(k);su.appendChild(document.createTextNode(' — '+t.ru));d.appendChild(su);
      var dl=el('dl','lk-dl');
      function row(l,n){dl.appendChild(el('dt','',l));var dd=el('dd');dd.appendChild(n);dl.appendChild(dd)}
      var kk=el('span','',t.kk);kk.setAttribute('lang','kk');row('Термин (казахский)',kk);
      row('Русский эквивалент',document.createTextNode(t.ru));
      if(t.meaning)row('Правовое значение',document.createTextNode(t.meaning));
      if(t.example){
        var ex=el('div');
        if(t.example.kk){var a=el('p','',t.example.kk);a.setAttribute('lang','kk');a.style.margin='0 0 6px';ex.appendChild(a)}
        if(t.example.ru){var b=el('p','',t.example.ru);b.style.margin='0 0 6px';ex.appendChild(b)}
        if(t.example.act)ex.appendChild(el('p','note',t.example.act));
        row('Пример из нормативного акта',ex);
      }
      var u=safeUrl(t.source);
      if(u){var a2=document.createElement('a');a2.href=u;a2.target='_blank';a2.rel='noopener noreferrer';a2.textContent='Официальный источник';row('Источник',a2)}
      row('Статус',document.createTextNode(t.status==='confirmed'?'Подтверждено официальным источником':'Требует проверки'));
      d.appendChild(dl);box.appendChild(d);return {el:d,text:norm(d.textContent)};
    });
    if(q)q.addEventListener('input',function(){
      var v=norm(q.value),n=0;
      cards.forEach(function(c){var ok=!v||c.text.indexOf(v)>=0;c.el.hidden=!ok;if(ok)n++});
      msg.textContent=v?(n?'Найдено: '+n+'.':'Такого термина пока нет в разделе Legal Kazakh.'):'';
    });
  }
  window.lkRender=render;render();
})();
