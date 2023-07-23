let searchBar = document.getElementById("search")
let searchValue = " "
searchBar.addEventListener('input', updateSearchValue)
let submitButton = document.getElementById("submit")
submitButton.addEventListener('click', retrieveGameData)

let gameImage = document.createElement('img')
gameImage.setAttribute('id', 'gameImage')

let homebody = document.getElementById("home")

function updateSearchValue(){
    searchValue = searchBar.value
    console.log(searchValue)
}

async function retrieveGameData(){
    let gameData = await fetch (`https://api.boardgameatlas.com/api/search?name=${searchValue}&client_id=DwheEZXOaI`)
    let gameDataResult = await gameData.json()
    console.log(gameDataResult)
    gameImage.setAttribute('src', gameDataResult.games[0].image_url)
    homebody.append(gameImage)
}