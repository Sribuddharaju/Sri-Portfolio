import { DCaption, DEdge, DLane, DNode, DiagramFrame, ICONS } from '../primitives';

/**
 * Enhanced Messaging with real-time translation across 12+ languages.
 *
 * Customer ↔ Conversation API ↔ Agent LWC, with LibreTranslate
 * sandwiched on both sides — all gated by Omni-Channel routing,
 * SLA milestones, and Flow-driven assignment.
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
      <DLane x={20} y={40} w={210} h={420} title="Customer" accent="cyan" />
      <DLane x={245} y={40} w={310} h={420} title="Salesforce" accent="brand" />
      <DLane x={570} y={40} w={210} h={420} title="Agent" accent="emerald" />

      {/* Customer */}
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

      {/* Salesforce internals */}
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

      {/* Agent */}
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

      {/* Forward translation flow */}
      <DEdge d="M215 195 C 240 195, 250 122, 265 122" accent="cyan" label="msg" labelX={246} labelY={158} />
      <DEdge d="M400 152 L 400 175" accent="violet" speed="fast" />
      <DEdge d="M400 240 L 400 265" accent="violet" speed="fast" />
      <DEdge d="M400 330 C 400 360, 480 220, 595 210" accent="emerald" label="EN" labelX={520} labelY={170} />

      {/* Reverse translation flow */}
      <DEdge
        d="M595 230 C 480 250, 420 280, 400 240"
        accent="emerald"
        speed="slow"
      />
      <DEdge
        d="M265 207 C 240 215, 240 220, 215 220"
        accent="violet"
        speed="slow"
        label="reply"
        labelX={245}
        labelY={232}
      />

      {/* Step labels */}
      <DCaption text="1 detect" x={246} y={140} textAnchor="middle" fill="#a78bfa" />
      <DCaption text="2 route" x={400} y={258} textAnchor="middle" fill="#3b8ff6" />
      <DCaption text="3 reply" x={520} y={158} textAnchor="middle" fill="#10b981" />
    </DiagramFrame>
  );
}
