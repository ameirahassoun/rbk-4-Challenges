// Queue Stack
// Write a stack. Once you’re done, implement a queue using two stacks to create FIFO behavior. The queue should not have any storage separate from its stacks.

var Stack = function() {
  var storage = [];

  this.push = function(a){
    storage.push(a)
    //return storage.length
  };

  this.pop = function(){
     return storage.pop()
  };

  this.size = function(){
    return storage.length
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(b){
    var len = outbox.size()
    for(var i=0; i< len; i++){
      inbox.push(outbox.pop())
    }
    inbox.push(b)
  };

  this.dequeue = function(){
    var len = inbox.size()
    for(var j=0; j < len ; j++){
    outbox.push(inbox.pop())
  };
  return outbox.pop()
}

  this.size = function(){
  return inbox.size() + outbox.size()
  };
};
