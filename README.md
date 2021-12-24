# Qing-test

Qing-test is a simple, yet elegant, autotest library.

```typescript
const { qtesting } = require("qing-testing");

test("异步交互式输入", async () => {
  const case = qtesting.Case.run({
    data: {
      cmd: "cat",
      args: [],
      options: {
        input: "123",
      },
    },
    execute: qtesting.spawner,
    expectedResults: 123,
  });
  console.log(case);
  expect(case.actualResults).toBe("123");
});
```

Qing-testing supports cli http api test, you only need to write test `data` and pass in the execution method like `qtesting.spawner`, can also customize the execution method
[![codecov](https://codecov.io/gh/lunz1207/qing-testing/branch/main/graph/badge.svg?token=050YYB8TBD)](https://codecov.io/gh/lunz1207/qing-testing)

## Installing

```bash
npm install qing-testing
```

## Supported Features

- CLI
- http
- async case
- sync case

## Best–Practices

test result bind case for other case

```bash
    Case {
      id: undefined,
      type: undefined,
      description: undefined,
      steps: undefined,
      data: { cmd: 'cat', args: [], options: { input: '123' } },
      execute: [Function: spawner],
      expectedResults: 123,
      actualResults: '123',
      helper: undefined,
      isAutomation: undefined
    }


```
