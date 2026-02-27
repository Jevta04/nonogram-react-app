export function calculateHints(line) {
    const hints = [];
    let count = 0;

    for (const cell of line) {
        if (cell === 1) {
            count++;
        } else {
            if (count > 0) {
                hints.push(count);
                count = 0;
            }
        }
    }

    if (count > 0) hints.push(count);
    return hints.length > 0 ? hints : [0];
}