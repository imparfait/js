function elementClick(event) {
    const name = event.target.localName;
    lbInfo.innerText = "Element clicked: " + name;
};