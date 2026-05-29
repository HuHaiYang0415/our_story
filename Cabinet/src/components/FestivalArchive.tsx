import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, ChevronRight, Sparkles } from 'lucide-react';
import { TimeTheme } from '../types';
import holidaysData from '../data/holidays.json';

interface FestivalItem {
  name: string;
  date: string;
  year: number;
  kind: string;
}

const HOLIDAY_MAP_TO_ENGLISH: Record<string, string> = {
  元旦: 'NewYear',
  劳动节: 'LaborDay',
  儿童节: 'ChildrenDay',
  国庆节: 'NationalDay',
  情人节: 'Valentine',
  圣诞节: 'Christmas',
  春节: 'SpringFestival',
  元宵节: 'LanternFestival',
  端午节: 'DragonBoatFestival',
  七夕: 'Qixi',
  中秋节: 'MidAutumn',
  重阳节: 'Chongyang',
  除夕: 'Chuxi',
  清明: 'Qingming',
};

export default function FestivalArchive({
  onBackToCabinet,
  onEnterFestivalPage,
}: {
  theme: TimeTheme;
  onBackToCabinet: () => void;
  onEnterFestivalPage: (pageId: string) => void;
}) {
  const selectedYear = 2026;

  const yearZodiacInfo = useMemo(() => {
    const zodiacs = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
    const stems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

    const stemIdx = (selectedYear - 4) % 10;
    const branchIdx = (selectedYear - 4) % 12;

    return {
      name: `${stems[stemIdx]}${branches[branchIdx]}年`,
      desc: `天干地支：${stems[stemIdx]}${branches[branchIdx]}，肖${zodiacs[branchIdx]}`,
    };
  }, []);

  const todayMidnight = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  }, []);

  const currentYearFestivals = useMemo(() => {
    const rawList: FestivalItem[] = holidaysData.festivals || [];

    const targeted = rawList.filter(
      (f) => f.year === 2026 && f.date >= '2026-06-01',
    );

    const groupedMap = new Map<string, { name: string; dates: string[]; kind: string }>();

    for (const fest of targeted) {
      if (!groupedMap.has(fest.name)) {
        groupedMap.set(fest.name, {
          name: fest.name,
          dates: [fest.date],
          kind: fest.kind,
        });
      } else {
        const existing = groupedMap.get(fest.name)!;
        if (!existing.dates.includes(fest.date)) {
          existing.dates.push(fest.date);
        }
      }
    }

    const resultList = Array.from(groupedMap.values()).map((g) => {
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

      return {
        name: g.name,
        dateStr: g.dates.length > 1 ? `${firstDateStr} ~ ${lastDateStr.substr(5)}` : firstDateStr,
        singleDate: firstDateStr,
        kind: g.kind === 'solar' ? '公历' : '农历',
        status,
        countdownDays,
        rawKind: g.kind,
      };
    });

    return resultList.sort((a, b) => a.singleDate.localeCompare(b.singleDate));
  }, [todayMidnight]);

  const hasCustomPage = (year: number, festivalName: string) => {
    const engName = HOLIDAY_MAP_TO_ENGLISH[festivalName];
    const pageId = `${year}_${engName}`;
    const SUPPORTED = ['2026_ChildrenDay'];
    return SUPPORTED.includes(pageId) ? pageId : null;
  };

  const handleHolidayClick = (item: (typeof currentYearFestivals)[number]) => {
    const pageId = hasCustomPage(selectedYear, item.name);
    if (pageId) {
      onEnterFestivalPage(pageId);
    }
  };

  return (
    <div
      className="w-full min-h-screen relative flex flex-col justify-start items-center p-3 md:p-6 bg-[#FCFAF2] text-stone-800"
      id="festival-archive-root"
    >
      <div className="absolute top-[5%] left-[3%] w-24 h-24 rounded-full border border-[#8C6239]/12 opacity-40 flex items-center justify-center text-[#8C6239]/20 font-serif text-sm pointer-events-none select-none">
        岁 · 时
      </div>
      <div className="absolute bottom-[5%] right-[3%] w-28 h-28 rounded-full border border-[#8C6239]/12 opacity-40 flex items-center justify-center text-[#8C6239]/20 font-serif text-sm pointer-events-none select-none">
        绘 · 梦
      </div>

      <div className="w-full max-w-4xl z-10 flex flex-col items-center">
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
              节日纪卷轴
            </span>
          </div>
        </div>

        <div className="w-full text-center max-w-xl mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3.5xl font-serif font-black text-[#5A3E23] tracking-wider select-none">
            节日风物志
          </h1>
          <p className="text-xs text-stone-500 font-serif mt-2 leading-relaxed max-w-md mx-auto select-none">
            清风渡四季，笔墨记欢愉
          </p>
        </div>

        <div
          className="w-full bg-[#FCFAF5] border border-[#8C6239]/30 rounded-2xl shadow-md p-4 flex flex-col sm:flex-row items-center justify-between mb-6 gap-4"
          id="archive-year-selection-strip"
        >
          <div className="flex items-center gap-2 select-none" id="archive-years-row">
            <span className="px-4 py-2 rounded-xl border bg-[#8C6239] border-[#8C6239] text-[#FFFDFB] text-xs font-serif font-bold shadow-sm">
              2026 年
            </span>
          </div>

          <div className="text-right flex items-center space-x-2 border-l border-dashed border-[#8C6239]/20 pl-4 py-1 flex-row sm:flex-col items-end">
            <span className="text-xs font-serif font-bold text-[#8C6239] block">
              {yearZodiacInfo.name}
            </span>
            <span className="text-[10px] text-stone-400 font-serif block mt-0.5">
              {yearZodiacInfo.desc}
            </span>
          </div>
        </div>

        <div className="w-full mb-10" id="festival-archive-grids-container">
          {currentYearFestivals.length > 0 ? (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5" id="official-grid-list">
              {currentYearFestivals.map((item) => {
                const isToday = item.status === 'today';
                const isPassed = item.status === 'passed';
                const pageLink = hasCustomPage(selectedYear, item.name);
                const isClickable = Boolean(pageLink);

                return (
                  <motion.div
                    key={`${selectedYear}-${item.name}`}
                    whileHover={isClickable ? { y: -3, scale: 1.01 } : undefined}
                    onClick={isClickable ? () => handleHolidayClick(item) : undefined}
                    className={`rounded-2xl border p-4 bg-white relative flex flex-col justify-between items-start transition-all duration-200 shadow-xs select-none group/card overflow-hidden ${
                      isToday
                        ? 'border-rose-300 ring-2 ring-rose-100 shadow-md ring-offset-1 bg-[#FFFDFE]'
                        : 'border-stone-200/90'
                    } ${
                      isClickable
                        ? 'cursor-pointer hover:border-[#8C6239]/45 hover:shadow-md'
                        : 'cursor-default opacity-90'
                    }`}
                  >
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
                            已流逝
                          </span>
                        )}

                        {item.status === 'upcoming' && (
                          <span className="text-[8px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 font-mono font-medium">
                            {item.countdownDays} 天后
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-serif font-black text-[#5A3E23] mb-1 group-hover/card:text-[#8C6239] transition-colors flex items-center gap-1">
                        <span>{item.name}</span>
                        {pageLink && (
                          <span className="text-[10px] scale-90 px-1.5 py-0.2 rounded-md bg-stone-900 text-amber-300 font-sans tracking-tight leading-none text-center">
                            交互页
                          </span>
                        )}
                      </h3>

                      <div className="flex items-center text-[10px] text-stone-400 font-mono space-x-1 mt-1.5">
                        <Calendar className="w-3.5 h-3.5 text-stone-300" />
                        <span>{item.dateStr}</span>
                      </div>
                    </div>

                    {pageLink && (
                      <div className="w-full border-t border-stone-100/80 pt-2.5 mt-3 flex justify-between items-center text-[9px]">
                        <span className="text-[#8C6239] font-serif font-bold flex items-center space-x-0.5">
                          <span>进入交互纪念馆</span>
                          <ChevronRight className="w-3 h-3 group-hover/card:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-sm text-stone-400 font-serif py-12">暂无节日记录</p>
          )}
        </div>
      </div>
    </div>
  );
}
