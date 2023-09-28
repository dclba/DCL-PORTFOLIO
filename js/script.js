document.addEventListener('DOMContentLoaded', function () {
     document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });




    $(document).ready(function() {
        // Inicijalno sakrijte sve projektne detalje
        $(".project-details").hide();

        // Dodajte funkcionalnost za prikazivanje i sakrivanje detalja projekta
        $(".show-details").on("click", function() {
            var projectDetails = $(this).siblings(".project-details");
            $(".project-details").not(projectDetails).slideUp(); // Zatvorite druge otvorene detalje
            projectDetails.slideToggle();
        });
    });

    // Dodavanje event listenera za scroll do sekcije "Contact"
   /* document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Inicijalno sakrijte sve projektne detalje
    const projectDetails = document.querySelectorAll('.project-details');
    projectDetails.forEach(details => {
        details.style.display = 'none';
    });

    // Dodajte funkcionalnost za prikazivanje i sakrivanje detalja projekta
    const showDetailsButtons = document.querySelectorAll('.show-details');
    showDetailsButtons.forEach(button => {
        button.addEventListener('click', function () {
            const projectDetails = this.parentElement.querySelector('.project-details');
            if (projectDetails) {
                // Zatvorite sve detalje projekta prije nego što otvorite ovaj
                projectDetails.parentElement.querySelectorAll('.project-details').forEach(details => {
                    details.style.display = 'none';
                });

                // Otvorite ili zatvorite trenutni detalj projekta
                if (projectDetails.style.display === 'block') {
                    projectDetails.style.display = 'none';
                } else {
                    projectDetails.style.display = 'block';
                }
            }
        });
    });
*/

   // Inicijalizujte Lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });
});




/*contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Inicijalno sakrijte sve projektne detalje
    const projectDetails = document.querySelectorAll('.project-details');
    projectDetails.forEach(details => {
        details.style.display = 'none';
    });

    // Dodajte funkcionalnost za prikazivanje i sakrivanje detalja projekta
    const showDetailsButtons = document.querySelectorAll('.show-details');
    showDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectDetails = this.nextElementSibling;
            if (projectDetails) {
                if (projectDetails.style.display === 'block') {
                    projectDetails.style.display = 'none';
                } else {
                    projectDetails.style.display = 'block';
                }
            }
        });
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

*/



$(document).ready(function() {
    var batchSize = 3; // Broj klijenata koje se prikazuju odjednom

    // Sakrij sve klijente osim prvih `batchSize` klijenata
    $('.col-md-4:gt(' + (batchSize - 1) + ')').hide();

    // Provjerite ima li više klijenata za prikaz
    if ($('.col-md-4').length > batchSize) {
        $('#showMoreButton').show(); // Prikažite dugme "Prikaži više" ako ima više klijenata
    } else {
        $('#showMoreButton').hide(); // Inače sakrijte dugme "Prikaži više"
        $('#showLessButton').hide(); // Inače sakrijte dugme "Prikaži manje" ako nema više klijenata
    }

    // Klik na dugme "Prikaži više"
    $('#showMoreButton').on('click', function() {
        // Prikazujemo narednih `batchSize` klijenata
        var hiddenClients = $('.col-md-4:hidden');
        for (var i = 0; i < batchSize && i < hiddenClients.length; i++) {
            $(hiddenClients[i]).slideDown();
        }

        // Sakrijemo dugme "Prikaži više" ako nema više klijenata za prikaz
        if ($('.col-md-4:hidden').length === 0) {
            $('#showMoreButton').hide();
            $('#showLessButton').show(); // Prikažemo dugme "Prikaži manje"
        }
    });

    // Klik na dugme "Prikaži manje"
    $('#showLessButton').on('click', function() {
        // Sakrijemo sve klijente osim prvih `batchSize` klijenata
        var visibleClients = $('.col-md-4:gt(' + (batchSize - 1) + ')');
        visibleClients.slideUp();

        // Prikažemo dugme "Prikaži više" i sakrijemo dugme "Prikaži manje"
        $('#showMoreButton').show();
        $('#showLessButton').hide();
    });
});


