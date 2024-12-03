function staircase(n) {
    for (let i = 0; i < n; i++) {
        let spaces = ' '.repeat(n - i - 1); // Add spaces before #
        let stairs = '#'.repeat(i + 1); // Generate #
        console.log(spaces + stairs);
    }
}
