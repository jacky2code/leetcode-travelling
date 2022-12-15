
function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    const str: string = x.toString();
    console.log('str ====== ', str);
    const len: number = str.length;
    console.log('len ====== ',len);
    const flag: boolean = len % 2 ? true : false;
    console.log('flag ====== ', flag);
    if(len === 1) return true;
    let left: number = 0;
    let right: number = 0;
    if(flag) {
        console.log('comming true ======');
         left = Math.floor(len / 2) -1;
         right = Math.ceil(len / 2);
    } else {
        console.log('comming false ======');
        left = (len / 2) -1;
        right = len / 2;
    }
    while(right <= len -1) {
        console.log('leftStr ====== ', str[left]);
        console.log('rightStr ====== ', str[right]);
             if(str[left] !== str[right]) {
                 return false;
             }
             left--;
             right++;
         }
    return true;
};

function GKisPalindrome(x: number): boolean {
    if(x < 10 && x >=0) return true;
    if(x < 0) return false;
    let str: string = x.toString();
    let left: number = 0;
    let right: number = str.len -1;
    while(le)

    return true;
}

console.log(isPalindrome(100));