import type { Language } from "../models/language.model";

export interface LanguageRepository{
    listAll():Language[]
}