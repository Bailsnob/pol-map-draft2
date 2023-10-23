"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from "react";

export default function Home() {
  const minDateRef = useRef();
  const maxDateRef = useRef();
  const minMovRef = useRef();
  const maxMovRef = useRef();
  const movMoeRef = useRef();
  const dateMoeRef = useRef();
  return (
    <div className={styles.gridContainer}>
      <div className={styles.sideMenu}>
      <div class="container-fluid">
          <div class="row">
            <div class="col-6">
              <h1><u>Settings</u></h1>
              <label for="state-restriction" class="form-label">States:</label>
              <br />
              <select
                class="form-select menu-input"
                name="state-restriction"
                id="state-restriction"
                data-bs-toggle="tooltip"
                title="What states do you want to use?"
                multiple
              >
                {/* <!-- <option selected>Winner</option> --> */}
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <label for="date-minimum" class="form-label">Min Date:</label>
              <br />
              <div class="form-floating">
                {/* <!-- <label for="date-guess" class="form-label">Date:</label> --> */}
                <input
                  type="number"
                  class="menu-input"
                  name="date-minimum"
                  id="date-minimum"
                  min="1932"
                  max="2020"
                  step="4"
                  placeholder="Date"
                  data-bs-toggle="tooltip"
                  title="When is the lowest date you want to use?"
                  ref={minDateRef}
                />
              </div>
              <label for="date-maximum" class="form-label">Max Date:</label>
              <br />
              <div class="form-floating">
                {/* <!-- <label for="date-guess" class="form-label">Date:</label> --> */}
                <input
                  type="number"
                  class="menu-input"
                  name="date-maximum"
                  id="date-maximum"
                  min="1900"
                  max="2022"
                  step="1"
                  placeholder="Date"
                  data-bs-toggle="tooltip"
                  title="When is the highest date you want to use?"
                  ref={maxDateRef}
                />
              </div>
            </div>
            <div class="col-6">
              <label for="MOV-minimum" class="form-label">Min MOV:</label>
              <div class="form-floating">
                <input
                  type="number"
                  class="menu-input"
                  name="MOV-minimum"
                  id="MOV-minimum"
                  min="0.0"
                  max="100.0"
                  step="0.1"
                  placeholder="MOV"
                  data-bs-toggle="tooltip"
                  title="What is the lowest margin of victory you want to use?"
                  ref={minMovRef}
                />
              </div>
              <label for="MOV-maximum" class="form-label">Max MOV:</label>
              <div class="form-floating">
                <input
                  type="number"
                  class="menu-input"
                  name="MOV-maximum"
                  id="MOV-maximum"
                  min="0.0"
                  max="100.0"
                  step="0.1"
                  placeholder="MOV"
                  data-bs-toggle="tooltip"
                  title="What is the highest margin of victory you want to use?"
                  ref={maxMovRef}
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <label for="MOV-MOE" class="form-label">MOV-MOE:</label>
              <div class="form-floating">
                <input
                  type="number"
                  class="menu-input"
                  name="MOV-MOE"
                  id="MOV-MOE"
                  min="0.0"
                  max="100.0"
                  step="0.1"
                  placeholder="MOE"
                  data-bs-toggle="tooltip"
                  title="How far should your margin of victory guess be from the correct answer to be accepted?"
                  ref={movMoeRef}
                />
              </div>
            </div>
            <div class="col-6">
              <label for="date-MOE" class="form-label">Date MOE:</label>
              <div class="form-floating">
                <input
                  type="number"
                  class="menu-input"
                  name="date-MOE"
                  id="date-MOE"
                  min="0.0"
                  max="100.0"
                  step="0.1"
                  placeholder="MOE"
                  data-bs-toggle="tooltip"
                  title="How far should your date guess be from the correct answer to be accepted?"
                  ref={dateMoeRef}
                />
              </div>
            </div>
            <br />
            <div class="col-6">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainPanel}>
          {/* <Image
            src="/Nevada.png"
            alt="Picture of the author"
            fill
            style={{ objectFit: "contain" }}
          /> */}
      </div>
    </div>
  );
}
