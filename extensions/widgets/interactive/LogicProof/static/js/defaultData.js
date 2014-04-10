LOGIC_PROOF_DEFAULT_QUESTION_DATA = {
  assumptions: [],
  results: [],
  language: logicProofData.BASE_STUDENT_LANGUAGE,
  line_templates: [{
    "name": "and_eliminate_left",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "and",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "and",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "and_eliminate_right",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "and",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "S",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "and",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "S",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "and_introduce",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "and"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "S",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "and",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      },
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "S",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "and",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "and_introduce",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "S",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "and"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "and",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      },
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "S",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "and",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "iff_eliminate_right",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "and"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "iff",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "S",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      },
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "iff",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "S",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "iff_eliminate_right",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "iff",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "and"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "S",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      },
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "iff",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "S",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "iff_eliminate_left",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "S",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "and"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "iff",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "S",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      },
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "iff",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "iff_eliminate_left",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "iff",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "and"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "S",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "S",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      },
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "iff",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "iff_eliminate_cis",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "iff",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "implies",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "iff",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "implies",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "iff_eliminate_trans",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "iff",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "implies",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "iff",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "implies",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "iff_introduce",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "implies",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "and"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "implies",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "iff",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "implies",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      },
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "implies",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "iff",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "iff_introduce",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "implies",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "and"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "implies",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "iff",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "implies",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      },
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "implies",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "iff",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "assumption",
    "reader_view": [
      {
        "format": "phrase",
        "content": "if"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "implies_eliminate",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "and"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "implies",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "S",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      },
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "implies",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "S",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "implies_eliminate",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "implies",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "and"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "S",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      },
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "implies",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "S",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "implies_introduce",
    "reader_view": [
      {
        "format": "phrase",
        "content": "hence"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "implies",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [],
    "results": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "implies",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "not_eliminate",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "and"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "unary_connective",
            "top_operator_name": "not",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "phrase",
        "content": "contradiction"
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      },
      {
        "expression": {
          "top_kind_name": "unary_connective",
          "top_operator_name": "not",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [],
    "variables": [],
    "error": []
  },
  {
    "name": "not_eliminate",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "unary_connective",
            "top_operator_name": "not",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "and"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "phrase",
        "content": "contradiction"
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      },
      {
        "expression": {
          "top_kind_name": "unary_connective",
          "top_operator_name": "not",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [],
    "variables": [],
    "error": []
  },
  {
    "name": "contradiction_eliminate",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "phrase",
        "content": "contradiction"
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "not_introduce",
    "reader_view": [
      {
        "format": "phrase",
        "content": "hence"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "unary_connective",
            "top_operator_name": "not",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [],
    "results": [
      {
        "expression": {
          "top_kind_name": "unary_connective",
          "top_operator_name": "not",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "excluded_middle",
    "reader_view": [
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "or",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "unary_connective",
                "top_operator_name": "not",
                "arguments": [
                  {
                    "top_kind_name": "variable",
                    "top_operator_name": "R",
                    "arguments": [],
                    "dummies": []
                  }
                ],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [],
    "results": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "or",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "unary_connective",
              "top_operator_name": "not",
              "arguments": [
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "R",
                  "arguments": [],
                  "dummies": []
                }
              ],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "or_eliminate",
    "reader_view": [
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "or",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "whichever"
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "T",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "or",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "T",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "or_introduce_left",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "or",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "or",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "or_introduce_right",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "S",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "or",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "S",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "or",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "take",
    "reader_view": [
      {
        "format": "phrase",
        "content": "take"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "a",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "element",
          "top_kind_name": "variable"
        }
      }
    ],
    "antecedents": [],
    "results": [],
    "variables": [
      {
        "top_kind_name": "variable",
        "top_operator_name": "a",
        "arguments": [],
        "dummies": []
      }
    ],
    "error": []
  },
  {
    "name": "exists_eliminate",
    "reader_view": [
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "quantifier",
            "top_operator_name": "exists",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "p",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "x",
                "arguments": [],
                "dummies": []
              }
            ]
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "hence"
      },
      {
        "format": "phrase",
        "content": "take"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "a",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "element",
          "top_kind_name": "variable"
        }
      },
      {
        "format": "phrase",
        "content": "satisfying"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "p",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [
            {
              "x": {
                "top_kind_name": "variable",
                "top_operator_name": "a",
                "arguments": [],
                "dummies": []
              }
            }
          ],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "quantifier",
          "top_operator_name": "exists",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "p",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "x",
              "arguments": [],
              "dummies": []
            }
          ]
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "p",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [
          {
            "x": {
              "top_kind_name": "variable",
              "top_operator_name": "a",
              "arguments": [],
              "dummies": []
            }
          }
        ],
        "type": "boolean"
      }
    ],
    "variables": [
      {
        "top_kind_name": "variable",
        "top_operator_name": "a",
        "arguments": [],
        "dummies": []
      }
    ],
    "error": []
  },
  {
    "name": "exists_introduce",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "p",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [
            {
              "x": {
                "top_kind_name": "variable",
                "top_operator_name": "a",
                "arguments": [],
                "dummies": []
              }
            }
          ],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "at"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "a",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "element"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "quantifier",
            "top_operator_name": "exists",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "p",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "x",
                "arguments": [],
                "dummies": []
              }
            ]
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "p",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [
          {
            "x": {
              "top_kind_name": "variable",
              "top_operator_name": "a",
              "arguments": [],
              "dummies": []
            }
          }
        ],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "quantifier",
          "top_operator_name": "exists",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "p",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "x",
              "arguments": [],
              "dummies": []
            }
          ]
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [
      {
        "top_kind_name": "variable",
        "top_operator_name": "a",
        "arguments": [],
        "dummies": []
      }
    ],
    "error": []
  },
  {
    "name": "for_all_eliminate",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "quantifier",
            "top_operator_name": "for_all",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "p",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "x",
                "arguments": [],
                "dummies": []
              }
            ]
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "at"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "a",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "element"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "p",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [
            {
              "x": {
                "top_kind_name": "variable",
                "top_operator_name": "a",
                "arguments": [],
                "dummies": []
              }
            }
          ],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "quantifier",
          "top_operator_name": "for_all",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "p",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "x",
              "arguments": [],
              "dummies": []
            }
          ]
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "p",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [
          {
            "x": {
              "top_kind_name": "variable",
              "top_operator_name": "a",
              "arguments": [],
              "dummies": []
            }
          }
        ],
        "type": "boolean"
      }
    ],
    "variables": [
      {
        "top_kind_name": "variable",
        "top_operator_name": "a",
        "arguments": [],
        "dummies": []
      }
    ],
    "error": []
  },
  {
    "name": "for_all_introduce",
    "reader_view": [
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "a",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "element",
          "top_kind_name": "variable"
        }
      },
      {
        "format": "phrase",
        "content": "arbitrary"
      },
      {
        "format": "phrase",
        "content": "hence"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "quantifier",
            "top_operator_name": "for_all",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "p",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "x",
                "arguments": [],
                "dummies": []
              }
            ]
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [],
    "results": [
      {
        "expression": {
          "top_kind_name": "quantifier",
          "top_operator_name": "for_all",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "p",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "x",
              "arguments": [],
              "dummies": []
            }
          ]
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [
      {
        "top_kind_name": "variable",
        "top_operator_name": "a",
        "arguments": [],
        "dummies": []
      }
    ],
    "error": []
  },
  {
    "name": "given",
    "reader_view": [
      {
        "format": "phrase",
        "content": "given"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "a",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "element"
        }
      }
    ],
    "antecedents": [],
    "results": [],
    "variables": [
      {
        "top_kind_name": "variable",
        "top_operator_name": "a",
        "arguments": [],
        "dummies": []
      }
    ],
    "error": []
  },
  {
    "name": "reminder",
    "reader_view": [
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": []
  },
  {
    "name": "and_introduce_e1",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "R",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "and",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "and",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": [
      [
        {
          "format": "string",
          "content": "Should this be From "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " and "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " we have "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "binary_connective",
              "top_operator_name": "and",
              "arguments": [
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "R",
                  "arguments": [],
                  "dummies": []
                },
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "S",
                  "arguments": [],
                  "dummies": []
                }
              ],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": "?"
        }
      ],
      [
        {
          "format": "string",
          "content": "To prove "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "binary_connective",
              "top_operator_name": "and",
              "arguments": [
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "R",
                  "arguments": [],
                  "dummies": []
                },
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "S",
                  "arguments": [],
                  "dummies": []
                }
              ],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " you need to have shown "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " as well."
        }
      ]
    ]
  },
  {
    "name": "and_introduce_e2",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "S",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "and",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "R",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "and",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": [
      [
        {
          "format": "string",
          "content": "Should this be From "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " and "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " we have "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "binary_connective",
              "top_operator_name": "and",
              "arguments": [
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "R",
                  "arguments": [],
                  "dummies": []
                },
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "S",
                  "arguments": [],
                  "dummies": []
                }
              ],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": "?"
        }
      ],
      [
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "binary_connective",
              "top_operator_name": "and",
              "arguments": [
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "R",
                  "arguments": [],
                  "dummies": []
                },
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "S",
                  "arguments": [],
                  "dummies": []
                }
              ],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " means that "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " and "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " are both true, so you also need to have shown "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        }
      ]
    ]
  },
  {
    "name": "and_introduce_e3",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "T",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "and",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "T",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "and",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": [
      [
        {
          "format": "string",
          "content": "To prove "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "binary_connective",
              "top_operator_name": "and",
              "arguments": [
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "R",
                  "arguments": [],
                  "dummies": []
                },
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "S",
                  "arguments": [],
                  "dummies": []
                }
              ],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " you need to show both "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " and "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " on earlier lines, then write From "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " and "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " we have "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "binary_connective",
              "top_operator_name": "and",
              "arguments": [
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "R",
                  "arguments": [],
                  "dummies": []
                },
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "S",
                  "arguments": [],
                  "dummies": []
                }
              ],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": "."
        }
      ]
    ]
  },
  {
    "name": "and_introduce_e4",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "T",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "and"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "U",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "and",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "T",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      },
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "U",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "and",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": [
      [
        {
          "format": "string",
          "content": "The conclusion you are allowed to make here is 'From "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "T",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " and "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "U",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " we have "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "binary_connective",
              "top_operator_name": "and",
              "arguments": [
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "T",
                  "arguments": [],
                  "dummies": []
                },
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "U",
                  "arguments": [],
                  "dummies": []
                }
              ],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": "'."
        }
      ]
    ]
  },
  {
    "name": "and_eliminate_e",
    "reader_view": [
      {
        "format": "phrase",
        "content": "from"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "binary_connective",
            "top_operator_name": "and",
            "arguments": [
              {
                "top_kind_name": "variable",
                "top_operator_name": "R",
                "arguments": [],
                "dummies": []
              },
              {
                "top_kind_name": "variable",
                "top_operator_name": "S",
                "arguments": [],
                "dummies": []
              }
            ],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      },
      {
        "format": "phrase",
        "content": "have"
      },
      {
        "format": "expression",
        "content": {
          "expression": {
            "top_kind_name": "variable",
            "top_operator_name": "T",
            "arguments": [],
            "dummies": []
          },
          "substitutions": [],
          "type": "boolean"
        }
      }
    ],
    "antecedents": [
      {
        "expression": {
          "top_kind_name": "binary_connective",
          "top_operator_name": "and",
          "arguments": [
            {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            }
          ],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "results": [
      {
        "expression": {
          "top_kind_name": "variable",
          "top_operator_name": "T",
          "arguments": [],
          "dummies": []
        },
        "substitutions": [],
        "type": "boolean"
      }
    ],
    "variables": [],
    "error": [
      [
        {
          "format": "string",
          "content": "From "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "binary_connective",
              "top_operator_name": "and",
              "arguments": [
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "R",
                  "arguments": [],
                  "dummies": []
                },
                {
                  "top_kind_name": "variable",
                  "top_operator_name": "S",
                  "arguments": [],
                  "dummies": []
                }
              ],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " you can conclude either "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "R",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": " or "
        },
        {
          "format": "expression",
          "content": {
            "expression": {
              "top_kind_name": "variable",
              "top_operator_name": "S",
              "arguments": [],
              "dummies": []
            },
            "substitutions": [],
            "type": "boolean"
          }
        },
        {
          "format": "string",
          "content": ", but not anything else"
        }
      ]
    ]
  }],
  vocabulary: {
  	from: ['from'],
    and: ['and'],
    have: ['we have', 'we know', 'have'],
    hence: ['hence', 'so', 'thus'],
    whichever: ['and whichever is true'],
    arbitrary: ['was arbitrary'],
    take: ['take'],
    satisfying: ['satisfying', 'such that'],
    if: ['if'],
    given: ['given'],
    contradiction: ['contradiction'],
    at: ['at']
  },
  general_messages: logicProofData.BASE_GENERAL_MESSAGES,
  mistake_table: [
  {
    "name": "layout",
    "entries": [
      {
        "name": "first_line_indented",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "n",
                  "top_kind_name": "variable",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                },
                {
                  "top_operator_name": 1,
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "greater_than",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "indentation",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "integer"
                },
                {
                  "top_operator_name": 0,
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "The first line of a proof should not be indented."
            }
          ]
        ]
      },
      {
        "name": "illegal_indent",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "greater_than",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "indentation",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "integer"
                },
                {
                  "top_operator_name": "indentation",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "subtraction",
                      "top_kind_name": "binary_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": 1,
                          "top_kind_name": "constant",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "is_scope_creator",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "subtraction",
                      "top_kind_name": "binary_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": 1,
                          "top_kind_name": "constant",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "Indents should only occur after lines of the form 'If..' or 'Given...'."
            }
          ]
        ]
      },
      {
        "name": "double_indent",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "greater_than",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "indentation",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "integer"
                },
                {
                  "top_operator_name": "addition",
                  "top_kind_name": "binary_function",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": 1,
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "is_scope_creator",
              "top_kind_name": "prefix_function",
              "arguments": [
                {
                  "top_operator_name": "subtraction",
                  "top_kind_name": "binary_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": 1,
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "Only indent once after '"
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "text",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "subtraction",
                    "top_kind_name": "binary_function",
                    "arguments": [
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      },
                      {
                        "top_operator_name": 1,
                        "top_kind_name": "constant",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "string"
              }
            },
            {
              "format": "string",
              "content": "'."
            }
          ]
        ]
      },
      {
        "name": "missing_indent_given",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "subtraction",
                      "top_kind_name": "binary_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": 1,
                          "top_kind_name": "constant",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'given'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "less_than_or_equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "indentation",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "integer"
                },
                {
                  "top_operator_name": "indentation",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "subtraction",
                      "top_kind_name": "binary_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": 1,
                          "top_kind_name": "constant",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "After '"
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "text",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "subtraction",
                    "top_kind_name": "binary_function",
                    "arguments": [
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      },
                      {
                        "top_operator_name": 1,
                        "top_kind_name": "constant",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "string"
              }
            },
            {
              "format": "string",
              "content": "' the following lines in which you reason using the variable "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "subtraction",
                    "top_kind_name": "binary_function",
                    "arguments": [
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      },
                      {
                        "top_operator_name": 1,
                        "top_kind_name": "constant",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " should be indented. Then stop indenting once you reach a statement of the form '∀x.....' in which the "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "subtraction",
                    "top_kind_name": "binary_function",
                    "arguments": [
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      },
                      {
                        "top_operator_name": 1,
                        "top_kind_name": "constant",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " no longer occurs."
            }
          ]
        ]
      },
      {
        "name": "missing_indent_assumption",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "subtraction",
                      "top_kind_name": "binary_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": 1,
                          "top_kind_name": "constant",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'assumption'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "less_than_or_equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "indentation",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "integer"
                },
                {
                  "top_operator_name": "indentation",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "subtraction",
                      "top_kind_name": "binary_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": 1,
                          "top_kind_name": "constant",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "After "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "text",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "subtraction",
                    "top_kind_name": "binary_function",
                    "arguments": [
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      },
                      {
                        "top_operator_name": 1,
                        "top_kind_name": "constant",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "string"
              }
            },
            {
              "format": "string",
              "content": " the following lines in which you reason under the assumption of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "subtraction",
                    "top_kind_name": "binary_function",
                    "arguments": [
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      },
                      {
                        "top_operator_name": 1,
                        "top_kind_name": "constant",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " should be indented. Once you have proved some statement p assuming "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "subtraction",
                    "top_kind_name": "binary_function",
                    "arguments": [
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      },
                      {
                        "top_operator_name": 1,
                        "top_kind_name": "constant",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " then you can write an unindented line 'Hence "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "subtraction",
                    "top_kind_name": "binary_function",
                    "arguments": [
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      },
                      {
                        "top_operator_name": 1,
                        "top_kind_name": "constant",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "=>p'. Alternatively you can simply stop indenting if you no longer wish to use the assumption of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "subtraction",
                    "top_kind_name": "binary_function",
                    "arguments": [
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      },
                      {
                        "top_operator_name": 1,
                        "top_kind_name": "constant",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "."
            }
          ]
        ]
      },
      {
        "name": "missing_deindent_forall_0",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'for_all_introduce'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "and",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": 0,
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "To prove "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " you need to start by writing 'Given "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "' and then start indenting your lines until you manage to prove "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "entry",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": 1,
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  },
                  {
                    "top_operator_name": "antecedents",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "set_of_formulas"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": ". After this you can write this line (which should not be indented)."
            }
          ]
        ]
      },
      {
        "name": "incorrect_deindent_forall",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'for_all_introduce'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not_equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "scoper",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'given'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "We are still working under the assumption of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "subtraction",
                        "top_kind_name": "binary_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          },
                          {
                            "top_operator_name": 1,
                            "top_kind_name": "constant",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " and must stop doing so (for example by moving to a statement of the form "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "subtraction",
                        "top_kind_name": "binary_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          },
                          {
                            "top_operator_name": 1,
                            "top_kind_name": "constant",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "=>p) before we can leave the scope of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " and introduce a for-all quantifier."
            }
          ]
        ]
      },
      {
        "name": "missing_deindent_for_all_1",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'for_all_introduce'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "and",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": 1,
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "This line should no longer being indented (because we are no longer within the scope of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": ")."
            }
          ]
        ]
      },
      {
        "name": "missing_deindent_for_all_2",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'for_all_introduce'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "and",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "greater_than",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": 1,
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "This line should be indented one step less than the previous line (because it is no longer in the scope of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": ")."
            }
          ]
        ]
      },
      {
        "name": "double_deindent_forall",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'for_all_introduce'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "less_than",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "indentation",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "integer"
                },
                {
                  "top_operator_name": "subtraction",
                  "top_kind_name": "binary_function",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": 1,
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "We only reduce the level of indentation by one here; we are just leaving the scope of '"
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "text",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "subtraction",
                        "top_kind_name": "binary_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          },
                          {
                            "top_operator_name": 1,
                            "top_kind_name": "constant",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "string"
              }
            },
            {
              "format": "string",
              "content": "'."
            }
          ]
        ]
      },
      {
        "name": "missing_deindent_implies_0",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'implies_introduce'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "and",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": 0,
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "To prove "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " you need to start by writing 'If "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'R'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "', then give a chain of reasoning (which should be indented) that ends with "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'S'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": ". After that you can put this line (which should not be indented)."
            }
          ]
        ]
      },
      {
        "name": "missing_deindent_not_0",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'not_introduce'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "and",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": 0,
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "To prove "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " you need to start by writing 'If "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'R'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "' and then give a chain of reasoning (on indented lines) that ends with a contradiction. After that you are allowed to write this line (unindented)."
            }
          ]
        ]
      },
      {
        "name": "incorrect_deindent",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "or",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'implies_introduce'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'not_introduce'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not_equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "scoper",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'assumption'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "You are still working withing the scope of '"
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "text",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "subtraction",
                        "top_kind_name": "binary_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          },
                          {
                            "top_operator_name": 1,
                            "top_kind_name": "constant",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "string"
              }
            },
            {
              "format": "string",
              "content": "' and you need to stop doing so (typically be introducing a forall statement) before you can drop the assumption of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'R'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": ". Alternatively you could try changing the order of your 'Given...' and 'If...' lines."
            }
          ]
        ]
      },
      {
        "name": "missing_deindent_1",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "or",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'implies_introduce'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'not_introduce'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "and",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": 1,
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "Stop indenting at this point, because the truth of this line does not rely on the assumption of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'R'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "."
            }
          ]
        ]
      },
      {
        "name": "missing_deindent_2",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "or",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'implies_introduce'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'not_introduce'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "and",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "greater_than",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": 1,
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "When writing '"
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "text",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "string"
              }
            },
            {
              "format": "string",
              "content": "' we reduce the level of indentation by one, to indicate that we are no longer making the assumption that "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'R'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "."
            }
          ]
        ]
      },
      {
        "name": "double_deindent_assumption",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "or",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'implies_introduce'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'not_introduce'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "and",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "less_than",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": "subtraction",
                      "top_kind_name": "binary_function",
                      "arguments": [
                        {
                          "top_operator_name": "indentation",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "subtraction",
                              "top_kind_name": "binary_function",
                              "arguments": [
                                {
                                  "top_operator_name": "n",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                },
                                {
                                  "top_operator_name": 1,
                                  "top_kind_name": "constant",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                }
                              ],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": 1,
                          "top_kind_name": "constant",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "scoper",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "scoper",
                              "top_kind_name": "prefix_function",
                              "arguments": [
                                {
                                  "top_operator_name": "subtraction",
                                  "top_kind_name": "binary_function",
                                  "arguments": [
                                    {
                                      "top_operator_name": "n",
                                      "top_kind_name": "variable",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "integer"
                                    },
                                    {
                                      "top_operator_name": 1,
                                      "top_kind_name": "constant",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "integer"
                                    }
                                  ],
                                  "dummies": [],
                                  "type": "integer"
                                }
                              ],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'assumption'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "You should only reduce the level of indentation once here; we are dropping the assumption of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "subtraction",
                        "top_kind_name": "binary_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          },
                          {
                            "top_operator_name": 1,
                            "top_kind_name": "constant",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " but not that of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "scoper",
                        "top_kind_name": "prefix_function",
                        "arguments": [
                          {
                            "top_operator_name": "subtraction",
                            "top_kind_name": "binary_function",
                            "arguments": [
                              {
                                "top_operator_name": "n",
                                "top_kind_name": "variable",
                                "arguments": [],
                                "dummies": [],
                                "type": "integer"
                              },
                              {
                                "top_operator_name": 1,
                                "top_kind_name": "constant",
                                "arguments": [],
                                "dummies": [],
                                "type": "integer"
                              }
                            ],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "."
            }
          ]
        ]
      },
      {
        "name": "double_deindent_given",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "or",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'implies_introduce'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'not_introduce'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "and",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "less_than",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": "subtraction",
                      "top_kind_name": "binary_function",
                      "arguments": [
                        {
                          "top_operator_name": "indentation",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "subtraction",
                              "top_kind_name": "binary_function",
                              "arguments": [
                                {
                                  "top_operator_name": "n",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                },
                                {
                                  "top_operator_name": 1,
                                  "top_kind_name": "constant",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                }
                              ],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": 1,
                          "top_kind_name": "constant",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "scoper",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "scoper",
                              "top_kind_name": "prefix_function",
                              "arguments": [
                                {
                                  "top_operator_name": "subtraction",
                                  "top_kind_name": "binary_function",
                                  "arguments": [
                                    {
                                      "top_operator_name": "n",
                                      "top_kind_name": "variable",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "integer"
                                    },
                                    {
                                      "top_operator_name": 1,
                                      "top_kind_name": "constant",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "integer"
                                    }
                                  ],
                                  "dummies": [],
                                  "type": "integer"
                                }
                              ],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'given'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "Only deindent once here; we are dropping the assumption of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "subtraction",
                        "top_kind_name": "binary_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          },
                          {
                            "top_operator_name": 1,
                            "top_kind_name": "constant",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " but are still within the scope of '"
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "text",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "scoper",
                        "top_kind_name": "prefix_function",
                        "arguments": [
                          {
                            "top_operator_name": "subtraction",
                            "top_kind_name": "binary_function",
                            "arguments": [
                              {
                                "top_operator_name": "n",
                                "top_kind_name": "variable",
                                "arguments": [],
                                "dummies": [],
                                "type": "integer"
                              },
                              {
                                "top_operator_name": 1,
                                "top_kind_name": "constant",
                                "arguments": [],
                                "dummies": [],
                                "type": "integer"
                              }
                            ],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "string"
              }
            },
            {
              "format": "string",
              "content": "'."
            }
          ]
        ]
      },
      {
        "name": "illegal_first_line",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "n",
                  "top_kind_name": "variable",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                },
                {
                  "top_operator_name": 1,
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "or",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'for_all_introduce'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "or",
                  "top_kind_name": "binary_connective",
                  "arguments": [
                    {
                      "top_operator_name": "equals",
                      "top_kind_name": "binary_relation",
                      "arguments": [
                        {
                          "top_operator_name": "template",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "string"
                        },
                        {
                          "top_operator_name": "'implies_introduce'",
                          "top_kind_name": "constant",
                          "arguments": [],
                          "dummies": [],
                          "type": "string"
                        }
                      ],
                      "dummies": [],
                      "type": "boolean"
                    },
                    {
                      "top_operator_name": "equals",
                      "top_kind_name": "binary_relation",
                      "arguments": [
                        {
                          "top_operator_name": "template",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "string"
                        },
                        {
                          "top_operator_name": "'not_introduce'",
                          "top_kind_name": "constant",
                          "arguments": [],
                          "dummies": [],
                          "type": "string"
                        }
                      ],
                      "dummies": [],
                      "type": "boolean"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "You can't have this as the first line of your proof"
            }
          ]
        ]
      }
    ]
  },
  {
    "name": "variables",
    "entries": [
      {
        "name": "unspecified_variable",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "is_initializer",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "bounded_exists",
              "top_kind_name": "bounded_quantifier",
              "arguments": [
                {
                  "top_operator_name": "is_in",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "x",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "formula"
                    },
                    {
                      "top_operator_name": "variables",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "set_of_formulas"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "not",
                  "top_kind_name": "unary_connective",
                  "arguments": [
                    {
                      "top_operator_name": "is_initialized",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "x",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "formula"
                        },
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "boolean"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [
                {
                  "top_operator_name": "x",
                  "top_kind_name": "variable",
                  "arguments": [],
                  "dummies": [],
                  "type": "formula"
                }
              ],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "You haven't said where "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " comes from; if you want it to be arbitrary then add a preceding line saying 'Given "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "'; alternatively you might want to take a particular "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " witnessing some existential formula."
            }
          ]
        ]
      },
      {
        "name": "inaccessible_variable",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "is_initializer",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "and",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "not_equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'for_all_introduce'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "bounded_exists",
                  "top_kind_name": "bounded_quantifier",
                  "arguments": [
                    {
                      "top_operator_name": "is_in",
                      "top_kind_name": "binary_relation",
                      "arguments": [
                        {
                          "top_operator_name": "x",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "formula"
                        },
                        {
                          "top_operator_name": "variables",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "set_of_formulas"
                        }
                      ],
                      "dummies": [],
                      "type": "boolean"
                    },
                    {
                      "top_operator_name": "not",
                      "top_kind_name": "unary_connective",
                      "arguments": [
                        {
                          "top_operator_name": "is_accessible",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "x",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "formula"
                            },
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "boolean"
                        }
                      ],
                      "dummies": [],
                      "type": "boolean"
                    }
                  ],
                  "dummies": [
                    {
                      "top_operator_name": "x",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "formula"
                    }
                  ],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "The variable "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " was only specified within the scope of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "text",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper2",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "initializer",
                        "top_kind_name": "prefix_function",
                        "arguments": [
                          {
                            "top_operator_name": "variable",
                            "top_kind_name": "prefix_function",
                            "arguments": [
                              {
                                "top_operator_name": "n",
                                "top_kind_name": "variable",
                                "arguments": [],
                                "dummies": [],
                                "type": "integer"
                              }
                            ],
                            "dummies": [],
                            "type": "formula"
                          },
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "string"
              }
            },
            {
              "format": "string",
              "content": " in line "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "scoper2",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "initializer",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "variable",
                        "top_kind_name": "prefix_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "formula"
                      },
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "integer"
              }
            },
            {
              "format": "string",
              "content": ", and so can only be used there. If you want it as an arbitrary variable again then write 'Given "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "'."
            }
          ]
        ]
      },
      {
        "name": "incorrect_variable_forall",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'for_all_introduce'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not_equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "variable",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "formula"
                },
                {
                  "top_operator_name": "variable",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "scoper",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "formula"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "We originally took "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "subtraction",
                        "top_kind_name": "binary_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          },
                          {
                            "top_operator_name": 1,
                            "top_kind_name": "constant",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " as our arbitrary variable so this, rather than "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": ", needs to be the one that we quantify out over."
            }
          ]
        ]
      },
      {
        "name": "arbitrary_variable_clash",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'given'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "is_accessible",
              "top_kind_name": "prefix_function",
              "arguments": [
                {
                  "top_operator_name": "variable",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "formula"
                },
                {
                  "top_operator_name": "n",
                  "top_kind_name": "variable",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "The variable "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " is already in use; chose a new variable to work with instead."
            }
          ]
        ]
      },
      {
        "name": "variable_clash",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'exists_eliminate'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "is_accessible",
              "top_kind_name": "prefix_function",
              "arguments": [
                {
                  "top_operator_name": "variable",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "formula"
                },
                {
                  "top_operator_name": "n",
                  "top_kind_name": "variable",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "You just know that there is some "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " such that "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "; you can't assume that it is the "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " we were previously discussing. Try using an entirely new variable in place of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "variable",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "."
            }
          ]
        ]
      }
    ]
  },
  {
    "name": "logic",
    "entries": [
      {
        "name": "missing_antecedent",
        "occurs": {
          "top_operator_name": "bounded_exists",
          "top_kind_name": "bounded_quantifier",
          "arguments": [
            {
              "top_operator_name": "is_in",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "A",
                  "top_kind_name": "variable",
                  "arguments": [],
                  "dummies": [],
                  "type": "formula"
                },
                {
                  "top_operator_name": "antecedents",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "set_of_formulas"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "is_proven",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "A",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "formula"
                    },
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [
            {
              "top_operator_name": "A",
              "top_kind_name": "variable",
              "arguments": [],
              "dummies": [],
              "type": "formula"
            }
          ],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "This line uses "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "min",
                "top_kind_name": "ranged_function",
                "arguments": [
                  {
                    "top_operator_name": "is_in",
                    "top_kind_name": "binary_relation",
                    "arguments": [
                      {
                        "top_operator_name": "A",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "formula"
                      },
                      {
                        "top_operator_name": "antecedents",
                        "top_kind_name": "prefix_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "set_of_formulas"
                      }
                    ],
                    "dummies": [],
                    "type": "boolean"
                  },
                  {
                    "top_operator_name": "not",
                    "top_kind_name": "unary_connective",
                    "arguments": [
                      {
                        "top_operator_name": "is_proven",
                        "top_kind_name": "prefix_function",
                        "arguments": [
                          {
                            "top_operator_name": "A",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "formula"
                          },
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "boolean"
                      }
                    ],
                    "dummies": [],
                    "type": "boolean"
                  }
                ],
                "dummies": [
                  {
                    "top_operator_name": "A",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "formula"
                  }
                ],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": ", so you need to have an earlier line proving that "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "min",
                "top_kind_name": "ranged_function",
                "arguments": [
                  {
                    "top_operator_name": "is_in",
                    "top_kind_name": "binary_relation",
                    "arguments": [
                      {
                        "top_operator_name": "A",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "formula"
                      },
                      {
                        "top_operator_name": "antecedents",
                        "top_kind_name": "prefix_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "set_of_formulas"
                      }
                    ],
                    "dummies": [],
                    "type": "boolean"
                  },
                  {
                    "top_operator_name": "not",
                    "top_kind_name": "unary_connective",
                    "arguments": [
                      {
                        "top_operator_name": "is_proven",
                        "top_kind_name": "prefix_function",
                        "arguments": [
                          {
                            "top_operator_name": "A",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "formula"
                          },
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "boolean"
                      }
                    ],
                    "dummies": [],
                    "type": "boolean"
                  }
                ],
                "dummies": [
                  {
                    "top_operator_name": "A",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "formula"
                  }
                ],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " is true."
            }
          ]
        ]
      },
      {
        "name": "inaccessible_antecedent",
        "occurs": {
          "top_operator_name": "bounded_exists",
          "top_kind_name": "bounded_quantifier",
          "arguments": [
            {
              "top_operator_name": "is_in",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "A",
                  "top_kind_name": "variable",
                  "arguments": [],
                  "dummies": [],
                  "type": "formula"
                },
                {
                  "top_operator_name": "antecedents",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "set_of_formulas"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "is_available",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "A",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "formula"
                    },
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [
            {
              "top_operator_name": "A",
              "top_kind_name": "variable",
              "arguments": [],
              "dummies": [],
              "type": "formula"
            }
          ],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "You are using here that "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "min",
                "top_kind_name": "ranged_function",
                "arguments": [
                  {
                    "top_operator_name": "is_in",
                    "top_kind_name": "binary_relation",
                    "arguments": [
                      {
                        "top_operator_name": "A",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "formula"
                      },
                      {
                        "top_operator_name": "antecedents",
                        "top_kind_name": "prefix_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "set_of_formulas"
                      }
                    ],
                    "dummies": [],
                    "type": "boolean"
                  },
                  {
                    "top_operator_name": "not",
                    "top_kind_name": "unary_connective",
                    "arguments": [
                      {
                        "top_operator_name": "is_available",
                        "top_kind_name": "prefix_function",
                        "arguments": [
                          {
                            "top_operator_name": "A",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "formula"
                          },
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "boolean"
                      }
                    ],
                    "dummies": [],
                    "type": "boolean"
                  }
                ],
                "dummies": [
                  {
                    "top_operator_name": "A",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "formula"
                  }
                ],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": ", which was only proved within the context of '"
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "text",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "prover",
                        "top_kind_name": "prefix_function",
                        "arguments": [
                          {
                            "top_operator_name": "min",
                            "top_kind_name": "ranged_function",
                            "arguments": [
                              {
                                "top_operator_name": "is_in",
                                "top_kind_name": "binary_relation",
                                "arguments": [
                                  {
                                    "top_operator_name": "A",
                                    "top_kind_name": "variable",
                                    "arguments": [],
                                    "dummies": [],
                                    "type": "formula"
                                  },
                                  {
                                    "top_operator_name": "antecedents",
                                    "top_kind_name": "prefix_function",
                                    "arguments": [
                                      {
                                        "top_operator_name": "n",
                                        "top_kind_name": "variable",
                                        "arguments": [],
                                        "dummies": [],
                                        "type": "integer"
                                      }
                                    ],
                                    "dummies": [],
                                    "type": "set_of_formulas"
                                  }
                                ],
                                "dummies": [],
                                "type": "boolean"
                              },
                              {
                                "top_operator_name": "not",
                                "top_kind_name": "unary_connective",
                                "arguments": [
                                  {
                                    "top_operator_name": "is_available",
                                    "top_kind_name": "prefix_function",
                                    "arguments": [
                                      {
                                        "top_operator_name": "A",
                                        "top_kind_name": "variable",
                                        "arguments": [],
                                        "dummies": [],
                                        "type": "formula"
                                      },
                                      {
                                        "top_operator_name": "n",
                                        "top_kind_name": "variable",
                                        "arguments": [],
                                        "dummies": [],
                                        "type": "integer"
                                      }
                                    ],
                                    "dummies": [],
                                    "type": "boolean"
                                  }
                                ],
                                "dummies": [],
                                "type": "boolean"
                              }
                            ],
                            "dummies": [
                              {
                                "top_operator_name": "A",
                                "top_kind_name": "variable",
                                "arguments": [],
                                "dummies": [],
                                "type": "formula"
                              }
                            ],
                            "type": "formula"
                          },
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "string"
              }
            },
            {
              "format": "string",
              "content": "' and so is no longer available to you."
            }
          ]
        ]
      },
      {
        "name": "missing_false",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "needs_false",
              "top_kind_name": "prefix_function",
              "arguments": [
                {
                  "top_operator_name": "n",
                  "top_kind_name": "variable",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "bounded_exists",
                  "top_kind_name": "bounded_quantifier",
                  "arguments": [
                    {
                      "top_operator_name": "less_than",
                      "top_kind_name": "binary_relation",
                      "arguments": [
                        {
                          "top_operator_name": "k",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "boolean"
                    },
                    {
                      "top_operator_name": "yields_false",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "k",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "boolean"
                    }
                  ],
                  "dummies": [
                    {
                      "top_operator_name": "k",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "This line assumes you have already proved a contradiction, which is not the case."
            }
          ]
        ]
      },
      {
        "name": "inaccessible_false",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "needs_false",
              "top_kind_name": "prefix_function",
              "arguments": [
                {
                  "top_operator_name": "n",
                  "top_kind_name": "variable",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "bounded_exists",
                  "top_kind_name": "bounded_quantifier",
                  "arguments": [
                    {
                      "top_operator_name": "less_than",
                      "top_kind_name": "binary_relation",
                      "arguments": [
                        {
                          "top_operator_name": "k",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "boolean"
                    },
                    {
                      "top_operator_name": "and",
                      "top_kind_name": "binary_connective",
                      "arguments": [
                        {
                          "top_operator_name": "yields_false",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "k",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "boolean"
                        },
                        {
                          "top_operator_name": "is_in_scope",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "k",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "boolean"
                        }
                      ],
                      "dummies": [],
                      "type": "boolean"
                    }
                  ],
                  "dummies": [
                    {
                      "top_operator_name": "k",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "It is true that you proved a contradiction in line "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "max",
                "top_kind_name": "ranged_function",
                "arguments": [
                  {
                    "top_operator_name": "less_than",
                    "top_kind_name": "binary_relation",
                    "arguments": [
                      {
                        "top_operator_name": "k",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      },
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "boolean"
                  },
                  {
                    "top_operator_name": "yields_false",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "k",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "boolean"
                  }
                ],
                "dummies": [
                  {
                    "top_operator_name": "k",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "type": "integer"
              }
            },
            {
              "format": "string",
              "content": " but this line is no longer available to you."
            }
          ]
        ]
      },
      {
        "name": "for_all_incorrect_conclusion",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'for_all_introduce'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "is_in",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "substitute",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "element",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "'p'",
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "string"
                            },
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "formula"
                        },
                        {
                          "top_operator_name": "element",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "'x'",
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "string"
                            },
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "formula"
                        },
                        {
                          "top_operator_name": "element",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "'a'",
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "string"
                            },
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "formula"
                        }
                      ],
                      "dummies": [],
                      "type": "formula"
                    },
                    {
                      "top_operator_name": "results",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "set_of_formulas"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "To conclude this you need to have shown "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "substitute",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "element",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "'p'",
                        "top_kind_name": "constant",
                        "arguments": [],
                        "dummies": [],
                        "type": "string"
                      },
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "formula"
                  },
                  {
                    "top_operator_name": "element",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "'x'",
                        "top_kind_name": "constant",
                        "arguments": [],
                        "dummies": [],
                        "type": "string"
                      },
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "formula"
                  },
                  {
                    "top_operator_name": "element",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "'a'",
                        "top_kind_name": "constant",
                        "arguments": [],
                        "dummies": [],
                        "type": "string"
                      },
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "formula"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " on the immediately preceding line."
            }
          ]
        ]
      },
      {
        "name": "implies_incorrect_conclusion",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'implies_introduce'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "is_in",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "element",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "'S'",
                          "top_kind_name": "constant",
                          "arguments": [],
                          "dummies": [],
                          "type": "string"
                        },
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "formula"
                    },
                    {
                      "top_operator_name": "results",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "set_of_formulas"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "To deduce '"
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "' you need to have proved "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'S'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " in the immediately preceding line (under the assumption of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'R'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": ")."
            }
          ]
        ]
      },
      {
        "name": "implies_incorrect_assumption",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'implies_introduce'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not_equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "element",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "'R'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "formula"
                },
                {
                  "top_operator_name": "result",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "scoper",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "formula"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "You started with the assumption of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "subtraction",
                        "top_kind_name": "binary_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          },
                          {
                            "top_operator_name": 1,
                            "top_kind_name": "constant",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " not "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'R'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": ", so you must conclude 'Hence "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "subtraction",
                        "top_kind_name": "binary_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          },
                          {
                            "top_operator_name": 1,
                            "top_kind_name": "constant",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "=>"
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'S'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "'."
            }
          ]
        ]
      },
      {
        "name": "not_incorrect_conclusion",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'not_introduce'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "yields_false",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "subtraction",
                      "top_kind_name": "binary_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": 1,
                          "top_kind_name": "constant",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "To prove the statement "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " you need to start by assuming "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'R'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " is true and prove a contradiction. Then write this line immediately afterwards."
            }
          ]
        ]
      },
      {
        "name": "not_incorrect_assumption",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'not_introduce'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not_equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "element",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "'R'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "formula"
                },
                {
                  "top_operator_name": "result",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "scoper",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "subtraction",
                          "top_kind_name": "binary_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": 1,
                              "top_kind_name": "constant",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "formula"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "We started with the assumption of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "subtraction",
                        "top_kind_name": "binary_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          },
                          {
                            "top_operator_name": 1,
                            "top_kind_name": "constant",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": ", so what we have in fact shown is ~"
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "subtraction",
                        "top_kind_name": "binary_function",
                        "arguments": [
                          {
                            "top_operator_name": "n",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          },
                          {
                            "top_operator_name": 1,
                            "top_kind_name": "constant",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "."
            }
          ]
        ]
      },
      {
        "name": "or_missing_antecedent_both",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'or_eliminate'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "and",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "not",
                  "top_kind_name": "unary_connective",
                  "arguments": [
                    {
                      "top_operator_name": "bounded_exists",
                      "top_kind_name": "bounded_quantifier",
                      "arguments": [
                        {
                          "top_operator_name": "less_than",
                          "top_kind_name": "binary_relation",
                          "arguments": [
                            {
                              "top_operator_name": "j",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "boolean"
                        },
                        {
                          "top_operator_name": "bounded_exists",
                          "top_kind_name": "bounded_quantifier",
                          "arguments": [
                            {
                              "top_operator_name": "less_than",
                              "top_kind_name": "binary_relation",
                              "arguments": [
                                {
                                  "top_operator_name": "i",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                },
                                {
                                  "top_operator_name": "j",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                }
                              ],
                              "dummies": [],
                              "type": "boolean"
                            },
                            {
                              "top_operator_name": "is_implication",
                              "top_kind_name": "prefix_function",
                              "arguments": [
                                {
                                  "top_operator_name": "element",
                                  "top_kind_name": "prefix_function",
                                  "arguments": [
                                    {
                                      "top_operator_name": "'R'",
                                      "top_kind_name": "constant",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "string"
                                    },
                                    {
                                      "top_operator_name": "n",
                                      "top_kind_name": "variable",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "integer"
                                    }
                                  ],
                                  "dummies": [],
                                  "type": "formula"
                                },
                                {
                                  "top_operator_name": "element",
                                  "top_kind_name": "prefix_function",
                                  "arguments": [
                                    {
                                      "top_operator_name": "'T'",
                                      "top_kind_name": "constant",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "string"
                                    },
                                    {
                                      "top_operator_name": "n",
                                      "top_kind_name": "variable",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "integer"
                                    }
                                  ],
                                  "dummies": [],
                                  "type": "formula"
                                },
                                {
                                  "top_operator_name": "i",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                },
                                {
                                  "top_operator_name": "j",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                }
                              ],
                              "dummies": [],
                              "type": "boolean"
                            }
                          ],
                          "dummies": [
                            {
                              "top_operator_name": "i",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "type": "boolean"
                        }
                      ],
                      "dummies": [
                        {
                          "top_operator_name": "j",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "type": "boolean"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "not",
                  "top_kind_name": "unary_connective",
                  "arguments": [
                    {
                      "top_operator_name": "bounded_exists",
                      "top_kind_name": "bounded_quantifier",
                      "arguments": [
                        {
                          "top_operator_name": "less_than",
                          "top_kind_name": "binary_relation",
                          "arguments": [
                            {
                              "top_operator_name": "j",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "boolean"
                        },
                        {
                          "top_operator_name": "bounded_exists",
                          "top_kind_name": "bounded_quantifier",
                          "arguments": [
                            {
                              "top_operator_name": "less_than",
                              "top_kind_name": "binary_relation",
                              "arguments": [
                                {
                                  "top_operator_name": "i",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                },
                                {
                                  "top_operator_name": "j",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                }
                              ],
                              "dummies": [],
                              "type": "boolean"
                            },
                            {
                              "top_operator_name": "is_implication",
                              "top_kind_name": "prefix_function",
                              "arguments": [
                                {
                                  "top_operator_name": "element",
                                  "top_kind_name": "prefix_function",
                                  "arguments": [
                                    {
                                      "top_operator_name": "'S'",
                                      "top_kind_name": "constant",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "string"
                                    },
                                    {
                                      "top_operator_name": "n",
                                      "top_kind_name": "variable",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "integer"
                                    }
                                  ],
                                  "dummies": [],
                                  "type": "formula"
                                },
                                {
                                  "top_operator_name": "element",
                                  "top_kind_name": "prefix_function",
                                  "arguments": [
                                    {
                                      "top_operator_name": "'T'",
                                      "top_kind_name": "constant",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "string"
                                    },
                                    {
                                      "top_operator_name": "n",
                                      "top_kind_name": "variable",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "integer"
                                    }
                                  ],
                                  "dummies": [],
                                  "type": "formula"
                                },
                                {
                                  "top_operator_name": "i",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                },
                                {
                                  "top_operator_name": "j",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                }
                              ],
                              "dummies": [],
                              "type": "boolean"
                            }
                          ],
                          "dummies": [
                            {
                              "top_operator_name": "i",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "type": "boolean"
                        }
                      ],
                      "dummies": [
                        {
                          "top_operator_name": "j",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "type": "boolean"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "To conclude that "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'T'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " follows from "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "entry",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": 1,
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  },
                  {
                    "top_operator_name": "antecedents",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "set_of_formulas"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " you need to show that it follows if either "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'R'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " or "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'S'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " is true. Write 'If "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'R'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "' and then give an (indented) series of lines that deduce "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'T'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " (or a contradiction) from "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'R'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": ". Then separately write 'If "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'S'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "' and prove "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'T'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " (or a contradiction) under this assumption."
            }
          ]
        ]
      },
      {
        "name": "or_missing_antecedent_left",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'or_eliminate'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "bounded_exists",
                  "top_kind_name": "bounded_quantifier",
                  "arguments": [
                    {
                      "top_operator_name": "less_than",
                      "top_kind_name": "binary_relation",
                      "arguments": [
                        {
                          "top_operator_name": "j",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "boolean"
                    },
                    {
                      "top_operator_name": "bounded_exists",
                      "top_kind_name": "bounded_quantifier",
                      "arguments": [
                        {
                          "top_operator_name": "less_than",
                          "top_kind_name": "binary_relation",
                          "arguments": [
                            {
                              "top_operator_name": "i",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": "j",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "boolean"
                        },
                        {
                          "top_operator_name": "is_implication",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "element",
                              "top_kind_name": "prefix_function",
                              "arguments": [
                                {
                                  "top_operator_name": "'R'",
                                  "top_kind_name": "constant",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "string"
                                },
                                {
                                  "top_operator_name": "n",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                }
                              ],
                              "dummies": [],
                              "type": "formula"
                            },
                            {
                              "top_operator_name": "element",
                              "top_kind_name": "prefix_function",
                              "arguments": [
                                {
                                  "top_operator_name": "'T'",
                                  "top_kind_name": "constant",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "string"
                                },
                                {
                                  "top_operator_name": "n",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                }
                              ],
                              "dummies": [],
                              "type": "formula"
                            },
                            {
                              "top_operator_name": "i",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": "j",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "boolean"
                        }
                      ],
                      "dummies": [
                        {
                          "top_operator_name": "i",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "type": "boolean"
                    }
                  ],
                  "dummies": [
                    {
                      "top_operator_name": "j",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "You have proved that "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'T'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " follows if "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'S'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " holds; you need to also prove it follows if "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'R'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " holds."
            }
          ]
        ]
      },
      {
        "name": "or_missing_antecedent_right",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'or_eliminate'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "bounded_exists",
                  "top_kind_name": "bounded_quantifier",
                  "arguments": [
                    {
                      "top_operator_name": "less_than",
                      "top_kind_name": "binary_relation",
                      "arguments": [
                        {
                          "top_operator_name": "j",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "boolean"
                    },
                    {
                      "top_operator_name": "bounded_exists",
                      "top_kind_name": "bounded_quantifier",
                      "arguments": [
                        {
                          "top_operator_name": "less_than",
                          "top_kind_name": "binary_relation",
                          "arguments": [
                            {
                              "top_operator_name": "i",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": "j",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "boolean"
                        },
                        {
                          "top_operator_name": "is_implication",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "element",
                              "top_kind_name": "prefix_function",
                              "arguments": [
                                {
                                  "top_operator_name": "'S'",
                                  "top_kind_name": "constant",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "string"
                                },
                                {
                                  "top_operator_name": "n",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                }
                              ],
                              "dummies": [],
                              "type": "formula"
                            },
                            {
                              "top_operator_name": "element",
                              "top_kind_name": "prefix_function",
                              "arguments": [
                                {
                                  "top_operator_name": "'T'",
                                  "top_kind_name": "constant",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "string"
                                },
                                {
                                  "top_operator_name": "n",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                }
                              ],
                              "dummies": [],
                              "type": "formula"
                            },
                            {
                              "top_operator_name": "i",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": "j",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "boolean"
                        }
                      ],
                      "dummies": [
                        {
                          "top_operator_name": "i",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "type": "boolean"
                    }
                  ],
                  "dummies": [
                    {
                      "top_operator_name": "j",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "You have proved that "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'T'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " follows if "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'R'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " holds; you need to also prove it follows if "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'S'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " holds."
            }
          ]
        ]
      },
      {
        "name": "or_inaccessible_antecedent_left",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'or_eliminate'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "bounded_exists",
                  "top_kind_name": "bounded_quantifier",
                  "arguments": [
                    {
                      "top_operator_name": "less_than",
                      "top_kind_name": "binary_relation",
                      "arguments": [
                        {
                          "top_operator_name": "j",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "boolean"
                    },
                    {
                      "top_operator_name": "bounded_exists",
                      "top_kind_name": "bounded_quantifier",
                      "arguments": [
                        {
                          "top_operator_name": "less_than",
                          "top_kind_name": "binary_relation",
                          "arguments": [
                            {
                              "top_operator_name": "i",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": "j",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "boolean"
                        },
                        {
                          "top_operator_name": "and",
                          "top_kind_name": "binary_connective",
                          "arguments": [
                            {
                              "top_operator_name": "is_implication",
                              "top_kind_name": "prefix_function",
                              "arguments": [
                                {
                                  "top_operator_name": "element",
                                  "top_kind_name": "prefix_function",
                                  "arguments": [
                                    {
                                      "top_operator_name": "'R'",
                                      "top_kind_name": "constant",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "string"
                                    },
                                    {
                                      "top_operator_name": "n",
                                      "top_kind_name": "variable",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "integer"
                                    }
                                  ],
                                  "dummies": [],
                                  "type": "formula"
                                },
                                {
                                  "top_operator_name": "element",
                                  "top_kind_name": "prefix_function",
                                  "arguments": [
                                    {
                                      "top_operator_name": "'T'",
                                      "top_kind_name": "constant",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "string"
                                    },
                                    {
                                      "top_operator_name": "n",
                                      "top_kind_name": "variable",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "integer"
                                    }
                                  ],
                                  "dummies": [],
                                  "type": "formula"
                                },
                                {
                                  "top_operator_name": "i",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                },
                                {
                                  "top_operator_name": "j",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                }
                              ],
                              "dummies": [],
                              "type": "boolean"
                            },
                            {
                              "top_operator_name": "and",
                              "top_kind_name": "binary_connective",
                              "arguments": [
                                {
                                  "top_operator_name": "not",
                                  "top_kind_name": "unary_connective",
                                  "arguments": [
                                    {
                                      "top_operator_name": "bounded_exists",
                                      "top_kind_name": "bounded_quantifier",
                                      "arguments": [
                                        {
                                          "top_operator_name": "less_than",
                                          "top_kind_name": "binary_relation",
                                          "arguments": [
                                            {
                                              "top_operator_name": "k",
                                              "top_kind_name": "variable",
                                              "arguments": [],
                                              "dummies": [],
                                              "type": "integer"
                                            },
                                            {
                                              "top_operator_name": "n",
                                              "top_kind_name": "variable",
                                              "arguments": [],
                                              "dummies": [],
                                              "type": "integer"
                                            }
                                          ],
                                          "dummies": [],
                                          "type": "boolean"
                                        },
                                        {
                                          "top_operator_name": "and",
                                          "top_kind_name": "binary_connective",
                                          "arguments": [
                                            {
                                              "top_operator_name": "greater_than",
                                              "top_kind_name": "binary_relation",
                                              "arguments": [
                                                {
                                                  "top_operator_name": "k",
                                                  "top_kind_name": "variable",
                                                  "arguments": [],
                                                  "dummies": [],
                                                  "type": "integer"
                                                },
                                                {
                                                  "top_operator_name": "i",
                                                  "top_kind_name": "variable",
                                                  "arguments": [],
                                                  "dummies": [],
                                                  "type": "integer"
                                                }
                                              ],
                                              "dummies": [],
                                              "type": "boolean"
                                            },
                                            {
                                              "top_operator_name": "less_than",
                                              "top_kind_name": "binary_relation",
                                              "arguments": [
                                                {
                                                  "top_operator_name": "indentation",
                                                  "top_kind_name": "prefix_function",
                                                  "arguments": [
                                                    {
                                                      "top_operator_name": "k",
                                                      "top_kind_name": "variable",
                                                      "arguments": [],
                                                      "dummies": [],
                                                      "type": "integer"
                                                    }
                                                  ],
                                                  "dummies": [],
                                                  "type": "integer"
                                                },
                                                {
                                                  "top_operator_name": "indentation",
                                                  "top_kind_name": "prefix_function",
                                                  "arguments": [
                                                    {
                                                      "top_operator_name": "i",
                                                      "top_kind_name": "variable",
                                                      "arguments": [],
                                                      "dummies": [],
                                                      "type": "integer"
                                                    }
                                                  ],
                                                  "dummies": [],
                                                  "type": "integer"
                                                }
                                              ],
                                              "dummies": [],
                                              "type": "boolean"
                                            }
                                          ],
                                          "dummies": [],
                                          "type": "boolean"
                                        }
                                      ],
                                      "dummies": [
                                        {
                                          "top_operator_name": "k",
                                          "top_kind_name": "variable",
                                          "arguments": [],
                                          "dummies": [],
                                          "type": "integer"
                                        }
                                      ],
                                      "type": "boolean"
                                    }
                                  ],
                                  "dummies": [],
                                  "type": "boolean"
                                },
                                {
                                  "top_operator_name": "less_than_or_equals",
                                  "top_kind_name": "binary_relation",
                                  "arguments": [
                                    {
                                      "top_operator_name": "indentation",
                                      "top_kind_name": "prefix_function",
                                      "arguments": [
                                        {
                                          "top_operator_name": "i",
                                          "top_kind_name": "variable",
                                          "arguments": [],
                                          "dummies": [],
                                          "type": "integer"
                                        }
                                      ],
                                      "dummies": [],
                                      "type": "integer"
                                    },
                                    {
                                      "top_operator_name": "indentation",
                                      "top_kind_name": "prefix_function",
                                      "arguments": [
                                        {
                                          "top_operator_name": "n",
                                          "top_kind_name": "variable",
                                          "arguments": [],
                                          "dummies": [],
                                          "type": "integer"
                                        }
                                      ],
                                      "dummies": [],
                                      "type": "integer"
                                    }
                                  ],
                                  "dummies": [],
                                  "type": "boolean"
                                }
                              ],
                              "dummies": [],
                              "type": "boolean"
                            }
                          ],
                          "dummies": [],
                          "type": "boolean"
                        }
                      ],
                      "dummies": [
                        {
                          "top_operator_name": "i",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "type": "boolean"
                    }
                  ],
                  "dummies": [
                    {
                      "top_operator_name": "j",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "You proved that if "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'R'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " then "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'T'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": ", but this was in the context of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "text",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "max",
                        "top_kind_name": "ranged_function",
                        "arguments": [
                          {
                            "top_operator_name": "less_than",
                            "top_kind_name": "binary_relation",
                            "arguments": [
                              {
                                "top_operator_name": "i",
                                "top_kind_name": "variable",
                                "arguments": [],
                                "dummies": [],
                                "type": "integer"
                              },
                              {
                                "top_operator_name": "n",
                                "top_kind_name": "variable",
                                "arguments": [],
                                "dummies": [],
                                "type": "integer"
                              }
                            ],
                            "dummies": [],
                            "type": "boolean"
                          },
                          {
                            "top_operator_name": "bounded_exists",
                            "top_kind_name": "bounded_quantifier",
                            "arguments": [
                              {
                                "top_operator_name": "less_than",
                                "top_kind_name": "binary_relation",
                                "arguments": [
                                  {
                                    "top_operator_name": "j",
                                    "top_kind_name": "variable",
                                    "arguments": [],
                                    "dummies": [],
                                    "type": "integer"
                                  },
                                  {
                                    "top_operator_name": "n",
                                    "top_kind_name": "variable",
                                    "arguments": [],
                                    "dummies": [],
                                    "type": "integer"
                                  }
                                ],
                                "dummies": [],
                                "type": "boolean"
                              },
                              {
                                "top_operator_name": "is_implication",
                                "top_kind_name": "prefix_function",
                                "arguments": [
                                  {
                                    "top_operator_name": "element",
                                    "top_kind_name": "prefix_function",
                                    "arguments": [
                                      {
                                        "top_operator_name": "'R'",
                                        "top_kind_name": "constant",
                                        "arguments": [],
                                        "dummies": [],
                                        "type": "string"
                                      },
                                      {
                                        "top_operator_name": "n",
                                        "top_kind_name": "variable",
                                        "arguments": [],
                                        "dummies": [],
                                        "type": "integer"
                                      }
                                    ],
                                    "dummies": [],
                                    "type": "formula"
                                  },
                                  {
                                    "top_operator_name": "element",
                                    "top_kind_name": "prefix_function",
                                    "arguments": [
                                      {
                                        "top_operator_name": "'T'",
                                        "top_kind_name": "constant",
                                        "arguments": [],
                                        "dummies": [],
                                        "type": "string"
                                      },
                                      {
                                        "top_operator_name": "n",
                                        "top_kind_name": "variable",
                                        "arguments": [],
                                        "dummies": [],
                                        "type": "integer"
                                      }
                                    ],
                                    "dummies": [],
                                    "type": "formula"
                                  },
                                  {
                                    "top_operator_name": "i",
                                    "top_kind_name": "variable",
                                    "arguments": [],
                                    "dummies": [],
                                    "type": "integer"
                                  },
                                  {
                                    "top_operator_name": "j",
                                    "top_kind_name": "variable",
                                    "arguments": [],
                                    "dummies": [],
                                    "type": "integer"
                                  }
                                ],
                                "dummies": [],
                                "type": "boolean"
                              }
                            ],
                            "dummies": [
                              {
                                "top_operator_name": "j",
                                "top_kind_name": "variable",
                                "arguments": [],
                                "dummies": [],
                                "type": "integer"
                              }
                            ],
                            "type": "boolean"
                          }
                        ],
                        "dummies": [
                          {
                            "top_operator_name": "i",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "string"
              }
            },
            {
              "format": "string",
              "content": ", which we have since left."
            }
          ]
        ]
      },
      {
        "name": "or_inaccessible_antecedent_right",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "template",
                  "top_kind_name": "prefix_function",
                  "arguments": [
                    {
                      "top_operator_name": "n",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "string"
                },
                {
                  "top_operator_name": "'or_eliminate'",
                  "top_kind_name": "constant",
                  "arguments": [],
                  "dummies": [],
                  "type": "string"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "bounded_exists",
                  "top_kind_name": "bounded_quantifier",
                  "arguments": [
                    {
                      "top_operator_name": "less_than",
                      "top_kind_name": "binary_relation",
                      "arguments": [
                        {
                          "top_operator_name": "j",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        },
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "boolean"
                    },
                    {
                      "top_operator_name": "bounded_exists",
                      "top_kind_name": "bounded_quantifier",
                      "arguments": [
                        {
                          "top_operator_name": "less_than",
                          "top_kind_name": "binary_relation",
                          "arguments": [
                            {
                              "top_operator_name": "i",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            },
                            {
                              "top_operator_name": "j",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "boolean"
                        },
                        {
                          "top_operator_name": "and",
                          "top_kind_name": "binary_connective",
                          "arguments": [
                            {
                              "top_operator_name": "is_implication",
                              "top_kind_name": "prefix_function",
                              "arguments": [
                                {
                                  "top_operator_name": "element",
                                  "top_kind_name": "prefix_function",
                                  "arguments": [
                                    {
                                      "top_operator_name": "'S'",
                                      "top_kind_name": "constant",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "string"
                                    },
                                    {
                                      "top_operator_name": "n",
                                      "top_kind_name": "variable",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "integer"
                                    }
                                  ],
                                  "dummies": [],
                                  "type": "formula"
                                },
                                {
                                  "top_operator_name": "element",
                                  "top_kind_name": "prefix_function",
                                  "arguments": [
                                    {
                                      "top_operator_name": "'T'",
                                      "top_kind_name": "constant",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "string"
                                    },
                                    {
                                      "top_operator_name": "n",
                                      "top_kind_name": "variable",
                                      "arguments": [],
                                      "dummies": [],
                                      "type": "integer"
                                    }
                                  ],
                                  "dummies": [],
                                  "type": "formula"
                                },
                                {
                                  "top_operator_name": "i",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                },
                                {
                                  "top_operator_name": "j",
                                  "top_kind_name": "variable",
                                  "arguments": [],
                                  "dummies": [],
                                  "type": "integer"
                                }
                              ],
                              "dummies": [],
                              "type": "boolean"
                            },
                            {
                              "top_operator_name": "and",
                              "top_kind_name": "binary_connective",
                              "arguments": [
                                {
                                  "top_operator_name": "not",
                                  "top_kind_name": "unary_connective",
                                  "arguments": [
                                    {
                                      "top_operator_name": "bounded_exists",
                                      "top_kind_name": "bounded_quantifier",
                                      "arguments": [
                                        {
                                          "top_operator_name": "less_than",
                                          "top_kind_name": "binary_relation",
                                          "arguments": [
                                            {
                                              "top_operator_name": "k",
                                              "top_kind_name": "variable",
                                              "arguments": [],
                                              "dummies": [],
                                              "type": "integer"
                                            },
                                            {
                                              "top_operator_name": "n",
                                              "top_kind_name": "variable",
                                              "arguments": [],
                                              "dummies": [],
                                              "type": "integer"
                                            }
                                          ],
                                          "dummies": [],
                                          "type": "boolean"
                                        },
                                        {
                                          "top_operator_name": "and",
                                          "top_kind_name": "binary_connective",
                                          "arguments": [
                                            {
                                              "top_operator_name": "greater_than",
                                              "top_kind_name": "binary_relation",
                                              "arguments": [
                                                {
                                                  "top_operator_name": "k",
                                                  "top_kind_name": "variable",
                                                  "arguments": [],
                                                  "dummies": [],
                                                  "type": "integer"
                                                },
                                                {
                                                  "top_operator_name": "i",
                                                  "top_kind_name": "variable",
                                                  "arguments": [],
                                                  "dummies": [],
                                                  "type": "integer"
                                                }
                                              ],
                                              "dummies": [],
                                              "type": "boolean"
                                            },
                                            {
                                              "top_operator_name": "less_than",
                                              "top_kind_name": "binary_relation",
                                              "arguments": [
                                                {
                                                  "top_operator_name": "indentation",
                                                  "top_kind_name": "prefix_function",
                                                  "arguments": [
                                                    {
                                                      "top_operator_name": "k",
                                                      "top_kind_name": "variable",
                                                      "arguments": [],
                                                      "dummies": [],
                                                      "type": "integer"
                                                    }
                                                  ],
                                                  "dummies": [],
                                                  "type": "integer"
                                                },
                                                {
                                                  "top_operator_name": "indentation",
                                                  "top_kind_name": "prefix_function",
                                                  "arguments": [
                                                    {
                                                      "top_operator_name": "i",
                                                      "top_kind_name": "variable",
                                                      "arguments": [],
                                                      "dummies": [],
                                                      "type": "integer"
                                                    }
                                                  ],
                                                  "dummies": [],
                                                  "type": "integer"
                                                }
                                              ],
                                              "dummies": [],
                                              "type": "boolean"
                                            }
                                          ],
                                          "dummies": [],
                                          "type": "boolean"
                                        }
                                      ],
                                      "dummies": [
                                        {
                                          "top_operator_name": "k",
                                          "top_kind_name": "variable",
                                          "arguments": [],
                                          "dummies": [],
                                          "type": "integer"
                                        }
                                      ],
                                      "type": "boolean"
                                    }
                                  ],
                                  "dummies": [],
                                  "type": "boolean"
                                },
                                {
                                  "top_operator_name": "less_than_or_equals",
                                  "top_kind_name": "binary_relation",
                                  "arguments": [
                                    {
                                      "top_operator_name": "indentation",
                                      "top_kind_name": "prefix_function",
                                      "arguments": [
                                        {
                                          "top_operator_name": "i",
                                          "top_kind_name": "variable",
                                          "arguments": [],
                                          "dummies": [],
                                          "type": "integer"
                                        }
                                      ],
                                      "dummies": [],
                                      "type": "integer"
                                    },
                                    {
                                      "top_operator_name": "indentation",
                                      "top_kind_name": "prefix_function",
                                      "arguments": [
                                        {
                                          "top_operator_name": "n",
                                          "top_kind_name": "variable",
                                          "arguments": [],
                                          "dummies": [],
                                          "type": "integer"
                                        }
                                      ],
                                      "dummies": [],
                                      "type": "integer"
                                    }
                                  ],
                                  "dummies": [],
                                  "type": "boolean"
                                }
                              ],
                              "dummies": [],
                              "type": "boolean"
                            }
                          ],
                          "dummies": [],
                          "type": "boolean"
                        }
                      ],
                      "dummies": [
                        {
                          "top_operator_name": "i",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "type": "boolean"
                    }
                  ],
                  "dummies": [
                    {
                      "top_operator_name": "j",
                      "top_kind_name": "variable",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "You proved that if "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'S'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " then "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "element",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "'T'",
                    "top_kind_name": "constant",
                    "arguments": [],
                    "dummies": [],
                    "type": "string"
                  },
                  {
                    "top_operator_name": "n",
                    "top_kind_name": "variable",
                    "arguments": [],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": ", but this was in the context of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "text",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "max",
                        "top_kind_name": "ranged_function",
                        "arguments": [
                          {
                            "top_operator_name": "less_than",
                            "top_kind_name": "binary_relation",
                            "arguments": [
                              {
                                "top_operator_name": "i",
                                "top_kind_name": "variable",
                                "arguments": [],
                                "dummies": [],
                                "type": "integer"
                              },
                              {
                                "top_operator_name": "n",
                                "top_kind_name": "variable",
                                "arguments": [],
                                "dummies": [],
                                "type": "integer"
                              }
                            ],
                            "dummies": [],
                            "type": "boolean"
                          },
                          {
                            "top_operator_name": "bounded_exists",
                            "top_kind_name": "bounded_quantifier",
                            "arguments": [
                              {
                                "top_operator_name": "less_than",
                                "top_kind_name": "binary_relation",
                                "arguments": [
                                  {
                                    "top_operator_name": "j",
                                    "top_kind_name": "variable",
                                    "arguments": [],
                                    "dummies": [],
                                    "type": "integer"
                                  },
                                  {
                                    "top_operator_name": "n",
                                    "top_kind_name": "variable",
                                    "arguments": [],
                                    "dummies": [],
                                    "type": "integer"
                                  }
                                ],
                                "dummies": [],
                                "type": "boolean"
                              },
                              {
                                "top_operator_name": "is_implication",
                                "top_kind_name": "prefix_function",
                                "arguments": [
                                  {
                                    "top_operator_name": "element",
                                    "top_kind_name": "prefix_function",
                                    "arguments": [
                                      {
                                        "top_operator_name": "'S'",
                                        "top_kind_name": "constant",
                                        "arguments": [],
                                        "dummies": [],
                                        "type": "string"
                                      },
                                      {
                                        "top_operator_name": "n",
                                        "top_kind_name": "variable",
                                        "arguments": [],
                                        "dummies": [],
                                        "type": "integer"
                                      }
                                    ],
                                    "dummies": [],
                                    "type": "formula"
                                  },
                                  {
                                    "top_operator_name": "element",
                                    "top_kind_name": "prefix_function",
                                    "arguments": [
                                      {
                                        "top_operator_name": "'T'",
                                        "top_kind_name": "constant",
                                        "arguments": [],
                                        "dummies": [],
                                        "type": "string"
                                      },
                                      {
                                        "top_operator_name": "n",
                                        "top_kind_name": "variable",
                                        "arguments": [],
                                        "dummies": [],
                                        "type": "integer"
                                      }
                                    ],
                                    "dummies": [],
                                    "type": "formula"
                                  },
                                  {
                                    "top_operator_name": "i",
                                    "top_kind_name": "variable",
                                    "arguments": [],
                                    "dummies": [],
                                    "type": "integer"
                                  },
                                  {
                                    "top_operator_name": "j",
                                    "top_kind_name": "variable",
                                    "arguments": [],
                                    "dummies": [],
                                    "type": "integer"
                                  }
                                ],
                                "dummies": [],
                                "type": "boolean"
                              }
                            ],
                            "dummies": [
                              {
                                "top_operator_name": "j",
                                "top_kind_name": "variable",
                                "arguments": [],
                                "dummies": [],
                                "type": "integer"
                              }
                            ],
                            "type": "boolean"
                          }
                        ],
                        "dummies": [
                          {
                            "top_operator_name": "i",
                            "top_kind_name": "variable",
                            "arguments": [],
                            "dummies": [],
                            "type": "integer"
                          }
                        ],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "string"
              }
            },
            {
              "format": "string",
              "content": ", which we have since left."
            }
          ]
        ]
      }
    ]
  },
  {
    "name": "target",
    "entries": [
      {
        "name": "last_line_indented_assumption",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "n",
                  "top_kind_name": "variable",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                },
                {
                  "top_operator_name": "num_lines",
                  "top_kind_name": "prefix_function",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "and",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "greater_than",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": 0,
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "not_equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "scoper",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'given'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "The last line of a proof should not be indented; you need to prove that the given formulas holds just from the original assumptions, not the additional assumption of "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "result",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": "."
            }
          ]
        ]
      },
      {
        "name": "last_line_indented_given",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "n",
                  "top_kind_name": "variable",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                },
                {
                  "top_operator_name": "num_lines",
                  "top_kind_name": "prefix_function",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "and",
              "top_kind_name": "binary_connective",
              "arguments": [
                {
                  "top_operator_name": "greater_than",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "indentation",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "integer"
                    },
                    {
                      "top_operator_name": 0,
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "integer"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                },
                {
                  "top_operator_name": "equals",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "template",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "scoper",
                          "top_kind_name": "prefix_function",
                          "arguments": [
                            {
                              "top_operator_name": "n",
                              "top_kind_name": "variable",
                              "arguments": [],
                              "dummies": [],
                              "type": "integer"
                            }
                          ],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "string"
                    },
                    {
                      "top_operator_name": "'given'",
                      "top_kind_name": "constant",
                      "arguments": [],
                      "dummies": [],
                      "type": "string"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "The last line of a proof should not be indented; you should have ceased working within the scope of '"
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "text",
                "top_kind_name": "prefix_function",
                "arguments": [
                  {
                    "top_operator_name": "scoper",
                    "top_kind_name": "prefix_function",
                    "arguments": [
                      {
                        "top_operator_name": "n",
                        "top_kind_name": "variable",
                        "arguments": [],
                        "dummies": [],
                        "type": "integer"
                      }
                    ],
                    "dummies": [],
                    "type": "integer"
                  }
                ],
                "dummies": [],
                "type": "string"
              }
            },
            {
              "format": "string",
              "content": "' by this point, typically by introducing a forall statement."
            }
          ]
        ]
      },
      {
        "name": "last_line_not_target",
        "occurs": {
          "top_operator_name": "and",
          "top_kind_name": "binary_connective",
          "arguments": [
            {
              "top_operator_name": "equals",
              "top_kind_name": "binary_relation",
              "arguments": [
                {
                  "top_operator_name": "n",
                  "top_kind_name": "variable",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                },
                {
                  "top_operator_name": "num_lines",
                  "top_kind_name": "prefix_function",
                  "arguments": [],
                  "dummies": [],
                  "type": "integer"
                }
              ],
              "dummies": [],
              "type": "boolean"
            },
            {
              "top_operator_name": "not",
              "top_kind_name": "unary_connective",
              "arguments": [
                {
                  "top_operator_name": "is_in",
                  "top_kind_name": "binary_relation",
                  "arguments": [
                    {
                      "top_operator_name": "target",
                      "top_kind_name": "prefix_function",
                      "arguments": [],
                      "dummies": [],
                      "type": "formula"
                    },
                    {
                      "top_operator_name": "results",
                      "top_kind_name": "prefix_function",
                      "arguments": [
                        {
                          "top_operator_name": "n",
                          "top_kind_name": "variable",
                          "arguments": [],
                          "dummies": [],
                          "type": "integer"
                        }
                      ],
                      "dummies": [],
                      "type": "set_of_formulas"
                    }
                  ],
                  "dummies": [],
                  "type": "boolean"
                }
              ],
              "dummies": [],
              "type": "boolean"
            }
          ],
          "dummies": [],
          "type": "boolean"
        },
        "message": [
          [
            {
              "format": "string",
              "content": "We are trying to prove "
            },
            {
              "format": "expression",
              "content": {
                "top_operator_name": "target",
                "top_kind_name": "prefix_function",
                "arguments": [],
                "dummies": [],
                "type": "formula"
              }
            },
            {
              "format": "string",
              "content": " so it should be given by the final line of the proof."
            }
          ]
        ]
      }
    ]
  }],
  control_functions: [{
    'name': 'variable',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'formula'
      }
    ],
    'definition': {
      'top_operator_name': 'entry',
      'top_kind_name': 'prefix_function',
      'arguments': [
        {
          'top_operator_name': 1,
          'top_kind_name': 'constant',
          'arguments': [],
          'dummies': [],
          'type': 'integer'
        },
        {
          'top_operator_name': 'variables',
          'top_kind_name': 'prefix_function',
          'arguments': [
            {
              'top_operator_name': 'n',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'dummies': [],
          'type': 'set_of_formulas'
        }
      ],
      'dummies': [],
      'type': 'formula'
    },
    'description': 'The free variable occurring in line n (if any)'
  },
  {
    'name': 'result',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'formula'
      }
    ],
    'definition': {
      'top_operator_name': 'entry',
      'top_kind_name': 'prefix_function',
      'arguments': [
        {
          'top_operator_name': 1,
          'top_kind_name': 'constant',
          'arguments': [],
          'dummies': [],
          'type': 'integer'
        },
        {
          'top_operator_name': 'results',
          'top_kind_name': 'prefix_function',
          'arguments': [
            {
              'top_operator_name': 'n',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'dummies': [],
          'type': 'set_of_formulas'
        }
      ],
      'dummies': [],
      'type': 'formula'
    },
    'description': 'The result of line n (if any)'
  },
  {
    'name': 'is_scope_creator',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'boolean'
      }
    ],
    'definition': {
      'top_operator_name': 'or',
      'top_kind_name': 'binary_connective',
      'arguments': [
        {
          'top_operator_name': 'equals',
          'top_kind_name': 'binary_relation',
          'arguments': [
            {
              'top_operator_name': 'template',
              'top_kind_name': 'prefix_function',
              'arguments': [
                {
                  'top_operator_name': 'n',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'string'
            },
            {
              'top_operator_name': '\'given\'',
              'top_kind_name': 'constant',
              'arguments': [],
              'dummies': [],
              'type': 'string'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        },
        {
          'top_operator_name': 'equals',
          'top_kind_name': 'binary_relation',
          'arguments': [
            {
              'top_operator_name': 'template',
              'top_kind_name': 'prefix_function',
              'arguments': [
                {
                  'top_operator_name': 'n',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'string'
            },
            {
              'top_operator_name': '\'assumption\'',
              'top_kind_name': 'constant',
              'arguments': [],
              'dummies': [],
              'type': 'string'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        }
      ],
      'dummies': [],
      'type': 'boolean'
    },
    'description': 'Whether the line after this one should be indented'
  },
  {
    'name': 'scoper',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'integer'
      }
    ],
    'definition': {
      'top_operator_name': 'max',
      'top_kind_name': 'ranged_function',
      'arguments': [
        {
          'top_operator_name': 'less_than',
          'top_kind_name': 'binary_relation',
          'arguments': [
            {
              'top_operator_name': 'k',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            },
            {
              'top_operator_name': 'n',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        },
        {
          'top_operator_name': 'less_than',
          'top_kind_name': 'binary_relation',
          'arguments': [
            {
              'top_operator_name': 'indentation',
              'top_kind_name': 'prefix_function',
              'arguments': [
                {
                  'top_operator_name': 'k',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'integer'
            },
            {
              'top_operator_name': 'indentation',
              'top_kind_name': 'prefix_function',
              'arguments': [
                {
                  'top_operator_name': 'n',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        }
      ],
      'dummies': [
        {
          'top_operator_name': 'k',
          'top_kind_name': 'variable',
          'arguments': [],
          'dummies': [],
          'type': 'integer'
        }
      ],
      'type': 'integer'
    },
    'description': 'The most recent line (not including n) in whose scope line n is'
  },
  {
    'name': 'scoper2',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'integer'
      }
    ],
    'definition': {
      'top_operator_name': 'if',
      'top_kind_name': 'prefix_function',
      'arguments': [
        {
          'top_operator_name': 'is_scope_creator',
          'top_kind_name': 'prefix_function',
          'arguments': [
            {
              'top_operator_name': 'n',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        },
        {
          'top_operator_name': 'n',
          'top_kind_name': 'variable',
          'arguments': [],
          'dummies': [],
          'type': 'integer'
        },
        {
          'top_operator_name': 'scoper',
          'top_kind_name': 'prefix_function',
          'arguments': [
            {
              'top_operator_name': 'n',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'dummies': [],
          'type': 'integer'
        }
      ],
      'dummies': [],
      'type': 'integer'
    },
    'description': 'The most recent line (including n) in whose scope line n is'
  },
  {
    'name': 'is_in_scope',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'k',
        'arguments': [],
        'dummies': []
      },
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'integer',
            'arbitrarily_many': false
          },
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'boolean'
      }
    ],
    'definition': {
      'top_operator_name': 'or',
      'top_kind_name': 'binary_connective',
      'arguments': [
        {
          'top_operator_name': 'and',
          'top_kind_name': 'binary_connective',
          'arguments': [
            {
              'top_operator_name': 'not',
              'top_kind_name': 'unary_connective',
              'arguments': [
                {
                  'top_operator_name': 'is_scope_creator',
                  'top_kind_name': 'prefix_function',
                  'arguments': [
                    {
                      'top_operator_name': 'k',
                      'top_kind_name': 'variable',
                      'arguments': [],
                      'dummies': [],
                      'type': 'integer'
                    }
                  ],
                  'dummies': [],
                  'type': 'boolean'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            },
            {
              'top_operator_name': 'and',
              'top_kind_name': 'binary_connective',
              'arguments': [
                {
                  'top_operator_name': 'greater_than_or_equals',
                  'top_kind_name': 'binary_relation',
                  'arguments': [
                    {
                      'top_operator_name': 'indentation',
                      'top_kind_name': 'prefix_function',
                      'arguments': [
                        {
                          'top_operator_name': 'n',
                          'top_kind_name': 'variable',
                          'arguments': [],
                          'dummies': [],
                          'type': 'integer'
                        }
                      ],
                      'dummies': [],
                      'type': 'integer'
                    },
                    {
                      'top_operator_name': 'indentation',
                      'top_kind_name': 'prefix_function',
                      'arguments': [
                        {
                          'top_operator_name': 'k',
                          'top_kind_name': 'variable',
                          'arguments': [],
                          'dummies': [],
                          'type': 'integer'
                        }
                      ],
                      'dummies': [],
                      'type': 'integer'
                    }
                  ],
                  'dummies': [],
                  'type': 'boolean'
                },
                {
                  'top_operator_name': 'not',
                  'top_kind_name': 'unary_connective',
                  'arguments': [
                    {
                      'top_operator_name': 'bounded_exists',
                      'top_kind_name': 'bounded_quantifier',
                      'arguments': [
                        {
                          'top_operator_name': 'less_than',
                          'top_kind_name': 'binary_relation',
                          'arguments': [
                            {
                              'top_operator_name': 'i',
                              'top_kind_name': 'variable',
                              'arguments': [],
                              'dummies': [],
                              'type': 'integer'
                            },
                            {
                              'top_operator_name': 'n',
                              'top_kind_name': 'variable',
                              'arguments': [],
                              'dummies': [],
                              'type': 'integer'
                            }
                          ],
                          'dummies': [],
                          'type': 'boolean'
                        },
                        {
                          'top_operator_name': 'and',
                          'top_kind_name': 'binary_connective',
                          'arguments': [
                            {
                              'top_operator_name': 'greater_than',
                              'top_kind_name': 'binary_relation',
                              'arguments': [
                                {
                                  'top_operator_name': 'i',
                                  'top_kind_name': 'variable',
                                  'arguments': [],
                                  'dummies': [],
                                  'type': 'integer'
                                },
                                {
                                  'top_operator_name': 'k',
                                  'top_kind_name': 'variable',
                                  'arguments': [],
                                  'dummies': [],
                                  'type': 'integer'
                                }
                              ],
                              'dummies': [],
                              'type': 'boolean'
                            },
                            {
                              'top_operator_name': 'less_than',
                              'top_kind_name': 'binary_relation',
                              'arguments': [
                                {
                                  'top_operator_name': 'indentation',
                                  'top_kind_name': 'prefix_function',
                                  'arguments': [
                                    {
                                      'top_operator_name': 'i',
                                      'top_kind_name': 'variable',
                                      'arguments': [],
                                      'dummies': [],
                                      'type': 'integer'
                                    }
                                  ],
                                  'dummies': [],
                                  'type': 'integer'
                                },
                                {
                                  'top_operator_name': 'indentation',
                                  'top_kind_name': 'prefix_function',
                                  'arguments': [
                                    {
                                      'top_operator_name': 'k',
                                      'top_kind_name': 'variable',
                                      'arguments': [],
                                      'dummies': [],
                                      'type': 'integer'
                                    }
                                  ],
                                  'dummies': [],
                                  'type': 'integer'
                                }
                              ],
                              'dummies': [],
                              'type': 'boolean'
                            }
                          ],
                          'dummies': [],
                          'type': 'boolean'
                        }
                      ],
                      'dummies': [
                        {
                          'top_operator_name': 'i',
                          'top_kind_name': 'variable',
                          'arguments': [],
                          'dummies': [],
                          'type': 'integer'
                        }
                      ],
                      'type': 'boolean'
                    }
                  ],
                  'dummies': [],
                  'type': 'boolean'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        },
        {
          'top_operator_name': 'and',
          'top_kind_name': 'binary_connective',
          'arguments': [
            {
              'top_operator_name': 'greater_than',
              'top_kind_name': 'binary_relation',
              'arguments': [
                {
                  'top_operator_name': 'indentation',
                  'top_kind_name': 'prefix_function',
                  'arguments': [
                    {
                      'top_operator_name': 'n',
                      'top_kind_name': 'variable',
                      'arguments': [],
                      'dummies': [],
                      'type': 'integer'
                    }
                  ],
                  'dummies': [],
                  'type': 'integer'
                },
                {
                  'top_operator_name': 'indentation',
                  'top_kind_name': 'prefix_function',
                  'arguments': [
                    {
                      'top_operator_name': 'k',
                      'top_kind_name': 'variable',
                      'arguments': [],
                      'dummies': [],
                      'type': 'integer'
                    }
                  ],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            },
            {
              'top_operator_name': 'not',
              'top_kind_name': 'unary_connective',
              'arguments': [
                {
                  'top_operator_name': 'bounded_exists',
                  'top_kind_name': 'bounded_quantifier',
                  'arguments': [
                    {
                      'top_operator_name': 'less_than_or_equals',
                      'top_kind_name': 'binary_relation',
                      'arguments': [
                        {
                          'top_operator_name': 'i',
                          'top_kind_name': 'variable',
                          'arguments': [],
                          'dummies': [],
                          'type': 'integer'
                        },
                        {
                          'top_operator_name': 'n',
                          'top_kind_name': 'variable',
                          'arguments': [],
                          'dummies': [],
                          'type': 'integer'
                        }
                      ],
                      'dummies': [],
                      'type': 'boolean'
                    },
                    {
                      'top_operator_name': 'and',
                      'top_kind_name': 'binary_connective',
                      'arguments': [
                        {
                          'top_operator_name': 'greater_than',
                          'top_kind_name': 'binary_relation',
                          'arguments': [
                            {
                              'top_operator_name': 'i',
                              'top_kind_name': 'variable',
                              'arguments': [],
                              'dummies': [],
                              'type': 'integer'
                            },
                            {
                              'top_operator_name': 'k',
                              'top_kind_name': 'variable',
                              'arguments': [],
                              'dummies': [],
                              'type': 'integer'
                            }
                          ],
                          'dummies': [],
                          'type': 'boolean'
                        },
                        {
                          'top_operator_name': 'less_than_or_equals',
                          'top_kind_name': 'binary_relation',
                          'arguments': [
                            {
                              'top_operator_name': 'indentation',
                              'top_kind_name': 'prefix_function',
                              'arguments': [
                                {
                                  'top_operator_name': 'i',
                                  'top_kind_name': 'variable',
                                  'arguments': [],
                                  'dummies': [],
                                  'type': 'integer'
                                }
                              ],
                              'dummies': [],
                              'type': 'integer'
                            },
                            {
                              'top_operator_name': 'indentation',
                              'top_kind_name': 'prefix_function',
                              'arguments': [
                                {
                                  'top_operator_name': 'k',
                                  'top_kind_name': 'variable',
                                  'arguments': [],
                                  'dummies': [],
                                  'type': 'integer'
                                }
                              ],
                              'dummies': [],
                              'type': 'integer'
                            }
                          ],
                          'dummies': [],
                          'type': 'boolean'
                        }
                      ],
                      'dummies': [],
                      'type': 'boolean'
                    }
                  ],
                  'dummies': [
                    {
                      'top_operator_name': 'i',
                      'top_kind_name': 'variable',
                      'arguments': [],
                      'dummies': [],
                      'type': 'integer'
                    }
                  ],
                  'type': 'boolean'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        }
      ],
      'dummies': [],
      'type': 'boolean'
    },
    'description': 'Whether the results and variables of line k<=n are accessible to line n'
  },
  {
    'name': 'is_initializer',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'boolean'
      }
    ],
    'definition': {
      'top_operator_name': 'or',
      'top_kind_name': 'binary_connective',
      'arguments': [
        {
          'top_operator_name': 'equals',
          'top_kind_name': 'binary_relation',
          'arguments': [
            {
              'top_operator_name': 'template',
              'top_kind_name': 'prefix_function',
              'arguments': [
                {
                  'top_operator_name': 'n',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'string'
            },
            {
              'top_operator_name': '\'given\'',
              'top_kind_name': 'constant',
              'arguments': [],
              'dummies': [],
              'type': 'string'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        },
        {
          'top_operator_name': 'or',
          'top_kind_name': 'binary_connective',
          'arguments': [
            {
              'top_operator_name': 'equals',
              'top_kind_name': 'binary_relation',
              'arguments': [
                {
                  'top_operator_name': 'template',
                  'top_kind_name': 'prefix_function',
                  'arguments': [
                    {
                      'top_operator_name': 'n',
                      'top_kind_name': 'variable',
                      'arguments': [],
                      'dummies': [],
                      'type': 'integer'
                    }
                  ],
                  'dummies': [],
                  'type': 'string'
                },
                {
                  'top_operator_name': '\'for_all_eliminate\'',
                  'top_kind_name': 'constant',
                  'arguments': [],
                  'dummies': [],
                  'type': 'string'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            },
            {
              'top_operator_name': 'or',
              'top_kind_name': 'binary_connective',
              'arguments': [
                {
                  'top_operator_name': 'equals',
                  'top_kind_name': 'binary_relation',
                  'arguments': [
                    {
                      'top_operator_name': 'template',
                      'top_kind_name': 'prefix_function',
                      'arguments': [
                        {
                          'top_operator_name': 'n',
                          'top_kind_name': 'variable',
                          'arguments': [],
                          'dummies': [],
                          'type': 'integer'
                        }
                      ],
                      'dummies': [],
                      'type': 'string'
                    },
                    {
                      'top_operator_name': '\'exists_eliminate\'',
                      'top_kind_name': 'constant',
                      'arguments': [],
                      'dummies': [],
                      'type': 'string'
                    }
                  ],
                  'dummies': [],
                  'type': 'boolean'
                },
                {
                  'top_operator_name': 'equals',
                  'top_kind_name': 'binary_relation',
                  'arguments': [
                    {
                      'top_operator_name': 'template',
                      'top_kind_name': 'prefix_function',
                      'arguments': [
                        {
                          'top_operator_name': 'n',
                          'top_kind_name': 'variable',
                          'arguments': [],
                          'dummies': [],
                          'type': 'integer'
                        }
                      ],
                      'dummies': [],
                      'type': 'string'
                    },
                    {
                      'top_operator_name': '\'take\'',
                      'top_kind_name': 'constant',
                      'arguments': [],
                      'dummies': [],
                      'type': 'string'
                    }
                  ],
                  'dummies': [],
                  'type': 'boolean'
                }
              ],
              'dummies': []
            }
          ],
          'dummies': [],
          'type': 'boolean'
        }
      ],
      'dummies': [],
      'type': 'boolean'
    },
    'description': 'Whether line n initializes its variables'
  },
  {
    'name': 'initializes',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'x',
        'arguments': [],
        'dummies': []
      },
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'formula',
            'arbitrarily_many': false
          },
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'boolean'
      }
    ],
    'definition': {
      'top_operator_name': 'and',
      'top_kind_name': 'binary_connective',
      'arguments': [
        {
          'top_operator_name': 'is_initializer',
          'top_kind_name': 'prefix_function',
          'arguments': [
            {
              'top_operator_name': 'n',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        },
        {
          'top_operator_name': 'is_in',
          'top_kind_name': 'binary_relation',
          'arguments': [
            {
              'top_operator_name': 'x',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'formula'
            },
            {
              'top_operator_name': 'variables',
              'top_kind_name': 'prefix_function',
              'arguments': [
                {
                  'top_operator_name': 'n',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'set_of_formulas'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        }
      ],
      'dummies': [],
      'type': 'boolean'
    },
    'description': 'Whether line n initializes variable x'
  },
  {
    'name': 'is_initialized',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'x',
        'arguments': [],
        'dummies': []
      },
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'formula',
            'arbitrarily_many': false
          },
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'boolean'
      }
    ],
    'definition': {
      'top_operator_name': 'or',
      'top_kind_name': 'binary_connective',
      'arguments': [
        {
          'top_operator_name': 'is_in',
          'top_kind_name': 'binary_relation',
          'arguments': [
            {
              'top_operator_name': 'x',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'formula'
            },
            {
              'top_operator_name': 'question_variables',
              'top_kind_name': 'prefix_function',
              'arguments': [],
              'dummies': [],
              'type': 'set_of_formulas'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        },
        {
          'top_operator_name': 'bounded_exists',
          'top_kind_name': 'bounded_quantifier',
          'arguments': [
            {
              'top_operator_name': 'less_than',
              'top_kind_name': 'binary_relation',
              'arguments': [
                {
                  'top_operator_name': 'k',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                },
                {
                  'top_operator_name': 'n',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            },
            {
              'top_operator_name': 'initializes',
              'top_kind_name': 'prefix_function',
              'arguments': [
                {
                  'top_operator_name': 'x',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'formula'
                },
                {
                  'top_operator_name': 'k',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            }
          ],
          'dummies': [
            {
              'top_operator_name': 'k',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'type': 'boolean'
        }
      ],
      'dummies': [],
      'type': 'boolean'
    },
    'description': 'Whether variable x is initialized by line n (this does not mean it is legal to use, as it may be out of scope).'
  },
  {
    'name': 'initializer',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'x',
        'arguments': [],
        'dummies': []
      },
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'formula',
            'arbitrarily_many': false
          },
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'integer'
      }
    ],
    'definition': {
      'top_operator_name': 'max',
      'top_kind_name': 'ranged_function',
      'arguments': [
        {
          'top_operator_name': 'less_than',
          'top_kind_name': 'binary_relation',
          'arguments': [
            {
              'top_operator_name': 'k',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            },
            {
              'top_operator_name': 'n',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        },
        {
          'top_operator_name': 'initializes',
          'top_kind_name': 'prefix_function',
          'arguments': [
            {
              'top_operator_name': 'x',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'formula'
            },
            {
              'top_operator_name': 'k',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        }
      ],
      'dummies': [
        {
          'top_operator_name': 'k',
          'top_kind_name': 'variable',
          'arguments': [],
          'dummies': [],
          'type': 'integer'
        }
      ],
      'type': 'integer'
    },
    'description': 'The most recent line before n that initializes x'
  },
  {
    'name': 'is_accessible',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'x',
        'arguments': [],
        'dummies': []
      },
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'formula',
            'arbitrarily_many': false
          },
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'boolean'
      }
    ],
    'definition': {
      'top_operator_name': 'or',
      'top_kind_name': 'binary_connective',
      'arguments': [
        {
          'top_operator_name': 'is_in',
          'top_kind_name': 'binary_relation',
          'arguments': [
            {
              'top_operator_name': 'x',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'formula'
            },
            {
              'top_operator_name': 'question_variables',
              'top_kind_name': 'prefix_function',
              'arguments': [],
              'dummies': [],
              'type': 'set_of_formulas'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        },
        {
          'top_operator_name': 'bounded_exists',
          'top_kind_name': 'bounded_quantifier',
          'arguments': [
            {
              'top_operator_name': 'less_than',
              'top_kind_name': 'binary_relation',
              'arguments': [
                {
                  'top_operator_name': 'k',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                },
                {
                  'top_operator_name': 'n',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            },
            {
              'top_operator_name': 'and',
              'top_kind_name': 'binary_connective',
              'arguments': [
                {
                  'top_operator_name': 'initializes',
                  'top_kind_name': 'prefix_function',
                  'arguments': [
                    {
                      'top_operator_name': 'x',
                      'top_kind_name': 'variable',
                      'arguments': [],
                      'dummies': [],
                      'type': 'formula'
                    },
                    {
                      'top_operator_name': 'k',
                      'top_kind_name': 'variable',
                      'arguments': [],
                      'dummies': [],
                      'type': 'integer'
                    }
                  ],
                  'dummies': [],
                  'type': 'boolean'
                },
                {
                  'top_operator_name': 'is_in_scope',
                  'top_kind_name': 'prefix_function',
                  'arguments': [
                    {
                      'top_operator_name': 'k',
                      'top_kind_name': 'variable',
                      'arguments': [],
                      'dummies': [],
                      'type': 'integer'
                    },
                    {
                      'top_operator_name': 'n',
                      'top_kind_name': 'variable',
                      'arguments': [],
                      'dummies': [],
                      'type': 'integer'
                    }
                  ],
                  'dummies': [],
                  'type': 'boolean'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            }
          ],
          'dummies': [
            {
              'top_operator_name': 'k',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'type': 'boolean'
        }
      ],
      'dummies': [],
      'type': 'boolean'
    },
    'description': 'Whether variable x is initialized and still available by line n'
  },
  {
    'name': 'is_arbitrary',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'x',
        'arguments': [],
        'dummies': []
      },
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'formula',
            'arbitrarily_many': false
          },
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'boolean'
      }
    ],
    'definition': {
      'top_operator_name': 'equals',
      'top_kind_name': 'binary_relation',
      'arguments': [
        {
          'top_operator_name': 'template',
          'top_kind_name': 'prefix_function',
          'arguments': [
            {
              'top_operator_name': 'initializer',
              'top_kind_name': 'prefix_function',
              'arguments': [
                {
                  'top_operator_name': 'x',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'formula'
                },
                {
                  'top_operator_name': 'n',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'dummies': [],
          'type': 'string'
        },
        {
          'top_operator_name': '\'given\'',
          'top_kind_name': 'constant',
          'arguments': [],
          'dummies': [],
          'type': 'string'
        }
      ],
      'dummies': [],
      'type': 'boolean'
    },
    'description': 'Whether variable x is arbitrary at line n'
  },
  {
    'name': 'is_proven',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'R',
        'arguments': [],
        'dummies': []
      },
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'formula',
            'arbitrarily_many': false
          },
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'boolean'
      }
    ],
    'definition': {
      'top_operator_name': 'or',
      'top_kind_name': 'binary_connective',
      'arguments': [
        {
          'top_operator_name': 'is_in',
          'top_kind_name': 'binary_relation',
          'arguments': [
            {
              'top_operator_name': 'R',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'formula'
            },
            {
              'top_operator_name': 'assumptions',
              'top_kind_name': 'prefix_function',
              'arguments': [],
              'dummies': [],
              'type': 'set_of_formulas'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        },
        {
          'top_operator_name': 'bounded_exists',
          'top_kind_name': 'bounded_quantifier',
          'arguments': [
            {
              'top_operator_name': 'less_than',
              'top_kind_name': 'binary_relation',
              'arguments': [
                {
                  'top_operator_name': 'k',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                },
                {
                  'top_operator_name': 'n',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            },
            {
              'top_operator_name': 'is_in',
              'top_kind_name': 'binary_relation',
              'arguments': [
                {
                  'top_operator_name': 'R',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'formula'
                },
                {
                  'top_operator_name': 'results',
                  'top_kind_name': 'prefix_function',
                  'arguments': [
                    {
                      'top_operator_name': 'k',
                      'top_kind_name': 'variable',
                      'arguments': [],
                      'dummies': [],
                      'type': 'integer'
                    }
                  ],
                  'dummies': [],
                  'type': 'set_of_formulas'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            }
          ],
          'dummies': [
            {
              'top_operator_name': 'k',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'type': 'boolean'
        }
      ],
      'dummies': [],
      'type': 'boolean'
    },
    'description': 'Whether there is a line before n that proves R (again, it may still be out of scope and thus unusable).'
  },
  {
    'name': 'prover',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'R',
        'arguments': [],
        'dummies': []
      },
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'formula',
            'arbitrarily_many': false
          },
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'integer'
      }
    ],
    'definition': {
      'top_operator_name': 'max',
      'top_kind_name': 'ranged_function',
      'arguments': [
        {
          'top_operator_name': 'less_than',
          'top_kind_name': 'binary_relation',
          'arguments': [
            {
              'top_operator_name': 'k',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            },
            {
              'top_operator_name': 'n',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        },
        {
          'top_operator_name': 'is_in',
          'top_kind_name': 'binary_relation',
          'arguments': [
            {
              'top_operator_name': 'R',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'formula'
            },
            {
              'top_operator_name': 'results',
              'top_kind_name': 'prefix_function',
              'arguments': [
                {
                  'top_operator_name': 'k',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'set_of_formulas'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        }
      ],
      'dummies': [
        {
          'top_operator_name': 'k',
          'top_kind_name': 'variable',
          'arguments': [],
          'dummies': [],
          'type': 'integer'
        }
      ],
      'type': 'integer'
    },
    'description': 'The most recent line before n that proves R.'
  },
  {
    'name': 'is_available',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'R',
        'arguments': [],
        'dummies': []
      },
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'formula',
            'arbitrarily_many': false
          },
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'boolean'
      }
    ],
    'definition': {
      'top_operator_name': 'or',
      'top_kind_name': 'binary_connective',
      'arguments': [
        {
          'top_operator_name': 'is_in',
          'top_kind_name': 'binary_relation',
          'arguments': [
            {
              'top_operator_name': 'R',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'formula'
            },
            {
              'top_operator_name': 'assumptions',
              'top_kind_name': 'prefix_function',
              'arguments': [],
              'dummies': [],
              'type': 'set_of_formulas'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        },
        {
          'top_operator_name': 'bounded_exists',
          'top_kind_name': 'bounded_quantifier',
          'arguments': [
            {
              'top_operator_name': 'less_than',
              'top_kind_name': 'binary_relation',
              'arguments': [
                {
                  'top_operator_name': 'k',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                },
                {
                  'top_operator_name': 'n',
                  'top_kind_name': 'variable',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            },
            {
              'top_operator_name': 'and',
              'top_kind_name': 'binary_connective',
              'arguments': [
                {
                  'top_operator_name': 'is_in_scope',
                  'top_kind_name': 'prefix_function',
                  'arguments': [
                    {
                      'top_operator_name': 'k',
                      'top_kind_name': 'variable',
                      'arguments': [],
                      'dummies': [],
                      'type': 'integer'
                    },
                    {
                      'top_operator_name': 'n',
                      'top_kind_name': 'variable',
                      'arguments': [],
                      'dummies': [],
                      'type': 'integer'
                    }
                  ],
                  'dummies': [],
                  'type': 'boolean'
                },
                {
                  'top_operator_name': 'is_in',
                  'top_kind_name': 'binary_relation',
                  'arguments': [
                    {
                      'top_operator_name': 'R',
                      'top_kind_name': 'variable',
                      'arguments': [],
                      'dummies': [],
                      'type': 'formula'
                    },
                    {
                      'top_operator_name': 'results',
                      'top_kind_name': 'prefix_function',
                      'arguments': [
                        {
                          'top_operator_name': 'k',
                          'top_kind_name': 'variable',
                          'arguments': [],
                          'dummies': [],
                          'type': 'integer'
                        }
                      ],
                      'dummies': [],
                      'type': 'set_of_formulas'
                    }
                  ],
                  'dummies': [],
                  'type': 'boolean'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            }
          ],
          'dummies': [
            {
              'top_operator_name': 'k',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'type': 'boolean'
        }
      ],
      'dummies': [],
      'type': 'boolean'
    },
    'description': 'Whether R is available to use by line n'
  },
  {
    'name': 'yields_false',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'boolean'
      }
    ],
    'definition': {
      'top_operator_name': 'equals',
      'top_kind_name': 'binary_relation',
      'arguments': [
        {
          'top_operator_name': 'template',
          'top_kind_name': 'prefix_function',
          'arguments': [
            {
              'top_operator_name': 'n',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'dummies': [],
          'type': 'string'
        },
        {
          'top_operator_name': '\'not_eliminate\'',
          'top_kind_name': 'constant',
          'arguments': [],
          'dummies': [],
          'type': 'string'
        }
      ],
      'dummies': [],
      'type': 'boolean'
    },
    'description': 'Whether line n proves a contradiction'
  },
  {
    'name': 'needs_false',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'boolean'
      }
    ],
    'definition': {
      'top_operator_name': 'equals',
      'top_kind_name': 'binary_relation',
      'arguments': [
        {
          'top_operator_name': 'template',
          'top_kind_name': 'prefix_function',
          'arguments': [
            {
              'top_operator_name': 'n',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'dummies': [],
          'type': 'string'
        },
        {
          'top_operator_name': '\'contradiction_eliminate\'',
          'top_kind_name': 'constant',
          'arguments': [],
          'dummies': [],
          'type': 'string'
        }
      ],
      'dummies': [],
      'type': 'boolean'
    },
    'description': 'Whether line n assumes a contradiction has been proved'
  },
  {
    'name': 'is_implication',
    'variables': [
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'R',
        'arguments': [],
        'dummies': []
      },
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'S',
        'arguments': [],
        'dummies': []
      },
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'm',
        'arguments': [],
        'dummies': []
      },
      {
        'top_kind_name': 'variable',
        'top_operator_name': 'n',
        'arguments': [],
        'dummies': []
      }
    ],
    'typing': [
      {
        'arguments': [
          {
            'type': 'formula',
            'arbitrarily_many': false
          },
          {
            'type': 'formula',
            'arbitrarily_many': false
          },
          {
            'type': 'integer',
            'arbitrarily_many': false
          },
          {
            'type': 'integer',
            'arbitrarily_many': false
          }
        ],
        'dummies': [],
        'output': 'boolean'
      }
    ],
    'definition': {
      'top_operator_name': 'and',
      'top_kind_name': 'binary_connective',
      'arguments': [
        {
          'top_operator_name': 'less_than',
          'top_kind_name': 'binary_relation',
          'arguments': [
            {
              'top_operator_name': 'm',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            },
            {
              'top_operator_name': 'n',
              'top_kind_name': 'variable',
              'arguments': [],
              'dummies': [],
              'type': 'integer'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        },
        {
          'top_operator_name': 'and',
          'top_kind_name': 'binary_connective',
          'arguments': [
            {
              'top_operator_name': 'greater_than',
              'top_kind_name': 'binary_relation',
              'arguments': [
                {
                  'top_operator_name': 'indentation',
                  'top_kind_name': 'prefix_function',
                  'arguments': [
                    {
                      'top_operator_name': 'n',
                      'top_kind_name': 'variable',
                      'arguments': [],
                      'dummies': [],
                      'type': 'integer'
                    }
                  ],
                  'dummies': [],
                  'type': 'integer'
                },
                {
                  'top_operator_name': 0,
                  'top_kind_name': 'constant',
                  'arguments': [],
                  'dummies': [],
                  'type': 'integer'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            },
            {
              'top_operator_name': 'and',
              'top_kind_name': 'binary_connective',
              'arguments': [
                {
                  'top_operator_name': 'or',
                  'top_kind_name': 'binary_connective',
                  'arguments': [
                    {
                      'top_operator_name': 'is_in',
                      'top_kind_name': 'binary_relation',
                      'arguments': [
                        {
                          'top_operator_name': 'S',
                          'top_kind_name': 'variable',
                          'arguments': [],
                          'dummies': [],
                          'type': 'formula'
                        },
                        {
                          'top_operator_name': 'results',
                          'top_kind_name': 'prefix_function',
                          'arguments': [
                            {
                              'top_operator_name': 'n',
                              'top_kind_name': 'variable',
                              'arguments': [],
                              'dummies': [],
                              'type': 'integer'
                            }
                          ],
                          'dummies': [],
                          'type': 'set_of_formulas'
                        }
                      ],
                      'dummies': [],
                      'type': 'boolean'
                    },
                    {
                      'top_operator_name': 'yields_false',
                      'top_kind_name': 'prefix_function',
                      'arguments': [
                        {
                          'top_operator_name': 'n',
                          'top_kind_name': 'variable',
                          'arguments': [],
                          'dummies': [],
                          'type': 'integer'
                        }
                      ],
                      'dummies': [],
                      'type': 'boolean'
                    }
                  ],
                  'dummies': [],
                  'type': 'boolean'
                },
                {
                  'top_operator_name': 'and',
                  'top_kind_name': 'binary_connective',
                  'arguments': [
                    {
                      'top_operator_name': 'equals',
                      'top_kind_name': 'binary_relation',
                      'arguments': [
                        {
                          'top_operator_name': 'template',
                          'top_kind_name': 'prefix_function',
                          'arguments': [
                            {
                              'top_operator_name': 'm',
                              'top_kind_name': 'variable',
                              'arguments': [],
                              'dummies': [],
                              'type': 'integer'
                            }
                          ],
                          'dummies': [],
                          'type': 'string'
                        },
                        {
                          'top_operator_name': '\'assumption\'',
                          'top_kind_name': 'constant',
                          'arguments': [],
                          'dummies': [],
                          'type': 'string'
                        }
                      ],
                      'dummies': [],
                      'type': 'boolean'
                    },
                    {
                      'top_operator_name': 'and',
                      'top_kind_name': 'binary_connective',
                      'arguments': [
                        {
                          'top_operator_name': 'is_in',
                          'top_kind_name': 'binary_relation',
                          'arguments': [
                            {
                              'top_operator_name': 'R',
                              'top_kind_name': 'variable',
                              'arguments': [],
                              'dummies': [],
                              'type': 'formula'
                            },
                            {
                              'top_operator_name': 'results',
                              'top_kind_name': 'prefix_function',
                              'arguments': [
                                {
                                  'top_operator_name': 'm',
                                  'top_kind_name': 'variable',
                                  'arguments': [],
                                  'dummies': [],
                                  'type': 'integer'
                                }
                              ],
                              'dummies': [],
                              'type': 'set_of_formulas'
                            }
                          ],
                          'dummies': [],
                          'type': 'boolean'
                        },
                        {
                          'top_operator_name': 'and',
                          'top_kind_name': 'binary_connective',
                          'arguments': [
                            {
                              'top_operator_name': 'equals',
                              'top_kind_name': 'binary_relation',
                              'arguments': [
                                {
                                  'top_operator_name': 'indentation',
                                  'top_kind_name': 'prefix_function',
                                  'arguments': [
                                    {
                                      'top_operator_name': 'n',
                                      'top_kind_name': 'variable',
                                      'arguments': [],
                                      'dummies': [],
                                      'type': 'integer'
                                    }
                                  ],
                                  'dummies': [],
                                  'type': 'integer'
                                },
                                {
                                  'top_operator_name': 'addition',
                                  'top_kind_name': 'binary_function',
                                  'arguments': [
                                    {
                                      'top_operator_name': 'indentation',
                                      'top_kind_name': 'prefix_function',
                                      'arguments': [
                                        {
                                          'top_operator_name': 'm',
                                          'top_kind_name': 'variable',
                                          'arguments': [],
                                          'dummies': [],
                                          'type': 'integer'
                                        }
                                      ],
                                      'dummies': [],
                                      'type': 'integer'
                                    },
                                    {
                                      'top_operator_name': 1,
                                      'top_kind_name': 'constant',
                                      'arguments': [],
                                      'dummies': [],
                                      'type': 'integer'
                                    }
                                  ],
                                  'dummies': [],
                                  'type': 'integer'
                                }
                              ],
                              'dummies': [],
                              'type': 'boolean'
                            },
                            {
                              'top_operator_name': 'not',
                              'top_kind_name': 'unary_connective',
                              'arguments': [
                                {
                                  'top_operator_name': 'bounded_exists',
                                  'top_kind_name': 'bounded_quantifier',
                                  'arguments': [
                                    {
                                      'top_operator_name': 'less_than',
                                      'top_kind_name': 'binary_relation',
                                      'arguments': [
                                        {
                                          'top_operator_name': 'i',
                                          'top_kind_name': 'variable',
                                          'arguments': [],
                                          'dummies': [],
                                          'type': 'integer'
                                        },
                                        {
                                          'top_operator_name': 'n',
                                          'top_kind_name': 'variable',
                                          'arguments': [],
                                          'dummies': [],
                                          'type': 'integer'
                                        }
                                      ],
                                      'dummies': [],
                                      'type': 'boolean'
                                    },
                                    {
                                      'top_operator_name': 'and',
                                      'top_kind_name': 'binary_connective',
                                      'arguments': [
                                        {
                                          'top_operator_name': 'greater_than',
                                          'top_kind_name': 'binary_relation',
                                          'arguments': [
                                            {
                                              'top_operator_name': 'i',
                                              'top_kind_name': 'variable',
                                              'arguments': [],
                                              'dummies': [],
                                              'type': 'integer'
                                            },
                                            {
                                              'top_operator_name': 'm',
                                              'top_kind_name': 'variable',
                                              'arguments': [],
                                              'dummies': [],
                                              'type': 'integer'
                                            }
                                          ],
                                          'dummies': [],
                                          'type': 'boolean'
                                        },
                                        {
                                          'top_operator_name': 'less_than_or_equals',
                                          'top_kind_name': 'binary_relation',
                                          'arguments': [
                                            {
                                              'top_operator_name': 'indentation',
                                              'top_kind_name': 'prefix_function',
                                              'arguments': [
                                                {
                                                  'top_operator_name': 'i',
                                                  'top_kind_name': 'variable',
                                                  'arguments': [],
                                                  'dummies': [],
                                                  'type': 'integer'
                                                }
                                              ],
                                              'dummies': [],
                                              'type': 'integer'
                                            },
                                            {
                                              'top_operator_name': 'indentation',
                                              'top_kind_name': 'prefix_function',
                                              'arguments': [
                                                {
                                                  'top_operator_name': 'm',
                                                  'top_kind_name': 'variable',
                                                  'arguments': [],
                                                  'dummies': [],
                                                  'type': 'integer'
                                                }
                                              ],
                                              'dummies': [],
                                              'type': 'integer'
                                            }
                                          ],
                                          'dummies': [],
                                          'type': 'boolean'
                                        }
                                      ],
                                      'dummies': [],
                                      'type': 'boolean'
                                    }
                                  ],
                                  'dummies': [
                                    {
                                      'top_operator_name': 'i',
                                      'top_kind_name': 'variable',
                                      'arguments': [],
                                      'dummies': [],
                                      'type': 'integer'
                                    }
                                  ],
                                  'type': 'boolean'
                                }
                              ],
                              'dummies': [],
                              'type': 'boolean'
                            }
                          ],
                          'dummies': [],
                          'type': 'boolean'
                        }
                      ],
                      'dummies': [],
                      'type': 'boolean'
                    }
                  ],
                  'dummies': [],
                  'type': 'boolean'
                }
              ],
              'dummies': [],
              'type': 'boolean'
            }
          ],
          'dummies': [],
          'type': 'boolean'
        }
      ],
      'dummies': [],
      'type': 'boolean'
    },
    'description': 'Whether line n is a proof of S under the assumption of R, made on line m'
  }]
}