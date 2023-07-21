let formData ={date:"", game:"", winner:"" }

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

 const { data, error } = await _supabase
        .from('History')
          .insert([
            { Date: formData.date, GamePlayed: formData.game, WinnerName: formData.winner }
        ])
        .select()
    }
