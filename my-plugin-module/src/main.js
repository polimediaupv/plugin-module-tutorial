
import ExampleButtonPlugin from "./es.upv.paella.exampleButtonPlugin";

export { ExampleButtonPlugin };

export const examplePlugins = [
  {
    plugin: ExampleButtonPlugin,
    config: {
      enabled: true,
      side: "right"
    }
  }
]
