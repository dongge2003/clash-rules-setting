// 规则集通用配置
const ruleProviderCommon = {
	type: 'http',
	format: 'yaml',
	interval: 86400,
};

// 规则集配置
const ruleProviders = {
	//https://github.com/Loyalsoldier/clash-rules
	"direct": {
		...ruleProviderCommon,
		"behavior": "domain",
		"url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
		"path": "./ruleset/Loyalsoldier/direct1.yaml"
	},
	"proxy": {
		...ruleProviderCommon,
		"behavior": "domain",
		"url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
		"path": "./ruleset/Loyalsoldier/proxy.yaml"
	},
	"reject": {
		...ruleProviderCommon,
		"behavior": "domain",
		"url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
		"path": "./ruleset/Loyalsoldier/reject.yaml"
	},
	"private": {
		...ruleProviderCommon,
		"behavior": "domain",
		"url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
		"path": "./ruleset/Loyalsoldier/private.yaml"
	},
	"apple": {
		...ruleProviderCommon,
		"behavior": "domain",
		"url": "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/apple.txt",
		"path": "./ruleset/Loyalsoldier/apple.yaml"
	},
	"icloud": {
		...ruleProviderCommon,
		"behavior": "domain",
		"url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
		"path": "./ruleset/Loyalsoldier/icloud.yaml"
	},
	"google": {
		...ruleProviderCommon,
		"behavior": "domain",
		"url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
		"path": "./ruleset/Loyalsoldier/google.yaml"
	},
	"gfw": {
		...ruleProviderCommon,
		"behavior": "domain",
		"url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
		"path": "./ruleset/Loyalsoldier/gfw.yaml"
	},
	"tld-not-cn": {
		...ruleProviderCommon,
		"behavior": "domain",
		"url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
		"path": "./ruleset/Loyalsoldier/tld-not-cn.yaml"
	},
	"telegramcidr": {
		...ruleProviderCommon,
		"behavior": "ipcidr",
		"url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
		"path": "./ruleset/Loyalsoldier/telegramcidr.yaml"
	},
	"cncidr": {
		...ruleProviderCommon,
		"behavior": "ipcidr",
		"url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
		"path": "./ruleset/Loyalsoldier/cncidr.yaml"
	},
	"lancidr": {
		...ruleProviderCommon,
		"behavior": "ipcidr",
		"url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
		"path": "./ruleset/Loyalsoldier/lancidr.yaml"
	},
	"applications": {
		...ruleProviderCommon,
		"behavior": "classical",
		"url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
		"path": "./ruleset/Loyalsoldier/applications.yaml"
	},


	//AI
	// 美区AI
	"AiDomain": {
		...ruleProviderCommon,
		"behavior": "classical",
		"url": "https://cdn.jsdelivr.net/gh/dongge2003/clash-rules-setting@main/rules/Ruleset/AiDomain.yaml",
		"path": "./ruleset/dongge2003/AiDomain.yaml"
	},
	// Gemini
	"Gemini": {
		...ruleProviderCommon,
		"behavior": "classical",
		"url": "https://cdn.jsdelivr.net/gh/dongge2003/clash-rules-setting@main/rules/Ruleset/Gemini.yaml",
		"path": "./ruleset/dongge2003/Gemini.yaml"
	},
	// 字节AI
	"CiciAi": {
		...ruleProviderCommon,
		"behavior": "classical",
		"url": "https://cdn.jsdelivr.net/gh/dongge2003/clash-rules-setting@main/rules/Ruleset/CiciAi.yaml",
		"path": "./ruleset/dongge2003/CiciAi.yaml"
	},


	//游戏平台
	"Epic": {
		...ruleProviderCommon,
		"behavior": "classical",
		"url": "https://cdn.jsdelivr.net/gh/dongge2003/clash-rules-setting@main/rules/Ruleset/Epic.yaml",
		"path": "./ruleset/dongge2003/Epic.yaml"
	},
	"Sony": {
		...ruleProviderCommon,
		"behavior": "classical",
		"url": "https://cdn.jsdelivr.net/gh/dongge2003/clash-rules-setting@main/rules/Ruleset/Sony.yaml",
		"path": "./ruleset/dongge2003/Sony.yaml"
	},
	"Steam": {
		...ruleProviderCommon,
		"behavior": "classical",
		"url": "https://cdn.jsdelivr.net/gh/dongge2003/clash-rules-setting@main/rules/Steam.yaml",
		"path": "./ruleset/dongge2003/Steam.yaml"
	},
	"SteamCn": {
		...ruleProviderCommon,
		"behavior": "classical",
		"url": "https://cdn.jsdelivr.net/gh/dongge2003/clash-rules-setting@main/rules/SteamCn.yaml",
		"path": "./ruleset/dongge2003/SteamCn.yaml"
	},


	//开发
	"Developer": {
		...ruleProviderCommon,
		"behavior": "classical",
		"url": "https://cdn.jsdelivr.net/gh/dongge2003/clash-rules-setting@main/rules/Ruleset/Developer.yaml",
		"path": "./ruleset/dongge2003/Developer.yaml"
	},

	"Web3": {
		...ruleProviderCommon,
		"behavior": "classical",
		"url": "https://cdn.jsdelivr.net/gh/dongge2003/clash-rules-setting@main/rules/Web3.yaml",
		"path": "./ruleset/dongge2003/Web3.yaml"
	},


	//Edu
	"Khan": {
		...ruleProviderCommon,
		"behavior": "classical",
		"url": "https://cdn.jsdelivr.net/gh/dongge2003/clash-rules-setting@main/rules/Ruleset/Khan.yaml",
		"path": "./ruleset/dongge2003/Ruleset/Khan.yaml"
	},
	"Edutools": {
		...ruleProviderCommon,
		"behavior": "classical",
		"url": "https://cdn.jsdelivr.net/gh/dongge2003/clash-rules-setting@main/rules/Ruleset/Edutools.yaml",
		"path": "./ruleset/dongge2003/Ruleset/Edutools.yaml"
	},


	//UKApps
	"UK": {
		...ruleProviderCommon,
		"behavior": "classical",
		"url": "https://cdn.jsdelivr.net/gh/dongge2003/clash-rules-setting@main/rules/Ruleset/UK.yaml",
		"path": "./ruleset/dongge2003/Ruleset/UK.yaml"
	},
};


// 规则
const rules = [
	//自定义...
	"DOMAIN,commandcode.ai,AI",

	//clash
	"DOMAIN,clash.razord.top,全局直连",
	"DOMAIN,yacd.haishan.me,全局直连",

	//广告过滤
	"RULE-SET,reject,广告过滤",

	//直连
	// "RULE-SET,applications,全局直连",
	"RULE-SET,private,全局直连",
	"RULE-SET,apple,全局直连",
	"RULE-SET,icloud,全局直连",
	"RULE-SET,direct,全局直连",
	"RULE-SET,lancidr,全局直连",
	"RULE-SET,cncidr,全局直连",

	//AI
	"RULE-SET,Gemini,AIUS",
	"RULE-SET,AiDomain,AI",
	"RULE-SET,CiciAi,AI",

	//其他
	"RULE-SET,Epic,延迟选优",
	"RULE-SET,Sony,延迟选优",
	"RULE-SET,Steam,延迟选优",
	"RULE-SET,Developer,延迟选优",
	"RULE-SET,Web3,延迟选优",
	"RULE-SET,Khan,延迟选优",
	"RULE-SET,Edutools,延迟选优",
	"RULE-SET,UK,延迟选优",
	"RULE-SET,proxy,AI",
	"RULE-SET,telegramcidr,延迟选优",
	// "RULE-SET,google,延迟选优", (慎用)

	//漏网之鱼
	"GEOIP,LAN,全局直连",
	"GEOIP,CN,全局直连",
	"MATCH,漏网之鱼",
];

// 代理组通用配置
const groupBaseOption = {
	interval: 300,
	timeout: 3000,
	url: 'https://www.google.com/generate_204',
	lazy: true,
	'max-failed-times': 3,
};

// 程序入口
function main(config) {
	const proxyCount = config?.proxies?.length ?? 0;
	const proxyProviderCount =
		typeof config?.['proxy-providers'] === 'object'
			? Object.keys(config['proxy-providers']).length
			: 0;
	if (proxyCount === 0 && proxyProviderCount === 0) {
		throw new Error('配置文件中未找到任何代理');
	}

	// 覆盖原配置中的代理组
	config['proxy-groups'] = [
		{
			...groupBaseOption,
			"name": "延迟选优",
			"interval": 300,
			"hidden": false,
			"type": "url-test",
			"tolerance": 100,
			"include-all": true,
			"icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg"
		},
		{
			...groupBaseOption,
			"name": "故障转移",
			"hidden": true,
			"type": "fallback",
			"include-all": true,
			"icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/ambulance.svg"
		},
		{
			...groupBaseOption,
			"name": "负载均衡(散列)",
			"hidden": true,
			"type": "load-balance",
			"strategy": "consistent-hashing",
			"include-all": true,
			"icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/merry_go.svg"
		},
		{
			...groupBaseOption,
			"name": "负载均衡(轮询)",
			"hidden": true,
			"type": "load-balance",
			"strategy": "round-robin",
			"include-all": true,
			"icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/balance.svg"
		},
		{
			...groupBaseOption,
			"name": "节点选择",
			"type": "select",
			"proxies": ["延迟选优", "故障转移", "负载均衡(散列)", "负载均衡(轮询)"],
			"include-all": true,
			"icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
		},
		{
			...groupBaseOption,
			"name": "全局直连",
			"hidden": true,
			"type": "select",
			"proxies": ["DIRECT"],
			"icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
		},
		{
			...groupBaseOption,
			"name": "广告过滤",
			"type": "select",
			"proxies": ["REJECT", "DIRECT"],
			"icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg"
		},
		{
			"expected-status": "200",
			"name": "AIUS",
			"type": "url-test",
			"url": "https://chatgpt.com",
			"interval": 300,
			"include-all": true,
			"filter": "🇺🇸",
			"icon": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Google_Gemini_icon_2025.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
		},
		{
			"expected-status": "200",
			"name": "AI",
			"type": "url-test",
			"url": "https://chatgpt.com",
			"interval": 300,
			"include-all": true,
			"filter": "🇯🇵|🇺🇸",
			"icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg",
		},
		{
			...groupBaseOption,
			"name": "漏网之鱼",
			"type": "select",
			"proxies": ["延迟选优", "全局直连"],
			"include-all": true,
			"icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
		}
	];

	// 覆盖原配置中的规则
	config['rule-providers'] = ruleProviders;
	config['rules'] = rules;

	// 返回修改后的配置
	return config;
}