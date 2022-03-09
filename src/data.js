const data = [
  {
    id: 1,
    title: "Life Lessons with Katie ",
    description:
      'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
    price: 136,
    coverImg:
      "https://images.unsplash.com/photo-1593055497705-59a84c5928b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN3aW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: "Online",
    openSpots: 0,
    starimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtPXoV1IswSckS_6Fd16Q1nxblY8b1bmigQ&usqp=CAU",
  },
  {
    id: 2,
    title: "Wedding Photography",
    description:
      "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
    price: 125,
    coverImg:
      "https://images.unsplash.com/photo-1622277583249-4c1fad490804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZGRpbmclMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: "Online",
    openSpots: 60,
    starimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtPXoV1IswSckS_6Fd16Q1nxblY8b1bmigQ&usqp=CAU",
  },
  {
    id: 3,
    title: "Group Mountain Biking",
    description:
      "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 50,
    coverImg:
      "https://images.unsplash.com/photo-1583467875263-d50dec37a88c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Norway",
    openSpots: 3,
    starimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtPXoV1IswSckS_6Fd16Q1nxblY8b1bmigQ&usqp=CAU",
  },
  {
    id: 4,
    title: "Life Lessons with Katie ",
    description:
      'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
    price: 136,
    coverImg:
      "https://images.unsplash.com/photo-1593055497705-59a84c5928b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN3aW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: "Online",
    openSpots: 0,
    starimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtPXoV1IswSckS_6Fd16Q1nxblY8b1bmigQ&usqp=CAU",
  },
  {
    id: 5,
    title: "Wedding Photography",
    description:
      "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
    price: 125,
    coverImg:
      "https://images.unsplash.com/photo-1622277583249-4c1fad490804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZGRpbmclMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: "Online",
    openSpots: 27,
    starimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtPXoV1IswSckS_6Fd16Q1nxblY8b1bmigQ&usqp=CAU",
  },
  {
    id: 6,
    title: "Group Mountain Biking",
    description:
      "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 50,
    coverImg:
      "https://images.unsplash.com/photo-1583467875263-d50dec37a88c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Norway",
    openSpots: 3,
    starimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtPXoV1IswSckS_6Fd16Q1nxblY8b1bmigQ&usqp=CAU",
  },
  {
    id: 7,
    title: "Life Lessons with Katie ",
    description:
      'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
    price: 136,
    coverImg:
      "https://images.unsplash.com/photo-1593055497705-59a84c5928b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN3aW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: "Online",
    openSpots: 0,
    starimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtPXoV1IswSckS_6Fd16Q1nxblY8b1bmigQ&usqp=CAU",
  },
  {
    id: 8,
    title: "Wedding Photography",
    description:
      "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
    price: 125,
    coverImg:
      "https://images.unsplash.com/photo-1622277583249-4c1fad490804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZGRpbmclMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: "Online",
    openSpots: 27,
    starimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtPXoV1IswSckS_6Fd16Q1nxblY8b1bmigQ&usqp=CAU",
  },
  {
    id: 9,
    title: "Group Mountain Biking",
    description:
      "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
    price: 50,
    coverImg:
      "https://images.unsplash.com/photo-1583467875263-d50dec37a88c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Norway",
    openSpots: 3,
    starimg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtPXoV1IswSckS_6Fd16Q1nxblY8b1bmigQ&usqp=CAU",
  },
];

export default data;
