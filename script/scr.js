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

    $(document).ready(function(){
        var button = $('.night-mode-button');
        var container = $('.content-box');
        
        button.click(function() {
          container.toggleClass('-nightmode');
        });
      });
