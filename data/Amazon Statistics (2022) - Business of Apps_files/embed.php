window.cfields = [];
window._show_thank_you = function(id, message, trackcmp_url, email) {
	var form = document.getElementById('_form_' + id + '_'), thank_you = form.querySelector('._form-thank-you');
	form.querySelector('._form-content').style.display = 'none';
	thank_you.innerHTML = message;
	thank_you.style.display = 'block';
	const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
	var visitorObject = window[vgoAlias];
	if (email && typeof visitorObject !== 'undefined') {
		visitorObject('setEmail', email);
		visitorObject('update');
	} else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
		// Site tracking URL to use after inline form submission.
		_load_script(trackcmp_url);
	}
	if (typeof window._form_callback !== 'undefined') window._form_callback(id);
};
window._show_error = function(id, message, html) {
	var form = document.getElementById('_form_' + id + '_'), err = document.createElement('div'), button = form.querySelector('button'), old_error = form.querySelector('._form_error');
	if (old_error) old_error.parentNode.removeChild(old_error);
	err.innerHTML = message;
	err.className = '_error-inner _form_error _no_arrow';
	var wrapper = document.createElement('div');
	wrapper.className = '_form-inner';
	wrapper.appendChild(err);
	button.parentNode.insertBefore(wrapper, button);
	document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;
	if (html) {
		var div = document.createElement('div');
		div.className = '_error-html';
		div.innerHTML = html;
		err.appendChild(div);
	}
};
window._load_script = function(url, callback) {
	var head = document.querySelector('head'), script = document.createElement('script'), r = false;
	script.type = 'text/javascript';
	script.charset = 'utf-8';
	script.src = url;
	if (callback) {
		script.onload = script.onreadystatechange = function() {
			if (!r && (!this.readyState || this.readyState == 'complete')) {
				r = true;
				callback();
			}
		};
	}
	head.appendChild(script);
};
(function() {
	if (window.location.search.search("excludeform") !== -1) return false;
	var getCookie = function(name) {
		var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
		return match ? match[2] : null;
	}
	var setCookie = function(name, value) {
		var now = new Date();
		var time = now.getTime();
		var expireTime = time + 1000 * 60 * 60 * 24 * 365;
		now.setTime(expireTime);
		document.cookie = name + '=' + value + '; expires=' + now + ';path=/; Secure; SameSite=Lax;';// cannot be HttpOnly
	}
			var addEvent = function(element, event, func) {
		if (element.addEventListener) {
			element.addEventListener(event, func);
		} else {
			var oldFunc = element['on' + event];
			element['on' + event] = function() {
				oldFunc.apply(this, arguments);
				func.apply(this, arguments);
			};
		}
	}
	var _removed = false;
	var _form_output = '\<style\>\n #_form_6383A601AD6E9_ ._form-branding ._logo { display:block; width:130px; height:14px; margin-top:6px; background-image:url(\'https:\/\/d226aj4ao1t61q.cloudfront.net\/hh9ujqgv5_aclogo_li.png\'); background-size:130px auto; background-repeat:no-repeat; }\n #_form_6383A601AD6E9_._dark ._form-branding ._logo { background-image:url(\'https:\/\/d226aj4ao1t61q.cloudfront.net\/jftq2c8s_aclogo_dk.png\'); }\n\n #_form_6383A601AD6E9_._form_73 { margin:0 auto 0; }\n #_form_6383A601AD6E9_ ._submit::after { display:none; }\n #_form_6383A601AD6E9_ ._x50188974 label { display:none; }\n\<\/style\>\n\<link rel=\"stylesheet\" type=\"text\/css\" href=\"https:\/\/unpkg.com\/intl-tel-input@17.0.18\/build\/css\/intlTelInput.min.css\"\/\>\n\n\<form method=\"POST\" action=\"https://sokomedia.activehosted.com\/proc.php\" id=\"_form_6383A601AD6E9_\" class=\"_form _form_73 _inline-form  _dark\" novalidate\>\n	\<input type=\"hidden\" name=\"u\" value=\"6383A601AD6E9\" \/\>\n	\<input type=\"hidden\" name=\"f\" value=\"73\" \/\>\n	\<input type=\"hidden\" name=\"s\" \/\>\n	\<input type=\"hidden\" name=\"c\" value=\"0\" \/\>\n	\<input type=\"hidden\" name=\"m\" value=\"0\" \/\>\n	\<input type=\"hidden\" name=\"act\" value=\"sub\" \/\>\n	\<input type=\"hidden\" name=\"v\" value=\"2\" \/\>\n	\<input type=\"hidden\" name=\"or\" value=\"d2fb22ed94dd82a606c9922b74959296\" \/\>\n	\<div class=\"_form-content\"\>\n						\<div class=\"_form_element _x31442353 _full_width _clear\" \>\n						\<div class=\"_form-title\"\>Business of Apps\<\/div\>\n					\<\/div\>\n						\<div class=\"_form_element _x84012427 _full_width _clear\" \>\n						\<div class=\"_html-code\"\>\<p\>Get the latest app industry news, analysis and insights.\<\/p\>\<\/div\>\n					\<\/div\>\n						\<div class=\"_form_element _x50188974 _full_width \" \>\n						\<label for=\"email\" class=\"_form-label\"\>\<\/label\>\n			\<div class=\"_field-wrapper\"\>\n				\<input type=\"text\" id=\"email\" name=\"email\" placeholder=\"Enter your work email*\" required\/\>\n			\<\/div\>\n\n            		\<\/div\>\n				\<div class=\"_button-wrapper _full_width\"\>\<button id=\"_form_73_submit\" class=\"_submit\" type=\"submit\"\>Join\<\/button\>\<\/div\>		\<div class=\"_clear-element\"\>\<\/div\>\n	\<\/div\>\n	\<div class=\"_form-thank-you\" style=\"display:none;\"\>\<\/div\>\n	\<\/form\>\n';
	var _form_element = null, _form_elements = document.querySelectorAll('._form_73');
	for (var fe = 0; fe < _form_elements.length; fe++) {
		_form_element = _form_elements[fe];
		if (_form_element.innerHTML.trim() === '') break;
		_form_element = null;
	}
	if (!_form_element) {
		_form_element = document.createElement('div');
		if (!document.body) { document.firstChild.appendChild(document.createElement('body')); }
		document.body.appendChild(_form_element);
	}
	_form_element.innerHTML = _form_output;
	var form_to_submit = document.getElementById('_form_6383A601AD6E9_');
	var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;

	var getUrlParam = function(name) {
		var params = new URLSearchParams(window.location.search);
		return params.get(name) || false;
	};

	for (var i = 0; i < allInputs.length; i++) {
		var regexStr = "field\\[(\\d+)\\]";
		var results = new RegExp(regexStr).exec(allInputs[i].name);
		if (results != undefined) {
			allInputs[i].dataset.name = window.cfields[results[1]];
		} else {
			allInputs[i].dataset.name = allInputs[i].name;
		}
		var fieldVal = getUrlParam(allInputs[i].dataset.name);

		if (fieldVal) {
			if (allInputs[i].dataset.autofill === "false") {
				continue;
			}
			if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {
				if (allInputs[i].value == fieldVal) {
					allInputs[i].checked = true;
				}
			} else {
				allInputs[i].value = fieldVal;
			}
		}
	}

	var remove_tooltips = function() {
		for (var i = 0; i < tooltips.length; i++) {
			tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
		}
		tooltips = [];
	};
	var remove_tooltip = function(elem) {
		for (var i = 0; i < tooltips.length; i++) {
			if (tooltips[i].elem === elem) {
				tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
				tooltips.splice(i, 1);
				return;
			}
		}
	};
	var create_tooltip = function(elem, text) {
		var tooltip = document.createElement('div'), arrow = document.createElement('div'), inner = document.createElement('div'), new_tooltip = {};
		if (elem.type != 'radio' && elem.type != 'checkbox') {
			tooltip.className = '_error';
			arrow.className = '_error-arrow';
			inner.className = '_error-inner';
			inner.innerHTML = text;
			tooltip.appendChild(arrow);
			tooltip.appendChild(inner);
			elem.parentNode.appendChild(tooltip);
		} else {
			tooltip.className = '_error-inner _no_arrow';
			tooltip.innerHTML = text;
			elem.parentNode.insertBefore(tooltip, elem);
			new_tooltip.no_arrow = true;
		}
		new_tooltip.tip = tooltip;
		new_tooltip.elem = elem;
		tooltips.push(new_tooltip);
		return new_tooltip;
	};
	var resize_tooltip = function(tooltip) {
		var rect = tooltip.elem.getBoundingClientRect();
		var doc = document.documentElement, scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0));
		if (scrollPosition < 40) {
			tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
		} else {
			tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
		}
	};
	var resize_tooltips = function() {
		if (_removed) return;
		for (var i = 0; i < tooltips.length; i++) {
			if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
		}
	};
	var validate_field = function(elem, remove) {
		var tooltip = null, value = elem.value, no_error = true;
		remove ? remove_tooltip(elem) : false;
		if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
		if (elem.getAttribute('required') !== null) {
			if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {
				var elems = form_to_submit.elements[elem.name];
				if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {
					no_error = elem.checked;
				}
				else {
					no_error = false;
					for (var i = 0; i < elems.length; i++) {
						if (elems[i].checked) no_error = true;
					}
				}
				if (!no_error) {
					tooltip = create_tooltip(elem, "Please select an option.");
				}
			} else if (elem.type =='checkbox') {
				var elems = form_to_submit.elements[elem.name], found = false, err = [];
				no_error = true;
				for (var i = 0; i < elems.length; i++) {
					if (elems[i].getAttribute('required') === null) continue;
					if (!found && elems[i] !== elem) return true;
					found = true;
					elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
					if (!elems[i].checked) {
						no_error = false;
						elems[i].className = elems[i].className + ' _has_error';
						err.push("Checking %s is required".replace("%s", elems[i].value));
					}
				}
				if (!no_error) {
					tooltip = create_tooltip(elem, err.join('<br/>'));
				}
			} else if (elem.tagName == 'SELECT') {
				var selected = true;
				if (elem.multiple) {
					selected = false;
					for (var i = 0; i < elem.options.length; i++) {
						if (elem.options[i].selected) {
							selected = true;
							break;
						}
					}
				} else {
					for (var i = 0; i < elem.options.length; i++) {
						if (elem.options[i].selected && (!elem.options[i].value || (elem.options[i].value.match(/\n/g)))) {
							selected = false;
						}
					}
				}
				if (!selected) {
					elem.className = elem.className + ' _has_error';
					no_error = false;
					tooltip = create_tooltip(elem, "Please select an option.");
				}
			} else if (value === undefined || value === null || value === '') {
				elem.className = elem.className + ' _has_error';
				no_error = false;
				tooltip = create_tooltip(elem, "This field is required.");
			}
		}
		if (no_error && (elem.id == 'field[]' || elem.id == 'ca[11][v]')) {
			if (elem.className.includes('phone-input-error')) {
				elem.className = elem.className + ' _has_error';
				no_error = false;
			}
		}
		if (no_error && elem.name == 'email') {
			if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {
				elem.className = elem.className + ' _has_error';
				no_error = false;
				tooltip = create_tooltip(elem, "Enter a valid email address.");
			}
		}
		if (no_error && /date_field/.test(elem.className)) {
			if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {
				elem.className = elem.className + ' _has_error';
				no_error = false;
				tooltip = create_tooltip(elem, "Enter a valid date.");
			}
		}
		tooltip ? resize_tooltip(tooltip) : false;
		return no_error;
	};
	var needs_validate = function(el) {
        if(el.getAttribute('required') !== null){
            return true
        }
        if(el.name === 'email' && el.value !== ""){
            return true
        }

		if((el.id == 'field[]' || el.id == 'ca[11][v]') && el.className.includes('phone-input-error')){
            return true
        }

        return false
	};
	var validate_form = function(e) {
		var err = form_to_submit.querySelector('._form_error'), no_error = true;
		if (!submitted) {
			submitted = true;
			for (var i = 0, len = allInputs.length; i < len; i++) {
				var input = allInputs[i];
				if (needs_validate(input)) {
					if (input.type == 'tel') {
						addEvent(input, 'blur', function() {
							this.value = this.value.trim();
							validate_field(this, true);
						});
					}
					if (input.type == 'text' || input.type == 'number' || input.type == 'time') {
						addEvent(input, 'blur', function() {
							this.value = this.value.trim();
							validate_field(this, true);
						});
						addEvent(input, 'input', function() {
							validate_field(this, true);
						});
					} else if (input.type == 'radio' || input.type == 'checkbox') {
						(function(el) {
							var radios = form_to_submit.elements[el.name];
							for (var i = 0; i < radios.length; i++) {
								addEvent(radios[i], 'click', function() {
									validate_field(el, true);
								});
							}
						})(input);
					} else if (input.tagName == 'SELECT') {
						addEvent(input, 'change', function() {
							validate_field(this, true);
						});
					} else if (input.type == 'textarea'){
						addEvent(input, 'input', function() {
							validate_field(this, true);
						});
					}
				}
			}
		}
		remove_tooltips();
		for (var i = 0, len = allInputs.length; i < len; i++) {
			var elem = allInputs[i];
			if (needs_validate(elem)) {
				if (elem.tagName.toLowerCase() !== "select") {
					elem.value = elem.value.trim();
				}
				validate_field(elem) ? true : no_error = false;
			}
		}
		if (!no_error && e) {
			e.preventDefault();
		}
		resize_tooltips();
		return no_error;
	};
	addEvent(window, 'resize', resize_tooltips);
	addEvent(window, 'scroll', resize_tooltips);

	var hidePhoneInputError = function(inputId) {
		var errorMessage =  document.getElementById("error-msg-" + inputId);
		var input = document.getElementById(inputId);
		errorMessage.classList.remove("phone-error");
		errorMessage.classList.add("phone-error-hidden");
		input.classList.remove("phone-input-error");
	};

	var initializePhoneInput = function(input, defaultCountry) {
		return window.intlTelInput(input, {
			utilsScript: "https://unpkg.com/intl-tel-input@17.0.18/build/js/utils.js",
			autoHideDialCode: false,
			separateDialCode: true,
			initialCountry: defaultCountry,
			preferredCountries: []
		});
	}

	var setPhoneInputEventListeners = function(inputId, input, iti) {
		input.addEventListener('blur', function() {
			var errorMessage = document.getElementById("error-msg-" + inputId);
			if (input.value.trim()) {
				if (iti.isValidNumber()) {
					iti.setNumber(iti.getNumber());
					if (errorMessage.classList.contains("phone-error")){
						hidePhoneInputError(inputId);
					}
				} else {
					showPhoneInputError(inputId)
				}
			} else {
				if (errorMessage.classList.contains("phone-error")){
					hidePhoneInputError(inputId);
				}
			}
		});

		input.addEventListener("countrychange", function() {
			iti.setNumber('');
		});

		input.addEventListener("keydown", function(e) {
    		var charCode = (e.which) ? e.which : e.keyCode;
    		if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 8) {
       	    	e.preventDefault();
			}
 		});
	};

	var showPhoneInputError = function(inputId) {
		var errorMessage =  document.getElementById("error-msg-" + inputId);
		var input = document.getElementById(inputId);
		errorMessage.classList.add("phone-error");
		errorMessage.classList.remove("phone-error-hidden");
		input.classList.add("phone-input-error");
	};


    var _form_serialize = function(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=0;i<form.elements.length;i++){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"tel":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].previousSibling.querySelector('div.iti__selected-dial-code').innerText)+encodeURIComponent(" ")+encodeURIComponent(form.elements[i].value));break;case"text":case"number":case"date":case"time":case"hidden":case"password":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=0;j<form.elements[i].options.length;j++){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};
	var form_submit = function(e) {
		e.preventDefault();
		if (validate_form()) {
			// use this trick to get the submit button & disable it using plain javascript
			document.querySelector('#_form_73_submit').disabled = true;
						var serialized = _form_serialize(document.getElementById('_form_6383A601AD6E9_')).replace(/%0A/g, '\\n');
			var err = form_to_submit.querySelector('._form_error');
			err ? err.parentNode.removeChild(err) : false;
			_load_script('https://sokomedia.activehosted.com/proc.php?' + serialized + '&jsonp=true');
		}
		return false;
	};
	addEvent(form_to_submit, 'submit', form_submit);
})();
