
import type { LanguageService } from "../services/language.service";
import { createLangugeOptions } from "../ui/language-options";

export class LanguageController {
  private service:LanguageService;
  constructor(service:LanguageService) {
    this.service=service;
  }
  setupLanguageOption(element: HTMLSelectElement, all: boolean = false) {
    /*     const languages = this.service.listAllLanguage(); */
    let languages=this.service.listAllLanguage();
    const lista:string[]=[...Object.values(languages)];
    if (all) {
      lista.unshift("all");
    }
    
    createLangugeOptions(element,lista); // create language option
  }
}
