
var totalShortDistance = 0;
var totalOtherRoutesDistance = 0;

window.onload = function () {
  const start_select = document.getElementById("start");
  const end_select = document.getElementById("end");
  Object.keys(nodes).forEach((key) => {
    let option1 = document.createElement("option");
    option1.text = key;
    option1.value = key;
    start_select.add(option1);
    let option2 = document.createElement("option");
    option2.text = key;
    option2.value = key;
    end_select.add(option2);
  });

document
    .getElementById("start1")
    .addEventListener("change", function () {
      const selectedValue = this.value;
      start_select.value = selectedValue;
    });
  document.getElementById("end1").addEventListener("change", function () {
    const selectedValue = this.value;
    end_select.value = selectedValue;
  });
};

function selectDropdownOption(inputId, selectId) {
  const input = document.getElementById(inputId).value.trim();
  const select = document.getElementById(selectId);
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].value === input) {
      select.selectedIndex = i;
      break;
    }
  }
}

// create location code:
// use this if I want to rename the location
var sta = "Starmall - Alabang";
var fes = "Festival Mall";
var atc = "ATC Mall"; // bfrda
var sou = "Southmall";
var col = "Colours Mall Moonwalk"; // moonwalk public market
var uni = "Perpetual Help Medical Center";
var cit = "City Hall Las Pinas";
var max = "Max Restaurant - Zapote"; // new max
var coa = "Costal Mall";
var sho = "Shopwise Sucat"; // ama
var sms = "SM Sucat"; // sm sucat
var she = "Shell Gas Station - Sucat Road"; // Shell Sucat Road
var bfr = "BF Ressort Skillets & Grill"; // (new) from amalibbee-pillar go to BF Resort  to Starmall
var ama = "Amaia Steps Alabang"; // pillar village
var lan = "Landers"; // (new) from amalibee-pillar to Landers
var jol = "Jollibee Molino";
var sss = "Sample";

// User this if i want to change the coordinates x and y (circle x,y pos)
var Starmallx = 531;
var Starmally = 40;
var FestivalMallx = 431;
var FestivalMally = 155;
var ATCx = 320;
var ATCy = 210;
var Southmallx = 215;
var Southmally = 300;
var Shox = 240;
var Shoy = 520;
var AmiaStepsPillarx = 565;
var AmiaStepsPillary = 266;
var Bfx = 715;
var Bfy = 106;
var Landersx = 1000;
var Landersy = 216;
var Coloursx = 395;
var Coloursy = 370;
var SmSucatx = 85;
var SmSucaty = 370;
var ShellStationSucatx = 71;
var ShellStationSucaty = 83;
var UniversityofPerpetualHelpx = 508;
var UniversityofPerpetualHelpy = 470;
var CityHallx = 616;
var CityHally = 575;
var MaxZapotex = 730;
var MaxZapotey = 680;
var CostalMallx = 340;
var CostalMally = 630;
var JollibeeMolinox = 950;
var JollibeeMolinoy = 500;
var Samplex = 1000;
var Sampley = 800;

// distance configuration
var starmall_festival = 1;
var festival_atc = 1;
var atc_southmall = 1;
var southmall_colours = 1;
var colours_universitperpetualhelp = 1;
var universitperpetualhelp_cityhalllaspinas = 1;
var cityhalllaspinas_maxzapote = 1;
var colours_amaia = 1;
var amai_bfresort = 1;
var bfresort_startmall = 1;
var bfresort_landers = 1;
var landers_jolibeemolino = 1;
var jolibeemolino_colours = 1;
var startmall_shellgasstationsucat = 1;
var shellgasstationsucat_smsucat = 1;
var smsucat_shopwise = 2;
var shopwise_coastalmall = 2;
var coastalmall_maxzapote = 1;
var jolibeemolino_sample = 1;
var sample_maxzapote = 1;

// define distance betwen locations
let connections = {
  [sta]: {
    [fes]: starmall_festival,
    [she]: startmall_shellgasstationsucat,
  },
  [fes]: { [atc]: festival_atc },
  [atc]: { [sou]: atc_southmall },
  [sou]: { [col]: southmall_colours },
  [col]: {
    [uni]: colours_universitperpetualhelp,
    [ama]: colours_amaia,
    [jol]: jolibeemolino_colours,
  },
  [uni]: { [cit]: universitperpetualhelp_cityhalllaspinas },
  [cit]: { [max]: cityhalllaspinas_maxzapote },
  [max]: { [coa]: coastalmall_maxzapote, [sss]: sample_maxzapote},
  [ama]: { [bfr]: amai_bfresort },
  [bfr]: { [lan]: bfresort_landers, [sta]: bfresort_startmall },
  [lan]: { [jol]: landers_jolibeemolino },
  [she]: { [sms]: shellgasstationsucat_smsucat },
  [sms]: { [sho]: smsucat_shopwise },
  [sho]: { [coa]: shopwise_coastalmall },
  [coa]: { [max]: coastalmall_maxzapote },
  [jol]: { [sss]: jolibeemolino_sample, },
};

// define the nodes where I applied the cooordinates  ****
var nodes = {
  [sta]: { x: Starmallx, y: Starmally }, // 0
  [fes]: { x: FestivalMallx, y: FestivalMally }, // 1
  [atc]: { x: ATCx, y: ATCy }, // 2
  [sou]: { x: Southmallx, y: Southmally }, // 3
  [col]: { x: Coloursx, y: Coloursy }, // 4
  [uni]: { x: UniversityofPerpetualHelpx, y: UniversityofPerpetualHelpy }, // 5
  [cit]: { x: CityHallx, y: CityHally }, // 6
  [max]: { x: MaxZapotex, y: MaxZapotey }, // 7
  [coa]: { x: CostalMallx, y: CostalMally }, // 8
  [sho]: { x: Shox, y: Shoy }, // 9
  [sms]: { x: SmSucatx, y: SmSucaty }, //10
  [she]: { x: ShellStationSucatx, y: ShellStationSucaty }, // 11
  [bfr]: { x: Bfx, y: Bfy }, // 12
  [ama]: { x: AmiaStepsPillarx, y: AmiaStepsPillary }, // 13
  [lan]: { x: Landersx, y: Landersy }, // 14
  [jol]: { x: JollibeeMolinox, y: JollibeeMolinoy }, // 15
  [sss]: { x: Samplex, y: Sampley}, //16
};

var svg = d3.select("svg");

let INFINITY = 1 / 0;

// once i added a new location then I will need to manually adjust this
showAllLines();

let locations = [
  [
    Infinity,
    3,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    2,
    1,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
  ], // "Starmall" 0

  [
    1,
    Infinity,
    1,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
  ], //Festival Mall" 1

  [
    Infinity,
    3,
    Infinity,
    1,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
  ], // ATC Las Pinas" 2

  [
    Infinity,
    Infinity,
    1,
    Infinity,
    1,  
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
  ], // Southmall" 3

  [
    Infinity,
    Infinity,
    Infinity,
    1,
    Infinity,
    1,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    3,
    Infinity,
    3,
    Infinity,
  ], // Colours" 4

  [
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    1,
    Infinity,
    1,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
  ], // Uni" 5

  [
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    1,
    Infinity,
    1,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
  ], // City hall las pinas" 6

  [
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    1,
    Infinity,
    1,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    1,
  ], // MAX  7

  [
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    1,
    Infinity,
    3,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
  ], //  Costal 8 - 2

  [
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    3,
    Infinity,
    3,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
  ], // " SHOWP WISE" 9 - 2

  [
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    1,
    Infinity,
    1,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
  ], // SM SUCAT 10 -2

  [
    1,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    1,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
  ], // "Shell Sucat" 11 - 2

  [
    3,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    1,
    1,
    Infinity,
    Infinity,
  ], // BF" Stop 12 - 3

  [
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    3,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    1,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
  ], // "Amaia" 13 - 3

  [
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    1,
    Infinity,
    Infinity,
    1,
    Infinity,
  ], // "Landers" 14 - 3

  [
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    3,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    1,
    Infinity,
    1,
  ], // " Jolibee Molino" 15 - 3

  [
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    1,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    Infinity,
    1,
  ], // "Sample" 16 - 3
];

function constructPath(shortestPathInfo, endVertex) {
  let path = [];
  while (endVertex != shortestPathInfo.startVertex) {
    path.unshift(endVertex);
    endVertex = shortestPathInfo.predecessors[endVertex];
  }
  return path;
}

// Helper function to get index of a node name
const getIndex = (name) => {
  return Object.keys(nodes).indexOf(name);
};

// Helper function to get the node name by index
const getNodeName = (index) => {
  return Object.keys(nodes)[index];
};

// bagong gawa
function RefrshSgv() {
  svg
    .selectAll("circle")
    .data(Object.entries(nodes))
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("r", 20)
    .attr("cx", (d) => d[1].x)
    .attr("cy", (d) => d[1].y);

  // this code writes the location name of each circles
  svg
    .selectAll("text")
    .data(Object.entries(nodes))
    .enter()
    .append("text")
    .attr("x", (d) => d[1].x - 10)
    .attr("y", (d) => d[1].y + 5)
    .text((d) => d[0]);
}

// if the user clicks Find Routes button then this function will be triggered
const findPath = () => {
  reset();
  let start = document.querySelector("#start").value;
  let end = document.querySelector("#end").value;

  if (locationsList.includes(start) && locationsList.includes(end)) {
  //alert('Both locations are valid!');
  // Perform your route finding logic here
} else {
  alert('One or both of the locations are invalid. Please check your input.');
  return
}

  // let shortestPathInfo = shortestPath(locations, 12, getIndex(start)); // Changed 10 to 12
  let shortestPathInfo = shortestPath(
    locations,
    Object.keys(nodes).length,
    getIndex(start)
  );
  let route = constructPath(shortestPathInfo, getIndex(end));
  route.unshift(getIndex(start));

  svg
    .selectAll("circle.node")
    .attr("class", (d, i) =>
      i === getIndex(start)
        ? "start"
        : i === getIndex(end)
        ? "end"
        : "node"
    );

  // short routes
  let lineGenerator = d3
    .line()
    .x((d) => nodes[getNodeName(d)].x)
    .y((d) => nodes[getNodeName(d)].y);
  svg
    .append("path")
    .attr("d", lineGenerator(route))
    .style("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", 11);

  // show tool tip
  showStartToolTip();
  showEndToolTip();

  // calculate short route distance
  // totalShortDistance = this.CalculateShortDistance();
  // document.getElementById("total_distance").innerHTML = "<span style='color:red; font-weight: bolder'>" + "Shortest Route: "
  //     + totalShortDistance + " km ";
  this.Calculate();

  // other routes
  showAllLines();

  // calculate and highlights other routes based on start and end locations
  createOtherRoutesLinesAndCalculateTheTotalDistance();
};

//===========================================================================================
// alternate route
// this function creates long route lines with colors as their legends or indicators.
// this function also calculates the distances of longer routes.
function createOtherRoutesLinesAndCalculateTheTotalDistance() {
  const start = document.querySelector("#start").value;
  const end = document.querySelector("#end").value;
  let clr = "blue";
  document.getElementById("other_total_distance").innerHTML = "";

  var tot = 0;

  switch (true) {
    // From Starmall
    case (start === sta && end === fes) || (start === fes && end === sta): // Starmall to Festival Mall
      tot =
        bfresort_startmall +
        amai_bfresort +
        colours_amaia +
        southmall_colours +
        atc_southmall +
        festival_atc;
      lineHelper([sta, bfr, ama, col, sou, atc, fes], bfr, tot);
      break;

    case (start === sta && end === atc) || (start === atc && end === sta):
      tot =
        bfresort_startmall +
        amai_bfresort +
        colours_amaia +
        southmall_colours +
        atc_southmall;
      lineHelper([sta, bfr, ama, col, sou, atc], bfr, tot);
      break;

    case (start === sta && end === sou) || (start === sou && end === sta):
      tot =
        bfresort_startmall +
        amai_bfresort +
        colours_amaia +
        southmall_colours;
      lineHelper([sta, bfr, ama, col, sou], bfr, tot);
      break;

    case (start === sta && end === col) || (start === col && end === sta):
      tot = starmall_festival + festival_atc + atc_southmall + southmall_colours;
      lineHelper([sta, fes, atc, sou, col], fes, tot);
      tot =
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp;
      lineHelper([sta, she, sms, sho, coa, max, cit, uni, col], she, tot);
      break;

    case (start === sta && end === uni) || (start === uni && end === sta):
      tot =
        starmall_festival +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas;
      lineHelper([sta, she, sms, sho, coa, max, cit, uni], she, tot);
      break;

    case (start === sta && end === cit) || (start === cit && end === sta):
      tot =
        starmall_festival +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote;
      lineHelper([sta, she, sms, sho, coa, max, cit], she, tot);
      break;

    case (start === sta && end === max) || (start === max && end === sta):
      tot =
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote;
      lineHelper([sta, she, sms, sho, coa, max], she, tot);
      break;

    case (start === sta && end === coa) || (start === coa && end === sta):
      tot =
        starmall_festival +
        festival_atc +
        atc_southmall +
        southmall_colours +
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote;
      lineHelper([sta, fes, atc, sou, col, uni, cit, max, coa], fes, tot);
      break;

    case (start === sta && end === sho) || (start === sho && end === sta):
      tot =
        starmall_festival +
        festival_atc +
        atc_southmall +
        southmall_colours +
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall;
      lineHelper(
        [sta, fes, atc, sou, col, uni, cit, max, coa, sho],
        fes,
        tot
      );
      break;

    case (start === sta && end === sms) || (start === sms && end === sta):
      tot =
        starmall_festival +
        festival_atc +
        atc_southmall +
        southmall_colours +
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise;
      lineHelper(
        [sta, fes, atc, sou, col, uni, cit, max, coa, sho, sms],
        fes,
        tot
      );
      break;

    case (start === sta && end === she) || (start === she && end === sta):
      tot =
        starmall_festival +
        festival_atc +
        atc_southmall +
        southmall_colours +
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat;
      lineHelper(
        [sta, fes, atc, sou, col, uni, cit, max, coa, sho, sms, she],
        fes,
        tot
      );
      break;

    case (start === sta && end === bfr) || (start === bfr && end === sta):
      tot =
        starmall_festival +
        festival_atc +
        atc_southmall +
        southmall_colours +
        colours_amaia +
        amai_bfresort;
      lineHelper([sta, fes, atc, sou, col, ama, bfr], fes, tot);
      break;

    case (start === sta && end === ama) || (start === ama && end === sta):
      tot =
        starmall_festival +
        festival_atc +
        atc_southmall +
        southmall_colours +
        colours_amaia;
      lineHelper([sta, fes, atc, sou, col, ama], fes, tot);
      break;

    case (start === sta && end === lan) || (start === lan && end === sta):
      tot =
        starmall_festival +
        festival_atc +
        atc_southmall +
        southmall_colours +
        jolibeemolino_colours +
        landers_jolibeemolino;
      lineHelper([sta, fes, atc, sou, col, jol, lan], fes, tot);
      break;

    case (start === sta && end === jol) || (start === jol && end === sta):
      tot =
        starmall_festival +
        festival_atc +
        atc_southmall +
        southmall_colours +
        jolibeemolino_colours;
      lineHelper([sta, fes, atc, sou, col, jol], fes, tot);
      break;

    // From Festival Mall

    case (start === fes && end === atc) || (start === atc && end === fes):
      tot =
        starmall_festival +
        bfresort_startmall +
        amai_bfresort +
        colours_amaia +
        southmall_colours +
        atc_southmall;
      lineHelper([fes, sta, bfr, ama, col, sou, atc], sta, tot);
      break;

    case (start === fes && end === sou) || (start === sou && end === fes):
      tot =
        starmall_festival +
        bfresort_startmall +
        amai_bfresort +
        colours_amaia +
        southmall_colours;
      lineHelper([fes, sta, bfr, ama, col, sou], sta, tot);
      break;

    case (start === fes && end === col) || (start === col && end === fes):
      tot =
        starmall_festival +
        bfresort_startmall +
        amai_bfresort +
        colours_amaia;
      lineHelper([fes, sta, bfr, ama, col], sta, tot);
      break;

    case (start === fes && end === uni) || (start === uni && end === fes):
      tot =
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas;
      lineHelper([fes, sta, she, sms, sho, coa, max, cit, uni], sta, tot);
      break;

    case (start === fes && end === cit) || (start === cit && end === fes):
      tot =
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote;
      lineHelper([fes, sta, she, sms, sho, coa, max, cit], sta, tot);
      break;

    case (start === fes && end === max) || (start === max && end === fes):
      tot =
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote;
      lineHelper([fes, sta, she, sms, sho, coa, max], sta, tot);
      break;

    case (start === fes && end === coa) || (start === coa && end === fes):
      tot =
        festival_atc +
        atc_southmall +
        southmall_colours +
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote;
      lineHelper([fes, atc, sou, col, uni, cit, max, coa], atc, tot);
      break;

    case (start === fes && end === sho) || (start === sho && end === fes):
      tot =
        festival_atc +
        atc_southmall +
        southmall_colours +
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall;
      lineHelper([fes, atc, sou, col, uni, cit, max, coa, sho], atc, tot);
      break;

    case (start === fes && end === sms) || (start === sms && end === fes):
      tot =
        festival_atc +
        atc_southmall +
        southmall_colours +
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise;
      lineHelper(
        [fes, atc, sou, col, uni, cit, max, coa, sho, sms],
        atc,
        tot
      );
      break;

    case (start === fes && end === she) || (start === she && end === fes):
      tot =
        festival_atc +
        atc_southmall +
        southmall_colours +
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat;
      lineHelper(
        [fes, atc, sou, col, uni, cit, max, coa, sho, sms, she],
        atc,
        tot
      );
      break;

    case (start === fes && end === bfr) || (start === bfr && end === fes):
      tot =
        festival_atc +
        atc_southmall +
        southmall_colours +
        colours_amaia +
        amai_bfresort;
      lineHelper([fes, atc, sou, col, ama, bfr], atc, tot);
      break;

    case (start === fes && end === ama) || (start === ama && end === fes):
      tot =
        festival_atc +
        atc_southmall +
        southmall_colours +
        colours_amaia;
      lineHelper([fes, atc, sou, col, ama], atc, tot);
      break;

    case (start === fes && end === lan) || (start === lan && end === fes):
      tot =
        festival_atc +
        atc_southmall +
        southmall_colours +
        jolibeemolino_colours +
        landers_jolibeemolino;
      lineHelper([fes, atc, sou, col, jol, lan], atc, tot);
      break;

    case (start === fes && end === jol) || (start === jol && end === fes):
      tot =
      festival_atc +
        atc_southmall +
        southmall_colours +
        jolibeemolino_colours;
      lineHelper([fes, atc, sou, col, jol], atc, tot);
      break;

    // From ATC

    case (start === atc && end === sou) || (start === sou && end === atc):
      tot =
        festival_atc +
        starmall_festival +
        bfresort_startmall +
        amai_bfresort +
        colours_amaia +
        southmall_colours;
      lineHelper([atc, fes, sta, bfr, ama, col, sou], fes, tot);
      break;

    case (start === atc && end === col) || (start === col && end === atc):
      tot =
        festival_atc +
        starmall_festival +
        bfresort_startmall +
        amai_bfresort +
        colours_amaia;
      lineHelper([atc, fes, sta, bfr, ama, col], fes, tot);
      break;

    case (start === atc && end === uni) || (start === uni && end === atc):
      tot =
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas;
      lineHelper(
        [atc, fes, sta, she, sms, sho, coa, max, cit, uni],
        fes,
        tot
      );
      break;

    case (start === atc && end === cit) || (start === cit && end === atc):
      tot =
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote;
      lineHelper([atc, fes, sta, she, sms, sho, coa, max, cit], fes, tot);
      break;

    case (start === atc && end === max) || (start === max && end === atc):
      tot =
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote;
      lineHelper([atc, fes, sta, she, sms, sho, coa, max], fes, tot);
      break;

    case (start === atc && end === coa) || (start === coa && end === atc):
      tot =
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall;
      lineHelper([atc, fes, sta, she, sms, sho, coa], fes, tot);
      break;

    case (start === atc && end === sho) || (start === sho && end === atc):
      tot =
        atc_southmall +
        southmall_colours +
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall;
      lineHelper([atc, sou, col, uni, cit, max, coa, sho], sou, tot);
      break;

    case (start === atc && end === sms) || (start === sms && end === atc):
      tot =
        atc_southmall +
        southmall_colours +
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise;
      lineHelper([atc, sou, col, uni, cit, max, coa, sho, sms], sou, tot);
      break;

    case (start === atc && end === she) || (start === she && end === atc):
      tot =
        atc_southmall +
        southmall_colours +
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat;
      lineHelper([atc, sou, col, uni, cit, max, coa, sho, sms, she], sou, tot);
      break;

    case (start === atc && end === bfr) || (start === bfr && end === atc):
      tot =
        atc_southmall + southmall_colours + colours_amaia + amai_bfresort;
      lineHelper([atc, sou, col, ama, bfr], sou, tot);
      break;

    case (start === atc && end === ama) || (start === ama && end === atc):
      tot =
        festival_atc +
        starmall_festival +
        bfresort_startmall +
        amai_bfresort;
      lineHelper([atc, fes, sta, bfr, ama], fes, tot);
      break;

    case (start === atc && end === lan) || (start === lan && end === atc):
      tot =
        atc_southmall +
        southmall_colours +
        jolibeemolino_colours +
        landers_jolibeemolino;
      lineHelper([atc, sou, col, jol, lan], sou, tot);
      break;

    case (start === atc && end === jol) || (start === jol && end === atc):
      tot =
        festival_atc +
        starmall_festival +
        bfresort_startmall +
        bfresort_landers +
        landers_jolibeemolino;
      lineHelper([atc, fes, sta, bfr, lan, jol], fes, tot);
      break;

    // From Southmall

    case (start === sou && end === col) || (start === col && end === sou):
      tot =
        atc_southmall +
        festival_atc +
        starmall_festival +
        bfresort_startmall +
        amai_bfresort +
        colours_amaia;
      lineHelper([sou, atc, fes, sta, bfr, ama, col], atc, tot);
      break;

    case (start === sou && end === uni) || (start === uni && end === sou):
      tot =
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas;
      lineHelper(
        [sou, atc, fes, sta, she, sms, sho, coa, max, cit, uni],
        atc,
        tot
      );
      break;

    case (start === sou && end === cit) || (start === cit && end === sou):
      tot =
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote;
      lineHelper(
        [sou, atc, fes, sta, she, sms, sho, coa, max, cit],
        atc,
        tot
      );
      break;

    case (start === sou && end === max) || (start === max && end === sou):
      tot =
        atc_southmall +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote;
      lineHelper([sou, atc, fes, sta, she, sms, sho, coa, max], atc, tot);
      break;

    case (start === sou && end === coa) || (start === coa && end === sou):
      tot =
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall;
      lineHelper([sou, atc, fes, sta, she, sms, sho, coa], atc, tot);
      break;

    case (start === sou && end === sho) || (start === sho && end === sou):
      tot =
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise;
      lineHelper([sou, atc, fes, sta, she, sms, sho], atc, tot);
      break;

    case (start === sou && end === sms) || (start === sms && end === sou):
      tot =
        southmall_colours +
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise;
      lineHelper([sou, col, uni, cit, max, coa, sho, sms], col, tot);
      break;

    case (start === sou && end === she) || (start === she && end === sou):
      tot =
        southmall_colours +
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat;
      lineHelper([sou, col, uni, cit, max, coa, sho, sms, she], col, tot);
      break;

    case (start === sou && end === bfr) || (start === bfr && end === sou):
      tot =
        atc_southmall +
        festival_atc +
        starmall_festival +
        bfresort_startmall;
      lineHelper([sou, atc, fes, sta, bfr], atc, tot);
      break;

    case (start === sou && end === ama) || (start === ama && end === sou):
      tot =
        atc_southmall +
        festival_atc +
        starmall_festival +
        bfresort_startmall +
        amai_bfresort;
      lineHelper([sou, atc, fes, sta, bfr, ama], atc, tot);
      break;

    case (start === sou && end === lan) || (start === lan && end === sou):
      tot =
        atc_southmall +
        festival_atc +
        starmall_festival +
        bfresort_startmall +
        bfresort_landers;
      lineHelper([sou, atc, fes, sta, bfr, lan], atc, tot);
      break;

    case (start === sou && end === jol) || (start === jol && end === sou):
      tot =
        atc_southmall +
        festival_atc +
        starmall_festival +
        bfresort_startmall +
        bfresort_landers +
        landers_jolibeemolino;
      lineHelper([sou, atc, fes, sta, bfr, lan, jol], atc, tot);
      break;

    // From Colours

    case (start === col && end === uni) || (start === uni && end === col):
      tot =
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas;
      lineHelper(
        [col, sou, atc, fes, sta, she, sms, sho, coa, max, cit, uni],
        sou,
        tot
      );
      break;

    case (start === col && end === cit) || (start === cit && end === col):
      tot =
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote;
      lineHelper(
        [col, sou, atc, fes, sta, she, sms, sho, coa, max, cit],
        sou,
        tot
      );
      break;

    case (start === col && end === max) || (start === max && end === col):
      tot =
        southmall_colours +
        atc_southmall +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote;
      lineHelper(
        [col, sou, atc, fes, sta, she, sms, sho, coa, max],
        sou,
        tot
      );
      break;

    case (start === col && end === coa) || (start === coa && end === col):
      tot =
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall;
      lineHelper([col, sou, atc, fes, sta, she, sms, sho, coa], sou, tot);
      break;

    case (start === col && end === sho) || (start === sho && end === col):
      tot =
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise;
      lineHelper([col, sou, atc, fes, sta, she, sms, sho], sou, tot);
      break;

    case (start === col && end === sms) || (start === sms && end === col):
      tot =
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise;
      lineHelper([col, uni, cit, max, coa, sho, sms], uni, tot);
      break;

    case (start === col && end === she) || (start === she && end === col):
      tot =
        colours_universitperpetualhelp +
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat;
      lineHelper([col, uni, cit, max, coa, sho, sms, she], uni, tot);
      break;

    case (start === col && end === bfr) || (start === bfr && end === col):
      tot =
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        bfresort_startmall;
      lineHelper([col, sou, atc, fes, sta, bfr], sou, tot);
      tot =
        jolibeemolino_colours + landers_jolibeemolino + bfresort_landers;
      lineHelper([col, jol, lan, bfr], jol, tot);
      break;

    case (start === col && end === ama) || (start === ama && end === col):
      tot =
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        bfresort_startmall +
        amai_bfresort;
      lineHelper([col, sou, atc, fes, sta, bfr, ama], sou, tot);
      break;

    case (start === col && end === lan) || (start === lan && end === col):
      tot = colours_amaia + amai_bfresort + bfresort_landers;
      lineHelper([col, ama, bfr, lan], ama, tot);
      break;

    case (start === col && end === jol) || (start === jol && end === col):
      tot =
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        bfresort_startmall +
        bfresort_landers +
        landers_jolibeemolino;
      lineHelper([col, sou, atc, fes, sta, bfr, lan, jol], sou, tot);
      break;

    // From PERPS
    case (start === uni && end === cit) || (start === cit && end === uni):
      tot =
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote;
      lineHelper(
        [uni, col, sou, atc, fes, sta, she, sms, sho, coa, max, cit],
        col,
        tot
      );
      break;

    case (start === uni && end === max) || (start === max && end === uni):
      tot =
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote;
      lineHelper(
        [uni, col, sou, atc, fes, sta, she, sms, sho, coa, max],
        col,
        tot
      );
      break;

    case (start === uni && end === coa) || (start === coa && end === uni):
      tot =
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall;
      lineHelper(
        [uni, col, sou, atc, fes, sta, she, sms, sho, coa],
        col,
        tot
      );
      break;

    case (start === uni && end === sho) || (start === sho && end === uni):
      tot =
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise;
      lineHelper([uni, col, sou, atc, fes, sta, she, sms, sho], col, tot);
      break;

    case (start === uni && end === sms) || (start === sms && end === uni):
      tot =
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat;
      lineHelper([uni, col, sou, atc, fes, sta, she, sms], col, tot);
      break;

    case (start === uni && end === she) || (start === she && end === uni):
      tot =
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat;
      lineHelper([uni, cit, max, coa, sho, sms, she], cit, tot);
      break;

    case (start === uni && end === bfr) || (start === bfr && end === uni):
      tot =
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall;
      lineHelper([uni, cit, max, coa, sho, sms, she, sta, bfr], cit, tot);
      break;

    case (start === uni && end === ama) || (start === ama && end === uni):
      tot =
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall +
        amai_bfresort;
      lineHelper(
        [uni, cit, max, coa, sho, sms, she, sta, bfr, ama],
        cit,
        tot
      );
      break;

    case (start === uni && end === lan) || (start === lan && end === uni):
      tot =
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall +
        bfresort_landers;
      lineHelper(
        [uni, cit, max, coa, sho, sms, she, sta, bfr, lan],
        cit,
        tot
      );
      break;

    case (start === uni && end === jol) || (start === jol && end === uni):
      tot =
        universitperpetualhelp_cityhalllaspinas +
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall +
        bfresort_landers +
        landers_jolibeemolino;
      lineHelper(
        [uni, cit, max, coa, sho, sms, she, sta, bfr, lan, jol],
        cit,
        tot
      );
      break;

    // From City Hall Las Pinas

    case (start === cit && end === max) || (start === max && end === cit):
      tot =
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote;
      lineHelper(
        [cit, uni, col, sou, atc, fes, sta, she, sms, sho, coa, max],
        uni,
        tot
      );
      break;

    case (start === cit && end === coa) || (start === coa && end === cit):
      tot =
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall;
      lineHelper(
        [cit, uni, col, sou, atc, fes, sta, she, sms, sho, coa],
        uni,
        tot
      );
      break;

    case (start === cit && end === sho) || (start === sho && end === cit):
      tot =
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise;
      lineHelper(
        [cit, uni, col, sou, atc, fes, sta, she, sms, sho],
        uni,
        tot
      );
      break;

    case (start === cit && end === sms) || (start === sms && end === cit):
      tot =
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat;
      lineHelper([cit, uni, col, sou, atc, fes, sta, she, sms], uni, tot);
      break;

    case (start === cit && end === she) || (start === she && end === cit):
      tot =
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat;
      lineHelper([cit, uni, col, sou, atc, fes, sta, she], cit, tot);
      break;

    case (start === cit && end === bfr) || (start === bfr && end === cit):
      tot =
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall;
      lineHelper([cit, max, coa, sho, sms, she, sta, bfr], max, tot);
      break;

    case (start === cit && end === ama) || (start === ama && end === cit):
      tot =
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall +
        amai_bfresort;
      lineHelper([cit, max, coa, sho, sms, she, sta, bfr, ama], max, tot);
      break;

    case (start === cit && end === lan) || (start === lan && end === cit):
      tot =
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall +
        bfresort_landers;
      lineHelper([cit, max, coa, sho, sms, she, sta, bfr, lan], max, tot);
      break;

    case (start === cit && end === jol) || (start === jol && end === cit):
      tot =
        cityhalllaspinas_maxzapote +
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall +
        bfresort_landers +
        landers_jolibeemolino;
      lineHelper(
        [cit, max, coa, sho, sms, she, sta, bfr, lan, jol],
        max,
        tot
      );
      break;

    // From Max Resto

    case (start === max && end === coa) || (start === coa && end === max):
      tot =
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall;
      lineHelper(
        [max, cit, uni, col, sou, atc, fes, sta, she, sms, sho, coa],
        cit,
        tot
      );
      break;

    case (start === max && end === sho) || (start === sho && end === max):
      tot =
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise;
      lineHelper(
        [max, cit, uni, col, sou, atc, fes, sta, she, sms, sho],
        cit,
        tot
      );
      break;

    case (start === max && end === sms) || (start === sms && end === max):
      tot =
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat;
      lineHelper(
        [max, cit, uni, col, sou, atc, fes, sta, she, sms],
        cit,
        tot
      );
      break;

    case (start === max && end === she) || (start === she && end === max):
      tot =
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat;
      lineHelper([max, cit, uni, col, sou, atc, fes, sta, she], cit, tot);
      break;

    case (start === max && end === bfr) || (start === bfr && end === max):
      tot =
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall;
      lineHelper([max, coa, sho, sms, she, sta, bfr], coa, tot);
      break;

    case (start === max && end === ama) || (start === ama && end === max):
      tot =
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall +
        amai_bfresort;
      lineHelper([max, coa, sho, sms, she, sta, bfr, ama], coa, tot);
      break;

    case (start === max && end === lan) || (start === lan && end === max):
      tot =
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall +
        bfresort_landers;
      lineHelper([max, coa, sho, sms, she, sta, bfr, lan], coa, tot);
      break;

    case (start === max && end === jol) || (start === jol && end === max):
      tot =
        coastalmall_maxzapote +
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall +
        bfresort_landers +
        landers_jolibeemolino;
      lineHelper([max, coa, sho, sms, she, sta, bfr, lan, jol], coa, tot);
      break;

    // From Coastal Mall
    case (start === coa && end === sho) || (start === sho && end === coa):
      tot =
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat +
        smsucat_shopwise;
      lineHelper(
        [coa, max, cit, uni, col, sou, atc, fes, sta, she, sms, sho],
        max,
        tot
      );
      break;

    case (start === coa && end === sms) || (start === sms && end === coa):
      tot =
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat;
      lineHelper(
        [coa, max, cit, uni, col, sou, atc, fes, sta, she, sms],
        max,
        tot
      );
      break;

    case (start === coa && end === she) || (start === she && end === coa):
      tot =
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat;
      lineHelper(
        [coa, max, cit, uni, col, sou, atc, fes, sta, she],
        max,
        tot
      );
      break;

    case (start === coa && end === bfr) || (start === bfr && end === coa):
      tot =
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall;
      lineHelper([coa, sho, sms, she, sta, bfr], sho, tot);
      break;

    case (start === coa && end === ama) || (start === ama && end === coa):
      tot =
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall +
        amai_bfresort;
      lineHelper([coa, sho, sms, she, sta, bfr, ama], sho, tot);
      break;

    case (start === coa && end === lan) || (start === lan && end === coa):
      tot =
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall +
        bfresort_landers;
      lineHelper([coa, sho, sms, she, sta, bfr, lan], sho, tot);
      break;

    case (start === coa && end === jol) || (start === jol && end === coa):
      tot =
        shopwise_coastalmall +
        smsucat_shopwise +
        shellgasstationsucat_smsucat +
        startmall_shellgasstationsucat +
        bfresort_startmall +
        bfresort_landers +
        landers_jolibeemolino;
      lineHelper([coa, sho, sms, she, sta, bfr, lan, jol], sho, tot);
      break;

    // From Shopwise
    case (start === sho && end === sms) || (start === sms && end === sho):
      tot =
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat +
        shellgasstationsucat_smsucat;
      lineHelper(
        [sho, coa, max, cit, uni, col, sou, atc, fes, sta, she, sms],
        coa,
        tot
      );
      break;

    case (start === sho && end === she) || (start === she && end === sho):
      tot =
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat;
      lineHelper(
        [sho, coa, max, cit, uni, col, sou, atc, fes, sta, she],
        coa,
        tot
      );
      break;

    case (start === sho && end === bfr) || (start === bfr && end === sho):
      tot =
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        colours_amaia +
        amai_bfresort;
      lineHelper([sho, coa, max, cit, uni, col, ama, bfr], coa, tot);
      break;

    case (start === sho && end === ama) || (start === ama && end === sho):
      tot =
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        colours_amaia;
      lineHelper([sho, coa, max, cit, uni, col, ama], col, tot);
      break;

    case (start === sho && end === lan) || (start === lan && end === sho):
      tot =
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        jolibeemolino_colours +
        landers_jolibeemolino;
      lineHelper([sho, coa, max, cit, uni, col, jol, lan], coa, tot);
      break;

    case (start === sho && end === jol) || (start === jol && end === sho):
      tot =
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        jolibeemolino_colours;
      lineHelper([sho, coa, max, cit, uni, col, jol], coa, tot);
      break;

    // From SM Sucat

    case (start === sms && end === she) || (start === she && end === sms):
      tot =
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        southmall_colours +
        atc_southmall +
        festival_atc +
        starmall_festival +
        startmall_shellgasstationsucat;
      lineHelper(
        [sms, sho, coa, max, cit, uni, col, sou, atc, fes, sta, she],
        sho,
        tot
      );
      break;

    case (start === sms && end === bfr) || (start === bfr && end === sms):
      tot =
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        colours_amaia +
        amai_bfresort;
      lineHelper([sms, sho, coa, max, cit, uni, col, ama, bfr], sho, tot);
      break;

    case (start === sms && end === ama) || (start === ama && end === sms):
      tot =
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        colours_amaia;
      lineHelper([sms, sho, coa, max, cit, uni, col, ama], sho, tot);
      break;

    case (start === sms && end === lan) || (start === lan && end === sms):
      tot =
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        jolibeemolino_colours +
        landers_jolibeemolino;
      lineHelper([sms, sho, coa, max, cit, uni, col, jol, lan], sho, tot);
      break;

    case (start === sms && end === jol) || (start === jol && end === sms):
      tot =
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        jolibeemolino_colours;
      lineHelper([sms, sho, coa, max, cit, uni, col, jol], sho, tot);
      break;

    // From Shell

    case (start === she && end === bfr) || (start === bfr && end === she):
      tot =
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        colours_amaia +
        amai_bfresort;
      lineHelper(
        [she, sms, sho, coa, max, cit, uni, col, ama, bfr],
        sms,
        tot
      );
      break;

    case (start === she && end === ama) || (start === ama && end === she):
      tot =
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        colours_amaia;
      lineHelper([she, sms, sho, coa, max, cit, uni, col, ama], sms, tot);
      break;

    case (start === she && end === lan) || (start === lan && end === she):
      tot =
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        jolibeemolino_colours +
        landers_jolibeemolino;
      lineHelper(
        [she, sms, sho, coa, max, cit, uni, col, jol, lan],
        sms,
        tot
      );
      break;

    case (start === she && end === jol) || (start === jol && end === she):
      tot =
        shellgasstationsucat_smsucat +
        smsucat_shopwise +
        shopwise_coastalmall +
        coastalmall_maxzapote +
        cityhalllaspinas_maxzapote +
        universitperpetualhelp_cityhalllaspinas +
        colours_universitperpetualhelp +
        jolibeemolino_colours;
      lineHelper([she, sms, sho, coa, max, cit, uni, col, jol], sms, tot);
      break;

    // From BFR
    case (start === bfr && end === ama) || (start === ama && end === bfr):
      tot =
        bfresort_startmall +
        starmall_festival +
        festival_atc +
        atc_southmall +
        southmall_colours +
        colours_amaia;
      lineHelper([bfr, sta, fes, atc, sou, col, ama], sta, tot);
      break;

    case (start === bfr && end === lan) || (start === lan && end === bfr):
      tot =
        amai_bfresort +
        colours_amaia +
        jolibeemolino_colours +
        landers_jolibeemolino;
      lineHelper([bfr, ama, col, jol, lan], ama, tot);
      break;

    case (start === bfr && end === jol) || (start === jol && end === bfr):
      tot = amai_bfresort + colours_amaia + jolibeemolino_colours;
      lineHelper([bfr, ama, col, jol], ama, tot);
      break;

    // From Ama

    case (start === ama && end === lan) || (start === lan && end === ama):
      tot = colours_amaia + jolibeemolino_colours + landers_jolibeemolino;
      lineHelper([ama, col, jol, lan], col, tot);
      break;

    case (start === ama && end === jol) || (start === jol && end === ama):
      tot = amai_bfresort + bfresort_landers + landers_jolibeemolino;
      lineHelper([ama, bfr, lan, jol], bfr, tot);
      break;

    // From Landers
    case (start === lan && end === jol) || (start === jol && end === lan):
      tot =
        bfresort_landers +
        amai_bfresort +
        colours_amaia +
        jolibeemolino_colours;
      lineHelper([lan, bfr, ama, col, jol], bfr, tot);
      break;

    default:
    // I can define some default behaviour here, if no other case matches
  }
  function lineHelper(stops, via, tot) {
    clr = GenerateColor();
    for (let i = 0; i < stops.length - 1; i++) {
      console.log(stops[i]);
      createLines(stops[i], stops[i + 1], clr);
    }
    CalculatesOtherRoutes(start, via, tot, clr);
  }
  clrCounter = 0;
}
// this is called if i want to create a line
function createLines(place1, place2, colorline) {
  let thickness = 3;
  let x1 = nodes[place1].x;
  let y1 = nodes[place1].y;
  let x2 = nodes[place2].x;
  let y2 = nodes[place2].y;
  let midX = (x1 + x2) / 2;
  let midY = (y1 + y2) / 2;
  svg
    .append("line")
    .style("stroke", colorline)
    .style("stroke-width", thickness) // thickness of line
    .attr("x1", x1)
    .attr("y1", y1)
    .attr("x2", x2)
    .attr("y2", y2);
}
var clrCounter = 0;
function GenerateColor() {
  let colorIndicator = "blue"; // as default
  if (clrCounter == 0) {
    colorIndicator = "blue";
  } else if (clrCounter == 1) {
    colorIndicator = "green";
  } else if (clrCounter == 2) {
    colorIndicator = "purple";
  } else if (clrCounter == 3) {
    colorIndicator = "violet";
  } else if (clrCounter == 3) {
    colorIndicator = "orange";
  } else if (clrCounter == 3) {
    colorIndicator = "yellow";
  }
  clrCounter++;
  if (clrCounter > 5) {
    clrCounter = 0;
  }
  return colorIndicator;
}
function CalculatesOtherRoutes(start, via, totRoute, txtclr) {
  document.getElementById("other_total_distance").innerHTML +=
    "<span style='color:" +
    txtclr +
    "'>" +
    start +
    " via " +
    via +
    ": <span style='font-weight:bolder; color:black'>" +
    totRoute +
    "  km </span> </span><br>";
}

// short routes algorithm
// determines the short route and this is the default.
// in the UI, the route (color:red) is the short route
function shortestPath(edges, numVertices, startVertex) {
  RefrshSgv();

  let done = new Array(numVertices);
  done[startVertex] = true;
  let pathLengths = new Array(numVertices);
  let predecessors = new Array(numVertices);
  for (let i = 0; i < numVertices; i++) {
    pathLengths[i] = edges[startVertex][i];
    if (edges[startVertex][i] != INFINITY) {
      predecessors[i] = startVertex;
    }
  }
  pathLengths[startVertex] = 0;
  for (let i = 0; i < numVertices - 1; i++) {
    let min = INFINITY;
    for (let j = 0; j < numVertices; j++) {
      if (!done[j] && pathLengths[j] < min) {
        min = pathLengths[j];
        var k = j;
      }
    }
    done[k] = true;
    for (let j = 0; j < numVertices; j++) {
      if (!done[j]) {
        let possiblySmallerLength = pathLengths[k] + edges[k][j];
        if (possiblySmallerLength < pathLengths[j]) {
          pathLengths[j] = possiblySmallerLength;
          predecessors[j] = k;
        }
      }
    }
  }
  return {
    startVertex: startVertex,
    pathLengths: pathLengths,
    predecessors: predecessors,
  };
}

// show all lines and distance
function showAllLines() {
  for (let place in connections) {
    // console.log("PLACE: " + place);
    for (let connectToPlace in connections[place]) {
      console.log("nodes[connectToPlace]: " + connectToPlace); 7
      console.log("connections[place][connectToPlace]: " +connections[place][connectToPlace]);
      console.log("place: " + place);
      let x1 = nodes[place].x;
      let y1 = nodes[place].y;
      let x2 = nodes[connectToPlace].x;
      let y2 = nodes[connectToPlace].y;
      let midX = (x1 + x2) / 2;
      let midY = (y1 + y2) / 2;
      svg
      .append("text")
      .attr("x", midX)
         .attr("y", midY)
         .text(connections[place][connectToPlace]) // the distance (numbers)
         .style("stroke", "green")
         .style("font-size", "20px")
         .style("color", "black");
       svg
         .append("line")
         .style("stroke", "gray")
         .style("stroke-width", 2) // thickness of line
         .attr("x1", x1)
         .attr("y1", y1)
         .attr("x2", x2)
         .attr("y2", y2);
    }
  }
}

// display tooltip (start location tooltip)
function showStartToolTip() {
  let locName =
    "Start Location: <br>" + start.options[start.selectedIndex].value;
  let tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  svg
    .selectAll("circle.start")
    .on("mouseover", function (d, i) {
      tooltip.transition().duration(200).style("opacity", 1);
      tooltip
        .html(locName)
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY + "px");
    })
    .on("mouseout", function (d) {
      tooltip.transition().duration(500).style("opacity", 0);
    });
}

// display tooltip (end location tooltip)
function showEndToolTip() {
  let locName =
    "Destination: <br>" + end.options[end.selectedIndex].value;
  let tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  svg
    .selectAll("circle.end")
    .on("mouseover", function (d, i) {
      tooltip.transition().duration(200).style("opacity", 1);
      tooltip
        .html(locName)
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY + "px");
    })
    .on("mouseout", function (d) {
      tooltip.transition().duration(500).style("opacity", 0);
    });
}

// clear / reset
function reset() {
  svg.selectAll("*").remove();
  svg
    .selectAll("circle")
    .data(Object.entries(nodes))
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("r", 20)
    .attr("cx", (d) => d[1].x)
    .attr("cy", (d) => d[1].y);
  svg
    .selectAll("text")
    .data(Object.entries(nodes))
    .enter()
    .append("text")
    .attr("x", (d) => d[1].x - 10)
    .attr("y", (d) => d[1].y + 5)
    .text((d) => d[0]);
  document.getElementById("total_distance").innerHTML = "";
  document.getElementById("other_total_distance").innerHTML = "";

  // document.getElementById("total_distance").innerHTML =
  //   "<span style='color:red; font-weight: bolder'>" +
  //   "Shortest Route: 0  km ";


   document.getElementById("start1").value = "";
   document.getElementById("end1").value = "";
}

// RED ROUTE CALCULATOR
function updateDistance(totalDist) {
  totalShortDistance = totalDist;
  document.getElementById("total_distance").innerHTML =
    "<span style='color:red; font-weight: bolder'>" +
    "Shortest Route: " +
    totalShortDistance +
    " km ";
}
function Calculate() {
  const start = document.querySelector("#start").value;
  const end = document.querySelector("#end").value;
  let routeFunction = routes[start]?.[end];
  if (routeFunction) {
    routeFunction();
  } else {
    // default case or error
  }
  return totalShortDistance;
}

var routes = {
  [sta]: {
    [sta]: function () {
      updateDistance(0);
    },
    [fes]: function () {
      updateDistance(1);
    },
    [atc]: function () {
      updateDistance(2);
    },
    [sou]: function () {
      updateDistance(3);
    },
    [col]: function () {
      updateDistance(3);
    },
    [uni]: function () {
      updateDistance(4);
    },
    [cit]: function () {
      updateDistance(5);
    },
    [max]: function () {
      updateDistance(6);
    },
    [she]: function () {
      updateDistance(1);
    },
    [sms]: function () {
      updateDistance(2);
    },
    [sho]: function () {
      updateDistance(3);
    },
    [coa]: function () {
      updateDistance(5);
    },
    [bfr]: function () {
      updateDistance(1);
    },
    [ama]: function () {
      updateDistance(2);
    },
    [lan]: function () {
      updateDistance(2);
    },
    [jol]: function () {
      updateDistance(3);
    },
  },
  [fes]: {
    [sta]: function () {
      updateDistance(1);
    },
    [fes]: function () {
      updateDistance(0);
    },
    [atc]: function () {
      updateDistance(1);
    },
    [sou]: function () {
      updateDistance(2);
    },
    [col]: function () {
      updateDistance(3);
    },
    [uni]: function () {
      updateDistance(4);
    },
    [cit]: function () {
      updateDistance(5);
    },
    [max]: function () {
      updateDistance(6);
    },
    [coa]: function () {
      updateDistance(6);
    },
    [sho]: function () {
      updateDistance(4);
    },
    [she]: function () {
      updateDistance(2);
    },
    [sms]: function () {
      updateDistance(3);
    },
    [bfr]: function () {
      updateDistance(2);
    },
    [ama]: function () {
      updateDistance(4);
    },
    [lan]: function () {
      updateDistance(3);
    },
    [jol]: function () {
      updateDistance(4);
    },
  },
  [atc]: {
    [sta]: function () {
      updateDistance(2);
    },
    [fes]: function () {
      updateDistance(1);
    },
    [atc]: function () {
      updateDistance(0);
    },
    [sou]: function () {
      updateDistance(1);
    },
    [col]: function () {
      updateDistance(2);
    },
    [uni]: function () {
      updateDistance(3);
    },
    [cit]: function () {
      updateDistance(4);
    },
    [max]: function () {
      updateDistance(5);
    },
    [coa]: function () {
      updateDistance(6);
    },
    [sho]: function () {
      updateDistance(6);
    },
    [sms]: function () {
      updateDistance(4);
    },
    [she]: function () {
      updateDistance(3);
    },
    [bfr]: function () {
      updateDistance(3);
    },
    [ama]: function () {
      updateDistance(3);
    },
    [lan]: function () {
      updateDistance(4);
    },
    [jol]: function () {
      updateDistance(3);
    },
  },
  [sou]: {
    [sta]: function () {
      updateDistance(3);
    },
    [fes]: function () {
      updateDistance(2);
    },
    [atc]: function () {
      updateDistance(1);
    },
    [sou]: function () {
      updateDistance(0);
    },
    [col]: function () {
      updateDistance(1);
    },
    [uni]: function () {
      updateDistance(2);
    },
    [cit]: function () {
      updateDistance(3);
    },
    [max]: function () {
      updateDistance(4);
    },
    [coa]: function () {
      updateDistance(5);
    },
    [sho]: function () {
      updateDistance(7);
    },
    [sms]: function () {
      updateDistance(5);
    },
    [she]: function () {
      updateDistance(4);
    },
    [bfr]: function () {
      updateDistance(3);
    },
    [ama]: function () {
      updateDistance(2);
    },
    [lan]: function () {
      updateDistance(3);
    },
    [jol]: function () {
      updateDistance(2);
    },
  },
  [col]: {
    [sta]: function () {
      updateDistance(3);
    },
    [fes]: function () {
      updateDistance(3);
    },
    [atc]: function () {
      updateDistance(2);
    },
    [sou]: function () {
      updateDistance(1);
    },
    [col]: function () {
      updateDistance(0);
    },
    [uni]: function () {
      updateDistance(1);
    },
    [cit]: function () {
      updateDistance(2);
    },
    [max]: function () {
      updateDistance(3);
    },
    [coa]: function () {
      updateDistance(4);
    },
    [sho]: function () {
      updateDistance(6);
    },
    [sms]: function () {
      updateDistance(5);
    },
    [she]: function () {
      updateDistance(5);
    },
    [bfr]: function () {
      updateDistance(2);
    },
    [ama]: function () {
      updateDistance(1);
    },
    [lan]: function () {
      updateDistance(2);
    },
    [jol]: function () {
      updateDistance(1);
    },
  },
  [uni]: {
    [sta]: function () {
      updateDistance(5);
    },
    [fes]: function () {
      updateDistance(4);
    },
    [atc]: function () {
      updateDistance(3);
    },
    [sou]: function () {
      updateDistance(2);
    },
    [col]: function () {
      updateDistance(1);
    },
    [uni]: function () {
      updateDistance(0);
    },
    [cit]: function () {
      updateDistance(1);
    },
    [max]: function () {
      updateDistance(2);
    },
    [coa]: function () {
      updateDistance(3);
    },
    [sho]: function () {
      updateDistance(5);
    },
    [sms]: function () {
      updateDistance(7);
    },
    [she]: function () {
      updateDistance(6);
    },
    [bfr]: function () {
      updateDistance(3);
    },
    [ama]: function () {
      updateDistance(2);
    },
    [lan]: function () {
      updateDistance(3);
    },
    [jol]: function () {
      updateDistance(2);
    },
  },
  [cit]: {
    [sta]: function () {
      updateDistance(6);
    },
    [fes]: function () {
      updateDistance(5);
    },
    [atc]: function () {
      updateDistance(4);
    },
    [sou]: function () {
      updateDistance(3);
    },
    [col]: function () {
      updateDistance(2);
    },
    [uni]: function () {
      updateDistance(1) ;
    },
    [cit]: function () {
      updateDistance(0);
    },
    [max]: function () {
      updateDistance(1);
    },
    [coa]: function () {
      updateDistance(2);
    },
    [sho]: function () {
      updateDistance(4);
    },
    [sms]: function () {
      updateDistance(6);
    },
    [she]: function () {
      updateDistance(7);
    },
    [bfr]: function () {
      updateDistance(4);
    },
    [ama]: function () {
      updateDistance(3);
    },
    [lan]: function () {
      updateDistance(4);
    },
    [jol]: function () {
      updateDistance(3);
    },
  },
  [max]: {
    [sta]: function () {
      updateDistance(7);
    },
    [fes]: function () {
      updateDistance(6);
    },
    [atc]: function () {
      updateDistance(5);
    },
    [sou]: function () {
      updateDistance(4);
    },
    [col]: function () {
      updateDistance(3);
    },
    [uni]: function () {
      updateDistance(2);
    },
    [cit]: function () {
      updateDistance(1);
    },
    [max]: function () {
      updateDistance(0);
    },
    [coa]: function () {
      updateDistance(1);
    },
    [sho]: function () {
      updateDistance(3);
    },
    [sms]: function () {
      updateDistance(5);
    },
    [she]: function () {
      updateDistance(6);
    },
    [bfr]: function () {
      updateDistance(5);
    },
    [ama]: function () {
      updateDistance(4);
    },
    [lan]: function () {
      updateDistance(5);
    },
    [jol]: function () {
      updateDistance(4);
    },
  },
  [coa]: {
    [sta]: function () {
      updateDistance(6);
    },
    [fes]: function () {
      updateDistance(7);
    },
    [atc]: function () {
      updateDistance(2);
    },
    [sou]: function () {
      updateDistance(3);
    },
    [col]: function () {
      updateDistance(4);
    },
    [uni]: function () {
      updateDistance(3);
    },
    [cit]: function () {
      updateDistance(2);
    },
    [max]: function () {
      updateDistance(1);
    },
    [coa]: function () {
      updateDistance(0);
    },
    [sho]: function () {
      updateDistance(2);
    },
    [sms]: function () {
      updateDistance(4);
    },
    [she]: function () {
      updateDistance(5);
    },
    [bfr]: function () {
      updateDistance(6);
    },
    [ama]: function () {
      updateDistance(5);
    },
    [lan]: function () {
      updateDistance(6);
    },
    [jol]: function () {
      updateDistance(5);
    },
  },
  [sho]: {
    [sta]: function () {
      updateDistance(4);
    },
    [fes]: function () {
      updateDistance(5);
    },
    [atc]: function () {
      updateDistance(6);
    },
    [sou]: function () {
      updateDistance(7);
    },
    [col]: function () {
      updateDistance(6);
    },
    [uni]: function () {
      updateDistance(5);
    },
    [cit]: function () {
      updateDistance(4);
    },
    [max]: function () {
      updateDistance(3);
    },
    [coa]: function () {
      updateDistance(2);
    },
    [sho]: function () {
      updateDistance(0);
    },
    [sms]: function () {
      updateDistance(2);
    },
    [she]: function () {
      updateDistance(3);
    },
    [bfr]: function () {
      updateDistance(5);
    },
    [ama]: function () {
      updateDistance(6);
    },
    [lan]: function () {
      updateDistance(6);
    },
    [jol]: function () {
      updateDistance(7);
    },
  },
  [sms]: {
    [sta]: function () {
      updateDistance(2);
    },
    [fes]: function () {
      updateDistance(3);
    },
    [atc]: function () {
      updateDistance(4);
    },
    [sou]: function () {
      updateDistance(5);
    },
    [col]: function () {
      updateDistance(5);
    },
    [uni]: function () {
      updateDistance(7);
    },
    [cit]: function () {
      updateDistance(6);
    },
    [max]: function () {
      updateDistance(5);
    },
    [coa]: function () {
      updateDistance(4);
    },
    [sho]: function () {
      updateDistance(2);
    },
    [sms]: function () {
      updateDistance(0);
    },
    [she]: function () {
      updateDistance(1);
    },
    [bfr]: function () {
      updateDistance(3);
    },
    [ama]: function () {
      updateDistance(4);
    },
    [lan]: function () {
      updateDistance(4);
    },
    [jol]: function () {
      updateDistance(5);
    },
  },
  [she]: {
    [sta]: function () {
      updateDistance(1);
    },
    [fes]: function () {
      updateDistance(2);
    },
    [atc]: function () {
      updateDistance(3);
    },
    [sou]: function () {
      updateDistance(4);
    },
    [col]: function () {
      updateDistance(4);
    },
    [uni]: function () {
      updateDistance(5);
    },
    [cit]: function () {
      updateDistance(7);
    },
    [max]: function () {
      updateDistance(6);
    },
    [coa]: function () {
      updateDistance(5);
    },
    [sho]: function () {
      updateDistance(3);
    },
    [sms]: function () {
      updateDistance(1);
    },
    [she]: function () {
      updateDistance(0);
    },
    [bfr]: function () {
      updateDistance(2);
    },
    [ama]: function () {
      updateDistance(3);
    },
    [lan]: function () {
      updateDistance(3);
    },
    [jol]: function () {
      updateDistance(4);
    },
  },
  [bfr]: {
    [sta]: function () {
      updateDistance(1);
    },
    [fes]: function () {
      updateDistance(2);
    },
    [atc]: function () {
      updateDistance(3);
    },
    [sou]: function () {
      updateDistance(4);
    },
    [col]: function () {
      updateDistance(2);
    },
    [uni]: function () {
      updateDistance(4);
    },
    [cit]: function () {
      updateDistance(5);
    },
    [max]: function () {
      updateDistance(6);
    },
    [coa]: function () {
      updateDistance(7);
    },
    [sho]: function () {
      updateDistance(5);
    },
    [sms]: function () {
      updateDistance(3);
    },
    [she]: function () {
      updateDistance(2);
    },
    [bfr]: function () {
      updateDistance(0);
    },
    [ama]: function () {
      updateDistance(1);
    },
    [lan]: function () {
      updateDistance(1);
    },
    [jol]: function () {
      updateDistance(2);
    },
  },
  [ama]: {
    [sta]: function () {
      updateDistance(2);
    },
    [fes]: function () {
      updateDistance(3);
    },
    [atc]: function () {
      updateDistance(3);
    },
    [sou]: function () {
      updateDistance(2);
    },
    [col]: function () {
      updateDistance(1);
    },
    [uni]: function () {
      updateDistance(2);
    },
    [cit]: function () {
      updateDistance(3);
    },
    [max]: function () {
      updateDistance(4);
    },
    [coa]: function () {
      updateDistance(5);
    },
    [sho]: function () {
      updateDistance(6);
    },
    [sms]: function () {
      updateDistance(4);
    },
    [she]: function () {
      updateDistance(3);
    },
    [bfr]: function () {
      updateDistance(1);
    },
    [ama]: function () {
      updateDistance(0);
    },
    [lan]: function () {
      updateDistance(2);
    },
    [jol]: function () {
      updateDistance(2);
    },
  },
  [lan]: {
    [sta]: function () {
      updateDistance(2);
    },
    [fes]: function () {
      updateDistance(3);
    },
    [atc]: function () {
      updateDistance(4);
    },
    [sou]: function () {
      updateDistance(3);
    },
    [col]: function () {
      updateDistance(2);
    },
    [uni]: function () {
      updateDistance(3);
    },
    [cit]: function () {
      updateDistance(4);
    },
    [max]: function () {
      updateDistance(5);
    },
    [coa]: function () {
      updateDistance(6);
    },
    [sho]: function () {
      updateDistance(6);
    },
    [sms]: function () {
      updateDistance(4);
    },
    [she]: function () {
      updateDistance(3);
    },
    [bfr]: function () {
      updateDistance(1);
    },
    [ama]: function () {
      updateDistance(2);
    },
    [lan]: function () {
      updateDistance(0);
    },
    [jol]: function () {
      updateDistance(1);
    },
  },
  [jol]: {
    [sta]: function () {
      updateDistance(3);
    },
    [fes]: function () {
      updateDistance(4);
    },
    [atc]: function () {
      updateDistance(3);
    },
    [sou]: function () {
      updateDistance(2);
    },
    [col]: function () {
      updateDistance(1);
    },
    [uni]: function () {
      updateDistance(2);
    },
    [cit]: function () {
      updateDistance(3);
    },
    [max]: function () {
      updateDistance(4);
    },
    [coa]: function () {
      updateDistance(5);
    },
    [sho]: function () {
      updateDistance(7);
    },
    [sms]: function () {
      updateDistance(5);
    },
    [she]: function () {
      updateDistance(3);
    },
    [bfr]: function () {
      updateDistance(2);
    },
    [ama]: function () {
      updateDistance(2);
    },
    [lan]: function () {
      updateDistance(1);
    },
    [jol]: function () {
      updateDistance(0);
    },
  },
};

// calculate and display the total distance for route short route only (bidirectional)
// function CalculateShortDistance() {
//     let start = document.querySelector('#start').value;
//     let end = document.querySelector('#end').value;
//     let totalShortDistance = 0;

  // AUTO COMPLETE HANDLER

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (
        arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()
      ) {
        b = document.createElement("DIV");
        b.innerHTML =
          "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

// AUTO COMPLETE HANDLER
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (
        arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()
      ) {
        b = document.createElement("DIV");
        b.innerHTML =
          "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
          inp.dispatchEvent(new Event("change")); // Trigger change event
        });
        a.appendChild(b);
      }
    }
  });
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/* An array containing the specific locations */
var locationsList = [
  "Starmall - Alabang",
  "Festival Mall",
  "ATC Mall",
  "Southmall",
  "Colours Mall Moonwalk",
  "Perpetual Help Medical Center",
  "City Hall Las Pinas",
  "Max Restaurant - Zapote",
  "Costal Mall",
  "Shopwise Sucat",
  "SM Sucat",
  "Shell Gas Station - Sucat Road",
  "BF Ressort Skillets & Grill",
  "Amaia Steps Alabang",
  "Landers",
  "Jollibee Molino",
  "Sample",
];

/*initiate the autocomplete function on the "myInput" element, and pass along the locations array as possible autocomplete values:*/
autocomplete(document.getElementById("start1"), locationsList);
autocomplete(document.getElementById("end1"), locationsList);

// AUTO COMPLETE HANDLER


// Switching Search bar to Select element (viceversa)

var diva = document.getElementById('diva')
var divb = document.getElementById('divb')
var searcha = document.getElementById('searcha')
var searchb = document.getElementById('searchb')
display = 0;

function showhideDiv()
{
  if(display == 0)
  {
    diva.style.display='block';
    divb.style.display='block';
    searcha.style.display='none';
    searchb.style.display='none';
    display = 1;
  }
  else
  {
    diva.style.display='none';
    divb.style.display='none';
    searcha.style.display='block';
    searchb.style.display='block';
    display = 0;
  }
}


//Multiple Language
const langData = {
en: {
categories: "Categories",
attractions: "Attractions",
restaurants: "Restaurants",
malls: "Malls",
gas_station: "Gas Station",
municipal: "Municipal",
hospital: "Hospital",
unique_stay: "Unique Stay",
night_market: "Night Market",
recommendation: "Recommendation",
tophotels: "Top Hotels",
toprestos: "Top Restaurants",
topmalls: "Top Malls",
langwrap: "Languages",
english: "English",
filipino: "Filipino",
cebuano: "Cebuano",
about: "About",
guide: "Guide",
contact: "Contact",
route_finder: "Route Finder",
start_location: "Type Start Location here...",
end_location: "Type End Location here...",
find_route: "Find Route",
reset: "Reset",
switch: "Switch",
start: "Start:",
end: "End: ",
},
tag: {
categories: "Kategorya",
attractions: "Atraksyon",
restaurants: "Mga Kainan",
malls: "Mga Mall",
gas_station: "Gasolinahan",
municipal: "Munisipyo",
hospital: "Ospital",
unique_stay: "Natatanging Panuluyan",
night_market: "Pamilihang Gabi",
recommendation: "Rekomendasyon",
tophotels: "Nangungunang Hotels",
toprestos: "Nangungunang Restaurants",
topmalls: "Nangungunang Malls",
langwrap: "Wika",
english: "Ingles",
filipino: "Tagalog",
cebuano: "Bisaya",
about: "Tungkol sa Amin",
guide: "Gabay",
contact: "Kontakin",
route_finder: "Tagahanap ng ruta",
start_location: "Ilagay ang simula ng lokasyon dito...",
end_location: "Ilagay ang dulo ng lokasyon dito...",
find_route: "Maghanap ng Ruta",
reset: "I-reset",
switch: "Lumipat",
start: "Panimula:",
end: "Katapusan: ",
},
bis: {
categories: "Kategorya",
attractions: "Mga Atraksyon",
restaurants: "Mga Kan-anan",
malls: "Mga Mall",
gas_station: "Bomba",
municipal: "Munisipyo",
hospital: "Tambalanan",
unique_stay: "Laing nga Puy-anan",
night_market: "Gabii nga Merkado",
recommendation: "Rekomendasyon",
tophotels: "Nanguna nga mga hotel",
toprestos: "Nanguna nga mga restawran",
topmalls: "Nanguna nga mga mall",
langwrap: "Pinulongan",
english: "Iningles",
filipino: "Pilipino",
cebuano: "Bisaya",
about: "Kabahin",
guide: "Giya",
contact: "Kontaka",
route_finder: "Pagpangita sa Ruta",
start_location: "I-type ang sinugdanan nga lokasyon dinhi...",
end_location: "I-type ang katapusan nga lokasyon dinhi...",
find_route: "Pangitag ruta",
reset: "I-reset",
switch: "Ilisan",
start: "Panimula:",
end: "Katapusan: ",
}
};

function changeLanguage(lang) {
document.querySelectorAll("[data-lang-key]").forEach(elem => {
const key = elem.getAttribute("data-lang-key");
elem.textContent = langData[lang][key];
});

document.getElementById("start1").placeholder = langData[lang]['start_location'];
document.getElementById("end1").placeholder = langData[lang]['end_location'];


//  document.getElementById("start1").value = "Starmall - Alabang";
//   document.getElementById("end1").value = "Colours Mall Moonwalk";

  // document.getElementById("start1").value = "ATC Mall";
  // document.getElementById("end1").value = "BF Ressort Drive";

}

function setLocationsName(s,e){

 var startName = document.getElementById("start1").value;
 var endtName = document.getElementById("end1").value;

 if (startName==""){
  document.getElementById("start1").value = s;
  selectOptionByValue('start', document.getElementById("start1").value);
  selectOptionByValue('end', document.getElementById("start1").value);
 }
 else
  {
     //if the start name is the same then dont execute the below line
     if(startName!=s)
     {
      document.getElementById("end1").value = e;
      selectOptionByValue('start', document.getElementById("start1").value);
      selectOptionByValue('end', document.getElementById("end1").value);
     }
  }
}

function selectOptionByValue(selectId, value) {
  let selectElement = document.getElementById(selectId);
  for (let option of selectElement.options) {
    if (option.value === value) {
      option.selected = true;
      break;
    }
  }
}

//Recommendation
// function topHotels(){
//   //alert("Amaia Hotel /n Hyatt /n ABC Hoel");
//   document.getElementById("tops").innerText = "This is a sample hotel"  ;


// }
// function topRestaurant(){
//   alert("Amaia Hotel /n Hyatt /n ABC Hoel");

// }
