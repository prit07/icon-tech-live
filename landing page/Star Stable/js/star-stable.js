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
        showUserValue3 = userInput;
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

var selectedValue1 = '';
var selectedValue2 = '';




function GenerateButton() {


    var dropdown1 = document.getElementById("dropdown1").value;
    var dropdown2 = document.getElementById("dropdown2").value;

    selectedValue = dropdown1
    selectedValue2 = dropdown2
    console.log(selectedValue);
    console.log(selectedValue2);

    var Resourcediv = document.getElementById('Resource-div');
    if (selectedValue !== "" && selectedValue2 !== "") {
        if (selectedValue !== '') {
            Resourcediv.style.display = "none";
            showGenerating();
            var selectedValueElement = document.getElementById('selectedValue');
            selectedValueElement.textContent = selectedValue + '&' + selectedValue2;

            setTimeout(function () {
                selectedValue1 = selectedValue;
                var selectedValueElement1 = document.getElementById('selectedValue1');
                selectedValueElement1.textContent = ('Adding Generated Star Coins and Jorvik Coins..');
            }, 14000)
            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Jorvik Coins successful   <span style="color: green;  font-weight: 800;"> ' + selectedValue2 + '</span>';
            }, 12000)
            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.textContent = (' Jorvik Coins Loading..');
            }, 11000)
            setTimeout(function () {
                selectedValue1 = selectedValue;
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Star Coine successful   <span style="color: green;  font-weight: 800;"> ' + selectedValue1 + '</span>';
            }, 9000)
            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.textContent = (' Star Coine Loading..');
            }, 8000)
            setTimeout(function () {;
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.textContent = ('Loading last step..');
            }, 7000)
            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Searching ID <span style="color: red; font-weight: 700; font-size: 24px;">' + showUserValue3 + '</span> Connecting... ';
            }, 5000)
            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.textContent = ('Searching ID...')
            }, 4000)
            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.textContent = ('Connecting to Star Stable Server...');
            }, 2000)

        }
    }
}

function showGenerating() {

    var search1 = document.getElementById('search1');
    var Resourcediv = document.getElementById('Resource-div');
    // var loader = document.getElementById('loader');

    search1.style.display = "block"
    Resourcediv.style.display = "none";
    // loader.style.display = "none"


    setTimeout(function () {
        search1.style.display = "none"
        var verifyPage = document.getElementById('verifyPage');
        verifyPage.style.display = "block"
    }, 16000);
}



