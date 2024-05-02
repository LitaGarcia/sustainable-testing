import * as stats from "./stats";

export function sumAsync(numbers: number[]){
    return Promise.resolve(stats.sum(numbers));
}

export function averageAsync(numbers: number[]){
    return Promise.resolve(stats.average(numbers));
}