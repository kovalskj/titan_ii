class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    transformTo2D(camera){
      var ax = this.x - camera.x;
      var ay = this.y - camera.y;
      var az = this.z - camera.z;

      var cx = Math.cos(camera.thetaX);
      var cy = Math.cos(camera.thetaY);
      var cz = Math.cos(camera.thetaZ);

      var sx = Math.sin(camera.thetaX);
      var sy = Math.sin(camera.thetaY);
      var sz = Math.sin(camera.thetaZ);

      var dx = cy * (sz*ay + cz*ax) - sy*az;
      var dy = sx * (cy*az + sy * (sz*ay + cz*ax)) + cx * (cz*ay - sz*ax);
      var dz = cx * (cy*az + sy * (sz*ay + cz*ax)) - sx * (cz*ay - sz*ax);

      var bx = dx * camera.eZ/dz + camera.eX;
      var by = dy * camera.eZ/dz + camera.eY;

      return new Point((bx * 100) + 640, (by * -100) + 360, 0);
    }
}
