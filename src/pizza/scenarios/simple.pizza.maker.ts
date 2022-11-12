import { Observable } from "rxjs";
import { IPizza } from "../interfaces/IPizza";

export const simplePizzaMaker = new Observable<IPizza>((subscriber) => {
  const pizza: IPizza = {
    id: 1,
    name: "simple pizza",
    ingredients: [],
    startAt: new Date(),
    createdAt: null,
  };

  subscriber.next(pizza);
  subscriber.complete();
});
