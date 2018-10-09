var number_of_mistakes = 0;
var motto = "Bez pracy nie ma kołaczy";
    motto = motto.toUpperCase();

var letters_to_display = new Array(35);

    letters_to_display[0] = "A";
	letters_to_display[1] = "Ą";
	letters_to_display[2] = "B";
	letters_to_display[3] = "C";
	letters_to_display[4] = "Ć";
	letters_to_display[5] = "D";
	letters_to_display[6] = "E";
	letters_to_display[7] = "Ę";
	letters_to_display[8] = "F";
	letters_to_display[9] = "G";
	letters_to_display[10] = "H";
	letters_to_display[11] = "I";
	letters_to_display[12] = "J";
	letters_to_display[13] = "K";
	letters_to_display[14] = "L";
	letters_to_display[15] = "Ł";
	letters_to_display[16] = "M";
	letters_to_display[17] = "N";
	letters_to_display[18] = "Ń";
	letters_to_display[19] = "O";
	letters_to_display[20] = "Ó";
	letters_to_display[21] = "P";
	letters_to_display[22] = "Q";
	letters_to_display[23] = "R";
	letters_to_display[24] = "S";
	letters_to_display[25] = "Ś";
	letters_to_display[26] = "T";
	letters_to_display[27] = "U";
	letters_to_display[28] = "V";
	letters_to_display[29] = "W";
	letters_to_display[30] = "X";
	letters_to_display[31] = "Y";
	letters_to_display[32] = "Z";
	letters_to_display[33] = "Ź";
	letters_to_display[34] = "Z";


function hide_motto(){
    var auxiliary_motto = "" 
    for(i = 0; i < motto.length;i++){
        if (motto.charAt(i)==" ") {
            auxiliary_motto = auxiliary_motto + " ";
        } else {
            auxiliary_motto = auxiliary_motto + "_";
        }
    }
    return auxiliary_motto;
}

var hidden_motto = hide_motto();

function display_motto(motto_to_display) {
    document.getElementById("board").innerHTML = motto_to_display;
}

String.prototype.setLetter = function(index, letter){
    if (index > this.length-1){
        return this.toString();
    } else {
        return this.substr(0,index) + letter + this.substr(index+1);
    }
}

function check_letter(letter_id){
    var letter_to_check = letters_to_display[letter_id];
    var flag = false; 
    
    for(i=0; i< motto.length;i++){
        if (motto.charAt(i)==letter_to_check){
            hidden_motto = hidden_motto.setLetter(i, letters_to_display[letter_id]);
            flag = true;
        }
    }
    var element = "letter"+letter_id;
    if (flag == true){
        display_motto(hidden_motto);
        document.getElementById(element).style.background="#003300";
        document.getElementById(element).style.color="#00C000";
        document.getElementById(element).style.border="3px solid #00C000";
        document.getElementById(element).style.cursor="default";
    } else {
        number_of_mistakes++;
        document.getElementById(element).style.background="#330000";
        document.getElementById(element).style.color="#C00000";
        document.getElementById(element).style.border="3px solid #C00000";
        document.getElementById(element).style.cursor="default";
        document.getElementById(element).setAttribute("onclick",";");
        document.getElementById("gallows").innerHTML = '<img alt="A gallow image" src="Img/s'+number_of_mistakes+'.gif"/>'
    }
    
    // wygrana
    
    if (hidden_motto == motto){
        document.getElementById("alfabet").innerHTML = "Tak jest! To jest prawidłowe hasło: "+motto+
            '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }
    
    if (number_of_mistakes == 8){
        document.getElementById("alfabet").innerHTML = "Dałeś ciała! Nie odgadłeś/aś hasła :/ Prawidłowe hasło to: "+motto+
            '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
    }
}

function start(){
    var letters_to_show = ""
    for (i = 0; i < 34; i++){
        letters_to_show = letters_to_show + '<div id="letter'+i+'" class="letter" onclick="check_letter('+i+')">' + letters_to_display[i] + '</div>';
        if ((i+1) % 7==0){
            letters_to_show = letters_to_show + '<div style="clear:both;"></div>';
        }
    }
    document.getElementById("alfabet").innerHTML = letters_to_show;
    display_motto(hidden_motto);
    document.getElementById("gallows").innerHTML = '<img alt="A gallow image" src="Img/s'+number_of_mistakes+'.gif"/>'
}

window.onload = start;



