# scalable-promise-all
Mutable version of the `Promise.all`. You can mutate the provided array on the fly using this package. Use `push`, `pop`, `shift` or `splice` to mutate array of Promises.

## Installing
Using npm:
```shell
$ npm install scalable-promise-all
```

Using yarn:
```shell
$ yarn add scalable-promise-all
```

## Example
```js
import scalablePromiseAll from "scalable-promise-all";

const foo = async () => {
  await scalablePromiseAll(someArray);

  // Some code mutating someArray.
  // scalablePromiseAll function will wait for the end of all promises.
};

foo();

```

## License
ISC