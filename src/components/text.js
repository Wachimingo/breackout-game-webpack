class Text {
    render(inputText) {
        let text = document.createElement('h1');
        text.innerHTML = inputText;
        let body = document.body;
        body.appendChild(text)
    }
}

export default Text;