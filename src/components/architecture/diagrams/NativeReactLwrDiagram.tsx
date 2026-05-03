import { DCaption, DEdge, DLane, DNode, DiagramFrame, ICONS } from '../primitives';

/**
 * Native React app shipped through Salesforce LWR.
 *
 * Build pipeline runs on the left (SFDX repo → Vite-style build → LWR module),
 * runtime on the right (LWR shell, custom React surface, Apex data layer
 * gated by FLS).
 */
export function NativeReactLwrDiagram() {
  return (
    <DiagramFrame
      ariaLabel="Native React on Salesforce LWR architecture"
      legend={
        <p>
          A custom LWR module + manifest pipeline ships a real React bundle into
          Salesforce. Every fetch goes through Apex with CRUD/FLS so the React
          surface inherits the same trust model as a standard LWC app.
        </p>
      }
    >
      {/* 1. Lanes */}
      <DLane x={20} y={40} w={320} h={420} title="Build pipeline · SFDX" accent="cyan" />
      <DLane x={355} y={40} w={425} h={420} title="Runtime · Salesforce LWR" accent="brand" />

      {/* 2. Edges */}
      {/* Build column (vertical chain) */}
      <DEdge d="M185 144 L 185 170" accent="cyan" speed="fast" />
      <DEdge d="M185 234 L 185 260" accent="cyan" speed="fast" />
      <DEdge d="M185 324 L 185 350" accent="cyan" speed="fast" />

      {/* Build → Runtime: route around the runtime stack via the
          space between the LWR Site box (top) and the lane edge. */}
      <DEdge d="M320 380 C 360 380, 360 60, 567 60 L 567 80" accent="cyan" />

      {/* Runtime column */}
      <DEdge d="M567 144 L 470 170" accent="brand" />
      <DEdge d="M567 144 L 665 170" accent="brand" />
      <DEdge d="M470 234 L 470 260" accent="brand" speed="fast" />
      <DEdge d="M665 234 L 665 260" accent="brand" speed="fast" />
      <DEdge d="M567 324 L 567 350" accent="emerald" speed="fast" />

      {/* 3. Nodes — Build column */}
      <DNode
        x={50}
        y={80}
        w={270}
        h={64}
        label="Source repo"
        sublabel="React 18 + TS + Tailwind"
        accent="cyan"
        iconPath={ICONS.filecode}
      />
      <DNode
        x={50}
        y={170}
        w={270}
        h={64}
        label="Build step"
        sublabel="Vite-style bundler"
        accent="cyan"
        iconPath={ICONS.cog}
      />
      <DNode
        x={50}
        y={260}
        w={270}
        h={64}
        label="LWR module + manifest"
        sublabel="custom packaging"
        accent="cyan"
        iconPath={ICONS.layers}
        pulse
      />
      <DNode
        x={50}
        y={350}
        w={270}
        h={64}
        label="SFDX deploy"
        sublabel="scratch · packaging · prod"
        accent="cyan"
        iconPath={ICONS.workflow}
      />

      {/* Nodes — Runtime column */}
      <DNode
        x={385}
        y={80}
        w={365}
        h={64}
        label="LWR Site"
        sublabel="Salesforce Lightning Web Runtime"
        accent="brand"
        iconPath={ICONS.globe}
      />
      <DNode
        x={385}
        y={170}
        w={170}
        h={64}
        label="React Shell"
        sublabel="router + theming"
        accent="brand"
        iconPath={ICONS.layers}
        pulse
      />
      <DNode
        x={580}
        y={170}
        w={170}
        h={64}
        label="Component lib"
        sublabel="20+ shared modules"
        accent="brand"
        iconPath={ICONS.workflow}
      />
      <DNode
        x={385}
        y={260}
        w={365}
        h={64}
        label="Typed data layer"
        sublabel="React Query · Apex REST · Connect API"
        accent="brand"
        iconPath={ICONS.search}
      />
      <DNode
        x={385}
        y={350}
        w={365}
        h={64}
        label="Apex services"
        sublabel="WITH USER_MODE · CRUD/FLS · sharing"
        accent="emerald"
        iconPath={ICONS.shield}
      />

      {/* 4. Step indicators (no edge labels — the column-to-column curve
          and per-row arrows are self-explanatory). */}
      <DCaption text="01" x={50} y={70} fill="#22d3ee" fontSize={10} />
      <DCaption text="02" x={50} y={160} fill="#22d3ee" fontSize={10} />
      <DCaption text="03" x={50} y={250} fill="#22d3ee" fontSize={10} />
      <DCaption text="04" x={50} y={340} fill="#22d3ee" fontSize={10} />
    </DiagramFrame>
  );
}
