var countDownDate = new Date();
countDownDate = new Date(
  countDownDate.getFullYear() + 1,
  countDownDate.getMonth() - 6,
  01
);
setInterval(function () {
  let now = new Date();
  let deff = countDownDate - now;
  let month = Math.floor(deff / (1000 * 60 * 60 * 24 * 30));
  let day = Math.floor(
    (deff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let hour = Math.floor((deff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((deff % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((deff % (1000 * 60)) / 1000);
  let months = document.getElementById("months");
  let days = document.getElementById("days");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  months.innerHTML = month;
  days.innerHTML = day;
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;
}, 1000);
(function () {
  "use strict";
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
