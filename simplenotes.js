var elem = document.getElementById('text_origin');
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
function login(){
	alert("You have clicked login");
}
