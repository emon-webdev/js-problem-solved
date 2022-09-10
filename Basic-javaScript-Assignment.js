
//problem 1. convert radian to degree ()
function radianToDegree(radian) {
    if (typeof radian !== 'number') {
       return 'Please Enter a Valid Input'
    }
    else {
        const degreeValue = 57.2958;
        const degree = radian * degreeValue;
        return degree.toFixed(2);
    }
}
radianToDegree(25);
console.log(radianToDegree(25))

// problem 2 isJavaScriptFile
function isJavaScriptFile(fileName) {
    if (typeof fileName !== 'string') {
        return 'Please Enter a Valid Input'
    }
    let fileType = fileName.toLowerCase().split('.').pop();
    if (fileType === 'js') {
        return true;
    } else {
        return false;
    }
}
const fileName = isJavaScriptFile('active.js');
console.log(fileName)


// problem 3. oilPrice
function oilPrice(diesel, petrol, octane) {
    if (typeof diesel !== 'number' && typeof petrol !== 'number' && typeof octane !== 'number') {
        return 'Please Enter a Valid Input';
    }
    const dieselPrice = diesel * 114;
    const petrolPrice = petrol * 130;
    const octanePrice = octane * 135;
    const totalOilPrice = dieselPrice + petrolPrice + octanePrice;
    return totalOilPrice;
}
const quantityOfOil = oilPrice(1, 1, 1);
console.log(quantityOfOil)

// Problem 4: publicBusFare
function publicBusFare(traveler) {
    if(typeof traveler !== 'number'){
        return 'Please Enter a Valid Input';
    }
    const busCapacity = 50;
    const microBusCapacity = 11;
    const restTicketPrice = 250;
    let passengerReserveBus = traveler % busCapacity;
    let passengerReserveMicroBus = passengerReserveBus % microBusCapacity;
    let publicBusFare = passengerReserveMicroBus * restTicketPrice;
    return publicBusFare;
}
const traveler = publicBusFare(112);
console.log(traveler)

// Problem 5: isBestFriend
const bestFriend = { name: 'doe', friend: 'alex' };
const bestFriend2 = { name: 'alex', friend: 'doe' };
function isBestFriend(bestFriend, bestFriend2) {
    if(typeof bestFriend !== 'object' && typeof bestFriend2 !== 'object'){
        return 'Please Enter a Valid Input';
    }
    if (bestFriend.name === bestFriend2.friend && bestFriend.friend === bestFriend2.name) {
        return true
    } else {
        return false
    }
}
const result = isBestFriend(bestFriend, bestFriend2)
console.log(result)























