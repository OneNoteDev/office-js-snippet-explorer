OneNote.run(function (context) {

    // Get the section groups in the notebook. 
    var sectionGroups = context.application.activeNotebook.getSectionGroups();

    // Queue a command to load the sectionGroups. 
    sectionGroups.load("name");

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync()
        .then(function () {
            $.each(sectionGroups.items, function (index, sectionGroup) {
                console.log("Section group name: " + sectionGroup.name);
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