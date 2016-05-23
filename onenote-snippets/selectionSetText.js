Office.context.document.setSelectedDataAsync("Hello world!",
    function (asyncResult) {
        var error = asyncResult.error;
        if (asyncResult.status === Office.AsyncResultStatus.Failed)
        {
            console.log(error.name + ": " + error.message);
        }
        else
        {
            console.log('API returned ' + JSON.stringify(asyncResult));
        }
    });