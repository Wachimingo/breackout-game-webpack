class Canvas {
    render(id, width, height) {
        let canvas = document.createElement('canvas');
        canvas.id = id;
        canvas.width = width;
        canvas.height = height;
        canvas.classList = 'gameCanvas';
        let body = document.body;
        body.appendChild(canvas)
    }
}

export default Canvas;