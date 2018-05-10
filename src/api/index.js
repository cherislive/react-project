import Server from '@/utils/server';
class API extends Server {
  // Cancellation
  abort(msg) {
    this.cancellation(msg)
  }
  sendLogin (username, passwd) {
    return this.getData('/mock/login', { // 登录
      data: { username, passwd }
    })
  }
}
export default new API();