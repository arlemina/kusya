function first() {

    document.getElementById("second_hide").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");
    
    document.getElementById("first").setAttribute("style", "display: none");
    
    document.getElementById("first_yelloy").setAttribute("style", "display: block");
    
    }
    
    function first_yelloy() {
    
    document.getElementById("second_hide").setAttribute("style", "display: none");
    
    document.getElementById("first_yelloy").setAttribute("style", "display: none");
    
    document.getElementById("first").setAttribute("style", "display: block");
    
    }

    let bd = document.querySelector('.light')
    let themeBtn = document.querySelector('.dark-button')

    themeBtn.onclick = function() {
        bd.classList.toggle('light')
        bd.classList.toggle('dark')
    }