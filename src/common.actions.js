global.ACTION_NAMES={
    harvest:'harvest',
    logisticsUnload:'logisticsUnload',
    logisticsSearchOrder:'logisticsSearchOrder'
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