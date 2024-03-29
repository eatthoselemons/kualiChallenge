let {Person} = require('./person.js');

class Floor {
  constructor(id, floorNumber){
    this.id = id;
    this._floorNumber = floorNumber;
    this._people = []
  }

  addPerson(floor){
    this._people.push(new Person(floor));
  }

  people(){
    return this._people;
  }
}
module.exports.Floor = Floor;
