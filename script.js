var menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px"

        function togglemenu() {

            if (menuList.style.maxHeight == "0px") {
                menuList.style.maxHeight = "130px"
            }
            else {
                menuList.style.maxHeight = "0px"
            }
        }


window.addEventListener( 'scroll' , reveal )   ;

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
            
        }

    }

}