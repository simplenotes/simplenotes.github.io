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
                    <button type="button" class="btn btn-secondary">¡Hecho!</button>\
                    <div class="btn-group" role="group">\
                      <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
                        ···\
                      </button>\
                      <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">\
                        <button type="button" class="close dropdown-item" data-dismiss="alert" aria-label="Close">\
                        <a class="dropdown-item" href="#">Eliminar</a>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="col align-middle">\
                  <div class="card pb-2 pt-1 pl-2">\
                    <div class="card-body container-fluid">\
                        <p>'+text+'</p>\
                    </div>\
                  </div>\
                </div>\
            </div>';
    document.getElementById('todos').appendChild(div);
    document.getElementById('text_origin').value = "";
}
