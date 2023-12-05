const search = require('./index');

test('Search for "or" in "hello world"', () => {
    expect(search("hello world", "or")).toBe(true);
});
