import { SpecItem, InventoryList } from "./data";
import { map, filter, some } from "lodash/fp";

export const filterCount = (count: number) => {
  return filter((i: InventoryList) => {
    return i.inventoryCount! > count;
  });
};

export const someSpec = (specValue: string, flag: boolean = true) => {
  return some((s: SpecItem<string>) =>
    flag ? s.specValue === specValue : s.specValue !== specValue
  );
};

export const filterSpecValue = (specValue: string) => {
  return filter((i: InventoryList) => {
    return someSpec(specValue)(i.specItems);
  });
};

export const getSpecItems = map((i: InventoryList) => i.specItems);

export const getOtherSpec = (specValue: string) => {
  return filter((i: SpecItem<string>) => {
    return i.specValue !== specValue;
  });
};
