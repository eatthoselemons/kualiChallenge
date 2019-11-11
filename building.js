var {Elevator} = require('./elevator.js');
var {Floor} = require('./floor.js');
var {Person} = require('./person.js');


class Building {
  // constructor :: id -> int -> int -> void
  constructor(id, floors, elevators){
    this._floors = []; // :: [person]
    this._elevators = []; // :: [elevator]
    for (let i = 0; i < floors;i++){
      this._floors.push(new Floor(i));
    }
    for (let i = 0; i < elevators; i++){
      this._elevators.push(new Elevator(i));
    }
  }
  
  addPeopleDestinationsToElevators(building){
    for (let i in building.floor){
      for (let j in i.people){
        if (!j.hasElevator){
          addToCorrectElevator(j);
        }
      }
    }
  }

  getNumberOfFloors(){
    return this._floors.length;
  }

  getNumberOfElevators(){
    return this._elevators.length;
  }

  get floors(){
    return this._floors;
  }

  get elevators(){
    return this._elevators;
  }

  set floors(floors){
    this._floors = floors;
  }

  set elevators(elevators){
    this._elevators = floors;
  }

  addPersonToFloor(currentFloor, desiredFloor){
    this._floors[currentFloor].push(new Person(desiredFloor));
  }

  addToCorrectElevator(building){
    for (let i in building.floors){
      for (let j in i.people){
        if (!j.hasElevator){
          findCorrectElevator(i,j,building.elevators);
        }
      }
    }
  }

  findCorrectElevator(floor, person, elevators){
    availableElevators = [];
    emptyElevators = [];
    occupiedElevators = [];
    for (let i in building.elevators){
      if(i.isActive){
        availableElevators.push(i);
      }
    }
    for (let i in availableElevators){
      if(i.passengers.length > 0){
        occupiedElevators.push(i);
      }
      else{
        emptyElevators.push(i);
      }
    }
    let closestElevator;
    let closestElevatorDistance = 99999999999;
    for (let i in occupiedElevators){
      if (i.onTheWay(floor)){
        if(Math.abs(i.currentFloor-floor) < closestElevatorDistance){
          closestElevator = i;
          closestElevatorDistance = Math.abs(i.currentFloor-floor);
        }
      }
    }
    if(!closestElevator){
      for (let i in empytElevators){
        if(Math.abs(i.currentFloor-floor) < closestElevatorDistance){
          closestElevator = i;
          closestElevatorDistance = Math.abs(i.currentFloor-floor);
        }
      }
    }
  }
}
module.exports.Building = Building;
