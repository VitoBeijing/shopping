import {
  curry,
  map,
  compose,
  flatten,
  uniqWith,
  isEqual,
  reduce,
} from "lodash/fp";
import { MockData, SpecItem, Product, InventoryList } from "./data";

import {
  getOtherSpec,
  getSpecItems,
  filterCount,
  filterSpecValue,
} from "./fns";

// 实现一个函数，入参为已选择的规格值，返回值为库存数>0的其他规格值。
const getSpecs = curry((i: InventoryList[], specList: string[]) =>
  compose(
    uniqWith(isEqual),
    ...map((specValue: string) => getOtherSpec(specValue))(specList),
    flatten,
    getSpecItems,
    filterCount(0),
    ...map((specValue: string) => filterSpecValue(specValue))(specList)
  )(i)
);

// console.log(getSpecs(MockData)(["白色"]));
// console.log(getSpecs(MockData)(["白色", "256G"]));

// 实现一个函数，入参为已选择的规格值，返回值为库存量。
const getInvCount = curry((i: InventoryList[], specList: string[]) =>
  compose(
    reduce((a: number, b: InventoryList) => a + (b.inventoryCount || 0), 0),
    filterCount(0),
    ...map((specValue: string) => filterSpecValue(specValue))(specList)
  )(i)
);
console.log(getInvCount(MockData)(["白色", "256G"]));
console.log(getInvCount(MockData)(["白色", "256G", "套装"]));
