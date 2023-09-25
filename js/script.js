document.addEventListener('DOMContentLoaded', function() {
    // Dodavanje event listenera za scroll do sekcije "Contact"
    document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Inicijalno sakrijte sve projektne detalje
    $(".project-details").hide();

    // Dodajte funkcionalnost za prikazivanje i sakrivanje detalja projekta
    $(".show-details").on("click", function() {
        var projectDetails = $(this).siblings(".project-details");
        $(".project-details").not(projectDetails).slideUp(); // Zatvorite druge otvorene detalje
        projectDetails.slideToggle();
    });

    /document.addEventListener('DOMContentLoaded', function() {
         // Dodavanje event listenera za scroll do sekcije "Contact"
         const contactLink = document.querySelector('a[href="#contact"]');
         const contactSection = document.getElementById('contact');

         if (contactLink && contactSection) {
             contactLink.addEventListener('click', function (e) {
                 e.preventDefault();
                 contactSection.scrollIntoView({ behavior: 'smooth' });
             });
         }

         // Inicijalno sakrijte sve projektne detalje
         $(".project-details").hide();

         // Dodajte funkcionalnost za prikazivanje i sakrivanje detalja projekta
         $(".show-details").on("click", function() {
             var projectDetails = $(this).siblings(".project-details");
             $(".project-details").not(projectDetails).slideUp(); // Zatvorite druge otvorene detalje
             projectDetails.slideToggle();
         });

         // JavaScript za prikaz i skrivanje mobilnog izbornika
         const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
         const mainMenu = document.querySelector('.main-meni');

         if (mobileMenuToggle && mainMenu) {
             mobileMenuToggle.addEventListener('click', function() {
                 mainMenu.classList.toggle('menu-opened');
             });
         }
     });

