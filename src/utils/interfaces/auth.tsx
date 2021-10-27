export interface ILogin {
    email: string;
    password: string;
}

export interface IRegister {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export interface IUser {
    id: string;
    email: string;
}

export interface IFilter {
    id: number,
    name: string
}

export interface IDecoded {
    id: string;
    email: string;
    iat: number;
    exp: number;
}

export interface ISelectFilter {
    value: string,
    handleChange: (...args: any[]) => any,
    datas: IFilter[],
}

export interface ICollection {
    id: string,
    name: string
}

export interface ICollections {
    collections: ICollection[]
}
