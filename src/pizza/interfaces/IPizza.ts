import { IIngredient } from "./IIngredient";

export interface IPizza {
  id: number;
  name: string;
  ingredients: IIngredient[];
  createdAt: Date;
  startAt: Date;
}
