OneNote.run(function (context) {

    // Get the current notebook.
    var page = context.application.activePage;

    // Queue a command to load the notebook. 
    // For best performance, request specific properties.
    page.load('id,title');

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync().then(function () {
        // Show some properties.
        console.log("Page title: " + page.title);
        console.log("Page ID: " + page.id);
    });
})
.catch(function (error) {
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error)
    {
        console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
});