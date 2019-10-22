#!/usr/bin/env node
require('lzc-node')

const args = require('minimist')(process.argv.slice(2))
const commands = require('../lib/commands')('../methods')

// delete args._
// console.log(args)
// console.log(commands)

for (let key of args._) {
    commands[key](args)
}