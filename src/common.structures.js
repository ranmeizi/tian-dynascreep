
/**
 * Extension 和 spawn 需要持续能量供给的，会自主发布缺能源task
 * @param {StructureExtension|StructureSpawn} structure 
 */
function HungerStore(structure) {
    // 检查自己发布的任务
    /**
     * @type {LogisticsTask}
     */
    const task = structure.room.memory.task.logistics[structure.id]

    // 检查自己剩余空间
    const freeCapacity = structure.store.getFreeCapacity(RESOURCE_ENERGY)

    /**
     * @type {LogisticsTask}
     */
    const activeTask = freeCapacity
        ? {
            resource: RESOURCE_ENERGY,
            capacity: freeCapacity,
            pos: structure.pos,
            isReserve: true,
            reservation: task.reservation
        }
        : null

    if (activeTask) {
        // 更新task
        structure.room.memory.task.logistics[structure.id] = activeTask
    } else {
        // 关闭task
        delete structure.room.memory.task.logistics[structure.id]
    }
}
