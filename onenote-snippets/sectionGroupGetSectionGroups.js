OneNote.run(function (context) {

    // Get the section groups that are direct children of the current notebook.
    var sectionGroups = context.application.activeNotebook.getSectionGroups();

    // Queue a command to load the section groups.
    // For best performance, request specific properties.
    sectionGroups.load("name");

    // Get the child section groups of the first section group in the notebook.
    var nestedSectionGroups = sectionGroups._GetItem(0).getSectionGroups();

    // Queue a command to load the ID and name properties of the child section groups.
    nestedSectionGroups.load("id,name");

    // Run the queued commands, and return a promise to indicate task completion.
    return context.sync()
        .then(function () {

            // Write the properties for each child section group.
            $.each(nestedSectionGroups.items, function (index, sectionGroup) {
                console.log("Section group name: " + sectionGroup.name);
                console.log("Section group ID: " + sectionGroup.id);
            });
        })
        .catch(function (error) {
            console.log("Error: " + error);
            if (error instanceof OfficeExtension.Error)
            {
                console.log("Debug info: " + JSON.stringify(error.debugInfo));
            }
        });
});