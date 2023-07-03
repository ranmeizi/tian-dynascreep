/** 阶段性胜利！ */
global.STAGE_COMPLETE = 1
/** 还未胜利，还需努力 */
global.STAGE_RUNNING = 0
/** 发生小问题！ */
global.STAGE_UNEXPECTED = -1

Array.prototype.pushActionSort = function () {
    const res = [].push.call(this, arguments)
    this.sort((a, b) => {
        return a.sort - b.sort
    })

    return res
}

module.exports = {}