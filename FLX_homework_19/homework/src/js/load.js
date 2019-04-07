window.onload = ()=> {
	addListeners();
	showRules();
}

window.onclick = (e)=>{
	if (e.target == rulesModal ) {
		rulesModal .style.display = "none";
	}
}