class Building {
  // constructor :: id -> int -> int -> void
  constructor(id, floors, shafts){
    this._floors = []; // :: [floor]
    this._shafts = []; // :: [shaft]
    for (let i = 0; i < floors;i++){
      this._floors.push(new floor);
    }
    for (let i = 0; i < shafts: i++){
      this._shafts.push(new Shaft);
    }
  }
  
  get numberOfFloors(){
    return this._floors.length;
  }

  get numberOfShafts(){
    return this._shafts.length;
  }

  get floors(){
    return this._floors;
  }

  get shafts(){
    return this._shafts;
  }

  set floors(floors){
    this._floors = floors;
  }

  set shafts(shafts){
    this._shafts = floors;
  }

}
