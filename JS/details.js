const urlParams = new URLSearchParams(window.location.search);
const currentWorkId = urlParams.get("id");

const currentWork = worksData.find((work) => work.id === currentWorkId);

if (currentWork) {
	const imageElement = document.getElementById("detail-image");
	const videoElement = document.getElementById("detail-video");

	if (currentWork.videoUrl) {
		videoElement.src = currentWork.videoUrl;
		videoElement.classList.remove("hidden");
		imageElement.classList.add("hidden");
	} else {
		imageElement.src = currentWork.image;
		imageElement.alt = currentWork.title;
		imageElement.classList.remove("hidden");
		videoElement.classList.add("hidden");
	}

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
