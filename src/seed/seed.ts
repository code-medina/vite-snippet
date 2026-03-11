import { LocalStorageSnippet } from "../repositories/local-storage.repository";
import { snippetSeeds } from "./snippets.seed";
export function seedSnippets() {
  const repository = new LocalStorageSnippet();
  repository.listAll().then((lista) => {
    if (lista.length === 0) snippetSeeds.forEach((s) => repository.create(s));
  });
}
