const route = (event) => {
    event = event || window.event;
    // event.preventDefault();
    // window.history.pushState({}, '', event.target.href);
}

window.route = route

const sel = document.querySelector('#button')
const result = document.querySelector('#data')

const getData = function () {
    result.innerText = 'Loading....'
    fetch('https://api.github.com/users/gulshansainis')
        .then(res => res.json())
        .then(data => {
            result.innerText = JSON.stringify(data, null, 2)
        })
        .catch(error => console.log(error))
}

sel.addEventListener('click', getData)