/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type jobsQueryVariables = {};
export type jobsQueryResponse = {
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
export type jobsQuery = {
    readonly response: jobsQueryResponse;
    readonly variables: jobsQueryVariables;
};



/*
query jobsQuery {
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
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v5 = {
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
    "name": "jobsQuery",
    "selections": [
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
                      (v2/*: any*/)
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
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questions",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v5/*: any*/)
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
    "name": "jobsQuery",
    "selections": [
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
                      (v2/*: any*/),
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
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Question",
                    "kind": "LinkedField",
                    "name": "questions",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
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
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7437c81f49521460dc8b33c1ace76955",
    "id": null,
    "metadata": {},
    "name": "jobsQuery",
    "operationKind": "query",
    "text": "query jobsQuery {\n  contracts {\n    nodes {\n      client {\n        id\n        firstName\n        firm {\n          name\n          id\n        }\n      }\n      job {\n        id\n        title\n        description\n        questions {\n          title\n          id\n        }\n      }\n      id\n    }\n    totalCount\n  }\n}\n"
  }
};
})();
(node as any).hash = '9260255cc0543e2831daa22fabeb3499';
export default node;
