/* Shared behaviour for the subpages: mailing list form, menu and story filters.
   The homepage keeps its own inline script, which also drives the hero video and motion. */
document.querySelectorAll('[data-form]').forEach(function(f){
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var t=f.nextElementSibling;
    while(t&&!(t.classList&&t.classList.contains('thanks'))){t=t.nextElementSibling;}
    f.style.display='none';
    if(t){t.style.display='block';}
  });
});
var ov=document.getElementById('overlay'),op=document.getElementById('open');
function setMenu(o){ov.classList.toggle('open',o);op.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':'';}
op.addEventListener('click',function(){setMenu(true);});
document.getElementById('close').addEventListener('click',function(){setMenu(false);});
ov.addEventListener('click',function(e){if(e.target.closest('a')){setMenu(false);}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){setMenu(false);}});

/* stories filter */
(function(){
  var chips=document.querySelectorAll('.chip[data-filter]');
  if(!chips.length){return;}
  var cards=document.querySelectorAll('.listing .card');
  chips.forEach(function(c){
    c.addEventListener('click',function(){
      var k=c.getAttribute('data-filter');
      chips.forEach(function(x){x.setAttribute('aria-pressed',x===c?'true':'false');});
      cards.forEach(function(card){
        var show=k==='all'||card.getAttribute('data-kind').split(' ').indexOf(k)>-1;
        card.hidden=!show;
      });
    });
  });
})();
