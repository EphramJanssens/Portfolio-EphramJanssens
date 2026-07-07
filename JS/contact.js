const user = "ephramjanssens";
const domain = "gmail.com";

const emailLink = document.getElementById("email-link");

if (emailLink) {
	const fullEmail = user + "@" + domain;

	emailLink.href = "mailto:" + fullEmail;
	emailLink.textContent = fullEmail;
}
