const palindrome = require("./isPalindrome");

test("reverse of rar is rar which is true", ()=> {
    expect(palindrome("rar")).toBe(true);
})


test("reverse of ahmad is rar which is true", ()=> {
    expect(palindrome("ahmad")).toBe(false);
})