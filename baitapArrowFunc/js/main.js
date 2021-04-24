const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

const getColorList = () => {
    let colorButtonDiv = "";
    colorList.map((color, index) => {
        colorButtonDiv += index == 0 ? `<button class="color-button ${color} active"></button>` : `<button class="color-button ${color}"></button>`;
    });

    document.getElementById('colorContainer').innerHTML = colorButtonDiv;
};

getColorList();

const colorButtonList = [...document.getElementsByClassName("color-button")];

colorButtonList.forEach(btn => {
    let color = btn.classList[1];
    btn.addEventListener("click", () => {
        document.getElementById("house").className = `house ${color}`;
        colorButtonList.find(e => e.classList.contains("active")).classList.remove("active");
        btn.classList.toggle("active");
    });
});