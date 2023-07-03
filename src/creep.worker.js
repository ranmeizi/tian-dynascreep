const actions = require('./common.creep')

/**
 * @type {Handler<Creep>}
 */
const handler = {
    prepare() {

    },
    run(creep) {

    }
}

/**
 * 力量型
 */
function Power() {

}

/**
 * 敏捷型
 */
function Agile() {

}

const capacity_body = {
    300: 1,
    550: 2,
    800: 3,
    1300: 4,
    1800: 5,
    5600: 10,
    12900: 15
}

/**
 * 均衡型
 * @param {StructureSpawn} spawn 
 */
function Balanced(spawn) {
    // 可用资源上限
    const ceil = spawn.room.energyCapacityAvailable

    const body = getBalancedCapacityBody(ceil)

    return body
}

/**
 * 
 * @param {number} ceil 可用资源上限
 * @returns {Array<string>} body body数
 */
function getBalancedCapacityBody(ceil) {
    const multiple = Object.entries(capacity_body).reduce((prev, [floor, body]) => {
        if (ceil > Number(floor)) {
            return body
        }
        return prev
    }, 1)

    const body = []

    // 构建 body 数组
    for (var i = 0; i < multiple; i++) {
        body.push(MOVE, CARRY, WORK)
    }

    return body
}


module.exports = handler
