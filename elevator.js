class elevator {
  //constructor :: id -> void
  constructor(){
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
    for(let i = 0; i < this._passengers.length;i++){
      if (this._passengers[i].floor == floor){
        this._passengers.splice(i, 1);
      }
    }
  }

  addDestination(destination){
    this._destinations.push(destination);
  }

  addPickup(pickup){
    //add to first of this._destinations
  }

  removeDestination(){
    //remove the current floor from this._destinations
  }

  onTheWay(passenger){
    if (betweenFloors(passenger.floor)){
      addPickup(passenger.floor);
    }
  }


  betweenFloors(floor){
    if (floor > this._currentFloor && floor < this._destinations[0]){
      return true;
    }
    if (floor < this._currentFloor && floor > this._destinations[0]){
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

  set destinations(destinations){
    this._destinations = destinations;
  }

  set passengers(passengers){
    this._passengers = passengers;
  }

  set trips(trips){
    this._trips = trips;
  }

  set active(active){
    this._active = active;
  }
}
