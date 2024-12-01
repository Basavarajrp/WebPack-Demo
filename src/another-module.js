import lodash from 'lodash'


const strConcat = lodash.join(["Hello", "from", "webpack!"], " ");
console.log("strConcat:===", strConcat);

export default strConcat;