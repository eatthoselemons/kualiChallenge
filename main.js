var EventLoop = require('./eventLoop.js');


test = new EventLoop(1,2,1);
test.addPersonFloor(1);
test.next(true);
test.next(true);
test.next(true);
