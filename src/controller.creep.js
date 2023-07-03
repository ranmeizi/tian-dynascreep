const worker = require('./creep.worker')
const energyKeeper = require('./creep.energyKeeper')

/**
 * 
 * @param {Creep} creep 
 */
function controller(creep) {
    /** @type {Handler<Creep>} */
    let handler
    switch (creep.memory.role) {
        case 'worker':
            handler = worker
            break;
        case 'energyKeeper':
            handler = energyKeeper
            break;
        default:
            // ???
            return
    }
    // 加入 list
    handler.prepare && global.prepareList.push(() => handler.prepare(creep))
    handler.run && global.runList.push(() => handler.run(creep))
}
module.exports = controller