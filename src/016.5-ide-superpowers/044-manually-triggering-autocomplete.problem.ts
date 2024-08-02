type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  // Autocomplete in here!
  bar: 10,
  baz: true,
  foo: "hello",
});

document.addEventListener(
  // Autocomplete this string!
  "cuechange",
  (event) => {
    console.log(event);
  }
);

