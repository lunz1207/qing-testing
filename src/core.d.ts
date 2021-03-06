/**
 * @todo: 定义 testCase 数据结构
 */
export type TestCase = {
  id?: string;
  description?: string;
  steps?: string;
  data: object;
  execute: function;
  expectedResults: any;
  helper?: object | undefined;
  isAutomation?: true | false;
  type?: "API" | "CLI" | "UI";
};
