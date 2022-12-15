/*
 * @Author: GKing
 * @Date: 2022-12-15 18:58:14
 * @LastEditors: GKing
 * @LastEditTime: 2022-12-15 19:03:19
 * @Description: 判断回文数
 * @TODO: 
 */

/*
 * 思路：
 * 从中间向两端比对
 */
function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    const str: string = x.toString();
    const len: number = str.length;
    const flag: boolean = len % 2 ? true : false;
    if(len === 1) return true;
    let left: number = 0;
    let right: number = 0;
    
    if(flag) {
         left = Math.floor(len / 2) -1;
         right = Math.ceil(len / 2);
    } else {
        left = (len / 2) -1;
        right = len / 2;
    }
    while(right <= len -1) {
             if(str[left] !== str[right]) {
                 return false;
             }
             left--;
             right++;
         }
    return true;
};

/*
 * 思路：
 * 从两端向中间比对
 */
function GKisPalindrome(x: number): boolean {
    if(x < 10 && x >=0) return true;
    if(x < 0) return false;
    let str: string = x.toString();
    let left: number = 0;
    let right: number = str.length -1;
    // 比对到 len/2 - 1 的中间位置
    while(right>=str.length / 2 -1 && right<= str.length - 1) {
        // 如果有任何一对字符不相同，返回 false
        if(str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome(100));