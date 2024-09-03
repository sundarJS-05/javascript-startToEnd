let date1 = new Date()
console.log(date1)
console.log(date1.toString())
console.log(date1.toISOString())
console.log(date1.toJSON())
console.log(date1.toLocaleString())
console.log(date1.toLocaleDateString())

let actlDate = new Date("08-30-2024")
console.log('actual date', actlDate.toLocaleString())

let timestamp = Date.now()
console.log(' time in sec since 1970 epoch', Math.floor(Date.now()/1000))
console.log(' time in min since 1970 epoch', Math.floor(Date.now()/(1000*60)))
console.log(' time in hr since 1970 epoch', Math.floor(Date.now()/(1000*60*60)))

console.table([new Date().getMonth(), new Date().getDay(), new Date().getFullYear()])
console.log(new Date())