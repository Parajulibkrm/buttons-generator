export const buttons = [
    {
        name: 'normal',
        styles: `button.normal {
            width: 120px;
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
        name: 'shadow',
        styles: `button.shadow {
            width: 120px;
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
        name: 'notion',
        styles: `button.notion {
            width: 120px;
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
        name: 'windows',
        styles: `button.cyberpunk {
            width: 120px;
            height: 40px;
            color: #fff;
            border: none;
            outline: none;
            background-color: #e11d48;
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: 0.05em;
            box-shadow: 6px -2px 0px 0px #7dd3fc;
            cursor: pointer;
            transition: .3s ease;
          }
          
          button.cyberpunk:hover {
            background-color: #7dd3fc;
            color: #e11d48;
            box-shadow: none;
          }`
    }
]

