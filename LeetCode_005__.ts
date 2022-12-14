function longstPalindrome(s: string): string {
    let maxLen: number = 0; // current sub str max length
    let start: number = -1; // current sub str start index
    const len = s.length;
for (let i = 0; i < len; i++) {
    let nowLen: number = 1; // current sub str length
    let left: number = i - 1;   // left start index
    // 如果当前字符后边的字符一致，当前长度 + 1，s遍历指针向后推
    while (s[i + 1] === s[i]) {
        nowLen ++;
        i++;
    }
    //  获取右侧开始遍历的指针
    let right = i + 1;
    //  从连续字符两端开始像两侧扩展，直到越界或者不一致
    //  一致的直接累计到当前长度中，修改左右指针
    while(s[left] === s[right] && s[left]!== undefined) {
        nowLen += 2;
        left--;
        right++;
    }
    //  判断与之前最大的对比，更新当前最大回文串的起始索引
    if (nowLen > maxLen) {
        maxLen = nowLen;
        start = left + 1;
    }
}

    return s.slice(start, start + maxLen);
}

console.log(longstPalindrome('babad'))