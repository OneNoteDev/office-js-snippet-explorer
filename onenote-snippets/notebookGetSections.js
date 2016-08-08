OneNote.run(function (context) {

    // Gets the active notebook.
    var notebook = context.application.activeNotebook;

    // Queue a command to get immediate child sections of the notebook. 
    var childSections = notebook.sections;

    // Queue a command to load the childSections. 
    childSections.load("id,name");

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync().then(function () {
        $.each(childSections.items, function (index, childSection) {
            console.log("Immediate child section name: " + childSection.name);
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