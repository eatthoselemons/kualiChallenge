class eventLoop {
  // constructor id -> floors -> shafts -> void
  constructor(id, floors, shafts){
    this._building = new Building("main", floors, shafts);
  }

  next(){
      this._building.addPeopleDestinationsToElevators();
    
    for (let i of this._building.elevators){
      dropOffOrMove(i);
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









