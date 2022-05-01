#!/usr/bin/env zx

// https://jestjs.io/docs/configuration#testregex-string--arraystring
const testRE = /\/__tests__\/.*|(\.|\/)(test|spec)\.[jt]sx?$/

const projectFiles = (await quiet($`git ls-files $(git rev-parse --show-toplevel)`)).stdout.split(/\s/).filter(Boolean)
const testFiles = projectFiles.filter(file => testRE.test(file))


const matrix = [
  {
    name: 't1',
    SINGLE_TEST: 'examples/vuex/.test.spec.ts',
    os: 'ubuntu-latest',
    node_version: '16'
  },
  {
    name: 't2',
    SINGLE_TEST: 'TYPESCRIPT',
    os: 'ubuntu-latest',
    node_version: '18'
  }
]

/*
console.log(testFiles)
testFiles.forEach(testFile => {
})
*/

console.log(`{"include":${JSON.stringify(matrix)}}`)