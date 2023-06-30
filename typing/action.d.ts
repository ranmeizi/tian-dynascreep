/**
 * @desc 将会调用 JSON.stringify ，请保证你的 ctx 可以被 json 序列化
 */
type ActionMemoObj<T = any> = (ctx: T, sort?: number) => Action<T>

// 参数们

type HarvestCtx = {
    id: string
}

type LogisticsSearchOrderCtx = {
    range: number
}

