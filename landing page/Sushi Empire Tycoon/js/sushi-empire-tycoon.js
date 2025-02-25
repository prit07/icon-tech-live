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
  showUserValue2.innerHTML = 'User Id :  <span style="color:#3bf260; font-weight: bold;"  class="fade-in">  ' + userInput + '</span>';
  showUserValue3 = userInput;

  if (startSecondSearchValue !== '') {
      showLoading()
  } else {
      alert('Please select Device');
      userBox.style.display = 'block';
      nextButton.style.display = 'block';
      return;
  }

  step0.style.display = "block";
}

window.onload = function () {
  ResourceSelected('Resource0', '25000');
  ResourceSelected1('Resource-n2', '450000');
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




function showLoading() {

  var searchSection = document.getElementById('search0');
  var checkmarkIcon = document.getElementById('checkmark-icon');
  var searching = document.getElementById('searching');
  var searchtext = document.getElementById('search-text');

  searchSection.style.display = 'block';
  setTimeout(function () {
      searchtext.style.display = 'none';
      checkmarkIcon.style.display = 'block';
      searching.style.display = 'none';
  }, 4000)

  setTimeout(function () {
      displayFinalMenu();
  }, 5000);
}




// step threee
function displayFinalMenu() {

  var Resourcediv = document.getElementById('Resource-div');
  var search0 = document.getElementById('search0')

  search0.style.display = "none";
  Resourcediv.style.display = "block";
  console.log('Final menu loaded successfully!');
}

var selectedValue = '';
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

  var selectedResourceElement = document.getElementById(id);

  selectedResourceElement.classList.add('Selected1');
  console.log(selectedResourceElement)
}


// Step Five
function GenerateButton() {
  var Resourcediv = document.getElementById('Resource-div');
  if (selectedValue1 !== '' && selectedValue2 !== "") {
      Resourcediv.style.display = "none";
      showGenerating();
      var selectedValueElement = document.getElementById('selectedValue');
      var selectedValueElement1 = document.getElementById('selectedValue2')
      var selectedValueElement2 = document.getElementById('startSecondSearchValue');
      selectedValueElement.innerHTML = 'Gold : <span style="color:#3bf260; font-weight: bold;"  > ' + selectedValue + '</span>';
      selectedValueElement1.innerHTML = 'Diamonds : <span style="color:#3bf260; font-weight: bold;"  > ' + selectedValue2 + '</span>';
      selectedValueElement2.innerHTML = 'Platform :  <span style="color:#3bf260; font-weight: bold;">  ' + startSecondSearchValue + '</span>';

      setTimeout(function () {
          var selectedValueElement = document.getElementById('selectedValue1');
          if (CountElementgems) {
              CountElementgems.style.display = 'none';
          }
          selectedValueElement.textContent = (' Adding Generated Gold and Diamonds');
      }, 17000)
      setTimeout(function () {
          var selectedValueElement = document.getElementById('selectedValue1');
          selectedValueElement.innerHTML = ' Diamonds Load successful  <span style="color: #01ff01; font-weight: bold;"  class="fade-in">  ' + selectedValue2 + '</span>';
      }, 15000)
      setTimeout(function () {
          var selectedValueElement = document.getElementById('selectedValue1');
          selectedValueElement.innerHTML = ' Diamonds Load ...';
      }, 14000)
      setTimeout(function () {
          var selectedValueElement = document.getElementById('selectedValue1');
          selectedValueElement.innerHTML = ' Diamonds Load ..';
      }, 13500)
      setTimeout(function () {
          var selectedValueElement = document.getElementById('selectedValue1');
          selectedValueElement.innerHTML = ' Diamonds Load .';
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
          selectedValueElement.innerHTML = ('<span > Connecting to Five Heroes  Server... </span>');
      }, 2000)
      setTimeout(function () {
          var selectedValueElement = document.getElementById('selectedValue1');
          selectedValueElement.innerHTML = '<span > Getting Ready.. </span>';
      }, 1000)

  }
  else { alert('Please select '); }
}


// Step six
function showGenerating() {
  var search1 = document.getElementById('search1');
  var Resourcediv = document.getElementById('Resource-div');
  var checkmarkimg = document.getElementById('checkmark-img');

  search1.style.display = "block"
  Resourcediv.style.display = "none";
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

