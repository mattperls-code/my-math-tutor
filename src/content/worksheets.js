/*
    •--------------------------------•
    |                                |
    |     © 2021 Matthew Perlman     |
    |                                |
    •--------------------------------•
*/

const worksheets = [
    {
       "title":"Integer Addition",
       "id":"w-IA",
       "imageSource": require("../assets/previews/IA.png").default,
       "keywords":[
          "integer",
          "addition",
          "add",
          "whole",
          "number"
       ],
       "description": "Practice adding whole numbers",
       "difficulty": "3/10",
       "problems":[
          "5 + 6; (11)",
          "6 + 12; (18)",
          "8 + 16; (24)",
          "23 + 18; (41)",
          "18 + 19; (37)",
          "25 + 35; (60)",
          "31 + 40; (71)",
          "45 + 62; (107)",
          "45 + 81; (126)",
          "97 + 58; (155)"
       ]
    },
    {
       "title":"Decimal Addition",
       "id":"w-DA",
       "imageSource": require("../assets/previews/DA.png").default,
       "keywords":[
          "decimal",
          "addition",
          "add",
          "number"
       ],
       "description": "Practice adding decimal numbers",
       "difficulty": "4/10",
       "problems":[
          "4.6 + 3.2; (7.8)",
          "5.8 + 4.8; (10.6)",
          "15.8 + 9.6; (25.4)",
          "8.7 + 23; (31.7)",
          "27.9 + 15.5; (43.4)",
          "33 + 15.6; (48.6)",
          "41.6 + 50.9; (92.5)",
          "48.4 + 34.8; (83.2)",
          "61.98 + 70.05; (132.03)",
          "52.79 + 101.05; (153.84)"
       ]
    },
    {
       "title":"Integer Subtraction",
       "id":"w-IS",
       "imageSource": require("../assets/previews/IS.png").default,
       "keywords":[
          "integer",
          "subtraction",
          "subtract",
          "whole",
          "number"
       ],
       "description": "Practice subtracting whole numbers",
       "difficulty": "4/10",
       "problems":[
          "11 - 7; (4)",
          "18 - 18; (0)",
          "29 - 44; (-15)",
          "50 - 43; (7)",
          "63 - 66; (-3)",
          "82 - 71; (11)",
          "89 - 106; (-17)",
          "147 - 92; (55)",
          "123 - 191; (-68)",
          "119 - 243; (-124)"
       ]
    },
    {
       "title":"Decimal Subtraction",
       "id":"w-DS",
       "imageSource": require("../assets/previews/DS.png").default,
       "keywords":[
          "decimal",
          "subtraction",
          "subtract",
          "number"
       ],
       "description": "Practice subtracting decimal numbers",
       "difficulty": "5/10",
       "problems":[
          "15.8 - 13.3; (2.5)",
          "13.2 - 22.6; (-9.4)",
          "43.1 - 38; (5.1)",
          "45.8 - 31.1; (14.7)",
          "45.9 - 65.8; (-19.9)",
          "85.1 - 42.2; (42.9)",
          "110.3 - 60.2; (50.1)",
          "81.8 - 84.2; (-2.4)",
          "187.85 - 154.26; (33.59)",
          "159.46 - 243.39; (-83.93)"
       ]
    },
    {
       "title":"Integer Multiplication",
       "id":"w-IM",
       "imageSource": require("../assets/previews/IM.png").default,
       "keywords":[
          "integer",
          "multiplication",
          "multiply",
          "whole",
          "number"
       ],
       "description": "Practice multiplying whole numbers",
       "difficulty": "5/10",
       "problems":[
          "8 * 4; (32)",
          "-9 * 3; (-27)",
          "4 * 12; (48)",
          "10 * 7; (70)",
          "8 * -14; (-112)",
          "7 * 19; (163)",
          "4 * -23; (-92)",
          "-16 * -15; (240)",
          "22 * 19; (418)",
          "24 * -25; (-600)"
       ]
    },
    {
       "title":"Decimal Multiplication",
       "id":"w-DM",
       "imageSource": require("../assets/previews/DM.png").default,
       "keywords":[
          "decimal",
          "multiplication",
          "multiply",
          "number"
       ],
       "description": "Practice multiplying decimal numbers",
       "difficulty": "5.5/10",
       "problems":[
          "3.5 * -4; (-14)",
          "-5.2 * 3; (-15.6)",
          "-4.7 * 8.1; (-38.07)",
          "9.4 * 1.5; (14.1)",
          "11.3 * 9.9; (111.87)",
          "-8.8 * -6.4; (56.32)",
          "13.8 * 7.7; (106.26)",
          "25.23 * 6; (151.38)",
          "19.3 * -16.46; (-317.678)",
          "12.24 * 18.93; (231.7032)"
       ]
    },
    {
       "title":"Division Without Remainders",
       "id":"w-DWoR",
       "imageSource": require("../assets/previews/DWoR.png").default,
       "keywords":[
          "division",
          "without",
          "remainders",
          "divide",
          "integer",
          "number"
       ],
       "description": "Practice dividing numbers with no remainders",
       "difficulty": "5.5/10",
       "problems":[
          "-64 / 2; (-32)",
          "39 / 3; (13)",
          "42 / 3; (14)",
          "-92 / 4; (-23)",
          "126 / 6; (21)",
          "252 / 7; (36)",
          "135 / -5; (-27)",
          "864 / -8; (-108)",
          "1043 / 7; (149)",
          "-3828 / -12; (319)"
       ]
    },
    {
       "title":"Division With Remainders",
       "id":"w-DWR",
       "imageSource": require("../assets/previews/DWR.png").default,
       "keywords":[
          "division",
          "with",
          "remainders",
          "divide",
          "fraction",
          "number"
       ],
       "description": "Practice dividing numbers with remainders",
       "difficulty": "6/10",
       "problems":[
          "38 / 3; (12 Remainder 2 | 12 _2/3_)",
          "24 / 5; (4 Remainder 4 | 4 _4/5_)",
          "-51 / 6; (-8 Remainder 3 | -8 _3/6_)",
          "93 / 7; (13 Remainder 2 | 13 _2/7_)",
          "105 / -8; (-13 Remainder 1 | -13 _1/8_)",
          "-198 / -4; (49 Remainder 2 | 49 _2/4_)",
          "213 / 5; (42 Remainder 3 | 42 _3/5_)",
          "973 / 14; (69 Remainder 7 | 69 _7/14_)",
          "-2029 / 6; (-338 Remainder 1 | -338 _1/6_)",
          "3291 / 24; (137 Remainder 3 | 127 _3/24_)"
       ]
    },
    {
       "title":"Linear One Variable Equations",
       "id":"w-LOVE",
       "imageSource": require("../assets/previews/LOVE.png").default,
       "keywords":[
          "linear",
          "one",
          "variable",
          "equations",
          "algebra"
       ],
       "description": "Practice solving linear one variable equations for a variable",
       "difficulty": "7.5/10",
       "problems":[
          "3x - 4 = 2; (x = 2)",
          "-4x + 6 = 12; (x = 1.5 | x = _3/2_)",
          "8x + 3x - 24 = 9; (x = 3)",
          "5x - 8 - 7x = 4; (x = -6)",
          "2(x + 4) = 18; (x = 5)",
          "-4(-x - 3) = 22; (x = 2.5 | x = _5/2_)",
          "2(x + 2) - 3(4x - 2) = 20; (x = -1)",
          "3(-2x + 1) = 4(2x - 1); (x = 0.5 | x = _1/2_)",
          "5(x + 5) - 2(-3x + 10) = 5; (x = 0)",
          "_3/4_(8x - 6) + 8 = -8x; (x = -0.25 | x = _-1/4_)"
       ]
    },
    {
       "title":"Linear One Variable Inequalities",
       "id":"w-LOVI",
       "imageSource": require("../assets/previews/LOVI.png").default,
       "keywords":[
          "linear",
          "one",
          "variable",
          "inequalities",
          "algebra"
       ],
       "description": "Practice solving linear one variable inequalities for a variable",
       "difficulty": "8/10",
       "problems":[
          "5x - 1 < 4; (x < 1)",
          "-2x - 4 > 8; (x < -6)",
          "4x - 5x + 9 ≥ 11; (x ≤ -2)",
          "9x + 12 - 3x < 9; (x < -0.5 | x < _-1/2_)",
          "3(x - 2) ≤ 3; (x ≤ 3)",
          "2(-3x + 1) > 6x - 16; (x < 1.5 | x < _3/2_)",
          "-4(9x - 1) + 2(x - 3x + 3) > 10; (x < 0)",
          "x + 13 - 2(2x - 6) < 24 - x - 10 + 9x; (x > 1)",
          "_-4/3_ (24x - 9) ≥ _3/4_(12x - 25); (x ≤ 0.75 | x ≤ _3/4_)",
          "16x - (x + 8) + [4x(3 + 2)] < 11 - 3x; (x < 0.5 | x < _1/2_)"
       ]
    },
    {
       "title": "Mean",
       "id": "w-Mn",
       "imageSource": require("../assets/previews/Mn.png").default,
       "keywords": [
          "mean",
          "measure",
          "of",
          "center",
          "set",
          "list",
          "average"
       ],
       "description": "Practice finding the mean of a set of numbers",
       "difficulty": "6.5/10",
       "problems": [
         "1, -1, 4; (1 _1/3_)",
         "-4, 7, -9; (-2)",
         "4, -9, -12; (-5 _2/3_)",
         "34, 23, -11, 10; (14)",
         "-12, 41, 16, 29; (18 _1/2_ | 18.5)",
         "-10, -51, -42, -35; (-34 _1/2_ | -34.5)",
         "-61, 59, -7, -21, -60; (-18)",
         "39, -26, -45, 33, -54; (-10 _3/5_ | -10.6)",
         "-51, 25, 23, -67, 84; (2 _4/5_ | 2.8)",
         "-14, -52, 76, -30, 28, -93; (-14 _1/6_)"
       ]
    },
    {
       "title": "Median",
       "id": "w-Md",
       "imageSource": require("../assets/previews/Md.png").default,
       "keywords": [
          "median",
          "measure",
          "of",
          "center",
          "set",
          "list",
          "middle"
       ],
       "description": "Practice finding the median of a set of numbers",
       "difficulty": "5.5/10",
       "problems": [
         "-3, 1, -1; (-1)",
         "-2, 10, -14; (-2)",
         "12, 12, -3; (12)",
         "-13, -17, 30, 32; (8 _1/2_ | 8.5)",
         "-9, 1, 19, 22; (10)",
         "5, -29, 2, -48; (-13 _1/2_ | -13.5)",
         "29, 41, 34, -36, -38; (29)",
         "0, -2, -61, -39, -34; (-34)",
         "-36, -72, -81, 4, 45; (-36)",
         "-39, -44, 90, -60, -16, 64; (-27 _1/2_ | -27.5)"
       ]
    },
    {
       "title": "Mode",
       "id": "w-Mo",
       "imageSource": require("../assets/previews/Mo.png").default,
       "keywords": [
          "mode",
          "measure",
          "of",
          "center",
          "set",
          "list",
          "most",
          "common"
       ],
       "description": "Practice finding the mode of a set of numbers",
       "difficulty": "4.5/10",
       "problems": [
          "2, 3, 3; (3)",
          "4, -2, 3, -2; (-2)",
          "3, 2, -7, -4; (No Mode)",
          "18, -16, 2, 8, -16; (-16)",
          "4, -2, -5, 3, 4, -2; (4 and -2)",
          "37, -44, -12, 53, -12, 0; (-12)",
          "6, 2, -9, -2, 2, 6, -9, -6; (2, 6, and -9)",
          "8, -43, -12, 9, 12, 19; (No Mode)",
          "-30, -10, 20, 40, -20, -30, 20; (-30 and 20)",
          "23, 19, -85, -22, 85, 19, 21, 19; (19)"
       ]
    },
    {
       "title": "Minimum",
       "id": "w-Mi",
       "imageSource": require("../assets/previews/Mi.png").default,
       "keywords": [
          "minimum",
          "measure",
          "of",
          "center",
          "set",
          "list",
          "small"
       ],
       "description": "Practice finding the minimum in a set of numbers",
       "difficulty": "4/10",
       "problems": [
         "-5, 1, 1; (-5)",
         "-8, 8, -1; (-8)",
         "-19, -13, -18; (-19)",
         "-22, 25, -17, 33; (-22)",
         "-7, -16, -24, 6; (-24)",
         "38, 21, 20, 10; (10)",
         "-21, -33, -23, 8, 0; (-33)",
         "59, -60, 52, 0, -5; (-60)",
         "25, -1, 41, 67, 80; (-1)",
         "90, 50, 76, -54, 24, 53; (-54)"
       ]
    },
    {
      "title": "Maximum",
      "id": "w-Mx",
      "imageSource": require("../assets/previews/Mx.png").default,
      "keywords": [
         "maximum",
         "measure",
         "of",
         "center",
         "set",
         "list",
         "big"
      ],
      "description": "Practice finding the minimum in a set of numbers",
      "difficulty": "4/10",
      "problems": [
         "4, 2, -4; (4)",
         "-6, -1, -4; (-1)",
         "-18, -20, -8; (-8)",
         "-31, 5, -7, -28; (5)",
         "21, -7, -26, 0; (21)",
         "-32, -51, 29, -11; (29)",
         "-15, -49, 58, 34, -2; (58)",
         "9, -73, 44, 51, -46; (51)",
         "-81, -50, 83, 37, -39; (83)",
         "-7, -24, 17, 74, 94, 88; (94)"
      ]
   },
   {
      "title": "Sum",
      "id": "w-S",
      "imageSource": require("../assets/previews/S.png").default,
      "keywords": [
         "sum",
         "set",
         "list",
         "total"
      ],
      "description": "Practice finding the sum of a set of numbers",
      "difficulty": "5.5/10",
      "problems": [
         "3, -1, -1; (1)",
         "-1, 6, 9; (14)",
         "-16, -25, -19; (-60)",
         "24, 26, 5, 32; (87)",
         "1, -26, -35, 44; (-16)",
         "29, 1, -4, 51; (77)",
         "-20, -53, 57, -32, 53; (5)",
         "-45, 26, -12, -36, 21; (-46)",
         "7, -10, -16, 19, 83; (83)",
         "10, -40, -43, -83, -42, 84; (-114)"
      ]
   },
   {
      "title": "Interquartile Range",
      "id": "w-IqR",
      "imageSource": require("../assets/previews/IqR.png").default,
      "keywords": [
         "interquartile",
         "range",
         "measure",
         "of",
         "variation",
         "set",
         "list",
         "iqr"
      ],
      "description": "Practice finding the interquartile range of a set of numbers",
      "difficulty": "6.5/10",
      "problems": [
         "-5, 0, 1, 1; (3.5)",
         "-12, -10, -9, 14; (13.5)",
         "-17, -12, -10, -19; (7)",
         "13, -1, -2, 11, 17; (16.5)",
         "-4, -44, 6, 42, -4; (48)",
         "-39, -23, -7, -22, -19; (18)",
         "56, 42, -43, 51, 55; (56)",
         "21, -65, -72, -4, 18; (88)",
         "29, 77, -32, -31, 22, -40; (61)",  
         "73, -3, 58, 91, 91, 16; (75)"
      ]
   },
   {
      "title": "Range",
      "id": "w-R",
      "imageSource": require("../assets/previews/R.png").default,
      "keywords": [
         "range",
         "measure",
         "of",
         "variation",
         "set",
         "list"
      ],
      "description": "Practice finding the range of a set of numbers",
      "difficulty": "6/10",
      "problems": [
         "-4, -1, 1; (5)",
         "-5, -5, -13; (8)",
         "-11, -11, 6; (17)",
         "18, -7, 14, -35; (53)",
         "0, -33, 20, 42; (75)",
         "-17, -12, -45, 46; (91)",
         "8, 13, -42, -7, -43; (56)",
         "31, -43, -1, -7, -11; (74)",
         "58, 35, -67, -27, 64; (131)",
         "64, -59, 0, 50, -10, -39; (123)"
      ]
   },
   {
      "title": "Mean Absolute Deviation",
      "id": "w-MAD",
      "imageSource": require("../assets/previews/MAD.png").default,
      "keywords": [
         "mean",
         "absolute",
         "deviation",
         "measure",
         "of",
         "variation",
         "set",
         "list",
         "mad"
      ],
      "description": "Practice finding the mean absolute deviation in a set of numbers",
      "difficulty": "7.5/10",
      "problems": [
         "-5,4,4; (4)",
         "-1, 0, -9; (3 _7/9_)",
         "-7, 0, -2; (2 _2/3_)",
         "-32, -30, -23, 26; (20 _3/8_ | 20.375)",
         "-45, 16, -1, 42; (26)",
         "51, 3, -36, -47; (34 _1/4_ | 34.25)",
         "-37, -64, -3, 16, 12; (28 _6/25_ | 28.24)",
         "16, -60, -50, -38, 72; (44 _4/5_ | 44.8)",
         "-65, -74, -80, 49, 34; (54 _24/25_ | 54.96)",
         "-24, 91, -69, -37, 34, -13; (43 _2/3_)"
      ]
   },
   {
      "title": "Finding Factors",
      "id": "w-FF",
      "imageSource": require("../assets/previews/FF.png").default,
      "keywords": [
         "finding",
         "factors",
         "composite",
         "numbers",
         "prime"
      ],
      "description": "Practice finding all factors of a number",
      "difficulty": "6.5/10",
      "problems": [
         "24; (1, 2, 3, 4, 6, 8, 12, 24)",
         "33; (1, 3, 11, 33)",
         "28; (1, 2, 4, 7, 14, 28)",
         "46; (1, 2, 23, 46)",
         "51; (1, 3, 17, 51)",
         "73; (1, 73)",
         "75; (1, 3, 5, 15, 25, 75)",
         "81; (1, 3, 9, 27, 81)",
         "104; (1, 2, 4, 8, 13, 26, 52, 104)",
         "123; (1, 3, 41, 123)"
      ]
   },
   {
      "title": "Prime Factorization",
      "id": "w-PF",
      "imageSource": require("../assets/previews/PF.png").default,
      "keywords": [
         "prime",
         "factorization",
         "factors",
         "composite",
         "numbers"
      ],
      "description": "Practice finding the prime factorization of a number",
      "difficulty": "6.5",
      "problems": [
         "14; (2^1 * 7^1)",
         "24; (2^3 * 3^1)",
         "19; (No Prime Factorization)",
         "34; (2^1 * 17^2)",
         "42; (2^1 * 3^1 * 7^1)",
         "65; (5^1 * 13^1)",
         "58; (2^1 * 29^1)",
         "73; (No Prime Factorization)",
         "91; (7^1 * 13^1)",
         "110; (2^1 * 5^1 * 11^1)"
      ]
   }
]

export default worksheets