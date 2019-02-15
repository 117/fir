# 🌲 fir

![](https://badgen.net/npm/v/@unsc/fir?color=grey)
![](https://badgen.net/npm/dw/@unsc/fir)
![](https://badgen.net/packagephobia/install/@unsc/fir?color=055ff3)
![](https://badgen.net/badge/code%20style/prettier/ff51bc)

> #### Tired of complicated logging? Me too.
>
> For small projects the current popular loggers are absurdley complex and verbose.  
> That's why I made fir. To be _small_ yet **powerful**.

### install

`npm install --save @unsc/fir`

### usage

Here is an easy to use example. 

```js
import fir from "fir";

fir.save("./info.log");
fir.format((message) => `Example: ${message}`);
fir.log("Hey! Welcome to fir."); 
```

### log

An example using `moment` to format the time.

```js
fir.log("The default format is good.");
// 05:45:35 Fir: The default format is good.
```

### format

If you wish to format log messages:

```js
fir.format((message) => `example: ${message}`);
```

The `callback` will be sent the log message.  
Return your formatted message and it will be applied at runtime.

### save

If you want to save log messages:

```js
fir.save("info.log");
```

### contribute

Pull requests are welcome.
