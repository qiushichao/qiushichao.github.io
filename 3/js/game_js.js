var sn = [42, 41], // 存放贪食蛇的坐标, 第一个是头, 最后一个是尾, 初始的蛇长度是2, 坐标[2, 2], [1, 2]
  dz = 43, // 食物的坐标, 初始[3, 2]
  fx = 1, // 蛇前进的方向
  n, // 蛇头位置
  food = 0,
  ctx = document.getElementById("can").getContext("2d"); // 画布
// 在画布上画背景或者贪食蛇方格
// 第一个参数是坐标信息, 第二个是颜色信息(用来区分背景和蛇)
function draw(t, c) {
  ctx.fillStyle = c;
  // fillReact的签名是: fillRect(x: number, y: number, w: number, h: number): void;
  // 所以画的方格的宽高都是18, 加上默认的lineWidth=1, 所以每个方格的长宽都是20
  // 参数t用一个标量标志二维坐标信息, t % 20即t/20的余数部分表示横坐标是第几个方格
  // <int>(t/20) 即t/20的商部分表示纵坐标是第几个方格
  // 这意味着游戏画布宽度固定为20, 坐标为[0, 19]
  // 需要注意的是纵坐标的方向向下
  // 所以初始的贪食蛇`[42, 41]`的头和尾的实际坐标分别是[2, 2], [1, 2], 也就是在画布的右上方
  // 所以最初的运动方向是向右
  // 所以前进方向`fx`的含义是: -1向左, -20向上, 1向右, 20向下
  ctx.fillRect(t % 20 * 20, ~~(t / 20) * 20, 18, 18);
}
// 监听用户按键, 按键时改变下一次paint时蛇的方向
document.onkeydown = function (e) {
  // 方向键 左, 上, 右, 下的keyCode分别为37, 38, 39, 40
  // 如果用户按下这几个键, 会改变蛇头下一次的位置到对应的方向上
  // 如果不是这几个键, 则不会变动
  n = [-1, -20, 1, 20][(e || event).keyCode - 37] || fx
  // 如果按键的方向和蛇当前前进的方向相反, 则不改动
  fx = sn[1] - sn[0] == n ? fx : n
};
// 根据蛇的位置及运动方向更新画布
!function update() {
  // 更新蛇头的位置
  n = sn[0] + fx;
  // 蛇每前进一步, 只需要把蛇尾放到蛇头处即可
  // 这里增加了蛇头
  sn.unshift(n);
  // 边界判断
  if (
	sn.indexOf(n, 1) > 0 // 蛇头碰到了自身
	|| n < 0 // 或者纵坐标小于0
	|| n > 399 // 或者纵坐标大于等于20
	|| fx == 1 && n % 20 == 0 // 或者蛇向右运动并且蛇头横坐标是0(注意是更新过的坐标)
	|| fx == -1 && n % 20 == 19 // 或者蛇头向左运动并且蛇头横坐标是19, 也就是在最右边
  ) {
	// 碰到边界时结束游戏, 边界是
	// x in [0, 20] & y in [0, 20]
	// 并且不可碰到蛇身
	return alert("GAME OVER");
  }
  // 更新蛇头
  draw(n, "Lime");
  if (n == dz) {
	// 如果蛇头位置和食物的位置相同, 则更新食物的位置
	// 新的食物的位置不能在蛇身上
	while (sn.indexOf(dz = ~~(Math.random() * 400)) >= 0);
	// 更新食物
	draw(dz, "Red");
	food++;//food++
	a:var out=document.getElementById('out');//将food在输出框输出
	out.innerHTML = food;
	if(food == 50){
		return alert("WINNER WINNER CHICKEN DINNER!");
	}
  } else
  // 去掉蛇尾(画成背景)
	draw(sn.pop(), "Black");
  // 每隔100ms更新
  setTimeout(update, 100);
}();