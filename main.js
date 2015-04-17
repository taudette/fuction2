$(document).on('ready', function() {

// 1) write a function which returns the 'name' property
	var name= {
		name:[],
		age:[]
	};
	var getName = function(name){
		return name.name;
	};
	console.log(getName({name:"tyler", age:24}));



// 2) from an array of strings return the total number of letters in the strings (19)
	var totalLetters = function(x){
		var y = x.toString();

// g SEARCHES FOR ALL OF THE CHARACTER IN THE STRING INSTEAD OF JUST THE FIRST
		var z =  y.replace(/,/g, '');
		return z.length;				
	};
	console.log(totalLetters(['javascript', 'is', 'awesome']));




// 3) return new object with a key from the first and value from the second ({city:denver})
// asigning b to property a of emptyO
	var keyvalue = function(a, b){
		var emptyO = {};
		emptyO[a]=b;
		return emptyO;
	};
	console.log(keyvalue('city', 'Denver'));



// 4) takes array and neg number and returns value given index ('sally')
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


// 5) removes m characters ('faily')
	var removeM = function(mWord){
		var noM = mWord.replace(/m/g, '');
		return noM;
	};
	console.log(removeM('family'));



// 6) coneol logs key is value ('firstName is pork, lastName is chops')
	// for in loop

	var printObject = function(a){
		var obj = a;
		for (var pro in obj) {
  		console.log(pro + " is " + obj[pro]);
		}
		
	};
	(printObject({ firstName: 'pork', lastName: 'chops' }));



// 7) returns all vowels (a e i o u)
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



// 8) returns true if every adjacent item is the same (true)
	var twins = function(a){	
		for (var i=0; i<a.length; i+=2){	
			if (a[i]!== a[i+1]) {
				return false;
			}				
		}
		return true;
	};
	console.log(twins(['a', 'a', 'b', 'b', 'd', 'd']));
	


// 9) returns true if any are true (false)

	var or = function(a){
		for (var i = 0 ; i<a.length ; i++){
			if (a[i]===true){
				return true;
			}
		}
		return false;
	};	
	console.log(or([false, false, false]));



// 10) returns only unique values  [a, b, c, test, d]
	var unique = function(a){
		var clone = a.slice(0);
		return clone;

	};
	console.log(unique(['a', 'b', 'a', 'c', 'test', 'd']));










});