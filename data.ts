/**
 * 商品简略模型
 */
export interface Product {
    id: number // 商品ID*
    title: string // 商品描述
}

/**
 * 规格值子表
 */
  export interface SpecItem<T> {
    specId: '颜色' | '内存'  | '版本' // 规格值/Id. 此题我们可以简单的视为是“颜色”、“内存”、“版本”
    specValue: T | undefined // 对应规格的值*
  }

/**
 * 库存列表的数据
 */
export interface InventoryList {
    productId: number /// 商品Id*
    specItems: SpecItem<string>[] // 库存信息*
    inventoryCount?: number // 库存量*
}

  
export const MockData: InventoryList[] = [
    {
        productId: 1,
        specItems: [
            {
                specId: '颜色',
                specValue: '白色',
            },
            {
                specValue: '128G',
                specId: '内存',
            },
            {
                specId: '版本',
                specValue: '标准版',
            },
        ],
        inventoryCount: 12,
    },
    {
        productId: 1,
        specItems: [
        {
            specId: '颜色',
            specValue: '白色',
        },
        {
            specValue: '256G',
            specId: '内存',
        },
        {
            specId: '版本',
            specValue: '标准版',
        },
        ],
        inventoryCount: 3,
    },
    {
        productId: 1,
        specItems: [
        {
            specId: '颜色',
            specValue: '蓝色',
        },
        {
            specValue: '128G',
            specId: '内存',
        },
        {
            specId: '版本',
            specValue: '标准版',
        },
        ],
        inventoryCount: 2,
    },
    {
        productId: 1,
        specItems: [
        {
            specId: '颜色',
            specValue: '蓝色',
        },
        {
            specValue: '512G',
            specId: '内存',
        },
        {
            specId: '版本',
            specValue: '标准版',
        },
        ],
        inventoryCount: 2,
    },
    {
        productId: 1,
        specItems: [
        {
            specId: '颜色',
            specValue: '黑色',
        },
        {
            specValue: '256G',
            specId: '内存',
        },
        {
            specId: '版本',
            specValue: '标准版',
        },
        ],
        inventoryCount: 33,
    },
    {
        productId: 1,
        specItems: [
        {
            specId: '颜色',
            specValue: '黑色',
        },
        {
            specValue: '512G',
            specId: '内存',
        },
        {
            specId: '版本',
            specValue: '标准版',
        },
        ],
        inventoryCount: 23,
    },
    {
        productId: 1,
        specItems: [
        {
            specId: '颜色',
            specValue: '白色',
        },
        {
            specValue: '256G',
            specId: '内存',
        },
        {
            specId: '版本',
            specValue: '套装',
        },
        ],
        inventoryCount: 10,
    },
    {
        productId: 1,
        specItems: [
        {
            specId: '颜色',
            specValue: '黑色',
        },
        {
            specValue: '128G',
            specId: '内存',
        },
        {
            specId: '版本',
            specValue: '套装',
        },
        ],
        inventoryCount: 10,
    },
    {
        productId: 1,
        specItems: [
        {
            specId: '颜色',
            specValue: '黑色',
        },
        {
            specValue: '512G',
            specId: '内存',
        },
        {
            specId: '版本',
            specValue: '套装',
        },
        ],
        inventoryCount: 6,
    },
]
