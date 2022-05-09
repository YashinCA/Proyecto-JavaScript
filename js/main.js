$(document).ready(function() {

    // SLIDER
    if (window.location.href.indexOf('index') > -1) {

        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: false
        });
    }

    // POSTS
    if (window.location.href.indexOf('index') > -1) {


        var posts = [{
                title: "Prueba de titulo 1",
                date: 'Publicado el día ' + moment().format("LL"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo enim non nisi bibendum cursus. Sed venenatis egestas ultrices. In purus ligula, hendrerit ut dolor eu, maximus iaculis felis. Nulla egestas dolor enim, vitae vehicula enim dictum aliquet.Cras tempus at lorem et dictum.Quisque fermentum augue felis, non euismod orci maximus a.Proin venenatis lacus eu turpis porta, nec condimentum eros imperdiet.In varius orci nisl, quis aliquet velit commodo laoreet. Donec enim eros, malesuada a orci ac, pharetra ullamcorper orci.Pellentesque rhoncus bibendum pharetra.Nam ut libero at tellus aliquam commodo at nec ex."
            },
            {
                title: "Prueba de titulo 2",
                date: 'Publicado el día ' + moment().format("LL"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo enim non nisi bibendum cursus. Sed venenatis egestas ultrices. In purus ligula, hendrerit ut dolor eu, maximus iaculis felis. Nulla egestas dolor enim, vitae vehicula enim dictum aliquet.Cras tempus at lorem et dictum.Quisque fermentum augue felis, non euismod orci maximus a.Proin venenatis lacus eu turpis porta, nec condimentum eros imperdiet.In varius orci nisl, quis aliquet velit commodo laoreet. Donec enim eros, malesuada a orci ac, pharetra ullamcorper orci.Pellentesque rhoncus bibendum pharetra.Nam ut libero at tellus aliquam commodo at nec ex."
            },
            {
                title: "Prueba de titulo 3",
                date: 'Publicado el día ' + moment().format("LL"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo enim non nisi bibendum cursus. Sed venenatis egestas ultrices. In purus ligula, hendrerit ut dolor eu, maximus iaculis felis. Nulla egestas dolor enim, vitae vehicula enim dictum aliquet.Cras tempus at lorem et dictum.Quisque fermentum augue felis, non euismod orci maximus a.Proin venenatis lacus eu turpis porta, nec condimentum eros imperdiet.In varius orci nisl, quis aliquet velit commodo laoreet. Donec enim eros, malesuada a orci ac, pharetra ullamcorper orci.Pellentesque rhoncus bibendum pharetra.Nam ut libero at tellus aliquam commodo at nec ex."
            },
            {
                title: "Prueba de titulo 4",
                date: 'Publicado el día ' + moment().format("LL"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo enim non nisi bibendum cursus. Sed venenatis egestas ultrices. In purus ligula, hendrerit ut dolor eu, maximus iaculis felis. Nulla egestas dolor enim, vitae vehicula enim dictum aliquet.Cras tempus at lorem et dictum.Quisque fermentum augue felis, non euismod orci maximus a.Proin venenatis lacus eu turpis porta, nec condimentum eros imperdiet.In varius orci nisl, quis aliquet velit commodo laoreet. Donec enim eros, malesuada a orci ac, pharetra ullamcorper orci.Pellentesque rhoncus bibendum pharetra.Nam ut libero at tellus aliquam commodo at nec ex."
            },
            {
                title: "Prueba de titulo 5",
                date: 'Publicado el día ' + moment().format("LL"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo enim non nisi bibendum cursus. Sed venenatis egestas ultrices. In purus ligula, hendrerit ut dolor eu, maximus iaculis felis. Nulla egestas dolor enim, vitae vehicula enim dictum aliquet.Cras tempus at lorem et dictum.Quisque fermentum augue felis, non euismod orci maximus a.Proin venenatis lacus eu turpis porta, nec condimentum eros imperdiet.In varius orci nisl, quis aliquet velit commodo laoreet. Donec enim eros, malesuada a orci ac, pharetra ullamcorper orci.Pellentesque rhoncus bibendum pharetra.Nam ut libero at tellus aliquam commodo at nec ex."
            }
        ];

        posts.forEach((item, index) => {
            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer más</a>
            </article>
            
            `;
            $("#posts").append(post);
        });
    }


    // SELECTOR DE TEMA
    var theme = $('#theme');

    $('#to-green').click(function() {
        theme.attr('href', "./css/green.css");
    });
    $('#to-red').click(function() {
        theme.attr('href', "./css/red.css");
    });
    $('#to-blue').click(function() {
        theme.attr('href', "./css/blue.css");
    });


    // SCROLL HACIA ARRIBA (FINAL DE LA PAGINA)
    $('.subir').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });


    // LOGIN FALSO CON LOCAL STORAGE
    $("#login form").submit(function() {
        var form_name = $('#form_name').val();
        localStorage.setItem("form_name", form_name);
    });
    var form_name = localStorage.getItem("form_name");
    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
        $("#login").hide();

        $('#logout').click(function() {
            localStorage.clear();
            location.reload();
        });
    }


    // TRABAJANDO EN ABOUT.HTML
    // Accordion
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }

    // reloj en index
    if (window.location.href.indexOf('index') > -1) {
        setInterval(function() {
            var reloj_index = moment().format("LL, h:mm:ss a");
            $('#reloj-index').html("<p>" + reloj_index + "</p>");
        }, 1000);
    }


    // TRABAJANDO CON RELOJ.HTML
    // Reloj
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function() {
            var reloj = moment().format("hh:mm:ss a");
            $('#reloj').html(reloj);
        }, 1000);
    }

    // Validación
    if (window.location.href.indexOf('contact') > -1) {
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }

});