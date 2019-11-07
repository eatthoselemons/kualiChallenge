objects:
 - people
 - bulding
 - elevators

building object:
  - list of elevators: shafts
  - list of floors: floors


people objects:
 - desired floor


elevator objects:
 - que of destinations: destinations
 - list of passengers: passengers
 - int of "trips": trips
 - active elevator: active


event loop:
  - for elevators
    - if elevator active
      - if passenger elevator destination
        - trips counter +1
        - passengers - peopleDisembarking
        - passengers + peopleEmbarking
        - if trips > 100
          - set active to false
      - else
        - move to next destination
  - for floors
  - if people
  - for people
  - check closest elevator rules
  - if elevator is occupied and person destination is between elevator and elevator next destination add new 
