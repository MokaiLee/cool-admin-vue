<template>
	<base-layout>
		<avatar />
		<div class="tips">
			<p class="ad" style="font-size: 20px">
				<el-icon :size="18" style="transform: rotate(90deg)"><d-arrow-left /></el-icon>
			</p>
			点击进入
		</div>
		<div class="name">KOOL HOUSE</div>
		<div class="something">
			<div class="clause">{{ clause }}</div>
			<div class="clause">——{{ author }}</div>
		</div>
	</base-layout>
</template>

<script>
import { DArrowLeft } from '@element-plus/icons-vue';
import Avatar from './components/Avatar.vue';
import BaseLayout from './components/BaseLayout.vue';
import { request } from '/@/cool/service/request';
import { random } from 'lodash-es';

export default {
	name: 'welcome',
	components: {
		Avatar,
		DArrowLeft,
		BaseLayout
	},
	data() {
		return {
			clause: '每日一句',
			author: '作者',
			timer: '',
			list: [
				{ clause: '辛勤的蜜蜂永没有时间悲哀。', author: '布莱克' },
				{ clause: '我这个人走得很慢，但是我从不后退。', author: '亚伯拉罕·林肯' },
				{
					clause: '一个人几乎可以在任何他怀有无限热忱的事情上成功。 ',
					author: '查尔斯·史考伯'
				},
				{ clause: '深窥自己的心，而后发觉一切的奇迹在你自己。', author: '培根' },
				{ clause: '失败也是我需要的，它和成功对我一样有价值。', author: '爱迪生' },
				{ clause: '人需要真理，就像瞎子需要明快的引路人一样。', author: '高尔基' },
				{ clause: '任何问题都有解决的办法，无法可想的事是没有的。', author: '爱迪生' },
				{
					clause: '每一种挫折或不利的突变，是带着同样或较大的有利的种子。',
					author: '爱默生'
				},
				{ clause: '如果是玫瑰，它总会开花的。', author: '歌德' },
				{ clause: '失败是坚忍的最后考验。', author: '俾斯麦' },
				{ clause: '善于利用零星时间的人，才会做出更大的成绩来。', author: '华罗庚' },
				{
					clause: '少而好学，如日出之阳；壮而好学，如日中之光；老而好学，如炳烛之明。',
					author: '刘向'
				},
				{
					clause: '生活的情况越艰难，我越感到自己更坚强，甚而也更聪明。',
					author: '高尔基'
				},
				{
					clause: '如果我比笛卡尔看得远些，那是因为我站在巨人们的肩上的缘故。',
					author: '牛顿'
				},
				{ clause: '一次失败，只是证明我们成功的决心还够坚强。', author: '博 维' },
				{ clause: '对于不屈不挠的人来说，没有。', author: '俾斯麦' },
				{ clause: '人生应该如蜡烛一样，从顶燃到底，一直都是光明的。 ', author: ' 萧楚女' },
				{ clause: '人生的价值，即以其人对于当代所做的工作为尺度。 ', author: ' 徐玮' },
				{ clause: '我们关心的，不是你是否失败了，而是你对失败能否无怨。', author: '林肯' },
				{ clause: '人生不是一种享乐，而是一桩十分沉重的工作。', author: '列夫·托尔斯泰' },
				{ clause: '但愿每次回忆，对生活都不感到负疚 ', author: ' 郭小川' },
				{
					clause: '人的一生可能燃烧也可能腐朽，我不能腐朽，我愿意燃烧起来! ',
					author: ' 奥斯特洛夫斯基'
				},
				{ clause: '你若要喜爱你自己的价值，你就得给世界创造价值。 ', author: ' 歌德' },
				{ clause: '社会犹如一条船，每个人都要有掌舵的准备。 ', author: ' 易卜生' },
				{ clause: '人生不是一种享乐，而是一桩十分沉重的工作。 ', author: ' 列夫·托尔斯泰' },
				{
					clause: '人生的价值，并不是用时间，而是用深度去衡量的。 ',
					author: ' 列夫·托尔斯泰'
				},
				{
					clause: '人只有献身于社会，才能找出那短暂而有风险的生命的意义。 ',
					author: ' 爱因斯坦'
				},
				{ clause: '芸芸众生，孰不爱生?爱生之极，进而爱群。 ', author: ' 秋瑾' },
				{
					clause: '生活真象这杯浓酒，不经三番五次的提炼呵，就不会这样可口! ',
					author: ' 郭小川'
				},
				{
					clause: '充满着欢乐与斗争精神的人们，永远带着欢乐，欢迎雷霆与阳光。 ',
					author: ' 赫胥黎'
				},
				{
					clause: '生命的意义在于付出，在于给予，而不是在于接受，也不是在于争取。',
					author: '巴金'
				},
				{ clause: '时间是伟大的作者，她能写出未来的结局。', author: '卓别林' },
				{ clause: '为了生活中努力发挥自己的作用，热爱人生吧。 ', author: ' 罗丹' },
				{
					clause: '希望是附丽于存在的，有存在，便有希望，有希望，便是光明。 ',
					author: ' 鲁迅'
				},
				{ clause: '沉沉的黑夜都是白天的前奏。 ', author: ' 郭小川' },
				{
					clause: '当一个人用工作去迎接光明，光明很快就会来照耀着他。 ',
					author: ' 冯学峰'
				},
				{ clause: '东天已经到来，春天还会远吗? ', author: ' 雪莱' },
				{ clause: '过去属于死神，未来属于你自己。 ', author: ' 雪莱' },
				{ clause: '世间的活动，缺点虽多，但仍是美好的。 ', author: ' 罗丹' },
				{ clause: '辛勤的蜜蜂永没有时间悲哀。 ', author: ' 布莱克' },
				{ clause: '希望是厄运的忠实的姐妹。 ', author: ' 普希金' },
				{ clause: '当你的希望一个个落空，你也要坚定，要沉着! ', author: ' 朗费罗' },
				{ clause: '先相信你自己，然后别人才会相信你。 ', author: ' 屠格涅夫' },
				{ clause: '宿命论是那些缺乏意志力的弱者的借口。 ', author: ' 罗曼·罗兰' },
				{ clause: '我们唯一不会改正的缺点是软弱。 ', author: ' 拉罗什福科' },
				{ clause: '私心胜者，可以灭公。 ', author: ' 林逋' },
				{ clause: '人人好公，则天下太平；人人营私，则天下大乱。 ', author: ' 刘鹗' },
				{ clause: '自私自利之心，是立人达人之障。 ', author: ' 吕坤' },
				{ clause: '如烟往事俱忘却，心底无私天地宽。 ', author: ' 陶铸' },
				{ clause: '常求有利别人，不求有利自己。 ', author: ' 谢觉哉' },
				{ clause: '一切利己的生活，都是非理性的，动物的生活。 ', author: ' 列夫·托尔斯泰' },
				{ clause: '人的理性粉碎了迷信，而人的感情也将摧毁利己主义。 ', author: ' 海涅' },
				{ clause: '无私是稀有的道德，因为从它身上是无利可图的。 ', author: ' 布莱希特' },
				{
					clause: '生活只有在平淡无味的人看来才是空虚而平淡无味的。 ',
					author: ' 车尔尼雪夫斯基'
				},
				{
					clause: '一个人的价值，应该看他贡献什么，而不应当看他取得什么。 ',
					author: ' 爱因斯坦'
				},
				{ clause: '知识是珍宝，但实践是得到它的钥匙。', author: '托马斯·富勒' },
				{ clause: '自然赐给了我们知识的种子，而不是知识的本身。', author: '寒涅卡' },
				{ clause: '坚强的信念能赢得强者的心，并使他们变得更坚强。 ', author: '白哲特' },
				{
					clause: '清贫，洁白朴素的生活，正是我们革命者能够战胜许多困难的地方! ',
					author: ' 方志敏'
				},
				{ clause: '不幸可能成为通向幸福的桥梁。', author: '日本谚语' },
				{ clause: '苦难磨炼一些人，也毁灭另一些人。', author: '富勒' },
				{ clause: '过去属于死神，未来属于你自己。', author: '雪莱' },
				{ clause: '真正的人生，只有在经过艰难卓绝的斗争之后才能实现。', author: '塞涅卡' },
				{ clause: '当一个人用工作去迎接光明，光明很快就会来照耀着他。', author: '冯学峰' },
				{ clause: '幸运并非没有恐惧和烦恼；厄运也决非没有安慰和希望。', author: '培根' },
				{ clause: '勿问成功的秘诀为何，且尽全力做你应该做的事吧。', author: '美华纳' },
				{
					clause: '多数人都拥有自己不了解的能力和机会，都有可能做到未曾梦想的事情。 ',
					author: '戴尔·卡耐基'
				},
				{
					clause: '那脑袋里的智慧，就像打火石里的火花一样，不去打它是不肯出来的。',
					author: '莎士比亚'
				},
				{ clause: '坚强的信念能赢得强者的心，并使他们变得更坚强。 ', author: '白哲特' },
				{
					clause: '生活的全部意义在于无穷地探索尚未知道的东西，在于不断地增加更多的知识。',
					author: '左拉'
				},
				{ clause: '壮心未与年俱老，死去犹能作鬼雄。 ', author: ' 陆游' },
				{ clause: '故立志者，为学之心也；为学者，立志之事也。 ', author: ' 王阳明' },
				{ clause: '贫不足羞，可羞是贫而无志。 ', author: ' 吕坤' },
				{
					clause: '我们以人们的目的来判断人的活动。目的伟大，活动才可以说是伟大的。 ',
					author: ' 契诃夫'
				},
				{ clause: '毫无理想而又优柔寡断是一种可悲的心理。 ', author: ' 培根' },
				{ clause: '生活的理想，就是为了理想的生活。 ', author: ' 张闻天' },
				{
					clause: '人，只要有一种信念，有所追求，什么艰苦都能忍受，什么环境也都能适应。 ',
					author: ' 丁玲'
				},
				{
					clause: '理想的人物不仅要在物质需要的满足上，还要在精神旨趣的满足上得到表现。 ',
					author: ' 黑格尔'
				},
				{ clause: '生命多少用时间计算，生命的价值用贡献计算。', author: '裴多菲' },
				{ clause: '时间，就象海棉里的水，只要愿挤，总还是有的。', author: '鲁迅' },
				{ clause: '一个能思想的人，才真是一个力量无边的人。 ', author: ' 巴尔扎克' },
				{ clause: '天然的才能好象天然的植物，需要学问来修剪。', author: '培 根' },
				{
					clause: '人不光是靠他生来就拥有一切，而是靠他从学习中所得到的一切来造就自己。',
					author: '歌 德'
				},
				{ clause: '聪明的人有长的耳朵和短的舌头。', author: '弗莱格' },
				{
					clause: '人的天才只是火花，要想使它成熊熊火焰，哪就只有学习!学习!',
					author: '高尔基'
				},
				{ clause: '有教养的头脑的第一个标志就是善于提问。', author: '普列汉诺夫' },
				{
					clause: '我的努力求学没有得到别的好处，只不过是愈来愈发觉自己的无知。',
					author: '笛卡儿'
				},
				{
					clause: '学问是异常珍贵的东西，从任何源泉吸收都不可耻。',
					author: '阿卜·日·法拉兹'
				},
				{ clause: '学习是劳动，是充满思想的劳动。', author: '乌申斯基' },
				{
					clause: '把学问过于用作装饰是虚假；完全依学问上的规则而断事是书生的怪癖。',
					author: '培 根'
				},
				{
					clause: '当你还不能对自己说今天学到了什么东西时，你就不要去睡觉。',
					author: '利希顿堡'
				},
				{ clause: '游手好闲的学习并不比学习游手好闲好。', author: '约·贝勒斯' },
				{ clause: '求学的三个条件是：多观察、多吃苦、多研究。', author: '加菲劳' },
				{ clause: '学到很多东西的诀窍，就是一下子不要学很多。', author: '洛 克' },
				{
					clause: '没有人事先了解自己到底有多大的力量，直到他试过以后才知道。',
					author: '歌德'
				},
				{
					clause: '多则价谦，万物皆然，唯独知识例外。知识越丰富，则价值就越昂贵。',
					author: '马 戈'
				},
				{
					clause: '作为心智脂肪储备起来的知识并无用处，只有变成了心智肌肉才有用。',
					author: '斯宾塞'
				},
				{ clause: '知识和世故不同，真有学问的人往往是很天真的。', author: '罗曼·罗兰' },
				{
					clause: '要成功不需要什么特别的才能，只要把你能做的小事做得好就行了。',
					author: '维龙'
				},
				{
					clause: '节约时间，也就是使一个人的有限的生命，更加有效，而也就等于延长了人的寿命。',
					author: '鲁 迅'
				}
			]
		};
	},
	created() {
		this.getClause();
	},
	mounted() {
		this.timer = setInterval(this.getClause, 15000);
	},
	methods: {
		getClause() {
			// 获取一个0到99之间的随机整数
			const randomNum = Math.floor(Math.random() * 100);
			this.clause = this.list[randomNum].clause;
			this.author = this.list[randomNum].author;
		}
	}
};
</script>

<style lang="scss" scoped>
@use './components/global' as *;
.name {
	margin-top: 30px;
	font-size: 2.5rem;
	font-weight: bold;
	color: white;
	font-style: italic;
	text-align: center;
}
.tips {
	margin-top: 20px;
	font-size: 1rem;
	color: white;
	text-align: center;
}
.ad {
	animation: scrolling13 1.5s ease-in-out infinite;
}
@keyframes scrolling13 {
	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(5px);
	}
	100% {
		transform: translateY(0);
	}
}
.something {
	max-width: 1000px;
	margin: 150px auto 0 auto;
	text-align: center;
	.clause {
		margin-top: 20px;
		color: white;
		font-size: 1rem;
		font-style: italic;
	}
}
</style>
