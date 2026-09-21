const listaCanales = [
  { nombre: "ESPN",
simbolo: "📺",
  colorSimbolo: "#FF0000",
    fuentes: [
      { url: "https://streamx-hd.com/live1.php?stream=espn", tipo: "iframe" },
      { url: "https://deporte-libre.buzz/en-vivo-online/espn/embed3.php", tipo: "iframe" },
      { url: "https://deporte-libre.buzz/mpd2.php?id=espn-op3", tipo: "iframe" }
    ] },
  { nombre: "ESPN2",
   simbolo: "📺",
  colorSimbolo: "#FF0000",
    fuentes: [
     { url: "https://cartelive.club/player/4/88", tipo: "iframe" },  
     { url: "https://streamtp-golden1.click/global1.php?stream=espn2", tipo: "iframe" }
    ] },
  { nombre: "ESPN disney",
      simbolo: "📺",
  colorSimbolo: "#FF0026",
    fuentes: [
      { url: "https://streamxhd.com/live1.php?stream=disney2", tipo: "iframe" },
      { url: "https://streamxhd.st/live1.php?stream=disney2", tipo: "iframe" }
] },
    { nombre: "DAZN F1",
        simbolo: "🏁",
  colorSimbolo: "#FF0000",
    fuentes: [
    { url: "https://cartelive.club/player/3/60", tipo: "iframe" },
] },
    { nombre: "Disney/ESPN F1",
        simbolo: "🏁",
  colorSimbolo: "#FF0000",
    fuentes: [
      { url: "https://streamtp.sbs/global2.php?stream=disney1", tipo: "iframe" },
      { url: "https://streamtp-x-y-z.ws/global2.php?stream=disney3", tipo: "iframe" }
    ] },
  { nombre: "ESPN prem",
   simbolo: "⚽",
  colorSimbolo: "#FF0026",
       fuentes: [
      { url: "https://streamx-hd.com/live1.php?stream=espnpremium", tipo: "iframe" },
      { url: "https://cartelive.club/player/4/76", tipo: "iframe" }
    ] },
  { nombre: "TNT prem",
   simbolo: "⚽",
  colorSimbolo: "#D900FF",
    fuentes: [
      { url: "https://streamx-hd.com/live2.php?stream=tntsports", tipo: "iframe" },
      { url: "https://cartelive.club/player/4/75", tipo: "iframe" }
    ] },  
  { nombre: "FOX sports",
   simbolo: "📺",
  colorSimbolo: "#3C00FF",
    fuentes: [
      { url: "https://streamx-hd.com/live1.php?stream=fox1ar", tipo: "iframe" },
      { url: "https://cartelive.club/player/4/78", tipo: "iframe" },
      { url: "https://telelibrefull.online/en-vivo-online/fox-sports/embed2.php", tipo: "iframe" }
        ] },
  { nombre: "FOX sports 2",
simbolo: "📺",
  colorSimbolo: "#3C00FF",
    fuentes: [
      { url: "https://cartelive.club/player/4/79", tipo: "iframe" },
      { url: "https://streamtp-golden1.click/global1.php?stream=fox2ar", tipo: "iframe" },
      { url: "https://streamx-hd.com/live1.php?stream=fox2ar", tipo: "iframe" }
    ] },
  { nombre: "TyC",
   simbolo: "📺",
  colorSimbolo: "#0008FF",
    fuentes: [
      { url: "https://cartelive.club/player/4/77", tipo: "iframe" },
      { url: "https://amg26268-amg26268c14-freelivesports-emea-10267.playouts.now.amagi.tv/ts-us-e2-n2/playlist/amg26268-sportsstudio-tycsports-freelivesportsemea/playlist.m3u8", tipo: "hls" },
      { url: "https://stream-xhd.com/live1.php?stream=tycsports", tipo: "iframe" },
      { url: "https://zonatv.sbs/canales/tyc/", tipo: "iframe" }
    ] },
      { nombre: "Dsports",
       simbolo: "⚽",
  colorSimbolo: "#00C8FF",
    fuentes: [
      { url: "https://tv-90.com/dsportsar.php", tipo: "iframe" },
    ] },
        { nombre: "Simpsons",
            simbolo: "🍩",
  colorSimbolo: "#F5FF00",
    fuentes: [
      { url: "https://lbgo.bozztv.com/ssh101/ssh101/simplat/chunks.m3u8", tipo: "hls" },
    ] },
        { nombre: "family",
            simbolo: "🎬",
  colorSimbolo: "#FF0000",
    fuentes: [
      { url: "https://cdn.40mediagroup.com/live/c7eds/ENT_Family/SA_LIVE_hls_enc/tracks-v1a1/mono.ts.m3u8", tipo: "hls" },
    ] },  
          { nombre: "Chavo del 8",
    simbolo: "👲🏻",
  colorSimbolo: "#74D656",
    fuentes: [
      { url: "https://live20.bozztv.com/giatvplayout7/giatv-211465/tracks-v1a1/mono.ts.m3u8", tipo: "hls" },
    ] }, 
  { nombre: "5 del pueblo Cine", 
      simbolo: "🎬",
  colorSimbolo: "#938CCF",
    fuentes: [
      { url: "https://stmv4.voxtvhd.com.br/canal5pueblo/canal5pueblo/playlist.m3u8", tipo: "hls" },
    ] },
  { nombre: "NEO TV", 
      simbolo: "🎬",
  colorSimbolo: "#A78FA8",
    fuentes: [
      { url: "https://videostream.shockmedia.com.ar:19360/neotvdigital/neotvdigital.m3u8", tipo: "hls" },
    ] },
 { nombre: "Bayres Movie", 
     simbolo: "🎬",
  colorSimbolo: "#A13EAD",
    fuentes: [
      { url: "https://streaming01.mikrolive.tv/bayrestv/live/playlist.m3u8", tipo: "hls" },
    ] },
  { nombre: "ACM", 
      simbolo: "🎬",
  colorSimbolo: "#2C5415",
    fuentes: [
      { url: "https://amc-amcespanol-1-us.plex.wurl.tv/playlist.m3u8", tipo: "hls" },
    ] },
    { nombre: "cinecanal", 
        simbolo: "🎬",
  colorSimbolo: "#E6EDAF",
    fuentes: [
      { url: "https://regionales.saohgdassregions.com/playlist.php?id=59_&sig=2ace662018ab36f0c87ba68e6b053831c05eb97985c41a6ef519cd7814a809da", tipo: "iframe" },
    ] },
      { nombre: "cine 2", 
        simbolo: "📽️",
  colorSimbolo: "#E6EDAF",
    fuentes: [
      { url: "https://live20.bozztv.com/akamaissh101/ssh101/imcu/chunks.m3u8", tipo: "hls" },
    ] },
  { nombre: "Cineaccion",
   simbolo: "🎬",
  colorSimbolo: "#86BD8B",
    fuentes: [
      { url: "https://stmv6.voxtvhd.com.br/cineaccion/cineaccion/playlist.m3u8", tipo: "hls" },
    ] },
    { nombre: "GEN TV", 
        simbolo: "🎬",
  colorSimbolo: "#FF0000",
    fuentes: [
      { url: "https://srv3.zcast.com.br/gentv/gentv/playlist.m3u8", tipo: "hls" },
    ] },
    { nombre: "CH 5 Tigre",
        simbolo: "🛶",
  colorSimbolo: "#6BED75",
    fuentes: [
      { url: "https://videostream.shockmedia.com.ar:19360/cincotv/cincotv.m3u8", tipo: "hls" },
    ] },
      { nombre: "Tele Junin",
          simbolo: "🏞️",
  colorSimbolo: "#6BED75",
    fuentes: [
      { url: "https://videostream.shockmedia.com.ar:19360/telejunin/telejunin.m3u8", tipo: "hls" },
    ] },
      { nombre: "Garaje TV",
          simbolo: "🎬",
  colorSimbolo: "#D1D5F0",
    fuentes: [
      { url: "https://stream1.sersat.com/hls/garagetv.m3u8", tipo: "hls" },
    ] },
      { nombre: "RetroTV",
          simbolo: "🎬📻",
  colorSimbolo: "#FF0000",
    fuentes: [
      { url: "https://stream.enlineatv.net/hls/retrotv/index.m3u8", tipo: "hls" },
    ] },
        { nombre: "Retroplus",
            simbolo: "🎬📻",
  colorSimbolo: "#FF0000",
    fuentes: [
      { url: "https://tls-cl.cdnz.cl/retroplustvtres/live/chunklist_w1491948571.m3u8", tipo: "hls" },
    ] },
      { nombre: "Kanade",
          simbolo: "愛",
  colorSimbolo: "#FF0000",
    fuentes: [
      { url: "https://static.kanade.cl/hls/kanade.m3u8", tipo: "hls" },
    ] },
      { nombre: "anime1",
          simbolo: "愛",
  colorSimbolo: "#FF0000",
    fuentes: [
      { url: "https://backend.energeek.cl/webtv/egretroweb/index.m3u8?token=ZZDemoIPTVGH", tipo: "hls" },
    ] },
      { nombre: "VISION",
          simbolo: "🐪",
  colorSimbolo: "#FF0000",
    fuentes: [
      { url: "https://cdn.streamhispanatv.net:3531/live/tvsretrogtlive.m3u8", tipo: "hls" },
    ] },
      { nombre: "Pitufos",
          simbolo: "🧙🏼‍♂️",
  colorSimbolo: "#7E8BDE",
    fuentes: [
      { url: "https://imps-smrfs.otteravision.com/imps/smrfs/smrfs.m3u8", tipo: "hls" },
    ] },
    { nombre: "Masha oso", 
        simbolo: "👧🏼🧸",
  colorSimbolo: "#DEA07E",
    fuentes: [
      { url: "https://epg-ipv4.provider.plex.tv/library/parts/608049aefa2b8ae93c2c3995-69a526053eb39481c7edd563.m3u8?Accept-Language=es&X-Plex-Client-Identifier=m4vuj76q99s83xu1w12cym3q&X-Plex-Device-Name=Microsoft+Edge&X-Plex-Device-Screen-Resolution=1528x740%2C1536x864&X-Plex-Device=Windows&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Language=es&X-Plex-Model=standalone&X-Plex-Platform-Version=147.0&X-Plex-Platform=Microsoft+Edge&X-Plex-Playback-Session-Id=cb610d93-9d0a-4f48-8cf9-80ecd1af9e30&X-Plex-Product=Plex+Web&X-Plex-Session-Id=94f487b9-cb62-435f-8b0a-7713d8e5661c&X-Plex-Session-Identifier=jk6a5wfntl7wdxpfgrsyg5m0&X-Plex-Token=kab8fkuGynz8GnZ-JsSP&X-Plex-Version=4.159.0&redirectedFromV6=1", tipo: "hls" },
    ] },
        { nombre: "Cartoon Network",
            simbolo: "📺🤪",
  colorSimbolo: "#E6A34C",
    fuentes: [
      { url: "https://regionales.saohgdassregions.com/playlist.php?id=31_&sig=60f8b8dc6d403eefc9d2898b4553825cd77368ada6b07823ae79df7286feb264", tipo: "hls" },
    ] },
        { nombre: "Boomerang",
            simbolo: "📺🤪",
  colorSimbolo: "#E7F77C",
    fuentes: [
      { url: "https://live20.bozztv.com/giatv/giatv-Retrotoonstv/Retrotoonstv/playlist.m3u8", tipo: "hls" },
    ] },
          { nombre: "BOB Esponja",
            simbolo: "🧽",
  colorSimbolo: "#FCDBB1",
    fuentes: [
      { url: "https://jmp2.uk/plu-6254598f5083f800076d8563.m3u8", tipo: "hls" },
    ] },
        { nombre: "MR BEAN",
            simbolo: "👨🏻",
  colorSimbolo: "#5BBFF5",
    fuentes: [
      { url: "https://amg00627-amg00627c40-rakuten-uk-5725.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanpopupcc-rakutenuk/playlist.m3u8", tipo: "hls" },
    ] },
        { nombre: "MR BEAN animado",
            simbolo: "👨🏻",
  colorSimbolo: "#5BBFF5",
    fuentes: [
      { url: "https://amg00627-amg00627c30-rakuten-es-3990.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanescc-rakutenes/playlist.m3u8", tipo: "hls" },
    ] },
    { nombre: "Dibu 5",
        simbolo: "📺🤪",
  colorSimbolo: "#C4F77C",
    fuentes: [
      { url: "https://cartelive.club/player/4/107", tipo: "iframe" },
    ] },
      { nombre: "DIBUS TV",
          simbolo: "📺🤪",
  colorSimbolo: "#97F77C",
    fuentes: [
      { url: "ALEATORIO", tipo: "hls" },
    ] },
          { nombre: "DIGI",
              simbolo: "🦖",
  colorSimbolo: "#F77CC2",
    fuentes: [
      { url: "FUENTES", tipo: "hls" },
    ] },
            { nombre: "BOYS",
                simbolo: "🎬",
  colorSimbolo: "#FF0000",
    fuentes: [
      { url: "FUENTES", tipo: "hls" },
    ] },
        { nombre: "HARRY",
            simbolo: "⚯ ͛",
  colorSimbolo: "#E6B22E",
    fuentes: [
      { url: "ALEATORIO", tipo: "hls" },
    ] }
];
