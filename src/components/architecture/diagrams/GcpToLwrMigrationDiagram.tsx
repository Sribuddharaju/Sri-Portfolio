import { motion, useReducedMotion } from 'framer-motion';
import { DCaption, DEdge, DLane, DNode, DiagramFrame, ICONS } from '../primitives';

/**
 * GCP → Salesforce LWR migration of the SFDC Command Center.
 *
 * Two side-by-side trust domains (Before / After) with an animated
 * "in-flight" application token traveling left → right between them.
 */
export function GcpToLwrMigrationDiagram() {
  const reduced = useReducedMotion();

  return (
    <DiagramFrame
      ariaLabel="Command Center migration from GCP to Salesforce LWR"
      legend={
        <p>
          Cross-cloud auth, dual CI surface, and round-tripped REST calls go away.
          The Command Center now lives <strong>inside</strong> the Salesforce trust
          boundary — sessions, permissions, and metadata all stay in-tenant.
        </p>
      }
    >
      {/* BEFORE column */}
      <DLane x={20} y={40} w={350} h={420} title="BEFORE · GCP-hosted" accent="pink" />
      {/* AFTER column */}
      <DLane x={430} y={40} w={350} h={420} title="AFTER · Salesforce LWR" accent="emerald" />

      {/* Before nodes */}
      <DNode
        x={50}
        y={90}
        w={130}
        h={56}
        label="Browser"
        accent="pink"
        iconPath={ICONS.globe}
      />
      <DNode
        x={210}
        y={90}
        w={130}
        h={56}
        label="GCP IAM"
        sublabel="OAuth + SA key"
        accent="pink"
        iconPath={ICONS.shield}
      />
      <DNode
        x={50}
        y={185}
        w={290}
        h={66}
        label="Cloud Run"
        sublabel="Next.js + Express"
        accent="pink"
        iconPath={ICONS.cloud}
        pulse
      />
      <DNode
        x={50}
        y={290}
        w={130}
        h={56}
        label="Cross-cloud"
        sublabel="REST hop"
        accent="pink"
        iconPath={ICONS.workflow}
      />
      <DNode
        x={210}
        y={290}
        w={130}
        h={56}
        label="Salesforce"
        sublabel="Connected App"
        accent="brand"
        iconPath={ICONS.cog}
      />
      <DNode
        x={50}
        y={385}
        w={290}
        h={56}
        label="Dual CI surface"
        sublabel="GCP Build + SFDX"
        accent="pink"
        iconPath={ICONS.filecode}
      />

      {/* Edges — Before */}
      <DEdge d="M180 118 L 210 118" accent="pink" />
      <DEdge d="M180 146 C 200 146, 200 185, 195 185" accent="pink" />
      <DEdge d="M195 251 L 195 290" accent="pink" speed="slow" />
      <DEdge d="M180 318 L 210 318" accent="pink" label="x-cloud" labelX={195} labelY={306} />
      <DEdge d="M195 346 L 195 385" accent="pink" />

      {/* After nodes */}
      <DNode
        x={460}
        y={90}
        w={290}
        h={56}
        label="Browser"
        sublabel="Salesforce session cookie"
        accent="emerald"
        iconPath={ICONS.globe}
      />
      <DNode
        x={460}
        y={185}
        w={290}
        h={66}
        label="LWR React App"
        sublabel="hosted in-org"
        accent="emerald"
        iconPath={ICONS.layers}
        pulse
      />
      <DNode
        x={460}
        y={290}
        w={290}
        h={56}
        label="Apex + Named Credentials"
        sublabel="zero extra auth hop"
        accent="brand"
        iconPath={ICONS.shield}
      />
      <DNode
        x={460}
        y={385}
        w={290}
        h={56}
        label="SFDX-aware GitHub Actions"
        sublabel="lint → unit → LWR build → org push"
        accent="emerald"
        iconPath={ICONS.filecode}
      />

      {/* Edges — After */}
      <DEdge d="M605 146 L 605 185" accent="emerald" speed="fast" />
      <DEdge d="M605 251 L 605 290" accent="emerald" speed="fast" />
      <DEdge d="M605 346 L 605 385" accent="emerald" />

      {/* Migration arrow between columns */}
      <g>
        <path
          d="M385 250 C 410 250, 420 250, 445 250"
          fill="none"
          stroke="#22d3ee"
          strokeWidth={2}
          strokeOpacity={0.85}
          markerEnd="url(#arrow)"
        />
        {!reduced && (
          <motion.circle
            r={6}
            fill="#22d3ee"
            initial={{ cx: 385, cy: 250 }}
            animate={{ cx: 445, cy: 250 }}
            transition={{
              duration: 1.4,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        )}
      </g>
      <DCaption text="MIGRATE" x={415} y={234} textAnchor="middle" fontSize={10} fill="#22d3ee" />

      {/* Wins callout */}
      <g transform="translate(20, 470)">
        <DCaption text="−55% infra cost · −42% p95 latency · 2× release cadence · cross-cloud auth eliminated" x={0} y={-2} fill="#94a3b8" />
      </g>
    </DiagramFrame>
  );
}
