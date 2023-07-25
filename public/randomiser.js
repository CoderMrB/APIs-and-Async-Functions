let gameOptions = ["scythe", "nemesis", "wingspan", "carcassonne"]
let randomiser = document.getElementById("randomiser")
randomiser.addEventListener('click', getRandomGame)

let randomiserDiv =document.getElementById("randomImageSection")

let randomImage = document.createElement('img')
randomImage.setAttribute('id', 'randomImage')

async function getRandomGame(){
    randomiserDiv.append(randomImage)
    randomImage.setAttribute('src', './rollingDie.gif')
    let randomGame = Math.floor(Math.random()*(gameOptions.length))
    console.log(gameOptions[randomGame])
    let gameData = await fetch (`https://api.boardgameatlas.com/api/search?name=${gameOptions[randomGame]}&client_id=DwheEZXOaI`)
    let gameDataResult = await gameData.json()
    randomImage.setAttribute('src', gameDataResult.games[0].image_url)
}