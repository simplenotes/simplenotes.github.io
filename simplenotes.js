//Ramon Vila Ferreres 2018 - No Comercial
//Simplenotes.js

document.addEventListener("DOMContentLoaded", loadAllCookies, false);
var cookie_counter = 0;
var counter = 0;
var deleted =[]; //Deleted posts
var elem = document.getElementById('text_origin');
var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // Cookie lifetime
elem.onkeyup = function(e){
    if(e.keyCode == 13){
       getAndInsert();
    }
}

function insert(id, text, flag){

	var div = document.createElement('div');
    div.innerHTML = '<div class="row pb-2" id="delete">\
                <div class="col-auto" id="m-outer">\
                  <div class="btn-group" role="group" id="outer">\
                    <button type="button" id="'+String(id)+'" class="buttonDone btn btn-secondary bg-success" onclick ="actionDone(this.id)"id="buttonDone"><i class="material-icons">check</i></button>\
                    <button id="delete'+String(id)+'"type="button" class="buttonDelete btn btn-secondary bg-danger" onclick ="actionDelete(this.id)" ><i class="material-icons">close</i></button>\
                  </div>\
                </div>\
                <div class="col align-middle">\
                  <div class="card pb-2 pt-1 pl-2">\
                    <div class="card-body container-fluid">\
                        <p class="flower max" id="text'+String(id)+'">'+text+'</p>\
                    </div>\
                  </div>\
                </div>\
            </div>';

    counter += 1;
    var insert_to = document.getElementById('todos');
    insert_to.insertBefore(div, insert_to.childNodes[0]);
    if (flag == "sc"){
        createCookie(id,30);
    }
}

function getAndInsert() {

	var text = document.getElementById('text_origin').value;
	if (text=="") {
		text = " ";
	}
	insert(counter,text,"sc");
    document.getElementById('text_origin').value = "";
}

function actionDelete(clicked_id){
	var x = document.getElementById(clicked_id).parentElement.id;
	var y = document.getElementById(x).parentElement.id;
	var z = document.getElementById(y).parentElement.id;
	var a = document.getElementById(z)
	//alert(z);
    a.parentNode.removeChild(a);
    return false;
}

function actionDone(clicked_id){
    var selector = "text"+clicked_id;
    var text_editable = document.getElementById(selector);
    //alert(text_editable.innerHTML);
    var decor = text_editable.style.textDecoration;
    if (decor == "line-through") {
        text_editable.style.textDecoration = "none";
    }else{
        text_editable.style.textDecoration = "line-through";
    }
    //alert(text_editable.style.textDecoration);
}

function getCookie(name) 
{
    var result = null;
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        
        while (c.charAt(0)==' '){
            c = c.substring(1,c.length);
        }

        if (c.indexOf(nameEQ) == 0) {
            result = c.substring(nameEQ.length,c.length);
            break;
        }
    }
    
    return result;
}

function createCookie(name,value,days) 
{

    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();

    var selector = "text"+id;
    var text_editable = document.getElementById(selector);
    var value = text_editable.innerHTML;

    document.cookie = name+"="+value+expires+"; path=/";
}

function loadAllCookies(){
        alert("Entering cookie zone");
        var cookie_box = document.cookie;
        alert(cookie_box);
        for (var i = 0; i < 10; i++) {
            var biscuit = getCookie(String(i)); // gets a cookie
            alert("Biscuit: "+biscuit);
            var cookie_value = getCookieValue(biscuit);
            insert(i, cookie_value); 
            alert("cookie inserted, element "+i+" and value"+cookie_value);
        }
}

function getCookieValue(cookie) {
  var value = "; " + cookie;
  var parts = value.split("; " + cookie + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
