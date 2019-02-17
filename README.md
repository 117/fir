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

### log

An example using the default format.

```js
fir.log("Hey welcome to Fir.");
// Fir: Hey welcome to Fir.
```

### format

If you wish to format log messages:

```js
fir.format(message => `example: ${message}`);
```

The `callback` will be sent the log message.  
Return your formatted message and it will be applied at runtime.

### save

If you want to save log messages:

```js
fir.save("latest.log");
```

### contribute

Pull requests are encouraged.
