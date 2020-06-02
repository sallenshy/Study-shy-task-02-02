
const fp =require('lodash/fp')
//代码题1
const car =[
    {name:'Ferrari FF',horsepower: 660,dollar_value:700000,in_stock:true},
    {name:'Spyker C12 Zagato',horsepower: 650,dollar_value:648000,in_stock:false},
    {name:'Jaguar XKR-S',horsepower: 550,dollar_value:132000,in_stock:false},
    {name:'Audi R8',horsepower: 525,dollar_value:114200,in_stock:false},
    {name:'Aston Martin One-77',horsepower: 750,dollar_value:1850000,in_stock:true},
    {name:'Pagani Huayra',horsepower: 700,dollar_value:1300000,in_stock:false}
]
//练习1
const f1 = fp.flowRight(fp.props('in_stock'),fp.last)
//练习2
const f2 = fp.flowRight(fp.props('name'),fp.first)
//练习3
let _average = function(xs){
    return fp.reduce(fp.add,0,xs)/xs.length
}

let averageDollarValue =function(cars){
    let dollar_value = fp.map(function(){
        return car.dollar_value
    },car)
    return _average(dollar_value)
}
let f3 = fp.flowRight(_average,fp.map(fp.props('dollar_value')))

//练习4
let _underscore = fp.replace(/\W+/g,'_')
let sanitizeNames = fp.flowRight(fp.split(','),fp.toLower,fp.map(_underscore))

//代码题2

class Container{
    static of (value){
        return new Container(value)
    }
    constructor (value)
    {
        this._value = value
    }
    map (fn){
        return Container.of(fn(this._value))
    }
}

class Maybe {
    static of (x)
    {
        return new Maybe(x)
    }
    isNothing (){
        return this._value === null || this._value === undefined
    }
    constructor (x){
        this._value = x
    }
    map (fn) {
        return this.isNothing()? this: Maybe.of(fn(this._value))
    }
}

//练习1
let maybe = Maybe.of([5,6,1])
let ex1 = fp.flowRight(log,fp.map(item=>fp.add(item,1)))

//练习2
let xs = Container.of(['do','ray','me','fa','so','la','ti','do'])
let ex2 = fp.first

//练习3
let safeProp = fp.curry(function(x,o){
    return Maybe.of(o[x])
})
let user = {id:2, name: "Albert"}
let ex3 = fp.flowRight(fp.map(fp.first),fp.props('_value'),safeProp('name'))

//练习4 
let ex4 = function(n){
    if(n){return parseInt(n)}
}

Maybe().map(x=>parseInt(x))
