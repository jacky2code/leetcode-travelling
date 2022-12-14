/*
 * @Author: GKing
 * @Date: 2022-12-14 15:24:32
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-14 16:46:29
 * @Description: 
 * 
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * @TODO: 
 * 
 * 这道题主要用到思路是：滑动窗口
 * 什么是滑动窗口？
 * 其实就是一个队列,比如例题中的 abcabcbb，进入这个队列（窗口）为 abc 满足题目要求，当再进入 a，队列变成了 abca，这时候不满足要求。所以，我们要移动这个队列！
 * 如何移动？
 * 我们只要把队列的左边的元素移出就行了，直到满足题目要求！
 * 一直维持这样的队列，找出队列出现最长的长度时候，求出解！
 */
function lengthOfLongestSubstring(s: string): number {
    const len: number = s.length;
    if(len <= 0) return 0;
    // 最大长度
    let max: number = 0;
    // 滑动左下标，遇到相同的字符，左下标向右滑动
    let leftPoint: number = 0;
    const map: Map<string, any> = new Map();
    // 循环中的 i 是右下标
    for(let i = 0; i < s.length; i++) {
        if(map.has(s.charAt(i))) {
            leftPoint = Math.max(leftPoint, map.get(s.charAt(i)) + 1);
        }

        map.set(s.charAt(i), i);
        max = Math.max(max, i - leftPoint + 1);
    }
    return max;
};

function GKlengthOfLongestSubstring(s: string): number {
    if(s.length <= 0) return 0;
    let left: number = 0, right: number = 0, maxLen: number = 0;
    // 把字符放进map中
    let map: Map<string, number> = new Map;
    while(right < s.length) {
        let letter: string = s.charAt(right);
        if(map.has(letter)) {
            // 如果map中包含字符，左指针移动到包含字符的下一个字符，继续
            left = Math.max(<number>map.get(letter) + 1, left);
        }

        map.set(letter, right);
        maxLen = Math.max(maxLen, right - left + 1);
        right ++;
    }

    return maxLen;
}

console.log(GKlengthOfLongestSubstring('abcabcabcdabcde'))