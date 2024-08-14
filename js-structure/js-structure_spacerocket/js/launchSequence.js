// Implement the launch sequence function here and export it as the default export.

import { NFSAT } from "./payload/satellites.js";
import { FISHSAT } from "./payload/satellites.js";
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

// step 0: create + export default launch function
export default function launch() {
  // step 1: load payload
  loadPayload(NFSAT);
  loadPayload(FISHSAT);

  // step 2: load fuel
  fuel();

  // step 3: start countdown
  for (let i = 0; i < 5; i++) {
    countdown(5);
  }

  // step 4: liftoff
  liftoff();

  // steps 5: deploy payload
  deployPayload();
}
