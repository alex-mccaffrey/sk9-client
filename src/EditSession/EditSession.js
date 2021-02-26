import React, { Component } from 'react'

export class EditSession extends Component {
    render() {
        return (
            <div>
               <header>
              <h1>Edit your session</h1>
            </header>
              <form id="new-session">
                <section className="form-section overview-section">
                  <label htmlFor="session-title">Session Title</label>
                  <input type="text" name="session-title" placeholder="Session Title" required />
                </section>
                <section className="form-section overview-section">
                  <label htmlFor="session-summary">Session summary</label>
                  <textarea name="session-summary" rows="15" required></textarea>
                </section>
                <section className="search-time-container form-section">
                  <label htmlFor="distance-searched">Search Distance (miles)</label>
                  <input type="number" name="distance-searched" id="distance-searched" placeholder="1" />
                </section>
                
                <section className="form-section session-type-section">
                  <h2>Select session type</h2>
                  <input type="radio" name="session-type" id="session-type-runaway" value="0" className="session-type-radio" checked />
                  <label htmlFor="session-type-runaway">
                    <span>Runaway</span>
                    <p className="session-type-explanation">These are drills where the dog watches the subject runway and hide / partially hide.</p>
                  </label>
      
                  <input type="radio" name="session-type" id="session-type-blind" value="1" className="session-type-radio" />
                  <label htmlFor="session-type-blind">
                    <span>Blind</span>
                    <p className="session-type-explanation">A subject hides and the dog does not watch the direction they go in or how they are hidden.</p>
                  </label>
      
                  <input type="radio" name="session-type" id="session-type-multiple" value="2" className="session-type-radio" />
                  <label htmlFor="session-type-multiple">
                    <span>Multiple</span>
                    <p className="session-type-explanation">Multiple subjects are hidden during one search.</p>
                  </label>
      
                </section>
      
                <section className="form-section">
                  <label className="dream-date-label" htmlFor="date-month">Date of Session</label>
                  <input type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" required="" /> .
                  <input type="number" name="date-day" className="date-day"  placeholder="01" min="1" max="31" required="" /> .
                  <input type="number" name="date-year" className="date-year" placeholder="2017" min="2016" max="2017" required="" />
                </section>
                <section className="button-section">
                  <button type="submit">Submit</button>
                  <button type="reset">Reset</button>
                </section>
              </form>
            </div>
        )
    }
}

export default EditSession
