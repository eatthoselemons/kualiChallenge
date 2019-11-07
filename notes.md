Summary: This problem is one of state. I cannot apply and algorithm to the problem since the times that people will show up at each individual floor/elevator is not known.


Assumption 1: There are no "speed" elevators. Each elevator goes to each floor
reasoning:
 - An assumption that I am making because the challenge does not specify is that there are no "speed" elevators. Ie there are no elevators that stop ever 10 floors to make embarking and disembarking faster over all. 

Assumption 2: There are no "up" or "down" request buttons. If an elevator is going up and 1 floor below an elevator is requested and there are no closer elevators then that elevator will reverse and pick up the person

reasoning:
 - This is because the problem statement does not specify that there are any direction request buttons. The rules on new passengers arriving does say so I am choosing the simpiler option to have only request buttons and no "directional" request buttons


Based on the problem we are trying to have a state machine. We need to keep the state of every elevator and passenger to calculate the path.

The easiest way to solve this would be an event loop. Each "cyle" every elevator can move 1 floor. 

Design decision 0: The system will be controlled via an event loop

reasoning: 
 - An event loop simplifies a state machine and in many cases is the only way to have a state machine. Since this is a problem with a state machine then I will have an event loop. 
 - This is in contrast to each elevator loading people and unloa

Design decision 1: Each cycle an elevator will be able to move 1 floor.

reasoning:
 - each "cycle" will be one floor as the rules for gathering the people are based on floors. If there is a person "requesting" an elevator then 

Design decision 2: Each elevator can move to every floor

Design decision 3: An elevator will take 2 "cycles" when it has reached a desired floor.

reasoning:
 - the elevators could always move 1 floor per cycle, when the elevator has reached a floor the passengers for that floor disembark. However doing the movement and disembarkment in the same cycle would make things cumbersome. the movement operation would need to check the floor and disembark passengers, in addition to loading new ones. This way it is easier, each cycle has either a) move elevator or b) move people. This makes the event loop simpler since there are two distinct actions and also makes it easier to read the code. As when the elevator is moving and when people are disembarking/embarking is more clear.
