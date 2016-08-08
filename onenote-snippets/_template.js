OneNote.run(function (context) {

    // Queue up a command with the context

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync().then(function () {
        // Do something with the returned variables
    });
})
.catch(function (error) {
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error)
    {
        console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
});