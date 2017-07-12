var State;
(function (State) {
    State["Started"] = "started";
    State["Stopped"] = "stopped";
})(State || (State = {}));
var node = document.querySelector('input');
if (node.value === State.Started) {
    // do something interesting
}
