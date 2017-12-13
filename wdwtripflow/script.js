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
  var epdata = [['EPCOT','Future World East',34],
                ['EPCOT','Future World West',25],
                ['EPCOT','World Showcase',56]];
  var hsdata = [['Hollywood Studios','Hollywood Boulevard',28],
                ['Hollywood Studios','Echo Lake',5],
                ['Hollywood Studios','Grand Avenue',3],
                ['Hollywood Studios','Commissary Lane',1],
                ['Hollywood Studios','Pixar Place',32],
                ['Hollywood Studios','Animation Courtyard',5],
                ['Hollywood Studios','Sunset Boulevard',42]];
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
