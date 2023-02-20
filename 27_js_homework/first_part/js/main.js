//Завдання 1
 let carInformation ={ 
    manufacturer : "Nissan",
    model : "Juke",
    year: 2022,
    average_speed: 80, 
    fuel_vol: 46,
    fuel_consumption: 8,
    driver: "Vlad",
};
alert(Object.values(carInformation));
carInformation.driver = prompt("Введіть ім'я водія");
if ( carInformation['driver'] !== "" &&  carInformation['driver'] !== null && typeof carInformation['driver'] !== "number") {
    alert(`Ім'я водія ${carInformation.driver}`);
    }
    else{
    alert("Помилка");
    }
    alert(Object.values(carInformation));

function timeToTravelDistance(distance) {
    distance = +prompt("Введіть дистанцію, яку потрібно проїхати")
    const hours = distance / carInformation.average_speed;
    if (hours %4 === 0){
        return hours + Math.floor((hours - 1) / 4)
    }
    else
    return hours + Math.floor(hours / 4);
}
alert(timeToTravelDistance());