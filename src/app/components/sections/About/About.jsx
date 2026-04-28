  "use client";

  import { motion } from "framer-motion";
  import { CheckCircle, Shield, Clock, MapPin, Award } from "lucide-react";
  import { 
    container, imageColumn,
    label, headline, description, featureItem, clientStats, viewport, badge 
  } from "./About.animations";
  import { 
    SECTION_LABEL, HEADLINE, FEATURES, IMAGES, EXPERIENCE_BADGE, CLIENT_STATS 
  } from "./About.constants";

  const iconMap = { CheckCircle, Shield, Clock, MapPin };

  export default function About() {
    return (
      <section id="about" className="relative bg-white py-16 md:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-slate-50 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* ================= LEFT (IMAGES) ================= */}
            <motion.div 
              variants={imageColumn}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="relative"
            >
              <div className="relative grid grid-cols-12 gap-3 sm:gap-6">
                
                {/* MAIN IMAGE */}
                <div className="col-span-7 md:col-span-7 row-span-2">
                  <img 
                    src={IMAGES[0].src}
                    alt={IMAGES[0].alt}
                    className="rounded-[1.5rem] sm:rounded-[2.5rem] w-full h-[260px] sm:h-[420px] md:h-[520px] object-cover border-[3px] sm:border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                  />
                </div>

                {/* RIGHT TOP */}
                <div className="col-span-5 md:col-span-5 mt-4 sm:mt-8 md:mt-0">
                  <img 
                    src={IMAGES[1].src}
                    alt={IMAGES[1].alt}
                    className="rounded-[1rem] sm:rounded-[2rem] w-full h-[120px] sm:h-[200px] md:h-[240px] object-cover border-[3px] sm:border-4 border-white shadow-xl"
                  />
                </div>

                {/* RIGHT BOTTOM */}
                <div className="col-span-5 md:col-span-5 mt-3 sm:mt-6 md:mt-0">
                  <img 
                    src={IMAGES[2].src}
                    alt={IMAGES[2].alt}
                    className="rounded-[1rem] sm:rounded-[2rem] w-full h-[120px] sm:h-[200px] md:h-[240px] object-cover border-[3px] sm:border-4 border-white shadow-xl"
                  />
                </div>

              </div>

              {/* BADGE CONTAINER - Di bawah semua foto */}
              <motion.div
                variants={badge}
                className="mt-6 sm:mt-8 flex justify-center"
              >
                <div className="bg-white px-6 sm:px-8 py-4 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 text-center w-full">
                  
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mx-auto mb-1.5" />
                  
                  <p className="text-2xl sm:text-3xl font-bold text-primary leading-none mb-0.5">
                    {EXPERIENCE_BADGE.value}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    {EXPERIENCE_BADGE.label}
                  </p>

                </div>
              </motion.div>

              {/* DECOR */}
              <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-20 h-20 sm:w-32 sm:h-32 bg-blue-100/50 rounded-full blur-2xl" />
            </motion.div>

            {/* ================= RIGHT (CONTENT) ================= */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="lg:pl-8"
            >

              {/* LABEL */}
              <motion.div variants={label} className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-blue-700" />
                <p className="text-sm font-bold text-blue-700 tracking-[0.2em] uppercase">
                  {SECTION_LABEL}
                </p>
              </motion.div>

              {/* TITLE */}
              <motion.h2 variants={headline} className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 md:mb-8 leading-[1.1] tracking-tight">
                {HEADLINE.main}
              </motion.h2>

              {/* DESC */}
              <motion.p variants={description} className="text-slate-600 mb-10 md:mb-12 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                {HEADLINE.description}
              </motion.p>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {FEATURES.map((f, i) => {
                  const Icon = iconMap[f.icon];
                  return (
                    <motion.div
                      key={i}
                      variants={featureItem}
                      className="group p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-100 transition">
                        <Icon className="w-5 h-5 text-blue-700" />
                      </div>

                      <h3 className="font-bold text-primary text-lg mb-1">
                        {f.title}
                      </h3>

                      <p className="text-sm text-slate-500 leading-relaxed font-medium">
                        {f.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* CLIENT STATS */}
              <motion.div
                variants={clientStats}
                className="flex items-center gap-4 sm:gap-6 px-5 py-4 bg-white rounded-2xl border border-slate-100 shadow-xl w-full sm:w-fit"
              >
                {/* AVATAR */}
                <div className="flex -space-x-3 shrink-0">
                  {CLIENT_STATS.avatars.map((id, i) => (
                    <img
                      key={id}
                      src={`https://i.pravatar.cc/100?img=${id}`}
                      alt="Client"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>

                {/* TEXT */}
                <div className="flex flex-col leading-tight">
                  <p className="font-bold text-primary text-base sm:text-lg">
                    {CLIENT_STATS.count} {CLIENT_STATS.label}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-blue-600 font-bold tracking-wider uppercase">
                    {CLIENT_STATS.sublabel}
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
    );
  }