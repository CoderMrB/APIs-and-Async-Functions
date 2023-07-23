const SUPABASE_URL = 'https://gllewomldkmnizscnkdw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsbGV3b21sZGttbml6c2Nua2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk5MzkyNDYsImV4cCI6MjAwNTUxNTI0Nn0.9EJ3gR0wQoqLDMSfM3NI617lFhH7VosZ41xSChpy7BI';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

let Scores =  [{Name: "Chris", Score:0}, {Name:"Mark", Score: 0}, {Name:"Nat", Score:0}, {Name: "Mike", Score: 0}, {Name: "Phil", Score: 0}]

// function compare( a, b ) {
//   if ( a.last_nom < b.last_nom ){
//     return -1;
//   }
//   if ( a.last_nom > b.last_nom ){
//     return 1;
//   }
//   return 0;

async function fetchData() {
  const { data: History, error } = await _supabase
  .from('History')
  .select('WinnerName')
  console.log(History)
  for(let i=0;i<History.length; i++){
    for(let x=0; x<score.length; x++){
      if (History.WinnerName[i] === Scores[x].Name){
        Scores[x].Score ++
      }
    }
    }console.log(`Chris has won ${Scores.ChrisScore} times.\n Mark has won ${Scores.MarkScore} times.`)
    console.log(Scores)
  }

  
  }
  


// Call the async function
fetchData();
// let resultsTable = document.getElementById("leaderboard")
// let resultsData =[]

// document.addEventListener('DOMContentLoaded', async () => {
//   await updateResults();
// });


// async function updateResults(){
//     const { data, error } = await _supabase   
//       .from('History')
//       .select('*')
//       addToTable(data)
// }

// function addToTable(data){
//     for (let i =0; i<data.length; i++){
//       resultsData.push(data[i]);
//       let tableRow = document.createElement("tr")
//        let nameData = document.createElement("td")
//        nameData.textContent = resultsData[i]["WinnerName"]
//        tableRow.appendChild(nameData)
//       resultsTable.appendChild(tableRow)
//     }
//     }



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

 
