class Person {
  // constructor :: id -> int -> boolean -> void
  constructor(id, desiredFloor){
    this.id = id;
    this._desiredFloor = desiredFloor; //:: int
    this._requestedElevator = False; //:: boolean
    this._hasElevator = false; //:: boolean
  }

  set requestedElevator(value){
    this._requestedElevator = value;
  }

  get requestedElevator(){
    return this._requestedElevator;
  }

  set elevator(elevator){
    this._elevator = elevator;
  }

  get elevator(){
    return this._elevator;
    this._hasElevator = true;
  }

  set hasElevator(value){
    this._hasElevator = value;
  }

  get hasElevator(){
    return this._hasElevator;
  }
}
