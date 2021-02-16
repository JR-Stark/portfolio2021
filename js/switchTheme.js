let api = {
    // J'initialise mon api
    init: function () {
        api.addListenerToActions();
        //api.BgMouseOver();
        //api.BgMouseOut();
        //api.BgChangeHour();    
    },
    
    addListenerToActions: function() {
        const chk = document.getElementById('chk');
        chk.addEventListener('change', () => {
            api.darkOrLight();
        });
    },
    darkOrLight: function () {
        
        // body
        const body = document.getElementById('body');
        // Logo
        const logo = document.querySelectorAll('.logo');
        // Background de gauche
        const left = document.getElementById('left');
        // background central
        const aboutMePage = document.getElementById('aboutMePage');
        const resumePage = document.getElementById('resumePage');
        const portfolioPage = document.getElementById('portfolioPage');
        const contactPage = document.getElementById('contactPage');
        const homeTop = document.getElementById('homeTop');
        const button = document.getElementById('button');
        
        const aboutMeLink = document.getElementById('aboutMeLink');
        const resumeLink = document.getElementById('resumeLink');
        const portfolioLink = document.getElementById('portfolioLink');
        const contactLink = document.getElementById('contactLink');

        // elements classiques p h1 h2 ...
        const p = document.querySelectorAll(".texte");
        const bigTitle = document.querySelectorAll('.title');
        const titletwo = document.querySelectorAll('.titletwo');
        const titlefour = document.querySelectorAll('.titlefour');
        const titlefive = document.querySelectorAll('.titlefive');
        const titlesix = document.querySelectorAll('.titlesix');
        const bg = document.querySelectorAll(".background");

        body.classList.toggle('dark');
        body.style.transition = "1s linear";
       
        left.classList.toggle('dark');
        left.style.transition = "1s linear";
        aboutMePage.classList.toggle('dark');
        aboutMePage.style.transition = "1s linear";
        resumePage.classList.toggle('dark');
        resumePage.style.transition = "1s linear";
        portfolioPage.classList.toggle('dark');
        portfolioPage.style.transition = "1s linear";
        contactPage.classList.toggle('dark');
        contactPage.style.transition = "1s linear";
        button.classList.toggle('dark');
        button.style.transition = "1s linear";
        homeTop.classList.toggle('dark');
        homeTop.style.transition = "1s linear";
        aboutMeLink.classList.toggle('dark');
        aboutMeLink.style.transition = "1s linear";
        resumeLink.classList.toggle('dark');
        resumeLink.style.transition = "1s linear";
        portfolioLink.classList.toggle('dark');
        portfolioLink.style.transition = "1s linear";
        contactLink.classList.toggle('dark');
        contactLink.style.transition = "1s linear";
        // bg.forEach(function(){
        //     bg.classList.toggle('dark');
        //     bg.style.transition = "1s linear";
        // })

        // p.classList.toggle('dark');
        // p.style.transition = "1s linear";
        // bigTitle.classList.toggle('dark');
        // bigTitle.style.transition = "1s linear";
        // titletwo.classList.toggle('dark');
        // titletwo.style.transition = "1s linear";
        // titlefour.classList.toggle('dark');
        // titlefour.style.transition = "1s linear";
        // titlefive.classList.toggle('dark');
        // titlefive.style.transition = "1s linear";
        // titlesix.classList.toggle('dark');
        // titlesix.style.transition = "1s linear";

        let i;
        for (i = 0; i < p.length; i++) {
            p[i].classList.toggle('dark');
            p[i].style.transition = "1s linear";
        }
        for (i = 0; i < bigTitle.length; i++) {
            bigTitle[i].classList.toggle('dark');
            bigTitle[i].style.transition = "1s linear";
        }
        for (i = 0; i < titletwo.length; i++) {
            titletwo[i].classList.toggle('dark');
            titletwo[i].style.transition = "1s linear";
        }
        for (i = 0; i < titlefour.length; i++) {
            titlefour[i].classList.toggle('dark');
            titlefour[i].style.transition = "1s linear";
        }
        for (i = 0; i < titlefive.length; i++) {
            titlefive[i].classList.toggle('dark');
            titlefive[i].style.transition = "1s linear";
        }
        for (i = 0; i < titlesix.length; i++) {
            titlesix[i].classList.toggle('dark');
            titlesix[i].style.transition = "1s linear";
        } 
        
        for (i = 0; i < bg.length; i++) {
            bg[i].classList.toggle('dark');
            bg[i].style.transition = "1s linear";
        }

        for (i = 0; i < logo.length; i++) {
            logo[i].classList.toggle('dark');
            logo[i].style.transition = "1s linear";
        }
        
        const testiCadre = document.querySelectorAll('.testi-texte');
        const iconeHome = document.querySelectorAll('.icone-home');
      
        for (i = 0; i < testiCadre.length; i++) {
            testiCadre[i].classList.toggle('dark');
            testiCadre[i].style.transition = "1s linear";
        }
        for (i = 0; i < iconeHome.length; i++) {
            iconeHome[i].classList.toggle('dark');
            iconeHome[i].style.transition = "1s linear";
        }
       
        
    }
};
    document.addEventListener('DOMContentLoaded', api.init );