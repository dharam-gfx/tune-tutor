import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require( "tailwindcss/lib/util/flattenColorPalette" );
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addVariablesForColors],
};
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors( { addBase, theme }: any ) {
  let allColors = flattenColorPalette( theme( "colors" ) );
  let newVars = Object.fromEntries(
    Object.entries( allColors ).map( ( [key, val] ) => [`--${key}`, val] )
  );

  addBase( {
    ":root": newVars,
  } );
}
export default config;
