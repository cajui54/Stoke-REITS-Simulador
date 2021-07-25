
    var $itemLi = document.querySelectorAll(".menu-ul-lista li a");
    var $openMenu = document.querySelector('#check-menu:checked ~ .menu-ul-lista');

   /* for(var i = 0; i < $itemLi.length; i++){
        $itemLi[i].addEventListener('click', function(){
            document.querySelector('.menu-ul-lista').style.opacity = "0";
        })
    }*/
    //scroll
    function scrollTo(element){
        document.querySelector(element).scrollIntoView({behavior: 'smooth'})
    }
    document.querySelector('#btnConfirmar').addEventListener('click', function(event){
        event.preventDefault();
        scrollTo("#scrollResultado");
    })
