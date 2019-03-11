# 🌲 fir

![](https://badgen.net/npm/v/@detach/fir?color=grey)
![](https://badgen.net/npm/dw/@detach/fir)
![](https://badgen.net/packagephobia/install/@detach/fir?color=055ff3)
![](https://badgen.net/badge/code%20style/prettier/ff51bc)

> #### Tired of complicated logging? Me too.
>
> For small projects the current popular loggers are absurdley complex and verbose.  
> That's why I made fir. To be _small_ yet **powerful**.

### install

`npm install @detach/fir`

### example

```js
fir.setOptions({
  appendToFile: "latest.log",
  formatter: function(message) {
    return `[myApp] ${message}`;
  }
});

fir.log("Hi there!");
```

The text `Hi there!` will be logged to console and appended to the `latest.log` file.

### options

| Name           |       Type       | Description                                  |
| :------------- | :--------------: | :------------------------------------------- |
| `appendToFile` |      string      | Path to file in which lines should be saved. |
| `formatter`    | CallableFunction | Return a formatted log line.                 |

### contribute

Pull requests are encouraged.
