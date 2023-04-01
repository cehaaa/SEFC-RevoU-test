calculateAreaParallelogramButton.addEventListener("click", () => {
	const base = document.querySelector("#area-of-parallelogram-base").value;
	const height = document.querySelector("#area-of-parallelogram-height").value;

	const area = areaOfParallelogram(base, height);

	resultAreaParallelogramContainer.innerHTML = area;
});

resetAreaParallelogramButton.addEventListener("click", () => {
	document.querySelector("#area-of-parallelogram-base").value = "0";
	document.querySelector("#area-of-parallelogram-height").value = "0";
	resultAreaParallelogramContainer.innerHTML = "0";
});
