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

export async function test(description:string, callback:()=>void){
    try{
        await callback();
        console.log(`✅ ${description}`);
    }
    catch (error){
        console.log(`❌ ${description}`);
        console.log(error);
    }
}