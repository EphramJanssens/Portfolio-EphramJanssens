const urlParams = new URLSearchParams(window.location.search);
const currentWorkId = urlParams.get("id");

const currentWork = worksData.find((work) => work.id === currentWorkId);

if (currentWork) {
	document.getElementById("detail-image").src = currentWork.image;
	document.getElementById("detail-image").alt = currentWork.title;

	document.getElementById("detail-title").textContent = currentWork.title;
	document.getElementById("detail-role").textContent = currentWork.role;
	document.getElementById("detail-tools").textContent = currentWork.tools;
	document.getElementById("detail-description").textContent =
		currentWork.description;

	document.title = currentWork.title + " - Ephram Janssens";
} else {
	document.getElementById("detail-title").textContent = "Project niet gevonden";
	document.getElementById("detail-description").textContent =
		"Oeps! We konden dit werk niet vinden.";
}
