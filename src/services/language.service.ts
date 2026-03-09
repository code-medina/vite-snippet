import type { Language } from "../models/language.model";
import type { LanguageRepository } from "../repositories/language.repository";

export class LanguageService
{
    private readonly repository:LanguageRepository;
    constructor(repository:LanguageRepository)
    {
        this.repository=repository;
    }
    listAllLanguage():Language[]
    {
        return this.repository.listAll()
    }
}