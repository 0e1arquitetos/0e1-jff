var APP_DATA = {
  "scenes": [
    {
      "id": "0-acesso",
      "name": "ACESSO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 2.690327226843795,
        "pitch": 0.03254376216987609,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 2.369580611826035,
          "pitch": 0.13382617592835544,
          "rotation": 0,
          "target": "1-sala"
        },
        {
          "yaw": -2.609623923397983,
          "pitch": 0.0959590085687676,
          "rotation": 0,
          "target": "2-cozinha"
        },
        {
          "yaw": -1.7777057164583443,
          "pitch": 0.06380097453371114,
          "rotation": 0,
          "target": "9-lvb"
        },
        {
          "yaw": -1.5852138006369731,
          "pitch": 0.05763966662440012,
          "rotation": 0,
          "target": "4-circ"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sala",
      "name": "SALA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-cozinha",
      "name": "COZINHA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": -1.3540232377793942,
        "pitch": 0.015756255682330078,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.3540232377793942,
          "pitch": 0.015756255682330078,
          "rotation": 0,
          "target": "3-lavand"
        },
        {
          "yaw": 0.24883413859777193,
          "pitch": 0.11692824445593075,
          "rotation": 0,
          "target": "0-acesso"
        },
        {
          "yaw": 1.054817020938117,
          "pitch": 0.02866738019251258,
          "rotation": 0,
          "target": "1-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lavand",
      "name": "LAVAND",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "4-circ",
      "name": "CIRC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": -1.3362686400620163,
        "pitch": -0.03035549431903739,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.4920413206039687,
          "pitch": 0.24474080813145704,
          "rotation": 0,
          "target": "5-visitas"
        },
        {
          "yaw": -1.7631645258946733,
          "pitch": 0.12167566126171536,
          "rotation": 0,
          "target": "6-banho-social"
        },
        {
          "yaw": -1.5792383686082836,
          "pitch": 0.09275776303616468,
          "rotation": 0,
          "target": "8-office"
        },
        {
          "yaw": -1.4093571207449145,
          "pitch": 0.01177887144117129,
          "rotation": 0,
          "target": "10-quarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-visitas",
      "name": "VISITAS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 1.7316866138383542,
        "pitch": -0.0011376270565222057,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.16986252064884333,
          "pitch": 0.08475305807575317,
          "rotation": 0,
          "target": "4-circ"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-banho-social",
      "name": "BANHO SOCIAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": -2.9910645160020692,
        "pitch": 0.031360120011385106,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.009908351682740957,
          "pitch": 0.17048886998946067,
          "rotation": 0,
          "target": "4-circ"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-banho-jeff",
      "name": "BANHO JEFF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.87163664426307,
          "pitch": 0.3056865530300943,
          "rotation": 0,
          "target": "10-quarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-office",
      "name": "OFFICE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": -2.9057337719098104,
        "pitch": 0.043937217029146325,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.2621848446803341,
          "pitch": 0.15336220261305655,
          "rotation": 0,
          "target": "4-circ"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-lvb",
      "name": "LVB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.26733188228167215,
          "pitch": 0.0786936503713811,
          "rotation": 0,
          "target": "0-acesso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-quarto",
      "name": "QUARTO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6034436049930019,
          "pitch": 0.06275630604228155,
          "rotation": 0,
          "target": "4-circ"
        },
        {
          "yaw": 1.001441406465183,
          "pitch": 0.025164397172424913,
          "rotation": 0,
          "target": "7-banho-jeff"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "APTO. JFF",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
