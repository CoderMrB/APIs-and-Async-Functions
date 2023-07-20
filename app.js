let searchBar = document.getElementById("search")
let searchValue = " "
searchBar.addEventListener('input', updateSearchValue)
let submitButton = document.getElementById("submit")
submitButton.addEventListener('click', retrieveGameData)

let gameOptions = ["scythe", "nemesis", "wingspan", "carcassonne"]
let randomiser = document.getElementById("randomiser")
randomiser.addEventListener('click', getRandomGame)

let randomiserDiv =document.getElementById("randomiserSection") 

let gameImage = document.createElement('img')
gameImage.setAttribute('id', 'gameImage')
let body = document.getElementsByTagName("body")[0]

function updateSearchValue(){
    searchValue = searchBar.value
    console.log(searchValue)
}

async function getRandomGame(){
    gameImage.setAttribute('src', './rollingDie.gif')
    let randomGame = Math.floor(Math.random()*(gameOptions.length))
    console.log(gameOptions[randomGame])
    let gameData = await fetch (`https://api.boardgameatlas.com/api/search?name=${gameOptions[randomGame]}&client_id=DwheEZXOaI`)
    let gameDataResult = await gameData.json()
    gameImage.setAttribute('src', gameDataResult.games[0].image_url)
    randomiserDiv.append(gameImage)
}

async function retrieveGameData(){
    let gameData = await fetch (`https://api.boardgameatlas.com/api/search?name=${searchValue}&client_id=DwheEZXOaI`)
    let gameDataResult = await gameData.json()
    console.log(gameDataResult)
    gameImage.setAttribute('src', gameDataResult.games[0].image_url)
}