var country = ["China", "India", "United State", "Indonesia", "Brazil",
  "Pakistan", "Nigeria", "Bangladesh", "Russia", "Japan"
];
var countryInput = document.getElementById("countryName");
var countryList = document.getElementById("list");
var dropdown = document.getElementsByClassName("dropdown");
var clicked = false;


function search() {
  var countryVal = countryInput.value;
	var result;
  clearList();
  for (var i = 0; i < country.length; i++) {
    if (country[i].toLowerCase().search(countryVal) != -1) {
      countryList.innerHTML += "<li id='" + country[i] + "'>" + country[i] + "</li>";
			result=country[i];
    }
  }
	countryInput.onchange = function() {
		countryInput.value = result;
		clearList();
	};
  clicked = true;
}

function showList() {
  if (clicked == false) {
    for (var i = 0; i < country.length; i++) {
      countryList.innerHTML += "<li tabindex='"+i+"' id='" + country[i] + "'>" + country[i] + "</li>";
    }
    clicked = true;
  }
}

function clearList() {
  countryList.innerHTML = "";
  clicked = false;
}

function checkClicked() {
  function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
  }
  countryList.onclick = function(event) {
    var target = getEventTarget(event);
    countryInput.value = target.innerHTML;
    clearList();
  };
}

checkClicked();
countryInput.oninput = function() {
  search();
};
countryInput.addEventListener("click", showList);
