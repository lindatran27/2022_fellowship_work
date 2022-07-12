let car = {
    make: 'Nissan',
    model: 'Silvia',
    color: 'Ultraviolet Purple',
    mileage: 3000,
    isWorking: true,

    driveToWork: () => {
        alert(`Old Mileage: ${car.mileage}`);
        console.log(car.mileage);
        car.mileage = car.mileage + 8

        alert(`New Mileage: ${car.mileage}`);
    },

    driveAroundTheWorld: () => {
        alert(`Old Mileage: ${car.mileage}`);

        car.mileage = car.mileage + 24000

        alert(`New Mileage: ${car.mileage}`);
        alert('Car needs a tune-up!')

        isWorking = false;
    },

    getTuneUp: () => {
        alert('Car is ready to go!');

        isWorking = true;
    },


    honk: () => {
        alert('BEEP BEEP!');
    }

};

let race = () => {
    alert('SKUUURRRTT!');
    isWorking = false;
    alert('Car needs a tune-up');
};

// document.onkeyup = (event) => {
//     usersInput = event.key.toLocaleLowerCase();

//     if ((usersInput = 'f')) {
//         race();
//     };
// };

document.onkeyup = (event) => {
    event.preventDefault();
    var usersInput = event.key.toLocaleLowerCase();

    switch (usersInput) {
        case usersInput = 'w':
            car.driveToWork()
            break;
        case usersInput = 'e':
            car.driveAroundTheWorld()
            break;
        case usersInput = 't':
            car.getTuneUp()
            break;
        case usersInput = 'h':
            car.honk()
            break;
        case usersInput = 'f':
            race();
            break;
    };

};

document.getElementById('main-btn').addEventListener('click', () => {
    console.log('hello!');
    //let favoriteCar = prompt('What is your favorite car?');
    //document.querySelector('.fave-car').textContent = favoriteCar;
});

document.querySelector('.second-btn').addEventListener('click', () => {
    console.log('whats up');
});