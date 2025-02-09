export interface SalesPerformanceProps{
    data: (number | string)[][];
    chartType: ChartType;
    // legend: string;
    // options: IOptionsChart;
};

export enum ChartType{
    LINE = "Line",
}

export interface IChart{
    title: string;
    subtitle: string;
}

export interface IOptionsChart{
    chart: IChart;
}