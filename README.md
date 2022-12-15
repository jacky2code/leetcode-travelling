# LeetCode Travelling

https://github.com/jacky2code/leetcode-travelling

https://gitee.com/jacky2code/leetcode-travelling

## 001 Two Sum



## 002 [Add Two Numbers](https://leetcode.cn/problems/add-two-numbers/)

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。



1. 解题思路
    新建一个空链表
    遍历被相加的两个链表，如果一个链表先结束结束，后面位数都补0。
    模拟相加操作，将个位数追加到新链表上，将十位数留到下一位去相加。
    如下图:[9, 9, 9]与[9, 9, 9, 9]相加过程。

  ![002](https://markdown-res.oss-cn-hangzhou.aliyuncs.com/mdImgs/2022/12/14/20221214151629.png)

```typescript
function GKaddTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null { 
    // 初始化哑巴节点
    let dmy = new ListNode(0);
    let curr = dmy;
    // 进位
    let addOne = 0;
    while(l1 || l2) {
        // 把两个链表补位0，使两个表位数相等
        let val1 = l1?.val ?? 0;
        let val2 = l2?.val ?? 0;
        // 计算两个值的和
        let sum = val1 + val2 + addOne;
        // 计算进位
        sum >= 10 ? addOne = 1 : addOne = 0;
        // 取余10，计算当前位的值
        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    // 链表位数循环完以后，addOne还是1，链表增加位数
    if(addOne) curr.next = new ListNode(addOne);
    return dmy.next;
}
```
## 005 最长回文子串

给你一个字符串 s，找到 s 中最长的回文子串。

- **示例1:**

  ```
  输入：s = "babad"
  输出："bab"
  ```

- **示例 2：**

  ```
  输入：s = "cbbd"
  输出："bb"
  ```

  ```typescript
  function longstPalindrome(s: string): string {
      // 当前最大回文串的长度
      let maxLen: number = 0;
      // 当前最大回文串的起始索引
      let start: number = -1;
      const len = s.length;
      for (let i = 0; i < len; i++) {
          // 当前回文串的长度
          let nowLen: number = 1;
          // 左侧开始遍历的指针
          let left: number = i - 1;
          // 如果当前字符后边的字符一致，当前长度 + 1，
          // s遍历指针向后推
          while (s[i + 1] === s[i]) {
              nowLen++;
              i++;
          }
          // 获取右侧开始遍历的指针
          let right = i + 1;
          // 从连续字符两端开始像两侧扩展，直到越界或者不一致
          // 一致的直接累计到当前长度中，修改左右指针
          while (s[left] === s[right] && s[left] !== undefined) {
              nowLen += 2;
              left--;
              right++;
          }
          // 判断与之前最大的对比，更新当前最大回文串的起始索引
          if (nowLen > maxLen) {
              maxLen = nowLen;
              start = left + 1;
          }
      }
  
      return s.slice(start, start + maxLen);
  }
  
  console.log(longstPalindrome('babad'))
  ```

## 006 Z 字形变换

- 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

  ```
  P   A   H   N
  A P L S I I G
  Y   I   R
  ```

- 思路

  * 行数是固定的
   * 写入顺序是固定的，下上下上下上。。。。
   * 可不可以遍历s的同时，控制上下顺序，写入对应的行，最后合并
   * 当字符串长度没有行数多时，为一列，或者行数为1的情况，不需要计算

```typescript
/*
 * @Author: GKing
 * @Date: 2022-12-15 08:46:54
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-15 10:55:47
 * @Description: 
 * Z 字形变换
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * @TODO: 
 * 实现这个将字符串进行指定行数变换的函数：
 * string convert(string s, int numRows);
 * 
 * 1.行数是固定的
 * 2.写入顺序是固定的，下上下上下上。。。。
 * 3.可不可以遍历s的同时，控制上下顺序，写入对应的行，最后合并
 * 4.当字符串长度没有行数多时，为一列，或者行数为1的情况，不需要计算
 * 
 */
function GKConvert(s: string, numRows: number): string {
    if (s.length <= numRows || numRows === 1) return s;
    // 新建数组，个数为行数
    const arr: Array<string> = new Array(numRows).fill('');
    // 当前行数0
    let num: number = 0;
    // 初始填充顺序，true：向下移动；false：向上移动
    let plus: boolean = true;
    for (let i: number = 0; i < s.length; i++) {
        // 按行号填充字符
        arr[num] += s[i];

        // 向下，行号 +1
        if (plus) {
            num++;
        } else {
            // 向上，行号-1
            num--;
        }

        // 行号为0，到顶后向下，plus=true
        if (num === 0) {
            plus = true;
        }
        
        if (num === numRows -1) {
            plus = false;
        }
    }
    return arr.join('');
}

console.time('time');
console.log(GKConvert('PAYPALISHIRING', 3));
console.timeEnd('time');
```

## 007 整数反转

* 反转整数数字

  * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
  * 如果反转后整数超过 32 位的有符号整数的范围 [−2**31,  2**31 − 1] ，就返回 0。
  * 假设环境不允许存储 64 位整数（有符号或无符号）。

* 示例

  ```
  输入：123
  输出：321
  ```

* 思路

   * 参考反转字符串，去掉符号
   * 找到边界值比较

```typescript
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
```
## 008 字符串转换整数（atoi）
实现一个 myAtoi 函数，使其能将字符串转换成一个 32 位有符号整数（类似C/C++ 中的 atoi 函数）。

## 009 回文数
给你一个整数 x，如果 x 是一个回文数，返回true；否则，返回false。
回文数是指正序和倒序读都是一样的整数。

- 示例1
```
输入：x = 121
输出：true.      
```

- 思路

  双指针从前后两端往中间比较，如果比较到len/2-1个位置都相同，则返回 true；中途有任何不相同，则返回 false；

```typescript
function GKisPalindrome(x: number): boolean {
    if(x < 10 && x >=0) return true;
    if(x < 0) return false;
    let str: string = x.toString();
    let left: number = 0;
    let right: number = str.length -1;
    while(right>=str.length / 2 -1 && right<= str.length - 1) {
        if(str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
```



## 070 [Climbing Stairs](https://leetcode.cn/problems/climbing-stairs/)

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

假设你正在爬楼梯。需要 `n` 阶你才能到达楼顶。

每次你可以爬 `1` 或 `2` 个台阶。你有多少种不同的方法可以爬到楼顶呢？

- Example 1:

  ```bash
  Input: n = 2
  Output: 2
  Explanation: There are two ways to climb to the top.
  1. 1 step + 1 step
  2. 2 steps
  ```

- Example 2:

  ```bash
  Input: n = 3
  Output: 3
  Explanation: There are three ways to climb to the top.
  1. 1 step + 1 step + 1 step
  2. 1 step + 2 steps
  3. 2 steps + 1 step
  ```

- 思路

  *f*(*x*)=*f*(*x*−1)+*f*(*x*−2)

  *f*(2)=2，f(3) = 3*f*(3)=3，f(4) = 5*f*(4)=5，……，

  可以用「滚动数组思想」

![滚动数组](https://markdown-res.oss-cn-hangzhou.aliyuncs.com/mdImgs/2022/12/14/20221214151651.gif)

```typescript
function climbStairs(n: number): number {
    let x: number = 0, y: number = 0, z: number = 1;
    for(let i: number = 1; i <= n; i++) {
        x = y;
        y = z;
        z = x + y;
    }
    return z;
};

console.time('time');
console.log(climbStairs(8));
console.timeEnd('time');
```

