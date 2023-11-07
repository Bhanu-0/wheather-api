//  const APIkey= `7c9f1ad923f091684f3005e9de647095`


// // accessing all required  html elements
// const input=document.getElementById('inputval')
// const btnEle=document.getElementById('btn')
// const Tempele=document.getElementById('temp')
// const Discription=document.getElementById('description')
// const Location=document.getElementById('location')


// // adding the eventlistner to the button ele

// btnEle.addEventListener('click',(e)=>{

//     // stores the location entered by the user
//     let loc='hyderabad'
//     //api url
//     url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${APIkey}`

//     // using fetch method to fetch the location wheather details
//     fetch(url)
//     .then((data)=>data.json())
//     .then(da=>{
//         console.log(da)
//         //object distructing
//     const{name}=da;
//     const{feels_like}=da.main;
//     const{description}=da.wheather[0]

//      //assigning values
//      Location.innerText=name
//     Tempele.innerText=Math.round(feels_like-273)
//     Discription.innerText=description
//     })
//     .catch((err)=>{
//         alert('please enter valid location')
//     })

    
// })



// const ApiKey='7c9f1ad923f091684f3005e9de647095'
// //accessing a;; required html elements

// const input=document.getElementById('inputval')
// const btele=document.getElementById('btn')
// const tempele=document.getElementById('temp')
// const Discription=document.getElementById('description')
// const Location=document.getElementById('location')

// // adding the event listeners to the btn
// btele.addEventListener('click',(e)=>{
//     //store the location enetred by user

//     //condition for checking
//     if(input.value==''){
//         alert('enter a valid location')
//     }else{
//         //store the location entered by user
    
//     let loc='input.value'
//     // api url
//     url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${ApiKey}`
//     // using fetch method to fetch the location waetehr details
//     fetch(url)
//     .then((data)=>data.json())
//     .then(da=>{console.log(da.main)

//         // object destucturing
//         const {name}=da;
//         const {feels_like}=da.main;
//         const {description}=da.weather[0]

//         // assigning the values to html elements
//         Location.innerText=name
//         tempele.innerText=Math.round(feels_like-273)
//         Discription.innerText=description

//     })
    
//     .catch((err)=>{
//         alert('enter a valid location')
//     })

// }   
// input.value=''              

// })

const ApiKey='7c9f1ad923f091684f3005e9de647095'
//accessing a;; required html elements

const input=document.getElementById('inputval')
const btele=document.getElementById('btn')
const tempele=document.getElementById('temp')
const Discription=document.getElementById('description')
const Location=document.getElementById('location')
const Img=document.getElementById('img')

// adding the event listeners to the btn
btele.addEventListener('click',(e)=>{
    //condition for checking weather user entered a location
    if(input.value==''){
        alert('enter the location')
    }else{
    //store the location enetred by user
    let loc=input.value
    

    // api url
    url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${ApiKey}`
    // using fetch method to fetch the location waetehr details
    fetch(url)
    .then((data)=>data.json())
    .then(da=>{console.log(da)

        // object destucturing
        const {name}=da;
        const {feels_like}=da.main;
        const {description}=da.weather[0]
        const {icon}=da.weather[0]

        // assigning the values to html elements
        Location.innerText=name
        tempele.innerText=Math.round(feels_like-273)
        Discription.innerText=description
        Img.innerText=icon

    }).catch((err)=>{
        
    })

                    
}
// to make input values empty
input.value=''
})