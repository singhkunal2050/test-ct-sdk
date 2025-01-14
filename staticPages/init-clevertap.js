define(['clevertap'], function (clevertap) {
    // Get accountId and region from query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const accountId = urlParams.get('accountId');
    const region = urlParams.get('region');

    if (!accountId || !region) {
        console.error('CleverTap initialization failed: accountId or region is missing');
        return;
    }

    // Initialize CleverTap
    clevertap.init(accountId, region);
    clevertap.event.push("Test Event");
    console.log('CleverTap Initialized:', clevertap);
});
