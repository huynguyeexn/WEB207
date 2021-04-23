import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any;

  list: any = [{
    title: "Random Code Steam",
    price: 10000,
    oldPrice: 60000,
    img: "https://divineshop.vn/image/catalog/Anh/Nho/photo_2020-05-12_17-51-53.jpg"
  }, {
    title: "ARK: Survival Evolved",
    price: 389000,
    oldPrice: 469000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/346110/header.jpg"
  }, {
    title: "Left 4 Dead 2",
    price: 119000,
    oldPrice: 179000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/550/header.jpg"
  }, {
    title: "Don't Starve Together - Mua 1 tặng 1",
    price: 164000,
    oldPrice: 244000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/322330/header.jpg"
  }, {
    title: "Rust",
    price: 309000,
    oldPrice: 309000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/252490/header.jpg"
  }, {
    title: "The Forest",
    price: 187000,
    oldPrice: 197000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/242760/header.jpg"
  }, {
    title: "Dead by Daylight",
    price: 187000,
    oldPrice: 237000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/381210/header.jpg"
  }, {
    title: "Among Us",
    price: 69000,
    oldPrice: 159000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/945360/header.jpg"
  }, {
    title: "Counter-Strike: Global Prime Status Upgrade",
    price: 354000,
    oldPrice: 394000,
    img: "https://steamcdn-a.akamaihd.net/steam/subs/54029/header.jpg"
  }, {
    title: "7 Days to Die",
    price: 219000,
    oldPrice: 309000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/251570/header.jpg"
  }, {
    title: "Fall Guys: Ultimate Knockout",
    price: 187000,
    oldPrice: 257000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/1097150/header.jpg"
  }, {
    title: "Euro Truck Simulator 2",
    price: 349000,
    oldPrice: 429000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/227300/header.jpg"
  }, {
    title: "Farm Together",
    price: 187000,
    oldPrice: 217000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/673950/header.jpg"
  }, {
    title: "AXYOS",
    price: 69000,
    oldPrice: 119000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/318100/header.jpg"
  }, {
    title: "Terraria",
    price: 119000,
    oldPrice: 179000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/105600/header.jpg"
  }, {
    title: "MONSTER HUNTER: WORLD",
    price: 548000,
    oldPrice: 598000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/582010/header.jpg"
  }, {
    title: "Garry's Mod",
    price: 119000,
    oldPrice: 179000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/4000/header.jpg"
  }, {
    title: "100% Orange Juice",
    price: 89000,
    oldPrice: 179000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/282800/header.jpg"
  }, {
    title: "35MM",
    price: 100000,
    oldPrice: 180000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/466500/header.jpg"
  }, {
    title: "60 Seconds!",
    price: 109000,
    oldPrice: 149000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/368360/header.jpg"
  }, {
    title: "The Witcher 3: Wild Hunt - Game of the Year Edition",
    price: 389000,
    oldPrice: 419000,
    img: "https://divineshop.vn/image/catalog/Anh-SP-New/Thang/thewwitcher.png"
  }, {
    title: "20XX",
    price: 164000,
    oldPrice: 244000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/322110/header.jpg"
  }, {
    title: "Raft",
    price: 187000,
    oldPrice: 277000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/648800/header.jpg"
  }, {
    title: "The Crew™ 2",
    price: 823000,
    oldPrice: 823000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/646910/header.jpg"
  }, {
    title: "1849",
    price: 164000,
    oldPrice: 214000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/290970/header.jpg"
  }, {
    title: "100$",
    price: 7000,
    oldPrice: 17000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/1016250/header.jpg"
  }, {
    title: "Battlestations Pacific",
    price: 187000,
    oldPrice: 247000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/8170/header.jpg"
  }, {
    title: "Rules Of Survival",
    price: 42000,
    oldPrice: 102000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/788260/header.jpg"
  }, {
    title: "Subnautica",
    price: 249000,
    oldPrice: 339000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/264710/header.jpg"
  }, {
    title: "Tomb Raider",
    price: 415000,
    oldPrice: 455000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/203160/header.jpg"
  }, {
    title: "Stardew Valley",
    price: 164000,
    oldPrice: 224000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/413150/header.jpg"
  }, {
    title: "NieR:Automata™",
    price: 831000,
    oldPrice: 871000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/524220/header.jpg"
  }, {
    title: "Deus Ex: Game of the Year Edition",
    price: 145000,
    oldPrice: 175000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/6910/header.jpg"
  }, {
    title: "360 No Scope Arena",
    price: 14000,
    oldPrice: 44000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/883100/header.jpg"
  }, {
    title: "Sleeping Dogs: Definitive Edition",
    price: 415000,
    oldPrice: 435000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/307690/header.jpg"
  }, {
    title: "Agrou",
    price: 139000,
    oldPrice: 159000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/1305420/header.jpg"
  }, {
    title: "Deus Ex: The Fall",
    price: 208000,
    oldPrice: 238000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/258180/header.jpg"
  }, {
    title: "CRYSIS® MAXIMUM EDITION",
    price: 249000,
    oldPrice: 279000,
    img: "https://divineshop.vn/image/catalog/size-3/987.jpg"
  }, {
    title: "Assassin's Creed® Unity",
    price: 73000,
    oldPrice: 113000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/289650/header.jpg"
  }, {
    title: "8-Bit Armies",
    price: 74000,
    oldPrice: 154000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/427250/header.jpg"
  }, {
    title: "8-Bit Hordes",
    price: 164000,
    oldPrice: 214000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/497850/header.jpg"
  }, {
    title: "Insurgency",
    price: 82000,
    oldPrice: 122000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/222880/header.jpg"
  }, {
    title: "Portal 2",
    price: 119000,
    oldPrice: 179000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/620/header.jpg"
  }, {
    title: "200% Mixed Juice!",
    price: 89000,
    oldPrice: 129000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/335190/header.jpg"
  }, {
    title: "Dying Light",
    price: 371000,
    oldPrice: 461000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/239140/header.jpg"
  }, {
    title: "Hand Simulator",
    price: 29000,
    oldPrice: 119000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/657200/header.jpg"
  }, {
    title: "!LABrpgUP!",
    price: 14000,
    oldPrice: 44000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/870990/header.jpg"
  }, {
    title: "Mirror's Edge™",
    price: 187000,
    oldPrice: 247000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/17410/header.jpg"
  }, {
    title: "911 Operator",
    price: 24000,
    oldPrice: 74000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/503560/header.jpg"
  }, {
    title: ".hack//G.U. Last Recode",
    price: 1077000,
    oldPrice: 1087000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/525480/header.jpg"
  }, {
    title: "100% Orange Juice - Saki & Kyousuke Character Pack",
    price: 42000,
    oldPrice: 52000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/334080/header.jpg"
  }, {
    title: "ARK: Scorched Earth - Expansion Pack",
    price: 187000,
    oldPrice: 217000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/512540/header.jpg"
  }, {
    title: "Metro 2033 Redux",
    price: 187000,
    oldPrice: 247000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/286690/header.jpg"
  }, {
    title: "Cyberpunk 2077",
    price: 988000,
    oldPrice: 1048000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/1091500/header.jpg"
  }, {
    title: "100% Orange Juice - Mixed Booster Pack",
    price: 29000,
    oldPrice: 69000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/338360/header.jpg"
  }, {
    title: "Human Rocket Person",
    price: 29000,
    oldPrice: 49000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/965340/header.jpg"
  }, {
    title: "Call of Duty®: WWII",
    price: 1360000,
    oldPrice: 1400000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/476600/header.jpg"
  }, {
    title: "100% Orange Juice - Krila & Kae Character Pack",
    price: 42000,
    oldPrice: 72000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/376200/header.jpg"
  }, {
    title: "Wallpaper Engine",
    price: 69000,
    oldPrice: 119000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/431960/header.jpg"
  }, {
    title: "ASTRONEER",
    price: 279000,
    oldPrice: 359000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/361420/header.jpg"
  }, {
    title: "Tom Clancy's Rainbow Six® Siege",
    price: 329000,
    oldPrice: 399000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/359550/header.jpg"
  }, {
    title: "Don't Starve",
    price: 119000,
    oldPrice: 199000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/219740/header.jpg"
  }, {
    title: "360 No Scope!",
    price: 69000,
    oldPrice: 79000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/859050/header.jpg"
  }, {
    title: "AKIBA'S TRIP: Undead ＆ Undressed",
    price: 187000,
    oldPrice: 247000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/333980/header.jpg"
  }, {
    title: "PAYDAY 2",
    price: 119000,
    oldPrice: 129000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/218620/header.jpg?t=1584629114"
  }, {
    title: "60 Parsecs!",
    price: 119000,
    oldPrice: 159000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/646270/header.jpg"
  }, {
    title: "Far Cry 5 - Standard Edition",
    price: 988000,
    oldPrice: 1058000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/552520/header.jpg"
  }, {
    title: "Tom Clancy's Rainbow Six Siege - Deluxe Edition",
    price: 494000,
    oldPrice: 544000,
    img: "https://divineshop.vn/image/catalog/Anh-san-pham/candy/header_alt_assets_1.jpg"
  }, {
    title: "Batman™: Arkham Knight",
    price: 187000,
    oldPrice: 267000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/208650/header.jpg"
  }, {
    title: "99 Levels To Hell",
    price: 69000,
    oldPrice: 89000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/264280/header.jpg"
  }, {
    title: "1406",
    price: 79000,
    oldPrice: 109000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/1043350/header.jpg"
  }, {
    title: "Airscape - The Fall of Gravity",
    price: 69000,
    oldPrice: 109000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/317250/header.jpg"
  }, {
    title: "ABZU",
    price: 187000,
    oldPrice: 227000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/384190/header.jpg"
  }, {
    title: "ARK: Aberration - Expansion Pack",
    price: 187000,
    oldPrice: 197000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/708770/header.jpg"
  }, {
    title: "Assassin's Creed® Origins",
    price: 197000,
    oldPrice: 217000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/582160/header.jpg"
  }, {
    title: "2064: Read Only Memories",
    price: 187000,
    oldPrice: 207000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/330820/header.jpg"
  }, {
    title: "Tom Clancy’s The Division™",
    price: 494000,
    oldPrice: 574000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/365590/header.jpg"
  }, {
    title: "Just Cause™ 3",
    price: 415000,
    oldPrice: 415000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/225540/header.jpg"
  }, {
    title: "METAL GEAR SOLID V: The Definitive Experience",
    price: 249000,
    oldPrice: 279000,
    img: "https://divineshop.vn/image/catalog/Anh-SP-New/Thang/MetalGearSolidV.png"
  }, {
    title: "Warhammer: End Times - Vermintide",
    price: 249000,
    oldPrice: 269000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/235540/header.jpg"
  }, {
    title: "Age of Empires® III: Complete Collection",
    price: 309000,
    oldPrice: 309000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/105450/header.jpg"
  }, {
    title: "Mortal Kombat XL",
    price: 249000,
    oldPrice: 269000,
    img: "https://steamcdn-a.akamaihd.net/steam/subs/128345/header.jpg"
  }, {
    title: "Killing Floor 2",
    price: 249000,
    oldPrice: 259000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/232090/header.jpg"
  }, {
    title: "No Man's Sky",
    price: 479000,
    oldPrice: 559000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/275850/header.jpg"
  }, {
    title: "Hand Simulator: Survival",
    price: 14000,
    oldPrice: 104000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/924140/header.jpg"
  }, {
    title: "Sea of Thieves",
    price: 309000,
    oldPrice: 369000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/1172620/header.jpg"
  }, {
    title: "A-Gents",
    price: 42000,
    oldPrice: 82000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/460910/header.jpg"
  }, {
    title: "Friday the 13th: The Game",
    price: 164000,
    oldPrice: 194000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/438740/header.jpg"
  }, {
    title: "Far Cry® 4",
    price: 494000,
    oldPrice: 564000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/298110/header.jpg"
  }, {
    title: "Cities: Skylines",
    price: 249000,
    oldPrice: 329000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/255710/header.jpg"
  }, {
    title: "100% Orange Juice - Suguri &amp; Hime Winter Costumes",
    price: 14000,
    oldPrice: 14000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/583640/header.jpg"
  }, {
    title: "BEEP",
    price: 29000,
    oldPrice: 109000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/104200/header.jpg"
  }, {
    title: "99Vidas",
    price: 149000,
    oldPrice: 149000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/557040/header.jpg"
  }, {
    title: "Borderlands 2",
    price: 333000,
    oldPrice: 393000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/49520/header.jpg"
  }, {
    title: "Age of Empires II HD",
    price: 187000,
    oldPrice: 207000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/221380/header.jpg"
  }, {
    title: "Human: Fall Flat",
    price: 164000,
    oldPrice: 244000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/477160/header.jpg"
  }, {
    title: "'Worlds Adrift - Pioneer Edition Upgrade DLC",
    price: 156000,
    oldPrice: 196000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/795621/header.jpg"
  }, {
    title: "Outlast",
    price: 27000,
    oldPrice: 97000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/238320/header.jpg"
  }, {
    title: "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
    price: 648000,
    oldPrice: 718000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/349040/header.jpg"
  }, {
    title: "Prison Architect",
    price: 62000,
    oldPrice: 132000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/233450/header.jpg"
  }, {
    title: "100% Orange Juice - Breaker Pack",
    price: 57000,
    oldPrice: 147000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/465480/header.jpg"
  }, {
    title: "Dying Light Enhanced Edition",
    price: 547000,
    oldPrice: 597000,
    img: "https://divineshop.vn/image/catalog/Anh-SP-New/Thang/dyinglightechane.png"
  }, {
    title: "#monstercakes",
    price: 14000,
    oldPrice: 84000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/614910/header.jpg"
  }, {
    title: "3DCoat Modding Tool",
    price: 249000,
    oldPrice: 319000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/776920/header.jpg"
  }, {
    title: "3D-Coat V4.8",
    price: 788000,
    oldPrice: 818000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/100980/header.jpg"
  }, {
    title: "Assassin's Creed® Syndicate",
    price: 164000,
    oldPrice: 194000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/368500/header.jpg"
  }, {
    title: "This War of Mine",
    price: 187000,
    oldPrice: 267000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/282070/header.jpg"
  }, {
    title: "Saints Row: Gat out of Hell",
    price: 164000,
    oldPrice: 224000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/301910/header.jpg"
  }, {
    title: "The Witcher® 3: Wild Hunt",
    price: 389000,
    oldPrice: 419000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/292030/header.jpg"
  }, {
    title: "Mortal Kombat 11",
    price: 588000,
    oldPrice: 638000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/976310/header.jpg"
  }, {
    title: "Road Redemption",
    price: 187000,
    oldPrice: 187000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/300380/header.jpg"
  }, {
    title: "A Sky Full of Stars",
    price: 179000,
    oldPrice: 249000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/745960/header.jpg"
  }, {
    title: "1943 Deadly Desert",
    price: 119000,
    oldPrice: 159000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/616750/header.jpg"
  }, {
    title: "SCUM",
    price: 249000,
    oldPrice: 309000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/513710/header.jpg"
  }, {
    title: "Counter-Strike: Source",
    price: 119000,
    oldPrice: 179000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/240/header.jpg"
  }, {
    title: "A Kiss For The Petals - Remembering How We Met",
    price: 99000,
    oldPrice: 99000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/397270/header.jpg"
  }, {
    title: "Grounded",
    price: 249000,
    oldPrice: 289000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/962130/header.jpg"
  }, {
    title: "Grim Dawn",
    price: 219000,
    oldPrice: 249000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/219990/header.jpg"
  }, {
    title: "Battlefield: Bad Company™ 2",
    price: 187000,
    oldPrice: 197000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/24960/header.jpg"
  }, {
    title: "100% Orange Juice - Acceleration Pack",
    price: 29000,
    oldPrice: 49000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/537330/header.jpg"
  }, {
    title: "Rise of the Tomb Raider: 20 Year Celebration",
    price: 1247000,
    oldPrice: 1307000,
    img: "https://steamcdn-a.akamaihd.net/steam/subs/90033/header_586x192.jpg"
  }, {
    title: "Counter-Strike",
    price: 119000,
    oldPrice: 179000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/10/header.jpg"
  }, {
    title: "Far Cry® Primal",
    price: 823000,
    oldPrice: 843000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/371660/header.jpg"
  }, {
    title: "Pummel Party",
    price: 164000,
    oldPrice: 224000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/880940/header.jpg"
  }, {
    title: "Green Hell",
    price: 153000,
    oldPrice: 223000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/815370/header.jpg"
  }, {
    title: "Oxygen Not Included",
    price: 219000,
    oldPrice: 269000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/457140/header.jpg"
  }, {
    title: "DARK SOULS™ III",
    price: 968000,
    oldPrice: 1058000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/374320/header.jpg"
  }, {
    title: "Rising Storm 2: Vietnam",
    price: 219000,
    oldPrice: 299000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/418460/header.jpg"
  }, {
    title: ">observer_",
    price: 249000,
    oldPrice: 259000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/514900/header.jpg"
  }, {
    title: "The Escapists 2",
    price: 249000,
    oldPrice: 329000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/641990/header.jpg"
  }, {
    title: "3DMark",
    price: 249000,
    oldPrice: 309000,
    img: "https://steamcdn-a.akamaihd.net/steam/subs/114165/header.jpg"
  }, {
    title: "Attack on Titan / A.O.T. Wings of Freedom",
    price: 479000,
    oldPrice: 489000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/449800/header.jpg"
  }, {
    title: "7 Wonders II",
    price: 119000,
    oldPrice: 199000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/15900/header.jpg"
  }, {
    title: "Hero Siege",
    price: 89000,
    oldPrice: 149000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/269210/header.jpg"
  }, {
    title: "Act of War: High Treason",
    price: 42000,
    oldPrice: 82000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/9760/header.jpg"
  }, {
    title: "1bitHeart",
    price: 42000,
    oldPrice: 52000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/618720/header.jpg"
  }, {
    title: "Batman™: Arkham Origins",
    price: 46000,
    oldPrice: 76000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/209000/header.jpg"
  }, {
    title: "Accel World VS. Sword Art Online Deluxe Edition",
    price: 1077000,
    oldPrice: 1147000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/607880/header.jpg"
  }, {
    title: "The Witcher 2: Assassins of Kings Enhanced Edition",
    price: 239000,
    oldPrice: 269000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/20920/header.jpg"
  }, {
    title: "BioShock: The Collection",
    price: 998000,
    oldPrice: 1048000,
    img: "https://steamcdn-a.akamaihd.net/steam/subs/127633/header.jpg"
  }, {
    title: "Metro: Last Light Redux",
    price: 187000,
    oldPrice: 197000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/287390/header.jpg"
  }, {
    title: "Killing Floor 2 Digital Deluxe Edition",
    price: 309000,
    oldPrice: 399000,
    img: "https://divineshop.vn/image/catalog/Anh-SP-New/Killing%20Floor%202%20Digital%20Deluxe%20Edition.png"
  }, {
    title: "Youtubers Life",
    price: 405000,
    oldPrice: 435000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/428690/header.jpg"
  }, {
    title: "Divinity: Original Sin 2",
    price: 349000,
    oldPrice: 389000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/435150/header.jpg"
  }, {
    title: "DRAGON BALL FighterZ",
    price: 1077000,
    oldPrice: 1147000,
    img: "https://divineshop.vn/image/catalog/Anh-SP-New/DRAGONBALLFighterZ.jpg"
  }, {
    title: "Call of Duty®: Modern Warfare® 2",
    price: 453000,
    oldPrice: 503000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/10180/header.jpg"
  }, {
    title: "City Car Driving",
    price: 219000,
    oldPrice: 259000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/493490/header.jpg"
  }, {
    title: "Middle-earth™: Shadow of War™",
    price: 479000,
    oldPrice: 509000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/356190/header.jpg"
  }, {
    title: "Ori and the Blind Forest: Definitive Edition",
    price: 187000,
    oldPrice: 197000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/387290/header.jpg"
  }, {
    title: "Resident Evil Revelations 2 / Biohazard Revelations 2",
    price: 80000,
    oldPrice: 130000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/287290/header.jpg"
  }, {
    title: "Assassin's Creed® Odyssey - Standard Edition",
    price: 296000,
    oldPrice: 346000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/812140/header.jpg"
  }, {
    title: "Bayonetta",
    price: 341000,
    oldPrice: 361000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/460790/header.jpg"
  }, {
    title: "Watch_Dogs Complete",
    price: 823000,
    oldPrice: 883000,
    img: "https://divineshop.vn/image/catalog/size-5/85571.jpg"
  }, {
    title: "theHunter: Call of the Wild™",
    price: 187000,
    oldPrice: 207000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/518790/header.jpg"
  }, {
    title: "ARK: Genesis Season Pass",
    price: 279000,
    oldPrice: 319000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/1113410/header.jpg"
  }, {
    title: "DARK SOULS III Deluxe Edition",
    price: 1407000,
    oldPrice: 1427000,
    img: "https://divineshop.vn/image/catalog/size-2/94174.jpg"
  }, {
    title: "Mortal Kombat X",
    price: 187000,
    oldPrice: 217000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/307780/header.jpg"
  }, {
    title: "Alien Rage - Unlimited",
    price: 187000,
    oldPrice: 237000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/217920/header.jpg"
  }, {
    title: "Assetto Corsa",
    price: 187000,
    oldPrice: 267000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/244210/header.jpg"
  }, {
    title: "Absolver",
    price: 249000,
    oldPrice: 269000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/473690/header.jpg"
  }, {
    title: "Left 4 Dead",
    price: 119000,
    oldPrice: 119000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/500/header.jpg"
  }, {
    title: "ADR1FT",
    price: 187000,
    oldPrice: 217000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/300060/header.jpg"
  }, {
    title: "PixARK",
    price: 309000,
    oldPrice: 339000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/593600/header.jpg"
  }, {
    title: "Blood and Bacon",
    price: 14000,
    oldPrice: 44000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/434570/header.jpg"
  }, {
    title: "Middle-earth™: Shadow of Mordor™",
    price: 187000,
    oldPrice: 227000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/241930/header.jpg"
  }, {
    title: "Dark Elf",
    price: 17000,
    oldPrice: 97000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/665180/header.jpg"
  }, {
    title: "Assassin's Creed® Origins - Gold Edition",
    price: 296000,
    oldPrice: 306000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/582160/header.jpg"
  }, {
    title: "DARK SOULS™ II: Scholar of the First Sin",
    price: 638000,
    oldPrice: 638000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/335300/header.jpg"
  }, {
    title: "Next Day: Survival",
    price: 11000,
    oldPrice: 11000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/519190/header.jpg"
  }, {
    title: "911 Operator - Every Life Matters",
    price: 11000,
    oldPrice: 101000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/580731/header.jpg"
  }, {
    title: "Hunt Showdown",
    price: 249000,
    oldPrice: 339000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/594650/header.jpg"
  }, {
    title: "Age of Gladiators II: Rome",
    price: 187000,
    oldPrice: 257000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/783590/header.jpg"
  }, {
    title: "1979 Revolution: Black Friday",
    price: 119000,
    oldPrice: 179000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/388320/header.jpg"
  }, {
    title: "Angels of Death",
    price: 119000,
    oldPrice: 189000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/537110/header.jpg"
  }, {
    title: "The Crew™",
    price: 494000,
    oldPrice: 524000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/241560/header.jpg"
  }, {
    title: "Black Desert",
    price: 79000,
    oldPrice: 139000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/836620/header.jpg"
  }, {
    title: "Batman: Arkham City - Game of the Year Edition",
    price: 187000,
    oldPrice: 247000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/200260/header.jpg"
  }, {
    title: "They Are Billions",
    price: 249000,
    oldPrice: 299000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/644930/header.jpg"
  }, {
    title: "Stick Fight: The Game",
    price: 69000,
    oldPrice: 119000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/674940/header.jpg"
  }, {
    title: "Stranded Deep",
    price: 164000,
    oldPrice: 244000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/313120/header.jpg"
  }, {
    title: "Assassin’s Creed® Chronicles: China",
    price: 49000,
    oldPrice: 49000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/354380/header.jpg"
  }, {
    title: "Insurgency: Sandstorm",
    price: 349000,
    oldPrice: 419000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/581320/header.jpg"
  }, {
    title: "Tree of Life",
    price: 99000,
    oldPrice: 119000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/361800/header.jpg"
  }, {
    title: "Dead Cells",
    price: 109000,
    oldPrice: 199000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/588650/header.jpg"
  }, {
    title: "Age of Gladiators II: Death League",
    price: 164000,
    oldPrice: 254000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/639300/header.jpg"
  }, {
    title: "DiRT Rally",
    price: 187000,
    oldPrice: 247000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/310560/header.jpg"
  }, {
    title: "Total War: SHOGUN 2",
    price: 439000,
    oldPrice: 499000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/201270/header.jpg"
  }, {
    title: "Bridge Constructor Portal",
    price: 119000,
    oldPrice: 189000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/684410/header.jpg"
  }, {
    title: "Far Cry 3",
    price: 329000,
    oldPrice: 359000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/220240/header.jpg"
  }, {
    title: "Alien Shooter 2: Reloaded",
    price: 69000,
    oldPrice: 79000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/33120/header.jpg"
  }, {
    title: "American Truck Simulator",
    price: 349000,
    oldPrice: 389000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/270880/header.jpg"
  }, {
    title: "AZURE PHOSPHORESCENCE",
    price: 119000,
    oldPrice: 149000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/396990/header.jpg"
  }, {
    title: "Torchlight II",
    price: 187000,
    oldPrice: 247000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/200710/header.jpg"
  }, {
    title: "The Elder Scrolls V: Skyrim Special Edition",
    price: 359000,
    oldPrice: 389000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/489830/header.jpg"
  }, {
    title: "Mad Max",
    price: 187000,
    oldPrice: 267000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/234140/header.jpg"
  }, {
    title: "Miscreated",
    price: 249000,
    oldPrice: 299000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/299740/header.jpg"
  }, {
    title: "Call of Duty®: Modern Warfare® Remastered",
    price: 907000,
    oldPrice: 977000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/393080/header.jpg"
  }, {
    title: "Zombie Army Trilogy",
    price: 349000,
    oldPrice: 369000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/301640/header.jpg"
  }, {
    title: "Assassin's Creed™: Director's Cut Edition",
    price: 49000,
    oldPrice: 139000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/15100/header.jpg"
  }, {
    title: "Blockstorm",
    price: 69000,
    oldPrice: 159000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/263060/header.jpg"
  }, {
    title: "Assassin’s Creed® Brotherhood",
    price: 108000,
    oldPrice: 158000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/48190/header.jpg"
  }, {
    title: "Warhammer: Vermintide 2",
    price: 249000,
    oldPrice: 299000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/552500/header.jpg"
  }, {
    title: "Fallout 4: Game of the Year Edition",
    price: 479000,
    oldPrice: 569000,
    img: "https://divineshop.vn/image/catalog/Anh-SP-New/Tien/fall%20out%204%20goty.png"
  }, {
    title: "911 Operator - Special Resources",
    price: 8000,
    oldPrice: 78000,
    img: "https://steamcdn-a.akamaihd.net/steam/apps/580730/header.jpg"
  }];

  constructor(private angularFirestore: AngularFirestore) {
    // this.get();
    this.products = this.angularFirestore.collection('/products').valueChanges({ idField: 'id' });
  }

  getProducts() {
    console.log(this.products);
    return this.products;
  }

  addProduct(data) {
    this.angularFirestore.collection('/products').add(data);
  }

}
