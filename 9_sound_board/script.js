const sounds=['boom','clap','hitat','kick','openhat','ride','snare','tink','tom']

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText=sound
    document.getElementById('buttons').append(btn)
})