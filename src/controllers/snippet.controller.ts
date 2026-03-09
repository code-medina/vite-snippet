import type { Snippet } from "../models/snippet.model";
import type { SnippetService } from "../services/snippet.service";
/* validation */
import { snippetFilterSchema, snippetSchema } from "../schemas/snippet.schema";
/* ui */
import { cardSnippet } from "../ui/card/card-snippet";

export class SnippetController {
  private service: SnippetService;
  private containerCards: HTMLDivElement; //routerOultlet

  constructor(service: SnippetService, containerCards: HTMLDivElement) {
    this.service = service;
    this.containerCards = containerCards;
    this.setupCardContainer();
  }

  //deletegation de event de cards container
  setupCardContainer() {
    this.containerCards.addEventListener("click", (ev: PointerEvent) => {
      const target = ev.target as HTMLElement;
      console.log(target);
      const action = target.dataset.action;
      if (!action) return;

      const card = target.closest("[data-id]") as HTMLElement;
      if (!card) return;

      console.log(card);
      const id = card.dataset.id!;

      console.log(action, id);

      //delete button
      if (action == "delete") {
        card.remove();
        console.log("elemino card id:", id);
        this.service.destroySnippet(id);
        return;
      }
      // copy
      if (action == "copy") {
        const elemento = card.querySelector("pre > code") as HTMLElement;
        console.log("query", elemento);
        if (!elemento || elemento.dataset.code !== id) return;
        target.textContent = "copied";
        navigator.clipboard.writeText(elemento.textContent);
        setTimeout(() => (target.textContent = "copy"), 3000);
        return;
      }
    });
  }

  //controller recibe elementos y setea elementos
  setupFilter(form: HTMLFormElement) {
    if (!form) return;

    form.addEventListener("submit", async (ev: SubmitEvent) => {
      ev.preventDefault();
      console.log(form);
      // Type assertion to access form properties
      const formTarget = ev.target as HTMLFormElement;
      // Access elements using the 'elements' property of the form
      const formData = new FormData(formTarget);

      /* const tagsString = formData.get("filter-tags-txt")?.toString(); */
      const obj = {
        language: formData.get("filter-language-select")?.toString(),
        tags: formData.get("filter-tags-txt")?.toString(),
        orden: formData.get("orden-radio")?.toString(),
      };

      console.log("Form data submitted with data:", formData);
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      const result = snippetFilterSchema.safeParse(obj);
      if (result.success) {
        console.log("validation success", result.data);
        const listFilter = await this.service.listSnippetsFilter(result.data);
        this.setupList(listFilter);
      } else {
        console.log("Failed validation", result.error.message);
      }
    });
  }

  setupErrorCreate(path: string, message: string) {
    type inputs = "title" | "code" | "tags" | "language";
    const input: inputs = path as inputs;
    if (!input) return;
    const diccionario = {
      title: "title-txt-error",
      code: "code-textarea-error",
      tags: "tags-txt-error",
      language: "language-select-error",
    };
    diccionario["title"];
    const inputSelect = diccionario[input];
    if (inputSelect) {
      console.log(inputSelect);
      const p = document.getElementById(inputSelect);
      if (!p) return;
      console.log(p);

      p.textContent = message;
    }
  }
  setupCreate(form: HTMLFormElement) {
    if (!form) return;
    form.addEventListener("submit", async (ev: SubmitEvent) => {
      ev.preventDefault();
      const formTarget = ev.target as HTMLFormElement;
      const formData = new FormData(formTarget);

      const obj = {
        title: formData.get("title-txt")?.toString(),
        code: formData.get("code-textarea")?.toString(),
        language: formData.get("language-select")?.toString(),
        tags: formData.get("tags-txt"),
      };
      const result = snippetSchema.safeParse(obj);
      if (result.success) {
        console.log("validation success", result.data);
        await this.service.createSnippet(result.data);
        await this.setupList();
      } else {
        console.log("validation failed", result.error.message);
        console.log(result.error.issues[0].path);
        console.log(result.error.issues[0].message);
        console.log(result.error.issues[0].path[0].toString());

        this.setupErrorCreate(
          result.error.issues[0].path[0].toString(),
          result.error.issues[0].message,
        );
      }
    });
  }

  /*   async setupDelete(id: string) {
    await this.service.destroySnippet(id);
    await this.setupList();
  }
 */
  async setupList(listFilter?: Snippet[]) {
    const list = listFilter ?? (await this.service.listSnippets());
    /*     while (this.containerCards.firstChild) {
      this.containerCards.removeChild(this.containerCards.firstChild);
    }*/
    this.containerCards.replaceChildren();

    const fragmento = document.createDocumentFragment();
    list.forEach((s) => {
      if (s) {
        /* fragmento.append(cardSnippet(s,this.service.destroySnippet.bind(this.service))); */
        fragmento.append(cardSnippet(s));
      }
    });
    this.containerCards.append(fragmento);
  }
}
