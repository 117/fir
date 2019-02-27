# 🌲 fir

![](https://badgen.net/badgesize/gzip/https://github.com/117/fir/archive/master.zip?label=repo%20size&color=055ff3)
![](https://badgen.net/badge/code%20style/prettier/ff51bc)

> #### Tired of complicated logging? Me too.
>
> For small projects the current popular loggers are absurdley complex and verbose.  
> That's why I made fir. To be _small_ yet **powerful**.

### install

`npm install --save 117/fir`

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
