const random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const getRandomAmount = (min, max, expected) => {
    let d = 0
    if (random(min, max) <= expected) d = random(min, max)
    else d = random(min, parseInt(((2 * expected * (max - min) - (expected - min) * (max + min)) / (max - expected)) - min))
    return d
}

let test = 0

for (let i = 0; i < 100000; i++) {
    test += getRandomAmount(200, 300, 280)
}
console.log(test / 10000)

module.exports = getRandomAmount

