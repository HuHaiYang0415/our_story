export type ZongziSide = 'left' | 'right';

export const ZONGZI_DATA = {
  left: {
    id: 'salty',
    name: '经典咸蛋黄鲜肉粽',
    tieColor: '#CA8A04',
    sealChar: '咸',
    description: '裹着饱满的五花肉，嵌入黄金般油润的咸蛋黄，软糯咸香。',
    poem: '「粽」情山水总是你',
    fortune:
      '愿此生有你，岁岁端阳，时时常安。「粽」意世间百般滋味，甜也好，咸也罢，最终还是最钟意你。',
    tip: '咸蛋黄是圆满的爱意，鲜肉是岁月的醇香。',
  },
  right: {
    id: 'sweet',
    name: '甜蜜金丝蜜枣粽',
    tieColor: '#DC2626',
    sealChar: '甜',
    description: '深红的蜜枣带着清甜融汇入精洗糯米，甜度正好，余味绵长。',
    poem: '朝暮与年岁，一生「粽」意你',
    fortune:
      '蜜枣嵌在玉糯间，正如你藏于我心田。世间红尘有千种甜、万般乐，皆不及你的展颜一瞬。',
    tip: '颗颗蜜枣甜软入心，那是与你携手的朝朝暮暮。',
  },
} as const;
