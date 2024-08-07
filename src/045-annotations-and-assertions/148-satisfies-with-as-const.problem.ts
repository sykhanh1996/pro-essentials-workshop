import { Equal, Expect } from "@total-typescript/helpers";

type Routes = Record<
  string,
  {
    component: string;
  }
>;

const routes = {
  "/": {
    component: "Home",
  },
  "/about": {
    component: "About",
    // @ts-expect-error
    search: "?foo=bar",
  },
} as const satisfies Routes;

// @ts-expect-error
routes["/"].component = "About";

type tests = [
  Expect<Equal<(typeof routes)["/"]["component"], "Home">>,
  Expect<Equal<(typeof routes)["/about"]["component"], "About">>
];
