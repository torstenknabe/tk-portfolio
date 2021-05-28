import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <div class="int">
        <div class="wrapper" id="wrapper">
          <div class="main-content">
            <main id="main">
              <div class="hero-container">
                <h1 class="title-text"><span class="text-holder">${entry.getIn(["data", "title"], null)}</span></h1>
              </div>
              <section class="base-section">
                <div class="container">
                  ${this.props.widgetFor("body")}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    `;
  }
});

export default Page;
