import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';
import SectionHeader from '../ui/SectionHeader';
import portfolioData from '../../data/portfolioData';

// ─── Colour helpers ───────────────────────────────────────────────────────────
// Bars with 2 projects get the brighter cyan accent; those with 1 get a softer sky.
const BAR_COLOR_HIGH = 'rgba(6,182,212,0.80)';   // accent-cyan at full 2-project weight
const BAR_COLOR_MID  = 'rgba(14,165,233,0.65)';  // accent-sky for 1-project entries

// ─── Custom Tooltip ───────────────────────────────────────────────────────────
interface TooltipProps {
  active?: boolean;
  payload?: { value: number; name: string }[];
  label?: string;
}

function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length) return null;
  const count = payload[0].value;
  return (
    <div
      className="glass rounded-xl px-3 py-2 border border-navy-500/60 shadow-card text-xs"
      role="status"
    >
      <p className="text-text-primary font-semibold mb-0.5">{label}</p>
      <p className="text-accent-cyan">
        {count} featured {count === 1 ? 'project' : 'projects'}
      </p>
    </div>
  );
}

// ─── Custom bar shape with rounded right end ──────────────────────────────────
interface RoundedBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
}

function RoundedBar({ x = 0, y = 0, width = 0, height = 0, fill }: RoundedBarProps) {
  if (width <= 0) return null;
  const r = Math.min(4, height / 2);
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={r} ry={r} fill={fill} />
    </g>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ProjectInsights() {
  const raw = portfolioData.projectTechnologyUsage;

  // Sort descending by projects count, stable sort preserves original order for ties
  const data = useMemo(
    () => [...raw].sort((a, b) => b.projects - a.projects),
    [raw]
  );

  const maxProjects = Math.max(...data.map((d) => d.projects));
  // Ceiling to next integer ≥ maxProjects, minimum 3 for a clean axis
  const axisDomain: [number, number] = [0, Math.max(3, maxProjects)];

  // Mobile: taller to keep labels readable; desktop: compact
  const chartHeight = data.length * 42 + 40; // ~42px per bar + margins

  return (
    <section
      id="project-insights"
      aria-labelledby="insights-heading"
      aria-describedby="insights-desc"
      className="py-20 bg-navy-900/40 relative"
    >
      <div className="divider-glow mb-0" />

      <div className="section-container pt-8">
        <SectionHeader
          eyebrow="Project Insights"
          title="Technology Across"
          titleHighlight="My Projects"
          subtitle="A factual overview of the technologies used across my featured projects."
        />

        {/* Screen-reader summary */}
        <p id="insights-desc" className="sr-only">
          Horizontal bar chart showing how many of my {portfolioData.projects.length} featured projects
          use each technology. Values are project counts, not skill ratings or percentages.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-10"
        >
          <div className="card border border-navy-600/40 p-4 sm:p-6 overflow-hidden">
            {/* Chart label */}
            <p
              id="insights-heading"
              className="text-xs text-text-muted font-medium uppercase tracking-widest mb-4"
            >
              Number of featured projects
            </p>

            {/* Recharts — height is driven by the number of bars so labels never overlap */}
            <ResponsiveContainer width="100%" height={chartHeight}>
              <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 0, right: 36, bottom: 0, left: 8 }}
                barCategoryGap="28%"
              >
                <CartesianGrid
                  horizontal={false}
                  strokeDasharray="3 3"
                  stroke="rgba(100,116,139,0.18)"
                />

                {/* Y axis — technology names */}
                <YAxis
                  dataKey="technology"
                  type="category"
                  width={148}
                  tick={{
                    fill: 'rgba(148,163,184,0.85)',
                    fontSize: 12,
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                {/* X axis — integer project count */}
                <XAxis
                  type="number"
                  domain={axisDomain}
                  allowDecimals={false}
                  tickCount={axisDomain[1] + 1}
                  tick={{
                    fill: 'rgba(100,116,139,0.7)',
                    fontSize: 11,
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                  axisLine={{ stroke: 'rgba(100,116,139,0.25)' }}
                  tickLine={false}
                />

                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: 'rgba(6,182,212,0.05)' }}
                />

                <Bar
                  dataKey="projects"
                  shape={<RoundedBar />}
                  isAnimationActive={true}
                  animationDuration={700}
                  animationEasing="ease-out"
                  label={{
                    position: 'right',
                    formatter: (v: React.ReactNode) => v,
                    fill: 'rgba(103,232,249,0.9)',
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Inter, system-ui, sans-serif',
                  }}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.projects >= 2 ? BAR_COLOR_HIGH : BAR_COLOR_MID}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            {/* Legend / caption */}
            <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-navy-700/50">
              <div className="flex items-center gap-1.5">
                <span
                  className="inline-block w-3 h-3 rounded-sm"
                  style={{ background: BAR_COLOR_HIGH }}
                  aria-hidden="true"
                />
                <span className="text-xs text-text-muted">Used in 2 projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className="inline-block w-3 h-3 rounded-sm"
                  style={{ background: BAR_COLOR_MID }}
                  aria-hidden="true"
                />
                <span className="text-xs text-text-muted">Used in 1 project</span>
              </div>
              <p className="text-xs text-text-muted ml-auto">
                Based on {portfolioData.projects.length} featured projects
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
