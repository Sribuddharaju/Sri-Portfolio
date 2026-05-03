import { DCaption, DEdge, DLane, DNode, DiagramFrame, ICONS } from '../primitives';

/**
 * SFDC Command Center — full sprint-execution platform.
 *
 *   User / Webex                       (left)
 *     │
 *     ▼
 *   LWR-hosted React UI               (top middle, inside Salesforce)
 *     │
 *     ▼
 *   Apex orchestrator                 (centre)
 *     ├─► Tooling / REST API          (right top)     ─► Org metadata
 *     ├─► Cisco Circuit LLM router    (right middle)  ─► tier router
 *     └─► Firestore prompt registry   (right bottom)  ─► versioned prompts
 *
 *   Playwright agentic test runner    (bottom)
 */
export function CommandCenterDiagram() {
  return (
    <DiagramFrame
      ariaLabel="SFDC Command Center architecture"
      legend={
        <p>
          User stories enter via Webex bot or the LWR React UI, fan out through
          an Apex orchestration layer that calls Salesforce metadata APIs,
          a 3-tier LLM router, and a versioned prompt registry — then close
          the loop with Playwright-driven validation.
        </p>
      }
    >
      {/* Trust boundary lanes */}
      <DLane x={20} y={40} w={310} h={420} title="User entry" accent="cyan" />
      <DLane x={345} y={40} w={250} h={420} title="Salesforce LWR (org)" accent="brand" />
      <DLane x={610} y={40} w={170} h={420} title="External services" accent="violet" align="right" />

      {/* User/Webex */}
      <DNode
        x={45}
        y={80}
        w={210}
        h={64}
        label="Developer"
        sublabel="@bot enhance story #1234"
        accent="cyan"
        iconPath={ICONS.user}
      />
      <DNode
        x={45}
        y={170}
        w={210}
        h={64}
        label="Webex Bot"
        sublabel="prod / sandbox session split"
        accent="cyan"
        iconPath={ICONS.bot}
      />
      <DNode
        x={45}
        y={300}
        w={210}
        h={64}
        label="Playwright Runner"
        sublabel="UI / backend classification"
        accent="emerald"
        iconPath={ICONS.gauge}
      />

      {/* LWR React UI */}
      <DNode
        x={365}
        y={80}
        w={210}
        h={64}
        label="LWR React UI"
        sublabel="native to Salesforce"
        accent="brand"
        iconPath={ICONS.layers}
        pulse
      />

      {/* Apex orchestrator */}
      <DNode
        x={365}
        y={210}
        w={210}
        h={70}
        label="Apex Orchestrator"
        sublabel="auth · routing · audit"
        accent="brand"
        iconPath={ICONS.workflow}
      />

      {/* Code-gen + PR sink */}
      <DNode
        x={365}
        y={335}
        w={210}
        h={64}
        label="Generated PR"
        sublabel="Apex · LWC · tests · docs"
        accent="brand"
        iconPath={ICONS.pr}
      />

      {/* External services */}
      <DNode
        x={620}
        y={80}
        w={150}
        h={62}
        label="Tooling / REST"
        sublabel="18K metadata"
        accent="violet"
        iconPath={ICONS.search}
      />
      <DNode
        x={620}
        y={210}
        w={150}
        h={70}
        label="Circuit LLM"
        sublabel="3-tier routing"
        accent="violet"
        iconPath={ICONS.brain}
        pulse
      />
      <DNode
        x={620}
        y={335}
        w={150}
        h={62}
        label="Firestore"
        sublabel="prompt registry"
        accent="violet"
        iconPath={ICONS.database}
      />

      {/* Edges — entry */}
      <DEdge
        d="M255 112 C 290 112, 305 112, 365 112"
        accent="cyan"
        label="story"
        labelX={310}
        labelY={100}
      />
      <DEdge
        d="M255 202 C 305 202, 320 202, 365 232"
        accent="cyan"
      />

      {/* UI -> Orchestrator */}
      <DEdge
        d="M470 144 L 470 210"
        accent="brand"
        speed="fast"
      />

      {/* Orchestrator -> external */}
      <DEdge
        d="M575 230 C 600 220, 605 120, 620 112"
        accent="violet"
        label="metadata"
        labelX={620}
        labelY={170}
      />
      <DEdge
        d="M575 245 L 620 245"
        accent="violet"
        label="prompt"
        labelX={598}
        labelY={232}
      />
      <DEdge
        d="M575 260 C 600 270, 605 360, 620 366"
        accent="violet"
      />

      {/* Orchestrator -> generated PR */}
      <DEdge
        d="M470 280 L 470 335"
        accent="brand"
        speed="fast"
      />

      {/* PR -> Playwright validation */}
      <DEdge
        d="M365 367 C 320 367, 290 332, 255 332"
        accent="emerald"
        label="run e2e"
        labelX={310}
        labelY={355}
      />
      <DEdge
        d="M150 300 L 150 235"
        accent="emerald"
        bidir={false}
        label="report"
        labelX={150}
        labelY={268}
      />

      {/* Step numbers */}
      <DCaption text="1" x={272} y={104} fill="#22d3ee" fontSize={11} />
      <DCaption text="2" x={478} y={184} fill="#3b8ff6" fontSize={11} />
      <DCaption text="3" x={597} y={205} fill="#a78bfa" fontSize={11} />
      <DCaption text="4" x={478} y={320} fill="#3b8ff6" fontSize={11} />
      <DCaption text="5" x={272} y={355} fill="#10b981" fontSize={11} />
    </DiagramFrame>
  );
}
