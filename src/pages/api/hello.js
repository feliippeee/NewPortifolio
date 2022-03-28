export default function handler(req, res) {
    
    res.status(200).json([
      {
      id: 1,  
      name: 'letmeask',
      image: '/letmeask_create_room.png',
      url: 'https://letmeask-8d9c0.web.app/',
      languages: ['TypeScript', 'React']
    },
    {
      id: 2,
      name: 'Teste-Crud',
      image: '/teste-crud.png',
      url: 'https://teste-crud.vercel.app/',
      languages: ['TypeScript', 'React']
    },
    {
      id: 3,
      name: 'Ignews',
      image: '/ignews.png',
      url: 'https://ignews-phi.vercel.app/',
      languages: ['TypeScript', 'React', 'Next']
    },
    ]
    )
  }