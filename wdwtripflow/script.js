google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var mkdata = [['Magic Kingdom','Mainstreet U.S.A.',14],
                ['Magic Kingdom','Adventureland',27],
                ['Magic Kingdom','Frontierland',33],
                ['Magic Kingdom','Liberty Square',3],
                ['Magic Kingdom','Fantasyland',27],
                ['Magic Kingdom','Tomorrowland',69],
                ['Mainstreet U.S.A.','Cinderella Castle',2],
                ['Mainstreet U.S.A.','Pictures/View/Atmosphere',3],
                ['Mainstreet U.S.A.','Street Shows/Events',1],
                ['Mainstreet U.S.A.','Main Street Confectionery',1],
                ['Adventureland','Jungle Cruise',5],
                ['Adventureland','Pirates of the Caribbean',15],
                ['Frontierland','Splash Mountain',20],
                ['Frontierland','Big Thunder Mountain',8],
                ['Liberty Square','Haunted Mansion',3],
                ['Fantasyland','Be Our Guest',1]
                ['Fantasyland','Seven Dwarfs Mine Train',2],
                ['Fantasyland','Princess Fairytale Hall',2],
                ['Fantasyland','Mickeys Philharmagic',1],
                ['Fantasyland','Peter Pans Flight',4],
                ['Fantasyland','The Many Adventures of Winnie the Pooh',1],
                ['Fantasyland','Prince Charming Regal Carrousel',1],
                ['Fantasyland','Under The Sea - Journey of the Little Mermaid',1],
                ['Fantasyland','it’s a small world',1],
                ['Tomorrowland','Space Mountain',35],
                ['Tomorrowland','Buzz Lightyears Space Ranger Spin',6],
                ['Tomorrowland','Monsters, Inc Laugh Floor',1],
                ['Tomorrowland','Tomorrowland Speedway',1],
                ['Tomorrowland','Tomorrowland Transit Authority PeopleMover',3],
                ['Tomorrowland','Astro Orbiter',1],
                ['Tomorrowland','Carousel of Progress',3]];
  var epdata = [['EPCOT','Future World East',56],
                ['EPCOT','Future World West',35],
                ['EPCOT','World Showcase',90],
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
                ['World Showcase','Mexico',2],
                ['World Showcase','Rose & Crown Pub',1],
                ['World Showcase','United Kingdom',1],
                ['World Showcase','Characters',1]];
  var hsdata = [['Hollywood Studios','Hollywood Boulevard',35],
                ['Hollywood Studios','Echo Lake',13],
                ['Hollywood Studios','Grand Avenue',3],
                ['Hollywood Studios','Pixar Place',41],
                ['Hollywood Studios','Animation Courtyard',5],
                ['Hollywood Studios','Sunset Boulevard',83],
                ['Hollywood Boulevard','Atmosphere',1],
                ['Hollywood Boulevard','Great Movie Ride',2],
                ['Echo Lake','Star Tours - The Adventures Continue',8],
                ['Grand Avenue','Atmosphere',1],
                ['Pixar Place','Toy Story Midway Mania',25],
                ['Animation Courtyard','Star Wars Launch Bay',2],
                ['Sunset Boulevard','Rock n Rollercoaster Starring Aerosmith',21],
                ['Sunset Boulevard','Tower of Terror',42],
                ['Sunset Boulevard','Fantasmic!',1],
                ['Sunset Boulevard','Beauty and the Beast - Live on Stage',1]];
  var akdata = [['Animal Kingdom','Oasis',3],
                ['Animal Kingdom','Discovery Island',4],
                ['Animal Kingdom','Pandora - The World of Avatar',65],
                ['Animal Kingdom','Africa',56],
                ['Animal Kingdom','Asia',42],
                ['Animal Kingdom','Dinoland U.S.A.',2],
                ['Oasis','Atmosphere',1],
                ['Discovery Island','Tree of Life',1],
                ['Pandora - The World of Avatar','Flight of Passage',35],
                ['Pandora - The World of Avatar','Atmosphere',2],
                ['Africa','Kilimanjaro Safaris',34],
                ['Africa','Tusker House Restaurant',1],
                ['Africa','Festival of the Lion King',1],
                ['Africa','Gorillas',1],
                ['Asia','Maharaja Jungle Trek',1],
                ['Asia','Expedition Everest - Legend of the Forbidden Mountain',28],
                ['Asia','Kali River Rapids',1],
                ['Dinoland U.S.A.','DINOSAUR',8],
                ['Dinoland U.S.A.','Primeval Whirl',1]];
  parkdata = mkdata;
  park = document.getElementById('parkselect').value;
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'From');
  data.addColumn('string', 'To');
  data.addColumn('number', 'Weight');
  if (park == 'mk') {
  data.addRows(mkdata);
  } if (park == 'ep') {
  data.addRows(epdata);
  } if (park == 'hs') {
  data.addRows(hsdata);
  } if (park == 'ak') {
  data.addRows(akdata);
  } if (park == 'all') {
  parkdata = [];
  data.addRows(mkdata);
  data.addRows(epdata);
  data.addRows(hsdata);
  data.addRows(akdata);
  }

  // Sets chart options.
  var options = {

  };

  // Instantiates and draws our chart, passing in some options.
  var chart = new google.visualization.Sankey(document.getElementById('sankey'));
  chart.draw(data, options);
}
