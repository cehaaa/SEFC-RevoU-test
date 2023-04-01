calculatePerimeterParallelogramButton.addEventListener("click", () => {
	const side = document.querySelector("#parallelogram-side").value;
	const base = document.querySelector("#parallelogram-base").value;

	const perimeter = perimeterofParallelogram(side, base);

	resultPerimeterParallelogramContainer.innerHTML = perimeter;
});

resetPerimeterParallelogramButton.addEventListener("click", () => {
	document.querySelector("#parallelogram-side").value = "0";
	document.querySelector("#parallelogram-base").value = "0";

	resultPerimeterParallelogramContainer.innerHTML = "0";
});
