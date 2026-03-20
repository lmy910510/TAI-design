import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "./svg-y4232dl5oy";
import imgNewPenguinAvatar from "figma:asset/10a64eedbcff5b2c9f74019cd496be7c59ebe345.png";
import imgRect1 from "figma:asset/7271840e2ec914fb6aa2f229e8c8df255c8e318e.png";
import imgRect2 from "figma:asset/b1cb47eae0b7e8eebc172f4dc305645e74a87d66.png";
import { imgFrame2119902478 } from "./svg-ue5im";
import {
  AddIcon,
  UserAddIcon,
  ArrowLeftIcon,
  SoundIcon,
  UsergroupIcon,
  CloseCircleIcon,
  ChatIcon,
  EllipsisIcon,
  SettingIcon,
} from "tdesign-icons-react";

// ─── Design tokens ────────────────────────────────────────────────────────────

const T = {
  font:    "'Noto Sans SC', sans-serif",
  primary: "#000000",          // black-00 主品牌色
  text92:  "rgba(0,0,0,0.92)",
  text60:  "rgba(0,0,0,0.6)",
  text40:  "rgba(0,0,0,0.4)",
  bg:      "#f6f7fa",
  bgCard:  "#f7f8fa",
  bgPage:  "#eaedf2",
  red:     "#e34d59",
  green:   "#00a854",
} as const;

// ─── Types ────────────────────────────────────────────────────────────────────

type ChatView = "lobby" | "room";

interface RoomInfo {
  id: string;
  name: string;
  count: number;
  max: number;
  active: boolean;
  tag: string;
}

interface MemberInfo {
  id: string;
  name: string;
  color: string;
  photoSrc: string | null;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const ROOMS: RoomInfo[] = [
  { id: "r1", name: "寻宝探险队", count: 3, max: 6, active: true,  tag: "进行中" },
  { id: "r2", name: "周末自驾游", count: 5, max: 8, active: true,  tag: "进行中" },
  { id: "r3", name: "亲子出游组", count: 2, max: 4, active: false, tag: "等待中" },
];

const MEMBERS: MemberInfo[] = [
  { id: "me", name: "我",   color: "#444",    photoSrc: imgNewPenguinAvatar },
  { id: "u1", name: "小明", color: "#555",    photoSrc: imgRect2 },
  { id: "u2", name: "小红", color: "#666",    photoSrc: imgRect1 },
  { id: "u3", name: "大力", color: "#333",    photoSrc: null },
];

// ─── Speaking Wave ────────────────────────────────────────────────────────────

function SpeakingWave() {
  const heights = [0.4, 0.75, 1.0, 0.75, 0.4];
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 36 }}>
      {heights.map((h, i) => (
        <motion.div
          key={i}
          animate={{ scaleY: [0.25, h, 0.25] }}
          transition={{ duration: 0.65, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
          style={{
            width: 7,
            height: 30,
            background: T.primary,
            borderRadius: 4,
            transformOrigin: "bottom",
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

// ─── Member Card ──────────────────────────────────────────────────────────────

function MemberCard({ member, isSpeaking }: { member: MemberInfo; isSpeaking: boolean }) {
  return (
    <motion.div
      animate={{
        boxShadow: isSpeaking
          ? `0 0 0 3px ${T.primary}, 0 8px 36px rgba(0,0,0,0.12)`
          : "0 2px 12px rgba(0,0,0,0.06)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: "#fff",
        borderRadius: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        position: "relative",
        overflow: "hidden",
        padding: "36px 24px 32px",
      }}
    >
      {/* Top accent bar */}
      <AnimatePresence>
        {isSpeaking && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              height: 5,
              background: T.primary,
              transformOrigin: "left",
            }}
          />
        )}
      </AnimatePresence>

      {/* Avatar + pulsing ring */}
      <div style={{ position: "relative" }}>
        <motion.div
          animate={{
            boxShadow: isSpeaking
              ? ["0 0 0 0px rgba(0,0,0,0.30)", "0 0 0 14px rgba(0,0,0,0)", "0 0 0 0px rgba(0,0,0,0)"]
              : "0 0 0 0px rgba(0,0,0,0)",
          }}
          transition={{ duration: 1.5, repeat: isSpeaking ? Infinity : 0 }}
          style={{
            width: 120, height: 120,
            borderRadius: "50%",
            overflow: "hidden",
            background: member.color,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {member.photoSrc ? (
            <img src={member.photoSrc} alt={member.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <span style={{ fontFamily: T.font, fontSize: 52, fontWeight: 700, color: "white", lineHeight: 1 }}>
              {member.name[0]}
            </span>
          )}
        </motion.div>

        {/* Live dot */}
        <AnimatePresence>
          {isSpeaking && (
            <motion.div
              initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
              style={{
                position: "absolute", bottom: 4, right: 4,
                width: 26, height: 26,
                borderRadius: "50%",
                background: T.primary,
                border: "3px solid white",
              }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Name — speaking: weight500 + 0.92; idle: weight400 + 0.6 */}
      <motion.p
        animate={{ color: isSpeaking ? T.text92 : T.text60 }}
        transition={{ duration: 0.3 }}
        style={{
          fontFamily: T.font, fontSize: 32,
          fontWeight: isSpeaking ? 500 : 400,
          lineHeight: "32px", margin: 0,
        }}
      >
        {member.name}
      </motion.p>

      {/* Audio wave (speaking) */}
      <AnimatePresence>
        {isSpeaking && (
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}
          >
            <SpeakingWave />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Muted mic (idle) */}
      {!isSpeaking && <SoundIcon size="28px" style={{ color: T.text40 }} />}
    </motion.div>
  );
}

// ─── Room Card (lobby list) ───────────────────────────────────────────────────

function RoomCard({ room, onJoin }: { room: RoomInfo; onJoin: () => void }) {
  return (
    <div style={{
      background: "white", borderRadius: 24,
      padding: "0 36px", height: 168,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      boxShadow: "0 2px 12px rgba(0,0,0,0.05)", flexShrink: 0,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        {/* Status dot */}
        <div style={{
          width: 12, height: 12, borderRadius: "50%",
          background: room.active ? T.green : "rgba(0,0,0,0.2)",
          boxShadow: room.active ? "0 0 0 4px rgba(0,168,84,0.15)" : "none",
          flexShrink: 0,
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontFamily: T.font, fontSize: 36, fontWeight: 500, color: T.text92, lineHeight: "36px", margin: 0 }}>
            {room.name}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <UsergroupIcon size="26px" style={{ color: T.text40 }} />
            <p style={{ fontFamily: T.font, fontSize: 28, fontWeight: 400, color: T.text40, lineHeight: "28px", margin: 0 }}>
              {room.count}/{room.max} 人
            </p>
            <span style={{
              fontFamily: T.font, fontSize: 22, fontWeight: 400,
              color: room.active ? T.green : T.text40,
              background: room.active ? "rgba(0,168,84,0.08)" : "rgba(0,0,0,0.04)",
              padding: "4px 12px", borderRadius: 6, lineHeight: "22px",
            }}>
              {room.tag}
            </span>
          </div>
        </div>
      </div>

      {/* Join button — black-00 */}
      <button
        onClick={onJoin}
        style={{
          height: 84, padding: "0 48px",
          background: T.primary, borderRadius: 42,
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", gap: 12,
          flexShrink: 0, transition: "opacity 0.18s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <p style={{ fontFamily: T.font, fontSize: 32, fontWeight: 500, color: "white", lineHeight: "32px", margin: 0 }}>
          加入房间
        </p>
        <ArrowLeftIcon size="30px" style={{ color: "white", transform: "rotate(180deg)" }} />
      </button>
    </div>
  );
}

// ─── Main Team Chat Panel ─────────────────────────────────────────────────────

function TeamChatPanel() {
  const [view, setView]               = useState<ChatView>("lobby");
  const [currentRoomId, setRoomId]    = useState<string | null>(null);
  const [isNewRoom, setIsNewRoom]     = useState(false);
  const [micOn, setMicOn]             = useState(true);
  const [speakingIdx, setSpeakingIdx] = useState(0);

  useEffect(() => {
    if (view !== "room" || isNewRoom) return;
    const t = setInterval(() => setSpeakingIdx((i) => (i + 1) % MEMBERS.length), 2400);
    return () => clearInterval(t);
  }, [view, isNewRoom]);

  const enterRoom = (id: string, newRoom = false) => {
    setRoomId(id); setIsNewRoom(newRoom); setSpeakingIdx(0); setView("room");
  };
  const leaveRoom = () => { setView("lobby"); setRoomId(null); setIsNewRoom(false); };

  const roomName      = isNewRoom ? "我的聊天室" : (ROOMS.find((r) => r.id === currentRoomId)?.name ?? "聊天房间");
  const displayMembers = isNewRoom ? [MEMBERS[0]] : MEMBERS;

  return (
    <div style={{
      position: "absolute", left: 326, top: 24,
      width: 1570, height: 1032, borderRadius: 40,
      background: "rgba(246,247,250,0.95)",
      backdropFilter: "blur(40px)",
      border: "1px solid rgba(255,255,255,0.85)",
      boxShadow: "0 12px 60px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.6) inset",
      overflow: "hidden",
    }}>
      <AnimatePresence mode="wait">

        {/* ── LOBBY ──────────────────────────────────────────────────────────── */}
        {view === "lobby" && (
          <motion.div
            key="lobby"
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            style={{ height: "100%", padding: "48px 54px", display: "flex", flexDirection: "column" }}
          >
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, marginBottom: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <div style={{
                  width: 84, height: 84, borderRadius: 24,
                  background: "rgba(0,0,0,0.05)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <ChatIcon size="48px" style={{ color: T.primary }} />
                </div>
                <div>
                  <p style={{ fontFamily: T.font, fontSize: 42, fontWeight: 500, color: T.text92, lineHeight: "42px", margin: 0 }}>
                    组队聊天
                  </p>
                  <p style={{ fontFamily: T.font, fontSize: 28, fontWeight: 400, color: T.text40, lineHeight: "28px", margin: "8px 0 0" }}>
                    {ROOMS.filter((r) => r.active).length} 个房间进行中 · {ROOMS.reduce((s, r) => s + r.count, 0)} 人在线
                  </p>
                </div>
              </div>

              {/* 新建房间 — black-00 */}
              <button
                onClick={() => enterRoom("new", true)}
                style={{
                  height: 84, padding: "0 54px",
                  background: T.primary, borderRadius: 42,
                  border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 16, flexShrink: 0,
                  boxShadow: "0 4px 18px rgba(0,0,0,0.18)",
                  transition: "opacity 0.18s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <AddIcon size="36px" style={{ color: "white" }} />
                <p style={{ fontFamily: T.font, fontSize: 32, fontWeight: 500, color: "white", lineHeight: "32px", margin: 0 }}>
                  新建房间
                </p>
              </button>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(0,0,0,0.06)", marginBottom: 36, flexShrink: 0 }} />

            {/* Room list */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18, overflow: "hidden" }}>
              {ROOMS.map((room) => (
                <RoomCard key={room.id} room={room} onJoin={() => enterRoom(room.id)} />
              ))}
            </div>

            {/* Bottom tip */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 36, flexShrink: 0 }}>
              <UserAddIcon size="30px" style={{ color: T.text40 }} />
              <p style={{ fontFamily: T.font, fontSize: 26, fontWeight: 400, color: T.text40, lineHeight: "26px", margin: 0 }}>
                选择房间加入，或新建一个专属聊天房间与队友实时语音
              </p>
            </div>
          </motion.div>
        )}

        {/* ── ROOM ───────────────────────────────────────────────────────────── */}
        {view === "room" && (
          <motion.div
            key="room"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            style={{ height: "100%", padding: "48px 54px", display: "flex", flexDirection: "column" }}
          >
            {/* Room header */}
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexShrink: 0, marginBottom: 36 }}>
              {/* Back */}
              <button
                onClick={leaveRoom}
                style={{
                  width: 72, height: 72, borderRadius: "50%",
                  background: "rgba(0,0,0,0.05)", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  transition: "background 0.18s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.10)")}
                onMouseOut={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.05)")}
              >
                <ArrowLeftIcon size="36px" style={{ color: T.text60 }} />
              </button>

              <div style={{ flex: 1, overflow: "hidden" }}>
                <p style={{ fontFamily: T.font, fontSize: 42, fontWeight: 500, color: T.text92, lineHeight: "42px", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {roomName}
                </p>
                {!isNewRoom && (
                  <p style={{ fontFamily: T.font, fontSize: 26, fontWeight: 400, color: T.text40, lineHeight: "26px", margin: "6px 0 0" }}>
                    语音聊天中
                  </p>
                )}
              </div>

              {/* Member count pill */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(0,0,0,0.04)", borderRadius: 30, padding: "12px 28px", flexShrink: 0 }}>
                <UsergroupIcon size="28px" style={{ color: T.text60 }} />
                <p style={{ fontFamily: T.font, fontSize: 28, fontWeight: 400, color: T.text60, lineHeight: "28px", margin: 0 }}>
                  {isNewRoom ? 1 : MEMBERS.length} 人在线
                </p>
              </div>

              {/* Leave btn */}
              <button
                onClick={leaveRoom}
                style={{
                  height: 72, padding: "0 36px",
                  background: "transparent", borderRadius: 36,
                  border: `1.5px solid rgba(227,77,89,0.4)`,
                  cursor: "pointer", display: "flex", alignItems: "center", gap: 12,
                  flexShrink: 0, transition: "all 0.18s",
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = "rgba(227,77,89,0.06)"; e.currentTarget.style.borderColor = T.red; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(227,77,89,0.4)"; }}
              >
                <CloseCircleIcon size="28px" style={{ color: T.red }} />
                <p style={{ fontFamily: T.font, fontSize: 28, fontWeight: 500, color: T.red, lineHeight: "28px", margin: 0 }}>离开</p>
              </button>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(0,0,0,0.06)", marginBottom: 30, flexShrink: 0 }} />

            {/* Member grid */}
            <div style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: isNewRoom ? "1fr 1fr" : "repeat(2, 1fr)",
              gridTemplateRows: isNewRoom ? "1fr" : "repeat(2, 1fr)",
              gap: 24,
              overflow: "hidden", minHeight: 0,
            }}>
              {displayMembers.map((member, idx) => (
                <MemberCard key={member.id} member={member} isSpeaking={!isNewRoom && speakingIdx === idx} />
              ))}

              {isNewRoom && (
                <div style={{
                  background: "rgba(0,0,0,0.02)", borderRadius: 24,
                  border: "2px dashed rgba(0,0,0,0.10)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20,
                }}>
                  <UserAddIcon size="72px" style={{ color: "rgba(0,0,0,0.15)" }} />
                  <p style={{ fontFamily: T.font, fontSize: 30, fontWeight: 400, color: "rgba(0,0,0,0.25)", lineHeight: "30px", margin: 0 }}>
                    等待其他人加入…
                  </p>
                </div>
              )}
            </div>

            {/* Mic bar — black-00 when active */}
            <div style={{ flexShrink: 0, marginTop: 30 }}>
              <div style={{ height: 1, background: "rgba(0,0,0,0.06)", marginBottom: 30 }} />
              <button
                onClick={() => setMicOn((v) => !v)}
                style={{
                  width: "100%", height: 96, borderRadius: 48,
                  background: micOn ? T.primary : "rgba(0,0,0,0.05)",
                  border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 18,
                  boxShadow: micOn ? "0 6px 24px rgba(0,0,0,0.20)" : "none",
                  transition: "all 0.25s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.80")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={micOn ? "on" : "off"}
                    initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: "flex", alignItems: "center", gap: 18 }}
                  >
                    <SoundIcon
                      size="42px"
                      style={{ color: micOn ? "white" : "rgba(0,0,0,0.30)" }}
                    />
                    <p style={{
                      fontFamily: T.font, fontSize: 36, fontWeight: 500,
                      color: micOn ? "white" : "rgba(0,0,0,0.30)",
                      lineHeight: "36px", margin: 0, transition: "color 0.25s",
                    }}>
                      {micOn ? "麦克风已开启" : "麦克风已关闭  ·  点击开启"}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Left Sidebar ─────────────────────────────────────────────────────────────

function Sidebar() {
  return (
    <div style={{
      position: "absolute", left: 24, top: 24,
      width: 278, height: 1032, borderRadius: 40, overflow: "hidden",
    }}>
      {/* Luminosity white overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "white", mixBlendMode: "luminosity",
        pointerEvents: "none", borderRadius: 40,
      }} />

      <div style={{
        position: "relative", height: "100%",
        padding: "20px", display: "flex", flexDirection: "column", gap: 20,
      }}>
        {/* 出游搭子 card */}
        <div style={{
          background: T.bgCard, borderRadius: 18, height: 386, flexShrink: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 18, padding: 24,
        }}>
          <div style={{ width: 100, height: 100, borderRadius: 50, overflow: "hidden", border: "3px solid white", boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}>
            <img src={imgNewPenguinAvatar} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <p style={{ fontFamily: T.font, fontSize: 28, fontWeight: 500, color: T.text92, lineHeight: "28px", margin: 0 }}>出游搭子</p>
          <div style={{ background: "white", borderRadius: 18, padding: "10px 18px", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: T.green, display: "inline-block" }} />
            <p style={{ fontFamily: T.font, fontSize: 22, fontWeight: 400, color: T.text60, lineHeight: "22px", margin: 0 }}>向导中</p>
          </div>
        </div>

        {/* 组队聊天 card — active, black-00 border */}
        <div style={{
          background: T.bgCard, borderRadius: 18, flex: 1,
          border: `2px solid ${T.primary}`,
          boxShadow: "0 0 0 5px rgba(0,0,0,0.04)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 16, padding: "20px 18px", position: "relative", overflow: "hidden",
        }}>
          {/* Pulsing active dot — black */}
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: "absolute", top: 16, right: 16,
              width: 10, height: 10, borderRadius: "50%",
              background: T.primary,
            }}
          />

          {/* Stacked avatars */}
          <div style={{ display: "flex", position: "relative", width: 128, height: 56 }}>
            {[imgNewPenguinAvatar, imgRect2, imgRect1].map((src, i) => (
              <div key={i} style={{
                position: "absolute", left: i * 38,
                width: 56, height: 56, borderRadius: "50%", overflow: "hidden",
                border: "2.5px solid white", boxShadow: "0 2px 8px rgba(0,0,0,0.14)",
              }}>
                <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>

          <p style={{ fontFamily: T.font, fontSize: 28, fontWeight: 500, color: T.text92, lineHeight: "28px", margin: 0 }}>
            组队聊天
          </p>
          <p style={{ fontFamily: T.font, fontSize: 21, fontWeight: 400, color: T.text40, lineHeight: "21px", margin: 0, textAlign: "center" }}>
            {ROOMS.filter((r) => r.active).length} 个房间 · 进行中
          </p>
        </div>

        {/* Bottom buttons */}
        {[
          <EllipsisIcon   key="e" size="36px" style={{ color: T.text60 }} />,
          <SettingIcon key="s" size="36px" style={{ color: T.text60 }} />,
        ].map((icon, i) => (
          <div key={i} style={{
            background: T.bgCard, borderRadius: 18, height: 80, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {icon}
          </div>
        ))}
      </div>

      {/* Border overlay */}
      <div style={{
        position: "absolute", inset: 0,
        border: "1px solid rgba(255,255,255,0.4)", borderRadius: 40, pointerEvents: "none",
      }} />
    </div>
  );
}

// ─── Background Scene ─────────────────────────────────────────────────────────

function BackgroundScene() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: 60 }}>
      <div style={{
        position: "absolute",
        left: "calc(50% - 339px)", top: "calc(50% - 432px)",
        transform: "translate(-50%, -50%)",
        width: 150, height: 180, borderRadius: 50,
        background: "rgba(255,255,255,0.8)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: 18, padding: "18px 30px",
        maskImage: `url('${imgFrame2119902478}')`,
        maskSize: "150px 180px", maskRepeat: "no-repeat", maskPosition: "-528px 0px",
      }}>
        <div style={{ position: "absolute", inset: 0, borderRadius: 50, border: "2px solid white", pointerEvents: "none" }} />
        <div style={{ width: 48, height: 48, position: "relative" }}>
          <svg width="100%" height="100%" viewBox="0 0 40 36" fill="none"
            style={{ position: "absolute", inset: "10% 8% 14% 8%" }}>
            <path d="M18 26V22H14V26H18Z" fill="url(#bg_g)" />
            <path d="M26 26V22H22V26H26Z" fill="url(#bg_g)" />
            <path clipRule="evenodd" d={svgPaths.p3f627800} fill="url(#bg_g)" fillRule="evenodd" />
            <path d="M40 18H36V30H40V18Z" fill="url(#bg_g)" />
            <path d="M0 18H4V30H0V18Z" fill="url(#bg_g)" />
            <defs>
              <linearGradient id="bg_g" x1="0" y1="18" x2="40" y2="18" gradientUnits="userSpaceOnUse">
                <stop stopColor="#14C741" /><stop offset="1" stopColor="#08C7C7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p style={{
          fontFamily: T.font, fontSize: 28, fontWeight: 500, margin: 0, lineHeight: "28px",
          background: "linear-gradient(90deg, #14c741, #08c7c7)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          互动聊天
        </p>
      </div>
    </div>
  );
}

// ─── Top-right Chrome ─────────────────────────────────────────────────────────

function TopRightChrome() {
  return (
    <>
      <div style={{
        position: "absolute", top: 24, left: 1526, height: 84, borderRadius: 40,
        backdropFilter: "blur(50px)", background: "rgba(255,255,255,0.28)",
        border: "1.434px solid white", boxShadow: "0 5.735px 100px rgba(0,0,0,0.16)",
        display: "flex", alignItems: "center", padding: "16px 24px", gap: 12,
      }}>
        <svg width="32" height="33" viewBox="0 0 32.375 32.375" fill="none">
          <path clipRule="evenodd" d={svgPaths.p15a2b500} fill="black" fillOpacity="0.92" fillRule="evenodd" />
          <path d={svgPaths.p33c18e80} fill="black" fillOpacity="0.92" />
          <path d={svgPaths.p2d373770} fill="black" fillOpacity="0.92" />
          <path d={svgPaths.p28c0fc00} fill="black" fillOpacity="0.92" />
          <path d={svgPaths.p16ee6c00} fill="black" fillOpacity="0.92" />
        </svg>
        <p style={{ fontFamily: T.font, fontSize: 32, fontWeight: 500, color: "#232a3a", lineHeight: "46px", margin: 0 }}>
          角色切换
        </p>
      </div>

      <div style={{
        position: "absolute", top: 24, left: 1776, width: 120, height: 84, borderRadius: 72,
        backdropFilter: "blur(50px)", background: "rgba(255,255,255,0.1)",
        border: "1.434px solid white", boxShadow: "0 5.735px 100px rgba(0,0,0,0.16)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="34" height="34" viewBox="0 0 33.4146 34" fill="none">
          <path d={svgPaths.p3201d400} fill="black" />
          <path d={svgPaths.pb19e800} fill="black" />
        </svg>
      </div>
    </>
  );
}

// ─── Root Export ──────────────────────────────────────────────────────────────

export default function ChatTeam() {
  return (
    <div
      style={{
        background: T.bgPage, width: "100%", height: "100%",
        borderRadius: 60, overflow: "hidden", position: "relative",
      }}
      data-name="框架-随行ChatTeam"
    >
      <BackgroundScene />
      <TopRightChrome />
      <Sidebar />
      <TeamChatPanel />
    </div>
  );
}
