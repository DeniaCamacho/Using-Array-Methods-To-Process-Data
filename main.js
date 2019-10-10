var sum = items.reduce((a, b) => a + b.price, 0)
{
   avg = sum/items.length
}console.log(avg)
document.querySelector("#answer1").innerHTML = `The average of all prices is ${avg.toFixed(2)}`
//need items between 14 and 18 dollars
//diplay titles 
var arr = items.filter (item=> item.price > 14.00 && item.price <18.00) 
var titles = arr.map(title=> title.title).join("\n\n")
 console.log(arr)
document.querySelector("#answer2").innerHTML = `${titles}`
// gbp currenct
// name 
// // price
var cur = items.filter(item => item.currency_code== 'GBP')
.map(name => `${name.title} cost &#163;${name.price}`)
document.querySelector("#answer3").innerHTML = `${cur}`
// list items made of wood

var tree = items.filter (item => item.materials.includes('wood'))
.map( name => `${name.title}`).join("\n")
document.querySelector("#answer4").innerHTML = `${tree}`

var more = items.filter(item => item.materials.length > 8)
var mat = more.map(function(item)
{
    return item.materials }).join("\n")
var tit = more.map(function (item)
{
    return item.title
}) .join("\n")
var qu = more.map(function (item)
{
    return item.quantity
}).join("\n")
document.querySelector("#answer5").innerHTML = `${tit} ${qu} ${mat}`

// number 6

var made = items.filter(item => item.who_made === ('i_did')) 
.map(item => `${item.who_made}`);
{
made.length
}
document.querySelector("#answer6").innerHTML = `${made.length} were made by their sellers`