import { deepFreeze, deepMerge } from "grommet/utils"

export const customTheme = deepFreeze(
  {
  "global": {
    "colors": {
      "active": "#ede4fc",
      "black": "#555555",
      "brand": "#601cff",
      "focus": "#8548e7",
      "placeholder": "#ede4fc",
      "white": "#EDEDED",
      "accent-1": "#FD6FFF",
      "accent-2": "#bb99f2",
      "accent-3": "#894ee8",
      "accent-4": "#615DF7",
      "status-critical": "#FF1D23",
      "status-error": "#ec162f",
      "status-warning": "#1608ff",
      "status-ok": "#18ce00"
    },
    "control": {
      "border": {
        "width": "10px"
      }
    },
    "font": {
      "size": "20px",
      "height": "28px"
    },
    "input": {
      "padding": "25px"
    }
  },
  "button": {
    "padding": {
      "vertical": "12px",
      "horizontal": "28px"
    }
  }
}
)
      
const customFocus = deepMerge(customTheme, {
  global: {
    colors: {
      focus: 'transparent',
    },
    font: {
      "size": "30px",
    },
  },
});

const bodyStyle = {

  // fontFamily: 'Parisienne, cursive',
  background: "linear-gradient(102.77deg, #2D00F7-9.18%, #F20089 209.09%)",
  width: '100vw',
  height: '100%',
  color: '#362C63',
}

const headerStyle = {
  fontFamily: 'Kalam, cursive',
  backgroundColor: 'white',
  fontSize: '30px',
  color: "#362C63"
}

const smallHeaderStyle = {
  fontFamily: 'Kalam, cursive',
  color: '#362C63',
  padding: '5% 0',
}

const formStyle = {
  textTransform: 'uppercase',
  fontWeight: 'bold',
  backgroundColor: '#2f3541',
  margin: '10% 0',
  color: '#D4DFE6',
}

const aboutStyle = {
  margin: '10% 20%',
  color: '#D4DFE6',
  height: '100%'
}

const loginStyle = {
  marginBottom: '20px',
  color: '#FF1D23',
  textTransform: 'none'
}

const cardStyle = {
  backgroundColor: '#DADADA',
  color: '#362C63',
  padding: '5% 0',
}

const inputStyle = {
  backgroundColor: 'white',
  border: '1px solid #601cff',
  margin: '10px 0',
  borderRadius: '10px'
}

const buttonStyle = {
  padding: '2px 10px',
  margin: '2px 5px',
  textTransform: 'uppercase'
}

const boxStyle = {
  minHeight: '250px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  margin: '10% 0',
  color: '#D4DFE6',
}

export {
  bodyStyle,
  headerStyle,
  smallHeaderStyle,
  customFocus,
  formStyle,
  aboutStyle,
  loginStyle,
  cardStyle,
  inputStyle,
  buttonStyle,
  boxStyle
}



