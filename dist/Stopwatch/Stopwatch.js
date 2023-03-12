 let startKey = document.getElementById('button-start')
 let stopKey = document.getElementById('button-stop')
 let resetKey = document.getElementById('button-reset')
 let appendTens = document.getElementById('tens')
 let appendSeconds =document.getElementById('seconds')
 let Interval

 let tens = 00;
 let seconds = 00;


 function startTimer(){
    tens++

    if(tens<=9){
        appendTens.innerHTML = "0" + tens;
    }

    if(tens>9){
        appendTens.innerHTML = tens;
    }

    if(tens>99){
        seconds++
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0
        appendTens.innerHTML = "0" + 0;
    }

    if(seconds>9){
        appendSeconds.innerHTML = seconds
    }
 }

  startKey.addEventListener('click',()=>{
        clearInterval(Interval);
        Interval = setInterval(startTimer,10)
        console.log('starts')
  })

    stopKey.addEventListener('click',()=>{
        clearInterval(Interval)
        console.log('stops')
    })
    

    resetKey.addEventListener('click',()=>{
        clearInterval(Interval)
        tens = "00"
        seconds = "00"
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
        console.log('resets')
    })
    
 

 
