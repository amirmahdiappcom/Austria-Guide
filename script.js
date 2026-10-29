(function () {
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) { menu.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
  });
  // اگر فایل ویدیو پیدا نشد، پس‌زمینه‌ی متحرک ساده نمایش داده می‌شود
  var v = document.querySelector('.hero-video');
  if (v) v.querySelector('source').addEventListener('error', function () { v.remove(); });
})();
(function(){
var L=null;try{L=localStorage}catch(e){}
var g=function(k){return !!L&&L.getItem(k)==='1'},s=function(k,v){try{v?L.setItem(k,'1'):L.removeItem(k)}catch(e){}};
function ref(){
document.querySelectorAll('.side a[data-s]').forEach(function(a){a.classList.toggle('done',g('d:'+a.dataset.s))});
document.querySelectorAll('.donebtn').forEach(function(b){var d=g('d:'+b.dataset.s);b.classList.toggle('on',d);b.textContent=d?'انجام شد ✓':'علامت‌گذاری به‌عنوان انجام‌شده'});
document.querySelectorAll('.chk input').forEach(function(c){c.checked=g('c:'+c.dataset.c)})}
document.addEventListener('click',function(e){var b=e.target.closest('.donebtn');if(b){s('d:'+b.dataset.s,!g('d:'+b.dataset.s));ref()}});
document.addEventListener('change',function(e){if(e.target.dataset.c){s('c:'+e.target.dataset.c,e.target.checked);ref()}});
ref();
})();
