export default class Section {
    constructor(itemsAndRenderer, containerSelector) {
        const { items, renderer } = itemsAndRenderer;
        
        this._items = items;
        this._renderer = renderer;
        this._containerElement = document.querySelector(containerSelector);
    }

    render() {
        this._items.forEach(item => {
            const renderedItem = this._renderer(item);
            this.addItem(renderedItem);
        });
    }

    addItem(renderedItem, prepend) {
        prepend = prepend || false;

        if (prepend) {
            this._containerElement.prepend(renderedItem);
        } else {
            this._containerElement.append(renderedItem);
        }
    }
}