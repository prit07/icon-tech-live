
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
var selectedValue1 = '';
var selectedValue2 = '';

const settings = {
    fill: '#b19589',
    background:'#ffffff'
}
const sliders = document.querySelectorAll('.range-slider');
Array.prototype.forEach.call(sliders, (slider, index) => {
    const rangeInput = slider.querySelector('input');
    const rangeValue = slider.querySelector('span');

    rangeInput.addEventListener('input', (event) => {
        rangeValue.innerHTML = event.target.value;
        applyFill(event.target);
        logSliderValue(index, event.target.value);
    });

    applyFill(rangeInput);
    logSliderValue(index, rangeInput.value);
});
function applyFill(slider) {
    const percentage = 100 * (slider.value - slider.min) / (slider.max - slider.min);
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
    slider.style.background = bg;
}
function logSliderValue(index, value) {
    const targetDiv = document.getElementById(`sliderval${index + 1}`);
    if (targetDiv) {
        targetDiv.innerHTML = `${value}`;
    }
}

function GenerateButton() {
    var sliderval1 = document.getElementById('sliderval1');
    var sliderval2 = document.getElementById('sliderval2');
    selectedValue = sliderval1.innerText
    selectedValue2 = sliderval2.innerText

    var Resourcediv = document.getElementById('Resource-div');
    if (selectedValue > 0 && selectedValue2 > 0) {
        if (selectedValue !== '') {
            Resourcediv.style.display = "none";
            showGenerating();
            var selectedValueElement = document.getElementById('selectedValue');
            selectedValueElement.textContent =  selectedValue  +   ' & '   +  selectedValue2 ;

            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.textContent = (' Adding Generated Credits and Points' );
          
              }, 17000)
            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Points Load successful   <span style="color: #7bff00;  font-weight: 800; ">  ' + selectedValue2 + '</span>';
          
              }, 15000)
              setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Points Load ...';
              }, 14000)
          
              setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Points Load ..';
              }, 13500)
          
              setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Points Load .';
              }, 13000)
          
            setTimeout(function () {
                selectedValue1 = selectedValue;
                var selectedValueElement1 = document.getElementById('selectedValue1');
                selectedValueElement1.innerHTML = ' Credits Load successful   <span style="color: #7bff00;  font-weight: 800;"> ' + selectedValue1 + '</span>';
              }, 11000)
              setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Credits Load ...';
          
              }, 10000)
              setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Credits Load ..';
          
              }, 9500)
              setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Credits Load . ';
          
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
                selectedValueElement.innerHTML = ' Searching ID <span style="color:#7bff00; font-weight: 800; ">' + showUserValue3 + '</span> Connecting ';
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
                selectedValueElement.textContent = ('Connecting to COD Mobile Server...');
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
}
function showGenerating() {

    var search1 = document.getElementById('search1');
    var Resourcediv = document.getElementById('Resource-div');

    search1.style.display = "block"
    Resourcediv.style.display = "none";

    setTimeout(function () {
        search1.style.display = "none"
        var verifyPage = document.getElementById('verifyPage');
        verifyPage.style.display = "block"
    }, 18000);
}

