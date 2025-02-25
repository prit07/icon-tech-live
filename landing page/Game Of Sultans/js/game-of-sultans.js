    
// Step one js 
function submitForm() {
  var userInput = document.getElementById('input-id').value;
  var inputWithIconBox = document.getElementById('inputWithIconBox')
  var searchSection = document.getElementById('search0');
  var userBox = document.getElementById('main-user-box');
  var nextButton = document.getElementById('btn0id');
  var showUserValue = document.getElementById('showUserValue');
  var showUserValue2 = document.getElementById('showUserValue2');
  var errorMessage = document.querySelector('.error-message');

  if (userInput.trim() === '') {
    inputWithIconBox.classList.add('error');
      errorMessage.style.display = 'block';
    return;
  } else {
    inputWithIconBox.classList.remove('error')
     errorMessage.style.display = 'none';
  }

  userBox.style.display = 'none';
  nextButton.style.display = 'none';

  if (userInput.length >= 3) {
    showLoading();
    showUserValue.innerText = userInput;
    showUserValue2.innerText = userInput;
    showUserValue3 = userInput;
  } else {
    alert('Please enter at least 3 characters.');
    userBox.style.display = 'block';
    nextButton.style.display = 'block';
  }

}

// step two js   
function showLoading() {

  var searchSection = document.getElementById('search0');
  var checkmarkIcon = document.getElementById('checkmark-icon');
  var searching = document.getElementById('searching');
  var searchtext = document.getElementById('search-text');

  searchSection.style.display = 'block';
  setTimeout(function () {
    searchtext.style.display='none';
    checkmarkIcon.style.display = 'block';
    searching.style.display='none';
  }, 4000)

  setTimeout(function () {
    showMenu();
  }, 5000);
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


//  step three js   
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

// Step four js
var selectedValue = '';

var selectedValue1 = '';

window.onload = function () {
  ResourceSelected('Resource0', '10000');
};

function ResourceSelected(id, value) {

  var allResourceElements = document.querySelectorAll('.Resource');
  allResourceElements.forEach(function (element){
    element.classList.remove('Selected');
  });

  selectedValue = value;
  selectedcount = value;

  var selectedResourceElement = document.getElementById(id);
  selectedResourceElement.classList.add('Selected');
}


// Step five js
function GenerateButton() {

  var Resourcediv = document.getElementById('Resource-div');
  if (selectedValue !== '' ) {
    Resourcediv.style.display = "none";
    showGenerating();
    var selectedValueElement = document.getElementById('selectedValue');
    selectedValueElement.textContent = selectedValue;
    setTimeout(function () {
      selectedValue1 = selectedValue;
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Finalizing...');
    }, 14000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = (' Adding Diamonds' );
    }, 13000)
    setTimeout(function () {
      selectedValue1 = selectedValue;
      var selectedValueElement1 = document.getElementById('selectedValue1');
      selectedValueElement1.innerHTML = ' Diamonds Load successful   <span style="color: green;  font-weight: 800;"> ' + selectedValue1 + '</span>';
    }, 11000)

    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ' Diamonds Load ...';
    }, 10000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ' Diamonds Load ..';
    }, 9500)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ' Diamonds Load . ';

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
      selectedValueElement.innerHTML = ' Searching ID <span style="color:red; font-weight:700;">' + showUserValue3 + '</span> Connecting ';
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
        selectedValueElement.textContent = ('Connecting to Games Of Sultans Server...');
    }, 2000)
      setTimeout(function () {
        var selectedValueElement = document.getElementById('selectedValue1');
        selectedValueElement.textContent = ('Getting Ready.. ');
    }, 1000)
    setTimeout(function () {
        var selectedValueElement = document.getElementById('selectedValue1');
        selectedValueElement.textContent = ('Getting Ready. ');
    }, 500)
  }
}

// Step six js

function showGenerating() {

  var search1 = document.getElementById('search1');
  var Resourcediv = document.getElementById('Resource-div');
  var loader = document.getElementById('loader');

  search1.style.display = "block"
  Resourcediv.style.display = "none";
  loader.style.display = "none"

  setTimeout(function () {
    loader.style.display = "block"
  }, 11000)

  setTimeout(function () {
    search1.style.display = "none"
    var verifyPage = document.getElementById('verifyPage');
    verifyPage.style.display = "block"
  }, 15000);
}
