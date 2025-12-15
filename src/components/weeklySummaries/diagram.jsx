import { BarChart, Bar, ReferenceLine, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Diagram = ({ logs = [] }) => {


  const weekdays = ['mån', 'tis', 'ons', 'tors', 'fre', 'lör', 'sön'];


  const logMap = {};
  logs.forEach(log => {
    const dayLetter = new Date(log.date).toLocaleDateString('sv-SE', { weekday: 'short' });
    logMap[dayLetter] = (logMap[dayLetter] || 0) + log.hours + log.minutes / 60;
  });


  const data = weekdays.map(day => ({
    name: day,
    uv: logMap[day] || 0
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
        barCategoryGap={10}
      >
        <XAxis dataKey="name" />
        <YAxis domain={[0,15]} />
        <Tooltip formatter={(value) => `${Math.floor(value)}h ${Math.round((value % 1) * 60)}min`} />
        <ReferenceLine y={8.5} stroke="white" strokeDasharray="3 3" />
        <Bar dataKey="uv" fill="#4caf50" radius={[4, 4, 0, 4]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Diagram;
