import { IPizza } from "./pizza/interfaces/IPizza";
import { simplePizzaMaker } from "./pizza/scenarios/simple.pizza.maker";
import { map } from "rxjs";
simplePizzaMaker
  .pipe(
    map((pizza: IPizza) => {
      pizza.name = pizza.name + " with plugin";
      return pizza;
    })
  )
  .subscribe((pizza: IPizza) => console.log(pizza.name));
