/**
 * How do we annotate the errors this function throws?
 */

import { P } from "vitest/dist/reporters-BU_vXAUX.js";

type PossibleErrors = SyntaxError | DOMException;

const getUserFromLocalStorage = (id: string) => {
  const user = localStorage.getItem(id);
  if (!user) {
    throw new SyntaxError("User not found");
  }

  try {
    return JSON.parse(user);
  } catch (error) {
    throw new DOMException("Error parsing user");
  }
};

try {
  const user = getUserFromLocalStorage("user-1");
} catch (
  // How do we make this typed as PossibleErrors?
  e
) {}
