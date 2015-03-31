var Tree = {
	basefolderValue : "",
	UI : {
		Button: "button"
	},
	
	Validation : {
		String: "String"
	},
	
	init: function(object) {
		for (var key in object) {
			if (object.hasOwnProperty(key) ){
				console.log( "key:"+key+", val:"+object[key] );
			}
		}
	},
	
	namespace: function() {
		var root = window;

		for (var i = 0; i < arguments.length; i++) {
			var arr = arguments[i].split(/\./);

			for (var j = 0; j < arr.length; j++) {
				var item = arr[j];

				if (typeof item !== 'string') {
					root = item;
				} 
				else {
					if (!root[item]) {
						root[item] = {};
					}
					root = root[item];
				}
			}
			root = window;
		}
	},

	import: function(value) {
		var folder = value.package.split('.').join('/')
		for (var i = 0; i < value.files.length; i++) {
			var js = document.createElement("script");
			js.type = "text/javascript";
			js.src = Tree.basefolderValue + '/' + folder + '/' + value.files[i] + '.js';
			document.body.appendChild(js);
		}
		value.success();
	},
	
	loadScreen: function(value) {
		var screen = eval(value);
		for(var propertyName in screen) {
			if (screen.hasOwnProperty(propertyName)) {
				alert(propertyName);
			}
		}
	},
	
	baseFolder: function(value) {
		Tree.basefolderValue = value;
	}
};