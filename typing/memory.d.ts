/**
 * 规定各个对象的 memory 类型
 */

// Creep start

declare interface Creep extends RoomObject {
    memory: CustCreepMemory
}

declare type CustCreepMemory = {
    missions: {
        id: string
        type: string
    }[]
    /** action queue 操作队列 一个有序数组 */
    actionQueue?: Action[]
    /** 不朽的 creep memory不会清除 */
    immortal: boolean
    logistics?: Logistics
    /** 出生的房间名 */
    room: string
    /** 职业名 */
    role: string
    _move: any
}

// Creep end


// Room start

declare interface Room {
    memory: CustRoomMemory
}


declare type CustRoomMemory = {
    mission: {
        /** 物流任务 */
        logistics: Record<_HasId, {
            /** 资源类型 */
            resource: ResourceConstant,
            /** 需要资源量 */
            capacity: number,
            /** 坐标 */
            pos: [number, number],
            /** 是否保留 */
            isReserve: boolean
            /** 保留人 id */
            reservation: string
        }>,
        repair: Record<_HasId, {
            /** 需要维修的血量 */
            hits: number
            /** 位置 */
            pos: [number, number]
            /** 是否保留 */
            isReserve: boolean
            /** 保留人 id */
            reservation: string
        }>
    }
}

// Room end
