import { useState, useEffect } from "react";
import { DialogComponent } from "../design-system/DialogComponent";
import { ButtonComponent } from "../design-system/ButtonComponent";
import svgPaths from "./svg-y4232dl5oy";
import ActionSheetAndroidInteractive from "./ActionSheetAndroidInteractive";
import svgPathsMap from "./svg-3d4gtk7zjq";
import img3D8K5 from "figma:asset/c9c6dd19d9e3a7df41ce98d02b8aef1bd6ce7725.png";
import { motion, AnimatePresence } from "motion/react";
import {
  GlobalLeftTab,
  GlobalLeftTabExtendedBottomButton,
} from "../design-system";
import {
  AddIcon,
  UserAddIcon,
  ArrowLeftIcon,
  SoundIcon,
  UsergroupIcon,
  ChatIcon,
} from "tdesign-icons-react";

const imgTripBuddyPenguin = new URL("../../../../assets/CodeBuddyAssets/5125_2022/4.png", import.meta.url).href;
const imgTeamAvatarRight = new URL("../../../../assets/CodeBuddyAssets/5125_2022/5.png", import.meta.url).href;
const imgTeamAvatarTop = new URL("../../../../assets/CodeBuddyAssets/5125_2022/6.png", import.meta.url).href;
const imgTeamAvatarLeft = new URL("../../../../assets/CodeBuddyAssets/5125_2022/7.png", import.meta.url).href;

// ─── Types ────────────────────────────────────────────────────────────────────

type ModeType = "auto" | "guide" | "chat";
type TeamView = "lobby" | "room";

// ─── Design tokens (black-00 品牌色) ─────────────────────────────────────────

const T = {
  font:    "'Noto Sans SC', sans-serif",
  primary: "#000000",
  text92:  "rgba(0,0,0,0.92)",
  text60:  "rgba(0,0,0,0.6)",
  text40:  "rgba(0,0,0,0.4)",
  bgCard:  "#f7f8fa",
  red:     "#e34d59",
  green:   "#00a854",
} as const;

// ─── Mock data ────────────────────────────────────────────────────────────────

const ROOMS = [
  { id: "r1", name: "寻宝探险队", count: 3, max: 6, active: true,  tag: "进行中", memberIds: ["me", "u1", "u2"] },
  { id: "r2", name: "周末自驾游", count: 5, max: 8, active: true,  tag: "进行中", memberIds: ["u1", "u2", "u3", "me"] },
  { id: "r3", name: "亲子出游组", count: 2, max: 4, active: false, tag: "等待中", memberIds: ["u2", "u3"] },
];

const MEMBERS = [
  { id: "me", name: "我",   color: "#555", photo: imgTripBuddyPenguin as string | null },
  { id: "u1", name: "小明", color: "#666", photo: imgTeamAvatarRight as string | null },
  { id: "u2", name: "小红", color: "#444", photo: imgTeamAvatarLeft as string | null },
  { id: "u3", name: "大力", color: "#333", photo: imgTeamAvatarTop as string | null },
];

const MEMBER_MAP = Object.fromEntries(MEMBERS.map((m) => [m.id, m]));

// ─── Team Chat: Speaking Wave ─────────────────────────────────────────────────

function SpeakingWave() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 36 }}>
      {[0.4, 0.75, 1.0, 0.75, 0.4].map((h, i) => (
        <motion.div key={i}
          animate={{ scaleY: [0.25, h, 0.25] }}
          transition={{ duration: 0.65, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
          style={{ width: 7, height: 30, background: T.primary, borderRadius: 4, transformOrigin: "bottom", flexShrink: 0 }}
        />
      ))}
    </div>
  );
}

// ─── Team Chat: Member Card ───────────────────────────────────────────────────

function MemberCard({ member, isSpeaking }: { member: typeof MEMBERS[0]; isSpeaking: boolean }) {
  return (
    <motion.div
      animate={{
        boxShadow: isSpeaking ? "0 8px 36px rgba(0,0,0,0.10)" : "0 2px 12px rgba(0,0,0,0.06)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: "#fff", borderRadius: 24,
        outline: isSpeaking ? `2px solid ${T.primary}` : "2px solid transparent",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: 18, position: "relative", overflow: "hidden", padding: "36px 24px 32px",
      }}
    >
      <AnimatePresence>
        {isSpeaking && (
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }}
            style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: T.primary, transformOrigin: "left" }} />
        )}
      </AnimatePresence>

      <div style={{ position: "relative" }}>
        <motion.div
          animate={{ boxShadow: isSpeaking ? ["0 0 0 0px rgba(0,0,0,0.30)", "0 0 0 14px rgba(0,0,0,0)", "0 0 0 0px rgba(0,0,0,0)"] : "0 0 0 0px rgba(0,0,0,0)" }}
          transition={{ duration: 1.5, repeat: isSpeaking ? Infinity : 0 }}
          style={{ width: 120, height: 120, borderRadius: "50%", overflow: "hidden", background: member.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
        >
          {member.photo
            ? <img src={member.photo} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : <span style={{ fontFamily: T.font, fontSize: 52, fontWeight: 700, color: "white", lineHeight: 1 }}>{member.name[0]}</span>
          }
        </motion.div>
        <AnimatePresence>
          {isSpeaking && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
              style={{ position: "absolute", bottom: 4, right: 4, width: 26, height: 26, borderRadius: "50%", background: T.primary, border: "3px solid white" }} />
          )}
        </AnimatePresence>
      </div>

      <motion.p animate={{ color: isSpeaking ? T.text92 : T.text60 }} transition={{ duration: 0.3 }}
        style={{ fontFamily: T.font, fontSize: 32, fontWeight: isSpeaking ? 500 : 400, lineHeight: "32px", margin: 0 }}>
        {member.name}
      </motion.p>

      <AnimatePresence>
        {isSpeaking && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}>
            <SpeakingWave />
          </motion.div>
        )}
      </AnimatePresence>

      {!isSpeaking && <SoundIcon size="28px" style={{ color: T.text40 }} />}
    </motion.div>
  );
}

// ─── Team Chat: Avatar Stack (shared) ────────────────────────────────────────

function AvatarStack({ memberIds, avatarSize = 44, max = 3 }: { memberIds: string[]; avatarSize?: number; max?: number }) {
  const members = memberIds.map((id) => MEMBER_MAP[id]).filter(Boolean);
  const visible = members.slice(0, max);
  const extra   = members.length - max;
  const overlap = Math.round(avatarSize * 0.27);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {visible.map((m, i) => (
        <div key={m.id} style={{
          width: avatarSize, height: avatarSize, borderRadius: "50%",
          overflow: "hidden", background: m.color,
          border: "2px solid rgba(246,247,250,0.9)",
          marginLeft: i === 0 ? 0 : -overlap,
          flexShrink: 0, position: "relative", zIndex: visible.length - i,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {m.photo
            ? <img src={m.photo} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : <span style={{ fontFamily: T.font, fontSize: Math.round(avatarSize * 0.38), fontWeight: 700, color: "white", lineHeight: 1 }}>{m.name[0]}</span>
          }
        </div>
      ))}
      {extra > 0 && (
        <div style={{
          width: avatarSize, height: avatarSize, borderRadius: "50%",
          background: "rgba(0,0,0,0.08)",
          border: "2px solid rgba(246,247,250,0.9)",
          marginLeft: -overlap, zIndex: 0,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <span style={{ fontFamily: T.font, fontSize: Math.round(avatarSize * 0.38), fontWeight: 500, color: T.text60, lineHeight: 1 }}>+{extra}</span>
        </div>
      )}
    </div>
  );
}

// ─── Team Chat: Featured Card (进行中) ────────────────────────────────────────

function FeaturedRoomCard({ room, onJoin }: { room: typeof ROOMS[0]; onJoin: () => void }) {
  return (
    <motion.div
      onClick={onJoin}
      whileHover={{ backgroundColor: "rgba(0,168,84,0.07)" }}
      whileTap={{ scale: 0.988 }}
      transition={{ duration: 0.15 }}
      style={{
        borderRadius: 24, cursor: "pointer", userSelect: "none", flexShrink: 0,
        background: "rgba(0,168,84,0.04)",
        border: "1.5px solid rgba(0,168,84,0.14)",
        padding: "36px 36px 32px",
        display: "flex", flexDirection: "column", gap: 28,
      }}
    >
      {/* 状态行 */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 10, height: 10, borderRadius: "50%", background: T.green, flexShrink: 0, boxShadow: "0 0 0 4px rgba(0,168,84,0.15)" }}
        />
        <span style={{ fontFamily: T.font, fontSize: 24, fontWeight: 400, color: T.green, lineHeight: "24px" }}>进行中</span>
      </div>
      {/* 房间名 */}
      <p style={{
        fontFamily: T.font, fontSize: 48, fontWeight: 500,
        color: T.text92, lineHeight: "48px", margin: 0,
        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
      }}>
        {room.name}
      </p>
      {/* 底行：头像 + 人数 + 加入按钮 */}
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <AvatarStack memberIds={room.memberIds} avatarSize={56} max={4} />
        <p style={{ fontFamily: T.font, fontSize: 28, fontWeight: 400, color: T.text40, lineHeight: "28px", margin: 0, flex: 1 }}>
          {room.count}/{room.max} 人
        </p>
        <ButtonComponent
          variant="secondary"
          onClick={(e) => { e?.stopPropagation?.(); onJoin(); }}
          className="!h-[72px] !px-[28px] shrink-0"
        >
          加入聊天
        </ButtonComponent>
      </div>
    </motion.div>
  );
}

// ─── Team Chat: Room Row (等待中 — 紧凑行) ────────────────────────────────────

function RoomRow({ room, onJoin }: { room: typeof ROOMS[0]; onJoin: () => void }) {
  return (
    <motion.div
      onClick={onJoin}
      whileHover={{ backgroundColor: "rgba(0,0,0,0.065)" }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.15 }}
      style={{
        display: "flex", alignItems: "center", gap: 22,
        padding: "24px 30px", borderRadius: 18,
        background: "rgba(0,0,0,0.04)",
        cursor: "pointer", userSelect: "none", flexShrink: 0,
      }}
    >
      <div style={{ width: 10, height: 10, borderRadius: "50%", flexShrink: 0, background: "rgba(0,0,0,0.18)" }} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, overflow: "hidden" }}>
        <p style={{ fontFamily: T.font, fontSize: 34, fontWeight: 500, color: T.text92, lineHeight: "34px", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {room.name}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <AvatarStack memberIds={room.memberIds} avatarSize={40} max={3} />
          <p style={{ fontFamily: T.font, fontSize: 24, fontWeight: 400, color: T.text40, lineHeight: "24px", margin: 0 }}>
            {room.count}/{room.max} 人
          </p>
          <span style={{
            fontFamily: T.font, fontSize: 22, fontWeight: 400, color: T.text40,
            background: "rgba(0,0,0,0.04)", padding: "4px 14px", borderRadius: 8, lineHeight: "22px", flexShrink: 0,
          }}>
            {room.tag}
          </span>
        </div>
      </div>
      <ArrowLeftIcon size="28px" style={{ color: "rgba(0,0,0,0.18)", transform: "rotate(180deg)", flexShrink: 0 }} />
    </motion.div>
  );
}

// ─── Team Chat: Main Panel ────────────────────────────────────────────────────

function TeamChatPanel() {
  const [view, setView]               = useState<TeamView>("lobby");
  const [currentRoomId, setRoomId]    = useState<string | null>(null);
  const [isNewRoom, setIsNewRoom]     = useState(false);
  const [micOn, setMicOn]             = useState(true);
  const [speakingIdx, setSpeakingIdx] = useState(0);
  const [showCodeModal, setShowCodeModal] = useState(false);

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
  const displayMembers = isNewRoom ? [MEMBERS[0]] : MEMBERS.filter(m => roomName ? ROOMS.find(r => r.name === roomName)?.memberIds.includes(m.id) : false);

  const panelBg: React.CSSProperties = {
    width: "100%", height: "100%", borderRadius: 40,
    background: "rgba(246,247,250,0.97)",
    backdropFilter: "blur(40px)",
    border: "1px solid rgba(255,255,255,0.85)",
    boxShadow: "0 12px 60px rgba(0,0,0,0.10)",
    overflow: "hidden",
    position: "relative",
  };

  return (
    <div style={panelBg}>
      <AnimatePresence mode="wait">

        {/* LOBBY */}
        {view === "lobby" && (
          <motion.div key="lobby"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ height: "100%", display: "flex" }}
          >
            {/* ── LEFT: 操作区 ── */}
            <div style={{
              width: 400, flexShrink: 0,
              display: "flex", flexDirection: "column", justifyContent: "center",
              gap: 14,
              padding: "54px 48px 54px 54px",
              borderRight: "1px solid rgba(0,0,0,0.06)",
            }}>
              {/* 新建房间 — 主操作 */}
              <button
                onClick={() => enterRoom("new", true)}
                style={{
                  width: "100%", height: 108, borderRadius: 30,
                  background: T.primary, border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 16,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.16)",
                  transition: "opacity 0.18s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.72")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <AddIcon size="40px" style={{ color: "white" }} />
                <p style={{ fontFamily: T.font, fontSize: 36, fontWeight: 500, color: "white", lineHeight: "36px", margin: 0 }}>
                  新建房间
                </p>
              </button>

              {/* 口令加入 — 入口按钮，点击弹窗 */}
              <button
                onClick={() => setShowCodeModal(true)}
                style={{
                  width: "100%", height: 96, borderRadius: 28,
                  background: "white", border: "1.5px solid rgba(0,0,0,0.10)",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 16,
                  transition: "all 0.18s",
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.03)"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.22)"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.10)"; }}
              >
                <UserAddIcon size="36px" style={{ color: T.text60 }} />
                <p style={{ fontFamily: T.font, fontSize: 34, fontWeight: 400, color: T.text60, lineHeight: "34px", margin: 0 }}>
                  口令加入
                </p>
              </button>
            </div>

            {/* ── RIGHT: 房间列表 ── */}
            <div style={{
              flex: 1, display: "flex", flexDirection: "column",
              padding: "54px 54px 54px 48px",
              overflow: "hidden",
            }}>
              {/* 列表标题 */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, flexShrink: 0 }}>
                <p style={{ fontFamily: T.font, fontSize: 32, fontWeight: 500, color: T.text60, lineHeight: "32px", margin: 0 }}>
                  附近房间
                </p>
                <span style={{
                  fontFamily: T.font, fontSize: 22, color: T.text40,
                  background: "rgba(0,0,0,0.05)",
                  padding: "4px 16px", borderRadius: 20, lineHeight: "22px",
                }}>
                  {ROOMS.length}
                </span>
              </div>

              {/* 房间列表 — 进行中大卡 + 等待中紧凑行 */}
              <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden", display: "flex", flexDirection: "column", gap: 12 }}>
                {/* 进行中 — featured */}
                {ROOMS.filter(r => r.active).map((room) => (
                  <FeaturedRoomCard key={room.id} room={room} onJoin={() => enterRoom(room.id)} />
                ))}
                {/* 等待中 — 分割线 + 紧凑行 */}
                {ROOMS.some(r => !r.active) && (
                  <>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "6px 0 2px" }}>
                      <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.06)" }} />
                      <span style={{ fontFamily: T.font, fontSize: 22, color: T.text40, lineHeight: "22px", flexShrink: 0 }}>等待中</span>
                      <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.06)" }} />
                    </div>
                    {ROOMS.filter(r => !r.active).map((room) => (
                      <RoomRow key={room.id} room={room} onJoin={() => enterRoom(room.id)} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* ROOM */}
        {view === "room" && (
          <motion.div key="room"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ height: "100%", padding: "48px 54px", display: "flex", flexDirection: "column" }}
          >
            {/* Room header */}
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexShrink: 0, marginBottom: 36 }}>
              <button onClick={leaveRoom}
                style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(0,0,0,0.05)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.18s" }}
                onMouseOver={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.10)")}
                onMouseOut={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.05)")}>
                <ArrowLeftIcon size="36px" style={{ color: T.text60 }} />
              </button>

              <div style={{ flex: 1, overflow: "hidden" }}>
                <p style={{ fontFamily: T.font, fontSize: 42, fontWeight: 500, color: T.text92, lineHeight: "42px", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{roomName}</p>
                {!isNewRoom && <p style={{ fontFamily: T.font, fontSize: 26, fontWeight: 400, color: T.text40, lineHeight: "26px", margin: "6px 0 0" }}>音聊天中</p>}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(0,0,0,0.04)", borderRadius: 30, padding: "12px 28px", flexShrink: 0 }}>
                <UsergroupIcon size="28px" style={{ color: T.text60 }} />
                <p style={{ fontFamily: T.font, fontSize: 28, fontWeight: 400, color: T.text60, lineHeight: "28px", margin: 0 }}>{isNewRoom ? 1 : MEMBERS.length} 人在线</p>
              </div>

              <button onClick={leaveRoom}
                style={{ height: 72, padding: "0 36px", background: "transparent", borderRadius: 36, border: "1.5px solid rgba(227,77,89,0.4)", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, flexShrink: 0, transition: "all 0.18s" }}
                onMouseOver={(e) => { e.currentTarget.style.background = "rgba(227,77,89,0.06)"; e.currentTarget.style.borderColor = T.red; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(227,77,89,0.4)"; }}>
                <ChatIcon size="28px" style={{ color: T.red }} />
                <p style={{ fontFamily: T.font, fontSize: 28, fontWeight: 500, color: T.red, lineHeight: "28px", margin: 0 }}>离开</p>
              </button>
            </div>

            <div style={{ height: 1, background: "rgba(0,0,0,0.06)", marginBottom: 30, flexShrink: 0 }} />

            {/* Member grid */}
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: isNewRoom ? "1fr 1fr" : "repeat(2, 1fr)", gridTemplateRows: isNewRoom ? "1fr" : "repeat(2, 1fr)", gap: 24, overflow: "hidden", minHeight: 0 }}>
              {displayMembers.map((member, idx) => (
                <MemberCard key={member.id} member={member} isSpeaking={!isNewRoom && speakingIdx === idx} />
              ))}
              {isNewRoom && (
                <div style={{ background: "rgba(0,0,0,0.02)", borderRadius: 24, border: "2px dashed rgba(0,0,0,0.10)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
                  <UserAddIcon size="72px" style={{ color: "rgba(0,0,0,0.15)" }} />
                  <p style={{ fontFamily: T.font, fontSize: 30, fontWeight: 400, color: "rgba(0,0,0,0.25)", lineHeight: "30px", margin: 0 }}>等待其他人加入…</p>
                </div>
              )}
            </div>

            {/* Mic bar */}
            <div style={{ flexShrink: 0, marginTop: 30 }}>
              <div style={{ height: 1, background: "rgba(0,0,0,0.06)", marginBottom: 30 }} />
              <button onClick={() => setMicOn((v) => !v)}
                style={{ width: "100%", height: 96, borderRadius: 48, background: micOn ? T.primary : "rgba(0,0,0,0.05)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 18, boxShadow: micOn ? "0 6px 24px rgba(0,0,0,0.20)" : "none", transition: "all 0.25s" }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.80")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}>
                <AnimatePresence mode="wait">
                  <motion.div key={micOn ? "on" : "off"}
                    initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: "flex", alignItems: "center", gap: 18 }}>
                    {micOn
                      ? <SoundIcon size="42px" style={{ color: "white" }} />
                      : <SoundIcon size="42px" style={{ color: "rgba(0,0,0,0.30)" }} />
                    }
                    <p style={{ fontFamily: T.font, fontSize: 36, fontWeight: 500, color: micOn ? "white" : "rgba(0,0,0,0.30)", lineHeight: "36px", margin: 0, transition: "color 0.25s" }}>
                      {micOn ? "麦克风已开启" : "麦克风已关闭  ·  点击开启"}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 口令加入弹窗 ── */}
      <AnimatePresence>
        {showCodeModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setShowCodeModal(false)}
            style={{
              position: "absolute", inset: 0, zIndex: 50,
              background: "rgba(0,0,0,0.30)", borderRadius: 40,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ scale: 0.90, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.90, opacity: 0, y: 24 }}
              transition={{ duration: 0.22, ease: [0.34, 1.4, 0.64, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <DialogComponent
                type="confirm"
                size="large"
                title="输入邀请口令"
                content={
                  <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                    <p style={{ fontFamily: T.font, fontSize: 28, fontWeight: 400, color: T.text40, lineHeight: "28px", margin: 0 }}>
                      请输入队友分享的 6 位邀请码
                    </p>
                    <div style={{ display: "flex", gap: 12 }}>
                      {[0,1,2,3,4,5].map((i) => (
                        <div key={i} style={{
                          flex: 1, height: 96, borderRadius: 18,
                          background: "rgba(0,0,0,0.04)",
                          border: "1.5px solid rgba(0,0,0,0.10)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <p style={{ fontFamily: T.font, fontSize: 36, fontWeight: 400, color: "rgba(0,0,0,0.15)", margin: 0 }}>—</p>
                        </div>
                      ))}
                    </div>
                  </div>
                }
                primaryButtonText="确认加入"
                secondaryButtonText="取消"
                onPrimaryClick={() => setShowCodeModal(false)}
                onSecondaryClick={() => setShowCodeModal(false)}
                isOpen={showCodeModal}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Original FrameChat components (preserved) ───────────────────────────────

function CommonIconExit() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Common/icon_exit">
      <div className="absolute inset-[14.58%_19.36%_14.58%_11.03%]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.4146 34">
          <g id="Union">
            <path d={svgPaths.p3201d400} fill="black" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.pb19e800} fill="black" style={{ fill: "black", fillOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[88px]">
      <CommonIconExit />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute backdrop-blur-[50px] bg-[rgba(255,255,255,0.1)] content-stretch flex h-[84px] items-center justify-center left-[1776px] px-[24px] py-[16px] rounded-[72px] top-[24px] w-[120px]">
      <div aria-hidden="true" className="absolute border-[1.434px] border-solid border-white inset-0 pointer-events-none rounded-[72px] shadow-[0px_5.735px_100px_0px_rgba(0,0,0,0.16)]" />
      <Frame11 />
    </div>
  );
}

function Frame4({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className="bg-[rgba(234,237,242,0.7)] content-stretch flex items-center justify-center overflow-clip px-[4px] py-px relative rounded-[6px] shrink-0">
      <p className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] leading-[24px] not-italic opacity-80 relative shrink-0 text-[#00b85f] text-[20px] whitespace-nowrap">自动</p>
    </div>
  );
}

function Frame19({ mode }: { mode: ModeType }) {
  const modeText = { auto: "向导中", guide: "专业向导", chat: "树洞聊天" };
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame4 show={mode === "auto"} />
      <p className="font-['Noto_Sans_S_Chinese:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#697181] text-[24px] whitespace-nowrap">{modeText[mode]}</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative size-[24px]" data-name="chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d="M17.5 9.5L12 15L6.5 9.5" stroke="var(--stroke-0, #697181)" strokeLinecap="square" strokeWidth="2" style={{ stroke: "color(display-p3 0.4118 0.4431 0.5059)", strokeOpacity: "1" }} />
      </svg>
    </div>
  );
}

function Frame16({ mode, onClick }: { mode: ModeType; onClick: () => void }) {
  return (
    <button onClick={onClick} className="-translate-x-1/2 absolute bg-white content-stretch flex gap-[4px] items-center justify-center left-1/2 pl-[16px] pr-[12px] py-[12px] rounded-[24px] top-[263px] cursor-pointer hover:opacity-90 transition-opacity">
      <Frame19 mode={mode} />
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none"><ChevronDown /></div>
      </div>
    </button>
  );
}

function Frame12({ mode, onClick }: { mode: ModeType; onClick: () => void }) {
  return (
    <div className="relative h-[330px] w-full">
      <p className="absolute left-1/2 top-0 -translate-x-1/2 font-['PingFang_SC:Medium',sans-serif] text-[32px] leading-[32px] text-black whitespace-nowrap">
        出游搭子
      </p>

      <div
        className="absolute left-[45px] top-[91px] h-[148px] w-[148px] overflow-hidden rounded-[74px] bg-white"
        style={{ boxShadow: "0px 2px 26.5px rgba(0, 0, 0, 0.08)" }}
      >
        <img alt="出游搭子企鹅头像" className="h-full w-full object-cover" src={imgTripBuddyPenguin} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[74px] border-[4px] border-solid border-white" />
      </div>

      <Frame16 mode={mode} onClick={onClick} />
    </div>
  );
}

function Contact({ mode, onClick }: { mode: ModeType; onClick: () => void }) {
  return (
    <div className="backdrop-blur-[6.65px] bg-[#f7f8fa] h-[386px] relative rounded-[18px] shrink-0 w-[238px]" data-name="_Contact">
      <div className="absolute inset-x-0 top-[28px] flex justify-center">
        <Frame12 mode={mode} onClick={onClick} />
      </div>
    </div>
  );
}

function TeamAvatarPile() {
  return (
    <div className="absolute left-[24.5px] top-[84px] h-[274px] w-[189px]">
      <div
        className="absolute left-[85.38px] top-0 overflow-hidden rounded-[32.73px] bg-white"
        style={{
          width: 64.51,
          height: 64.94,
          transform: "rotate(14deg)",
          boxShadow: "2px 1px 24px rgba(0, 0, 0, 0.16)",
          outline: "2.54px solid white",
          outlineOffset: "-2.54px",
        }}
      >
        <img alt="组队聊天头像1" className="h-full w-full object-cover" src={imgTeamAvatarTop} />
      </div>

      <div
        className="absolute left-[80.71px] top-[64.53px] overflow-hidden rounded-[34px] bg-white"
        style={{
          width: 68.54,
          height: 69,
          transform: "rotate(14deg)",
          boxShadow: "2px 1px 24px rgba(0, 0, 0, 0.16)",
          outline: "2.54px solid white",
          outlineOffset: "-2.54px",
        }}
      >
        <img alt="组队聊天头像2" className="h-full w-full object-cover" src={imgTeamAvatarRight} />
      </div>

      <div
        className="absolute left-0 top-[35.41px] overflow-hidden rounded-[47.96px] bg-white"
        style={{
          width: 95.52,
          height: 96.58,
          transform: "rotate(-8deg)",
          boxShadow:
            "2.9438px 1.4719px 35.3256px rgba(179, 207, 223, 0.29), 8.8314px -2.9438px 14.719px rgba(0, 0, 0, 0.08)",
          outline: "3.74px solid white",
          outlineOffset: "-3.74px",
        }}
      >
        <img alt="组队聊天头像3" className="h-full w-full object-cover" src={imgTeamAvatarLeft} />
      </div>
    </div>
  );
}

// ─── Contact1 (组队聊天 card) — now clickable with active state ───────────────

function Contact1({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex-[1_0_0] min-h-px min-w-px relative rounded-[18px] w-full cursor-pointer select-none"
      style={{
        background: T.bgCard,
        outline: isActive ? `2px solid ${T.primary}` : "none",
        outlineOffset: isActive ? "-2px" : "0px",
        boxShadow: isActive ? "0 0 0 5px rgba(0,0,0,0.04)" : "none",
        transition: "outline 0.2s, box-shadow 0.2s",
      }}
      data-name="_Contact"
    >
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.9)] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <p className="absolute left-1/2 top-[28px] -translate-x-1/2 font-['Noto_Sans_SC:Medium',sans-serif] font-medium leading-[32px] text-[32px] text-black whitespace-nowrap">
        组队聊天
      </p>
      <TeamAvatarPile />

      {/* Active indicator: pulsing dot top-right */}
      {isActive && (
        <motion.div
          animate={{ scale: [1, 1.7, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{ position: "absolute", top: 14, right: 14, width: 10, height: 10, borderRadius: "50%", background: T.primary }}
        />
      )}
    </div>
  );
}

function Frame14({
  mode, onClick, teamChatActive, onTeamChatToggle,
}: { mode: ModeType; onClick: () => void; teamChatActive: boolean; onTeamChatToggle: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[792px] items-start relative shrink-0 w-full">
      <Contact mode={mode} onClick={onClick} />
      <Contact1 isActive={teamChatActive} onClick={onTeamChatToggle} />
    </div>
  );
}

function IconFrame() {
  return (
    <div className="absolute left-0 size-[48px] top-0" data-name="Icon Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <path d={svgPaths.paf1ee00} fill="var(--fill-0, black)" id="Union" style={{ fill: "black", fillOpacity: "1" }} />
      </svg>
    </div>
  );
}

function MoreButtonIcon() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="ic_更多">
      <IconFrame />
    </div>
  );
}

function SettingButtonIcon() {
  return (
    <div className="overflow-clip relative rounded-[21.818px] shrink-0 size-[48px]" data-name="Common/icon_setting">
      <div className="absolute inset-[9.72%_14.58%_9.73%_14.58%]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 38.6638">
          <path d={svgPaths.p2c69c600} fill="var(--fill-0, black)" style={{ fill: "black", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p28fe3800} fill="var(--fill-0, black)" fillRule="evenodd" style={{ fill: "black", fillOpacity: "1" }} />
        </svg>
      </div>
    </div>
  );
}

function ChatLeftTab({
  mode,
  onClick,
  teamChatActive,
  onTeamChatToggle,
}: {
  mode: ModeType;
  onClick: () => void;
  teamChatActive: boolean;
  onTeamChatToggle: () => void;
}) {
  return (
    <GlobalLeftTab
      variant="extended"
      className="absolute left-[24px] top-[24px] h-[1032px]"
      bottomContent={
        <>
          <GlobalLeftTabExtendedBottomButton
            icon={<MoreButtonIcon />}
            onClick={() => undefined}
          />
          <GlobalLeftTabExtendedBottomButton
            icon={<SettingButtonIcon />}
            onClick={() => undefined}
          />
        </>
      }
    >
      <Frame14
        mode={mode}
        onClick={onClick}
        teamChatActive={teamChatActive}
        onTeamChatToggle={onTeamChatToggle}
      />
    </GlobalLeftTab>
  );
}

function Radio() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="radio-1">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[42px] top-1/2" data-name="data/icon_people list">
        <div className="absolute inset-[10.42%_12.5%_12.5%_10.42%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.375 32.375">
            <path clipRule="evenodd" d={svgPaths.p15a2b500} fill="black" fillOpacity="0.92" fillRule="evenodd" />
            <path d={svgPaths.p33c18e80} fill="black" fillOpacity="0.92" />
            <path d={svgPaths.p2d373770} fill="black" fillOpacity="0.92" />
            <path d={svgPaths.p28c0fc00} fill="black" fillOpacity="0.92" />
            <path d={svgPaths.p16ee6c00} fill="black" fillOpacity="0.92" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Radio />
      <p className="font-['PingFang_SC:Medium',sans-serif] leading-[46px] not-italic relative shrink-0 text-[#232a3a] text-[32px] whitespace-nowrap">角色切换</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame17 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[84px] left-[1526px] max-w-[1200px] rounded-[40px] top-[24px]">
      <div aria-hidden="true" className="absolute backdrop-blur-[50px] bg-[rgba(255,255,255,0.28)] inset-0 mix-blend-luminosity pointer-events-none rounded-[40px]" />
      <div className="content-stretch flex h-full items-center justify-center max-w-[inherit] overflow-clip px-[24px] py-[16px] relative rounded-[inherit]">
        <Frame18 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.434px] border-solid border-white inset-0 pointer-events-none rounded-[40px] shadow-[0px_5.735px_100px_0px_rgba(0,0,0,0.16)]" />
    </div>
  );
}

function MapIcon({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div className="absolute left-[186px] size-[60px] top-[262px] animate-[bounceIn_0.5s_ease-out]">
      <div className="absolute h-[44px] left-[5.75px] top-[8px] w-[49.75px]">
        <div className="absolute inset-[-8.33%_-7.64%_-8.6%_-7.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.3977 51.4462">
            <path d={svgPathsMap.p23044980} stroke="white" strokeWidth="4" style={{ stroke: "white", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[47.832px] items-center justify-center left-[4px] top-[6px] w-[52.046px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.79deg]">
          <div className="h-[47.13px] relative w-[51.403px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[156.3%] left-[-20.65%] max-w-none top-[-31.73%] w-[143.31%]" src={img3D8K5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function Chat() {
  const [mode, setMode]               = useState<ModeType>("auto");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [showTeamChat, setShowTeamChat] = useState(true);

  const handleModeChange = (newMode: ModeType) => setMode(newMode);
  const toggleSheet      = () => setIsSheetOpen(!isSheetOpen);
  const toggleTeamChat   = () => setShowTeamChat((v) => !v);

  return (
    <div className="bg-[#eaedf2] overflow-clip relative rounded-[60px] size-full" data-name="框架-随行Chat">
      <Frame5 />
      <ChatLeftTab
        mode={mode}
        onClick={toggleSheet}
        teamChatActive={showTeamChat}
        onTeamChatToggle={toggleTeamChat}
      />
      <Frame />
      <MapIcon show={mode === "guide"} />

      {/* Mode switch action sheet */}
      {isSheetOpen && (
        <>
          <div className="absolute inset-0 z-40" onClick={() => setIsSheetOpen(false)} />
          <div className="absolute bottom-[650px] left-[321px] w-[461px] z-50 animate-[fadeIn_0.2s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <ActionSheetAndroidInteractive selectedMode={mode} onSelectMode={handleModeChange} />
          </div>
        </>
      )}

      {/* Team Chat Panel — slides in from the right */}
      <AnimatePresence>
        {showTeamChat && (
          <motion.div
            key="team-chat"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: "absolute",
              left: 326, top: 24,
              width: 1570, height: 1032,
              zIndex: 30,
            }}
          >
            <TeamChatPanel />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}