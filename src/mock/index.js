import Mock from 'mockjs'
import { sendLogin, dataList } from './commonData'

let data = [].concat(sendLogin, dataList)
Mock.setup({
  timeout: '5000-10000' // 表示响应时间介于 5000 和 10000 毫秒之间，默认值是'10-100'。
})
data.forEach(function (res) {
  Mock.mock(res.path, res.rtype, res.data)
})

export default Mock
