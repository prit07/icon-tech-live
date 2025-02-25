$(document).ready(function () {

    $.fn.jQuerySimpleCounter = function (options) {
        var settings = $.extend({
            start: 0,
            end: 0,
            easing: 'swing',
            duration: 1000,
            complete: ''
        },  options);
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
// $(document).ready(function () {

//     $.fn.jQuerySimpleCounter = function (options) {
//         var settings = $.extend({
//             start: 0,
//             end: 0,
//             easing: 'swing',
//             duration: 2000,
//             complete: ''
//         }, options);
//         var thisElement = $(this);

//         $({ count: settings.start }).animate({ count: settings.end }, {
//             duration: settings.duration,
//             easing: settings.easing,
//             step: function () {
//                 var mathCount = Math.ceil(this.count);
//                 thisElement.text(mathCount);
//             },
//             complete: function () {
//                 // Round the final value after the animation is complete
//                 thisElement.text(settings.end);
//                 if (settings.complete) {
//                     settings.complete();
//                 }
//             }
//         });
//     };

// });
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

function showMenu() {
    var menu = document.getElementById('menu');

    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
}

function startSecondSearch(menuItem) {
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

var selectedValue1 = '';
var selectedValue2 = '';
const settings = {
    fill: '#1abc9c',
    background: '#d7dcdf'
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
        console.log("value", value)
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
            selectedValueElement.textContent = selectedValue + ' & ' + selectedValue2;

            selectedValue1 = selectedValue;

            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.textContent = (' Adding Generated Gems and Energy');
                if (CountElementcoins) {
                    CountElementcoins.style.display = 'none';
                }
            }, 17000)
            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
         
                selectedValueElement.innerHTML = ' Energy Load successful   <span style="color: green;  font-weight: 800; ">  ' + selectedValue2 + '</span>';
            }, 14500)
            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Energy Load ...';
            }, 14000)
            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Energy Load ..';
            }, 13500)
            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Energy Load .';
                var CountElementcoins = document.getElementById('CountElementcoins');
                if (CountElementcoins) {
                    CountElementcoins.style.display = 'block';
                }
                if (CountElementgems) { 
                    CountElementgems.style.display = 'none';
                }
                // var selectedValue2 = parseFloat(sliderval2.innerText);
                // console.log("Selected value 2:", selectedValue2);
                $('#coinsCountElement').jQuerySimpleCounter({ end: selectedValue2, duration: 2000 });
                
            }, 13000)
            setTimeout(function () {
                var selectedValueElement1 = document.getElementById('selectedValue1');
                selectedValueElement1.innerHTML = ' Gems Load successful <span style="color: green; font-weight: 800;">' + selectedValue1 + '</span>';  
            }, 11000)
            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Gems Load ...';
            }, 10000)
            setTimeout(function () {
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Gems Load ..';
            }, 9500)
            setTimeout(function () {
                var loader01 = document.getElementById('loader01');
                if (loader01) {
                    loader01.style.display = 'none';
                }
                var selectedValueElement = document.getElementById('selectedValue1');
                selectedValueElement.innerHTML = ' Gems Load . ';
                var CountElementgems = document.getElementById('CountElementgems');
                if (CountElementgems) {
                    CountElementgems.style.display = 'block';
                } 
                // var selectedValue1 = parseFloat(sliderval1.innerText);
                // console.log("Selected value 1:", selectedValue1);
                $('#gemsCountElement').jQuerySimpleCounter({ end : selectedValue1, duration: 2000 }); 
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
                selectedValueElement.innerHTML = ' Searching ID <span style="color:green; font-weight: 800; ">' + showUserValue3 + '</span> Connecting ';
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
                selectedValueElement.textContent = ('Connecting to Frozen City Server...');
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


