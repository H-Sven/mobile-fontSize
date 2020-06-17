/* eslint-disable no-restricted-globals */

let desginToShowRate

const setFontSize = () => {
  const html = document.querySelector('html')
  const { width, height } = html.getBoundingClientRect()
  // 判断横屏
  if (width < height) {
    // 竖屏
    html.style.fontSize = `${width / 10}px`
    desginToShowRate = width / 750
  }
  if (width > height) {
    // 横屏
    html.style.fontSize = `${height / 10}px`
    desginToShowRate = height / 750
  }
}

setFontSize()
window.addEventListener('resize', () => {
  setFontSize()
})
window.addEventListener('DOMContentLoaded', () => setFontSize())

export function designPxToShow(value) {
  if (isNaN(desginToShowRate)) return value
  return desginToShowRate * value
}

export function fullscreenEnable() {
  const isFullScreen = document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
  return isFullScreen
}

export function fullscreenElement() {
  // 注意：要在用户授权全屏后才能获取全屏的元素，否则 fullscreenEle为null
  const fullscreenEle = document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.webkitFullscreenElement
  return fullscreenEle
}

/* 进入全屏 */
export function requestFullScreen(element = document.documentElement) {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  }
}

/* 退出全屏 */
export function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}
