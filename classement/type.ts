export interface Input {
  nom: string;
  note: number;
}

export interface Output {
  nom: string;
  note: number;
  rang: number;
}
export enum ORDER {
  "ASC" = "ASC",
  "DESC" = "DESC",
}
