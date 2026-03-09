
import type { Snippet } from "../models/snippet.model";
import type { CreateSnippetDto } from "../schemas/snippet.schema";
import type { SnippetRespository } from "./snippet.repository";
import { v4 as uuidv4 } from 'uuid';
 

export class LocalStorageSnippet implements SnippetRespository{
    private keyLocalStorage="snippets";

    private read():Snippet[]
    {
        const dataJson=localStorage.getItem(this.keyLocalStorage);
        return dataJson?JSON.parse(dataJson):[];        
    }
    private save(snippets:Snippet[])
    {
        localStorage.setItem(this.keyLocalStorage,JSON.stringify(snippets));

    }
    private writeOne(snippet:Snippet)
    {
        const snippets=this.read();
        snippets.push(snippet);

       this.save(snippets);

    }
    async create(data:CreateSnippetDto): Promise<Snippet> {

        const createdAt=new Date();
        const uuid = uuidv4();

        const newSnippet:Snippet={
          ...data,id:uuid,createdAt
        };

        this.writeOne(newSnippet);

        return  newSnippet;
    }
    async listAll(): Promise<Snippet[]> {
        return this.read();
    }
    async getById(id: string): Promise<Snippet | undefined> {
     return this.read().find(s=>s.id===id);   
    }
    async destroyById(id: string):Promise< void> {
        const list=this.read();
        const listFilter=list.filter(s=>s.id!==id);
        if(JSON.stringify(list)===JSON.stringify(listFilter)) return;
        
        this.save(listFilter);
    }
}