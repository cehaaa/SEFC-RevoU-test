menus.forEach(menu => {
	menu.addEventListener("click", () => {
		const selectedMenu = formatMenuName(menu.innerHTML);

		activeMenu = selectedMenu;

		changeCard();
	});
});
