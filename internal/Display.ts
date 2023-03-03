export default class Display {
  print(output: string) {
    // Write TypeScript code!
    const appDiv: HTMLElement = document.getElementById('app');
    appDiv.innerHTML = output;
  }
}
