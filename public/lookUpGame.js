let searchPlayers = document.getElementById("players")
// let searchPlayersValue = 0
// searchPlayers.addEventListener('input', updateSearchPlayersValue)

let searchTime = document.getElementById("time")
// let searchTimeValue = 0
// searchTime.addEventListener('input', updateSearchPlayersValue)


let submitButton = document.getElementById("submit")
submitButton.addEventListener('click', get_all_data)

let gameNameDisplay = document.getElementById("gameName")
let gameImage = document.getElementById("gameImage")


let homebody = document.getElementById("home")

// function updateSearchNameValue(){
//     searchNameValue = searchName.value
//     console.log(searchNameValue)
// }

// function updateSearchPlayersValue(){
//     searchPlayersValue = searchPlayers.value
//     console.log(searchPlayersValue)
// }

async function retrieveGameData(page_number){
    // let gameData = await fetch (`https://api.boardgameatlas.com/api/search?name=${searchNameValue}&client_id=DwheEZXOaI`)
    // let gameDataResult = await gameData.json()
    // console.log(gameDataResult)
    // gameImage.setAttribute('src', gameDataResult.games[0].image_url)
    // homebody.append(gameImage)

    let gameData = await fetch (`https://api.boardgameatlas.com/api/search?min_players=${searchPlayers.value}&max_playtime=${searchTime.value}&max_playtime_operator=lt&limit=100&client_id=DwheEZXOaI`)
    let gameDataResult = await gameData.json()
    const filteredGames = gameDataResult.games.filter(game => game.min_players !== null && game.max_playtime !== null);
    return filteredGames
}


async function get_all_data() {
    console.log(`number of players: ${searchPlayers.value}\n amount of time: ${searchTime.value}`)
    gameImage.setAttribute('src', './rollingDie.gif')
    const total_results_response = await fetch(`https://api.boardgameatlas.com/api/search?min_players=${searchPlayers.value}&max_playtime=${searchTime.value}&max_playtime_operator=lt&limit=100&client_id=DwheEZXOaI`);
    const total_results_data = await total_results_response.json();
    const total_results = total_results_data.count;
    const total_pages = Math.ceil(total_results / 100);
    let page = Math.floor(Math.random()*total_pages)
    const pageData = await retrieveGameData(page);
    let chosenGame = pageData[Math.floor(Math.random()*100)]
    console.log(chosenGame)
    gameImage.setAttribute('src', chosenGame.image_url)
    gameNameDisplay.innerHTML = `<strong>${chosenGame.name} </strong> can be played with <strong> ${chosenGame.min_players} people </strong> and should take no longer than <strong> ${chosenGame.max_playtime} minutes </strong> to complete.` 
}