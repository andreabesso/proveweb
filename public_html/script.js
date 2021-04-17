/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init() {
    document.querySelector("#blogin").addEventListener("click", welcome);
    msg = "";
    document.querySelector("#btncol").addEventListener("click", cambiaColore);

}

function welcome() {
    let c = document.querySelector("#cognome");
    let n = document.querySelector("#nome");
    let msg;
    let tx;
    nuovadata = Date();
    if (c.value != "Besso" || n.value != "Andrea") {
        if (c.value == "" || n.value == "") {
            msg = "Campi non compilati."
            tx = "Errore!"
        } else {
            msg = "Account non registrato."
            tx = "Errore!"
        }
    } else {
        msg = "Orario Login: <br>" + convertDate(nuovadata);
        tx = "Benvenuto " + c.value + " " + n.value;
    }
    document.querySelector("#msg").innerHTML = msg;
    document.querySelector("#title").innerHTML = tx;

}
function lampadina(l) {
    var pic;
    if (l == 0) {
        pic = "pic_bulboff.gif";
    } else {
        pic = "pic_bulbon.gif"
    }
    document.querySelector("#lamp").src = pic;
}
function visualizza(id) {
    let c = document.querySelector("#cognome");
    let n = document.querySelector("#nome");
    if (document.getElementById) {
        if (document.getElementById(id).style.display == 'none') {
            if (c.value == "Besso" && n.value == "Andrea") {
                document.getElementById(id).style.display = 'block';
                document.querySelector("#divlog").style.display = "none";

            }
        }
    }
}
function cambiaColore(color) {
    document.body.style.background = color;
}
function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat)
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')+" "+[pad(d.getHours()), pad(d.getMinutes())].join(':')
}

