// * ============================== LOGIN FORM ===========================
let btnLogin = document.getElementById("btn-login");
btnLogin.onclick = function () {
  window.location = "home.html";
};
// * ============================== SIGNUP FORM ==========================
document.getElementById("create-new-account").onclick = function () {
  document.getElementById("signup-form").style.display = "block";
};
document.getElementById("close-signup").onclick = function () {
  document.getElementById("signup-form").style.display = "none";
};

// * ========================= Select Box Days ===========================
function selectDays(start, end) {
  let options = "";
  for (let i = start; i <= end; i++) {
    options += `
    <option value="${i}">${i}</option>
      
    `;
  }
  document.getElementById("select-day").innerHTML = options;
}
selectDays(1, 31);
// * ========================= Select Box Years ===========================

function selectYears(start, end) {
  let options = "";
  for (let i = end; i >= start; i--) {
    options += `
    <option value="${i}">${i}</option>
    `;
  }
  document.getElementById("select-year").innerHTML = options;
}
selectYears(1905, 2023);
// * ====================== ADD NEW ACCPUNT DATA =========================
// let firstName = document.getElementById("signup-firstname");
// let lastName = document.getElementById("signup-lastname");
// let emailOrPhone = document.getElementById("sign-mobile-or-email");
// let password = document.getElementById("signup-password");
// let day = document.getElementById("select-day");
// let month = document.getElementById("select-month");
// let year = document.getElementById("select-year");
// let signupBtn = document.getElementById("signup-btn");
// signupBtn.onclick = function () {
//   let userData = {
//     fName: firstName.value,
//     lName: lastName.value,
//     emailOrPhone: emailOrPhone.value,
//     password: password.value,
//     day: day.value,
//     month: month.value,
//     year: year.value,
//   };
//   if ((firstName.value !== "") & (lastName.value !== "") & (emailOrPhone.value !== "") & (password.value !== "") & (day.value !== "") & (month.value !== "") & (year.value !== "")) {
//     localStorage.setItem("userData", userData);
//     window.location = "/home.html";
//     console.log("true");
//   }
// };
