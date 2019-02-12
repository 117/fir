# 🌲 fir

![](https://badgen.net/codeclimate/loc/117/fir?color=055ff3)
![](https://badgen.net/badge/code%20style/prettier/ff51bc)

> #### Tired of complicated logging? Me too.
>
> For small projects, the current popular loggers are absurdley complex and verbose.  
> That's why I made Fir. To be *simple* yet **powerful**.

### install

`npm install --save 117/fir`

### import

```js
import fir from "fir";
```

### logging

```js
fir.log(Level.INFO, "Hey! Welcome to fir.");
```

Want to log asynchronously? No problem, just use `fir.logAsync(...)`.

### formatting

```js
fir.format(Level.INFO, (level, message) => message);
```

### saving to files

```js
fir.save(Level.ERROR, "./error.log");
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
