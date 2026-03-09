import type { Snippet } from "../../models/snippet.model";

function createSpans(snippet: Snippet): DocumentFragment {
  const fragmento = document.createDocumentFragment();
  snippet.tags.forEach((t) => {
    if (t) {
      const span = document.createElement("span");
      span.textContent = t;
      span.classList =
        "text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full font-medium";
      fragmento.append(span);
    }
  });
  return fragmento;
}
function createButtonDelete() {
  const buttonDelete = document.createElement("button");
  //set attribute
  buttonDelete.dataset.action = "delete";
  //text
  buttonDelete.textContent = "delete";

  //style
  buttonDelete.classList =
    "text-xs font-medium bg-red-600 hover:bg-pink-700 text-white px-3 py-1.5 rounded-md transition";


  return buttonDelete;
}

function createButtonCopy() {
  const button = document.createElement("button");
  // set attribute
  button.dataset.action = "copy";
  //text
  button.textContent = "copy";
  //style
  button.classList =
    "text-xs font-medium bg-pink-600 hover:bg-pink-700 text-white px-3 py-1.5 rounded-md transition";

  return button;
}
export function footerSnippet(
  snippet: Snippet
): HTMLElement {

  const footer = document.createElement("footer");
  //buttons copy & delete & span
  const buttonCopy = createButtonCopy();
  const buttonDelete = createButtonDelete();
  const fragmeto = createSpans(snippet);

  //append buttons & spans to container
  footer.append(buttonDelete);
  footer.append(buttonCopy);
  footer.append(fragmeto);

  //style footer
  footer.classList =
    "flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-t border-slate-200 bg-slate-50";

  return footer;
}
