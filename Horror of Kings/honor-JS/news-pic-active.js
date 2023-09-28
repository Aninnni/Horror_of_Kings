// 获取元素 advbtn的切换
var advbtnEl = document.querySelector(".advbtn")
var advpicEl = document.querySelector(".advpic")
var newsPicEl = document.querySelector(".news-pic")

// 定义一些临时变量来保存一些状态(数据)
var actEl = document.querySelector(".active")
var currentIndex = 0
var timerID = null

// advbtn的鼠标进入事件.
advbtnEl.onmouseover = function(event) {
  // console.log(event.target) //验证能不能找到a,能.

  // 确定发生 鼠标进入的元素
  var itemEl = event.target.parentElement
  if (!itemEl.classList.contains("item")) return 

  // 把类数组对象转成数组类型的方法. 但是这个advbtn要是个可迭代对象.
  var index = Array.from(advbtnEl.children).findIndex(function(item) {
    return item === itemEl
  })
  // console.log(index)  // 能打印
  // 定时轮播的索引
  currentIndex = index
  // 调用切换函数:
  switchNewspic()
}
// 定时器轮播
startTimer()

// 监听newspic事件
newsPicEl.onmouseenter = function() {
  clearInterval(timerID)
}
newsPicEl.onmouseleave = function() {
  startTimer()
}



// 封装一个切换轮播图的函数
function switchNewspic() {
  // 首先:让 advpicEl 滚动
  // 鼠标事件 同时advpic也切换
  advpicEl.style.transform = `translateX(${-604 * currentIndex}px)`
  advpicEl.style.transition = `all 300ms ease` 

  // 然后: 移除之前的act;再把active添加到鼠标进入的元素;最后让act指向最新的元素.
  actEl.classList.remove("active") // 移除初始的act
  var curItemEl = advbtnEl.children[currentIndex] // 索引找到新的对象
  curItemEl.classList.add("active")  //给新的对象添加act
  actEl = curItemEl // 把act指向新的对象
}

 // 封装一个添加定时器的函数
function startTimer() {
  timerID = setInterval(function() {
    currentIndex++
    if (currentIndex === advbtnEl.children.length) {
      currentIndex = 0
    }

    // 调用切换函数
    switchNewspic()
  }, 3000);
}

