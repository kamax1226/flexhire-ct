/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type dashboardQueryVariables = {};
export type dashboardQueryResponse = {
    readonly currentUser: {
        readonly id: string;
        readonly firstName: string | null;
        readonly lastName: string | null;
        readonly avatarUrl: string | null;
        readonly profile: {
            readonly id: string;
            readonly freelancerRate: unknown | null;
            readonly annualCompensation: unknown | null;
            readonly availabilityType: ReadonlyArray<string> | null;
            readonly freelancerType: {
                readonly id: string;
                readonly name: string | null;
            } | null;
            readonly totalExperience: number | null;
            readonly textIntroduction: string | null;
        } | null;
        readonly userSkills: ReadonlyArray<{
            readonly experience: number | null;
            readonly skill: {
                readonly id: string;
                readonly name: string | null;
            } | null;
        }> | null;
        readonly timezone: string | null;
    } | null;
    readonly contracts: {
        readonly nodes: ReadonlyArray<{
            readonly client: {
                readonly id: string;
                readonly firstName: string | null;
                readonly firm: {
                    readonly name: string | null;
                } | null;
            } | null;
            readonly job: {
                readonly id: string;
                readonly title: string;
                readonly description: string | null;
                readonly questions: ReadonlyArray<{
                    readonly title: string | null;
                }> | null;
            } | null;
        } | null> | null;
        readonly totalCount: number | null;
    };
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
    avatarUrl
    profile {
      id
      freelancerRate
      annualCompensation
      availabilityType
      freelancerType {
        id
        name
      }
      totalExperience
      textIntroduction
    }
    userSkills {
      experience
      skill {
        id
        name
      }
      id
    }
    timezone
  }
  contracts {
    nodes {
      client {
        id
        firstName
        firm {
          name
          id
        }
      }
      job {
        id
        title
        description
        questions {
          title
          id
        }
      }
      id
    }
    totalCount
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
  "name": "name",
  "storageKey": null
},
v5 = [
  (v0/*: any*/),
  (v4/*: any*/)
],
v6 = {
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
      "name": "availabilityType",
      "storageKey": null
    },
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
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "experience",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "Skill",
  "kind": "LinkedField",
  "name": "skill",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "timezone",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "dashboardQuery",
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
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserSkill",
            "kind": "LinkedField",
            "name": "userSkills",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/)
            ],
            "storageKey": null
          },
          (v9/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ContractConnection",
        "kind": "LinkedField",
        "name": "contracts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Contract",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "client",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Firm",
                    "kind": "LinkedField",
                    "name": "firm",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Job",
                "kind": "LinkedField",
                "name": "job",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questions",
                    "plural": true,
                    "selections": [
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v12/*: any*/)
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
    "name": "dashboardQuery",
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
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserSkill",
            "kind": "LinkedField",
            "name": "userSkills",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          (v9/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ContractConnection",
        "kind": "LinkedField",
        "name": "contracts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Contract",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "client",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Firm",
                    "kind": "LinkedField",
                    "name": "firm",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v0/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Job",
                "kind": "LinkedField",
                "name": "job",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questions",
                    "plural": true,
                    "selections": [
                      (v10/*: any*/),
                      (v0/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          (v12/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d4eb7de4204b24a8144a8ca81ccfd480",
    "id": null,
    "metadata": {},
    "name": "dashboardQuery",
    "operationKind": "query",
    "text": "query dashboardQuery {\n  currentUser {\n    id\n    firstName\n    lastName\n    avatarUrl\n    profile {\n      id\n      freelancerRate\n      annualCompensation\n      availabilityType\n      freelancerType {\n        id\n        name\n      }\n      totalExperience\n      textIntroduction\n    }\n    userSkills {\n      experience\n      skill {\n        id\n        name\n      }\n      id\n    }\n    timezone\n  }\n  contracts {\n    nodes {\n      client {\n        id\n        firstName\n        firm {\n          name\n          id\n        }\n      }\n      job {\n        id\n        title\n        description\n        questions {\n          title\n          id\n        }\n      }\n      id\n    }\n    totalCount\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ebfdc52cda5b25e0ce71acfa96682b27';
export default node;
