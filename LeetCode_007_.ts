/*
 * @Author: GKing
 * @Date: 2022-12-15 11:27:08
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-15 11:53:04
 * @Description: 
 * 反转整数数字
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−2**31,  2**31 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * 
 * @TODO: 
 * 思路：
 * 1. 参考反转字符串，去掉符号
 * 2. 找到边界值比较
 */
function reverse(x: number): number {
    if (x === 0) return x;
    let flag: boolean = x > 0 ? true : false;
    const num: number = Number((Math.abs(x).toString()).split('').reverse().join(''));
    const limit = Math.pow(2, 31);

    if (!flag && Math.abs(num) > limit) return 0;
    if (flag && num > (limit - 1)) return 0;
    
    return flag ? num : -num;
}

function GKReverse(x: number): number {
    if (x === 0) return x;
    const num: number = Number(
        // 数字转成字符串
        (Math.abs(x).toString())
        // 分割成Array
        .split('')
        // Array 反转
        .reverse()
        // 拼接
        .join(''));
    const limit: number = Math.pow(2, 31);
    const flag: boolean = x > 0 ? true : false;

    // 边界校验 [-2**31, 2**31 -1]
    if(!flag && Math.abs(num) > limit) return 0;
    if(flag && num > (limit - 1)) return 0;

    return flag ? num : -num;
}


console.log(reverse(12345678));