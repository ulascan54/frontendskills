const sounds=['boom','clap','hitat','kick','openhat','ride','snare','tink','tom']
const soundskeys=['e','f','g','h','j','k','l','m','n']
const soundcodes=[69,70,71,72,74,75,76,77,78]

sounds.forEach((sound,idx) =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.setAttribute("data-key",soundcodes[idx])
    btn.innerHTML=`
        <p>${soundskeys[idx]}</p>
        <span>${sound}</span>
    `
    btn.addEventListener('click',()=>{
        stopSongs(sound)
        document.getElementById(sound).play()
        btn.classList.add('active')
        setTimeout(() => {
            btn.classList.remove('active')
        }, 200);
    })
    document.getElementById('buttons').append(btn)
})

function stopSongs(sound){
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime=0;
}

function removeTransition(e) {
    if (e.propertyName !== 'scale') return;
    e.target.classList.remove('active');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('active');
    audio.currentTime = 0;
    audio.play();
  }

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('active');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.btn'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);