import type { Snippet } from "../models/snippet.model";
import type { CreateSnippetDto } from "../schemas/snippet.schema";

export interface SnippetRespository {
  create(data: CreateSnippetDto): Promise<Snippet>;
  listAll(): Promise<Snippet[]>;
  getById(id: string): Promise<Snippet | undefined>;
  destroyById(id: string): Promise<void>;
}
