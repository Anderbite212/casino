var button = document.getElementById("search_button");
button.onclick = function() {
	var input = document.getElementById("search_field");
	var url = "https://www.google.com/search?q=" + input.value;
	var google = window.open(url, "_blank");
	google.focus();
}