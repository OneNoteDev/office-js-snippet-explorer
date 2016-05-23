// Note: in order for this to work, the user needs to be selecting a table
Office.context.document.getSelectedDataAsync(Office.CoercionType.Matrix,
    function (asyncResult) {
        var error = asyncResult.error;
        if (asyncResult.status === Office.AsyncResultStatus.Failed)
        {
            console.log(error.name + ": " + error.message);
        }
        else
        {
            // Get selected data.
            var dataValue = asyncResult.value;
            console.log('Selected data is ' + JSON.stringify(dataValue));
        }
    });