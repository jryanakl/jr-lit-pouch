/**
 * Logger
 * 
 * @description
 * -pretty print to console
 * 
 * @link
 * https://css-tricks.com/a-guide-to-console-commands/#aa-styling-the-output
 * https://github.com/yairEO/console-colors
 */

export type JrLoggerStyles = {
  Colors: {
    Black: string;
    Blue: string;
    Darkgreen: string;
    Lightgreen: string;
    Gray: string;
    Green: string;
    Gold: string;
    Red: string;
  },
  Font: {
    Sm:  string;
    Md:  string;
    Lg:  string;
  },
};

export default class JrLogger  {
  static Font: JrLoggerStyles['Font'] = {
    Sm: 'font-size: 12px;',
    Md: 'font-size: 14px;',
    Lg: 'font-size: 16px;'
  };

  static Colors: JrLoggerStyles['Colors'] = {
    Black: 'color: black',
    Blue: 'color: dodgerblue',
    Darkgreen: 'color: darkgreen',
    Lightgreen: 'color: lightgreen',
    Gray: 'color: gray',
    Green: 'color: green;',
    Gold: 'color: gold',
    Red: 'color: red;'
  };
  
  static logClass(className: string) {
    console.log(`%c${className}`, `${JrLogger.Font.Lg} ${JrLogger.Colors.Lightgreen}`);
  }

  static logComponent(fileName: string) {
    console.log(`%c--${fileName}--`, `${JrLogger.Font.Lg} ${JrLogger.Colors.Blue}`);
  }

  static logError(message: string, ...args: any) {
    console.log(`%cError:`, `${JrLogger.Font.Lg} ${JrLogger.Colors.Red}`);
    console.error(message, ...args);
  }

  static logMethod(methodName: string, data: Object) {
    console.log(`%c${methodName}`, `${JrLogger.Font.Md} ${JrLogger.Colors.Gray}`);

    if (data) {
      console.log(data);
    }
  }

  static logService(fileName: string){
    console.log(`%c${fileName}`, `${JrLogger.Font.Lg} ${JrLogger.Colors.Darkgreen}`)
  }

  static jsonFilter(node: Object) {
    return JSON.stringify(node, null, 2)
  }
}
