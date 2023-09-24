import { useParam } from "@blitzjs/next";
import classNames from "classnames";

export const useStringParam = (name: string) => useParam(name, "string");

export function classNamesTyped<T>(input: T) {
  const classNamesObj: Record<string, boolean> = {};
  for (const key in input) {
    if (Object.prototype.hasOwnProperty.call(input, key)) {
      classNamesObj[key as string] = input[key as any];
    }
  }
  return classNames(classNamesObj);
}
