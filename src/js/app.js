document.addEventListener('DOMContentLoaded',function(){
    scrollNav();
    navegacionFija();
})

function scrollNav(){
    const enlaces=document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach(function(enlace){
        enlace.addEventListener('click',function(e){
            e.preventDefault();
            const seccion=document.querySelector(e.target.attributes.href.value)
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
}

function navegacionFija(){
    // Registrar el Intersection Observer
    const barra=document.querySelector('.header');

    const observer= new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            console.log('Elemento visible')
            barra.classList.remove('fijo');
        }else{
            console.log('Ya desaparecio')
            barra.classList.add('fijo');
        }

    })

    // Elemento Observar

    observer.observe(document.querySelector('.dos-columnas'))
}