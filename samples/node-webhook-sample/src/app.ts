import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import lusca from "lusca";

// Controllers (route handlers)
import {returnStaticContent} from "./controllers/exampleWebhookController";
import { returnFollowUpOverrideContent } from "./controllers/exampleFollowUpOverrideController";

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