import { Common } from "./rxjs/common/rxjs.common";

const main = async () => {
  Common.subject.subscribe({
    next: function (value) {
      console.log("value", value);
    },
    error: function (error) {
      console.log("error", error);
    },
    complete: function () {
      console.log("Complete");
    },
  });

  setTimeout(() => Common.subject.next("DUCK"), 1000);
  Common.subject.next("FUCK");

  console.log(Common.subject);
};

main();
