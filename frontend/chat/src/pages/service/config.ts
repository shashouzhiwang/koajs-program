import {Injectable} from '@angular/core';

declare const ENV;

@Injectable()
export class Config {
  public Env: string;
  // public Env = 'proxyEnv';
  // public Env = 'mockEnv';
  // public Env = 'prodEnv';
  // public Env = 'devEnv';
  /*private ENVIRONMENT = {
    proxyEnv: '',
    devEnv: 'http://120.78.81.170',
    mockEnv: ''
  };*/

  DEFAULT_APIS = {
      scoreInfo: '/jixiao-score/score/scoringInfo/', // + id
      userInfo: '/jixiao-user/user/findUserById/', // + id
      scoreList: '/jixiao-user/user/findScoree',
      saveEvaluation: '/jixiao-score/score/saveScore',
      publishEvaluation: '/jixiao-score/score/publishScore',
      accountInfo: '/jixiao-user/user/findUserByToken',
      findUsers: '/jixiao-user/user/findUsers',
      // resultSummary: '/jixiao-score/score/resultSummary',
      templateList: '/jixiao-score/score/templateList',
      resultDetail: '/jixiao-score/score/resultDetail',
      getJwt: '/jixiao-auth/oauth/token',
      qixinLoginUrl: '/jixiao-auth/3thAuth/eim',
      findOrganizationTree: '/jixiao-user/user/findOrgTree',
      exportExcell: '/jixiao-user/user/exportExcell',
      importExcell: '/jixiao-user/user/importExcel',
      saveScorerTree: '/jixiao-user/user/saveScorerTree',
      setScoringPerson: '/jixiao-user/user/findScorerTree/',
      test: "/guest/api/lang_en.php?lang=en",
      products: "api/login",
      register: "api/register"
  };

  MOCK_APIS = {
      scoreInfo: 'assets/mock/scoreInfo.json',
      userInfo: 'assets/mock/userInfo.json/',
      scoreList: 'assets/mock/scoreList.json',
      saveEvaluation: 'assets/mock/saveEvaluation.json',
      publishEvaluation: 'assets/mock/publishEvaluation.json',
      accountInfo: 'assets/mock/accountInfo.json',
      findUsers: 'assets/mock/findUsers.json',
      findOrganizationTree: 'assets/mock/origationTree.json',
      resultSummary: 'assets/mock/resultSummary.json',
      templateList: 'assets/mock/scoreTemplateList.json',
      resultDetail: 'assets/mock/resultDetail.json',
      getJwt: 'assets/mock/jwt.json',
      qixinLoginUrl: 'http://localhost:4200/#/home',
      exportExcell: 'assets/mock/exportExcell.json',
      importExcell: 'assets/mock/importExcell.json',
      saveScorerTree: 'assets/mock/saveScorerTree.json',
      setScoringPerson: 'assets/mock/setScoringPerson.json?test=',
      test: "/guest/api/lang_en.php?lang=en",
      products: "api/login",
      register: "api/register"
  };

  constructor() {
    this.Env = ENV;
  }

  public getEndpoint(name: string) {

    const apis = this.Env["mock"] ? this.MOCK_APIS : this.DEFAULT_APIS;
    //
    let path = apis[name];
    if (!path) {
      return this.MOCK_APIS[name];
    }
    return this.Env["baseUrl"] + path;
  }
}
