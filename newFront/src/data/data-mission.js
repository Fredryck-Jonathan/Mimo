const mission = [

    {
        id: 1,
        status: 0,
        points: 40,
        titre : "Balade avec Andrée",
        lieu: "Saint-Pol-sur-Mer",
        description: "Balade tranquille le long de la mer. J'aime profiter de l'air marin et discuter de et de rien",
        date: "12/02/2026",
        image: "foret.jpg",
        duree: 2,
        vehicule: true,
        utilisateur: {
            id: 2,
            avatar: "andree.jpg",
            localisation: "Saint-Pol-sur-Mer",
            nom: "Fredryck",
            prenom: "Andrée",
            naissance: "12/01/1950",
            interet: [
                "Lire",
                "Piscine",
                "Jeux Vidéos",
                "Films",
                "Série",
            ],
            description: "",
            animal: [
                "Chien",
                "Chat"
            ]

        },
        creneaux: [
            {
                id: 2848484,
                date: "Lundi 03/02",
                heure: 14,
                place: {
                    libre: 0,
                    total: 1
                }
            },
            {
                id: 6148489,
                date: "Lundi 05/12",
                heure: 15,
                place: {
                    libre: 1,
                    total: 1
                }
            }
    ]
    },
      {
        id: 2,
        status: 0,
        points: 40,
        titre : "Balade avec Le Jenkins",
        lieu: "Saint-Pol-sur-Mer",
        description: "",
        image: "foret.jpg",
        date: "12/02/2026",
        duree: 2,
        vehicule: true,
        point: 123,
        utilisateur: {
            id: 2,
            avatar: "bernard.jpg",
            localisation: "Saint-Pol-sur-Mer",
            nom: "Fredryck",
            prenom: "Bernard",
            naissance: "12/01/1950",
            interet: [
                "Lire",
                "Piscine",
                "Jeux Vidéos",
                "Films",
                "Série",
            ],
            description: "",
            animal: [
                "Chien",
                "Chat"
            ]

        },
        creneaux: [
            {
                id: 4748484,
                date: "Lundi 03/02",
                heure: 14,
                place: {
                    libre: 0,
                    total: 1
                }
            },
            {
                id: 6478489,
                date: "Lundi 08/02",
                heure: 18,
                place: {
                    libre: 1,
                    total: 1
                }
            }
        ]
    },



]


export default mission