
export const Language={
    Javascript:"Javascript",
    Typescript:"Typescript",
    HTML:"HTML",
    CSS:"CSS",  
} as const;
export type Language=typeof Language[keyof typeof Language];