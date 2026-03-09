/* repositories */
import { LocalStorageLanguage } from './repositories/local-storage-language.repository.ts';
import { LocalStorageSnippet } from './repositories/local-storage.repository.ts';
/* services */
import { LanguageService } from './services/language.service.ts';
import { SnippetService } from './services/snippet.service.ts';

/* controller */
import { LanguageController } from './controllers/language.controller.ts';
import { SnippetController } from './controllers/snippet.controller.ts';

/* syles*/
import './style.css'
//import "highlight.js/styles/github.css"; // el CSS del tema que quieras
import "highlight.js/styles/github-dark.css";
/* elements dom */
const formFilter=document.getElementById("form-filter") as HTMLFormElement;
const formCreate=document.getElementById("form-create") as HTMLFormElement;
const routerOutlet=document.getElementById("cardsContainer") as HTMLDivElement;
const filterSelectLang=document.getElementById("filter-language-select") as HTMLSelectElement;
const createSelectLang=document.getElementById("language-select") as HTMLSelectElement;

/*   add options in selects */
const repositoryLanguage=new LocalStorageLanguage();
const serviceLanguge=new LanguageService(repositoryLanguage);
const constrollerLanguage=new LanguageController(serviceLanguge);
constrollerLanguage.setupLanguageOption(filterSelectLang,true);
constrollerLanguage.setupLanguageOption(createSelectLang);


/* add setup the filter and create form */
const repositorySnippet=new LocalStorageSnippet();
const serviceSnippet=new SnippetService(repositorySnippet);
const controllerSnipper=new SnippetController(serviceSnippet,routerOutlet);
//add list init
controllerSnipper.setupList();

//handler submit event
controllerSnipper.setupFilter(formFilter); 
controllerSnipper.setupCreate(formCreate);


