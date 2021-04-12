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
      "dark-1": "#2f3541",
      "dark-3": "#566270",
      "light-6": "#333333",
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
  },
  "formField": {
    "border": {
      "color": "brand",
      "style": "hidden",
      "background": "white"
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

  fontFamily: 'Quicksand, sans-serif',
  background: "linear-gradient(102.77deg, #2D00F7-9.18%, #F20089 209.09%)",
  width: '100vw',
  minHeight: '100%',
  color: '#362C63',

}

const headerStyle = {
  fontFamily: 'Kalam, cursive',
  backgroundImage: "url('src/components/header/test.jpeg')",
  fontSize: '30px',
  color: "#362C63",
}

const smallHeaderStyle = {
  fontFamily: 'Kalam, cursive',
  color: '#362C63',
  padding: '5% 0',
}

const formStyle = {
  textTransform: 'uppercase',
  fontWeight: 'bold',
  backgroundColor: '#A593E0',
  margin: '10% 30%',
  color: '#601cff',
  maxWidth: '50%',
  boxShadow: '2px 2px 17px 10px magenta'
}

const aboutStyle = {
  margin: '10% 20%',
  color: '#D4DFE6',
  height: '100%',
  textTransform: 'capitalize'
}

const loginStyle = {
  marginBottom: '20px',
  color: '#FF1D23',
  textTransform: 'none'
}

const cardStyle = {
  padding: '5% 0',
}

const inputStyle = {
  backgroundColor: 'white',
  border: '2px solid magenta',
  margin: '10px 0',
  borderRadius: '10px'
}

const buttonStyle = {
  padding: '2px 10px',
  margin: '5px',
  textTransform: 'uppercase'
}

const boxStyle = {
  minHeight: '250px',
  // textTransform: 'uppercase',
  fontWeight: 'bold',
  margin: '8% 0',
  color: '#D4DFE6',
}

const accountStyle = {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    backgroundColor: '#A593E0',
    margin: '2% 10%',
    color: '#601cff',
    maxWidth: '50%',
    boxShadow: '2px 2px 17px 10px magenta'
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
  boxStyle,
  accountStyle
}



