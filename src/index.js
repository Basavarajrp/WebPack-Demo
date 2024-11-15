import lodash from "lodash"
import strConcat from "./another-module"


function component() {
    const element = document.createElement('div');
    element.innerHTML  = lodash.join(["👋", strConcat], " ");
    return element
}

document.body.appendChild(component())
