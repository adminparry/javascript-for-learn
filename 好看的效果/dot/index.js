
window.onload = init;
function init() {
    
    ctxCtrl.init('dot');
  
}





//canvas dot
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dots = [],
    canvas = null,
    ctx = null,
    W = null,
    H = null,
    options = {
        cW: window.innerWidth,
        cH: window.innerHeight,
        numDot: 100,
        radDot: 3,
        dotColor: "rgba(255, 255, 255, .7)",
        lineDist: 70,
        lineColor: ["rgba(255, 255, 255, .4)", "rgba(246, 170, 207, .4)", "rgba(246, 71, 82, .4)"],
        vxRange: 1,
        vyRange: 1
    };

var Practicle = function () {
    function Practicle(color, radius) {
        _classCallCheck(this, Practicle);

        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.radius = radius;
        this.color = color;
    }

    _createClass(Practicle, [{
        key: "draw",
        value: function draw(ctx) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.arc(0, 0, this.radius, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }, {
        key: "move",
        value: function move() {
            this.x += this.vx;
            this.y += this.vy;

            //碰撞检测
            if (this.x + this.radius > W) {
                this.x = W - this.radius;
                this.vx *= -1;
            } else if (this.x - this.radius < 0) {
                this.x = this.radius;
                this.vx *= -1;
            }
            if (this.y + this.radius > H) {
                this.y = H - this.radius;
                this.vy *= -1;
            } else if (this.y - this.radius < 0) {
                this.y = this.radius;
                this.vy *= -1;
            }
        }
    }, {
        key: "drawLine",
        value: function drawLine(otherDot) {
            var dx = otherDot.x - this.x,
                dy = otherDot.y - this.y,
                dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < options.lineDist) {
                ctx.save();
                ctx.strokeStyle = options.lineColor[1];
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(otherDot.x, otherDot.y);
                ctx.closePath();
                ctx.stroke();
                ctx.restore();
            }
        }
    }]);

    return Practicle;
}();

var ctxCtrl = {
    init: function init(selector) {
        canvas = document.getElementById(selector);
        ctx = canvas.getContext('2d');
        W = options.cW;
        H = options.cH;
        canvas.width = options.cW;
        canvas.height = options.cH;
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                    return setTimeout(callback, 20);
                };
        }
        this.initDots();
        this.update();
    },
    initDots: function initDots() {
        for (var i = 0; i < options.numDot; i++) {
            var oDot = new Practicle(options.dotColor, options.radDot);
            oDot.x = parseInt(Math.random() * W.toFixed(1));
            oDot.y = parseInt(Math.random() * H.toFixed(1));
            oDot.vx = Math.random() * options.vxRange;
            oDot.vy = Math.random() * options.vyRange;
            dots.push(oDot);
        }
    },
    update: function update() {
        ctx.clearRect(0, 0, W, H);
        dots.forEach(function (item) {
            item.move();
            item.draw(ctx);
        });
        for (var i = 0; i < options.numDot - 1; i++) {
            var oDotA = dots[i];
            for (var j = i + 1; j < options.numDot; j++) {
                var oDotB = dots[j];
                oDotA.drawLine(oDotB);
            }
        }
        window.requestAnimationFrame(ctxCtrl.update);
    }
};
window.onresize = function () {
    canvas.width = W = window.innerWidth;
    canvas.height = H = window.innerHeight;
};


//move function
function lMove(obj, attrs, duration, fx, endFn) {
    var j = {};
    var oldTime = new Date().getTime();
    if(typeof fx == 'function') {
        endFn = fx;
        fx = 'linear';
    }
    else {
        fx = fx || 'linear';
    }
    for(var attr in attrs) {
        j[attr] = {};
        j[attr].startS = parseFloat(getComputedStyle(obj)[attr]);
        j[attr].move = attrs[attr] - j[attr].startS;
    }
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var kkkTime = new Date().getTime() - oldTime;
        if (kkkTime >= duration) {
            kkkTime = duration;
        }
        for(var attr in j) {
            var now = parseFloat(getComputedStyle(obj)[attr]);
            var v = Tween[fx](kkkTime, j[attr].startS, j[attr].move, duration);
            if(attr == 'opacity') {
                obj.style[attr] = v;
            } else {
                obj.style[attr] = v + 'px';
            }
        }
        if (kkkTime >= duration) {
            clearInterval(obj.timer);
            if(typeof endFn == 'function') {
                endFn && endFn();
            }
        }
    }, 20)
}
var Tween = {
    linear: function (t, b, c, d) { //匀速
        return c * t / d + b;
    },
    easeIn: function (t, b, c, d) { //加速曲线
        return c * (t /= d) * t + b;
    },
    easeOut: function (t, b, c, d) { //减速曲线
        return -c * (t /= d) * (t - 2) + b;
    }
};

