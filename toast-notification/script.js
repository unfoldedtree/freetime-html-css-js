const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

const types = [
    'info',
    'success',
    'error'
]

button.addEventListener('click', () => {
    createNotification(getRandomMessage(), getRandomType())
})

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : 'info')

    notif.innerText = message

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.classList.add('remove')
    }, 2500)

    notif.addEventListener('transitionend', () => {
        notif.remove()
    })
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}