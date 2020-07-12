let postMsg = {}

const postMsgTips = {
  nonsupport: '该浏览器不支持[window.postMessage]',
  callback: '回调函数不存在',
}

postMsg.install = (Vue, options) => {
  const postMessage = 'postMessage',
        addEventListener = 'addEventListener'

  Vue.prototype.$iframe = {}

  /**
   * 发送消息
   * @param {String|Object} message 消息体， app|operation为必填项
   * message: {
   *  app: '应用名，例如APP',
   *  operation: '操作类， 例如jumpTo',
   * }
   * @param {String} targetOrigin 目标域
   * @param {String} target 发送消息源
   */
  Vue.prototype.$iframe.postMessage = (message, targetOrigin, target = self) => {
    if (!targetOrigin) return;

    if (!window[postMessage]) {
      console.warn(postMsgTips.nonsupport)
      return;
    }
    target[postMessage](message, targetOrigin)
  }

  /**
   * 监听消息
   * @param {Function} callback 回调函数
   * @param {Boolean} useCapture 触发时机，冒泡 or 捕获
   */
  Vue.prototype.$iframe.receiveMessage = (callback, useCapture = false) => {
    let _handleCallback

    if (!window[postMessage]) {
      console.warn(postMsgTips.nonsupport)
      return;
    }

    if (!callback) {
      console.error(postMsgTips.callback)
      return;
    }

    _handleCallback = (e) => {
      callback(e)
    }

    const _isFunction = typeof callback === 'function'
    if (window[addEventListener]) { // 非IE
      window[_isFunction ? addEventListener : 'removeEventListener']('message', _handleCallback, useCapture)
    } else { // IE
      window[_isFunction ? 'attachEvent': 'detachEvent']('onmessage', _handleCallback)
    }
	}
}

export default postMsg
