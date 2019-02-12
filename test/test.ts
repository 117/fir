import ava from "ava";
import fir from "../src";
import level from "../src/level";

ava("create format", async function(test) {
  fir.format(level.ALL, (level, message) => `${level}: ${message}`);
  test.pass();
});

ava("create logger", async function(test) {
  fir.save(level.ALL, "./example.log", false);
  test.pass();
});

ava("log", async function(test) {
  fir.log(level.ALL, "test");
  test.pass();
});
