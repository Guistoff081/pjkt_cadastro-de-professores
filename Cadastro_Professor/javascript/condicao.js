var pessoas = new Array("Gabriel", "Izabela", "Matheus","Lopes");
	function Todos(elem,ind,obj) {
		return (typeof elem == "String");
	}

alert(pessoas.every(Todos));