const generateBtn = document.querySelector("#generateBtn")
const gridContainer = document.querySelector("#gridContainer")

generateBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1
    const imgUrl = `https://picsum.photos/500?random=${randomNumber}`

    const img = document.createElement("img")
    img.src = imgUrl

    gridContainer.appendChild(img)

    if (gridContainer.children.length > 10) {
        gridContainer.removeChild(gridContainer.children[0])
    }
})