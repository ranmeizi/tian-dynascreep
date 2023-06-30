Array.prototype.pushActionSort = function () {
    const res = [].push.call(this, arguments)
    this.sort((a, b) => {
        return a.sort - b.sort
    })

    return res
}

module.exports = {}