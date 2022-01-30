function toggleText() {
  let btn = document.querySelector('.toggle-text-button');

  btn.onclick = function () { 
    var text = document.querySelector('#text');

    if (text.hasAttribute('hidden')) {
      text.removeAttribute('hidden');
    } else { 
      text.setAttribute('hidden', true);
    }
  }
}
