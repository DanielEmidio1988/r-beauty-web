import { CurveType } from "@mui/x-charts";

export interface ChartDataProps {
    data: SeriesChart;
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


export type SeriesChart = {
    data: (number | null)[];
    label: string;
    curve?: CurveType;
}[]