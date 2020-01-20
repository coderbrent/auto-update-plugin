const fs = require('fs')
const path = require('path')
const Diff = require('diff')
const configFile = require('../dna-trans-llc/gatsby-config').plugins
require('colors')

const packageFile = '/Users/brentabruzese/Desktop/projects/dna-trans-llc/package.json'
const oldConfig = []

fs.watch(packageFile, (event, filename) => {
  //if the file changes...
  if(filename) {
    // open it up and pull the data out...
    fs.readFile(packageFile, 'utf8', (err, data) => {
      if(err) throw err;
      // data is a string so json parse it..
      let depList = JSON.parse(data)
      console.log(depList.dependencies)
      for(let [key, value] of Object.entries(depList)) {

      }
    })
  }
})

// const diff = Diff.diffArrays(oldConfig, configFile)
// diff.forEach(part => {
//   const color = part.added ? 'green' :
//     part.removed ? 'red' : 'grey';
//     process.stderr.write(part.value[color])
// })
