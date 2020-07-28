import { GeneralWebhookFulfillmentRequest, featureTypeIds } from "@voicify/voicify-sdk-webhooks";

export const returnFollowUpOverrideContent = (req, res) => {
    var voicifyRequest = req.body as GeneralWebhookFulfillmentRequest
    
    //Retrieve slots dictionary
    var slots = voicifyRequest.originalRequest.slots;

    //Get any parameters
    var parameters = voicifyRequest.parameters;

    //Get any sessionAttributes
    var sessionAttributes = voicifyRequest.originalRequest.sessionAttributes;

    //Build voicifyResponse with overrides
    var voicifyResponse = {
        content: "This response is coming from the webhook",
        followUp: {
            content: "This is the dynamic follow up. Say a number to see the new options from this webhook",
            childContentContainer: {
                contentItems: [{
                    id: "d210dfaf-cf92-4900-a653-7ec411518e17",
                    featureTypeId: featureTypeIds.simpleChoice
                },{
                    id: "18101e0a-4575-4a8e-a365-267749ea8afe",
                    featureTypeId: featureTypeIds.simpleChoice
                }]
            }
        }
    };

    res.status(200).send({data: voicifyResponse});
}