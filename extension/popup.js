function ready() {
  chrome.tabs.executeScript(null,
    {code: "var $s = document.querySelector('body').style;" +
    "$s.fontSize = '20px'; $s.lineHeight = '1.5'; $s.backgroundColor = '#C7EDCC';" +
    "var $p = document.querySelector('pre').style;" +
    "$p.width = '800px'; $p.margin = '0 auto';" +
    "document.querySelector('pre').addEventListener('click', function(){ " +
    "window.scrollTo(0, document.body.scrollTop += 600);" +
    "});"});
  window.close();
}
function save(){
  chrome.tabs.executeScript(null,
    {code: "window.localStorage.setItem('readsave', document.body.scrollTop);"});
  window.close();
}
function load(){
  chrome.tabs.executeScript(null,
    {code: "window.scrollTo(0, window.localStorage.getItem('readsave'));"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var $ready = document.querySelector('.ready');
  var $save = document.querySelector('.save');
  var $load = document.querySelector('.load');
  $ready.addEventListener('click', ready);
  $save.addEventListener('click', save);
  $load.addEventListener('click', load);
});