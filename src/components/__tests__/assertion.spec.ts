import { describe, it, expect } from 'vitest'
// 断言常用方法
//toBe 可用于断言基元是否相等或对象共享相同的引用 , toBe 跟 not.toBe 就可以一把梭了

it('test toBe ', () => {
  const stock = {
    type: 'apples',
    count: 13,
  }

  expect(stock.type).toBe('apples')
  expect(stock.count).toBe(13)
  const refStock = stock
  expect(stock).toBe(refStock)
})

//not 将否定该断言
it('test not toBe ', () => {
  expect(1).not.toBe(2)
})

/* 
toBeGreaterThan 大于预期结果 >
toBeLessThan 小于预期结果 <
toBeGreaterThanOrEqual 大于等于预期结果 >=
toBeLessThanOrEqual 小于等于预期结果 <=
*/
it('test 数字 ', () => {
  expect(10 + 10).toBe(20)
  // not
  expect(10 + 10).not.toBe(30)
  // >
  expect(3).toBeGreaterThan(2)
  // <
  expect(3).toBeLessThan(4)
  expect(3 < 4).toBe(true)

  // >=
  expect(3).toBeGreaterThanOrEqual(3)
  expect(3).toBeGreaterThanOrEqual(2)
  expect(3 >= 3).toBe(true)
  expect(3 >= 2).toBe(true)
  // <=
  expect(3).toBeLessThanOrEqual(3)
  expect(3).toBeLessThanOrEqual(4)
  expect(3 <= 3).toBe(true)
  expect(3 <= 4).toBe(true)
})

//浮点数 toBeCloseTo
it.fails('test toBeCloseTo', () => {
  expect(0.2 + 0.1).toBe(0.3) // 0.2 + 0.1 is 0.30000000000000004
})
it('test toBeCloseTo', () => {
  expect(0.2 + 0.1).not.toBe(0.3) // 0.2 + 0.1 is 0.30000000000000004
  expect(0.2 + 0.1).toBeCloseTo(0.3)
})

/* 
toBeDefined 断言值不等于 undefined
toBeUndefined 断言值 is 等于 undefined
*/

it('test undefined', () => {
  // undefined
  expect(undefined).toBe(undefined) // toBe 替代方式
  expect(undefined).not.toBeDefined()
  expect(undefined).toBeUndefined()
  expect('').toBeDefined()
})

/* 
toBeTruthy、toBeFalsy
toBeTruthy断言值在转换为布尔值时为 true。如果你不关心值，只想知道它可以转换为true，也就是我们所说的真值，例如1、{}，而不仅仅是 true
*/

it('test Boolean ', () => {
  // boolean true
  expect(!!2).toBe(true) // toBe 替代方式
  expect(true).toBeTruthy()
  expect(1).toBeTruthy()
  expect({}).toBeTruthy()
  expect([]).toBeTruthy()

  // boolean false
  expect(!!'').toBe(false) // toBe 替代方式
  expect(0).toBeFalsy()
  expect('').toBeFalsy()
  expect(null).toBeFalsy()
  expect(undefined).toBeFalsy()
  expect(NaN).toBeFalsy()
  expect(false).toBeFalsy()
})

// toBeNull 断言某些内容是否为 null
it('test null', () => {
  expect(null === null).toBe(true) // toBe 替代方式
  expect(null).toBeNull()
})

// toEqual、toStrictEqual
//toEqual 断言实际值是否等于接收到的值，或者如果它是一个对象，则是否具有相同的结构（递归比较它们）。如果对象某个属性是 undefined 时，会自动忽略该属性
it('test toEqual', () => {
  const stockBill = {
    type: 'apples',
    count: 13,
  }
  const stockMary = {
    type: 'apples',
    count: 13,
  }
  const stockBill2 = {
    type: 'apples',
    count: 13,
    name: undefined,
  }
  const stockMary2 = {
    type: 'apples',
    count: 13,
  }
  expect(stockBill).toEqual(stockMary)
  expect(stockBill).not.toBe(stockMary)

  expect(stockBill2).toEqual(stockMary2)
  expect(stockBill2).not.toBe(stockMary2)
})

/* 
toStrictEqual  与 .toEqual 的区别：
检查具有 undefined 属性的键。 例如 使用 .toStrictEqual 时， {a: undefined, b: 2} 与 {b: 2} 不匹配。
检查数组稀疏性。 例如 使用 .toStrictEqual 时， [, 1] 与 [undefined, 1] 不匹配。
检查对象类型是否相等。 例如 具有字段 a 和 b 的类实例不等于具有字段 a 和 b 的文字对象
*/
it('test toStrictEqual', () => {
  const stockBill = {
    type: 'apples',
    count: 13,
    name: undefined,
  }
  const stockMary = {
    type: 'apples',
    count: 13,
  }
  class Stock {
    type: any
    constructor(type: any) {
      this.type = type
    }
  }
  expect(stockBill).not.toStrictEqual(stockMary)
  expect([1]).not.toStrictEqual([undefined, 1])
  expect(new Stock('apples')).not.toStrictEqual({ type: 'apples' })
})

/* toContain 断言实际值是否在数组中。toContain 还可以检查一个字符串是否是另一个字符串的子串，此断言还可以检查类是否包含在 classList 中，或一个元素是否包含在另一个元素中 */
it('test toContain', () => {
  expect(['apple', 'orange']).toContain('orange')
  expect('123abc123').toContain('123abc')
  // const element = document.querySelector('#el')
  // expect(document.querySelector('#wrapper')).toContain(element)
})

/* toHaveProperty 断言对象是否具有提供的引用 key 处的属性。 */
it('test toHaveProperty', () => {
  expect({ name: 'xxx', age: 10 }).toHaveProperty('name')
})

/* toMatchObject 断言对象是否匹配另一个对象的部分属性。类似之前数组的toContain，对象会从最外层开始比较，如果最外层就找不到，就会直接失败 */
it('test toMatchObject', () => {
  expect([{ foo: 'bar' }, { baz: 1 }]).toMatchObject([{ foo: 'bar' }, { baz: 1 }])
  expect({ obj: { name: 'xxx' }, height: 10 }).toMatchObject({ height: 10 })
  expect({ obj: { name: 'xxx' }, height: 10 }).not.toMatchObject({ name: 'xxx' })
})

/* Error 断言
捕获错误的一个断言方法，例如在一些抛出错误，表单检验、数据格式错误、try...catch 等场景下会用到 */
it('test Error ', () => {
  expect(() => {
    JSON.parse('{')
  }).toThrow()
})

/* toMatchInlineSnapshot
toMatchInlineSnapshot 用于行内快照断言，它适合小范围,少量的数据结构存储 */
it('test toMatchInlineSnapshot', () => {
  const data = { foo: new Set(['bar', 'snapshot']) }
  expect(data).toMatchInlineSnapshot(`
    {
      "foo": Set {
        "bar",
        "snapshot",
      },
    }
  `)
  expect(22).toMatchInlineSnapshot('22')
  expect(true).toMatchInlineSnapshot('true')
  expect([1, 2, 3]).toMatchInlineSnapshot([1, 2, 3])
})
it.skip('test toMatchInlineSnapshot', () => {
  expect({ name: 'xxx' }).toMatchInlineSnapshot(
    { name: 'xxx' }, `
    [
      1,
      2,
      3,
    ]
  `)
})
