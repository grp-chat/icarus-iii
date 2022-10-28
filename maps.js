class AllMatrixes {
    constructor() {

        this.area1 = {
            gridMatrix: [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,0,23,23,23,23,23,23,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,23,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,23,23,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,23,23,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
                [0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                
                
            ],
            title: "Level 1",
            doors: [
                { x: 5, y: 2, toArea: "area2", appearingCoords: { x: 8, y: 4 } },
                { x: 22, y: 4, toArea: "area2", appearingCoords: { x: 21, y: 4 } },

                { x: 22, y: 10, toArea: "area5", appearingCoords: { x: 17, y: 17 } },

            ],
            finishFlags: [
                {x:17,y:15},{x:18,y:15},{x:19,y:15},{x:20,y:15},
                {x:20,y:16},{x:20,y:17},{x:20,y:18},
            ],
            signBoards: [
                {x: 261, y: 261, sign: "Boarding Ramp"},
                {x: 25*29, y: 10*29, sign: "Command Deck"}
            ]

        };

        this.area2 = {
            gridMatrix: [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,1,23,23,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,23,23,1,0,0,0,0,0],
                [0,0,0,1,23,23,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,23,23,1,0,0,0,0,0],
                [0,0,0,1,23,23,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,23,23,1,0,0,0,0,0],
                [0,0,0,1,23,23,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,23,23,1,0,0,0,0,0],
                [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                
                
            ],
            title: "Level 2",
            doors: [
                { x: 8, y: 3, toArea: "area1", appearingCoords: { x: 5, y: 3 } },
                { x: 4, y: 6, toArea: "area5", appearingCoords: { x: 11, y: 4 } },
                { x: 15, y: 8, toArea: "area2", appearingCoords: { x: 18, y: 12 } },
                { x: 9, y: 17, toArea: "area3", appearingCoords: { x: 8, y: 5 } },

                { x: 21, y: 3, toArea: "area1", appearingCoords: { x: 21, y: 4 } },
                { x: 27, y: 4, toArea: "area3", appearingCoords: { x: 14, y: 13 } },
                { x: 27, y: 9, toArea: "area3", appearingCoords: { x: 16, y: 5 } },
                { x: 17, y: 12, toArea: "area2", appearingCoords: { x: 14, y: 8 } },
                { x: 22, y: 17, toArea: "area4", appearingCoords: { x: 4, y: 8 } },

            ],
            finishFlags: [
                // {x:29,y:15},{x:30,y:15},{x:31,y:15},{x:32,y:15}
            ],
            signBoards: [
                {x: 12*29, y: 3*29, sign: "Canteen"},
                {x: 17*29, y: 3*29, sign: "Cargo Bay"}
            ]
        };

        this.area3 = {
            gridMatrix: [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,21,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,21,21,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,0,0,1,27,27,27,0,0,0,0,0,0,0,1,0,0,1,21,21,21,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,0,0,1,27,27,27,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
                [0,0,0,0,0,1,27,27,27,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]                
                

            ],
            title: "Level 3",
            doors: [
                { x: 8, y: 4, toArea: "area2", appearingCoords: { x: 9, y: 16 } },
                { x: 15, y: 13, toArea: "area2", appearingCoords: { x: 26, y: 4 } },

                { x: 15, y: 5, toArea: "area2", appearingCoords: { x: 26, y: 9 } },
                { x: 27, y: 12, toArea: "area4", appearingCoords: { x: 20, y: 13 } },

            ],
            finishFlags: [
                //{x:29,y:15},{x:30,y:15},{x:31,y:15},{x:32,y:15}
            ],
            signBoards: [
                {x: 6*29, y: 14*29, sign: "Engine Room"},
                {x: 20*29, y: 12*29, sign: "Med Bay"}
            ]
        };

        this.area4 = {
            gridMatrix: [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,24,1,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,24,1,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0],
                [0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0],
                [0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0],
                [0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0],
                [0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
                [0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,24,1,0,0,0,0],
                [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,24,1,0,0,0,0],
                [0,0,1,22,22,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
                [0,0,1,22,22,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                
                
            ],
            title: "Level 4",
            doors: [
                { x: 4, y: 7, toArea: "area2", appearingCoords: { x: 22, y: 16 } },
                { x: 9, y: 16, toArea: "area5", appearingCoords: { x: 17, y: 10 } },
                { x: 13, y: 7, toArea: "area5", appearingCoords: { x: 22, y: 7 } },
                { x: 19, y: 13, toArea: "area3", appearingCoords: { x: 26, y: 12 } },
                { x: 19, y: 4, toArea: "area5", appearingCoords: { x: 25, y: 12 } },

            ],
            finishFlags: [
                // {x:29,y:15},{x:30,y:15},{x:31,y:15},{x:32,y:15}
            ],
            signBoards: [
                {x: 3*29, y: 15*29, sign: "Armory"},
                {x: 25*29, y: 3*29, sign: "Communications"}
            ]
        };

        this.area5 = {
            gridMatrix: [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,25,25,25,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,25,25,25,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,25,25,25,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,22,22,22,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,22,22,22,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,22,22,22,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                
                
            ],
            title: "Level 5",
            doors: [
                { x: 11, y: 3, toArea: "area2", appearingCoords: { x: 5, y: 6 } },
                { x: 18, y: 10, toArea: "area4", appearingCoords: { x: 9, y: 15 } },

                { x: 22, y: 6, toArea: "area4", appearingCoords: { x: 13, y: 8 } },
                { x: 26, y: 12, toArea: "area4", appearingCoords: { x: 20, y: 4 } },
                { x: 16, y: 17, toArea: "area1", appearingCoords: { x: 22, y: 11 } },
                

            ],
            finishFlags: [
                // {x:29,y:15},{x:30,y:15},{x:31,y:15},{x:32,y:15}
            ],
            signBoards: [
                {x: 15*29, y: 3*29, sign: "Electrical"},
                {x: 23*29, y: 17*29, sign: "Power Core"}

            ]
        };

    }


}

// const allMatrixes = {}

module.exports = {
    AllMatrixes,
}