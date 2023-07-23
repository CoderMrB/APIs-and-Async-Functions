const SUPABASE_URL = 'https://gllewomldkmnizscnkdw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsbGV3b21sZGttbml6c2Nua2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk5MzkyNDYsImV4cCI6MjAwNTUxNTI0Nn0.9EJ3gR0wQoqLDMSfM3NI617lFhH7VosZ41xSChpy7BI';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

let Scores =  [{Name: "Chris", Score:0}, {Name:"Mark", Score: 0}, {Name:"Nat", Score:0}, {Name: "Mike", Score: 0}, {Name: "Phil", Score: 0}]

function compare( a, b ) {
  if ( a.Score< b.Score ){
    return 1;
  }
  if ( a.Score > b.Score ){
    return -1;
  }
  return 0;
}



async function fetchData() {
  const { data: History, error } = await _supabase
  .from('History')
  .select('WinnerName')
  console.log(History)
  for(let i=0;i<History.length; i++){
    for(let x=0; x<Scores.length; x++){
      if (History[i].WinnerName === Scores[x].Name){
        Scores[x].Score ++
      }
    }
    }  
    Scores.sort(compare)
    console.log('The sorted scores array', Scores)

    for (let i =0; i<Scores.length; i++){
      let resultsTable = document.getElementById("leaderboard")
       let tableRow = document.createElement("tr")
       let position = document.createElement("td")
       let name = document.createElement("td")
       let wins = document.createElement("td")
       position.textContent = i+1
       name.textContent = Scores[i].Name
       wins.textContent = Scores[i].Score
       tableRow.appendChild(position)
       tableRow.appendChild(name)
       tableRow.appendChild(wins)
      resultsTable.appendChild(tableRow)
    }

  
    }

  


// Call the async function
fetchData();
// 
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

   
    




