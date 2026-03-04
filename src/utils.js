export const createId = (() => {
  let id = 0n;
  return () => {
    const result = id.toString();
    id = id + 1n;
    return result;
  }
})();
