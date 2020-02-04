console.log('Client side javascript file is loaded!')

//This file is to used to call the api's that we have constructed in a way...

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//The above lines are trying to get informatin from the frontend of the webpage like the R.id.{something} that we used in android

weatherForm.addEventListener('submit', (e) => {     //this is an event listener that would execute when the specified event occurs on the webpage
    e.preventDefault()                              //this line stops the webpage from refreshing(default behaviour) upon the submission of the form

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {     //here, we are calling the webpage that return the json data about the weather forecast of the specified location
        response.json().then((data) => {        //this converts the response to json    //actually, this is not a webpage but kind of an api constructed by US
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})