<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>万事达U卡 - 加密货币奖励卡</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.8/dist/chart.umd.min.js"></script>
    
    <!-- Tailwind 配置 -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#3E3EFB',
                        secondary: '#0052FF',
                        dark: '#0F1419',
                        light: '#F7FAFC',
                        card: '#1DA1F2',
                        cardDark: '#0D8BD9',
                    },
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                    },
                }
            }
        }
    </script>
    
    <style type="text/tailwindcss">
        @layer utilities {
            .content-auto {
                content-visibility: auto;
            }
            .card-gradient {
                background: linear-gradient(135deg, #3E3EFB 0%, #0052FF 100%);
            }
            .card-hover {
                transform: translateY(-8px);
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
            .text-shadow {
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
        }
    </style>
</head>
<body class="bg-gray-50 font-sans">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <div class="flex-shrink-0 flex items-center">
                        <i class="fa fa-credit-card text-primary text-3xl mr-2"></i>
                        <span class="font-bold text-xl text-dark">万事达U卡</span>
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="#features" class="border-b-2 border-primary inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                            功能特点
                        </a>
                        <a href="#fees" class="border-transparent border-b-2 inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                            费用说明
                        </a>
                        <a href="#how-it-works" class="border-transparent border-b-2 inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                            如何使用
                        </a>
                        <a href="#faq" class="border-transparent border-b-2 inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                            常见问题
                        </a>
                    </div>
                </div>
                <div class="hidden sm:ml-6 sm:flex sm:items-center">
                    <button id="buy-card-btn" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        立即购买U卡
                    </button>
                </div>
                <div class="flex items-center sm:hidden">
                    <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" aria-expanded="false">
                        <i class="fa fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- 移动菜单 (隐藏) -->
    <div class="sm:hidden hidden" id="mobile-menu">
        <div class="pt-2 pb-4 space-y-1">
            <a href="#features" class="bg-primary-50 border-l-4 border-primary block pl-3 pr-4 py-2 text-base font-medium text-primary">
                功能特点
            </a>
            <a href="#fees" class="border-transparent border-l-4 hover:bg-gray-50 hover:border-gray-300 block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800">
                费用说明
            </a>
            <a href="#how-it-works" class="border-transparent border-l-4 hover:bg-gray-50 hover:border-gray-300 block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800">
                如何使用
            </a>
            <a href="#faq" class="border-transparent border-l-4 hover:bg-gray-50 hover:border-gray-300 block pl-3 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800">
                常见问题
            </a>
            <div class="pt-4 pb-3 border-t border-gray-200">
                <button id="mobile-buy-btn" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-full justify-center">
                    立即购买U卡
                </button>
            </div>
        </div>
    </div>

    <!-- 英雄区域 -->
    <div class="bg-gradient-to-b from-blue-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="md:pr-8">
                    <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-900 leading-tight text-shadow">
                        万事达U卡
                        <span class="text-primary">轻松管理您的加密资产</span>
                    </h1>
                    <p class="mt-4 text-lg text-gray-600 max-w-lg">
                        加密货币支付卡，支持全球使用，交易手续费仅2U，开卡费199U（其中15U为手续费，剩余资金存入您的账户）。
                    </p>
                    <div class="mt-8 flex flex-wrap gap-4">
                        <button id="hero-buy-btn" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105">
                            <i class="fa fa-shopping-cart mr-2"></i>
                            立即购买U卡
                        </button>
                        <button class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300">
                            <i class="fa fa-play-circle mr-2"></i>
                            观看演示
                        </button>
                    </div>
                    <div class="mt-8 flex items-center space-x-6">
                        <div class="flex -space-x-2">
                            <img class="h-8 w-8 rounded-full border-2 border-white" src="https://picsum.photos/200/200?random=1" alt="用户头像">
                            <img class="h-8 w-8 rounded-full border-2 border-white" src="https://picsum.photos/200/200?random=2" alt="用户头像">
                            <img class="h-8 w-8 rounded-full border-2 border-white" src="https://picsum.photos/200/200?random=3" alt="用户头像">
                        </div>
                        <div class="text-sm">
                            <span class="font-medium text-gray-900">5,000+ 已开卡用户</span>
                            <div class="flex items-center mt-1">
                                <i class="fa fa-star text-yellow-400"></i>
                                <i class="fa fa-star text-yellow-400"></i>
                                <i class="fa fa-star text-yellow-400"></i>
                                <i class="fa fa-star text-yellow-400"></i>
                                <i class="fa fa-star-half-o text-yellow-400"></i>
                                <span class="ml-1 text-gray-600">4.8/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <!-- 主卡片 -->
                    <div class="relative w-full max-w-md mx-auto perspective-1000 transform-gpu">
                        <div class="card-gradient rounded-2xl shadow-xl overflow-hidden transition-all duration-500 transform hover:card-hover rotate-y-1 hover:rotate-y-5">
                            <div class="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-bl-full"></div>
                            <div class="p-6">
                                <div class="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 class="text-white font-semibold opacity-90">万事达 U 卡</h3>
                                        <p class="text-white text-xs opacity-75 mt-1">MASTERCARD U-CARD</p>
                                    </div>
                                    <div class="text-white opacity-80">
                                        <i class="fa fa-wifi text-xl"></i>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="text-white text-xs opacity-75">卡号</span>
                                        <i class="fa fa-credit-card text-white opacity-75"></i>
                                    </div>
                                    <p class="text-white font-mono tracking-wider">5555 4444 3333 2222</p>
                                </div>
                                <div class="flex justify-between mb-6">
                                    <div>
                                        <div class="text-white text-xs opacity-75 mb-1">持卡人</div>
                                        <p class="text-white font-medium">U-CARD HOLDER</p>
                                    </div>
                                    <div>
                                        <div class="text-white text-xs opacity-75 mb-1">有效期至</div>
                                        <p class="text-white font-medium">12/26</p>
                                    </div>
                                </div>
                                <div class="flex justify-between items-end">
                                    <div>
                                        <div class="flex items-center">
                                            <i class="fa fa-circle text-blue-300 mr-1"></i>
                                            <i class="fa fa-circle text-red-300 mr-1"></i>
                                            <i class="fa fa-circle text-yellow-300"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-white font-bold text-lg">U-CARD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 背景装饰卡片 -->
                    <div class="absolute -bottom-10 -right-10 w-3/4 max-w-xs cardDark rounded-2xl shadow-lg overflow-hidden transform rotate-6 z-0 opacity-60"></div>
                    <div class="absolute -top-8 -left-8 w-3/4 max-w-xs bg-primary/90 rounded-2xl shadow-lg overflow-hidden transform -rotate-3 z-0 opacity-50"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- 功能特点 -->
    <section id="features" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-900">
                    万事达U卡 <span class="text-primary">优势功能</span>
                </h2>
                <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    全球通用的加密货币支付解决方案，让您的数字资产轻松转换为日常消费力
                </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <!-- 功能卡片 1 -->
                <div class="bg-gray-50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <div class="bg-primary/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                        <i class="fa fa-globe text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">全球通用</h3>
                    <p class="text-gray-600">
                        在全球超过4000万家接受万事达卡的商户处使用，支持线上线下消费和ATM取款。
                    </p>
                </div>
                <!-- 功能卡片 2 -->
                <div class="bg-gray-50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <div class="bg-primary/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                        <i class="fa fa-shield text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">安全保障</h3>
                    <p class="text-gray-600">
                        采用先进的加密技术和实时监控系统，保障您的交易安全，防止欺诈和未授权使用。
                    </p>
                </div>
                <!-- 功能卡片 3 -->
                <div class="bg-gray-50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <div class="bg-primary/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                        <i class="fa fa-bolt text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">即时交易</h3>
                    <p class="text-gray-600">
                        实时将加密货币转换为法定货币，无需等待，让您的资产即时可用。
                    </p>
                </div>
                <!-- 功能卡片 4 -->
                <div class="bg-gray-50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <div class="bg-primary/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                        <i class="fa fa-wallet text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">多钱包支持</h3>
                    <p class="text-gray-600">
                        支持TP钱包、欧意web3钱包、BG钱包、MetaMask等多种主流加密钱包连接和支付。
                    </p>
                </div>
                <!-- 功能卡片 5 -->
                <div class="bg-gray-50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <div class="bg-primary/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                        <i class="fa fa-bar-chart text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">交易明细</h3>
                    <p class="text-gray-600">
                        详细记录每笔交易，随时随地查看消费历史和余额变动，轻松管理您的支出。
                    </p>
                </div>
                <!-- 功能卡片 6 -->
                <div class="bg-gray-50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                    <div class="bg-primary/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                        <i class="fa fa-trophy text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-3">专属优惠</h3>
                    <p class="text-gray-600">
                        持卡人专享各种优惠活动和商家折扣，让您的消费更加划算。
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- 费用说明 -->
    <section id="fees" class="py-16 bg-gradient-to-b from-white to-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-900">
                    透明 <span class="text-primary">费用说明</span>
                </h2>
                <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    我们承诺提供透明的费用结构，让您清楚了解每一项费用
                </p>
            </div>
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-primary p-6">
                        <h3 class="text-xl font-semibold text-white">费用明细</h3>
                    </div>
                    <div class="p-6">
                        <div class="space-y-4">
                            <div class="flex justify-between items-center pb-3 border-b border-gray-100">
                                <div>
                                    <h4 class="font-medium text-gray-900">开卡费用</h4>
                                    <p class="text-sm text-gray-500">一次性费用</p>
                                </div>
                                <div class="text-right">
                                    <p class="font-bold text-gray-900">199 U</p>
                                    <p class="text-sm text-gray-500">其中15 U为手续费</p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center pb-3 border-b border-gray-100">
                                <div>
                                    <h4 class="font-medium text-gray-900">交易手续费</h4>
                                    <p class="text-sm text-gray-500">每笔交易收取</p>
                                </div>
                                <div class="text-right">
                                    <p class="font-bold text-gray-900">2 U</p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center pb-3 border-b border-gray-100">
                                <div>
                                    <h4 class="font-medium text-gray-900">账户余额</h4>
                                    <p class="text-sm text-gray-500">开卡后存入</p>
                                </div>
                                <div class="text-right">
                                    <p class="font-bold text-green-600">184 U</p>
                                    <p class="text-sm text-gray-500">199 U - 15 U 手续费</p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div>
                                    <h4 class="font-medium text-gray-900">ATM取款费</h4>
                                    <p class="text-sm text-gray-500">每次取款收取</p>
                                </div>
                                <div class="text-right">
                                    <p class="font-bold text-gray-900">5 U</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="bg-primary p-6">
                        <h3 class="text-xl font-semibold text-white">费用对比</h3>
                    </div>
                    <div class="p-6">
                        <canvas id="feesChart" width="400" height="300"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 如何使用 -->
    <section id="how-it-works" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-900">
                    简单 <span class="text-primary">三步开卡</span>
                </h2>
                <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    轻松获取您的万事达U卡，开始享受加密支付的便利
                </p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <!-- 步骤 1 -->
                <div class="relative">
                    <div class="bg-gray-50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md h-full">
                        <div class="absolute -top-5 -left-5 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
                        <div class="mt-6 mb-6">
                            <img src="https://picsum.photos/600/400?random=4" alt="连接钱包" class="rounded-lg w-full h-40 object-cover">
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">连接钱包</h3>
                        <p class="text-gray-600">
                            选择您的加密钱包（TP钱包、欧意web3钱包、BG钱包、MetaMask等）进行连接。
                        </p>
                    </div>
                </div>
                <!-- 步骤 2 -->
                <div class="relative">
                    <div class="bg-gray-50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md h-full">
                        <div class="absolute -top-5 -left-5 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
                        <div class="mt-6 mb-6">
                            <img src="https://picsum.photos/600/400?random=5" alt="支付开卡费" class="rounded-lg w-full h-40 object-cover">
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">支付开卡费</h3>
                        <p class="text-gray-600">
                            使用您连接的钱包支付199U开卡费，其中15U为手续费，剩余184U将存入您的卡内账户。
                        </p>
                    </div>
                </div>
                <!-- 步骤 3 -->
                <div class="relative">
                    <div class="bg-gray-50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md h-full">
                        <div class="absolute -top-5 -left-5 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
                        <div class="mt-6 mb-6">
                            <img src="https://picsum.photos/600/400?random=6" alt="开始使用" class="rounded-lg w-full h-40 object-cover">
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">开始使用</h3>
                        <p class="text-gray-600">
                            开卡成功后，您将立即获得虚拟卡信息，可以开始在全球接受万事达卡的商户处使用。
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-16 text-center">
                <button id="steps-buy-btn" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-105">
                    <i class="fa fa-credit-card mr-2"></i>
                    立即申请万事达U卡
                </button>
            </div>
        </div>
    </section>

    <!-- 常见问题 -->
    <section id="faq" class="py-16 bg-gray-50">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-900">
                    常见 <span class="text-primary">问题</span>
                </h2>
                <p class="mt-4 text-lg text-gray-600">
                    了解更多关于万事达U卡的信息
                </p>
            </div>
            <div class="space-y-4">
                <!-- FAQ 项目 1 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                    <button class="faq-toggle w-full flex justify-between items-center p-5 text-left focus:outline-none">
                        <span class="text-lg font-medium text-gray-900">如何申请万事达U卡？</span>
                        <i class="fa fa-chevron-down text-gray-400 transition-transform duration-300"></i>
                    </button>
                    <div class="faq-content px-5 pb-5 hidden">
                        <p class="text-gray-600">
                            申请流程非常简单，只需三步：1. 连接您的加密钱包；2. 支付199U开卡费用；3. 完成身份验证（如有需要）。开卡成功后，您将立即获得虚拟卡信息，可以开始使用。
                        </p>
                    </div>
                </div>
                <!-- FAQ 项目 2 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                    <button class="faq-toggle w-full flex justify-between items-center p-5 text-left focus:outline-none">
                        <span class="text-lg font-medium text-gray-900">开卡费用如何计算？</span>
                        <i class="fa fa-chevron-down text-gray-400 transition-transform duration-300"></i>
                    </button>
                    <div class="faq-content px-5 pb-5 hidden">
                        <p class="text-gray-600">
                            开卡费用为199U，其中包含15U的手续费，剩余的184U将作为您卡内的初始余额，可以用于消费或取款。
                        </p>
                    </div>
                </div>
                <!-- FAQ 项目 3 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                    <button class="faq-toggle w-full flex justify-between items-center p-5 text-left focus:outline-none">
                        <span class="text-lg font-medium text-gray-900">支持哪些加密货币？</span>
                        <i class="fa fa-chevron-down text-gray-400 transition-transform duration-300"></i>
                    </button>
                    <div class="faq-content px-5 pb-5 hidden">
                        <p class="text-gray-600">
                            目前支持多种主流加密货币，包括但不限于USDT、USDC、ETH、BTC等。我们会根据市场需求不断增加支持的加密货币种类。
                        </p>
                    </div>
                </div>
                <!-- FAQ 项目 4 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                    <button class="faq-toggle w-full flex justify-between items-center p-5 text-left focus:outline-none">
                        <span class="text-lg font-medium text-gray-900">如何充值我的U卡？</span>
                        <i class="fa fa-chevron-down text-gray-400 transition-transform duration-300"></i>
                    </button>
                    <div class="faq-content px-5 pb-5 hidden">
                        <p class="text-gray-600">
                            您可以通过连接您的加密钱包，将支持的加密货币转入您的U卡账户。转入后，系统将自动将加密货币转换为等值的U币，存入您的卡内余额。
                        </p>
                    </div>
                </div>
                <!-- FAQ 项目 5 -->
                <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                    <button class="faq-toggle w-full flex justify-between items-center p-5 text-left focus:outline-none">
                        <span class="text-lg font-medium text-gray-900">U卡有有效期吗？</span>
                        <i class="fa fa-chevron-down text-gray-400 transition-transform duration-300"></i>
                    </button>
                    <div class="faq-content px-5 pb-5 hidden">
                        <p class="text-gray-600">
                            万事达U卡的有效期为3年，到期前我们会提醒您进行续卡操作。续卡费用为15U，您卡内的余额将自动转入新卡。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 行动号召 -->
    <section class="py-16 bg-primary text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-6">
                立即获取您的万事达U卡
            </h2>
            <p class="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                加入我们，享受加密货币支付的便捷与安全
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <button id="cta-buy-btn" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-primary bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 transform hover:scale-105">
                    <i class="fa fa-shopping-cart mr-2"></i>
                    立即购买U卡
                </button>
                <button class="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300">
                    <i class="fa fa-info-circle mr-2"></i>
                    了解更多
                </button>
            </div>
        </div>
    </section>

    <!-- 页脚 -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center mb-4">
                        <i class="fa fa-credit-card text-primary text-2xl mr-2"></i>
                        <span class="font-bold text-xl">万事达U卡</span>
                    </div>
                    <p class="text-gray-400 mb-4">
                        全球领先的加密货币支付解决方案
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <i class="fa fa-twitter"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <i class="fa fa-telegram"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <i class="fa fa-reddit"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white transition-colors">
                            <i class="fa fa-discord"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 class="font-semibold text-lg mb-4">产品</h3>
                    <ul class="space-y-2">
                        <li><a href="#features" class="text-gray-400 hover:text-white transition-colors">功能特点</a></li>
                        <li><a href="#fees" class="text-gray-400 hover:text-white transition-colors">费用说明</a></li>
                        <li><a href="#how-it-works" class="text-gray-400 hover:text-white transition-colors">使用教程</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">常见问题</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold text-lg mb-4">支持</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">帮助中心</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">安全中心</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">隐私政策</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold text-lg mb-4">法律</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">服务条款</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">隐私政策</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Cookie 政策</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors">合规信息</a></li>
                    </ul>
                </div>
            </div>
            <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; 2023 万事达U卡. 保留所有权利.</p>
                <p class="mt-2">万事达卡由万事达国际组织授权发行</p>
            </div>
        </div>
    </footer>

    <!-- 钱包连接模态框 -->
    <div id="wallet-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
        <div class="bg-white rounded-xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 scale-95 opacity-0" id="modal-content">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-xl font-semibold text-gray-900">选择钱包连接</h3>
                <button id="close-modal" class="text-gray-400 hover:text-gray-600 focus:outline-none">
                    <i class="fa fa-times text-xl"></i>
                </button>
            </div>
            <div class="space-y-4">
                <p class="text-gray-600">请选择您想要连接的钱包进行支付：</p>
                <div class="grid grid-cols-2 gap-4">
                    <!-- 钱包选项 1 -->
                    <button class="wallet-option bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-200 hover:bg-gray-100 border border-gray-200" data-wallet="metamask">
                        <img src="https://picsum.photos/100/100?random=7" alt="MetaMask" class="w-12 h-12 rounded-full mb-2">
                        <span class="font-medium text-gray-900">MetaMask</span>
                    </button>
                    <!-- 钱包选项 2 -->
                    <button class="wallet-option bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-200 hover:bg-gray-100 border border-gray-200" data-wallet="tp">
                        <img src="https://picsum.photos/100/100?random=8" alt="TP钱包" class="w-12 h-12 rounded-full mb-2">
                        <span class="font-medium text-gray-900">TP钱包</span>
                    </button>
                    <!-- 钱包选项 3 -->
                    <button class="wallet-option bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-200 hover:bg-gray-100 border border-gray-200" data-wallet="ouyi">
                        <img src="https://picsum.photos/100/100?random=9" alt="欧意web3" class="w-12 h-12 rounded-full mb-2">
                        <span class="font-medium text-gray-900">欧意web3</span>
                    </button>
                    <!-- 钱包选项 4 -->
                    <button class="wallet-option bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-200 hover:bg-gray-100 border border-gray-200" data-wallet="bg">
                        <img src="https://picsum.photos/100/100?random=10" alt="BG钱包" class="w-12 h-12 rounded-full mb-2">
                        <span class="font-medium text-gray-900">BG钱包</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- 支付确认模态框 -->
    <div id="payment-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
        <div class="bg-white rounded-xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 scale-95 opacity-0" id="payment-modal-content">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-xl font-semibold text-gray-900">支付确认</h3>
                <button id="close-payment-modal" class="text-gray-400 hover:text-gray-600 focus:outline-none">
                    <i class="fa fa-times text-xl"></i>
                </button>
            </div>
            <div class="space-y-4">
                <div id="wallet-selected" class="text-center py-2">
                    <p class="text-gray-600">正在连接 <span class="font-medium text-primary" id="selected-wallet-name">MetaMask</span>...</p>
                </div>
                <div class="bg-gray-50 rounded-lg p-4">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-gray-600">支付金额</span>
                        <span class="font-bold text-gray-900">199 U</span>
                    </div>
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-gray-600">手续费</span>
                        <span class="text-gray-900">15 U</span>
                    </div>
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-gray-600">卡内余额</span>
                        <span class="font-medium text-green-600">184 U</span>
                    </div>
                    <div class="border-t border-gray-200 mt-2 pt-2 flex justify-between items-center">
                        <span class="font-medium text-gray-900">使用钱包</span>
                        <span class="text-sm text-gray-600" id="wallet-address">0x...</span>
                    </div>
                </div>
                <button id="confirm-payment" class="w-full bg-primary text-white py-3 rounded-lg font-medium transition-all duration-200 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    确认支付
                </button>
            </div>
        </div>
    </div>

    <!-- 成功模态框 -->
    <div id="success-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
        <div class="bg-white rounded-xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 scale-95 opacity-0" id="success-modal-content">
            <div class="text-center">
                <div class="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <i class="fa fa-check text-green-500 text-2xl"></i>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">开卡成功！</h3>
                <p class="text-gray-600 mb-6">
                    您的万事达U卡已成功开通，184U已存入您的账户。
                </p>
                <div class="bg-gray-50 rounded-lg p-4 mb-6">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-gray-600">卡号</span>
                        <span class="font-mono text-gray-900">**** **** **** 2222</span>
                    </div>
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-gray-600">有效期</span>
                        <span class="text-gray-900">12/26</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600">余额</span>
                        <span class="font-medium text-green-600">184 U</span>
                    </div>
                </div>
                <button id="success-close" class="w-full bg-primary text-white py-3 rounded-lg font-medium transition-all duration-200 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    完成
                </button>
            </div>
        </div>
    </div>

    <script>
        // 移动菜单切换
        const mobileMenuBtn = document.querySelector('button[type="button"].sm\:hidden');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // 导航栏滚动效果
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
                nav.classList.remove('shadow-sm');
            } else {
                nav.classList.remove('shadow-md');
                nav.classList.add('shadow-sm');
            }
        });

        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    // 关闭移动菜单
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });

        // FAQ 折叠功能
        const faqToggles = document.querySelectorAll('.faq-toggle');
        faqToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const content = toggle.nextElementSibling;
                const icon = toggle.querySelector('i');
                
                // 切换内容显示/隐藏
                content.classList.toggle('hidden');
                // 旋转图标
                icon.classList.toggle('transform');
                icon.classList.toggle('rotate-180');
            });
        });

        // 费用对比图表
        const ctx = document.getElementById('feesChart');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['我们的U卡', '其他加密卡', '传统信用卡'],
                    datasets: [{
                        label: '开卡费用 (U)',
                        data: [199, 299, 0],
                        backgroundColor: '#3E3EFB',
                        borderColor: '#3E3EFB',
                        borderWidth: 1
                    }, {
                        label: '交易手续费 (U)',
                        data: [2, 5, 3],
                        backgroundColor: '#0052FF',
                        borderColor: '#0052FF',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // 钱包连接模态框
        const walletModal = document.getElementById('wallet-modal');
        const modalContent = document.getElementById('modal-content');
        const closeModal = document.getElementById('close-modal');
        const buyButtons = [
            document.getElementById('buy-card-btn'),
            document.getElementById('mobile-buy-btn'),
            document.getElementById('hero-buy-btn'),
            document.getElementById('steps-buy-btn'),
            document.getElementById('cta-buy-btn')
        ];

        // 显示模态框函数
        function showModal() {
            walletModal.classList.remove('hidden');
            setTimeout(() => {
                modalContent.classList.remove('scale-95', 'opacity-0');
                modalContent.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        // 隐藏模态框函数
        function hideModal() {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                walletModal.classList.add('hidden');
            }, 300);
        }

        // 为所有购买按钮添加事件监听器
        buyButtons.forEach(button => {
            if (button) {
                button.addEventListener('click', showModal);
            }
        });

        // 关闭模态框
        if (closeModal) {
            closeModal.addEventListener('click', hideModal);
        }

        // 点击模态框外部关闭
        if (walletModal) {
            walletModal.addEventListener('click', (e) => {
                if (e.target === walletModal) {
                    hideModal();
                }
            });
        }

        // 钱包选择处理
        const walletOptions = document.querySelectorAll('.wallet-option');
        const paymentModal = document.getElementById('payment-modal');
        const paymentModalContent = document.getElementById('payment-modal-content');
        const selectedWalletName = document.getElementById('selected-wallet-name');
        const walletAddress = document.getElementById('wallet-address');

        function showPaymentModal(walletType) {
            hideModal();
            
            // 设置钱包名称
            const walletNames = {
                'metamask': 'MetaMask',
                'tp': 'TP钱包',
                'ouyi': '欧意web3钱包',
                'bg': 'BG钱包'
            };
            
            if (selectedWalletName) {
                selectedWalletName.textContent = walletNames[walletType] || walletType;
            }
            
            // 模拟钱包地址
            if (walletAddress) {
                const mockAddresses = {
                    'metamask': '0x1234...5678',
                    'tp': '0xabcd...efgh',
                    'ouyi': '0x9876...5432',
                    'bg': '0x4321...8765'
                };
                walletAddress.textContent = mockAddresses[walletType] || '0x...';
            }
            
            // 显示支付模态框
            if (paymentModal) {
                paymentModal.classList.remove('hidden');
                setTimeout(() => {
                    if (paymentModalContent) {
                        paymentModalContent.classList.remove('scale-95', 'opacity-0');
                        paymentModalContent.classList.add('scale-100', 'opacity-100');
                    }
                }, 10);
            }
        }

        walletOptions.forEach(option => {
            option.addEventListener('click', () => {
                const walletType = option.getAttribute('data-wallet');
                showPaymentModal(walletType);
            });
        });

        // 关闭支付模态框
        const closePaymentModal = document.getElementById('close-payment-modal');
        if (closePaymentModal) {
            closePaymentModal.addEventListener('click', () => {
                if (paymentModalContent) {
                    paymentModalContent.classList.remove('scale-100', 'opacity-100');
                    paymentModalContent.classList.add('scale-95', 'opacity-0');
                    setTimeout(() => {
                        if (paymentModal) {
                            paymentModal.classList.add('hidden');
                        }
                    }, 300);
                }
            });
        }

        // 点击支付模态框外部关闭
        if (paymentModal) {
            paymentModal.addEventListener('click', (e) => {
                if (e.target === paymentModal) {
                    if (paymentModalContent) {
                        paymentModalContent.classList.remove('scale-100', 'opacity-100');
                        paymentModalContent.classList.add('scale-95', 'opacity-0');
                        setTimeout(() => {
                            paymentModal.classList.add('hidden');
                        }, 300);
                    }
                }
            });
        }

        // 确认支付处理
        const confirmPayment = document.getElementById('confirm-payment');
        const successModal = document.getElementById('success-modal');
        const successModalContent = document.getElementById('success-modal-content');
        const successClose = document.getElementById('success-close');

        function showSuccessModal() {
            // 隐藏支付模态框
            if (paymentModalContent) {
                paymentModalContent.classList.remove('scale-100', 'opacity-100');
                paymentModalContent.classList.add('scale-95', 'opacity-0');
            }
            
            setTimeout(() => {
                if (paymentModal) {
                    paymentModal.classList.add('hidden');
                }
                
                // 显示成功模态框
                if (successModal) {
                    successModal.classList.remove('hidden');
                    setTimeout(() => {
                        if (successModalContent) {
                            successModalContent.classList.remove('scale-95', 'opacity-0');
                            successModalContent.classList.add('scale-100', 'opacity-100');
                        }
                    }, 10);
                }
            }, 300);
        }

        if (confirmPayment) {
            confirmPayment.addEventListener('click', showSuccessModal);
        }

        // 关闭成功模态框
        if (successClose) {
            successClose.addEventListener('click', () => {
                if (successModalContent) {
                    successModalContent.classList.remove('scale-100', 'opacity-100');
                    successModalContent.classList.add('scale-95', 'opacity-0');
                    setTimeout(() => {
                        if (successModal) {
                            successModal.classList.add('hidden');
                        }
                    }, 300);
                }
            });
        }

        // 点击成功模态框外部关闭
        if (successModal) {
            successModal.addEventListener('click', (e) => {
                if (e.target === successModal) {
                    if (successModalContent) {
                        successModalContent.classList.remove('scale-100', 'opacity-100');
                        successModalContent.classList.add('scale-95', 'opacity-0');
                        setTimeout(() => {
                            successModal.classList.add('hidden');
                        }, 300);
                    }
                }
            });
        }
    </script>
</body>
</html>