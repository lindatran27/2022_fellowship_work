var car = ["Honda", "Civic", "Blue", 2005, 125000, true];

var carObj = {
    make: 'Honda',
    model: 'Civic',
    color: 'Blue',
    year: 2005,
    mileage: 125000,
    isWorking: true,
    maintence: {
        oilChange: [5000, 10000, 15000],
        belts: [50000, 100000]
    },
    driveToWork: function() {
        console.log(this.mileage);
        this.mileage = this.mileage + 10,
        console.log(`You drove to work, your new mileage is ${this.mileage} miles`)
    }
}

var r2HGrad = {
    name: 'Linda',
    highSchool: 'Garinger',
    skills: ['professional development', 'coding'],
    cheer: function() {
        return "You are the best "
    }
} 

console.log(r2HGrad.cheer() + r2HGrad.name);
console.log(" ")



var bananaBread = {
    name: 'banana bread',
    serving: 2,
    ingredients: ['banana', 'flour', 'sugar', 'butter', 'egg']
}

console.log(bananaBread.name);
console.log('Servings: ' + bananaBread.serving);
console.log('Ingredients:');
for (var i = 0; i < bananaBread.ingredients.length; i++) {
    console.log(bananaBread.ingredients[i]);
}
