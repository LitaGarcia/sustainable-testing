export function expect(expected) {
    return {
        toBe(result) {
            if (result === expected)
                console.log("✅ ");
            else
                throw new Error(`❌ ${result} is not equal to ${expected}`);
        }
    }
}