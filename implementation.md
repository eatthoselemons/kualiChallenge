objects:
 - people
 - bulding
 - elevators

building object:
  - list of elevators: shafts :: [elevators]
  - list of floors: floors :: [floors]


people objects:
 - desired floor :: int
 - requested elevator :: boolean


elevator objects:
 - que of destinations: destinations :: [int]
 - list of passengers: passengers :: [People]
 - int of "trips": trips :: int
 - active elevator: active :: boolean
 - current floor :: int


event loop:
  - for floors
    - if people
      - for people with "requested elevators" = false
        - check "active elevators"
          - check all elevators for occupied ones with paths past the requesters floor Note: persons current floor is between elevator current floor and elevator destination.
            - select the closest of those elevators
              - add new destination to elevator
                - set peoples "requested elevator" = true
          - for remaining people
            - select unocupied elevators
              - select closest elevator (elevators on the same floor will have distance = 0)
                - change that elevators current destination to the requesters floor. (since the que will be empty just set the que to that floor
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
