

const GameModel = {
  getData: (id) => ([
    {
      id: 1,
      title: 'Game Name 1',
      description: 'We are a rapidly growing mobile GayDev studio, driven by our passion for creating exceptional gaming experiences. With a team of talented and dedicated individuals, we strive to push the boundaries of mobile gaming and deliver captivating adventures that resonate with players. Join us on our exciting journey as we bring to life innovative concepts and redefine the way people engage with mobile games.',
      media: ''
    },
    {
      id: 2,
      title: 'Game Name 2',
      description: 'We are a rapidly growing mobile GayDev studio, driven by our passion for creating exceptional gaming experiences. With a team of talented and dedicated individuals, we strive to push the boundaries of mobile gaming and deliver captivating adventures that resonate with players. Join us on our exciting journey as we bring to life innovative concepts and redefine the way people engage with mobile games.',
      media: ''
    },
    {
      id: 3,
      title: 'Game Name 3',
      description: 'We are a rapidly growing mobile GayDev studio, driven by our passion for creating exceptional gaming experiences. With a team of talented and dedicated individuals, we strive to push the boundaries of mobile gaming and deliver captivating adventures that resonate with players. Join us on our exciting journey as we bring to life innovative concepts and redefine the way people engage with mobile games.',
      media: ''
    },
    {
      id: 4,
      title: 'Game Name 4',
      description: 'We are a rapidly growing mobile GayDev studio, driven by our passion for creating exceptional gaming experiences. With a team of talented and dedicated individuals, we strive to push the boundaries of mobile gaming and deliver captivating adventures that resonate with players. Join us on our exciting journey as we bring to life innovative concepts and redefine the way people engage with mobile games.',
      media: ''
    },
    {
      id: 5,
      title: 'Game Name 5',
      description: 'We are a rapidly growing mobile GayDev studio, driven by our passion for creating exceptional gaming experiences. With a team of talented and dedicated individuals, we strive to push the boundaries of mobile gaming and deliver captivating adventures that resonate with players. Join us on our exciting journey as we bring to life innovative concepts and redefine the way people engage with mobile games.',
      media: ''
    },
  ].filter(el => el.id === id+1)
  )
}

export { GameModel }