import { Request, Response } from "express";
import * as Voicify from '@voicify/voicify-sdk-webhooks';
import {GeneralWebhookFulfillmentRequest, GeneralFulfillmentResponse} from "@voicify/voicify-sdk-webhooks";
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