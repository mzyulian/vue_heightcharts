import ipConfig from './ipConfig'

// 基础接口
const baseApis = {
  // 登录地址
  ssoLoginUrl: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/login',
  // banner图接口
  bannerImgListUrl: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getBannerImg',
  // 用戶消息列表
  userMsgListUrl: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getUserMsg',
  // 发送验证码接口
  sendMsgCodeUrl: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getSMSCode',
  // 上次交易时间
  getLastTxnDateUrl: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getLastTxnDate',
  // 领取汤钻、健康力
  gainAssetUrl: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getProperty',
  // 查看账户资产总量列表
  gainAssetInfoUrl: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getPropertyInfo',
  // 获取用户资产交易列表接口
  propertyTxnListUrl: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getPropertyTxnList',
  // 查看账户资产总量列表
  baasTxnListUrl: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getBaasTxnList',
  // 查看产品详情
  getProductInfo: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getProductInfo',
  // 获取产品列表
  productList: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getProductList',
  // 查看账户区块地址以及私钥
  getAccountInfo: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getAccountInfo',
  // 查看用户详情
  getUserInfo: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getUserInfo',
  // 短信验证码验证
  sendSMSCode: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/sendSMSCode',
  // 首页获取用户可领取汤钻
  getUserTangBits: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getUserTangBits',
  // 首页获取汤钻以及建康力
  getPropertyInfo: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getPropertyInfo',
  // 绑定手机号码
  boundPrimaryPhone: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/boundPrimaryPhone',
  // 开通钱包
  setAccountTxnPwd: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/setAccountTxnPwd',
  // 获取汤钻总产值与总交易笔数
  getTangBitTotals: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getTangBitTotals',
  // 是否开通钱包
  checkOnWallet: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/checkOnWallet',
  // 查看用户签到状态
  checkSignIn: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/checkSignIn',
  // 查看邀请码
  geInvitationCode: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/geInvitationCode',
  // 是否绑定主手机号
  checkPhone: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/checkPhone',
  // 查看私钥地址
  getAccountPrivateKey: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getAccountPrivateKey',
  // 输入邀请码
  inputinvite: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/invite',
  // 检测是否输入邀请码状态
  getInviteStatus: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getInviteStatus',
  // 查看用户失效建康力列表
  getInvalidMagicTxnList: ipConfig.apiBaseUrl + 'baasapp/BaasAppApi/getInvalidMagicTxnList'
}
export { baseApis }
