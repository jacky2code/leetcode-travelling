/*
 * @Author: GKing
 * @Date: 2022-12-14 10:15:28
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-14 10:24:43
 * @Description: climbing a staircase
 * @TODO:
 */
/*
    You are climbing a staircase. It takes n steps to reach the top.
    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

    f(x)=f(x−1)+f(x−2)
    f(2)=2，f(3) = 3f(3)=3，f(4) = 5f(4)=5，……，
    滚动数组
*/
function climbStairs(n) {
    let x = 0, y = 0, z = 1;
    for (let i = 1; i <= n; i++) {
        x = y;
        y = z;
        z = x + y;
    }
    return z;
}
;
console.time('time');
console.log(climbStairs(8));
console.timeEnd('time');
