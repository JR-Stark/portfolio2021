let app = {
    // J'initialise mon app
    init: function () {
        app.changePage();
    },
    // Page Login et inscription
    changePage: function() {
        const page = document.getElementsByClassName('page');
        const aboutMeLink = document.getElementById('aboutMeLink');
        const resumeLink = document.getElementById('resumeLink');
        const portfolioLink = document.getElementById('portfolioLink');
        const contactLink = document.getElementById('contactLink');
        
        const aboutMePage = document.getElementById('aboutMePage');
        const resumePage = document.getElementById('resumePage');
        const portfolioPage = document.getElementById('portfolioPage');
        const contactPage = document.getElementById('contactPage');
        resumePage.style.display = 'none';
        aboutMePage.style.display = 'flex';
        portfolioPage.style.display = 'none';
        contactPage.style.display = 'none';

       
        aboutMeLink.addEventListener('click', () => {
            // this.changePage.changePageAction();
            console.log('Le clic About Me a eu lieu!!!')
            // aboutMeLink.classList.add('active');
            // resumeLink.classList.remove('active');
            // portfolioLink.classList.remove('active');
            // contactLink.classList.remove('active');

            aboutMePage.style.display = 'flex';
            aboutMePage.classList.add('slide-in-blurred-left');

           resumePage.classList.remove('slide-in-blurred-left');
           resumePage.classList.remove('slide-in-blurred-right');
           resumePage.style.display = 'none';

            portfolioPage.classList.remove('slide-in-blurred-left'); 
            portfolioPage.classList.remove('slide-in-blurred-right');
            portfolioPage.style.display = 'none';

            contactPage.classList.remove('slide-in-blurred-left'); 
            contactPage.classList.remove('slide-in-blurred-right');
            contactPage.style.display = 'none';
        });

        resumeLink.addEventListener('click', () => {
            // this.changePage.changePageAction();
            console.log('Le clic Resume a eu lieu!!!')
            // aboutMeLink.classList.remove('active');
            // resumeLink.classList.add('active');
            // portfolioLink.classList.remove('active');
            // contactLink.classList.remove('active');

            aboutMePage.classList.add('slide-in-blurred-right');
            aboutMePage.classList.remove('slide-in-blurred-left');
            aboutMePage.style.display = 'none';

           resumePage.classList.add('slide-in-blurred-left');
           resumePage.classList.remove('slide-in-blurred-right');
           resumePage.style.display = 'flex';
            

            portfolioPage.classList.remove('slide-in-blurred-left'); 
            portfolioPage.classList.remove('slide-in-blurred-right');
            portfolioPage.style.display = 'none';

            contactPage.classList.remove('slide-in-blurred-left'); 
            contactPage.classList.remove('slide-in-blurred-right');
            contactPage.style.display = 'none';
        });

        portfolioLink.addEventListener('click', () => {
            // this.changePage.changePageAction();
            console.log('Le clic Portfolio a eu lieu!!!')
            // aboutMeLink.classList.remove('active');
            // resumeLink.classList.remove('active');
            // portfolioLink.classList.add('active');
            // contactLink.classList.remove('active');


            aboutMePage.classList.add('slide-in-blurred-right');
            aboutMePage.classList.remove('slide-in-blurred-left');
            aboutMePage.style.display = 'none';
            
            resumePage.classList.remove('slide-in-blurred-left');
            resumePage.classList.remove('slide-in-blurred-right');
            resumePage.style.display = 'none';
            

            portfolioPage.classList.add('slide-in-blurred-left');
            portfolioPage.classList.remove('slide-in-blurred-right');
            portfolioPage.style.display = 'flex';
           
            contactPage.classList.remove('slide-in-blurred-left'); 
            contactPage.classList.remove('slide-in-blurred-right');
            contactPage.style.display = 'none';
        });

        contactLink.addEventListener('click', () => {
            // this.changePage.changePageAction();
            console.log('Le clic contact a eu lieu!!!');
            // aboutMeLink.classList.remove('active');
            // resumeLink.classList.remove('active');
            // portfolioLink.classList.remove('active');
            // contactLink.classList.add('active');

            aboutMePage.classList.add('slide-in-blurred-right');
            aboutMePage.classList.remove('slide-in-blurred-left');
            aboutMePage.style.display = 'none';
            
            resumePage.classList.remove('slide-in-blurred-left');
            resumePage.classList.remove('slide-in-blurred-right');
            resumePage.style.display = 'none';

            portfolioPage.classList.remove('slide-in-blurred-left'); 
            portfolioPage.classList.remove('slide-in-blurred-right');
            portfolioPage.style.display = 'none';
            contactPage.classList.add('slide-in-blurred-left');
            contactPage.classList.remove('slide-in-blurred-right');
            contactPage.style.display = 'flex';
        });
        
    }

    // clicNav: function() {
        
    
    // }
};
    document.addEventListener('DOMContentLoaded', app.init );