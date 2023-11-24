let textarea = document.querySelectorAll('textarea');
textarea.forEach( el => {
    el.innerHTML = el.value.replace(/^\s+|\s+(?=[\n\r])/gm,"");
});