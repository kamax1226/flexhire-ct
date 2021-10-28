/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UserRole = "admin" | "client" | "customer_success_rep" | "member" | "recruiter" | "sales" | "screening" | "%future added value";
export type dashboardQueryVariables = {};
export type dashboardQueryResponse = {
    readonly currentUser: {
        readonly firstName: string | null;
        readonly lastName: string | null;
        readonly email: string | null;
        readonly unconfirmedEmail: string | null;
        readonly phone: string | null;
        readonly avatarUrl: string | null;
        readonly roles: ReadonlyArray<UserRole>;
        readonly teamInvitationMessage: string | null;
        readonly sendTimesheetReminders: boolean | null;
        readonly profile: {
            readonly visibility: string | null;
            readonly id: string;
        } | null;
        readonly id: string;
    } | null;
};
export type dashboardQuery = {
    readonly response: dashboardQueryResponse;
    readonly variables: dashboardQueryVariables;
};



/*
query dashboardQuery {
  currentUser {
    firstName
    lastName
    email
    unconfirmedEmail
    phone
    avatarUrl
    roles
    teamInvitationMessage
    sendTimesheetReminders
    profile {
      visibility
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "currentUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "unconfirmedEmail",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "phone",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "avatarUrl",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "roles",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "teamInvitationMessage",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sendTimesheetReminders",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Profile",
        "kind": "LinkedField",
        "name": "profile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "visibility",
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      (v0/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "dashboardQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "dashboardQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e9337ec5e600fec83eff84cf26198f0b",
    "id": null,
    "metadata": {},
    "name": "dashboardQuery",
    "operationKind": "query",
    "text": "query dashboardQuery {\n  currentUser {\n    firstName\n    lastName\n    email\n    unconfirmedEmail\n    phone\n    avatarUrl\n    roles\n    teamInvitationMessage\n    sendTimesheetReminders\n    profile {\n      visibility\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '37c75493e9f84a9d65480318f33de557';
export default node;
