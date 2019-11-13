let {Building} = require('./building.js');

class EventLoop {
  // constructor id -> floors -> elevators -> void
  constructor(id, floors, elevators){
    this.id = id;
    this._building = new Building("main", floors, elevators);
  }
  //next :: boolean -> void
  next(displayState){
      this._building.addPeopleDestinationsToElevators();
    
    for (let i of this._building.elevators){
      console.log(i);
      dropOffOrMove(i);
    }
    if (displayState){
      displayCurrentBuildingState(this._building);
    }
  }

  displayCurrentBuildingState(building){
    for ( let i in building.elevators){
      console.log("Elevator: " + i.id + " Floor: " + i.currentFloor + "people: ");
      for (let j in i.people){
        console.log("person: " + j.id);
      }
      console.log("--------------------");
    }
  }

  get building(){
    return this._building;
  }

  dropOffOrMove(elevator){
    if(elevator.destinations[0] == elevator.currentFloor){
      elevator.removePassengersForFloor();
      elevator.atDestination();
      elevator.addTrip();
    }
    else{
      elevator.move();
    }
    if(elevator.trips > 100){
      elevator.needsService();
    }
  }
}
module.exports.EventLoop = EventLoop;
