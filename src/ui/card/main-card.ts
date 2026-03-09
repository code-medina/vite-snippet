import type { Snippet } from "../../models/snippet.model";
import { addHighlight } from "../../utils/highlight";

export function mainSnippet(snippet: Snippet): HTMLElement {
  const main = document.createElement("main");
  const pre = document.createElement("pre");
  const code = document.createElement("code");
  code.dataset.code=snippet.id;
  //style
  pre.classList =
    "bg-slate-900 text-slate-100 text-sm rounded-md p-4 overflow-x-auto";
  code.innerHTML = addHighlight(snippet.code, snippet.language);
  main.classList = "p-4";
  //append
  pre.append(code);
  main.append(pre);
  return main;
}
