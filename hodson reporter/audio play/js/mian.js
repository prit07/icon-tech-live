// document.querySelector('.hr-listen-item').addEventListener('click', function () {
//     var audioPlayer = document.getElementById('audioPlayer');
//     var audioIcon = document.getElementById('audioIcon');
//     var audioText = document.getElementById('audioText');

//     if (audioPlayer.paused) {
//         audioPlayer.play();
//         audioIcon.src = "img/Pause.png";  // Change to the pause image
//         audioText.textContent = "Pause";  // Change the text to "Pause"
//     } else {
//         audioPlayer.pause();
//         audioIcon.src = "img/Audio.png";  // Change back to the play image
//         audioText.textContent = "Listen";  // Change the text to "Play"
//     }
// });

// document.getElementById('audioPlayer').addEventListener('ended', function () {
//     var audioIcon = document.getElementById('audioIcon');
//     var audioText = document.getElementById('audioText');
//     audioIcon.src = "img/Reset.png";  // Change back to the play image
//     audioText.textContent = "Resume";  // Change the text to "Resume"
// });


// $(document).ready(function () {
//     $('.hr-listen-item').on('click', function () {
//         var $audioPlayer = $('#audioPlayer');
//         var $audioIcon = $('#audioIcon');
//         var $audioText = $('#audioText');
    
//         if ($audioPlayer[0].paused) {
//             $audioPlayer[0].play();
//             $audioIcon.attr('src', 'img/Pause.png');  // Change to the pause image
//             $audioText.text('Pause');  // Change the text to "Pause"
//         } else {
//             $audioPlayer[0].pause();
//             $audioIcon.attr('src', 'img/Audio.png');  // Change back to the play image
//             $audioText.text('Listen');  // Change the text to "Play"
//         }
//     });
    
//     $('#audioPlayer').on('ended', function () {
//         var $audioIcon = $('#audioIcon');
//         var $audioText = $('#audioText');
//         $audioIcon.attr('src', 'img/Reset.png');  // Change back to the play image
//         $audioText.text('Resume');  // Change the text to "Resume"
//     });
    
// })