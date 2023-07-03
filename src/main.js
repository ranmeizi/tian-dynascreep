require('./inject')
const creepController = require('./controller.creep')
const structureController = require('./controller.structure')

module.exports.loop = function () {

    global.prepareList = []
    global.runList = []

    // forEach structor
    for (let structure of Object.values(Game.structures)) {
        structureController(structure)
    }
    // forEach creeps 
    for (let creep of Object.values(Game.creeps)) {
        creepController(creep)
    }

    // 准备阶段
    for (let prepare of prepareList) {
        prepare()
    }

    // 行动阶段
    for (let run of runList) {
        run()
    }

}