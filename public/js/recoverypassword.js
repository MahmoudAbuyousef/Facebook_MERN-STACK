const sidebar = document.getElementById("sidebar"),
	sidebarIcon = document.getElementById("sidebar-icon"),
	sidebarIconClose = document.getElementById("sidebar-close");
if (sidebarIcon) {
	sidebarIcon.addEventListener("click", () => {
		sidebar.classList.add("sidebar__show");
		sidebarIcon.style.display = "none";
		sidebarIconClose.style.display = "block";
	});
}

if (sidebarIconClose) {
	sidebarIconClose.addEventListener("click", () => {
		sidebar.classList.remove("sidebar__show");
		sidebarIcon.style.display = "block";
		sidebarIconClose.style.display = "none";
	});
}

let cancleBtn = document.getElementById("cancel-btn");
cancleBtn.onclick = function () {
	window.location = "index.html";
};
