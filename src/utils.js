let activeMenu = "area-of-triangle-card";

const Cards = {
	"area-of-triangle-card": areaOfTriangleCard,
	"perimeter-of-tringle-card": perimeterOfTriangleCard,

	"area-of-parallelogram-card": areaOfParallelogramCard,
	"perimeter-of-parallelogram-card": perimeterOfParallelogramCard,
};

const formatMenuName = menuName => {
	const result = menuName.toLowerCase().split(" ").join("-");

	return `${result}-card`;
};

const changeCard = () => {
	const cards = document.querySelectorAll(".card");

	cards.forEach(card => {
		if (card.id === activeMenu) {
			card.classList.remove("hidden");
		} else {
			card.classList.add("hidden");
		}
	});
};
