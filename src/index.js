console.log('%c HI', 'color: firebrick')

function fetchimg() {
    return fetch ('https://dog.ceo/api/breeds/image/random/4')
    .then(Response => Response.json())
    .then(json => renderBooks(json))
    
    }
    