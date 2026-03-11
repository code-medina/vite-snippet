import { z } from "zod";
import { Language } from "../models/language.model";

export const tagsSchema = z.preprocess(
  (value) => {
    if (typeof value === "string") {
      if (value.trim() === "") return [];
      return value.split(" ");
    }
    return value;
  },
  z.array(z.string()).max(4, "tags not exeed 4 tag"),
);

export const snippetSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(20, "Title must not exceed 20 characters"),
  language: z.enum(Language, "only ollowed language "),
  tags: tagsSchema,
  code: z
    .string()
    .min(3, "Code mut be at least 3 characters long")
    .max(300, "Code must not exceed 300 characters"),
});

export type CreateSnippetDto = z.infer<typeof snippetSchema>;

export const uuidSchema = z.uuid("id invalid");

export const createdAtSchema = z.date();

const ordenFilter = ["asc", "desc"];
const languageWithAll = [...Object.values(Language), "all"];


export const snippetFilterSchema = z.object({
  language: z.enum(languageWithAll, "Language invalid").optional(),
  tags: tagsSchema.optional(),
  orden: z.enum(ordenFilter),
});
export type snippetFiletDto = z.infer<typeof snippetFilterSchema>;
