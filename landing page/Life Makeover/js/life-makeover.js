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


// Step One
function stoponebtn() {
  var stepone = document.getElementById('stepone');
  var step0 = document.getElementById('step0');

  stepone.style.display = 'none';
  step0.style.display = 'block';
}

// Step Two
function submitForm() {
  var userInput = document.getElementById('input-id').value.trim();
  var inputWithIconBox = document.getElementById('inputWithIconBox');
  var userBox = document.getElementById('main-user-box');
  var nextButton = document.getElementById('btn0id');
  var showUserValue = document.getElementById('showUserValue');
  var showUserValue2 = document.getElementById('showUserValue2');
  var errorMessage = document.querySelector('.error-message');
  var step0 = document.getElementById('step0');

  if (userInput === '') {
    inputWithIconBox.classList.add('error', 'error-translate');
    errorMessage.style.display = 'block';

    setTimeout(function () {
      errorMessage.style.display = 'none';
    }, 3000); 
    return;
  } else {
      inputWithIconBox.classList.remove('error', 'error-translate');
      errorMessage.style.display = 'none';
  }
  if (userInput.length < 3) {
    alert('Please enter at least 3 characters.');
    return;
  }

  userBox.style.display = 'none';
  nextButton.style.display = 'none';

  showUserValue.innerText = userInput;
  showUserValue2.innerText = userInput;
  showUserValue3 = userInput;

  if (startSecondSearchValue !== '') {
    displayFinalMenu();
  } else {
    alert('Please select Gold');
    userBox.style.display = 'block';
    nextButton.style.display = 'block';
    return;
  }

  step0.style.display = "block";
}


window.onload = function () {
  ResourceSelected('Resource0', '10000');
  ResourceSelected1('Resource-n2', '22222');
  startSecondSearch('device0', 'Window')
};

var startSecondSearchValue = '';

function startSecondSearch(id, value) {

  var allResourceElements = document.querySelectorAll('.devices_box');
  allResourceElements.forEach(function (element) {
    element.classList.remove('devices_box1');
  });

  startSecondSearchValue = value


  var selectedResourceElement = document.getElementById(id);
  selectedResourceElement.classList.add('devices_box1');
  console.log(selectedResourceElement)
}


// step threee
function displayFinalMenu() {

  var Resourcediv = document.getElementById('Resource-div');

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
    selectedValueElement.innerHTML = '<span style="color:#01ff01; font-weight: bold;">' + selectedValue + '</span> Coupons ' +
      '<span style="color:#01ff01; font-weight: bold;" >' + selectedValue2 + '</span> Gems ';

    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      if (CountElementgems) {
        CountElementgems.style.display = 'none';
      }
      selectedValueElement.textContent = (' Adding Generated Coupons and gems');
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
      selectedValueElement.innerHTML = ' Coupons Load successful  <span style="color: #01ff01;  font-weight: bold;  " class="fade-in"> ' + selectedValue1 + '</span>';
    }, 11000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ' Coupons Load ...';
    }, 10000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ' Coupons Load ..';
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
      selectedValueElement.innerHTML = ' Coupons Load . ';
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
      selectedValueElement.innerHTML = ('<span > Connecting to Life Makeover Server... </span>');
    }, 2000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = '<span > Getting Ready. </span>';

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
  }, 19000);
}



