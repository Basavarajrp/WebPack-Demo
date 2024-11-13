import './style.css'

const divComponent = () => {

    const element = document.createElement('div');
    element.innerHTML = "Hello from webpack"
    element.classList.add("divContainer");

    return element

}


document.body.appendChild(divComponent())