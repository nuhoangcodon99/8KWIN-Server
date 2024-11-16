// Router HTTP / HTTPS
var mobile = require('is-mobile');
var isAuthenticated = require('./policies/isAuthenticated');
var isAdmin = require('./policies/isAdmin');
var login = require('./app/Controllers/auth/login');
var changePassword = require('./app/Controllers/auth/changePassword')
var getDaiLy = require('./app/Controllers/admin/panel/daily/getDaiLy');
var deleteDaiLy = require('./app/Controllers/admin/panel/daily/deleteDaiLy')
var addDaiLy = require('./app/Controllers/admin/panel/daily/addDaiLy');
var addGiftCodeDaiLy = require('./app/Controllers/admin/panel/daily/addGiftCodeDaiLy');
var onCheck = require('./app/Controllers/admin/panel/daily/onCheck');
var transferAgent = require('./app/Controllers/admin/panel/daily/transferAgent');

var addGiftCodeBank = require('./app/Controllers/admin/panel/daily/addGiftCodeBank');
var addGiftCodeDaiLyDaiLy = require('./app/Controllers/admin/panel/daily/addGiftCodeDaiLyDaiLy');
var adminDeleteTopTx = require('./app/Controllers/admin/panel/daily/adminDeleteTopTx');
//otp
var transferAgentOTP = require('./app/Controllers/admin/panel/daily/transferAgentOTP');
var agentTransferHistory = require('./app/Controllers/admin/panel/daily/agentTransferHistory');
var reportTransferHistory = require('./app/Controllers/admin/panel/daily/reportTransferHistory');
var getDaiLy2 = require('./app/Controllers/admin/panel/daily/getDaiLy2');
var deleteDaiLy2 = require('./app/Controllers/admin/panel/daily/deleteDaiLy2')
var addDaiLy2 = require('./app/Controllers/admin/panel/daily/addDaiLy2');
var profitAgent2 = require('./app/Controllers/admin/panel/daily/profitAgent2');
var profitAgent = require('./app/Controllers/admin/panel/daily/profitAgent');
var giftcodeAgentList = require('./app/Controllers/admin/panel/daily/giftcodeAgentList');
var giftcodeStatementAgent = require('./app/Controllers/admin/panel/daily/giftcodeStatementAgent');
var freezeTransferHistory = require('./app/Controllers/admin/panel/daily/freezeTransferHistory');
var adminGiftcodeListAgent = require('./app/Controllers/admin/panel/daily/adminGiftcodeListAgent');
var adminGiftcodeMarketingDelete = require('./app/Controllers/admin/panel/daily/adminGiftcodeMarketingDelete');
var adminGiftcodeMarketingList = require('./app/Controllers/admin/panel/daily/adminGiftcodeMarketingList');
var adminGiftcodeMarketingExcel = require('./app/Controllers/admin/panel/daily/adminGiftcodeMarketingExcel');
var adminGiftcodeCheck = require('./app/Controllers/admin/panel/daily/adminGiftcodeCheck.js');
var adminProfitAgent = require('./app/Controllers/admin/panel/daily/adminProfitAgent.js');
var agentstransferHistory = require('./app/Controllers/admin/panel/daily/agentstransferHistory.js');
var onCheckNicknameAdminTransfer = require('./app/Controllers/admin/panel/daily/onCheckNicknameAdminTransfer.js');
var transferAdmin = require('./app/Controllers/admin/panel/daily/transferAdmin.js');
var adminTransferHistory = require('./app/Controllers/admin/panel/daily/adminTransferHistory.js');
var getBalance = require('./app/Controllers/admin/panel/daily/getBalance.js');
var getSummary = require('./app/Controllers/admin/panel/daily/getSummary.js');
var taixiuHistory = require('./app/Controllers/admin/panel/games/taixiuHistory.js');
var baucuaHistory = require('./app/Controllers/admin/panel/games/baucuaHistory.js');
var xocdiaHistory = require('./app/Controllers/admin/panel/games/xocdiaHistory.js');
var minipokerHistory = require('./app/Controllers/admin/panel/games/minipokerHistory.js');
var mini3cayHistory = require('./app/Controllers/admin/panel/games/mini3cayHistory.js');
var bigbabolHistory = require('./app/Controllers/admin/panel/games/bigbabolHistory.js');
var angrybirdsHistory = require('./app/Controllers/admin/panel/games/angrybirdsHistory.js');
var vuongquocredHistory = require('./app/Controllers/admin/panel/games/vuongquocredHistory.js');
var candyHistory = require('./app/Controllers/admin/panel/games/candyHistory.js');
var longlanHistory = require('./app/Controllers/admin/panel/games/longlanHistory.js');
var zeusHistory = require('./app/Controllers/admin/panel/games/zeusHistory.js');
var tamhungHistory = require('./app/Controllers/admin/panel/games/tamhungHistory.js');

var xosoHistory = require('./app/Controllers/admin/panel/games/xosoHistory.js');
var moneylineHistory = require('./app/Controllers/admin/panel/games/moneylineHistory.js');
var getUserlist = require('./app/Controllers/admin/panel/daily/getUserlist.js');
var changeStatusLogin = require('./app/Controllers/admin/panel/daily/changeStatusLogin.js');
var resetPhone= require('./app/Controllers/admin/panel/daily/resetPhone.js');
var userTransferStatement = require('./app/Controllers/admin/panel/daily/userTransferStatement.js');
var userCardStatement = require('./app/Controllers/admin/panel/daily/userCardStatement.js');
var userDepositCheck = require('./app/Controllers/admin/panel/daily/userDepositCheck.js');
var userHistory = require('./app/Controllers/admin/panel/daily/userHistory.js')
var getVipHistory = require('./app/Controllers/admin/panel/daily/getVipHistory.js');
var getVipRanking = require('./app/Controllers/admin/panel/daily/getVipRanking.js');
var changeVip = require('./app/Controllers/admin/panel/daily/changeVip.js');
var editVip = require('./app/Controllers/admin/panel/daily/editVip.js');
var getVip = require('./app/Controllers/admin/panel/daily/getVip.js');
var getVipHT = require('./app/Controllers/admin/panel/daily/getVipHT.js');
var actionNapx2 = require('./app/Controllers/admin/panel/daily/actionNapx2.js');
module.exports = function(app, redT) {
    app.post("/api/v1/login", login);
    app.get("/api/v1/getBalance", isAuthenticated, getBalance);
    app.post('/api/v1/admin/addGiftCodeBank', isAuthenticated, addGiftCodeBank);
    app.post('/api/v1/agent/dailyAddGiftCode', isAuthenticated, addGiftCodeDaiLyDaiLy);
    app.post('/api/v1/changePassword', isAuthenticated, changePassword);
    app.post('/api/v1/admin/sknapthe', isAuthenticated,isAdmin, actionNapx2);
    app.get('/api/v1/admin/getDaily', isAuthenticated, getDaiLy);
    app.get('/api/v1/admin/deleteDaily', isAuthenticated, deleteDaiLy);
    app.post('/api/v1/admin/createDaily', isAuthenticated, addDaiLy);
    app.post('/api/v1/admin/giftcodeDailyAdd', isAuthenticated, addGiftCodeDaiLy);
    app.get('/api/v1/agent/checkNicknameAgent', isAuthenticated, onCheck);
    app.get('/api/v1/agent/checkNicknameAdmin', isAuthenticated, onCheckNicknameAdminTransfer);
    app.post("/api/v1/getVipHistory", isAuthenticated, getVipHistory);
    app.post("/api/v1/getVipRanking", isAuthenticated, getVipRanking);
    app.post("/api/v1/changeVip", isAuthenticated, changeVip);
    app.post("/api/v1/editVip", isAuthenticated, editVip);
    app.post("/api/v1/getVip", isAuthenticated, getVip);
    app.post("/api/v1/getVipHT", isAuthenticated, getVipHT);
    app.post('/api/v1/agent/transferAgent', isAuthenticated, transferAgent);
    app.post('/api/v1/agent/transferAgentOTP', isAuthenticated, transferAgentOTP);
    app.post('/api/v1/admin/transfer', isAuthenticated, isAdmin, transferAdmin);
    app.post('/api/v1/agent/transferHistory', isAuthenticated, agentTransferHistory);
    app.post('/api/v1/agent/reportTransferHistory', isAuthenticated, reportTransferHistory);
    app.get('/api/v1/agent/getDaily2', isAuthenticated, getDaiLy2);
    app.get('/api/v1/agent/deleteDaily2', isAuthenticated, deleteDaiLy2);
    app.post('/api/v1/agent/createDaily2', isAuthenticated, addDaiLy2);
    app.post('/api/v1/agent/profitAgent2', isAuthenticated, profitAgent2);
    app.post('/api/v1/agent/profitAgent', isAuthenticated, profitAgent);
    app.post('/api/v1/agent/giftcodeList', isAuthenticated, giftcodeAgentList);
    app.post('/api/v1/agent/giftcodeStatement', isAuthenticated, giftcodeStatementAgent);
    app.post('/api/v1/agent/freezeTransferHistory', isAuthenticated, freezeTransferHistory);
    app.post('/api/v1/admin/agent/giftcodeList', isAuthenticated, adminGiftcodeListAgent);
    app.get('/api/v1/admin/marketing/giftcodeDelete', isAuthenticated, adminGiftcodeMarketingDelete);
    app.post('/api/v1/admin/marketing/giftcodeList', isAuthenticated, adminGiftcodeMarketingList);
    app.get('/api/v1/admin/marketing/giftcodeExcel', adminGiftcodeMarketingExcel);
    app.post('/api/v1/admin/giftcodeCheck', isAuthenticated, adminGiftcodeCheck);
    app.post('/api/v1/admin/profitAgent', isAuthenticated, adminProfitAgent);
    app.post('/api/v1/admin/agents/transferHistory', isAuthenticated, agentstransferHistory);
    app.post('/api/v1/admin/transferHistory', isAuthenticated, adminTransferHistory);
    app.get('/api/v1/getSummary', isAuthenticated, getSummary);
    app.post('/api/v1/admin/taixiuHistory', isAuthenticated, taixiuHistory);
    app.post('/api/v1/admin/taixiuDeleteTop', isAuthenticated, adminDeleteTopTx);
    app.post('/api/v1/admin/baucuaHistory', isAuthenticated, baucuaHistory);
    app.post('/api/v1/admin/xocdiaHistory', isAuthenticated, xocdiaHistory);
    app.post('/api/v1/admin/minipokerHistory', isAuthenticated, minipokerHistory);
    app.post('/api/v1/admin/mini3cayHistory', isAuthenticated, mini3cayHistory);
    app.post('/api/v1/admin/bigbabolHistory', isAuthenticated, bigbabolHistory);
    app.post('/api/v1/admin/angrybirdsHistory', isAuthenticated, angrybirdsHistory);
    app.post('/api/v1/admin/vuongquocredHistory', isAuthenticated, vuongquocredHistory);
    app.post('/api/v1/admin/candyHistory', isAuthenticated, candyHistory);
    app.post('/api/v1/admin/longlanHistory', isAuthenticated, longlanHistory);
    app.post('/api/v1/admin/zeusHistory', isAuthenticated, zeusHistory);
    app.post('/api/v1/admin/tamhungHistory', isAuthenticated, tamhungHistory);
    app.post('/api/v1/admin/xosoHistory', isAuthenticated, xosoHistory);
    app.post('/api/v1/admin/moneylineHistory', isAuthenticated, moneylineHistory);
    app.post('/api/v1/admin/userlist', isAuthenticated, getUserlist);
    app.get('/api/v1/admin/user/changeStatus', isAuthenticated, isAdmin, changeStatusLogin);
    app.get('/api/v1/admin/user/resetPhone', isAuthenticated, isAdmin, resetPhone);
    app.post('/api/v1/admin/userTransferStatement', isAuthenticated, isAdmin, userTransferStatement);
    app.post('/api/v1/admin/userCardStatement', isAuthenticated, isAdmin, userCardStatement);
    app.post('/api/v1/admin/userDepositCheck', isAuthenticated, isAdmin, userDepositCheck);
    app.get('/api/v1/admin/userHistory', userHistory);
};
