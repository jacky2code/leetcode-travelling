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
        nowLen ++;
        i++;
    }
    // 获取右侧开始遍历的指针
    let right = i + 1;
    // 从连续字符两端开始像两侧扩展，直到越界或者不一致
    // 一致的直接累计到当前长度中，修改左右指针
    while(s[left] === s[right] && s[left]!== undefined) {
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