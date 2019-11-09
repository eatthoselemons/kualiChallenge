class eventLoop {
  // constructor id -> floors -> shafts -> void
  constructor(id, floors, shafts){
    this._building = new Building("main", floors, shafts);
  }
  //next :: boolean -> void
  next(displayState){
      this._building.addPeopleDestinationsToElevators();
    
    for (let i of this._building.elevators){
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









