/**
 * Converts a string to camelCase format.
 * 
 * This function normalizes the input string by replacing hyphens and underscores with spaces,
 * removing special characters, converting numeric digits to their word equivalents, and then
 * applying camelCase formatting where the first word is lowercase and subsequent words have
 * their first letter capitalized.
 * 
 * @param {string} input - The input string to convert. Must contain at least one letter or number.
 *                         Supports hyphens, underscores, and spaces as word separators.
 * 
 * @returns {string} The converted string in camelCase format. First word is lowercase, and
 *                   subsequent words have their first letter capitalized with no separators.
 *                   Numeric digits are converted to their word equivalents.
 * 
 * @throws {Error} If input is not a string.
 * @throws {Error} If input is an empty string.
 * @throws {Error} If input contains no letters or numbers.
 * 
 * @example
 * toCamelCase('hello-world');           // 'helloWorld'
 * toCamelCase('hello_world');           // 'helloWorld'
 * toCamelCase('hello world');           // 'helloWorld'
 * toCamelCase('hello-123-world');       // 'helloOnetwothreeWorld'
 */
function toCamelCase(input) {
    // Input validation
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    
    if (input.length === 0) {
        throw new Error('Input cannot be an empty string');
    }
    
    // Replace word separators (hyphens, underscores) with spaces
    let normalized = input.replace(/[-_]/g, ' ');
    
    // Check if there are any letters or numbers
    if (!/[a-zA-Z0-9]/.test(normalized)) {
        throw new Error('Input must contain at least one letter or number');
    }
    
    // Remove special characters (keep letters, numbers, and spaces)
    normalized = normalized.replace(/[^a-zA-Z0-9\s]/g, '');
    
    // Number to word mapping
    const numberToWord = {
        '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
        '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'
    };
    
    // Split into words by spaces
    let words = normalized.split(/\s+/).filter(word => word.length > 0);
    
    // Process each word: convert numbers to their word form
    words = words.map(word => {
        let result = '';
        for (let char of word) {
            result += /[0-9]/.test(char) ? numberToWord[char] : char;
        }
        return result;
    });
    
    // Apply camelCase: first word lowercase, rest capitalize first letter
    return words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    }).join('');
}


/**
 * Converts a string to dot.case format.
 * 
 * This function normalizes the input string by replacing hyphens and underscores with spaces,
 * removing special characters, and then joining the resulting words with dots. All characters
 * are converted to lowercase.
 * 
 * @param {string} input - The input string to convert. Must contain at least one letter or number.
 *                         Supports hyphens, underscores, and spaces as word separators.
 * 
 * @returns {string} The converted string in dot.case format where words are separated by dots
 *                   and all characters are in their original case.
 * 
 * @throws {Error} If input is not a string.
 * @throws {Error} If input is an empty string.
 * @throws {Error} If input contains no letters or numbers.
 * 
 * @example
 * toDotCase('hello-world');        // 'hello.world'
 * toDotCase('hello_world');        // 'hello.world'
 * toDotCase('hello world');        // 'hello.world'
 * toDotCase('hello-world-example'); // 'hello.world.example'
 */
function toDotCase(input) {
    // Input validation
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    
    if (input.length === 0) {
        throw new Error('Input cannot be an empty string');
    }
    
    // Replace word separators (hyphens, underscores) with spaces
    let normalized = input.replace(/[-_]/g, ' ');
    
    // Check if there are any letters or numbers
    if (!/[a-zA-Z0-9]/.test(normalized)) {
        throw new Error('Input must contain at least one letter or number');
    }
    
    // Remove special characters (keep letters, numbers, and spaces)
    normalized = normalized.replace(/[^a-zA-Z0-9\s]/g, '');
    
    // Split into words by spaces and join with dots
    return normalized.split(/\s+/).filter(word => word.length > 0).join('.');
}

