OneNote.run(function (context) {

    // Get the current notebooks.
    var notebooks = context.application.notebooks;

    // Queue a command to load current notebooks. 
    // For best performance, request specific properties.           
    notebooks.load('id,name');

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync()
        .then(function () {

            $.each(notebooks.items, function (index, notebook) {

                // Show some properties.
                console.log("Notebook name: " + notebook.name);
                console.log("Notebook ID: " + notebook.id);

            });
        });
})
    .catch(function (error) {
        console.log("Error: " + error);
        if (error instanceof OfficeExtension.Error)
        {
            console.log("Debug info: " + JSON.stringify(error.debugInfo));
        }
    });