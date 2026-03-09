import type { Snippet } from "../models/snippet.model";
import type { SnippetRespository } from "../repositories/snippet.repository";
import type {
  CreateSnippetDto,
  snippetFiletDto,
} from "../schemas/snippet.schema";

export class SnippetService {
  private repository: SnippetRespository;
  constructor(repository: SnippetRespository) {
    this.repository = repository;
  }

  async createSnippet(data: CreateSnippetDto) {
    return await this.repository.create(data);
  }
  async listSnippets() {
    let list = await this.repository.listAll();
    return [...list];
  }
  async destroySnippet(id: string) {
    this.repository.destroyById(id);
  }
  async listSnippetsFilter(snippetFilterSchema: snippetFiletDto) {
    let { language = "all", tags = [], orden } = snippetFilterSchema;
    let listAll: Snippet[] = await this.listSnippets();
    /*  if (!language) language = "all";
    if (!tags) tags = []; */

    if (language !== "all") {
      listAll = listAll.filter((s) => s.language == language);
    }
    if (tags.length > 0) {
      listAll = listAll.filter((s) => {
        return s.tags.some((tagObjet) =>
          tags.some((tagFilter) => tagFilter === tagObjet),
        );
      });
    }
    listAll.sort((a, b) => {
      console.log("typeof createdAt", typeof a.createdAt);
      console.log(a.createdAt);
      const fechaA = new Date(a.createdAt).getTime();
      console.log(fechaA);

      const fechaB = new Date(b.createdAt).getTime();
      let dif = fechaA - fechaB;
      return orden == "asc" ? dif : -dif; //calculo la diferencia y si es descendente la invierto
      /* return orden==="asc"?fechaA-fechaB:fechaB- fechaA; */
    });
    return [...listAll];
  }
}
