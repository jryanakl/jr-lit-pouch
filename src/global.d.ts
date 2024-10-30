// globals.d.ts
export { };

declare global {
  interface Window {
    Buffer: typeof Buffer;
    process: typeof process;
    app: any; // Define the type of app based on your requirements
  }
}
