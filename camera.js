class Camera {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.thetaX = 0;
        this.thetaY = 0;
        this.thetaZ = 0;
        this.eX = 0;
        this.eY = 0;
        this.eZ = 10;
    }

    goForward(d){
      this.x += Math.sin(this.thetaY) * d;
      this.y -= Math.sin(this.thetaX) * d;
      this.z += Math.cos(this.thetaY) * d;
    }

    goRight(d){
      this.x -= Math.cos(this.thetaY) * d;
      //this.y -= Math.sin(this.thetaX) * d;
      this.z += Math.sin(this.thetaY) * d;
    }

    showInfo(){
      document.getElementById("camera-info").innerHTML = `<li>x: ${this.x}</li>` +
                                                         "<li>y: " + this.y + "</li>" +
                                                         "<li>z: " + this.z + "</li>" +
                                                         "<li>thetaX: " + this.thetaX + "</li>" +
                                                         "<li>thetaY: " + this.thetaY + "</li>" +
                                                         "<li>thetaZ: " + this.thetaZ + "</li>" +
                                                         "<li>eX: " + this.eX + "</li>" +
                                                         "<li>eY: " + this.eY + "</li>" +
                                                         "<li>eZ: " + this.eZ + "</li>";
    }
}
