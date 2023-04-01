calculatePerimaterTriangleButton.addEventListener("click", () => {
	const sideA = document.querySelector("#triangle-side-a").value;
	const sideB = document.querySelector("#triangle-side-b").value;
	const sideC = document.querySelector("#triangle-side-c").value;

	const perimeter = perimeterOfTriangleFormula(sideA, sideB, sideC);

	resultPerimeterTraingleContainer.innerHTML = perimeter;
});

resetPerimaterTriangleButton.addEventListener("click", () => {
	document.querySelector("#triangle-side-a").value = "0";
	document.querySelector("#triangle-side-b").value = "0";
	document.querySelector("#triangle-side-c").value = "0";

	resultPerimeterTraingleContainer.innerHTML = "0";
});
