class Cube {
    constructor(x, y, z, a) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.z = parseFloat(z);
        this.a = parseFloat(a);
        var a2 = a/2;
        this.vertices = [
            new Point(this.x - a2, this.y - a2, this.z - a2),
            new Point(this.x - a2, this.y - a2, this.z + a2),
            new Point(this.x - a2, this.y + a2, this.z - a2),
            new Point(this.x - a2, this.y + a2, this.z + a2),
            new Point(this.x + a2, this.y - a2, this.z - a2),
            new Point(this.x + a2, this.y - a2, this.z + a2),
            new Point(this.x + a2, this.y + a2, this.z - a2),
            new Point(this.x + a2, this.y + a2, this.z + a2),
        ];
    }

    getInfo(){
        return "cube @ [(" + this.x + ", " + this.y + ", " + this.z + "), " + this.a + "]";
    }

    drawLinesIn3D(){

        var verticesTransformed = [];
        var pointsNumber = this.vertices.length;
        for (let i = 0; i < pointsNumber; i++){
            verticesTransformed.push(this.vertices[i].transformTo2D(sceneCamera));
        }


        ctx.beginPath();

        ctx.moveTo(verticesTransformed[0].x, verticesTransformed[0].y);
        ctx.lineTo(verticesTransformed[1].x, verticesTransformed[1].y);
        ctx.lineTo(verticesTransformed[3].x, verticesTransformed[3].y);
        ctx.lineTo(verticesTransformed[2].x, verticesTransformed[2].y);
        ctx.lineTo(verticesTransformed[6].x, verticesTransformed[6].y);
        ctx.lineTo(verticesTransformed[7].x, verticesTransformed[7].y);
        ctx.lineTo(verticesTransformed[5].x, verticesTransformed[5].y);
        ctx.lineTo(verticesTransformed[4].x, verticesTransformed[4].y);
        ctx.lineTo(verticesTransformed[0].x, verticesTransformed[0].y);
        ctx.lineTo(verticesTransformed[2].x, verticesTransformed[2].y);

        ctx.moveTo(verticesTransformed[3].x, verticesTransformed[3].y);
        ctx.lineTo(verticesTransformed[7].x, verticesTransformed[7].y);

        ctx.moveTo(verticesTransformed[1].x, verticesTransformed[1].y);
        ctx.lineTo(verticesTransformed[5].x, verticesTransformed[5].y);

        ctx.moveTo(verticesTransformed[4].x, verticesTransformed[4].y);
        ctx.lineTo(verticesTransformed[6].x, verticesTransformed[6].y);

        //ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        ctx.strokeStyle = "#00ff00";
        ctx.stroke();
      }

    moveX(x){
        this.x += x;
        for(i = 0; i < 8; i++){
            this.vertices[i].x += x;
        }
    }
}
