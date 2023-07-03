declare type CreepRoleName = 'worker' | 'energyKeeper'

declare type Action<Ctx = any> = {
    /** 排序权重 数组从大到小排序 */
    sort: number,
    /** 类型 */
    type: string,
    /** 上下文,保存数据用 */
    ctx: Ctx
}

declare enum StageStatus {
    STAGE_COMPLETE = 1,
    STAGE_RUNNING = 0,
    STAGE_UNEXPECTED = -1
}

declare interface Handler<T> extends Record<string, any> {
    prepare?(subject: T): void
    run?(subject: T): void
}
