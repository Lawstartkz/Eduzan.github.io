/* ЖОБА / ЧЕРНОВИК: казахские тексты не проверены редактором. Stage 1.3: формулировки вопросов приведены к естественному виду; алгоритм не менялся. */
(function(){
  /* EduZan Index (қазақша). Логика идентична русской версии; мәтіндер — жоба, редактор тексеруі қажет. */
  var Q=[
    {t:'Қазіргі білім деңгейіңіз?',o:[['Орта білім (мектеп)','school'],['Бакалавриат','bach'],['Магистратура немесе басқа','mast']]},
    {t:'Ағылшын тілін қандай деңгейде білесіз?',o:[['Beginner / Elementary','en0'],['Intermediate / Upper-Intermediate','en1'],['Advanced / Proficiency','en2']]},
    {t:'Қай елде немесе өңірде оқуды жоспарлап отырсыз?',o:[['Қазақстан','kz'],['Еуропа','eu'],['АҚШ / Канада / Ұлыбритания','us']]},
    {t:'Қандай оқу форматы сізге ыңғайлы?',o:[['Күндізгі (Full-time)','full'],['Сырттай немесе қашықтан','dist']]},
    {t:'Оқуға жылына қанша қаражат бөле аласыз?',o:[['5 000$-ға дейін','b0'],['5 000$ - 15 000$','b1'],['15 000$-дан жоғары','b2']]},
    {t:'Құқықтың қай саласында маманданғыңыз келеді?',o:[['Халықаралық құқық','intl'],['Азаматтық құқық','civil'],['Корпоративтік / IT құқық','corp']]},
    {t:'Мансаптық мақсатыңыз қандай?',o:[['Мемлекеттік органдарда жұмыс істеу','gov'],['Жеке заң практикасы','priv'],['Халықаралық компанияда жұмыс істеу','int']]},
    {t:'Таңдау кезінде сіз үшін ең маңыздысы не?',o:[['Оқу құны','cost'],['Білім сапасы / Рейтинг','qual'],['Жұмысқа орналасу мүмкіндіктері','job']]}
  ];
  var SPEC={intl:'Халықаралық құқық',civil:'Азаматтық және жеке құқық',corp:'Корпоративтік және IT-құқық'};
  var LVL={school:'Бакалавриат',bach:'Магистратура немесе екінші жоғары білім',mast:'Екінші жоғары білім, LL.M. немесе қосымша бағдарлама'};
  var REG={kz:'Қазақстан',eu:'Еуропа',us:'АҚШ, Канада, Ұлыбритания'};
  var box=document.getElementById('quiz'),ans=[],i=0,mv=false;
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!==undefined)e.textContent=x;return e}
  function ask(){
    box.textContent='';
    var q=Q[i];
    var pr=el('div','qprog');pr.appendChild(el('span','','Сұрақ '+(i+1)+' / '+Q.length));
    var bar=el('div','bar');var f=el('i');f.style.width=((i)/Q.length*100)+'%';bar.appendChild(f);
    box.appendChild(pr);box.appendChild(bar);
    var fs=el('fieldset');var lg=el('legend','',q.t);lg.tabIndex=-1;fs.appendChild(lg);
    q.o.forEach(function(o,k){
      var lb=el('label','opt');
      var r=document.createElement('input');r.type='radio';r.name='q'+i;r.value=k;
      if(ans[i]===k)r.checked=true;
      r.addEventListener('change',function(){ans[i]=k;nx.disabled=false});
      lb.appendChild(r);lb.appendChild(el('span','',o[0]));fs.appendChild(lb);
    });
    box.appendChild(fs);
    var nav=el('div','qnav');
    if(i>0){var bk=el('button','btn','Артқа');bk.type='button';bk.onclick=function(){i--;mv=true;ask()};nav.appendChild(bk)}
    var nx=el('button','btn main',i===Q.length-1?'Бағытты білу':'Келесі');nx.type='button';nx.disabled=(ans[i]===undefined);
    nx.onclick=function(){mv=true;if(i===Q.length-1){done()}else{i++;ask()}};
    nav.appendChild(nx);box.appendChild(nav);
    if(mv)lg.focus();
  }
  function done(){
    var v=ans.map(function(a,k){return Q[k].o[a][1]});
    function h(t){return v.indexOf(t)>-1}
    var lvl=v[0],en=v[1],reg=v[2],bud=v[4],spec=v[5],car=v[6],cri=v[7];
    var abroad=reg!=='kz';
    var st=[];
    if(!abroad){st.push(['Бағдарламаларды каталогта салыстырыңыз: код, мерзім және шарттар. B049 және M078 топтары бойынша мемлекеттік тапсырысты ҰТО сайтынан тексеріңіз.','../catalog.html','Каталогты ашу'])}
    else{st.push(['Шетелдік университеттерді және оқуға түсу талаптарын зерттеңіз.','kz-international.html','Шетелдік университеттер'])}
    if(lvl==='mast'){st.push(abroad&&reg==='us'?['Диплом бар заңгер үшін LL.M. және практикаға жіберілу маңызды: халықаралық бөлімдегі JD, LSAT және LL.M. туралы мәліметті қараңыз.','kz-international.html','Толығырақ']:['Диплом бар болса, «Екінші жоғары білім» бөлімін қараңыз.','kz-kazakhstan.html#kz-second','Екінші жоғары білім'])}
    if(en==='en0'||(en==='en1'&&!abroad)){st.push(['Ағылшын тілінен бастаңыз: заң лексикасы және шарттар тілі.','kz-legal-english.html','Заң ағылшын тілі'])}
    else if(en==='en1'){st.push(['IELTS немесе TOEFL-ге дайындалыңыз және заң ағылшын тілін жетілдіріңіз.','kz-international.html','Оқуға түсу'])}
    else if(en==='en2'&&abroad){st.push(['Таңдалған университеттердің тіл талаптарын және құжат тапсыру мерзімдерін тексеріңіз.','kz-international.html','Чек-парақ'])}
    if(abroad&&reg==='us'&&lvl!=='school'){st.push(['Таңдалған университеттерге LSAT немесе GRE қажет пе, анықтаңыз.','kz-international.html','LSAT және емтихандар'])}
    if(bud==='b0'||cri==='cost'||abroad){st.push([bud==='b0'&&abroad?'Шетелде оқу құны бұл бюджеттен асып кетуі мүмкін, сондықтан қаржыландыруды алдын ала зерттеңіз.':(abroad?'Шетелде оқуға арналған стипендиялар мен гранттарды зерттеңіз.':'Қаржыландыру көздерін зерттеңіз: мемлекеттік тапсырыс және стипендиялар.'),'kz-international.html#intl-schol','Стипендиялар және қаржыландыру'])}
    st.push(['«'+SPEC[spec]+'» бағыты туралы көбірек біліңіз.','kz-kazakhstan.html','Құқық бағыттары']);
    if(car==='int'){st.push(['Халықаралық компанияда жұмыс үшін ағылшын тілі мен халықаралық тәжірибе пайдалы: жарыстар мен алмасуларды қараңыз.','kz-international.html','Халықаралық мүмкіндіктер'])}
    var notes=[];
    if(v[3]==='dist')notes.push('Сырттай және қашықтан формат: нақты бағдарлама оны ұсынатынын тексеріңіз.');
    if(car==='gov')notes.push('Мемлекеттік қызмет: нақты лауазымға қойылатын білім талаптарын тексеріңіз.');
    if(car==='priv')notes.push('Жеке практика: таңдалған елде мамандыққа жіберілу тәртібін тексеріңіз.');
    if(cri==='qual')notes.push('EduZan университеттерді рейтингілемейді: бағдарламаларды университет сайттарындағы талаптар, курстар құрамы және шарттар бойынша салыстырыңыз.');
    if(cri==='job')notes.push('Практикаға, мансап қызметтеріне және түлектерге университет сайттарында назар аударыңыз.');
    st.push(['Оқуға түсу чек-парағынан өтіңіз.',abroad?'kz-international.html#intl-check':'kz-kazakhstan.html#kz-check','Чек-парақ']);
    box.textContent='';
    var r=el('div','res');
    r.appendChild(el('div','tag','Сіздің профиліңіз'));
    var rh=el('h3','',SPEC[spec]);rh.tabIndex=-1;r.appendChild(rh);
    r.appendChild(el('p','','Бағыт: '+LVL[lvl]+' · '+REG[reg]+' · '+(v[3]==='dist'?'сырттай немесе қашықтан':'күндізгі')+'.'));
    r.appendChild(el('h4','cty','Келесі қадамдар'));
    var ol=el('ol','plain');ol.style.paddingLeft='22px';
    st.forEach(function(s){var li=el('li','');li.appendChild(document.createTextNode(s[0]+' '));var a=el('a','',s[2]+' →');a.href=s[1];li.appendChild(a);ol.appendChild(li)});
    r.appendChild(ol);
    notes.forEach(function(n){r.appendChild(el('p','',n))});
    r.appendChild(el('p','','Бұл — сегіз жауап бойынша бағыт: сіздің мүмкіндігіңіздің бағасы да, нақты университетке ұсыныс та емес. Ол таңдалған бағдарламаның талаптарын тексеруді алмастырмайды.'));
    var nav=el('div','qnav');
    var a=el('a','btn main',abroad?'Шетелдік университеттер':'Заң бағдарламасын табу');a.href=abroad?'kz-international.html':'../catalog.html';nav.appendChild(a);
    var rs=el('button','btn','Қайта өту');rs.type='button';rs.onclick=function(){ans=[];i=0;mv=true;ask()};nav.appendChild(rs);
    r.appendChild(nav);box.appendChild(r);rh.focus();
  }
  ask();
})();
