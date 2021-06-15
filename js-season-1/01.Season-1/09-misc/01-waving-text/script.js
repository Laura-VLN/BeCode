// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    function size(){

        let size = ["x-small","small","medium","large","x-large"];
        let fontsize = Math.floor(Math.random() * size.length);
        return size[fontsize];

    }

    let span = document.getElementById('target').textContent.split('').map(lettre => `<span class ='` + lettre + `' style ='font-size:` + size() + `' >`+ lettre +'</span>').join('');

    document.getElementById('target').innerHTML = span;

})();
