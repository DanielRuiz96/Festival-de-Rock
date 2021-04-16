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
document.addEventListener('DOMContentLoaded',function(){
    crearGaleria();
})

function crearGaleria(){
    const galeria=document.querySelector('.galeria-imagenes');
    for(let i=1;i<=12;i++){
        const imagen=document.createElement('IMG')
        imagen.src=`build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId=i;

        //Añadir la funcion de mostrarImagen
        imagen.onclick=mostrarImagen;
        const lista=document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
   // console.log(e.target.dataset);
    const id=parseInt(e.target.dataset.imagenId);
    //console.log(id);

    //Generar la imagen.
    const imagen=document.createElement('IMG');
    imagen.src=`build/img/grande/${id}.webp`;
    //console.log(imagen)
    const overlay=document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //cuando se da click, cerrar la imagen

    overlay.onclick=function(){
        overlay.remove();
        body.classList.add('desfijar-body');
        body.classList.remove('fijar-body');
    }
    //Boton para cerrar imagen

    const cerrarImagen=document.createElement('P');
    cerrarImagen.textContent='X';
    cerrarImagen.classList.add('btn-cerrar');
    overlay.appendChild(cerrarImagen);

    //Cuando se presiona, se cierra la imagen

    cerrarImagen.onclick=function(){
        overlay.remove();
        body.classList.add('desfijar-body')
    }

    //Mostrar en el HTML

    const body = document.querySelector('body')
    body.appendChild(overlay);
    body.classList.add('fijar-body');
    body.classList.remove('desfijar-body');

}