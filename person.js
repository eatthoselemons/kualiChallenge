class Person {
  // constructor :: id -> int -> boolean -> void
  constructor(id, desiredFloor){
    this.id = id;
    this._desiredFloor = desiredFloor; //:: int
    this._requestedElevator = False; //:: boolean
  }

  set requestedElevator(value){
    this._requestedElevator = value;
  }

  get requestedElevator(){
    return this._requestedElevator;
  }
}
