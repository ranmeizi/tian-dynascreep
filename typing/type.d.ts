declare type Action<Ctx = any> = {
    /** 排序权重 数组从大到小排序 */
    sort: number,
    /** 类型 */
    type: number,
    /** 上下文,保存数据用 */
    ctx: Ctx
}

declare enum StageStatus {
    STAGE_COMPLETE = 1,
    STAGE_RUNNING = 0,
    STAGE_UNEXPECTED = -1
}

declare interface Creep extends RoomObject {
    memory: CreepMemo
}


declare type CreepMemo = {
    aq?: Action[]
    logistics?: Logistics
    /** 出生的房间名 */
    room: string
    /** 职业名 */
    role: string
    _move: any
}

type Logistics = {
    /** 递增搜索 Range */
    search_range: number
    /** orderId 用来取订单 */
    oId: string | null
}

type ActionGenerator<T = any> = () => Action<T>