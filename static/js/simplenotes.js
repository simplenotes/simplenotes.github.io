document.addEventListener("DOMContentLoaded", loadFromCookie, false);
var counter = 0;
var deleted =[]; //Deleted posts
var saved = []; //All the text posted
var elem = document.getElementById('text_origin');
var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // Cookie lifetime
elem.onkeyup = function(e){
    if(e.keyCode == 13){
       getAndInsert();
    }
}
function insert(id, text){
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
    document.getElementById('todos').appendChild(div);
}
function getAndInsert() {

	var text = document.getElementById('text_origin').value;
	if (text=="") {
		text = " ";
	}
	insert(counter,text);
    document.getElementById('text_origin').value = "";
    saved.push(text);
   	//alert("VALUE:"+text+" SAVED")
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
	//alert(selector);
	//text_editable.style.textDecoration = 'line-through';
    return false;
}
function setCookie(name, value) {
	document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

function save(){
	for (var i = 0; i < saved.length; i++) {
		var correspondence = "text"+String(i);
		setCookie(correspondence, saved[i]);
		//alert("VALUE SAVED FOR ELEMENT ["+correspondence+"]:"+saved[i]);
	}
}

function loadFromCookie(){
    var ca = document.cookie.split(';');
    var len = ca.length;
    for (var i = len - 1; i >= 0; i--) {
    	//alert(ca[i]);
    }
}