# LeetCode Travelling

https://github.com/jacky2code/leetcode-travelling

https://gitee.com/jacky2code/leetcode-travelling

# 001 Two Sum



# 002 [Add Two Numbers](https://leetcode.cn/problems/add-two-numbers/)

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
# 005 最长回文子串
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

  





# 070 [Climbing Stairs](https://leetcode.cn/problems/climbing-stairs/)

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

