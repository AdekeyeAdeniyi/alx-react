import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

test("returns current year", () => {
    expect(getFullYear()).toBe(2023);
});

test('return string', ()=>{
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
})

test('return notification string', ()=>{
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
})