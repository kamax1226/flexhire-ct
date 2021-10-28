/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type profileQueryVariables = {};
export type profileQueryResponse = {
    readonly currentUser: {
        readonly id: string;
        readonly firstName: string | null;
        readonly lastName: string | null;
        readonly avatarUrl: string | null;
        readonly userSkills: ReadonlyArray<{
            readonly experience: number | null;
            readonly skill: {
                readonly id: string;
                readonly name: string | null;
            } | null;
        }> | null;
        readonly profile: {
            readonly id: string;
            readonly freelancerType: {
                readonly id: string;
                readonly name: string | null;
            } | null;
            readonly totalExperience: number | null;
            readonly textIntroduction: string | null;
        } | null;
        readonly timezone: string | null;
    } | null;
};
export type profileQuery = {
    readonly response: profileQueryResponse;
    readonly variables: profileQueryVariables;
};



/*
query profileQuery {
  currentUser {
    id
    firstName
    lastName
    avatarUrl
    userSkills {
      experience
      skill {
        id
        name
      }
      id
    }
    profile {
      id
      freelancerType {
        id
        name
      }
      totalExperience
      textIntroduction
    }
    timezone
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "experience",
  "storageKey": null
},
v5 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "Skill",
  "kind": "LinkedField",
  "name": "skill",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v7 = {
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
      "concreteType": "FreelancerType",
      "kind": "LinkedField",
      "name": "freelancerType",
      "plural": false,
      "selections": (v5/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalExperience",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "textIntroduction",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "timezone",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "profileQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserSkill",
            "kind": "LinkedField",
            "name": "userSkills",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/),
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "profileQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserSkill",
            "kind": "LinkedField",
            "name": "userSkills",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v6/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/),
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "44656a9b088fde10a15630330a63ffca",
    "id": null,
    "metadata": {},
    "name": "profileQuery",
    "operationKind": "query",
    "text": "query profileQuery {\n  currentUser {\n    id\n    firstName\n    lastName\n    avatarUrl\n    userSkills {\n      experience\n      skill {\n        id\n        name\n      }\n      id\n    }\n    profile {\n      id\n      freelancerType {\n        id\n        name\n      }\n      totalExperience\n      textIntroduction\n    }\n    timezone\n  }\n}\n"
  }
};
})();
(node as any).hash = '990d82556a3ddbc58325974de9ff5ebf';
export default node;
