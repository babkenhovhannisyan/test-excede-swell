import swell from "swell-js";

swell.init(
  process.env.GATSBY_PUBLIC_SWELL_STORE_ID,
  process.env.GATSBY_PUBLIC_SWELL_PUBLIC_KEY
);

export default swell;
