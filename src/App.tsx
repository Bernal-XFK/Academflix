import { CATALOG_SEED_DATA } from './data/catalog';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { 
  Play, Plus, Check, Info, X, Quote, 
  BookOpen, Video, Search, Bell, Copy, 
  ChevronRight, ChevronLeft, Bookmark, LogOut, PlusCircle, Send,
  Trash2, Filter, Database, Heart, Clock, User as UserIcon, Edit3,
  Award, TrendingUp, Sparkles, GraduationCap, RefreshCw, Volume2, VolumeX, Eye,
  ExternalLink, CheckCircle2, Sliders, Shield
} from 'lucide-react';

// Firebase Imports
import { initializeApp } from 'firebase/app';
import { 
  getFirestore, collection, addDoc, onSnapshot, 
  query, where, doc, getDoc, setDoc, updateDoc,
  serverTimestamp, orderBy, limit, Timestamp,
  deleteDoc, increment, writeBatch
} from 'firebase/firestore';
import { 
  getAuth, signInWithPopup, GoogleAuthProvider, 
  onAuthStateChanged, signOut, updateProfile, User 
} from 'firebase/auth';
import firebaseConfig from '../firebase-applet-config.json';

// --- CONFIGURACIÓN FIREBASE ---
const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// --- TIPOS ---
export type Career = 'sistemas' | 'electronica' | 'industrial';

export interface Profile {
  userId?: string;
  displayName?: string;
  career: Career;
  savedContent?: string[]; // Favoritos
  watchLater?: string[];    // Ver más tarde
  lastActive?: any;
}

export interface ContentItem {
  id: string;
  title: string;
  desc: string;
  type: 'video' | 'curso';
  career: Career | 'all' | 'transversal';
  author: string;
  year: number;
  url: string;
  yt_id?: string;
  thumb: string;
  tags?: string[];
  matchScore?: number;
  views?: number;
}

export interface Interaction {
  contentId: string;
  type: 'play' | 'add_list' | 'cite';
  timestamp: Timestamp;
}

// --- DATOS SEMILLERO EXPANDIDO (210+ CURSOS CURADOS PARA INGENIERÍAS) ---
export const SEED_DATA: Omit<ContentItem, 'id'>[] = CATALOG_SEED_DATA;

// --- UTILS ---
export const getThumbnail = (url: string) => {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return { id: match[2], thumb: `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg` };
  }
  return { id: '', thumb: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80' };
};

// --- MOTOR DE RECOMENDACIÓN HIPER-PERSONALIZADO ---
export function calculateMatchScore(
  userInteractions: Interaction[], 
  videoTags: string[] = [], 
  itemCareer: string, 
  userCareer: string, 
  itemYear: number = 2024, 
  itemViews: number = 0
): number {
  let score = 50; // Base score
  
  // 1. Criterio de Carrera
  if (itemCareer === userCareer) {
    score += 35;
  } else if (itemCareer === 'all' || itemCareer === 'transversal') {
    score += 20;
  } else {
    score -= 10;
  }

  // 2. Interacciones del usuario (Historial de reproducciones y citas)
  const userPlayedIds = new Set(userInteractions.filter(i => i.type === 'play').map(i => i.contentId));
  const userCitedIds = new Set(userInteractions.filter(i => i.type === 'cite').map(i => i.contentId));
  
  if (userCitedIds.size > 0) {
    score += 5;
  }

  // 3. Ponderación por etiquetas relevantes
  if (videoTags.some(t => ['ia', 'software', 'circuitos', 'optimizacion', 'calculo', 'lean'].includes(t.toLowerCase()))) {
    score += 5;
  }

  // 4. Factor de popularidad controlada
  if (itemViews > 2000) score += 4;
  else if (itemViews > 1000) score += 2;

  // Clampeo final estilo Netflix (85% a 99% para contenido afín)
  return Math.min(99, Math.max(70, score));
}

// --- CURSOR ULTRA-FLUIDO OPTIMIZADO (SIN LAG) ---
function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [clicks, setClicks] = useState<{id: number, x: number, y: number}[]>([]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring sumamente rápido y ligero para latencia imperceptible
  const springConfig = { damping: 25, stiffness: 1200, mass: 0.05 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'input' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks(prev => [...prev, newClick]);
      setTimeout(() => {
        setClicks(prev => prev.filter(c => c.id !== newClick.id));
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('click', handleClick);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]"
        style={{
          border: '1.5px solid rgba(66, 133, 244, 0.8)',
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
          borderColor: isHovering ? '#D96570' : '#4285F4',
          backgroundColor: isHovering ? 'rgba(217, 101, 112, 0.12)' : 'rgba(217, 101, 112, 0)'
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-[#4285F4] rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHovering ? 0 : 1
        }}
      />
      <AnimatePresence>
        {clicks.map(click => (
          <motion.div
            key={click.id}
            initial={{ scale: 0.2, opacity: 0.8 }}
            animate={{ scale: 3.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#D96570] pointer-events-none z-[9999]"
            style={{ 
              x: click.x, 
              y: click.y,
              translateX: '-50%',
              translateY: '-50%'
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}

// --- SONIDO SINTETIZADO CINEMÁTICO ESTILO NETFLIX (WEB AUDIO API) ---
function playCinematicIntroSound() {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    
    // Sub-bass hit 1 (Ta-)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(65.41, now); // C2
    osc1.frequency.exponentialRampToValueAtTime(32.7, now + 0.8);
    gain1.gain.setValueAtTime(0.001, now);
    gain1.gain.exponentialRampToValueAtTime(0.4, now + 0.05);
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 1.2);

    // Resonant chord hit 2 (-DUM)
    const osc2 = ctx.createOscillator();
    const osc3 = ctx.createOscillator();
    const gainChord = ctx.createGain();
    
    osc2.type = 'triangle';
    osc3.type = 'sine';
    osc2.frequency.setValueAtTime(130.81, now + 0.35); // C3
    osc3.frequency.setValueAtTime(196.00, now + 0.35); // G3 (quinta perfecta)
    
    gainChord.gain.setValueAtTime(0.001, now);
    gainChord.gain.setValueAtTime(0.001, now + 0.35);
    gainChord.gain.exponentialRampToValueAtTime(0.5, now + 0.45);
    gainChord.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

    osc2.connect(gainChord);
    osc3.connect(gainChord);
    gainChord.connect(ctx.destination);

    osc2.start(now + 0.35);
    osc3.start(now + 0.35);
    osc2.stop(now + 2.8);
    osc3.stop(now + 2.8);
  } catch (err) {
    // Si el navegador bloquea audio sin clic previo, falla en silencio
    console.warn("Audio autoplay blocked or unsupported", err);
  }
}

// --- INTRO CINEMÁTICA MEJORADA ---
function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Intentar sonido cinemático
    playCinematicIntroSound();
    const timer = setTimeout(onComplete, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden cursor-pointer"
      onClick={onComplete}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2.6, ease: "easeInOut" }}
    >
      {/* Fondo con rayos lumínicos ambientales */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-40"
          style={{ background: 'radial-gradient(circle, #D96570 0%, #4285F4 50%, transparent 70%)' }}
          animate={{ scale: [0.8, 1.3, 1], opacity: [0.2, 0.5, 0] }}
          transition={{ duration: 2.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Badge tipo estudio cinematográfico */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold tracking-[0.25em] uppercase text-white/60 mb-6 backdrop-blur-md"
        >
          <GraduationCap className="w-3.5 h-3.5 text-[#4285F4]" /> Engineering Originals
        </motion.div>

        {/* Logo ACADEMFLIX */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, letterSpacing: "0.05em" }}
          animate={{ scale: [0.85, 1.05, 1], opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-[#4285F4] via-[#9B72CB] to-[#D96570] text-transparent bg-clip-text select-none drop-shadow-[0_0_50px_rgba(217,101,112,0.6)]">
            ACADEMFLIX
          </h1>
        </motion.div>

        {/* Línea de escaneo láser luminosa */}
        <motion.div 
          className="mt-6 h-1 bg-gradient-to-r from-[#4285F4] via-[#9B72CB] to-[#D96570] mx-auto rounded-full shadow-[0_0_20px_#4285F4]"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: ["0%", "80%", "40%"], opacity: [0, 1, 0.8] }}
          transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
        />

        {/* Subtítulo dinámico */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/60 text-sm md:text-base font-light tracking-widest mt-6 uppercase"
        >
          Streaming Educativo Hiper-Personalizado para Ingenieros
        </motion.p>
      </div>

      {/* Botón discreto para saltar */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={(e) => { e.stopPropagation(); onComplete(); }}
        className="absolute bottom-8 right-8 text-xs text-white/40 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all backdrop-blur-sm"
      >
        Saltar intro →
      </motion.button>
    </motion.div>
  );
}

// --- COMPONENTE PRINCIPAL (APP) ---
export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [content, setContent] = useState<ContentItem[]>([]);
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [loading, setLoading] = useState(true);

  // Escuchar estado de autenticación
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (!u) {
        setProfile(null);
        setInteractions([]);
        setLoading(false);
      }
    });
    return unsub;
  }, []);

  // Escuchar perfil del usuario, contenidos y logs en tiempo real
  useEffect(() => {
    if (!user) return;

    // 1. Perfil del Usuario
    const profileRef = doc(db, 'profiles', user.uid);
    const unsubProfile = onSnapshot(profileRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as Profile;
        setProfile(data);
      } else {
        setProfile(null);
      }
    });

    // 2. Colección global de Contenidos
    const contentUnsub = onSnapshot(collection(db, 'content'), (snap) => {
      const firestoreItems: ContentItem[] = snap.empty 
        ? [] 
        : snap.docs.map(doc => ({ id: doc.id, ...(doc.data() as ContentItem) }));

      const existingUrls = new Set(firestoreItems.map(i => i.url?.toLowerCase().trim()));
      const existingYtIds = new Set(firestoreItems.map(i => i.yt_id).filter(Boolean));

      // Completar con el catálogo semillero completo para garantizar siempre 200+ cursos
      const missingSeedItems: ContentItem[] = SEED_DATA
        .filter(seed => !existingUrls.has(seed.url?.toLowerCase().trim()) && (!seed.yt_id || !existingYtIds.has(seed.yt_id)))
        .map((seed, idx) => ({
          ...seed,
          id: `seed_${idx}`
        }));

      setContent([...firestoreItems, ...missingSeedItems]);
    });

    // 3. Interacciones del usuario
    const qInter = query(
      collection(db, 'interactions'), 
      where('userId', '==', user.uid), 
      orderBy('timestamp', 'desc'), 
      limit(100)
    );
    const unsubInter = onSnapshot(qInter, (snap) => {
      setInteractions(snap.docs.map(doc => doc.data() as Interaction));
      setLoading(false);
    }, (err) => {
      console.warn("Interactions query error (likely index or permissions):", err);
      setLoading(false);
    });

    return () => {
      unsubProfile();
      contentUnsub();
      unsubInter();
    };
  }, [user]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const handleSelectCareer = async (selected: Career) => {
    if (!user) return;
    try {
      await setDoc(doc(db, 'profiles', user.uid), {
        userId: user.uid,
        displayName: user.displayName || 'Estudiante de Ingeniería',
        career: selected,
        savedContent: [],
        watchLater: [],
        lastActive: serverTimestamp()
      }, { merge: true });
    } catch (err) {
      console.error("Error setting career profile:", err);
    }
  };

  // Renderizado condicional según estado de sesión
  const renderContent = () => {
    if (loading && user) {
      return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 border-4 border-[#4285F4] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs tracking-widest text-white/50 uppercase font-semibold">Cargando Academflix...</p>
        </div>
      );
    }

    // Pantalla de Inicio de Sesión
    if (!user) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[65%] h-[65%] bg-[#4285F4]/15 blur-[180px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[65%] h-[65%] bg-[#D96570]/15 blur-[180px] rounded-full animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px]" />
          </div>
          
          <div className="z-10 text-center max-w-2xl space-y-8">
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-[#4285F4]">
                El Netflix para Ingenieros
              </span>
            </motion.div>

            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-6xl sm:text-7xl font-black tracking-tighter bg-gradient-to-r from-[#4285F4] via-[#9B72CB] to-[#D96570] text-transparent bg-clip-text drop-shadow-[0_0_35px_rgba(66,133,244,0.4)]"
            >
              ACADEMFLIX
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-lg mx-auto"
            >
              Cursos, clases magistrales y contenido académico hiper-personalizado por un motor de recomendación para tu carrera de ingeniería.
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <button 
                onClick={handleLogin}
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-neutral-200 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.25)]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Entrar con Google</span>
              </button>
            </motion.div>
          </div>
        </div>
      );
    }

    // Pantalla de Selección Inicial de Carrera
    if (!profile) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl z-10">
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-white/60 mb-4 inline-block">
              Paso 1 de 1
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">¿Qué ingeniería estás cursando?</h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
              Nuestro motor calibrará las recomendaciones y rutas de aprendizaje según tu perfil académico.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  id: 'sistemas', 
                  title: 'Sistemas y Software', 
                  icon: '💻', 
                  desc: 'Arquitectura, Cloud, IA, Desarrollo Web y Ciberseguridad' 
                },
                { 
                  id: 'electronica', 
                  title: 'Electrónica', 
                  icon: '⚡', 
                  desc: 'Circuitos, IoT, Microcontroladores, Robótica y DSP' 
                },
                { 
                  id: 'industrial', 
                  title: 'Industrial', 
                  icon: '🏭', 
                  desc: 'Lean, Six Sigma, Operaciones, Cadena de Suministro y Simulación' 
                }
              ].map(c => (
                <button
                  key={c.id}
                  onClick={() => handleSelectCareer(c.id as Career)}
                  className="p-8 rounded-2xl border border-white/10 bg-[#121212]/90 hover:border-[#4285F4] hover:bg-[#1a1a1a] transition-all group flex flex-col items-center text-center shadow-xl hover:-translate-y-1"
                >
                  <div className="text-6xl mb-4 group-hover:scale-115 transition-transform duration-300">{c.icon}</div>
                  <div className="text-xl font-bold mb-2 text-white group-hover:text-[#4285F4] transition-colors">{c.title}</div>
                  <p className="text-xs text-white/50 leading-relaxed">{c.desc}</p>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      );
    }

    // Aplicación Principal
    return <MainApp user={user} profile={profile} content={content} interactions={interactions} />;
  };

  return (
    <>
      <CustomCursor />
      {renderContent()}
    </>
  );
}

// --- MAIN APP COMPONENT ---
function MainApp({ 
  user, 
  profile, 
  content, 
  interactions 
}: { 
  user: User, 
  profile: Profile, 
  content: ContentItem[], 
  interactions: Interaction[] 
}) {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [activeTab, setActiveTab] = useState<'home' | 'admin'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewGridCategory, setViewGridCategory] = useState<{title: string, items: ContentItem[]} | null>(null);
  const [gridFilter, setGridFilter] = useState<'all' | 'sistemas' | 'electronica' | 'industrial' | 'transversal'>('all');
  const [showIntro, setShowIntro] = useState(true);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isSeeding, setIsSeeding] = useState(false);

  const isAdmin = user.email === 'bernaljosecsfn3@gmail.com';

  // ALGORITMO DE RECOMENDACIÓN CON MEMOIZACIÓN
  const sortedContent = useMemo(() => {
    return content.map(item => {
      const finalMatch = calculateMatchScore(
        interactions, 
        item.tags, 
        item.career, 
        profile.career, 
        item.year, 
        item.views
      );
      return { ...item, matchScore: finalMatch };
    }).sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
  }, [content, interactions, profile.career]);

  // Agrupaciones inteligentes
  const recommendedForCareer = useMemo(() => {
    return sortedContent.filter(c => c.career === profile.career);
  }, [sortedContent, profile.career]);

  const sistemasContent = useMemo(() => {
    return sortedContent.filter(c => c.career === 'sistemas');
  }, [sortedContent]);

  const electronicaContent = useMemo(() => {
    return sortedContent.filter(c => c.career === 'electronica');
  }, [sortedContent]);

  const industrialContent = useMemo(() => {
    return sortedContent.filter(c => c.career === 'industrial');
  }, [sortedContent]);

  const transversalContent = useMemo(() => {
    return sortedContent.filter(c => c.career === 'transversal' || c.career === 'all');
  }, [sortedContent]);

  const trends = useMemo(() => {
    return [...sortedContent].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 16);
  }, [sortedContent]);

  const continueWatching = useMemo(() => {
    return sortedContent.filter(c => 
      interactions.some(i => i.contentId === c.id && i.type === 'play')
    ).slice(0, 10);
  }, [sortedContent, interactions]);

  const myFavorites = useMemo(() => {
    const favs = profile.savedContent || [];
    return sortedContent.filter(c => favs.includes(c.id));
  }, [sortedContent, profile.savedContent]);

  const myWatchLater = useMemo(() => {
    const wl = profile.watchLater || [];
    return sortedContent.filter(c => wl.includes(c.id));
  }, [sortedContent, profile.watchLater]);

  // Búsqueda en tiempo real
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return sortedContent.filter(c => 
      c.title.toLowerCase().includes(q) || 
      c.desc.toLowerCase().includes(q) ||
      c.author.toLowerCase().includes(q) ||
      (c.tags && c.tags.some(t => t.toLowerCase().includes(q)))
    );
  }, [sortedContent, searchQuery]);

  // Filtrado interno para la vista en cuadrícula / catálogo completo
  const filteredGridItems = useMemo(() => {
    if (!viewGridCategory) return [];
    if (gridFilter === 'all') return viewGridCategory.items;
    return viewGridCategory.items.filter(item => 
      item.career === gridFilter || (gridFilter === 'transversal' && item.career === 'all')
    );
  }, [viewGridCategory, gridFilter]);

  // Registrar interacción (reproducción o cita)
  const logInteraction = async (contentId: string, type: 'play' | 'cite') => {
    try {
      await addDoc(collection(db, 'interactions'), {
        userId: user.uid,
        contentId,
        type,
        timestamp: serverTimestamp()
      });

      if (type === 'play') {
        const contentRef = doc(db, 'content', contentId);
        // Si el id es de seed local, no fallar en updateDoc
        if (!contentId.startsWith('seed_')) {
          await updateDoc(contentRef, {
            views: increment(1)
          });
        }
      }
    } catch (err) {
      console.warn("Interaction log note:", err);
    }
  };

  // Alternar favorito (Corazón ❤️)
  const toggleFavorite = async (item: ContentItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const currentFavs = profile.savedContent || [];
    const isFav = currentFavs.includes(item.id);
    const newFavs = isFav ? currentFavs.filter(id => id !== item.id) : [...currentFavs, item.id];
    
    try {
      await updateDoc(doc(db, 'profiles', user.uid), {
        savedContent: newFavs,
        lastActive: serverTimestamp()
      });
    } catch (err) {
      console.error("Error updating favorites:", err);
    }
  };

  // Alternar Ver más tarde (Reloj 🕒)
  const toggleWatchLater = async (item: ContentItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const currentWl = profile.watchLater || [];
    const isWl = currentWl.includes(item.id);
    const newWl = isWl ? currentWl.filter(id => id !== item.id) : [...currentWl, item.id];
    
    try {
      await updateDoc(doc(db, 'profiles', user.uid), {
        watchLater: newWl,
        lastActive: serverTimestamp()
      });
    } catch (err) {
      console.error("Error updating watch later:", err);
    }
  };

  // Sincronizar catálogo inicial si está vacío
  const handleSeedDatabase = async () => {
    setIsSeeding(true);
    try {
      // Filtrar ítems que no tengan un documento real en Firestore
      const toAdd = SEED_DATA.filter(item => 
        !content.some(c => !c.id.startsWith('seed_') && (c.url === item.url || (item.yt_id && c.yt_id === item.yt_id)))
      );

      console.log(`Sincronizando ${toAdd.length} cursos nuevos a Firebase...`);
      
      const chunkSize = 150;
      for (let i = 0; i < toAdd.length; i += chunkSize) {
        const chunk = toAdd.slice(i, i + chunkSize);
        const batch = writeBatch(db);
        for (const item of chunk) {
          const newDocRef = doc(collection(db, 'content'));
          batch.set(newDocRef, {
            ...item,
            views: item.views || 0,
            createdAt: serverTimestamp()
          });
        }
        await batch.commit();
      }
    } catch (err) {
      console.error("Error sincronizando catálogo con Firebase:", err);
    } finally {
      setIsSeeding(false);
    }
  };

  // Sincronización automática silenciosa en segundo plano cuando el usuario tiene sesión
  useEffect(() => {
    if (!user || isSeeding) return;
    const missing = SEED_DATA.filter(item => 
      !content.some(c => !c.id.startsWith('seed_') && (c.url === item.url || (item.yt_id && c.yt_id === item.yt_id)))
    );
    if (missing.length > 0 && content.length > 0) {
      const timer = setTimeout(() => {
        handleSeedDatabase();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [user, content.length]);

  const currentCareerLabels: Record<Career, string> = {
    sistemas: "Ingeniería de Sistemas y Software",
    electronica: "Ingeniería Electrónica",
    industrial: "Ingeniería Industrial"
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && <CinematicIntro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#050505] text-white">
        {/* BARRA DE NAVEGACIÓN SUPERIOR ESTILO NETFLIX */}
        <nav className="fixed top-0 w-full z-50 bg-[#050505]/85 backdrop-blur-md px-6 md:px-12 py-3.5 flex items-center justify-between border-b border-white/5 shadow-2xl transition-all">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => { setActiveTab('home'); setSearchQuery(''); setViewGridCategory(null); }}
              className="text-2xl font-black tracking-tighter bg-gradient-to-r from-[#4285F4] via-[#9B72CB] to-[#D96570] text-transparent bg-clip-text hover:opacity-90 transition-opacity"
            >
              ACADEMFLIX
            </button>
            <div className="hidden sm:flex items-center gap-5 text-sm font-medium">
              <button 
                onClick={() => { setActiveTab('home'); setSearchQuery(''); setViewGridCategory(null); }} 
                className={`${activeTab === 'home' && !viewGridCategory ? 'text-white font-bold' : 'text-white/50 hover:text-white'} transition-colors`}
              >
                Inicio
              </button>
              <button 
                onClick={() => setViewGridCategory({ title: "Mis Favoritos", items: myFavorites })}
                className="text-white/50 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 text-[#D96570]" /> Favoritos {myFavorites.length > 0 && `(${myFavorites.length})`}
              </button>
              <button 
                onClick={() => setViewGridCategory({ title: "Ver Más Tarde", items: myWatchLater })}
                className="text-white/50 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Clock className="w-3.5 h-3.5 text-[#4285F4]" /> Ver Más Tarde {myWatchLater.length > 0 && `(${myWatchLater.length})`}
              </button>
              {isAdmin && (
                <button 
                  onClick={() => setActiveTab('admin')} 
                  className={`${activeTab === 'admin' ? 'bg-[#1E1E1E] text-white border-white/20' : 'bg-transparent text-white/50 border-transparent hover:text-white hover:bg-white/5'} flex items-center gap-1.5 transition-all px-3 py-1 rounded-full border text-xs`}
                >
                  <PlusCircle className="w-3.5 h-3.5" /> Entorno Semillero
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Buscador Integrado */}
            <div className="flex items-center gap-2.5 bg-[#121212] px-3.5 py-1.5 rounded-full border border-white/10 focus-within:border-[#4285F4] transition-all">
              <Search className="w-4 h-4 text-white/40" />
              <input 
                type="text" 
                placeholder="Buscar cursos, temas..." 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value && activeTab !== 'home') setActiveTab('home');
                }}
                className="bg-transparent border-none outline-none text-xs sm:text-sm w-28 sm:w-44 md:w-56 placeholder-white/40 text-white"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-white/40 hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* BOTÓN DE PERFIL DE USUARIO INTERACTIVO (CLICK ABRE MODAL DE USUARIO) */}
            <button 
              onClick={() => setShowProfileModal(true)}
              className="flex items-center gap-3 p-1.5 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 transition-all text-left group"
              title="Mi Perfil y Preferencias"
            >
              <div className="hidden lg:block text-right">
                <p className="text-xs font-bold leading-tight group-hover:text-[#4285F4] transition-colors">
                  {profile.displayName || user.displayName || 'Estudiante'}
                </p>
                <p className="text-[10px] text-white/50 uppercase tracking-wider">
                  Ing. {profile.career}
                </p>
              </div>
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#4285F4] overflow-hidden bg-neutral-800 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Usuario" className="w-full h-full object-cover" />
                ) : (
                  <UserIcon className="w-4 h-4 text-white/80" />
                )}
              </div>
            </button>
          </div>
        </nav>

        {/* CONTENIDO PRINCIPAL */}
        <AnimatePresence mode="wait">
          {activeTab === 'home' ? (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="pt-20 pb-24"
            >
              {/* HERO FEATURED ITEM (SI NO HAY BÚSQUEDA ACTIVA NI FILTRO) */}
              {!searchQuery.trim() && !viewGridCategory && recommendedForCareer.length > 0 && (
                <div className="px-6 md:px-12 mb-10 pt-4">
                  <div className="relative h-[55vh] md:h-[62vh] rounded-3xl overflow-hidden group shadow-2xl border border-white/5">
                    <img 
                      src={recommendedForCareer[0].thumb} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      alt="Hero" 
                      onError={(e) => { 
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80'; 
                      }} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/30 to-transparent" />
                    
                    <div className="absolute bottom-10 left-8 md:left-12 max-w-2xl z-10">
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span className="bg-[#4285F4] px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider text-white">
                          Recomendado #1 para ti
                        </span>
                        <span className="text-green-400 font-bold text-xs bg-black/60 px-2 py-0.5 rounded border border-green-500/30">
                          {recommendedForCareer[0].matchScore}% Match
                        </span>
                        <span className="text-white/60 text-xs">
                          {recommendedForCareer[0].author} • {recommendedForCareer[0].year}
                        </span>
                      </div>
                      
                      <h1 className="text-3xl md:text-5xl font-black mb-3 leading-tight tracking-tight">
                        {recommendedForCareer[0].title}
                      </h1>
                      
                      <p className="text-sm md:text-base text-white/70 mb-6 line-clamp-3 font-light leading-relaxed">
                        {recommendedForCareer[0].desc}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-3">
                        <button 
                          onClick={() => { 
                            setSelectedItem(recommendedForCareer[0]); 
                            logInteraction(recommendedForCareer[0].id, 'play'); 
                          }}
                          className="flex items-center gap-2 px-6 md:px-8 py-3 bg-white text-black rounded-xl font-bold text-sm md:text-base hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105"
                        >
                          <Play className="w-4 h-4 md:w-5 md:h-5 fill-current" /> Reproducir
                        </button>
                        
                        <button 
                          onClick={() => toggleFavorite(recommendedForCareer[0])}
                          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm backdrop-blur-md border transition-all ${
                            (profile.savedContent || []).includes(recommendedForCareer[0].id)
                              ? 'bg-[#D96570]/20 border-[#D96570] text-[#D96570]'
                              : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${((profile.savedContent || []).includes(recommendedForCareer[0].id)) ? 'fill-current' : ''}`} />
                          <span className="hidden sm:inline">
                            {(profile.savedContent || []).includes(recommendedForCareer[0].id) ? 'En Favoritos' : 'Favorito'}
                          </span>
                        </button>

                        <button 
                          onClick={() => toggleWatchLater(recommendedForCareer[0])}
                          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm backdrop-blur-md border transition-all ${
                            (profile.watchLater || []).includes(recommendedForCareer[0].id)
                              ? 'bg-[#4285F4]/20 border-[#4285F4] text-[#4285F4]'
                              : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
                          }`}
                        >
                          <Clock className={`w-4 h-4 ${((profile.watchLater || []).includes(recommendedForCareer[0].id)) ? 'fill-current' : ''}`} />
                          <span className="hidden sm:inline">
                            {(profile.watchLater || []).includes(recommendedForCareer[0].id) ? 'En Ver más tarde' : 'Ver más tarde'}
                          </span>
                        </button>

                        <button 
                          onClick={() => setSelectedItem(recommendedForCareer[0])}
                          className="flex items-center gap-2 px-5 py-3 bg-white/10 text-white rounded-xl font-semibold text-sm backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all"
                        >
                          <Info className="w-4 h-4" /> Detalles
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* VISTA CUADRÍCULA CUANDO SE HACE CLICK EN "VER TODO" O CATEGORÍA */}
              {viewGridCategory ? (
                <div className="px-6 md:px-12 py-6 animate-in fade-in slide-in-from-bottom-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                      <button 
                        onClick={() => { setViewGridCategory(null); setGridFilter('all'); }}
                        className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-2 text-sm transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" /> Volver al Inicio
                      </button>
                      <h2 className="text-3xl font-black">{viewGridCategory.title}</h2>
                      <p className="text-white/50 text-sm mt-1">
                        Mostrando {filteredGridItems.length} de {viewGridCategory.items.length} recursos disponibles
                      </p>
                    </div>

                    {/* Selector de filtros por especialidad */}
                    <div className="flex flex-wrap items-center gap-2">
                      {[
                        { id: 'all', label: 'Todos', count: viewGridCategory.items.length },
                        { id: 'sistemas', label: 'Sistemas', count: viewGridCategory.items.filter(i => i.career === 'sistemas').length },
                        { id: 'electronica', label: 'Electrónica', count: viewGridCategory.items.filter(i => i.career === 'electronica').length },
                        { id: 'industrial', label: 'Industrial', count: viewGridCategory.items.filter(i => i.career === 'industrial').length },
                        { id: 'transversal', label: 'Tronco Común', count: viewGridCategory.items.filter(i => i.career === 'transversal' || i.career === 'all').length },
                      ].map(tab => (
                        <button
                          key={tab.id}
                          onClick={() => setGridFilter(tab.id as any)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 border ${
                            gridFilter === tab.id
                              ? 'bg-[#4285F4] text-white border-[#4285F4] shadow-md shadow-[#4285F4]/30'
                              : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <span>{tab.label}</span>
                          <span className="text-[10px] opacity-75 font-normal">({tab.count})</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {filteredGridItems.length === 0 ? (
                    <div className="p-12 text-center bg-[#121212] rounded-2xl border border-white/5 max-w-lg mx-auto">
                      <Bookmark className="w-12 h-12 text-white/20 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">No hay elementos en este filtro</h3>
                      <p className="text-white/50 text-sm mb-6">Prueba seleccionando otra carrera o borra los filtros.</p>
                      <button 
                        onClick={() => setGridFilter('all')} 
                        className="px-6 py-2.5 bg-[#4285F4] text-white rounded-lg font-bold text-sm"
                      >
                        Ver Todos ({viewGridCategory.items.length})
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
                      {filteredGridItems.map(item => (
                        <ContentCard 
                          key={item.id} 
                          item={item} 
                          onSelect={() => { setSelectedItem(item); logInteraction(item.id, 'play'); }}
                          isFavorite={(profile.savedContent || []).includes(item.id)}
                          isWatchLater={(profile.watchLater || []).includes(item.id)}
                          onToggleFavorite={(e) => toggleFavorite(item, e)}
                          onToggleWatchLater={(e) => toggleWatchLater(item, e)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : searchQuery.trim() ? (
                /* RESULTADOS DE BÚSQUEDA */
                <div className="px-6 md:px-12 py-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold">Resultados para "{searchQuery}"</h2>
                    <p className="text-white/50 text-sm">{searchResults.length} resultados encontrados</p>
                  </div>
                  {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
                      {searchResults.map(item => (
                        <ContentCard 
                          key={item.id} 
                          item={item} 
                          onSelect={() => { setSelectedItem(item); logInteraction(item.id, 'play'); }}
                          isFavorite={(profile.savedContent || []).includes(item.id)}
                          isWatchLater={(profile.watchLater || []).includes(item.id)}
                          onToggleFavorite={(e) => toggleFavorite(item, e)}
                          onToggleWatchLater={(e) => toggleWatchLater(item, e)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="py-20 text-center">
                      <Search className="w-12 h-12 text-white/20 mx-auto mb-4" />
                      <p className="text-white/60 text-lg mb-2">No se encontraron cursos para "{searchQuery}"</p>
                      <p className="text-white/40 text-sm">Prueba buscando por "Cálculo", "Python", "Circuitos", "Lean" o "Docker".</p>
                    </div>
                  )}
                </div>
              ) : (
                /* FILAS NETFLIX EN EL HOME */
                <div className="space-y-12">
                  {/* Fila: Mis Favoritos (si existen) */}
                  {myFavorites.length > 0 && (
                    <ContentRow 
                      title="⭐ Mis Favoritos" 
                      items={myFavorites} 
                      onSelect={(item) => { setSelectedItem(item); logInteraction(item.id, 'play'); }} 
                      savedFavorites={profile.savedContent || []}
                      savedWatchLater={profile.watchLater || []}
                      onToggleFavorite={toggleFavorite}
                      onToggleWatchLater={toggleWatchLater}
                      onViewAll={() => setViewGridCategory({ title: "⭐ Mis Favoritos", items: myFavorites })}
                    />
                  )}

                  {/* Fila: Ver Más Tarde (si existen) */}
                  {myWatchLater.length > 0 && (
                    <ContentRow 
                      title="🕒 Ver Más Tarde" 
                      items={myWatchLater} 
                      onSelect={(item) => { setSelectedItem(item); logInteraction(item.id, 'play'); }} 
                      savedFavorites={profile.savedContent || []}
                      savedWatchLater={profile.watchLater || []}
                      onToggleFavorite={toggleFavorite}
                      onToggleWatchLater={toggleWatchLater}
                      onViewAll={() => setViewGridCategory({ title: "🕒 Ver Más Tarde", items: myWatchLater })}
                    />
                  )}

                  {/* Fila: Continuar Estudiando */}
                  {continueWatching.length > 0 && (
                    <ContentRow 
                      title="Continuar Estudiando" 
                      items={continueWatching} 
                      onSelect={(item) => { setSelectedItem(item); logInteraction(item.id, 'play'); }} 
                      savedFavorites={profile.savedContent || []}
                      savedWatchLater={profile.watchLater || []}
                      onToggleFavorite={toggleFavorite}
                      onToggleWatchLater={toggleWatchLater}
                      onViewAll={() => setViewGridCategory({ title: "Continuar Estudiando", items: continueWatching })}
                    />
                  )}

                  {/* Fila: Recomendado para tu carrera */}
                  <ContentRow 
                    title={`🎯 Lo Mejor para ${currentCareerLabels[profile.career]}`} 
                    items={recommendedForCareer} 
                    onSelect={(item) => { setSelectedItem(item); logInteraction(item.id, 'play'); }} 
                    savedFavorites={profile.savedContent || []}
                    savedWatchLater={profile.watchLater || []}
                    onToggleFavorite={toggleFavorite}
                    onToggleWatchLater={toggleWatchLater}
                    onViewAll={() => setViewGridCategory({ title: `Lo Mejor para ${currentCareerLabels[profile.career]}`, items: recommendedForCareer })}
                  />

                  {/* Fila: Tendencias Globales */}
                  <ContentRow 
                    title="🔥 Tendencias en la Comunidad (Top Popular)" 
                    items={trends} 
                    onSelect={(item) => { setSelectedItem(item); logInteraction(item.id, 'play'); }} 
                    savedFavorites={profile.savedContent || []}
                    savedWatchLater={profile.watchLater || []}
                    onToggleFavorite={toggleFavorite}
                    onToggleWatchLater={toggleWatchLater}
                    onViewAll={() => setViewGridCategory({ title: "Tendencias en la Comunidad", items: trends })}
                  />

                  {/* Fila: Especialización Sistemas */}
                  <ContentRow 
                    title="💻 Ingeniería de Sistemas y Software (Cloud, IA, DevOps, Web)" 
                    items={sistemasContent} 
                    onSelect={(item) => { setSelectedItem(item); logInteraction(item.id, 'play'); }} 
                    savedFavorites={profile.savedContent || []}
                    savedWatchLater={profile.watchLater || []}
                    onToggleFavorite={toggleFavorite}
                    onToggleWatchLater={toggleWatchLater}
                    onViewAll={() => setViewGridCategory({ title: "Ingeniería de Sistemas y Software", items: sistemasContent })}
                  />

                  {/* Fila: Especialización Electrónica */}
                  <ContentRow 
                    title="⚡ Ingeniería Electrónica (Circuitos, IoT, Microcontroladores, Robótica)" 
                    items={electronicaContent} 
                    onSelect={(item) => { setSelectedItem(item); logInteraction(item.id, 'play'); }} 
                    savedFavorites={profile.savedContent || []}
                    savedWatchLater={profile.watchLater || []}
                    onToggleFavorite={toggleFavorite}
                    onToggleWatchLater={toggleWatchLater}
                    onViewAll={() => setViewGridCategory({ title: "Ingeniería Electrónica", items: electronicaContent })}
                  />

                  {/* Fila: Especialización Industrial */}
                  <ContentRow 
                    title="🏭 Ingeniería Industrial (Lean, Six Sigma, Operaciones, Cadena de Suministro)" 
                    items={industrialContent} 
                    onSelect={(item) => { setSelectedItem(item); logInteraction(item.id, 'play'); }} 
                    savedFavorites={profile.savedContent || []}
                    savedWatchLater={profile.watchLater || []}
                    onToggleFavorite={toggleFavorite}
                    onToggleWatchLater={toggleWatchLater}
                    onViewAll={() => setViewGridCategory({ title: "Ingeniería Industrial", items: industrialContent })}
                  />

                  {/* Fila: Tronco Común & Ciencias Básicas */}
                  <ContentRow 
                    title="📐 Tronco Común & Ciencias Básicas (Matemáticas, Física y Estadística)" 
                    items={transversalContent} 
                    onSelect={(item) => { setSelectedItem(item); logInteraction(item.id, 'play'); }} 
                    savedFavorites={profile.savedContent || []}
                    savedWatchLater={profile.watchLater || []}
                    onToggleFavorite={toggleFavorite}
                    onToggleWatchLater={toggleWatchLater}
                    onViewAll={() => setViewGridCategory({ title: "Tronco Común & Ciencias Básicas", items: transversalContent })}
                  />

                  {/* Fila: Catálogo Completo (Todo el contenido disponible) */}
                  <ContentRow 
                    title={`📚 Catálogo Completo (${sortedContent.length} Videos y Cursos)`} 
                    items={sortedContent} 
                    onSelect={(item) => { setSelectedItem(item); logInteraction(item.id, 'play'); }} 
                    savedFavorites={profile.savedContent || []}
                    savedWatchLater={profile.watchLater || []}
                    onToggleFavorite={toggleFavorite}
                    onToggleWatchLater={toggleWatchLater}
                    onViewAll={() => setViewGridCategory({ title: "Catálogo Completo de Cursos", items: sortedContent })}
                  />
                </div>
              )}
            </motion.div>
          ) : (
            /* ENTORNO SEMILLERO / PANEL DE ADMINISTRADOR */
            <motion.div 
              key="admin"
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -15 }}
              className="pt-24 pb-20 px-6 md:px-12 max-w-6xl mx-auto"
            >
              <AdminPanel 
                onBack={() => setActiveTab('home')} 
                career={profile.career} 
                existingContent={content} 
                onSeedBulk={handleSeedDatabase}
                isSeeding={isSeeding}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* MODAL DETALLES / REPRODUCTOR DE VIDEO */}
        <AnimatePresence>
          {selectedItem && (
            <PlayerModal 
              item={selectedItem} 
              onClose={() => setSelectedItem(null)} 
              onCite={() => logInteraction(selectedItem.id, 'cite')}
              isFavorite={(profile.savedContent || []).includes(selectedItem.id)}
              isWatchLater={(profile.watchLater || []).includes(selectedItem.id)}
              onToggleFavorite={() => toggleFavorite(selectedItem)}
              onToggleWatchLater={() => toggleWatchLater(selectedItem)}
            />
          )}
        </AnimatePresence>

        {/* MODAL DE PERFIL DE USUARIO Y PREFERENCIAS */}
        <AnimatePresence>
          {showProfileModal && (
            <UserProfileModal 
              user={user}
              profile={profile}
              onClose={() => setShowProfileModal(false)}
              onLogout={() => { setShowProfileModal(false); signOut(auth); }}
              onUpdateCareer={async (newCareer) => {
                await updateDoc(doc(db, 'profiles', user.uid), {
                  career: newCareer,
                  lastActive: serverTimestamp()
                });
              }}
              onUpdateDisplayName={async (newName) => {
                if (auth.currentUser) {
                  await updateProfile(auth.currentUser, { displayName: newName });
                }
                await updateDoc(doc(db, 'profiles', user.uid), {
                  displayName: newName,
                  lastActive: serverTimestamp()
                });
              }}
              favorites={myFavorites}
              watchLater={myWatchLater}
              onSelectCourse={(item) => {
                setShowProfileModal(false);
                setSelectedItem(item);
                logInteraction(item.id, 'play');
              }}
              onRemoveFavorite={(item) => toggleFavorite(item)}
              onRemoveWatchLater={(item) => toggleWatchLater(item)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

// --- COMPONENTE FILA HORIZONTAL TIPO NETFLIX ---
function ContentRow({ 
  title, 
  items, 
  onSelect, 
  savedFavorites = [],
  savedWatchLater = [],
  onToggleFavorite,
  onToggleWatchLater,
  onViewAll 
}: { 
  title: string, 
  items: ContentItem[], 
  onSelect: (it: ContentItem) => void,
  savedFavorites?: string[],
  savedWatchLater?: string[],
  onToggleFavorite?: (it: ContentItem, e: React.MouseEvent) => void,
  onToggleWatchLater?: (it: ContentItem, e: React.MouseEvent) => void,
  onViewAll?: () => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -650 : 650;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="px-6 md:px-12 relative group/row">
      <div className="flex items-center justify-between mb-4">
        <h2 
          className={`text-lg md:text-xl font-bold flex items-center gap-2 ${onViewAll ? 'cursor-pointer hover:text-[#4285F4] transition-colors' : ''}`}
          onClick={onViewAll}
        >
          <span>{title}</span>
          {onViewAll && <ChevronRight className="w-4 h-4 opacity-50" />}
        </h2>
        {onViewAll && (
          <button 
            onClick={onViewAll}
            className="text-xs font-semibold text-[#4285F4] hover:underline hidden sm:block"
          >
            Explorar todo ({items.length})
          </button>
        )}
      </div>

      {/* Flechas de navegación horizontal */}
      {items.length > 3 && (
        <>
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-12 bottom-6 z-20 w-12 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all text-white bg-gradient-to-r from-[#050505] to-transparent hover:from-[#050505]"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-8 h-8 drop-shadow-lg" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-12 bottom-6 z-20 w-12 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all text-white bg-gradient-to-l from-[#050505] to-transparent hover:from-[#050505]"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-8 h-8 drop-shadow-lg" />
          </button>
        </>
      )}

      {/* Contenedor scrolleable */}
      <div 
        ref={scrollRef} 
        className="flex gap-4 overflow-x-auto pb-4 pt-1 scrollbar-hide snap-x relative z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map(item => (
          <div key={item.id} className="flex-none w-[270px] sm:w-[300px] snap-start">
            <ContentCard 
              item={item}
              onSelect={() => onSelect(item)}
              isFavorite={savedFavorites.includes(item.id)}
              isWatchLater={savedWatchLater.includes(item.id)}
              onToggleFavorite={(e) => onToggleFavorite && onToggleFavorite(item, e)}
              onToggleWatchLater={(e) => onToggleWatchLater && onToggleWatchLater(item, e)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// --- TARJETA DE CONTENIDO REUTILIZABLE ---
interface ContentCardProps {
  key?: React.Key;
  item: ContentItem;
  onSelect: () => void;
  isFavorite: boolean;
  isWatchLater: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void | Promise<void>;
  onToggleWatchLater: (e: React.MouseEvent) => void | Promise<void>;
}

function ContentCard({ 
  item, 
  onSelect,
  isFavorite,
  isWatchLater,
  onToggleFavorite,
  onToggleWatchLater
}: ContentCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={onSelect}
      className="group cursor-pointer bg-[#121212] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all shadow-lg flex flex-col h-full"
    >
      <div className="aspect-video relative overflow-hidden bg-neutral-900">
        <img 
          src={item.thumb} 
          alt={item.title} 
          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" 
          onError={(e) => { 
            e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80'; 
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        
        {/* Match Score Badge */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          <span className="text-green-400 font-bold text-[10px] bg-black/75 backdrop-blur-md px-2 py-0.5 rounded border border-green-500/30">
            {item.matchScore}% Match
          </span>
        </div>

        {/* Botones de acción flotantes (Favorito + Ver más tarde) */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={onToggleFavorite}
            className={`w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
              isFavorite 
                ? 'bg-[#D96570] text-white border-[#D96570]' 
                : 'bg-black/60 text-white/70 hover:text-white border-white/10 hover:bg-black'
            }`}
            title={isFavorite ? "Eliminar de Favoritos" : "Guardar en Favoritos"}
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
          
          <button 
            onClick={onToggleWatchLater}
            className={`w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
              isWatchLater 
                ? 'bg-[#4285F4] text-white border-[#4285F4]' 
                : 'bg-black/60 text-white/70 hover:text-white border-white/10 hover:bg-black'
            }`}
            title={isWatchLater ? "Eliminar de Ver más tarde" : "Añadir a Ver más tarde"}
          >
            <Clock className={`w-3.5 h-3.5 ${isWatchLater ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Play Icon en Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
            <Play className="w-5 h-5 fill-current translate-x-0.5" />
          </div>
        </div>

        {/* Metadata inferior sobre la imagen */}
        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white/70">
          <span className="truncate">{item.author}</span>
          <span>{item.year}</span>
        </div>
      </div>

      <div className="p-3.5 flex flex-col flex-1 justify-between">
        <div>
          <h4 className="font-bold text-sm leading-snug line-clamp-2 group-hover:text-[#4285F4] transition-colors mb-1.5">
            {item.title}
          </h4>
          <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
            {item.desc}
          </p>
        </div>

        <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px]">
          <span className="capitalize font-medium text-white/60 bg-white/5 px-2 py-0.5 rounded">
            {item.career === 'all' || item.career === 'transversal' ? 'Transversal' : item.career}
          </span>
          {item.views !== undefined && (
            <span className="text-white/40 flex items-center gap-1">
              <Eye className="w-3 h-3" /> {item.views}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// --- MODAL DE USUARIO / APARTADO DE CUENTA ---
function UserProfileModal({
  user,
  profile,
  onClose,
  onLogout,
  onUpdateCareer,
  onUpdateDisplayName,
  favorites,
  watchLater,
  onSelectCourse,
  onRemoveFavorite,
  onRemoveWatchLater
}: {
  user: User,
  profile: Profile,
  onClose: () => void,
  onLogout: () => void,
  onUpdateCareer: (career: Career) => Promise<void>,
  onUpdateDisplayName: (name: string) => Promise<void>,
  favorites: ContentItem[],
  watchLater: ContentItem[],
  onSelectCourse: (item: ContentItem) => void,
  onRemoveFavorite: (item: ContentItem) => void,
  onRemoveWatchLater: (item: ContentItem) => void
}) {
  const [activeTab, setActiveTab] = useState<'perfil' | 'favoritos' | 'verDespues'>('perfil');
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(profile.displayName || user.displayName || '');
  const [savingName, setSavingName] = useState(false);
  const [switchingCareer, setSwitchingCareer] = useState(false);

  const handleSaveName = async () => {
    if (!nameInput.trim()) return;
    setSavingName(true);
    try {
      await onUpdateDisplayName(nameInput.trim());
      setIsEditingName(false);
    } catch (err) {
      console.error(err);
    } finally {
      setSavingName(false);
    }
  };

  const handleCareerChange = async (c: Career) => {
    if (c === profile.career) return;
    setSwitchingCareer(true);
    try {
      await onUpdateCareer(c);
    } finally {
      setSwitchingCareer(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-md" 
        onClick={onClose} 
      />

      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 15 }} 
        animate={{ scale: 1, opacity: 1, y: 0 }} 
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        className="relative w-full max-w-4xl bg-[#111111] rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10 max-h-[90vh] flex flex-col"
      >
        {/* Cabecera del Modal de Usuario */}
        <div className="px-6 md:px-8 py-5 border-b border-white/10 flex items-center justify-between bg-[#161616]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-[#4285F4] overflow-hidden bg-neutral-800 flex items-center justify-center shrink-0">
              {user.photoURL ? (
                <img src={user.photoURL} alt="" className="w-full h-full object-cover" />
              ) : (
                <UserIcon className="w-6 h-6 text-white/80" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-white">
                  {profile.displayName || user.displayName || 'Estudiante'}
                </h3>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#4285F4]/20 text-[#4285F4] border border-[#4285F4]/30">
                  Ing. {profile.career}
                </span>
              </div>
              <p className="text-xs text-white/50">{user.email}</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-white/70" />
          </button>
        </div>

        {/* Pestañas internas */}
        <div className="flex items-center gap-2 px-6 md:px-8 border-b border-white/5 bg-[#141414] text-sm overflow-x-auto">
          <button
            onClick={() => setActiveTab('perfil')}
            className={`py-3.5 px-4 font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'perfil' 
                ? 'border-[#4285F4] text-[#4285F4]' 
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            <Sliders className="w-4 h-4" /> Configuración de Cuenta
          </button>
          <button
            onClick={() => setActiveTab('favoritos')}
            className={`py-3.5 px-4 font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'favoritos' 
                ? 'border-[#D96570] text-[#D96570]' 
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            <Heart className="w-4 h-4" /> Mis Favoritos ({favorites.length})
          </button>
          <button
            onClick={() => setActiveTab('verDespues')}
            className={`py-3.5 px-4 font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'verDespues' 
                ? 'border-[#4285F4] text-[#4285F4]' 
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            <Clock className="w-4 h-4" /> Ver Más Tarde ({watchLater.length})
          </button>
        </div>

        {/* Cuerpo del Modal */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-8">
          {activeTab === 'perfil' ? (
            <div className="space-y-8">
              {/* Sección: Editar Nombre */}
              <div className="p-5 rounded-2xl bg-[#161616] border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-white">Nombre de Usuario</h4>
                    <p className="text-xs text-white/50">Cómo te mostramos en tu perfil y diplomas de avance.</p>
                  </div>
                  {!isEditingName && (
                    <button 
                      onClick={() => setIsEditingName(true)}
                      className="text-xs text-[#4285F4] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <Edit3 className="w-3.5 h-3.5" /> Editar
                    </button>
                  )}
                </div>

                {isEditingName ? (
                  <div className="flex items-center gap-2 pt-2">
                    <input 
                      type="text" 
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-[#4285F4] outline-none"
                      placeholder="Tu nombre completo"
                      autoFocus
                    />
                    <button 
                      onClick={handleSaveName}
                      disabled={savingName || !nameInput.trim()}
                      className="px-4 py-2 bg-[#4285F4] text-white rounded-lg text-xs font-bold hover:bg-[#4285F4]/80 disabled:opacity-50 transition-colors"
                    >
                      {savingName ? 'Guardando...' : 'Guardar'}
                    </button>
                    <button 
                      onClick={() => { setIsEditingName(false); setNameInput(profile.displayName || user.displayName || ''); }}
                      className="px-3 py-2 bg-white/5 text-white/60 hover:text-white rounded-lg text-xs"
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <p className="text-sm font-semibold text-white/90">
                    {profile.displayName || user.displayName || 'Sin nombre asignado'}
                  </p>
                )}
              </div>

              {/* Sección: Cambiar Carrera Universitaria */}
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-sm text-white">Carrera Universitaria</h4>
                  <p className="text-xs text-white/50">
                    Puedes alternar entre las 3 ingenierías en cualquier momento para recalibrar tus recomendaciones.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  {[
                    { id: 'sistemas', title: 'Sistemas y Software', icon: '💻', desc: 'Web, Cloud, IA & DevOps' },
                    { id: 'electronica', title: 'Electrónica', icon: '⚡', desc: 'Circuitos, IoT & Control' },
                    { id: 'industrial', title: 'Industrial', icon: '🏭', desc: 'Lean, Six Sigma & Supply Chain' }
                  ].map(c => {
                    const isSelected = profile.career === c.id;
                    return (
                      <button
                        key={c.id}
                        disabled={switchingCareer}
                        onClick={() => handleCareerChange(c.id as Career)}
                        className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                          isSelected 
                            ? 'bg-[#4285F4]/10 border-[#4285F4] shadow-[0_0_15px_rgba(66,133,244,0.15)]' 
                            : 'bg-[#161616] border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div>
                          <div className="text-2xl mb-2">{c.icon}</div>
                          <div className="font-bold text-sm text-white mb-1">{c.title}</div>
                          <p className="text-[11px] text-white/50 leading-relaxed">{c.desc}</p>
                        </div>
                        {isSelected && (
                          <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-[#4285F4]">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Carrera Activa
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sección: Cerrar Sesión */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">Sesión Activa</h4>
                  <p className="text-xs text-white/50">Cierra tu sesión de Google de forma segura en este navegador.</p>
                </div>
                <button 
                  onClick={onLogout}
                  className="px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl font-bold text-xs flex items-center gap-2 transition-all"
                >
                  <LogOut className="w-4 h-4" /> Cerrar Sesión
                </button>
              </div>
            </div>
          ) : activeTab === 'favoritos' ? (
            /* LISTADO DE FAVORITOS EN EL PERFIL */
            <div>
              {favorites.length === 0 ? (
                <div className="text-center py-12">
                  <Heart className="w-12 h-12 text-white/20 mx-auto mb-3" />
                  <p className="text-white/60 font-medium">Aún no has agregado cursos a favoritos</p>
                  <p className="text-xs text-white/40 mt-1">Haz click en el corazón de cualquier tarjeta para fijarlo aquí.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {favorites.map(item => (
                    <div 
                      key={item.id} 
                      className="bg-[#161616] rounded-xl overflow-hidden border border-white/5 p-3 flex flex-col justify-between group"
                    >
                      <div className="flex gap-3 mb-3">
                        <img 
                          src={item.thumb} 
                          alt="" 
                          className="w-20 aspect-video object-cover rounded-lg shrink-0" 
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-xs text-white line-clamp-2">{item.title}</h5>
                          <span className="text-[10px] text-white/40">{item.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-white/5">
                        <button 
                          onClick={() => onSelectCourse(item)}
                          className="text-xs font-bold text-[#4285F4] hover:underline flex items-center gap-1"
                        >
                          <Play className="w-3 h-3 fill-current" /> Reproducir
                        </button>
                        <button 
                          onClick={() => onRemoveFavorite(item)}
                          className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" /> Quitar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* LISTADO DE VER MÁS TARDE EN EL PERFIL */
            <div>
              {watchLater.length === 0 ? (
                <div className="text-center py-12">
                  <Clock className="w-12 h-12 text-white/20 mx-auto mb-3" />
                  <p className="text-white/60 font-medium">No tienes cursos en tu lista de 'Ver más tarde'</p>
                  <p className="text-xs text-white/40 mt-1">Guarda cursos con el ícono del reloj para verlos cuando tengas tiempo.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {watchLater.map(item => (
                    <div 
                      key={item.id} 
                      className="bg-[#161616] rounded-xl overflow-hidden border border-white/5 p-3 flex flex-col justify-between group"
                    >
                      <div className="flex gap-3 mb-3">
                        <img 
                          src={item.thumb} 
                          alt="" 
                          className="w-20 aspect-video object-cover rounded-lg shrink-0" 
                        />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-xs text-white line-clamp-2">{item.title}</h5>
                          <span className="text-[10px] text-white/40">{item.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-white/5">
                        <button 
                          onClick={() => onSelectCourse(item)}
                          className="text-xs font-bold text-[#4285F4] hover:underline flex items-center gap-1"
                        >
                          <Play className="w-3 h-3 fill-current" /> Reproducir
                        </button>
                        <button 
                          onClick={() => onRemoveWatchLater(item)}
                          className="text-xs text-white/40 hover:text-red-400 flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" /> Quitar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

// --- MODAL REPRODUCTOR DE VIDEO Y CITAS ACADÉMICAS ---
function PlayerModal({ 
  item, 
  onClose, 
  onCite,
  isFavorite,
  isWatchLater,
  onToggleFavorite,
  onToggleWatchLater
}: { 
  item: ContentItem, 
  onClose: () => void, 
  onCite: () => void,
  isFavorite: boolean,
  isWatchLater: boolean,
  onToggleFavorite: () => void,
  onToggleWatchLater: () => void
}) {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (format: 'apa' | 'ieee') => {
    let text = "";
    if (format === 'apa') {
      text = `${item.author}. (${item.year}). ${item.title}. Academflix Engineering. Recuperado de ${item.url}`;
    } else {
      text = `[1] ${item.author}, "${item.title}," ${item.year}. [En línea]. Disponible en: ${item.url}.`;
    }
    navigator.clipboard.writeText(text);
    setCopied(format);
    onCite();
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/85 backdrop-blur-xl" 
        onClick={onClose} 
      />
      
      <motion.div 
        initial={{ scale: 0.95, y: 15 }} 
        animate={{ scale: 1, y: 0 }} 
        exit={{ scale: 0.95, y: 15 }}
        className="relative w-full max-w-5xl bg-[#121212] rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col border border-white/10"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/60 hover:bg-black/90 rounded-full flex items-center justify-center border border-white/15 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Frame de video de YouTube o Recurso */}
        <div className="w-full aspect-video bg-black flex-shrink-0 relative">
          {item.yt_id ? (
            <iframe 
              title={item.title}
              className="w-full h-full" 
              src={`https://www.youtube.com/embed/${item.yt_id}?autoplay=1&rel=0&modestbranding=1`} 
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen 
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#181818] to-black">
              <BookOpen className="w-16 h-16 text-[#4285F4] mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">Recurso de Estudio Externo</h3>
              <p className="text-white/60 text-sm max-w-md mb-6">Este recurso pertenece a un repositorio académico universitario o lectura técnica.</p>
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 bg-[#4285F4] text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#4285F4]/80 transition-all shadow-lg"
              >
                Abrir en nueva pestaña <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Información y Citador */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-green-400 font-bold border border-green-500/20 px-2 py-0.5 rounded text-xs bg-green-500/10">
                  {item.matchScore}% Match
                </span>
                <span className="text-white/50 text-xs font-semibold">{item.year}</span>
                <span className="text-white/50 uppercase text-[11px] tracking-wider font-semibold">
                  {item.author}
                </span>
                <span className="text-[#4285F4] text-[11px] font-semibold uppercase bg-[#4285F4]/10 px-2 py-0.5 rounded">
                  {item.career === 'all' || item.career === 'transversal' ? 'Tronco Común' : item.career}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{item.title}</h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">{item.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags?.map(t => (
                  <span key={t} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                    #{t}
                  </span>
                ))}
              </div>

              {/* Botones rápidos de guardar y acceso externo */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={onToggleFavorite}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    isFavorite 
                      ? 'bg-[#D96570] text-white border-[#D96570]' 
                      : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
                  {isFavorite ? 'Guardado en Favoritos' : 'Añadir a Favoritos'}
                </button>

                <button
                  onClick={onToggleWatchLater}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    isWatchLater 
                      ? 'bg-[#4285F4] text-white border-[#4285F4]' 
                      : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                  }`}
                >
                  <Clock className={`w-3.5 h-3.5 ${isWatchLater ? 'fill-current' : ''}`} />
                  {isWatchLater ? 'En Ver más tarde' : 'Ver más tarde'}
                </button>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all ml-auto"
                  title="Abrir directamente en la plataforma de YouTube"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                  Ver en YouTube
                </a>
              </div>
            </div>

            {/* Citador Automático Formatos APA & IEEE */}
            <div>
              <div className="p-5 bg-[#181818] rounded-2xl border border-white/10 shadow-xl space-y-4">
                <h4 className="font-bold text-sm flex items-center gap-2 text-[#4285F4]">
                  <Quote className="w-4 h-4 fill-current"/> Citador Académico Automático
                </h4>
                <p className="text-xs text-white/50 leading-relaxed">
                  Copia la referencia bibliográfica con formato profesional para tus informes de laboratorio, tesis o monografías:
                </p>
                <div className="space-y-2.5">
                  <button 
                    onClick={() => copy('apa')} 
                    className="w-full flex items-center justify-between p-3.5 bg-[#121212] hover:bg-white/5 rounded-xl border border-white/5 transition-all text-left"
                  >
                    <div>
                      <span className="text-xs font-bold block text-white">Formato APA (7ma Edición)</span>
                      <span className="text-[10px] text-white/40 truncate block mt-0.5">Estilo estándar universitario</span>
                    </div>
                    {copied === 'apa' ? (
                      <Check className="w-4 h-4 text-green-400 shrink-0" />
                    ) : (
                      <Copy className="w-4 h-4 text-white/30 shrink-0" />
                    )}
                  </button>

                  <button 
                    onClick={() => copy('ieee')} 
                    className="w-full flex items-center justify-between p-3.5 bg-[#121212] hover:bg-white/5 rounded-xl border border-white/5 transition-all text-left"
                  >
                    <div>
                      <span className="text-xs font-bold block text-white">Formato IEEE</span>
                      <span className="text-[10px] text-white/40 truncate block mt-0.5">Estándar internacional de ingeniería</span>
                    </div>
                    {copied === 'ieee' ? (
                      <Check className="w-4 h-4 text-green-400 shrink-0" />
                    ) : (
                      <Copy className="w-4 h-4 text-white/30 shrink-0" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-center text-[11px] text-green-400 font-semibold animate-pulse">
                    ¡Cita copiada al portapapeles con éxito!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// --- PANEL DE ADMINISTRACIÓN / SEMILLERO ---
function AdminPanel({ 
  onBack, 
  career, 
  existingContent,
  onSeedBulk,
  isSeeding
}: { 
  onBack: () => void, 
  career: Career, 
  existingContent: ContentItem[],
  onSeedBulk: () => Promise<void>,
  isSeeding: boolean
}) {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    url: '',
    career: career as any,
    tags: '',
    author: '',
    year: 2024
  });
  const [saving, setSaving] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { id, thumb } = getThumbnail(formData.url);
    
    try {
      await addDoc(collection(db, 'content'), {
        ...formData,
        yt_id: id,
        thumb,
        tags: formData.tags.split(',').map(t => t.trim().toLowerCase()),
        type: formData.url.includes('youtube') ? 'video' : 'curso',
        views: 0,
        createdAt: serverTimestamp()
      });
      setFeedbackMsg("¡Contenido publicado exitosamente en Firebase!");
      setTimeout(() => setFeedbackMsg(null), 3000);
      setFormData({
        title: '',
        desc: '',
        url: '',
        career: career as any,
        tags: '',
        author: '',
        year: 2024
      });
    } catch (err) {
      console.error(err);
      setFeedbackMsg("Error al guardar en base de datos.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'content', id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-5">
        <div>
          <h2 className="text-3xl font-black">Entorno Semillero de Contenido</h2>
          <p className="text-white/50 text-sm mt-1">
            Administra los cursos indexados y alimenta el algoritmo de recomendación académica.
          </p>
        </div>
        <button 
          onClick={onBack} 
          className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-semibold transition-colors"
        >
          Volver al Inicio
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
        {/* Formulario de subida */}
        <form onSubmit={handleSubmit} className="p-6 bg-[#121212] rounded-2xl border border-white/10 space-y-4 h-fit">
          <h3 className="font-bold text-base text-white">Publicar Nuevo Recurso</h3>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Título del Curso o Video</label>
            <input 
              required 
              value={formData.title} 
              onChange={e => setFormData({...formData, title: e.target.value})} 
              className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-sm focus:border-[#4285F4] outline-none" 
              placeholder="Ej: Microcontroladores STM32 y RTOS" 
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">URL de YouTube o Recurso</label>
            <input 
              required 
              value={formData.url} 
              onChange={e => setFormData({...formData, url: e.target.value})} 
              className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-sm focus:border-[#4285F4] outline-none" 
              placeholder="https://www.youtube.com/watch?v=..." 
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Carrera Objetivo</label>
              <select 
                value={formData.career} 
                onChange={e => setFormData({...formData, career: e.target.value as any})} 
                className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-sm text-white"
              >
                <option value="sistemas">Sistemas</option>
                <option value="electronica">Electrónica</option>
                <option value="industrial">Industrial</option>
                <option value="transversal">Tronco Común</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Año</label>
              <input 
                type="number" 
                value={formData.year} 
                onChange={e => setFormData({...formData, year: parseInt(e.target.value) || 2024})} 
                className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-sm text-white" 
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Autor / Universidad</label>
            <input 
              required 
              value={formData.author} 
              onChange={e => setFormData({...formData, author: e.target.value})} 
              className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-sm" 
              placeholder="Ej: MIT OpenCourseWare" 
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Etiquetas (separadas por coma)</label>
            <input 
              required 
              value={formData.tags} 
              onChange={e => setFormData({...formData, tags: e.target.value})} 
              className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-sm" 
              placeholder="rtos, embebidos, c, hardware" 
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Resumen / Descripción</label>
            <textarea 
              rows={3}
              value={formData.desc} 
              onChange={e => setFormData({...formData, desc: e.target.value})} 
              className="w-full bg-[#050505] border border-white/10 rounded-lg p-2.5 text-sm resize-none" 
              placeholder="Breve explicación del contenido cubierto..."
            />
          </div>

          {feedbackMsg && (
            <p className="text-xs text-green-400 font-bold text-center bg-green-500/10 p-2 rounded-lg border border-green-500/20">
              {feedbackMsg}
            </p>
          )}

          <button 
            disabled={saving} 
            type="submit" 
            className="w-full bg-[#4285F4] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#4285F4]/80 disabled:opacity-50 transition-all shadow-md"
          >
            <Send className="w-4 h-4" /> {saving ? 'Subiendo...' : 'Publicar en Academflix'}
          </button>
        </form>

        {/* Lista y Herramientas Batch */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#4285F4]/10 to-[#9B72CB]/10 border border-[#4285F4]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-sm text-white">Sincronización en Lote (Data Seeding)</h4>
              <p className="text-xs text-white/60 mt-0.5">
                Inyecta más de 200 cursos seleccionados con URLs válidas de YouTube a Firestore.
              </p>
            </div>
            <button 
              onClick={onSeedBulk}
              disabled={isSeeding}
              className="px-5 py-2.5 bg-[#4285F4] text-white rounded-xl text-xs font-bold hover:bg-[#4285F4]/80 transition-all flex items-center gap-2 shrink-0 disabled:opacity-50"
            >
              <Database className="w-4 h-4" /> {isSeeding ? 'Sincronizando...' : 'Cargar Cursos a Firebase'}
            </button>
          </div>

          <div className="p-4 bg-[#121212] rounded-2xl border border-white/5">
            <h4 className="font-bold text-sm mb-3">Catálogo Actual ({existingContent.length} items)</h4>
            <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {existingContent.map(item => (
                <div key={item.id} className="p-2.5 bg-[#181818] rounded-xl border border-white/5 flex items-center gap-3">
                  <img src={item.thumb} alt="" className="w-16 aspect-video object-cover rounded-lg shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs text-white truncate">{item.title}</h5>
                    <p className="text-[10px] text-white/50">{item.author} • Ing. {item.career}</p>
                  </div>
                  {!item.id.startsWith('seed_') && (
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="p-1.5 text-white/30 hover:text-red-400 transition-colors"
                      title="Eliminar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
