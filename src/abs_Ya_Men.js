
const TASK_DEFINE = {

}

const Know = {
    /**
     * @param {Room} room Room 对象
     * @returns {void}
     * @description
     * Source 在受控制的房间 300 tick 刷新 3000
     * container模式：
     * 
     * 每秒采集 10 energy 需要 5 Work 1 Move 
     * 5*100 + 50 = 550
     * 
     * 所以卡 energy 的是 550，房间内可用超过 550 或稳定更高 时， 可以切换为合作模式
     * 
     * 而 ？？？ 时，需要将将模式切换
     */
    energyType(room) {

    },
    /**
     * 记录房间source id
     */
    sourceMemo(room){

    }

}