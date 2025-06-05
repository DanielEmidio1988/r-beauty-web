export interface ChartDataProps {
    data: (number | string)[][];
    chartType: ChartType;
    titleChart: string;
    legend: string;
    options: IOptionsChart;
}

export enum ChartType {
    LINE = "Line",
}

export interface IChart {
    title: string;
    subtitle?: string;
}

export interface IOptionsChart {
    chart: IChart;
}
