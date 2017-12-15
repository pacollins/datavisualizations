google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var mkdata = [['Magic Kingdom','Mainstreet U.S.A.',14],
                ['Magic Kingdom','Adventureland',27],
                ['Magic Kingdom','Frontierland',34],
                ['Magic Kingdom','Liberty Square',3],
                ['Magic Kingdom','Fantasyland',27],
                ['Magic Kingdom','Tomorrowland',72],
                ['Mainstreet U.S.A.','Cinderella Castle',2],
                ['Mainstreet U.S.A.','Pictures/View/Atmosphere',3],
                ['Mainstreet U.S.A.','Street Shows/Events',1],
                ['Mainstreet U.S.A.','Main Street Confectionery',1],
                ['Adventureland','Jungle Cruise',5],
                ['Adventureland','Pirates of the Caribbean',15],
                ['Frontierland','Splash Mountain',21],
                ['Frontierland','Big Thunder Mountain',8],
                ['Liberty Square','Haunted Mansion',3],
                ['Fantasyland','Be Our Guest',1],
                ['Fantasyland','Seven Dwarfs Mine Train',2],
                ['Fantasyland','Princess Fairytale Hall',2],
                ['Fantasyland','Mickeys Philharmagic',1],
                ['Fantasyland','Peter Pans Flight',4],
                ['Fantasyland','The Many Adventures of Winnie the Pooh',1],
                ['Fantasyland','Prince Charming Regal Carrousel',1],
                ['Fantasyland','Under The Sea - Journey of the Little Mermaid',1],
                ['Fantasyland','it’s a small world',1],
                ['Tomorrowland','Space Mountain',36],
                ['Tomorrowland','Buzz Lightyears Space Ranger Spin',7],
                ['Tomorrowland','Monsters, Inc Laugh Floor',1],
                ['Tomorrowland','Tomorrowland Speedway',1],
                ['Tomorrowland','Tomorrowland Transit Authority PeopleMover',3],
                ['Tomorrowland','Astro Orbiter',1],
                ['Tomorrowland','Carousel of Progress',3]];
  var epdata = [['EPCOT','Future World East',57],
                ['EPCOT','Future World West',35],
                ['EPCOT','World Showcase',93],
                ['Future World East','Test Track',20],
                ['Future World East','Spaceship Earth',8],
                ['Future World East','Mission: SPACE',3],
                ['Future World West','Soarin',19],
                ['Future World West','Living with the Land',2],
                ['Future World West','The Land',3],
                ['Future World West','The Seas with Nemo & Friends',1],
                ['Future World West','Imagination Pavilion',1],
                ['World Showcase','Food and/or Wine(Drinks)',7],
                ['World Showcase','Frozen Ever After',4],
                ['World Showcase','Norway',2],
                ['World Showcase','France',4],
                ['World Showcase','Via Napoli',1],
                ['World Showcase','Japan',9],
                ['World Showcase','Morocco',1],
                ['World Showcase','Grand Fiesta Tour feature The Three Caballeros',3],
                ['World Showcase','Mexico',3],
                ['World Showcase','Rose & Crown Pub',1],
                ['World Showcase','United Kingdom',1],
                ['World Showcase','Characters',1]];
  var hsdata = [['Hollywood Studios','Hollywood Boulevard',36],
                ['Hollywood Studios','Echo Lake',13],
                ['Hollywood Studios','Grand Avenue',3],
                ['Hollywood Studios','Pixar Place',42],
                ['Hollywood Studios','Animation Courtyard',5],
                ['Hollywood Studios','Sunset Boulevard',85],
                ['Hollywood Boulevard','Atmosphere',1],
                ['Hollywood Boulevard','Great Movie Ride',2],
                ['Echo Lake','Star Tours - The Adventures Continue',8],
                ['Grand Avenue','Atmosphere',1],
                ['Pixar Place','Toy Story Midway Mania',26],
                ['Animation Courtyard','Star Wars Launch Bay',2],
                ['Sunset Boulevard','Rock n Rollercoaster Starring Aerosmith',22],
                ['Sunset Boulevard','Tower of Terror',42],
                ['Sunset Boulevard','Fantasmic!',1],
                ['Sunset Boulevard','Beauty and the Beast - Live on Stage',1]];
  var akdata = [['Animal Kingdom','Oasis',3],
                ['Animal Kingdom','Discovery Island',4],
                ['Animal Kingdom','Pandora - The World of Avatar',65],
                ['Animal Kingdom','Africa',57],
                ['Animal Kingdom','Asia',44],
                ['Animal Kingdom','Dinoland U.S.A.',11],
                ['Oasis','Atmosphere',1],
                ['Discovery Island','Tree of Life',1],
                ['Pandora - The World of Avatar','Flight of Passage',35],
                ['Pandora - The World of Avatar','Atmosphere',2],
                ['Africa','Kilimanjaro Safaris',34],
                ['Africa','Tusker House Restaurant',1],
                ['Africa','Festival of the Lion King',1],
                ['Africa','Gorillas',1],
                ['Asia','Maharaja Jungle Trek',1],
                ['Asia','Expedition Everest - Legend of the Forbidden Mountain',29],
                ['Asia','Kali River Rapids',2],
                ['Dinoland U.S.A.','DINOSAUR',9],
                ['Dinoland U.S.A.','Primeval Whirl',1]];
  var sedata = [['r/WaltDisneyWorld','Spring',33],
                ['r/WaltDisneyWorld','Summer',35],
                ['r/WaltDisneyWorld','Fall',58],
                ['r/WaltDisneyWorld','Winter',184],
                ['Spring','Magic Kingdom',22],
                ['Spring','EPCOT',4],
                ['Spring','Hollywood Studios',3],
                ['Spring','Animal Kingdom',4],
                ['Spring','Extra Magic Hours',0],
                ['Summer','Magic Kingdom',16],
                ['Summer','EPCOT',7],
                ['Summer','Hollywood Studios',4],
                ['Summer','Animal Kingdom',4],
                ['Summer','Extra Magic Hours',4],
                ['Fall','Magic Kingdom',30],
                ['Fall','EPCOT',11],
                ['Fall','Hollywood Studios',3],
                ['Fall','Animal Kingdom',9],
                ['Fall','Extra Magic Hours',5],
                ['Winter','Magic Kingdom',32],
                ['Winter','EPCOT',15],
                ['Winter','Hollywood Studios',5],
                ['Winter','Animal Kingdom',3],
                ['Winter','Extra Magic Hours',3]];
  parkdata = mkdata;
  park = document.getElementById('parkselect').value;
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'From');
  data.addColumn('string', 'To');
  data.addColumn('number', 'Weight');
  if (park == 'se') {
  data.addRows(sedata);
  document.getElementById('data').innerHTML = sedata;
  } if (park == 'mk') {
  data.addRows(mkdata);
  document.getElementById('data').innerHTML = mkdata;
  } if (park == 'ep') {
  data.addRows(epdata);
  document.getElementById('data').innerHTML = epdata;
  } if (park == 'hs') {
  data.addRows(hsdata);
  document.getElementById('data').innerHTML = hsdata;
  } if (park == 'ak') {
  data.addRows(akdata);
  document.getElementById('data').innerHTML = akdata;
  } if (park == 'all') {
  parkdata = [];
  data.addRows(mkdata);
  data.addRows(epdata);
  data.addRows(hsdata);
  data.addRows(akdata);
  document.getElementById('data').innerHTML = mkdata + epdata + hsdata + akdata;
  }

  // Sets chart options.
  var options = {

  };

  // Instantiates and draws our chart, passing in some options.
  var chart = new google.visualization.Sankey(document.getElementById('sankey'));
  chart.draw(data, options);

  var svgText = document.getElementById("sankey").getElementsByTagName("svg")[0].outerHTML;
  var canvas = document.getElementById("canvas");
  var ctxt = canvas.getContext("2d");

  function drawInlineSVG(svgElement, ctx, callback){
  var svgURL = new XMLSerializer().serializeToString(svgElement);
  img = new Image();
  img.onload = function(){
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(this,0,0);
    callback();
    }
  img.src = 'data:image/svg+xml; charset=utf8, '+encodeURIComponent(svgURL);
  }

//usage :
drawInlineSVG(document.querySelector('svg'), ctxt, function(){console.log(canvas.toDataURL())})

}

window.onload = function(){

      var ctx = canvas.getContext('2d');
      trackTransforms(ctx);

  function redraw(){

        // Clear the entire canvas
        var p1 = ctx.transformedPoint(0,0);
        var p2 = ctx.transformedPoint(canvas.width,canvas.height);
        ctx.clearRect(p1.x,p1.y,p2.x-p1.x,p2.y-p1.y);

        ctx.save();
        ctx.setTransform(1,0,0,1,0,0);
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.restore();

        ctx.drawImage(img,0,0);

      }
      redraw();

    var lastX=canvas.width/2, lastY=canvas.height/2;

    var dragStart,dragged;

    canvas.addEventListener('mousedown',function(evt){
        document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
        lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
        lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
        dragStart = ctx.transformedPoint(lastX,lastY);
        dragged = false;
    },false);

    canvas.addEventListener('mousemove',function(evt){
        lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
        lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
        dragged = true;
        if (dragStart){
          var pt = ctx.transformedPoint(lastX,lastY);
          ctx.translate(pt.x-dragStart.x,pt.y-dragStart.y);
          redraw();
              }
    },false);

    canvas.addEventListener('mouseup',function(evt){
        dragStart = null;
        if (!dragged) zoom(evt.shiftKey ? -1 : 1 );
    },false);

    var scaleFactor = 1.1;

    var zoom = function(clicks){
        var pt = ctx.transformedPoint(lastX,lastY);
        ctx.translate(pt.x,pt.y);
        var factor = Math.pow(scaleFactor,clicks);
        ctx.scale(factor,factor);
        ctx.translate(-pt.x,-pt.y);
        redraw();
    }

    var handleScroll = function(evt){
        var delta = evt.wheelDelta ? evt.wheelDelta/40 : evt.detail ? -evt.detail : 0;
        if (delta) zoom(delta);
        return evt.preventDefault() && false;
    };

    canvas.addEventListener('DOMMouseScroll',handleScroll,false);
    canvas.addEventListener('mousewheel',handleScroll,false);
};

// Adds ctx.getTransform() - returns an SVGMatrix
// Adds ctx.transformedPoint(x,y) - returns an SVGPoint
function trackTransforms(ctx){
    var svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
    var xform = svg.createSVGMatrix();
    ctx.getTransform = function(){ return xform; };

    var savedTransforms = [];
    var save = ctx.save;
    ctx.save = function(){
        savedTransforms.push(xform.translate(0,0));
        return save.call(ctx);
    };

    var restore = ctx.restore;
    ctx.restore = function(){
      xform = savedTransforms.pop();
      return restore.call(ctx);
        };

    var scale = ctx.scale;
    ctx.scale = function(sx,sy){
      xform = xform.scaleNonUniform(sx,sy);
      return scale.call(ctx,sx,sy);
        };

    var rotate = ctx.rotate;
    ctx.rotate = function(radians){
        xform = xform.rotate(radians*180/Math.PI);
        return rotate.call(ctx,radians);
    };

    var translate = ctx.translate;
    ctx.translate = function(dx,dy){
        xform = xform.translate(dx,dy);
        return translate.call(ctx,dx,dy);
    };

    var transform = ctx.transform;
    ctx.transform = function(a,b,c,d,e,f){
        var m2 = svg.createSVGMatrix();
        m2.a=a; m2.b=b; m2.c=c; m2.d=d; m2.e=e; m2.f=f;
        xform = xform.multiply(m2);
        return transform.call(ctx,a,b,c,d,e,f);
    };

    var setTransform = ctx.setTransform;
    ctx.setTransform = function(a,b,c,d,e,f){
        xform.a = a;
        xform.b = b;
        xform.c = c;
        xform.d = d;
        xform.e = e;
        xform.f = f;
        return setTransform.call(ctx,a,b,c,d,e,f);
    };

    var pt  = svg.createSVGPoint();
    ctx.transformedPoint = function(x,y){
        pt.x=x; pt.y=y;
        return pt.matrixTransform(xform.inverse());
    }
}
