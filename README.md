# 🌲 fir

![](https://badgen.net/npm/v/fir?color=grey)
![](https://badgen.net/npm/dt/fir)
![](https://badgen.net/packagephobia/install/fir?color=055ff3)
![](https://badgen.net/badge/code%20style/prettier/ff51bc)

### Install

`npm install fir`

### Example

```js
import fir from "fir";

fir.setOptions({
  appendToFile: "latest.log",
  formatter: (message) => `[test] ${message}`
});

fir.log("Hi there!");
```

The text `[test] Hi there!` will be logged to console and appended to the `latest.log` file.

### Options

| Name           |       Type       | Description                                  |
| :------------- | :--------------: | :------------------------------------------- |
| `wipeOnRun`    |     boolean      | Automatically clear the log file on startup. |
| `appendToFile` |      string      | Path to file in which lines should be saved. |
| `formatter`    | CallableFunction | Return a formatted log line.                 |

### Contribute

Pull requests are encouraged.
