export type IGraphql = {
  currentUser: ICurrentUser;
  contracts: IContracts;
}

export type ICurrentUser = {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  profile: {
    id: string;
    freelancerRate: number;
    annualCompensation: number;
    availabilityType: string[];
    freelancerType: {
      id: string;
      name: string;
    }
    totalExperience: number
    textIntroduction: string;
  };
  userSkills: IUserSkill[];
  timezone: string;
}

export type IContracts = {
  nodes: INode[];
  totalCount: number;
}

export type INode = {
  client: {
    id: string;
    firstName: string;
    firm: {
      name: string;
    }
  }
  job: {
    id: string;
    title: string;
    description: string;
    questions: IQuestion[]
  }
}

export type IQuestion = {
  title: string;
}

export type IUserSkill = {
  experience: number;
  skill: {
    id: string;
    name: string;
  }
}
