let {EventLoop} = require('./eventLoop.js');


let test = new EventLoop(1,2,1);
test.addPersonToFloor(1);
test.next(true);
test.next(true);
test.next(true);
