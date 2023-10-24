

export default function Guess() {
  return (
    <>
      <h1>
        <u>Guess</u>
      </h1>
      <form action="">
        {/* <!-- <label for="winner-guess" class="form-label">Winner:</label> -->
            <!-- <input class="form-control" list="winner-list" name="winner-guess" id="winner-guess">
            <datalist id="winner-list">
              <option value="D"></option>
              <option value="R"></option>
              <option value="I"></option>
            </datalist> --> */}

        <label for="winner-guess" class="form-label">
          Winner:
        </label>
        <br />
        <select
          class="form-select menu-input"
          name="winner-guess"
          id="winner-guess"
          data-bs-toggle="tooltip"
          title="Which party won?"
        >
          {/* <!-- <option selected>Winner</option> --> */}
          <option value="D">D</option>
          <option value="R">R</option>
          <option value="I">I</option>
        </select>
        <br />
        <label for="date-guess" class="form-label">
          Date:
        </label>
        <div class="form-floating">
          {/* <!-- <label for="date-guess" class="form-label">Date:</label> --> */}
          <input
            type="number"
            class="menu-input"
            name="date-guess"
            id="date-guess"
            min="1900"
            max="2022"
            step="1"
            placeholder="Date"
            data-bs-toggle="tooltip"
            title="When was the election?"
          />
        </div>
        <label for="margin-guess" class="form-label">
          Margin:
        </label>
        <div class="form-floating">
          <input
            type="number"
            class="menu-input"
            name="margin-guess"
            id="margin-guess"
            min="0.0"
            max="100.0"
            step="0.1"
            placeholder="Margin"
            data-bs-toggle="tooltip"
            title="By how much did they win?"
          />
        </div>
        <div class="container-fluid">
          <div class="text-center">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
