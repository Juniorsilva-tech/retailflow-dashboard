import { Navigation, MapPin, RadioTower } from 'lucide-react'
import Card from '../ui/Card'

const MAP_W = 760
const MAP_H = 640

const BRAZIL_XY = [234, 128]
const BRAZIL_WH = [292, 340]
const MAP_L = BRAZIL_XY[0]
const MAP_T = BRAZIL_XY[1]

function normalizeX(x) {
  return MAP_L + (x / 60) * BRAZIL_WH[0]
}

function normalizeY(y) {
  return MAP_T + (y / 50) * BRAZIL_WH[1]
}

const BRAZIL_PATH = [
  [0, 0],
  [1.5, 0],
  [2, 2],
  [4, 4],
  [7, 5],
  [10, 5],
  [13, 6],
  [16, 6],
  [19, 7],
  [21, 7],
  [23, 8],
  [24, 9],
  [25, 9],
  [26, 11],
  [26, 12],
  [28, 14],
  [30, 14],
  [32, 16],
  [34, 17],
  [36, 18],
  [37, 20],
  [38, 22],
  [37, 24],
  [36, 25],
  [35, 26],
  [34, 28],
  [34, 29],
  [34, 30],
  [33, 32],
  [32, 34],
  [31, 36],
  [30, 37],
  [29, 38],
  [27, 39],
  [25, 40],
  [23, 41],
  [21, 42],
  [20, 43],
  [18, 44],
  [16, 44],
  [14, 44],
  [12, 44],
  [10, 43],
  [8, 43],
  [6, 42],
  [5, 41],
  [4, 39],
  [3, 38],
  [1, 37],
  [0, 36],
  [0, 0],
]
  .map(([rawX, rawY]) => `${normalizeX(rawX).toFixed(2)} ${normalizeY(rawY).toFixed(2)}`)
  .join(' L ')
  .replace(/^L /, 'M ')

const locations = [
  {
    business: 'Princessmel Modas',
    city: 'Angra dos Reis',
    state: 'RJ',
    clients: 1,
    orders: 2,
    x: normalizeX(20.5),
    y: normalizeY(31.8),
    tone: '#38bdf8',
    description: 'Cliente real em Angra dos Reis/RJ.',
  },
  {
    business: 'Studio Bella',
    city: 'Paraty',
    state: 'RJ',
    clients: 1,
    orders: 1,
    x: normalizeX(20.1),
    y: normalizeY(33.6),
    tone: '#a78bfa',
    description: 'Cliente no litoral sul fluminense.',
  },
  {
    business: 'Lead Rio',
    city: 'Rio de Janeiro',
    state: 'RJ',
    clients: 1,
    orders: 1,
    x: normalizeX(21.8),
    y: normalizeY(29.9),
    tone: '#34d399',
    description: 'Oportunidade regional em capital.',
  },
  {
    business: 'Lead São Paulo',
    city: 'São Paulo',
    state: 'SP',
    clients: 1,
    orders: 1,
    x: normalizeX(18.5),
    y: normalizeY(33.3),
    tone: '#fbbf24',
    description: 'Oportunidade de expansão.',
  },
]

export default function CustomersRegionMap() {
  return (
    <Card className="overflow-hidden">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-black">Clientes por região</h3>
          <p className="mt-1 text-sm text-slate-400">
            Mapa do Brasil com clientes posicionados por cidade.
          </p>
        </div>

        <div className="rounded-2xl border border-sky-300/20 bg-sky-400/10 p-3 text-sky-200">
          <Navigation size={20} />
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.18fr_0.82fr]">
        <div className="relative min-h-[540px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#050816]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_45%,rgba(56,189,248,.22),transparent_36%),radial-gradient(circle_at_30%_80%,rgba(168,85,247,.16),transparent_30%)]" />
          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:38px_38px]" />

          <svg
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="absolute inset-0 h-full w-full p-6"
            role="img"
            aria-label="Mapa do Brasil com clientes por região"
          >
            <defs>
              <linearGradient id="brazilFill" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(56,189,248,.18)" />
                <stop offset="48%" stopColor="rgba(14,165,233,.08)" />
                <stop offset="100%" stopColor="rgba(168,85,247,.14)" />
              </linearGradient>
            </defs>

            <path
              d={BRAZIL_PATH}
              fill="url(#brazilFill)"
              stroke="rgba(125,211,252,.32)"
              strokeWidth="1.5"
            />

            {locations.map(loc => (
              <g key={loc.business} transform={`translate(${loc.x} ${loc.y})`}>
                <circle r="20" fill={loc.tone} opacity="0.13">
                  <animate attributeName="r" values="12;28;12" dur="2.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.25;0.04;0.25" dur="2.6s" repeatCount="indefinite" />
                </circle>
                <circle r="6" fill={loc.tone} stroke="rgba(255,255,255,.9)" strokeWidth="2" />
                <circle r="2" fill="white" />
              </g>
            ))}
          </svg>

          <div className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-200">Brasil map</p>
            <p className="mt-1 text-sm text-slate-300">Posicionamento por cidade</p>
          </div>

          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-sky-200">
              <RadioTower size={14} /> Regional insight
            </div>
            <p className="mt-2 text-sm text-slate-300">
              Princessmel Modas marcada em Angra dos Reis/RJ.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {locations.map(location => (
            <div key={location.business} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-black text-white">{location.business}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {location.city} · {location.state}
                  </p>
                </div>
                <MapPin style={{ color: location.tone }} size={18} />
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">{location.description}</p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-black/25 p-3">
                  <p className="text-lg font-black">{location.clients}</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">clientes</p>
                </div>
                <div className="rounded-xl bg-black/25 p-3">
                  <p className="text-lg font-black">{location.orders}</p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">pedidos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
