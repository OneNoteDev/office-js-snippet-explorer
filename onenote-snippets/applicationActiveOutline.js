OneNote.run(function (context) {

    // Get the current outline
    var outline = context.application.activeOutline;

    // Queue a command to load the outline
    // For best performance, request specific properties
    outline.load('id');

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync().then(function () {
        // Show some properties.
        console.log("Outline ID: " + outline.id);
    });
})
.catch(function (error) {
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error)
    {
        console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
});