import ava from "ava";
import fir from "../src";

ava("create format", async function(test) {
  fir.format(message => message);
  test.pass();
});

ava("create logger", async function(test) {
  fir.save("./example.log");
  test.pass();
});

ava("log", async function(test) {
  fir.log("test");
  test.pass();
});
