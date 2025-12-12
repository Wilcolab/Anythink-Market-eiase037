function toKebabCase(str) {
    // Validate input
    if (!str || str.length === 0) {
        throw new Error('Input string cannot be empty');
    }

    // Number to word mapping
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const numberToWords = (num) => {
        num = parseInt(num);
        if (num < 10) return ones[num];
        if (num < 20) return teens[num - 10];
        if (num < 100) {
            const tensPart = tens[Math.floor(num / 10)];
            const onesPart = ones[num % 10];
            return tensPart + (onesPart ? onesPart : '');
        }
        return num.toString();
    };

    // Convert numbers to words, lowercase, remove special characters, replace separators with hyphens
    const result = str
        .replace(/\d+/g, match => numberToWords(match))
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    // Check if result is empty after processing
    if (result.length === 0) {
        throw new Error('Input string contains only special characters');
    }

    return result;
}