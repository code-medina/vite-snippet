//type
import type { Snippet } from "../../models/snippet.model";
//ui
import { footerSnippet } from "./footer-card";
import { mainSnippet } from "./main-card";
import { headerSnippet } from "./header-card";

export function cardSnippet(
  snippet: Snippet,
): HTMLDivElement {
  /*   card */
  const div = document.createElement("div");
  //set attribute
  div.dataset.id=snippet.id;
  //style
  div.classList =
    "group border border-slate-200 rounded-xl w-full bg-white shadow-sm hover:shadow-md transition overflow-hidden";

  /* header */
  const header = headerSnippet(snippet);
  /*  main */
  const main = mainSnippet(snippet);
  /* footer */
  const footer = footerSnippet(snippet);

  div.append(header);
  div.append(main);
  div.append(footer);

  return div;
}
