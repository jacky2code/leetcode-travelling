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
function convert(s: string, numRows: number): string {
    if (s.length <= numRows || numRows === 1) return s;

    // 创建一个数组，个数为行数
    const arr: Array<string> = new Array(numRows).fill('');
    // 当前字母对应的行
    let num: number = 0;
    // true 表示向下 +，false 表示向下 -
    let plus: boolean = true;
    for(let i = 0; i < s.length; i++) {
        // 每次向当前行添加字符
        arr[num] += s[i];

        if(plus) {  // 向下行 +1
            num += 1;
        } else {    // 向上行 -1
            num -= 1;
        }

        // 再次到0，说明到顶，要向下，plus为true
        if(num === 0) {
            plus = true;
        }
        // 再次到底部，要向上，plus为false
        if (num === numRows - 1) {
            plus = false;
        }
        console.log('arm[num] ====== ',arr[num]);
    }
    console.log('arr ====== ', arr);
    return arr.join('');
};

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
