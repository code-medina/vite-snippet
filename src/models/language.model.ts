
export const Language={
    Javascript:"Javascript",
    Typescript:"TYpescript",
    HTML:"HTML",
    CSS:"CSS",  
} as const;
export type Language=typeof Language[keyof typeof Language];