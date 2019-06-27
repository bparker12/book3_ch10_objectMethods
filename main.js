const allCars = [
    {
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]



// function loopThisThing(value) {
//     let carValues = Object.values(allCars)
//     value.forEach(element => {
//         document.querySelector("#here").innerHTML += `<li>${element }</li>`
//     });
// }
// loopThisThing(allCars)

const outputElement = document.querySelector("#here")

// Iterate the array of cars. Individual objects stored in `car`.
allCars.forEach(car => {
    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
        outputElement.innerHTML += `<div>${value}</div>`
    }
})


// Lightning Exercise 1
const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

let bill =
    {
        officeName: "Worst Doc",
        streetAddress: "123 Main St",
        doctorName: "Dr. Grey",
        patientName: "Ben Parker",
        visitDate: "6/1/19",
        amountBilled: 50000,
        dueDate: "6/20/19"
    }
    //lightning exercise 2
console.log(bill[dateVisited])
console.log(bill[owed])
console.log(bill[patient])
//lightning exercise 3
for (let foo in bill) {
    console.log(bill[foo])
}

/*
    Just get a reference to the first object since
    they all have the same properties
*/
const firstCar = allCars[0]

// Now iterate its keys
outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(firstCar)) {
  outputElement.innerHTML += `<div>${key}</div>`
}

// Iterate the array of cars. Individual objects stored in `car`.
outputElement.innerHTML += "<h1>Car List</h1>"
allCars.forEach(car => {

    // Iterate all of the values of the current car
    for (const value of Object.values(car)) {
      outputElement.innerHTML += `<div>${value}</div>`
    }
})