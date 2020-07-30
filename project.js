const background = document.getElementById('background')
const thumbnail = document.getElementById('thumbnail')
const song = document.getElementById('song')

const songArtist = document.getElementsByClassName('artist')[0]
const songTitle = document.getElementsByClassName('song-title')[0]
const progressBar = document.getElementById('progress-bar')
const pPause = document.getElementById('play-pause')

let songs = ['./asset/Music/Bye Bye My Blue - Yerin Baek.mp3', './asset/Music/Trauma - Seventeen.mp3']

let thumbnails = ['./asset/Icon/bye_bye_my_blue.jpg', './asset/Icon/trauma_seventeen.jpg']

let artist = ['Yerin Baek', 'Seventeen']

let title = ['Bye Bye My Blue', 'Trauma']

let playing = true

function playPause() {
    if (playing) {
        pPause.src = './asset/Cover/icons8-pause-button-64.png'

        song.play()
        playing = false
    } else {
        pPause.src = './asset/Cover/icons8-circled-play-64.png'

        song.pause()
        playing = true
    }
}

let songIndex = 0

function forward () {
    songIndex++
    if (songIndex >= songs.length)
        songIndex = 0
    song.src = songs[songIndex]
    thumbnail.src = thumbnails[songIndex]
    background.src = thumbnails[songIndex] 

    songArtist.innerHTML = artist[songIndex]
    songTitle.innerHTML = title[songIndex]

    playing = true
    playPause()
}

function backward() {
    songIndex--
    if (songIndex < 0)
        songIndex = songs.length - 1
    song.src = songs[songIndex]
    thumbnail.src = thumbnails[songIndex]
    background.src = thumbnails[songIndex] 

    songArtist.innerHTML = artist[songIndex]
    songTitle.innerHTML = title[songIndex]

    playing = true
    playPause()
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds - (min * 60))
    if (sec < 10) {
        sec = `0${sec}`
    }
    return `${min}:${sec}`
}

function updateProgressValue () {
    progressBar.max = song.duration
    progressBar.value = song.currentTime
    document.querySelector('.currentTime').innerHTML = formatTime(Math.floor(song.currentTime));
    if (document.querySelector('.durationTime').innerHTML === 'NaN:NaN') {
        document.querySelector('.durationTime').innerHTML = '0:00';
    } else {
        document.querySelector('.durationTime').innerHTML = formatTime(Math.floor(song.duration));
    }
}

setInterval(updateProgressValue, 500)

function changeProgressValue () {
    song.currentTime = progressBar.value
}