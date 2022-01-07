export const mockTasks = [
  {
    taskID: "tascook1",
    taskName: "サイバートラックテスト走行",
    calorie: 13,
    due: "9/23",
    childTasks: [
      {
        taskName: "コーナーカーブ",
        complete: false,
      },
      {
        taskName: "急加速",
        complete: false,
      },
      {
        taskName: "ドリフト",
        complete: true,
      },
    ],
  },
  {
    taskID: "tascook2",
    taskName: "クルードラゴン打ち上げ",
    calorie: 8,
    due: "9/23",
    childTasks: [
      {
        taskName: "打ち上げ場所予約",
        complete: true,
      },
      {
        taskName: "乗組員募集",
        complete: true,
      },
    ],
  },
  {
    taskID: "tascook3",
    taskName: "火星に植民地を建てる",
    calorie: 21,
    due: "10/24",
    childTasks: [
      {
        taskName: "探査機を送る",
        complete: true,
      },
      {
        taskName: "火星人を倒す",
        complete: true,
      },
      {
        taskName: "水を見つける",
        complete: false,
      },
      {
        taskName: "建築用の備品を運ぶ",
        complete: false,
      },
      {
        taskName: "移住船を用意する",
        complete: false,
      },
    ],
  },
  {
    taskID: "tascook4",
    taskName: "ニューラルリンク使用テスト",
    calorie: 21,
    due: "10/10",
    childTasks: [
      {
        taskName: "メタバースに侵入する",
        complete: true,
      },
      {
        taskName: "マークザッカーバーグを倒す",
        complete: false,
      },
      {
        taskName: "マトリックスに入る",
        complete: false,
      },
    ],
  },
];
