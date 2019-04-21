import { addListeners } from './listeners';
import { showRules } from './rules';
import { rulesModal } from './variables';
import "../less/style.less";

window.onload = ()=> {
	addListeners();
	showRules();
}

window.onclick = (e)=>{
	if (e.target == rulesModal) {
		rulesModal.style.display = "none";
	}
}