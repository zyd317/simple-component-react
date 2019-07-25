/**
 * Created by yidi.zhao on 2018/11/11.
 */
interface YSniffType {
    browsers?: any;
    info?: any;
    ios?: boolean;
    android?: boolean;
    iphone?: boolean;
    ipad?: boolean;
    ipod?: boolean;
    imobile?: boolean;
    os?: 'android' | 'ios';
    osVersion?: string | null;
    pixelRatio?: number;
    osVersionN?: number;
    retina?: boolean;
    webApp?: boolean;
    pc?: boolean;
}

// 结果
let ySniff: YSniffType;
ySniff = {
    browsers: {},
    info: {},
};

const {userAgent, platform} = navigator;
const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/), // 匹配 android
    ipad = userAgent.match(/(iPad).*OS\s([\d_]+)/), // 匹配 ipad
    ipod = userAgent.match(/(iPod)(.*OS\s([\d_]+))?/), // 匹配 ipod
    iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/); // 匹配 iphone
let webApp = userAgent.indexOf('Safari') === -1; // 匹配 桌面 webApp

const browsers = {
    wechat: userAgent.match(/(MicroMessenger)\/([\d\.]+)/), // 匹配 weChat
    alipay: userAgent.match(/(AlipayClient)\/([\d\.]+)/), // 匹配 支付宝
    qq: userAgent.match(/(MQQBrowser)\/([\d\.]+)/), // 匹配 QQ 浏览器
    weibo: userAgent.match(/(weibo__)([\d\.]+)/), // 匹配 微博
    uc: userAgent.match(/(UCBrower)\/([\d\.]+)/), // 匹配 uc
    opera: userAgent.match(/(Opera)\/([\d\.]+)/), // 匹配 opera
};

// 系统

ySniff.ios = ySniff.android = ySniff.iphone = ySniff.ipad = ySniff.ipod = false;

if (android) {
    ySniff.os = 'android';
    ySniff.osVersion = android[2];
    ySniff.android = true;
}

if (ipad || iphone || ipod) {
    ySniff.os = 'ios';
    ySniff.ios = true;
}

if (iphone) {
    ySniff.osVersion = iphone[2].replace(/_/g, '.');
    ySniff.iphone = true;
    ySniff.imobile = true;
}

if (ipad) {
    ySniff.osVersion = ipad[2].replace(/_/g, '.');
    ySniff.ipad = true;
}

if (ipod) {
    ySniff.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    ySniff.ipod = true;
    ySniff.imobile = true;
}

// iOS 8+ changed userAgent
if (ySniff.ios && ySniff.osVersion && userAgent.indexOf('Version/') >= 0) {
    if (ySniff.osVersion.split('.')[0] === '10') {
        ySniff.osVersion = userAgent.toLowerCase().split('version/')[1].split(' ')[0];
    }
}

if (ySniff.osVersion) {
    try {
        ySniff.osVersionN = parseInt(ySniff.osVersion.match(/\d+\.?\d*/)[0], 10);
    } catch (e) {
        console.log(e);
    }
}

// 配置

ySniff.pixelRatio = window.devicePixelRatio || 1;

ySniff.retina = ySniff.pixelRatio >= 2;

// 浏览器
Object.keys(browsers).forEach((key)=>{
    // @ts-ignore
    const value = browsers[key];
    if (value) {
        webApp = false;
        ySniff.browsers[key] = value[2];
    } else {
        ySniff.browsers[key] = false;
    }
});

ySniff.webApp = ySniff.os === 'ios' && webApp;

// 其他信息
userAgent.split(' ').forEach(item => {
    const kv = item.split('/');
    if (kv.length === 2) {
        ySniff.info[kv[0]] = kv[1];
    }
});

// PC
ySniff.pc = platform.indexOf('Mac') === 0 ||
    platform.indexOf('Win') === 0 ||
    (platform.indexOf('linux') === 0 && !ySniff.android);

export default ySniff;
