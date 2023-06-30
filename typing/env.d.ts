/** 阶段性胜利！ */
declare var STAGE_COMPLETE: StageStatus.STAGE_COMPLETE
/** 还未胜利，还需努力 */
declare var STAGE_RUNNING: StageStatus.STAGE_RUNNING
/** 发生小问题！ */
declare var STAGE_UNEXPECTED: StageStatus.STAGE_UNEXPECTED

/** action 一个有意义的名字 */
declare var ACTION_NAMES: {
    /**
     * 采集
     */
    harvest: 'harvest',
    /** 
     * 物流卸货
     */
    logisticsUnload: 'logisticsUnload',
    /**
     * 物流接单
     */
    logisticsSearchOrder:'logisticsSearchOrder'
}