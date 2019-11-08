Summary: This problem is one of state. I cannot apply and algorithm to the problem since the times that people will show up at each individual floor/elevator is not known.


## Assumption 0: There are no "speed" elevators. Each elevator goes to each floor
reasoning:
 - An assumption that I am making because the challenge does not specify is that there are no "speed" elevators. Ie there are no elevators that stop ever 10 floors to make embarking and disembarking faster over all. 

## Assumption 1: There are no "up" or "down" request buttons. If an elevator is going up and 1 floor below an elevator is requested and there are no closer elevators then that elevator will reverse and pick up the person
reasoning:
 - This is because the problem statement does not specify that there are any direction request buttons. The rules on new passengers arriving does say so I am choosing the simpiler option to have only request buttons and no "directional" request buttons
 - The problems state that there is rules for picking up passengers but not for how the passengers are supposed to be dropped off


## Assumption 2: The stops are determined by a que, if someone needs to go to a floor one above, then they need to wait till all the current people have gotten off. They might be waiting for a while. This logic could be changed in a 'sort fuction' but for now will be a que.
reasoning:
 - This makes things easier for the programming assignment. This is not optimal at all however it does simplify the things for the programming assignment and makes sure that there is not one person who is stuck the whole time waiting for the elevator to get to their floor.

## Assumption 3: A "trip" is a stop. So each stop will count. Ie any time someone gets on or off will result in 1 trip. However people getting on and some getting off will count as 1 stop as well.
reasoning:
 - this makes more sense for the elevators, however a "trip" could be each floor, or each multiple of floors so 10 floors in the building 1000 floor movements. However the "stop" method is the closest to "real world" elevators from what I am guessing.

## Assumption 4: At the end of a trip the elevator will stop in its place. It will not go to the top or bottom floor with no passengers. It will also not finish its "routes" once stopped. People will have to exit and try other elevators.

## Assumption 5: There is no limit to how many people can be in an elevator. This is unlike real life however the problem does not make this a requirement so I will ignore that case for now



Based on the problem we are trying to have a state machine. We need to keep the state of every elevator and passenger to calculate the path.

The easiest way to solve this would be an event loop. Each "cyle" every elevator can move 1 floor. 

## Design decision 0: The system will be controlled via an event loop

reasoning: 
 - An event loop simplifies a state machine and in many cases is the only way to have a state machine. Since this is a problem with a state machine then I will have an event loop. 
 - This is in contrast to each elevator loading people and unloading people as needed or in some sort of math function. Without knowing when people will show up you cannot "plan" out the future

## Design decision 1: Each cycle an elevator will be able to move 1 floor.
reasoning:
 - each "cycle" will be one floor as the rules for gathering the people are based on floors. If there is a person "requesting" an elevator then they will request the elevator and can only request based on floor.
 - each "cycle" could be a whole round trip of the elevator shaft however that would not work well due to the instance of someone appearing at the middle of the cycle. If they did the program would have no way to actually determine if the "active" elevator was the one that should pick up the person

## Design decision 2: Each elevator can move to every floor
reasoning:
 - This makes things easier and also the problem statement doesn't say anything otherwise.
 - Having "speed" elevators would mean that there might be 2 steps in a persons travel requiring pathfinding for each person not just arrive and set destination.

## Design decision 3: An elevator will take 2 "cycles" when it has reached a desired floor.
reasoning:
 - the elevators could always move 1 floor per cycle, when the elevator has reached a floor the passengers for that floor disembark. However doing the movement and disembarkment in the same cycle would make things cumbersome. the movement operation would need to check the floor and disembark passengers, in addition to loading new ones. This way it is easier, each cycle has either a) move elevator or b) move people. This makes the event loop simpler since there are two distinct actions and also makes it easier to read the code. As when the elevator is moving and when people are disembarking/embarking is more clear.


now to the logic portion

The logic of each elevator has several combinations:

 - elevator stores all people information, elevator stores floors
 - elevator stores floors, but people store their information
 - building stores elevators, people store floors
 - people find paths, not elevators or buildings


thoughts on implementation:

elevators store their location? Store what stops? Do people store their stops and tell the elevator?
if the people store their stops then you need to loop through every person each floor to check if they need to stop
so for simplicity the elevator will store a list of stops and this works with assuption 2.

## Implementation 0 So elevators store a list of stop locations of their passengers. Check if the current floor matches any stops and then let those passengers with that stop get off. This will mean that each passenger will need to have a destination, however that will be added when they get on the elevator and only used to see if they should get off.

where should floors be stored? Should they be stored in the people? the building? should each floor be an object? or should it be a list of people?

## Implementation 1: Each floor will be stored in a "building" each floor will be a list, and will contain the people wishing to get on an elevator, the people who got off the elevator and are done will not be stored. People who get off due to an elevator service stop will just get added to the floor list of people who's destination is another floor, the list of people wanting to get on an elevator.


## Implementation 2: The elevators and the floors will be stored in a "building" This way you can split up elevators and floors anyway you want. It would be possible to have the "speed" elevators from before by putting buildings inside of buildings. ie there are 4 "speed stops" in a building so each floor would be a "building" and have its own elevators. It is more extensible this way.

Should people store what floor they are on? or if they are on an elevator or not?

## Implementation 3: People will not store their location. Their location will be based on where they are. This will allow for only 1 "point of truth" so there cannot be an instance of someone being in 2 places at once.


## Implementation 4: each building will have a list of elevators, called "shafts" that will store the elevator objects.

## Implementation 5: each elevator will store a list of people that are inside the elevator.
--note: due to people's location being based on the elevator position it needs to be made sure that people are removed from the correct list. If they are not removed from the floor when they get on an elevator for example then there might be 2 people. They will have multiplied!


## Implementation flaw 1:
 - Since there is no check when a destination is added for duplicates someone might get off at a floor but their destination request will still be in the elevator destinations que
