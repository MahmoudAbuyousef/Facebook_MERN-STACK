// * ======================= NAV SEARCH ICON =================
let navSearchInput = document.getElementById("home-search-input"),
  navSearchIconShow = document.getElementById("nav-search-icon"),
  navSearchIconHidden = document.getElementById("nav-search-icon-hidden"),
  navSearchResult = document.getElementById("nav-search-result");
if (navSearchIconShow) {
  navSearchIconShow.addEventListener("click", () => {
    navSearchInput.classList.add("show__search");
    navSearchIconShow.style.display = "none";
    navSearchIconHidden.style.display = "block";
    navSearchResult.style.display = "block";
    document.getElementById("nav-icon-container").style.display = "none";
  });
}
if (navSearchIconHidden) {
  navSearchIconHidden.addEventListener("click", () => {
    navSearchInput.classList.remove("show__search");
    navSearchIconShow.style.display = "block";
    navSearchIconHidden.style.display = "none";
    navSearchResult.style.display = "none";
    document.getElementById("nav-icon-container").style.display = "flex";
  });
}
// * ======================= START MOBILE MEDIA ======================
// * ======================= NAV MENU BTN ============================
let navMenuList = document.getElementById("nav-menu-list"),
  navMenuShow = document.getElementById("nav-menu-icon-show"),
  navMenuHidden = document.getElementById("nav-menu-icon-hidden");
if (navMenuShow) {
  navMenuShow.addEventListener("click", () => {
    navMenuList.classList.add("menu__show");
    navMessengerList.classList.remove("messenger__show");
    navNotificationList.classList.remove("notification__show");
    navMenuShow.style.display = "none";
    navMenuHidden.style.display = "block";
  });
}
if (navMenuHidden) {
  navMenuHidden.addEventListener("click", () => {
    navMenuList.classList.remove("menu__show");
    navMenuShow.style.display = "block";
    navMenuHidden.style.display = "none";
  });
}
// * ======================= NAV MESSENGER BTN ========================
let navMessengerList = document.getElementById("nav-messneger-list"),
  navMessengerShow = document.getElementById("nav-messenger-icon-show"),
  navMessengerHidden = document.getElementById("nav-messenger-icon-hidden");
if (navMessengerShow) {
  navMessengerShow.addEventListener("click", () => {
    navMessengerList.classList.add("messenger__show");
    navMenuList.classList.remove("menu__show");
    navNotificationList.classList.remove("notification__show");
    navMessengerShow.style.display = "none";
    navMessengerHidden.style.display = "block";
  });
}
if (navMessengerHidden) {
  navMessengerHidden.addEventListener("click", () => {
    navMessengerList.classList.remove("messenger__show");
    navMessengerShow.style.display = "block";
    navMessengerHidden.style.display = "none";
  });
}
// * ======================= NAV NOTIFICATIONS BTN ========================
let navNotificationList = document.getElementById("nav-page-notification-list"),
  navNotificationShow = document.getElementById("nav-page-notification-icon-show"),
  navNotificationHidden = document.getElementById("nav-page-notification-icon-hidden");
if (navNotificationShow) {
  navNotificationShow.addEventListener("click", () => {
    navNotificationList.classList.add("notification__show");
    navNotificationShow.style.display = "none";
    navNotificationHidden.style.display = "block";
  });
}
if (navNotificationHidden) {
  navNotificationHidden.addEventListener("click", () => {
    navNotificationList.classList.remove("notification__show");
    navNotificationShow.style.display = "block";
    navNotificationHidden.style.display = "none";
  });
}

// * ======================= START LARG SCREEN MEDIA ===============
// * ======================= NAV MENU BTN ============================
let navMenuListLarg = document.getElementById("nav-menu-list-larg"),
  navMenuShowLarg = document.getElementById("nav-menu-icon-show-larg"),
  navMenuHiddenLarg = document.getElementById("nav-menu-icon-hidden-larg");
if (navMenuShowLarg) {
  navMenuShowLarg.addEventListener("click", () => {
    navMenuListLarg.classList.add("menu__show");
    navNotificationListLarg.classList.remove("notification__show");
    navMessengerListLarg.classList.remove("messenger__show");

    navMenuShowLarg.style.display = "none";
    navMenuHiddenLarg.style.display = "block";
  });
}
if (navMenuHiddenLarg) {
  navMenuHiddenLarg.addEventListener("click", () => {
    navMenuListLarg.classList.remove("menu__show");
    navMenuShowLarg.style.display = "block";
    navMenuHiddenLarg.style.display = "none";
  });
}
// * ======================= NAV MESSENGER BTN ========================
let navMessengerListLarg = document.getElementById("nav-messneger-list-larg"),
  navMessengerShowLarg = document.getElementById("nav-messenger-icon-show-larg"),
  navMessengerHiddenLarg = document.getElementById("nav-messenger-icon-hidden-larg");
if (navMessengerShowLarg) {
  navMessengerShowLarg.addEventListener("click", () => {
    navMessengerListLarg.classList.add("messenger__show");
    navNotificationListLarg.classList.remove("notification__show");
    navMenuListLarg.classList.remove("menu__show");
    navMessengerShowLarg.style.display = "none";
    navMessengerHiddenLarg.style.display = "block";
  });
}
if (navMessengerHiddenLarg) {
  navMessengerHiddenLarg.addEventListener("click", () => {
    navMessengerListLarg.classList.remove("messenger__show");
    navMessengerShowLarg.style.display = "block";
    navMessengerHiddenLarg.style.display = "none";
  });
}
// * ======================= NAV NOTIFICATIONS BTN ========================
let navNotificationListLarg = document.getElementById("nav-page-notification-list-larg"),
  navNotificationShowLarg = document.getElementById("nav-page-notification-icon-show-larg"),
  navNotificationHiddenLarg = document.getElementById("nav-page-notification-icon-hidden-larg");
if (navNotificationShowLarg) {
  navNotificationShowLarg.addEventListener("click", () => {
    navNotificationListLarg.classList.add("notification__show");
    navMenuListLarg.classList.remove("menu__show");
    navMessengerListLarg.classList.remove("messenger__show");
    navNotificationShowLarg.style.display = "none";
    navNotificationHiddenLarg.style.display = "block";
  });
}
if (navNotificationHiddenLarg) {
  navNotificationHiddenLarg.addEventListener("click", () => {
    navNotificationListLarg.classList.remove("notification__show");
    navNotificationShowLarg.style.display = "block";
    navNotificationHiddenLarg.style.display = "none";
  });
}
// * ======================= END NOTIFICATIONS BTN =====================
// * ======================= End LARG SCREEN MEDIA =====================
let bodyHome = document.getElementById("body");
bodyHome.onclick = function () {
  navSearchInput.classList.remove("show__search");
  navMenuList.classList.remove("menu__show");
  navMessengerList.classList.remove("messenger__show");
  navMessengerListLarg.classList.remove("messenger__show");
  navNotificationListLarg.classList.remove("notification__show");
};
// * Create Post With Nav Menu Cerate List
let postNav = document.getElementById("post-nav");
postNav.onclick = function () {
  document.getElementById("write-post-popup-nav").style.display = "block";
};

let canclePostNav = document.getElementById("cancle-post-nav");
canclePostNav.onclick = () => {
  document.getElementById("write-post-popup-nav").style.display = "none";
};
// * Larg Screen
let postNavLarg = document.getElementById("post-nav-larg");
postNavLarg.onclick = function () {
  document.getElementById("write-post-popu-nav-larg").style.display = "block";
};

let canclePostNavLarg = document.getElementById("cancle-post-nav-larg");
canclePostNavLarg.onclick = () => {
  document.getElementById("write-post-popu-nav-larg").style.display = "none";
};
