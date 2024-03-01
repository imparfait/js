class HtmlElement {
    constructor(tag, isSelfClosing = false, content = "", attributes = [], styles = [], childTags = []) {
      this.tag = tag;
      this.isSelfClosing = isSelfClosing;
      this.content = content;
      this.attributes = attributes;
      this.styles = styles;
      this.childTags= childTags;
    }

    setAttribute(attribute) {
        this.attributes.push(attribute);
    }
    
    setStyle(style) {
        this.styles.push(style);
    }
    
    addChild(child) {
        this.childTags.push(child);
    }
    addChildAtBeginning(child) {
        this.childTags.unshift(child);
    }

    getHtml(i = 0) {
        const ind = "  ".repeat(i);
        const closingTag = `</${this.tag}>`;
        const attributeStr = this.attributes.join(" ");
        const styleStr = this.styles.join(" ");
        
        let elementHtml = `${ind}<${this.tag} ${attributeStr}style="${styleStr}">${this.content}`;
        if (this.childTags.length > 0) {
          elementHtml += "\n";
          for (const child of this.childTags) {
            elementHtml += child.getHtml(i + 1);
          }
        }
        if(this.isSelfClosing ==false){ 
            elementHtml += `${closingTag}\n`;
        }
        elementHtml += `${ind}`;
        return elementHtml;
    }
    
}

const div = new HtmlElement("div", false, "", ["class='container'"], ["color: blue", "font-size: 16px"]);
const p1 = new HtmlElement("p", false, "Hello, world!");
const p2 = new HtmlElement("p", false, "Hello, user!");
div.addChild(p1);
div.addChildAtBeginning(p2);

console.log(div.getHtml());