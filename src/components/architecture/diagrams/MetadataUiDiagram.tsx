import { DCaption, DEdge, DLane, DNode, DiagramFrame, ICONS } from '../primitives';

/**
 * Metadata-Driven Opportunity UI.
 *
 * Custom Metadata Types feed an Apex evaluator that resolves layout +
 * visibility rules every render. Admins change CMDT, the UI changes —
 * no Apex / LWC redeploy required.
 */
export function MetadataUiDiagram() {
  return (
    <DiagramFrame
      ariaLabel="Metadata-driven Opportunity UI architecture"
      legend={
        <p>
          The shell is a thin renderer. All decisions — layout, sections,
          buttons, conditional fields — are CMDT records evaluated by Apex
          per page load (~30 rules in &lt;200 ms). Admins ship UI changes
          with point-and-click; engineers never touch the bundle for a field.
        </p>
      }
    >
      <DLane x={20} y={40} w={300} h={420} title="Metadata source of truth" accent="violet" />
      <DLane x={335} y={40} w={250} h={420} title="Apex evaluator" accent="brand" />
      <DLane x={605} y={40} w={175} h={420} title="UI shell" accent="emerald" />

      {/* CMDT records */}
      <DNode
        x={50}
        y={90}
        w={240}
        h={60}
        label="Layout CMDT"
        sublabel="sections · columns"
        accent="violet"
        iconPath={ICONS.layers}
      />
      <DNode
        x={50}
        y={170}
        w={240}
        h={60}
        label="Field CMDT"
        sublabel="visibility · required · readonly"
        accent="violet"
        iconPath={ICONS.workflow}
      />
      <DNode
        x={50}
        y={250}
        w={240}
        h={60}
        label="Action CMDT"
        sublabel="buttons · headers · stages"
        accent="violet"
        iconPath={ICONS.cog}
      />
      <DNode
        x={50}
        y={330}
        w={240}
        h={60}
        label="Rule CMDT"
        sublabel="JSON criteria · FLS allowlist"
        accent="violet"
        iconPath={ICONS.shield}
        pulse
      />

      {/* Apex evaluator */}
      <DNode
        x={355}
        y={130}
        w={210}
        h={64}
        label="Apex Service"
        sublabel="LWC adapter"
        accent="brand"
        iconPath={ICONS.cog}
      />
      <DNode
        x={355}
        y={210}
        w={210}
        h={70}
        label="Formula Evaluator"
        sublabel="AND · OR · ISPICKVAL · ISBLANK"
        accent="brand"
        iconPath={ICONS.brain}
        pulse
      />
      <DNode
        x={355}
        y={295}
        w={210}
        h={64}
        label="Wrapper builder"
        sublabel="resolved view model"
        accent="brand"
        iconPath={ICONS.layers}
      />

      {/* UI shell */}
      <DNode
        x={620}
        y={130}
        w={150}
        h={60}
        label="FlexiPage"
        sublabel="container"
        accent="emerald"
        iconPath={ICONS.layers}
      />
      <DNode
        x={620}
        y={210}
        w={150}
        h={70}
        label="Shell LWC"
        sublabel="thin renderer"
        accent="emerald"
        iconPath={ICONS.workflow}
        pulse
      />
      <DNode
        x={620}
        y={295}
        w={150}
        h={60}
        label="Opportunity"
        sublabel="rendered page"
        accent="emerald"
        iconPath={ICONS.user}
      />

      {/* Edges into evaluator */}
      <DEdge d="M290 120 C 320 120, 330 145, 355 158" accent="violet" />
      <DEdge d="M290 200 C 320 200, 330 215, 355 240" accent="violet" />
      <DEdge d="M290 280 C 320 280, 330 270, 355 252" accent="violet" />
      <DEdge d="M290 360 C 320 360, 330 290, 355 273" accent="violet" />

      {/* Apex internal flow */}
      <DEdge d="M460 194 L 460 210" accent="brand" speed="fast" />
      <DEdge d="M460 280 L 460 295" accent="brand" speed="fast" />

      {/* Apex → UI */}
      <DEdge d="M565 162 L 620 160" accent="emerald" label="layout" labelX={593} labelY={148} />
      <DEdge d="M565 245 L 620 245" accent="emerald" label="rules" labelX={593} labelY={233} />
      <DEdge d="M565 327 L 620 325" accent="emerald" />

      <DCaption text="100+ records" x={170} y={60} textAnchor="middle" fill="#a78bfa" />
      <DCaption text="< 200 ms / page" x={460} y={400} textAnchor="middle" fill="#3b8ff6" />
    </DiagramFrame>
  );
}
