# 🌲 fir

![](https://badgen.net/codeclimate/loc/117/fir?color=055ff3)
![](https://badgen.net/badge/code%20style/prettier/ff51bc)

> #### Tired of complicated logging? Me too.
>
> For small projects, the current popular loggers are absurdley complex and verbose.  
> That's why I made Fir. To be *simple* yet **powerful**.

### install

`npm install --save 117/fir`

### example

All customization is on a per-level basis.  
To catch all levels use `Level.ALL`.

```js
import fir from "fir";

// In this example only the error level will be logged to a file.
fir.save(Level.ERROR, "./error.log");

// The format callback should return your formatted message.
fir.format(Level.ALL, (level, message) =>`${level}: ${message}`);

// Now we can easily log our new format.
fir.log(Level.INFO, "Hey! Welcome to fir.");
fir.log(Level.DEBUG, "This debug message won't be saved.");
fir.log(Level.ERROR, "But this error will.");
```

### levels

There are four types of levels available.  

```js
Level.INFO
Level.DEBUG
Level.WARN
Level.ERROR
```
Or if you wish to use a catch-all.

```js
Level.ALL
```

### contribute

Pull requests are welcome. So are collaborators! 🥳
