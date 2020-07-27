# Introduction 
This project includes models, APIs, and tools for building webhooks and integrations for your Voicify Apps.

# Getting Started

You can install the package from npm:

```
npm i -s @voicify/voicify-sdk-webhooks
```

If you're using TypeScript, all the types are included, so you don't need to install any additional packages.

For example, you can build a node and express app that overrides the response for the conversation item it is attached to:


**app.ts**
```typeScript
// Create Express server
const app = express();

// Express configuration
app.set("port", 4201);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

/**
 * API examples routes.
 */
app.post("/api/example", returnStaticContent);
app.post("/api/follow-up-override", returnFollowUpOverrideContent);
export default app;
```


```typeScript
export const returnStaticContent = (req:Request, res: Response) => {
    var voicifyRequest = req.body as GeneralWebhookFulfillmentRequest
    
    //Retrieve slots dictionary
    var slots = voicifyRequest.originalRequest.slots;

    //Get any parameters
    var parameters = voicifyRequest.parameters;

    //Get any sessionAttributes
    var sessionAttributes = voicifyRequest.originalRequest.sessionAttributes;

    //Build voicifyResponse with overrides
    var voicifyResponse = {
        data: {
            content: "This is your content override from your webhook"
        }
    } as GeneralFulfillmentResponse;


    res.status(200).send(voicifyResponse);
}
export const returnFollowUpOverrideContent = (req, res) => {
    var voicifyRequest = req.body as GeneralWebhookFulfillmentRequest
    
    //Build voicifyResponse with overrides
    var voicifyResponse = {
        content: "This response is coming from the webhook",
        followUp: {
            content: "This is the dynamic follow up. Say a number to see the new options from this webhook",
            childContentContainer: {
                contentItems: [{
                    id: "d210dfaf-cf92-4900-a653-7ec411518e17", // id of the item
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
```

Voicify Partners and Customers can also check out the extended documentation and details at https://support.voicify.com

# Contributing

The Voicify core development team owns this repo and NuGet package, but all Voicify developers are welcome to contribute changes. Before contributing, please create an issue that you can track your PRs against and be sure there is not already a PR open for it.
