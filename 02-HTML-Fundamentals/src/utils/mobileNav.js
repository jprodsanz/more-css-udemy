 const mobileNav = () => {

     const barsBtn = document.querySelector('#bars-btn');
     const nav = document.querySelector('#mobile-nav');
     const closeBtn = document.querySelector('#close-btn');

     if (!barsBtn || !nav || !closeBtn) return;
    
    const open = () => nav.classList.add('is-open');
    const close = () => nav.classList.remove('is-open');

    barsBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
 }
 
 export default mobileNav;
