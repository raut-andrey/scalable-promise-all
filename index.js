/**
 * Scalable Promise.all
 *
 * You can mutate array using push, shift, pop or splice
 * @param {Array<Promise>} arr Array of promises
 */
async function scalablePromiseAll(arr) {
  let res = [];

  do {
    res = await Promise.all(arr);
  } while (arr.length !== res.length);

  return res;
};

module.exports = scalablePromiseAll;
