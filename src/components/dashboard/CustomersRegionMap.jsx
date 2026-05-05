import { useEffect, useMemo, useState } from 'react'
import { MapPin, Navigation, RadioTower } from 'lucide-react'
import Card from '../ui/Card'

const GEO_URL = 'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson'

const MAP = {
  width: 760,
  height: 560,
  minLon: -74.0,
  maxLon: -34.8,
  minLat: -33.8,
  maxLat: 5.3,
}

const locations = [
  {
    business: 'Princessmel Modas',
    city: 'Angra dos Reis',
    state: 'RJ',
    clients: 1,
    orders: 2,
    lat: -23.0067,
    lon: -44.3181,
    tone: '#38bdf8',
    description: 'Cliente real localizado em Angra dos Reis/RJ.',
  },
  {
    business: 'Studio Bella',
    city: 'Paraty',
    state: 'RJ',
    clients: 1,
    orders: 1,
    lat: -23.2178,
    lon: -44.7131,
    tone: '#a78bfa',
    description: 'Cliente próximo no litoral sul fluminense.',
  },
  {
    business: 'Lead Rio',
    city: 'Rio de Janeiro',
    state: 'RJ',
    clients: 1,
    orders: 1,
    lat: -22.9068,
    lon: -43.1729,
    tone: '#34d399',
    description: 'Oportunidade regional em capital.',
  },
  {
    business: 'Lead São Paulo',
    city: 'São Paulo',
    state: 'SP',
    clients: 1,
    orders: 1,
    lat: -23.5505,
    lon: -46.6333,
    tone: '#fbbf24',
    description: 'Oportunidade de expansão comercial.',
  },
]

function project(lon, lat) {
  const x = ((lon - MAP.minLon) / (MAP.maxLon - MAP.minLon)) * MAP.width
  const y = ((MAP.maxLat - lat) / (MAP.maxLat - MAP.minLat)) * MAP.height
  return [x, y]
}

function polygonToPath(polygon) {
  return polygon
    .map(ring => {
      return (
        ring
          .map(([lon, lat], index) => {
            const [x, y] = project(lon, lat)
            return `${index === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`
          })
          .join(' ') + ' Z'
      )
    })
    .join(' ')
}

function geometryToPath(geometry) {
  if (!geometry) return ''
  if (geometry.type === 'Polygon') return polygonToPath(geometry.coordinates)
  if (geometry.type === 'MultiPolygon') return geometry.coordinates.map(polygonToPath).join(' ')
  return ''
}

function FallbackBrazilShape() {
  return (
    <path
      d="M340 34C405 42 465 80 501 139C560 158 594 220 572 278C615 340 573 418 506 432C478 498 413 541 342 526C282 572 199 545 179 474C117 445 97 362 141 309C111 252 143 183 203 166C218 92 271 26 340 34Z"
      fill="url(#brazilFill)"
      stroke="rgba(125,211,252,.32)"
      strokeWidth="1.5"
    />
  )
}

export default function CustomersRegionMap() {
  const [geographies, setGeographies] = useState([])
  const [geoStatus, setGeoStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false

    async function loadMap() {
      try {
        const response = await fetch(GEO_URL)
        if (!response.ok) throw new Error('GeoJSON indisponível')
        const data = await response.json()

        if (!cancelled) {
          setGeographies(data.features || [])
          setGeoStatus('ready')
        }
      } catch (error) {
        if (!cancelled) setGeoStatus('fallback')
      }
    }

    loadMap()

    return () => {
      cancelled = true
    }
  }, [])

  const markers = useMemo(() => {
    return locations.map(location => {
      const [x, y] = project(location.lon, location.lat)
      return { ...location, x, y }
    })
  }, [])

  return (
    <Card className="overflow-hidden">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-black">Clientes por região</h3>
          <p className="mt-1 text-sm text-slate-400">
            Mapa real do Brasil com clientes posicionados por latitude e longitude.
          </p>
        </div>

        <div className="rounded-2xl border border-sky-300/20 bg-sky-400/10 p-3 text-sky-200">
          <Navigation size={20} />
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.18fr_0.82fr]">
        <div className="relative min-h-[520px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#050816]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_45%,rgba(56,189,248,.22),transparent_36%),radial-gradient(circle_at_30%_80%,rgba(168,85,247,.16),transparent_30%)]" />
          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:38px_38px]" />

          <svg
            viewBox={`0 0 ${MAP.width} ${MAP.height}`}
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

              <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect width={MAP.width} height={MAP.height} fill="transparent" />

            {geoStatus === 'ready' ? (
              geographies.map((feature, index) => (
                <path
                  key={feature.id || feature.properties?.name || index}
                  d={geometryToPath(feature.geometry)}
                  fill="url(#brazilFill)"
                  stroke="rgba(125,211,252,.24)"
                  strokeWidth="0.9"
                  vectorEffect="non-scaling-stroke"
                  filter="url(#mapGlow)"
                />
              ))
            ) : (
              <FallbackBrazilShape />
            )}

            {markers.map(marker => (
              <g key={marker.business} transform={`translate(${marker.x} ${marker.y})`}>
                <circle r="20" fill={marker.tone} opacity="0.13">
                  <animate attributeName="r" values="12;28;12" dur="2.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.25;0.04;0.25" dur="2.6s" repeatCount="indefinite" />
                </circle>

                <circle r="6" fill={marker.tone} stroke="rgba(255,255,255,.9)" strokeWidth="2" />
                <circle r="2" fill="white" />
              </g>
            ))}
          </svg>

          <div className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-200">Brasil map</p>
            <p className="mt-1 text-sm text-slate-300">
              {geoStatus === 'ready' ? 'GeoJSON real carregado' : 'Fallback visual ativo'}
            </p>
          </div>

          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-sky-200">
              <RadioTower size={14} /> Regional insight
            </div>

            <p className="mt-2 text-sm text-slate-300">
              Princessmel Modas marcada por coordenada real em Angra dos Reis/RJ.
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
