let navs= document.querySelector('.navs');
let menuIcon = document.querySelector('.menu');
let closeIcon = document.querySelector('#close');

// Line of code to open the menubar to display the nivagation links
menuIcon.addEventListener('click', ()=>{
    navs.classList.add("active");
});

// Line of code to close the nivagation links
closeIcon.addEventListener('click', ()=>{
        navs.classList.remove('active');
});