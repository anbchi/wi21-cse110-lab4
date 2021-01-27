let statistics = {
	redCars: 21,
	blueCards: 45,
	greenCars: 12,
	raceCars: 5,
	blackCars: 40,
	rareCars: 2 
};

let count = 1;

for (let car in statistics) {
	if ("r" == car.charAt(0) || count%2==1) {
		console.log(statistics[car]);
	}
	count++;
}
