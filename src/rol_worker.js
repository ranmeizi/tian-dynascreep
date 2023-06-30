const ability = require('./common.compose.ability').x_actions

const Controller = {
    run(creep) {
        ability.workAsTask.call(this, creep)
    },

    /**
     * 
     * @param {Creep} creep 
     */
    doAction(creep) {
        
        // 查看 action 列表
        return OK
    }
}

module.exports = Controller
