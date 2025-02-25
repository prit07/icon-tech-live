$(document).ready(function () {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const events = {
        10: 'Meeting',
        14: 'Birthday',
        19: 'Conference',
        25: 'Holiday'
    };

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    updateCalendar();

    $('#prevMonth').on('click', function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    $('#nextMonth').on('click', function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });

    function updateCalendar() {
        const $monthYear = $('#monthYear');
        const $monthName = $('#monthName');

        // Display the year only in monthYear
        $monthYear.text(currentYear);

        // Display the month name in monthName
        $monthName.text(monthNames[currentMonth]);

        const $dates = $('#dates');
        $dates.empty();

        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            $dates.append('<div class="date empty"></div>');
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const $dateDiv = $('<div></div>').addClass('date').text(i);

            // Highlight weekends
            if ((i + firstDay) % 7 === 0 || (i + firstDay) % 7 === 1) {
                $dateDiv.addClass('weekend');
            }

            // Mark current date
            if (i === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
                $dateDiv.addClass('current-date');
            }

            // Add event if exists
            if (events[i]) {
                $dateDiv.addClass('event')
                    .attr('title', events[i])
                    .on('click', function () {
                        // alert(`Event: ${events[i]}`);
                    });
            }

            $dates.append($dateDiv);
        }
    }
});
