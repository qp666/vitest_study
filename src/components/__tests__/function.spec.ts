import { describe, it, expect } from 'vitest'
/* 函数断言

toHaveBeenCalled 判断函数是否被调用
toHaveBeenCalledTimes 判断函数被调用的次数
toHaveBeenCalledWith 判断函数被调用的时候传递了什么参数

上面的断言在执行之前，要先使用vi.spyOn对原函数进行调用, 例如下面例子的vi.spyOn(market, 'buy')

*/

it('test function ', () => {
  const market = {
    buy(subject: string, amount: number) {
      // ...
    },
  }
  const buySpy = vi.spyOn(market, 'buy')
  expect(buySpy).not.toHaveBeenCalled()
  market.buy('apples', 10)
  market.buy('apples', 10)
  expect(buySpy).toHaveBeenCalled()
  expect(buySpy).toHaveBeenCalledTimes(2)
  expect(buySpy).toHaveBeenCalledWith('apples', 10)
})
