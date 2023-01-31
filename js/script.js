const html = document.querySelector('html');
const hamburger = document.querySelector('.hamburger-menu');
const closeSidebarBtn = document.querySelector('.close-menu');
const header = document.querySelector('.header');
const sidebarMask = document.querySelector('.sidebar-mask');

function handleSidebar(){
    header.classList.toggle('open');
    html.classList.toggle('overflowed');
}

hamburger.addEventListener('click', function(){
    handleSidebar();
});
closeSidebarBtn.addEventListener('click', function(){
    handleSidebar();
});
sidebarMask.addEventListener('click', function(){
    handleSidebar();
});
