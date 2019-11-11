class Elevator {
  //constructor :: id -> void
  constructor(id){
    this.id = id;
    this._destinations = []; // :: [int]
    this._passengers = []; // :: [passengers]
    this._trips = 0; // :: int
    this._active = true; // :: boolean
    this._currentFloor = 1; // :: int
  }

  addPassenger(passenger){
    this._passengers.push(passenger);
  }

  removePassengersForFloor(floor){
    for (let i of this._passengers){
      if (i.floor == floor){
        this._passengers.splice(i, 1);
      }
    }
  }

  addPassengersForFloor(people){
    for (let i of people){
      if (people.elevator == this.id){
        this._passengers.push(i);
      }
    }
  }

  addDestination(destination){
    this._destinations.push(destination);
  }

  addPickup(floor){
    this._destinations.unshift(floor.id);
  }

  atDestination(){
    this._destination.splice(0,1);
  }

  onTheWay(floor){
    if (betweenFloors(floor)){
      return true;
    }
    return false;
  }

  betweenFloors(floor){
    if (floor.id > this._currentFloor && floor.id < this._destinations[0]){
      return true;
    }
    if (floor.id < this._currentFloor && floor.id > this._destinations[0]){
      return true;
    }
    return false;
  }


  get destinations(){
    return this._destinations;
  }

  get passengers(){
    return this._passengers;
  }

  get trips(){
    return this._trips;
  }

  get active(){
    return this._active;
  }

  isActive(){
    return this._active;
  }

  get currentFloor(){
    return this._currentFloor;
  }

  set destinations(destinations){
    this._destinations = destinations;
  }

  set passengers(passengers){
    this._passengers = passengers;
  }

  set trips(trips){
    this._trips = trips;
  }

  addTrip(){
    this._trips = this._trips + 1;
  }

  set active(active){
    this._active = active;
  }

  set currentFloor(floor){
    this._currentFloor = floor;
  }

  needsService(){
    this._active = false;
  }

  moveUp(){
      this._currentFloor = this._currentFloor + 1;
  }

  moveDown(){
      this._currentFloor = this._currentFloor - 1;
  }

  move(){
    if(this._destinations[0] > this._currentFloor){
      moveUp();
    }
    else{
      moveDown();
    }
  }
}
module.exports.Elevator = Elevator;
