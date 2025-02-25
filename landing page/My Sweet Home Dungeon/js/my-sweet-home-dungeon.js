$(document).ready(function () {

  $.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
      start: 0,
      end: 0,
      easing: 'swing',
      duration: 1000,
      complete: ''
    }, options);
    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: function () {
        thisElement.text(settings.end);
        if (settings.complete) {
          settings.complete();
        }
      }
    });
  };
})


// Step one 
function submitForm() {
  var userInput = document.getElementById('input-id').value;
  var inputWithIconBox = document.getElementById('inputWithIconBox');
  var userBox = document.getElementById('main-user-box');
  var nextButton = document.getElementById('btn0id');
  var showUserValue = document.getElementById('showUserValue');
  var showUserValue2 = document.getElementById('showUserValue2');
  var errorMessage = document.querySelector('.error-message');


  if (userInput.trim() === '') {
    inputWithIconBox.classList.add('error', 'error-translate');
    errorMessage.style.display = 'block';
    return;
  } else {
    inputWithIconBox.classList.remove('error', 'error-translate');
    errorMessage.style.display = 'none';
  }
  userBox.style.display = 'none';
  nextButton.style.display = 'none';

  if (userInput.length >= 3) {
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

// Step Two
function showMenu() {
  var menu = document.getElementById('menu');
  menu.style.display = 'flex';
  menu.style.flexDirection = 'column';
}

var startSecondSearchValue = '';

function startSecondSearch(id, value) {
  startSecondSearchValue = value
  displayFinalMenu()
}

//  step threee
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


window.onload = function () {
  ResourceSelected('Resource0', '10000');
  ResourceSelected1('Resource-n2', '22222');
};


function ResourceSelected(id, value) {

  var allResourceElements = document.querySelectorAll('.Resource');
  allResourceElements.forEach(function (element) {
    element.classList.remove('Selected');
  });

  selectedValue1 = value;
  selectedValue = value;

  var selectedResourceElement = document.getElementById(id);
  selectedResourceElement.classList.add('Selected');
  console.log(selectedResourceElement)
}


// Step four
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
    alert('Please select Gold');
  }
}


// Step Five
function GenerateButton() {
  var Resourcediv1 = document.getElementById('Resource-div1');

  if (selectedValue1 !== '' && selectedValue2 !== "") {
    Resourcediv1.style.display = "none";
    showGenerating();
    var selectedValueElement = document.getElementById('selectedValue');
    selectedValueElement.innerHTML = '<span style="color:#01ff01; font-weight: bold;">' + selectedValue + '</span> Gold ' +
      '<span style="color:#01ff01; font-weight: bold;" >' + selectedValue2 + '</span> Gems ';

    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      if (CountElementgems) {
        CountElementgems.style.display = 'none';
      }
      selectedValueElement.textContent = (' Adding Generated gems and Money');
    }, 17000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ' Gems Load successful  <span style="color: #01ff01; font-weight: bold;"  class="fade-in">  ' + selectedValue2 + '</span>';
    }, 15000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ' Gems Load ...';
    }, 14000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ' Gems Load ..';
    }, 13500)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ' Gems Load .';
      var CountElementgems = document.getElementById('CountElementgems');
      if (CountElementgems) {
        CountElementgems.style.display = 'block';
      }
      if (CountElementcoins) {
        CountElementcoins.style.display = 'none';
      }
      $('#gemsCountElement').jQuerySimpleCounter({ end: selectedValue2, duration: 2000 });
    }, 13000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ' Gold Load successful  <span style="color: #01ff01;  font-weight: bold;  " class="fade-in"> ' + selectedValue1 + '</span>';
    }, 11000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ' Gold Load ...';
    }, 10000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ' Gold Load ..';
    }, 9500)
    setTimeout(function () {
      var loader01 = document.getElementById('loader01');
      if (loader01) {
        loader01.style.display = 'none';
      }
      var selectedValueElement = document.getElementById('selectedValue1');
      var CountElementcoins = document.getElementById('CountElementcoins');
      if (CountElementcoins) {
        CountElementcoins.style.display = 'block';
      }
      selectedValueElement.innerHTML = ' Gold Load . ';
      $('#coinsCountElement').jQuerySimpleCounter({ end: selectedValue1, duration: 2000 });
    }, 9000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Loading last step...');
    }, 8000)
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
      selectedValueElement.innerHTML = ' Searching ID <span style="color: red; font-weight: 700; ">' + showUserValue3 + '</span> Connecting ';
    }, 5000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Searching ID...')
    }, 4800)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Searching ID..')
    }, 4400)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Searching ID.')
    }, 4000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ('<span class="bounce-In"> Connecting to Shadow Fight Server... </span>');
    }, 2000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = '<span class="bounce-In"> Getting Ready. </span>';
    }, 100)

  }
  else { alert('Please select Gems'); }
}


// Step sex
function showGenerating() {
  var search1 = document.getElementById('search1');
  var Resourcediv1 = document.getElementById('Resource-div1');
  var checkmarkimg = document.getElementById('checkmark-img');

  search1.style.display = "block"
  Resourcediv1.style.display = "none";
  checkmarkimg.style.display = "none"

  setTimeout(function () {
    checkmarkimg.style.display = "block"
  }, 17000)

  setTimeout(function () {
    search1.style.display = "none"
    var verifyPage = document.getElementById('verifyPage');
    verifyPage.style.display = "block"
  }, 20000);
}



