window.addEventListener("load" , ()=>{
    const btn_bars = document.querySelector(".bars-nav");
    const nav = document.querySelector("nav");
    const menu_cerrar = document.getElementById("menu-cerrar");
    const menu_abrir = document.getElementById("menu-abrir");

    btn_bars.addEventListener("click" , ()=>{
        nav.classList.toggle("visible");
        menu_cerrar.classList.toggle("visible");
        menu_abrir.classList.toggle("visible");
    })

    /*
    Ajustes de la sección de comentarios, aquí mismo modifico lo responsive
    INICA GLIDER:
    */

    new Glider(document.querySelector('.carrusel__lista'), {
        slidesToShow: 3,
        dots: '.carrusel__indicadores',
        arrows: {
            prev: '.carrusel__anterior',
            next: '.carrusel__siguiente'
        },
        responsive: [
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 'auto',
                    slidesToScroll: 'auto',
                    itemWidth: 240,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 'auto',
                    slidesToScroll: 'auto',
                    itemWidth: 315,
                }
            },
            {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 'auto',
                    itemWidth: 315,
                }
            }
        ]
    });
    // FINALIZA GLIDER

    // INICIA SECCIÓN DE SLIDE

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove("show");
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // FINALIZA SECCIÓN DE SLIDE
    
})