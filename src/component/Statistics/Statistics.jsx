import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
    const assignment = useLoaderData();
    return (
        <div style={{ marginTop: "100px" }}>
            <ComposedChart
                width={1400}
                height={600}
                data={assignment}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="marks" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="marks" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;