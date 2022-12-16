/*
 * @Author: GKing
 * @Date: 2022-12-16 21:15:34
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-16 23:30:17
 * @Description: 014 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""
 * 示例 1：
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * @TODO: 
 * 思路
 * 1. 逐位比较
 * 2. 找出最短字符串作为前缀比较其他长字符串，不相同时，最短-1，继续比较
 */


function longestCommonPrefix(strs: string[]): string {
    // 第一个字符串
    const firstStr = strs[0];
    // 第一个字符串的第一个字符
    let result: string = '';
    for (let i: number = 0; i < firstStr.length; i++) {
        result = result.concat(firstStr[i]);
        let j: number = 1;
        while (j < strs.length) {
            if (result !== strs[j].slice(0, i + 1)) {
                result = firstStr.slice(0, i);
                return result;
            }
            j++;
        }

    }
    return result;

};

function GKLongestCommonPrefixMind1(strs: string[]): string {
    let res: string = '';
    if (strs.length <= 0) return '';
    // 逐位比较，从第一个字符串的第一个字符开始
    for (let i: number = 0; i < strs[0].length; i++) {
        for (let j: number = 1; j < strs.length; j++) {
            // 和 第二个字符串的第一个字符比较
            if (strs[0][i] !== strs[j][i]) {
                // 如果不相同，返回之前的res
                return res;
            }
        }
        // 相同就追加进res
        res = res.concat(strs[0][i]);
    }
    return res;
}

function GKLongestCommonPrefixMind2(strs: string[]): string {
    // 取出各个字符串的长度，组成一个数组
    const lens: number[] = strs.map((str) => str.length);
    // 找到最小长度
    const minLen: number = Math.min(...lens);
    // 找到最小字符串
    const minStr = strs[lens.indexOf(minLen)];

    let res: string = '';

    const getPre = (minS: string): string => {
        // 用 every 循环，是否开始与 minS
        if (strs.every((str) => str.startsWith(minS))) {
            // 全部满足，就赋值结果
            return (res = minS);
        }
        else {
            // 不满足时，去掉一个字符，继续调用自身
            getPre(minS.slice(0, -1));
        }

        return res;
    }
    return getPre(minStr);
};

console.time('time');
console.log('======', GKLongestCommonPrefixMind2(["flogwer", "flogw", "flogight"]));
console.timeEnd('time');