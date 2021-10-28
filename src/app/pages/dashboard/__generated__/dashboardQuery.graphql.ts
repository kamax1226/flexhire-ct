/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UserRole = "admin" | "client" | "customer_success_rep" | "member" | "recruiter" | "sales" | "screening" | "%future added value";
export type dashboardQueryVariables = {};
export type dashboardQueryResponse = {
    readonly currentUser: {
        readonly id: string;
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
            readonly id: string;
            readonly freelancerRate: unknown | null;
            readonly annualCompensation: unknown | null;
            readonly availability: string | null;
            readonly availabilityType: ReadonlyArray<string> | null;
        } | null;
    } | null;
};
export type dashboardQuery = {
    readonly response: dashboardQueryResponse;
    readonly variables: dashboardQueryVariables;
};



/*
query dashboardQuery {
  currentUser {
    id
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
      id
      freelancerRate
      annualCompensation
      availability
      availabilityType
    }
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
      (v0/*: any*/),
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
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "freelancerRate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "annualCompensation",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "availability",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "availabilityType",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
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
    "cacheID": "0e4f6bf8fd2c83a0432a6a0c1a560df4",
    "id": null,
    "metadata": {},
    "name": "dashboardQuery",
    "operationKind": "query",
    "text": "query dashboardQuery {\n  currentUser {\n    id\n    firstName\n    lastName\n    email\n    unconfirmedEmail\n    phone\n    avatarUrl\n    roles\n    teamInvitationMessage\n    sendTimesheetReminders\n    profile {\n      id\n      freelancerRate\n      annualCompensation\n      availability\n      availabilityType\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '37c26677860f2c6acfc17ae898291dcd';
export default node;
