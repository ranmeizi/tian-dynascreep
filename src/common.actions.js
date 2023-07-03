global.ACTION_NAMES={
    harvest:'harvest',
    logisticsUnload:'logisticsUnload',
    logisticsSearchOrder:'logisticsSearchOrder',
    spawn:'spawn'
}

/** 
 * 创建一个 harvest action
 * @type {ActionMemoObj<HarvestCtx>} 
 */
const ActionHarvest = (ctx, sort) => {
    const action = {
        type: ACTION_NAMES.harvest,
        sort: sort,
        ctx: ctx
    }

    return action
}

/**
 * 创建一个物流任务
 * @type {ActionMemoObj<LogisticsSearchOrderCtx>} 
 */
const ActionLogisticsSearchOrder = (ctx, sort) => {
    const action = {
        type: ACTION_NAMES.logisticsSearchOrder,
        sort: sort,
        ctx: ctx
    }

    return action
}