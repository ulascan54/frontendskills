const jokes=document.querySelector('.jokes')
const jokeBtn=document.querySelector('.btn')

generatenJoke()
//using then
// function generatenJoke(){
//     const config={
//         headers:{
//             'Accept':'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com/',config)
//     .then((res)=>res.json())
//     .then((data)=>{
//         jokes.innerText=data.joke
//     })
// }


// using async await
async function generatenJoke(){
    const config={
        headers:{
            'Accept':'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com/',config)
    const data = await res.json()
    jokes.innerText=data.joke
}


jokeBtn.addEventListener('click',generatenJoke)