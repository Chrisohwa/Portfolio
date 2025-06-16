import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
  "3xl": "1636px",
};

export const customTheme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  breakpoints,
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            bg: "blue",
            borderColor: "blue",
          },
        },
      },
    },
    Radio: {
      variants: {
        primary: {
          control: {
            borderColor: "#242628",
            _checked: {
              borderColor: "red",
              bg: "red",
            },
          },
        },

        admin: {
          control: {
            borderColor: "#0D0718",
            _checked: {
              borderColor: "#0D0718",
              bg: "#0D0718",
            },
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Switch: {
      variants: {
        primary: {
          container: {
            border: "2px solid #C4C6C8",
            rounded: "full",
            _checked: {
              border: "2px solid #080761",
            },
          },
          thumb: {
            bg: "#C4C6C8",
            _checked: {
              bg: "#080761",
            },
          },
          track: {
            bg: "transparent",
          },
        },

        adminPrimary: {
          container: {
            border: "2px solid #C4C6C8",
            rounded: "full",
            _checked: {
              border: "2px solid #0D0718",
            },
          },
          thumb: {
            bg: "#C4C6C8",
            _checked: {
              bg: "#0D0718",
            },
          },
          track: {
            bg: "transparent",
          },
        },
      },

      defaultProps: {
        variant: "primary",
      },
    },
    Input: {
      variants: {
        primary: {
          field: {
            bgColor: "#fff",
            borderRadius: "4px",
            color: "#000",
            _placeholder: {
              color: "gray",
            },
          },
        },
        alternate: {
          field: {
            bgColor: "#F2F2F2",
            border: "1px solid #E0E0E0",
            borderRadius: "5px",
            color: "#000",
            _placeholder: {
              color: "#333333",
              fontSize: "13px",
            },
          },
        },
        secondary: {
          field: {
            bgColor: "#F2F2F2",
            borderRadius: "4px",
            color: "#000",
            _placeholder: {
              color: "#BDBDBD",
            },
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Select: {
      variants: {
        primary: {
          field: {
            bgColor: "#F1EBF9",
            borderRadius: "10px",
            cursor: "pointer",
          },
        },
        secondary: {
          field: {
            rounded: "full",
            borderRadius: "10px",
            cursor: "pointer",
            bg: "#fafafa",
            border: "1px solid #E0E0E0",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Textarea: {
      variants: {
        primary: {
          bg: "#f2f2f2",
          color: "#000",
          borderRadius: "10px",
          _placeholder: {
            color: "#BDBDBD",
          },
        },
        secondary: {
          bg: "#fff",
          color: "#000",
          border: "1px solid gray",
          _placeholder: {
            color: "#BDBDBD",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            label: {
              color: "#C4C4C4",
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          border: "none",
          bgColor: "blue",
          borderRadius: "8px",
          color: "#fff",
          transition: ".3s ease-in-out",
          fontSize: "14px",
          fontWeight: "700",
          _hover: {
            opacity: 0.9,
          },
          _disabled: {
            _hover: {
              border: "1px solid #7B47CC",
              color: "red",
            },
          },
        },
        alternate: {
          border: "none",
          bgColor: "transparent",
          color: "blue",
          borderRadius: "none",
          transition: ".3s ease-in-out",
          fontSize: "14px",
          fontWeight: "700",
          _hover: {
            opacity: 0.9,
          },
          _disabled: {
            _hover: {
              border: "1px solid #7B47CC",
              color: "red",
            },
          },
        },
        secondary: {
          bgColor: "#C2C7D0",
          color: "#010C03",
          fontWeight: "500",
          fontSize: "14px",
          transition: ".3s ease-in-out",
          _hover: {
            opacity: 0.9,
          },
          _disabled: {
            _hover: {
              border: "1px solid #F3C948",
              color: "orangeColor",
            },
          },
        },
        tertiary: {
          bgColor: "transparent",
          color: "#A11212",
          border: "1px solid #A11212",
          fontWeight: "600",
          borderRadius: "8px",
          fontSize: "14px",
          transition: ".3s ease-in-out",
          _hover: {
            opacity: 0.9,
          },
          _disabled: {
            _hover: {
              border: "1px solid #F3C948",
              color: "orangeColor",
            },
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
  },

  colors: {
    red: "#EE383A",
    blue: "#01ACF0",
    dark: "#0D0718",
  },
});
