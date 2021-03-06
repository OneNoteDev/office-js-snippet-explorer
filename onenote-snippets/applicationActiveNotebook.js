OneNote.run(function (context) {

    // Get the current notebook.
    var notebook = context.application.getActiveNotebook();

    // Queue a command to load the notebook. 
    // For best performance, request specific properties.           
    notebook.load('id,name');

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync().then(function () {
        // Show some properties.
        console.log("Notebook name: " + notebook.name);
        console.log("Notebook ID: " + notebook.id);
    });
})
.catch(function (error) {
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error)
    {
        console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
});