const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector('#primary-nav');

navToggle.addEventListener('click',() => {
    const navOpened = navToggle.getAttribute('aria-expanded');
    if(navOpened === 'false'){
         navToggle.setAttribute("aria-expanded","True");
    } else{
         navToggle.setAttribute("aria-expanded", "False");
    }
       

    console.log(navOpened);
});