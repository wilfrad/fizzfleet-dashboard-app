const input = $("#input-spec");
const btnAdd = $("#add-spec");
const list = $("#specs");
const minimalValue = 1;
let specNum = 0;
input.keypress(function (e) {
	var keycode = e.keyCode ? e.keyCode : e.which;
	if (keycode == "13") {
		btnAdd.click();
	}
});
btnAdd.click(() => {
	// get
	let inputText = input.val();
	// set
	if (validateSpec(inputText)) {
		list.prepend(`
			    	<li class="list-group-item " id="post-spec-${specNum}">
						<div class="row">
							<div class="col-7">
								<span class="h5" id="spec-val-${specNum}"> ${inputText} </span>
							</div>
							<div class="col-2">
								<button type="button" class=" btn btn-info" onclick="editSpec(${specNum})">Editar</button>
							</div>
							<div class="col-2">
								<button type="button" class=" btn btn-warning" onclick="deleteSpec(${specNum})">Eliminar</button>
							</div>
						</div>
					</li>`);
		input.val("");
		specNum++;
	}
});

validateSpec = (input) => {
	if (input.length < minimalValue) {
		alert("rellene primero el campo");
		return false;
	}
	try {
		let strs = input.split(":");
		// structure if ':value' or 'cat:value:x'
		if (strs[0].length < 2 || strs.length > 2) {
			alert("estructura invalida");
			return false;
		}
		let spec = strs[1].replace("s", "");
		if (spec.length < minimalValue) {
			alert("despues de los dos puntos ':' ingresa el valor");
			return false;
		}
	} catch (undefined) {
		// replace error str is empty
		alert("despues de los dos puntos ':' ingresa el valor");
		return false;
	}
	return true;
};

editSpec = (specId) => {
	let curSpec = $(`#spec-val-${specId}`);
	let newSpec = prompt("¿quieres modificar este elemento?", curSpec.text());
	if (validateSpec(newSpec)) {
		curSpec.text(newSpec);
	}
};

deleteSpec = (specId) => {
	let cur = $(`#spec-val-${specId}`).text();
	let deleteComfirm = confirm(`¿Seguro de borrar este elemento? ${cur}`);
	if (deleteComfirm) {
		$(`#post-spec-${specId}`).remove();
	}
};
