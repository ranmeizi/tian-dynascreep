const { CONSTANTS } = require('./config')

/**
 * @typedef {Action} action
 */

const actions = {
    /**
     * action
     * 去采矿，采到包满
     * @param {Creep} creep 
     * @param {HarvestCtx} ctx 
     * @returns {StageStatus}
     */
    harvest(creep, { id }) {
        // 中断条件 判断 store 是否已经满了
        if (creep.store.getFreeCapacity() === 0) {
            return global.STage
        }

        /** @type {Source} */
        const target = Game.getObjectById(id)

        if (!target) {
            // 找不到 target 未预期的错误 
            return STAGE_UNEXPECTED
        }

        const code = creep.harvest(target)

        switch (code) {
            case OK:
                creep.say('嘿咻⛏'); break;
            case ERR_NOT_IN_RANGE:
                creep.moveTo(target); break;
            default:
                // other
                break;
        }

        return STAGE_RUNNING
    },
    /**
     * 去采矿，然后接单
     * @param {Creep} creep 
     * @param {string} id 
     */
    harvest_loop(creep, id) {
        // 搬
        const res = actions.harvest(creep, { id })

        switch (res) {
            case STAGE_COMPLETE:
                // harvest_loop 从 action queue 移除
                const actionQueue = creep.memory.actionQueue ?? []
                actionQueue.shift()
                // 添加接单任务
                actionQueue.pushActionSort()
                break;
            case STAGE_UNEXPECTED:
                creep.say('傻逼领导,代码错了')
                break;
        }
    },
    /**
     * 
     * @param {Creep} creep 
     * @param {LogisticsSearchOrderCtx} ctx 
     */
    logistics_search_order(creep, { range }) {
        // 找
        for (let [k, v] of Object.entries(creep.room.memory.mission.logistics)){
            
        }
        // 扩大range找
    },
    /**
     * action
     * 卸货，把身上东西卸下来
     * @param {Creep} creep 
     * @param {string} id  带有 store 的单位id
     * @param {ResourceConstant} resourceType 
     */
    unload(creep, id, resourceType) {

        /** @type {Structure} */
        const target = Game.getObjectById(id)

        if (!target) {
            // 找不到 target 未预期的错误 
            return STAGE_UNEXPECTED
        }

        const code = creep.transfer(target, resourceType)

        switch (code) {
            case OK:
                // 终止条件，
                creep.say('卸货🛵');
                return STAGE_COMPLETE
            case ERR_NOT_IN_RANGE:
                creep.moveTo(target); break;
            default:
                // other
                break;
        }

        return STAGE_RUNNING
    },
    /**
     * 处理后事
     * 对可以投胎的creep无效
     * @param {CustCreepMemory} memo 
     */
    advanceFuneralAffairs(memo) {
        if (memo.immortal) {
            // 向 room 发送一个 spawn 重生任务
            return
        }

        // 清除自己的任务副作用
        memo.missions.forEach(({ id, type }) => {
            // 调用 mission 默块的 handler
        })
    }
}

module.exports = {
    actions
}