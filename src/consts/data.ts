import { WorkoutDayType, WorkoutData } from "@/types";

export const WORKOUT_DATA: WorkoutData = {
  '24.10.2023': {
    date: '24.10.2023',
    title: 'Грудь/передняя дельта',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'Сведение в кроссовере от скамьи в наклоне',
            times: 15,
            weights: [
              5, 7, 7, 10,
            ]
          }
        ]
      }, {
        id: 2,
        circles: 6,
        parts: [
          {
            title: 'Жим штанги в наклоне',
            times: [
              15, 12, 10, 10, 8, 8,
            ],
            weights: [
              2.5, 5, 7.5, 10,
            ],
          }
        ]
      }, {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'Жим гантелей на горизонтальной',
            times: 12,
            weights: [
              7, 8, 9, 10,
            ],
          }
        ]
      }, {
        id: 4,
        circles: 4,
        parts: [
          {
            title: 'Разводка гантелей в наклоне',
            times: 15,
            weights: [
              3, 4, 5, 5,
            ],
          }
        ]
      },
      {
        id: 5,
        circles: 4,
        parts: [
          {
            title: 'Подъём гантлей стоя перед собой поочередно',
            times: 12,
            weights: [
              2, 3, 3, 4,
            ],
          }
        ]
      }
    ]
  },
  '26.10.2023': {
    date: '26.10.2023',
    title: 'Спина/плечи',
    exercises: [
      {
        id: 0,
        circles: 4,
        parts: [
          {
            title: 'Подтягивания',
            times: 12,
            weights: [
              65, 60, 55, 50,
            ],
          }, {
            title: ' + пулловер с канатом',
            times: 15,
            weights: [
              15, 20, 25, 30,
            ],
          },
        ],
      }, {
        id: 1,
        circles: 4,
        parts: [{
          title: 'Тяга одной рукой в наклоне с гантелью',
          times: 12,
          weights: [
            7, 9, 10, 12
          ]
        }]
      }, {
        id: 2,
        circles: 4,
        parts: [
          {
            title: 'Тяга хамера 2 руками',
            times: 12,
            weights: [
              5, 10, 15, 20,
            ],
          }, {
            title: ' + пулловер с прямой рукояткой',
            times: 12,
            weights: [
              5, 10, 15, 20,
            ],
          },
        ],
      }, {
        id: 3,
        circles: 4,
        parts: [{
          title: 'Плечи: махи гантелей в стороны тяжелые сидя',
          times: 12,
          weights: [
            2, 3, 4, 5,
          ]
        }]
      }
    ]
  },
  '29.10.2023': {
    date: '28.10.2023',
    title: 'Ноги/пресс ',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'Разгибания ног сидя',
            times: 15,
            weights: [
              5, 7.5, 10, 15,
            ]
          }
        ]
      },
      {
        id: 2,
        circles: 5,
        parts: [
          {
            title: 'Жим ногами',
            times: 12,
            weights: [
              80, 100, 130, 150, 170,
            ]
          }
        ]
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'Румынская  тяга с гантелями',
            times: 12,
            weights: [
              10, 15, 20, 25,
            ]
          }
        ]
      },
      {
        id: 4,
        circles: 4,
        parts: [
          {
            title: 'Сгибания ног',
            times: 15,
            weights: [
              10, 15, 20, 25
            ]
          }
        ]
      },
      {
        id: 5,
        circles: 4,
        parts: [
          {
            title: 'Сведение',
            times: 15,
            weights: [
              35, 40, 45, 50
            ]
          },
          {
            title: 'икры',
            times: 15,
            weights: [
              10, 15, 20, 25
            ]
          }
        ]
      },
    ]
  },
  '01.11.2023': {
    date: '01.11.2023',
    title: 'Грудь/трицепс',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'Сведение в кроссовере на скамье в наклоне',
            times: 12,
            weights: [5, 7, 10, 10]
          }
        ]
      },
      {
        id: 2,
        circles: 5,
        parts: [
          {
            title: 'Жим шт в наклоне',
            times: [5, 12, 10, 8, 6],
            weights: [
              2.5, 5, 7.5, 10, 10
            ]
          }
        ]
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'Разводка гантелей в наклоне',
            times: 12,
            weights: [
              3, 4, 5, 6
            ]
          }
        ]
      },
      {
        id: 4,
        circles: 4,
        parts: [
          {
            title: 'Сведение в кроссовере стоя',
            times: 15,
            weights: [
              5, 7, 7, 10
            ]
          }
        ]
      },
      {
        id: 5,
        circles: 3,
        parts: [
          {
            title: 'Бабочка',
            times: 30,
            weights: [
              25, 30, 35, 35
            ]
          }
        ]
      },
      {
        id: 6,
        circles: 5,
        parts: [
          {
            title: 'Трицепс: Французский жим гантелей лежа на наклонной скамье',
            times: 12,
            weights: [
              3, 4, 5, 6
            ]
          }
        ]
      },
    ]
  },
  '02.11.2023': {
    date: '02.11.2023',
    title: 'Спина/задняя дельта',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'Тяга верхнего блока',
            times: 12,
            weights: [30, 35, 40, 45]
          }
        ]
      },
      {
        id: 2,
        circles: 4,
        parts: [
          {
            title: 'Тяга нижнего',
            times: 12,
            weights: [20, 25, 30, 36]
          }
        ]
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'Пуловер',
            times: 15,
            weights: [15, 20, 25, 30]
          }
        ]
      },
      {
        id: 4,
        circles: 4,
        parts: [
          {
            title: 'Дельта: Тяга ко лбу',
            times: 15,
            weights: [20, 25, 30, 30]
          }
        ]
      },
      {
        id: 5,
        circles: 4,
        parts: [
          {
            title: 'Дельта: Обратная бабочка',
            times: 15,
            weights: [25, 30, 35, 40]
          }
        ]
      },
    ]
  },
  '04.11.2023': {
    date: '04.11.2023',
    title: 'Ноги ',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'Разгибания ног сидя',
            times: 15,
            weights: [
              5, 7.5, 10, 15,
            ]
          }
        ]
      },
      {
        id: 2,
        circles: 5,
        parts: [
          {
            title: 'Жим ногами',
            times: 12,
            weights: [
              80, 100, 130, 150, 170,
            ]
          }
        ]
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'Румынская  тяга с гантелями',
            times: 12,
            weights: [
              10, 15, 20, 25,
            ]
          }
        ]
      },
      {
        id: 4,
        circles: 4,
        parts: [
          {
            title: 'Сгибания ног',
            times: 15,
            weights: [
              10, 15, 20, 25
            ]
          }
        ]
      },
      {
        id: 5,
        circles: 4,
        parts: [
          {
            title: 'Сведение',
            times: 15,
            weights: [
              25,30,35,40
            ]
          },
          {
            title: 'икры',
            times: 15,
            weights: [
              10, 15, 20, 25
            ]
          }
        ]
      },
      {
        id: 6,
        circles: 4,
        parts: [
          {
            title: 'Прыжки на тумбу',
            times: '15/20',
          }
        ]
      },
    ]
  },
};


/* 
6.Ноги

Румынская  тяга с гантелями 4 по 12
вес 10,15,20,25

Сгибания ног 4 по 15 вес 10,15,20,25

Сведение+икры 4 по 15 
вес 25,30,35,40+10,15,20,25

Прыжки на тумбу 15/20

….

7.Грудь/трицепс

Жим гантелей в наклона 4 по 12
вес 5,6,7,8

Сведение в кроссовере на горизонтальной скамье 4 по 15
вес 5,7,10,10

Жим в хамере + бабочка 4 по 15
вес 5,10,15,15+25,30,35,35

Плечи

Махи гантелей в стороны сидя тяжелые 4 по 15 вес 2,3,4,5

Трицепс 

Французский с гантелями 4 по 12
вес 3,4,5,6

Разгибание с канатом 4 по 12
вес 15,20,25,30

….

8.Спина/плечи/бицепс

Спина

Подтягивания + пулловер с канатом 4 по 12/15 вес 65,60,55,50+15,20,25,30

Тяга одной рукой в наклоне с гантелью 4 по 12 вес 7,9,10,12

Тяга хамера 2 руками + пулловер с прямой рукояткой 4 по 12 вес 5,10,15,20

Плечи махи гантелей в стороны тяжелые сидя 4 по 15 вес 2,3,4,5

….

9.Ноги/бицепс 

Присед со штангой 4/12
вес 5/10/15/15

Жим ногами (узкая постановка)4/12
вес 80,110,130,150

Сгибания+разгибания 4/15
вес 10,15,20,25+5,7.5,10,15

Бицепс

Сгибания на бицепс стоя с гифом 4/12
вес1.25,2.5,5,7.5

сгибания стоя в кроссовере (мягкая рукоятка) вес 15,20,25,30?

….

10.Грудь/трицеп

Сведение в кроссовере на скамье в наклоне 4 по вес12 5,7,10,10

Жим шт в наклоне 5 по 15/12/10/8/6
вес 2.5,5,7.5,10,10

Разводка гантелей в наклоне 4 по 12
3,4,5,6

Сведение в кроссовере стоя 4 по 15
вес 5,7,7,10

Бабочка 3 по 30 вес 25,30,35,35

Трицепс

Французский жим гантелей лежа на наклонной скамье 5 по 12
вес 3,4,5,6

….

11.Спина/плечи

Спина

Подтягивания + пулловер с канатом 4 по 12/15 вес 65,60,55,50+15,20,25,30

Тяга одной рукой в наклоне с гантелью 4 по 12 вес 7,9,10,12

Тяга хамера 2 руками + пулловер с прямой рукояткой 4 по 12 вес 5,10,15,20

Жим гантелей сидя 
вес 4,6,8,9

Махи в стороны 4/15
вес 2,3,4,5

….

*/