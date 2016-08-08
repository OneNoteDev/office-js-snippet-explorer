OneNote.run(function (context) {

    // Gets the active notebook.
    var notebook = context.application.activeNotebook;

    // Queue a command to get immediate child sections of the notebook. 
    var childSections = notebook.getSections(false);

    // Queue a command to get all sections in the notebook, including sections in section groups.
    var allChildSections = notebook.getSections(true);

    // Queue a command to load the childSections. 
    context.load(childSections);

    // Queue a command to load the allChildSections. 
    context.load(allChildSections);

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync().then(function () {
        $.each(childSections.items, function (index, childSection) {
            console.log("Immediate child section name: " + childSection.name);
        });

        $.each(allChildSections.items, function (index, childSection) {
            console.log("Child section name: " + childSection.name);
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