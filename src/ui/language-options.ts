export function createLangugeOptions(selectContent: HTMLSelectElement,languages:string[]=[]) {
  if (!selectContent) return;

  const fragment = document.createDocumentFragment();

  languages.forEach((l) => {
    const option = document.createElement("option");
    option.value = l;
    option.textContent = l;
    fragment.append(option);
  });
  selectContent.appendChild(fragment);
}
