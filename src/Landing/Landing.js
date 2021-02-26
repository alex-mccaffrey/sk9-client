import React, { Component } from "react";
import LoginForm from "../LoginForm/LoginForm"

export class landing extends Component {
  render() {
    return (
      <div>
        <section>
          <header>
            <h3>Success starts with a solid relationship</h3>
          </header>
          <p>
            A well trained dog is one that that respects their human. A well
            trained human is one that respects their dog. The foundation for
            successfully training a search and rescue dog is having an
            unbreakable bond. From day 1, it is important to track training
            efforts for all aspects of life. Knowing what works and what
            doesn't. Every dog team is different. SK9 provides a resource to
            track your training sessions, from obedience and SAR sessions, to
            random life events that needs arise. This helps focus training
            efforts improve the quality of future training sessions. All of this
            leads to an unbreakable bond and an unstoppable canine.
          </p>
        </section>
        <section>
        <header>
            <h3>Record your sessions</h3>
        </header>
        <p>The key to SAR dog training is to consistently document your progress and pitfalls so that you can recognize patterns. SK9 provides a simple interface to track training sessions to recognize those patterns.</p>
      </section>
      <section><LoginForm /></section>
      </div>
    );
  }
}

export default landing;
