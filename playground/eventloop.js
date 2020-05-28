node.runContents();

var pendingOperation = [];
var pendingTimer = [];
var pendingOSTasks = [];

function shouldContinue(){
    return pendingOSTasks.length || pendingOperation.length || pendingTimer.length;
}

while(shouldContinue()){            // tick
    // if there is any timer or long operation pending
    // if there is any OS related task is pending
    // Pause for a while, and then continue : 
        // - timer is about to complete (eg. setTimeout, setImmediate, setInterval etc)
        // - operation is completed (eg. read/write on local file)
        // - Any OS task is completed (eg. assigning any specific port to app)
}

Node.terminateProgram();