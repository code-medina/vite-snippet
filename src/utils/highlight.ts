import hljs  from "highlight.js"
import type { Language } from "../models/language.model";
function escapeHTML(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
export function addHighlight(code:string,language?:Language)
{
    let auto=hljs.highlightAuto(escapeHTML(code)).language??"javascript";
    if(language)auto=language.toLowerCase();
    return hljs.highlight(code,{language:auto}).value;

}