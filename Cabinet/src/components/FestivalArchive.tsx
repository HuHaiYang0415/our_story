import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Calendar, Clock, ChevronRight, FileText, Sparkles, MapPin, Award } from 'lucide-react';
import { TimeTheme } from '../types';
import holidaysData from '../data/holidays.json';

interface FestivalItem {
  name: string;
  date: string;
  year: number;
  kind: string;
}

const HOLIDAY_MAP_TO_ENGLISH: Record<string, string> = {
  "元旦": "NewYear",
  "劳动节": "LaborDay",
  "儿童节": "ChildrenDay",
  "国庆节": "NationalDay",
  "情人节": "Valentine",
  "圣诞节": "Christmas",
  "春节": "SpringFestival",
  "元宵节": "LanternFestival",
  "端午节": "DragonBoatFestival",
  "七夕": "Qixi",
  "中秋节": "MidAutumn",
  "重阳节": "Chongyang",
  "除夕": "Chuxi",
  "清明": "Qingming"
};

// Atmospheric poetry and greetings for holidays without customized page to make sure every archive is exciting to read!
const HOLIDAY_POETRY: Record<string, { poem: string; author: string; greeting: string; icon: string; bgStyle: string }> = {
  "元旦": {
    poem: "爆竹声中一岁除，春风送暖入屠苏。",
    author: "王安石",
    greeting: "新岁启封，万事皆宜。愿你在新的一年里，乘风破浪，收获满满的温暖与喜悦。岁岁年年，长安常安。",
    icon: "🌅",
    bgStyle: "from-amber-50 to-orange-100/30"
  },
  "除夕": {
    poem: "除夕更阑人不睡，厌禳迟暮守清丰。",
    author: "孟浩然",
    greeting: "烟火照夜，阖家温馨。在这个新旧交替、钟声初鸣的除夕夜，愿你有暖炉、有亲伴，一洗岁尘，启序华章。",
    icon: "🧨",
    bgStyle: "from-red-50 to-orange-100/30"
  },
  "春节": {
    poem: "千门万户曈曈日，总把新桃换旧符。",
    author: "王安石",
    greeting: "喜迎新春，万象更新。在这中华大地最繁华祥和的时刻，祝你年年有余，阖家福满。祝你新年快乐，大吉大利！",
    icon: "🦁",
    bgStyle: "from-rose-50 to-red-100/30"
  },
  "元宵节": {
    poem: "东风夜放花千树，更吹落，星如雨。",
    author: "辛弃疾",
    greeting: "花灯如昼，明月共圆。一碗甜糯元宵，承载着天南海北的一家团圆。祝你新岁圆满，无忧无虑，福运绵长。",
    icon: "🏮",
    bgStyle: "from-yellow-50 to-orange-100/20"
  },
  "清明": {
    poem: "清明时节雨纷纷，路上行人欲断魂。",
    author: "杜牧",
    greeting: "春雨微寒，万物吐新。微风拂过柳梢，纸鸢高飞带走心愿。让我们心怀感恩，拥抱大自然最蓬勃的翠绿生机。",
    icon: "🪁",
    bgStyle: "from-emerald-50 to-teal-100/30"
  },
  "劳动节": {
    poem: "民生在勤，勤则不匮。",
    author: "左传",
    greeting: "致敬每一位耕耘者，岁月最懂奋斗的芬芳。在这明媚的初夏里，给忙碌的脚步放个假，祝收获累累，充盈喜悦。",
    icon: "🛠️",
    bgStyle: "from-amber-50 to-yellow-100/30"
  },
  "儿童节": {
    poem: "儿童散学归来早，忙趁东风放纸鸢。",
    author: "高鼎",
    greeting: "愿你出走半生，兜兜转转，归来仍有童心在怀。无论几岁，快乐万岁，世界因你的纯真而永远闪闪发亮！",
    icon: "🎈",
    bgStyle: "from-rose-50 to-sky-100/20"
  },
  "端午节": {
    poem: "轻汗微微透碧纨，明朝端午浴芳兰。",
    author: "苏轼",
    greeting: "粽叶飘香，雄黄酒烈。愿你在这香囊艾草的芬芳中，百病不侵，诸邪退散。祝你端午安康，事事顺意。",
    icon: "🛶",
    bgStyle: "from-emerald-50 to-green-100/30"
  },
  "七夕": {
    poem: "金风玉露一相逢，便胜却人间无数。",
    author: "秦观",
    greeting: "星汉灿烂，鹊桥传情。愿世间深情皆能有所归依，愿你懂你所想，护你所爱。执子之手，一生温暖相随。",
    icon: "🌌",
    bgStyle: "from-purple-50 to-indigo-100/25"
  },
  "中秋节": {
    poem: "海上生明月，天涯共此时。",
    author: "张九龄",
    greeting: "月满乾坤，饼香团圆。桂花树下微风习习，那一缕乡愁终在此刻凝结成最甜的微笑。中秋人月两圆，幸福恒久。",
    icon: "🥮",
    bgStyle: "from-slate-50 to-yellow-100/20"
  },
  "国庆节": {
    poem: "锦绣山河迎国诞，神州起舞谱华章。",
    author: "古乐府意",
    greeting: "五星闪耀，国泰民安。在这神州欢鸣的十月，祝我们的家国繁荣昌盛，祝你山河步履不停，心之所向皆能踏成坦途。",
    icon: "🚩",
    bgStyle: "from-red-50 to-rose-100/30"
  },
  "重阳节": {
    poem: "尘世难逢开口笑，菊花须插满头归。",
    author: "杜牧",
    greeting: "九九重阳，登高远眺。菊花茶香，茱萸插袋。愿家中长辈福寿双全，愿身处异乡的你，登高处，心开朗，路开阔。",
    icon: "🌼",
    bgStyle: "from-amber-50 to-orange-100/25"
  },
  "圣诞节": {
    poem: "冬夜钟声鸣白雪，繁灯暖烛照华年。",
    author: "译诗",
    greeting: "繁星满树，雪落无声。愿银白的冬夜里，壁炉微火常温，驯鹿铃声捎来美梦。祝你圣诞平安喜乐，万事温馨相伴。",
    icon: "🎄",
    bgStyle: "from-green-50 to-red-100/20"
  },
  "情人节": {
    poem: "执子之手，与子偕老。",
    author: "诗经",
    greeting: "情意缱绻，风香十里。愿岁月的每一个转角都有爱与鲜花，愿你的心声终被妥善读懂。情人节蜜意浓浓，甜入心脾。",
    icon: "💖",
    bgStyle: "from-pink-50 to-rose-100/30"
  }
};

export default function FestivalArchive({
  theme,
  onBackToCabinet,
  onEnterFestivalPage
}: {
  theme: TimeTheme;
  onBackToCabinet: () => void;
  onEnterFestivalPage: (pageId: string) => void;
}) {
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedPoetryHoliday, setSelectedPoetryHoliday] = useState<string | null>(null);

  // Available support years (from 2026 to 2030 to make it neat)
  const availableYears = [2026, 2027, 2028, 2029, 2030];

  // Helper: check stems earth branch and zodiac
  const yearZodiacInfo = useMemo(() => {
    const zodiacs = ["鼠 (Rat)", "牛 (Ox)", "虎 (Tiger)", "兔 (Rabbit)", "龙 (Dragon)", "蛇 (Snake)", "马 (Horse)", "羊 (Sheep)", "猴 (Monkey)", "鸡 (Rooster)", "狗 (Dog)", "猪 (Pig)"];
    const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
    const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
    
    // Programmatic Stems-Branches & Zodiac (based on Chinese historical origin formula)
    const stemIdx = (selectedYear - 4) % 10;
    const branchIdx = (selectedYear - 4) % 12;
    const zodiacStr = zodiacs[branchIdx];
    const sexagenary = stems[stemIdx] + branches[branchIdx] + zodiacStr.slice(0, 1);
    
    return {
      name: `${sexagenary}年`,
      desc: `天干地支：${stems[stemIdx]}${branches[branchIdx]}，肖${zodiacStr}`
    };
  }, [selectedYear]);

  // Current real date or test mode date
  const todayMidnight = useMemo(() => {
    const now = new Date();
    // Default system reference is May 28, 2026 as per our environment constraints
    return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  }, []);

  // Filter festivals and group cleanly (filtering out pre-June-2026 dates)
  const currentYearFestivals = useMemo(() => {
    const rawList: FestivalItem[] = holidaysData.festivals || [];
    
    // For 2026, keep only festivals on or after June 1st, 2026
    const targeted = rawList.filter(f => {
      if (f.year === 2026) {
        return f.date >= "2026-06-01";
      }
      return f.year === selectedYear;
    });

    const groupedMap = new Map<string, { name: string; dates: string[]; kind: string }>();

    for (const fest of targeted) {
      if (!groupedMap.has(fest.name)) {
        groupedMap.set(fest.name, {
          name: fest.name,
          dates: [fest.date],
          kind: fest.kind
        });
      } else {
        const existing = groupedMap.get(fest.name)!;
        if (!existing.dates.includes(fest.date)) {
          existing.dates.push(fest.date);
        }
      }
    }

    const resultList = Array.from(groupedMap.values()).map(g => {
      g.dates.sort();
      const firstDateStr = g.dates[0];
      const lastDateStr = g.dates[g.dates.length - 1];

      const [fY, fM, fD] = firstDateStr.split('-').map(Number);
      const festMidnight = new Date(fY, fM - 1, fD).getTime();

      const [lY, lM, lD] = lastDateStr.split('-').map(Number);
      const festEndMidnight = new Date(lY, lM - 1, lD).getTime();

      let status: 'passed' | 'today' | 'upcoming' = 'upcoming';
      let countdownDays = 0;

      if (todayMidnight >= festMidnight && todayMidnight <= festEndMidnight) {
        status = 'today';
      } else if (todayMidnight > festEndMidnight) {
        status = 'passed';
      } else {
        status = 'upcoming';
        countdownDays = Math.round((festMidnight - todayMidnight) / (1000 * 60 * 60 * 24));
      }

      // "非2026年、未过的节日均标记为测试" -> isTest is true if selectedYear is not 2026 OR status is upcoming
      const isTest = (selectedYear !== 2026) || (status === 'upcoming');

      return {
        name: g.name,
        dateStr: g.dates.length > 1 ? `${firstDateStr} ~ ${lastDateStr.substr(5)}` : firstDateStr,
        singleDate: firstDateStr,
        kind: g.kind === 'solar' ? '公历' : '农历',
        status,
        countdownDays,
        rawKind: g.kind,
        isTest
      };
    });

    return resultList.sort((a, b) => a.singleDate.localeCompare(b.singleDate));
  }, [selectedYear, todayMidnight]);

  // Check if a specific festival has built-in page support under the selected year
  const hasCustomPage = (year: number, festivalName: string) => {
    const engName = HOLIDAY_MAP_TO_ENGLISH[festivalName];
    const pageId = `${year}_${engName}`;
    const SUPPORTED = ["2026_ChildrenDay"];
    return SUPPORTED.includes(pageId) ? pageId : null;
  };

  const handleHolidayClick = (item: any) => {
    const pageId = hasCustomPage(selectedYear, item.name);
    if (pageId) {
      onEnterFestivalPage(pageId);
    } else {
      // Open traditional greeting poetry letter
      setSelectedPoetryHoliday(item.name);
    }
  };

  return (
    <div 
      className="w-full min-h-screen relative flex flex-col justify-start items-center p-3 md:p-6 bg-[#FCFAF2] text-stone-800"
      id="festival-archive-root"
    >
      {/* Decorative floral watermark on edges */}
      <div className="absolute top-[5%] left-[3%] w-24 h-24 rounded-full border border-[#8C6239]/12 opacity-40 flex items-center justify-center text-[#8C6239]/20 font-serif text-sm pointer-events-none select-none">
        岁 · 时
      </div>
      <div className="absolute bottom-[5%] right-[3%] w-28 h-28 rounded-full border border-[#8C6239]/12 opacity-40 flex items-center justify-center text-[#8C6239]/20 font-serif text-sm pointer-events-none select-none">
        绘 · 梦
      </div>

      {/* Main Container Core */}
      <div className="w-full max-w-4xl z-10 flex flex-col items-center">
        
        {/* Header Ribbon */}
        <div className="w-full flex justify-between items-center mb-6 md:mb-8 border-b border-[#8C6239]/15 pb-4">
          <button
            onClick={onBackToCabinet}
            className="flex items-center space-x-1 px-4 py-2 rounded-full border border-[#8C6239]/30 hover:bg-[#8C6239]/10 text-[#5A3E23] text-xs font-serif font-bold transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回百宝橱柜</span>
          </button>

          <span className="text-stone-400 font-mono text-[9px] uppercase tracking-widest hidden sm:inline">
            ── 绘梦馆 &bull; 岁时拾遗 ──
          </span>

          <div className="text-right">
            <span className="text-xs font-serif font-black text-[#8C6239] bg-[#8C6239]/8 px-3 py-1 rounded-full border border-[#8C6239]/20 inline-block">
              📜 节日纪卷轴
            </span>
          </div>
        </div>

        {/* Vintage Scroll Title Section */}
        <div className="w-full text-center max-w-xl mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3.5xl font-serif font-black text-[#5A3E23] tracking-wider select-none">
            节日风物志
          </h1>
          <p className="text-xs text-stone-500 font-serif mt-2 leading-relaxed max-w-md mx-auto select-none">
            清风渡四季，笔墨记欢愉
          </p>
        </div>

        {/* Dynamic Ancient Year Dial Selector */}
        <div 
          className="w-full bg-[#FCFAF5] border border-[#8C6239]/30 rounded-2xl shadow-md p-4 flex flex-col sm:flex-row items-center justify-between mb-6 gap-4"
          id="archive-year-selection-strip"
        >
          {/* Horizontal Vintage Paper Tabs */}
          <div className="flex flex-wrap gap-1.5 select-none" id="archive-years-row">
            {availableYears.map((yr) => {
              const matches = selectedYear === yr;
              const suffix = yr === 2026 ? " (正式)" : " (测试)";
              return (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-xl border text-[11px] md:text-xs font-serif font-bold cursor-pointer transition-all ${
                    matches 
                      ? 'bg-[#8C6239] border-[#8C6239] text-[#FFFDFB] shadow-sm transform scale-105'
                      : 'bg-white border-stone-200 text-stone-600 hover:border-[#8C6239]/40 hover:bg-stone-50'
                  }`}
                >
                  {yr} 年{suffix}
                </button>
              );
            })}
          </div>

          {/* Programmable Zodiac stamp signature */}
          <div className="text-right flex items-center space-x-2 border-l border-dashed border-[#8C6239]/20 pl-4 py-1 flex-row sm:flex-col items-end">
            <span className="text-xs font-serif font-bold text-[#8C6239] block">
              🎑 {yearZodiacInfo.name}
            </span>
            <span className="text-[10px] text-stone-400 font-serif block mt-0.5">
              {yearZodiacInfo.desc}
            </span>
          </div>
        </div>

        {/* Separated sections for official vs testing */}
        <div className="w-full flex flex-col space-y-8" id="festival-archive-grids-container">
          {/* Section 1: 正式节日 */}
          <div className="w-full" id="official-section">
            {currentYearFestivals.filter(item => !item.isTest).length > 0 && (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5" id="official-grid-list">
                {currentYearFestivals.filter(item => !item.isTest).map((item) => {
                  const isToday = item.status === 'today';
                  const isPassed = item.status === 'passed';
                  const pageLink = hasCustomPage(selectedYear, item.name);
                  const poetryMeta = HOLIDAY_POETRY[item.name] || { icon: "🏮" };

                  return (
                    <motion.div
                      key={`${selectedYear}-${item.name}-official`}
                      whileHover={{ y: -3, scale: 1.01 }}
                      onClick={() => handleHolidayClick(item)}
                      className={`rounded-2xl border p-4 bg-white relative flex flex-col justify-between items-start transition-all duration-200 shadow-xs cursor-pointer select-none group/card overflow-hidden ${
                        isToday 
                          ? 'border-rose-300 ring-2 ring-rose-100 shadow-md ring-offset-1 bg-[#FFFDFE]'
                          : 'border-stone-200/90 hover:border-[#8C6239]/45 hover:shadow-md'
                      }`}
                    >
                      <div className="absolute right-[-4px] top-[4px] opacity-10 group-hover/card:scale-125 duration-300 text-3xl select-none">
                        {poetryMeta.icon}
                      </div>

                      <div className="w-full">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-[8px] px-1.5 py-0.5 rounded-sm bg-stone-100 border border-stone-200/60 font-serif text-stone-500 scale-90 origin-left">
                            {item.kind} &bull; {item.rawKind === 'solar' ? '阳历' : '阴历'}
                          </span>

                          {isToday && (
                            <span className="text-[8px] px-2 py-0.5 rounded-full bg-red-500 text-white font-serif font-black flex items-center gap-0.5 animate-pulse">
                              <Sparkles className="w-2.5 h-2.5" /> 今日庆典
                            </span>
                          )}

                          {isPassed && (
                            <span className="text-[8px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-400 font-serif">
                              🍂 已流逝
                            </span>
                          )}

                          {item.status === 'upcoming' && (
                            <span className="text-[8px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 font-mono font-medium">
                              ⏳ {item.countdownDays} 天后
                            </span>
                          )}
                        </div>

                        <h3 className="text-base font-serif font-black text-[#5A3E23] mb-1 group-hover/card:text-[#8C6239] transition-colors flex items-center gap-1">
                          <span>{item.name}</span>
                          {pageLink && (
                            <span className="text-[10px] scale-90 px-1.5 py-0.2 rounded-md bg-stone-900 text-amber-300 font-sans tracking-tight leading-none text-center">
                              ✨ 交互页
                            </span>
                          )}
                        </h3>
                        
                        <div className="flex items-center text-[10px] text-stone-400 font-mono space-x-1 mt-1.5">
                          <Calendar className="w-3.5 h-3.5 text-stone-300" />
                          <span>{item.dateStr}</span>
                        </div>
                      </div>

                      <div className="w-full border-t border-stone-100/80 pt-2.5 mt-3 flex justify-between items-center text-[9px]">
                        {pageLink ? (
                          <span className="text-[#8C6239] font-serif font-bold flex items-center space-x-0.5">
                            <span>🎈 进入交互纪念馆</span>
                            <ChevronRight className="w-3 h-3 group-hover/card:translate-x-1 transition-transform" />
                          </span>
                        ) : (
                          <span className="text-stone-450 font-serif text-stone-500 flex items-center space-x-0.5">
                            <FileText className="w-3 h-3 text-stone-300 mr-0.5" />
                            <span>拆阅岁时贺函</span>
                            <ChevronRight className="w-3 h-3 group-hover/card:translate-x-1 transition-transform" />
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Section 2: 测试与未开启节日 */}
          <div className="w-full mb-10" id="test-section">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3.5 border-b border-stone-200 pb-2 gap-1.5">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-serif font-black text-stone-500">🧪 调试与未届佳节阁楼 (测试)</span>
                <span className="text-[10px] font-mono bg-stone-100 text-stone-500 border border-stone-200 px-2 py-0.5 rounded-full font-bold">
                  {currentYearFestivals.filter(item => item.isTest).length} 个
                </span>
              </div>
              <p className="text-[9px] text-stone-400 font-serif">非2026年、未到时间的节日均标记为测试</p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5" id="test-grid-list">
              {currentYearFestivals.filter(item => item.isTest).map((item) => {
                const pageLink = hasCustomPage(selectedYear, item.name);
                const poetryMeta = HOLIDAY_POETRY[item.name] || { icon: "🏮" };

                return (
                  <motion.div
                    key={`${selectedYear}-${item.name}-test`}
                    whileHover={{ y: -3, scale: 1.01 }}
                    onClick={() => handleHolidayClick(item)}
                    className="rounded-2xl border border-dashed border-stone-250 hover:border-[#8C6239]/35 bg-[#FCFAF5]/50 relative flex flex-col justify-between items-start transition-all duration-200 shadow-xs cursor-pointer select-none group/card overflow-hidden"
                  >
                    <div className="absolute right-[-4px] top-[4px] opacity-10 group-hover/card:scale-125 duration-300 text-3xl select-none">
                      {poetryMeta.icon}
                    </div>

                    <div className="w-full">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[8px] px-1.5 py-0.5 rounded-sm bg-stone-100 border border-stone-200/60 font-serif text-stone-500 scale-90 origin-left">
                          {item.kind} &bull; {item.rawKind === 'solar' ? '阳历' : '阴历'}
                        </span>

                        <span className="text-[8px] px-2 py-0.5 rounded-full bg-amber-500 text-white font-serif font-bold flex items-center gap-0.5">
                          🧪 测试
                        </span>
                      </div>

                      <h3 className="text-base font-serif font-black text-stone-600 mb-1 group-hover/card:text-[#8C6239] transition-colors flex items-center gap-1">
                        <span>{item.name}</span>
                        {pageLink && (
                          <span className="text-[10px] scale-90 px-1.5 py-0.2 rounded-md bg-stone-800 text-amber-200 font-sans tracking-tight leading-none text-center">
                            ✨ 交互
                          </span>
                        )}
                      </h3>
                      
                      <div className="flex items-center text-[10px] text-stone-400 font-mono space-x-1 mt-1.5">
                        <Calendar className="w-3.5 h-3.5 text-stone-300" />
                        <span>{item.dateStr}</span>
                      </div>
                    </div>

                    <div className="w-full border-t border-stone-100/80 pt-2.5 mt-3 flex justify-between items-center text-[9px]">
                      {pageLink ? (
                        <span className="text-[#8C6239]/80 font-serif font-bold flex items-center space-x-0.5">
                          <span>🧪 调试交互设计</span>
                          <ChevronRight className="w-3 h-3 group-hover/card:translate-x-1 transition-transform" />
                        </span>
                      ) : (
                        <span className="text-stone-450 font-serif text-stone-400 flex items-center space-x-0.5">
                          <FileText className="w-3 h-3 text-stone-300 mr-0.5" />
                          <span>调试岁时函件</span>
                          <ChevronRight className="w-3 h-3 group-hover/card:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* GREETING CARD ENVELOPE MODAL POP-UP (Ink-styled custom details) */}
        <AnimatePresence>
          {selectedPoetryHoliday && (
            <div 
              className="fixed inset-0 bg-black/45 backdrop-blur-xs flex items-center justify-center p-4 z-50 cursor-pointer select-none"
              onClick={() => setSelectedPoetryHoliday(null)}
              id="poetry-modal-mask"
            >
              {/* Modal Card body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className={`w-full max-w-md rounded-3xl bg-gradient-to-b ${
                  HOLIDAY_POETRY[selectedPoetryHoliday]?.bgStyle || "from-amber-50 to-orange-100/20"
                } border border-[#8C6239]/30 shadow-2xl p-6 relative overflow-hidden text-left cursor-default`}
                onClick={(e) => e.stopPropagation()}
                id="poetry-modal-card"
              >
                {/* Decorative vintage ribbon on top */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-700 via-[#8C6239] to-red-600" />
                
                {/* Close Button top-right */}
                <button
                  onClick={() => setSelectedPoetryHoliday(null)}
                  className="absolute top-3.5 right-3.5 text-stone-400 hover:text-stone-700 text-lg font-black w-6 h-6 flex items-center justify-center rounded-full hover:bg-black/5 active:scale-90 transition-all cursor-pointer"
                >
                  ×
                </button>

                {/* Envelope details Header */}
                <div className="flex items-center space-x-2 text-[#8C6239]/70 mb-5 select-none font-serif text-[10px]">
                  <Award className="w-4 h-4 text-[#8C6239]" />
                  <span>绘梦信籍 &bull; {selectedYear}年 &bull; {selectedPoetryHoliday}</span>
                </div>

                {/* Festival Huge display icon */}
                <div className="text-4xl mb-2 select-none">
                  {HOLIDAY_POETRY[selectedPoetryHoliday]?.icon || "🏮"}
                </div>

                <h2 className="text-lg md:text-xl font-serif font-black text-[#5A3E23] tracking-wide mb-1 flex items-center gap-1.5 select-none">
                  {selectedPoetryHoliday}贺礼
                </h2>

                {/* Ancient poetry display block in center in traditional calligraphy columns layout */}
                <div className="my-5 p-4 rounded-2xl bg-[#FFFDF5] border border-[#8C6239]/15 shadow-inner text-center font-serif flex flex-col items-center justify-center">
                  <p className="text-[#8C6239] text-sm font-black tracking-widest text-[13px] md:text-[14px]">
                    「 {HOLIDAY_POETRY[selectedPoetryHoliday]?.poem || "四季轮回歌声绕，佳节良夜意境长。"} 」
                  </p>
                  <p className="text-[10px] text-stone-400 mt-1.5 text-right font-serif w-full max-w-[120px] self-end pr-4">
                    ── {HOLIDAY_POETRY[selectedPoetryHoliday]?.author || "佚名"}
                  </p>
                </div>

                {/* Tailored letter story */}
                <div className="font-serif text-stone-605 text-xs text-stone-700 leading-relaxed bg-[#FFFDFB]/60 p-3.5 rounded-xl border border-[#8C6239]/8 select-text">
                  <p>{HOLIDAY_POETRY[selectedPoetryHoliday]?.greeting || "祝你佳节安康，吉祥顺意。"}</p>
                </div>

                {/* Hand-signed seal stamp */}
                <div className="mt-5 pt-3 border-t border-stone-200/50 flex justify-between items-center text-[9.5px] select-none text-stone-400 font-serif">
                  <span>寄自：旧木百宝箱 &bull; 绘梦信使</span>
                  <div className="w-7 h-7 rounded-sm bg-red-600/10 border border-red-700/30 flex items-center justify-center font-black text-rose-700 text-[9px] transform rotate-6 scale-95 select-none">
                    绘梦
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
