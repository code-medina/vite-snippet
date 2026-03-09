import type { Snippet } from "../../models/snippet.model";

export function headerSnippet(snippet: Snippet): HTMLElement {
  const header = document.createElement("header");
  const p = document.createElement("p");
  const h4 = document.createElement("h4");

  //content
  p.textContent = new Date(snippet.createdAt).toLocaleDateString();
  h4.textContent = snippet.title;

  //style
  header.classList =
    "bg-slate-50 border-b border-slate-200 px-4 py-2 flex justify-between items-center";
  h4.classList = "text-sm font-semibold text-slate-800";
  p.classList = "text-xs text-slate-500";
  
  //append
  header.append(h4);
  header.append(p);
  return header;
}
