/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Database, Activity, Server, ShieldCheck, ChevronRight } from "lucide-react";

// The logo will be loaded from /Logo/logo.svg

const BOOT_SEQUENCE = [
  "Allocating cognitive resources...",
  "Mapping strategic growth vectors...",
  "Compiling revenue acceleration models...",
  "Calibrating predictive intelligence...",
  "Deployment imminent.",
];

export default function App() {
  const [bootStep, setBootStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBootStep((prev) => {
        if (prev < BOOT_SEQUENCE.length - 1) return prev + 1;
        return prev;
      });
    }, 2500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-[#1E293B] font-sans flex items-center justify-center relative overflow-hidden">
      {/* Premium Tech Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Orthogonal Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
        {/* Subtle Mesh Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#344BAA]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#4A4A4A]/5 blur-[120px] rounded-full" />
      </div>

      {/* Main Glassmorphic Card */}
      <motion.main 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl mx-4 bg-white/70 backdrop-blur-2xl border border-white/50 shadow-2xl shadow-slate-200/50 rounded-3xl p-10 md:p-16 overflow-hidden"
      >
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#344BAA]/10 blur-3xl rounded-full pointer-events-none" />

        <div className="flex flex-col items-center text-center relative z-10">
          {/* Vectorized Logo */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[320px] md:max-w-[420px] mb-12"
          >
            <img 
              src="/Logo/logo.svg" 
              alt="Centriax Logo" 
              className="w-full h-auto max-h-[80px] object-contain drop-shadow-sm"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Terminal / Boot Sequence */}
          <div className="w-full bg-slate-900 rounded-xl p-6 text-left shadow-inner mb-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#344BAA]" />
            
            <div className="flex items-center space-x-2 mb-4 border-b border-slate-800 pb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              <span className="ml-2 text-xs font-mono text-slate-500 uppercase tracking-widest">System.Boot</span>
            </div>

            <div className="font-mono text-sm space-y-3 h-[120px] overflow-hidden relative">
              <AnimatePresence mode="popLayout">
                {BOOT_SEQUENCE.slice(0, bootStep + 1).map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start text-slate-300"
                  >
                    <ChevronRight size={16} className="text-[#344BAA] mt-0.5 mr-2 shrink-0" />
                    <span className={index === bootStep ? "text-white" : "text-slate-500"}>
                      {step}
                      {index === bootStep && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8 }}
                          className="inline-block w-2 h-4 bg-[#344BAA] ml-2 align-middle"
                        />
                      )}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full space-y-3">
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
              <span>System Boot Progress</span>
              <span className="text-[#344BAA]">{Math.min(Math.round(progress), 100)}%</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#344BAA] rounded-full relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
                layout
              >
                <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/30" />
              </motion.div>
            </div>
          </div>

          {/* Status Icons */}
          <div className="grid grid-cols-4 gap-4 w-full mt-10">
            <StatusIcon icon={<Database size={20} />} active={bootStep >= 1} label="Data" />
            <StatusIcon icon={<Server size={20} />} active={bootStep >= 2} label="Server" />
            <StatusIcon icon={<Activity size={20} />} active={bootStep >= 3} label="Engine" />
            <StatusIcon icon={<ShieldCheck size={20} />} active={bootStep >= 4} label="Secure" />
          </div>
        </div>
      </motion.main>
    </div>
  );
}

function StatusIcon({ icon, active, label }: { icon: React.ReactNode, active: boolean, label: string }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <motion.div 
        animate={{ 
          backgroundColor: active ? '#ffffff' : 'transparent',
          borderColor: active ? '#E2E8F0' : 'transparent',
          color: active ? '#344BAA' : '#94A3B8',
          scale: active ? 1 : 0.95
        }}
        className={`p-3 rounded-xl border ${active ? 'shadow-sm' : ''} transition-colors duration-500`}
      >
        {icon}
      </motion.div>
      <span className={`text-[10px] uppercase font-bold tracking-widest transition-colors duration-500 ${active ? 'text-slate-600' : 'text-slate-400'}`}>
        {label}
      </span>
    </div>
  );
}
