/**
 * 规定各个对象的 memory 类型
 */

// Creep start

declare interface Creep extends RoomObject {
    memory: CustCreepMemory
}

declare type CustCreepMemory = {
    tasks: {
        id: string
        type: string
    }[]
    /** action queue 操作队列 一个有序数组 */
    actions?: Action[]
    /** 不朽的 creep memory不会清除 */
    immortal: boolean
    logistics?: Logistics
    /** 出生的房间名 */
    room: string
    /** 职业名 */
    role: CreepRoleName
    _move: any
}

// Creep end

// StructureSpawn start

declare type CustSpawnMemory = {
    actions?: Action[]
}

declare interface StructureSpawn {
    memory: CustSpawnMemory
}

// StructureSpawn end


// Room start

declare interface Room {
    memory: CustRoomMemory
}


declare type CustRoomMemory = {
    task: {
        /** 物流任务 */
        logistics: Record<string, LogisticsTask>,
        /** 修理任务 */
        repair: Record<string, {
            /** 需要维修的血量 */
            hits: number
            /** 位置 */
            pos: [number, number]
            /** 是否保留 */
            isReserve: boolean
            /** 保留人 id */
            reservation: string
        }>
        /** 孵化任务 */
        spawn: Record<string, {
            /** 角色 */
            role: CreepRoleName
        }>
    }
}

// Room end
