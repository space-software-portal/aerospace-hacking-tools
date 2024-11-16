
const projects = [
  {
    name: "CCSDSPy",
    dateAdded: "6/16/2023",
    tags: ["衛星", "OSINT"],
    description: "CCSDS パケット データを読み取るための Python パッケージ。",
    website: "https://docs.ccsdspy.org/en/latest/",
    image: "ccsdspy.png"
  },
  {
    name: "Satpy",
    dateAdded: "6/21/2023",
    tags: ["衛星", "OSINT"],
    description: "Python library for obtaining remote sensing data and writing it to various file formats.",
    website: "https://github.com/pytroll/satpy",
    image: "satpy.png"
  },
  {
    name: "Python SGP4",
    dateAdded: "6/16/2023",
    tags: ["衛星"],
    description: "SGP4 衛星位置ライブラリの Python バージョン。",
    website: "https://github.com/brandon-rhodes/python-sgp4",
    image: "python-sgp4.png"
  },
  {
    name: "poliastro",
    dateAdded: "6/21/2023",
    tags: ["天体力学"],
    description: "Python library for interactive Astrodynamics and Orbital Mechanics.",
    website: "https://docs.poliastro.space/en/stable/",
    image: "poliastro.png"
  },
  {
    name: "Skyfield",
    dateAdded: "6/21/2023",
    tags: ["天体力学", "天文学"],
    description: "Skyfield は、地球の周りを周回する恒星、惑星、衛星の位置を計算します。",
    website: "https://rhodesmill.org/skyfield/",
    image: "skyfield.png"
  },
  {
    name: "satellite.js",
    dateAdded: "6/21/2023",
    tags: ["衛星"],
    description: "TLE の SGP4 および SDP4 伝播用のモジュール式関数セット。",
    website: "https://github.com/shashwatak/satellite-js",
    image: "satellite-js.png"
  },
  {
    name: "Cesium",
    dateAdded: "6/21/2023",
    tags: ["Earth", "OSINT"],
    description: "Cesium は、3D データのパワーを最大限に引き出すように設計されたソフトウェア アプリケーション用のオープン プラットフォームです。",
    website: "https://github.com/CesiumGS/cesium",
    image: "cesium.png"
  },
  {
    name: "SOLM",
    dateAdded: "6/21/2023",
    tags: ["衛星"],
    description: "宇宙船の運用手順を表す衛星運用言語メタモデル (SOLM)。",
    website: "https://www.omg.org/spec/SOLM/About-SOLM/",
    image: "SOLM.png"
  },
  {
    name: "OpenTsiolkovsky",
    dateAdded: "6/21/2023",
    tags: ["宇宙機", "シミュレーション"],
    description: "ロケット飛行シミュレーター。",
    website: "https://github.com/istellartech/OpenTsiolkovsky",
    image: "opent.png"
  },
  {
    name: "ISS Docking Simulator",
    dateAdded: "6/21/2023",
    tags: ["宇宙機", "シミュレーション"],
    description: "Simulator with the controls of used by NASA Astronauts to  pilot the SpaceX Dragon 2 vehicle to the ISS.",
    website: "https://iss-sim.spacex.com/",
    image: "iss-docking-sim.jpeg"
  },
  {
    name: "SatDump",
    dateAdded: "6/21/2023",
    tags: ["Radio", "衛星"],
    description: "A generic satellite data processing software.",
    website: "https://github.com/SatDump/SatDump",
    image: "satdump.png"
  },
  {
    name: "SatIntel",
    dateAdded: "6/28/2023",
    tags: ["衛星"],
    description: "OSINT tool for Satellites 🛰. Extract satellite telemetry, receive orbital predictions, and parse TLEs 🔭",
    website: "https://github.com/ANG13T/SatIntel",
    image: "satintel.png"
  },
  {
    name: "SpaceXTelemetry API",
    dateAdded: "6/28/2023",
    tags: ["宇宙機", "打ち上げ"],
    description: "Open Source REST API for telemetry and predictions to rocket launches",
    website: "https://github.com/R4yGM/SpaceXTelemetry-Api",
    image: "spacextelemetry.png"
  },
  {
    name: "Astrocats",
    dateAdded: "6/28/2023",
    tags: ["Planets", "天文学"],
    description: "Open Astronomy Catalogs",
    website: "https://astrocats.space/",
    image: "astrocats.png"
  },
  {
    name: "Astrometry.net",
    dateAdded: "6/28/2023",
    tags: ["Star Trackers", "天文学"],
    description: "Astrometric calibration meta-data tool for astronomical imaging",
    website: "http://astrometry.net/",
    image: "astrometry.png"
  },
  {
    name: "Virgo",
    dateAdded: "6/28/2023",
    tags: ["Radio", "天文学"],
    description: "A Versatile Spectrometer for Radio Astronomy",
    website: "https://github.com/0xCoto/VIRGO",
    image: "virgo.png"
  },
  {
    name: "100,000 Stars",
    dateAdded: "6/28/2023",
    tags: ["Star Trackers", "天文学"],
    description: "Interactive Visualization of the Stellar Neighborhood showing the location of 119,617 nearby stars",
    website: "https://stars.chromeexperiments.com/",
    image: "100000Stars.png"
  },
  {
    name: "Harmony of the Spheres",
    dateAdded: "6/28/2023",
    tags: ["シミュレーション", "天体力学"],
    description: "Newtonian n-body gravity simulator",
    website: "https://gravitysimulator.org/",
    image: "harmony.png"
  },
  {
    name: "KStars",
    dateAdded: "6/28/2023",
    tags: ["シミュレーション", "天文学"],
    description: "Feature-rich and free astronomy software",
    website: "https://kstars.kde.org/",
    image: "kstars.png"
  },
  {
    name: "Mars Now",
    dateAdded: "6/28/2023",
    tags: ["シミュレーション", "Planets"],
    description: "Visualization of all data transmitted by spacecraft on Mars via NASA’s Mars Relay Network",
    website: "https://mars.nasa.gov/explore/mars-now/",
    image: "marsnow.png"
  },
  {
    name: "NASA Eyes",
    dateAdded: "6/28/2023",
    tags: ["Star Trackers", "Planets"],
    description: "Immersive simulations of the Earth and our solar system, the universe and the spacecraft exploring them.",
    website: "https://eyes.nasa.gov/",
    image: "nasaeyes.png"
  },
  {
    name: "Orbit Simulator",
    dateAdded: "6/28/2023",
    tags: ["天体力学", "Planets"],
    description: "Powerful numerical integration tool for n-body gravitational simulations",
    website: "http://orbitsimulator.com/gsim.html",
    image: "orbitsim.png"
  },
  {
    name: "MMSSTV",
    dateAdded: "7/01/2023",
    tags: ["衛星", "Radio"],
    description: "This program is for transmitting and receiving SSTV using a PC soundcard.",
    website: "https://hamsoft.ca/pages/mmsstv.php",
    image: "mmsstv.jpg"
  },
  {
    name: "Orbitron - Satellite Tracking System",
    dateAdded: "7/02/2023",
    tags: ["衛星", "OSINT", "Radio"],
    description: "Orbitron is a satellite tracking system for radio amateur and observing purposes.",
    website: "http://www.stoff.pl/",
    image: "orbitron.jpg"
  },
  {
    name: "Stellarium",
    dateAdded: "07/09/2023",
    tags: ["天文学", "Star Trackers"],
    description: "Desktop planetarium software that shows a realistic sky in 3D.",
    website: "https://github.com/Stellarium/stellarium",
    image: "stellarium.jpg"
  },
  {
    name: "SatNOGS",
    dateAdded: "7/20/2023",
    tags: ["衛星", "Ground Stations"],
    description: "Open Source global network of satellite ground-stations",
    website: "https://satnogs.org/",
    image: "SatNOGS.png"
  },
  {
    name: "NEODyS-2",
    dateAdded: "31/08/2023",
    tags: ["Near Earth Objects", "Asteroids","OSINT"],
    description: "NEODyS provides information and services for all Near-Earth Asteroids (NEAs). ",
    website: "https://newton.spacedys.com/",
    image: "neodys-2.png"
  },
  {
    name: "TinyGS",
    dateAdded: "10/15/2023",
    tags: ["衛星", "Ground Stations"],
    description: "TinyGS is an open network of Ground Stations distributed around the world to receive and operate LoRa satellites, weather probes and other flying objects, using cheap and versatile modules.",
    website: "https://tinygs.com/",
    image: "tinygs.png"
  },
  {
    name: "STK",
    dateAdded: "06/23/2024",
    tags: ["Mission Design", "シミュレーション"],
    description: "Ansys Systems Tool Kit (STK) provides a physics-based modeling environment for analyzing platforms and payloads in a realistic mission context.",
    website: "https://www.ansys.com/products/missions/ansys-stk",
    image: "stk.png"
  },
  {
    name: "Open MCT",
    dateAdded: "06/23/2024",
    tags: ["Ground Control"],
    description: "Open MCT は、次世代のミッション オペレーション データ視覚化フレームワークです。Web ベースで、デスクトップとモバイルに対応しています。",
    website: "https://nasa.github.io/openmct/",
    image: "openmct.png"
  },
  {
    name: "satvis.space",
    dateAdded: "06/23/2024",
    tags: ["OSINT", "衛星"],
    description: "satellite.jsとCesiumJSを使った衛星軌道の可視化と通過予測を提供します。",
    website: "https://github.com/Flowm/satvis",
    image: "satvis.png"
  },
  {
    name: "CCSDS WIRESHARK DISSECTOR",
    dateAdded: "06/23/2024",
    tags: ["衛星", "OSINT"],
    description: "このプロジェクトは、CCSDS プロトコルのディセクタを提供することでリストを拡張します。",
    website: "https://essr.esa.int/project/ccsds-wireshark-dissector",
    image: "ccsds-wireshark-dissector.png"
  },
];

export default projects;
