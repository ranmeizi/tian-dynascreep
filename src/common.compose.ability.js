const { CONSTANTS } = require('./config')

/**
 * @typedef {Action} action
 */

const actions = {
    /**
     * action
     * 去采矿，采到包满
     * @param {Creep} creep 
     * @param {string} id sourceId
     * @returns {StageStatus}
     */
    harvest(creep, id) {
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
        const res = actions.harvest(creep, id)

        switch (res) {
            case STAGE_COMPLETE:
                // harvest_loop 从 action queue 移除
                const actionQueue = creep.memory[CONSTANTS.CREEP_MEMO_ACTION_QUEUE_KEY]
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
     * @param {number} defaultSearchRange 默认搜索范围
     */
    logistics_search_order(creep, defaultSearchRange) {

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
    }
}

module.exports.x_actions = actions

// 挂在原型链
// Creep.prototype.x_actions = actions