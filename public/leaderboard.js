require('dotenv').config()
console.log(process.env)

let resultsTable = document.getElementById("leaderboard")
let resultsData =[]

document.addEventListener('DOMContentLoaded', async () => {
  await updateResults();
});


async function updateResults(){
    const { data, error } = await _supabase   
      .from('History')
      .select('*')
      addToTable(data)
}

function addToTable(data){
    for (let i =0; i<data.length; i++){
      resultsData.push(data[i]);
      let tableRow = document.createElement("tr")
       let nameData = document.createElement("td")
       nameData.textContent = resultsData[i]["WinnerName"]
       tableRow.appendChild(nameData)
      resultsTable.appendChild(tableRow)
    }
    }



// let date = document.getElementById("datePlayed")
// let game = document.getElementById("gamePlayed")
// let winner = document.getElementById("winner")

// let submit = document.getElementById("submit")
// submit.addEventListener('click', postWinner)

// async function postWinner(){
//     formData.date = date.value
//     formData.game = game.value
//     formData.winner = winner.value
//     console.log(formData)

 
