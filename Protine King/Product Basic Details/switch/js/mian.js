$(document).ready(function () {
    const custumSalsaToggleSwitch = document.querySelector('.custum-salsa-theme-switch input[type="checkbox"]');
    const custumSalsaCurrentTheme = localStorage.getItem('salsaTheme');

    console.log('custumSalsaToggleSwitch:', custumSalsaToggleSwitch);
    console.log('custumSalsaCurrentTheme:', custumSalsaCurrentTheme);

    if (custumSalsaCurrentTheme) {
        document.documentElement.setAttribute('data-salsa-theme', custumSalsaCurrentTheme);
        if (custumSalsaCurrentTheme === 'Si') {
            custumSalsaToggleSwitch.checked = true;
            jQuery('.custom-data').css('display', 'block');
        } else {
            jQuery('.custom-data').css('display', 'none');
        }
        jQuery('#custum-salsa-switch-text').html(custumSalsaCurrentTheme);
    }

    function switchSalsaTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-salsa-theme', 'Si');
            localStorage.setItem('salsaTheme', 'Si');
            jQuery('.custom-data').css('display', 'block');
            jQuery('#custum-salsa-switch-text').html(localStorage.getItem("salsaTheme"));
        } else {
            document.documentElement.setAttribute('data-salsa-theme', 'No');
            localStorage.setItem('salsaTheme', 'No');
            jQuery('.custom-data').css('display', 'none');
            jQuery('#custum-salsa-switch-text').html(localStorage.getItem("salsaTheme"));
        }
    }

    if (custumSalsaToggleSwitch) {
        custumSalsaToggleSwitch.addEventListener('change', switchSalsaTheme, false);
    } else {
        console.log('custumSalsaToggleSwitch is null or undefined.');
    }
}) 