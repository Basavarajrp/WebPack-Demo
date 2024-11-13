const component = () => {

    const element = document.createElement('div')
    element.innerHTML = "Hello from webpack config..."
    return element
}

document.body.appendChild(component())