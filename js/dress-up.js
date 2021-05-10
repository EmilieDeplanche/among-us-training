$(document).ready(function(){

    function ImageSwitcher(choices, i) {
        i = 0;
        
        this.Next = function() {
            hide_current_image();
            show_next_image();
        }
        
        var hide_current_image = function() {
            if(choices){
                choices[i].style.visibility = "hidden";
                i += 1;
            }
        }
        var show_next_image = function() {
            if(choices){
                if(i == (choices.length)) {
                    i = 0;
                }
                choices[i].style.visibility = "visible";
            }
        }
    }
      
        var colors = $(".character");
        var skins = $(".skin");
        var hats = $(".hat");
        var backgrounds = $(".bg");

        var colors_picker = new ImageSwitcher(colors);
        document.getElementById("color_button").onclick = function() { colors_picker.Next(); };
    
        var hats_picker = new ImageSwitcher(hats);
        document.getElementById("hat_button").onclick = function() { hats_picker.Next(); };
        
        var skins_picker = new ImageSwitcher(skins);
        document.getElementById("skin_button").onclick = function() { skins_picker.Next(); };
    
});