$(document).on('ready', function() {


	var name= {
		name:[],
		age:[]
	};
	var getName = function(name){
		return name.name;
	};
	console.log(getName({name:"tyler", age:24}));




	var totalLetters = function(x){
		var y = x.toString();

// g SEARCHES FOR ALL OF THE CHARACTER IN THE STRING INSTEAD OF JUST THE FIRST
		var z =  y.replace(/,/g, '');
		return z.length;				
	};
	console.log(totalLetters(['javascript', 'is', 'awesome']));








// asigning b to property a of emptyO
	var keyvalue = function(a, b){
		var emptyO = {};
		emptyO[a]=b;
		return emptyO;
	};
	console.log(keyvalue('city', 'Denver'));




	var negativeIndex = function(a, b){
		var array = [];
		for (var i=0; i<a.length; i++){
		array.push(a);
	}
		if(b !== -1){
			var select =a.slice(b, b+1);
			return select;
		}	
		else{
			var select2 =a.slice(b);
			return select2;
		}
		

	};
	console.log((negativeIndex(['jerry', 'sarah', 'sally'], -1)));


	var removeM = function(mWord){
		var noM = mWord.replace(/m/g, '');
		return noM;
	};
	console.log(removeM('family'));



	// #6 for in loop

	var printObject = function(a){
		var obj = a;
		for (var pro in obj) {
  		console.log(pro + " is " + obj[pro]);
		}
		
	};
	(printObject({ firstName: 'pork', lastName: 'chops' }));


	var twins = function(a){	
		for (var i=0; i<a.length; i+=2){	
			if (a[i]!== a[i+1]) {
				return false;
			}				
		}
		return true;
	};
	console.log(twins(['a', 'a', 'b', 'b', 'd', 'd']));
	



	var or = function(a){
		for (var i = 0 ; i<a.length ; i++){
			if (a[i]===true){
				return true;
			}
		}
		return false;
	};	
	console.log(or([false, false, false]));




	var unique = function(a){
		var clone = a.slice(0);
		return clone;

	};
	console.log(unique(['a', 'b', 'a', 'c', 'test', 'd']));



	var vowels = function(a){	
		var output = [];
		for (var i = 0 ; i < a.length ; i++){
			if (a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u'){
				output.push(a[i]);
			}		
		}
		return output;
	};
	console.log(vowels('What evil odd ducks!'));







});