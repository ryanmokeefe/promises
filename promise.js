var a = 3
var b = 7

var equals10 = new Promise (function (succeed, fail) {
    var sum = a + b
    // set timeout will delay the console.log at the end, and make it pending
    setTimeout(() => {
        if (sum === 10) {
            succeed(`${a} + ${b} = 10`)
        } else {
            fail(`${a} + ${b} does not equal 10`)
        }
    }, 5000)
})

console.log(equals10)
equals10()
    .then(response => console.log(response))
    .catch(error => console.error(error))
