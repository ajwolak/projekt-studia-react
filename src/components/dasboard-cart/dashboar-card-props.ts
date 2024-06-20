import React from 'react';
export type DashboardCardProps = {
    key: number;
    color: string;
    name: string;
    value: string;
    subvalue: string;
    chartRef: React.RefObject<HTMLDivElement>;
};