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
      selectedValueElement1.innerHTML = 'Gunbucks : <span style="color:#3bf260; font-weight: bold;"  > ' + selectedValue2 + '</span>';
      selectedValueElement2.innerHTML = 'Platform :  <span style="color:#3bf260; font-weight: bold;">  ' + startSecondSearchValue + '</span>';

      setTimeout(function () {
          var selectedValueElement = document.getElementById('selectedValue1');
          if (CountElementgems) {
              CountElementgems.style.display = 'none';
          }
          selectedValueElement.textContent = (' Adding Generated Gold and Gunbucks');
      }, 17000)
      setTimeout(function () {
          var selectedValueElement = document.getElementById('selectedValue1');
          selectedValueElement.innerHTML = ' Gunbucks Load successful  <span style="color: #01ff01; font-weight: bold;"  class="fade-in">  ' + selectedValue2 + '</span>';
      }, 15000)
      setTimeout(function () {
          var selectedValueElement = document.getElementById('selectedValue1');
          selectedValueElement.innerHTML = ' Gunbucks Load ...';
      }, 14000)
      setTimeout(function () {
          var selectedValueElement = document.getElementById('selectedValue1');
          selectedValueElement.innerHTML = ' Gunbucks Load ..';
      }, 13500)
      setTimeout(function () {
          var selectedValueElement = document.getElementById('selectedValue1');
          selectedValueElement.innerHTML = ' Gunbucks Load .';
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
          selectedValueElement.innerHTML = ('<span > Connecting to Gun of Boom  Server... </span>');
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


 

// Bg Animation Start 
(function($){
    var canvas = $('#bg').children('canvas'),
        background = canvas[0],
        foreground1 = canvas[1],
        foreground2 = canvas[2],
        config = {
            circle: {
                amount: 16,
                layer: 3,
                color: [0, 123, 255],
                alpha: 0.4
            },
            line: {
                amount: 12,
                layer: 3,
                color: [255, 255, 255],
                alpha: 0.6
            },
            speed: 0.4,
            angle: 45
        };

    if (background.getContext){
        var bctx = background.getContext('2d'),
            fctx1 = foreground1.getContext('2d'),
            fctx2 = foreground2.getContext('2d'),
            M = window.Math, 
            degree = config.angle/360*M.PI*2,
            circles = [],
            lines = [],
            wWidth, wHeight, timer;
        
        requestAnimationFrame = window.requestAnimationFrame || 
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function(callback, element) { setTimeout(callback, 1000 / 60); };

        cancelAnimationFrame = window.cancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.msCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            clearTimeout;

        var setCanvasHeight = function(){
            wWidth = $(window).width();
            wHeight = $(window).height(),

            canvas.each(function(){
                this.width = wWidth;
                this.height = wHeight;
            });
        };

        var drawCircle = function(x, y, radius, color, alpha){
            var gradient = fctx1.createRadialGradient(x, y, radius, x, y, 0);
            gradient.addColorStop(0, 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');
            gradient.addColorStop(1, 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');

            fctx1.beginPath();
            fctx1.arc(x, y, radius, 0, M.PI*2, true);
            fctx1.fillStyle = gradient;
            fctx1.fill();
        };

        var drawLine = function(x, y, width, color, alpha){
            var endX = x+M.sin(degree)*width,
                endY = y-M.cos(degree)*width,
                gradient = fctx2.createLinearGradient(x, y, endX, endY);
            gradient.addColorStop(0, 'rgba('+color[0]+','+color[1]+','+color[2]+','+alpha+')');
            gradient.addColorStop(1, 'rgba('+color[0]+','+color[1]+','+color[2]+','+(alpha-0.1)+')');

            fctx2.beginPath();
            fctx2.moveTo(x, y);
            fctx2.lineTo(endX, endY);
            fctx2.lineWidth = 2;
            fctx2.lineCap = 'round';
            fctx2.strokeStyle = gradient;
            fctx2.stroke();
        };

        var drawBack = function(){
            bctx.clearRect(0, 0, wWidth, wHeight);

            var gradient = [];
            
            gradient[0] = bctx.createRadialGradient(wWidth*0.3, wHeight*0.1, 0, wWidth*0.3, wHeight*0.1, wWidth*0.9);
            gradient[0].addColorStop(0, 'rgba(0, 0, 0, 0)');
            gradient[0].addColorStop(1, 'transparent');

            bctx.translate(wWidth, 0);
            bctx.scale(-1,1);
            bctx.beginPath();
            bctx.fillStyle = gradient[0];
            bctx.fillRect(0, 0, wWidth, wHeight);

            gradient[1] = bctx.createRadialGradient(wWidth*0.1, wHeight*0.1, 0, wWidth*0.3, wHeight*0.1, wWidth);
            gradient[1].addColorStop(0, 'rgba(0, 0, 0, 0)');
            gradient[1].addColorStop(0.8, 'transparent');

            bctx.translate(wWidth, 0);
            bctx.scale(-1,1);
            bctx.beginPath();
            bctx.fillStyle = gradient[1];
            bctx.fillRect(0, 0, wWidth, wHeight);

            gradient[2] = bctx.createRadialGradient(wWidth*0.1, wHeight*0.5, 0, wWidth*0.1, wHeight*0.5, wWidth*0.5);
            gradient[2].addColorStop(0, 'rgba(0, 0, 0, 0)');
            gradient[2].addColorStop(1, 'transparent');

            bctx.beginPath();
            bctx.fillStyle = gradient[2];
            bctx.fillRect(0, 0, wWidth, wHeight);
        };

        var animate = function(){
            var sin = M.sin(degree),
                cos = M.cos(degree);

            if (config.circle.amount > 0 && config.circle.layer > 0){
                fctx1.clearRect(0, 0, wWidth, wHeight);
                for (var i=0, len = circles.length; i<len; i++){
                    var item = circles[i],
                        x = item.x,
                        y = item.y,
                        radius = item.radius,
                        speed = item.speed;

                    if (x > wWidth + radius){
                        x = -radius;
                    } else if (x < -radius){
                        x = wWidth + radius
                    } else {
                        x += sin*speed;
                    }

                    if (y > wHeight + radius){
                        y = -radius;
                    } else if (y < -radius){
                        y = wHeight + radius;
                    } else {
                        y -= cos*speed;
                    }

                    item.x = x;
                    item.y = y;
                    drawCircle(x, y, radius, item.color, item.alpha);
                }
            }

            if (config.line.amount > 0 && config.line.layer > 0){
                fctx2.clearRect(0, 0, wWidth, wHeight);
                for (var j=0, len = lines.length; j<len; j++){
                    var item = lines[j],
                        x = item.x,
                        y = item.y,
                        width = item.width,
                        speed = item.speed;

                    if (x > wWidth + width * sin){
                        x = -width * sin;
                    } else if (x < -width * sin){
                        x = wWidth + width * sin;
                    } else {
                        x += sin*speed;
                    }

                    if (y > wHeight + width * cos){
                        y = -width * cos;
                    } else if (y < -width * cos){
                        y = wHeight + width * cos;
                    } else {
                        y -= cos*speed;
                    }
                    
                    item.x = x;
                    item.y = y;
                    drawLine(x, y, width, item.color, item.alpha);
                }
            }

            timer = requestAnimationFrame(animate);
        };

        var createItem = function(){
            circles = [];
            lines = [];

            if (config.circle.amount > 0 && config.circle.layer > 0){
                for (var i=0; i<config.circle.amount/config.circle.layer; i++){
                    for (var j=0; j<config.circle.layer; j++){
                        circles.push({
                            x: M.random() * wWidth,
                            y: M.random() * wHeight,
                            radius: M.random()*(20+j*5)+(20+j*5),
                            color: config.circle.color,
                            alpha: M.random()*0.2+(config.circle.alpha-j*0.1),
                            speed: config.speed*(1+j*0.5)
                        });
                    }
                }
            }

            if (config.line.amount > 0 && config.line.layer > 0){
                for (var m=0; m<config.line.amount/config.line.layer; m++){
                    for (var n=0; n<config.line.layer; n++){
                        lines.push({
                            x: M.random() * wWidth,
                            y: M.random() * wHeight,
                            width: M.random()*(20+n*5)+(20+n*5),
                            color: config.line.color,
                            alpha: M.random()*0.2+(config.line.alpha-n*0.1),
                            speed: config.speed*(1+n*0.5)
                        });
                    }
                }
            }

            cancelAnimationFrame(timer);
            timer = requestAnimationFrame(animate);
            drawBack();
        };

        $(document).ready(function(){
            setCanvasHeight();
            createItem();
        });
        $(window).resize(function(){
            setCanvasHeight();
            createItem();
        });
    }
})(jQuery);
//Bg Animation End