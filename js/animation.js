const additionalButtonsValues = [
	'√', '!', 'C',
	'g', 'kg', 't',
	'cm', 'm', 'km',
	'cmBI', 'kmBI', 'mBI',
	'ha', 'Copy', 'Paste',
	'BIN', 'DEC', 'HEX', 'MR', 'MC', 'M+', 'M-'];

const changeStateBtn = document.getElementById('circleBtn');

const table = document.getElementById('operations');
const inputElements = table.querySelectorAll('input[type="button"]');

inputElements.forEach((input) => {
	if (input.parentNode.classList.contains('additionalTd')) {
		input.addEventListener('click', () => {
    		input.classList.add('onAddClickAnimation');
    		setTimeout(() => {
      			input.classList.remove('onAddClickAnimation');
    		}, 300);
  		});
	} else {
  		input.addEventListener('click', () => {
    		input.classList.add('input-animation');
    		setTimeout(() => {
      			input.classList.remove('input-animation');
    		}, 300);
  		});
	}
});

function addAnimToAddBtns() {
	table.querySelectorAll('td.additionalTd').forEach(function(td) {
		let button = td.querySelector('input');
		button.addEventListener('click', () => {
			button.classList.add('onAddClickAnimation');
			setTimeout(() => {
				button.classList.remove('onAddClickAnimation');
			}, 300)
		})
	});
}

function changeState() {
	console.log('changeState');
	if (changeStateBtn.getAttribute('value') == '+') {
		addButtons();
		changeStateBtn.setAttribute('value', '-');
	} else {
		deleteButtons();
		changeStateBtn.setAttribute('value', '+');
	}
}

function addButtons() {
	console.log('addButtons');
	trs = table.querySelectorAll('tr');
	let i = 0;
	trs.forEach(function(tr) {
		tr.prepend(createTd(additionalButtonsValues[i + 2]));
		tr.prepend(createTd(additionalButtonsValues[i + 1]));
		tr.prepend(createTd(additionalButtonsValues[i]));
		i+=3;
	});

	let tr = createTr();
	for (; i < additionalButtonsValues.length; i++) {
		tr.append(createTd(additionalButtonsValues[i]));
	}
	table.querySelector('tbody').append(tr);
	addAnimToAddBtns();
}

function createTd(argument) {
	console.log('createTd');

	let button = document.createElement('input');
	button.setAttribute('value', argument);
	button.setAttribute('type', 'button');

	switch (argument) {
		case '√':
			button.setAttribute('onclick', "handleButton('sqrt')");
			break;
		case '!':
			button.setAttribute('onclick',  "handleButton('!')");
			break;
		case 'C':
			button.setAttribute('onclick', "handleButton('C')");
			break;

		case 'g':
			button.setAttribute('onclick',  "handleButton('g')");
			break;
		case 'kg':
			button.setAttribute('onclick',  "handleButton('kg')");
			break;
		case 't':
			button.setAttribute('onclick',  "handleButton('t')");
			break;

		case 'cm':
			button.setAttribute('onclick',  "handleButton('cm')");
			break;
		case 'm':
			button.setAttribute('onclick',  "handleButton('m')");
			break;
		case 'km':
			button.setAttribute('onclick',  "handleButton('km')");
			break;

		case 'cmBI':
			button.setAttribute('onclick',  "handleButton('cm2')");
			break;
		case 'kmBI':
			button.setAttribute('onclick', "handleButton('mk2')");
			break;
		case 'mBI':
			button.setAttribute('onclick',  "handleButton('m2')");
			break;

		case 'ha':
			button.setAttribute('onclick',  "handleButton('ha')");
			break;
		case 'Copy':
			button.setAttribute('onclick',  "handleButton('copy')");
			break;
		case 'Paste':
			button.setAttribute('onclick',  "handleButton('paste')");
			break;

		case 'BIN':
			button.setAttribute('onclick',  "handleButton('binary')");
			break;
		case 'DEX':
			button.setAttribute('onclick',  "handleButton('decimal')");
			break;
		case 'HEX':
			button.setAttribute('onclick',  "handleButton('hexadecimal')");
			break;
		case 'MR':
			button.setAttribute('onclick',  "handleButton('MR')");
			break;
		case 'MC':
			button.setAttribute('onclick',  "handleButton('MC')");
			break;
		case 'M+':
			button.setAttribute('onclick',  "handleButton('M+')");
			break;
		case 'M-':
			button.setAttribute('onclick',  "handleButton('M-')");
			break;
	}

	td = document.createElement('td');
	td.classList.add('additionalTd');
	td.append(button);
	return td;
}

function createTr() {
	console.log('createTr');

	let tr = document.createElement('tr');
	tr.classList.add('additionalTr');
	return tr;
}

function deleteButtons() {
	console.log('deleteButtons');
	let trs = table.querySelectorAll('tr');
	trs.forEach(function(tr) {
		if (tr.classList.contains('additionalTr')) {
			tr.parentNode.removeChild(tr);
		} else {
			let tds = tr.querySelectorAll('td.additionalTd');
			tds.forEach(function(td) {
				td.parentNode.removeChild(td);
			});
		}
	});
}
