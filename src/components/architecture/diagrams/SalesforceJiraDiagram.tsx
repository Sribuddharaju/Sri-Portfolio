import { DCaption, DEdge, DEdgeLabel, DLane, DNode, DiagramFrame, ICONS } from '../primitives';

/**
 * Salesforce ↔ Jira bi-directional sync.
 *
 * Outbound: agent action on a Case → Apex REST callout via Named Credentials.
 * Inbound: Jira webhook → Apex Site endpoint → Platform Event → handler.
 */
export function SalesforceJiraDiagram() {
  return (
    <DiagramFrame
      ariaLabel="Salesforce to Jira bi-directional integration architecture"
      legend={
        <p>
          Outbound writes go through Named Credentials so secrets never leave
          the org. Inbound updates land as Platform Events, which decouple the
          webhook handler from the apply logic — easier to retry, easier to
          test, easier to govern.
        </p>
      }
    >
      {/* 1. Lanes */}
      <DLane x={20} y={40} w={350} h={400} title="Salesforce" accent="brand" />
      <DLane x={430} y={40} w={350} h={400} title="Jira Cloud" accent="pink" />

      {/* 2. Edges */}
      {/* Salesforce internal */}
      <DEdge d="M195 152 L 195 185" accent="brand" speed="fast" />
      <DEdge d="M195 352 L 195 385" accent="emerald" speed="fast" />

      {/* Outbound (SF → Jira) */}
      <DEdge d="M340 215 L 460 120" accent="brand" />
      {/* Inbound (Jira webhook → SF Site endpoint) */}
      <DEdge d="M460 320 L 340 320" accent="pink" />

      {/* Audit (bidirectional, dashed, no flow shimmer) */}
      <DEdge d="M340 412 L 460 412" accent="emerald" bidir flow={false} dashed arrow={false} />

      {/* 3. Nodes */}
      <DNode
        x={50}
        y={90}
        w={290}
        h={62}
        label="Case (Service Cloud)"
        sublabel="Agent UI · Quick Action"
        accent="brand"
        iconPath={ICONS.user}
        pulse
      />
      <DNode
        x={50}
        y={185}
        w={290}
        h={70}
        label="Apex REST client"
        sublabel="Named Credential · retries"
        accent="brand"
        iconPath={ICONS.workflow}
      />
      <DNode
        x={50}
        y={290}
        w={290}
        h={62}
        label="Apex Site endpoint"
        sublabel="signed webhook receiver"
        accent="emerald"
        iconPath={ICONS.shield}
      />
      <DNode
        x={50}
        y={385}
        w={290}
        h={56}
        label="Platform Event handler"
        sublabel="status / comment apply"
        accent="emerald"
        iconPath={ICONS.cog}
        pulse
      />

      <DNode
        x={460}
        y={90}
        w={290}
        h={62}
        label="Jira Issue"
        sublabel="created from Case"
        accent="pink"
        iconPath={ICONS.filecode}
        pulse
      />
      <DNode
        x={460}
        y={185}
        w={290}
        h={70}
        label="Jira REST API"
        sublabel="POST /issue · /comment"
        accent="pink"
        iconPath={ICONS.cloud}
      />
      <DNode
        x={460}
        y={290}
        w={290}
        h={62}
        label="Jira Webhook"
        sublabel="status · comment · assignee"
        accent="pink"
        iconPath={ICONS.message}
      />
      <DNode
        x={460}
        y={385}
        w={290}
        h={56}
        label="Audit trail"
        sublabel="reconciliation report"
        accent="pink"
        iconPath={ICONS.search}
      />

      {/* 4. Labels */}
      <DEdgeLabel x={400} y={170} text="create" accent="brand" />
      <DEdgeLabel x={400} y={310} text="webhook" accent="pink" />

      <DCaption
        text="200+ links / month · 99.5% sync reliability"
        x={400}
        y={465}
        textAnchor="middle"
        fill="#94a3b8"
      />
    </DiagramFrame>
  );
}
