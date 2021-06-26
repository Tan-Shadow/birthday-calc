const daysEle = document.querySelector('.days')
const hoursEle = document.querySelector('.hours')
const minEle = document.querySelector('.minutes')
const secEle = document.querySelector('.seconds')


var userInput = document.querySelector('.userInput').value
const userDate = new Date(userInput)

// runs when user presses btn
function getInp(){
    

    if (userInput != null){

        function timeCalc(){
            let today = new Date()
    
            // difference between today and userDate in seconds
            const diffInSec = (userDate - today) / 1000
    
            let days = Math.floor((diffInSec / 3600) / 24)
            let hours = Math.floor((diffInSec / 3600) % 24)
            let minutes = Math.floor((diffInSec / 60) % 60)
            let seconds = Math.floor((diffInSec % 60))
            
            daysEle.innerHTML =  days
            hoursEle.innerHTML =  hours
            minEle.innerHTML =  minutes
            secEle.innerHTML =  seconds
            
    
        }
        setInterval(timeCalc, 1000)
    }
}




