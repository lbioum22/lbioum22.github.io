

// {
    var notificationHandler = function(data) {
    // Do something with the notifications
    };

    var focusHandler = function() {
    // Do something when the visitor is focused
    // Assume the visitor is focused to begin with
    };

    var blurHandler = function() {
    // Do something when the visitor is blurred
    // Assume the visitor is focused to begin with
    };
// }
    lpTag.agentSDK.init({
    notificationCallback: notificationHandler,
    visitorFocusedCallback: focusHandler,
    visitorBlurredCallback: blurHandler
});

{
    var updateCallback = function(data) {
        // Do something with the returning data
        var path = data.key;
        var value = data.newValue;
        console.log(value);
        let newVal = [...value];
        console.log(typeof(newVal));
        if (newVal.length > 0) {
            newVal.filter(l=>l.source==="visitor").sort((l1,l2) => l1.time - l2.time);
        console.log(newVal);
        movieSearchBox.value = newVal[0].text;
        movieSearchBox.onchange();
        }
        
        // called each time the value is updated.
        // If there's an existing value when bind is called - this callback
        // will be called with the existing value
    };

    var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
        }
        // called when the bind is completed successfully,
        // or when the action terminated with an error.
};

        var pathToData = "chatTranscript.lines";

        lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);
}
