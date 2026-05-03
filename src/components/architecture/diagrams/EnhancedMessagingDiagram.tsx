import { DEdge, DEdgeLabel, DLane, DNode, DiagramFrame, ICONS } from '../primitives';

/**
 * Enhanced Messaging with real-time translation across 12+ languages.
 *
 * Customer ↔ Conversation API ↔ Agent LWC, with LibreTranslate
 * sandwiched on both sides. Forward path runs Customer → Conv API →
 * Translate → Routing → Agent. Reverse path runs along the bottom of
 * the diagram so it never crosses the forward stack.
 */
export function EnhancedMessagingDiagram() {
  return (
    <DiagramFrame
      ariaLabel="Enhanced Messaging with real-time translation architecture"
      legend={
        <p>
          The customer types in their language; the agent always sees English.
          Replies make the same round-trip in reverse — context never leaves
          Salesforce, Omni-Channel routing and SLA milestones still apply.
        </p>
      }
    >
      {/* 1. Lanes */}
      <DLane x={20} y={40} w={210} h={420} title="Customer" accent="cyan" />
      <DLane x={245} y={40} w={310} h={420} title="Salesforce" accent="brand" />
      <DLane x={570} y={40} w={210} h={420} title="Agent" accent="emerald" />

      {/* 2. Edges — Forward path (top half) */}
      <DEdge d="M215 195 C 245 195, 250 122, 265 122" accent="cyan" />
      <DEdge d="M400 152 L 400 175" accent="violet" speed="fast" />
      <DEdge d="M400 240 L 400 265" accent="violet" speed="fast" />
      <DEdge d="M535 297 C 560 230, 580 215, 595 210" accent="emerald" />

      {/* SLA & entitlements receive a copy of every routed message */}
      <DEdge d="M400 330 L 400 355" accent="emerald" dashed flow={false} />

      {/* Reverse path along the bottom (agent reply -> customer) */}
      <DEdge
        d="M595 230 C 580 410, 230 410, 215 220"
        accent="violet"
        speed="slow"
      />

      {/* 3. Nodes */}
      <DNode
        x={45}
        y={170}
        w={170}
        h={80}
        label="Customer"
        sublabel="any of 12+ languages"
        accent="cyan"
        iconPath={ICONS.user}
        pulse
      />

      <DNode
        x={265}
        y={90}
        w={270}
        h={60}
        label="Conversation API"
        sublabel="Messaging for Web/Mobile"
        accent="brand"
        iconPath={ICONS.message}
      />
      <DNode
        x={265}
        y={175}
        w={270}
        h={64}
        label="LibreTranslate"
        sublabel="auto-detect → EN"
        accent="violet"
        iconPath={ICONS.translate}
        pulse
      />
      <DNode
        x={265}
        y={265}
        w={270}
        h={64}
        label="Omni-Channel routing"
        sublabel="skill · queue · presence"
        accent="brand"
        iconPath={ICONS.workflow}
      />
      <DNode
        x={265}
        y={355}
        w={270}
        h={64}
        label="SLA + Entitlements"
        sublabel="milestones · escalation"
        accent="emerald"
        iconPath={ICONS.gauge}
      />

      <DNode
        x={595}
        y={170}
        w={160}
        h={80}
        label="Agent LWC"
        sublabel="EN view · context"
        accent="emerald"
        iconPath={ICONS.chat}
        pulse
      />

      {/* 4. Labels */}
      <DEdgeLabel x={245} y={158} text="msg" accent="cyan" />
      <DEdgeLabel x={400} y={252} text="EN" accent="violet" />
      <DEdgeLabel x={563} y={258} text="route" accent="emerald" />
      <DEdgeLabel x={400} y={420} text="reply" accent="violet" />
    </DiagramFrame>
  );
}
