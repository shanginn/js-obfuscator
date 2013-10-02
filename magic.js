function encode (Str) {
	var sep =  document.getElementById("sep").value;
	var zero = document.getElementById("0").value;
	var one =  document.getElementById("1").value;
	if(sep === zero || sep === one || one == zero) return "Введите разные символы для кодирования!";
	if(sep === '0' || sep === '1' || zero === '0' || zero === '1' || one === '0' || one === '1') return "Не используйте 0 и 1.";
	var encodedString = [];
	for(var i in Str)
		encodedString[i] = encodeChar(Str[i],zero,one);
	return zero + one + sep + encodedString.join(sep);
}
function decode (Str) {
	var decodedString = "";
	Str.replace(RegExp(Str[0],'g'),'0').replace(RegExp(Str[1],'g'),'1').split(Str[2]).splice(1).forEach(function(value,index,arr){decodedString+=String.fromCharCode(parseInt(value, 2))})
	return decodedString;
}
function encodeChar (Char,Zero,One) {
	var sourceChar = Char.charCodeAt(0).toString(2);
	var obChar = "";
	for(var i in sourceChar)
		obChar += sourceChar[i] === '0' ? Zero : One;
	return obChar;
}
function decodeChar (CharString,Zero) {
	var restChar = "";
	for(var i in CharString)
		restChar += CharString[i] === Zero ? "0" : "1";
	return String.fromCharCode(parseInt(restChar, 2));	
}
function decFooOb ($){var _=["","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x66\x6F\x72\x45\x61\x63\x68","\x73\x70\x6C\x69\x63\x65","\x73\x70\x6C\x69\x74","\x67","\x31","\x72\x65\x70\x6C\x61\x63\x65","\x30"];$[_[(-~-~[]<<-~-~[])+~[]]](RegExp($[!![]+~[]],_[(!![]<<-~-~[])+!![]]),_[-~-~[]<<-~-~[]])[_[(-~-~[]<<-~-~[])+~[]]](RegExp($[-~[]],_[(!![]<<-~-~[])+!![]]),_[(-~-~[]<<-~-~[])+~-~[]])[_[-~-~[]<<(!![])]]($[-~-~[]])[_[(!![]<<-~-~[])+~[]]](-~[])[_[-~-~[]]](function (__){_[!![]+~[]]+=String[_[-~[]]](parseInt(__,-~-~[]));} );window[(!![]+[])[(!![]<<-~-~[])+~[]]+String[_[-~[]]](parseInt(''+-~[]+-~[]+-~[]+~~[]+-~[]+-~[]+~~[],-~-~[]))+(![]+[])[-~[]]+_[(!![]<<-~-~[])+~[]][-~-~[]]](_[!![]+~[]]);}

function decFoo (Str){
	var S = ''
	Str.replace(RegExp(Str[0],'g'),'0').replace(RegExp(Str[1],'g'),'1').split(Str[2]).splice(1).forEach(function(value,index,arr){S+=String.fromCharCode(parseInt(value, 2))});
	console.log(S)
	eval(S);

}