let currentDay = 0;

document.getElementById('open-day-button').addEventListener('click', function() {
  const calendarItems = document.querySelectorAll('.calendar-item');

  if (currentDay < calendarItems.length) {
    const nextItem = calendarItems[currentDay];
    nextItem.classList.add('active');
    currentDay++;
  } else {
    alert("All gifts have been unlocked!");
  }
});
