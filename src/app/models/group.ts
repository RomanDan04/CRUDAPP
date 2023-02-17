import { Ifunction } from "./function";
import { Iuser } from "./user";

export interface Igroup{
    functions: Ifunction[],
    groupName: string,
    id: number,
    minValue: string,
    maxValue: string,
    users: Iuser[],
    warning?: string
}