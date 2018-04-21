/*
# 生成项目进度svg图表
*/

(function() {
  window.Progress = (function() {
    Progress.prototype.rateColor = ["#e52012", "#fc6e0f", "#f5c400", "#91c46b"];

    function Progress(config) {
      var circle, r, width;
      this.config = config;
      width = 2 * this.config.rx;
      r = Raphael(this.config.el, width, width);
      
      if (this.config.rate < 1) {
        circle = r.circle(this.config.rx, this.config.ry, this.config.radius);
        circle.attr({
          fill: "#fff",
          stroke: "#eee",
          "stroke-width": 2 * this.config.strokeWidth
        });
        r.path(this.calculatePath(this.config.rx, this.config.rate)).attr({
          fill: this.rateColor[Math.floor(this.config.rate / 0.25)],
          stroke: "none"
        });
        r.circle(this.config.rx, this.config.ry, this.config.radius).attr({
          fill: "#fff",
          stroke: "none"
        });
      } else {
        circle = r.circle(this.config.rx, this.config.ry, this.config.rx);
        circle.attr({
          fill: this.rateColor[3],
          stroke: "none"
        });
        r.circle(this.config.rx, this.config.ry, this.config.rx - this.config.strokeWidth).attr({
          fill: "#fff",
          stroke: "none"
        });
      }
    }

    Progress.prototype.calculatePath = function(radius, rate) {
      var largeArcFlag, theta, x, y;
      largeArcFlag = 0;
      theta = rate * 360;
      if (theta > 180) {
        largeArcFlag = 1;
      }
      if (theta <= 90) {
        theta = 90 - theta;
      } else {
        theta = 450 - theta;
      }
      theta = theta * Math.PI / 180;
      x = radius - radius * Math.sin(theta);
      y = radius + radius * Math.cos(theta);
      return "M" + radius + "," + radius + " L" + radius + ", 0 A" + radius + ", " + radius + ", 0 , " + largeArcFlag + ", 1, " + y + ", " + x + " z";
    };

    return Progress;

  })();

}).call(this);
