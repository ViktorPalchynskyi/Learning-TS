function processUser(
    cb: (user: { name: string; age: number }) => void
): void {
    const user = { name: 'Viktor', age: 26 };
    cb(user);
}

processUser((user) => {
    console.log(user);
});
