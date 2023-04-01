calculateAreaTriangleButton.addEventListener("click", () => {
	const base = document.querySelector("#area-of-triangle-base").value;
	const height = document.querySelector("#area-of-triangle-height").value;

	const area = areaOfTriangleFormula(base, height);

	resultAreaTraingleContainer.innerHTML = area;
});

resetAreaTriangleButton.addEventListener("click", () => {
	document.querySelector("#area-of-triangle-base").value = "0";
	document.querySelector("#area-of-triangle-height").value = "0";
	resultAreaTraingleContainer.innerHTML = "0";
});
