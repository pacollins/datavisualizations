google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var mkdata = [['Magic Kingdom','Mainstreet U.S.A.',9],
                ['Magic Kingdom','Adventureland',14],
                ['Magic Kingdom','Frontierland',24],
                ['Magic Kingdom','Liberty Square',3],
                ['Magic Kingdom','Fantasyland',28],
                ['Magic Kingdom','Tomorrowland',48],
                ['Mainstreet U.S.A.','Pictures/View/Atmosphere',3],
                ['Mainstreet U.S.A.','Street Shows/Events',1],
                ['Mainstreet U.S.A.','Main Street Confectionery',1],
                ['Adventureland','Jungle Cruise',3],
                ['Adventureland','Pirates of the Caribbean',7],
                ['Frontierland','Splash Mountain',13],
                ['Frontierland','Big Thunder Mountain',7],
                ['Liberty Square','Haunted Mansion',3],
                ['Fantasyland','Seven Dwarfs Mine Train',5],
                ['Fantasyland','Princess Fairytale Hall',2],
                ['Fantasyland','Mickeys Philharmagic',1],
                ['Fantasyland','Peter Pans Flight',2],
                ['Fantasyland','Mickeys Philharmagic',1],
                ['Fantasyland','The Many Adventures of Winnie the Pooh',1],
                ['Fantasyland','Prince Charming Regal Carrousel',1],
                ['Fantasyland','Under The Sea - Journey of the Little Mermaid',1],
                ['Fantasyland','it’s a small world',1],
                ['Tomorrowland','Space Mountain',20],
                ['Tomorrowland','Buzz Lightyears Space Ranger Spin',5],
                ['Tomorrowland','Monsters, Inc Laugh Floor',1],
                ['Tomorrowland','Tomorrowland Speedway',1],
                ['Tomorrowland','Tomorrowland Transit Authority PeopleMover',2],
                ['Tomorrowland','Astro Orbiter',1],
                ['Tomorrowland','Carousel of Progress',2]];
  var epdata = [['EPCOT','Future World East',36],
                ['EPCOT','Future World West',27],
                ['EPCOT','World Showcase',61],
                ['Future World East','Test Track',13],
                ['Future World East','Spaceship Earth',5],
                ['Future World East','Mission: SPACE',2],
                ['Future World West','Soarin',14],
                ['Future World West','Living with the Land',2],
                ['Future World West','The Land',1],
                ['Future World West','The Seas with Nemo & Friends',1],
                ['Future World West','Imagination Pavilion',1],
                ['World Showcase','Drinks',3],
                ['World Showcase','Food',2],
                ['World Showcase','Frozen Ever After',3],
                ['World Showcase','Norway',2],
                ['World Showcase','France',4],
                ['World Showcase','Via Napoli',1],
                ['World Showcase','Japan',5],
                ['World Showcase','Morocco',1],
                ['World Showcase','Grand Fiesta Tour feature The Three Caballeros',2],
                ['World Showcase','Mexico',2],
                ['World Showcase','Rose & Crown Pub',1]];
  var hsdata = [['Hollywood Studios','Hollywood Boulevard',19],
                ['Hollywood Studios','Echo Lake',6],
                ['Hollywood Studios','Grand Avenue',3],
                ['Hollywood Studios','Pixar Place',31],
                ['Hollywood Studios','Animation Courtyard',5],
                ['Hollywood Studios','Sunset Boulevard',59],
                ['Hollywood Boulevard','Atmosphere',1],
                ['Echo Lake','Star Tours - The Adventures Continue',4],
                ['Grand Avenue','Atmosphere',1],
                ['Pixar Place','Toy Story Midway Mania',20],
                ['Animation Courtyard','Star Wars Launch Bay',2],
                ['Sunset Boulevard','Rock n Rollercoaster Starring Aerosmith',12],
                ['Sunset Boulevard','Tower of Terror',28],
                ['Sunset Boulevard','Fantasmic!',1],
                ['Sunset Boulevard','Beauty and the Beast - Live on Stage',1]];
  var akdata = [['Animal Kingdom','Oasis',1],
                ['Animal Kingdom','Discovery Island',4],
                ['Animal Kingdom','Pandora - The World of Avatar',40],
                ['Animal Kingdom','Africa',34],
                ['Animal Kingdom','Asia',28],
                ['Animal Kingdom','Dinoland U.S.A.',8]];
  parkdata = mkdata;
  var park = document.getElementById('parkselect').value;
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'From');
  data.addColumn('string', 'To');
  data.addColumn('number', 'Weight');
  if (park == "mk") {
  data.addRows(mkdata);
  } if (park == "ep") {
  data.addRows(epdata);
  } if (park == "hs") {
  data.addRows(hsdata);
  } if (park == "ak") {
  data.addRows(akdata);
  } if (park == "all") {
  parkdata = [];
  data.addRows(mkdata);
  data.addRows(epdata);
  data.addRows(hsdata);
  data.addRows(akdata);
  }

  // Sets chart options.
  var options = {
    width: 960,
    height: 600,
  };

  // Instantiates and draws our chart, passing in some options.
  var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
  chart.draw(data, options);
}
