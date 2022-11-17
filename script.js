var fbtn = document.querySelector('.first-btn');
var sbtn = document.querySelector('.second-btn');

fbtn.addEventListener('mousedown', function () {
    fbtn.classList.add('down');
});

fbtn.addEventListener('mouseup', function () {
    fbtn.classList.remove('down');
});

sbtn.addEventListener('mousedown', function () {
    sbtn.classList.add('down');
});

sbtn.addEventListener('mouseup', function () {
    sbtn.classList.remove('down');
});

sbtn.addEventListener('click', function (evt) {
    if (sbtn.classList.length == 2) {
        sbtn.classList.add('active');
    } else if (sbtn.classList[sbtn.classList.length - 1] == 'active') {
        sbtn.classList.remove('active');
    };
});

fbtn.addEventListener('click', function (evt) {
    if (fbtn.classList.length == 2) {
        fbtn.classList.add('ok');
        console.log(fbtn.classList);
    } else if (fbtn.classList[fbtn.classList.length - 1] == 'ok') {
        fbtn.classList.remove('ok');
    }
});
