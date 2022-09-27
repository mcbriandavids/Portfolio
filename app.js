const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
	/*Active-Btn */
	for (let i = 0; i < sectBtn.length; i++) {
		sectBtn[i].addEventListener("click", function () {
			let currentBtn = document.querySelectorAll(".active-btn");
			currentBtn[0].className = currentBtn[0].className.replace(
				"active-btn",
				" "
			);
			this.className += " active-btn";
		});
	}
	/**Section Active Class */
	allSections.addEventListener("click", (e) => {
		const id = e.target.dataset.id;
		if (id) {
			sectBtns.forEach((btn) => {
				btn.classList.remove("active");
			});
			e.target.classList.add("active");
			/*Hide Other sections */
			sections.forEach((section) => {
				section.classList.remove("active");
			});
			const element = document.getElementById(id);
			element.classList.add("active");
		}
	});
	// Toggle Theme
	const themeBtn = document.querySelector(".theme-btn");
	themeBtn.addEventListener("click", () => {
		let element = document.body;
		element.classList.toggle("light-mode");
	});
}

pageTransitions();

/*Form Submission */

const button = document.querySelector("#submit");

button.addEventListener("click", (e) => {
	e.preventDefault();
	let name = document.querySelector(".name").value;
	let email = document.querySelector(".email").value;
	let subject = document.querySelector(".subject").value;
	let message = document.querySelector(".message").value;

	let body = `name: ${name} <br/> email: ${email} <br/> subject: ${subject} <br/> message: ${message} `;
	Email.send({
		Host: "smtp.gmail.com",
		Username: "mcbriandavids43@gmail.com",
		Password: "bjwfknwwvvlqylws",
		To: "mcbriandavids43@gmail.com",
		From: "email",
		Subject: "subject",
		Body: body,
	}).then((message) => alert(message));
});
