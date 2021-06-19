class Boar {
    constructor(x, y, z) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.z = parseFloat(z);
        this.vertices = [
            //tabakiera
            new Point(this.x - 8, this.y - 20, this.z + 4),
            new Point(this.x + 8, this.y - 20, this.z + 4),
            new Point(this.x - 11, this.y - 10, this.z),
            new Point(this.x + 11, this.y - 10, this.z),
            new Point(this.x, this.y - 5, this.z - 2),
            //śnupa
            new Point(this.x - 24, this.y + 20, this.z + 40),
            new Point(this.x + 24, this.y + 20, this.z + 40),
            new Point(this.x, this.y + 40, this.z + 50),
            //czoło
            new Point(this.x - 12, this.y + 30, this.z + 45),
            new Point(this.x + 12, this.y + 30, this.z + 45),
            new Point(this.x - 30, this.y + 70, this.z + 60),
            new Point(this.x + 30, this.y + 70, this.z + 60),
            new Point(this.x, this.y + 90, this.z + 65),
            //poliki
            new Point(this.x - 45, this.y + 5, this.z + 80),
            new Point(this.x - 45, this.y + 25, this.z + 80),
            new Point(this.x - 26, this.y + 60, this.z + 55),
            new Point(this.x + 45, this.y + 5, this.z + 80),
            new Point(this.x + 45, this.y + 25, this.z + 80),
            new Point(this.x + 26, this.y + 60, this.z + 55),
            //uszy
            new Point(this.x - 35, this.y + 45, this.z + 70),
            new Point(this.x - 45, this.y + 70, this.z + 90),
            new Point(this.x - 45, this.y + 110, this.z + 90),
            new Point(this.x - 15, this.y + 80, this.z + 57.5),
            new Point(this.x + 35, this.y + 45, this.z + 70),
            new Point(this.x + 45, this.y + 70, this.z + 90),
            new Point(this.x + 45, this.y + 110, this.z + 90),
            new Point(this.x + 15, this.y + 80, this.z + 57.5),
            //kły
            new Point(this.x - 15, this.y - 10, this.z + 3),
            new Point(this.x - 13, this.y - 13, this.z),
            new Point(this.x - 13, this.y, this.z - 10),
            new Point(this.x + 15, this.y - 10, this.z + 3),
            new Point(this.x + 13, this.y - 13, this.z),
            new Point(this.x + 13, this.y, this.z - 10),
            //ślepia
            new Point(this.x - 16, this.y + 28, this.z + 46),
            new Point(this.x - 16, this.y + 34, this.z + 46),
            new Point(this.x + 16, this.y + 28, this.z + 46),
            new Point(this.x + 16, this.y + 34, this.z + 46),
        ];
    }

    getInfo(){
        return "boar @ [(" + this.x + ", " + this.y + ", " + this.z + ")]";
    }

    drawLinesIn3D(){

        var verticesTransformed = [];
        var pointsNumber = this.vertices.length;
        for (let i = 0; i < pointsNumber; i++){
            verticesTransformed.push(this.vertices[i].transformTo2D(sceneCamera));
        }

        ctx.beginPath();

        //tabakiera
        ctx.moveTo(verticesTransformed[0].x, verticesTransformed[0].y);
        ctx.lineTo(verticesTransformed[1].x, verticesTransformed[1].y);
        ctx.lineTo(verticesTransformed[3].x, verticesTransformed[3].y);
        ctx.lineTo(verticesTransformed[4].x, verticesTransformed[4].y);
        ctx.lineTo(verticesTransformed[2].x, verticesTransformed[2].y);
        ctx.lineTo(verticesTransformed[0].x, verticesTransformed[0].y);

        //śnupa
        ctx.moveTo(verticesTransformed[2].x, verticesTransformed[2].y);
        ctx.lineTo(verticesTransformed[5].x, verticesTransformed[5].y);
        ctx.lineTo(verticesTransformed[7].x, verticesTransformed[7].y);
        ctx.lineTo(verticesTransformed[6].x, verticesTransformed[6].y);
        ctx.lineTo(verticesTransformed[3].x, verticesTransformed[3].y);

        ctx.moveTo(verticesTransformed[4].x, verticesTransformed[4].y);
        ctx.lineTo(verticesTransformed[7].x, verticesTransformed[7].y);
        //czoło
        ctx.moveTo(verticesTransformed[8].x, verticesTransformed[8].y);
        ctx.lineTo(verticesTransformed[10].x, verticesTransformed[10].y);
        ctx.lineTo(verticesTransformed[12].x, verticesTransformed[12].y);
        ctx.lineTo(verticesTransformed[11].x, verticesTransformed[11].y);
        ctx.lineTo(verticesTransformed[9].x, verticesTransformed[9].y);
        //poliki
        ctx.moveTo(verticesTransformed[0].x, verticesTransformed[0].y);
        ctx.lineTo(verticesTransformed[13].x, verticesTransformed[13].y);
        ctx.lineTo(verticesTransformed[14].x, verticesTransformed[14].y);
        ctx.lineTo(verticesTransformed[5].x, verticesTransformed[5].y);

        ctx.moveTo(verticesTransformed[14].x, verticesTransformed[14].y);
        ctx.lineTo(verticesTransformed[15].x, verticesTransformed[15].y);

        ctx.moveTo(verticesTransformed[1].x, verticesTransformed[1].y);
        ctx.lineTo(verticesTransformed[16].x, verticesTransformed[16].y);
        ctx.lineTo(verticesTransformed[17].x, verticesTransformed[17].y);
        ctx.lineTo(verticesTransformed[6].x, verticesTransformed[6].y);

        ctx.moveTo(verticesTransformed[17].x, verticesTransformed[17].y);
        ctx.lineTo(verticesTransformed[18].x, verticesTransformed[18].y);
        //uszy
        ctx.moveTo(verticesTransformed[19].x, verticesTransformed[19].y);
        ctx.lineTo(verticesTransformed[20].x, verticesTransformed[20].y);
        ctx.lineTo(verticesTransformed[21].x, verticesTransformed[21].y);
        ctx.lineTo(verticesTransformed[22].x, verticesTransformed[22].y);

        ctx.moveTo(verticesTransformed[23].x, verticesTransformed[23].y);
        ctx.lineTo(verticesTransformed[24].x, verticesTransformed[24].y);
        ctx.lineTo(verticesTransformed[25].x, verticesTransformed[25].y);
        ctx.lineTo(verticesTransformed[26].x, verticesTransformed[26].y);
        //kły
        ctx.moveTo(verticesTransformed[2].x, verticesTransformed[2].y);
        ctx.lineTo(verticesTransformed[27].x, verticesTransformed[27].y);
        ctx.lineTo(verticesTransformed[28].x, verticesTransformed[28].y);
        ctx.lineTo(verticesTransformed[2].x, verticesTransformed[2].y);
        ctx.lineTo(verticesTransformed[29].x, verticesTransformed[29].y);
        ctx.lineTo(verticesTransformed[27].x, verticesTransformed[27].y);
        ctx.lineTo(verticesTransformed[2].x, verticesTransformed[2].y);

        ctx.moveTo(verticesTransformed[28].x, verticesTransformed[28].y);
        ctx.lineTo(verticesTransformed[29].x, verticesTransformed[29].y);

        ctx.moveTo(verticesTransformed[2].x, verticesTransformed[2].y);
        ctx.lineTo(verticesTransformed[30].x, verticesTransformed[30].y);
        ctx.lineTo(verticesTransformed[31].x, verticesTransformed[31].y);
        ctx.lineTo(verticesTransformed[3].x, verticesTransformed[3].y);
        ctx.lineTo(verticesTransformed[32].x, verticesTransformed[32].y);
        ctx.lineTo(verticesTransformed[30].x, verticesTransformed[30].y);
        ctx.lineTo(verticesTransformed[3].x, verticesTransformed[3].y);

        ctx.moveTo(verticesTransformed[31].x, verticesTransformed[31].y);
        ctx.lineTo(verticesTransformed[32].x, verticesTransformed[32].y);
        //ślepia
        ctx.moveTo(verticesTransformed[8].x, verticesTransformed[8].y);
        ctx.lineTo(verticesTransformed[33].x, verticesTransformed[33].y);
        ctx.lineTo(verticesTransformed[34].x, verticesTransformed[34].y);
        ctx.lineTo(verticesTransformed[8].x, verticesTransformed[8].y);

        ctx.moveTo(verticesTransformed[9].x, verticesTransformed[9].y);
        ctx.lineTo(verticesTransformed[35].x, verticesTransformed[35].y);
        ctx.lineTo(verticesTransformed[36].x, verticesTransformed[36].y);
        ctx.lineTo(verticesTransformed[9].x, verticesTransformed[9].y);

        ctx.strokeStyle = "#00ff00";
        ctx.stroke();
        //document.getElementById("buttoninfo").innerHTML = "Boar: drawLinesIn3D " + verticesTransformed[0].x + " " + verticesTransformed[0].y + ", " + verticesTransformed[1].x + " " + verticesTransformed[1].y;
      }
}
