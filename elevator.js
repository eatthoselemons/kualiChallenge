class elevator {
  //constructor :: id -> void
  constructor(){
    this._destinations = []; // :: [int]
    this._passengers = []; // :: [passengers]
    this._trips = 0; // :: int
    this._active = true // :: boolean
  }

  function set

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
