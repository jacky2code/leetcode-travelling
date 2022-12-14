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
    let right = i + 1 // 获取右侧开始遍历的指针
    while(s[left] === s[right] && s[left]!== undefined) {
        nowLen += 2;
        left--;
        right++;
    }
    if (nowLen > maxLen) {
        maxLen = nowLen;
        start = left + 1;
    }
}

    return s.slice(start, start + maxLen);
}