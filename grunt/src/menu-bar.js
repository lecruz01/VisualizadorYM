function toggleMenuItem(ev) {
    var content = ev.target.nextElementSibling;
    content.classList.toggle('active');
    var chev = ev.target.getElementsByClassName('chevron')[0];
    chev.classList.toggle('fa-chevron-right');
    chev.classList.toggle('fa-chevron-down');
}