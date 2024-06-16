class IElement {
    static accept(visitor) {
        throw new Error("This method should be overridden!");
    }
}

module.exports = IElement;