export default function Table({ columns, data, renderRow }) {
  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-white/10">
          <thead className="bg-white/[0.03]"><tr>{columns.map(column => <th key={column} className="px-4 py-3 text-left text-xs font-black uppercase tracking-[0.16em] text-slate-400">{column}</th>)}</tr></thead>
          <tbody className="divide-y divide-white/10 bg-black/10">{data.map(renderRow)}</tbody>
        </table>
      </div>
    </div>
  )
}
