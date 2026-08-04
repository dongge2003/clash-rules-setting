# Clash 规则汇总（rules/ 目录）

> 分类依据：**文件名能表明含义的直接判断；含义不清的仅少量读取内容确认**。
> 原则：已知被墙 → **代理**；已知国内可直连 → **直连**；不确定 → 先直连、失败再走代理。
> 共 166 个规则文件（根目录 22 个 + `Ruleset/` 子目录 144 个）。

---

## 一、需要代理（被墙 / 海外服务 / 加速用）

### 根目录 `rules/`（8 个）

| 文件 | 说明 |
|------|------|
| `Download.yaml` | 下载工具进程（夸克、百度网盘、Thunder、aria2 等）走代理加速 |
| `Netflix.yaml` | Netflix 流媒体 |
| `ProxyGFWlist.yaml` | GFW 被墙域名合集 |
| `ProxyLite.yaml` | 精简代理名单 |
| `ProxyMedia.yaml` | 海外流媒体合集 |
| `Steam.yaml` | Steam 商店/社区（国内可连但慢，注释注明走代理加速） |
| `Telegram.yaml` | Telegram |
| `Web3.yaml` | 加密/Web3 站点 |

### `Ruleset/` 子目录（代理部分，86 个）

| 文件 | 说明 |
|------|------|
| `AbemaTV.yaml` | 日本流媒体 |
| `AiDomain.yaml` | AI 站点（ChatGPT 等） |
| `All4.yaml` | 英国 Channel 4 |
| `Amazon.yaml` | Amazon（含 AWS） |
| `AmazonIp.yaml` | Amazon/AWS IP 段 |
| `AppleNews.yaml` | Apple News |
| `AppleTV.yaml` | Apple TV+ |
| `BBC.yaml` | BBC |
| `BBCiPlayer.yaml` | BBC iPlayer |
| `Bahamut.yaml` | 巴哈姆特（台湾 ACG） |
| `Binance.yaml` | 币安交易所 |
| `Blizzard.yaml` | 暴雪（国际服） |
| `CiciAi.yaml` | Cici AI（字节海外版豆包，国内不可用） |
| `Crypto.yaml` | 加密货币 |
| `DAZN.yaml` | DAZN 体育流媒体 |
| `Deezer.yaml` | Deezer 音乐 |
| `Developer.yaml` | 海外开发站点（Docker、Apache、Elastic 等） |
| `Discord.yaml` | Discord |
| `DiscoveryPlus.yaml` | Discovery+ |
| `DisneyPlus.yaml` | Disney+ |
| `Dmm.yaml` | DMM（日本） |
| `Download.yaml` | 下载工具进程走代理 |
| `EHGallery.yaml` | E-Hentai 画廊 |
| `Edutools.yaml` | 海外教育工具（Khan、Duolingo、OverDrive 等） |
| `EncoreTVB.yaml` | 无线新闻/TVB |
| `F1.yaml` | F1 赛事流媒体 |
| `Facebook.yaml` | Facebook |
| `FoxNow.yaml` | Fox Now |
| `GameDownload.yaml` | 海外游戏下载 CDN（EA、育碧、R 星、GOG 等） |
| `Github.yaml` | GitHub |
| `Google.yaml` | Google 全家桶 |
| `GoogleEarth.yaml` | Google 地球 |
| `GoogleFCM.yaml` | Google FCM 推送 |
| `HBO.yaml` | HBO |
| `HBO_GO_HKG.yaml` | HBO GO 香港 |
| `Hulu.yaml` | Hulu |
| `HuluJapan.yaml` | Hulu 日本 |
| `ITV.yaml` | 英国 ITV |
| `Instagram.yaml` | Instagram |
| `JOOX.yaml` | JOOX（腾讯海外音乐） |
| `Japonx.yaml` | Japonx（日本流媒体） |
| `KKBOX.yaml` | KKBOX（台湾音乐） |
| `KKTV.yaml` | KKTV（台湾流媒体） |
| `KakaoTalk.yaml` | KakaoTalk（韩国） |
| `Khan.yaml` | 可汗学院 |
| `LiTV.yaml` | LiTV（台湾） |
| `Line.yaml` | LINE |
| `LineTV.yaml` | LINE TV |
| `My5.yaml` | 英国 Channel 5 |
| `MyTVSuper.yaml` | myTV SUPER（TVB 香港） |
| `Netflix.yaml` | Netflix |
| `NetflixIP.yaml` | Netflix IP 段 |
| `Niconico.yaml` | niconico（日本） |
| `Nintendo.yaml` | 任天堂（国际服） |
| `NivodTV.yaml` | NiVo TV |
| `Olevod.yaml` | Olevod（海外影视） |
| `OneDrive.yaml` | OneDrive |
| `PBS.yaml` | PBS（美国） |
| `Pandora.yaml` | Pandora 音乐（美国） |
| `Pixiv.yaml` | Pixiv |
| `Porn.yaml` | 成人站点合集 |
| `Pornhub.yaml` | Pornhub |
| `PrivateTracker.yaml` | PT 站点（多海外） |
| `Qobuz.yaml` | Qobuz 音乐 |
| `Reddit.yaml` | Reddit |
| `Scholar.yaml` | Google 学术 |
| `SoundCloud.yaml` | SoundCloud |
| `Spark.yaml` | Spark 邮件（Readdle）、Firebase 等海外服务 |
| `Spotify.yaml` | Spotify |
| `Steam.yaml` | Steam 商店/CDN |
| `TIDAL.yaml` | TIDAL 音乐 |
| `TaiWanGood.yaml` | 台湾好流媒体 |
| `TeamViewer.yaml` | TeamViewer（国内不稳） |
| `TikTok.yaml` | TikTok 国际版 |
| `TopBlockedSites.yaml` | 常见被墙站点合集 |
| `Twitch.yaml` | Twitch |
| `Twitter.yaml` | Twitter/X |
| `UK.yaml` | 英国域名 |
| `VikACG.yaml` | VikACG（动漫 App） |
| `ViuTV.yaml` | ViuTV（香港） |
| `Whatsapp.yaml` | WhatsApp |
| `Wikipedia.yaml` | 维基百科 |
| `YYeTs.yaml` | 人人影视（海外源） |
| `YouTube.yaml` | YouTube |
| `YouTubeMusic.yaml` | YouTube Music |
| `perplexity.yaml` | Perplexity AI |

---

## 二、不需要代理（国内可直连 / 广告拦截）

### 根目录 `rules/`（14 个）

| 文件 | 说明 |
|------|------|
| `Apple.yaml` | Apple 服务（注释明确：国内正常，不需代理） |
| `BanAD.yaml` | 广告拦截 |
| `BanEasyList.yaml` | EasyList 广告拦截 |
| `BanEasyListChina.yaml` | EasyList 中国区广告拦截 |
| `BanProgramAD.yaml` | 程序/软件广告拦截 |
| `ChinaCompanyIp.yaml` | 国内公司 IP |
| `ChinaDomain.yaml` | 国内域名 |
| `ChinaMedia.yaml` | 国内媒体 |
| `GoogleCN.yaml` | Google 中国（google.cn） |
| `LocalAreaNetwork.yaml` | 局域网 |
| `Microsoft.yaml` | Microsoft 服务（国内可直连；OneDrive 单列走代理） |
| `SteamCn.yaml` | Steam 中国（国服 CDN） |
| `UnBan.yaml` | 白名单（不应被广告拦截误伤的正常站点） |
| `Xbox.yaml` | Xbox（国行可直连） |

### `Ruleset/` 子目录（直连部分，58 个）

| 文件 | 说明 |
|------|------|
| `AccelerateDirectSites.yaml` | 国内直连加速站点合集（12306、115、360doc 等） |
| `Adobe.yaml` | Adobe（国内可访问，CC 下载慢可代理加速） |
| `Alibaba.yaml` | 阿里巴巴 |
| `Apple.yaml` | Apple |
| `Baidu.yaml` | 百度 |
| `Bilibili.yaml` | 哔哩哔哩 |
| `BilibiliHMT.yaml` | 哔哩哔哩港澳台版 |
| `ByteDance.yaml` | 字节跳动（国内） |
| `CCTV.yaml` | 央视 |
| `CN.yaml` | 国内 .cn 域名 |
| `ChinaDNS.yaml` | 国内 DNS |
| `ChinaNet.yaml` | 中国电信 |
| `DiDi.yaml` | 滴滴 |
| `Douyu.yaml` | 斗鱼 |
| `Dubox.yaml` | 百度海外网盘（国内可直连） |
| `Epic.yaml` | Epic 商城（国服可直连，下载略慢） |
| `GoogleCN.yaml` | Google 中国 |
| `GoogleCNProxyIP.yaml` | 谷歌国内代理 IP（用于加速） |
| `Heytap.yaml` | OPPO 欢太 |
| `HuaWei.yaml` | 华为 |
| `HWTV.yaml` | 5iTV 国内 IPTV |
| `Iflytek.yaml` | 科大讯飞 |
| `Iqiyi.yaml` | 爱奇艺 |
| `IqiyiHMT.yaml` | 爱奇艺港澳台版 |
| `JD.yaml` | 京东 |
| `Kingsoft.yaml` | 金山 |
| `Kuaishou.yaml` | 快手 |
| `LeTV.yaml` | 乐视 |
| `MGTVTV.yaml` | 芒果 TV |
| `MI.yaml` | 小米 |
| `MIUIPrivacy.yaml` | MIUI 隐私 |
| `MOO.yaml` | 腾讯 Midas 支付（国内） |
| `Marketing.yaml` | 思杰马克丁（国内软件代理厂商） |
| `Meitu.yaml` | 美图 |
| `Microsoft.yaml` | Microsoft |
| `NaSDDNS.yaml` | NAS DDNS（群晖/威联通、阿里云 DDNS 等，混合以直连为主） |
| `NetEase.yaml` | 网易 |
| `NetEaseMusic.yaml` | 网易云音乐 |
| `Origin.yaml` | EA Origin（国内可访问，下载略慢） |
| `PDD.yaml` | 拼多多 |
| `PPTVPPLive.yaml` | PPTV/PPLive |
| `PublicDirectCDN.yaml` | 国内公共 CDN（bootcss、baomitu、staticfile、又拍云等） |
| `RemoteDesktop.yaml` | 远程桌面软件（向日葵、ToDesk 等国内工具） |
| `Sina.yaml` | 新浪 |
| `SohuSogo.yaml` | 搜狐/搜狗 |
| `Sony.yaml` | 索尼/PlayStation（国行可直连） |
| `SteamCN.yaml` | Steam 国服 |
| `TapTap.yaml` | TapTap |
| `Tencent.yaml` | 腾讯 |
| `TencentLolm.yaml` | 腾讯 LOL 手游 |
| `TencentVideo.yaml` | 腾讯视频 |
| `TeraBox.yaml` | TeraBox（百度海外网盘，国内可直连） |
| `Vip.yaml` | 唯品会 |
| `Wechat.yaml` | 微信 |
| `Xbox.yaml` | Xbox |
| `Ximalaya.yaml` | 喜马拉雅 |
| `Xunlei.yaml` | 迅雷 |
| `Youku.yaml` | 优酷 |

---

## 三、汇总

| 类别 | 数量 | 说明 |
|------|------|------|
| **需要代理** | 94 | 海外流媒体、社交、被墙站点、AI、游戏国际服、下载加速 |
| **不需要代理** | 72 | 国内厂商/媒体、广告拦截、局域网、Google 中国等 |

> 少数“灰色地带”说明：
> - **Steam / Epic / Origin / Adobe / Nintendo / TeamViewer** 等游戏与工具：国内并未完全封锁，但直连很慢或社区部分不可达，实际配置常走代理加速 —— 本文按“国内可访问”标为直连的已在表中有备注，可按需调整。
> - **Amazon / AmazonIp** 含 AWS，AWS 控制台被墙，故归为代理；纯购物 `amazon.cn` 可直连。
> - **Khan / Edutools / Spark** 内容依赖海外 CDN，故归为代理。
