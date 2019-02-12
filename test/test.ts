import ava from "ava";
import fir from "../src";
import { Level } from "../src";

ava("create format", async function(test) {
  fir.format(Level.ALL, (level, message) => `${level}: ${message}`);
  test.pass();
});

ava("create logger", async function(test) {
  fir.save(Level.ALL, "./example.log", false);
  test.pass();
});

ava("log", async function(test) {
  fir.log(Level.ALL, "test");
  test.pass();
});
