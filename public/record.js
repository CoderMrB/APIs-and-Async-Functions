const SUPABASE_URL = 'https://gllewomldkmnizscnkdw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsbGV3b21sZGttbml6c2Nua2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk5MzkyNDYsImV4cCI6MjAwNTUxNTI0Nn0.9EJ3gR0wQoqLDMSfM3NI617lFhH7VosZ41xSChpy7BI';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

let formData ={date:"", game:"", winner:"" }

let inputs = document.getElementsByTagName("form")

let date = document.getElementById("datePlayed")
let game = document.getElementById("gamePlayed")
let winner = document.getElementById("winner")

let submit = document.getElementById("submit")
submit.addEventListener('click', postWinner)

async function postWinner(){
    formData.date = date.value
    formData.game = game.value
    formData.winner = winner.value
    console.log(formData)


  if (formData.date === "" || formData.game === "" || formData.winner  === ""){
    alert("Please make sure you've seleced all the details!")
  }else{
 const { data, error } = await _supabase
        .from('History')
          .insert([
            { Date: formData.date, GamePlayed: formData.game, WinnerName: formData.winner},
        ])
        .select()

        alert("Result recorded!")
     
    }
}
