export const buttons = [
    { 
        id: 1,
        name: 'normal',
        button: 'Button Normal',
        styles: `button.normal {
            width: 140px;
            height: 40px;
            border: 2px solid #000;
            font-weight: bold;
            background-color: transparent;
            transition: .3s ease;
            outline: none;
            cursor: pointer;
          }
          
          button.normal:hover {
            background-color: #000;
            color: #fff;
          }`
    },
    {
        id: 2,
        name: 'shadow',
        button: 'Button with Shadow',
        styles: `button.shadow {
            width: 140px;
            height: 40px;
            border: none;
            outline: none;
            color: #fff;
            font-weight: bold;
            background-color: #f87171;
            box-shadow: 0px 4px 6px -1px #dc2626;
            transition: .3s ease;
            cursor: pointer;
          }
          
          button.shadow:hover {
            box-shadow: 0 10px 15px -3px #dc2626, 0 4px 6px -4px #dc2626;
          }
          `
    },
    {
        id: 3,
        name: 'notion',
        button: 'Button Notion Style',
        styles: `button.notion {
            width: 140px;
            height: 40px;
            border: 2px solid #000;
            box-shadow: 4px -2px 0px 0px;
            font-weight: bold;
            transition: .3s ease;
            cursor: pointer;
          }
          
          button.notion:hover {
            box-shadow: none;
          }`
    },
    {
        id: 4,
        name: 'windows',
        button: 'Button Windows Vista',
        styles: `button.windows {
          width: 140px;
          height: 40px;
          font-weight: 600;
          border-top: 2px solid #fff;
          border-left: 2px solid #fff;
          border-bottom: 2px solid #000;
          border-right: 2px solid #000;
          background-color: #d1d5db;
          transition: .3s ease;
          cursor: pointer;
        }
        
        button.windows:active {
          box-shadow: 0 1px 2px 0 #000;
        }`
    },
    {
      id: 5,
      name: 'cyberpunk',
      button: "Button Cyberpunk",
      styles: `button.cyberpunk {
        width: 140px;
        height: 40px;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 0.05em;
        background-color: #e11d48;
        border: none;
        outline: none;
        box-shadow: 4px -2px 0px 0px #7dd3fc;
        transition: .3s ease;
        cursor: pointer;
      }
      
      button.cyberpunk:hover {
        box-shadow: none;
        background-color: #7dd3fc;
        color: #e11d48;
      }`
    },
    {
      id: 6,
      name: 'btn-scale',
      button: 'Button with Scale effect',
      styles: `button.scale-btn {
        width: 140px;
        height: 40px;
        border: none;
        outline: none;
        font-weight: bold;
        background-color: #3e9fee;
        color: #fff;
        cursor: pointer;
        transition: .4s ease;
      }
      
      button.scale-btn:hover {
        transform: scale(0.8);
        border: 2px solid #3e9fee;
        color: #3e9fee;
        background-color: #fff;
      }`
    },
    {
      id: 7,
      name: 'btn-rounded',
      button: 'Rounded/Rect Borders',
      styles: `button.btn-rounded {
        width: 140px;
        height: 40px;
        background-color: transparent;
        border: 2px solid #000;
        border-radius: 10px;
        outline: none;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        transition: all .3s ease;
      }
      
      button.btn-rounded:hover {
        border-radius: 0px;
        background-color: #000;
        color: #fff;
        border: 4px solid #fff;
      }`
    }
]

