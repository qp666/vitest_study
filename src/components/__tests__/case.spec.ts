import { describe, it, expect } from 'vitest'

export const floor = (value: number) => {
  return Math.floor(value)
}
export const ceil = (value: number) => {
  return Math.ceil(value)
}

describe('测试 util ', () => {
  it('test floor11 ', () => {
    expect(floor(3.25)).toBe(3)
  })
})
describe('测试 util ', () => {
  //todo 跟 skip跳过测试案例
  it.todo('test todo ', () => {
    expect(ceil(3.25)).toBe(100)
  })
  it.skip('test skip ', () => {
    expect(ceil(3.25)).toBe(100)
  })
})

// 模拟的前端组件
class MyComponent {
  data: number[]
  constructor() {
    this.data = []
  }

  fetchData() {
    // 模拟异步数据获取
    return new Promise((resolve) => {
      setTimeout(() => {
        this.data = [1, 2, 3]
        resolve('success')
      }, 1000)
    })
  }
}

// describe('测试  component', () => {
//   test('fetchData 方法应正确获取数据', async () => {
//     const component1 = new MyComponent()
//     await component1.fetchData()
//     // 断言数据是否符合预期
//     expect(component1.data).toEqual([1, 2, 3])
//   })

//   test('data 数组应为空数组', () => {
//     // 断言数据是否为空数组
//     const component2 = new MyComponent()
//     expect(component2.data).toEqual([])
//   })
// })

describe('测试  component', () => {
  let component: MyComponent

  // 在每个测试之前执行的准备工作
  beforeEach(() => {
    // 创建一个新的组件实例
    component = new MyComponent()
  })
  test('fetchData 方法应正确获取数据', async () => {
    await component.fetchData()
    // 断言数据是否符合预期
    expect(component.data).toEqual([1, 2, 3])
  })

  test('data 数组应为空数组', () => {
    // 断言数据是否为空数组
    expect(component.data).toEqual([])
  })
})
