import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const PieChartComponent = ({ data }: { data: { value: number, name: string, color: string }[]}) => {

  return (
    <>
      <ResponsiveContainer>
        <PieChart width={600} height={400}>
          <Pie
            data={data.map(({ value, name }) => ({ name, value: Math.abs(value) }))}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={110}
            fill="#8884d8"
            label={({ name, percent }) => `${name} - ${(percent * 100).toFixed(0)}%`}
          >
            {
              data.map(({ name, color }, index) => <Cell key={`${name}-cell--${index}`} fill={color} />)
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export default PieChartComponent;