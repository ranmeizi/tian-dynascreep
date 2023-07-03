type LogisticsTask = {
    /** 资源类型 */
    resource: ResourceConstant,
    /** 需要资源量 正数代表送货单，负数代表取货单 */
    capacity: number,
    /** 坐标 */
    pos: RoomPosition,
    /** 是否保留 */
    isReserve: boolean
    /** 保留人 id */
    reservation: string
}