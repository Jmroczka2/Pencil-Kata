class Pencil {
  constructor(point, length) {
    this.initialPoint = point;
    this.point = point;
    this.initialLength = length;
    this.length = length;
  }

  sharpen() {
    if (this.length > 0) {
      this.point = this.initialPoint;
      this.length -= 1;
    }
    return this.point;
  }
}

module.exports = Pencil;
