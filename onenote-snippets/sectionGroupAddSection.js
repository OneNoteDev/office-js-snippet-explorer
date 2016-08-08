OneNote.run(function (context) {

    // Get the section groups that are direct children of the current notebook.
    var sectionGroups = context.application.activeNotebook.getSectionGroups();

    // Queue a command to load the section groups.
    // For best performance, request specific properties.
    sectionGroups.load("id");

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync().then(function () {

        // Add a section to each section group.
        $.each(sectionGroups.items, function (index, sectionGroup) {
            sectionGroup.addSection("Agenda");
        });

        // Run the queued commands.
        return context.sync();
    });
})
.catch(function (error) {
    console.log("Error: " + error);
    if (error instanceof OfficeExtension.Error)
    {
        console.log("Debug info: " + JSON.stringify(error.debugInfo));
    }
});