class Building {
  // constructor :: id -> int -> int -> void
  constructor(id, floors, shafts){
    this._floors = []; // :: [person]
    this._shafts = []; // :: [shaft]
    for (let i = 0; i < floors;i++){
      this._floors.push(new floor(i));
    }
    for (let i = 0; i < shafts: i++){
      this._shafts.push(new Shaft);
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

  getNumberOfShafts(){
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

  addPerson(currentFloor, desiredFloor){
    this._floors[currentFloor].push(new Person(desiredFloor));
  }

  addToCorrectElevator(building){
    for (let i in building.floors){
      for (let j in i.people){
        if (!j.hasElevator){
          findCorrectElevator(i,j,building.shafts);
        }
      }
    }
  }

  findCorrectElevator(floor, person, elevators){
    availableElevators = [];
    for (let i in building.elevators){
      if(i.isActive){
        availableElevators.push(i);
      }
    }

    //list of available elevators with people and
    //list of available elevators without people
    for (let i in availableElevators){
      if(i.onTheWay(floor){
        person.elevator = i;
        i.addPickup(floor)
      }
      if(




}
