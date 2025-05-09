import { describe, it, expect } from 'vitest'

/* 
beforeAll 注册一个回调函数，在开始运行当前上下文中的所有测试之前调用一次。 如果函数返回一个 Promise ，Vitest 会等待承诺解析后再运行测试。

beforeEach 注册一个回调函数，在当前上下文中的每个测试运行前调用。 如果函数返回一个 Promise ，Vitest 会等待承诺解析后再运行测试。

afterEach 注册一个回调函数，在当前上下文中的每个测试完成后调用。 如果函数返回一个承诺，Vitest 会等待承诺解析后再继续。

aftereAll 注册一个回调函数，以便在当前上下文中所有测试运行完毕后调用一次。 如果函数返回一个 Promise ，Vitest 会等待承诺解析后再继续
 */

beforeAll(() => console.log('Global - beforeAll'))
afterAll(() => console.log('Global - afterAll'))
beforeEach(() => console.log('Global - beforeEach'))
afterEach(() => console.log('Global - afterEach'))

describe('Scoped A', () => {
  beforeAll(() => {
    console.log('Scoped A - beforeAll')
  })
  beforeEach(() => {
    console.log('Scoped A - beforeEach')
  })
  afterAll(() => {
    console.log('Scoped A - afterAll')
  })
  afterEach(() => {
    console.log('Scoped A - afterEach')
  })
  it('Scoped A case 1', () => {
    console.log('Scoped A case 1')
  })
  it('Scoped A case 2', () => {
    console.log('Scoped A case 2')
  })
})
describe('Scoped B', () => {
  beforeAll(() => {
    console.log('Scoped B - beforeAll')
  })
  beforeEach(() => {
    console.log('Scoped B - beforeEach')
  })
  afterAll(() => {
    console.log('Scoped B - afterAll')
  })
  afterEach(() => {
    console.log('Scoped B - afterEach')
  })
  it('Scoped B case 1', () => {
    console.log('Scoped B case 1')
  })
  it('Scoped B case 2', () => {
    console.log('Scoped B case 2')
  })
})
