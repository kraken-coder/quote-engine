import React, { useState } from 'react'
import { PieChart, Pie, Sector } from 'recharts'

const data = [
  { name: 'Professors', value: 400 },
  { name: 'Laywers', value: 300 },
  { name: 'Doctors ', value: 300 },
  { name: 'Engineers', value: 200 },
]

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fontSize={30} fill="#01adfd">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

const PieComp = props => {
  const [index, setIndex] = useState(0)

  const onPieEnter = (data, idx) => {
    setIndex(idx)
  }

  return (
    <PieChart width={600} height={600}>
      <Pie
        activeIndex={index}
        activeShape={renderActiveShape}
        data={data}
        cx={200}
        cy={240}
        innerRadius={100}
        outerRadius={120}
        fill="#ae83b9"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  )
}

const memo = React.memo(PieComp)

export default memo
