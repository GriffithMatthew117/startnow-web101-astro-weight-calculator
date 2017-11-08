var select = document.getElementById("planets");
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

for (var i = 0; i < planets.length; i++) {
    var option = document.createElement("option"),
        txt = document.createTextNode(planets[i][0]);
    option.appendChild(txt);
    option.setAttribute("value", planets[i][0]);
    select.appendChild(option);
}

document.getElementById("calculate-button").onclick = function (handleClickEvnt) {
    var userWeight = parseInt(document.getElementById("user-weight").value);
    var planetName = document.getElementById("planets").value;
    var result = calculateWeight(userWeight, planetName)
    var node = document.getElementById('output').innerHTML = "If you were on " + planetName + ", you would weigh " + result + "lbs!";
};


function calculateWeight(weight, planetName) {
    for (var i = 0; i < planets.length; i++) {
        if (planets[i][0] === planetName) {
            console.log(planets[i])
            return planets[i][1] * weight;
        }
    }
}


