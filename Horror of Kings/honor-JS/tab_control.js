// 获取元素
var bodyEl = document.body
var contentCenterEl = bodyEl.querySelector(".content-center")
var tabControlEl = contentCenterEl.querySelector(".tab_control")
var itemEls = tabControlEl.querySelectorAll(".item")
var keyWordEll = contentCenterEl.querySelector(".tab_keyword")


var activeLiEl = tabControlEl.querySelector(".active")
// 冒泡
tabControlEl.onmouseover = function(event) {
  // 1.拿到事件发生的对象
  var itemEl = event.target
  // 写个判断,要拿到tab_control里面的item.
  if (itemEl.classList.contains("item")) {
    // 其他的取消active
    // 1.for循环所有的item
    // 2.querySelector(".active")
    // 3.记录当前的active对应的item
    // 移除初始(在html)设置的act
    activeLiEl.classList.remove("active")

    // 然后把act添加到当前鼠标进入的元素
    itemEl.classList.add("active")

    // 再让act指向最新的元素
    activeLiEl = itemEl
  }

}





