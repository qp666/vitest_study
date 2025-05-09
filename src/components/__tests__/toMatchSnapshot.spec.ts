import { describe, it, expect } from 'vitest'
/* toMatchSnapshot 快照断言会生成一个文件，它适合一些大型的，长久不变更的地方，
例如对配置文件进行快照或者如果使用一些远程图标库 icon，我们可以对 icon 地址进行快照，
这个文件如果变更了，就会出现报错，报错就代表有风险，需要谨慎操作。 */

it('test toMatchSnapshot', () => {
  const config = { url: 'url', domain: 'domain', analysis: 'analysis alias' }
  expect(config).toMatchSnapshot()
})
