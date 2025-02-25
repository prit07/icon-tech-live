$(document).ready(function() {
    $('.owl-shadow-fight').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        navText: [
			'<i class="fa-solid fa-chevron-left"></i>',
			'<i class="fa-solid fa-chevron-right"></i>'
		],
    })
})
  



function submitForm() {
  var userInput = document.getElementById('input-id').value;
  var inputWithIconBox = document.getElementById('inputWithIconBox');
  var searchSection = document.getElementById('search0');
  var userBox = document.getElementById('main-user-box');
  var nextButton = document.getElementById('btn0id');
  var showUserValue = document.getElementById('showUserValue');
  var showUserValue2 = document.getElementById('showUserValue2');


  if (userInput.trim() === '') {
      inputWithIconBox.classList.add('error', 'error-translate');
      return;
  } else {
      inputWithIconBox.classList.remove('error', 'error-translate');
  }
  userBox.style.display = 'none';
  nextButton.style.display = 'none';

  if (userInput.length >= 3) {
      var searchSection = document.getElementById('search0');
      var checkmarkIcon = document.getElementById('checkmark-icon');
      searchSection.style.display = 'block';
      checkmarkIcon.style.display = 'block';
      showMenu();
      showUserValue.innerText = userInput;
      showUserValue2.innerText = userInput;
      showUserValue3 = userInput;
  } else {
      alert('Please enter at least 3 characters.');

      userBox.style.display = 'block';
      nextButton.style.display = 'block';
  }
}

function showMenu() {
  var searchSection = document.getElementById('search0');
  var checkmarkIcon = document.getElementById('checkmark-icon');

  var menu = document.getElementById('menu');

  searchSection.style.display = 'none';
  checkmarkIcon.style.display = 'none';
  menu.style.display = 'flex';
  menu.style.flexDirection = 'column';
}

function startSecondSearch(menuItem) {
  var menu = document.getElementById('menu');
  console.log('Simulating second search for ' + menuItem);
  displayFinalMenu()
}

function displayFinalMenu() {
  var menu = document.getElementById('menu');
  var Resourcediv = document.getElementById('Resource-div');
  menu.style.display = "none";
  Resourcediv.style.display = "block";
  console.log('Final menu loaded successfully!');
}

var selectedValue = '';
var selectedValue02 = '';


var selectedValue1 = '';
var selectedValue2 = '';



function ResourceSelected(id, value) {

var allResourceElements = document.querySelectorAll('.Resource');
allResourceElements.forEach(function (element) {
  element.classList.remove('Selected');
});

selectedValue1 = value;
selectedValue = value;

var selectedResourceElement = document.getElementById(id)
;
selectedResourceElement.classList.add('Selected');
console.log(selectedResourceElement)
}



function ResourceSelected1(id, value) {

var allResourceElements = document.querySelectorAll('.Resource-n');
allResourceElements.forEach(function (element) {
  element.classList.remove('Selected1');
});
selectedValue2 = value;
selectedValue02 = value;

var selectedResourceElement = document.getElementById(id);

selectedResourceElement.classList.add('Selected1');
console.log(selectedResourceElement)
}


function displayFinalMenu2() {
var Resourcediv = document.getElementById('Resource-div');
var Resourcediv1 = document.getElementById('Resource-div1');

if (selectedValue1 !== '') {
  Resourcediv.style.display = "none";
  Resourcediv1.style.display = "block";
} else {
  alert('Please select both Dice Rolls proceeding.');
}
}

function GenerateButton() {

  var Resourcediv1 = document.getElementById('Resource-div1');
  var loader = document.getElementById('loader');

  if (selectedValue1 !== '' && selectedValue2 !== "") {
    Resourcediv1.style.display = "none";
    loader.style.display = "none"
    showGenerating();
    var selectedValueElement = document.getElementById('selectedValue');
    var selectedValueElement02 = document.getElementById('selectedValue02')
    selectedValueElement.textContent =  selectedValue;
    selectedValueElement02.textContent = selectedValue02;


    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      loader.style.display = "block"
      selectedValueElement.textContent = (' Adding Generated gems and Money' );

    }, 17000)

    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      loader.style.display = "block"
      selectedValueElement.innerHTML = ' Coins Load  <span style="color: green; font-weight: bold; font-size:25px;"  class="fade-in"> successful  ' + selectedValue2 + '</span>';

    }, 15000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      loader.style.display = "block"
      selectedValueElement.innerHTML = ' Coins Load ...';
    }, 14000)

    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      loader.style.display = "block"
      selectedValueElement.innerHTML = ' Coins Load ..';
    }, 13500)

    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      loader.style.display = "block"
      selectedValueElement.innerHTML = ' Coins Load .';
    }, 13000)


    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      loader.style.display = "block"
      selectedValueElement.innerHTML = ' Gems Load  <span style="color: green;  font-weight: bold;  font-size:25px; " class="fade-in"> successful ' + selectedValue1 + '</span>';
    }, 11000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      loader.style.display = "block"
      selectedValueElement.innerHTML = ' Gems Load ...';

    }, 10000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      loader.style.display = "block"
      selectedValueElement.innerHTML = ' Gems Load ..';

    }, 9500)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      loader.style.display = "block"
      selectedValueElement.innerHTML = ' Gems Load . ';

    }, 9000)

    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Loading last step...');
    },8000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Loading last step..');
    }, 7500)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Loading last step.');
    }, 7000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ' Searching ID <span style="color: red; font-weight: 700; font-size: 24px;">' + showUserValue3 + '</span> Connecting ';
    }, 5000)
    setTimeout(function () {;
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Searching ID...')
    }, 4800)
    setTimeout(function () {;
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Searching ID..')
    }, 4400)
    setTimeout(function () {;
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Searching ID.')
    }, 4000)

    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Connecting to Shadow Fight Server...');
    }, 2000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Getting Ready... ');
    }, 1500)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Getting Ready.. ');
    }, 1000)

  }
}

// Step six js
function showGenerating() {
  var search1 = document.getElementById('search1');
  var Resourcediv1 = document.getElementById('Resource-div1');

  search1.style.display = "block"
  Resourcediv1.style.display = "none";

  setTimeout(function () {
    search1.style.display = "none"
    var verifyPage = document.getElementById('verifyPage');
    verifyPage.style.display = "block"
  }, 18000);
}




jQuery(window).on('scroll', function() {
  if (jQuery(window).scrollTop() > 113) {
      jQuery('.desktop_ads, .mobile_ads').addClass("fixed-header")
  } else {
      jQuery('.desktop_ads, .mobile_ads').removeClass("fixed-header")
  }
}) 


 