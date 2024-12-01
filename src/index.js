const lodash = require('lodash');
const result = welCome();
const component = () => {
    const element = document.createElement('div');
    element.innerHTML = lodash.join(["Hello", 'from', 'Webpack'], ' ');

    return element;
}
document.body.appendChild(component());