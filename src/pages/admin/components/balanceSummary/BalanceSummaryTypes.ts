export interface BalanceSummaryProps{
    summarys: ISummary[];
}

export interface ISummary{
    value: number,
    description: string,
    growthSummary: number,
    labelGrowthSummary: string,
    color: string,
}