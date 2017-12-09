


var elem = document.getElementById('text_origin');
var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

elem.onkeyup = function(e){
    if(e.keyCode == 13){
       getAndInsert();
    }
}

function getAndInsert() {
	var text = document.getElementById('text_origin').value;
	var div = document.createElement('div');
    div.innerHTML = '<div class="row pb-2">\
                <div class="col-auto">\
                  <div class="btn-group" role="group">\
                    <button type="button" class="btn btn-secondary bg-success" id="buttonDone"><i class="material-icons">check</i></button>\
                    <button type="button" class="btn btn-secondary bg-danger" id="buttonDelete"><i class="material-icons">close</i></button>\
                  </div>\
                </div>\
                <div class="col align-middle">\
                  <div class="card pb-2 pt-1 pl-2">\
                    <div class="card-body container-fluid">\
                        <p class="flower">'+text+'</p>\
                    </div>\
                  </div>\
                </div>\
            </div>';
    document.getElementById('todos').appendChild(div);
    document.getElementById('text_origin').value = "";
}


function setCookie(name, value) {
	document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

function storeValues(form){
    setCookie("field1", form.field1.value); //name ="field1"
    setCookie("field2", form.field2.value);
    setCookie("field3", form.field3.value);
    setCookie("field4", form.field4.value);
    return true;
  }

