let mobile = {
    // J'initialise mon mobile
    init: function () {
        mobile.clickToMenu();
       // mobile.clickToLink();
        //mobile.BgMouseOver();
        //mobile.BgMouseOut();
        //mobile.BgChangeHour();    
    },
    
    clickToMenu: function() {
    const iconeMenu = document.getElementById('icone-menu-mobile');
    const link = document.querySelectorAll('.link');
     // si il y a un clic sur le bouton de menu, j'appelle la fonction qui ouvre le menu sidebar          
        iconeMenu.addEventListener('click', () => {
            mobile.openMenu();
        });
        // link.addEventListener('click', () => {
        //     mobile.clickToLink();
        // });
    },

    openMenu: function () {
        const left = document.getElementById('left');
        left.classList.add('open');
        left.style.transition = "1s linear";
        
    }

    // clickToLink: function () {
    //     const left = document.getElementById('left');
    //     const link = document.querySelectorAll('.link');
    //      // si il y a un clic sur l'un des liens du menu, j'appelle la fonction qui ferme le menu sidebar          
    //     //  link.addEventListener('click', () => {
    //             let i;
    //             for (i = 0; i < link.length; i++) {
                   
    //                 left[i].classList.remove('open');
    //                 left[i].style.transition = "0.3s linear";
               
    //             }
    //             // left.classList.remove('open');
    //             // left.style.transition = "0.3s linear";
    //         // });
    // }
    // closeMenu: function () {
    //     const left = document.getElementById('left');
    //     left.classList.remove('open');
    //     left.style.transition = "1s linear";
    // }
};
    document.addEventListener('DOMContentLoaded', mobile.init );