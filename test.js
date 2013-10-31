function get_AJAX_USER() {
	var codename = getOs();
	var sWidth = screen.width;
	var sHeight = screen.height;
	var get = new htmldb_Get(null, $v('pFlowId'), 'APPLICATION_PROCESS=POPULATE_INSERT', 0);
	get.addParam('x01', codename);
	get.addParam('x02', sWidth);
	get.addParam('x03', sHeight);

	gReturn = get.get();
	if (gReturn) {
		$v('P1_USER', gReturn);
	} else {
		$v('P1_USER', "");
	}
	get = null;
}
 function getOs() {
 	if (navigator.userAgent.indexOf("MSIE") > 0) {
 		return "MSIE";
 	}
 	if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
 		return "Firefox";
 	}
 	if (isSafari = navigator.userAgent.indexOf("Safari") > 0) {
 		return "Safari";
 	}
 	if (isCamino = navigator.userAgent.indexOf("Camino") > 0) {
 		return "Camino";
 	}
 	if (isMozilla = navigator.userAgent.indexOf("Gecko/") > 0) {
 		return "Gecko";
 	}
 }