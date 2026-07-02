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

	const githubContainer = document.getElementById("detail-github-container");
	const githubLink = document.getElementById("detail-github-link");

	if (currentWork.githubUrl) {
		githubLink.href = currentWork.githubUrl;
		githubContainer.classList.remove("hidden");
	} else {
		githubContainer.classList.add("hidden");
	}

	document.title = currentWork.title + " - Ephram Janssens";

	const carouselContainer = document.getElementById(
		"detail-carousel-container",
	);
	const carouselTrack = document.getElementById("carousel-track");
	const prevBtn = document.getElementById("carousel-prev");
	const nextBtn = document.getElementById("carousel-next");

	if (currentWork.gallery && currentWork.gallery.length > 0) {
		carouselContainer.classList.remove("hidden");

		currentWork.gallery.forEach((imgUrl) => {
			const slideDiv = document.createElement("div");
			slideDiv.classList.add("carousel-slide");

			const imgElement = document.createElement("img");
			imgElement.src = imgUrl;
			imgElement.alt = "Gallery image";

			slideDiv.appendChild(imgElement);
			carouselTrack.appendChild(slideDiv);
		});

		let currentIndex = 0;
		const totalSlides = currentWork.gallery.length;

		function updateCarousel() {
			carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
		}

		nextBtn.addEventListener("click", () => {
			currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
			updateCarousel();
		});

		prevBtn.addEventListener("click", () => {
			currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
			updateCarousel();
		});
	}
} else {
	document.getElementById("detail-title").textContent = "Project niet gevonden";
	document.getElementById("detail-description").textContent =
		"We konden dit werk niet vinden.";
}
