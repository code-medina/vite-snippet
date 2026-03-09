import  { Language } from "../models/language.model";
import type { LanguageRepository } from "./language.repository";

export class LocalStorageLanguage implements LanguageRepository{
    listAll(): Language[] {
       return Object.values(Language); 
    }

}