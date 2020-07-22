import {ChildTurn} from "./ChildTurn";

/**Represents the state of a single turn in conversation */
export interface ConversationTurn {
    contentId: string;
    featureTypeId: string;
    applicationId: string;
    followUpId: string;
    helpMessageId: string;
    fallbackMessageId: string;
    childTurns: ChildTurn[];
    isLimitedToChildren: boolean;
    requestDate: Date | string;
}

