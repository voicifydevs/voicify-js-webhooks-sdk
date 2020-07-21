﻿import ConversationTurn from "./ConversationTurn";

/**Represents the state of a give conversation */
export default interface ConversationTurnHistoryState {
    id: string; // same as the user id of the native user
    turnHistory: ConversationTurn[];
}
