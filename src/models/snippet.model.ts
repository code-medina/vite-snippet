import type { Language } from "./language.model";

export interface Snippet{
    id:string,
    title:string,
    code:string,
    language:Language,
    tags:string[],
    createdAt:Date

}



