    const campaigns = [
        {
        "msgContent": {
            "templateType": "point-and-click",
            "type": 4
        },
        "display": {
            "details": [{
            "selectorData": [{
                "selector": "#test"
            }, {
                "selector": "h1"
            }]
            }]
        },
        "wzrk_id": "1739265399_20250212"
        },
        {
        "msgContent": {
            "templateType": "point-and-click",
            "type": 4
        },
        "display": {
            "details": [{
            "selectorData": [{
                "selector": "#test"
            }, {
                "selector": "h1"
            }]
            }]
        },
        "wzrk_id": "1739265399_20250212"
        },
        {
        "msgContent": {
            "templateType": "point-and-click",
            "type": 4
        },
        "display": {
            "details": [{
            "selectorData": [{
                "selector": "#web-native-wrapper"
            }, {
                "selector": "h1"
            }]
            }]
        },
        "wzrk_id": "1739265399_20250212"
        },
        {
        "msgContent": {
            "templateType": "banner",
            "type": 2
        },
        "display": {
            "divSelector": "#web-native-wrapper",
            "details": [{
            "html": "<div>Web Native Display - v1</div>"
            }]
        },
        "wzrk_id": "1739182250_20250212"
        },
        {
        "msgContent": {
            "templateType": "banner",
            "type": 2
        },
        "display": {
            "divSelector": "#web-native-wrapper",
            "details": [{
            "html": "<div>Web Native Display - v1</div>"
            }]
        },
        "wzrk_id": "1735560305_20250212"
        }, {
            "msgContent": {
            "templateType": "banner",
            "type": 2
            },
            "display": {
            "divSelector": "#new-selector",
            "details": [{
                "html": "<div>Web Native Display - v1</div>"
            }]
            },
            "wzrk_id": "1735560305_20250212"
        }, {
            "msgContent": {
            "templateType": "banner",
            "type": 2
            },
            "display": {
            "divSelector": "#test",
            "details": [{
                "html": "<div>Web Native Display - v1</div>"
            }]
            },
            "wzrk_id": "1735560305_20250212"
        },  {
            "msgContent": {
            "templateType": "banner",
            "type": 2
            },
            "display": {
            "divSelector": "#test",
            "details": [{
                "html": "<div>Web Native Display - v1</div>"
            }]
            },
            "wzrk_id": "1735560305_20250212"
        },   {
            "msgContent": {
            "templateType": "banner",
            "type": 2
            },
            "display": {
            "divSelector": "h1",
            "details": [{
                "html": "<div>Web Native Display - v1</div>"
            }]
            },
            "wzrk_id": "1735560305_20250212"
        },{
            "msgContent": {
            "templateType": "point-and-click",
            "type": 4
            },
            "display": {
            "details": [{
                "selectorData": [{
                "selector": "h1"
                }, {
                "selector": "h2"
                }]
            }]
            },
            "wzrk_id": "1739265399_20250212"
        },

    ];
    
    function isExistingSelectorinGroup(grouped, key) {
        // Check if the key exists in any of the group and return index if it does or return false 
        let i = 0;
        for (const group in grouped) {
            const existingCampaign = grouped[group].find(campaign => {
                return campaign?.display?.divSelector === key || campaign.display?.details[0]?.selectorData?.map(a=>a.selector)?.includes(key);
            });

            if (existingCampaign) {
                return { value: true , key : existingCampaign.display.divSelector ?? existingCampaign.display?.details[0]?.selectorData[0]?.selector}; 
            }
            i++;
        }
        return { value: false };
    }

    function groupCampaigns(campaigns) {
        const grouped = {}; // Initialize an empty object to hold the groups
    
        for (const campaign of campaigns) { // Loop through each campaign in the array
            let key; // Declare a variable to store the grouping key
        
            if (campaign.display.divSelector) {
                key = campaign.display.divSelector; // If divSelector exists, use it as the key
            } else if (campaign.display.details && campaign.display.details[0].selectorData && campaign.display.details[0].selectorData[0].selector) {
                key = campaign.display.details[0].selectorData[0].selector; // Otherwise, try to use the first selector
            } else {
                key = 'unknown'; // If neither exists, use 'unknown' as the key
            }
        
            const groupExists = isExistingSelectorinGroup(grouped, key); // Check if the key exists in the grouped object
            if (!grouped[key] && !groupExists.value) { // If this key doesn't exist in the grouped object yet
                grouped[key] = []; // Create a new empty array for this key
            }
        
            if(groupExists.value) {
                grouped[groupExists.key].push(campaign)
            } else {
                grouped[key].push(campaign); // Add the current campaign to the array associated with this key
            }

            
        }
    
        return grouped; // Return the grouped object
    }
    
    const groupedCampaigns = groupCampaigns(campaigns);
    
    console.log({groupedCampaigns});
    

    
    