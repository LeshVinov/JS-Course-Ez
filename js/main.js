'use strict'

const DomElement = function(selector,height,width,bg,fontSize) {
    this.selector = selector,
    this.height = height,
    this.width = width,
    this.bg = bg,
    this.fontSize = fontSize
}

DomElement.prototype.newElem = function() {
    let newElement
    if (this.selector[0] === '.') {
        newElement = document.createElement('div')
        newElement.className = this.selector.slice(1)
        
    } else if (this.selector[0] === '#') {
        newElement = document.createElement('p')
        newElement.id = this.selector.slice(1)
    }
    newElement.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px;`
    return newElement
}

let newElement1 = new DomElement('.block', 100, 100, 'red', 12)
let newElement2 = new DomElement('#block', 100, 100, 'red', 12)

document.body.append(newElement1.newElem())
document.body.append(newElement2.newElem())

console.log(newElement)