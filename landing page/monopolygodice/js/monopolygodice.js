$(document).ready(function () {


  //  Stap one Js


  $('.input-1').keyup(function () {
    let len = this.value.length;

    if (len === 0) {
      $('.form-1 .progress-bar_item').each(function () {
        $(this).removeClass('active')
      });
      $('.form-1 .active').css('background-color', 'transparent');
    } else if (len > 0 == len <= 1) {
      $('.form-1 .progress-bar_item-1').addClass('active');
      $('.form-1 .progress-bar_item-2').removeClass('active');
      $('.form-1 .progress-bar_item-3').removeClass('active');
      $('.form-1 .active').css('background-color', '#ff0000');

    } else if (len > 1 == len <= 2) {
      $('.form-1 .progress-bar_item-1').addClass('active');
      $('.form-1 .progress-bar_item-2').addClass('active');
      $('.form-1 .progress-bar_item-3').removeClass('active');
      $('.form-1 .active').css('background-color', '#ffa500');

    } else {
      $('.form-1 .progress-bar_item').each(function () {
        $(this).addClass('active');
      });
      $('.form-1 .active').css('background-color', '#008000');
      ;
    }
  });

});


function submitForm() {
  var userInput = document.getElementById('input-id').value;
  var inputWithIconBox = document.getElementById('inputWithIconBox')
  // var searchSection = document.getElementById('search0');
  var userBox = document.getElementById('main-user-box');
  var nextButton = document.getElementById('btn0id');
  var showUserValue = document.getElementById('showUserValue');
  var showUserValue2 = document.getElementById('showUserValue2');


  if (userInput.trim() === '') {
    inputWithIconBox.classList.add('error',);
    return;
  } else {
    inputWithIconBox.classList.remove('error')
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

  searchSection.style.display = 'block';
  setTimeout(function () {
    checkmarkIcon.style.display = 'block';
  }, 3000)

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
var selectedValue02 = '';

var selectedValue01 = '';


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



// Step five js
function GenerateButton() {
 
  console.log(showUserValue3);
  var Resourcediv1 = document.getElementById('Resource-div1');
  var loader = document.getElementById('loader');


  if (selectedValue1 !== '' && selectedValue2 !== "" ) {
    Resourcediv1.style.display = "none";
    loader.style.display = "none"
    showGenerating();
    var selectedValueElement = document.getElementById('selectedValue');
    selectedValueElement.textContent = selectedValue + ' & ' + selectedValue02;



    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      loader.style.display = "block"
      selectedValueElement.textContent = (' Adding Generated Dice Rolls and Money');

    }, 14000)

    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      loader.style.display = "block"
      selectedValueElement.textContent = (' Money Rolls successful ' + selectedValue2);

    }, 12000)

    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      loader.style.display = "block"
      selectedValueElement.textContent = (' Dice Rolls successful  ' + selectedValue1);

    }, 9000)

    setTimeout(function () {;
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Loading last step..');
    }, 7000)
    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.innerHTML = ' Searching ID <span style="color: red; font-weight: 700; font-size: 24px;">' + showUserValue3 + '</span> Connecting... ';
      console.log(showUserValue3);
    }, 5000)

    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Searching ID...')
    }, 4000)

    setTimeout(function () {
      var selectedValueElement = document.getElementById('selectedValue1');
      selectedValueElement.textContent = ('Connecting to Monopoly GO Server...');
    }, 2000)

  }
}






// Step six js
function showGenerating() {

  var search1 = document.getElementById('search1');
  var Resourcediv1 = document.getElementById('Resource-div1');
  // var loader = document.getElementById('loader');


  search1.style.display = "block"
  Resourcediv1.style.display = "none";
  // loader.style.display = "none"

  // setTimeout(function () {
  //   loader.style.display = "block"
  // }, 7000)

  setTimeout(function () {
    search1.style.display = "none"
    var verifyPage = document.getElementById('verifyPage');
    verifyPage.style.display = "block"
  }, 15000);
}



