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
              25, 30, 35, 40
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
  '09.11.2023': {
    date: '09.11.2023',
    title: 'Спина/плечи/бицепс',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'Подтягивания',
            times: 12,
            weights: [65, 60, 55, 50]
          },
          {
            title: 'пулловер с канатом',
            times: 15,
            weights: [15, 20, 25, 30]
          },
        ]
      },
      {
        id: 2,
        circles: 4,
        parts: [
          {
            title: 'Тяга одной рукой в наклоне с гантелью',
            times: 12,
            weights: [7, 9, 10, 12]
          },
        ]
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'Тяга хамера 2 руками',
            times: 12,
            weights: [5, 10, 15, 20]
          },
          {
            title: 'пулловер с прямой рукояткой',
            times: 12,
            weights: [5, 10, 15, 20]
          },
        ]
      },
      {
        id: 4,
        circles: 4,
        parts: [
          {
            title: 'Плечи махи гантелей в стороны тяжелые сидя',
            times: 15,
            weights: [2, 3, 4, 5]
          },
        ]
      },
    ]
  },
  '11.11.2023': {
    date: '11.11.2023',
    title: 'Ноги/бицепс',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            times: 12,
            title: 'Присед со штангой',
            weights: [5, 10, 15, 15],
          }
        ],
      },
      {
        id: 2,
        circles: 4,
        parts: [
          {
            times: 12,
            title: 'Жим ногами (узкая постановка)',
            weights: [80, 110, 130, 150],
          }
        ],
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            times: 15,
            title: 'Сгибания',
            weights: [10, 15, 20, 25],
          },
          {
            times: 15,
            title: 'разгибания',
            weights: [5, 7.5, 10, 15],
          }
        ],
      },
      {
        id: 4,
        circles: 4,
        parts: [
          {
            times: 12,
            title: 'Сгибания на бицепс стоя с гифом',
            weights: [1.25, 2.5, 5, 7.5],
          },
        ],
      },
      {
        id: 5,
        circles: 4,
        parts: [
          {
            times: 12,
            title: 'Cгибания стоя в кроссовере(мягкая рукоятка)',
            weights: [15, 20, 25, 30],
          },
        ],
      }
    ]
  },
  '15.11.2023': {
    date: '15.11.2023',
    title: 'Грудь / трицепc',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            times: 12,
            title: 'Сведение в кроссовере на скамье в наклоне',
            weights: [5, 7, 10, 10],
          }
        ],
      },
      {
        id: 2,
        circles: 5,
        parts: [
          {
            times: [15, 12, 10, 8, 6],
            title: 'Жим шт в наклоне',
            weights: [2.5, 5, 7.5, 10, 10],
          }
        ],
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            times: 12,
            title: 'Разводка гантелей в наклоне',
            weights: [3, 4, 5, 6],
          }
        ],
      },
      {
        id: 4,
        circles: 4,
        parts: [
          {
            times: 15,
            title: 'Сведение в кроссовере стоя',
            weights: [5, 7, 7, 10],
          }
        ],
      },
      {
        id: 5,
        circles: 3,
        parts: [
          {
            times: 30,
            title: 'Бабочка',
            weights: [25, 30, 35, 35],
          }
        ],
      },
      {
        id: 6,
        circles: 4,
        parts: [
          {
            times: 30,
            title: 'Трицепс: Французский жим гантелей лежа на наклонной скамье',
            weights: [3, 4, 5, 6],
          }
        ],
      },
    ]
  },
  '17.11.2023': {
    date: '16.11.2023',
    title: 'Спина / плечи',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            times: 12,
            title: 'Подтягивания',
            weights: [65, 60, 55, 50],
          },
          {
            times: 15,
            title: 'пулловер с канатом',
            weights: [15, 20, 25, 30],
          },
        ],
      },
      {
        id: 2,
        circles: 4,
        parts: [
          {
            times: 12,
            title: 'Тяга одной рукой в наклоне с гантелью',
            weights: [7, 9, 10, 12],
          }
        ],
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            times: 12,
            title: 'Тяга хамера 2 руками',
            weights: [5, 10, 15, 20],
          },
          {
            times: 12,
            title: 'пулловер с прямой рукояткой',
            weights: [5, 10, 15, 20],
          }
        ],
      },
      {
        id: 4,
        circles: 4,
        parts: [
          {
            times: 15,
            title: 'Сведение в кроссовере стоя',
            weights: [5, 7, 7, 10],
          }
        ],
      },
      {
        id: 5,
        circles: 4,
        parts: [
          {
            times: 12,
            title: 'Жим гантелей сидя',
            weights: [4, 6, 8, 9],
          }
        ],
      },
      {
        id: 6,
        circles: 4,
        parts: [
          {
            times: 15,
            title: 'Махи в стороны',
            weights: [2, 3, 4, 5],
          }
        ],
      },
    ]
  },
  '05.12.2023': {
    date: '05.12.2023',
    title: '',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'Отжимания с широкой постановкой рук',
            times: 14,
            weights: [],
          },
          {
            title: 'бабочка',
            times: 14,
            weights: [25, 30, 35, 40],
          },
        ],
      },
      {
        id: 2,
        circles: 4,
        parts: [
          {
            title: 'сведение в кроссовере на наклонной скамье 30\'',
            times: 12,
            weights: [5,7.5,10,10],
          },
        ],
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'Французский жим',
            times: 12,
            weights: [1.25,2.5,5,5],
          },
        ],
      },
      {
        id: 4,
        circles: 4,
        parts: [
          {
            title: 'брусья «гравитрон»',
            times: 15,
            weights: [60,55,50,45],
          },
        ],
      }
    ]
  },
  '07.12.2023': {
    date: '07.12.2023',
    title: 'Спина/плечи',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'Подтягивания',
            times: 12,
            weights: [65, 60, 55, 50],
          },
          {
            title: 'пулловер с канатом',
            times: 15,
            weights: [15, 20, 25, 30],
          },
        ],
      },
      {
        id: 2,
        circles: 4,
        parts: [
          {
            title: 'Тяга одной рукой в наклоне с гантелью',
            times: 12,
            weights: [7, 9, 10, 12],
          },
        ],
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'Тяга хамера 2 руками',
            times: 12,
            weights: [5, 10, 15, 20]
          },
          {
            title: 'пулловер с прямой рукояткой',
            times: 12,
            weights: [5, 10, 15, 20]
          },
        ]
      },
      {
        id: 5,
        circles: 4,
        parts: [
          {
            title: 'Жим гантелей сидя',
            times: 15,
            weights: [4, 6, 8, 9]
          }
        ]
      },
      {
        id: 6,
        circles: 4,
        parts: [
          {
            title: 'Махи в стороны',
            times: 15,
            weights: [2, 3, 4, 5],
          }
        ]
      }
    ],
  },
  '09.12.2023': {
    date: '09.12.2023',
    title: 'Ноги',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'Выпады',
            times: 20,
            weights: [4, 6, 8, 8],
          },
        ],
      },
      {
        id: 2,
        circles: 4,
        parts: [
          {
            times: 15,
            title: 'Румынская',
            weights: [15, 20, 25, 30],
          },
          {
            times: 15,
            title: 'сгибания',
            weights: [10, 15, 20, 25],
          },
        ],
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            times: 20,
            title: 'Сведения',
            weights: [30, 35, 40, 45]
          },
          {
            times: 20,
            title: 'разведения',
            weights: [35, 40, 45, 50]
          }
        ]
      }
    ]
  },
  '12.12.2023': {
    title: 'Грудь/средняя дельта',
    date: '12.12.2023',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'Отжимания «широкая постановка»',
            times: 12,
          },
          {
            title: 'бабочка',
            times: 12,
            weights: [25, 30, 35, 40],
          },
        ]
      },
      {
        id: 2,
        circles: 4,
        parts: [
          {
            title: 'Жим штанги лёжа',
            times: 12,
            weights: [0, 5, 7.5, 10]
          }
        ],
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'Жим гантелей лёжа',
            times: 12,
            weights: [7, 9, 10, 12.5]
          }
        ]
      },
      {
        id: 4,
        circles: 10,
        parts: [
          {
            title: 'махи в стороны',
            times: 10,
            weights: [2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
          }
        ]
      }
    ],
  },
  '14.12.2023': {
    date: '14.12.2023',
    title: 'Спина/трапеция',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'тяга верхний блок «узкая рукоять»',
            times: 12,
            weights: [25, 30, 35, 40],
          }
        ],
      },
      {
        id: 2,
        circles: 4,
        parts: [
          {
            title: 'подтягивания в смите',
            times: 15,
            weights: []
          }
        ],
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'Тяга гантели в наклоне от скамьи двумя руками',
            times: 15,
            weights: [6, 8, 10, 12]
          }
        ],
      },
      {
        id: 4,
        circles: 4,
        parts: [
          {
            title: 'шраги в смит',
            times: 15,
            weights: [2.5, 5, 10, 12.5]
          }
        ],
      },
    ]
  },
  '16.12.2023': {
    title: 'ноги',
    date: '16.12.2023',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'ягодичный мост в смит',
            times: 12,
            weights: [5, 10, 15, 20],
          }
        ],
      },
      {
        id: 2,
        circles: 4,
        parts: [
          {
            title: 'выпады в смит',
            times: 12,
            weights: [2.5, 5, 7.5, 7.5],
          }
        ],
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'приседания в гакке',
            times: 12,
            weights: [10, 20, 25, 30],
          }
        ],
      },
      {
        id: 4,
        circles: 4,
        parts: [
          {
            title: 'румынская гантели',
            times: 12,
            weights: [10, 12.5, 15, 15],
          }
        ],
      },
      {
        id: 5,
        circles: 4,
        parts: [
          {
            title: 'жим ногами узкая постановка ног',
            times: 15,
            weights: [40, 60, 80, 100],
          }
        ],
      }
    ],
  },
  '19.12.2023': {
    title: 'Грудь/бицепс',
    date: '19.12.2023',
    exercises: [
      {
        id: 1,
        circles: 5,
        parts: [
          {
            title: 'Жим гантелей лёжа под наклоном 30’',
            times: [12, 10, 8, 6, 4],
            weights: [6, 10, 12.5, 15, 17.5],
          }
        ],
      },
      {
        id: 2,
        circles: 4,
        parts: [
          {
            title: 'сведения в кроссовере лёжа',
            times: 15,
            weights: [5, 7, 10, 12],
          }
        ],
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'бабочка',
            times: 15,
            weights: [25, 30, 35, 40],
          },
        ],
      },
      {
        id: 4,
        circles: 4,
        parts: [

          {
            title: 'сгибания на бицепс стоя с грифом ',
            weights: [1.25, 2.5, 5, 7.5],
            times: 15,
          }
        ],
      },
      {
        id: 5,
        circles: 4,
        parts: [
          {
            title: 'молотки',
            times: 12,
            weights: [4, 6, 7.5, 8],
          }
        ],
      }
    ]
  },
  '21.12.2023': {
    title: 'Спина/трицепс/передняя дельта',
    date: '21.12.2023',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'пуловер с мягкой рукояткой',
            times: 15,
            weights: [15, 20, 25, 30],
          }
        ],
      },
      {
        id: 2,
        circles: 4,
        parts: [
          {
            title: 'подтягивания обратным хватом в гравитроне',
            times: 12,
            weights: [65, 60, 55, 50],
          }
        ]
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'франц.жим ',
            times: 15,
            weights: [1.25, 2.5, 5, 5],
          }
        ]
      },
      {
        id: 4,
        circles: 4,
        parts: [
          {
            title: 'разгибания на трицепс стоя «волнистая рукоятка»',
            times: 15,
            weights: [20, 25, 30, 30],
          }
        ]
      },
      {
        id: 5,
        circles: 5,
        parts: [
          {
            title: 'Махи гантелей перед собой',
            times: 15,
          }
        ],
      },
    ],
  },
  '23.12.2023': {
    title: 'Ноги',
    date: '23.12.2023',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'ягодичный мост в смит',
            times: 12,
            weights: [5, 10, 15, 20],
          }
        ]
      },
      {

        id: 2,
        circles: 4,
        parts: [
          {
            title: 'выпады в смит',
            times: 12,
            weights: [2.5, 5, 7.5, 7.5],
          }
        ]
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'приседания в гакке',
            times: 12,
            weights: [10, 20, 25, 30],
          }
        ]
      },
      {
        id: 4,
        circles: 4,
        parts: [
          {
            title: 'румынская гантели',
            times: 12,
            weights: [10, 12.5, 15, 15],
          },
        ],
      },
      {
        id: 5,
        circles: 4,
        parts: [
          {
            title: 'жим ногами узкая постановка ног',
            times: 15,
            weights: [40, 60, 80, 100],
          }
        ],
      }
    ],
  },
  '26.12.2023': {
    title: 'Грудь/задняя дельта',
    date: '26.12.2023',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'жим штанги лёжа',
            times: 15,
            weights: [5, 7.5, 10, 10]
          },
          {
            title: 'пек дек',
            times: 15,
            weights: [20, 25, 30, 35],
          }
        ],
      },
      {
        id: 2,
        circles: 4,
        parts: [
          {
            title: 'разводка лёжа с гантелями',
            times: 15,
            weights: [3, 4, 5, 6],
          },
          {
            title: 'тяга каната ко лбу',
            times: 15,
            weights: [15, 20, 25, 30],
          },
        ],
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'сведение в кроссовере стоя',
            times: 15,
            weights: [10, 12, 15, 15],
          }
        ]
      }
    ],
  },
  '28.12.2023': {
    title: 'Спина/дельты',
    date: '28.12.2023',
    exercises: [
      {
        id: 1,
        circles: 4,
        parts: [
          {
            title: 'Тяга в наклоне по одной руке ',
            times: 15,
            weights: [8, 10, 12, 15],
          }
        ]
      },
      {
        id: 2,
        circles: 4,
        parts: [
          {
            title: 'Тяга нижний блок ',
            times: 12,
            weights: [25, 30, 35, 35],
          }
        ],
      },
      {
        id: 3,
        circles: 4,
        parts: [
          {
            title: 'пуловер с прямой рукояткой ',
            times: 15,
            weights: [20, 25, 30],
          }
        ]
      },
      {
        id: 4,
        circles: 4,
        parts: [
          {
            title: 'подтягивания смит ',
            times: 15,
          }
        ],
      },
      {
        id: 5,
        circles: 4,
        parts: [
          {
            title: 'Жим гантелей сидя ',
            times: 12,
            weights: [5, 6, 7, 8],
          }
        ]
      }
    ],
  },
};