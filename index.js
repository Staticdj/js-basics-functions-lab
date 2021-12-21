// Code your solution in this file!
let distanceFromHqInBlocks = (blocks) => {
    let distance = 42 - blocks
    if (distance < 0) {
        return distance * -1
    }
    return distance
}

let distanceFromHqInFeet = (blocks) => {
    let distanceinfeet = (42 - blocks) * 264
    if (distanceinfeet < 0) {
        return distanceinfeet * -1
    }
    return distanceinfeet;
}

let distanceTravelledInFeet =(startingBlock, endingBlock) => {
    let distanceBetweenBlocksInFeet = (startingBlock - endingBlock) *264
    if (distanceBetweenBlocksInFeet < 0) {
        return distanceBetweenBlocksInFeet * -1
    }
    return distanceBetweenBlocksInFeet;
}

let calculatesFarePrice = (start, destination) => {
    let distanceBetweenBlocksInFeet = distanceTravelledInFeet(start,destination)
    if (distanceBetweenBlocksInFeet <= 400) {
        return 0
    }
    if (distanceBetweenBlocksInFeet <= 2000) {
        return 0.02 * (distanceBetweenBlocksInFeet -400)
    }
    if (distanceBetweenBlocksInFeet >2000 && distanceBetweenBlocksInFeet <= 2500) {
        return 25
    }
    if (distanceBetweenBlocksInFeet > 2500) {
        return 'cannot travel that far'
    }
}

console.log(calculatesFarePrice(34, 24));