import React, { useEffect, useState } from "react";
import {
  AlertTriangle,
  Activity,
  ArrowUpRight,
  Bell,
  CheckCircle,
  ChevronDown,
  Clock,
  Database,
  Eye,
  Globe,
  LayoutDashboard,
  Lock,
  Mail,
  Menu,
  Network,
  Search,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Wifi,
  X,
  Zap,
  BarChart3,
  Radio,
  CircleAlert,
  FileWarning,
  Cpu,
  User,
  LogOut,
  EyeOff,
} from "lucide-react";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Polyline,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";


// =====================================================
// SAMPLE ATTACK DATA
// =====================================================

const attackData = [
  {
    id: 1,
    source: "New York, USA",
    target: "London, UK",
    type: "DDoS Attack",
    severity: "Critical",
    time: "12 sec ago",
    sourcePos: [40.7128, -74.006],
    targetPos: [51.5074, -0.1278],
  },
  {
    id: 2,
    source: "Moscow, Russia",
    target: "Frankfurt, Germany",
    type: "Brute Force",
    severity: "High",
    time: "28 sec ago",
    sourcePos: [55.7558, 37.6173],
    targetPos: [50.1109, 8.6821],
  },
  {
    id: 3,
    source: "Beijing, China",
    target: "Mumbai, India",
    type: "Malware",
    severity: "High",
    time: "41 sec ago",
    sourcePos: [39.9042, 116.4074],
    targetPos: [19.076, 72.8777],
  },
  {
    id: 4,
    source: "São Paulo, Brazil",
    target: "Virginia, USA",
    type: "Port Scan",
    severity: "Medium",
    time: "56 sec ago",
    sourcePos: [-23.5505, -46.6333],
    targetPos: [37.4316, -78.6569],
  },
];


// =====================================================
// CYBER MAP
// =====================================================

function CyberMap({ height = "100%", attacks = attackData }) {
  return (
    <MapContainer
      center={[25, 10]}
      zoom={2}
      minZoom={2}
      maxZoom={6}
      scrollWheelZoom={true}
      style={{
        width: "100%",
        height,
        background: "#071017",
      }}
    >

      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {attacks.map((attack) => (
        <React.Fragment key={attack.id}>

          <CircleMarker
            center={attack.sourcePos}
            radius={9}
            pathOptions={{
              color:
                attack.severity === "Critical"
                  ? "#ef4444"
                  : attack.severity === "High"
                  ? "#f97316"
                  : "#eab308",
              fillColor:
                attack.severity === "Critical"
                  ? "#ef4444"
                  : attack.severity === "High"
                  ? "#f97316"
                  : "#eab308",
              fillOpacity: 0.75,
              weight: 2,
            }}
          >
            <Popup>
              <strong>{attack.type}</strong>
              <br />
              Source: {attack.source}
            </Popup>
          </CircleMarker>


          <CircleMarker
            center={attack.targetPos}
            radius={7}
            pathOptions={{
              color: "#22d3ee",
              fillColor: "#22d3ee",
              fillOpacity: 0.8,
              weight: 2,
            }}
          >
            <Popup>
              <strong>Protected Target</strong>
              <br />
              {attack.target}
            </Popup>
          </CircleMarker>


          <Polyline
            positions={[attack.sourcePos, attack.targetPos]}
            pathOptions={{
              color:
                attack.severity === "Critical"
                  ? "#ef4444"
                  : attack.severity === "High"
                  ? "#f97316"
                  : "#eab308",
              weight: 2,
              dashArray: "8 8",
              opacity: 0.8,
            }}
          />

        </React.Fragment>
      ))}

    </MapContainer>
  );
}


// =====================================================
// LOGIN PAGE
// =====================================================

function LoginPage({ onLogin }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function submitLogin(e) {
    e.preventDefault();

    if (
      email === "admin@cyberwatch.ai" &&
      password === "Cyber@123"
    ) {
      setError("");
      onLogin();
    } else {
      setError("Invalid email or password.");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#030507",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "auto",
        padding: "50px 20px",
      }}
    >

      {/* Background */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 20%, rgba(0,220,255,.10), transparent 30%), radial-gradient(circle at 80% 80%, rgba(30,80,255,.10), transparent 30%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.07,
          backgroundImage:
            "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />


      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "500px",
        }}
      >

        {/* Logo */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >

          <div
            style={{
              width: "105px",
              height: "105px",
              margin: "0 auto",
              borderRadius: "28px",
              background: "rgba(0,220,255,0.08)",
              border: "1px solid rgba(0,220,255,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 35px rgba(0,220,255,0.10)",
            }}
          >
            <Shield
              size={52}
              strokeWidth={1.5}
              color="#22d3ee"
            />
          </div>


          <h1
            style={{
              fontSize: "42px",
              fontWeight: 800,
              letterSpacing: "1px",
              marginTop: "22px",
              marginBottom: "10px",
            }}
          >
            CYBER
            <span style={{ color: "#22d3ee" }}>
              WATCH
            </span>
          </h1>


          <p
            style={{
              fontSize: "11px",
              color: "#64748b",
              letterSpacing: "6px",
              margin: 0,
            }}
          >
            SECURITY COMMAND CENTER
          </p>

        </div>


        {/* Card */}

        <div
          style={{
            background: "rgba(8,11,16,0.97)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "26px",
            padding: "38px",
            boxShadow: "0 25px 70px rgba(0,0,0,0.55)",
          }}
        >

          <div style={{ marginBottom: "32px" }}>

            <h2
              style={{
                fontSize: "27px",
                margin: 0,
              }}
            >
              Welcome back
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              Sign in to access your security dashboard.
            </p>

          </div>


          <form onSubmit={submitLogin}>

            {/* Email */}

            <div style={{ marginBottom: "28px" }}>

              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  color: "#94a3b8",
                  marginBottom: "10px",
                }}
              >
                Email address
              </label>

              <div style={{ position: "relative" }}>

                <Mail
                  size={18}
                  style={{
                    position: "absolute",
                    left: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#475569",
                  }}
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@cyberwatch.ai"
                  required
                  style={{
                    width: "100%",
                    height: "56px",
                    boxSizing: "border-box",
                    background: "#0d1015",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "13px",
                    paddingLeft: "48px",
                    color: "white",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />

              </div>

            </div>


            {/* Password */}

            <div style={{ marginBottom: "28px" }}>

              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  color: "#94a3b8",
                  marginBottom: "10px",
                }}
              >
                Password
              </label>

              <div style={{ position: "relative" }}>

                <Lock
                  size={18}
                  style={{
                    position: "absolute",
                    left: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#475569",
                  }}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  style={{
                    width: "100%",
                    height: "56px",
                    boxSizing: "border-box",
                    background: "#0d1015",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "13px",
                    paddingLeft: "48px",
                    paddingRight: "48px",
                    color: "white",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    color: "#64748b",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>


            {error && (
              <div
                style={{
                  color: "#f87171",
                  background: "rgba(239,68,68,.08)",
                  border: "1px solid rgba(239,68,68,.2)",
                  borderRadius: "10px",
                  padding: "12px",
                  marginBottom: "20px",
                  fontSize: "12px",
                }}
              >
                {error}
              </div>
            )}


            {/* Remember */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                  color: "#64748b",
                  fontSize: "13px",
                }}
              >
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                style={{
                  background: "none",
                  border: "none",
                  color: "#22d3ee",
                  cursor: "pointer",
                }}
              >
                Forgot password?
              </button>

            </div>


            <button
              type="submit"
              style={{
                width: "100%",
                height: "58px",
                borderRadius: "14px",
                border: "none",
                background: "#22cbe8",
                color: "#020617",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Shield size={19} />
              Sign In to CYBERWATCH
            </button>

          </form>


          {/* Demo */}

          <div
            style={{
              marginTop: "32px",
              padding: "20px",
              borderRadius: "15px",
              background: "rgba(34,211,238,0.035)",
              border: "1px solid rgba(34,211,238,0.12)",
            }}
          >

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                marginBottom: "14px",
              }}
            >
              <Zap size={16} color="#22d3ee" />

              <span
                style={{
                  color: "#22d3ee",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                }}
              >
                DEMO ACCESS
              </span>
            </div>

            <p style={{ color: "#94a3b8", fontSize: "13px" }}>
              Email: admin@cyberwatch.ai
            </p>

            <p style={{ color: "#94a3b8", fontSize: "13px" }}>
              Password: Cyber@123
            </p>

          </div>


          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "28px",
              color: "#475569",
              fontSize: "10px",
            }}
          >
            <span style={{ color: "#22c55e" }}>●</span>
            Secure connection • CYBERWATCH v1.0
          </div>

        </div>

      </div>

    </div>
  );
}


// =====================================================
// STAT CARD
// =====================================================

function StatCard({
  icon,
  label,
  value,
  percentage,
  color = "#22d3ee",
}) {
  return (
    <div
      style={{
        background: "#080b10",
        border: "1px solid rgba(255,255,255,.09)",
        borderRadius: "20px",
        padding: "24px",
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >

        <div
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "14px",
            background: `${color}18`,
            color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>

        <span
          style={{
            color: percentage?.startsWith("-")
              ? "#ef4444"
              : "#22c55e",
            fontSize: "12px",
          }}
        >
          <ArrowUpRight size={13} style={{ display: "inline" }} />
          {" "}
          {percentage}
        </span>

      </div>

      <p
        style={{
          color: "#64748b",
          fontSize: "13px",
          marginTop: "20px",
        }}
      >
        {label}
      </p>

      <h2
        style={{
          fontSize: "32px",
          margin: "5px 0 0",
        }}
      >
        {value}
      </h2>

    </div>
  );
}


// =====================================================
// HEALTH CIRCLE
// =====================================================

function HealthCircle() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "25px 0",
      }}
    >

      <div
        style={{
          width: "210px",
          height: "210px",
          borderRadius: "50%",
          background:
            "conic-gradient(#22d3ee 0deg 338deg, #123642 338deg 360deg)",
          padding: "14px",
        }}
      >

        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "#080b10",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

          <span
            style={{
              fontSize: "42px",
              fontWeight: 700,
            }}
          >
            94%
          </span>

          <span
            style={{
              color: "#64748b",
              fontSize: "13px",
            }}
          >
            HEALTHY
          </span>

        </div>

      </div>

    </div>
  );
}


// =====================================================
// HEALTH ROW
// =====================================================

function HealthRow({ icon, name, value }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >

        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            background: "rgba(34,197,94,.08)",
            color: "#22c55e",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>

        <span style={{ color: "#94a3b8" }}>
          {name}
        </span>

      </div>

      <span
        style={{
          color: "#22c55e",
          fontSize: "13px",
        }}
      >
        {value}
      </span>

    </div>
  );
}


// =====================================================
// THREAT FEED
// =====================================================

function ThreatFeed({ attacks = attackData }) {

  return (
    <div
      style={{
        background: "#080b10",
        border: "1px solid rgba(255,255,255,.09)",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >

      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid rgba(255,255,255,.06)",
        }}
      >

        <h3 style={{ margin: 0 }}>
          Recent Threats
        </h3>

        <p
          style={{
            color: "#64748b",
            fontSize: "12px",
            marginTop: "5px",
          }}
        >
          Latest detected security events
        </p>

      </div>


      {attacks.map((attack) => (

        <div
          key={attack.id}
          style={{
            padding: "17px 20px",
            borderBottom: "1px solid rgba(255,255,255,.05)",
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >

          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "11px",
              background:
                attack.severity === "Critical"
                  ? "rgba(239,68,68,.10)"
                  : "rgba(249,115,22,.10)",
              color:
                attack.severity === "Critical"
                  ? "#ef4444"
                  : "#f97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AlertTriangle size={18} />
          </div>


          <div style={{ flex: 1 }}>

            <p
              style={{
                margin: 0,
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              {attack.type}
            </p>

            <p
              style={{
                margin: "5px 0 0",
                color: "#64748b",
                fontSize: "11px",
              }}
            >
              {attack.source} → {attack.target}
            </p>

          </div>


          <span
            style={{
              color: "#64748b",
              fontSize: "10px",
            }}
          >
            {attack.time}
          </span>

        </div>

      ))}

    </div>
  );
}



// =====================================================
// LIVE SIMULATION PANEL
// =====================================================

function LiveSimulationPanel({
  running,
  onToggle,
  attacks,
}) {
  const latest = attacks[0];

  return (
    <div
      style={{
        background: "#080b10",
        border: "1px solid rgba(34,211,238,.16)",
        borderRadius: "20px",
        padding: "22px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
            }}
          >
            <Radio
              size={18}
              color={running ? "#22c55e" : "#64748b"}
            />
            <h3 style={{ margin: 0 }}>
              Live Attack Simulation
            </h3>
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "2px",
                color: "#22d3ee",
                border: "1px solid rgba(34,211,238,.2)",
                borderRadius: "20px",
                padding: "5px 8px",
              }}
            >
              DEMO
            </span>
          </div>

          <p
            style={{
              color: "#64748b",
              fontSize: "12px",
              margin: "7px 0 0",
            }}
          >
            Simulated security events are generated automatically for
            dashboard demonstration.
          </p>
        </div>

        <button
          onClick={onToggle}
          style={{
            border: "1px solid " + (running
              ? "rgba(239,68,68,.3)"
              : "rgba(34,197,94,.3)"),
            background: running
              ? "rgba(239,68,68,.08)"
              : "rgba(34,197,94,.08)",
            color: running ? "#f87171" : "#4ade80",
            borderRadius: "10px",
            padding: "10px 16px",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: "12px",
          }}
        >
          {running ? "⏸ PAUSE SIMULATION" : "▶ START SIMULATION"}
        </button>
      </div>

      {latest && (
        <div
          style={{
            marginTop: "18px",
            padding: "14px",
            borderRadius: "12px",
            background: "rgba(239,68,68,.045)",
            border: "1px solid rgba(239,68,68,.12)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              width: "9px",
              height: "9px",
              borderRadius: "50%",
              background:
                latest.severity === "Critical"
                  ? "#ef4444"
                  : latest.severity === "High"
                  ? "#f97316"
                  : "#eab308",
              boxShadow:
                "0 0 12px " +
                (latest.severity === "Critical"
                  ? "#ef4444"
                  : latest.severity === "High"
                  ? "#f97316"
                  : "#eab308"),
            }}
          />

          <strong style={{ fontSize: "12px" }}>
            {latest.type}
          </strong>

          <span style={{ color: "#64748b", fontSize: "11px" }}>
            {latest.source} → {latest.target}
          </span>

          <span
            style={{
              marginLeft: "auto",
              color:
                latest.severity === "Critical"
                  ? "#ef4444"
                  : latest.severity === "High"
                  ? "#f97316"
                  : "#eab308",
              fontSize: "10px",
              fontWeight: 700,
            }}
          >
            {latest.severity.toUpperCase()} • JUST NOW
          </span>
        </div>
      )}
    </div>
  );
}


// =====================================================
// NETWORK GRAPH
// =====================================================

function NetworkGraph() {

  const bars = [35, 55, 42, 70, 48, 80, 62, 92, 65, 75, 52, 88];

  return (
    <div
      style={{
        background: "#080b10",
        border: "1px solid rgba(255,255,255,.09)",
        borderRadius: "20px",
        padding: "22px",
      }}
    >

      <h3 style={{ margin: 0 }}>
        Network Activity
      </h3>

      <p
        style={{
          color: "#64748b",
          fontSize: "12px",
        }}
      >
        Traffic volume over the last hour
      </p>


      <div
        style={{
          height: "230px",
          display: "flex",
          alignItems: "flex-end",
          gap: "9px",
          marginTop: "25px",
        }}
      >

        {bars.map((height, index) => (

          <div
            key={index}
            style={{
              flex: 1,
              height: `${height}%`,
              borderRadius: "7px 7px 2px 2px",
              background:
                "linear-gradient(to top, #0891b2, #22d3ee)",
              opacity: 0.75,
            }}
          />

        ))}

      </div>

    </div>
  );
}


// =====================================================
// DASHBOARD
// =====================================================

function Dashboard({ activeThreats, liveAttacks, simulationRunning, onToggleSimulation }) {

  return (
    <div>

      <LiveSimulationPanel
        running={simulationRunning}
        onToggle={onToggleSimulation}
        attacks={liveAttacks}
      />

      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "28px",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >

        <div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#22d3ee",
              fontSize: "12px",
              letterSpacing: "4px",
              fontWeight: 700,
            }}
          >

            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#22d3ee",
              }}
            />

            SECURITY COMMAND CENTER

          </div>


          <h1
            style={{
              fontSize: "38px",
              margin: "8px 0 5px",
            }}
          >
            Good afternoon, Admin
          </h1>


          <p
            style={{
              color: "#64748b",
              margin: 0,
            }}
          >
            Here's what's happening across your infrastructure.
          </p>

        </div>


        <div
          style={{
            padding: "10px 15px",
            borderRadius: "12px",
            border: "1px solid rgba(34,197,94,.15)",
            background: "rgba(34,197,94,.04)",
            color: "#22c55e",
            fontSize: "12px",
          }}
        >
          ● SYSTEM ONLINE
        </div>

      </div>


      {/* Stats */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >

        <StatCard
          icon={<AlertTriangle size={22} />}
          label="Active Threats"
          value={activeThreats}
          percentage="+12.5%"
          color="#ef4444"
        />

        <StatCard
          icon={<ShieldCheck size={22} />}
          label="Threats Blocked"
          value="1,892"
          percentage="+18.2%"
          color="#22c55e"
        />

        <StatCard
          icon={<Network size={22} />}
          label="Active Connections"
          value="8,421"
          percentage="+6.4%"
          color="#22d3ee"
        />

        <StatCard
          icon={<Server size={22} />}
          label="Protected Systems"
          value="98.7%"
          percentage="+2.1%"
          color="#3b82f6"
        />

      </div>


      {/* Main */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,2fr) minmax(300px,1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >

        {/* Map */}

        <div
          style={{
            background: "#080b10",
            border: "1px solid rgba(255,255,255,.09)",
            borderRadius: "20px",
            padding: "24px",
          }}
        >

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "18px",
            }}
          >

            <div>

              <h2 style={{ margin: 0 }}>
                Global Attack Activity
              </h2>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "12px",
                }}
              >
                Real-time threat activity worldwide
              </p>

            </div>

            <span style={{ color: "#22c55e", fontSize: "12px" }}>
              ● LIVE
            </span>

          </div>


          <div
            style={{
              height: "400px",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            <CyberMap attacks={liveAttacks} />
          </div>

        </div>


        {/* Health */}

        <div
          style={{
            background: "#080b10",
            border: "1px solid rgba(255,255,255,.09)",
            borderRadius: "20px",
            padding: "24px",
          }}
        >

          <h2 style={{ margin: 0 }}>
            System Health
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: "12px",
            }}
          >
            Infrastructure status
          </p>


          <HealthCircle />


          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >

            <HealthRow
              icon={<Wifi size={16} />}
              name="Network"
              value="99.2%"
            />

            <HealthRow
              icon={<Server size={16} />}
              name="Servers"
              value="97.8%"
            />

            <HealthRow
              icon={<ShieldCheck size={16} />}
              name="Firewall"
              value="100%"
            />

            <HealthRow
              icon={<Database size={16} />}
              name="Database"
              value="98.6%"
            />

          </div>

        </div>

      </div>


      {/* Bottom */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >

        <ThreatFeed attacks={liveAttacks} />

        <NetworkGraph />

      </div>

    </div>
  );
}


// =====================================================
// LIVE ATTACK MAP PAGE
// =====================================================

function LiveAttackMap({ liveAttacks, simulationRunning, onToggleSimulation }) {

  const [selectedAttack, setSelectedAttack] = useState(null);

  return (
    <div>

      <LiveSimulationPanel
        running={simulationRunning}
        onToggle={onToggleSimulation}
        attacks={liveAttacks}
      />

      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "24px",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >

        <div>

          <p
            style={{
              color: "#22d3ee",
              fontSize: "12px",
              letterSpacing: "4px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            GLOBAL SECURITY MAP
          </p>

          <h1
            style={{
              fontSize: "38px",
              margin: "8px 0",
            }}
          >
            Live Attack Map
          </h1>

          <p style={{ color: "#64748b", margin: 0 }}>
            Monitor simulated global cyber threat activity in real time.
          </p>

        </div>


        <div
          style={{
            padding: "11px 16px",
            borderRadius: "12px",
            border: "1px solid rgba(34,197,94,.15)",
            color: "#22c55e",
            background: "rgba(34,197,94,.04)",
            fontSize: "12px",
          }}
        >
          ● LIVE MONITORING
        </div>

      </div>


      {/* Map */}

      <div
        style={{
          background: "#080b10",
          border: "1px solid rgba(255,255,255,.09)",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >

        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid rgba(255,255,255,.06)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >

          <div>

            <h2 style={{ margin: 0 }}>
              Global Threat Intelligence
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: "12px",
                margin: "6px 0 0",
              }}
            >
              Attack sources and targets across monitored regions
            </p>

          </div>


          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              fontSize: "10px",
            }}
          >

            <span style={{ color: "#ef4444" }}>
              ● Critical
            </span>

            <span style={{ color: "#f97316" }}>
              ● High
            </span>

            <span style={{ color: "#22d3ee" }}>
              ● Protected
            </span>

          </div>

        </div>


        <div
          style={{
            height: "520px",
            position: "relative",
          }}
        >

          <CyberMap attacks={liveAttacks} />


          <div
            style={{
              position: "absolute",
              top: "18px",
              right: "18px",
              zIndex: 500,
              background: "rgba(5,7,10,.9)",
              border: "1px solid rgba(239,68,68,.25)",
              padding: "10px 14px",
              borderRadius: "12px",
            }}
          >

            <span
              style={{
                color: "#ef4444",
                fontSize: "11px",
              }}
            >
              ● LIVE ATTACKS
            </span>

          </div>


          <div
            style={{
              position: "absolute",
              bottom: "18px",
              left: "18px",
              zIndex: 500,
              background: "rgba(5,7,10,.9)",
              border: "1px solid rgba(255,255,255,.1)",
              padding: "12px 16px",
              borderRadius: "12px",
            }}
          >

            <span
              style={{
                color: "#64748b",
                fontSize: "10px",
              }}
            >
              ACTIVE CONNECTIONS
            </span>

            <div
              style={{
                color: "#22d3ee",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              8,421
            </div>

          </div>

        </div>

      </div>


      {/* Stats */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >

        <StatCard
          icon={<AlertTriangle size={20} />}
          label="Active Attacks"
          value="247"
          percentage="+12.5%"
          color="#ef4444"
        />

        <StatCard
          icon={<Globe size={20} />}
          label="Attack Sources"
          value="42"
          percentage="regions"
          color="#f97316"
        />

        <StatCard
          icon={<ShieldCheck size={20} />}
          label="Protected Systems"
          value="98.7%"
          percentage="healthy"
          color="#22c55e"
        />

        <StatCard
          icon={<Shield size={20} />}
          label="Blocked Today"
          value="1,892"
          percentage="secured"
          color="#22d3ee"
        />

      </div>


      {/* Feed + details */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,2fr) minmax(280px,1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >

        {/* Feed */}

        <div
          style={{
            background: "#080b10",
            border: "1px solid rgba(255,255,255,.09)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >

          <div
            style={{
              padding: "20px",
              borderBottom: "1px solid rgba(255,255,255,.06)",
            }}
          >

            <h2 style={{ margin: 0 }}>
              Live Attack Feed
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: "12px",
              }}
            >
              Latest detected security events
            </p>

          </div>


          {attackData.map((attack) => (

            <button
              key={attack.id}
              onClick={() => setSelectedAttack(attack)}
              style={{
                width: "100%",
                padding: "18px 20px",
                background:
                  selectedAttack?.id === attack.id
                    ? "rgba(34,211,238,.05)"
                    : "transparent",
                border: "none",
                borderBottom:
                  "1px solid rgba(255,255,255,.05)",
                color: "white",
                textAlign: "left",
                cursor: "pointer",
              }}
            >

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >

                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background:
                      attack.severity === "Critical"
                        ? "rgba(239,68,68,.1)"
                        : "rgba(249,115,22,.1)",
                    color:
                      attack.severity === "Critical"
                        ? "#ef4444"
                        : "#f97316",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AlertTriangle size={18} />
                </div>


                <div style={{ flex: 1 }}>

                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >

                    <strong style={{ fontSize: "13px" }}>
                      {attack.type}
                    </strong>

                    <span
                      style={{
                        color:
                          attack.severity === "Critical"
                            ? "#ef4444"
                            : "#f97316",
                        fontSize: "9px",
                      }}
                    >
                      {attack.severity}
                    </span>

                  </div>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "11px",
                      margin: "5px 0 0",
                    }}
                  >
                    {attack.source} → {attack.target}
                  </p>

                </div>


                <span
                  style={{
                    color: "#475569",
                    fontSize: "10px",
                  }}
                >
                  {attack.time}
                </span>

              </div>

            </button>

          ))}

        </div>


        {/* Details */}

        <div
          style={{
            background: "#080b10",
            border: "1px solid rgba(255,255,255,.09)",
            borderRadius: "20px",
            padding: "22px",
          }}
        >

          <h2 style={{ margin: 0 }}>
            Attack Details
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: "12px",
            }}
          >
            Selected security event
          </p>


          {selectedAttack ? (

            <div
              style={{
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >

              <div>

                <span
                  style={{
                    color: "#475569",
                    fontSize: "10px",
                  }}
                >
                  ATTACK TYPE
                </span>

                <h3 style={{ margin: "7px 0" }}>
                  {selectedAttack.type}
                </h3>

              </div>


              <div>

                <span style={{ color: "#475569", fontSize: "10px" }}>
                  SOURCE
                </span>

                <p>{selectedAttack.source}</p>

              </div>


              <div>

                <span style={{ color: "#475569", fontSize: "10px" }}>
                  TARGET
                </span>

                <p>{selectedAttack.target}</p>

              </div>


              <div>

                <span style={{ color: "#475569", fontSize: "10px" }}>
                  SEVERITY
                </span>

                <p
                  style={{
                    color:
                      selectedAttack.severity === "Critical"
                        ? "#ef4444"
                        : "#f97316",
                  }}
                >
                  {selectedAttack.severity}
                </p>

              </div>


              <div
                style={{
                  padding: "13px",
                  borderRadius: "10px",
                  background: "rgba(34,197,94,.05)",
                  color: "#22c55e",
                  fontSize: "12px",
                }}
              >
                ● Monitoring active
              </div>

            </div>

          ) : (

            <div
              style={{
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#64748b",
              }}
            >

              <Globe
                size={45}
                color="#22d3ee"
                style={{ marginBottom: "20px" }}
              />

              <p>
                Select an attack event
              </p>

              <small>
                Click an event to inspect details.
              </small>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}


// =====================================================
// SIMPLE OTHER PAGES
// =====================================================

function ThreatDetection() {
  const [search, setSearch] = useState("");
  const [severity, setSeverity] = useState("All");
  const [selectedThreat, setSelectedThreat] = useState(null);

  const threats = [
    {
      id: "THR-1048",
      type: "DDoS Attack",
      source: "185.72.14.91",
      target: "Web Server - US-East",
      severity: "Critical",
      status: "Active",
      time: "12 sec ago",
      score: "98%",
    },
    {
      id: "THR-1047",
      type: "Brute Force",
      source: "91.204.18.42",
      target: "Authentication Server",
      severity: "High",
      status: "Investigating",
      time: "28 sec ago",
      score: "94%",
    },
    {
      id: "THR-1046",
      type: "Malware Detection",
      source: "103.81.22.17",
      target: "Employee Device",
      severity: "High",
      status: "Contained",
      time: "1 min ago",
      score: "91%",
    },
    {
      id: "THR-1045",
      type: "Port Scanning",
      source: "45.91.18.201",
      target: "Network Gateway",
      severity: "Medium",
      status: "Monitoring",
      time: "2 min ago",
      score: "87%",
    },
    {
      id: "THR-1044",
      type: "Suspicious Login",
      source: "172.16.24.81",
      target: "Admin Portal",
      severity: "Medium",
      status: "Resolved",
      time: "4 min ago",
      score: "83%",
    },
    {
      id: "THR-1043",
      type: "SQL Injection",
      source: "198.51.100.24",
      target: "Database Server",
      severity: "Critical",
      status: "Blocked",
      time: "6 min ago",
      score: "99%",
    },
  ];

  const filteredThreats = threats.filter((threat) => {
    const matchesSearch =
      threat.type.toLowerCase().includes(search.toLowerCase()) ||
      threat.source.toLowerCase().includes(search.toLowerCase()) ||
      threat.target.toLowerCase().includes(search.toLowerCase()) ||
      threat.id.toLowerCase().includes(search.toLowerCase());

    const matchesSeverity =
      severity === "All" || threat.severity === severity;

    return matchesSearch && matchesSeverity;
  });

  const getSeverityColor = (level) => {
    if (level === "Critical") return "#ff4757";
    if (level === "High") return "#ff8c00";
    if (level === "Medium") return "#ffd166";
    return "#00e676";
  };

  return (
    <PageShell
      icon={<AlertTriangle />}
      title="Threat Detection"
      subtitle="AI-powered threat identification and monitoring"
    >

      {/* TOP STATUS CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "22px",
          marginBottom: "28px",
        }}
      >

        <InfoBox
          title="Threat Detection Engine"
          value="ACTIVE"
          color="#22c55e"
        />

        <InfoBox
          title="Critical Threats"
          value="18"
          color="#ff4757"
        />

        <InfoBox
          title="Detection Accuracy"
          value="99.4%"
          color="#08d9ff"
        />

      </div>

      {/* THREAT MONITOR HEADER */}
      <div
        style={{
          background: "#070a0f",
          border: "1px solid #18212b",
          borderRadius: "18px",
          padding: "24px",
          marginBottom: "20px",
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "22px",
          }}
        >

          <div>
            <div
              style={{
                color: "#08d9ff",
                fontSize: "12px",
                letterSpacing: "3px",
                fontWeight: "700",
                marginBottom: "7px",
              }}
            >
              LIVE SECURITY MONITOR
            </div>

            <h2
              style={{
                margin: 0,
                color: "#f8fafc",
                fontSize: "24px",
              }}
            >
              Detected Threats
            </h2>

            <p
              style={{
                color: "#64748b",
                margin: "7px 0 0",
              }}
            >
              Monitor and investigate suspicious security events.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
              color: "#00e676",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            <span
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "#00e676",
                boxShadow: "0 0 12px #00e676",
              }}
            />
            ENGINE ONLINE
          </div>

        </div>

        {/* SEARCH + FILTER */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search threat ID, attack type, source or target..."
            style={{
              flex: 1,
              minWidth: "280px",
              background: "#0b0f14",
              border: "1px solid #202b36",
              borderRadius: "10px",
              padding: "13px 16px",
              color: "#fff",
              outline: "none",
              fontSize: "14px",
            }}
          />

          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            style={{
              background: "#0b0f14",
              border: "1px solid #202b36",
              borderRadius: "10px",
              padding: "13px 18px",
              color: "#cbd5e1",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="All">All Severity</option>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
          </select>

        </div>
      </div>

      {/* THREAT TABLE */}
      <div
        style={{
          background: "#070a0f",
          border: "1px solid #18212b",
          borderRadius: "18px",
          overflow: "hidden",
        }}
      >

        <div
          style={{
            padding: "20px 24px",
            borderBottom: "1px solid #18212b",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

          <div>
            <h3
              style={{
                color: "#f8fafc",
                margin: 0,
                fontSize: "18px",
              }}
            >
              Threat Activity
            </h3>

            <span
              style={{
                color: "#64748b",
                fontSize: "13px",
              }}
            >
              {filteredThreats.length} threats detected
            </span>
          </div>

          <div
            style={{
              color: "#08d9ff",
              fontSize: "12px",
              letterSpacing: "1px",
            }}
          >
            REAL-TIME
          </div>

        </div>

        <div style={{ overflowX: "auto" }}>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "900px",
            }}
          >

            <thead>
              <tr
                style={{
                  background: "#0b0f14",
                  color: "#64748b",
                  textAlign: "left",
                  fontSize: "12px",
                  letterSpacing: "1px",
                }}
              >
                <th style={{ padding: "15px 20px" }}>THREAT</th>
                <th style={{ padding: "15px 20px" }}>SOURCE</th>
                <th style={{ padding: "15px 20px" }}>TARGET</th>
                <th style={{ padding: "15px 20px" }}>SEVERITY</th>
                <th style={{ padding: "15px 20px" }}>STATUS</th>
                <th style={{ padding: "15px 20px" }}>TIME</th>
                <th style={{ padding: "15px 20px" }}>ACTION</th>
              </tr>
            </thead>

            <tbody>

              {filteredThreats.map((threat) => (

                <tr
                  key={threat.id}
                  style={{
                    borderTop: "1px solid #151d26",
                    transition: "background 0.2s",
                  }}
                >

                  {/* THREAT */}
                  <td style={{ padding: "18px 20px" }}>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >

                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "10px",
                          background:
                            getSeverityColor(threat.severity) + "15",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: getSeverityColor(threat.severity),
                        }}
                      >
                        <AlertTriangle size={19} />
                      </div>

                      <div>
                        <div
                          style={{
                            color: "#f8fafc",
                            fontWeight: "600",
                          }}
                        >
                          {threat.type}
                        </div>

                        <div
                          style={{
                            color: "#64748b",
                            fontSize: "11px",
                            marginTop: "4px",
                          }}
                        >
                          {threat.id}
                        </div>
                      </div>

                    </div>

                  </td>

                  {/* SOURCE */}
                  <td
                    style={{
                      padding: "18px 20px",
                      color: "#94a3b8",
                      fontSize: "13px",
                    }}
                  >
                    {threat.source}
                  </td>

                  {/* TARGET */}
                  <td
                    style={{
                      padding: "18px 20px",
                      color: "#94a3b8",
                      fontSize: "13px",
                    }}
                  >
                    {threat.target}
                  </td>

                  {/* SEVERITY */}
                  <td style={{ padding: "18px 20px" }}>

                    <span
                      style={{
                        display: "inline-block",
                        padding: "6px 10px",
                        borderRadius: "20px",
                        background:
                          getSeverityColor(threat.severity) + "18",
                        color: getSeverityColor(threat.severity),
                        fontSize: "11px",
                        fontWeight: "700",
                      }}
                    >
                      {threat.severity}
                    </span>

                  </td>

                  {/* STATUS */}
                  <td style={{ padding: "18px 20px" }}>

                    <span
                      style={{
                        color:
                          threat.status === "Active"
                            ? "#ff4757"
                            : threat.status === "Blocked"
                            ? "#00e676"
                            : "#94a3b8",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      ● {threat.status}
                    </span>

                  </td>

                  {/* TIME */}
                  <td
                    style={{
                      padding: "18px 20px",
                      color: "#64748b",
                      fontSize: "12px",
                    }}
                  >
                    {threat.time}
                  </td>

                  {/* ACTION */}
                  <td style={{ padding: "18px 20px" }}>

                    <button
                      onClick={() => setSelectedThreat(threat)}
                      style={{
                        background: "#08d9ff12",
                        border: "1px solid #08d9ff35",
                        color: "#08d9ff",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "12px",
                      }}
                    >
                      View Details
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* THREAT DETAILS MODAL */}
      {selectedThreat && (

        <div
          onClick={() => setSelectedThreat(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.72)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(560px, 100%)",
              background: "#080c11",
              border: "1px solid #1d2a35",
              borderRadius: "18px",
              padding: "28px",
              boxShadow: "0 25px 80px rgba(0,0,0,.6)",
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >

              <div>

                <div
                  style={{
                    color: "#08d9ff",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    marginBottom: "6px",
                  }}
                >
                  SECURITY EVENT
                </div>

                <h2
                  style={{
                    margin: 0,
                    color: "#fff",
                  }}
                >
                  {selectedThreat.type}
                </h2>

              </div>

              <button
                onClick={() => setSelectedThreat(null)}
                style={{
                  background: "#111820",
                  border: "1px solid #25313d",
                  color: "#94a3b8",
                  width: "36px",
                  height: "36px",
                  borderRadius: "9px",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                ×
              </button>

            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >

              {[
                ["Threat ID", selectedThreat.id],
                ["Severity", selectedThreat.severity],
                ["Source IP", selectedThreat.source],
                ["Target", selectedThreat.target],
                ["Status", selectedThreat.status],
                ["Detection Score", selectedThreat.score],
              ].map(([label, value]) => (

                <div
                  key={label}
                  style={{
                    background: "#0c1218",
                    border: "1px solid #18232d",
                    borderRadius: "10px",
                    padding: "15px",
                  }}
                >

                  <div
                    style={{
                      color: "#64748b",
                      fontSize: "11px",
                      marginBottom: "7px",
                    }}
                  >
                    {label}
                  </div>

                  <div
                    style={{
                      color:
                        label === "Severity"
                          ? getSeverityColor(value)
                          : "#e2e8f0",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    {value}
                  </div>

                </div>

              ))}

            </div>

            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                borderRadius: "10px",
                background: "#08d9ff08",
                border: "1px solid #08d9ff20",
                color: "#94a3b8",
                fontSize: "13px",
                lineHeight: "1.6",
              }}
            >
              AI detection engine identified this event as a potential
              security threat. The event has been added to the monitoring
              queue for further investigation.
            </div>

          </div>

        </div>

      )}

    </PageShell>
  );
}


function NetworkMonitor() {

  return (
    <PageShell
      icon={<Network />}
      title="Network Monitor"
      subtitle="Monitor network connections and infrastructure"
    >

      <div className="simple-panel">

        <h2>Network Overview</h2>

        <div className="monitor-line">
          <span>Network Traffic</span>
          <strong>8,421 connections</strong>
        </div>

        <div className="monitor-line">
          <span>Bandwidth Usage</span>
          <strong>67%</strong>
        </div>

        <div className="monitor-line">
          <span>Firewall Status</span>
          <strong style={{ color: "#22c55e" }}>
            Protected
          </strong>
        </div>

      </div>

    </PageShell>
  );
}


function Incidents() {

  return (
    <PageShell
      icon={<FileWarning />}
      title="Security Incidents"
      subtitle="Track and investigate security incidents"
    >

      <div className="simple-panel">

        <h2>Recent Incidents</h2>

        {attackData.map((item) => (

          <div className="incident-row" key={item.id}>

            <CircleAlert
              size={20}
              color="#ef4444"
            />

            <div>
              <strong>{item.type}</strong>
              <p>
                {item.source} → {item.target}
              </p>
            </div>

            <span>
              {item.severity}
            </span>

          </div>

        ))}

      </div>

    </PageShell>
  );
}


function Analytics() {

  return (
    <PageShell
      icon={<BarChart3 />}
      title="Security Analytics"
      subtitle="Security performance and threat intelligence analytics"
    >

      <div className="analytics-chart">

        {[45, 65, 40, 80, 60, 90, 70, 95, 62, 85, 72, 98].map(
          (value, index) => (
            <div
              key={index}
              style={{
                height: `${value}%`,
                flex: 1,
                borderRadius: "8px 8px 2px 2px",
                background:
                  "linear-gradient(to top,#0891b2,#22d3ee)",
              }}
            />
          )
        )}

      </div>

    </PageShell>
  );
}


function SettingsPage() {

  return (
    <PageShell
      icon={<Settings />}
      title="Settings"
      subtitle="Manage your CYBERWATCH security platform"
    >

      <div className="simple-panel">

        <h2>System Settings</h2>

        <div className="monitor-line">
          <span>Real-time monitoring</span>
          <strong style={{ color: "#22c55e" }}>
            Enabled
          </strong>
        </div>

        <div className="monitor-line">
          <span>Threat notifications</span>
          <strong style={{ color: "#22c55e" }}>
            Enabled
          </strong>
        </div>

        <div className="monitor-line">
          <span>Automatic protection</span>
          <strong style={{ color: "#22c55e" }}>
            Enabled
          </strong>
        </div>

      </div>

    </PageShell>
  );
}


// =====================================================
// PAGE SHELL
// =====================================================

function PageShell({
  icon,
  title,
  subtitle,
  children,
}) {

  return (
    <div>

      <div style={{ marginBottom: "30px" }}>

        <div
          style={{
            color: "#22d3ee",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {icon}

          <span
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
            }}
          >
            SECURITY CENTER
          </span>

        </div>


        <h1
          style={{
            fontSize: "38px",
            margin: "10px 0 5px",
          }}
        >
          {title}
        </h1>

        <p style={{ color: "#64748b" }}>
          {subtitle}
        </p>

      </div>


      {children}

    </div>
  );
}


function InfoBox({
  title,
  value,
  color,
}) {

  return (
    <div className="info-box">

      <p>{title}</p>

      <strong style={{ color }}>
        {value}
      </strong>

    </div>
  );
}


// =====================================================
// MAIN APP
// =====================================================

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const [activePage, setActivePage] = useState("dashboard");

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [activeThreats, setActiveThreats] = useState(247);

  const [search, setSearch] = useState("");

  // =====================================================
  // LIVE ATTACK SIMULATION
  // =====================================================

  const [liveAttacks, setLiveAttacks] = useState(attackData);
  const [simulationRunning, setSimulationRunning] = useState(true);

  const simulationSources = [
    { city: "New York, USA", pos: [40.7128, -74.006] },
    { city: "Moscow, Russia", pos: [55.7558, 37.6173] },
    { city: "Beijing, China", pos: [39.9042, 116.4074] },
    { city: "São Paulo, Brazil", pos: [-23.5505, -46.6333] },
    { city: "Seoul, South Korea", pos: [37.5665, 126.978] },
    { city: "Sydney, Australia", pos: [-33.8688, 151.2093] },
    { city: "Dubai, UAE", pos: [25.2048, 55.2708] },
    { city: "Toronto, Canada", pos: [43.6532, -79.3832] },
  ];

  const simulationTargets = [
    { city: "London, UK", pos: [51.5074, -0.1278] },
    { city: "Frankfurt, Germany", pos: [50.1109, 8.6821] },
    { city: "Mumbai, India", pos: [19.076, 72.8777] },
    { city: "Virginia, USA", pos: [37.4316, -78.6569] },
    { city: "Singapore", pos: [1.3521, 103.8198] },
    { city: "Tokyo, Japan", pos: [35.6762, 139.6503] },
  ];

  const simulationTypes = [
    { type: "DDoS Attack", severity: "Critical" },
    { type: "Brute Force", severity: "High" },
    { type: "Malware", severity: "High" },
    { type: "Port Scan", severity: "Medium" },
    { type: "Phishing Attempt", severity: "Medium" },
  ];

  function createSimulatedAttack() {
    const source =
      simulationSources[
        Math.floor(Math.random() * simulationSources.length)
      ];

    const target =
      simulationTargets[
        Math.floor(Math.random() * simulationTargets.length)
      ];

    const threat =
      simulationTypes[
        Math.floor(Math.random() * simulationTypes.length)
      ];

    return {
      id: Date.now(),
      source: source.city,
      target: target.city,
      type: threat.type,
      severity: threat.severity,
      time: "Just now",
      sourcePos: source.pos,
      targetPos: target.pos,
    };
  }

  useEffect(() => {
    if (!simulationRunning) return;

    const timer = setInterval(() => {
      const newAttack = createSimulatedAttack();

      setLiveAttacks((current) =>
        [newAttack, ...current].slice(0, 8)
      );

      setActiveThreats((value) => Math.max(230, value + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [simulationRunning]);




  // Simulated live threat counter

  useEffect(() => {

    const timer = setInterval(() => {

      setActiveThreats((value) => {

        const change =
          Math.random() > 0.5 ? 1 : -1;

        return Math.max(230, value + change);

      });

    }, 5000);

    return () => clearInterval(timer);

  }, []);


  if (!loggedIn) {

    return (
      <LoginPage
        onLogin={() => setLoggedIn(true)}
      />
    );

  }


  const menuItems = [

    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
    },

    {
      id: "map",
      label: "Live Attack Map",
      icon: <Globe size={20} />,
    },

    {
      id: "threats",
      label: "Threat Detection",
      icon: <AlertTriangle size={20} />,
    },

    {
      id: "network",
      label: "Network Monitor",
      icon: <Network size={20} />,
    },

    {
      id: "incidents",
      label: "Incidents",
      icon: <Activity size={20} />,
    },

    {
      id: "analytics",
      label: "Analytics",
      icon: <BarChart3 size={20} />,
    },

    {
      id: "settings",
      label: "Settings",
      icon: <Settings size={20} />,
    },

  ];


  function renderPage() {

    switch (activePage) {

      case "dashboard":
        return (
          <Dashboard
            activeThreats={activeThreats}
            liveAttacks={liveAttacks}
            simulationRunning={simulationRunning}
            onToggleSimulation={() =>
              setSimulationRunning((value) => !value)
            }
          />
        );


      case "map":
        return <LiveAttackMap
          liveAttacks={liveAttacks}
          simulationRunning={simulationRunning}
          onToggleSimulation={() =>
            setSimulationRunning((value) => !value)
          }
        />;


      case "threats":
        return <ThreatDetection />;


      case "network":
        return <NetworkMonitor />;


      case "incidents":
        return <Incidents />;


      case "analytics":
        return <Analytics />;


      case "settings":
        return <SettingsPage />;


      default:
        return (
          <Dashboard
            activeThreats={activeThreats}
          />
        );

    }

  }


  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#030507",
        color: "#f8fafc",
        display: "flex",
      }}
    >

      {/* ================================================= */}
      {/* SIDEBAR */}
      {/* ================================================= */}

      <aside
        style={{
          width: sidebarOpen ? "270px" : "80px",
          minHeight: "100vh",
          background: "#070a0f",
          borderRight: "1px solid rgba(255,255,255,.08)",
          transition: "width .25s ease",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 1000,
          overflow: "hidden",
        }}
      >

        {/* Logo */}

        <div
          style={{
            height: "115px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            gap: "13px",
            borderBottom: "1px solid rgba(255,255,255,.05)",
          }}
        >

          <div
            style={{
              width: "45px",
              height: "45px",
              minWidth: "45px",
              borderRadius: "13px",
              border: "1px solid rgba(34,211,238,.3)",
              color: "#22d3ee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(34,211,238,.05)",
            }}
          >
            <Shield size={25} />
          </div>


          {sidebarOpen && (

            <div>

              <h2
                style={{
                  margin: 0,
                  fontSize: "20px",
                }}
              >
                CYBER
                <span style={{ color: "#22d3ee" }}>
                  WATCH
                </span>
              </h2>

              <p
                style={{
                  margin: "3px 0 0",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: "#64748b",
                }}
              >
                SECURITY CENTER
              </p>

            </div>

          )}

        </div>


        {/* Menu */}

        <div style={{ padding: "20px 10px" }}>

          {sidebarOpen && (

            <p
              style={{
                fontSize: "10px",
                color: "#475569",
                letterSpacing: "2px",
                paddingLeft: "10px",
              }}
            >
              MAIN MENU
            </p>

          )}


          {menuItems.map((item) => (

            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              style={{
                width: "100%",
                height: "48px",
                marginBottom: "5px",
                border: "none",
                borderRadius: "12px",
                background:
                  activePage === item.id
                    ? "rgba(34,211,238,.10)"
                    : "transparent",
                color:
                  activePage === item.id
                    ? "#22d3ee"
                    : "#64748b",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "0 12px",
                cursor: "pointer",
                textAlign: "left",
              }}
            >

              {item.icon}

              {sidebarOpen && (
                <span style={{ fontSize: "14px" }}>
                  {item.label}
                </span>
              )}

            </button>

          ))}

        </div>


        {/* Bottom */}

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "10px",
            right: "10px",
          }}
        >

          {sidebarOpen && (

            <div
              style={{
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid rgba(34,197,94,.12)",
                background: "rgba(34,197,94,.03)",
              }}
            >

              <div
                style={{
                  color: "#22c55e",
                  fontSize: "12px",
                }}
              >
                ● System Operational
              </div>

              <p
                style={{
                  color: "#475569",
                  fontSize: "10px",
                  margin: "5px 0 0",
                }}
              >
                All security services active
              </p>

            </div>

          )}

        </div>

      </aside>


      {/* ================================================= */}
      {/* MAIN AREA */}
      {/* ================================================= */}

      <main
        style={{
          marginLeft: sidebarOpen ? "270px" : "80px",
          width: "100%",
          minHeight: "100vh",
          transition: "margin .25s ease",
        }}
      >

        {/* Topbar */}

        <header
          style={{
            height: "115px",
            borderBottom: "1px solid rgba(255,255,255,.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            gap: "20px",
          }}
        >

          <div>

            <h2
              style={{
                margin: 0,
                fontSize: "25px",
              }}
            >
              {
                menuItems.find(
                  (item) => item.id === activePage
                )?.label
              }
            </h2>

            <p
              style={{
                color: "#475569",
                fontSize: "12px",
                marginTop: "4px",
              }}
            >
              Real-time infrastructure monitoring
            </p>

          </div>


          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >

            {/* Search */}

            <div
              style={{
                width: "290px",
                position: "relative",
              }}
            >

              <Search
                size={18}
                style={{
                  position: "absolute",
                  left: "13px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#475569",
                }}
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search threats..."
                style={{
                  width: "100%",
                  height: "42px",
                  boxSizing: "border-box",
                  background: "#080b10",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: "12px",
                  paddingLeft: "42px",
                  color: "white",
                  outline: "none",
                }}
              />

            </div>


            {/* Notification */}

            <div
              style={{
                position: "relative",
                color: "#94a3b8",
              }}
            >

              <Bell size={22} />

              <span
                style={{
                  position: "absolute",
                  top: "-2px",
                  right: "-2px",
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#ef4444",
                }}
              />

            </div>


            {/* Profile */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >

              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#22d3ee,#2563eb)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                }}
              >
                A
              </div>


              <div style={{ display: "none" }}>

                <strong>Admin</strong>

              </div>

            </div>

          </div>

        </header>


        {/* Content */}

        <section
          style={{
            padding: "28px",
            maxWidth: "1700px",
          }}
        >
          {renderPage()}
        </section>

      </main>


      {/* Global CSS */}

      <style>
        {`

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            background: #030507;
            font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }

          button,
          input {
            font-family: inherit;
          }

          .simple-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
            gap: 20px;
          }

          .info-box {
            background: #080b10;
            border: 1px solid rgba(255,255,255,.08);
            border-radius: 18px;
            padding: 25px;
          }

          .info-box p {
            color: #64748b;
            font-size: 13px;
          }

          .info-box strong {
            font-size: 30px;
          }

          .simple-panel {
            background: #080b10;
            border: 1px solid rgba(255,255,255,.08);
            border-radius: 20px;
            padding: 25px;
          }

          .monitor-line {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            border-bottom: 1px solid rgba(255,255,255,.06);
            color: #94a3b8;
          }

          .monitor-line strong {
            color: #22d3ee;
          }

          .incident-row {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 18px 0;
            border-bottom: 1px solid rgba(255,255,255,.06);
          }

          .incident-row div {
            flex: 1;
          }

          .incident-row p {
            margin: 5px 0 0;
            color: #64748b;
            font-size: 12px;
          }

          .incident-row > span {
            color: #ef4444;
            font-size: 11px;
          }

          .analytics-chart {
            height: 420px;
            background: #080b10;
            border: 1px solid rgba(255,255,255,.08);
            border-radius: 20px;
            padding: 35px;
            display: flex;
            align-items: flex-end;
            gap: 12px;
          }

          @media (max-width: 900px) {

            aside {
              width: 80px !important;
            }

            main {
              margin-left: 80px !important;
            }

          }

          @media (max-width: 700px) {

            header {
              padding: 15px !important;
            }

            header > div:last-child {
              display: none !important;
            }

            section {
              padding: 18px !important;
            }

          }

        `}
      </style>

    </div>
  );
}

export default App;